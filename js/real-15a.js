/**
 * 剑15 Test 1 & Test 2 真实剑桥雅思内容覆盖补丁
 * 目的：将 data-extra / data-extra2 中 AI 生成的"原创练习"内容替换为真实剑桥雅思15 Test 1、Test 2 真题。
 * 数据核对来源（公开权威解析，含原题答案键）：
 *   听力原文/答案 — ieltstrainingonline (Cambridge IELTS 15 Listening Test 1 / Test 2 题目、答案与录音稿)
 *   阅读原文/题目/答案 — ieltstrainingonline / ieltsworldly (Cambridge IELTS 15 Reading Test 1 / Test 2 全文+题目+答案)
 *   写作题目 — ieltswriting.org (IELTS 15 Test 1 / Test 2 Writing Task 1 & Task 2 原题)
 *   口语话题 — ieltspracticeonline / ieltsanswers (Cambridge IELTS 15 Speaking Test 1 / Test 2)
 * 注意：原文/题目为真实考题内容；范文与口语"参考回答"为学习用示例文本（非官方范文）。
 * 本文件须放在所有数据文件之后、app.js 之前加载。
 *   即：data.js → data-extra.js → data-extra2-1.js → data-extra2-2.js → data-extra2-3.js
 *        → data-extra3-1.js → data-extra3-2.js → data-extra3-3.js → listening-scripts.js → real-15a.js
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;
  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 15) book = b; });
  if (!book) return;

  function findTest(id) {
    var t = null;
    book.tests.forEach(function (x) { if (x.id === id) t = x; });
    return t;
  }

  // =====================================================================
  // ============================ 剑15 TEST 1 ============================
  // =====================================================================
  var t1 = findTest(1);
  if (t1) {

    // ---------------------- 听力（真实） ----------------------
    t1.listening.sections = [
      {
        part: 'Part 1',
        context: 'Amber 致电朋友 William，咨询 Bankside 招聘中介的信息（兼职/临时工作）',
        type: '笔记填空（每空一词和/或一词）',
        questions: [
          { q: 'Name of agent: Becky ___', a: 'Jamieson' },
          { q: 'Best to call her in the ___', a: 'afternoon' },
          { q: 'Must have good ___ skills', a: 'communication' },
          { q: 'Jobs are usually for at least one ___', a: 'week' },
          { q: 'Pay is usually £___ per hour', a: '10' },
          { q: 'Wear a ___ to the interview', a: 'suit' },
          { q: 'Must bring your ___ to the interview', a: 'passport' },
          { q: 'They will ask questions about each applicant’s ___', a: 'personality' },
          { q: 'The ___ you receive at interview will benefit you', a: 'feedback' },
          { q: 'Less ___ is involved in applying for jobs', a: 'time' }
        ]
      },
      {
        part: 'Part 2',
        context: 'Matthews Island Holidays 负责人 Erica Matthews 介绍马恩岛（Isle of Man）六日游',
        type: '选择题（Q11-14）+ 表格填空（Q15-20）',
        questions: [
          { q: '11 According to the speaker, the company ___ A has been in business for longer than most competitors B arranges holidays to more destinations than competitors C has more customers than competitors', a: 'A' },
          { q: '12 Where can customers meet the tour manager before travelling to the Isle of Man? A Liverpool B Heysham C Luton', a: 'B' },
          { q: '13 How many lunches are included in the price of the holiday? A three B four C five', a: 'A' },
          { q: '14 Customers have to pay extra for ___ A guaranteeing a larger room B booking at short notice C transferring to another date', a: 'C' },
          { q: '15 Hotel dining room has view of the ___', a: 'river' },
          { q: '16 Tynwald may have been founded in ___ (not 979)', a: '1422' },
          { q: '17 train to the ___ of Snaefell', a: 'top' },
          { q: '18 Company provides a ___ for local transport and heritage sites', a: 'pass' },
          { q: '19 Take the ___ railway train from Douglas to Port Erin', a: 'steam' },
          { q: '20 Castletown – former ___ has old castle', a: 'capital' }
        ]
      },
      {
        part: 'Part 3',
        context: 'Ruth 与 Ed 讨论关于"出生顺序与性格/学业"的研究（presentation 准备）',
        type: '配对（Q21-26）+ 单选（Q27-28）+ 双选（Q29-30）',
        questions: [
          { q: '21 the eldest child (Traits A-H: A outgoing B selfish C independent D attention-seeking E introverted F co-operative G caring H competitive)', a: 'G' },
          { q: '22 a middle child', a: 'F' },
          { q: '23 the youngest child', a: 'A' },
          { q: '24 a twin', a: 'E' },
          { q: '25 an only child', a: 'B' },
          { q: '26 a child with much older siblings', a: 'C' },
          { q: '27 What do the speakers say about the evidence relating to birth order and academic success? A conflicting evidence about oldest performing best B little doubt birth order less influential than socio-economic status C some studies neglected factors such as family size', a: 'C' },
          { q: '28 What does Ruth think is surprising about the difference in oldest children’s academic performance? A mainly thanks to their roles as teachers for younger siblings B advantages only lead to slightly higher achievement C extra parental attention makes little difference', a: 'A' },
          { q: '29&30 Which TWO experiences of sibling rivalry do the speakers agree was valuable? (A learning to share B learning to stand up for oneself C learning to be a good loser D learning to be tolerant E learning to say sorry)', a: 'B, D' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于澳大利亚桉树（eucalyptus）重要性及数量下降原因的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: '31 it provides ___ and food for a wide range of species', a: 'shelter' },
          { q: '32 its leaves provide ___ which is used to make a disinfectant', a: 'oil' },
          { q: '33 lime used for making ___ was absorbed into the ground', a: 'roads' },
          { q: '34 ___ feed on eucalyptus leaves', a: 'insects' },
          { q: '35 high-frequency bushfires result in the growth of ___', a: 'grass' },
          { q: '36 make more ___ available to the trees', a: 'water' },
          { q: '37 maintain the quality of the ___', a: 'soil' },
          { q: '38 low-frequency bushfires result in “___ rainforest”', a: 'dry' },
          { q: '39 a ___ ecosystem (not rich/varied)', a: 'simple' },
          { q: '40 an ideal environment for the ___ of the bell-miner', a: 'nests' }
        ]
      }
    ];

    // ---------------------- 阅读（真实） ----------------------
    t1.reading.passages = [
      {
        title: 'Passage 1: Nutmeg – a valuable spice',
        difficulty: '中等',
        summary: '肉豆蔻（nutmeg）从东南亚班达群岛的独有物产，到被葡萄牙、荷兰争夺垄断，再到法国人偷运、英国移植，最终打破荷兰垄断的历史。',
        questions: [
          { type: '笔记填空（每空一词）', q: '1 the leaves of the tree are ___ in shape', a: 'oval' },
          { type: '笔记填空（每空一词）', q: '2 the ___ surrounds the fruit and breaks open when ripe', a: 'husk' },
          { type: '笔记填空（每空一词）', q: '3 the ___ is used to produce the spice nutmeg', a: 'seed' },
          { type: '笔记填空（每空一词）', q: '4 the aril is used to produce ___', a: 'mace' },
          { type: '判断题 (True/False/Not Given)', q: '5 In the Middle Ages, most Europeans knew where nutmeg was grown.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: '6 The VOC was the world’s first major trading company.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: '7 Following the Treaty of Breda, the Dutch had control of all the islands where nutmeg grew.', a: 'TRUE' },
          { type: '表格填空（每空一词）', q: '8 Nutmeg was brought to Europe by the ___', a: 'Arabs' },
          { type: '表格填空（每空一词）', q: '9 believed effective against the disease known as the ___', a: 'plague' },
          { type: '表格填空（每空一词）', q: '10 the Dutch put ___ on nutmeg to avoid it being cultivated elsewhere', a: 'lime' },
          { type: '表格填空（每空一词）', q: '11 the Dutch finally obtained the island of ___ from the British', a: 'Run' },
          { type: '表格填空（每空一词）', q: '12 1770 – nutmeg plants were secretly taken to ___', a: 'Mauritius' },
          { type: '表格填空（每空一词）', q: '13 1778 – half the plantations were destroyed by a ___', a: 'tsunami' }
        ],
        text: `The nutmeg tree, Myristica fragrans, is a large evergreen tree native to Southeast Asia. Until the late 18th century, it only grew in one place in the world: a small group of islands in the Banda Sea, part of the Moluccas – or Spice Islands – in northeastern Indonesia. The tree is thickly branched with dense foliage of tough, dark green oval leaves, and produces small, yellow, bell-shaped flowers and pale yellow pear-shaped fruits. The fruit is encased in a flesh husk. When the fruit is ripe, this husk splits into two halves along a ridge running the length of the fruit. Inside is a purple-brown shiny seed, 2-3 cm long by about 2 cm across, surrounded by a lacy red or crimson covering called an ‘aril’. These are the sources of the two spices nutmeg and mace, the former being produced from the dried seed and the latter from the aril.

Nutmeg was a highly prized and costly ingredient in European cuisine in the Middle Ages, and was used as a flavouring, medicinal, and preservative agent. Throughout this period, the Arabs were the exclusive importers of the spice to Europe. They sold nutmeg for high prices to merchants based in Venice, but they never revealed the exact location of the source of this extremely valuable commodity. The Arab-Venetian dominance of the trade finally ended in 1512, when the Portuguese reached the Banda Islands and began exploiting its precious resources.

Always in danger of competition from neighbouring Spain, the Portuguese began subcontracting their spice distribution to Dutch traders. Profits began to flow into the Netherlands, and the Dutch commercial fleet swiftly grew into one of the largest in the world. The Dutch quietly gained control of most of the shipping and trading of spices in Northern Europe. Then, in 1580, Portugal fell under Spanish rule, and by the end of the 16th century the Dutch found themselves locked out of the market. As prices for pepper, nutmeg, and other spices soared across Europe, they decided to fight back.

In 1602, Dutch merchants founded the VOC, a trading corporation better known as the Dutch East India Company. By 1617, the VOC was the richest commercial operation in the world. The company had 50,000 employees worldwide, with a private army of 30,000 men and a fleet of 200 ships. At the same time, thousands of people across Europe were dying of the plague, a highly contagious and deadly disease. Doctors were desperate for a way to stop the spread of this disease, and they decided nutmeg held the cure. Everybody wanted nutmeg, and many were willing to spare no expense to have it. Nutmeg bought for a few pennies in Indonesia could be sold for 68,000 times its original cost on the streets of London. The only problem was the short supply. And that’s where the Dutch found their opportunity.

The Banda Islands were ruled by local sultans who insisted on maintaining a neutral trading policy towards foreign powers. This allowed them to avoid the presence of Portuguese or Spanish troops on their soil, but it also left them unprotected from other invaders. In 1621, the Dutch arrived and took over. Once securely in control of the Bandas, the Dutch went to work protecting their new investment. They concentrated all nutmeg production into a few easily guarded areas, uprooting and destroying any trees outside the plantation zones. Anyone caught growing a nutmeg seedling or carrying seeds without the proper authority was severely punished. In addition, all exported nutmeg was covered with lime to make sure there was no chance a fertile seed which could be grown elsewhere would leave the islands. There was only one obstacle to Dutch domination. One of the Banda Islands, a sliver of land called Run, only 3 km long by less than 1 km wide, was under the control of the British. After decades of fighting for control of this tiny island, the Dutch and British arrived at a compromise settlement, the Treaty of Breda, in 1667. Intent on securing their hold over every nutmeg-producing island, the Dutch offered a trade: if the British would give them the island of Run, they would in turn give Britain a distant and much less valuable island in North America. The British agreed. That other island was Manhattan, which is how New Amsterdam became New York. The Dutch now had a monopoly over the nutmeg trade which would last for another century.

Then, in 1770, a Frenchman named Pierre Poivre successfully smuggled nutmeg plants to safety in Mauritius, an island off the coast of Africa. Some of these were later exported to the Caribbean where they thrived, especially on the island of Grenada. Next, in 1778, a volcanic eruption in the Banda region caused a tsunami that wiped out half the nutmeg groves. Finally, in 1809, the British returned to Indonesia and seized the Banda Islands by force. They returned the islands to the Dutch in 1817, but not before transplanting hundreds of nutmeg seedlings to plantations in several locations across southern Asia. The Dutch nutmeg monopoly was over.

Today, nutmeg is grown in Indonesia, the Caribbean, India, Malaysia, Papua New Guinea and Sri Lanka, and world nutmeg production is estimated to average between 10,000 and 12,000 tonnes per year.`
      },
      {
        title: 'Passage 2: Driverless cars',
        difficulty: '中偏难',
        summary: '无人驾驶汽车的技术进展、对安全与出行自由的益处、对车辆保有量与制造的潜在影响，以及法规、责任、社会接受度等挑战。',
        questions: [
          { type: '段落信息匹配（选段落 A-G）', q: '14 reference to the amount of time when a car is not in use', a: 'C' },
          { type: '段落信息匹配（选段落 A-G）', q: '15 mention of several advantages of driverless vehicles for individual road-users', a: 'B' },
          { type: '段落信息匹配（选段落 A-G）', q: '16 reference to the opportunity of choosing the most appropriate vehicle for each trip', a: 'E' },
          { type: '段落信息匹配（选段落 A-G）', q: '17 an estimate of how long it will take to overcome a number of problems', a: 'G' },
          { type: '段落信息匹配（选段落 A-G）', q: '18 a suggestion that driverless cars may have no effect on the number of vehicles manufactured', a: 'D' },
          { type: '摘要填空（每空不超两词）', q: '19 most motor accidents are partly due to ___', a: 'human error' },
          { type: '摘要填空（每空不超两词）', q: '20 schemes for ___ will be more workable', a: 'car-sharing' },
          { type: '摘要填空（每空不超两词）', q: '21 a 43 percent drop in ___ of cars', a: 'ownership' },
          { type: '摘要填空（每空不超两词）', q: '22 the yearly ___ of each car would be twice as high', a: 'mileage' },
          { type: '多选题（选两项 A-E）', q: '23&24 Which TWO benefits of automated vehicles does the writer mention? A cost savings B easier parking C journeys spent doing other than driving D independent travel for disabled E less pollution', a: 'C, D' },
          { type: '多选题（选两项 A-E）', q: '25&26 Which TWO challenges does the writer mention? A public confidence B pace of transition C compensating redundant drivers D road infrastructure E adapting to driving conditions', a: 'A, E' }
        ],
        text: `The automotive sector is well used to adapting to automation in manufacturing. The implementation of robotic car manufacture from the 1970s onwards led to significant cost savings and improvements in the reliability and flexibility of vehicle mass production. A new challenge to vehicle production is now on the horizon and, again, it comes from automation. However, this time it is not to do with the manufacturing process, but with the vehicles themselves.

Research projects on vehicle automation are not new. Vehicles with limited self-driving capabilities have been around for more than 50 years, resulting in significant contributions towards driver assistance systems. But since Google announced in 2010 that it had been trialling self-driving cars on the streets of California, progress in this field has quickly gathered pace.

There are many reasons why technology is advancing so fast. One frequently cited motive is safety; indeed, research at the UK’s Transport Research Laboratory has demonstrated that more than 90 percent of road collisions involve human error as a contributory factor, and it is the primary cause in the vast majority. Automation may help to reduce the incidence of this.

Another aim is to free the time people spend driving for other purposes. If the vehicle can do some or all of the driving, it may be possible to be productive, to socialise or simply to relax while automation systems have responsibility for safe control of the vehicle. If the vehicle can do the driving, those who are challenged by existing mobility models – such as older or disabled travellers – may be able to enjoy significantly greater travel autonomy.

Beyond these direct benefits, we can consider the wider implications for transport and society, and how manufacturing processes might need to respond as a result. At present, the average car spends more than 90 percent of its life parked. Automation means that initiatives for car-sharing become much more viable, particularly in urban areas with significant travel demand. If a significant proportion of the population choose to use shared automated vehicles, mobility demand can be met by far fewer vehicles.

The Massachusetts Institute of Technology investigated automated mobility in Singapore, finding that fewer than 30 percent of the vehicles currently used would be required if fully automated car sharing could be implemented. If this is the case, it might mean that we need to manufacture far fewer vehicles to meet demand. However, the number of trips being taken would probably increase, partly because empty vehicles would have to be moved from one customer to the next.

Modelling work by the University of Michigan Transportation Research Institute suggests automated vehicles might reduce vehicle ownership by 43 percent, but that vehicles’ average annual mileage double as a result. As a consequence, each vehicle would be used more intensively, and might need replacing sooner. This faster rate of turnover may mean that vehicle production will not necessarily decrease.

Automation may prompt other changes in vehicle manufacture. If we move to a model where consumers are tending not to own a single vehicle but to purchase access to a range of vehicles through a mobility provider, drivers will have the freedom to select one that best suits their needs for a particular journey, rather than making a compromise across all their requirements.

Since, for most of the time, most of the seats in most cars are unoccupied, this may boost production of a smaller, more efficient range of vehicles that suit the needs of individuals. Specialised vehicles may then be available for exceptional journeys, such as going on a family camping trip or helping a son or daughter move to university.

There are a number of hurdles to overcome in delivering automated vehicles to our roads. These include the technical difficulties in ensuring that the vehicle works reliably in the infinite range of traffic, weather and road situations it might encounter; the regulatory challenges in understanding how liability and enforcement might change when drivers are no longer essential for vehicle operation; and the societal changes that may be required for communities to trust and accept automated vehicles as being a valuable part of the mobility landscape.

It’s clear that there are many challenges that need to be addressed but, through robust and targeted research, these can most probably be conquered within the next 10 years. Mobility will change in such potentially significant ways and in association with so many other technological developments, such as telepresence and virtual reality, that it is hard to make concrete predictions about the future. However, one thing is certain: change is coming, and the need to be flexible in response to this will be vital for those involved in manufacturing the vehicles that will deliver future mobility.`
      },
      {
        title: 'Passage 3: What is exploration?',
        difficulty: '难',
        summary: '探讨"探索"是否是人类共性、探险家的本质、多位探险家对 exploration 的定义，以及作者本人对"思想探索"的偏好。',
        questions: [
          { type: '选择题（单选 A-D）', q: '27 The writer refers to visitors to New York to illustrate that ___ A exploration is intrinsic to being human B most people are enthusiastic about exploring C exploration leads to surprising results D most people find exploration daunting', a: 'A' },
          { type: '选择题（单选 A-D）', q: '28 According to the second paragraph, the writer’s view of explorers is that ___ A their discoveries have mixed effects B their main value is teaching others C they act on an urge common to everyone D they prefer certain professions', a: 'C' },
          { type: '选择题（单选 A-D）', q: '29 The writer refers to Egdon Heath to suggest that ___ A Hardy wrote of his own experience B Hardy was mistaken about exploration C Hardy aimed to investigate emotional states D Hardy showed the attraction of isolation', a: 'C' },
          { type: '选择题（单选 A-D）', q: '30 In the fourth paragraph, “a golden age” suggests that ___ A less useful info is produced now B fewer people are interested C developments made it less exciting D we are wrong to think exploration is no longer needed', a: 'D' },
          { type: '选择题（单选 A-D）', q: '31 When discussing the definition of exploration, the writer argues that ___ A people relate it to their own professional interests B some misunderstand its nature C the accepted definition changed D historians/scientists definitions are more valid', a: 'A' },
          { type: '选择题（单选 A-D）', q: '32 In the last paragraph, the writer is interested in ___ A personality reflected in places visited B casting new light on familiar places C how travel writing evolved D feelings writers develop about places', a: 'B' },
          { type: '配对（探险家 A-E）', q: '33 He referred to the relevance of the form of transport used. (A Peter Fleming B Ran Fiennes C Chris Bonington D Robin Hanbury-Tenison E Wilfred Thesiger)', a: 'E' },
          { type: '配对（探险家 A-E）', q: '34 He described feelings on coming back home after a long journey.', a: 'A' },
          { type: '配对（探险家 A-E）', q: '35 He worked for the benefit of specific groups of people.', a: 'D' },
          { type: '配对（探险家 A-E）', q: '36 He did not consider learning about oneself essential to exploration.', a: 'E' },
          { type: '配对（探险家 A-E）', q: '37 He defined exploration as both unique and of value to others.', a: 'B' },
          { type: '摘要填空（每空不超两词）', q: '38 The writer has experience of a large number of ___', a: 'expeditions' },
          { type: '摘要填空（每空不超两词）', q: '39 previously ___ people he encountered', a: 'uncontacted' },
          { type: '摘要填空（每空不超两词）', q: '40 no need for further exploration of Earth’s ___', a: 'surface' }
        ],
        text: `We are all explorers. Our desire to discover, and then share that new-found knowledge, is part of what makes us human – indeed, this has played an important part in our success as a species. Long before the first caveman slumped down beside the fire and grunted news that there were plenty of wildebeest over yonder, our ancestors had learnt the value of sending out scouts to investigate the unknown. This questing nature of ours undoubtedly helped our species spread around the globe, just as it nowadays no doubt helps the last nomadic Penan maintain their existence in the depleted forests of Borneo, and a visitor negotiate the subways of New York.

Over the years, we’ve come to think of explorers as a peculiar breed – different from the rest of us, different from those of us who are merely ‘well travelled’, even; and perhaps there is a type of person more suited to seeking out the new, a type of caveman more inclined to risk venturing out. That, however, doesn’t take away from the fact that we all have this enquiring instinct, even today; and that in all sorts of professions – whether artist, marine biologist or astronomer – borders of the unknown are being tested each day.

Thomas Hardy set some of his novels in Egdon Heath, a fictional area of uncultivated land, and used the landscape to suggest the desires and fears of his characters. He is delving into matters we all recognise because they are common to humanity. This is surely an act of exploration, and into a world as remote as the author chooses. Explorer and travel writer Peter Fleming talks of the moment when the explorer returns to the existence he has left behind with his loved ones. The traveller ‘who has for weeks or months seen himself only as a puny and irrelevant alien crawling laboriously over a country in which he has no roots and no background, suddenly encounters his other self, a relatively solid figure, with a place in the minds of certain people’.

In this book about the exploration of the earth’s surface, I have confined myself to those whose travels were real and who also aimed at more than personal discovery. But that still left me with another problem: the word ‘explorer’ has become associated with a past era. We think back to a golden age, as if exploration peaked somehow in the 19th century – as if the process of discovery is now on the decline, though the truth is that we have named only one and a half million of this planet’s species, and there may be more than 10 million – and that’s not including bacteria. We have studied only 5 per cent of the species we know. We have scarcely mapped the ocean floors, and know even less about ourselves; we fully understand the workings of only 10 per cent of our brains.

Here is how some of today’s ‘explorers’ define the word. Ran Fiennes, dubbed the ‘greatest living explorer’, said, ‘An explorer is someone who has done something that no human has done before – and also done something scientifically useful.’ Chris Bonington, a leading mountaineer, felt exploration was to be found in the act of physically touching the unknown: ‘You have to have gone somewhere new.’ Then Robin Hanbury-Tenison, a campaigner on behalf of remote so-called ‘tribal’ peoples, said, ‘A traveller simply records information about some far-off world, and reports back; but an explorer changes the world.’ Wilfred Thesiger, who crossed Arabia’s Empty Quarter in 1946, and belongs to an era of unmechanised travel now lost to the rest of us, told me, ‘If I’d gone across by camel when I could have gone by car, it would have been a stunt.’ To him, exploration meant bringing back information from a remote place regardless of any great self-discovery.

Each definition is slightly different – and tends to reflect the field of endeavour of each pioneer. It was the same whoever I asked: the prominent historian would say exploration was a thing of the past, the cutting-edge scientist would say it was of the present. And so on. They each set their own particular criteria; the common factor in their approach being that they all had, unlike many of us who simply enjoy travel or discovering new things, both a very definite objective from the outset and also a desire to record their findings.

I’d best declare my own bias. As a writer, I’m interested in the exploration of ideas. I’ve done a great many expeditions and each one was unique. I’ve lived for months alone with isolated groups of people all around the world, even two ‘uncontacted tribes’. But none of these things is of the slightest interest to anyone unless, through my books, I’ve found a new slant, explored a new idea. Why? Because the world has moved on. The time has long passed for the great continental voyages – another walk to the poles, another crossing of the Empty Quarter. We know how the land surface of our planet lies; exploration of it is now down to the details – the habits of microbes, say, or the grazing behaviour of buffalo. Aside from the deep sea and deep underground, it’s the era of specialists. However, this is to disregard the role the human mind has in conveying remote places; and this is what interests me: how a fresh interpretation, even of a well-travelled route, can give its readers new insights.`
      }
    ];

    // ---------------------- 写作（真实题目 + 范文示例） ----------------------
    t1.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '图表描述 - 柱状图（bar chart）',
        prompt: 'The chart below shows the results of a survey about people’s coffee and tea buying and drinking habits in five Australian cities.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The bar chart compares the coffee- and tea-related habits of people in five Australian cities – Sydney, Melbourne, Brisbane, Adelaide and Hobart – based on a survey conducted over a four-week period. Three behaviours are shown: buying fresh coffee, buying instant coffee, and visiting a café for coffee or tea.\n\nOverall, going to a café was the most common habit in every city, while the purchase of fresh and instant coffee varied more between cities. Melbourne and Hobart recorded the highest café-visiting rates, at 63.3% and 62.7% respectively, compared with the lowest, Adelaide, at 49.9%.\n\nFor fresh coffee, Sydney (43.7%) and Melbourne (42.2%) were clearly ahead of the other three cities, which all fell between 34% and 38%. Brisbane and Adelaide were almost identical at around 34%, while Hobart stood at 38.3%.\n\nInstant coffee was most popular in Hobart (54.1%) and Brisbane (52.6%), whereas Sydney had the lowest figure (45.5%). Melbourne (48.3%) and Adelaide (49.8%) were close together in the middle.\n\nIn summary, café visits dominated in all five cities, and the two largest cities, Sydney and Melbourne, led on fresh-coffee purchases but were comparatively low on instant coffee.',
        tips: '先写总览(overview)再分组对比；按"去咖啡馆 / 鲜咖啡 / 速溶咖啡"三类分别描述并比较城市高低；时态用一般现在时；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（原因分析 + 利弊判断）',
        prompt: 'In some countries, owning a home rather than renting one is very important for people.\n\nWhy might this be the case? Do you think this is a positive or negative situation?\n\nWrite at least 250 words.',
        modelAnswer: 'In many societies, particularly in Asia, owning a home is seen as a major life goal, whereas in other cultures renting is more accepted. This essay will explain why home ownership is so valued and argue that, on balance, the situation has both positive and negative aspects.\n\nThere are several reasons why people prefer to own rather than rent. First, a home is often viewed as a long-term investment and a source of financial security: property generally retains or increases its value, whereas rent is money that is gone forever. Second, ownership gives people stability and freedom – they can renovate, keep pets, or stay as long as they wish without fear of a landlord ending the tenancy. Culturally, owning a house is also linked to success, independence, and providing security for one’s family.\n\nHowever, whether this is positive or negative depends on the perspective. On the positive side, a nation of homeowners may be more socially stable and socially engaged, and families can build wealth across generations. On the negative side, the pressure to buy can push prices beyond what ordinary people can afford, forcing them into heavy debt or forcing them to live far from city centres. It can also reduce mobility, as owners are less willing to move to where jobs are. In countries where renting is normalised, people often enjoy more flexibility and spend less of their income on housing.\n\nIn conclusion, the desire to own a home is understandable and brings security, but an excessive emphasis on ownership can create financial strain and reduce flexibility. A balanced housing market that makes both renting and buying attractive is preferable.',
        tips: '两段式：先分析"为何看重买房"（投资/稳定/文化），再判断"积极或消极"（兼顾双方后给立场）；用具体例子支撑；至少250词'
      }
    ];

    // ---------------------- 口语（真实话题 + 参考回答示例） ----------------------
    t1.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Email（邮件/讯息）',
        questions: [
          { q: 'What kinds of emails do you receive about your work or studies?', a: '参考回答: I get quite a lot – most are from my teachers or colleagues about assignments, meetings and deadlines. I also receive a few from the university administration.' },
          { q: 'Do you prefer to email, phone or text your friends?', a: '参考回答: I much prefer texting my friends because it’s casual and they can reply whenever they’re free. Email feels too formal, and phone calls can be disruptive.' },
          { q: 'Do you reply to emails and messages as soon as you receive them?', a: '参考回答: It depends. For unimportant messages I reply quickly, but for serious emails I wait until I have time to read carefully and write a proper response.' },
          { q: 'Are you happy to receive emails that are advertising things?', a: '参考回答: Not really. I find advertising emails annoying, so I usually filter them into a separate folder and rarely open them.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a hotel that you know.\n\nYou should say:\n– where this hotel is\n– what this hotel looks like\n– what facilities this hotel has\n– and explain whether you think this is a nice hotel to stay in.',
        modelAnswer: '参考回答:\n\nI’d like to talk about a hotel I stayed in last year called the Lakeside Hotel, which is located in a small town near a lake in the mountains, about two hours from my city. I went there with my family during the summer holiday.\n\nFrom the outside it looks like a traditional wooden building with large windows and a sloping roof, surrounded by gardens and tall pine trees. The interior is warm and elegant, with wooden floors and soft lighting. Our room was spacious and had a balcony overlooking the lake, which was beautiful at sunrise.\n\nThe hotel has a restaurant serving local food, a small spa, free Wi-Fi, and a fitness room. There is also a pier where guests can rent boats. The staff were friendly and helpful, and the breakfast was excellent.\n\nI definitely think it is a very nice hotel to stay in. It was peaceful, clean and comfortable, and the view was unforgettable. I would happily return there one day.',
        tips: '覆盖四个要点（位置/外观/设施/是否值得住）；用过去时叙述住宿经历；加入具体细节与感受；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Staying in hotels / Working in a hotel',
        questions: [
          { q: 'What things are important when people are choosing a hotel?', a: '参考回答: I think location is the most important – it should be convenient and safe. After that, price, cleanliness, reviews and the facilities on offer all matter.' },
          { q: 'Why do some people not like staying in hotels?', a: '参考回答: Some find hotels impersonal or noisy, and others prefer the comfort of home or cheaper options like hostels and homestays with local people.' },
          { q: 'Do you think staying in a luxury hotel is a waste of money?', a: '参考回答: It depends on the traveller. For a special occasion it can be worth it, but for most trips a mid-range hotel with good service is enough.' },
          { q: 'What skills are needed to be a successful hotel manager?', a: '参考回答: A manager needs strong communication and problem-solving skills, because they must handle guests’ requests and complaints quickly and keep the team organised.' }
        ]
      }
    ];
  }

  // =====================================================================
  // ============================ 剑15 TEST 2 ============================
  // =====================================================================
  var t2 = findTest(2);
  if (t2) {

    // ---------------------- 听力（真实） ----------------------
    t2.listening.sections = [
      {
        part: 'Part 1',
        context: 'Jean 致电旅游信息中心，咨询下月艺术节的安排（演出、工作坊、户外活动）',
        type: '表格填空（Q1-4）+ 笔记填空（Q5-10，每空一词）',
        questions: [
          { q: '1 (18th) ballet company called ___', a: 'Eustatis' },
          { q: '2 the comedy Jemima has had a good ___', a: 'review' },
          { q: '3 (20th evening) a ___ show', a: 'dance' },
          { q: '4 the show is called ___', a: 'Chat' },
          { q: '5 Making ___ food (workshop)', a: 'healthy' },
          { q: '6 (children only) Making ___', a: 'posters' },
          { q: '7 (adults only) Making toys from ___', a: 'wood' },
          { q: '8 Swimming in the ___', a: 'lake' },
          { q: '9 Walking in woods, led by expert on ___', a: 'insects' },
          { q: '10 See the festival organiser’s ___ for more information', a: 'blog' }
        ]
      },
      {
        part: 'Part 2',
        context: 'Mark Logan 介绍 Minster Park 的历史与近期改造（含地图标注）',
        type: '选择题（Q11-14）+ 地图标注（Q15-20，选字母 A-I）',
        questions: [
          { q: '11 The park was originally established ___ A as a council amenity B as land of a private house C as a shared area set up by local community', a: 'C' },
          { q: '12 Why is there a statue of Diane Gosforth? A she led a campaign B she was a council member C she was a senior park worker', a: 'A' },
          { q: '13 During WWI the park was mainly used for ___ A troop exercises B growing vegetables C public meetings', a: 'B' },
          { q: '14 When did the physical transformation begin? A 2013 B 2015 C 2016', a: 'C' },
          { q: '15 statue of Diane Gosforth (map label)', a: 'E' },
          { q: '16 wooden sculptures (map label)', a: 'C' },
          { q: '17 playground (map label)', a: 'B' },
          { q: '18 maze (map label)', a: 'A' },
          { q: '19 tennis courts (map label)', a: 'G' },
          { q: '20 fitness area (map label)', a: 'D' }
        ]
      },
      {
        part: 'Part 3',
        context: 'Cathy 与 Graham 为大学开放日策划"19世纪英国生活与文学（狄更斯）"展览',
        type: '双选（Q21-22, Q23-24）+ 配对（Q25-30）',
        questions: [
          { q: '21&22 The display is primarily intended for which TWO groups? (A English dept students B local residents C teaching staff D potential new students E other dept students)', a: 'B, D' },
          { q: '23&24 TWO reasons for choosing Charles Dickens? (A his speeches inspired B he drew attention to social problems via publications C his novels are well-known D he was consulted on social issues E his reputation changed)', a: 'B, C' },
          { q: '25 The Pickwick Papers (Topics A-H: A poverty B education C travels D entertainment E crime/law F wealth G medicine H a woman’s life)', a: 'G' },
          { q: '26 Oliver Twist', a: 'B' },
          { q: '27 Nicholas Nickleby', a: 'D' },
          { q: '28 Martin Chuzzlewit', a: 'C' },
          { q: '29 Bleak House', a: 'H' },
          { q: '30 Little Dorrit', a: 'F' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于莫桑比克（Mozambique）干旱地区农业项目的案例研究报告',
        type: '笔记填空（每空一词）',
        questions: [
          { q: '31 ___ was the main priority to ensure water supply', a: 'Irrigation' },
          { q: '32 Most work was done by ___', a: 'women' },
          { q: '33 The programme provided ___ for the fences', a: 'wire' },
          { q: '34 provided ___ for suitable crops', a: 'seed' },
          { q: '35 farmers provided ___ for the fences on their land', a: 'posts' },
          { q: '36 difficult due to lack of ___', a: 'transport' },
          { q: '37 training in food ___', a: 'preservation' },
          { q: '38 places where ___ could be kept', a: 'fish' },
          { q: '39 suggested keeping ___', a: 'bees' },
          { q: '40 allow time especially for the ___ phase', a: 'design' }
        ]
      }
    ];

    // ---------------------- 阅读（真实） ----------------------
    t2.reading.passages = [
      {
        title: 'Passage 1: Could urban engineers learn from dance?',
        difficulty: '中偏难',
        summary: '论城市与交通工程师可从编舞（choreography）对身体的理解中获得启发，以设计更健康、更人性化的城市出行方式。',
        questions: [
          { type: '段落信息匹配（选段落 A-G）', q: '1 an appealing way of using dance that the writer is not proposing', a: 'B' },
          { type: '段落信息匹配（选段落 A-G）', q: '2 a contrast between past and present approaches to building', a: 'C' },
          { type: '段落信息匹配（选段落 A-G）', q: '3 an objective of both dance and engineering', a: 'F' },
          { type: '段落信息匹配（选段落 A-G）', q: '4 an unforeseen problem arising from ignoring the climate', a: 'D' },
          { type: '段落信息匹配（选段落 A-G）', q: '5 why some measures intended to help people are being reversed', a: 'E' },
          { type: '段落信息匹配（选段落 A-G）', q: '6 how transport has an impact on human lives', a: 'A' },
          { type: '摘要填空（每空一词）', q: '7 improve the ___ of pedestrians', a: 'safety' },
          { type: '摘要填空（每空一词）', q: '8 movement of ___ is not disrupted', a: 'traffic' },
          { type: '摘要填空（每空一词）', q: '9 cross one ___ at a time', a: 'carriageway' },
          { type: '摘要填空（每空一词）', q: '10 particularly for less ___ people', a: 'mobile' },
          { type: '摘要填空（每空一词）', q: '11 some people cross in a ___ way', a: 'dangerous' },
          { type: '摘要填空（每空一词）', q: '12 the guard rails separate ___', a: 'communities' },
          { type: '摘要填空（每空一词）', q: '13 make it harder to introduce ___ forms of transport', a: 'healthy' }
        ],
        text: `The way we travel around cities has a major impact on whether they are sustainable. Transportation is estimated to account for 30% of energy consumption in most of the world’s most developed nations, so lowering the need for energy-using vehicles is essential for decreasing the environmental impact of mobility. But as more and more people move to cities, it is important to think about other kinds of sustainable travel too. The ways we travel affect our physical and mental health, our social lives, our access to work and culture, and the air we breathe. Engineers are tasked with changing how we travel round cities through urban design, but the engineering industry still works on the assumptions that led to the creation of the energy-consuming transport systems we have now: the emphasis placed solely on efficiency, speed, and quantitative data. We need radical changes, to make it healthier, more enjoyable, and less environmentally damaging to travel around cities.

Dance might hold some of the answers. That is not to suggest everyone should dance their way to work, however healthy and happy it might make us, but rather that the techniques used by choreographers to experiment with and design movement in dance could provide engineers with tools to stimulate new ideas in city-making. Richard Sennett, an influential urbanist and sociologist who has transformed ideas about the way cities are made, argues that urban design has suffered from a separation between mind and body since the introduction of the architectural blueprint.

Whereas medieval builders improvised and adapted construction through their intimate knowledge of materials and personal experience of the conditions on a site, building designs are now conceived and stored in media technologies that detach the designer from the physical and social realities they are creating. While the design practices created by these new technologies are essential for managing the technical complexity of the modern city, they have the drawback of simplifying reality in the process.

To illustrate, Sennett discusses the Peachtree Center in Atlanta, USA, a development typical of the modernist approach to urban planning prevalent in the 1970s. Peachtree created a grid of streets and towers intended as a new pedestrian-friendly downtown for Atlanta. According to Sennett, this failed because its designers had invested too much faith in computer-aided design to tell them how it would operate. They failed to take into account that purpose-built street cafés could not operate in the hot sun without the protective awnings common in older buildings, and would need energy-consuming air conditioning instead, or that its giant car park would feel so unwelcoming that it would put people off getting out of their cars. What seems entirely predictable and controllable on screen has unexpected results when translated into reality.

The same is true in transport engineering, which uses models to predict and shape the way people move through the city. Again, these models are necessary, but they are built on specific world views in which certain forms of efficiency and safety are considered and other experience of the city ignored. Designs that seem logical in models appear counter-intuitive in the actual experience of their users. The guard rails that will be familiar to anyone who has attempted to cross a British road, for example, were an engineering solution to pedestrian safety based on models that prioritise the smooth flow of traffic. On wide major roads, they often guide pedestrians to specific crossing points and slow down their progress across the road by using staggered access points divide the crossing into two – one for each carriageway. In doing so they make crossings feel longer, introducing psychological barriers greatly impacting those that are the least mobile, and encouraging others to make dangerous crossings to get around the guard rails. These barriers don’t just make it harder to cross the road: they divide communities and decrease opportunities for healthy transport. As a result, many are now being removed, causing disruption, cost, and waste.

If their designers had had the tools to think with their bodies – like dancers – and imagine how these barriers would feel, there might have been a better solution. In order to bring about fundamental changes to the ways we use our cities, engineering will need to develop a richer understanding of why people move in certain ways, and how this movement affects them. Choreography may not seem an obvious choice for tackling this problem. Yet it shares with engineering the aim of designing patterns of movement within limitations of space. It is an art form developed almost entirely by trying out ideas with the body, and gaining instant feedback on how the results feel. Choreographers have deep understanding of the psychological, aesthetic, and physical implications of different ways of moving.

Observing the choreographer Wayne McGregor, cognitive scientist David Kirsh described how he ‘thinks with the body’. Kirsh argues that by using the body to simulate outcomes, McGregor is able to imagine solutions that would not be possible using purely abstract thought. This kind of physical knowledge is valued in many areas of expertise, but currently has no place in formal engineering design processes. A suggested method for transport engineers is to improvise design solutions and instant feedback about how they would work from their own experience of them, or model designs at full scale in the way choreographers experiment with groups of dancers. Above all, perhaps, they might learn to design for emotional as well as functional effects.`
      },
      {
        title: 'Passage 2: Should we try to bring extinct species back to life?',
        difficulty: '难',
        summary: '探讨"去灭绝（de-extinction）"技术——以旅鸽、袋狼、猛犸象为例——能否弥补生态损害，以及其伦理与现实局限。',
        questions: [
          { type: '段落信息匹配（选段落 A-F，可重复）', q: '14 a reference to how further disappearance of multiple species could be avoided', a: 'F' },
          { type: '段落信息匹配（选段落 A-F，可重复）', q: '15 explanation of reproducing an extinct animal using the DNA of only that species', a: 'A' },
          { type: '段落信息匹配（选段落 A-F，可重复）', q: '16 a habitat which has suffered following the extinction of a species', a: 'D' },
          { type: '段落信息匹配（选段落 A-F，可重复）', q: '17 the exact point at which a particular species became extinct', a: 'A' },
          { type: '摘要填空（每空不超两词）', q: '18 identify the ___ enabling mammoths to live in the tundra', a: 'genetic traits' },
          { type: '摘要填空（每空不超两词）', q: '19 to minimise ___', a: 'heat loss' },
          { type: '摘要填空（每空不超两词）', q: '20 ___ of a reduced size', a: 'ears' },
          { type: '摘要填空（每空不超两词）', q: '21 more ___ (insulating fat)', a: 'fat' },
          { type: '摘要填空（每空不超两词）', q: '22 decrease ___ (carbon emissions)', a: 'emissions' },
          { type: '配对（人物 A-C）', q: '23 Reintroducing an extinct species could improve the health of a particular species. (A Ben Novak B Michael Archer C Beth Shapiro)', a: 'B' },
          { type: '配对（人物 A-C）', q: '24 It is important to concentrate on the causes of an animal’s extinction.', a: 'C' },
          { type: '配对（人物 A-C）', q: '25 A species brought back could benefit the vegetation of its habitat.', a: 'A' },
          { type: '配对（人物 A-C）', q: '26 Our current efforts at preserving biodiversity are insufficient.', a: 'C' }
        ],
        text: `The passenger pigeon was a legendary species. Flying in vast numbers across North America, with potentially many millions within a single flock, their migration was once one of nature’s great spectacles. Sadly, the passenger pigeon’s existence came to an end on 1 September 1914, when the last living specimen died at Cincinnati Zoo. Geneticist Ben Novak is lead researcher on an ambitious project which now aims to bring the bird back to life through a process known as ‘de-extinction’. The basic premise involves using cloning technology to turn the DNA of extinct animals into a fertilised embryo, which is carried by the nearest relative still in existence – in this case, the abundant band-tailed pigeon – before being born as a living, breathing animal. Passenger pigeons are one of the pioneering species in this field, but they are far from the only ones on which this cutting-edge technology is being trialled.

In Australia, the thylacine, more commonly known as the Tasmanian tiger, is another extinct creature which genetic scientists are striving to bring back to life. ‘There is no carnivore now in Tasmania that fills the niche which thylacines once occupied,’ explains Michael Archer of the University of New South Wales. He points out that in the decades since the thylacine went extinct, there has been a spread in a ‘dangerously debilitating’ facial tumour syndrome which threatens the existence of the Tasmanian devils, the island’s other notorious resident. Thylacines would have prevented this spread because they would have killed significant numbers of Tasmanian devils. ‘If that contagious cancer had popped up previously, it would have burned out in whatever region it started. The return of thylacines to Tasmania could help to ensure that devils are never again subjected to risks of this kind.’

If extinct species can be brought back to life, can humanity begin to correct the damage it has caused to the natural world over the past few millennia? ‘The idea of de-extinction is that we can reverse this process, bringing species that no longer exist back to life,’ says Beth Shapiro of University of California Santa Cruz’s Genomics Institute. ‘I don’t think that we can do this. There is no way to bring back something that is 100 per cent identical to a species that went extinct a long time ago.’ A more practical approach for long-extinct species is to take the DNA of existing species as a template, ready for the insertion of strands of extinct animal DNA to create something new; a hybrid, based on the living species, but which looks and/or acts like the animal which died out.

This complicated process and questionable outcome begs the question: what is the actual point of this technology? ‘For us, the goal has always been replacing the extinct species with a suitable replacement,’ explains Novak. ‘When it comes to breeding, band-tailed pigeons scatter and make maybe one or two nests per hectare, whereas passenger pigeons were very social and would make 10,000 or more nests in one hectare.’ Since the disappearance of this key species, ecosystems in the eastern US have suffered, as the lack of disturbance caused by thousands of passenger pigeons wrecking trees and branches means there has been minimal need for regrowth. This has left forests stagnant and therefore unwelcoming to the plants and animals which evolved to help regenerate the forest after a disturbance. According to Novak, a hybridized band-tailed pigeon, with the added nesting habits of a passenger pigeon, could, in theory, re-establish that forest disturbance, thereby creating a habitat necessary for a great many other native species to thrive.

Another popular candidate for this technology is the woolly mammoth. George Church, professor at Harvard Medical School and leader of the Woolly Mammoth Revival Project, has been focusing on cold resistance, the main way in which the extinct woolly mammoth and its nearest living relative, the Asian elephant, differ. By pinpointing which genetic traits made it possible for mammoths to survive the icy climate of the tundra, the project’s goal is to return mammoths, or a mammoth-like species, to the area. ‘My highest priority would be preserving the endangered Asian elephant,’ says Church, ‘expanding their range to the huge ecosystem of the tundra. Necessary adaptations would include smaller ears, thicker hair, and extra insulating fat, all for the purpose of reducing heat loss in the tundra, and all traits found in the now extinct woolly mammoth.’ This repopulation of the tundra and boreal forests of Eurasia and North America with large mammals could also be a useful factor in reducing carbon emissions – elephants punch holes through snow and knock down trees, which encourages grass growth. This grass growth would reduce temperature, and mitigate emissions from melting permafrost.

While the prospect of bringing extinct animals back to life might capture imaginations, it is, of course, far easier to try to save an existing species which is merely threatened with extinction. ‘Many of the technologies that people have in mind when they think about de-extinction can be used as a form of “genetic rescue”,’ explains Shapiro. She prefers to focus the debate on how this emerging technology could be used to fully understand why various species went extinct in the first place, and therefore how we could use it to make genetic modifications which could prevent mass extinctions in the future. ‘I would also say there’s an incredible moral hazard to not do anything at all,’ she continues. ‘We know that what we are doing today is not enough, and we have to be willing to take some calculated and measured risks.’`
      },
      {
        title: 'Passage 3: Having a laugh',
        difficulty: '难',
        summary: '心理学研究揭示幽默与笑声的作用：跨文化的社交信息、笑声与社会地位的编码，以及幽默对任务坚持力的“充能”效应。',
        questions: [
          { type: '选择题（单选 A-D）', q: '27 When referring to laughter, the writer emphasises ___ A its impact on language B its function in human culture C its value to scientific research D its universality in animals', a: 'C' },
          { type: '选择题（单选 A-D）', q: '28 What does the writer suggest about Charley Douglass? A he understood the value of group enjoyment B he thought viewers needed to be told when to laugh C he wanted broad social appeal D he preferred live audiences', a: 'A' },
          { type: '选择题（单选 A-D）', q: '29 What makes the Santa Cruz study significant? A varied laughter types B similar results across cultures C many disciplines D many kinds of laughers', a: 'B' },
          { type: '选择题（单选 A-D）', q: '30 What happened in the San Diego study? A some were upset B participants exchanged roles C strangers became friends D some could not laugh', a: 'B' },
          { type: '选择题（单选 A-D）', q: '31 The San Diego results suggest ___ A dominant laughs identify high/low status clearly B low-status in power still produce submissive laughs C submissive laughs of high/low are similar D high-status always identifiable by laughing', a: 'D' },
          { type: '摘要填空（选词 A-H）', q: '32 videos designed to generate a different kind of ___ (A laughter B relaxing C boring D anxiety E stimulating F emotion G enjoyment H amusing)', a: 'F' },
          { type: '摘要填空（选词 A-H）', q: '33 those who watched the ___ video persisted longer', a: 'H' },
          { type: '摘要填空（选词 A-H）', q: '34 a particularly ___ task produced similar results', a: 'C' },
          { type: '摘要填空（选词 A-H）', q: '35 humour reduces ___ and builds social bonds', a: 'D' },
          { type: '摘要填空（选词 A-H）', q: '36 humour may have a ___ effect on body and mind', a: 'E' },
          { type: '判断题 (True/False/Not Given)', q: '37 Santa Cruz participants were more accurate at identifying friends’ than strangers’ laughs.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: '38 The San Diego researchers were correct in their predictions about high-status individuals.', a: 'YES' },
          { type: '判断题 (True/False/Not Given)', q: '39 The Australian study gave participants a fixed amount of time on the employee-profile task.', a: 'NO' },
          { type: '判断题 (True/False/Not Given)', q: '40 Cheng and Wang’s conclusions matched established notions of task performance.', a: 'NO' }
        ],
        text: `Humans start developing a sense of humour as early as six weeks old, when babies begin to laugh and smile in response to stimuli. Laughter is universal across all human cultures and even exists in some form in rats, chimps, and bonobos. Like other human emotions and expressions, laughter gives psychological scientists rich resources for studying human psychology, ranging from the development of language to the neuroscience of social perception.

Theories focusing on the evolution of laughter point to it as an important adaptation for social communication. Take, for example, the recorded laughter in TV comedy shows. Back in 1950, US sound engineer Charley Douglass hated dealing with the unpredictable laughter of live audiences, so started recording his own ‘laugh tracks’. These were intended to help people at home feel like they were in a social situation, such as a crowded theatre. Douglass even recorded various types of laughter, as well as mixtures of laughter from men, women, and children. In doing so, he picked up on a quality of laughter that is now interesting researchers: a simple ‘haha’ communicates a remarkable amount of socially relevant information.

In one study conducted in 2016, samples of laughter from pairs of English-speaking students were recorded at the University of California, Santa Cruz. A team made up of more than 30 psychological scientists, anthropologists, and biologists then played these recordings to listeners from 24 diverse societies, from indigenous tribes in New Guinea to city-dwellers in India and Europe. Participants were asked whether they thought the people laughing were friends or strangers. On average, the results were remarkably consistent: worldwide, people’s guesses were correct approximately 60% of the time.

Researchers have also found that different types of laughter serve as codes to complex human social hierarchies. A team led by Christopher Oveis from the University of California, San Diego, found that high-status individuals had different laughs from low-status individuals, and that strangers’ judgements of an individual’s social status were influenced by the dominant or submissive quality of their laughter. In their study, 48 male college students were randomly assigned to groups of four, with each group composed of two low-status members, who had just joined their college fraternity group, and two high-status members, older students. Each student took a turn at being teased by the others, involving the use of mildly insulting nicknames. Analysis revealed that, as expected, high-status individuals produced more dominant laughs and fewer submissive laughs relative to the low-status individuals. Meanwhile, low-status individuals were more likely to change their laughter based on their position of power; that is, the newcomers produced more dominant laughs when they were in the ‘powerful’ role of teasers. Dominant laughter was higher in pitch, louder, and more variable in tone than submissive laughter.

A random group of volunteers then listened to an equal number of dominant and submissive laughs from both the high- and low-status individuals, and were asked to estimate the social status of the laughter. In line with predictions, laughers producing dominant laughs were perceived to be significantly higher in status than laughers producing submissive laughs. ‘This was particularly true for low-status individuals, who were rated as significantly higher in status when displaying a dominant versus submissive laugh,’ Oveis and colleagues note. ‘Thus, by strategically displaying more dominant laughter when the context allows, low-status individuals may achieve higher status in the eyes of others.’ However, high-status individuals were rated as high-status whether they produced their natural dominant laugh or tried to do a submissive one.

Another study, conducted by David Cheng and Lu Wang of Australian National University, was based on the hypothesis that humour might provide a respite from tedious situations in the workplace. This ‘mental break’ might facilitate the replenishment of mental resources. To test this theory, the researchers recruited 74 business students, ostensibly for an experiment on perception. First, the students performed a tedious task in which they had to cross out every instance of the letter ‘e’ over two pages of text. The students then were randomly assigned to watch a video clip eliciting either humour, contentment, or neutral feelings. Some watched a clip of the BBC comedy Mr. Bean, others a relaxing scene with dolphins swimming in the ocean, and others a factual video about the management profession.

The students then completed a task requiring persistence in which they were asked to guess the potential performance of employees based on provided profiles, and were told that making 10 correct assessments in a row would lead to a win. However, the software was programmed such that it was nearly impossible to achieve 10 consecutive correct answers. Participants were allowed to quit the task at any point. Students who had watched the Mr. Bean video ended up spending significantly more time working on the task, making twice as many predictions as the other two groups.

Cheng and Wang then replicated these results in a second study, during which they had participants complete long multiplication questions by hand. Again, participants who watched the humorous video spent significantly more time working on this tedious task and completed more questions correctly than did the students in either of the other groups.

‘Although humour has been found to help relieve stress and facilitate social relationships, traditional view of task performance implies that individuals should avoid things such as humour that may distract them from the accomplishment of task goals,’ Cheng and Wang conclude. ‘We suggest that humour is not only enjoyable but more importantly, energising.’`
      }
    ];

    // ---------------------- 写作（真实题目 + 范文示例） ----------------------
    t2.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '图表描述 - 线图（line graph）',
        prompt: 'The graph below shows the number of tourists visiting a particular Caribbean island between 2010 and 2017.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The line graph shows the number of tourists visiting a Caribbean island from 2010 to 2017, divided into those staying on cruise ships and those staying on the island itself.\n\nOverall, total visitor numbers rose steadily over the period, and from 2013 onwards the two types of visitor contributed roughly equal and growing numbers. In 2010, about 0.25 million stayed on cruise ships and 0.75 million on the island, giving a total of 1 million. By 2011–2012 the cruise-ship figure fluctuated (rising to 0.5m then falling back to 0.25m), while the on-island figure climbed to 1.25m, lifting the total to 1.5m.\n\nFrom 2013 the trend became clearer: both categories grew. In 2013 there were 0.5m cruise-ship and 1.5m on-island visitors (total 2m); by 2015 cruise-ship visitors reached 1.25m, with totals of 2.75m. After a slight dip in 2016, 2017 saw both types rise to about 2m (cruise ships) and 1.5m (on island), a total of roughly 3.5m.\n\nIn summary, the island’s tourism expanded greatly, with on-island stays consistently higher than cruise-ship stays after 2012.',
        tips: '按时间顺序描述两类游客的变化；突出总趋势上升、2012年后两者接近；时态用过去时；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（同意/不同意）',
        prompt: 'In the future, nobody will buy printed newspapers or books because they will be able to read everything they want online without paying.\n\nTo what extent do you agree or disagree with this statement?\n\nWrite at least 250 words.',
        modelAnswer: 'It is often claimed that one day no one will buy printed newspapers or books because everything will be available free online. I partly agree with this prediction for newspapers and magazines, but I disagree that printed books will disappear completely.\n\nThere are clear reasons why online material is replacing print. Digital texts are convenient, cheap to produce, and instantly accessible on phones and e-readers, so newspapers and magazines – which are read once and then discarded – are likely to move fully online. The environmental and cost advantages make this hard to resist.\n\nHowever, the claim that people will “read everything without paying” is questionable. Quality journalism and many books still sit behind paywalls or are bought, and free content is often unreliable. Moreover, printed books have a cultural and emotional value that screens do not. Many readers prefer the tangible experience of a book, enjoy collecting them, and find screens tiring for long texts. Therefore printed books are likely to survive as a premium, valued object even if their sales decline.\n\nIn conclusion, while printed newspapers will probably vanish in favour of free online alternatives, printed books will remain desirable for many people. I therefore disagree with the statement in its strongest form.',
        tips: '先表态（部分同意）；分别论述报纸/杂志 vs 书籍的不同命运；质疑"免费"假设；至少250词'
      }
    ];

    // ---------------------- 口语（真实话题 + 参考回答示例） ----------------------
    t2.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Languages（语言）',
        questions: [
          { q: 'How many languages can you speak?', a: '参考回答: I can speak two languages – my mother tongue and English, which I’ve studied since primary school. I’m not fluent in any third language yet.' },
          { q: 'How useful will English be to you in your future?', a: '参考回答: Very useful. I plan to study abroad, and English will help me with my courses, making friends from other countries, and my future career in an international company.' },
          { q: 'What do you remember about learning languages at school?', a: '参考回答: I remember lots of vocabulary tests and grammar drills. It was boring at times, but I enjoyed the speaking activities and watching films in English.' },
          { q: 'What do you think would be the hardest language for you to learn?', a: '参考回答: Probably a language with a completely different writing system, like Chinese or Arabic, because I would have to learn new characters as well as pronunciation.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a website that you bought something from.\n\nYou should say:\n– what the website is\n– what you bought from this website\n– how satisfied you were with what you bought\n– and explain what you liked or disliked about using this website.',
        modelAnswer: '参考回答:\n\nI’d like to talk about a website I often use called Taobao, which is China’s largest online shopping platform. I first used it several years ago and now buy many daily items there.\n\nThe most memorable purchase was a pair of running shoes I bought last spring. They were a well-known brand, much cheaper than in a physical shop, and the photos and reviews looked reliable.\n\nI was quite satisfied with the shoes – they fitted well, the quality was good, and they arrived within three days. The whole process was smooth.\n\nWhat I like about the website is the huge choice, the low prices, and the convenience of paying by phone and tracking the delivery. The only thing I dislike is that sometimes the number of choices is overwhelming, and you have to read reviews carefully to avoid low-quality sellers. Overall, though, it’s a website I trust and use regularly.',
        tips: '覆盖四个要点（网站/买了什么/满意度/好恶）；用过去时叙述购买经历；加入具体细节；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Shopping online / The culture of consumerism',
        questions: [
          { q: 'What kinds of things do people in your country often buy from online shops?', a: '参考回答: Almost everything – clothes, electronics, food, books and household items. Young people especially buy fashion and gadgets online.' },
          { q: 'Why do you think online shopping has become so popular nowadays?', a: '参考回答: It’s convenient, often cheaper, and saves time. People can compare products and read reviews at home, and delivery is fast.' },
          { q: 'What are some possible disadvantages of buying things from online shops?', a: '参考回答: You can’t see or try the product before buying, quality may disappoint, and there are risks like fake reviews or difficult returns.' },
          { q: 'Why do many people today keep buying things they do not need?', a: '参考回答: Advertising and social media create desires, and buying can be a way to relieve stress or show status, even when the item isn’t really needed.' }
        ]
      }
    ];
  }

  // ===================== 听力原文脚本（真实，覆盖 listening-scripts.js 中 15-1-* / 15-2-*） =====================
  if (typeof LISTENING_SCRIPTS !== 'undefined') {

    // ---------- 剑15 Test 1 ----------
    LISTENING_SCRIPTS['15-1-0'] = `AMBER: Hello William. This is Amber – you said to phone if I wanted to get more information about the job agency you mentioned. Is now a good time?

WILLIAM: Oh, hi Amber. Yes. Fine. So the agency I was talking about is called Bankside – they’re based in Docklands – I can tell you the address now – 497 Eastside.

AMBER: OK, thanks. So is there anyone in particular I should speak to there?

WILLIAM: The agent I always deal with is called Becky Jamieson.

AMBER: Let me write that down – Becky …

WILLIAM: Jamieson. J-A-M-I-E-S-O-N.

AMBER: Do you have her direct line?

WILLIAM: Yes, it’s in my contacts somewhere – right, here we are: 078 double 6, 510 triple 3. I wouldn’t call her until the afternoon if I were you – she’s always really busy in the morning trying to fill last-minute vacancies. She’s really helpful and friendly so I’m sure it would be worth getting in touch with her for an informal chat.

AMBER: It’s mainly clerical and admin jobs they deal with, isn’t it?

WILLIAM: That’s right. I know you’re hoping to find a full-time job in the media eventually – but Becky mostly recruits temporary staff for the finance sector – which will look good on your CV – and generally pays better too.

AMBER: Yeah – I’m just a bit worried because I don’t have much office experience.

WILLIAM: I wouldn’t worry. They’ll probably start you as a receptionist, or something like that. So what’s important for that kind of job isn’t so much having business skills or knowing lots of different computer systems – it’s communication that really matters – so you’d be fine there. And you’ll pick up office skills really quickly on the job. It’s not that complicated.

AMBER: OK good. So how long do people generally need temporary staff for? It would be great if I could get something lasting at least a month.

WILLIAM: That shouldn’t be too difficult. But you’re more likely to be offered something for a week at first, which might get extended. It’s unusual to be sent somewhere for just a day or two.

AMBER: Right, I’ve heard the pay isn’t too bad – better than working in a shop or a restaurant.

WILLIAM: Oh yes – definitely. The hourly rate is about £10, 11 if you’re lucky.

AMBER: That’s pretty good. I was only expecting to get eight or nine pounds an hour.

WILLIAM: Do you want me to tell you anything about the registration process?

AMBER: Yes, please. I know you have to have an interview.

WILLIAM: The interview usually takes about an hour and you should arrange that about a week in advance.

AMBER: I suppose I should dress smartly if it’s for office work – I can probably borrow a suit from Mum.

WILLIAM: Good idea. It’s better to look too smart than too casual.

AMBER: Will I need to bring copies of my exam certificates or anything like that?

WILLIAM: No – they don’t need to see those, I don’t think.

AMBER: What about my passport?

WILLIAM: Oh yes – they will ask to see that.

AMBER: OK.

WILLIAM: I wouldn’t get stressed about the interview though. It’s just a chance for them to build a relationship with you – so they can try and match you to a job which you’ll like. So there are questions about personality that they always ask candidates – fairly basic ones. And they probably won’t ask anything too difficult like what your plans are for the future.

AMBER: Hope not.

WILLIAM: Anyway, there are lots of benefits to using an agency – for example, the interview will be useful because they’ll give you feedback on your performance so you can improve next time.

AMBER: And they’ll have access to jobs which aren’t advertised.

WILLIAM: Exactly – most temporary jobs aren’t advertised.

AMBER: And I expect finding a temporary job this way takes a lot less time – it’s much easier than ringing up individual companies.

WILLIAM: Yes indeed. Well I think …`;

    LISTENING_SCRIPTS['15-1-1'] = `ERICA MATTHEWS: Good morning. My name’s Erica Matthews, and I’m the owner of Matthews Island Holidays, a company set up by my parents. Thank you for coming to this presentation, in which I hope to interest you in what we have to offer. We’re a small, family-run company, and we believe in the importance of the personal touch, so we don’t aim to compete with other companies on the number of customers. What we do is build on our many years’ experience – more than almost any other rail holiday company – to ensure we provide perfect holidays in a small number of destinations, which we’ve got to know extremely well.

I’ll start with our six-day Isle of Man holiday. This is a fascinating island in the Irish Sea, with Wales to the south, England to the east, Scotland to the north and Northern Ireland to the west. Our holiday starts in Heysham, where your tour manager will meet you, then you’ll travel by ferry to the Isle of Man. Some people prefer to fly from Luton instead, and another popular option is to go by train to Liverpool and take a ferry from there.

You have five nights in the hotel, and the price covers five breakfasts and dinners, and lunch on the three days when there are organised trips: day four is free, and most people have lunch in a café or restaurant in Douglas.

The price of the holiday includes the ferry to the Isle of Man, all travel on the island, the hotel, and the meals I’ve mentioned. Incidentally, we try to make booking our holidays as simple and fair as possible, so unlike with many companies, the price is the same whether you book six months in advance or at the last minute, and there’s no supplement for single rooms in hotels. If you make a booking then need to change the start date, for example because of illness, you’re welcome to change to an alternative date or a different tour, for a small administrative fee.

OK, so what does the holiday consist of? Well, on day one you’ll arrive in time for a short introduction by your tour manager, followed by dinner in the hotel. The dining room looks out at the river, close to where it flows into the harbour, and there’s usually plenty of activity going on.

On day two you’ll take the coach to the small town of Peel, on the way calling in at the Tynwald Exhibition. The Isle of Man isn’t part of the United Kingdom, and it has its own parliament, called Tynwald. It’s claimed that this is the world’s oldest parliament that’s still functioning, and that it dates back to 979. However, the earliest surviving reference to it is from 1422, so perhaps it isn’t quite as old as it claims!

Day three we have a trip to the mountain Snaefell. This begins with a leisurely ride along the promenade in Douglas in a horse-drawn tram. Then you board an electric train which takes you to the fishing village of Laxey. From there it’s an eight-kilometre ride in the Snaefell Mountain Railway to the top. Lunch will be in the café, giving you spectacular views of the island.

Day four is free for you to explore, using the pass which we’ll give you. So you won’t have to pay for travel on local transport, or for entrance to the island’s heritage sites. Or you might just want to take it easy in Douglas and perhaps do a little light shopping.

The last full day, day five, is for some people the highlight of the holiday, with a ride on the steam railway, from Douglas to Port Erin. After some time to explore, a coach will take you to the headland that overlooks the Calf of Man, a small island just off the coast. From there you continue to Castletown, which used to be the capital of the Isle of Man, and its mediaeval castle.

And on day six it’s back to the ferry – or the airport, if you flew to the island – and time to go home.

Now I’d like to tell you …`;

    LISTENING_SCRIPTS['15-1-2'] = `RUTH: Ed, how are you getting on with the reading for our presentation next week?

ED: Well, OK, Ruth – but there’s so much of it.

RUTH: I know, I hadn’t realised birth order was such a popular area of research.

ED: But the stuff on birth order and personality is mostly unreliable. From what I’ve been reading a lot of claims about how your position in the family determines certain personality traits are just stereotypes, with no robust evidence to support them.

RUTH: OK, but that’s an interesting point – we could start by outlining what previous research has shown. There are studies going back over a hundred years.

ED: Yeah – so we could just run through some of the typical traits. Like the consensus seems to be that oldest children are generally less well-adjusted because they never get over the arrival of a younger sibling.

RUTH: Right, but on a positive note, some studies claimed that they were thought to be good at nurturing – certainly in the past when people had large families they would have been expected to look after the younger ones.

ED: There isn’t such a clear picture for middle children – but one trait that a lot of the studies mention is that they are easier to get on with than older or younger siblings.

RUTH: Generally eager to please and helpful – although that’s certainly not accurate as far as my family goes – my middle brother was a nightmare – always causing fights and envious of whatever I had.

ED: As I said – none of this seems to relate to my own experience. I’m the youngest in my family and I don’t recognise myself in any of the studies I’ve read about. I’m supposed to have been a sociable and confident child who made friends easily – but I was actually terribly shy.

RUTH: Really? That’s funny. There have been hundreds of studies on twins but mostly about nurture versus nature …

ED: There was one on personality, which said that a twin is likely to be quite shy in social situations because they always have their twin around to depend on for support.

RUTH: My cousins were like that when they were small – they were only interested in each other and found it hard to engage with other kids. They’re fine now though.

ED: Only children have had a really bad press – a lot of studies have branded them as loners who think the world revolves around them because they’ve never had to fight for their parents’ attention.

RUTH: That does seem a bit harsh. One category I hadn’t considered before was children with much older siblings – a couple of studies mentioned that these children grow up more quickly and are expected to do basic things for themselves – like getting dressed.

ED: I can see how that might be true – although I expect they’re sometimes the exact opposite – playing the baby role and clamouring for special treatment.

RUTH: What was the problem with most of these studies, do you think?

ED: I think it was because in a lot of cases data was collected from only one sibling per family, who rated him or herself and his or her siblings at the same time.

RUTH: Mmm. Some of the old research into the relationship between birth order and academic achievement has been proved to be accurate though. Performances in intelligence tests decline slightly from the eldest child to his or her younger siblings. This has been proved in lots of recent studies.

ED: Yes. Although what many of them didn’t take into consideration was family size. The more siblings there are, the likelier the family is to have a low socioeconomic status – which can also account for differences between siblings in academic performance.

RUTH: The oldest boy might be given more opportunities than his younger sisters, for example.

ED: Exactly.

RUTH: But the main reason for the marginally higher academic performance of oldest children is quite surprising, I think. It’s not only that they benefit intellectually from extra attention at a young age – which is what I would have expected. It’s that they benefit from being teachers for their younger siblings, by verbalising processes.

ED: Right, and this gives them status and confidence, which again contribute, in a small way, to better performance.

RUTH: So would you say sibling rivalry has been a useful thing for you?

ED: I think so – my younger brother was incredibly annoying and we fought a lot but I think this has made me a stronger person. I know how to defend myself. We had some terrible arguments and I would have died rather than apologise to him – but we had to put up with each other and most of the time we co-existed amicably enough.

RUTH: Yes, my situation was pretty similar. But I don’t think having two older brothers made me any less selfish – I was never prepared to let my brothers use any of my stuff …

RUTH: That’s perfectly normal, whereas …`;

    LISTENING_SCRIPTS['15-1-3'] = `SPEAKER: Today I’m going to talk about the eucalyptus tree. This is a very common tree here in Australia, where it’s also sometimes called the gum tree. First I’m going to talk about why it’s important, then I’m going to describe some problems it faces at present.

Right, well the eucalyptus tree is an important tree for lots of reasons. For example, it gives shelter to creatures like birds and bats, and these and other species also depend on it for food, particularly the nectar from its flowers. So it supports biodiversity. It’s useful to us humans too, because we can kill germs with a disinfectant made from oil extracted from eucalyptus leaves.

The eucalyptus grows all over Australia and the trees can live for up to four hundred years. So it’s alarming that all across the country, numbers of eucalyptus are falling because the trees are dying off prematurely. So what are the reasons for this?

One possible reason is disease. As far back as the 1970s the trees started getting a disease called Mundulla Yellows. The trees’ leaves would gradually turn yellow, then the tree would die. It wasn’t until 2004 that they found the cause of the problem was lime, or calcium hydroxide to give it its proper chemical name, which was being used in the construction of roads. The lime was being washed away into the ground and affecting the roots of the eucalyptus trees nearby. What it was doing was preventing the trees from sucking up the iron they needed for healthy growth. When this was injected back into the affected trees, they immediately recovered.

But this problem only affected a relatively small number of trees. By 2000, huge numbers of eucalyptus were dying along Australia’s East Coast, of a disease known as Bell-miner Associated Die-back. The bell-miner is a bird, and the disease seems to be common where there are high populations of bell-miners. Again it’s the leaves of the trees that are affected. What happens is that insects settle on the leaves and eat their way round them, destroying them as they go, and at the same time they secrete a solution which has sugar in it. The bell-miner birds really like this solution, and in order to get as much as possible, they keep away other creatures that might try to get it. So these birds and insects flourish at the expense of other species, and eventually so much damage is done to the leaves that the tree dies.

But experts say that trees can start looking sick before any sign of Bell-miner Associated Die-back. So it looks as if the problem might have another explanation. One possibility is that it’s to do with the huge bushfires that we have in Australia. A theory proposed over 40 years ago by ecologist William Jackson is that the frequency of bushfires in a particular region affects the type of vegetation that grows there. If there are very frequent bushfires in a region, this encourages grass to grow afterwards, while if the bushfires are rather less frequent, this results in the growth of eucalyptus forests.

So why is this? Why do fairly frequent bushfires actually support the growth of eucalyptus? Well, one reason is that the fire stops the growth of other species which would consume water needed by eucalyptus trees. And there’s another reason. If these other quick-growing species of bushes and plants are allowed to proliferate, they harm the eucalyptus in another way, by affecting the composition of the soil, and removing nutrients from it. So some bushfires are actually essential for the eucalyptus to survive as long as they are not too frequent. In fact there’s evidence that Australia’s indigenous people practised regular burning of bush land for thousands of years before the arrival of the Europeans.

But since Europeans arrived on the continent, the number of bushfires has been strictly controlled. Now scientists believe that this reduced frequency of bushfires to low levels has led to what’s known as ‘dry rainforest’, which seems an odd name as usually we associate tropical rainforest with wet conditions. And what’s special about this type of rainforest? Well, unlike tropical rainforest which is a rich ecosystem, this type of ecosystem is usually a simple one. It has very thick, dense vegetation, but not much variety of species. The vegetation provides lots of shade, so one species that does find it ideal is the bell-miner bird, which builds its nests in the undergrowth there. But again that’s not helpful for the eucalyptus tree.

So now I’d like to show you some …`;

    // ---------- 剑15 Test 2 ----------
    LISTENING_SCRIPTS['15-2-0'] = `TIM: Good morning. You’re through to the tourist information office, Tim speaking. How can I help you?

JEAN: Oh hello. Could you give me some information about next month’s festival, please? My family and I will be staying in the town that week.

TIM: Of course. Well it starts with a concert on the afternoon of the 17th.

JEAN: Oh I heard about that. The orchestra and singers come from the USA, don’t they?

TIM: They’re from Canada. They’re very popular over there. They’re going to perform a number of well-known pieces that will appeal to children as well as adults.

JEAN: That sounds good. My whole family are interested in music.

TIM: The next day, the 18th, there’s a performance by a ballet company called Eustatis.

JEAN: Sorry?

TIM: The name is spelt E-U-S-T-A-T-I-S. They appeared in last year’s festival, and went down very well. Again, their programme is designed for all ages.

JEAN: Good. I expect we’ll go to that. I hope there’s going to be a play during the festival, a comedy, ideally.

TIM: You’re in luck! On the 19th and 20th a local amateur group are performing one written by a member of the group. It’s called Jemima. That’ll be on in the town hall. They’ve already performed it two or three times. I haven’t seen it myself, but the review in the local paper was very good.

JEAN: And is it suitable for children?

TIM: Yes, in fact it’s aimed more at children than at adults, so both performances are in the afternoon.

JEAN: And what about dance? Will there be any performances?

TIM: Yes, also on the 20th, but in the evening. A professional company is putting on a show of modern pieces, with electronic music by young composers.

JEAN: Uh-huh.

TIM: The show is about how people communicate, or fail to communicate, with each other, so it’s got the rather strange name, Chat.

JEAN: I suppose that’s because that’s something we do both face to face and online.

TIM: That’s right.

TIM: Now there are also some workshops and other activities. They’ll all take place at least once every day, so everyone who wants to take part will have a chance.

JEAN: Good. We’re particularly interested in cookery – you don’t happen to have a cookery workshop, do you?

TIM: We certainly do. It’s going to focus on how to make food part of a healthy lifestyle, and it’ll show that even sweet things like cakes can contain much less sugar than they usually do.

JEAN: That might be worth going to. We’re trying to encourage our children to cook.

TIM: Another workshop is just for children, and that’s on creating posters to reflect the history of the town. The aim is to make children aware of how both the town and people’s lives have changed over the centuries. The results will be exhibited in the community centre. Then the other workshop is in toy-making, and that’s for adults only.

JEAN: Oh, why’s that?

TIM: Because it involves carpentry – participants will be making toys out of wood, so there’ll be a lot of sharp chisels and other tools around.

JEAN: It makes sense to keep children away from it.

TIM: Exactly. Now let me tell you about some of the outdoor activities. There’ll be supervised wild swimming …

JEAN: Wild swimming? What’s that?

TIM: It just means swimming in natural waters, rather than a swimming pool.

JEAN: Oh OK. In a lake, for instance.

TIM: Yes, there’s a beautiful one just outside the town, and that’ll be the venue for the swimming. There’ll be lifeguards on duty, so it’s suitable for all ages. And finally, there’ll be a walk in some nearby woods every day. The leader is an expert on insects. He’ll show some that live in the woods, and how important they are for the environment. So there are going to be all sorts of different things to do during the festival.

JEAN: There certainly are.

TIM: If you’d like to read about how the preparations for the festival are going, the festival organiser is keeping a blog. Just search online for the festival website, and you’ll find it.

JEAN: Well, thank you very much for all the information.

TIM: You’re welcome. Goodbye.

JEAN: Goodbye.`;

    LISTENING_SCRIPTS['15-2-1'] = `WOMAN: I’m very pleased to welcome this evening’s guest speaker, Mark Logan, who’s going to tell us about the recent transformation of Minster Park. Over to you, Mark.

MARK: Thank you. I’m sure you’re all familiar with Minster Park. It’s been a feature of the city for well over a century, and has been the responsibility of the city council for most of that time. What perhaps isn’t so well known is the origin of the park: unlike many public parks that started in private ownership, as the garden of a large house, for instance, Minster was some waste land, which people living nearby started planting with flowers in 1892. It was unclear who actually owned the land, and this wasn’t settled until 20 years later, when the council took possession of it.

MARK: You may have noticed the statue near one of the entrances. It’s of Diane Gosforth, who played a key role in the history of the park. Once the council had become the legal owner, it planned to sell the land for housing. Many local people wanted it to remain a place that everyone could go to, to enjoy the fresh air and natural environment – remember the park is in a densely populated residential area. Diane Gosforth was one of those people, and she organised petitions and demonstrations, which eventually made the council change its mind about the future of the land.

MARK: Soon after this the First World War broke out, in 1914, and most of the park was dug up and planted with vegetables, which were sold locally. At one stage the army considered taking it over for troop exercises and got as far as contacting the city council, then decided the park was too small to be of use. There were occasional public meetings during the war, in an area that had been retained as grass.

MARK: After the war, the park was turned back more or less to how it had been before 1914, and continued almost unchanged until recently. Plans for transforming it were drawn up at various times, most recently in 2013, though they were revised in 2015, before any work had started. The changes finally got going in 2016, and were finished on schedule last year.

MARK: OK, let me tell you about some of the changes that have been made – and some things that have been retained. If you look at this map, you’ll see the familiar outline of the park, with the river forming the northern boundary, and a gate in each of the other three walls. The statue of Diane Gosforth has been moved: it used to be close to the south gate, but it’s now immediately to the north of the lily pond, almost in the centre of the park, which makes it much more visible.

MARK: There’s a new area of wooden sculptures, which are on the river bank, where the path from the east gate makes a sharp bend.

MARK: There are two areas that are particularly intended for children. The playground has been enlarged and improved, and that’s between the river and the path that leads from the pond to the river.

MARK: Then there’s a new maze, a circular series of paths, separated by low hedges. That’s near the west gate – you go north from there towards the river and then turn left to reach it.

MARK: There have been tennis courts in the park for many years, and they’ve been doubled, from four to eight. They’re still in the south-west corner of the park, where there’s a right-angle bend in the path.

MARK: Something else I’d like to mention is the new fitness area. This is right next to the lily pond on the same side as the west gate.

MARK: Now, as you’re all gardeners, I’m sure you’ll like to hear about the plants that have been chosen for the park.`;

    LISTENING_SCRIPTS['15-2-2'] = `CATHY: OK, Graham, so let’s check we both know what we’re supposed to be doing.

GRAHAM: OK.

CATHY: So, for the university’s open day, we have to plan a display on British life and literature in the mid-19th century.

GRAHAM: That’s right. But we’ll have some people to help us find the materials and set it up, remember – for the moment, we just need to plan it.

CATHY: Good. So have you gathered who’s expected to come and see the display? Is it for the people studying English, or students from other departments? I’m not clear about it.

GRAHAM: Nor me. That was how it used to be, but it didn’t attract many people, so this year it’s going to be part of an open day, to raise the university’s profile. It’ll be publicised in the city, to encourage people to come and find out something of what goes on here. And it’s included in the information that’s sent to people who are considering applying to study here next year.

CATHY: Presumably some current students and lecturers will come?

GRAHAM: I would imagine so, but we’ve been told to concentrate on the other categories of people.

CATHY: Right. We don’t have to cover the whole range of 19th-century literature, do we?

GRAHAM: No, it’s entirely up to us. I suggest just using Charles Dickens.

CATHY: That’s a good idea. Most people have heard of him, and have probably read some of his novels, or seen films based on them, so that’s a good lead-in to life in his time.

GRAHAM: Exactly. And his novels show the awful conditions that most people had to live in, don’t they: he wanted to shock people into doing something about it.

CATHY: Did he do any campaigning, other than writing?

GRAHAM: Yes, he campaigned for education and other social reforms, and gave talks, but I’m inclined to ignore that and focus on the novels.

CATHY: Yes, I agree.

CATHY: OK, so now shall we think about a topic linked to each novel?

GRAHAM: Yes. I’ve printed out a list of Dickens’s novels in the order they were published, in the hope you’d agree to focus on him!

CATHY: You’re lucky I did agree! Let’s have a look. OK, the first was The Pickwick Papers, published in 1836. It was very successful when it came out, wasn’t it, and was adapted for the theatre straight away.

GRAHAM: There’s an interesting point, though, that there’s a character who keeps falling asleep, and that medical condition was named after the book – Pickwickian Syndrome.

CATHY: Oh, so why don’t we use that as the topic, and include some quotations from the novel?

GRAHAM: Right. Next is Oliver Twist. There’s a lot in the novel about poverty. But maybe something less obvious …

CATHY: Well Oliver is taught how to steal, isn’t he? We could use that to illustrate the fact that very few children went to school, particularly not poor children, so they learnt in other ways.

GRAHAM: Good idea. What’s next?

CATHY: Maybe Nicholas Nickleby. Actually he taught in a really cruel school, didn’t he?

GRAHAM: That’s right. But there’s also the company of touring actors that Nicholas joins. We could do something on theatres and other amusements of the time. We don’t want only the bad things, do we?

CATHY: OK.

GRAHAM: What about Martin Chuzzlewit? He goes to the USA, doesn’t he?

CATHY: Yes, and Dickens himself had been there a year before, and drew on his experience there in the novel.

GRAHAM: I wonder, though … The main theme is selfishness, so we could do something on social justice? No, too general, let’s keep to your idea – I think it would work well.

CATHY: He wrote Bleak House next – that’s my favourite of his novels.

GRAHAM: Yes, mine too. His satire of the legal system is pretty powerful.

CATHY: That’s true, but think about Esther, the heroine. As a child she lives with someone she doesn’t know is her aunt, who treats her very badly. Then she’s very happy living with her guardian, and he puts her in charge of the household. And at the end she gets married and her guardian gives her and her husband a house, where of course they’re very happy.

GRAHAM: Yes, I like that.

CATHY: What shall we take next? Little Dorrit? Old Mr Dorrit has been in a debtors’ prison for years …

GRAHAM: So was Dickens’s father, wasn’t he?

CATHY: That’s right.

GRAHAM: What about focusing on the part when Mr Dorrit inherits a fortune, and he starts pretending he’s always been rich?

CATHY: Good idea.

GRAHAM: OK, so next we need to think about what materials we want to illustrate each issue. That’s going to be quite hard.`;

    LISTENING_SCRIPTS['15-2-3'] = `SPEAKER: I’m going to report on a case study of a programme which has been set up to help rural populations in Mozambique, a largely agricultural country in South-East Africa.

SPEAKER: The programme worked with three communities in Chicualacuala district, near the Limpopo River. This is a dry and arid region, with unpredictable rainfall. Because of this, people in the area were unable to support themselves through agriculture and instead they used the forest as a means of providing themselves with an income, mainly by selling charcoal. However, this was not a sustainable way of living in the long term, as they were rapidly using up this resource.

SPEAKER: To support agriculture in this dry region, the programme focused primarily on making use of existing water resources from the Limpopo River by setting up systems of irrigation, which would provide a dependable water supply for crops and animals. The programme worked closely with the district government in order to find the best way of implementing this. The region already had one farmers’ association, and it was decided to set up two more of these. These associations planned and carried out activities including water management, livestock breeding and agriculture, and it was notable that in general, women formed the majority of the workforce.

SPEAKER: It was decided that in order to keep the crops safe from animals, both wild and domestic, special areas should be fenced off where the crops could be grown. The community was responsible for creating these fences, but the programme provided the necessary wire for making them.

SPEAKER: Once the area had been fenced off, it could be cultivated. The land was dug, so that vegetables and cereals appropriate to the climate could be grown, and the programme provided the necessary seeds for this. The programme also provided pumps so that water could be brought from the river in pipes to the fields. However, the labour was all provided by local people, and they also provided and put up the posts that supported the fences around the fields.

SPEAKER: Once the programme had been set up, its development was monitored carefully. The farmers were able to grow enough produce not just for their own needs, but also to sell. However, getting the produce to places where it could be marketed was sometimes a problem, as the farmers did not have access to transport, and this resulted in large amounts of produce, especially vegetables, being spoiled. This problem was discussed with the farmers’ associations and it was decided that in order to prevent food from being spoiled, the farmers needed to learn techniques for its preservation.

SPEAKER: There was also an additional initiative that had not been originally planned, but which became a central feature of the programme. This was when farmers started to dig holes for tanks in the fenced-off areas and to fill these with water and use them for breeding fish – an important source of protein. After a time, another suggestion was made by local people which hadn’t been part of the programme’s original proposal, but which was also adopted later on. They decided to try setting up colonies of bees, which would provide honey both for their own consumption and to sell.

SPEAKER: So what lessons can be learned from this programme? First of all, it tells us that in dry, arid regions, if there is access to a reliable source of water, there is great potential for the development of agriculture. In Chicualacuala, there was a marked improvement in agricultural production, which improved food security and benefited local people by providing them with both food and income. However, it’s important to set realistic timelines for each phase of the programme, especially for its design, as mistakes made at this stage may be hard to correct later on.

SPEAKER: The programme demonstrates that sustainable development is possible in areas where …`;
  }

  console.log('[real-15a] 剑15 Test1 & Test2 已覆盖为真实剑桥雅思内容');
})();
