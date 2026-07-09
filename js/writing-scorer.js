/*
 * 雅思写作四项标准评分引擎 (IELTS Writing 4-Criteria Scoring Engine)
 * ----------------------------------------------------------------------------
 * 纯逻辑模块（无 DOM 依赖），可在浏览器与 Node 中运行，便于单元测试。
 *
 * 评分框架严格对应雅思官方写作评分标准：四项各占 25%
 *   1) Task Achievement / Task Response  任务完成 / 任务回应 (TA 或 TR)
 *   2) Coherence and Cohesion            连贯与衔接       (CC)
 *   3) Lexical Resource                  词汇资源         (LR)
 *   4) Grammatical Range and Accuracy    语法多样性与准确性 (GRA)
 * 总分 = 四项平均分，按雅思取整规则（.25→.5，.75→下个整数，其余就近到 0.5）得出。
 *
 * 说明（务必诚实）：
 *   本引擎依据你的作文文本做语言学特征分析（字数、词汇、句式、衔接、任务覆盖等），
 *   方法公开、可复核；但它无法像真人考官那样判断论证深度、逻辑漏洞或语域是否恰当，
 *   因此结果定位为「练习参考」，<b>不能替代雅思考官或写作批改老师的人工评分</b>。
 *   建议结合官方范文与人工反馈持续改进。
 */
