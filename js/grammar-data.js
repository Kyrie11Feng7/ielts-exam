/*
 * 雅思真题库 · 语法精讲与自测数据
 * 说明：本模块为「辅助学习资料」，并非雅思真题，也不替代真题练习。
 * 内容为依据权威英语语法体系自行撰写的常见雅思高频语法点讲解 + 自测题（含答案与解析）。
 * 所有题目均为语法填空练习，答案客观、可校验，不存在对剑桥真题的编造。
 */
window.IELTS_GRAMMAR = [
  {
    id: 'tenses',
    title: '时态与时态一致',
    icon: '⏱️',
    summary: '雅思写作/口语要求能准确使用多种时态，并在一段话内保持时间逻辑一致。最常考：一般现在、一般过去、现在完成、过去完成。',
    points: [
      { rule: '现在完成时 (have/has + done) 强调过去动作对现在的影响，或与“至今/最近”连用。', example: 'Many countries have introduced carbon taxes.' },
      { rule: '过去完成时 (had + done) 表示“过去的过去”，常用于叙述早于某过去时间点的动作。', example: 'By 2010 the rate had doubled.' },
      { rule: '一段话内时态应围绕同一时间基准，避免无故跳变。', example: 'The graph shows… it increased… it has remained stable since.' }
    ],
    exercises: [
      { q: 'Over the last decade, renewable energy _____ (become) much cheaper.', a: 'has become', ex: '“Over the last decade” 与现在完成时连用，强调持续到现在的趋势。' },
      { q: 'Before the policy, emissions _____ (rise) for 20 years.', a: 'had risen', ex: '“before + 过去时间”用过去完成时表示“过去的过去”。' },
      { q: 'The chart _____ (show) the percentage of urban population in 2000.', a: 'showed', ex: '描述图表中某个过去年份的事实用一般过去时。' }
    ]
  },
  {
    id: 'passive',
    title: '被动语态',
    icon: '🔁',
    summary: '学术写作中常用被动语态突出“动作承受者/客观事实”，尤其在流程图、实验说明、报告结论里。结构：be + 过去分词。',
    points: [
      { rule: '一般现在被动：am/is/are + done。', example: 'The data are collected from 1,000 households.' },
      { rule: '一般过去被动：was/were + done。', example: 'The bridge was completed in 1998.' },
      { rule: '含情态动词：modal + be + done。', example: 'Pollution should be reduced.' }
    ],
    exercises: [
      { q: 'The samples _____ (analyze) by the laboratory yesterday.', a: 'were analyzed', ex: '过去某机构完成的动作，用一般过去被动。' },
      { q: 'English _____ (speak) in many countries as a second language.', a: 'is spoken', ex: '客观事实用一般现在被动。' },
      { q: 'The problem must _____ (solve) immediately.', a: 'be solved', ex: '情态动词被动：modal + be + done。' }
    ]
  },
  {
    id: 'relative',
    title: '定语从句',
    icon: '🔗',
    summary: '用关系代词/副词把两个句子连成一句，使表达更紧凑。who/whom 指人，which 指物，that 通用，whose 表所属，where 表地点，when 表时间。',
    points: [
      { rule: '限定性从句紧跟先行词，不用逗号；非限定性从句用逗号隔开，不能用 that。', example: 'Cities which invest in transport grow faster.' },
      { rule: 'whose + 名词 表示“……的”。', example: 'A country whose economy is stable attracts investors.' },
      { rule: '关系代词作宾语时可省略（口语/紧凑写作）。', example: 'The book (that) I read was useful.' }
    ],
    exercises: [
      { q: 'The region _____ economy depends on tourism was hit hardest.', a: 'whose', ex: '表示“这个地区经济”，用 whose。' },
      { q: 'The museum _____ we visited last week was built in 1900.', a: 'which / that', ex: '作 visited 的宾语，用 which 或 that（可省略）。' },
      { q: 'The city _____ the conference was held has good transport.', a: 'where', ex: '表示地点，用 where。' }
    ]
  },
  {
    id: 'noun-clause',
    title: '名词性从句',
    icon: '💡',
    summary: '在句中充当主语、宾语或表语的从句，常以 that / what / whether / if 引导。写作中常用于表达观点与结论。',
    points: [
      { rule: 'that 引导陈述性从句，本身不充当成分。', example: 'It is clear that prices will rise.' },
      { rule: 'what 引导“所……的事”，在从句中充当主语/宾语。', example: 'What governments need is long-term planning.' },
      { rule: 'whether / if 表示“是否”，主语/介词后多用 whether。', example: 'It is unclear whether the plan will work.' }
    ],
    exercises: [
      { q: '_____ surprised researchers was the speed of recovery.', a: 'What', ex: '从句缺主语，用 what 表示“令……的事”。' },
      { q: 'I believe _____ education is the best investment.', a: 'that', ex: 'believe 后接 that 引导的宾语从句（that 可省略）。' },
      { q: 'There is doubt _____ the data are reliable.', a: 'whether', ex: '名词后表“是否”用 whether，比 if 更正式。' }
    ]
  },
  {
    id: 'conditionals',
    title: '条件句',
    icon: '🌿',
    summary: 'If 引导的条件句表达假设与结果。零条件（真理）、第一条件（将来可能）、第二条件（现在假设）、第三条件（过去假设）。',
    points: [
      { rule: '第一条件：if + 一般现在，主句 will + do（将来真实可能）。', example: 'If prices rise, demand will fall.' },
      { rule: '第二条件：if + 过去时，主句 would + do（现在不真实）。', example: 'If we invested more, emissions would drop.' },
      { rule: '第三条件：if + had done，主句 would have done（过去未实现）。', example: 'If we had acted earlier, the crisis would have been avoided.' }
    ],
    exercises: [
      { q: 'If the government _____ (invest) in rail, traffic would decrease.', a: 'invested', ex: '第二条件，if 用过去时表现在假设。' },
      { q: 'If it rains tomorrow, the match _____ (cancel).', a: 'will be cancelled', ex: '第一条件，主句用 will + 被动。' },
      { q: 'If they _____ (act) sooner, the damage would have been less.', a: 'had acted', ex: '第三条件，if 用过去完成时。' }
    ]
  },
  {
    id: 'articles',
    title: '冠词 a / an / the',
    icon: '🔤',
    summary: '冠词的误用是中国考生高频失分点。泛指可数单数用 a/an；特指或唯一事物用 the；泛指复数/不可数常省略。',
    points: [
      { rule: '首次提及或泛指用 a/an；再次提及或双方已知用 the。', example: 'A survey found that the survey was biased.' },
      { rule: '独一无二的事物用 the：the sun, the government, the environment。', example: 'The environment needs protection.' },
      { rule: '泛指类别的不可数名词/复数不加冠词：people, water, children。', example: 'Children need education.' }
    ],
    exercises: [
      { q: '_____ internet has changed how we learn.', a: 'The', ex: '独一无二的事物（internet）用 the。' },
      { q: 'She wants to be _____ engineer.', a: 'an', ex: '泛指职业且 engineer 以元音开头，用 an。' },
      { q: '_____ water is essential for life.', a: '(no article) / Water', ex: '不可数名词泛指不加冠词。' }
    ]
  },
  {
    id: 'comparatives',
    title: '比较级与最高级',
    icon: '📊',
    summary: '图表题描述差异的必备工具。单音节/部分双音节 +er/est；多音节用 more/most；注意 than 与被比较对象的一致。',
    points: [
      { rule: '两者比较用比较级 + than；三者及以上用最高级。', example: 'City A is larger than City B. City C is the largest.' },
      { rule: '多音节形容词：more/most + 原级。', example: 'more significant, the most important' },
      { rule: '倍數表达：twice/three times as + 原级 + as。', example: 'X is twice as large as Y.' }
    ],
    exercises: [
      { q: 'Renewable energy is becoming _____ (important) than fossil fuels.', a: 'more important', ex: '多音节用 more + 原级 + than。' },
      { q: 'This is _____ (efficient) method we have tested.', a: 'the most efficient', ex: '三者以上用最高级 the most + 原级。' },
      { q: 'Country A is three times _____ (large) as Country B.', a: 'as large', ex: '倍数结构：X times as + 原级 + as。' }
    ]
  },
  {
    id: 'agreement',
    title: '主谓一致',
    icon: '⚖️',
    summary: '主语与谓语动词在数上保持一致。注意集合名词、不可数名词、there be 就近原则、主语后修饰语不影响数。',
    points: [
      { rule: '不可数名词作主语用单数：information, evidence, research。', example: 'The evidence suggests a link.' },
      { rule: '集合名词（family, government）强调整体用单数，强调成员用复数。', example: 'The government has decided.' },
      { rule: 'there be 遵循就近原则。', example: 'There is a book and two pens on the desk.' }
    ],
    exercises: [
      { q: 'The number of students _____ (be) increasing.', a: 'is', ex: '“The number of + 复数”作整体，用单数。' },
      { q: 'Research on climate _____ (show) clear trends.', a: 'shows', ex: 'research 为不可数名词，用单数。' },
      { q: 'Neither the teacher nor the students _____ (know) the answer.', a: 'know', ex: 'nor 就近，students 决定用复数 know。' }
    ]
  },
  {
    id: 'subjunctive',
    title: '虚拟语气',
    icon: '🪄',
    summary: '表达愿望、建议、要求或与事实相反。常见于 it is important that…、suggest、wish、if only、it is time 等结构。',
    points: [
      { rule: '表示“建议/要求/重要”的形容词/动词后，that 从句用 (should) + 动词原形。', example: 'It is vital that he (should) attend.' },
      { rule: 'wish / if only 后接过去时表现在愿望，had done 表过去愿望。', example: 'I wish I knew the answer.' },
      { rule: 'It is time + 主语 + 过去时（表“该做某事了”）。', example: 'It is time we acted.' }
    ],
    exercises: [
      { q: 'I suggest that he _____ (submit) the report today.', a: 'submit / should submit', ex: 'suggest 后 that 从句用 (should) + 原形。' },
      { q: 'I wish I _____ (have) more time to prepare.', a: 'had', ex: 'wish 表现在愿望用过去时 had。' },
      { q: 'It is important that every child _____ (have) access to education.', a: 'have / should have', ex: 'important 后 that 从句用 (should) + 原形。' }
    ]
  },
  {
    id: 'participles',
    title: '非谓语动词（分词）',
    icon: '🧩',
    summary: '用现在分词(-ing)或过去分词(-ed)作定语或状语，能让句子更简洁、书面化，是提分关键。',
    points: [
      { rule: '现在分词表主动/进行；过去分词表被动/完成。', example: 'A growing economy… / A problem solved by the policy…' },
      { rule: '分词作状语可表原因/时间/伴随，逻辑主语须与主句一致。', example: 'Facing pressure, the firm cut costs.' },
      { rule: '避免悬空分词：分词的动作发出者应是主句主语。', example: '✗ Reading the report, the solution was clear. ✓ Reading the report, we found the solution.' }
    ],
    exercises: [
      { q: '_____ (face) with high costs, many families moved.', a: 'Faced', ex: '“面临”是被动含义，用 faced（过去分词）。' },
      { q: 'The _____ (rise) cost of living worries citizens.', a: 'rising', ex: '“正在上涨的”表主动进行，用 rising。' },
      { q: '_____ (support) by data, the claim is convincing.', a: 'Supported', ex: 'claim 被数据支持，用过去分词 Supported。' }
    ]
  }
];
