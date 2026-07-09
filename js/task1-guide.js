/*
 * 雅思写作 Task 1 图表描述模板引导 (IELTS Writing Task 1 Graph Description Guide)
 * ----------------------------------------------------------------------------
 * 纯逻辑模块（无 DOM 依赖），浏览器 + Node 通用。
 *
 * 输入 analyze(prompt) → { chartType, chartKey, chartDesc, overview, detail, sentences[], vocab[] }
 *
 * 功能：基于题干关键词识别图表类型（折线/柱状/饼/表/流程/地图），给出概览段与细节段
 * 描述要点、常用句型库与核心词汇。
 *
 * ⚠️ 诚实声明：模板与句型为「练习参考」，具体描述须依据真实图表数据；
 *   不替代官方范文与老师批改。识别基于关键词启发，可能需手动确认图表类型。
 */
(function (global) {
  'use strict';

  var TYPES = [
    { key: 'line', re: /line graph|trend|over the period|changes over|rose|fell|fluctuated|increase|decrease/i, name: '折线图 Line Graph', desc: '展示随时间变化的趋势' },
    { key: 'bar', re: /bar chart|bar graph|figure for|percentage of .* was|compared to|proportion of .* who/i, name: '柱状图 Bar Chart', desc: '比较不同类别的数值' },
    { key: 'pie', re: /pie chart|proportion|share of|accounted for|made up/i, name: '饼图 Pie Chart', desc: '展示各部分占比' },
    { key: 'table', re: /table|figures (show|compare)|the table below/i, name: '表格 Table', desc: '多类别数据对比' },
    { key: 'process', re: /process|diagram show|how .* is (made|produced)|stages|steps|cycle|manufacture/i, name: '流程图 / 示意图 Process', desc: '描述步骤或制作过程' },
    { key: 'map', re: /map|island|changes to .* area|development of|before and after|layout/i, name: '地图 Map', desc: '描述地理位置或变迁' }
  ];

  function detectType(prompt) {
    for (var i = 0; i < TYPES.length; i++) { if (TYPES[i].re.test(prompt)) return TYPES[i]; }
    return { key: 'general', re: /.*/, name: '图表 Chart', desc: '通用图表描述' };
  }

  var SENTENCES = {
    intro: [
      'The {chart} shows {topic} between {time1} and {time2}.',
      'The {chart} provides information about {topic}.',
      'Given is a {chart} illustrating {topic}.'
    ],
    overview: [
      'Overall, it is clear that {trend}.',
      'In summary, {highest} was the most significant, while {lowest} was the least.',
      'Overall, {main feature}.'
    ],
    detail: [
      'The most noticeable trend is that {x} increased significantly from {a} to {b}.',
      'In contrast, {y} declined steadily over the period.',
      'Both {x} and {y} showed similar patterns, with figures around {n}.',
      'At the beginning, {x} stood at {a}; however, by the end it had reached {b}.'
    ],
    compare: [
      '{x} was considerably higher than {y} ({X} vs {Y}).',
      'A similar pattern can be seen in {x} and {y}.',
      'While {x} rose, {y} remained relatively stable.'
    ],
    conclusion: [
      'In conclusion, {summary}.',
      'To summarise, the data reveals a clear tendency towards {trend}.'
    ]
  };

  var VOCAB = {
    line: ['increase', 'rise', 'climb', 'soar', 'decrease', 'fall', 'drop', 'decline', 'fluctuate', 'peak', 'plateau', 'stable', 'dramatically', 'steadily', 'gradually'],
    bar: ['rank', 'the highest', 'the lowest', 'outnumber', 'account for', 'proportion', 'roughly', 'approximately'],
    pie: ['proportion', 'share', 'percentage', 'make up', 'account for', 'the majority', 'a minority', 'split'],
    table: ['compare', 'respectively', 'in contrast', 'whereas', 'highest', 'lowest', 'margin'],
    process: ['stage', 'step', 'firstly', 'subsequently', 'following this', 'final stage', 'input', 'output', 'raw material'],
    map: ['located', 'situated', 'to the north of', 'adjacent to', 'transformed into', 'developed', 'expanded', 'removed']
  };

  function analyze(prompt) {
    prompt = (prompt || '').toString();
    var t = detectType(prompt);
    var sentences = SENTENCES.intro.concat(SENTENCES.overview, SENTENCES.detail, SENTENCES.compare, SENTENCES.conclusion);
    var vocab = VOCAB[t.key] || VOCAB.line;
    return {
      chartType: t.name,
      chartKey: t.key,
      chartDesc: t.desc,
      overview: '开头段：改写题目（paraphrasing）+ 1-2 句概览（Overall, ...）点出最显著特征，不写具体数字。',
      detail: '主体段：按「最高 / 最低 / 相似 / 对比」分组描述，每组配具体数据（精确到数字与单位），避免逐点罗列。',
      sentences: sentences,
      vocab: vocab
    };
  }

  var API = { analyze: analyze, detectType: detectType, SENTENCES: SENTENCES };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  if (global) global.IELTS_TASK1_GUIDE = API;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