(function (global) {
  'use strict';

  // ---------- 词典资源 ----------
  var ADVANCED_WORDS = [
    'sustainable', 'inevitable', 'inevitably', 'consequently', 'nevertheless', 'moreover',
    'furthermore', 'significant', 'significantly', 'crucial', 'beneficial', 'drawback',
    'phenomenon', 'phenomena', 'abundant', 'comprehensive', 'mitigate', 'vulnerable',
    'substitute', 'distinct', 'implement', 'accumulate', 'proportion', 'restrict',
    'correlation', 'inequality', 'paradigm', 'ubiquitous', 'endeavour', 'paramount',
    'albeit', 'notwithstanding', 'thereby', 'intrinsic', 'preclude', 'underscore',
    'facilitate', 'eradicate', 'culminate', 'perpetuate', 'advocate', 'contend',
    'elucidate', 'manifest', 'encompass', 'commensurate', 'deteriorate', 'flourish',
    'scrutinise', 'scrutinize', 'dwindle', 'alleviate', 'bolster', 'deter', 'entail',
    'hitherto', 'derive', 'hinge', 'inclined', 'prioritise', 'prioritize',
    'contradict', 'ambiguity', 'cohesion', 'diversity', 'prosperity', 'resilience',
    'undermine', 'reinforce', 'transform', 'evident', 'notion', 'realm', 'sphere',
    'contemporary', 'conventional', 'fundamental', 'subsequent', 'simultaneous',
    'exacerbate', 'profound', 'inherent', 'predominant', 'plausible', 'tangible'
  ];
  var ADVANCED_PHRASES = [
    'wide range of', 'play a role', 'play an important role', 'broaden one', 'broaden their',
    'broaden my', 'horizons', 'make a difference', 'a means to an end', 'on the whole',
    'by and large', 'to a certain extent', 'from my perspective', 'it is arguable that',
    'there is no denying', 'it goes without saying', 'a double edged sword', 'double edged',
    'weigh the pros and cons', 'strike a balance', 'cope with', 'rely on', 'contribute to',
    'raise awareness', 'pose a threat', 'meet the needs', 'keep pace with', 'take into account',
    'take into consideration', 'place emphasis on', 'gain experience', 'achieve a goal',
    'a sense of belonging', 'in the long run', 'in the short term', 'crux of the matter',
    'a testament to', 'underscore the importance', 'navigate the challenges', 'foster a sense',
    'yield positive', 'exert an influence', 'derive from', 'hinge on', 'be inclined to'
  ];

  // 衔接词 / 话语标记（连贯性）
  var CONNECTORS = [
    'however', 'moreover', 'furthermore', 'therefore', 'consequently', 'in addition',
    'additionally', 'for example', 'for instance', 'such as', 'on the one hand', 'on the other hand',
    'in contrast', 'by contrast', 'although', 'though', 'whereas', 'while', 'because', 'since',
    'as a result', 'thus', 'hence', 'in my opinion', 'from my perspective', 'to be honest',
    'personally', 'firstly', 'first of all', 'first', 'secondly', 'second', 'thirdly', 'third',
    'finally', 'lastly', 'on the whole', 'overall', 'in conclusion', 'to sum up', 'that is to say',
    'in other words', 'in particular', 'specifically', 'namely', 'what is more', 'as well as',
    'in terms of', 'with regard to', 'regarding', 'despite', 'in spite of', 'nevertheless',
    'nonetheless', 'in the same way', 'similarly', 'likewise', 'by comparison'
  ];

  // 从句引导词（语法多样性）
  var SUBORDINATORS = [
    'because', 'although', 'though', 'if', 'when', 'while', 'whereas', 'since', 'that', 'which',
    'who', 'what', 'whether', 'why', 'how', 'after', 'before', 'unless', 'until', 'despite',
    'in order to', 'so that', 'even though', 'even if', 'as soon as', 'whereby', 'once', 'as'
  ];

  // 引用/指代标记（衔接的正面信号：用代词回指避免重复）
  var REFERENCE = [' it ', ' this ', ' these ', ' those ', ' they ', ' them ', ' such ', ' the former ', ' the latter '];

  // Task 1 概览语言（图表/信件需概括趋势而非逐点描述）
  // 注意：仅 "the graph shows" 这类引导语不算 overview，必须出现概括性信号词
  var OVERVIEW_WORDS = [
    'overall', 'in summary', 'to summarise', 'to summarize', 'on the whole', 'in general',
    'it is clear', 'it is evident', 'generally', 'the most', 'the least', 'the highest',
    'the lowest', 'the majority', 'a clear trend', 'overall trend'
  ];

  // Task 2 立场/观点标记
  var POSITION_WORDS = [
    'i believe', 'in my opinion', 'from my perspective', 'my view', 'i think', 'i agree',
    'i disagree', 'this essay will', 'this essay argues', 'this essay discusses', 'personally',
    'i am convinced', 'it is my view', 'the view that', 'i would argue', 'in my view',
    'my stance', 'i strongly believe', 'as far as i am concerned'
  ];

  // 任务要求中的"内容词"（用于覆盖度启发）：剔除常见停用词后取较长词
  var STOPWORDS = {};
  ('a an the to of in on for and or but if whether with as at by from into over under between ' +
    'is are was were be been being do does did doing have has had can could may might will would ' +
    'should shall must this that these those it its your you we they he she them us our their ' +
    'what which who whom whose when where why how there here about than then so such only also ' +
    'not no nor own same too very just can may one two three write describe illustrate summarize ' +
    'summarise give compare contrast explain discuss present show using use used').split(' ').forEach(function (w) { STOPWORDS[w] = 1; });

  // ---------- 工具函数 ----------
  function tokenize(text) {
    if (!text) return [];
    var m = text.toLowerCase().replace(/’/g, "'").match(/[a-z']+/g);
    return m || [];
  }
  function splitSentences(text) {
    if (!text) return [];
    return text.split(/[.!?]+/).map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 0; });
  }
  function countOccurrences(haystackLower, items) {
    var count = 0, found = [];
    items.forEach(function (it) {
      var re = new RegExp('\\b' + it.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'g');
      var ms = haystackLower.match(re);
      if (ms) { count += ms.length; found.push({ word: it, n: ms.length }); }
    });
    return { count: count, found: found };
  }
  function uniqueWords(tokens) {
    var s = {}, u = 0;
    tokens.forEach(function (t) { if (!s[t]) { s[t] = 1; u++; } });
    return u;
  }
  function roundIeltsBand(x) {
    if (!isFinite(x)) return 0;
    var floor = Math.floor(x);
    var frac = x - floor;
    if (frac < 0.25) return floor + 0.0;
    if (frac >= 0.75) return floor + 1.0;
    return floor + 0.5;
  }
  function clampBand(x) { x = Math.round(x * 2) / 2; return Math.max(0, Math.min(9, x)); }

  // 每个分数段对应的官方描述（精简版）
  var BAND_DESC = {
    ta: {
      9: '全面回应任务，覆盖所有要求；立场清晰一贯；概览/论据充分、有洞见。',
      8: '充分回应任务，覆盖全部要求；立场清晰；论证展开充分，偶有细微遗漏。',
      7: '回应任务，覆盖主要要求；立场清晰可辨；论证较充分，偶有偏题或不足。',
      6: '基本回应任务，部分要求覆盖不充分；立场基本可辨，论证有限或举例不足。',
      5: '部分回应任务，偏离或遗漏若干要求；立场模糊；论证单薄、偏题。',
      4: '仅最低限度回应任务，大量遗漏；立场不清或缺失；离题明显。',
      3: '未能恰当回应任务，大量离题或仅重复提示。',
      2: '几乎未回应任务。',
      1: '回答与任务无关。',
      0: '未作答。'
    },
    cc: {
      9: '衔接自如，逻辑推进一目了然；指代与替代运用娴熟。',
      8: '行文连贯，衔接自然；段落与段落间逻辑清晰。',
      7: '逻辑清晰，多用衔接手段；段落组织合理，偶有不当。',
      6: '整体连贯，衔接基本到位；段落划分尚可，偶有断裂。',
      5: '衔接手段有限，段落组织松散；逻辑推进时断时续。',
      4: '衔接混乱，段落不清；读者需费力重组信息。',
      3: '缺乏衔接，几乎无段落组织。',
      2: '无连贯组织。',
      1: '仅单词/短语堆砌。',
      0: '未作答。'
    },
    lr: {
      9: '用词精准自然，习语与搭配地道，极少重复。',
      8: '词汇丰富，能灵活使用不常见词与搭配，偶有不当。',
      7: '词汇量充足，能讨论多数话题，偶有用词不准或重复。',
      6: '词汇足以谈论熟悉话题，但搭配偶有不当、用词偏重复。',
      5: '词汇有限，重复明显，常换说法绕过生词。',
      4: '词汇不足以充分表达，反复使用基础词。',
      3: '仅能使用非常有限的词，词不达意。',
      2: '仅能说出孤立单词。',
      1: '几乎无可用词汇。',
      0: '未作答。'
    },
    gra: {
      9: '语法结构丰富且准确，几乎无错误。',
      8: '多种结构灵活运用，错误极少且不影响理解。',
      7: '能使用多种结构，错误偶发但不影响理解。',
      6: '混合简单与复杂结构，错误时有出现但基本可懂。',
      5: '以简单句为主，复杂句常出错，准确性有限。',
      4: '句型单调，错误频繁，部分影响理解。',
      3: '仅能使用记忆句式，错误严重。',
      2: '几乎无句型控制。',
      1: '除记忆短语外无语法结构。',
      0: '未作答。'
    }
  };
  function descFor(crit, band) {
    var b = Math.max(0, Math.min(9, Math.round(band)));
    return (BAND_DESC[crit] && BAND_DESC[crit][b]) || '';
  }

  // ---------- 四项分析 ----------
  function analyzeTA(metrics, taskType, promptCoverage, hasOverview, hasPosition) {
    var minWords = metrics.minWords;
    var ratio = metrics.wordCount / minWords; // 期望 1.0
    var ta = 6.0;
    if (ratio < 0.5) ta -= 3.0;
    else if (ratio < 0.7) ta -= 2.0;
    else if (ratio < 0.9) ta -= 1.0;
    else if (ratio >= 1.0) ta += 0.5;
    else if (ratio > 2.2) ta -= 0.5; // 过于冗长（可能注水）

    // 任务覆盖度：prompt 内容词在文中命中比例
    ta += (promptCoverage - 0.5) * 2.0;

    // 题型专属要素
    if (taskType === 'Task 1') {
      if (hasOverview) ta += 0.5; else ta -= 1.0;
    } else {
      if (hasPosition) ta += 0.5; else ta -= 1.0;
    }
    ta = clampBand(ta);

    var fb = [];
    if (ratio < 0.9) fb.push((taskType === 'Task 1' ? 'Task 1 要求至少 150 词' : 'Task 2 要求至少 250 词') + '，当前约 ' + metrics.wordCount + ' 词，字数不足会直接影响任务完成度。');
    else if (ratio >= 1.0 && ratio <= 1.6) fb.push('字数达标（约 ' + metrics.wordCount + ' 词），展开充分。');
    else if (ratio > 2.2) fb.push('字数偏长，注意是否出现与主题无关的注水内容。');
    if (promptCoverage < 0.4 && metrics.wordCount > 30) fb.push('对题目要求的覆盖偏弱（约 ' + Math.round(promptCoverage * 100) + '% 的内容关键词在文中出现），建议逐一回应每个子问题。');
    else if (promptCoverage >= 0.7) fb.push('较好地覆盖了题目的关键要求。');
    if (taskType === 'Task 1') {
      if (hasOverview) fb.push('包含图表/数据的概览性总结（overview），符合 Task 1 要求。');
      else fb.push('Task 1 缺少「概览（overall/overview）」——需先用 1-2 句概括整体趋势，而非逐点罗列。');
    } else {
      if (hasPosition) fb.push('有明确的立场/观点表述，符合 Task 2 要求。');
      else fb.push('Task 2 缺少清晰的立场表述——开头段应明确给出你的观点或文章走向。');
    }
    return { band: ta, feedback: fb };
  }

  function analyzeCC(metrics) {
    var paragraphs = metrics.paragraphs;
    var needPara = metrics.taskType === 'Task 1' ? 3 : 4;
    var connDensity = metrics.connectorDensity;
    var refN = metrics.referenceCount;
    var andPerSent = metrics.andCount / Math.max(1, metrics.sentenceCount);

    var cc = 5.5;
    if (paragraphs >= needPara) cc += 1.0;
    else if (paragraphs === needPara - 1) cc += 0.3;
    else cc -= 1.0;
    cc += Math.min(1.5, Math.max(0, connDensity - 2) * 0.18);
    if (refN >= 2) cc += 0.3;
    if (andPerSent >= 2) cc -= 0.5; // 过多 and 连写（流水句）
    cc = clampBand(cc);

    var fb = [];
    if (paragraphs < needPara) fb.push('段落数偏少（当前 ' + paragraphs + ' 段，建议 ' + needPara + ' 段左右：引言/主体/结论），分段更清晰利于连贯。');
    else fb.push('分段清晰（' + paragraphs + ' 段），结构合理。');
    if (connDensity < 2 && metrics.wordCount > 40) fb.push('衔接词偏少（约 ' + Math.round(connDensity) + ' 个/百词），可多用 however / moreover / for example / on the other hand 提升连贯。');
    else if (connDensity >= 5) fb.push('衔接手段丰富（约 ' + Math.round(connDensity) + ' 个/百词），连贯性好。');
    if (refN < 2 && metrics.wordCount > 40) fb.push('指代/替代偏少，可多用 it / this / these / they 回指前文，避免重复名词。');
    if (andPerSent >= 2) fb.push('and 使用偏多，注意避免"流水句"，可改用从句或分词结构。');
    return { band: cc, feedback: fb };
  }

  function analyzeLR(metrics) {
    var advDensity = metrics.advDensity;
    var ttr = metrics.ttr;
    var collocN = metrics.collocN;
    var repeatPenalty = metrics.repeatPenalty;

    var vocabScore = 5.0;
    vocabScore += Math.min(2.5, advDensity * 0.5);
    vocabScore += Math.min(1.0, collocN * 0.25);
    vocabScore += Math.min(1.0, Math.max(0, ttr - 0.45) * 4);
    vocabScore -= repeatPenalty;
    var band = clampBand(vocabScore);
    var fb = [];
    if (metrics.advFound.length) fb.push('使用了高级/学术词汇：' + metrics.advFound.slice(0, 6).join('、') + '。');
    if (collocN > 0) fb.push('出现地道搭配 ' + collocN + ' 处，表达更自然。');
    if (ttr < 0.4 && metrics.wordCount > 40) fb.push('词汇重复偏多（型例比 ' + ttr.toFixed(2) + '），可扩充同义替换。');
    if (advDensity < 0.5 && metrics.wordCount > 40) fb.push('高级/学术词汇偏少，可有意识地加入如 significant / mitigate / nevertheless / comprehensive 等。');
    return { band: band, feedback: fb };
  }

  function analyzeGRA(metrics) {
    var complexRatio = metrics.complexRatio;
    var avgLen = metrics.avgSentenceLen;
    var errRate = metrics.errRate;

    var graScore = 5.0;
    graScore += Math.min(2.5, complexRatio * 4);
    if (avgLen >= 8 && avgLen <= 24) graScore += 0.5;
    graScore -= Math.min(3, errRate * 3);
    var band = clampBand(graScore);
    var fb = [];
    if (complexRatio >= 0.4) fb.push('复合句占比约 ' + Math.round(complexRatio * 100) + '%，语法多样性较好。');
    else if (metrics.sentenceCount > 2) fb.push('复合句偏少（约 ' + Math.round(complexRatio * 100) + '%），可多用 although / whereas / which / that 引导从句。');
    if (errRate > 0.3) fb.push('检测到若干可能的语法问题（主谓一致/句式等），建议复查并对照范文句式。');
    if (metrics.sentenceCount <= 1 && metrics.wordCount > 30) fb.push('几乎全为单一长句，注意句式多样化与断句。');
    return { band: band, feedback: fb };
  }

  // ---------- 主入口 ----------
  function analyze(input) {
    input = input || {};
    var text = (input.text || '').toString().trim();
    var taskType = (input.taskType === 'Task 1' || input.taskType === 'Task 2') ? input.taskType : 'Task 2';
    var prompt = (input.prompt || '').toString();
    var minWords = Number(input.minWords) || (taskType === 'Task 1' ? 150 : 250);

    var tokens = tokenize(text);
    var sentences = splitSentences(text);
    var lower = ' ' + text.toLowerCase() + ' ';
    var wordCount = tokens.length;
    var sentenceCount = sentences.length;
    var paragraphs = text.split(/\n\s*\n/).map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 0; }).length;
    if (paragraphs === 0 && wordCount > 0) paragraphs = 1;

    // 题目覆盖度：prompt 内容词命中
    var promptTokens = tokenize(prompt).filter(function (t) { return t.length >= 4 && !STOPWORDS[t]; });
    var uniqPrompt = {}, pList = [];
    promptTokens.forEach(function (t) { if (!uniqPrompt[t]) { uniqPrompt[t] = 1; pList.push(t); } });
    var hit = 0;
    pList.forEach(function (t) { if (new RegExp('\\b' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b').test(lower)) hit++; });
    var promptCoverage = pList.length ? Math.min(1, hit / pList.length) : 0.5;

    // 题型要素
    var overviewHit = countOccurrences(lower, OVERVIEW_WORDS);
    var hasOverview = overviewHit.count > 0;
    var positionHit = countOccurrences(lower, POSITION_WORDS);
    var hasPosition = positionHit.count > 0;

    // 衔接词
    var conn = countOccurrences(lower, CONNECTORS);
    var connectorDensity = wordCount > 0 ? (conn.count / wordCount) * 100 : 0;
    // 指代
    var refN = 0;
    REFERENCE.forEach(function (r) { if (lower.indexOf(r) >= 0) refN++; });
    // 高级词/短语
    var adv = countOccurrences(lower, ADVANCED_WORDS);
    var advPhrases = countOccurrences(lower, ADVANCED_PHRASES);
    var advTotal = adv.count + advPhrases.count;
    var advDensity = wordCount > 0 ? (advTotal / wordCount) * 100 : 0;
    var advFound = adv.found.map(function (x) { return x.word; }).concat(advPhrases.found.map(function (x) { return x.word; }));
    var collocN = advPhrases.count;
    // 词汇多样性
    var uniq = uniqueWords(tokens);
    var ttr = wordCount > 0 ? uniq / wordCount : 0;
    var freq = {}, repeatN = 0;
    tokens.forEach(function (t) { if (t.length > 3) { freq[t] = (freq[t] || 0) + 1; if (freq[t] === 4) repeatN++; } });
    var repeatPenalty = Math.min(2, repeatN * 0.4);
    // 语法
    var complexN = 0;
    sentences.forEach(function (s) {
      var sl = s.toLowerCase();
      for (var i = 0; i < SUBORDINATORS.length; i++) {
        if (new RegExp('\\b' + SUBORDINATORS[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b').test(sl)) { complexN++; break; }
      }
    });
    var complexRatio = sentenceCount > 0 ? complexN / sentenceCount : 0;
    var avgSentenceLen = sentenceCount > 0 ? wordCount / sentenceCount : 0;
    var andCount = (lower.match(/\band\b/g) || []).length;
    // 错误弱信号：主谓一致（he/she/it + 动词原形）
    var errCount = 0;
    sentences.forEach(function (s) {
      var sl = ' ' + s.toLowerCase() + ' ';
      [' he ', ' she ', ' it '].forEach(function (pro) {
        ['go', 'like', 'have', 'do', 'make', 'take', 'want', 'need', 'live', 'work', 'study',
          'play', 'eat', 'get', 'give', 'come', 'become', 'seem', 'feel', 'look', 'know',
          'think', 'believe', 'say', 'find', 'use', 'help', 'try', 'watch', 'read', 'write', 'speak'].forEach(function (v) {
          if (new RegExp(pro + v + '\\b').test(sl) && !new RegExp(pro + v + 's\\b').test(sl) && !new RegExp(pro + v + 'ed\\b').test(sl) && !/been|being/.test(sl)) errCount++;
        });
      });
      if ((s.match(/\band\b/g) || []).length >= 4) errCount += 0.5;
    });
    var errRate = sentenceCount > 0 ? errCount / sentenceCount : 0;

    var metrics = {
      wordCount: wordCount, sentenceCount: sentenceCount, paragraphs: paragraphs, minWords: minWords,
      taskType: taskType, promptCoverage: promptCoverage,
      connectorDensity: connectorDensity, referenceCount: refN, andCount: andCount,
      advDensity: advDensity, advFound: advFound, collocN: collocN, ttr: ttr, repeatPenalty: repeatPenalty,
      complexRatio: complexRatio, avgSentenceLen: avgSentenceLen, errRate: errRate,
      hasOverview: hasOverview, hasPosition: hasPosition
    };

    var isTask1 = taskType === 'Task 1';
    var critKey = isTask1 ? 'ta' : 'tr';
    var ta = analyzeTA(metrics, taskType, promptCoverage, hasOverview, hasPosition);
    var cc = analyzeCC(metrics);
    var lr = analyzeLR(metrics);
    var gra = analyzeGRA(metrics);

    var raw = (ta.band + cc.band + lr.band + gra.band) / 4;
    var overall = roundIeltsBand(raw);

    return {
      overall: overall,
      rawAverage: Math.round(raw * 100) / 100,
      taskType: taskType,
      criteria: {
        ta: { band: ta.band, label: isTask1 ? '任务完成 (TA)' : '任务回应 (TR)', en: isTask1 ? 'Task Achievement' : 'Task Response', desc: descFor('ta', ta.band), feedback: ta.feedback },
        cc: { band: cc.band, label: '连贯与衔接', en: 'Coherence & Cohesion', desc: descFor('cc', cc.band), feedback: cc.feedback },
        lr: { band: lr.band, label: '词汇资源', en: 'Lexical Resource', desc: descFor('lr', lr.band), feedback: lr.feedback },
        gra: { band: gra.band, label: '语法多样性与准确性', en: 'Grammatical Range & Accuracy', desc: descFor('gra', gra.band), feedback: gra.feedback }
      },
      metrics: metrics,
      text: text,
      prompt: prompt
    };
  }

  var API = {
    analyze: analyze,
    roundIeltsBand: roundIeltsBand,
    bandDesc: descFor,
    BAND_DESC: BAND_DESC
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  if (global) global.IELTS_WRITING_SCORER = API;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
