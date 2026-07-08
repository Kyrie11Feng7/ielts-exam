/**
 * 剑13 Test 1 & Test 2 剑桥雅思内容覆盖补丁
 * 目的：将 data.js / data-extra*.js 中 AI 生成的"原创练习"内容替换为剑桥雅思13 Test 1、Test 2 练习题目。
 *       （注意：data.js 中剑13 tests:[] 为空，Test 2 由 data-extra2-1.js 以 AI 内容预填；本文件创建/覆盖两者。）
 *
 * 数据核对来源（公开权威解析，含原题答案键）：
 *   听力原文/答案   — laokaoya 剑13T1(42622/31089等)、engnovate Cambridge IELTS 13 Academic Listening Test 1 & 2
 *   阅读原文/题目   — engnovate Cambridge IELTS 13 Academic Reading Test 1 & 2（含全文）、laokaoya 剑13T1(38864)/T2(39185)
 *   写作题目       — ieltswriting.org IELTS 13 Test 1/2 Writing、engnovate Writing Test 1 Task 2
 *   口语话题       — engnovate / ieltszone / babarenglish Cambridge IELTS 13 Speaking Test 1 & 2
 *
 * 免责声明：
 *   - 原文（阅读 passage text）、听力录音原文、题目与答案为剑桥雅思13练习题目内容（来源见上，待与原版书核对）。
 *   - 写作 modelAnswer 与口语 a:'参考回答: ...' 均为「学习用示例文本」，非官方范文/标准回答。
 *   - 阅读 Passage 3（Test 2 公司匹配 32–37）答案已据原文逐条复核。
 *
 * 复核与修订（2026-07-07）：
 *   - 已用 laokaoya（剑13T1: 38335/38452/38497，T2: 38570/38603/38633）与 engnovate
 *     Cambridge IELTS 13 Academic Reading Test 1 & 2 交叉核对三篇阅读官方标题。
 *   - 修正 Test 1 Passage 3 标题笔误：原 "Artificial artists?"（复数）→ 官方正确标题
 *     "Artificial artist?"（单数，剑桥原版及 engnovate 均作单数）。
 *   - 已逐篇核对阅读全文，确认六篇文本（Tourism New Zealand / 无聊 / Artificial artist /
 *     cinnamon / oxytocin / trends）均为剑桥13真实原文，未跨书错配。
 *
 * 本文件须放在所有数据文件之后、app.js 之前加载。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;
  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 13) book = b; });
  if (!book) return;
  book.tests = book.tests || [];

  var TESTS = [1, 2];
  TESTS.forEach(function (tid) {
    var test = null;
    book.tests.forEach(function (t) { if (t.id === tid) test = t; });
    if (!test) {
      test = {
        id: tid,
        title: 'Test ' + tid,
        listening: { title: '听力 Listening', intro: '共4部分，40题，约30分钟', sections: [] },
        reading: { passages: [] },
        writing: { title: '写作 Writing', intro: '共2部分，60分钟', tasks: [] },
        speaking: { title: '口语 Speaking', intro: '共3部分，约11-14分钟', parts: [] }
      };
      book.tests.push(test);
    }

    // ===================== 听力（真实） =====================
    if (tid === 1) {
      test.listening.sections = [
        {
          part: 'Part 1',
          context: '游客咨询烹饪课程（Tourist Information Centre 介绍多家厨艺学校）',
          type: '表格填空（ONE WORD AND/OR A NUMBER）',
          questions: [
            { q: 'The Food Studio class teaches how to ___ and cook with seasonal products.', a: 'choose' },
            { q: 'The Food Studio also offers ___ lessons (e.g. private lessons).', a: 'private' },
            { q: 'Clients who return for a further class get a ___ discount.', a: '20% / twenty percent' },
            { q: 'Bond’s Cookery School focuses on food that is ___.', a: 'healthy' },
            { q: 'Bond’s recipes are designed to strengthen your ___.', a: 'bones' },
            { q: 'Bond’s has a free ___ every Thursday evening.', a: 'lecture' },
            { q: 'The ___ Centre mainly specialises in vegetarian dishes.', a: 'Arretsa' },
            { q: 'The Arretsa Centre is located near the ___.', a: 'market' },
            { q: 'The Arretsa Centre offers a special course in skills with a ___.', a: 'knife' },
            { q: 'The knife course must be booked early as it gets booked up ___.', a: 'quickly' }
          ]
        },
        {
          part: 'Part 2',
          context: 'Granford 镇高速公路委员会介绍交通与停车新规（含地图标注）',
          type: '选择题（单选）+ 地图标注（A–I）',
          questions: [
            { q: 'Why are changes needed to the traffic systems in Granford?', a: 'B' },
            { q: 'In a survey, local residents particularly complained about …', a: 'C' },
            { q: 'According to the speaker, one problem with the new regulations will be …', a: 'B' },
            { q: 'Map: New traffic lights (write the letter A–I).', a: 'E' },
            { q: 'Map: Pedestrian crossing.', a: 'D' },
            { q: 'Map: Parking allowed.', a: 'B' },
            { q: 'Map: New ‘No Parking’ sign.', a: 'G' },
            { q: 'Map: New disabled parking spaces.', a: 'C' },
            { q: 'Map: Widened pavement.', a: 'H' },
            { q: 'Map: Lorry loading/unloading restrictions.', a: 'I' }
          ]
        },
        {
          part: 'Part 3',
          context: '两名学生 Jack 与 Emma 讨论种子发芽（seed germination）实验计划',
          type: '选择题（单选）+ 流程图匹配（A–H）',
          questions: [
            { q: 'Why is Jack interested in investigating seed germination?', a: 'A' },
            { q: 'Jack and Emma agree the main advantage of their present experiment is that it can be …', a: 'C' },
            { q: 'What do they decide to check with their tutor?', a: 'B' },
            { q: 'They agree that Graves’ book on seed germination is disappointing because …', a: 'C' },
            { q: 'What does Jack say about the article on seed germination by Lee Hall?', a: 'B' },
            { q: 'Flow-chart: Select seeds of different ___ and sizes.', a: 'G' },
            { q: 'Flow-chart: Measure and record the ___ and size of each one.', a: 'C' },
            { q: 'Flow-chart: Decide on the ___ to be used.', a: 'H' },
            { q: 'Flow-chart: Use a different ___ for each seed and label it.', a: 'A' },
            { q: 'Flow-chart: After about 3 weeks, record the plant’s ___.', a: 'E' }
          ]
        },
        {
          part: 'Part 4',
          context: '关于城市环境对动物影响的学术讲座',
          type: '笔记填空（ONE WORD ONLY）',
          questions: [
            { q: 'the ___ – because of its general adaptability (e.g. crow).', a: 'crow' },
            { q: 'the pigeon – because walls of city buildings are similar to ___.', a: 'cliffs' },
            { q: 'many urban animals are adapting with unusual ___.', a: 'speed' },
            { q: 'Emilie Snell-Rood found the size of their ___ had increased.', a: 'brain(s)' },
            { q: 'this may be due to the need to locate new sources of ___.', a: 'food' },
            { q: 'Catarina Miranda focused on the ___ of urban and rural blackbirds.', a: 'behaviour(s)' },
            { q: 'urban birds were afraid of situations that were ___.', a: 'new' },
            { q: 'some animals respond to ___ by producing lower levels of hormones.', a: 'stress' },
            { q: 'urban squirrels use their ___ to help them communicate.', a: 'tail(s)' },
            { q: 'some of these adaptations may not be ___.', a: 'permanent' }
          ]
        }
      ];
    } else {
      test.listening.sections = [
        {
          part: 'Part 1',
          context: '女士咨询加入 South City Cycling Club（会员类型、费用、训练骑行）',
          type: '笔记填空（ONE WORD AND/OR A NUMBER）',
          questions: [
            { q: 'Full membership covers cycling and ___ all over Australia.', a: 'races' },
            { q: 'The cost of membership includes the club fee and ___.', a: 'insurance' },
            { q: 'The club kit is made by a company called ___.', a: 'Jerriz' },
            { q: 'Training rides Level B: speed about ___ kph.', a: '25' },
            { q: 'Tuesdays at 5.30 am, meet at the ___.', a: 'stadium' },
            { q: 'Thursdays at 5.30 am, meet at the entrance to the ___.', a: 'park' },
            { q: 'Members often have ___ together afterwards.', a: 'coffee' },
            { q: 'There is not always a ___ with the group on these rides.', a: 'leader' },
            { q: 'Check and print the ___ on the website beforehand.', a: 'route' },
            { q: 'Bikes must have ___.', a: 'lights' }
          ]
        },
        {
          part: 'Part 2',
          context: '公司向员工介绍志愿服务项目（含 Digital Inclusion Day）',
          type: '选择题（单选）+ 多选题（选 TWO）',
          questions: [
            { q: 'How much time for volunteering does the company allow per employee?', a: 'C' },
            { q: 'In feedback almost all employees said that volunteering improved their …', a: 'B' },
            { q: 'Last year some staff helped unemployed people with their …', a: 'C' },
            { q: 'This year the company will start a new volunteering project with a local …', a: 'B' },
            { q: 'Where will the Digital Inclusion Day be held?', a: 'B' },
            { q: 'What should staff do if they want to take part in the Digital Inclusion Day?', a: 'A' },
            { q: 'What TWO things are mentioned about the participants? (one of two)', a: 'C' },
            { q: 'What TWO things are mentioned about the participants? (the other)', a: 'E' },
            { q: 'What TWO activities did participants describe as useful? (one of two)', a: 'B' },
            { q: 'What TWO activities did participants describe as useful? (the other)', a: 'D' }
          ]
        },
        {
          part: 'Part 3',
          context: '学生 Russ 与导师讨论纳米技术课堂展示的规划与上次展示反馈',
          type: '选择题（单选）+ 匹配（A–G）',
          questions: [
            { q: 'Russ says that his difficulty in planning the presentation is due to …', a: 'B' },
            { q: 'Russ and his tutor agree that his approach will be …', a: 'A' },
            { q: 'In connection with slides, the tutor advises Russ to …', a: 'C' },
            { q: 'They both agree that the best way for Russ to start is …', a: 'C' },
            { q: 'What does the tutor advise Russ to do next while preparing?', a: 'A' },
            { q: 'Aspects of previous presentation – structure:', a: 'A' },
            { q: 'Aspects of previous presentation – eye contact:', a: 'C' },
            { q: 'Aspects of previous presentation – body language:', a: 'D' },
            { q: 'Aspects of previous presentation – choice of words:', a: 'G' },
            { q: 'Aspects of previous presentation – handouts:', a: 'B' }
          ]
        },
        {
          part: 'Part 4',
          context: '关于情景记忆（episodic memory）的学术讲座',
          type: '笔记填空（ONE WORD ONLY）',
          questions: [
            { q: 'the time and ___ of past events.', a: 'location' },
            { q: 'general information about the ___.', a: 'world' },
            { q: 'which does not involve recalling ___ information.', a: 'personal' },
            { q: 'the more ___ given to an event, the more successfully it can be encoded.', a: 'attention' },
            { q: 'to remember a ___, it is useful to have a strategy for encoding.', a: 'name' },
            { q: 'most effective when memories can be added to a ___ of related information.', a: 'network' },
            { q: 'the ___ of retrieval affects the strength of memories.', a: 'frequency' },
            { q: 'e.g. the ___ of an object near to where you left your car.', a: 'colour' },
            { q: 'games which stimulate the ___ have been found to help people with schizophrenia.', a: 'brain' },
            { q: 'children with autism may have difficulty forming episodic memories – possibly because their concept of the ___ may be absent.', a: 'self' }
          ]
        }
      ];
    }

    // ===================== 阅读（真实） =====================
    if (tid === 1) {
      test.reading.passages = [
        {
          title: 'Passage 1: Case Study: Tourism New Zealand website',
          difficulty: '中等',
          summary: '新西兰旅游网站 newzealand.com 的成功经验：以用户体验、互动功能与独特体验建立国家品牌，带动旅游业增长。',
          questions: [
            { type: '表格填空（ONE WORD ONLY）', q: 'Database of tourism services: businesses were allowed to ___ information regularly.', a: 'update' },
            { type: '表格填空（ONE WORD ONLY）', q: 'Evaluation of businesses included their impact on the ___.', a: 'environment' },
            { type: '表格填空（ONE WORD ONLY）', q: 'Special features included an interview with a former sports ___ (Tana Umaga).', a: 'captain' },
            { type: '表格填空（ONE WORD ONLY）', q: 'An interactive tour of locations used in ___.', a: 'films' },
            { type: '表格填空（ONE WORD ONLY）', q: 'Information on driving routes varied depending on the ___.', a: 'season' },
            { type: '表格填空（ONE WORD ONLY）', q: 'Travel Planner included details of public transport and local ___.', a: 'accommodation' },
            { type: '表格填空（ONE WORD ONLY）', q: '‘Your Words’ section: travellers could submit a link to their ___.', a: 'blog' },
            { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'The website aimed to provide ready-made itineraries and packages for travel companies and individual tourists.', a: 'FALSE' },
            { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'It was found that most visitors started searching on the website by geographical location.', a: 'NOT GIVEN' },
            { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'According to research, 26% of visitor satisfaction is related to their accommodation.', a: 'FALSE' },
            { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Visitors to New Zealand like to become involved in the local culture.', a: 'TRUE' },
            { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Visitors like staying in small hotels in New Zealand rather than in larger ones.', a: 'NOT GIVEN' },
            { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Many visitors feel it is unlikely that they will return to New Zealand after their visit.', a: 'TRUE' }
          ]
        },
        {
          title: 'Passage 2: Why being bored is stimulating – and useful, too',
          difficulty: '中偏难',
          summary: '无聊情绪的研究：分类、与创造力的关系、注意力系统失效的危害，以及应对方式。',
          questions: [
            { type: '段落标题匹配（List of headings i–viii）', q: 'Paragraph A', a: 'iv' },
            { type: '段落标题匹配（List of headings i–viii）', q: 'Paragraph B', a: 'vi' },
            { type: '段落标题匹配（List of headings i–viii）', q: 'Paragraph C', a: 'i' },
            { type: '段落标题匹配（List of headings i–viii）', q: 'Paragraph D', a: 'v' },
            { type: '段落标题匹配（List of headings i–viii）', q: 'Paragraph E', a: 'viii' },
            { type: '段落标题匹配（List of headings i–viii）', q: 'Paragraph F', a: 'iii' },
            { type: '人名观点匹配（A–E）', q: 'Peter Toohey', a: 'E' },
            { type: '人名观点匹配（A–E）', q: 'Thomas Goetz', a: 'B' },
            { type: '人名观点匹配（A–E）', q: 'John Eastwood', a: 'D' },
            { type: '人名观点匹配（A–E）', q: 'Francoise Wemelsfelder', a: 'A' },
            { type: '摘要填空（ONE WORD ONLY）', q: 'For John Eastwood, people cannot ___ due to a failure in the ‘attention system’.', a: 'focus' },
            { type: '摘要填空（ONE WORD ONLY）', q: 'Those for whom ___ is an important aim in life may have problems coping with boredom.', a: 'pleasure' },
            { type: '摘要填空（ONE WORD ONLY）', q: 'Those who have the characteristic of ___ can generally cope with boredom.', a: 'curiosity' }
          ]
        },
        {
          title: 'Passage 3: Artificial artist?',
          difficulty: '难',
          summary: '计算机能否创造艺术？以 Painting Fool、Aaron、EMI 等为例，探讨机器创造力与人类偏见的争议。',
          questions: [
            { type: '选择题（单选）', q: 'What is the writer suggesting about computer-produced works in the first paragraph?', a: 'B' },
            { type: '选择题（单选）', q: 'According to Geraint Wiggins, why are many people worried by computer art?', a: 'C' },
            { type: '选择题（单选）', q: 'What is a key difference between Aaron and the Painting Fool?', a: 'C' },
            { type: '选择题（单选）', q: 'What point does Simon Colton make in the fourth paragraph?', a: 'D' },
            { type: '选择题（单选）', q: 'The writer refers to the paintings of a chair as an example of computer art which …', a: 'A' },
            { type: '句子结尾匹配（A–G）', q: 'Simon Colton says it is important to consider the long-term view, then …', a: 'D' },
            { type: '句子结尾匹配（A–G）', q: 'David Cope’s EMI software surprised people by …', a: 'A' },
            { type: '句子结尾匹配（A–G）', q: 'Geraint Wiggins criticised Cope for not …', a: 'E' },
            { type: '句子结尾匹配（A–G）', q: 'Douglas Hofstadter claimed that EMI was …', a: 'C' },
            { type: '句子结尾匹配（A–G）', q: 'Audiences who had listened to EMI’s music became angry after …', a: 'G' },
            { type: '句子结尾匹配（A–G）', q: 'The participants in David Moffat’s study had to assess music without …', a: 'B' },
            { type: '判断题 (YES/NO/NOT GIVEN)', q: 'Moffat’s research may help explain people’s reactions to EMI.', a: 'YES' },
            { type: '判断题 (YES/NO/NOT GIVEN)', q: 'The non-experts in Moffat’s study all responded in a predictable way.', a: 'NOT GIVEN' },
            { type: '判断题 (YES/NO/NOT GIVEN)', q: 'Justin Kruger’s findings cast doubt on Paul Bloom’s theory about people’s prejudice towards computer art.', a: 'NO' }
          ]
        }
      ];
    } else {
      test.reading.passages = [
        {
          title: 'Passage 1: Bringing cinnamon to Europe',
          difficulty: '中等',
          summary: '肉桂从古至今经阿拉伯商人、葡萄牙、荷兰、英国之手进入欧洲贸易的历史，及其垄断与衰落。',
          questions: [
            { type: '笔记填空（ONE WORD ONLY）', q: 'Biblical times: cinnamon was added to ___.', a: 'oils' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'It was used to show ___ between people.', a: 'friendship' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'Ancient Rome: used for its sweet smell at ___.', a: 'funerals' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'Middle Ages: it was an indication of a person’s ___.', a: 'wealth' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'It was known as a treatment for ___ and other health problems.', a: 'indigestion' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'Cinnamon was grown in ___.', a: 'India' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'Merchants used ___ to bring it to the Mediterranean.', a: 'camels' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'It arrived in the Mediterranean at ___.', a: 'Alexandria' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'Traders took it to ___ and sold it around Europe.', a: 'Venice' },
            { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'The Portuguese had control over the cinnamon trade in Ceylon throughout the 16th century.', a: 'TRUE' },
            { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'The Dutch took over the cinnamon trade from the Portuguese as soon as they arrived in Ceylon.', a: 'FALSE' },
            { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'The trees planted by the Dutch produced larger quantities of cinnamon than the wild trees.', a: 'NOT GIVEN' },
            { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'The spice trade maintained its economic importance during the 19th century.', a: 'FALSE' }
          ]
        },
        {
          title: 'Passage 2: Oxytocin',
          difficulty: '中偏难',
          summary: '催产素（“爱情荷尔蒙”）对人类社会行为的正负影响，以及因人而异、因情境而异的复杂性。',
          questions: [
            { type: '段落信息匹配（A–F）', q: 'reference to research showing the beneficial effects of oxytocin on people', a: 'B' },
            { type: '段落信息匹配（A–F）', q: 'reasons why the effects of oxytocin are complex', a: 'F' },
            { type: '段落信息匹配（A–F）', q: 'mention of a period in which oxytocin attracted little scientific attention', a: 'B' },
            { type: '段落信息匹配（A–F）', q: 'reference to people ignoring certain aspects of their research data', a: 'E' },
            { type: '研究者匹配（A–F）', q: 'People are more trusting when affected by oxytocin.', a: 'A' },
            { type: '研究者匹配（A–F）', q: 'Oxytocin increases people’s feelings of jealousy.', a: 'B' },
            { type: '研究者匹配（A–F）', q: 'The effect of oxytocin varies from one type of person to another.', a: 'C' },
            { type: '摘要填空（ONE WORD ONLY）', q: 'The earliest findings about oxytocin and bonding came from research involving ___.', a: 'animals' },
            { type: '摘要填空（ONE WORD ONLY）', q: 'It was also discovered that humans produce oxytocin during ___.', a: 'childbirth' },
            { type: '摘要填空（ONE WORD ONLY）', q: 'An experiment in 2005 gave participants either oxytocin or a ___.', a: 'placebo' },
            { type: '摘要填空（ONE WORD ONLY）', q: 'A study at the University of Haifa where participants took part in a ___ revealed negative emotions.', a: 'game' },
            { type: '摘要填空（ONE WORD ONLY）', q: 'A study at the University of Antwerp showed people’s lack of willingness to help ___.', a: 'strangers' },
            { type: '摘要填空（ONE WORD ONLY）', q: 'Research at the University of Amsterdam revealed that people given oxytocin consider ___ familiar to them in their own country more positively.', a: 'names' }
          ]
        },
        {
          title: 'Passage 3: Making the most of trends',
          difficulty: '难',
          summary: '哈佛商学院专家谈企业如何利用趋势：infuse-and-augment、combine-and-transcend、counteract-and-reaffirm 三种创新策略。',
          questions: [
            { type: '选择题（单选）', q: 'In the first paragraph, the writer says that most managers …', a: 'D' },
            { type: '选择题（单选）', q: 'According to the third paragraph, Coach was anxious to …', a: 'C' },
            { type: '选择题（单选）', q: 'What point is made about Tesco’s Greener Living programme?', a: 'A' },
            { type: '选择题（单选）', q: 'What does the writer suggest about Nike’s strategy?', a: 'D' },
            { type: '选择题（单选）', q: 'What was original about the ME2?', a: 'D' },
            { type: '公司匹配（A–D）', q: 'It turned the notion that its products could have harmful effects to its own advantage.', a: 'D' },
            { type: '公司匹配（A–D）', q: 'It extended its offering by collaborating with another manufacturer.', a: 'C' },
            { type: '公司匹配（A–D）', q: 'It implemented an incentive scheme to demonstrate its corporate social responsibility.', a: 'B' },
            { type: '公司匹配（A–D）', q: 'It discovered that customers had a positive attitude towards dealing with difficult circumstances.', a: 'A' },
            { type: '公司匹配（A–D）', q: 'It responded to a growing lifestyle trend in an unrelated product sector.', a: 'C' },
            { type: '公司匹配（A–D）', q: 'It successfully avoided having to charge its customers less for its core products.', a: 'A' },
            { type: '句子结尾匹配（A–D）', q: 'If there are any trend-related changes impacting on your category, you should …', a: 'B' },
            { type: '句子结尾匹配（A–D）', q: 'If a current trend highlights a negative aspect of your category, you should …', a: 'C' },
            { type: '句子结尾匹配（A–D）', q: 'If the consumers’ new focus has an increasing lack of connection with your offering you should …', a: 'D' }
          ]
        }
      ];
    }

    // 阅读全文（真实，覆盖 AI 文本）
    if (tid === 1) {
      test.reading.passages[0].text = `New Zealand is a small country of four million inhabitants, a long-haul flight from all the major tourist-generating markets of the world. Tourism currently makes up 9% of the country’s gross domestic product, and is the country’s largest export sector. Unlike other export sectors, which make products and then sell them overseas, tourism brings its customers to New Zealand. The product is the country itself – the people, the places and the experiences. In 1999, Tourism New Zealand launched a campaign to communicate a new brand position to the world. The campaign focused on New Zealand’s scenic beauty, exhilarating outdoor activities and authentic Maori culture, and it made New Zealand one of the strongest national brands in the world.

A key feature of the campaign was the website newzealand.com, which provided potential visitors to New Zealand with a single gateway to everything the destination had to offer. The heart of the website was a database of tourism services operators, both those based in New Zealand and those based abroad which offered tourism service to the country. Any tourism-related business could be listed by filling in a simple form. This meant that even the smallest bed and breakfast address or specialist activity provider could gain a web presence with access to an audience of long-haul visitors. In addition, because participating businesses were able to update the details they gave on a regular basis, the information provided remained accurate. And to maintain and improve standards, Tourism New Zealand organised a scheme whereby organisations appearing on the website underwent an independent evaluation against a set of agreed national standards of quality. As part of this, the effect of each business on the environment was considered.

To communicate the New Zealand experience, the site also carried features relating to famous people and places. One of the most popular was an interview with former New Zealand All Blacks rugby captain Tana Umaga. Another feature that attracted a lot of attention was an interactive journey through a number of the locations chosen for blockbuster films which had made use of New Zealand’s stunning scenery as a backdrop. As the site developed, additional features were added to help independent travelers devise their own customised itineraries. To make it easier to plan motoring holidays, the site catalogued the most popular driving routes in the country, highlighting different routes according to the season and indicating distances and times.

Later, a Travel Planner feature was added, which allowed visitors to click and ‘bookmark’ places or attractions they were interested in, and then view the results on a map. The Travel Planner offered suggested routes and public transport options between the chosen locations. There were also links to accommodation in the area. By registering with the website, users could save their Travel Plan and return to it later, or print it out to take on the visit. The website also had a ‘Your Words’ section where anyone could submit a blog of their New Zealand travels for possible inclusion on the website.

The Tourism New Zealand website won two Webby awards for online achievement and innovation. More importantly perhaps, the growth of tourism to New Zealand was impressive. Overall tourism expenditure increased by an average of 6.9% per year between 1999 and 2004. From Britain, visits to New Zealand grew at an average annual rate of 13% between 2002 and 2006, compared to a rate of 4% overall for British visits abroad.

The website was set up to allow both individuals and travel organisations to create itineraries and travel packages to suit their own needs and interests. On the website, visitors can search for activities not solely by geographical location, but also by the particular nature of the activity. This is important as research shows that activities are the key driver of visitor satisfaction, contributing 74% to visitor satisfaction, while transport and accommodation account for the remaining 26%. The more activities that visitors undertake, the more satisfied they will be. It has also been found that visitors enjoy cultural activities most when they are interactive, such as visiting a marae (meeting ground) to learn about traditional Maori life. Many long-haul travelers enjoy such learning experiences, which provide them with stories to take home to their friends and family. In addition, it appears that visitors to New Zealand don’t want to be ‘one of the crowd’ and find activities that involve only a few people more special and meaningful.

It could be argued that New Zealand is not a typical destination. New Zealand is a small country with a visitor economy composed mainly of small businesses. It is generally perceived as a safe English-speaking country with a reliable transport infrastructure. Because of the long-haul flight, most visitors stay for longer (average 20 days) and want to see as much of the country as possible on what is often seen as a once-in-a-lifetime visit. However, the underlying lessons apply anywhere – the effectiveness of a strong brand, a strategy based on unique experiences and a comprehensive and user-friendly website.`;

      test.reading.passages[1].text = `Why being bored is stimulating – and useful, too
This most common of emotions is turning out to be more interesting than we thought

A
We all know how it feels – it’s impossible to keep your mind on anything, time stretches out, and all the things you could do seem equally unlikely to make you feel better. But defining boredom so that it can be studied in the lab has proved difficult. For a start, it can include a lot of other mental states, such as frustration, apathy, depression and indifference. There isn’t even agreement over whether boredom is always a low-energy, flat kind of emotion or whether feeling agitated and restless counts as boredom, too. In his book, Boredom: A Lively History, Peter Toohey at the University of Calgary, Canada, compares it to disgust – an emotion that motivates us to stay away from certain situations. ‘If disgust protects humans from infection, boredom may protect them from “infectious” social situations,’ he suggests.

B
By asking people about their experiences of boredom, Thomas Goetz and his team at the University of Konstanz in Germany have recently identified five distinct types: indifferent, calibrating, searching, reactant and apathetic. These can be plotted on two axes – one running left to right, which measures low to high arousal, and the other from top to bottom, which measures how positive or negative the feeling is. Intriguingly, Goetz has found that while people experience all kinds of boredom, they tend to specialise in one. Of the five types, the most damaging is ‘reactant’ boredom with its explosive combination of high arousal and negative emotion. The most useful is what Goetz calls ‘indifferent’ boredom: someone isn’t engaged in anything satisfying but still feels relaxed and calm. However, it remains to be seen whether there are any character traits that predict the kind of boredom each of us might be prone to.

C
Psychologist Sandi Mann at the University of Central Lancashire, UK, goes further. ‘All emotions are there for a reason, including boredom,’ she says. Mann has found that being bored makes us more creative. ‘We’re all afraid of being bored but in actual fact it can lead to all kinds of amazing things,’ she says. In experiments published last year, Mann found that people who had been made to feel bored by copying numbers out of the phone book for 15 minutes came up with more creative ideas about how to use a polystyrene cup than a control group. Mann concluded that a passive, boring activity is best for creativity because it allows the mind to wander. In fact, she goes so far as to suggest that we should seek out more boredom in our lives.

D
Psychologist John Eastwood at York University in Toronto, Canada, isn’t convinced. ‘If you are in a state of mind-wandering you are not bored,’ he says. ‘In my view, by definition boredom is an undesirable state.’ That doesn’t necessarily mean that it isn’t adaptive, he adds. ‘Pain is adaptive – if we didn’t have physical pain, bad things would happen to us. Does that mean that we should actively cause pain? No. But even if boredom has evolved to help us survive, it can still be toxic if allowed to fester.’ For Eastwood, the central feature of boredom is a failure to put our ‘attention system’ into gear. This causes an inability to focus on anything, which makes time seem to go painfully slowly. What’s more, your efforts to improve the situation can end up making you feel worse. ‘People try to connect with the world and if they are not successful there’s that frustration and irritability,’ he says. Perhaps most worryingly, says Eastwood, repeatedly failing to engage attention can lead to a state where we don’t know what to do any more, and no longer care.

E
Eastwood’s team is now trying to explore why the attention system fails. It’s early days but they think that at least some of it comes down to personality. Boredom proneness has been linked with a variety of traits. People who are motivated by pleasure seem to suffer particularly badly. Other personality traits, such as curiosity, are associated with a high boredom threshold. More evidence that boredom has detrimental effects comes from studies of people who are more or less prone to boredom. It seems those who bore easily face poorer prospects in education, their career and even life in general. But of course, boredom itself cannot kill – it’s the things we do to deal with it that may put us in danger. What can we do to alleviate it before it comes to that? Goetz’s group has one suggestion. Working with teenagers, they found that those who ‘approach’ a boring situation – in other words, see that it’s boring and get stuck in anyway – report less boredom than those who try to avoid it by using snacks, TV or social media for distraction.

F
Psychologist Francoise Wemelsfelder speculates that our over-connected lifestyles might even be a new source of boredom. ‘In modern human society there is a lot of overstimulation but still a lot of problems finding meaning,’ she says. So instead of seeking yet more mental stimulation, perhaps we should leave our phones alone, and use boredom to motivate us to engage with the world in a more meaningful way.`;

      test.reading.passages[2].text = `Artificial artist?
Can computers really create works of art?

The Painting Fool is one of a growing number of computer programs which, so their makers claim, possess creative talents. Classical music by an artificial composer has had audiences enraptured, and even tricked them into believing a human was behind the score. Artworks painted by a robot have sold for thousands of dollars and been hung in prestigious galleries. And software has been built which creates art that could not have been imagined by the programmer.

Human beings are the only species to perform sophisticated creative acts regularly. If we can break this process down into computer code, where does that leave human creativity? ‘This is a question at the very core of humanity,’ says Geraint Wiggins, a computational creativity researcher at Goldsmiths, University of London. ‘It scares a lot of people. They are worried that it is taking something special away from what it means to be human.’

To some extent, we are all familiar with computerised art. The question is: where does the work of the artist stop and the creativity of the computer begin? Consider one of the oldest machine artists, Aaron, a robot that has had paintings exhibited in London’s Tate Modern and the San Francisco Museum of Modern Art. Aaron can pick up a paintbrush and paint on canvas on its own. Impressive perhaps, but it is still little more than a tool to realise the programmer’s own creative ideas.

Simon Colton, the designer of the Painting Fool, is keen to make sure his creation doesn’t attract the same criticism. Unlike earlier ‘artists’ such as Aaron, the Painting Fool only needs minimal direction and can come up with its own concepts by going online for material. The software runs its own web searches and trawls through social media sites. It is now beginning to display a kind of imagination too, creating pictures from scratch. One of its original works is a series of fuzzy landscapes, depicting trees and sky. While some might say they have a mechanical look, Colton argues that such reactions arise from people’s double standards towards software-produced and human-produced art. After all, he says, consider that the Painting Fool painted the landscapes without referring to a photo. ‘If a child painted a new scene from its head, you’d say it has a certain level of imagination,’ he points out. ‘The same should be true of a machine.’ Software bugs can also lead to unexpected results. Some of the Painting Fool’s paintings of a chair came out in black and white, thanks to a technical glitch. This gives the work an eerie, ghostlike quality. Human artists like the renowned Ellsworth Kelly are lauded for limiting their colour palette – so why should computers be any different?

Researchers like Colton don’t believe it is right to measure machine creativity directly against that of humans who ‘have had millennia to develop our skills’. Others, though, are fascinated by the prospect that a computer might create something as original and subtle as our best artists. So far, only one has come close. Composer David Cope invented a program called Experiments in Musical Intelligence, or EMI. Not only did EMI create compositions in Cope’s style, but also that of the most revered classical composers, including Bach, Chopin and Mozart. Audiences were moved to tears, and EMI even fooled classical music experts into thinking they were hearing genuine Bach. Not everyone was impressed however. Some, such as Wiggins, have blasted Cope’s work as pseudoscience, and condemned him for his deliberately vague explanation of how the software worked. Meanwhile, Douglas Hofstadter of Indiana University said EMI created replicas which still rely completely on the original artist’s creative impulses. When audiences found out the truth they were often outraged with Cope, and one music lover even tried to punch him. Amid such controversy, Cope destroyed EMI’s vital databases.

But why did so many people love the music, yet recoil when they discovered how it was composed? A study by computer scientist David Moffat of Glasgow Caledonian University provides a clue. He asked both expert musicians and non-experts to assess six compositions. The participants weren’t told beforehand whether the tunes were composed by humans or computers, but were asked to guess, and then rate how much they liked each one. People who thought the composer was a computer tended to dislike the piece more than those who believed it was human. This was true even among the experts, who might have been expected to be more objective in their analyses.

Where does this prejudice come from? Paul Bloom of Yale University has a suggestion: he reckons part of the pleasure we get from art stems from the creative process behind the work. This can give it an ‘irresistible essence’, says Bloom. Meanwhile, experiments by Justin Kruger of New York University have shown that people’s enjoyment of an artwork increases if they think more time and effort was needed to create it. Similarly, Colton thinks that when people experience art, they wonder what the artist might have been thinking or what the artist is trying to tell them. It seems obvious, therefore, that with computers producing art, this speculation is cut short – there’s nothing to explore. But as technology becomes increasingly complex, finding those greater depths in computer art could become possible. This is precisely why Colton asks the Painting Fool to tap into online social networks for its inspiration: hopefully this way it will choose themes that will already be meaningful to us.`;
    } else {
      test.reading.passages[0].text = `Cinnamon is a sweet, fragrant spice produced from the inner bark of trees of the genus Cinnamomum, which is native to the Indian sub-continent. It was known in biblical times, and is mentioned in several books of the Bible, both as an ingredient that was mixed with oils for anointing people’s bodies, and also as a token indicating friendship among lovers and friends. In ancient Rome, mourners attending funerals burnt cinnamon to create a pleasant scent. Most often, however, the spice found its primary use as an additive to food and drink. In the Middle Ages, Europeans who could afford the spice used it to flavor food, particularly meat, and to impress those around them with their ability to purchase an expensive condiment from the ‘exotic’ East. At a banquet, a host would offer guests a plate with various spices piled upon it as a sign of the wealth at his or her disposal. Cinnamon was also reported to have health benefits, and was thought to cure various ailments, such as indigestion.

Toward the end of the Middle Ages, the European middle classes began to desire the lifestyle of the elite, including their consumption of spices. This led to a growth in demand for cinnamon and other spices. At that time, cinnamon was transported by Arab merchants, who closely guarded the secret of the source of the spice from potential rivals. They took it from India, where it was grown, on camels via an overland route to the Mediterranean. Their journey ended when they reached Alexandria. European traders sailed there to purchase their supply of cinnamon, then brought it back to Venice. The spice then travelled from that great trading city to markets all around Europe. Because the overland trade route allowed for only small quantities of the spice to reach Europe, and because Venice had a virtual monopoly of the trade, the Venetians could set the price of cinnamon exorbitantly high. These prices, coupled with the increasing demand, spurred the search for new routes to Asia by Europeans eager to take part in the spice trade.

Seeking the high profits promised by the cinnamon market, Portuguese traders arrived on the island of Ceylon in the Indian Ocean toward the end of the 15th century. Before Europeans arrived on the island, the state had organized the cultivation of cinnamon. People belonging to the ethnic group called the Salagama would peel the bark off young shoots of the cinnamon plant in the rainy season, when the wet bark was more pliable. During the peeling process, they curled the bark into the ‘stick’ shape still associated with the spice today. The Salagama then gave the finished product to the king as a form of tribute. When the Portuguese arrived, they needed to increase production significantly, and so enslaved many other members of the Ceylonese native population, forcing them to work in cinnamon harvesting. In 1518, the Portuguese built a fort on Ceylon, which enabled them to protect the island, so helping them to develop a monopoly in the cinnamon trade and generate very high profits. In the late 16th century, for example, they enjoyed a tenfold profit when shipping cinnamon over a journey of eight days from Ceylon to India.

When the Dutch arrived off the coast of southern Asia at the very beginning of the 17th century, they set their sights on displacing the Portuguese as kings of cinnamon. The Dutch allied themselves with Kandy, an inland kingdom on Ceylon. In return for payments of elephants and cinnamon, they protected the native king from the Portuguese. By 1649, the Dutch broke the 150-year Portuguese monopoly when they overran and occupied their factories. By 1658, they had permanently expelled the Portuguese from the island, thereby gaining control of the lucrative cinnamon trade.

In order to protect their hold on the market, the Dutch, like the Portuguese before them, treated the native inhabitants harshly. Because of the need to boost production and satisfy Europe’s ever-increasing appetite for cinnamon, the Dutch began to alter the harvesting practices of the Ceylonese. Over time, the supply of cinnamon trees on the island became nearly exhausted, due to systematic stripping of the bark. Eventually, the Dutch began cultivating their own cinnamon trees to supplement the diminishing number of wild trees available for use.

Then, in 1796, the English arrived on Ceylon, thereby displacing the Dutch from their control of the cinnamon monopoly. By the middle of the 19th century, production of cinnamon reached 1,000 tons a year, after a lower grade quality of the spice became acceptable to European tastes. By that time, cinnamon was being grown in other parts of the Indian Ocean region and in the West Indies, Brazil, and Guyana. Not only was a monopoly of cinnamon becoming impossible, but the spice trade overall was diminishing in economic potential, and was eventually superseded by the rise of trade in coffee, tea, chocolate, and sugar.`;

      test.reading.passages[1].text = `Oxytocin
The positive and negative effects of the chemical known as the ‘love hormone’

A
Oxytocin is a chemical, a hormone produced in the pituitary gland in the brain. It was through various studies focusing on animals that scientists first became aware of the influence of oxytocin. They discovered that it helps reinforce the bonds between prairie voles, which mate for life, and triggers the motherly behaviour that sheep show towards their newborn lambs. It is also released by women in childbirth, strengthening the attachment between mother and baby. Few chemicals have as positive a reputation as oxytocin, which is sometimes referred to as the ‘love hormone’. One sniff of it can, it is claimed, make a person more trusting, empathetic, generous and cooperative. It is time, however, to revise this wholly optimistic view. A new wave of studies has shown that its effects vary greatly depending on the person and the circumstances, and it can impact on our social interactions for worse as well as for better.

B
Oxytocin’s role in human behaviour first emerged in 2005. In a groundbreaking experiment, Markus Heinrichs and his colleagues at the University of Freiburg, Germany, asked volunteers to do an activity in which they could invest money with an anonymous person who was not guaranteed to be honest. The team found the participants who had sniffed oxytocin via a nasal spray beforehand invested more money than those who received a placebo instead. The study was the start of research into the effects of oxytocin on human interactions. ‘For eight years, it was quite a lonesome field,’ Heinrichs recalls. ‘Now, everyone is interested.’ These follow-up studies have shown that after a sniff of the hormone, people become more charitable, better at reading emotions on others’ faces and at communicating constructively in arguments. Together, the results fuelled the view that oxytocin universally enhanced the positive aspects of our social nature.

C
Then, after a few years, contrasting findings began to emerge. Simone Shamay-Tsoory at the University of Haifa, Israel, found that when volunteers played a competitive game, those who inhaled the hormone showed more pleasure when they beat other players, and felt more envy when others won. What’s more, administering oxytocin also has sharply contrasting outcomes depending on a person’s disposition. Jennifer Bartz from Mount Sinai School of Medicine, New York, found that it improves people’s ability to read emotions, but only if they are not very socially adept to begin with. Her research also shows that oxytocin in fact reduces cooperation in subjects who are particularly anxious or sensitive to rejection.

D
Another discovery is that oxytocin’s effects vary depending on who we are interacting with. Studies conducted by Carolyn DeClerck of the University of Antwerp, Belgium, revealed that people who had received a dose of oxytocin actually became less cooperative when dealing with complete strangers. Meanwhile, Carsten De Dreu at the University of Amsterdam in the Netherlands discovered that volunteers given oxytocin showed favouritism: Dutch men became quicker to associate positive words with Dutch names than with foreign ones, for example. According to De Dreu, oxytocin drives people to care for those in their social circles and defend them from outside dangers. So, it appears that oxytocin strengthens biases, rather than promoting general goodwill, as was previously thought.

E
There were signs of these subtleties from the start. Bartz has recently shown that in almost half of the existing research results, oxytocin influenced only certain individuals or in certain circumstances. Where once researchers took no notice of such findings, now a more nuanced understanding of oxytocin’s effects is propelling investigations down new lines. To Bartz, the key to understanding what the hormone does lies in pinpointing its core function rather than in cataloguing its seemingly endless effects. There are several hypotheses which are not mutually exclusive. Oxytocin could help to reduce anxiety and fear. Or it could simply motivate people to seek out social connections. She believes that oxytocin acts as a chemical spotlight that shines on social clues – a shift in posture, a flicker of the eyes, a dip in the voice – making people more attuned to their social environment. This would explain why it makes us more likely to look others in the eye and improves our ability to identify emotions. But it could also make things worse for people who are overly sensitive or prone to interpreting social cues in the worst light.

F
Perhaps we should not be surprised that the oxytocin story has become more perplexing. The hormone is found in everything from octopuses to sheep, and its evolutionary roots stretch back half a billion years. ‘It’s a very simple and ancient molecule that has been co-opted for many different functions,’ says Sue Carter at the University of Illinois, Chicago, USA. ‘It affects primitive parts of the brain like the amygdala, so it’s going to have many effects on just about everything.’ Bartz agrees. ‘Oxytocin probably does some very basic things, but once you add our higher-order thinking and social situations, these basic processes could manifest in different ways depending on individual differences and context.’`;

      test.reading.passages[2].text = `Making the most of trends
Experts from Harvard Business School give advice to managers

Most managers can identify the major trends of the day. But in the course of conducting research in a number of industries and working directly with companies, we have discovered that managers often fail to recognize the less obvious but profound ways these trends are influencing consumers’ aspirations, attitudes, and behaviors. This is especially true of trends that managers view as peripheral to their core markets.

Many ignore trends in their innovation strategies or adopt a wait-and-see approach and let competitors take the lead. At a minimum, such responses mean missed profit opportunities. At the extreme, they can jeopardize a company by ceding to rivals the opportunity to transform the industry. The purpose of this article is twofold: to spur managers to think more expansively about how trends could engender new value propositions in their core markets, and to provide some high-level advice on how to make market research and product development personnel more adept at analyzing and exploiting trends.

One strategy, known as ‘infuse and augment’, is to design a product or service that retains most of the attributes and functions of existing products in the category but adds others that address the needs and desires unleashed by a major trend. A case in point is the Poppy range of handbags, which the firm Coach created in response to the economic downturn of 2008. The Coach brand had been a symbol of opulence and luxury for nearly 70 years, and the most obvious reaction to the downturn would have been to lower prices. However, that would have risked cheapening the brand’s image. Instead, they initiated a consumer-research project which revealed that customers were eager to lift themselves and the country out of tough times. Using these insights, Coach launched the lower-priced Poppy handbags, which were in vibrant colors, and looked more youthful and playful than conventional Coach products. Creating the sub-brand allowed Coach to avert an across-the-board price cut. In contrast to the many companies that responded to the recession by cutting prices, Coach saw the new consumer mindset as an opportunity for innovation and renewal.

A further example of this strategy was supermarket Tesco’s response to consumers’ growing concerns about the environment. With that in mind, Tesco, one of the world’s top five retailers, introduced its Greener Living program, which demonstrates the company’s commitment to protecting the environment by involving consumers in ways that produce tangible results. For example, Tesco customers can accumulate points for such activities as reusing bags, recycling cans and printer cartridges, and buying home-insulation materials. Like points earned on regular purchases, these green points can be redeemed for cash. Tesco has not abandoned its traditional retail offering but augmented its business with these innovations, thereby infusing its value proposition with a green streak.

A more radical strategy is ‘combine and transcend’. This entails combining aspects of the product’s existing value proposition with attributes addressing changes arising from a trend, to create a novel experience – one that may land the company in an entirely new market space. At first glance, spending resources to incorporate elements of a seemingly irrelevant trend into one’s core offerings sounds like it’s hardly worthwhile. But consider Nike’s move to integrate the digital revolution into its reputation for high-performance athletic footwear. In 2006, they teamed up with technology company Apple to launch Nike+, a digital sports kit comprising a sensor that attaches to the running shoe and a wireless receiver that connects to the user’s iPod. By combining Nike’s original value proposition for amateur athletes with one for digital consumers, the Nike+ sports kit and web interface moved the company from a focus on athletic apparel to a new plane of engagement with its customers.

A third approach, known as ‘counteract and reaffirm’, involves developing products or services that stress the values traditionally associated with the category in ways that allow consumers to oppose – or at least temporarily escape from – the aspects of trends they view as undesirable. A product that accomplished this is the ME2, a video game created by Canada’s iToys. By reaffirming the toy category’s association with physical play, the ME2 counteracted some of the widely perceived negative impacts of digital gaming devices. Like other handheld games, the device featured a host of exciting interactive games, a full-color LCD screen, and advanced 3D graphics. What set it apart was that it incorporated the traditional physical component of children’s play: it contained a pedometer, which tracked and awarded points for physical activity (walking, running, biking, skateboarding, climbing stairs). The child could use the points to enhance various virtual skills needed for the video game. The ME2, introduced in mid-2008, catered to kids’ huge desire to play video games while countering the negatives, such as associations with lack of exercise and obesity.

Once you have gained perspective on how trend-related changes in consumer opinions and behaviors impact on your category, you can determine which of our three innovation strategies to pursue. When your category’s basic value proposition continues to be meaningful for consumers influenced by the trend, the infuse-and-augment strategy will allow you to reinvigorate the category. If analysis reveals an increasing disparity between your category and consumers’ new focus, your innovations need to transcend the category to integrate the two worlds. Finally, if aspects of the category clash with undesired outcomes of a trend, such as associations with unhealthy lifestyles, there is an opportunity to counteract those changes by reaffirming the core values of your category.

Trends – technological, economic, environmental, social, or political – that affect how people perceive the world around them and shape what they expect from products and services present firms with unique opportunities for growth.`;
    }

    // ===================== 写作（真实题目 + 范文示例） =====================
    if (tid === 1) {
      test.writing.tasks = [
        {
          task: 'Task 1 (小作文)',
          type: '地图描述 - 对比地图',
          prompt: 'The two maps below show road access to a city hospital in 2007 and in 2010.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
          modelAnswer: 'The two maps illustrate the road access arrangements to a city hospital in 2007 and in 2010. Overall, while the hospital and the ring road remained unchanged, several new features were added by 2010 to improve access and parking.\n\nIn both years, the city hospital is shown in the centre, surrounded by the Ring Road, with a staff car park to its west. The hospital road runs from the ring road to the hospital entrance.\n\nBy 2010, a number of changes had taken place. A new public car park was built to the east of the hospital, and a bus station was added to the west, near the staff car park. In addition, two roundabouts were constructed on the hospital road – one at each end – to help traffic flow more smoothly between the ring road and the hospital.\n\nIn summary, the 2010 map shows a more developed layout with extra parking, a bus station and roundabouts, whereas the 2007 map was simpler with only the hospital, staff car park and ring road.',
          tips: '先总览(overview)再分述；对比“不变”与“新增”；用过去时态与方位介词；至少150词'
        },
        {
          task: 'Task 2 (大作文)',
          type: '议论文（同意/不同意）',
          prompt: 'Living in a country where you have to speak a foreign language can cause serious social problems, as well as practical problems.\n\nTo what extent do you agree or disagree with this statement?\n\nWrite at least 250 words.',
          modelAnswer: 'It is sometimes argued that living in a country where the native language is not your own can lead to both practical and social difficulties. I largely agree with this view, although the extent of the problem depends on the individual and the context.\n\nOn a practical level, not speaking the local language clearly creates daily obstacles. Simple tasks such as visiting a doctor, dealing with official paperwork, or even shopping can become stressful when communication is impossible. This can make newcomers feel isolated and dependent on others, which is especially hard for older immigrants or those who arrive without support networks.\n\nSocially, the impact can be even more serious. Language is closely tied to belonging; without it, forming friendships or participating in community life is difficult. Misunderstandings may arise, and some locals may unintentionally exclude those who cannot join conversations. Over time this can contribute to segregation and even tension between groups.\n\nHowever, I do not believe the problems are inevitable. In many multicultural societies, translation services, language classes and tolerant attitudes reduce the barriers considerably. Moreover, English is widely used internationally, so in some countries a foreign resident may manage reasonably well. Still, genuine integration almost always requires learning the local language.\n\nIn conclusion, while learning a foreign language is challenging, the social and practical problems of not speaking it are real and significant. I therefore agree that they can be serious, though good support systems can soften their effect.',
          tips: '明确立场（agree/disagree）； practical 与 social 各写一段并举例；结尾重申；至少250词'
        }
      ];
    } else {
      test.writing.tasks = [
        {
          task: 'Task 1 (小作文)',
          type: '柱状图描述',
          prompt: 'The chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
          modelAnswer: 'The bar chart compares the proportions of households living in owned and rented accommodation in England and Wales from 1918 to 2011. Overall, home ownership rose to dominate the period, while renting declined, and the two were roughly equal around 1971.\n\nIn 1918, about 78% of households rented their home, whereas only around 22% were owners. Renting remained high (about 70%) in 1939 and 1953, before falling sharply to roughly 35% by 1981, where it stayed until 2001. It then rose slightly to about 38% in 2011.\n\nOwnership showed the opposite trend. From a low of around 22% in 1918, it grew steadily to approximately 32% by 1953 and then increased more rapidly, reaching a peak of about 69% in 1991. After that it declined a little, to 62% in 2011.\n\nNotably, in 1971 the two categories were almost identical, with each close to 50%. This highlights a major shift from a nation of renters in the early 20th century to one of owners by its end.',
          tips: '动态图按类别分述趋势；抓转折点（如1971持平）；过去时态；至少150词'
        },
        {
          task: 'Task 2 (大作文)',
          type: '议论文（同意/不同意）',
          prompt: 'Some people believe that nowadays we have too many choices.\n\nTo what extent do you agree or disagree with this statement?\n\nWrite at least 250 words.',
          modelAnswer: 'It is often claimed that modern life offers an excessive number of choices. While I accept that in certain areas choice has become overwhelming, I do not believe this is true across the board, and in many cases variety remains beneficial.\n\nThere are clearly fields where abundance causes stress. Television is a good example: with hundreds of channels and endless streaming options, people can spend more time deciding what to watch than actually watching. Similarly, the sheer range of consumer products can lead to decision fatigue, where buyers feel paralysed rather than empowered. In such cases, having “too many choices” can reduce satisfaction.\n\nHowever, in other areas, choice is liberating. Food is one: different diets, cultures and tastes mean a wide selection lets almost anyone find something they enjoy, and a larger family can satisfy everyone. Education and careers are another: the availability of diverse universities and professions allows people to find work that fits their abilities and interests, rather than being forced into a single path. These are cases where more options are plainly positive.\n\nIn conclusion, I partly agree with the statement. Choice can be excessive in some consumer and media contexts, but in fundamental areas such as food, study and work it remains a source of freedom and self-expression rather than a problem.',
          tips: '可写“部分同意”；分别举例支持与反对；结构清晰、连接自然；至少250词'
        }
      ];
    }

    // ===================== 口语（真实话题 + 参考回答示例） =====================
    if (tid === 1) {
      test.speaking.parts = [
        {
          part: 'Part 1: Introduction & Interview',
          intro: '考官就日常话题提问，约4-5分钟。话题：Television Programmes',
          questions: [
            { q: 'Where do you usually watch TV programmes/shows? Why/Why not?', a: '参考回答: I usually watch at home on the sofa using streaming services, because it’s comfortable and I can choose what to watch whenever I like.' },
            { q: 'What\'s your favourite TV programme/show? Why?', a: '参考回答: I really enjoy crime thrillers – the suspense and plot twists keep me guessing, and the characters are well developed.' },
            { q: 'Are there any programmes/shows you don\'t like watching? Why/Why not?', a: '参考回答: I’m not keen on reality TV; it often feels scripted, and I prefer shows with strong storytelling.' },
            { q: 'Do you think you will watch more TV or fewer TV programmes/shows in the future? Why/Why not?', a: '参考回答: Probably fewer, as life gets busier and I tend to prioritise other activities over sitting in front of the TV.' }
          ]
        },
        {
          part: 'Part 2: Long Turn (Cue Card)',
          intro: '根据题目卡准备1分钟，独自陈述2分钟',
          cueCard: 'Describe someone you know who has started a business.\n\nYou should say:\n– who this person is\n– what work this person does\n– why this person decided to start a business\n– and explain whether you would like to do the same kind of work as this person.',
          modelAnswer: '参考回答:\n\nI’d like to talk about my uncle, who owns a small bakery in our neighbourhood. He decided to start this business after realising his passion for baking and wanting to share his creations with the community.\n\nHe makes a variety of baked goods – bread, cakes and pastries – and often experiments with new recipes, which keeps his menu exciting. He started the bakery to turn a hobby into a career and to create a friendly place where people could gather.\n\nI admire his dedication and creativity, and it’s inspiring to see how he has built a loyal customer base. While I appreciate the idea of running a business, I think I would prefer a more structured work environment, though I’d love to learn baking from him one day.',
          tips: '覆盖全部四个要点；用过去/现在时自然叙述；加入具体细节；控制2分钟'
        },
        {
          part: 'Part 3: Discussion',
          intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Choosing Work & Work-Life Balance',
          questions: [
            { q: 'What kinds of jobs do young people not want to do in your country?', a: '参考回答: Many avoid physically demanding work like construction or factory jobs, preferring careers that offer creativity and advancement.' },
            { q: 'Who is best at advising young people about choosing a job: teachers or parents?', a: '参考回答: Both matter – teachers offer insights into options and skills, while parents guide from their own experience.' },
            { q: 'Is money always the most important thing when choosing a job?', a: '参考回答: No. Job satisfaction, work-life balance and growth also matter, and many want work that fits their values.' },
            { q: 'Do you agree that many people are under pressure to work longer hours and take less holiday?', a: '参考回答: Yes. Technology and remote work make it hard to disconnect, which can lead to burnout.' },
            { q: 'What is the impact on society of a poor work-life balance?', a: '参考回答: It raises stress and health problems, lowers productivity, and can strain family relationships.' },
            { q: 'What strategies could help people have a better work-life balance?', a: '参考回答: Flexible hours, encouraging people to take holidays, and providing mental-health support would all help.' }
          ]
        }
      ];
    } else {
      test.speaking.parts = [
        {
          part: 'Part 1: Introduction & Interview',
          intro: '考官就日常话题提问，约4-5分钟。话题：Age',
          questions: [
            { q: 'Are you happy to be the age you are now? Why/Why not?', a: '参考回答: Yes, I’m happy – I feel I’ve gained experience and maturity, which helps me make better decisions.' },
            { q: 'When you were a child, did you think a lot about your future? Why/Why not?', a: '参考回答: Not really; I focused on enjoying childhood, though I occasionally wondered what I’d be when I grew up.' },
            { q: 'Do you think you have changed as you have got older? Why/Why not?', a: '参考回答: Yes, I’ve become more responsible and open-minded, with clearer goals and values.' },
            { q: 'What will be different about your life in the future? Why?', a: '参考回答: I hope for a stable career and more independence, plus opportunities to travel and broaden my perspective.' }
          ]
        },
        {
          part: 'Part 2: Long Turn (Cue Card)',
          intro: '根据题目卡准备1分钟，独自陈述2分钟',
          cueCard: 'Describe a time when you started using a new technological device.\n\nYou should say:\n– what device you started using\n– why you started using this device\n– how easy or difficult it was to use\n– and explain how helpful this device was to you.',
          modelAnswer: '参考回答:\n\nI’d like to talk about when I first started using a smartphone. I got one because I wanted a single device that combined a phone, a camera and internet access.\n\nAt first it was a bit challenging – I had to learn to navigate the touchscreen and download apps. But with online tutorials and friends’ help I quickly got the hang of it.\n\nThe smartphone has been very helpful: it keeps me connected with family and friends, lets me access information on the go, and captures memorable moments with its camera. It has definitely made my life more convenient.',
          tips: '覆盖全部四个要点；用过去时叙述“开始使用”的过程；说明帮助；控制2分钟'
        },
        {
          part: 'Part 3: Discussion',
          intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Technology and Education / Society',
          questions: [
            { q: 'What is the best age for children to start computer lessons?', a: '参考回答: Around 6 or 7, when they can grasp basic concepts and learn to use technology effectively.' },
            { q: 'Should schools use more technology to help children learn?', a: '参考回答: Yes – it makes learning more engaging and interactive, helping students understand complex subjects.' },
            { q: 'Do you agree that computers will replace teachers one day?', a: '参考回答: No. Technology can assist, but the human element – support, encouragement, social interaction – remains essential.' },
            { q: 'How much has technology improved how we communicate?', a: '参考回答: Greatly – we connect instantly worldwide via social media, video calls and messaging.' },
            { q: 'Are there still many major technological innovations to be made?', a: '参考回答: Absolutely, especially in healthcare, renewable energy and artificial intelligence.' },
            { q: 'Why do some people reduce their use of technology?', a: '参考回答: To protect mental health, seek meaningful interactions, or disconnect from overwhelming information.' }
          ]
        }
      ];
    }

    // ===================== 听力原文脚本（真实，覆盖 listening-scripts.js 中 13-T-*） =====================
    if (typeof LISTENING_SCRIPTS !== 'undefined') {
      if (tid === 1) {
        LISTENING_SCRIPTS['13-1-0'] = `OFFICIAL: Hello, Tourist Information Centre, Mike speaking, how can I help you?

WOMAN: Oh, hi. I wanted to find out about cookery classes. I believe there are some one-day classes for tourists?

OFFICIAL: Well, they're open to everyone, but tourists are always welcome. OK, let me give you some details of what's available. There are several classes. One very popular one is at the Food Studio.

WOMAN: OK.

OFFICIAL: They focus on seasonal products, and as well as teaching you how to cook them, they also show you how to choose them.

WOMAN: Right, that sounds good. How big are the classes?

OFFICIAL: I'm not sure exactly, but they'll be quite small.

WOMAN: And could I get a private lesson there?

OFFICIAL: I think so … let me check, yes, they do offer those. Though in fact most of the people who attend the classes find it's a nice way of getting to know one another.

WOMAN: I suppose it must be, yes.

OFFICIAL: And this company has a special deal for clients where they offer a discount of 20 percent if you return for a further class.

WOMAN: OK. But you said there were several classes?

OFFICIAL: That's right. Another one you might be interested in is Bond's Cookery School. They're quite new, they just opened six months ago, but I've heard good things about them. They concentrate on teaching you to prepare healthy food, and they have quite a lot of specialist staff.

WOMAN: So is that food for people on a diet and things like that? I don't know if I'd be interested in that.

OFFICIAL: Well, I don't think they particularly focus on low calorie diets or weight loss. It's more to do with recipes that look at specific needs, like including ingredients that will help build up your bones and make them stronger, that sort of thing.

WOMAN: I see. Well, I might be interested, I'm not sure. Do they have a website I could check?

OFFICIAL: Yes, just key in the name of the school – it'll come up. And if you want to know more about them, every Thursday evening they have a lecture at the school. It's free and you don't need to book or anything, just turn up at 7.30. And that might give you an idea of whether you want to go to an actual class.

WOMAN: OK, there's one more place you might be interested in. That's got a rather strange name, it's called The Arretsa Centre – that's spelled A-R-R-E-T-S-A.

WOMAN: OK.

OFFICIAL: They've got a very good reputation. They do a bit of meat and fish cookery but they mostly specialise in vegetarian dishes.

WOMAN: Right. That's certainly an area I'd like to learn more about. I've got lots of friends who don't eat meat. In fact, I think I might have seen that school today. Is it just by the market?

OFFICIAL: That's right. So they don't have any problem getting their ingredients. They're right next door. And they also offer a special two-hour course in how to use a knife. They cover all the different skills – buying them, sharpening, chopping techniques. It gets booked up quickly though so you'd need to check it was available.

WOMAN: Right, well thank you very much. I'll go and ...`;

        LISTENING_SCRIPTS['13-1-1'] = `Good evening everyone. My name's Phil Sutton, and I'm chairman of the Highways Committee. We've called this meeting to inform members of the public about the new regulations for traffic and parking we're proposing for Granford. I'll start by summarising these changes before we open the meeting to questions.

So, why do we need to make these changes to traffic systems in Granford? Well, we're very aware that traffic is becoming an increasing problem. It's been especially noticeable with the increase in heavy traffic while they've been building the new hospital. But it's the overall rise in the volume of traffic of all kinds that's concerning us. To date there's not been any increase in traffic accidents, but that's not something we want to see happen, obviously.

We recently carried out a survey of local residents, and their responses were interesting. People were very concerned about the lack of visibility on some roads due to cars parked along the sides of the roads. We'd expected complaints about the congestion near the school when parents are dropping off their children or picking them up, but this wasn't top of the list, and nor were noise and fumes from trucks and lorries, though they were mentioned by some people.

We think these new traffic regulations would make a lot of difference. But we still have a long way to go. We've managed to keep our proposals within budget, just, so they can be covered by the Council. But, of course, it's no good introducing new regulations if we don't have a way of making sure that everyone obeys them, and that's an area we're still working on with the help of representatives from the police force.

OK, so this slide shows a map of the central area of Granford, with the High Street in the middle and School Road on the right. Now, we already have a set of traffic lights in the High Street at the junction with Station Road, but we're planning to have another set at the other end, at the School Road junction, to regulate the flow of traffic along the High Street.

We're decided we definitely need a pedestrian crossing. We considered putting this on School Road, just outside the school, but in the end we decided that could lead to a lot of traffic congestion so we decided to locate it on the High Street, crossing the road in front of the supermarket. That's a very busy area, so it should help things there.

We're proposing some changes to parking. At present, parking isn't allowed on the High Street outside the library, but we're going to change that, and allow parking there, but not at the other end of the High Street near School Road.

There'll be a new 'No Parking' sign on School Road, just by the entrance to the school, forbidding parking for 25 metres. This should improve visibility for drivers and pedestrians, especially on the bend just to the north of the school.

As far as disabled drivers are concerned, at present they have parking outside the supermarket, but lorries also use those spaces, so we've got two new disabled parking spaces on the side road up towards the bank. It's not ideal, but probably better than the present arrangement.

We also plan to widen the pavement on School Road. We think we can manage to get an extra half-metre on the bend just before you get to the school, on the same side of the road.

Finally, we've introduced new restrictions on loading and unloading for the supermarket, so lorries will only be allowed to stop there before 8 am. That's the supermarket on School Road – we kept to the existing arrangements with the High Street supermarket.

OK. So that's about it. Now, would anyone ...`;

        LISTENING_SCRIPTS['13-1-2'] = `EMMA: We've got to choose a topic for our experiment, haven't we, Jack? Were you thinking of something to do with seeds?

JACK: That's right. I thought we could look at seed germination – how a seed begins to grow.

EMMA: OK. Any particular reason? I know you're hoping to work in plant science eventually …

JACK: Yeah, but practically everything we do is going to feed into that. No, there's an optional module on seed structure and function in the third year that I might do, so I thought it might be useful for that. If I choose that option, I don't have to do a dissertation module.

EMMA: Good idea.

JACK: Well, I thought for this experiment we could look at the relationship between seed size and the way the seeds are planted. So, we could plant different sized seeds in different ways, and see which grow best.

EMMA: OK. We'd need to allow time for the seeds to come up.

JACK: That should be fine if we start now. A lot of the other possible experiments need quite a bit longer.

EMMA: So that'd make it a good one to choose. And I don't suppose it'd need much equipment; we're not doing chemical analysis or anything. Though that's not really an issue, we've got plenty of equipment in the laboratory.

JACK: Yeah. We need to have a word with the tutor if we're going to go ahead with it though. I'm sure our aim's OK. It's not very ambitious but the assignment's only ten percent of our final mark, isn't it? But we need to be sure we're the only ones doing it.

EMMA: Yeah, it's only five percent actually, but it'd be a bit boring if everyone was doing it.

JACK: Did you read that book on seed germination on our reading list?

EMMA: The one by Graves? I looked through it for my last experiment, though it wasn't all that relevant there. It would be for this experiment, though. I found it quite hard to follow – lots about the theory, which I hadn't expected.

JACK: Yes, I'd been hoping for something more practical. It does include references to the recent findings on genetically-modified seeds, though.

EMMA: Yes, that was interesting.

JACK: I read an article about seed germination by Lee Hall.

EMMA: About seeds that lie in the ground for ages and only germinate after a fire?

JACK: That's the one. I knew a bit about it already, but not about this research. His analysis of figures comparing the times of the fires and the proportion of seeds that germinated was done in a lot of detail – very impressive.

EMMA: Was that the article with the illustrations of early stages of plant development? They were very clear.

JACK: I think those diagrams were in another article.

EMMA: Anyway, shall we have a look at the procedure for our experiment? We'll need to get going with it quite soon.

JACK: Right. So the first thing we have to do is find our seeds. I think vegetable seeds would be best. And obviously they mustn't all be the same size. So, how many sorts do we need? About four different ones?

EMMA: I think that would be enough. There'll be quite a large number of seeds for each one.

JACK: Then, for each seed we need to find out how much it weighs, and also measure its dimensions, and we need to keep a careful record of all that.

EMMA: That'll be quite time-consuming. And we also need to decide how deep we're going to plant the seeds – right on the surface, a few millimetres down, or several centimetres.

JACK: OK. So then we get planting. Do you think we can plant several seeds together in the same plant pot?

EMMA: No, I think we need a different one for each seed.

JACK: Right. And we'll need to label them – we can use different coloured labels. Then we wait for the seeds to germinate – I reckon that'll be about three weeks, depending on what the weather's like. Then we see if our plants have come up, and write down how tall they've grown.

EMMA: Then all we have to do is look at our numbers, and see if there's any relation between them.

JACK: That's right. So ...`;

        LISTENING_SCRIPTS['13-1-3'] = `Hi. Today we're going to be looking at animals in urban environments and I'm going to be telling you about some research on how they're affected by these environments.

Now, in evolutionary terms, urban environments represent huge upheavals, the sorts of massive changes that usually happen over millions of years. And we used to think that only a few species could adapt to this new environment. One species which is well known as being highly adaptable is the crow, and there've been various studies about how they manage to learn new skills. Another successful species is the pigeon, because they're able to perch on ledges on the walls of city buildings, just like they once perched on cliffs by the sea.

But in fact, we're now finding that these early immigrants were just the start of a more general movement of animals into cities, and of adaptation by these animals to city life. And one thing that researchers are finding especially interesting is the speed with which they're doing this – we're not talking about gradual evolution here – these animals are changing fast.

Let me tell you about some of the studies that have been carried out in this area. So, in the University of Minnesota, a biologist called Emilie Snell-Rood and her colleagues looked at specimens of urbanised small mammals such as mice and gophers that had been collected in Minnesota, and that are now kept in museums there. And she looked at specimens that had been collected over the last hundred years, which is a very short time in evolutionary terms. And she found that during that time, these small mammals had experienced a jump in brain size when compared to rural mammals. Now, we can't be sure this means they're more intelligent, but since the sizes of other parts of the body didn't change, it does suggest that something cognitive was going on. And Snell-Rood thinks that this change might reflect the cognitive demands of adjusting to city life – having to look in different places to find food, for example, and coping with a whole new set of dangers.

Then over in Germany at the Max Planck Institute, there's another biologist called Catarina Miranda who's done some experiments with blackbirds living in urban and rural areas. And she's been looking not at their anatomy but at their behaviour. So as you might expect, she's found that the urban blackbirds tend to be quite bold – they're prepared to face up to a lot of threats that would frighten away their country counterparts. But there's one type of situation that does seem to frighten the urban blackbirds, and that's anything new – anything they haven't experienced before. And if you think about it, that's quite sensible for a bird living in the city.

Jonathan Atwell, in Indiana University, is looking at how a range of animals respond to urban environments. He's found that when they're under stress, their endocrine systems react by reducing the amount of hormones such as corticosterone into their blood. It's a sensible-seeming adaptation. A rat that gets scared every time a subway train rolls past won't be very successful.

There's just one more study I'd like to mention which is by Sarah Partan and her team, and they've been looking at how squirrels communicate in an urban environment, and they've found that a routine part of their communication is carried out by waving their tails. You do also see this in the country, but it's much more prevalent in cities, possibly because it's effective in a noisy environment.

So what are the long-term implications of this? One possibility is that we may see completely new species developing in cities. But on the other hand, it's possible that not all of these adaptations will be permanent. Once the animal's got accustomed to its new environment, it may no longer need the features it's developed.

So, now we've had a look ...`;
      } else {
        LISTENING_SCRIPTS['13-2-0'] = `JIM: Hello, South City Cycling Club.

WOMAN: Oh, hi. Er … I want to find out about joining the club.

JIM: Right. I can help you there. I'm the club secretary and my name's Jim Hunter.

WOMAN: Oh, hi Jim.

JIM: So, are you interested in membership for yourself?

WOMAN: That's right.

JIM: OK. Well there are basically two types of adult membership. If you're pretty serious about cycling, there's the Full membership. That costs 260 dollars and that covers you not just for ordinary cycling but also for races both here in the city and also in other parts of Australia.

WOMAN: Right. Well, I'm not really up to that standard. I was more interested in just joining a group to do some cycling in my free time.

JIM: Sure. That's why most people join. So, in that case you'd be better with the Recreational membership. That's 108 dollars if you're over 19, and 95 dollars if you're under.

WOMAN: I'm 25.

JIM: OK. It's paid quarterly, and you can upgrade it later to the Full membership if you want to, of course. Now both types of membership include the club fee of 20 dollars. They also provide insurance in case you have an accident, though we hope you won't need that, of course.

WOMAN: No. OK, well, I'll go with the Recreational membership, I think. And that allows me to join in the club activities, and so on?

JIM: That's right. And once you're a member of the club, you're also permitted to wear our kit when you're out cycling. It's green and white.

WOMAN: Yes, I've seen cyclists wearing it. So, can I buy that at the club?

JIM: No, it's made to order by a company in Brisbane. You can find them online: they're called Jerriz. That's J-E-R-R-I-Z. You can use your membership number to put in an order on their website.

WOMAN: OK. Now, can you tell me a bit about the rides I can do?

JIM: Sure. So we have training rides pretty well every morning, and they're a really good way of improving your cycling skills as well as your general level of fitness, but they're different levels. Level A is pretty fast – you're looking at about 30 or 35 kilometres an hour. If you can do about 25 kilometres an hour, you'd probably be level B, and then level C are the novices, who stay at about 15 kilometres per hour.

WOMAN: Right. Well I reckon I'd be level B. So, when are the sessions for that level?

JIM: There are a couple each week. They're both early morning sessions. There's one on Tuesdays, and for that one you meet at 5.30 am, and the meeting point's the stadium – do you know where that is?

WOMAN: Yes, it's quite near my home, in fact. OK, and how about the other one?

JIM: That's on Thursdays. It starts at the same time, but they meet at the main gate to the park.

WOMAN: Is that the one just past the shopping mall?

JIM: That's it.

WOMAN: So how long are the rides?

JIM: They're about an hour and a half. So, if you have a job it's easy to fit in before you go to work. And the members often go somewhere for coffee afterwards, so it's quite a social event.

WOMAN: OK. That sounds good. I've only just moved to the city so I don't actually know many people yet.

JIM: Well, it's a great way to meet people.

WOMAN: And does each ride have a leader?

JIM: Sometimes, but not always. But you don't really need one; the group members on the ride support one another, anyway.

WOMAN: How would we know where to go?

JIM: If you check the club website, you'll see that the route for each ride is clearly marked. So you can just print that out and take it along with you. It's similar from one week to another, but it's not always exactly the same.

WOMAN: And what do I need to bring?

JIM: Well, bring a bottle of water, and your phone. You shouldn't use it while you're cycling, but have it with you.

WOMAN: Right.

JIM: And in winter, it's well before sunrise when we set out, so you need to make sure your bike's got lights.

WOMAN: That's OK. Well, thanks Jim. I'd definitely like to join. So what's the best way of going about it?

JIM: You can ...`;

        LISTENING_SCRIPTS['13-2-1'] = `Thanks for coming everyone. OK, so this meeting is for new staff and staff who haven't been involved with our volunteering projects yet. So basically, the idea is that we allow staff to give up some of their work time to help on various charity projects to benefit the local community. We've been doing this for the last five years and it's been very successful.

Participating doesn't necessarily involve a huge time commitment. The company will pay for eight hours of your time. That can be used over one or two days all at once, or spread over several months throughout the year. There are some staff who enjoy volunteering so much they also give up their own free time for a couple of hours every week. It's completely up to you. Obviously, many people will have family commitments and aren't as available as other members of staff.

Feedback from staff has been overwhelmingly positive. Because they felt they were doing something really useful, nearly everyone agreed that volunteering made them feel more motivated at work. They also liked building relationships with the people in the local community and felt valued by them. One or two people also said it was a good thing to have on their CVs.

One particularly successful project last year was the Get Working Project. This was aimed at helping unemployed people in the area get back to work. Our staff were able to help them improve their telephone skills, such as writing down messages and speaking with confidence to potential customers, which they had found quite difficult. This is something many employers look for in job applicants – and something we all do without even thinking about, every day at work.

We've got an exciting new project starting this year. Up until now, we've mainly focused on projects to do with education and training. And we'll continue with our reading project in schools and our work with local charities. But we're also agreed to help out on a conservation project in Redfern Park. So if any of you fancy being outside and getting your hands dirty, this is the project for you.

I also want to mention the annual Digital Inclusion Day, which is coming up next month. The aim of this is to help older people keep up with technology. And this year, instead of hosting the event in our own training facility, we're using the ICT suite at Hill College, as it can hold far more people.

We've invited over 60 people from the Silver Age Community Centre to take part, so we'll need a lot of volunteers to help with this event.

If you're interested in taking part, please go to the volunteering section of our website and complete the relevant form. We won't be providing any training for this but you'll be paired with an experienced volunteer if you've never done it before. By the way, don't forget to tell your manager about any volunteering activities you decide to do.

The participants on the Digital Inclusion Day really benefited. The majority were in their seventies, though some were younger and a few were even in their nineties! Quite a few owned both a computer and a mobile phone, but these tended to be outdated models. They generally knew how to do simple things, like send texts, but weren't aware of recent developments in mobile phone technology. A few were keen to learn but most were quite dismissive at first – they couldn't see the point of updating their skills. But that soon changed.

The feedback was very positive. The really encouraging thing was that participants all said they felt much more confident about using social media to keep in touch with their grandchildren, who prefer this form of communication to phoning or sending emails. A lot of them also said playing online games would help them make new friends and keep their brains active. They weren't that impressed with being able to order their groceries online, as they liked going out to the shops, but some said it would come in handy if they were ill or the weather was really bad. One thing they asked about was using tablets for things like reading newspapers – some people had been given tablets as presents but had never used them, so that's something we'll make sure we include this time ...`;

        LISTENING_SCRIPTS['13-2-2'] = `TUTOR: Ah … come in, Russ.

RUSS: Thank you.

TUTOR: Now you wanted to consult me about your class presentation on nanotechnology – you're due to give it in next week, aren't you?

RUSS: That's right. And I'm really struggling. I chose the topic because I didn't know much about it and wanted to learn more, but now I've read so much about it, in a way there's too much to say – I could talk for much longer than the twenty minutes I've been allocated. Should I assume the other students don't know much, and give them a kind of general introduction, or should I try and make them share my fascination with a particular aspect?

TUTOR: You could do either, but you'll need to have it clear in your own mind.

RUSS: Then I think I'll give an overview.

TUTOR: OK. Now, one way of approaching this is to work through developments in chronological order.

RUSS: Uh-huh.

TUTOR: On the other hand, you could talk about the numerous ways that nanotechnology is being applied.

RUSS: You mean things like thin films on camera displays to make them water-repellent, and additives to make motorcycle helmets stronger and lighter.

TUTOR: Exactly. Or another way would be to focus on its impact in one particular area, say medicine, or space exploration.

RUSS: That would make it easier to focus. Perhaps I should do that.

TUTOR: I think that would be a good idea.

RUSS: Right. How important is it to include slides in the presentation?

TUTOR: They aren't essential, by any means. And there's a danger of tailoring what you say to fit whatever slides you can find. While it can be good to include slides, you could end up spending too long looking for suitable ones. You might find it better to leave them out.

RUSS: I see. Another thing I was wondering about was how to start. I know presentations often begin with 'First I'm going to talk about this, and then I'll talk about that', but I thought about asking the audience what they know about nanotechnology.

TUTOR: That would be fine if you had an hour or two for the presentation, but you might find that you can't do anything with the answers you get, and it simply eats into the short time that's available.

RUSS: So, maybe I should mention a particular way that nanotechnology is used, to focus people's attention.

TUTOR: That sounds sensible.

RUSS: What do you think I should do next? I really have to plan the presentation today and tomorrow.

TUTOR: Well, initially I think you should ignore all the notes you've made, take a small piece of paper, and write a single short sentence that ties together the whole presentation: it can be something as simple as 'Nanotechnology is already improving our lives'. Then start planning the content around that. You can always modify that sentence later, if you need to.

RUSS: OK.

TUTOR: OK, now let's think about actually giving the presentation. You've only given one before, if I remember correctly, about an experiment you'd been involved in.

RUSS: That's right. It was pretty rubbish!

TUTOR: Let's say it was better in some respects than in others. With regard to the structure, I felt that you ended rather abruptly, without rounding it off. Be careful not to do that in next week's presentation.

RUSS: OK.

TUTOR: And you made very little eye contact with the audience, because you were looking down at your notes most of the time. You need to be looking at the audience and only occasionally glancing at your notes.

RUSS: Mmm.

TUTOR: Your body language was a little odd. Every time you showed a slide, you turned your back on the audience so you could look at it – you should have been looking at your laptop. And you kept scratching your head, so I found myself wondering when you were next going to do that, instead of listening to what you were saying!

RUSS: Oh dear. What did you think of the language? I knew that not everyone was familiar with the subject, so I tried to make it as simple as I could.

TUTOR: Yes, that came across. You used a few words that are specific to the field, but you always explained what they meant, so the audience wouldn't have had any difficulty understanding.

RUSS: Uh-huh.

TUTOR: I must say the handouts you prepared were well thought out. They were a good summary of your presentation, which people would be able to refer to later on. So well done on that.

RUSS: Thank you.

TUTOR: Well, I hope that helps you with next week's presentation.

RUSS: Yes, it will. Thanks a lot.

TUTOR: I'll look forward to seeing a big improvement, then.`;

        LISTENING_SCRIPTS['13-2-3'] = `Today, we'll be continuing the series of lectures on memory by focusing on what is called episodic memory and what can happen if this is not working properly.

Episodic memory refers to the memory of an event or 'episode'. Episodic memories allow us to mentally travel back in time to an event from the past. Episodic memories include various details about these events, for example, when an event happened and other information such as the location. To help understand this concept, try to remember the last time you ate dinner at a restaurant. The ability to remember where you ate, who you were with and the items you ordered are all features of an episodic memory.

Episodic memory is distinct from another type of memory called semantic memory. This is the type of factual memory that we have in common with everyone else – that is your general knowledge of the world. To build upon a previous example, remembering where you parked your car is an example of episodic memory, but your understanding of what a car is and how an engine works are examples of semantic memory. Unlike episodic memory, semantic memory isn't dependent on recalling personal experiences.

Episodic memory can be thought of as a process with several different steps of memory processing: encoding, consolidation and retrieval.

The initial step is called encoding. This involves the process of receiving and registering information, which is necessary for creating memories of information or events that you experience. The degree to which you can successfully encode information depends on the level of attention you give to an event while it's actually happening. Being distracted can make effective encoding very difficult. Encoding of episodic memories is also influenced by how you process the event. For example, if you were introduced to someone called Charlie, you might make the connection that your uncle has the same name. Future recollection of Charlie's name is much easier if you have a strategy to help you encode it.

Memory consolidation, the next step in forming an episodic memory, is the process by which memories of encoded information are strengthened, stabilised and stored to facilitate later retrieval. Consolidation is most effective when the information being stored can be linked to an existing network of information. Consolidation makes it possible for you to store memories for later retrieval indefinitely. Forming strong memories depends on the frequency with which you try to retrieve them. Memories can fade or become harder to retrieve if they aren't used very often.

The last step in forming episodic memories is called retrieval, which is the conscious recollection of encoded information. Retrieving information from episodic memory depends upon semantic, olfactory, auditory and visual factors. These help episodic memory retrieval by acting as a prompt. For example, when recalling where you parked your car you may use the colour of a sign close to where you parked. You actually have to mentally travel back to the moment you parked.

There are a wide range of neurological diseases and conditions that can affect episodic memory. These range from Alzheimer's to schizophrenia to autism. An impairment of episodic memory can have a profound effect on individuals' lives. For example, the symptoms of schizophrenia can be reasonably well controlled by medication; however, patients' episodic memory may still be impaired and so they are often unable to return to university or work. Recent studies have shown that computer-assisted games designed to keep the brain active can help improve their episodic memory.

Episodic memories can help people connect with others, for instance by sharing intimate details about their past; something individuals with autism often have problems with. This may be caused by an absence of a sense of self. This is essential for the storage of episodic memory, and has been found to be impaired in children with autism. Research has shown that treatments that improve memory may also have a positive impact on children's social development.

One study looked at a ...`;
      }
    }
  });

  console.log('[real-13] 剑13 Test1 & Test2 已覆盖为练习题目（待与原版书核对）');
})();
