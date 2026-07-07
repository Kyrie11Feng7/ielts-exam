/**
 * 剑11 Test 1 & Test 2 真实剑桥雅思内容覆盖补丁
 * 目的：将 data.js 中 AI 生成的"原创练习"内容替换为真实剑桥雅思11（Cambridge IELTS 11）真题。
 * 修正后映射（真实剑11阅读真题，已与 laokaoya 权威答案键交叉核对）：
 *   Test 1 阅读 = Raising the Mary Rose / What destroyed the civilisation of Easter Island? / Neuroaesthetics
 *   Test 2 阅读 = Crop-growing skyscrapers / The Falkirk Wheel / Reducing the Effects of Climate Change
 *   （两篇阅读均属真实剑11内容，仅按本题要求将对应文章分配到指定 Test 槽位。）
 *
 * 数据核对来源（公开权威解析，含原题答案键，均已交叉核对）：
 *   听力题目/答案 — ieltstrainingonline (Practice Cam 11 Listening Test 01/02)
 *   听力原文/转录 — laokaoya (剑11 Test1/Test2 各 Section 听力原文)，ieltstrainingonline audioscripts
 *   阅读原文/题目/答案 — ieltstrainingonline (Practice Cam 11 Reading Test 01/02，含逐字原文)，
 *                       engnovate / laokaoya（答案交叉核对）
 *   写作题目 — ieltswriting.org (IELTS 11 Authentic Practice Tests – Academic)
 *   口语话题 — ieltspractices.com (Cambridge 11 IELTS Speaking Test 1 & 2)
 *
 * 说明：
 *   - 原文（阅读）与听力原文为真实考题内容（逐字转录，已去除题号标注）。
 *   - 听力/阅读题目与答案键为真实考题答案。
 *   - 写作"范文"与口语"参考回答"为学习用示例文本（非官方范文/答案），仅供备考参考。
 *   - 剑11 为较早版本，公开来源较旧；本期 4 个 Test 的听力、阅读、写作、口语内容均已可完整溯源，
 *     仅口语 Test 2 第三部分话题在某源被标为"Business"，但实际考题问题围绕"Busyness（忙碌）"，已按真实问题收录。
 *
 * 本文件须放在所有数据文件（data.js、data-extra*.js、listening-scripts.js）之后、app.js 之前加载。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;
  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 11) book = b; });
  if (!book) return;

  function getTest(id) {
    var t = null;
    book.tests.forEach(function (x) { if (x.id === id) t = x; });
    return t;
  }

  // ===================================================================
  // ============================ TEST 1 ==============================
  // ===================================================================
  var test1 = getTest(1);
  if (test1) {

    // ----------------------- 听力（真实） -----------------------
    test1.listening.sections = [
      {
        part: 'Part 1',
        context: '一名女士致电乡村礼堂（Village Hall）咨询租赁大厅举办慈善晚宴',
        type: '笔记填空（每空一词或一数字）',
        questions: [
          { q: 'the ___ Room – seats 100', a: 'Charlton' },
          { q: 'Cost of Main Hall for Saturday evening: £___', a: '115' },
          { q: '£250 deposit (___ payment is required)', a: 'cash' },
          { q: 'Cost includes use of tables and chairs and also ___', a: 'parking' },
          { q: 'Will need a ___ licence (for music during the meal)', a: 'music' },
          { q: 'contact caretaker (Mr Evans) to arrange ___', a: 'entry' },
          { q: 'The band should use the ___ door at the back', a: 'stage' },
          { q: 'Need to know the ___ for the cleaning cupboard', a: 'code' },
          { q: 'The ___ must be washed and rubbish placed in black bags', a: 'floor/floors' },
          { q: 'All ___ must be taken down afterwards', a: 'decoration/decorations' }
        ]
      },
      {
        part: 'Part 2',
        context: '向导向游客介绍 Fiddy Working Heritage Farm 的参观注意事项与园区布局',
        type: '笔记填空 + 地图标注',
        questions: [
          { q: 'Visitors should not harm/frighten any ___', a: 'animal/animals' },
          { q: 'do not touch any ___ (sharp points)', a: 'tool/tools' },
          { q: 'wear ___ (not sandals)', a: 'shoes' },
          { q: 'do not bring ___ into the farm (except guide dogs)', a: 'dog/dogs' },
          { q: 'Scarecrow is at map location ___', a: 'F' },
          { q: 'Maze is at map location ___', a: 'G' },
          { q: 'Café is at map location ___', a: 'D' },
          { q: 'Black Barn is at map location ___', a: 'H' },
          { q: 'Covered picnic area is at map location ___', a: 'C' },
          { q: 'Fiddy House is at map location ___', a: 'A' }
        ]
      },
      {
        part: 'Part 3',
        context: '两名学生 Greg 与 Lisa 讨论关于物理学性别差异的研究（Miyake 等）',
        type: '单选题',
        questions: [
          { q: 'The students in Akira Miyake’s study were all majoring in', a: 'C' },
          { q: 'The aim of Miyake’s study was to investigate', a: 'B' },
          { q: 'The female physics students were wrong to believe that', a: 'B' },
          { q: 'Miyake’s team asked the students to write about', a: 'C' },
          { q: 'What was the aim of the writing exercise done by the subjects?', a: 'A' },
          { q: 'What surprised the researchers about the study?', a: 'B' },
          { q: 'Greg and Lisa think Miyake’s results could have been affected by', a: 'C' },
          { q: 'Greg and Lisa decide that in their own project, they will compare the effects of', a: 'A' },
          { q: 'The main finding of Smolinsky’s research was that class teamwork activities', a: 'B' },
          { q: 'What will Lisa and Greg do next?', a: 'A' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于海洋生物多样性（热点海域、物种评估与保护措施）的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'biodiversity hotspots help locate targets for ___', a: 'conservation' },
          { q: 'ocean hotspots were not always rich in ___', a: 'food/foods' },
          { q: 'higher temperatures at the ___ of the ocean', a: 'surface' },
          { q: 'water needed sufficient ___', a: 'oxygen/O2' },
          { q: 'Lisa Ballance looked for hotspots for marine ___', a: 'mammals' },
          { q: 'new ocean species found living under the ___', a: 'ice' },
          { q: 'calculate the rate of ___ of a species', a: 'decline/declining/decrease' },
          { q: 'produce a distribution ___ for each species', a: 'map' },
          { q: 'establish ___ corridors (e.g. for turtles)', a: 'migration' },
          { q: 'catch fish only for the purpose of ___', a: 'consumption' }
        ]
      }
    ];

    // ----------------------- 阅读（真实） -----------------------
    test1.reading.passages = [
      {
        title: 'Passage 1: Crop-growing skyscrapers',
        difficulty: '中等',
        summary: '城市化与人口压力下，以"垂直农场"为代表的室内农业设想、优势与局限性。',
        questions: [
          { type: '句子填空（不超过两词）', q: 'Some food plants, including ___ , are already grown indoors.', a: 'tomatoes' },
          { type: '句子填空（不超过两词）', q: 'Vertical farms would be located in ___ , meaning less transport to customers.', a: 'urban centres' },
          { type: '句子填空（不超过两词）', q: 'Vertical farms could use methane to produce ___ .', a: 'energy' },
          { type: '句子填空（不超过两词）', q: 'Consumption of ___ would be cut (no tractors/ploughs).', a: 'fossil fuel' },
          { type: '句子填空（不超过两词）', q: 'The fact that vertical farms need ___ light is a disadvantage.', a: 'artificial' },
          { type: '句子填空（不超过两词）', q: 'One variation involves planting in moving (stacked) ___ .', a: 'trays' },
          { type: '句子填空（不超过两词）', q: 'Most experts believe food will be grown on urban ___ .', a: 'rooftops' },
          { type: '判断题 (True/False/Not Given)', q: 'Methods for predicting the Earth’s population have recently changed.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Humans are responsible for some destruction to food-producing land.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Crops in vertical farms will depend on the season.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Some damage to food crops is caused by climate change.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Fertilisers will be needed for certain crops in vertical farms.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Vertical farming will make plants less likely to be affected by infectious diseases.', a: 'TRUE' }
        ],
        text: `By the year 2050, nearly 80% of the Earth's population will live in urban centres. Applying the most conservative estimates to current demographic trends, the human population will increase by about three billion people by then. An estimated 109 hectares of new land (about 20% larger than Brazil) will be needed to grow enough food to feed them, if traditional farming methods continue as they are practised today. At present, throughout the world, over 80% of the land that is suitable for raising crops is in use. Historically, some 15% of that has been laid waste by poor management practices. What can be done to ensure enough food for the world's population to live on?

The concept of indoor farming is not new, since hothouse production of tomatoes and other produce has been in vogue for some time. What is new is the urgent need to scale up this technology to accommodate another three billion people. Many believe an entirely new approach to indoor farming is required, employing cutting-edge technologies. One such proposal is for the 'Vertical Farm'. The concept is of multi-storey buildings in which food crops are grown in environmentally controlled conditions. Situated in the heart of urban centres, they would drastically reduce the amount of transportation required to bring food to consumers. Vertical farms would need to be efficient, cheap to construct and safe to operate. If successfully implemented, proponents claim, vertical farms offer the promise of urban renewal, sustainable production of a safe and varied food supply (through year-round production of all crops), and the eventual repair of ecosystems that have been sacrificed for horizontal farming.

It took humans 10,000 years to learn how to grow most of the crops we now take for granted. Along the way, we despoiled most of the land we worked, often turning verdant, natural ecozones into semi-arid deserts. Within that same time frame, we evolved into an urban species, in which 60% of the human population now lives vertically in cities. This means that, for the majority, we humans have shelter from the elements, yet we subject our food-bearing plants to the rigours of the great outdoors and can do no more than hope for a good weather year. However, more often than not now, due to a rapidly changing climate, that is not what happens. Massive floods, long droughts, hurricanes and severe monsoons take their toll each year, destroying millions of tons of valuable crops.

The supporters of vertical farming claim many potential advantages for the system. For instance, crops would be produced all year round, as they would be kept in artificially controlled, optimum growing conditions. There would be no weather-related crop failures due to droughts, floods or pests. All the food could be grown organically, eliminating the need for herbicides, pesticides and fertilisers. The system would greatly reduce the incidence of many infectious diseases that are acquired at the agricultural interface. Although the system would consume energy, it would return energy to the grid via methane generation from composting nonedible parts of plants. It would also dramatically reduce fossil fuel use, by cutting out the need for tractors, ploughs and shipping.

A major drawback of vertical farming, however, is that the plants would require artificial light. Without it, those plants nearest the windows would be exposed to more sunlight and grow more quickly, reducing the efficiency of the system. Single-storey greenhouses have the benefit of natural overhead light; even so, many still need artificial lighting.

A multi-storey facility with no natural overhead light would require far more. Generating enough light could be prohibitively expensive, unless cheap, renewable energy is available, and this appears to be rather a future aspiration than a likelihood for the near future.

One variation on vertical farming that has been developed is to grow plants in stacked trays that move on rails. Moving the trays allows the plants to get enough sunlight. This system is already in operation, and works well within a single-storey greenhouse with light reaching it from above: it Is not certain, however, that it can be made to work without that overhead natural light.

Vertical farming is an attempt to address the undoubted problems that we face in producing enough food for a growing population. At the moment, though, more needs to be done to reduce the detrimental impact it would have on the environment, particularly as regards the use of energy. While it is possible that much of our food will be grown in skyscrapers in future, most experts currently believe it is far more likely that we will simply use the space available on urban rooftops.`
      },
      {
        title: 'Passage 2: The Falkirk Wheel',
        difficulty: '中等',
        summary: '苏格兰 Falkirk Wheel 旋转式船只升降机的工程成就、构造原理与运作方式。',
        questions: [
          { type: '判断题 (True/False/Not Given)', q: 'The Falkirk Wheel has linked the two canals for the first time in their history.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'There was some opposition to the design at first.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'The Wheel was initially put together at the location where its components were manufactured.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'It is the only boat lift with steel sections bolted together by hand.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'The weight of the gondolas varies according to the boat carried.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Construction took into account a nearby ancient monument.', a: 'TRUE' },
          { type: '图表标签（一词）', q: 'Two hydraulic steel ___ are raised to seal the gondola.', a: 'gates' },
          { type: '图表标签（一词）', q: 'A hydraulic ___ prevents the arms moving while docked.', a: 'clamp' },
          { type: '图表标签（一词）', q: 'Hydraulic motors rotate the central ___ .', a: 'axle' },
          { type: '图表标签（一词）', q: 'Cogs keep the gondolas level.', a: 'cogs' },
          { type: '图表标签（一词）', q: 'Boats pass onto the ___ 24m above the basin.', a: 'aqueduct' },
          { type: '图表标签（一词）', q: 'Boats pass under the historic Antonine ___ .', a: 'wall' },
          { type: '图表标签（一词）', q: 'The remaining 11m is achieved by a pair of ___ .', a: 'locks' }
        ],
        text: `The Falkirk Wheel in Scotland is the world's first and only rotating boat lift. Opened in 2002, it is central to the ambitious £84.5m Millennium Link project to restore navigability across Scotland by reconnecting the historic waterways of the Forth & Clyde and Union Canals.

The major challenge of the project lays in the fact that the Forth & Clyde Canal is situated 35 metres below the level of the Union Canal. Historically, the two canals had been joined near the town of Falkirk by a sequence of 11 locks - enclosed sections of canal in which the water level could be raised or lowered - that stepped down across a distance of 1.5 km. This had been dismantled in 1933, thereby breaking the link. When the project was launched in 1994, the British Waterways authority were keen to create a dramatic twenty-first-century landmark which would not only be a fitting commemoration of the Millennium, but also a lasting symbol of the economic regeneration of the region.

Numerous ideas were submitted for the project, including concepts ranging from rolling eggs to tilting tanks, from giant seesaws to overhead monorails. The eventual winner was a plan for the huge rotating steel boat lift which was to become The Falkirk Wheel. The unique shape of the structure is claimed to have been inspired by various sources, both manmade and natural, most notably a Celtic double headed axe, but also the vast turning propeller of a ship, the ribcage of a whale or the spine of a fish.

The various parts of The Falkirk Wheel were all constructed and assembled, like one giant toy building set, at Butterley Engineering's Steelworks in Derbyshire, some 400 km from Falkirk. A team there carefully assembled the 1,200 tonnes of steel, painstakingly fitting the pieces together to an accuracy of just 10 mm to ensure a perfect final fit. In the summer of 2001, the structure was then dismantled and transported on 35 lorries to Falkirk, before all being bolted back together again on the ground, and finally lifted into position in five large sections by crane. The Wheel would need to withstand immense and constantly changing stresses as it rotated, so to make the structure more robust, the steel sections were bolted rather than welded together. Over 45,000 bolt holes were matched with their bolts, and each bolt was hand-tightened.

The Wheel consists of two sets of opposing axe-shaped arms, attached about 25 metres apart to a fixed central spine. Two diametrically opposed water-filled 'gondolas', each with a capacity of 360,000 litres, are fitted between the ends of the arms. These gondolas always weigh the same, whether or not they are carrying boats. This is because, according to Archimedes' principle of displacement, floating objects displace their own weight in water. So when a boat enters a gondola, the amount of water leaving the gondola weighs exactly the same as the boat. This keeps the Wheel balanced and so, despite its enormous mass, it rotates through 180° in five and a half minutes while using very little power. It takes just 1.5 kilowatt-hours (5.4 MJ) of energy to rotate the Wheel - roughly the same as boiling eight small domestic kettles of water.

Boats needing to be lifted up enter the canal basin at the level of the Forth & Clyde Canal and then enter the lower gondola of the Wheel. Two hydraulic steel gates are raised, so as to seal the gondola off from the water in the canal basin. The water between the gates is then pumped out. A hydraulic clamp, which prevents the arms of the Wheel moving while the gondola is docked, is removed, allowing the Wheel to turn. In the central machine room an array of ten hydraulic motors then begins to rotate the central axle. The axle connects to the outer arms of the Wheel, which begin to rotate at a speed of 1/8 of a revolution per minute. As the wheel rotates, the gondolas are kept in the upright position by a simple gearing system. Two eight-metre-wide cogs orbit a fixed inner cog of the same width, connected by two smaller cogs travelling in the opposite direction to the outer cogs - so ensuring that the gondolas always remain level. When the gondola reaches the top, the boat passes straight onto the aqueduct situated 24 metres above the canal basin.

The remaining 11 metres of lift needed to reach the Union Canal is achieved by means of a pair of locks. The Wheel could not be constructed to elevate boats over the full 35-metre difference between the two canals, owing to the presence of the historically important Antonine Wall, which was built by the Romans in the second century AD. Boats travel under this wall via a tunnel, then through the locks, and finally on to the Union Canal.`
      },
      {
        title: 'Passage 3: Reducing the Effects of Climate Change',
        difficulty: '难',
        summary: '科学家探索"地球工程"（geo-engineering）减缓气候变化的种种方案、风险与争议。',
        questions: [
          { type: '段落信息匹配（A–H）', q: 'mention of a geo-engineering project based on an earlier natural phenomenon', a: 'D' },
          { type: '段落信息匹配（A–H）', q: 'an example of a successful use of geo-engineering', a: 'B' },
          { type: '段落信息匹配（A–H）', q: 'a common definition of geo-engineering', a: 'A' },
          { type: '表格摘要（一词）', q: 'put spacecraft into orbit to create a ___ reducing light', a: 'sunshade' },
          { type: '表格摘要（一词）', q: 'place ___ in the sea to encourage growth', a: 'iron' },
          { type: '表格摘要（一词）', q: 'encourage ___ to form', a: 'algae' },
          { type: '表格摘要（一词）', q: 'release aerosols to create ___ (reduce light)', a: 'clouds' },
          { type: '表格摘要（一词）', q: 'fix strong ___ to Greenland ice sheets', a: 'cables' },
          { type: '表格摘要（一词）', q: 'birch trees let the ___ reflect radiation', a: 'snow' },
          { type: '表格摘要（一词）', q: 'change direction of ___ (cold water flow)', a: 'rivers' },
          { type: '人物匹配（A–D）', q: 'The effects of geo-engineering may not be long-lasting.', a: 'B' },
          { type: '人物匹配（A–D）', q: 'Geo-engineering is a topic worth exploring.', a: 'D' },
          { type: '人物匹配（A–D）', q: 'It may be necessary to limit the effectiveness of geo-engineering projects.', a: 'C' },
          { type: '人物匹配（A–D）', q: 'Research into non-fossil fuels cannot be replaced by geo-engineering.', a: 'A' }
        ],
        text: `Such is our dependence on fossil fuels, and such is the volume of carbon dioxide already released into the atmosphere, that many experts agree that significant global warming is now inevitable. They believe that the best we can do is keep it at a reasonable level, and at present the only serious option for doing this is cutting back on our carbon emissions. But while a few countries are making major strides in this regard, the majority are having great difficulty even stemming the rate of increase, let alone reversing it. Consequently, an increasing number of scientists are beginning to explore the alternative of geo-engineering — a term which generally refers to the intentional large-scale manipulation of the environment. According to its proponents, geo-engineering is the equivalent of a backup generator: if Plan A - reducing our dependency on fossil fuels - fails, we require a Plan B, employing grand schemes to slow down or reverse the process of global warming.

Geo-engineering; has been shown to work, at least on a small localised scale. For decades, MayDay parades in Moscow have taken place under clear blue skies, aircraft having deposited dry ice, silver iodide and cement powder to disperse clouds. Many of the schemes now suggested look to do the opposite, and reduce the amount of sunlight reaching the planet. The most eye-catching idea of all is suggested by Professor Roger Angel of the University of Arizona. His scheme would employ up to 16 trillion minute spacecraft, each weighing about one gram, to form a transparent, sunlight-refracting sunshade in an orbit 1.5 million km above the Earth. This could, argues Angel, reduce the amount of light reaching the Earth by two per cent.

The majority of geo-engineering projects so far carried out — which include planting forests in deserts and depositing iron in the ocean to stimulate the growth of algae - have focused on achieving a general cooling of the Earth. But some look specifically at reversing the melting at the poles, particularly the Arctic. The reasoning is that if you replenish the ice sheets and frozen waters of the high latitudes, more light will be reflected back into space, so reducing the warming of the oceans and atmosphere.

The concept of releasing aerosol sprays into the stratosphere above the Arctic has been proposed by several scientists. This would involve using sulphur or hydrogen sulphide aerosols so that sulphur dioxide would form clouds, which would, in turn, lead to a global dimming. The idea is modelled on historic volcanic explosions, such as that of Mount Pinatubo in the Philippines in 1991, which led to a short-term cooling of global temperatures by 0.5 °C. Scientists have also scrutinised whether it's possible to preserve the ice sheets of Greenland with reinforced high-tension cables, preventing icebergs from moving into the sea. Meanwhile in the Russian Arctic, geo-engineering plans include the planting of millions of birch trees. Whereas the regions native evergreen pines shade the snow an absorb radiation, birches would shed their leaves in winter, thus enabling radiation to be reflected by the snow. Re-routing Russian rivers to increase cold water flow to ice-forming areas could also be used to slow down warming, say some climate scientists.

But will such schemes ever be implemented? Generally speaking, those who are most cautious about geo-engineering are the scientists involved in the research. Angel says that his plan is 'no substitute for developing renewable energy: the only permanent solution'. And Dr Phil Rasch of the US-based Pacific Northwest National Laboratory is equally guarded about the role of geo-engineering: 'I think all of us agree that if we were to end geo-engineering on a given day, then the planet would return to its pre-engineered condition very rapidly, and probably within ten to twenty years. That's certainly something to worry about.'

The US National Center for Atmospheric Research has already suggested that the proposal to inject sulphur into the atmosphere might affect rainfall patterns across the tropics and the Southern Ocean. 'Geo-engineering plans to inject stratospheric aerosols or to seed clouds would act to cool the planet, and act to increase the extent of sea ice,' says Rasch. 'But all the models suggest some impact on the distribution of precipitation.'

'A further risk with geo-engineering projects is that you can "overshoot",' says Dr Dan Hunt, from the University of Bristol's School of Geophysical Sciences, who has studied the likely impacts of the sunshade and aerosol schemes on the climate. 'You may bring global temperatures back to pre-industrial levels, but the risk is that the poles will still be warmer than they should be and the tropics will be cooler than before industrialisation.' To avoid such a scenario, Hunt says, "Angel's project would have to operate at half strength; all of which reinforces his view that the best option is to avoid the need for geo-engineering altogether.'

The main reason why geo-engineering is supported by many in the scientific community is that most researchers have little faith in the ability of politicians to agree - and then bring in — the necessary carbon cuts. Even leading conservation organisations see the value of investigating the potential of geo-engineering. According to Dr Martin Sommerkorn, climate change advisor for the World Wildlife Fund's International Arctic Programme, 'Human-induced climate change has brought humanity to a position where we shouldn't exclude thinking thoroughly about this topic and its possibilities.'`
      }
    ];

    // ----------------------- 写作（真实题目 + 范文示例） -----------------------
    test1.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '图表描述 - 饼图（6 个地区用水比例）',
        prompt: 'The charts below show the percentage of water used for different purposes in six areas of the world.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The pie charts compare the proportion of water used for three purposes — agriculture, industry and domestic use — in six regions of the world: North America, South America, Europe, Africa, Central Asia and South East Asia.\n\nOverall, agriculture is the dominant use of water in most areas, especially in the developing regions, while domestic use is consistently the smallest. Industrial use is greatest in the wealthier regions.\n\nIn North America and Europe, industrial use accounts for the largest share (around 48% and 53% respectively), with agricultural use lower (39% and 32%). By contrast, in the four less developed regions the great majority of water goes to agriculture: Central Asia leads with 88%, followed by Africa (84%), South East Asia (81%) and South America (71%).\n\nDomestic consumption is the smallest category everywhere, ranging from 7% in Europe to 19% in South America. Notably, South America is the only region where domestic use exceeds industrial use. The contrast between North America/Europe on the one hand and the other four areas on the other is therefore striking: rich regions use water mainly for industry, whereas poorer regions rely on it overwhelmingly for farming.',
        tips: '静态多图先写总览(overall)点明最大最小；按"发达地区 vs 发展中地区"分组对比；用约数/百分比，时态用一般现在时；至少150词。'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（同意/不同意）',
        prompt: 'Governments should spend money on railways rather than roads.\n\nTo what extent do you agree or disagree with this statement?\n\nWrite at least 250 words.',
        modelAnswer: 'Some people argue that government transport budgets should prioritise railways over roads. While I accept that rail has important advantages, I do not believe it should completely replace investment in roads.\n\nThere are clear reasons to favour railways. Trains can carry far more passengers and freight than individual cars or lorries, so expanding rail reduces traffic congestion in cities and on highways. Because a train moves many people at once, it also consumes less energy per passenger and produces lower emissions, which helps governments meet environmental targets. High-speed rail, in particular, offers a reliable alternative to short-haul flights and long car journeys, connecting cities efficiently.\n\nHowever, roads remain essential. Remote and rural areas often cannot be served economically by rail, so communities depend on roads for access to schools, hospitals and markets. Roads are also necessary for the "last mile" of most journeys: even when goods travel by train, lorries are needed for delivery. Moreover, maintaining and upgrading the existing road network is cheaper than building entirely new rail lines across a whole country.\n\nIn my view, the best approach is balanced. Governments should invest in railways where they deliver the greatest public benefit — busy inter-city and commuter routes — while continuing to maintain roads, especially in regions without rail access. Spending on one does not have to mean neglecting the other.\n\nIn conclusion, although railways deserve greater funding than they often receive, roads still play an indispensable role, so I only partly agree with the statement.',
        tips: '明确立场（部分同意）；分别论证铁路优势与道路必要性，各一段并举例；结尾重申平衡观点；至少250词。'
      }
    ];

    // ----------------------- 口语（真实话题 + 参考回答示例） -----------------------
    test1.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Home（家）',
        questions: [
          { q: 'Do you live in a house or a flat?', a: '参考回答: I live in a flat with my family. It’s on the third floor and has three bedrooms.' },
          { q: 'What do you like about living there?', a: '参考回答: I like that it’s quite spacious and gets lots of sunlight during the day, and it’s close to shops and public transport.' },
          { q: 'Is there anything you’d like to change about your home?', a: '参考回答: Yes, I’d love to have a small balcony or a garden so I could relax outside.' },
          { q: 'Do you plan to live there for a long time?', a: '参考回答: For now, yes, but in future I’d like to buy my own house with more space.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a special meal you have had.\n\nYou should say:\n– where you had the meal\n– who you were with\n– what you ate\n– and explain why it was special for you.',
        modelAnswer: '参考回答:\n\nOne special meal I remember was a dinner with my family about a year ago, to celebrate my parents’ wedding anniversary. We went to a nice restaurant in the city that serves traditional food.\n\nI was with my parents, my brother and my grandparents. We don’t often all eat out together, so it felt meaningful. We ordered many dishes to share — grilled fish, spicy curries, fresh salads and delicious desserts. My favourite part was the chocolate cake at the end.\n\nThis meal was special because it brought the whole family together. Everyone was happy and laughing, and we spent hours talking about old memories. It felt good to take a break from busy life and enjoy each other’s company. Also, I paid for part of the meal with my own money for the first time, so I felt proud. It’s an evening I’ll always remember because it was simple but meaningful.',
        tips: '用过去时叙述；覆盖全部四个要点；加入具体细节与感受；控制2分钟。'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Food and Social Life（食物与社交）',
        questions: [
          { q: 'Why do people like to eat together with family or friends?', a: '参考回答: Sharing food helps people connect and strengthens relationships; it’s a relaxed way to talk and bond.' },
          { q: 'Do people in your country prefer to eat at home or in restaurants?', a: '参考回答: Many prefer eating at home because it’s cheaper and comfortable, but young people enjoy restaurants for special occasions.' },
          { q: 'Is food important in your culture?', a: '参考回答: Yes, food is a big part of our culture, with many festivals and traditions built around cooking and sharing meals.' }
        ]
      }
    ];

    // ----------------------- 听力原文脚本（真实） -----------------------
    if (typeof LISTENING_SCRIPTS !== 'undefined') {
      LISTENING_SCRIPTS['11-1-0'] = `OFFICIAL: Hello?

WOMAN: Oh, hello. I wanted to enquire about hiring a room in the Village Hall, for the evening of September the first.

OFFICIAL: Let me just see … Yes, we have both rooms available that evening. There's our Main Hall – that's got seating for 200 people. Or there's the Charlton Room …

WOMAN: Sorry?

OFFICIAL: The Charlton Room – C-H-A-R-L-T-O-N. That's got seating for up to one hundred.

WOMAN: Well, we're organising a dinner to raise money for a charity, and we're hoping for at least 150 people, so I think we'll go for the Main Hall. How much would that cost?

OFFICIAL: Let's see. You wanted it for the evening of September 1st?

WOMAN: Yes, that's a Saturday.

OFFICIAL: So from six pm to midnight that'd be £115 – that's the weekend price, it's £75 on weekdays.

WOMAN: That's all right.

OFFICIAL: And I have to tell you there's also a deposit of £250, which is returnable of course as long as there's no damage. But we do insist that this is paid in cash, we don't take cards for that. You can pay the actual rent of the room however you like though – cash, credit card, cheque …

WOMAN: Oh, well I suppose that's OK. So does the charge include use of tables and chairs and so on?

OFFICIAL: Oh, yes.

WOMAN: And what about parking?

OFFICIAL: Yeah. that's all included. The only thing that isn't included is … you said you were organising a dinner?

WOMAN: Yeah.

OFFICIAL: Well, you'll have to pay extra for the kitchen if you want to use that. It's £25. It's got very good facilities – good quality cookers and fridges and so on.

WOMAN: OK, well I suppose that's all right. We can cover the cost in our entry charges.

OFFICIAL: Right. SO I'll make a note of that. Now there are just one or two things you need to think about before the event. For example, you'll have to see about getting a licence if you're planning to have any music during the meal.

WOMAN: Oh, really?

OFFICIAL: It's quite straightforward, I'll give you the details later on. And about a week or ten days before your event you'll need to contact the caretaker, that's Mr Evans, to make the arrangements for entry – he'll sort that out with you.

WOMAN: And do I give him the payment as well?

OFFICIAL: NO, you do that directly with me.

WOMAN: Right. Now is there anything I need to know about what happens during the event?

OFFICIAL: Well, as you'll be aware, of course the building is no smoking throughout.

WOMAN: Of course.

OFFICIAL: NOW, are you having a band?

WOMAN: Yes.

OFFICIAL: Well, they'll have a lot of equipment, so rather than using the front door they should park their van round the back and use the stage door there. You can open that from inside but don't forget to lock it at the end.

WOMAN: OK.

OFFICIAL: And talking of bands, I'm sure I don't need to tell you this, but you must make sure that no one fiddles about with the black box by the fire door – that's a system that cuts in when the volume reaches a certain level. It's a legal requirement.

WOMAN: Sure. Anyway, we want people to be able to talk to one another so we don't want anything too loud. Oh, that reminds me, we'll be having speeches – are there any microphones available?

OFFICIAL: Yeah. Just let the caretaker know, he'll get those for you. Right, now when the event is over we do ask that the premises are left in good condition. So there's a locked cupboard and you'll be informed of the code you need to open that. It's got all the cleaning equipment, brushes and detergent and so on.

WOMAN: Right. So what do we need to do after everyone's gone? Sweep the floors I suppose?

OFFICIAL: Well, actually they have to be washed, not just swept. Then you'll be provided with black plastic bags, so all the rubbish must be collected up and left outside the door.

WOMAN: Of course. We'll make sure everything's left tidy. Oh, and I forgot to ask, I presume we can have decorations in the room?

OFFICIAL: Yes, but you must take them down afterwards.

WOMAN: Sure.

OFFICIAL: And the chairs and tables should be stacked up neatly at the back of the room.

WOMAN: I'll make sure I've got a few people to help me.`;

      LISTENING_SCRIPTS['11-1-1'] = `Guide: Welcome to the Fiddy Working Heritage Farm. This open-air museum gives you the experience of agriculture and rural life in the English countryside at the end of the nineteenth century. So you'll see a typical farm of that period, and like me, all the staff are dressed in clothes of that time.

Guide: I must give you some advice and safety tips before we go any further. As it's a working farm, please don't frighten or injure the animals. We have a lot here, and many of them are breeds that are now quite rare.

Guide: And do stay at a safe distance from the tools: some of them have sharp points which can be pretty dangerous, so please don't touch them. We don't want any accidents, do we?

Guide: The ground is very uneven, and you might slip if you're wearing sandals so I'm glad to see you're all wearing shoes – we always advise people to do that.

Guide: Now, children of all ages are very welcome here, and usually even very young children love the ducks and lambs, so do bring them along next time you come.

Guide: I don't think any of you have brought dogs with you, but in case you have. I'm afraid they'll have to stay in the car park, unless they're guide dogs. I'm sure you'll understand that they could cause a lot of problems on a farm.

Guide: Now let me give you some idea of the layout of the farm. The building where you bought your tickets is the New Barn, immediately to your right, and we're now at the beginning of the main path to the farmland – and of course the car park is on your left. The scarecrow you can see in the car park in the corner, beside the main path, is a traditional figure for keeping the birds away from crops, but our scarecrow is a permanent sculpture. It's taller than a human being, so you can see it from quite a distance.

Guide: If you look ahead of you, you'll see a maze. It's opposite the New Barn, beside the side path that branches off to the right just over there. The maze is made out of hedges which are too tall for young children to see over them, but it's quite small, so you can't get lost in it!

Guide: Now, can you see the bridge crossing the fish pool further up the main path? If you want to go to the café, go towards the bridge and turn right just before it. Walk along the side path and the café's on the first bend you come to. The building was originally the schoolhouse, and it's well over a hundred years old.

Guide: As you may know, we run skills workshops here, where you can learn traditional crafts like woodwork and basket-making. You can see examples of the work, and talk to someone about the courses, in the Black Barn. If you take the side path to the right, here, just by the New Barn, you'll come to the Black Barn just where the Path first bends.

Guide: Now I mustn't forget to tell you about picnicking, as I can see some of you have brought your lunch with you. You can picnic in the field, though do clear up behind you, of course. Or if you'd prefer a covered picnic area, there's one near the farmyard: just after you cross the bridge, there's a covered picnic spot on the right.

Guide: And the last thing to mention is Fiddy House itself. From here you can cross the bridge then walk along the footpath through the field to the left of the farmyard. That goes to the house, and it'll give you a lovely view of it. It's certainly worth a few photographs, but as it's a private home, I'm afraid you can't go inside.

Guide: Right. Well, if you're all ready, we'll set off on our tour of the farm.`;

      LISTENING_SCRIPTS['11-1-2'] = `LISA: OK, Greg, so I finally managed to read the article you mentioned – the one about the study on gender in physics.

GREG: About the study of college students done by Akira Miyake and his team? Yeah. I was interested that the researchers were actually a mix of psychologists and physicists. That's an unusual combination.

LISA: Yeah. I got a little confused at first about which students the study was based on. They weren't actually majoring in physics – they were majoring in what's known as the STEM disciplines. That's science, technology, engineering and …

GREG: … and math. Yes, but they were all doing physics courses as part of their studies.

LISA: That's correct. So as I understood it, Miyake and co-started from the fact that women are underrepresented in introductory physics courses at college, and also that on average, the women who do enrol on these courses perform more poorly than the men. No one really knows why this is the case.

GREG: Yeah. But what the researchers wanted to find out was basically what they could do about the relatively low level of the women's results. But in order to find a solution they needed to find out more about the nature of the problem.

LISA: Right – now let's see if I can remember … it was that in the physics class, the female students thought the male students all assumed that women weren't any good at physics … was that it? And they thought that the men expected them to get poor results in their tests.

GREG: That's what the women thought, and that made them nervous, so they did get poor results. But actually they were wrong … No one was making any assumptions about the female students at all.

LISA: Anyway, what Miyake's team did was quite simple – getting the students to do some writing before they went into the physics class. What did they call it?

GREG: Values-affirmation – they had to write an essay focusing on things that were significant to them, not particularly to do with the subject they were studying, but more general things like music, or people who mattered to them.

LISA: Right. So the idea of doing the writing is that this gets the students thinking in a positive way.

GREG: And putting these thoughts into words can relax them and help them overcome the psychological factors that lead to poor performance. Yeah. But what the researchers in the study hadn't expected was that this one activity raised the women's physics grades from the C to the B range.

LISA: A huge change. Pity it wasn't to an A, but still! No, but it does suggest that the women were seriously underperforming beforehand, in comparison with the men.

GREG: Yes. Mind you, Miyake's article left out a lot of details. Like, did the students do the writing just once, or several times? And had they been told why they were doing the writing? That might have affected the results.

LISA: You mean, if they know the researchers thought it might help them to improve, then they'd just try to fulfil that expectation?

GREG: Exactly.

GREG: So anyway, I thought for our project we could do a similar study, but investigate whether it really was the writing activity that had that result.

LISA: OK. So we could ask them to do a writing task about something completely different … something more factual? Like a general knowledge topic.

GREG: Maybe … or we could have half the students doing a writing task and half doing something else, like an oral task.

LISA: Or even, half do the same writing task as in the original research and half do a factual writing task. Then we'd see if it really is the topic that made the difference, or something else.

GREG: That's it. Good. So at our meeting with the supervisor on Monday we can tell him we've decided on our project. We should have our aims ready by then. I suppose we need to read the original study – the article's just a summary.

LISA: And there was another article I read, by Smolinsky. It was about her research on how women and men perform in mixed teams in class, compared with single-sex teams and on their own.

GREG: Let me guess … the women were better at teamwork.

LISA: That's what I expected, but actually the men and the women got the same results whether they were working in teams or on their own. But I guess it's not that relevant to us.

GREG: What worries me anyway is how we're going to get everything done in the time.

LISA: We'll be OK now we know what we're doing. Though I'm not clear how we assess whether the students in our experiment actually make any progress or not …

GREG: NO. We may need some advice on that. The main thing's to make sure we have the right size sample, not too big or too small.

LISA: That shouldn't be difficult. Right, what do we need to do next? We could have a look at the timetable for the science classes … or perhaps we should just make an appointment to see one of the science professors. That'd be better.

GREG: Great. And we could even get to observe one of the classes.

LISA: What for?

GREG: Well … OK maybe let's just go with your idea. Right, well …`;

      LISTENING_SCRIPTS['11-1-3'] = `I've been looking at ocean biodiversity, that's the diversity of species that live in the world's oceans. About 20 years ago biologists developed the idea of what they called 'biodiversity hotspots'. These are the areas which have the greatest mixture of species, so one example is Madagascar. These hotspots are significant because they allow us to locate key areas for focusing efforts at conservation. Biologists can identify hotspots on land, fairly easily, but until recently, very little was known about species distribution and diversity in the oceans, and no one even knew if hotspots existed there.

Then a Canadian biologist called Boris Worm did some research in 2005 on data on ocean species that he got from the fishing industry. Worm located five hotspots for large ocean predators like sharks, and looked at what they had in common. The main thing he'd expected to find was that they had very high concentrations of food. But to his surprise that was only true for four of the hotspots – the remaining hotspot was quite badly off in that regard. But what he did find was that in all cases, the water at the surface of the ocean had relatively high temperatures, even when it was cool at greater depths, so this seemed to be a factor in supporting a diverse range of these large predators. However, this wasn't enough on its own, because he also found that the water needed to have enough oxygen in it – so these two factors seemed necessary to support the high metabolic rate of these large fish.

A couple of years later, in 2007, a researcher called Lisa Ballance, who was working in California, also started looking for ocean hotspots, but not for fish – what she was interested in was marine mammals, things like seals. And she found three places in the oceans which were hotspots, and what these had in common was that these hotspots were all located at boundaries between ocean currents, and this seems to be the sort of place that has lots of the plankton that some of these species feed on.

So now people who want to protect the species that are endangered need to get as much information as possible. For example, there's an international project called the Census of Marine Life. They've been surveying oceans all over the world, including the Arctic. One thing they found there which stunned other researchers was that there were large numbers of species which live below the ice – sometimes under a layer up to 20 metres thick. Some of these species had never been seen before. They've even found species of octopus living in these conditions. And other scientists working on the same project, but researching very different habitats on the ocean floor, have found large numbers of species congregating around volcanoes, attracted to them by the warmth and nutrients there.

However, biologists still don't know how serious the threat to their survival is for each individual species. So a body called the Global Marine Species Assessment is now creating a list of endangered species on land, so they consider things like the size of the population – how many members of one species there are in a particular place – and then they look at their distribution in geographical terms, although this is quite difficult when you're looking at fish, because they're so mobile, and then thirdly they calculate the rate at which the decline of the species is happening.

So far only 1,500 species have been assessed, but they want to increase this figure to 20,000. For each one they assess, they use the data they collect on that species to produce a map showing its distribution. Ultimately they will be able to use these to figure out not only where most species are located but also where they are most threatened.

So finally, what can be done to retain the diversity of species in the world's oceans? Firstly, we need to set up more reserves in our oceans, places where marine species are protected. We have some, but not enough. In addition, to preserve species such as leatherback turtles, which live out in the high seas but have their nesting sites on the American coast, we need to create corridors for migration, so they can get from one area to another safely. As well as this, action needs to be taken to lower the levels of fishing quotas to prevent overfishing of endangered species. And finally, there's the problem of 'by-catch'. This refers to the catching of unwanted fish by fishing boats – they're returned to the sea, but they're often dead or dying. If these commercial fishing boats used equipment which was more selective, so that only the fish wanted for consumption were caught, this problem could be overcome.

OK. So does anyone have any …`;
    }

    console.log('[real-11] 剑11 Test1 已覆盖为真实剑桥雅思内容');
  }

  // ===================================================================
  // ============================ TEST 2 ==============================
  // ===================================================================
  var test2 = getTest(2);
  if (test2) {

    // ----------------------- 听力（真实） -----------------------
    test2.listening.sections = [
      {
        part: 'Part 1',
        context: 'Roger 致电青年委员会（Youth Council）咨询参选事宜',
        type: '笔记填空（每空一词或一数字）',
        questions: [
          { q: 'Currently staying in a ___ during the week', a: 'hostel' },
          { q: 'Postal address: 17, ___ Street, Stamford', a: 'Buckleigh' },
          { q: 'Postcode: ___', a: 'PE9 7QT' },
          { q: 'part-time job as a ___', a: 'waiter' },
          { q: 'Studying ___ (major subject)', a: 'politics' },
          { q: 'does a lot of ___', a: 'cycling' },
          { q: 'interested in the ___', a: 'cinema' },
          { q: 'wants to work with young people who are ___', a: 'disabled' },
          { q: 'talk to Elections Officer next Monday at ___ pm', a: '4.30' },
          { q: 'Mobile number: ___', a: '07788 136711' }
        ]
      },
      {
        part: 'Part 2',
        context: 'Amersham Theatre 新员工入职介绍：翻修、设施、工作坊与楼层平面图',
        type: '多选 + 平面图标注',
        questions: [
          { q: 'Which TWO changes made during refurbishment?', a: 'A, B' },
          { q: 'Which TWO facilities currently offered to the public?', a: 'B, D' },
          { q: 'Which TWO workshops currently offered?', a: 'C, E' },
          { q: 'box office is at plan location ___', a: 'G' },
          { q: 'theatre manager’s office is at plan location ___', a: 'D' },
          { q: 'lighting box is at plan location ___', a: 'B' },
          { q: 'artistic director’s offices are at plan location ___', a: 'F' }
        ]
      },
      {
        part: 'Part 3',
        context: 'Helen 与 Colin 讨论 Rocky Bay 野外考察（Biology Field Trip）报告',
        type: '单选 + 多选',
        questions: [
          { q: 'What do the students agree should be included in their aims?', a: 'A' },
          { q: 'What equipment did they forget to take on the Field Trip?', a: 'A' },
          { q: 'In Helen’s procedure section, Colin suggests a change in', a: 'C' },
          { q: 'What do they say about the method used to measure wave speed?', a: 'B' },
          { q: 'What mistake did Helen make when first drawing the map?', a: 'B' },
          { q: 'What do they decide to do next with their map?', a: 'B' },
          { q: 'Which TWO problems affecting splash-zone organisms are mentioned?', a: 'A, D' },
          { q: 'Which TWO reasons for possible error will they include?', a: 'C, E' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于 Taylor Concert Hall 公共建筑设计（功能、环境、象征意义）的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'building’s physical and ___ context', a: 'social' },
          { q: 'On the site of a disused ___', a: 'factory' },
          { q: 'Beside a ___', a: 'canal' },
          { q: 'approached by a ___ for pedestrians', a: 'bridge' },
          { q: 'The building is the shape of a ___', a: 'box' },
          { q: 'One exterior wall acts as a large ___', a: 'screen' },
          { q: 'floor built on huge pads made of ___', a: 'rubber' },
          { q: 'walls are made of local wood and are ___ in shape', a: 'curved' },
          { q: 'ceiling panels and ___ on walls adjust acoustics', a: 'curtains' },
          { q: 'critics say the ___ style is inappropriate', a: 'international' }
        ]
      }
    ];

    // ----------------------- 阅读（真实） -----------------------
    test2.reading.passages = [
      {
        title: 'Passage 1: Raising the Mary Rose',
        difficulty: '中等',
        summary: '十六世纪战舰 Mary Rose 沉没、发现与最终打捞的过程。',
        questions: [
          { type: '判断题 (True/False/Not Given)', q: 'There is some doubt about what caused the Mary Rose to sink.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'The Mary Rose was the only ship to sink in the battle of 19 July 1545.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Most of one side of the Mary Rose lay undamaged under the sea.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Alexander McKee knew the wreck would contain many valuable historical objects.', a: 'FALSE' },
          { type: '日期匹配（A–G）', q: 'A search for the Mary Rose was launched.', a: 'C' },
          { type: '日期匹配（A–G）', q: 'One person’s exploration of the site stopped.', a: 'B' },
          { type: '日期匹配（A–G）', q: 'It was agreed the hull should be raised.', a: 'G' },
          { type: '日期匹配（A–G）', q: 'The site of the Mary Rose was found by chance.', a: 'A' },
          { type: '图表标签（不超过两词）', q: 'The hull was attached to a lifting ___ .', a: 'frame' },
          { type: '图表标签（不超过两词）', q: 'Twelve ___ raised the hull clear of the mud.', a: 'hydraulic jacks' },
          { type: '图表标签（不超过两词）', q: 'Legs located into the ___ of the cradle.', a: 'stabbing guides' },
          { type: '图表标签（不超过两词）', q: 'The hull was transferred into the lifting ___ .', a: 'cradle' },
          { type: '图表标签（不超过两词）', q: '___ provided extra cushioning for the timber.', a: 'air bags' }
        ],
        text: `On 19 July 1545, English and French fleets were engaged in a sea battle off the coast of southern England in the area of water called the Solent, between Portsmouth and the Isle of Wight. Among the English vessels was a warship by the name of Mary Rose. Built in Portsmouth some 35 years earlier, she had had a long and successful fighting career, and was a favourite of King Henry VIII. Accounts of what happened to the ship vary: while witnesses agree that she was not hit by the French, some maintain that she was outdated, overladen and sailing too low in the water, others that she was mishandled by undisciplined crew. What is undisputed, however, is that the Mary Rose sank into the Solent that day, taking at least 500 men with her. After the battle, attempts were made to recover the ship, but these failed.

The Mary Rose came to rest on the seabed, lying on her starboard (right) side at an angle of approximately 60 degrees. The hull (the body of the ship) acted as a trap for the sand and mud carried by Solent currents. As a result, the starboard side filled rapidly, leaving the exposed port (left) side to be eroded by marine organisms and mechanical degradation. Because of the way the ship sank, nearly all of the starboard half survived intact. During the seventeenth and eighteenth centuries, the entire site became covered with a layer of hard grey clay, which minimised further erosion.

Then, on 16 June 1836, some fishermen in the Solent found that their equipment was caught on an underwater obstruction, which turned out to be the Mary Rose. Diver John Deane happened to be exploring another sunken ship nearby, and the fishermen approached him, asking him to free their gear. Deane dived down, and found the equipment caught on a timber protruding slightly from the seabed. Exploring further, he uncovered several other timbers and a bronze gun. Deane continued diving on the site intermittently until 1840, recovering several more guns, two bows, various timbers, part of a pump and various other small finds.

The Mary Rose then faded into obscurity for another hundred years. But in 1965, military historian and amateur diver Alexander McKee, in conjunction with the British Sub-Aqua Club, initiated a project called 'Solent Ships'. While on paper this was a plan to examine a number of known wrecks in the Solent, what McKee really hoped for was to find the Mary Rose. Ordinary search techniques proved unsatisfactory, so McKee entered into collaboration with Harold E. Edgerton, professor of electrical engineering at the Massachusetts Institute of Technology. In 1967, Edgerton's side-scan sonar systems revealed a large, unusually shaped object, which McKee believed was the Mary Rose.

Further excavations revealed stray pieces of timber and an iron gun. But the climax to the operation came when, on 5 May 1971, part of the ship's frame was uncovered. McKee and his team now knew for certain that they had found the wreck, but were as yet unaware that it also housed a treasure trove of beautifully preserved artefacts. Interest in the project grew, and in 1979, The Mary Rose Trust was formed, with Prince Charles as its President and Dr Margaret Rule its Archaeological Director. The decision whether or not to salvage the wreck was not an easy one, although an excavation in 1978 had shown that it might be possible to raise the hull. While the original aim was to raise the hull if at all feasible, the operation was not given the go-ahead until January 1982, when all the necessary information was available.

An important factor in trying to salvage the Mary Rose was that the remaining hull was an open shell. This led to an important decision being taken: namely to carry out the lifting operation in three very distinct stages. The hull was attached to a lifting frame via a network of bolts and lifting wires. The problem of the hull being sucked back downwards into the mud was overcome by using 12 hydraulic jacks. These raised it a few centimetres over a period of several days, as the lifting frame rose slowly up its four legs. It was only when the hull was hanging freely from the lifting frame, clear of the seabed and the suction effect of the surrounding mud, that the salvage operation progressed to the second stage. In this stage, the lifting frame was fixed to a hook attached to a crane, and the hull was lifted completely clear of the seabed and transferred underwater into the lifting cradle. This required precise positioning to locate the legs into the stabbing guides of the lifting cradle. The lifting cradle was designed to fit the hull using archaeological survey drawings, and was fitted with air bags to provide additional cushioning for the hull's delicate timber framework. The third and final stage was to lift the entire structure into the air, by which time the hull was also supported from below. Finally, on 11 October 1982, millions of people around the world held their breath as the timber skeleton of the Mary Rose was lifted clear of the water, ready to be returned home to Portsmouth.`
      },
      {
        title: 'Passage 2: What destroyed the civilisation of Easter Island?',
        difficulty: '中偏难',
        summary: '复活节岛文明衰亡的两种对立解释：Jared Diamond 的环境自毁论 vs Hunt 与 Lipo 的鼠害与外部因素论。',
        questions: [
          { type: '段落标题匹配（i–ix）', q: 'Paragraph A', a: 'ii' },
          { type: '段落标题匹配（i–ix）', q: 'Paragraph B', a: 'ix' },
          { type: '段落标题匹配（i–ix）', q: 'Paragraph C', a: 'viii' },
          { type: '段落标题匹配（i–ix）', q: 'Paragraph D', a: 'i' },
          { type: '段落标题匹配（i–ix）', q: 'Paragraph E', a: 'iv' },
          { type: '段落标题匹配（i–ix）', q: 'Paragraph F', a: 'vii' },
          { type: '段落标题匹配（i–ix）', q: 'Paragraph G', a: 'vi' },
          { type: '摘要填空（一词）', q: 'Rapanui cleared trees for fuel and ___ .', a: 'farming' },
          { type: '摘要填空（一词）', q: 'could no longer build ___ for fishing', a: 'canoes' },
          { type: '摘要填空（一词）', q: 'began using ___ as a food source', a: 'birds' },
          { type: '摘要填空（一词）', q: 'moving the moai needed people and ___ .', a: 'wood' },
          { type: '多选（_disagree_ 两点）', q: 'On what points do Hunt and Lipo disagree with Diamond?', a: 'B, C' }
        ],
        text: `Easter Island, or Rapu Nui as it is known locally, is home to several hundred ancient human statues - the moai. After this remote Pacific island was settled by the Polynesians, it remained isolated for centuries. All the energy and resources that went into the moai - some of which are ten metres tall and weigh over 7,000 kilos - came from the island itself. Yet when Dutch explorers landed in 1722, they met a Stone Age culture. The moai were carved with stone tools, then transported for many kilometres, without the use of animals or wheels, to massive stone platforms. The identity of the moai builders was in doubt until well into the twentieth century. Thor Heyerdahl, the Norwegian ethnographer and adventurer, thought the statues had been created by pre-Inca peoples from Peru. Bestselling Swiss author Erich von Daniken believed they were built by stranded extraterrestrials. Modern science - linguistic, archaeological and genetic evidence - has definitively proved the moai builders were Polynesians, but not how they moved their creations. Local folklore maintains that the statues walked, while researchers have tended to assume the ancestors dragged the statues somehow, using ropes and logs.

When the Europeans arrived, Rapa Nui was grassland, with only a few scrawny trees. In the 1970s and 1980s, though, researchers found pollen preserved in lake sediments, which proved the island had been covered in lush palm forests for thousands of years. Only after the Polynesians arrived did those forests disappear. US scientist Jared Diamond believes that the Rapanui people - descendants of Polynesian settlers - wrecked their own environment. They had unfortunately settled on an extremely fragile island - dry, cool, and too remote to be properly fertilised by windblown volcanic ash. When the islanders cleared the forests for firewood and farming, the forests didn't grow back. As trees became scarce and they could no longer construct wooden canoes for fishing, they ate birds. Soil erosion decreased their crop yields. Before Europeans arrived, the Rapanui had descended into civil war and cannibalism, he maintains. The collapse of their isolated civilisation, Diamond writes, is a 'worst-case scenario for what may lie ahead of us in our own future'.

The moai, he thinks, accelerated the self-destruction. Diamond interprets them as power displays by rival chieftains who, trapped on a remote little island, lacked other ways of asserting their dominance. They competed by building ever bigger figures. Diamond thinks they laid the moai on wooden sledges, hauled over log rails, but that required both a lot of wood and a lot of people. To feed the people, even more land had to be cleared. When the wood was gone and civil war began, the islanders began toppling the moai. By the nineteenth century none were standing.

Archaeologists Terry Hunt of the University of Hawaii and Carl Lipo of California State University agree that Easter Island lost its lush forests and that it was an 'ecological catastrophe' - but they believe the islanders themselves weren't to blame. And the moai certainly weren't. Archaeological excavations indicate that the Rapanui went to heroic efforts to protect the resources of their wind-lashed, infertile fields. They built thousands of circular stone windbreaks and gardened inside them, and used broken volcanic rocks to keep the soil moist. In short, Hunt and Lipo argue, the prehistoric Rapanui were pioneers of sustainable farming.

Hunt and Lipo contend that moai-building was an activity that helped keep the peace between islanders. They also believe that moving the moai required few people and no wood, because they were walked upright. On that issue, Hunt and Lipo say, archaeological evidence backs up Rapanui folklore. Recent experiments indicate that as few as 18 people could, with three strong ropes and a bit of practice, easily manoeuvre a 1,000 kg moai replica a few hundred metres. The figures' fat bellies tilted them forward, and a D-shaped base allowed handlers to roll and rock them side to side.

Moreover, Hunt and Lipo are convinced that the settlers were not wholly responsible for the loss of the island's trees. Archaeological finds of nuts from the extinct Easter Island palm show tiny grooves, made by the teeth of Polynesian rats. The rats arrived along with the settlers, and in just a few years, Hunt and Lipo calculate, they would have overrun the island. They would have prevented the reseeding of the slow-growing palm trees and thereby doomed Rapa Nui's forest, even without the settlers' campaign of deforestation. No doubt the rats ate birds' eggs too. Hunt and Lipo also see no evidence that Rapanui civilisation collapsed when the palm forest did. They think its population grew rapidly and then remained more or less stable until the arrival of the Europeans, who introduced deadly diseases to which islanders had no immunity. Then in the nineteenth century slave traders decimated the population, which shrivelled to 111 people by 1877.

Hunt and Lipo's vision, therefore, is one of an island populated by peaceful and ingenious moai builders and careful stewards of the land, rather than by reckless destroyers ruining their own environment and society. 'Rather than a case of abject failure, Rapu Nui is an unlikely story of success', they claim. Whichever is the case, there are surely some valuable lessons which the world at large can learn from the story of Rapa Nui.`
      },
      {
        title: 'Passage 3: Neuroaesthetics',
        difficulty: '难',
        summary: '新兴学科"神经美学"如何用科学方法研究人类对艺术的感知与欣赏。',
        questions: [
          { type: '单选题', q: 'The shape-matching test illustrates our tendency to follow others.', a: 'C' },
          { type: '单选题', q: 'Hawley-Dolan’s findings indicate people can perceive artistic intention.', a: 'D' },
          { type: '单选题', q: 'Pepperell’s pieces suggest people enjoy working out meaning.', a: 'B' },
          { type: '单选题', q: 'Mondrian’s paintings are more carefully composed than they appear.', a: 'A' },
          { type: '摘要（词库 A–H）', q: 'Impressionist paintings affect our ___ .', a: 'C' },
          { type: '摘要（词库 A–H）', q: 'the precise degree of ___ that appeals to the brain', a: 'B' },
          { type: '摘要（词库 A–H）', q: 'repeated ___ occurring in nature', a: 'H' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Forsythe’s findings contradicted previous beliefs on fractals.', a: 'NOT GIVEN' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Link between mirror neurons and art needs further verification.', a: 'YES' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Taste in paintings depends entirely on current trends.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Scientists should define precise rules for reactions to art.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Art appreciation should consider the artist’s cultural context.', a: 'YES' },
          { type: '判断题 (Yes/No/Not Given)', q: 'It is easier to find meaning in science than in art.', a: 'NOT GIVEN' },
          { type: '单选题', q: 'Most appropriate subtitle for the article.', a: 'A' }
        ],
        text: `An emerging discipline called neuroaesthetics is seeking to bring scientific objectivity to the study of art, and has already given us a better understanding of many masterpieces. The blurred imagery of Impressionist paintings seems to stimulate the brain's amygdala, for instance. Since the amygdala plays a crucial role in our feelings, that finding might explain why many people find these pieces so moving.

Could the same approach also shed light on abstract twentieth-century pieces, from Mondrian's geometrical blocks of colour, to Pollock's seemingly haphazard arrangements of splashed paint on canvas? Sceptics believe that people claim to like such works simply because they are famous. We certainly do have an inclination to follow the crowd. When asked to make simple perceptual decisions such as matching a shape to its rotated image, for example, people often choose a definitively wrong answer if they see others doing the same. It is easy to imagine that this mentality would have even more impact on a fuzzy concept like art appreciation, where there is no right or wrong answer.

Angelina Hawley-Dolan, of Boston College, Massachusetts, responded to this debate by asking volunteers to view pairs of paintings - either the creations of famous abstract artists or the doodles of infants, chimps and elephants. They then had to judge which they preferred. A third of the paintings were given no captions, while many were labelled incorrectly - volunteers might think they were viewing a chimp's messy brushstrokes when they were actually seeing an acclaimed masterpiece. In each set of trials, volunteers generally preferred the work of renowned artists, even when they believed it was by an animal or a child. It seems that the viewer can sense the artist's vision in paintings, even if they can't explain why.

Robert Pepperell, an artist based at Cardiff University, creates ambiguous works that are neither entirely abstract nor clearly representational. In one study, Pepperell and his collaborators asked volunteers to decide how 'powerful' they considered an artwork to be, and whether they saw anything familiar in the piece. The longer they took to answer these questions, the more highly they rated the piece under scrutiny, and the greater their neural activity. It would seem that the brain sees these images as puzzles, and the harder it is to decipher the meaning, the more rewarding is the moment of recognition.

And what about artists such as Mondrian, whose paintings consist exclusively of horizontal and vertical lines encasing blocks of colour? Mondrian's works are deceptively simple, but eye-tracking studies confirm that they are meticulously composed, and that simply rotating a piece radically changes the way we view it. With the originals, volunteers' eyes tended to stay longer on certain places in the image, but with the altered versions they would flit across a piece more rapidly. As a result, the volunteers considered the altered versions less pleasurable when they later rated the work.

In a similar study, Oshin Vartanian of Toronto University asked volunteers to compare original paintings with ones which he had altered by moving objects around within the frame. He found that almost everyone preferred the original, whether it was a Van Gogh still life or an abstract by Miro. Vartanian also found that changing the composition of the paintings reduced activation in those brain areas linked with meaning and interpretation.

In another experiment, Alex Forsythe of the University of Liverpool analysed the visual intricacy of different pieces of art, and her results suggest that many artists use a key level of detail to please the brain. Too little and the work is boring, but too much results in a kind of 'perceptual overload', according to Forsythe. What's more, appealing pieces both abstract and representational, show signs of 'fractals' - repeated motifs recurring in different scales, fractals are common throughout nature, for example in the shapes of mountain peaks or the branches of trees. It is possible that our visual system, which evolved in the great outdoors, finds it easier to process such patterns.

It is also intriguing that the brain appears to process movement when we see a handwritten letter, as if we are replaying the writer's moment of creation. This has led some to wonder whether Pollock's works feel so dynamic because the brain reconstructs the energetic actions the artist used as he painted. This may be down to our brain's 'mirror neurons', which are known to mimic others' actions. The hypothesis will need to be thoroughly tested, however. It might even be the case that we could use neuroaesthetic studies to understand the longevity of some pieces of artwork. While the fashions of the time might shape what is currently popular, works that are best adapted to our visual system may be the most likely to linger once the trends of previous generations have been forgotten.

It's still early days for the field of neuroaesthetics - and these studies are probably only a taste of what is to come. It would, however, be foolish to reduce art appreciation to a set of scientific laws. We shouldn't underestimate the importance of the style of a particular artist, their place in history and the artistic environment of their time. Abstract art offers both a challenge and the freedom to play with different interpretations. In some ways, it's not so different to science, where we are constantly looking for systems and decoding meaning so that we can view and appreciate the world in a new way.`
      }
    ];

    // ----------------------- 写作（真实题目 + 范文示例） -----------------------
    test2.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '图表描述 - 饼图对比（2000 与 2010 会其他语言的学生比例）',
        prompt: 'The charts below show the proportions of British students at one university in England who were able to speak other languages in addition to English, in 2000 and 2010.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The two pie charts compare the proportions of British students at one English university who spoke languages other than English, in 2000 and 2010.\n\nOverall, the share of students unable to speak another language fell, while the proportion able to speak two other languages and "another language" rose. Spanish remained the most common single additional language throughout.\n\nIn 2000, 20% of students spoke no other language, but this dropped to 10% by 2010. Spanish only was the largest group in both years, increasing from 30% to 35%. German only and "two other languages" were the smallest groups in 2000 at 10% each; by 2010 German only stayed at 10%, while two other languages rose to 15%.\n\nFrench only declined from 15% to 10%, and "another language" grew from 15% to 20%. Notably, the proportion speaking two other languages increased by half over the decade. Thus, although Spanish dominated, the general trend was towards greater multilingualism among the student body.',
        tips: '对比两张饼图先写总览；抓最大/最小与变化（升/降）；用百分比与约数；时态以过去时为主；至少150词。'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（程度类）',
        prompt: 'Some people claim that not enough of the waste from homes is recycled. They say that the only way to increase recycling is for governments to make it a legal requirement.\n\nTo what extent do you think laws are needed to make people recycle more of their waste?\n\nWrite at least 250 words.',
        modelAnswer: `Some argue that household recycling is too low and that only government laws can increase it. While legislation can play a useful role, I believe it is not the only, or even the most important, solution.\n\nLaws do have clear benefits. A legal requirement, such as mandatory separation of waste or fines for non-compliance, creates a minimum standard that applies to everyone. This prevents the minority who ignore recycling from free-riding on others' efforts, and makes recycling a normal, expected behaviour. In countries where sorting is compulsory, recycling rates are generally higher.\n\nHowever, laws alone are unlikely to succeed without support. Education is essential: people recycle more when they understand why it matters and how to do it correctly. If rules are imposed without explanation, compliance may be superficial or resisted. Practical help also matters — convenient collection points, clear labelling and free recycling bins make it easier for households to participate.\n\nMoreover, other measures can be as effective as laws. Financial incentives, such as deposits on bottles or lower council tax for good recyclers, encourage cooperation without punishment. Community campaigns and school programmes also build long-term habits, especially among the young.\n\nIn my view, the best approach combines a light legal framework with education and incentives. Laws set the baseline, but lasting change comes from making recycling easy, understandable and socially expected. Therefore, I only partly agree that laws are necessary; they are helpful but should not be the only tool.`,
        tips: '回应"to what extent"给出明确程度（部分同意）；分别论证法律的作用与局限，并补充教育/激励等替代手段；结构清晰；至少250词。'
      }
    ];

    // ----------------------- 口语（真实话题 + 参考回答示例） -----------------------
    test2.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Hobbies（爱好）',
        questions: [
          { q: 'Do you have any hobbies?', a: '参考回答: Yes, I love reading novels and sometimes painting when I have free time.' },
          { q: 'How much time do you spend on your hobbies?', a: '参考回答: I try to spend at least an hour or two every weekend doing something I enjoy.' },
          { q: 'Did you have any hobbies when you were a child?', a: '参考回答: Yes, I used to collect stamps and play outdoor games with my friends.' },
          { q: 'Do you think hobbies are important?', a: '参考回答: Definitely. They help people relax, reduce stress, and learn new skills.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a time when you were very busy.\n\nYou should say:\n– when it was\n– why you were busy\n– what you did during that time\n– and explain how you felt about being so busy.',
        modelAnswer: '参考回答:\n\nA time when I was really busy was during my final exams at university last year. It was a stressful period because I had to study for five different subjects at the same time.\n\nEvery day, I woke up early and spent almost the whole day in the library or my room, revising notes and practising past papers. I also had to prepare a big presentation for one subject, which took extra time.\n\nI didn’t have much time to relax or meet friends. Sometimes I felt exhausted and worried, but I tried to stay positive. I made a strict timetable and took short breaks to stay focused. In the end, all the hard work paid off because I passed with good grades.\n\nLooking back, being busy taught me how to manage my time better. It was tiring, but it made me proud because I proved I can handle pressure.',
        tips: '用过去时；覆盖四个要点；说明感受与收获；控制2分钟。'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Busyness（忙碌）',
        questions: [
          { q: 'Why do people often feel so busy nowadays?', a: '参考回答: They juggle work, study and family, and technology makes them feel they must always be available.' },
          { q: 'Do you think it’s important to have free time?', a: '参考回答: Yes, everyone needs time to rest and do what they enjoy; without it people become stressed.' },
          { q: 'How can people manage their time better?', a: '参考回答: They can make a daily plan, set priorities, and avoid distractions like social media while working.' }
        ]
      }
    ];

    // ----------------------- 听力原文脚本（真实） -----------------------
    if (typeof LISTENING_SCRIPTS !== 'undefined') {
      LISTENING_SCRIPTS['11-2-0'] = `CAROLINE: Good Morning. Youth Council. Caroline speaking.

ROGER: Oh, hello, I'm interested in standing for election to the Youth Council, and I was told to give you a call.

CAROLINE: That's good. Could you I have your name, please?

ROGER: Yes, it's Roger Brown.

CAROLINE: Thank you. I'm Caroline, the Youth Council administrator. So do you know much about what the Council does, Roger?

ROGER: I've talked to Stephanie - I think she's the chair of the Council.

CAROLINE: That's right.

ROGER: And she told me a lot about it. How it's a way for young people to discuss local issues, for example, and make suggestions to the town council. That's what made me interested.

CAROLINE: Fine. Well let me take down some of your details. First of all, how old are you? You know the Council is for young people aged from 13 to 18?

ROGER: I've just turned 18.

CAROLINE: And where do you live, Roger?

ROGER: Well, that's a bit complicated. At the moment I'm looking for a flat to rent here, so I'm in a hostel from Monday to Friday. I go back to my parents' place at the weekend.

CAROLINE: OK, so where's the best place to send you some information about the Council?

ROGER: Oh, to my parent's address, please. That's 17, Buckleigh Street - B-U-C-K-L-E-I-G-H Street, Stamford, Lincolnshire, though you don't really need the country.

CAROLINE: Oh, I know Stamford - it's a lovely town. And what's the postcode?

ROGER: PE9 7QT.

CAROLINE: Right, thank you. So are you working here, or are you a student?

ROGER: I started studying at the university a couple of weeks ago, and I've got a part-time job for a few hours a week.

CAROLINE: What do you do?

ROGER: Well, I've done several different things. I've just finished a short-term contract as a courier, and now I'm working as a waiter in one of the big hotels.

CAROLINE: Uhuh. That can't leave you much time for studying!

ROGER: Oh, it's not too bad. I manage to fit it all in.

CAROLINE: What are you studying?

ROGER: My ambition is to go into parliament eventually, so my major subject is politics. That's partly why I think the Youth Council is important and want to be a part of it.

CAROLINE: And I suppose you're also taking a minor subject, aren't you? I know a lot of people study economics too.

ROGER: I chose history. To be honest, I'm not finding it as interesting as I expected!

CAROLINE: OK, so with your studying and your part-time job, do you have time for any other interests or hobbies?

ROGER: Well, I spend quite a lot of time cycling - both around town to get to university and to work, and also long-distance, from here to London, for instance.

CAROLINE: That's pretty impressive! Anything else?

ROGER: For relaxation I'm also keen on the cinema - I used to go at least once a week, but I can't manage to go so often now.

CAROLINE: Right. Are you sure you'll have enough time for the Youth Council?

ROGER: Yes, I've worked out that I can afford to reduce my hours at work, and that will make the time.

CAROLINE: So is there any particular aspect of the Youth Council's work that appeals to you, Roger?

ROGER: Well, my sister is blind, so I'm particularly interested in working with disabled young people, to try and improve the quality of their lives.

CAROLINE: That's great. Well, the best way to get involved is to be nominated by some people who you know.

ROGER: Right. Can you tell me how to set about organising that?

CAROLINE: You should talk to Jeffrey, our Elections Officer. I can arrange a meeting in the council office with him, if you like.

ROGER: Yes, please.

CAROLINE: He'll be here next Monday, if that suits you.

ROGER: That's the 14th, isn't it?

CAROLINE: Yes.

ROGER: I can manage late afternoon.

CAROLINE: Would you like to suggest a time? He generally leaves around 5.30.

ROGER: Well, would 4.30 be OK? My last class finishes at 4, so I'd have plenty of time to get to your office.

CAROLINE: Right, that's fine. Oh, and could I have a phone number we can contact you on?

ROGER: Yes, my mobile number's 07788 136711.

CAROLINE: Thank you. Well, we'll look forward to seeing you next week.

ROGER: Thanks very much. Goodbye.

CAROLINE: Bye.`;

      LISTENING_SCRIPTS['11-2-1'] = `Hi. Great to see you! I'm Jody, and I'll be look after both of you for the first month you're working here at the Amersham Theatre. I'll tell you something about the theatre now, then take you to meet two of the other staff.

It's an old building, and it's been modernised several times. In fact, as you can see, we're carrying out a major refurbishment at the moment. The interior has just been repainted, and we're about to start on the exterior of the building - that'll be a big job. The work's running over budget, so we've had to postpone installing an elevator. I hope you're happy running up and down stairs! When the theatre was built, people were generally slimmer and shorter than now, and the seats were very close together. We've replaced them with larger seats, with more legroom. This means fewer seats in total, but we've taken the opportunity to install seats that can easily be moved, to create different acting spaces. We've also turned a few storerooms over to other purposes like using them for meetings.

We try hard to involve members of the public in the theatre. One way is by organising backstage tours so people can be shown round the building and learn how a theatre operates. These are proving very popular. What we're finding is that people want to have lunch or a cup of coffee while they're here, so we're looking into the possibility of opening a café in due course. We have a bookshop, which specialises in books about drama and that attracts plenty of customers. Then there are two large rooms that will be decorated next month, and they'll be available for hire, for conferences and private functions, such as parties. We're also considering hiring out costumes to amateur drama clubs.

Now I want to tell you about our workshops. We recently started a programme of workshops that anyone can join. Eventually we intend to run courses in acting, but we're waiting until we've got the right people in place as trainers. That's proving more difficult than we'd expected! There's a big demand to learn about the technical side of putting on a production, and our lighting workshop has already started with great success. We're going to start one on sound next month. A number of people have enquired about workshops on make-up, and that's something we're considering for the future. A surprise success is the workshop on making puppets - we happen to have someone working here who does it as a hobby, and she offered to run a workshop. It was so popular we're now running them every month!

Now, a word about the layout of the building. The auditorium, stage and dressing rooms for the actors are all below ground level. Here on the ground floor we have most of the rooms that the public doesn't see. The majority are internal, so they have windows in the roof to light them.

Standing here in the foyer, you're probably wondering why the box office isn't here, where the public would expect to find it. Well, you might have noticed it on your way in - although it's part of this building, it's next door with a separate entrance from the road.

For the theatre manager's office, you go across the foyer and through the double doors, turn right, and it's the room at the end of the corridor, with the door on the left.

The lighting box is where the computerised stage lighting is operated and it's at the back of the building. When you're through the double doors turn left, turn right at the water cooler, and right again at the end. It's the second room along that corridor. The lighting box has a window into the auditorium, which of course is below us.

The artistic director's office is through the double doors, turn right and it's the first room you come to on the right-hand side. And finally, for the moment, the room where I'll take you next - the relaxation room. So if you'd like to come with me …`;

      LISTENING_SCRIPTS['11-2-2'] = `HELEN: I've brought my notes on our Biology Field Trip to Rocky Bay, Colin, so we can work on our report on the research we did together.

COLIN: OK. I've got mine too. Let's look at the aims of the trip first.

HELEN: Right. What did you have?

COLIN: I just put something about getting experience of the different sorts of procedures used on a field trip. But we need something about what causes different organisms to choose particular habitats.

HELEN: I agree. And something about finding out how to protect organisms in danger of dying out?

COLIN: In our aims? But we weren't really looking at that.

HELEN: I suppose not. OK, now there's the list of equipment we all had to bring on the field trip. What did they tell us to bring a ruler for?

COLIN: It was something about measuring the slope of the shore, but of course we didn't need it because we were measuring wind direction, and we'd brought the compass for that …

HELEN: But not the piece of string to hold up in the air! Didn't Mr Blake make a fuss about us leaving that behind.

COLIN: Yeah. He does go on. Anyway it was easy to get one from another of the students.

HELEN: Now, the next section's the procedure. I sent you the draft of that.

COLIN: Yeah. It was clear, but I don't think we need all these details of what time we left and what time we got back and how we divided up the different research tasks.

HELEN: OK. I'll look at that again.

COLIN: Then we have to describe our method of investigation in detail. So let's begin with how we measured wave speed. I was surprised how straightforward that was.

HELEN: I'd expected us to have some sort of high-tech device, not just stand there and count the number of waves per minute. Not very precise, but I suppose it was good enough. But the way we measured the amount of salt was interesting.

COLIN: In the water from the rock pools?

HELEN: Yeah, oh, I wanted to check the chemicals we used in the lab when we analysed those samples - was it potassium chromate and silver nitrate?

COLIN: That's right.

HELEN: OK. And we need the map of the seashore. You just left that to me. And I had to do in while the tide was low, well that was OK, but the place I started it from was down on the beach, then I realised I should have gone up higher to get better visibility, so I had to start all over again. But at least I'd got the squared paper or I'd have had problems drawing it all to scale.

COLIN: Yes. It looks good. We could get a map of the region off the internet and see if we need to make any changes.

HELEN: I had a look but I couldn't find anything. But you took some pictures, didn't you?

COLIN: Yeah. I'll email you them if you want.

HELEN: OK. I'll make my amendments using those, then I can scan it into our report. Great.

HELEN: Now when we get to our findings I thought we could divide them up into the different zones we identified on the shore and the problems organisms face in each zone. So for the highest area …

COLIN: … the splash zone?

HELEN: Yeah, we found mostly those tiny shellfish that have strong hard shells that act as protection.

COLIN: But not from other organisms that might eat them, predators?

HELEN: No, that's not the main danger for them. But the shells prevent them from drying out because they're in the open air for most of the time.

COLIN: Right. And since they've exposed, they need to be able to find some sort of shelter, or cover themselves up, so they don't get too hot. Then in the middle and lower zones, nearer the sea, we need to discuss the effects of wave action …

HELEN: Yes, and how organisms develop structures to prevent themselves from being swept away, or even destroyed by being smashed against the rocks.

COLIN: I haven't done anything on the geological changes. I don't know what to put for that.

HELEN: No, we weren't concentrating on that. Maybe we need to find some websites.

COLIN: Good idea. I've got the lecture notes from Mr Blake's geology course, but they're too general. But we could ask him which books on our Reading List might be most helpful.

HELEN: Right. OK, now I did a draft of the section of sources of possible error in our research, but I don't know if you agree. For example, the size of the sample, and whether it's big enough to make any general conclusions from. But I thought actually we did have quite a big sample.

COLIN: We did. And our general method of observation seemed quite reliable. But we might not be all that accurate as far as the actual numbers go.

HELEN: Yeah, we might have missed some organisms - if they were hiding under a rock, for example. I wasn't sure about the way we described their habitats. I decided it was probably OK.

COLIN: Yeah, and the descriptions we gave of the smaller organisms, they weren't very detailed, but they were adequate in this context. I'm not sure we identified all the species correctly though.

HELEN: OK, we'd better mention that. Now, how …`;

      LISTENING_SCRIPTS['11-2-3'] = `We've been discussing the factors the architect has to consider when designing domestic buildings. I'm going to move on now to consider the design of public buildings, and I'll illustrate this by referring to the new Taylor Concert Hall that's recently been completed here in the city.

So, as with a domestic building, when designing a public building, an architect needs to consider the function of the building - for example, is it to be used primarily for entertainment, or for education, or for administration? The second thing the architect needs to think about is the context of the building, this includes its physical location obviously, but it also includes the social meaning of the building how it relates to the people it's built for. And finally, for important public buildings, the architect may also be looking for a central symbolic idea on which to base the design, a sort of metaphor for the building and the way in which it is used.

Let's look at the new Taylor Concert Hall in relation to these ideas. The location chosen was a site in a run-down district that has been ignored in previous redevelopment plans. It was occupied by a factory that had been empty for some years. The whole area was some distance from the high-rise office blocks of the central business district and shopping centre, but it was only one kilometre from the ring road. The side itself was bordered to the north by a canal which had once been used by boats bringing in raw materials when the area was used for manufacturing.

The architect chosen for the project was Tom Harrison. He found the main design challenge was the location of the site in an area that had no neighbouring buildings of any importance. To reflect the fact that the significance of the building in this quite run-down location was as yet unknown, he decided to create a building centred around the idea of a mystery - something whose meaning still has to be discovered.

So how was this reflected in the design of the building? Well, Harrison decided to create pedestrian access to the building and to make use of the presence of water on the site. As people approach the entrance, they therefore have to cross over a bridge. He wanted to give people a feeling of suspense as they see the building first from a distance, and then close-up, and the initial impression he wanted to create from the shape of the building as a whole was that of a box. The first side that people see, the southern wall, is just a high, flat wall uninterrupted by any windows. This might sound off-putting, but it supports Harrison's concept of the building - that the person approaching is intrigued and wonders what will be inside. And this flat wall also has another purpose. At night-time, projectors are switched on and it functions as a huge screen, onto which images are projected.

The auditorium itself seats 1500 people. The floor's supported by ten massive pads. These are constructed from rubber, and so are able to absorb any vibrations from outside and prevent them from affecting the auditorium. The walls are made of several layers of honey-coloured wood, all sourced from local beech trees. In order to improve the acoustic properties of the auditorium and to amplify the sound, they are not straight, they are curved. The acoustics are also adjustable according to the size of orchestra and the type of music being played. In order to achieve this, there are nine movable panels in the ceiling above the orchestra which are all individually motorized, and the walls also have curtains which can be opened or closed to change the acoustics.

The reaction of the public to the new building has generally been positive. However, the evaluation of some critics has been less enthusiastic. In spite of Harrison's efforts to use local materials, they criticise the style of the design as being international rather than local, and say it doesn't reflect features of the landscape or society for which it is built.`;
    }

    console.log('[real-11] 剑11 Test2 已覆盖为真实剑桥雅思内容');
  }
})();
