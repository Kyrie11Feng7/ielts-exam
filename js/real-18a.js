/**
 * 剑18 Test 1 & Test 2 剑桥雅思内容覆盖补丁
 * 目的：将 data.js 中 AI 生成的"原创练习"内容替换为剑桥雅思18 Test 1、Test 2 练习题目。
 *
 * 数据核对来源（公开权威解析，含原题答案键）：
 *   听力原文/答案 — laokaoya（剑桥雅思18Test1/Test2听力答案）+ engnovate（Cambridge IELTS 18 Academic Listening Test 1/2 原文与题目）
 *   阅读原文/题目/答案 — engnovate（Cambridge IELTS 18 Academic Reading Test 1/2 全文与题目）+ laokaoya（剑桥雅思18Test1/Test2阅读答案，待与原版书核对）
 *   写作题目 — engnovate（Cambridge IELTS 18 Writing Test 1/2 Task 1/2）+ ieltsanswers（剑桥18 Task 2 题目）
 *   口语话题 — ieltspracticeonline（C.A.M 18 Speaking Test 1/2，与 ieltsworldly 一致）
 *
 * 重要说明：
 *   - 原文、题目、答案键均为剑桥雅思18练习题目内容（已与 laokaoya 官方答案键交叉核对）。
 *   - 范文(modelAnswer)与口语"参考回答"为学习用示例文本（非官方范文），仅供参考。
 *   - 听力原文脚本转录自 engnovate / ieltszone 等公开资源，个别发音/拼写可能与官方音频略有出入。
 *   - Test 2 口语话题存在来源分歧：ieltspracticeonline / ieltsworldly 记为 Science + tourist attraction；
 *     ieltspractices.com 另记为 Cooking + giving advice。本补丁采用与 ieltsworldly 一致的 C.A.M 18 版本。
 *
 * 本文件须放在所有数据文件之后、app.js 之前加载。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;

  function findBook(id) {
    var book = null;
    IELTS_DATA.books.forEach(function (b) { if (b.id === id) book = b; });
    return book;
  }
  function findTest(book, id) {
    var test = null;
    book.tests.forEach(function (t) { if (t.id === id) test = t; });
    return test;
  }

  var book = findBook(18);
  if (!book) return;

  // ===================== 剑18 TEST 1 =====================
  var t1 = findTest(book, 1);
  if (t1) {
    // ---------- 听力 ----------
    t1.listening.sections = [
      {
        part: 'Part 1',
        context: '调查员对 Sadie Jones 进行一次交通方式问卷调查（Transport Survey）',
        type: '填空题（笔记，每空一词及/或一个数字）',
        questions: [
          { q: 'Postcode', a: 'DW30 7YZ' },
          { q: 'Date of the bus journey', a: '24th April' },
          { q: 'Reason for trip: shopping and a visit to the ___', a: 'dentist' },
          { q: 'Travelled by bus because the cost of ___ was too high', a: 'parking' },
          { q: 'Got on the bus at ___ Street', a: 'Claxby' },
          { q: 'Complaint: the bus today was ___', a: 'late' },
          { q: 'Buses are infrequent in the ___', a: 'evening' },
          { q: 'She goes to the ___ by car', a: 'supermarket' },
          { q: 'She dislikes cycling in the city because of ___', a: 'pollution' },
          { q: 'She has no bike because of a lack of ___', a: 'storage' }
        ]
      },
      {
        part: 'Part 2',
        context: 'ACE 志愿者组织负责人介绍如何成为志愿者（Becoming a volunteer for ACE）',
        type: '选择题 + 双选 + 配对',
        questions: [
          { q: 'Why does the speaker apologise about the seats?', a: 'C' },
          { q: 'What does the speaker say about the age of volunteers?', a: 'A' },
          { q: 'What does the speaker say about training?', a: 'A' },
          { q: 'Which TWO issues should you consider before applying?', a: 'B, E' },
          { q: 'Fundraising — what would help you in this role?', a: 'B' },
          { q: 'Litter collection — what would help you in this role?', a: 'G' },
          { q: '"Playmates" (children’s health) — what would help?', a: 'D' },
          { q: 'Story club — what would help you in this role?', a: 'A' },
          { q: 'First aid — what would help you in this role?', a: 'F' }
        ]
      },
      {
        part: 'Part 3',
        context: '两名学生 Chantal 与 Hugo 讨论时尚设计职业讲座（Talk on jobs in fashion design）',
        type: '选择题 + 双选',
        questions: [
          { q: 'Why was Chantal’s initial view of the speaker blocked?', a: 'A' },
          { q: 'What surprised the students about the job market?', a: 'B' },
          { q: 'What was the speaker’s message about the industry?', a: 'A' },
          { q: 'What did they criticise about their school careers advice?', a: 'C' },
          { q: 'What did the two students disagree about?', a: 'B' },
          { q: 'How does Hugo feel about being an unpaid assistant?', a: 'A' },
          { q: 'Which TWO mistakes did the speaker make in her first job?', a: 'B, E' },
          { q: 'Which TWO kinds of retail information would be useful to a designer?', a: 'A, C' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于马拉维大象迁徙（translocation）的学术讲座（Elephant translocation）',
        type: '填空题（笔记，每空一词）',
        questions: [
          { q: 'Elephants knocked down ___ around the park', a: 'fences' },
          { q: 'Whole ___ moved at the same time', a: 'family' },
          { q: 'Helicopters used to guide and round up elephants', a: 'helicopters' },
          { q: 'Darts used to reduce ___ on the elephants', a: 'stress' },
          { q: 'Elephants were placed on their ___', a: 'sides' },
          { q: 'Their ___ was monitored constantly', a: 'breathing' },
          { q: 'Measurements taken of tusks and ___', a: 'feet' },
          { q: 'Improved ___ opportunities for the community', a: 'employment' },
          { q: 'Former poachers gave up their ___', a: 'weapons' },
          { q: 'Increase in ___ as a contributor to GDP', a: 'tourism' }
        ]
      }
    ];

    // ---------- 阅读 ----------
    t1.reading.passages = [
      {
        title: 'Passage 1: Urban farming',
        difficulty: '中等',
        summary: '巴黎屋顶无土（气培）农业的模式、优势与局限。',
        questions: [
          { type: '句子填空（不超过两词及/或一数字）', q: 'Vertical tubes are used to grow strawberries, ___ and herbs.', a: 'lettuces' },
          { type: '句子填空（不超过两词及/或一数字）', q: 'Eventually there will be a daily harvest of up to ___ of fruit and vegetables.', a: '1,000 kg' },
          { type: '句子填空（不超过两词及/或一数字）', q: 'The farm’s produce may account for as much as 10% of the city’s ___', a: 'consumption' },
          { type: '表格填空（一单词）', q: 'Intensive farming: a wide range of ___ are used.', a: 'pesticides' },
          { type: '表格填空（一单词）', q: 'Varieties are chosen that can survive long ___', a: 'journeys' },
          { type: '表格填空（一单词）', q: '___ receive very little of the overall income.', a: 'producers' },
          { type: '表格填空（一单词）', q: 'Aeroponic produce is chosen for its ___', a: 'flavour' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Urban farming can take place above or below ground.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Some aeroponic equipment can be made by hand.', a: 'NOT GIVEN' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Urban farming uses more electricity than some other types of farming.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Aeroponic urban produce is cheaper than traditionally grown organic produce.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Most produce can be grown aeroponically at any time of year.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Beans take longer to grow on an urban farm than other vegetables.', a: 'NOT GIVEN' }
        ],
        text: `Urban farming

On top of a striking new exhibition hall in southern Paris, the world’s largest urban rooftop farm has started to bear fruit. Strawberries that are small, intensely flavoured and resplendently red sprout abundantly from large plastic tubes. Peer inside and you see the tubes are completely hollow, the roots of dozens of strawberry plants dangling down inside them. From identical vertical tubes nearby burst row upon row of lettuces; near those are aromatic herbs, such as basil, sage and peppermint. Opposite, in narrow, horizontal trays packed not with soil but with coconut fibre, grow cherry tomatoes, shiny aubergines and brightly coloured chards.

Pascal Hardy, an engineer and sustainable development consultant, began experimenting with vertical farming and aeroponic growing towers – as the soil-free plastic tubes are known – on his Paris apartment block roof five years ago. The urban rooftop space above the exhibition hall is somewhat bigger: 14,000 square metres and almost exactly the size of a couple of football pitches. Already, the team of young urban farmers who tend it have picked, in one day, 3,000 lettuces and 150 punnets of strawberries. When the remaining two thirds of the vast open area are in production, 20 staff will harvest up to 1,000 kg of perhaps 35 different varieties of fruit and vegetables, every day. ‘We’re not ever, obviously, going to feed the whole city this way,’ cautions Hardy. ‘In the urban environment you’re working with very significant practical constraints, clearly, on what you can do and where. But if enough unused space can be developed like this, there’s no reason why you shouldn’t eventually target maybe between 5% and 10% of consumption.’

Perhaps most significantly, however, this is a real-life showcase for the work of Hardy’s flourishing urban agriculture consultancy, Agripolis, which is currently fielding enquiries from around the world to design, build and equip a new breed of soil-free inner-city farm. ‘The method’s advantages are many,’ he says. ‘First, I don’t much like the fact that most of the fruit and vegetables we eat have been treated with something like 17 different pesticides, or that the intensive farming techniques that produced them are such huge generators of greenhouse gases. I don’t much like the fact, either, that they’ve travelled an average of 2,000 refrigerated kilometres to my plate, that their quality is so poor, because the varieties are selected for their capacity to withstand such substantial journeys, or that 80% of the price I pay goes to wholesalers and transport companies, not the producers.’

Produce grown using this soil-free method, on the other hand – which relies solely on a small quantity of water, enriched with organic nutrients, pumped around a closed circuit of pipes, towers and trays – is ‘produced up here, and sold locally, just down there. It barely travels at all,’ Hardy says. ‘You can select crop varieties for their flavour, not their resistance to the transport and storage chain, and you can pick them when they’re really at their best, and not before.’ No soil is exhausted, and the water that gently showers the plants’ roots every 12 minutes is recycled, so the method uses 90% less water than a classic intensive farm for the same yield.

Urban farming is not, of course, a new phenomenon. Inner-city agriculture is booming from Shanghai to Detroit and Tokyo to Bangkok. Strawberries are being grown in disused shipping containers, mushrooms in underground carparks. Aeroponic farming, he says, is ‘virtuous’. The equipment weighs little, can be installed on almost any flat surface and is cheap to buy: roughly €100 to €150 per square metre. It is cheap to run, too, consuming a tiny fraction of the electricity used by some techniques.

Produce grown this way typically sells at prices that, while generally higher than those of classic intensive agriculture, are lower than soil-based organic growers. There are limits to what farmers can grow this way, of course, and much of the produce is suited to the summer months. ‘Root vegetables we cannot do, at least not yet,’ he says. ‘Radishes are OK, but carrots, potatoes, that kind of thing – the roots are simply too long. Fruit trees are obviously not an option. And beans tend to take up a lot of space for not much return.’ Nevertheless, urban farming of the kind being practised in Paris is one part of a bigger and fast-changing picture that is bringing food production closer to our lives.`
      },
      {
        title: 'Passage 2: Forest management in Pennsylvania, USA',
        difficulty: '中偏难',
        summary: '以低质木材（low-use wood）用作生物质能源，可促进宾州森林的可持续管理。',
        questions: [
          { type: '段落信息匹配（A–G）', q: 'a reference to bad outcomes for a forest when people focus only on its financial reward', a: 'B' },
          { type: '段落信息匹配（A–G）', q: 'a reference to the aspects of any tree that contribute to its worth', a: 'A' },
          { type: '段落信息匹配（A–G）', q: 'a mention of the potential use of wood to help run vehicles', a: 'C' },
          { type: '段落信息匹配（A–G）', q: 'examples of insects that attack trees', a: 'E' },
          { type: '段落信息匹配（A–G）', q: 'an alternative name for trees that produce low-use wood', a: 'B' },
          { type: '目的与砍伐方式匹配（A–C）', q: 'to remove trees that are diseased', a: 'B' },
          { type: '目的与砍伐方式匹配（A–C）', q: 'to generate income across a number of years', a: 'C' },
          { type: '目的与砍伐方式匹配（A–C）', q: 'to create a forest whose trees are close in age', a: 'C' },
          { type: '句子填空（一单词）', q: 'Some dead wood is removed to avoid the possibility of ___', a: 'fire' },
          { type: '句子填空（一单词）', q: 'The ___ from the tops of cut trees can improve soil quality.', a: 'nutrients' },
          { type: '句子填空（一单词）', q: 'Damaged trees should be left, as their ___ provide habitats for wildlife.', a: 'cavities' },
          { type: '句子填空（一单词）', q: 'Some small trees, such as ___, are a source of food for wildlife.', a: 'hawthorn' },
          { type: '句子填空（一单词）', q: 'Any trees that are ___ should be left to grow for diversity.', a: 'rare' }
        ],
        text: `Forest management in Pennsylvania, USA

How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management

A
A tree’s ‘value’ depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest. The same tree can be valued very differently by each person who looks at it. A large, straight black cherry tree has high value as timber to be cut into logs or made into furniture, but for a landowner more interested in wildlife habitat, the real value of that stem (or trunk) may be the food it provides to animals. Likewise, if the tree suffers from black knot disease, its value for timber decreases, but to a woodworker interested in making bowls, it brings an opportunity for a unique and beautiful piece of art.

B
In the past, Pennsylvania landowners were solely interested in the value of their trees as high-quality timber. The norm was to remove the stems of highest quality and leave behind poorly formed trees that were not as well suited to the site where they grew. This practice, called ‘high-grading’, has left a legacy of ‘low-use wood’ in the forests. Some people even call these ‘junk trees’, and they are abundant in Pennsylvania. These trees have lower economic value for traditional timber markets, compete for growth with higher-value trees, shade out desirable regeneration and decrease the health of a stand leaving it more vulnerable to poor weather and disease. Management that specifically targets low-use wood can help landowners manage these forest health issues, and wood energy markets help promote this.

C
Wood energy markets can accept less expensive wood material of lower quality than would be suitable for traditional timber markets. Most wood used for energy in Pennsylvania is used to produce heat or electricity through combustion. Many schools and hospitals use wood boiler systems to heat and power their facilities, many homes are primarily heated with wood, and some coal plants incorporate wood into their coal streams to produce electricity. Wood can also be gasified for electrical generation and can even be made into liquid fuels like ethanol and gasoline for lorries and cars. All these products are made primarily from low-use wood. Several tree- and plant-cutting approaches, which could greatly improve the long-term quality of a forest, focus strongly or solely on the use of wood for those markets.

D
One such approach is called a Timber Stand Improvement (TSI) Cut. In a TSI Cut, really poor-quality tree and plant material is cut down to allow more space, light, and other resources to the highest-valued stems that remain. Removing invasive plants might be another primary goal of a TSI Cut. The stems that are left behind might then grow in size and develop more foliage and larger crowns or tops that produce more coverage for wildlife; they have a better chance to regenerate in a less crowded environment. TSI Cuts can be tailored to one farmer’s specific management goals for his or her land.

E
Another approach that might yield a high amount of low-use wood is a Salvage Cut. With the many pests and pathogens visiting forests including hemlock wooly adelgid, Asian longhomed beetle, emerald ash borer, and gypsy moth, to name just a few, it is important to remember that those working in the forests can help ease these issues through cutting procedures. These types of cut reduce the number of sick trees and seek to manage the future spread of a pest problem. They leave vigorous trees that have stayed healthy enough to survive the outbreak.

F
A Shelterwood Cut, which only takes place in a mature forest that has already been thinned several times, involves removing all the mature trees when other seedlings have become established. This then allows the forester to decide which tree species are regenerated. It leaves a young forest where all trees are at a similar point in their growth. It can also be used to develop a two-tier forest so that there are two harvests and the money that comes in is spread out over a decade or more.

G
Thinnings and dense and dead wood removal for fire prevention also center on the production of low-use wood. However, it is important to remember that some retention of what many would classify as low-use wood is very important. The tops of trees that have been cut down should be left on the site so that their nutrients cycle back into the soil. In addition, trees with many cavities are extremely important habitats for insect predators like woodpeckers, bats and small mammals. They help control problem insects and increase the health and resilience of the forest. It is also important to remember that not all small trees are low-use. For example, many species like hawthorn provide food for wildlife. Finally, rare species of trees in a forest should also stay behind as they add to its structural diversity.

* Stand – An area covered with trees that have common features (e.g. size)`
      },
      {
        title: 'Passage 3: Conquering Earth’s space junk problem',
        difficulty: '难',
        summary: '卫星、火箭残骸与碰撞碎片在地球轨道上制造交通风险，研究者正设法减轻威胁。',
        questions: [
          { type: '段落信息匹配（A–F）', q: 'a reference to the cooperation that takes place to try and minimise risk', a: 'C' },
          { type: '段落信息匹配（A–F）', q: 'an explanation of a person’s aims', a: 'F' },
          { type: '段落信息匹配（A–F）', q: 'a description of a major collision that occurred in space', a: 'A' },
          { type: '段落信息匹配（A–F）', q: 'a comparison between tracking objects in space and a transport system', a: 'E' },
          { type: '段落信息匹配（A–F）', q: 'a reference to efforts to classify space junk', a: 'B' },
          { type: '摘要填空（一单词）', q: 'advice on how the ___ of space can be achieved', a: 'sustainability' },
          { type: '摘要填空（一单词）', q: 'any unused ___ or pressurised material', a: 'fuel' },
          { type: '摘要填空（一单词）', q: 'that could cause ___', a: 'explosions' },
          { type: '摘要填空（一单词）', q: 'operators that become ___', a: 'bankrupt' },
          { type: '人物与陈述匹配（A–D）', q: 'Knowing the exact location of space junk would help prevent any possible danger.', a: 'C' },
          { type: '人物与陈述匹配（A–D）', q: 'Space should be available to everyone and preserved for the future.', a: 'D' },
          { type: '人物与陈述匹配（A–D）', q: 'A recommendation regarding satellites is widely ignored.', a: 'B' },
          { type: '人物与陈述匹配（A–D）', q: 'There is conflicting information about where some objects are.', a: 'D' },
          { type: '人物与陈述匹配（A–D）', q: 'There is a risk we will not be able to undo the damage in space.', a: 'A' }
        ],
        text: `Conquering Earth’s space junk problem

Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet. Researchers are working to reduce these threats.

A
Last year, commercial companies, military and civil departments and amateurs sent more than 400 satellites into orbit, over four times the yearly average in the previous decade. Numbers could rise even more sharply if leading space companies follow through on plans to deploy hundreds to thousands of large constellations of satellites to space in the next few years.

All that traffic can lead to disaster. Ten years ago, a US commercial Iridium satellite smashed into an inactive Russian communications satellite called Cosmos-2251, creating thousands of new pieces of space shrapnel that now threaten other satellites in low Earth orbit – the zone stretching up to 2,000 kilometres in altitude. Altogether, there are roughly 20,000 human-made objects in orbit, from working satellites to small rocket pieces. And satellite operators can’t steer away from every potential crash, because each move consumes time and fuel that could otherwise be used for the spacecraft’s main job.

B
Concern about space junk goes back to the beginning of the satellite era, but the number of objects in orbit is rising so rapidly that researchers are investigating new ways of attacking the problem. Several teams are trying to improve methods for assessing what is in orbit, so that satellite operators can work more efficiently in ever-more-crowded space. Some researchers are now starting to compile a massive data set that includes the best possible information on where everything is in orbit. Others are developing taxonomies of space – working on measuring properties such as the shape and size of an object, so that satellite operators know how much to worry about what’s coming their way.

The alternative, many say, is unthinkable. Just a few uncontrolled space crashes could generate enough debris to set off a runaway cascade of fragments, rendering near-Earth space unusable. ‘If we go on like this, we will reach a point of no return,’ says Carolin Frueh, an astrodynamical researcher at Purdue University in West Lafayette, Indiana.

C
Even as our ability to monitor space objects increases, so too does the total number of items in orbit. That means companies, governments and other players in space are collaborating in new ways to avoid a shared threat. International groups such as the Inter-Agency Space Debris Coordination Committee have developed guidelines on space sustainability. Those include inactivating satellites at the end of their useful life by venting pressurised materials or leftover fuel that might lead to explosions. The intergovernmental groups also advise lowering satellites deep enough into the atmosphere that they will burn up or disintegrate within 25 years. But so far, only about half of all missions have abided by this 25-year goal, says Holger Krag, head of the European Space Agency’s space-debris office in Darmstadt, Germany. Operators of the planned large constellations of satellites say they will be responsible stewards in their enterprises in space, but Krag worries that problems could increase, despite their best intentions. ‘What happens to those that fail or go bankrupt?’ he asks. They are probably not going to spend money to remove their satellites from space.

D
In theory, given the vastness of space, satellite operators should have plenty of room for all these missions to fly safely without ever nearing another object. So some scientists are tackling the problem of space junk by trying to find out where all the debris is to a high degree of precision. That would alleviate the need for many of the unnecessary manoeuvres that are carried out to avoid potential collisions. ‘If you knew precisely where everything was, you would almost never have a problem,’ says Marlon Sorge, a space-debris specialist at the Aerospace Corporation in El Segundo, California.

E
The field is called space traffic management, because it’s similar to managing traffic on the roads or in the air. Think about a busy day at an airport, says Moriba Jah, an astrodynamicist at the University of Texas at Austin: planes line up in the sky, landing and taking off close to one another in a carefully choreographed routine. Air-traffic controllers know the location of the planes down to one metre in accuracy. The same can’t be said for space debris. Not all objects in orbit are known, and even those included in databases are not tracked consistently.

F
An additional problem is that there is no authoritative catalogue that accurately lists the orbits of all known space debris. Jah illustrates this with a web-based database that he has developed. It draws on several sources, such as catalogues maintained by the US and Russian governments, to visualise where objects are in space. When he types in an identifier for a particular space object, the database draws a purple line to designate its orbit. Only this doesn’t quite work for a number of objects, such as a Russian rocket body designated in the database as object number 32280. When Jah enters that number, the database draws two purple lines: the US and Russian sources contain two completely different orbits for the same object. Jah says that it is almost impossible to tell which is correct, unless a third source of information made it possible to cross-correlate.

Jah describes himself as a space environmentalist: ‘I want to make space a place that is safe to operate, that is free and useful for generations to come.’ Until that happens, he argues, the space community will continue devolving into a tragedy in which all spaceflight operators are polluting a common resource.`
      }
    ];

    // ---------- 写作 ----------
    t1.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '图表描述 - 折线图',
        prompt: 'The graph below gives information about the percentage of the population in four Asian countries living in cities from 1970 to 2020, with predictions for 2030 and 2040.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The line graph shows the proportion of people living in urban areas in four Asian countries – China, Malaysia, Thailand and Indonesia – between 1970 and 2020, with projections to 2040.\n\nOverall, urbanisation rose in all four nations over the period, and this upward trend is expected to continue. China and Malaysia had by far the largest urban populations, while Thailand and Indonesia remained lower but still grew steadily.\n\nIn 1970, China and Malaysia both stood at around 20% urban, whereas Thailand and Indonesia were below 20%, with Indonesia the lowest at roughly 15%. Over the following fifty years, Malaysia’s figure climbed most steeply, reaching about 78% by 2020 and is forecast to approach 85% by 2040. China rose from about 17% to around 61% in 2020, with a predicted rise to roughly 70% by 2040.\n\nThailand and Indonesia followed a gentler path. Thailand increased from under 20% to about 50% by 2020, and Indonesia from about 15% to just over 55%. Both are expected to continue rising moderately to around 55–60% by 2040. Although the gaps narrowed somewhat after 1970, Malaysia and China clearly remain the most urbanised of the four throughout.',
        tips: '用过去时+将来时（预测用 will / is predicted to）；先写总览再分组对比；突出最高/最低与变化趋势；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（同意/不同意）',
        prompt: 'The most important aim of science should be to improve people’s lives.\n\nTo what extent do you agree or disagree with this statement?\n\nWrite at least 250 words.',
        modelAnswer: 'It is often argued that the primary purpose of scientific research ought to be the improvement of human lives. While I accept that science should benefit humanity, I disagree that this should be its single most important aim, because pure enquiry and the wider natural world also deserve attention.\n\nOn the one hand, applying science to human welfare has produced enormous gains. Medical research has conquered diseases, agricultural science feeds billions, and engineering has raised living standards. Few would deny that alleviating suffering is a worthy goal, and much funding is rightly directed there.\n\nHowever, confining science to immediate human benefit is shortsighted. History shows that curiosity-driven research often yields the greatest practical rewards. For example, the study of mould by Fleming, pursued out of interest rather than utility, led to penicillin and saved countless lives. If researchers had been forced to justify every project by its human benefit in advance, such breakthroughs might never have occurred.\n\nFurthermore, science should serve more than humankind. Environmental and ecological research matters because humans are inseparable from the biosphere; ignoring other species ultimately harms us too. A human-centred view also risks neglecting fundamental questions about the universe whose value lies in knowledge itself.\n\nIn conclusion, although improving lives is a vital aim, it should not be the only or supreme one. A balance between applied and pure science, and between human and broader planetary interests, produces the healthiest long-term progress.',
        tips: '明确立场（不同意/部分不同意）；区分应用科学与纯科学；举例（青霉素）；结尾重申平衡；至少250词'
      }
    ];

    // ---------- 口语 ----------
    t1.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Paying bills（账单）',
        questions: [
          { q: 'What kinds of bills do you have to pay?', a: '参考回答: I have to pay a few regular bills – mainly electricity, water and internet at home, plus my mobile phone bill. Since I’m a student, I don’t have many others, but I also pay for a monthly transport pass.' },
          { q: 'How do you usually pay your bills — in cash or by another method? [Why?]', a: '参考回答: I almost always pay online through my banking app, because it’s quick and I get a record automatically. Paying in cash would mean queuing, which I’d rather avoid.' },
          { q: 'Have you ever forgotten to pay a bill? [Why/Why not?]', a: '参考回答: Yes, once I forgot my internet bill and the connection was cut for a day. I was busy with exams and simply lost track of the date, so now I set a reminder.' },
          { q: 'Is there anything you could do to make your bills cheaper? [Why/Why not?]', a: '参考回答: Probably. I could switch off devices instead of leaving them on standby, and compare internet providers. Saving a little each month would help, though some costs are hard to reduce.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe some food or drink that you learned to prepare.\n\nYou should say:\n– what food or drink you learned to prepare\n– when and where you learned to prepare this\n– how you learned to prepare this\n– and explain how you felt about learning to prepare this food or drink.',
        modelAnswer: '参考回答:\n\nI’d like to talk about a dish I learned to make: a simple tomato and egg stir-fry, which is a classic home-cooked meal in China. I learned to prepare it about two years ago, when I first moved into a shared flat near my university.\n\nI picked it up from my roommate rather than from a class. One evening she was cooking it and showed me the basic steps – how to beat the eggs, heat the oil, and add the tomatoes so they release their juice. After watching her once, I tried it myself the next week, and I’ve made it many times since.\n\nWhat I like is that it’s quick, cheap and healthy, and it tastes like proper home food when I’m far from my family. At first I was a bit nervous about using the stove, but it turned out to be easier than I expected. Learning to cook it gave me a real sense of independence and made me feel more grown-up. Now it’s one of my go-to dishes whenever I’m tired or busy, and I feel quite proud that I can feed myself well.',
        tips: '覆盖全部四个要点；用过去时叙述学习过程；加入感受；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Young people and cooking / Working as a chef',
        questions: [
          { q: 'What kinds of things can children learn to cook?', a: '参考回答: Simple, safe things at first – like salads, sandwiches, boiling eggs or noodles. As they get older they can move on to easy stir-fries or baking, which also teaches them to follow steps and be careful.' },
          { q: 'Do you think it is important for children to learn to cook?', a: '参考回答: Yes, definitely. It’s a basic life skill, and it helps them eat more healthily and become independent. It can also be a fun, creative activity that builds confidence.' },
          { q: 'Do you think young people should learn to cook at home or at school?', a: '参考回答: Both are useful. Home is where they practise early with family, but school can teach proper nutrition and safety to everyone, not just those whose parents cook.' },
          { q: 'How enjoyable do you think it would be to work as a professional chef?', a: '参考回答: It can be enjoyable for people who love food and creativity, but it’s also physically hard, with long hours and hot kitchens. The satisfaction of pleasing customers must make up for the pressure.' },
          { q: 'What skills does a person need to be a great chef?', a: '参考回答: Apart from cooking technique, they need speed, organisation, teamwork and the ability to stay calm when busy. Creativity and a good palate help them design dishes people enjoy.' },
          { q: 'How much influence do celebrity/TV chefs have on what ordinary people cook?', a: '参考回答: Quite a lot, I think. Their shows and books introduce new recipes and make cooking look fun, so many people try dishes they’d never have attempted otherwise. But the influence can be superficial if recipes are too fancy.' }
        ]
      }
    ];

    // ---------- 听力原文脚本 ----------
    if (typeof LISTENING_SCRIPTS !== 'undefined') {
      LISTENING_SCRIPTS['18-1-0'] = `MAN: Excuse me. Would you mind if I asked you some questions? We’re doing a survey on transport.
SADIE: Yes, that’s OK.
MAN: First of all, can I take your name?
SADIE: Yes. It’s Sadie Jones.
MAN: Thanks very much. And could I have your date of birth – just the year will do, actually. Is that all right?
SADIE: Yes, that’s fine. It’s 1991.
MAN: So next your postcode, please.
SADIE: It’s DW30 7YZ.
MAN: Great. Thanks. Is that in Wells?
SADIE: No it’s actually in Harborne – Wells isn’t far from there, though.
MAN: I really like that area. My grandmother lived there when I was a kid.
SADIE: Yes, it is nice.
MAN: Right, so now I want to ask you some questions about how you travelled here today. Did you use public transport?
SADIE: Yes. I came by bus.
MAN: OK. And that was today. It’s the 24th of April, isn’t it?
SADIE: Isn’t it the 25th? No, actually, you’re right.
MAN: Ha ha. And what was the reason for your trip today? I can see you’ve got some shopping with you.
SADIE: Yes. I did some shopping but the main reason I came here was to go to the dentist.
MAN: That’s not much fun. Hope it was nothing serious.
SADIE: No, it was just a check-up. It’s fine.
MAN: Good. Do you normally travel by bus into the city centre?
SADIE: Yes. I stopped driving in ages ago because parking was so difficult to find and it costs so much.
MAN: I see.
SADIE: The bus is much more convenient too. It only takes about 30 minutes.
MAN: That’s good. So where did you start your journey?
SADIE: At the bus stop on Claxby Street.
MAN: Is that C-L-A-X-B-Y?
SADIE: That’s right.
MAN: And how satisfied with the service are you? Do you have any complaints?
SADIE: Well, as I said, it’s very convenient and quick when it’s on time, but this morning it was late. Only about 10 minutes, but still.
MAN: Yes, I understand that’s annoying. And what about the timetable? Do you have any comments about that?
SADIE: Mmm. I suppose I mainly use the bus during the day, but any time I’ve been in town in the evening – for dinner or at the cinema – I’ve noticed you have to wait a long time for a bus – there aren’t that many.
MAN: OK, thanks. So now I’d like to ask you about your car use.
SADIE: Well, I have got a car but I don’t use it that often. Mainly just to go to the supermarket. But that’s about it really. My husband uses it at the weekends to go to the golf club.
MAN: And what about a bicycle?
SADIE: I don’t actually have one at the moment.
MAN: What about the city bikes you can rent? Do you ever use those?
SADIE: No – I’m not keen on cycling there because of all the pollution. But I would like to get a bike – it would be good to use it to get to work.
MAN: So why haven’t you got one now?
SADIE: Well, I live in a flat – on the second floor and it doesn’t have any storage – so we’d have to leave it in the hall outside the flat.
MAN: I see. OK. Well, I think that’s all. Thank you very much, Sadie.`;

      LISTENING_SCRIPTS['18-1-1'] = `SPEAKER: Good evening, everyone. Let me start by welcoming you all to this talk and thanking you for taking the time to consider joining ACE voluntary organisation. ACE offers support to people and services in the local area and we’re now looking for more volunteers to help us do this.

SPEAKER: By the way, I hope you’re all comfortable – we have brought in extra seats so that no one has to stand, but it does mean that the people at the back of the room may be a bit squashed. We’ll only be here for about half an hour so, hopefully, that’s OK.

SPEAKER: One of the first questions we’re often asked is how old you need to be to volunteer. Well, you can be as young as 16 or you can be 60 or over; it all depends on what type of voluntary work you want to do. Other considerations, such as reliability, are crucial in voluntary work and age isn’t related to these, in our experience.

SPEAKER: Another question we get asked relates to training. Well, there’s plenty of that and it’s all face-to-face. What’s more, training doesn’t end when you start working for us – it takes place before, during and after periods of work. Often, it’s run by other experienced volunteers as managers tend to prefer to get on with other things.

SPEAKER: Now, I would ask you to consider a couple of important issues before you decide to apply for voluntary work. We don’t worry about why you want to be a volunteer – people have many different reasons that range from getting work experience to just doing something they’ve always wanted to do. But it is critical that you have enough hours in the day for whatever role we agree is suitable for you – if being a volunteer becomes stressful then it’s best not to do it at all. You may think that your income is important, but we don’t ask about that. It’s up to you to decide if you can work without earning money. What we value is dedication. Some of our most loyal volunteers earn very little themselves but still give their full energy to the work they do with us.

SPEAKER: OK, so let’s take a look at some of the work areas that we need volunteers for and the sort of things that would help you in those.

SPEAKER: You may wish simply to help us raise money. If you have the creativity to come up with an imaginative or novel way of fundraising, we’d be delighted, as standing in the local streets or shops with a collection box can be rather boring!

SPEAKER: One outdoor activity that we need volunteers for is litter collection and for this it’s useful if you can walk for long periods, sometimes uphill. Some of our regular collectors are quite elderly, but very active and keen to protect the environment.

SPEAKER: If you enjoy working with children, we have three vacancies for what are called ‘playmates’. These volunteers help children learn about staying healthy through a range of out-of-school activities. You don’t need to have children yourself, but it’s good if you know something about nutrition and can give clear instructions.

SPEAKER: If that doesn’t appeal to you, maybe you would be interested in helping out at our story club for disabled children, especially if you have done some acting. We put on three performances a year based on books they have read and we’re always looking for support with the theatrical side of this.

SPEAKER: The last area I’ll mention today is first aid. Volunteers who join this group can end up teaching others in vulnerable groups who may be at risk of injury. Initially, though, your priority will be to take in a lot of information and not forget any important steps or details.

SPEAKER: Right, so does anyone have any questions?`;

      LISTENING_SCRIPTS['18-1-2'] = `HUGO: Hi Chantal. What did you think of the talk, then?
CHANTAL: Hi Hugo. I thought it was good once I’d moved seats.
HUGO: Oh – were the people beside you chatting or something?
CHANTAL: It wasn’t that. I went early so that I’d get a seat and not have to stand, but then this guy sat right in front of me and he was so tall!
HUGO: It’s hard to see through people’s heads, isn’t it?
CHANTAL: Impossible! Anyway, to answer your question, I thought it was really interesting, especially what the speaker said about the job market.
HUGO: Me too. I mean we know we’re going into a really competitive field so it’s obvious that we may struggle to get work.
CHANTAL: That’s right – and we know we can’t all have that ‘dream job’.
HUGO: Yeah, but it looks like there’s a whole range of areas of work that we hadn’t even thought of – like fashion journalism, for instance.
CHANTAL: Yeah – I wasn’t expecting so many career options.
HUGO: Mmm. Overall, she had quite a strong message, didn’t she?
CHANTAL: She did. She kept saying things like ‘I know you all think this, but …’ and then she’d tell us how it really is.
HUGO: Perhaps she thinks students are a bit narrow-minded about the industry.
CHANTAL: It was a bit harsh, though! We know it’s a tough industry.
HUGO: Yeah – and we’re only first years, after all. We’ve got a lot to learn.
CHANTAL: Exactly. Do you think our secondary-school education should have been more career-focused?
HUGO: Well, we had numerous talks on careers, which was good, but none of them were very inspiring. They could have asked more people like today’s speaker to talk to us.
CHANTAL: I agree. We were told about lots of different careers – just when we needed to be, but not by the experts who really know stuff.
HUGO: So did today’s talk influence your thoughts on what career you’d like to take up in the future?
CHANTAL: Well. I promised myself that I’d go through this course and keep an open mind till the end.
HUGO: But I think it’s better to pick an area of the industry now and then aim to get better and better at it.
CHANTAL: Well, I think we’ll just have to differ on that issue!
HUGO: One thing’s for certain, though. From what she said, we’ll be unpaid assistants in the industry for quite a long time.
CHANTAL: Mmm.
HUGO: I’m prepared for that, aren’t you?
CHANTAL: Actually, I’m not going to accept that view.
HUGO: Really? But she knows it’s the case – and everyone else says the same.
CHANTAL: That doesn’t mean it has to be true for me.
HUGO: OK. Well – I hope you’re right!
CHANTAL: I thought the speaker’s account of her first job was fascinating.
HUGO: Yeah – she admitted she was lucky to get work being a personal dresser for a musician. She didn’t even apply for the job and there she was getting paid to choose all his clothes.
CHANTAL: It must have felt amazing – though she said all she was looking for back then was experience, not financial reward.
HUGO: Mmm. And then he was so mean, telling her she was more interested in her own appearance than his!
CHANTAL: But – she did realise he was right about that, which really made me think. I’m always considering my own clothes but now I can see you should be focusing on your client!
HUGO: She obviously regretted losing the job.
CHANTAL: Well, as she said, she should have hidden her negative feelings about him, but she didn’t.
HUGO: It was really brave the way she picked herself up and took that job in retail. Fancy working in a shop after that!
CHANTAL: Yeah – well, she recommended we all do it at some point. I guess as a designer you’d get to find out some useful information, like how big or small the average shopper is.
HUGO: I think that’s an issue for manufacturers, not designers. However, it would be useful to know if there’s a gap in the market – you know, an item that no one’s stocking but that consumers are looking for.
CHANTAL: Yeah, people don’t give up searching. They also take things back to the store if they aren’t right.
HUGO: Yeah. Imagine you worked in an expensive shop and you found out the garments sold there were being returned because they … fell apart in the wash!
CHANTAL: Yeah, it would be good to know that kind of thing.
HUGO: Yeah.`;

      LISTENING_SCRIPTS['18-1-3'] = `PRESENTER: For my presentation today I want to tell you about how groups of elephants have been moved and settled in new reserves. This is known as translocation and has been carried out in Malawi in Africa in recent years. The reason this is being done is because of overpopulation of elephants in some areas.

PRESENTER: Overpopulation is a good problem to have and not one we tend to hear about very often. In Malawi’s Majete National Park the elephant population had been wiped out by poachers, who killed the elephants for their ivory. But in 2003, the park was restocked and effective law enforcement was introduced. Since then, not a single elephant has been poached. In this safe environment, the elephant population boomed. Breeding went so well that there were more elephants than the park could support.

PRESENTER: This led to a number of problems. Firstly, there was more competition for food, which meant that some elephants were suffering from hunger. As there was a limit to the amount of food in the national park, some elephants began looking further afield. Elephants were routinely knocking down fences around the park, which then had to be repaired at a significant cost.

PRESENTER: To solve this problem, the decision was made to move dozens of elephants from Majete National Park to Nkhotakota Wildlife Park, where there were no elephants. But, obviously, attempting to move significant numbers of elephants to a new home 300 kilometres away is quite a challenge.

PRESENTER: So how did this translocation process work in practice?

PRESENTER: Elephants were moved in groups of between eight and twenty, all belonging to one family. Because relationships are very important to elephants, they all had to be moved at the same time. A team of vets and park rangers flew over the park in helicopters and targeted a group, which were rounded up and directed to a designated open plain.

PRESENTER: The vets then used darts to immobilise the elephants – this was a tricky manoeuvre, as they not only had to select the right dose of tranquiliser for different-sized elephants but they had to dart the elephants as they were running around. This also had to be done as quickly as possible so as to minimise the stress caused. As soon as the elephants began to flop onto the ground, the team moved in to take care of them.

PRESENTER: To avoid the risk of suffocation, the team had to make sure none of the elephants were lying on their chests because their lungs could be crushed in this position. So all the elephants had to be placed on their sides. One person stayed with each elephant while they waited for the vets to do checks. It was very important to keep an eye on their breathing – if there were fewer than six breaths per minute, the elephant would need urgent medical attention. Collars were fitted to the matriarch in each group so their movements could be tracked in their new home. Measurements were taken of each elephant’s tusks – elephants with large tusks would be at greater risk from poachers – and also of their feet. The elephants were then taken to a recovery area before being loaded onto trucks and transported to their new home.

PRESENTER: The elephants translocated to Nkhotakota settled in very well and the project has generally been accepted to have been a huge success – and not just for the elephants. Employment prospects have improved enormously, contributing to rising living standards for the whole community. Poaching is no longer an issue, as former poachers are able to find more reliable sources of income. In fact, many of them volunteered to give up their weapons, as they were no longer of any use to them.

PRESENTER: More than two dozen elephants have been born at Nkhotakota since relocation. With an area of more than 1,800 square kilometres, there’s plenty of space for the elephant population to continue to grow. Their presence is also helping to rebalance Nkhotakota’s damaged ecosystem and providing a sustainable conservation model, which could be replicated in other parks. All this has been a big draw for tourism, which contributes five times more than the illegal wildlife trade to GDP, and this is mainly because of the elephants. There’s also been a dramatic rise in interest …`;
    }
  }

  // ===================== 剑18 TEST 2 =====================
  var t2 = findTest(book, 2);
  if (t2) {
    // ---------- 听力 ----------
    t2.listening.sections = [
      {
        part: 'Part 1',
        context: '一名求职者咨询 Milo’s 餐厅的职位空缺（Working at Milo’s Restaurants）',
        type: '填空题（笔记一单词；表格一单词及/或一数字）',
        questions: [
          { q: '___ is provided for all staff', a: 'training' },
          { q: 'A ___ is available at the restaurants on weekdays', a: 'discount' },
          { q: 'A ___ home is paid for after midnight', a: 'taxi' },
          { q: 'Staff must maintain a high standard of ___', a: 'service' },
          { q: 'Applicants need a qualification in ___', a: 'English' },
          { q: 'Breakfast supervisor job is on ___ Street', a: 'Wivenhoe' },
          { q: 'The supervisor must ensure the ___ is clean', a: 'equipment' },
          { q: 'Starting salary is £___ per hour', a: '9.75' },
          { q: 'Junior chef organises the ___', a: 'deliveries' },
          { q: 'One day off per month is a ___', a: 'Sunday' }
        ]
      },
      {
        part: 'Part 2',
        context: 'Mark Reynolds 介绍 Nunston 郊外新住宅开发项目（Housing development program）',
        type: '双选 + 地图标注',
        questions: [
          { q: 'What are the TWO main reasons the site was chosen?', a: 'B, E' },
          { q: 'Which TWO aspects of the plans have people given positive feedback about?', a: 'B, C' },
          { q: 'On the map, where is the school?', a: 'G' },
          { q: 'On the map, where is the sports centre?', a: 'C' },
          { q: 'On the map, where is the clinic?', a: 'D' },
          { q: 'On the map, where is the community centre?', a: 'B' },
          { q: 'On the map, where is the supermarket?', a: 'H' },
          { q: 'On the map, where is the playground?', a: 'A' }
        ]
      },
      {
        part: 'Part 3',
        context: '两名学生 Adam 与 Michelle 讨论 1783 年 Laki 火山喷发（Laki eruption）',
        type: '选择题 + 双选 + 匹配',
        questions: [
          { q: 'Why do the students think the 1783 Laki eruption is so important?', a: 'C' },
          { q: 'What surprised Adam about the observations made at the time?', a: 'A' },
          { q: 'According to Michelle, what did contemporary sources say about the Laki haze?', a: 'B' },
          { q: 'What does Adam correct Michelle about regarding Benjamin Franklin?', a: 'B' },
          { q: 'Which TWO issues following the eruption surprised the students?', a: 'A, B' },
          { q: 'Iceland — which consequence is mentioned?', a: 'D' },
          { q: 'Egypt — which consequence is mentioned?', a: 'A' },
          { q: 'UK — which consequence is mentioned?', a: 'C' },
          { q: 'USA — which consequence is mentioned?', a: 'F' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于服装口袋演变的讲座（Pockets in fashion）',
        type: '填空题（笔记，每空一词）',
        questions: [
          { q: 'Pockets are ___ but can be overlooked by consumers and designers.', a: 'convenient' },
          { q: 'In the 18th century, men started to wear ___', a: 'suits' },
          { q: 'A ___ sewed pockets into the lining of garments.', a: 'tailor' },
          { q: 'Bigger pockets were made for men of a certain ___ (e.g. doctors).', a: 'profession' },
          { q: 'Women’s pockets were less ___ than men’s.', a: 'visible' },
          { q: 'Pockets were produced in pairs, linked by ___', a: 'string' },
          { q: 'They hung from the women’s ___ under skirts.', a: 'waist' },
          { q: 'Items such as ___ could be reached through a gap.', a: 'perfume' },
          { q: 'Hidden pockets negatively affected the ___ of women.', a: 'image' },
          { q: 'Small bags called “pouches” led on to the ___', a: 'handbag' }
        ]
      }
    ];

    // ---------- 阅读 ----------
    t2.reading.passages = [
      {
        title: 'Passage 1: Stonehenge',
        difficulty: '中等',
        summary: '史前遗迹巨石阵的建造过程、建造者身份与用途之谜。',
        questions: [
          { type: '笔记填空（不超过两词）', q: 'Tools used may have been fashioned out of ___', a: 'deer antlers' },
          { type: '笔记填空（不超过两词）', q: 'Deep pits may once have held a ring of ___', a: 'timber posts' },
          { type: '笔记填空（不超过两词）', q: 'Builders used ___ to make sledges and rollers', a: 'tree trunks' },
          { type: '笔记填空（不超过两词）', q: 'Bluestones were hauled by ___ (with wicker baskets)', a: 'oxen' },
          { type: '笔记填空（不超过两词）', q: 'Some suggest ___ carried the bluestones to Salisbury Plain', a: 'glaciers' },
          { type: '笔记填空（不超过两词）', q: 'A 17th-century claim: Stonehenge was the work of ___', a: 'druids' },
          { type: '笔记填空（不超过两词）', q: 'Most scholars agree it once served as a ___', a: 'burial' },
          { type: '笔记填空（不超过两词）', q: 'In the 1960s it was suggested it operated as a form of ___', a: 'calendar' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'During the third phase, sandstone slabs were placed in both the outer areas and the middle of the site.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'There is scientific proof that the bluestones stood in the same spot until about 1600 BCE.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'John Aubrey’s claim about Stonehenge was supported by 20th-century findings.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Objects found at Stonehenge indicate it was built by several different groups of people.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Criticism of Gerald Hawkins’ theory came mainly from other astronomers.', a: 'NOT GIVEN' }
        ],
        text: `Stonehenge

For centuries, historians and archaeologists have puzzled over the many mysteries of Stonehenge, a prehistoric monument that took an estimated 1,500 years to erect. Located on Salisbury Plain in southern England, it is comprised of roughly 100 massive upright stones placed in a circular layout.

Archaeologists believe England’s most iconic prehistoric ruin was built in several stages with the earliest constructed 5,000 or more years ago. First, Neolithic Britons used primitive tools, which may have been fashioned out of deer antlers, to dig a massive circular ditch and bank, or henge. Deep pits dating back to that era and located within the circle may have once held a ring of timber posts, according to some scholars.

Several hundred years later, it is thought, Stonehenge’s builders hoisted an estimated 80 bluestones, 43 of which remain today, into standing positions and placed them in either a horseshoe or circular formation. These stones have been traced all the way to the Preseli Hills in Wales, some 300 kilometres from Stonehenge. How, then, did prehistoric builders without sophisticated tools or engineering haul these boulders, which weigh up to four tons, over such a great distance?

According to one long-standing theory among archaeologists, Stonehenge’s builders fashioned sledges and rollers out of tree trunks to lug the bluestones from the Preseli Hills. They then transferred the boulders onto rafts and floated them first along the Welsh coast and then up the River Avon toward Salisbury Plain; alternatively, they may have towed each stone with a fleet of vessels. More recent archaeological hypotheses have them transporting the bluestones with supersized wicker baskets on a combination of ball bearings and long grooved planks, hauled by oxen.

As early as the 1970s, geologists have been adding their voices to the debate over how Stonehenge came into being. Challenging the classic image of industrious builders pushing, carting, rolling or hauling giant stones from faraway Wales, some scientists have suggested that it was glaciers, not humans, that carried the bluestones to Salisbury Plain. Most archaeologists have remained sceptical about this theory, however, wondering how the forces of nature could possibly have delivered the exact number of stones needed to complete the circle.

The third phase of construction took place around 2000 BCE. At this point, sandstone slabs – known as ‘sarsens’ – were arranged into an outer crescent or ring; some were assembled into the iconic three-pieced structures called trilithons that stand tall in the centre of Stonehenge. Some 50 of these stones are now visible on the site, which may once have contained many more. Radiocarbon dating has revealed that work continued at Stonehenge until roughly 1600 BCE, with the bluestones in particular being repositioned multiple times.

But who were the builders of Stonehenge? In the 17th century, archaeologist John Aubrey made the claim that Stonehenge was the work of druids, who had important religious, judicial and political roles in Celtic society. This theory was widely popularized by the antiquarian William Stukeley, who had unearthed primitive graves at the site. Even today, people who identify as modern druids continue to gather at Stonehenge for the summer solstice. However, in the mid-20th century, radiocarbon dating demonstrated that Stonehenge stood more than 1,000 years before the Celts inhabited the region.

Many modern historians and archaeologists now agree that several distinct tribes of people contributed to Stonehenge, each undertaking a different phase of its construction. Bones, tools and other artefacts found on the site seem to support this hypothesis. The first stage was achieved by Neolithic agrarians who were likely to have been indigenous to the British Isles. Later, it is believed, groups with advanced tools and a more communal way of life left their mark on the site. Some believe that they were immigrants from the European continent, while others maintain that they were probably native Britons, descended from the original builders.

If the facts surrounding the architects and construction of Stonehenge remain shadowy at best, the purpose of the striking monument is even more of a mystery. While there is consensus among the majority of modern scholars that Stonehenge once served the function of burial ground, they have yet to determine what other purposes it had.

In the 1960s, the astronomer Gerald Hawkins suggested that the cluster of megalithic stones operated as a form of calendar, with different points corresponding to astrological phenomena such as solstices, equinoxes and eclipses occurring at different times of the year. While his theory has received a considerable amount of attention over the decades, critics maintain that Stonehenge’s builders probably lacked the knowledge necessary to predict such events or that England’s dense cloud cover would have obscured their view of the skies.

More recently, signs of illness and injury in the human remains unearthed at Stonehenge led a group of British archaeologists to speculate that it was considered a place of healing, perhaps because bluestones were thought to have curative powers.

* Neolithic – The era, also known as the New Stone Age, which began around 12,000 years ago and ended around 3500 BCE.

** Celtic – The Celts were people who lived in Britain and northwest Europe during the Iron Age from 600 BCE to 43 CE.`
      },
      {
        title: 'Passage 2: Living with artificial intelligence',
        difficulty: '中偏难',
        summary: '强大的人工智能应与人类价值对齐，但这是否意味着 AI 将最终监管这些价值？',
        questions: [
          { type: '单选题', q: 'What point does the writer make about AI in the first paragraph?', a: 'C' },
          { type: '单选题', q: 'What is the writer doing in the second paragraph?', a: 'A' },
          { type: '单选题', q: 'Why does the writer mention the story of King Midas?', a: 'B' },
          { type: '单选题', q: 'What challenge does the writer refer to in the fourth paragraph?', a: 'D' },
          { type: '单选题', q: 'What does the writer suggest about the future of AI in the fifth paragraph?', a: 'C' },
          { type: '单选题', q: 'Which best summarises the sixth paragraph?', a: 'D' },
          { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Machines making moral decisions may prevent us promoting the interests of our communities.', a: 'YES' },
          { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Silicon police would need to exist in large numbers to be effective.', a: 'NOT GIVEN' },
          { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Many people are comfortable with their independence being restricted by machines.', a: 'NO' },
          { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'If we want machines to act in our best interests, we must all work together.', a: 'YES' },
          { type: '摘要填空（选词 A–F）', q: 'AI currently has a limited role in how ___ are allocated.', a: 'C' },
          { type: '摘要填空（选词 A–F）', q: 'A change would mean certain ___ losing a level of', a: 'A' },
          { type: '摘要填空（选词 A–F）', q: '(continued) losing a level of ___', a: 'E' }
        ],
        text: `Living with artificial intelligence

Powerful artificial intelligence (AI) needs to be reliably aligned with human values, but does this mean AI will eventually have to police those values?

This has been the decade of AI, with one astonishing feat after another. A chess-playing AI that can defeat not only all human chess players, but also all previous human-programmed chess machines, after learning the game in just four hours? That’s yesterday’s news, what’s next? True, these prodigious accomplishments are all in so-called narrow AI, where machines perform highly specialised tasks. But many experts believe this restriction is very temporary. By mid-century, we may have artificial general intelligence (AGI) – machines that can achieve human-level performance on the full range of tasks that we ourselves can tackle.

If so, there’s little reason to think it will stop there. Machines will be free of many of the physical constraints on human intelligence. Our brains run at slow biochemical processing speeds on the power of a light bulb, and their size is restricted by the dimensions of the human birth canal. It is remarkable what they accomplish, given these handicaps. But they may be as far from the physical limits of thought as our eyes are from the incredibly powerful Webb Space Telescope.

Once machines are better than us at designing even smarter machines, progress towards these limits could accelerate. What would this mean for us? Could we ensure a safe and worthwhile coexistence with such machines? On the plus side, AI is already useful and profitable for many things, and super AI might be expected to be super useful and super profitable. But the more powerful AI becomes, the more important it will be to specify its goals with great care. Folklore is full of tales of people who ask for the wrong thing, with disastrous consequences – King Midas, for example, might have wished that everything he touched turned to gold, but didn’t really intend this to apply to his breakfast.

So we need to create powerful AI machines that are ‘human-friendly’ – that have goals reliably aligned with our own values. One thing that makes this task difficult is that we are far from reliably human-friendly ourselves. We do many terrible things to each other and to many other creatures with whom we share the planet. If superintelligent machines don’t do a lot better than us, we’ll be in deep trouble. We’ll have powerful new intelligence amplifying the dark sides of our own fallible natures.

For safety’s sake, then, we want the machines to be ethically as well as cognitively superhuman. We want them to aim for the moral high ground, not for the troughs in which many of us spend some of our time. Luckily they’ll be smart enough for the job. If there are routes to the moral high ground, they’ll be better than us at finding them, and steering us in the right direction.

However, there are two big problems with this utopian vision. One is how we get the machines started on the journey, the other is what it would mean to reach this destination. The ‘getting started’ problem is that we need to tell the machines what they’re looking for with sufficient clarity that we can be confident they will find it – whatever ‘it’ actually turns out to be. This won’t be easy, given that we are tribal creatures and conflicted about the ideals ourselves. We often ignore the suffering of strangers, and even contribute to it, at least indirectly. How then, do we point machines in the direction of something better?

As for the ‘destination’ problem, we might, by putting ourselves in the hands of these moral guides and gatekeepers, be sacrificing our own autonomy – an important part of what makes us human. Machines who are better than us at sticking to the moral high ground may be expected to discourage some of the lapses we presently take for granted. We might lose our freedom to discriminate in favour of our own communities, for example.

Loss of freedom to behave badly isn’t always a bad thing, of course: denying ourselves the freedom to put children to work in factories, or to smoke in restaurants are signs of progress. But are we ready for ethical silicon police limiting our options? They might be so good at doing it that we won’t notice them; but few of us are likely to welcome such a future.

These issues might seem far-fetched, but they are to some extent already here. AI already has some input into how resources are used in our National Health Service (NHS) here in the UK, for example. If it was given a greater role, it might do so much more efficiently than humans can manage, and act in the interests of taxpayers and those who use the health system. However, we’d be depriving some humans (e.g. senior doctors) of the control they presently enjoy. Since we’d want to ensure that people are treated equally and that policies are fair, the goals of AI would need to be specified correctly.

We have a new powerful technology to deal with – itself, literally, a new way of thinking. For our own safety, we need to point these new thinkers in the right direction, and get them to act well for us. It is not yet clear whether this is possible, but if it is, it will require a cooperative spirit, and a willingness to set aside self-interest.

Both general intelligence and moral reasoning are often thought to be uniquely human capacities. But safety seems to require that we think of them as a package: if we are to give general intelligence to machines, we’ll need to give them moral authority, too. And where exactly would that leave human beings? All the more reason to think about the destination now, and to be careful about what we wish for.`
      },
      {
        title: 'Passage 3: An ideal city',
        difficulty: '难',
        summary: '达·芬奇的"理想城市"规划思想及其对现代城市规划的超前意义。',
        questions: [
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'People first referred to Leonardo as a genius 500 years ago.', a: 'NOT GIVEN' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'The current climate crisis is predicted to cause more deaths than the plague.', a: 'NOT GIVEN' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Some challenges today can be compared to earlier times.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Leonardo’s ideal city was constructed in the 15th century.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Poor town planning is a major contributor to climate change.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'In the Renaissance, local people fought against changes to Pienza and Ferrara.', a: 'NOT GIVEN' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Leonardo kept a neat, organised record of his designs.', a: 'FALSE' },
          { type: '摘要填空（一单词）', q: 'provide better ___ for trade', a: 'transport' },
          { type: '摘要填空（一单词）', q: 'such as ___ on the exterior', a: 'staircases' },
          { type: '摘要填空（一单词）', q: 'expertise in ___ (architecture and engineering)', a: 'engineering' },
          { type: '摘要填空（一单词）', q: 'follows this ___ (still followed today)', a: 'rule' },
          { type: '摘要填空（一单词）', q: 'cities from ___ times', a: 'Roman' },
          { type: '摘要填空（一单词）', q: '___ redesigned in the 19th century', a: 'Paris' },
          { type: '摘要填空（一单词）', q: 'building ___ no longer the best option', a: 'outwards' }
        ],
        text: `An ideal city

Leonardo da Vinci’s ideal city was centuries ahead of its time

The word ‘genius’ is universally associated with the name of Leonardo da Vinci. A true Renaissance man, he embodied scientific spirit, artistic talent and humanist sensibilities. Five hundred years have passed since Leonardo died in his home at Chateau du Clos Luce, outside Tours, France. Yet far from fading into insignificance, his thinking has carried down the centuries and still surprises today.

The Renaissance marked the transition from the 15th century to modernity and took place after the spread of the plague in the 14th century, which caused a global crisis resulting in some 200 million deaths across Europe and Asia. Today, the world is on the cusp of a climate crisis, which is predicted to cause widespread displacement, extinctions and death, if left unaddressed. Then, as now, radical solutions were called for to revolutionise the way people lived and safeguard humanity against catastrophe.

Around 1486 – after a pestilence that killed half the population in Milan, Italy – Leonardo turned his thoughts to urban planning problems. Following a typical Renaissance trend, he began to work on an ‘ideal city’ project, which – due to its excessive costs – would remain unfulfilled. Yet given that unsustainable urban models are a key cause of global climate change today, it’s only natural to wonder how Leonardo might have changed the shape of modern cities.

Although the Renaissance is renowned as an era of incredible progress in art and architecture, it is rarely noted that the 15th century also marked the birth of urbanism as a true academic discipline. The rigour and method behind the conscious conception of a city had been largely missing in Western thought until the moment when prominent Renaissance men pushed forward large-scale urban projects in Italy, such as the reconfiguration of the town of Pienza and the expansion of the city of Ferrara. These works surely inspired Leonardo’s decision to rethink the design of medieval cities, with their winding and overcrowded streets and with houses piled against one another.

It is not easy to identify a coordinated vision of Leonardo’s ideal city because of his disordered way of working with notes and sketches. But from the largest collection of Leonardo’s papers ever assembled, a series of innovative thoughts can be reconstructed regarding the foundation of a new city along the Ticino River, which runs from Switzerland into Italy and is 248 kilometres long. He designed the city for the easy transport of goods and clean urban spaces, and he wanted a comfortable and spacious city, with well-ordered streets and architecture. He recommended ‘high, strong walls’, with ‘towers and battlements of all necessary and pleasant beauty’.

His plans for a modern and ‘rational’ city were consistent with Renaissance ideals. But, in keeping with his personality, Leonardo included several innovations in his urban design. Leonardo wanted the city to be built on several levels, linked with vertical outdoor staircases. This design can be seen in some of today’s high-rise buildings but was unconventional at the time. Indeed, this idea of taking full advantage of the interior spaces wasn’t implemented until the 1920s and 1930s, with the birth of the Modernist movement.

While in the upper layers of the city, people could walk undisturbed between elegant palaces and streets, the lower layer was the place for services, trade, transport and industry. But the true originality of Leonardo’s vision was its fusion of architecture and engineering. Leonardo designed extensive hydraulic plants to create artificial canals throughout the city. The canals, regulated by clocks and basins, were supposed to make it easier for boats to navigate inland. Leonardo also thought that the width of the streets ought to match the average height of the adjacent houses: a rule still followed in many contemporary cities across Italy, to allow access to sun and reduce the risk of damage from earthquakes.

Although some of these features existed in Roman cities, before Leonardo’s drawings there had never been a multi-level, compact modern city which was thoroughly technically conceived. Indeed, it wasn’t until the 19th century that some of his ideas were applied. For example, the subdivision of the city by function – with services and infrastructures located in the lower levels and wide and well-ventilated boulevards and walkways above for residents – is an idea that can be found in Georges-Eugene Haussmann’s renovation of Paris under Emperor Napoleon III between 1853 and 1870.

Today, Leonardo’s ideas are not simply valid, they actually suggest a way forward for urban planning. Many scholars think that the compact city, built upwards instead of outwards, integrated with nature (especially water systems), with efficient transport infrastructure, could help modern cities become more efficient and sustainable. This is yet another reason why Leonardo was aligned so closely with modern urban planning and centuries ahead of his time.`
      }
    ];

    // ---------- 写作 ----------
    t2.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '图表描述 - 柱状图',
        prompt: 'The chart below shows the number of households in the US by their annual income in 2007, 2011 and 2015.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The bar chart compares the number of households in the United States across different annual income brackets in three years: 2007, 2011 and 2015.\n\nOverall, the largest groups were in the middle-income ranges, and the lowest-income bracket grew noticeably over the period while the highest bracket shrank slightly. The pattern reflects the economic downturn around 2011 and only partial recovery by 2015.\n\nIn 2007, the most common bracket was $50,000–$74,999, with over 20 million households. The under-$15,000 group was smaller, at roughly 15 million. By 2011, following the recession, the poorest bracket rose to about 18 million, while the $50,000–$74,999 group fell to around 19 million. Households earning over $150,000 also dipped.\n\nIn 2015, the under-$15,000 group remained elevated at about 17 million, still above its 2007 level, and the $100,000–$149,999 bracket recovered to exceed its 2007 figure. The $50,000–$74,999 group stayed just below 20 million. Thus, although some recovery is visible, lower-income households remained a larger share than before the recession.',
        tips: '用过去时；先写总览再分组（低收入/中收入/高收入）对比三年变化；突出增减幅度；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（讨论双方观点）',
        prompt: 'Some university students want to learn about other subjects in addition to their main subjects. Others believe it is more important to give all their time and attention to studying for a qualification.\n\nDiscuss both these views and give your own opinion.\n\nWrite at least 250 words.',
        modelAnswer: 'Some tertiary students wish to study subjects beyond their major, while others argue that full focus on one’s qualification is more important. This essay will discuss both views and argue that a mainly focused approach is preferable, with limited exploration on the side.\n\nOn the one hand, studying additional subjects can broaden the mind. Exposure to different disciplines builds critical thinking and may reveal unexpected interests or career paths. For instance, a science student who studies a little philosophy may reason more clearly, and a business student taking a design course may become more creative. This variety makes university life more enriching.\n\nOn the other hand, devoting all one’s time to the main qualification has clear advantages. It allows deep mastery of the subject, better grades, and preparation for a specific career. In competitive fields such as medicine or engineering, scattered attention can leave students under-prepared. Employers often value specialist expertise, and a focused record is easier to present.\n\nIn my view, while some exploration is valuable, the priority should be the chosen field. A student who tries to do everything may end up doing nothing well. A balanced compromise – concentrating on the major but taking one or two optional courses – captures the benefits of both without sacrificing depth.\n\nIn conclusion, both broadening and focusing have merits, but for most students a primarily focused path, with modest optional study, is the soundest approach.',
        tips: '讨论双方各一段并举例；明确个人立场（折中亦可）；结构清晰；至少250词'
      }
    ];

    // ---------- 口语 ----------
    t2.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Science（科学）',
        questions: [
          { q: 'Did you like studying science when you were at school? [Why/Why not?]', a: '参考回答: I quite enjoyed it, especially biology, because we did experiments rather than just reading. What I liked less was physics, which felt too abstract and mathematical for me at the time.' },
          { q: 'What do you remember about your science teachers at school?', a: '参考回答: My chemistry teacher was very enthusiastic and did lots of demonstrations, which made lessons fun. My physics teacher was stricter but explained things clearly, so I respected both in different ways.' },
          { q: 'How interested are you in science now? [Why/Why not?]', a: '参考回答: I’m fairly interested, mainly because science affects daily life – like medicine and phones. I follow a few science news sites, though I’m not studying it formally anymore.' },
          { q: 'What do you think has been an important recent scientific development? [Why?]', a: '参考回答: I’d say mRNA vaccines were hugely important, because they were developed fast and helped end the pandemic. It shows how biology can solve urgent real-world problems.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a tourist attraction in your country that you would recommend.\n\nYou should say:\n– what the tourist attraction is\n– where in your country this tourist attraction is\n– what visitors can see and do at this tourist attraction\n– and explain why you would recommend this tourist attraction.',
        modelAnswer: '参考回答:\n\nI’d like to recommend the West Lake in Hangzhou, which is one of the most famous scenic spots in China. It’s located in the east of the country, about an hour by train from Shanghai, in Zhejiang province.\n\nVisitors can do many things there. You can walk or cycle around the lake, take a boat to the middle island, or visit historical pavilions and temples along the shore. In spring the peach and willow trees are beautiful, and there are gardens and tea houses where you can taste local Longjing tea.\n\nI recommend it because it combines natural beauty with culture and history, and it’s peaceful despite being popular. Unlike a noisy theme park, it’s a place where you can relax and take photos, and learn a little about Chinese poetry and garden design at the same time. I’ve been there twice with family and both visits were really enjoyable, so I’d happily send any friend there.',
        tips: '覆盖全部四个要点；用方位/活动描述；说明推荐理由；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Museums and art galleries / The holiday industry',
        questions: [
          { q: 'What are the most popular museums and art galleries where you live?', a: '参考回答: In my city the history museum and the modern art gallery are the most visited. The history museum is popular with schools, and the art gallery holds free exhibitions at weekends, which attracts young people.' },
          { q: 'Do you believe that all museums and art galleries should be free?', a: '参考回答: Ideally yes, because culture should be open to everyone. But in practice many need ticket income for maintenance, so a compromise – free days plus paid entry – works quite well.' },
          { q: 'What kinds of things make a museum or art gallery interesting to visit?', a: '参考回答: Interactive displays, clear stories, and famous items draw people in. If a place feels hands-on and not just silent rooms of old objects, visitors enjoy it much more.' },
          { q: 'Why do some people book package holidays rather than travelling independently?', a: '参考回答: Packages save time and worry – flights, hotel and tours are arranged together, often cheaper. People who dislike planning or who want safety in a foreign country tend to choose them.' },
          { q: 'Would you say that large numbers of tourists cause problems for local people?', a: '参考回答: Sometimes, yes. In very popular places rents rise and streets get crowded, which annoys residents. But tourism also brings jobs, so the effect is mixed and depends on management.' },
          { q: 'What sort of impact can large holiday resorts have on the environment?', a: '参考回答: They can damage coastlines, use a lot of water and produce waste. If built carelessly they spoil the nature that attracted visitors, though greener resorts are trying to reduce this.' }
        ]
      }
    ];

    // ---------- 听力原文脚本 ----------
    if (typeof LISTENING_SCRIPTS !== 'undefined') {
      LISTENING_SCRIPTS['18-2-0'] = `WOMAN: So, I understand you’re interested in restaurant work?
MAN: Yes. I’ve got a bit of experience and I can provide references.
WOMAN: That’s good. I can check all that later. Now, Milo’s Restaurants have some vacancies at the moment. They’re a really good company to work for. Lots of benefits.
MAN: Oh right.
WOMAN: Yes. They’ve got a very good reputation for looking after staff. For example, all employees get training – even temporary staff.
MAN: Oh really? That’s quite unusual, isn’t it?
WOMAN: Certainly is.
MAN: And do staff get free uniforms too?
WOMAN: Um … you just need to wear a white T-shirt and black trousers, it says here. So I guess not … But another benefit of working for a big company like this is that you can get a discount at any of their restaurants.
MAN: Even at weekends?
WOMAN: No, but you’ll be working then anyway.
MAN: Oh yes. I suppose so. Most of their restaurants are in the city centre, aren’t they? So, easy to get to by bus?
WOMAN: Yes. That’s right. But if you have to do a late shift and finish work after midnight, the company will pay for you to get a taxi home.
MAN: I probably won’t need one. I think I’d use my bike.
WOMAN: OK. Now, they do have some quite specific requirements for the kind of person they’re looking for. Milo’s is a young, dynamic company and they’re really keen on creating a strong team. It’s really important that you can fit in and get on well with everyone.
MAN: Yeah. I’ve got no problem with that. It sounds good, actually. The last place I worked for was quite demanding too. We had to make sure we gave a really high level of service.
WOMAN: That’s good to hear because that will be equally important at Milo’s. I know they want people who have an eye for detail.
MAN: That’s fine. I’m very used to working in that kind of environment.
WOMAN: Perfect. So the only other thing that’s required is good communication skills, so you’ll need to have a certificate in English.
MAN: Sure.

WOMAN: OK. Let’s have a look at the current job vacancies at Milo’s. The first one is in Wivenhoe Street.
MAN: Sorry, where?
WOMAN: Wivenhoe. W-l-V-E-N-H-O-E. It’s quite central, just off Cork Street.
MAN: Oh right.
WOMAN: They’re looking for a breakfast supervisor.
MAN: That would be OK.
WOMAN: So you’re probably familiar with the kind of responsibilities involved. Obviously checking that all the portions are correct, etc., and then things like checking all the procedures for cleaning the equipment are being followed.
MAN: OK. And what about the salary? In my last job I was getting £9.50 per hour. I was hoping to get a bit more than that.
WOMAN: Well, to begin with, you’d be getting £9.75 but that goes up to £11.25 after three months.
MAN: That’s not too bad. And I suppose it’s a very early start?
WOMAN: Mmm. That’s the only unattractive thing about this job. But then you have the afternoons and evenings free. So the restaurant starts serving breakfast from 7 a.m. And you’d have to be there at 5.30 to set everything up. But you’d be finished at 12.30.
MAN: Mmm. Well, as you say, there are advantages to that.
WOMAN: Now, you might also be interested in the job at the City Road branch. That’s for a junior chef, so again a position of responsibility.
MAN: I might prefer that, actually.
WOMAN: Right, well obviously this role would involve supporting the sous chef and other senior staff. And you’d be responsible for making sure there’s enough stock each week – and sorting out all the deliveries.
MAN: I’ve never done that before, but I imagine it’s fairly straightforward, once you get the hang of it.
WOMAN: Yes, and you’d be working alongside more experienced staff to begin with, so I’m sure it wouldn’t be a problem. The salary’s slightly higher here. It’s an annual salary of £23,000.
MAN: Right.
WOMAN: I know that if they like you, it’s likely you’ll be promoted quite quickly. So that’s worth thinking about.
MAN: Yes. It does sound interesting. What are the hours like?
WOMAN: The usual, I think. There’s a lot of evening and weekend work, but they’re closed on Mondays. But you do get one Sunday off every four weeks. So would you like me to send off your application?`;

      LISTENING_SCRIPTS['18-2-1'] = `MARK REYNOLDS: Hello everyone. It’s good to see that so many members of the public have shown up for our presentation on the new housing development planned on the outskirts of Nunston. I’m Mark Reynolds and I’m Communications Manager at the development.

I’ll start by giving you a brief overview of our plans for the development. So one thing I’m sure you’ll want to know is why we’ve selected this particular site for a housing development. At present it’s being used for farming, like much of the land around Nunston. But because of the new industrial centre in Nunston, there’s a lot of demand for housing for employees in the region, as many employees are having to commute long distances at present. Of course, there’s also the fact that we have an international airport just 20 minutes’ drive away, but although that’s certainly convenient, it wasn’t one of our major criteria for choosing the site. We were more interested in the fact that there’s an excellent hospital just 15 kilometres away, and a large secondary school even closer than that. One drawback to the site is that it’s on quite a steep slope, but we’ve taken account of that in our planning so it shouldn’t be a major problem.

We’ve had a lot of positive feedback about the plans. People like the wide variety of accommodation types and prices, and the fact that it’s only a short drive to get out into the countryside from the development. We were particularly pleased that so many people liked the designs for the layout of the development, with the majority of people saying it generally made a good impression and blended in well with the natural features of the landscape, with provision made for protecting trees and wildlife on the site. Some people have mentioned that they’d like to see more facilities for cyclists, and we’ll look at that, but the overall feedback has been that the design and facilities of the development make it seem a place where people of all ages can live together happily.

MARK REYNOLDS: OK, so I’ll put a map of the proposed development up on the screen. You’ll see it’s bounded on the south side by the main road, which then goes on to Nunston. Another boundary is formed by London Road, on the western side of the development. Inside the development there’ll be about 400 houses and 3 apartment blocks.

There’ll also be a school for children up to 11 years old. If you look at the South Entrance at the bottom of the map, there’s a road from there that goes right up through the development. The school will be on that road, at the corner of the second turning to the left.

A large sports centre is planned with facilities for indoor and outdoor activities. This will be on the western side of the development, just below the road that branches off from London Road.

There’ll be a clinic where residents can go if they have any health problems. Can you see the lake towards the top of the map? The clinic will be just below this, to the right of a street of houses.

There’ll also be a community centre for people of all ages. On the northeast side of the development, there’ll be a row of specially designed houses specifically for residents over 65, and the community centre will be adjoining this.

We haven’t forgotten about shopping. There’ll be a supermarket between the two entrances to the development. We’re planning to leave the three large trees near London Road, and it’ll be just to the south of these.

It’s planned to have a playground for younger children. If you look at the road that goes up from the South Entrance, you’ll see it curves round to the left at the top, and the playground will be in that curve, with nice views of the lake.

OK, so now does anyone have any questions?`;

      LISTENING_SCRIPTS['18-2-2'] = `ADAM: So, Michelle, shall we make a start on our presentation? We haven’t got that much time left.
MICHELLE: No, Adam. But at least we’ve done all the background reading. I found it really interesting – I’d never even heard of the Laki eruption before this.
ADAM: Me neither. I suppose 1783 is a long time ago.
MICHELLE: But it was a huge eruption and it had such devastating consequences.
ADAM: I know. It was great there were so many primary sources to look at. It really gives you a sense of how catastrophic the volcano was. People were really trying to make sense of the science for the first time.
MICHELLE: That’s right. But what I found more significant was how it impacted directly and indirectly on political events, as well as having massive social and economic consequences.
ADAM: I know. That should be the main focus of our presentation.
MICHELLE: The observations made by people at the time were interesting, weren’t they? I mean, they all gave a pretty consistent account of what happened, even if they didn’t always use the same terminology.
ADAM: Yeah. I was surprised there were so many weather stations established by that time – so, you know, you can see how the weather changed, often by the hour.
MICHELLE: Right. Writers at the time talked about the Laki haze to describe the volcanic fog that spread across Europe. They all realised that this wasn’t the sort of fog they were used to – and of course this was in pre-industrial times – so they hadn’t experienced sulphur-smelling fog before.
ADAM: No, that’s true.
MICHELLE: Reports from the period blamed the haze for an increase in headaches, respiratory issues and asthma attacks. And they all describe how it covered the sun and made it look a strange red colour.
ADAM: Must have been very weird.
MICHELLE: It’s interesting that Benjamin Franklin wrote about the haze. Did you read that? He was the American ambassador in Paris at the time.
ADAM: Yeah. At first no one realised that the haze was caused by the volcanic eruption in Iceland.
MICHELLE: It was Benjamin Franklin who realised that before anyone else.
ADAM: He’s often credited with that, apparently. But a French naturalist beat him to it – I can’t remember his name. I’d have to look it up. Then other naturalists had the same idea – all independently of each other.
MICHELLE: Oh right. We should talk about the immediate impact of the eruption, which was obviously enormous – especially in Iceland, where so many people died.
ADAM: Mmm. You’d expect that – and the fact that the volcanic ash drifted so swiftly – but not that the effects would go on for so long. Or that two years after the eruption, strange weather events were being reported as far away as North America and North Africa.
MICHELLE: No. I found all that hard to believe too. It must have been terrible – and there was nothing anyone could do about it, even if they knew the ash cloud was coming in their direction.

MICHELLE: We should run through some of the terrible consequences of the eruption experienced in different countries. There’s quite a varied range.
ADAM: Starting with Iceland, where the impact on farming was devastating.
MICHELLE: Mmm. One of the most dramatic things there was the effect on livestock as they grazed in the fields. They were poisoned because they ate vegetation that had been contaminated with fluorine as a result of the volcanic fallout.
ADAM: That was horrible. In Egypt, the bizarre weather patterns led to a severe drought and as a result the Nile didn’t flood, which meant the crops all failed.
MICHELLE: It’s so far from where the eruption happened and yet the famine there led to more people dying than any other country. It was worse than the plague.
ADAM: OK. Then in the UK the mortality rate went up a lot – presumably from respiratory illnesses. According to one report it was about double the usual number and included an unusually high percentage of people under the age of 25.
MICHELLE: Mmm. I think people will be surprised to hear that the weather in the USA was badly affected too. George Washington even makes a note in his diary that they were snowbound until March in Virginia. That was before he became president.
ADAM: Yes, and there was ice floating down the Mississippi, which was unprecedented.
MICHELLE: Astonishing, really. Anyway, what do you think …`;

      LISTENING_SCRIPTS['18-2-3'] = `SPEAKER: Good morning. Now, we’ve been asked to choose an aspect of European clothing or fashion and to talk about its development over time.

I decided to focus on a rather small area of clothing and that’s pockets. I chose pockets for two reasons, really. We all have them – in jeans, jackets, coats, for example – and even though we often carry bags or briefcases as well, nothing is quite as convenient as being able to pop your phone or credit card into your pocket. Yet, I suspect that, other than that, people don’t really think about pockets too much and they’re rather overlooked as a fashion item.

It’s certainly very interesting to go back in time and see how pockets developed for men and women. In the 18th century, fashions were quite different from the way they are now, and pockets were too. If we think about male fashion first … that was the time when suits became popular. Trousers were knee-length only and referred to as ‘breeches’, the waistcoats were short and the jackets were long, but all three garments were lined with material and pockets were sewn into this cloth by whichever tailor the customer used. The wearer could then carry small objects such as pencils or coins on their person and reach them through a gap in the lining. Coat pockets became increasingly decorative on the outside for men who wanted to look stylish, but they were often larger but plainer if the wearer was someone with a profession who needed to carry medical instruments – a doctor or physician, for example.

The development of women’s pockets was a little different. For one thing, they weren’t nearly as visible or as easy to reach as men’s. In the 18th and 19th centuries, women carried numerous possessions on their person and some of these could be worth a lot of money. Women were more vulnerable to theft and wealthy women, in particular, worried constantly about pickpockets. So – what they did was to have a pair of pockets made that were tied together with string. The pockets were made of fabric, which might be recycled cloth if the wearer had little money or something more expensive, such as linen, sometimes featuring very delicate embroidery. Women tied the pockets around their waist so that they hung beneath their clothes. Remember, skirts were long then and there was plenty of room to hide a whole range of small possessions between the layers of petticoats that were commonly worn. They would have an opening in the folds of their skirts through which they could reach whatever they needed, like their perfume. Working women, of course, also needed to carry around items that they might use for whatever job or trade they were involved in, but their pairs of pockets still remained on the inside of their clothing, they just got bigger or longer sometimes reaching down to their knees!

So the tie-on pockets went well into the 19th century and only changed when fashion altered towards the end of that period. That’s when dresses became tighter and less bulky, and the pairs of pockets became very noticeable – they stood out too much and detracted from the woman’s image. Women who had been used to carrying around a range of personal possessions – and still wanted to – needed somewhere to carry these items about their person. That was when small bags, or pouches as they were known, came into fashion and, of course, they inevitably led on to the handbag of more modern times, particularly when fashion removed pockets altogether.`;
    }
  }

  console.log('[real-18a] 剑18 Test1 & Test2 已覆盖为练习题目（待与原版书核对）');
})();
