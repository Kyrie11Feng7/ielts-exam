/*
 * 雅思口语四项标准评分引擎 (IELTS Speaking 4-Criteria Scoring Engine)
 * ----------------------------------------------------------------------------
 * 纯逻辑模块（无 DOM 依赖），可在浏览器与 Node 中运行，便于单元测试。
 *
 * 评分框架严格对应雅思官方口语评分标准：四项各占 25%
 *   1) Fluency and Coherence        流利度与连贯性 (FC)
 *   2) Lexical Resource             词汇资源         (LR)
 *   3) Grammatical Range & Accuracy 语法多样性与准确性 (GRA)
 *   4) Pronunciation                发音             (P)
 * 总分 = 四项平均分，按雅思取整规则（.25→.5，.75→下个整数，其余就近到 0.5）得出。
 *
 * 说明（务必诚实）：
 *   FC / LR / GRA 基于对转写文本的语言学特征分析，方法公开、可复核；
 *   发音(P)无法在前端做可靠的声学分析，本引擎以「语音识别置信度」作为可理解度代理，
 *   并支持用户自测打分，结果标注为「近似」。最终分数定位为「练习参考」，
 *   不能替代雅思考官的人工判定。
 */
(function (global) {
  'use strict';

  // ---------- 词典资源 ----------
  // C1/C2 高级词汇（雅思偏爱）：用于词汇资源评估
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
    'hitherto', 'per', 'se', 'derive', 'hinge', 'inclined', 'prioritise', 'prioritize',
    'contradict', 'ambiguity', 'cohesion', 'diversity', 'prosperity', 'resilience',
    'undermine', 'reinforce', 'transform', 'evident', 'notion', 'realm', 'sphere',
    'contemporary', 'conventional', 'fundamental', 'subsequent', 'simultaneous'
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
    'in other words', 'in particular', 'specifically', 'namely', 'what', 'is more'
  ];

  // 填充词 / 犹豫标记（流利度负面信号）
  var FILLERS = [
    'um', 'uh', 'er', 'erm', 'ah', 'mm', 'hmm', 'you know', 'i mean', 'kind of', 'sort of',
    'like', 'well', 'basically', 'actually', 'literally', 'or something', 'you see', 'i guess',
    'i suppose', 'things like that', 'stuff like that'
  ];

  // 从句引导词（语法多样性）
  var SUBORDINATORS = [
    'because', 'although', 'though', 'if', 'when', 'while', 'whereas', 'since', 'that', 'which',
    'who', 'what', 'whether', 'why', 'how', 'after', 'before', 'unless', 'until', 'despite',
    'in order to', 'so that', 'even though', 'even if', 'as soon as', 'whereby', 'once', 'as'
  ];
  // 第三人称单数 + 动词原形（主谓一致错误的弱信号）
  var BASE_VERBS = [
    'go', 'like', 'have', 'do', 'make', 'take', 'want', 'need', 'live', 'work', 'study',
    'play', 'eat', 'get', 'give', 'come', 'become', 'seem', 'feel', 'look', 'sound', 'know',
    'think', 'believe', 'say', 'find', 'use', 'help', 'try', 'watch', 'read', 'write', 'speak'
  ];

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
  // 雅思总分取整：.25→.5，.75→下个整数，其余就近到 0.5
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
    fc: {
      9: '表达流利，极少犹豫；逻辑衔接自然，几无重复或自我纠正。',
      8: '表达流利，偶尔犹豫多为思考内容而非找词；衔接自然。',
      7: '语速略不均，偶有重复/自我纠正；能使用衔接词，整体连贯。',
      6: '愿意长谈，但偶有犹豫与重复；衔接基本靠简单连接，偶有断裂。',
      5: '通常能持续表达，但常需停顿找词；衔接词少，连贯性一般。',
      4: '能应答但明显停顿多、频繁重复；仅能用简单连接，连贯性差。',
      3: '仅能说出简短句式，长时间停顿；几乎无衔接。',
      2: '除记忆短语外难以连贯表达。',
      1: '几乎无法提取任何连贯语言。',
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
    },
    p: {
      9: '发音接近母语，重音语调自然，完全易懂。',
      8: '口音轻微，个别音可辨但整体清晰流利。',
      7: '口音明显但不影响理解，重音基本正确。',
      6: '有时因发音/重音影响理解，但整体可懂。',
      5: '发音问题较频繁，需集中注意力才能听懂。',
      4: '发音造成严重理解困难，频繁误解。',
      3: '发音极难理解。',
      2: '几乎无法理解。',
      1: '完全无法理解。',
      0: '未作答。'
    }
  };
  function descFor(crit, band) {
    var b = Math.max(0, Math.min(9, Math.round(band)));
    return (BAND_DESC[crit] && BAND_DESC[crit][b]) || '';
  }

  // ---------- 四项分析 ----------
  function analyzeFC(metrics) {
    var wpm = metrics.wpm;
    var fillerRatio = metrics.fillerRatio;            // 0..1
    var connectorDensity = metrics.connectorDensity;  // 每100词衔接词数
    var lenRatio = metrics.lenRatio;                  // 实际长度/期望长度
    var wordCount = metrics.wordCount;

    // 流利度基础分：对语速“容忍”——极慢或极快仅轻微影响，核心看连贯与长度
    var speedScore = 7.0;
    if (wpm > 0) {
      if (wpm < 45) speedScore = 5.5;        // 过慢、明显卡顿
      else if (wpm < 70) speedScore = 6.5;
      else if (wpm <= 190) speedScore = 7.5; // 正常/偏快都算流利
      else speedScore = 6.5;                  // 过快影响清晰度
    } else {
      speedScore = 5.0;
    }

    // 填充词惩罚（犹豫标记）：>3% 开始明显影响
    var fillerPenalty = Math.min(3, Math.max(0, fillerRatio - 0.01) * 20);
    // 衔接奖励（连贯性正面信号）
    var connBonus = Math.min(1.5, Math.max(0, connectorDensity - 2) * 0.18);
    // 长度（展开充分度）
    var lenBonus = 0;
    if (lenRatio >= 0.85) lenBonus = 0.5;
    else if (lenRatio >= 0.5) lenBonus = 0;
    else if (lenRatio > 0) lenBonus = -1.5;

    var band = clampBand(speedScore - fillerPenalty + connBonus + lenBonus);
    var feedback = [];
    if (fillerRatio > 0.03) feedback.push('填充词（um/uh/you know 等）占比约 ' + Math.round(fillerRatio * 100) + '%，略多，建议用衔接词替代停顿。');
    else if (fillerRatio <= 0.01 && wordCount > 20) feedback.push('几乎无填充词，表达干净流利。');
    if (connectorDensity < 2 && wordCount > 30) feedback.push('衔接词偏少，可多用 however / moreover / for example 提升连贯性。');
    else if (connectorDensity >= 5) feedback.push('衔接词使用丰富（约 ' + Math.round(connectorDensity) + ' 个/百词），连贯性好。');
    if (lenRatio < 0.5) feedback.push('作答长度偏短，建议展开理由与例子。');
    if (wpm > 0 && wpm < 60) feedback.push('语速偏慢、停顿较多，可通过练习减少找词时间。');
    return { band: band, feedback: feedback };
  }

  function analyzeLR(metrics) {
    var advDensity = metrics.advDensity;     // 每100词高级词数
    var ttr = metrics.ttr;                   // 型例比
    var collocN = metrics.collocN;           // 搭配命中数
    var repeatPenalty = metrics.repeatPenalty; // 0..~2

    var vocabScore = 5.0;
    vocabScore += Math.min(2.5, advDensity * 0.5);     // 高级词密度
    vocabScore += Math.min(1.0, collocN * 0.25);       // 搭配
    vocabScore += Math.min(1.0, Math.max(0, ttr - 0.45) * 4); // 词汇多样性
    vocabScore -= repeatPenalty;                       // 重复惩罚
    var band = clampBand(vocabScore);
    var feedback = [];
    if (metrics.advFound.length) feedback.push('使用了高级词汇：' + metrics.advFound.slice(0, 6).join('、') + '。');
    if (collocN > 0) feedback.push('出现地道搭配 ' + collocN + ' 处，表达更自然。');
    if (ttr < 0.4 && metrics.wordCount > 40) feedback.push('词汇重复偏多（型例比 ' + ttr.toFixed(2) + '），可扩充同义替换。');
    if (advDensity < 0.5 && metrics.wordCount > 40) feedback.push('高级/学术词汇偏少，可有意识加入如 significant / mitigate / nevertheless 等。');
    return { band: band, feedback: feedback };
  }

  function analyzeGRA(metrics) {
    var complexRatio = metrics.complexRatio; // 0..1
    var avgLen = metrics.avgSentenceLen;
    var errRate = metrics.errRate;           // 每句错误数（弱信号）

    var graScore = 5.0;
    graScore += Math.min(2.5, complexRatio * 4);                 // 复杂句比例
    if (avgLen >= 8 && avgLen <= 22) graScore += 0.5;            // 句子长度适中
    graScore -= Math.min(3, errRate * 3);                        // 错误惩罚
    var band = clampBand(graScore);
    var feedback = [];
    if (complexRatio >= 0.4) feedback.push('复合句占比约 ' + Math.round(complexRatio * 100) + '%，语法多样性较好。');
    else if (metrics.sentenceCount > 2) feedback.push('复合句偏少（约 ' + Math.round(complexRatio * 100) + '%），可多用 although / whereas / which 引导从句。');
    if (errRate > 0.3) feedback.push('检测到若干可能的语法问题（主谓一致/句式等），建议复查。');
    if (metrics.sentenceCount <= 1 && metrics.wordCount > 30) feedback.push('几乎全为单一长句，注意句式多样化。');
    return { band: band, feedback: feedback };
  }

  function analyzeP(metrics) {
    // 发音无可靠前端声学分析：以识别置信度为可理解度代理 + 自测分
    var conf = metrics.confidenceAvg; // 0..1 或 null
    var manual = metrics.manualPron;  // 0..9 或 null
    var wpm = metrics.wpm;
    var feedback = [];
    var band;
    if (typeof manual === 'number' && manual >= 0) {
      band = clampBand(manual);
      feedback.push('（发音为自评得分，建议结合真人/老师核对）');
    } else if (typeof conf === 'number' && conf > 0) {
      // 置信度映射：>=0.92→8.5, 0.85→7.5, 0.78→6.5, 0.7→5.5, 0.6→4.5, 更低→3.5
      var map = [
        [0.92, 8.5], [0.85, 7.5], [0.78, 6.5], [0.70, 5.5], [0.60, 4.5], [0.0, 3.5]
      ];
      band = 3.5;
      for (var i = 0; i < map.length; i++) { if (conf >= map[i][0]) { band = map[i][1]; break; } }
      band = clampBand(band);
      feedback.push('发音以语音识别置信度（' + Math.round(conf * 100) + '%）近似估算，属可理解度代理，非声学判定。');
      if (wpm > 0 && (wpm < 70 || wpm > 200)) feedback.push('语速偏离自然区间，可能影响清晰度。');
    } else {
      band = clampBand(5.0);
      feedback.push('未提供发音数据，发音项按中性估计；可在支持麦克风的设备用录音转写获得近似分，或手动自评。');
    }
    if (band >= 7) feedback.push('整体清晰、可被轻松理解。');
    return { band: band, feedback: feedback };
  }

  // ---------- 主入口 ----------
  function analyze(input) {
    input = input || {};
    var transcript = (input.transcript || '').toString().trim();
    var durationSec = Number(input.durationSec) || 0;
    var part = input.part || 'Part 2';
    var confidenceAvg = (typeof input.confidenceAvg === 'number') ? input.confidenceAvg : null;
    var manualPron = (typeof input.manualPron === 'number') ? input.manualPron : null;

    var tokens = tokenize(transcript);
    var sentences = splitSentences(transcript);
    var lower = transcript.toLowerCase();
    var wordCount = tokens.length;
    var sentenceCount = sentences.length;
    var wpm = (durationSec > 0 && wordCount > 0) ? (wordCount / (durationSec / 60)) : 0;

    // 期望长度（词）：Part1 ~50, Part2 ~220(2分钟), Part3 ~120
    var expectWords = { 'Part 1': 50, 'Part 2': 220, 'Part 3': 120 }[part] || 120;
    var lenRatio = expectWords > 0 ? Math.min(2, wordCount / expectWords) : 1;

    // 填充词
    var filler = countOccurrences(lower, FILLERS);
    var fillerRatio = wordCount > 0 ? filler.count / wordCount : 0;
    // 衔接词
    var conn = countOccurrences(lower, CONNECTORS);
    var connectorDensity = wordCount > 0 ? (conn.count / wordCount) * 100 : 0;
    // 高级词
    var adv = countOccurrences(lower, ADVANCED_WORDS);
    var advPhrases = countOccurrences(lower, ADVANCED_PHRASES);
    var advTotal = adv.count + advPhrases.count;
    var advDensity = wordCount > 0 ? (advTotal / wordCount) * 100 : 0;
    var advFound = adv.found.map(function (x) { return x.word; }).concat(advPhrases.found.map(function (x) { return x.word; }));
    // 搭配（粗略：高级短语中强调搭配的词组）
    var collocN = advPhrases.count;

    // 词汇多样性
    var uniq = uniqueWords(tokens);
    var ttr = wordCount > 0 ? uniq / wordCount : 0;
    // 重复惩罚：出现 >=4 次的内容词
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

    // 错误弱信号
    var errCount = 0;
    // 主谓一致：he/she/it + 动词原形
    sentences.forEach(function (s) {
      var sl = ' ' + s.toLowerCase() + ' ';
      [' he ', ' she ', ' it '].forEach(function (pro) {
        BASE_VERBS.forEach(function (v) {
          if (new RegExp(pro + v + '\\b').test(sl) && !new RegExp(pro + v + 's\\b').test(sl) && !new RegExp(pro + v + 'ed\\b').test(sl)) {
            // 排除进行时 have/has been 等（粗略）
            if (!/been|being/.test(sl)) errCount++;
          }
        });
      });
      // 过多 and 连写（疑似流水句）
      var andN = (s.match(/\band\b/g) || []).length;
      if (andN >= 4) errCount += 0.5;
    });
    var errRate = sentenceCount > 0 ? errCount / sentenceCount : 0;

    var metrics = {
      wordCount: wordCount, sentenceCount: sentenceCount, wpm: wpm, durationSec: durationSec,
      fillerRatio: fillerRatio, connectorDensity: connectorDensity, lenRatio: lenRatio,
      advDensity: advDensity, advFound: advFound, collocN: collocN, ttr: ttr, repeatPenalty: repeatPenalty,
      complexRatio: complexRatio, avgSentenceLen: avgSentenceLen, errRate: errRate,
      confidenceAvg: confidenceAvg, manualPron: manualPron
    };

    var fc = analyzeFC(metrics);
    var lr = analyzeLR(metrics);
    var gra = analyzeGRA(metrics);
    var p = analyzeP(metrics);

    var raw = (fc.band + lr.band + gra.band + p.band) / 4;
    var overall = roundIeltsBand(raw);

    return {
      overall: overall,
      rawAverage: Math.round(raw * 100) / 100,
      criteria: {
        fc: { band: fc.band, label: '流利度与连贯性', en: 'Fluency & Coherence', desc: descFor('fc', fc.band), feedback: fc.feedback },
        lr: { band: lr.band, label: '词汇资源', en: 'Lexical Resource', desc: descFor('lr', lr.band), feedback: lr.feedback },
        gra: { band: gra.band, label: '语法多样性与准确性', en: 'Grammatical Range & Accuracy', desc: descFor('gra', gra.band), feedback: gra.feedback },
        p: { band: p.band, label: '发音', en: 'Pronunciation', desc: descFor('p', p.band), feedback: p.feedback }
      },
      metrics: metrics,
      transcript: transcript,
      part: part
    };
  }

  var API = {
    analyze: analyze,
    roundIeltsBand: roundIeltsBand,
    bandDesc: descFor,
    BAND_DESC: BAND_DESC
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  if (global) global.IELTS_SPEAKING_SCORER = API;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
