/*
 * 雅思写作逐句批改批注引擎 (IELTS Writing Sentence-level Feedback)
 * ----------------------------------------------------------------------------
 * 纯逻辑模块（无 DOM 依赖），可在浏览器与 Node 中运行，便于单元测试。
 *
 * 输入 analyze(text, taskType) →
 *   { paragraphs: [{ text, sentences:[{ text, annotations:[{type,severity,tip}] }] }], totalAnnotations }
 *
 * 批注维度（基于规则的启发式，非语法树解析）：
 *   - vocab      词汇升级建议（基础词→学术/高级替换）
 *   - expression 地道表达建议（very+adj、in my opinion 等）
 *   - grammar    语法弱信号（主谓一致、流水句、过长句）
 *   - coherence  连贯建议（非首句缺衔接/指代）
 *   - praise     正向反馈（复合句 / 高级词）
 *
 * ⚠️ 诚实声明：本引擎基于正则与词典的「启发式提示」，不能替代人工批改或考官评分，
 *   无法识别所有语法/逻辑/论证问题；仅作为写作自评的辅助参考。
 */
(function (global) {
  'use strict';

  // 用于「表扬」检测的高级/学术词（高频子集）
  var ADVANCED = ['significant', 'crucial', 'beneficial', 'inevitable', 'consequently', 'nevertheless',
    'moreover', 'furthermore', 'sustainable', 'comprehensive', 'mitigate', 'vulnerable', 'substitute',
    'distinct', 'implement', 'accumulate', 'proportion', 'restrict', 'correlation', 'inequality',
    'fundamental', 'simultaneous', 'contemporary', 'prevalent', 'paramount', 'adequate', 'feasible',
    'notion', 'realm', 'sphere', 'contradict', 'undermine', 'reinforce', 'deteriorate', 'flourish'];

  // 基础词 → 升级建议
  var UPGRADES = {
    good: 'beneficial / positive', bad: 'detrimental / adverse', important: 'crucial / significant',
    big: 'considerable / substantial', small: 'minimal / marginal', many: 'a large number of / numerous',
    'a lot of': 'a considerable amount of', few: 'a small number of', people: 'individuals / the public',
    think: 'argue / believe / contend', show: 'demonstrate / illustrate', use: 'utilize / employ',
    help: 'facilitate / assist', get: 'obtain / achieve', make: 'produce / generate',
    problem: 'issue / challenge', advantage: 'benefit / merit', disadvantage: 'drawback / demerit',
    also: 'moreover / furthermore', but: 'however / nevertheless', so: 'therefore / consequently',
    thing: 'aspect / factor', stuff: 'material / items', kids: 'children', 'more and more': 'increasingly',
    now: 'currently / at present', because: 'owing to the fact that', very: '__VERY__'
  };

  // 地道表达短语建议
  var PHRASE_TIPS = [
    { re: /\bvery (important|good|big|bad|difficult|useful|common|popular|large|small)\b/, tip: 'very + 形容词偏基础，可改用 of paramount importance / highly beneficial / a considerable challenge 等更精确表达。' },
    { re: /\bin my opinion\b/, tip: '可升级为 from my perspective / it is my view that，更学术客观。' },
    { re: /\bi think\b/, tip: '论证中可改为 I would argue / It can be argued that，语气更客观。' },
    { re: /\ba lot of\b/, tip: 'a lot of 偏口语，学术写作建议 a considerable number of / a significant amount of。' },
    { re: /\bmore and more\b/, tip: '可改为 increasingly，更书面。' },
    { re: /\bnowadays\b/, tip: '可用 in contemporary society / at present 替代，更正式。' }
  ];

  // 第三人称单数 + 动词原形（主谓一致弱信号）
  var BASE_VERBS = ['go', 'like', 'have', 'do', 'make', 'take', 'want', 'need', 'live', 'work', 'study',
    'play', 'eat', 'get', 'give', 'come', 'become', 'seem', 'feel', 'look', 'know', 'think', 'believe',
    'say', 'find', 'use', 'help', 'try', 'watch', 'read', 'write', 'speak'];

  var CONNECTORS = ['however', 'moreover', 'furthermore', 'therefore', 'consequently', 'in addition',
    'for example', 'for instance', 'although', 'though', 'whereas', 'while', 'because', 'since', 'thus',
    'in contrast', 'on the one hand', 'on the other hand', 'firstly', 'first', 'secondly', 'second',
    'finally', 'in conclusion', 'to sum up', 'similarly', 'likewise', 'nevertheless'];

  function tokenize(text) {
    if (!text) return [];
    var m = text.toLowerCase().replace(/’/g, "'").match(/[a-z']+/g);
    return m || [];
  }
  function splitSentences(text) {
    if (!text) return [];
    return text.split(/[.!?]+/).map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 0; });
  }

  function analyzeSentence(s, isFirst) {
    var lower = ' ' + s.toLowerCase() + ' ';
    var tokens = tokenize(s);
    var annotations = [];

    // 正向反馈
    var hasSub = /(because|although|though|if|when|while|whereas|since|which|who|that|what|whether|despite|even though|so that)/.test(lower);
    var hasAdv = ADVANCED.some(function (w) { return lower.indexOf(' ' + w + ' ') >= 0; });
    if (hasSub && tokens.length > 6) annotations.push({ type: 'praise', severity: 'good', tip: '很好的复合句结构，体现语法多样性。' });
    else if (hasAdv) {
      var advHit = ADVANCED.filter(function (w) { return lower.indexOf(' ' + w + ' ') >= 0; })[0];
      annotations.push({ type: 'praise', severity: 'good', tip: '用词地道（' + advHit + '），体现词汇资源。' });
    }

    // 词汇升级
    Object.keys(UPGRADES).forEach(function (k) {
      if (k === 'very') return;
      var re = new RegExp('\\b' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b');
      if (re.test(lower)) annotations.push({ type: 'vocab', severity: 'suggestion', tip: '“' + k + '”可升级为 ' + UPGRADES[k] + '，提升词汇精准度。' });
    });
    if (/\bvery (important|good|big|bad|difficult|useful|common|popular|large|small)\b/.test(lower)) {
      annotations.push({ type: 'vocab', severity: 'suggestion', tip: 'very + 形容词略显基础，可用 of paramount importance / highly beneficial / a considerable challenge 等更精确表达。' });
    }

    // 地道短语
    PHRASE_TIPS.forEach(function (pt) {
      if (pt.re.test(lower)) annotations.push({ type: 'expression', severity: 'suggestion', tip: pt.tip });
    });

    // 语法弱信号：主谓一致
    [' he ', ' she ', ' it '].forEach(function (pro) {
      BASE_VERBS.forEach(function (v) {
        if (new RegExp(pro + v + '\\b').test(lower) && !new RegExp(pro + v + 's\\b').test(lower) &&
          !new RegExp(pro + v + 'ed\\b').test(lower) && !/been|being/.test(lower) && tokens.length < 40) {
          annotations.push({ type: 'grammar', severity: 'warn', tip: '疑似主谓一致问题：' + pro.trim() + ' 后接动词原形（应为 ' + v + 's），请检查第三人称单数。' });
        }
      });
    });

    // 流水句
    var andN = (s.match(/\band\b/g) || []).length;
    if (andN >= 4) annotations.push({ type: 'grammar', severity: 'warn', tip: '本句 and 连用偏多（' + andN + ' 次），注意避免“流水句”，可用从句或分词结构拆分。' });

    // 过长句
    if (tokens.length > 45) annotations.push({ type: 'grammar', severity: 'suggestion', tip: '本句较长（' + tokens.length + ' 词），注意句内标点与逻辑，避免一处错误影响整句理解。' });

    // 连贯：非首句缺衔接/指代
    if (!isFirst) {
      var firstWord = (tokens[0] || '').toLowerCase();
      var hasConn = CONNECTORS.some(function (c) { return lower.indexOf(' ' + c + ' ') >= 0 || lower.indexOf(' ' + c + 'ly ') >= 0; });
      var ref = /( it | this | these | those | they | them | such | the former | the latter )/.test(lower);
      if (!hasConn && !ref && tokens.length > 5) {
        annotations.push({ type: 'coherence', severity: 'suggestion', tip: '本句以“' + firstWord + '”开头，与前句之间缺少衔接词或指代，可加 however / therefore / in addition 等提升连贯。' });
      }
    }

    return { text: s, annotations: annotations };
  }

  function analyze(text, taskType) {
    text = (text || '').toString().trim();
    if (!text) return { paragraphs: [], empty: true, taskType: taskType, totalAnnotations: 0 };
    var paras = text.split(/\n\s*\n/).map(function (s) { return s.trim(); }).filter(function (s) { return s.length; });
    if (!paras.length) paras = [text];
    var totalAnno = 0;
    var paragraphs = paras.map(function (p) {
      var sents = splitSentences(p);
      if (!sents.length) sents = [p];
      var sentences = sents.map(function (s, i) {
        var a = analyzeSentence(s, i === 0);
        totalAnno += a.annotations.length;
        return a;
      });
      return { text: p, sentences: sentences };
    });
    return { paragraphs: paragraphs, empty: false, taskType: taskType, totalAnnotations: totalAnno };
  }

  var API = { analyze: analyze };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  if (global) global.IELTS_WRITING_FEEDBACK = API;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
