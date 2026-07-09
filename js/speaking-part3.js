/*
 * 雅思口语 Part 3 深度追问与拓展生成器 (IELTS Speaking Part 3 Follow-up Generator)
 * ----------------------------------------------------------------------------
 * 纯逻辑模块（无 DOM 依赖），浏览器 + Node 通用。
 *
 * 输入 analyze({ topic, prompt }) → { followups:[{q, angle}], tips:[...] }
 *
 * 生成基于雅思 Part 3 真实考查维度：抽象化、原因分析、古今/群体对比、影响探讨、
 * 未来趋势、举例拓展、解决方案、权衡两面。
 *
 * ⚠️ 诚实声明：生成的是「练习用」的延伸讨论提示，依据雅思 Part 3 考查逻辑，
 *   **并非真实考官题目**，不替代真人考官或老师的追问。仅供自主拓展思维训练。
 */
(function (global) {
  'use strict';

  // 从问题中提取主题短语（去掉疑问词/助动词开头）
  var STARTERS = ['why', 'how', 'what', 'which', 'who', 'where', 'when', 'do', 'does', 'did', 'is', 'are',
    'was', 'were', 'can', 'could', 'will', 'would', 'should', 'have', 'has', 'had', 'may', 'might'];
  var AUX = /^(is|are|was|were|do|does|did|have|has|had|will|would|can|could|should|may|might)$/;

  function extractTopic(question) {
    var q = (question || '').trim().replace(/\?$/, '');
    if (!q) return '';
    var toks = q.toLowerCase().split(/\s+/);
    var i = 0;
    if (STARTERS.indexOf(toks[0]) >= 0) {
      if (toks.length > 1 && AUX.test(toks[1])) i = 2; else i = 1;
    }
    var head = toks.slice(0, i).join(' ');
    return q.slice(head.length).replace(/^[\s,]+/, '').trim();
  }

  // 追问角度模板（{t}=主题短语）
  var ANGLES = [
    { key: 'cause', angle: '原因分析', tpl: function (t) { return 'Why do you think ' + t + '?'; } },
    { key: 'change', angle: '古今对比', tpl: function (t) { return 'Has ' + t + ' changed compared with the past? In what way?'; } },
    { key: 'impact', angle: '影响探讨', tpl: function (t) { return 'What impact does this have on society and on individuals?'; } },
    { key: 'future', angle: '未来趋势', tpl: function (t) { return 'Do you think this will change in the future? Why or why not?'; } },
    { key: 'example', angle: '举例拓展', tpl: function (t) { return 'Can you give a specific example from your own experience to support your view?'; } },
    { key: 'solution', angle: '解决方案', tpl: function (t) { return 'What could be done to improve or address this issue?'; } },
    { key: 'compare', angle: '对比差异', tpl: function (t) { return 'How does this differ between different groups of people (e.g. young vs old, city vs countryside)?'; } },
    { key: 'balance', angle: '权衡两面', tpl: function (t) { return 'What are the advantages and disadvantages of this?'; } }
  ];

  var TIPS = [
    'Part 3 要把话题从「个人经历」上升到「社会 / 抽象层面」，多用 On a societal level / Generally speaking 引出普遍现象。',
    '每个观点都给出「原因 + 例子」：先说立场，再解释 why，最后举一两个具体例子。',
    '善用衔接与对比：however / whereas / on the one hand…on the other hand 体现逻辑层次。',
    '遇到抽象问题（如“幸福是什么”），先下定义再展开，避免空泛。',
    '适当承认复杂性：It depends / That is a complex issue，再分情况讨论，更显思辨深度。'
  ];

  function analyze(input) {
    input = input || {};
    var prompt = (input.prompt || '').toString();
    var topic = (input.topic || '').toString();
    var questions = prompt.split(/\s*\|\s*|\n+/).map(function (s) { return s.trim(); }).filter(function (s) { return s.length; });
    if (!questions.length && topic) questions = [topic];
    if (!questions.length) questions = ['this topic'];

    var followups = [];
    var seen = {};
    questions.slice(0, 3).forEach(function (q) {
      var t = extractTopic(q) || topic || 'this';
      ANGLES.slice(0, 4).forEach(function (a) {
        var text = a.tpl(t);
        var key = text.toLowerCase();
        if (seen[key]) return;
        seen[key] = 1;
        followups.push({ q: text, angle: a.angle });
      });
    });
    followups = followups.slice(0, 6);
    return { followups: followups, tips: TIPS, topic: topic, prompt: prompt };
  }

  var API = { analyze: analyze, extractTopic: extractTopic };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  if (global) global.IELTS_SPEAKING_PART3 = API;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
