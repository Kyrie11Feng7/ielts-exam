/**
 * 剑17 Test 3 & Test 4 剑桥雅思内容覆盖补丁
 * 目的：将 data.js 中 AI 生成的"原创练习"内容替换为剑桥雅思17 练习题目（Tests 3、4）。
 * 数据核对来源（公开权威解析，含原题答案键）：
 *   听力原文/答案 — ieltstrainingonline (Cambridge 17 Listening Test 3/4 题目+答案), ielts-hub / ieltsxpress (Test3/4 完整 transcript)
 *   阅读原文/题目/答案 — ieltsxpress (Test3: The Thylacine / Palm Oil / Building the Skyline; Test4: Madagascar bats / Education & Economic Growth / Timur Gareyev), laokaoya (Test4 官方答案键), engnovate (Test4 P3 题面与答案)
 *   写作题目 — scitudy / ieltswriting.org (Cambridge IELTS 17 AC Writing Tests 3 & 4)
 *   口语话题 — babarenglish (Cambridge IELTS 17 Speaking Test 3 & 4 题面与示例回答)
 * 注意：
 *   - 原文/题目为真实考题内容（逐题与官方答案键交叉核对）。
 *   - 范文与口语"参考回答"为学习用示例文本（非官方范文），仅作备考参考。
 * 本文件须放在所有数据文件之后、app.js 之前加载。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;
  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 17) book = b; });
  if (!book) return;

  // 若 book 17 的 Test3/Test4 在数据中尚不存在（例如由其他 agent 提供骨架），
  // 则创建最小结构以便本补丁填充真实内容；若已存在则直接覆盖。
  function getTest(book, id) {
    var t = null;
    book.tests.forEach(function (x) { if (x.id === id) t = x; });
    if (!t) {
      t = { id: id, title: 'Test ' + id, listening: { title: '听力 Listening', intro: '', sections: [] }, reading: { passages: [] }, writing: { tasks: [] }, speaking: { parts: [] } };
      book.tests.push(t);
    }
    return t;
  }

  // ===================== TEST 3 =====================
  var test3 = getTest(book, 3);
  {
    // ---------- 听力（真实） ----------
    test3.listening.sections = [
      {
        part: 'Part 1',
        context: '女性咨询有冲浪经验的 Jack 关于带孩子在爱尔兰冲浪度假的建议',
        type: '笔记填空（每空一词或一数字）',
        questions: [
          { q: 'Jack recommends surfing for ___ holidays in the summer.', a: 'family' },
          { q: 'You need to be quite ___.', a: 'fit' },
          { q: 'Lahinch has some good quality ___ and surf schools.', a: 'hotels' },
          { q: 'There is a good surf school at ___ beach.', a: 'Carrowniskey' },
          { q: 'The surf camp lasts for one ___.', a: 'week' },
          { q: 'You can explore the local ___ by kayak.', a: 'bay' },
          { q: 'The best month to go is ___.', a: 'September' },
          { q: 'Average summer temperature: about ___ degrees.', a: '19' },
          { q: 'Wetsuit and board hire: ___ euros per day.', a: '30' },
          { q: 'Also advisable to hire ___ for warmth.', a: 'boots' }
        ]
      },
      {
        part: 'Part 2',
        context: '课后托管服务负责人 Mrs Carter 向家长介绍延长时段托管安排',
        type: '多选题 + 配对',
        questions: [
          { q: 'Which TWO facts are given about the extended-hours childcare service?', a: 'B, E' },
          { q: 'How much does childcare cost for a complete afternoon session per child?', a: 'C' },
          { q: 'What does the manager say about food?', a: 'C' },
          { q: 'What is different about arrangements in the school holidays?', a: 'A' },
          { q: 'Spanish (activity):', a: 'E' },
          { q: 'Music (activity):', a: 'D' },
          { q: 'Painting (activity):', a: 'G' },
          { q: 'Yoga (activity):', a: 'F' },
          { q: 'Cooking (activity):', a: 'C' }
        ]
      },
      {
        part: 'Part 3',
        context: '学生 Holly 与导师 Dr Green 讨论在 Orion Stadium 的实习安排',
        type: '单选 + 配对',
        questions: [
          { q: 'Holly chose the Orion Stadium placement because it is ___.', a: 'B' },
          { q: 'Which aspect of safety does Dr Green emphasise most?', a: 'A' },
          { q: 'What does Dr Green say about the spectators?', a: 'A' },
          { q: 'What has affected the schedule in the past?', a: 'B' },
          { q: 'Communication (events-management skill):', a: 'C' },
          { q: 'Organisation (events-management skill):', a: 'A' },
          { q: 'Time management (events-management skill):', a: 'D' },
          { q: 'Creativity (events-management skill):', a: 'B' },
          { q: 'Leadership (events-management skill):', a: 'F' },
          { q: 'Networking (events-management skill):', a: 'H' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于鸟类迁徙理论发展历史的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'Birds were believed to bury themselves in ___ in winter.', a: 'mud' },
          { q: 'In autumn redstarts experience the loss of ___.', a: 'feathers' },
          { q: 'The two species had a similar ___.', a: 'shape' },
          { q: 'Charles Morton claimed birds fly to the ___ in winter.', a: 'moon' },
          { q: 'The stork had an African spear in its ___.', a: 'neck' },
          { q: 'Before ringing, there was no ___ that storks migrate to Africa.', a: 'evidence' },
          { q: 'Little was known about the ___ and journeys of migrating birds.', a: 'destinations' },
          { q: 'Small birds were thought unable to cross vast ___.', a: 'oceans' },
          { q: 'Ringing depended on the ___ "recovery" of dead birds.', a: 'recovery' },
          { q: 'In 1931, the first ___ showing migration was printed.', a: 'atlas' }
        ]
      }
    ];

    // ---------- 阅读（真实） ----------
    test3.reading.passages = [
      {
        title: 'Passage 1: The Thylacine',
        difficulty: '中等',
        summary: '袋狼（塔斯马尼亚虎）的外形、习性、繁殖、分布、灭绝过程及保护尝试。',
        questions: [
          { type: '笔记填空（每段选一词）', q: 'The thylacine ate an entirely ___ diet.', a: 'carnivorous' },
          { type: '笔记填空（每段选一词）', q: 'It probably depended mainly on ___ when hunting.', a: 'scent' },
          { type: '笔记填空（每段选一词）', q: 'Young spent their first months inside the mother’s ___.', a: 'pouch' },
          { type: '笔记填空（每段选一词）', q: 'The last mainland evidence is a 3,100-year-old ___.', a: 'fossil' },
          { type: '笔记填空（每段选一词）', q: 'Reduction in ___ and food sources aided the decline.', a: 'habitat' },
          { type: '判断题 (True/False/Not Given)', q: 'Significant numbers of thylacines were killed by humans from the 1830s onwards.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Several thylacines were born in zoos during the late 1800s.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'John Gould’s prediction about the thylacine surprised some biologists.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'In the early 1900s, many scientists became worried about its possible extinction.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'T.T. Flynn’s proposal to rehome thylacines on an island proved impractical.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Reasonable numbers still existed when breeding-season protection was passed.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'From 1930 to 1936, the only known living thylacines were all in captivity.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Attempts to find living thylacines are now rarely made.', a: 'NOT GIVEN' }
        ]
      },
      {
        title: 'Passage 2: Palm Oil',
        difficulty: '中偏难',
        summary: '棕榈油产业扩张的环境代价、生物多样性争议、经济价值与可持续认证（RSPO）。',
        questions: [
          { type: '段落信息匹配（选段落字母 A–H）', q: 'Examples of potential environmental advantages of oil palm cultivation.', a: 'F' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'Description of an organisation controlling palm oil’s environmental impact.', a: 'G' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'Examples of the widespread global use of palm oil.', a: 'A' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'Reference to a species that could benefit plantation ecosystems.', a: 'H' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'Figures illustrating the rapid expansion of the palm oil industry.', a: 'B' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'An economic justification for not opposing the industry.', a: 'E' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'Examples of creatures badly affected by plantation expansion.', a: 'C' },
          { type: '多选题（选两项字母）', q: 'Which TWO statements are made about the RSPO?', a: 'B, C' },
          { type: '填空题（摘要，每空一词）', q: 'Palm oil stays ___ even when not refrigerated.', a: 'solid' },
          { type: '填空题（摘要，每空一词）', q: 'The ___ is the best-known animal losing habitat to plantations.', a: 'orangutan' },
          { type: '填空题（摘要，每空一词）', q: 'The RSPO insists growers routinely check their ___.', a: 'carbon stocks' },
          { type: '填空题（摘要，每空一词）', q: 'The bird’s nest fern could restore ___ to plantations.', a: 'biodiversity' }
        ]
      },
      {
        title: 'Passage 3: Building the Skyline',
        difficulty: '难',
        summary: '书评：Jason Barr 的《Building the Skyline》如何解释纽约城市发展与摩天大楼的诞生。',
        questions: [
          { type: '选择题（单选）', q: 'What point does Shester make about Barr’s book in the first paragraph?', a: 'D' },
          { type: '选择题（单选）', q: 'How does Shester respond to the information about tenements?', a: 'B' },
          { type: '选择题（单选）', q: 'What does Shester say about chapter six?', a: 'C' },
          { type: '选择题（单选）', q: 'What does Shester suggest about the chapters on the 1920s boom?', a: 'D' },
          { type: '选择题（单选）', q: 'What impresses Shester most about the chapter on land values?', a: 'C' },
          { type: '判断题 (Yes/No/Not Given)', q: 'The early-1600s aerial description of New York lacks interest.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Chapters two and three prepare the reader well for later material.', a: 'YES' },
          { type: '判断题 (Yes/No/Not Given)', q: 'The biggest problem for immigrant neighbourhoods was a lack of amenities.', a: 'NOT GIVEN' },
          { type: '判断题 (Yes/No/Not Given)', q: '19th-century immigrant neighbourhoods concentrated around the harbour.', a: 'NO' },
          { type: '摘要填空（选词 A–J）', q: 'The bedrock myth: lack of bedrock does not explain absence from ___.', a: 'H' },
          { type: '摘要填空（选词 A–J）', q: 'Deeper bedrock cannot be regarded as ___.', a: 'D' },
          { type: '摘要填空（选词 A–J）', q: '…especially compared to the ___.', a: 'I' },
          { type: '摘要填空（选词 A–J）', q: 'Caissons make possible ___.', a: 'B' },
          { type: '摘要填空（选词 A–J）', q: '…and he discusses their ___.', a: 'F' }
        ]
      }
    ];

    test3.reading.passages[0].text = `The extinct thylacine, also known as the Tasmanian tiger, was a marsupial that bore a superficial resemblance to a dog. Its most distinguishing feature was the 13-19 dark brown stripes over its back, beginning at the rear of the body and extending onto the tail. The thylacine's average nose-to-tail length for adult males was 162.6 cm, compared to 153.7 cm for females.

The thylacine appeared to occupy most types of terrain except dense rainforest, with open eucalyptus forest thought to be its prime habitat. In terms of feeding, it was exclusively carnivorous, and its stomach was muscular with an ability to distend so that it could eat large amounts of food at one time, probably an adaptation to compensate for long periods when hunting was unsuccessful and food scarce. The thylacine was not a fast runner and probably caught its prey by exhausting it during a long pursuit. During long-distance chases, thylacines were likely to have relied more on scent than any other sense. They emerged to hunt during the evening, night and early morning and tended to retreat to the hills and forest for shelter during the day. Despite the common name 'tiger', the thylacine had a shy, nervous temperament. Although mainly nocturnal, it was sighted moving during the day and some individuals were even recorded basking in the sun.

The thylacine had an extended breeding season from winter to spring, with indications that some breeding took place throughout the year. The thylacine, like all marsupials, was tiny and hairless when born. Newborns crawled into the pouch on the belly of their mother, and attached themselves to one of the four teats, remaining there for up to three months. When old enough to leave the pouch, the young stayed in a lair such as a deep rocky cave, well-hidden nest or hollow log, whilst the mother hunted.

Approximately 4,000 years ago, the thylacine was widespread throughout New Guinea and most of mainland Australia, as well as the island of Tasmania. The most recent, well-dated occurrence of a thylacine on the mainland is a carbon-dated fossil from Murray Cave in Western Australia, which is around 3,100 years old. Its extinction coincided closely with the arrival of wild dogs called dingoes in Australia and a similar predator in New Guinea. Dingoes never reached Tasmania, and most scientists see this as the main reason for the thylacine's survival there.

The dramatic decline of the thylacine in Tasmania, which began in the 1830s and continued for a century, is generally attributed to the relentless efforts of sheep farmers and bounty hunters with shotguns. While this determined campaign undoubtedly played a large part, it is likely that various other factors also contributed to the decline and eventual extinction of the species. These include competition with wild dogs introduced by European settlers, loss of habitat along with the disappearance of prey species, and a distemper-like disease which may also have affected the thylacine.

There was only one successful attempt to breed a thylacine in captivity, at Melbourne Zoo in 1899. This was despite the large numbers that went through some zoos, particularly London Zoo and Tasmania's Hobart Zoo. The famous naturalist John Gould foresaw the thylacine's demise when he published his Mammals of Australia between 1848 and 1863, writing, 'The numbers of this singular animal will speedily diminish, extermination will have its full sway, and it will then, like the wolf of England and Scotland, be recorded as an animal of the past.'

However, there seems to have been little public pressure to preserve the thylacine, nor was much concern expressed by scientists at the decline of this species in the decades that followed. A notable exception was T.T. Flynn, Professor of Biology at the University of Tasmania. In 1914, he was sufficiently concerned about the scarcity of the thylacine to suggest that some should be captured and placed on a small island. But it was not until 1929, with the species on the very edge of extinction, that Tasmania's Animals and Birds Protection Board passed a motion protecting thylacines only for the month of December, which was thought to be their prime breeding season. The last known wild thylacine to be killed was shot by a farmer in the north-east of Tasmania in 1930, leaving just captive specimens. Official protection of the species by the Tasmanian government was introduced in July 1936, 59 days before the last known individual died in Hobart Zoo on 7th September, 1936.

There have been numerous expeditions and searches for the thylacine over the years, none of which has produced definitive evidence that thylacines still exist. The species was declared extinct by the Tasmanian government in 1986.`;

    test3.reading.passages[1].text = `A
Palm oil is an edible oil derived from the fruit of the African oil palm tree, and is currently the most consumed vegetable oil in the world. It's almost certainly in the soap we wash with in the morning, the sandwich we have for lunch, and the biscuits we snack on during the day. Why is palm oil so attractive for manufacturers? Primarily because its unique properties – such as remaining solid at room temperature – make it an ideal ingredient for long-term preservation, allowing many packaged foods on supermarket shelves to have 'best before' dates of months, even years, into the future.

B
Many farmers have seized the opportunity to maximise the planting of oil palm trees. Between 1990 and 2012, the global land area devoted to growing oil palm trees grew from 6 to 17 million hectares, now accounting for around ten percent of total cropland in the entire world. From a mere two million tonnes of palm oil being produced annually globally 50 years ago, there are now around 60 million tonnes produced every single year, a figure looking likely to double or even triple by the middle of the century.

C
However, there are multiple reasons why conservationists cite the rapid spread of oil palm plantations as a major concern. There are countless news stories of deforestation, habitat destruction and dwindling species populations, all as a direct result of land clearing to establish oil palm tree monoculture on an industrial scale, particularly in Malaysia and Indonesia. Endangered species – most famously the Sumatran orangutan, but also rhinos, elephants, tigers, and numerous other fauna – have suffered from the unstoppable spread of oil palm plantations.

D
'Palm oil is surely one of the greatest threats to global biodiversity,' declares Dr Farnon Ellwood of the University of the West of England, Bristol. 'Palm oil is replacing rainforest, and rainforest is where all the species are. That's a problem.' This has led to some radical questions among environmentalists, such as whether consumers should try to boycott palm oil entirely. Meanwhile Bhavani Shankar, Professor at London's School of Oriental and African Studies, argues, 'It's easy to say that palm oil is the enemy and we should be against it. It makes for a more dramatic story, and it's very intuitive. But given the complexity of the argument, I think a much more nuanced story is closer to the truth.'

E
One response to the boycott movement has been the argument for the vital role palm oil plays in lifting many millions of people in the developing world out of poverty. Is it desirable to have palm oil boycotted, replaced, eliminated from the global supply chain, given how many low-income people in developing countries depend on it for their livelihoods? How best to strike a utilitarian balance between these competing factors has become a serious bone of contention.

F
Even the deforestation argument isn't as straightforward as it seems. Oil palm plantations produce at least four and potentially up to ten times more oil per hectare than soybean, rapeseed, sunflower or other competing oils. That immensely high yield – which is predominantly what makes it so profitable – is potentially also an ecological benefit. If ten times more palm oil can be produced from a patch of land than any competing oil, then ten times more land would need to be cleared in order to produce the same volume of oil from that competitor. As for the question of carbon emissions, the issue really depends on what oil palm trees are replacing. Crops vary in the degree to which they sequester carbon – in other words, the amount of carbon they capture from the atmosphere and store within the plant. The more carbon a plant sequesters, the more it reduces the effect of climate change. As Shankar explains: '[Palm oil production] actually sequesters more carbon in some ways than other alternatives. [...] Of course, if you're cutting down virgin forest it's terrible – that's what's happening in Indonesia and Malaysia, it's been allowed to get out of hand. But if it's replacing rice, for example, it might actually sequester more carbon.'

G
The industry is now regulated by a group called the Roundtable on Sustainable Palm Oil (RSPO), consisting of palm growers, retailers, product manufacturers, and other interested parties. Over the past decade or so, an agreement has gradually been reached regarding standards that producers of palm oil have to meet in order for their product to be regarded as officially 'sustainable'. The RSPO insists upon no virgin forest clearing, transparency and regular assessment of carbon stocks, among other criteria. Only once these requirements are fully satisfied is the oil allowed to be sold as certified sustainable palm oil (CSPO). Recent figures show that the RSPO now certifies around 12 million tonnes of palm oil annually, equivalent to roughly 21 percent of the world's total palm oil production.

H
There is even hope that oil palm plantations might not need to be such sterile monocultures, or 'green deserts', as Ellwood describes them. New research at Ellwood's lab hint at one plant which might make all the difference. The bird's nest fern (Asplenium nidus) grows on trees in an epiphytic fashion (meaning it's dependent on the tree only for support, not for nutrients), and is native to many tropical regions, where as a keystone species it performs a vital ecological role. Ellwood believes that reintroducing the bird's nest fern into oil palm plantations could potentially allow these areas to recover their biodiversity, providing a home for all manner of species, from fungi and bacteria, to invertebrates such as insects, amphibians, reptiles and even mammals.`;

    test3.reading.passages[2].text = `Katharine L. Shester reviews a book by Jason Barr about the development of New York City.

In Building the Skyline, Jason Barr takes the reader through a detailed history of New York City. The book combines geology, history, economics, and a lot of data to explain why business clusters developed where they did and how the early decisions of workers and firms shaped the skyline we see today. Building the Skyline is organized into two distinct parts. The first is primarily historical and addresses New York's settlement and growth from 1609 to 1900; the second deals primarily with the 20th century and is a compilation of chapters commenting on different aspects of New York's urban development. The tone and organization of the book changes somewhat between the first and second parts, as the latter chapters incorporate aspects of Barr's related research papers.

Barr begins chapter one by taking the reader on a 'helicopter time-machine' ride – giving a fascinating account of how the New York landscape in 1609 might have looked from the sky. He then moves on to a subterranean walking tour of the city, indicating the location of rock and water below the subsoil, before taking the reader back to the surface. His love of the city comes through as he describes various fun facts about the location of the New York residence of early 19th-century vice-president Aaron Burr as well as a number of legends about the city.

Chapters two and three take the reader up to the Civil War (1861-1865), with chapter two focusing on the early development of land and the implementation of a grid system in 1811. Chapter three focuses on land use before the Civil War. Both chapters are informative and well researched and set the stage for the economic analysis that comes later in the book. I would have liked Barr to expand upon his claim that existing tenements prevented skyscrapers in certain neighborhoods because 'likely no skyscraper developer was interested in performing the necessary "slum clearance"'. Later in the book, Barr makes the claim that the depth of bedrock was not a limiting factor for developers, as foundation costs were a small fraction of the cost of development. At first glance, it is not obvious why slum clearance would be limiting, while more expensive foundations would not.

Chapter four focuses on immigration and the location of neighborhoods and tenements in the late 19th century. Barr identifies four primary immigrant enclaves and analyses their locations in terms of the amenities available in the area. Most of these enclaves were located on the least valuable land, between the industries located on the waterfront and the wealthy neighborhoods bordering Central Park.

Part two of the book begins with a discussion of the economics of skyscraper height. In chapter five, Barr distinguishes between engineering height, economic height, and developer height – where engineering height is the tallest building that can be safely made at a given time, economic height is the height that is most efficient from society's point of view, and developer height is the actual height chosen by the developer, who is attempting to maximize return on investment.

Chapter five also has an interesting discussion of the technological advances that led to the construction of skyscrapers. For example, the introduction of iron and steel skeletal frames made thick, load-bearing walls unnecessary, expanding the usable square footage of buildings and increasing the use of windows and availability of natural light. Chapter six then presents data on building height throughout the 20th century and uses regression analysis to 'predict' building construction. While less technical than the research paper on which the chapter is based, it is probably more technical than would be preferred by a general audience.

Chapter seven tackles the 'bedrock myth', the assumption that the absence of bedrock close to the surface between Downtown and Midtown New York is the reason for skyscrapers not being built between the two urban centers. Rather, Barr argues that while deeper bedrock does increase foundation costs, these costs were neither prohibitively high nor were they large compared to the overall cost of building a skyscraper. What I enjoyed the most about this chapter was Barr's discussion of how foundations are actually built. He describes the use of caissons, which enable workers to dig down for considerable distances, often below the water table, until they reach bedrock. Barr's thorough technological history discusses not only how caissons work, but also the dangers involved. While this chapter references empirical research papers, it is a relatively easy read.

Chapters eight and nine focus on the birth of Midtown and the building boom of the 1920s. Chapter eight contains lengthy discussions of urban economic theory that may serve as a distraction to readers primarily interested in New York. However, they would be well-suited for undergraduates learning about the economics of cities. In the next chapter, Barr considers two of the primary explanations for the building boom of the 1920s – the first being exuberance, and the second being financing. He uses data to assess the viability of these two explanations and finds that supply and demand factors explain much of the development of the 1920s; though it enable the boom, cheap credit was not, he argues, the primary cause.

In the final chapter (chapter 10), Barr discusses another of his empirical papers that estimates Manhattan land values from the mid-19th century to the present day. The data work that went into these estimations is particularly impressive. Toward the end of the chapter, Barr assesses 'whether skyscrapers are a cause or an effect of high land values'. He finds that changes in land values predict future building height, but the reverse is not true. The book ends with an epilogue, in which Barr discusses the impact of climate change on the city and makes policy suggestions for New York going forward.`;

    // ---------- 写作（真实题目 + 范文示例） ----------
    test3.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '图表描述 - 饼图/表格',
        prompt: 'The chart below gives information about how families in one country spent their weekly income in 1968 and in 2018.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The chart compares how households in a particular country allocated their weekly income across various categories in 1968 and 2018.\n\nOverall, while food and clothing took up the largest share of spending in 1968, by 2018 the pattern had shifted dramatically, with housing becoming the biggest expense and leisure-related spending rising substantially.\n\nIn 1968, food accounted for 35% of weekly income and clothing a further 18%, together more than half of all expenditure. Housing, by contrast, was only 10%. Other categories such as transport (8%), leisure (9%) and energy (6%) made up the remainder.\n\nBy 2018, however, housing had surged to 28% of income, overtaking food, which had fallen to 17%. Clothing dropped sharply to just 5%. The most striking change was in leisure, which more than doubled from 9% to 22%, reflecting greater disposable income. Transport also rose to 16%, while energy remained modest at 4%.\n\nIn summary, the country moved from a budget dominated by necessities such as food and clothing to one where housing and lifestyle spending prevailed, illustrating broader social and economic change over fifty years.',
        tips: '先写总览(overview)再分述；对比 1968 与 2018 的最大项与变化最大项；重点写 food/housing/leisure 的此消彼长；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（讨论双方观点）',
        prompt: 'Some people believe that professionals, such as doctors and engineers, should be required to work in the country where they did their training. Others believe they should be free to work in another country if they wish.\n\nDiscuss both these views and give your own opinion.\n\nWrite at least 250 words.',
        modelAnswer: 'It is often argued whether highly trained professionals should be obliged to remain in the country that educated them, or whether they should have the freedom to emigrate. This essay will examine both positions before offering a balanced view.\n\nOn the one hand, requiring professionals to stay can benefit the nation that funded their training. Many doctors and engineers are educated at public expense, and developing countries in particular suffer when their best minds leave for higher salaries abroad – a "brain drain" that weakens local healthcare and infrastructure. A period of mandatory service therefore seems fair.\n\nOn the other hand, compelling people to remain against their will is hard to enforce and may be unethical. Professionals, like anyone, have the right to seek better opportunities, and freedom of movement is a basic liberty. Moreover, those who emigrate often send remittances home and may later return with valuable experience and international networks that ultimately help their country of origin.\n\nIn my view, a compromise is best. Rather than forbidding emigration, governments should address its root causes by improving pay and conditions, and perhaps offer loan-forgiveness schemes in exchange for a few years of domestic service. This respects individual freedom while protecting the public investment in education.\n\nIn conclusion, although both arguments have merit, voluntary incentives are preferable to compulsion in retaining skilled professionals.',
        tips: '讨论双方 + 明确个人立场；每方各写一段并举例；结构清晰、连接词自然；至少250词'
      }
    ];

    // ---------- 口语（真实话题 + 参考回答示例） ----------
    test3.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Drinks（饮品）',
        questions: [
          { q: 'What do you like to drink with your dinner? [Why?]', a: '参考回答: I usually enjoy a glass of water with my dinner because it keeps me hydrated without interfering with the meal’s flavours. On special occasions I might have a little red wine.' },
          { q: 'Do you drink a lot of water every day? [Why/Why not?]', a: '参考回答: Yes, I try to drink plenty of water daily. Staying hydrated helps my concentration when studying and keeps my skin fresh, so I carry a bottle with me.' },
          { q: 'Do you prefer drinking tea or coffee? [Why?]', a: '参考回答: I lean towards tea, especially herbal varieties, as they are soothing. Coffee can be too stimulating and gives me the jitters, though I’ll have it for a morning boost.' },
          { q: 'If people visit you, what do you usually offer them to drink? [Why/Why not?]', a: '参考回答: I offer tea, coffee or fresh juice depending on the time. I want guests to feel comfortable and welcomed, and a chilled drink is a must in hot weather.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a monument (e.g., a statue or sculpture) that you like.\n\nYou should say:\n– what this monument is\n– where this monument is\n– what it looks like\n– and explain why you like this monument.',
        modelAnswer: '参考回答:\n\nA monument I truly like is the Eiffel Tower in Paris, France. It is an iron lattice tower about 330 metres tall and has become a global symbol of romance and art.\n\nIt stands in the Champ-de-Mars, near the River Seine, and is painted in a bronze shade that complements the Parisian skyline. I love how it sparkles with lights at night, creating a magical atmosphere.\n\nI like it because it represents not just a landmark but a deep cultural connection to France. Built for the 1889 Exposition Universelle to mark the centenary of the French Revolution, it is a testament to human ingenuity. Visiting it feels like stepping into a fairy tale, and it symbolises creativity, which resonates with me.',
        tips: '覆盖全部四个要点；用现在时/过去时描述；加入细节与个人感受；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Monuments & Architecture',
        questions: [
          { q: 'What kinds of monuments do tourists in your country enjoy visiting?', a: '参考回答: Tourists often visit historical monuments like ancient forts and temples that show our cultural heritage, as well as modern memorials and statues such as India Gate.' },
          { q: 'Why are there often statues of famous people in public places?', a: '参考回答: They honour people’s contributions and keep their legacies alive, inspiring future generations and giving us a tangible link to history.' },
          { q: 'Should old monuments always be preserved?', a: '参考回答: Generally yes, as they are windows into the past and boost tourism, but safety must be considered and poor-condition buildings need careful decisions.' },
          { q: 'Why is architecture a popular university subject?', a: '参考回答: It blends creativity with practicality, offers diverse careers from urban planning to design, and shapes how people interact with their environment.' },
          { q: 'How has home design changed recently?', a: '参考回答: Homes now feature open floor plans, eco-friendly materials and smart technology, reflecting lifestyle changes and a focus on sustainability.' },
          { q: 'How does building design affect people’s moods?', a: '参考回答: Natural light and open spaces create a positive, relaxing atmosphere, while cramped designs can cause stress and discomfort.' }
        ]
      }
    ];
  }

  // ===================== TEST 4 =====================
  var test4 = getTest(book, 4);
  {
    // ---------- 听力（真实） ----------
    test4.listening.sections = [
      {
        part: 'Part 1',
        context: '客户致电 Easy Life Cleaning Services 咨询公寓清洁服务',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'Basic package includes cleaning the ___ throughout the apartment.', a: 'floor' },
          { q: 'Additional weekly service: cleaning the ___.', a: 'fridge' },
          { q: 'Ironing clothes – ___ only.', a: 'shirts' },
          { q: 'Monthly: cleaning all the ___ from the inside.', a: 'windows' },
          { q: 'Monthly: washing down the ___.', a: 'balcony' },
          { q: 'They can organise a plumber or an ___.', a: 'electrician' },
          { q: 'Special service for people allergic to ___.', a: 'dust' },
          { q: 'Cleaners have a background check by the ___.', a: 'police' },
          { q: 'Cleaners are given ___ for two weeks.', a: 'training' },
          { q: 'Customers send a ___ after each visit.', a: 'review' }
        ]
      },
      {
        part: 'Part 2',
        context: '关于酒店业员工高流动率原因与留人策略的演讲',
        type: '单选 + 配对',
        questions: [
          { q: 'Many managers are unaware staff leave because of ___.', a: 'A' },
          { q: 'The impact of high turnover on managers is ___.', a: 'A' },
          { q: 'What mistake should managers always avoid?', a: 'A' },
          { q: 'Unexpected benefit at Dunwich Hotel after retention improved:', a: 'C' },
          { q: 'The Sun Club (way of reducing turnover):', a: 'A' },
          { q: 'The Portland (way of reducing turnover):', a: 'C' },
          { q: 'Bluewater Hotels (way of reducing turnover):', a: 'B' },
          { q: 'Pentlow Hotels (way of reducing turnover):', a: 'C' },
          { q: 'Green Planet (way of reducing turnover):', a: 'B' },
          { q: 'The Amesbury (way of reducing turnover):', a: 'A' }
        ]
      },
      {
        part: 'Part 3',
        context: '两名学生 Thomas 与 Jeanne 讨论体育科学课程及运动器材发展史',
        type: '多选 + 配对',
        questions: [
          { q: 'Which TWO points do they make about Thomas’s school sporting activities?', a: 'C, E' },
          { q: 'Which TWO feelings did Thomas experience in Kenya?', a: 'A, D' },
          { q: 'the table tennis bat:', a: 'B' },
          { q: 'the cricket helmet:', a: 'F' },
          { q: 'the cycle helmet:', a: 'A' },
          { q: 'the golf club:', a: 'D' },
          { q: 'the hockey stick:', a: 'C' },
          { q: 'the football:', a: 'G' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于枫糖浆的自然属性、历史与当代生产工艺的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'Maple syrup colour described as ___.', a: 'golden' },
          { q: 'It is very ___ compared to refined sugar.', a: 'healthy' },
          { q: 'Best growing conditions and ___ are in Canada and N. America.', a: 'climate' },
          { q: 'Early producers used hot ___ to heat the sap.', a: 'rock' },
          { q: 'Trunks may lack the correct ___ until 40 years old.', a: 'diameter' },
          { q: 'A tap and a ___ carry the sap into a bucket.', a: 'tube' },
          { q: 'Evaporator pans are heated by a ___.', a: 'fire' },
          { q: 'A lot of ___ is produced during evaporation.', a: 'steam' },
          { q: 'Sugar sand makes the syrup look ___.', a: 'cloudy' },
          { q: 'A huge quantity of sap makes one ___ of syrup.', a: 'litre' }
        ]
      }
    ];

    // ---------- 阅读（真实） ----------
    test4.reading.passages = [
      {
        title: 'Passage 1: How Madagascar’s bats are helping to save the rainforest',
        difficulty: '中等',
        summary: '马达加斯加蝙蝠捕食稻田害虫，为农民提供免费虫害控制，缓解毁林压力，并传播疾病媒介。',
        questions: [
          { type: '判断题 (True/False/Not Given)', q: 'Many Madagascan forests are being destroyed by attacks from insects.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Loss of habitat has badly affected insectivorous bats in Madagascar.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Ricardo Rocha has studied bats in different parts of the world.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Habitat modification has made indigenous bats useful to farmers.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'The Malagasy mouse-eared bat is more common than other species.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Bats may feed on paddy swarming caterpillars and grass webworms.', a: 'TRUE' },
          { type: '表格填空（每段选一词）', q: 'DNA analysis of bat ___.', a: 'droppings' },
          { type: '表格填空（每段选一词）', q: 'Bats ate pests of rice, ___, sugarcane, nuts and fruit.', a: 'coffee' },
          { type: '表格填空（每段选一词）', q: 'Bats eat ___ and blackflies, preventing disease.', a: 'mosquitoes' },
          { type: '表格填空（每段选一词）', q: 'Bats provide food rich in ___.', a: 'protein' },
          { type: '表格填空（每段选一词）', q: 'Buildings where they roost become ___.', a: 'unclean' },
          { type: '表格填空（每段选一词）', q: 'Bats play a role in local ___.', a: 'culture' },
          { type: '表格填空（每段选一词）', q: 'Farmers should provide special ___ for bats.', a: 'houses' }
        ]
      },
      {
        title: 'Passage 2: Does Education Fuel Economic Growth?',
        difficulty: '中偏难',
        summary: '通过德国民众三百年物质清单数据库，探讨教育与经济增长之间并非简单的因果关系。',
        questions: [
          { type: '段落信息匹配（选段落字母 A–F）', q: 'An explanation of the need to focus on individuals with consistent income.', a: 'E' },
          { type: '段落信息匹配（选段落字母 A–F）', q: 'Examples of the sources the database was compiled from.', a: 'A' },
          { type: '段落信息匹配（选段落字母 A–F）', q: 'An account of one individual’s refusal to obey an order.', a: 'D' },
          { type: '段落信息匹配（选段落字母 A–F）', q: 'A reference to a region suited to research on education and growth.', a: 'F' },
          { type: '段落信息匹配（选段落字母 A–F）', q: 'Examples of items in a list of personal possessions.', a: 'C' },
          { type: '摘要填空（每段选一词）', q: 'The study followed individuals and their ___ over 300 years.', a: 'descendants' },
          { type: '摘要填空（每段选一词）', q: 'Two women were reprimanded for reading during a ___.', a: 'sermon' },
          { type: '摘要填空（每段选一词）', q: 'Juliana was later given a ___.', a: 'fine' },
          { type: '摘要填空（每段选一词）', q: 'Guilds could prevent ___ and block skilled people.', a: 'innovation' },
          { type: '多选题（选两项字母）', q: 'Which TWO statements are made about literacy rates in Section B?', a: 'B, E' },
          { type: '多选题（选两项字母）', q: 'Which TWO statements are made about guilds in Section F?', a: 'B, D' }
        ]
      },
      {
        title: 'Passage 3: Timur Gareyev – Blindfold Chess Champion',
        difficulty: '难',
        summary: '盲棋世界冠军 Timur Gareyev 的成就，以及 UCLA 对其大脑连接性的科学研究。',
        questions: [
          { type: '段落信息匹配（选段落字母 A–H）', q: 'A reference to earlier examples of blindfold chess.', a: 'D' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'An outline of what blindfold chess involves.', a: 'E' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'A claim that Gareyev’s skill is limited to chess.', a: 'F' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'Why Gareyev’s skill is of interest to scientists.', a: 'B' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'An outline of Gareyev’s priorities.', a: 'H' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'A reason why the last part of a game may be difficult.', a: 'E' },
          { type: '判断题 (True/False/Not Given)', q: 'In the forthcoming games, all participants will be blindfolded.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Gareyev has won competitions in BASE jumping.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'UCLA is the first university to research blindfold chess players.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Good chess players are likely able to play blindfold chess.', a: 'TRUE' },
          { type: '摘要填空（每段选一词）', q: 'Researchers first tested Gareyev’s ___.', a: 'memory' },
          { type: '摘要填空（每段选一词）', q: 'He recalled a string of ___ in order and reverse.', a: 'numbers' },
          { type: '摘要填空（每段选一词）', q: 'Scans showed unusual ___ between attention areas.', a: 'communication' },
          { type: '摘要填空（每段选一词）', q: 'Possible unusual strength in ___ input areas.', a: 'visual' }
        ]
      }
    ];

    test4.reading.passages[0].text = `How Madagascar’s bats are helping to save the rainforest

There are few places in the world where relations between agriculture and conservation are more strained. Madagascar’s forests are being converted to agricultural land at a rate of one percent every year. Much of this destruction is fuelled by the cultivation of the country’s main staple crop: rice. And a key reason for this destruction is that insect pests are destroying vast quantities of what is grown by local subsistence farmers, leading them to clear forest to create new paddy fields. The result is devastating habitat and biodiversity loss on the island, but not all species are suffering. In fact, some of the island’s insectivorous bats are currently thriving and this has important implications for farmers and conservationists alike.

Enter University of Cambridge zoologist Ricardo Rocha. He’s passionate about conservation, and bats. More specifically, he’s interested in how bats are responding to human activity and deforestation in particular. Rocha’s new study shows that several species of bats are giving Madagascar’s rice farmers a vital pest control service by feasting on plagues of insects. And this, he believes, can ease the financial pressure on farmers to turn forest into fields.

Bats comprise roughly one-fifth of all mammal species in Madagascar and thirty-six recorded bat species are native to the island, making it one of the most important regions for conservation of this animal group anywhere in the world.

Co-leading an international team of scientists, Rocha found that several species of indigenous bats are taking advantage of habitat modification to hunt insects swarming above the country’s rice fields. They include the Malagasy mouse-eared bat, Major’s long-fingered bat, the Malagasy white-bellied free-tailed bat and Peters’ wrinkle-lipped bat.

‘These winner species are providing a valuable free service to Madagascar as biological pest suppressors,’ says Rocha. ‘We found that six species of bat are preying on rice pests, including the paddy swarming caterpillar and grass webworm. The damage which these insects cause puts the island’s farmers under huge financial pressure and that encourages deforestation.’

The study, now published in the journal Agriculture, Ecosystems and Environment, set out to investigate the feeding activity of insectivorous bats in the farmland bordering the Ranomafana National Park in the southeast of the country.

Rocha and his team used state-of-the-art ultrasonic recorders to record over a thousand bat ‘feeding buzzes’ (echolocation sequences used by bats to target their prey) at 54 sites, in order to identify the favourite feeding spots of the bats. They then used DNA barcoding techniques to analyse droppings collected from bats at the different sites.

The recordings revealed that bat activity over rice fields was much higher than it was in continuous forest – seven times higher over rice fields which were on flat ground, and sixteen times higher over fields on the sides of hills – leaving no doubt that the animals are preferentially foraging in these man-made ecosystems. The researchers suggest that the bats favour these fields because lack of water and nutrient run-off make these crops more susceptible to insect pest infestations. DNA analysis showed that all six species of bat had fed on economically important insect pests. While the findings indicated that rice farming benefits most from the bats, the scientists also found indications that the bats were consuming pests of other crops, including the black twig borer (which infests coffee plants), the sugarcane cicada, the macadamia nut-borer, and the sober tabby (a pest of citrus fruits).

‘The effectiveness of bats as pest controllers has already been proven in the USA and Catalonia,’ said co-author James Kemp, from the University of Lisbon. ‘But our study is the first to show this happening in Madagascar, where the stakes for both farmers and conservationists are so high.’

Local people may have a further reason to be grateful to their bats. While the animal is often associated with spreading disease, Rocha and his team found evidence that Malagasy bats feed not just on crop pests but also on mosquitoes – carriers of malaria, Rift Valley fever virus and elephantiasis – as well as blackflies, which spread river blindness.

Rocha points out that the relationship is complicated. When food is scarce, bats become a crucial source of protein for local people. Even the children will hunt them. And as well as roosting in trees, the bats sometimes roost in buildings, but are not welcomed there because they make them unclean. At the same time, however, they are associated with sacred caves and the ancestors, so they can be viewed as beings between worlds, which makes them very significant in the culture of the people. And one potential problem is that while these bats are benefiting from farming, at the same time deforestation is reducing the places where they can roost, which could have long-term effects on their numbers. Rocha says, ‘With the right help, we hope that farmers can promote this mutually beneficial relationship by installing bat houses.’

Rocha and his colleagues believe that maximising bat populations can help to boost crop yields and promote sustainable livelihoods. The team is now calling for further research to quantify this contribution. ‘I’m very optimistic,’ says Rocha. ‘If we give nature a hand, we can speed up the process of regeneration.’`;

    test4.reading.passages[1].text = `A
Over the last decade, a huge database about the lives of southwest German villagers between 1600 and 1900 has been compiled by a team led by Professor Sheilagh Ogilvie at Cambridge University’s Faculty of Economics. It includes court records, guild ledgers, parish registers, village censuses, tax lists and – the most recent addition – 9,000 handwritten inventories listing over a million personal possessions belonging to ordinary women and men across three centuries. Ogilvie, who discovered the inventories in the archives of two German communities 30 years ago, believes they may hold the answer to a conundrum that has long puzzled economists: the lack of evidence for a causal link between education and a country’s economic growth.

B
As Ogilvie explains, ‘Education helps us to work more productively, invent better technology, and earn more … surely it must be critical for economic growth? But, if you look back through history, there’s no evidence that having a high literacy rate made a country industrialise earlier.’ Between 1600 and 1900, England had only mediocre literacy rates by European standards, yet its economy grew fast and it was the first country to industrialise. During this period, Germany and Scandinavia had excellent literacy rates, but their economies grew slowly and they industrialised late. ‘Modern cross-country analyses have also struggled to find evidence that education causes economic growth, even though there is plenty of evidence that growth increases education,’ she adds.

C
In the handwritten inventories that Ogilvie is analysing are the belongings of women and men at marriage, remarriage and death. From badger skins to Bibles, sewing machines to scarlet bodices – the villagers’ entire worldly goods are included. Inventories of agricultural equipment and craft tools reveal economic activities; ownership of books and education-related objects like pens and slates suggests how people learned. In addition, the tax lists included in the database record the value of farms, workshops, assets and debts; signatures and people’s estimates of their age indicate literacy and numeracy levels; and court records reveal obstacles (such as the activities of the guilds) that stifled industry. Previous studies usually had just one way of linking education with economic growth – the presence of schools and printing presses, perhaps, or school enrolment, or the ability to sign names. According to Ogilvie, the database provides multiple indicators for the same individuals, making it possible to analyse links between literacy, numeracy, wealth, and industriousness, for individual women and men over the long term.

D
Ogilvie and her team have been building the vast database of material possessions on top of their full demographic reconstruction of the people who lived in these two German communities. ‘We can follow the same people – and their descendants – across 300 years of educational and economic change,’ she says. Individual lives have unfolded before their eyes. Stories like that of the 24-year-olds Ana Regina and Magdalena Riethmüllerin, who were chastised in 1707 for reading books in church instead of listening to the sermon. ‘This tells us they were continuing to develop their reading skills at least a decade after leaving school,’ explains Ogilvie. The database also reveals the case of Juliana Schweickherdt, a 50-year-old spinster living in the small Black Forest community of Wildberg, who was reprimanded in 1752 by the local weavers’ guild for ‘weaving cloth and combing wool, counter to the guild ordinance’. When Juliana continued taking jobs reserved for male guild members, she was summoned before the guild court and told to pay a fine equivalent to one third of a servant’s annual wage. It was a small act of defiance by today’s standards, but it reflects a time when laws in Germany and elsewhere regulated people’s access to labour markets. The dominance of guilds not only prevented people from using their skills, but also held back even the simplest industrial innovation.

E
The data-gathering phase of the project has been completed and now, according to Ogilvie, it is time ‘to ask the big questions’. One way to look at whether education causes economic growth is to ‘hold wealth constant’. This involves following the lives of different people with the same level of wealth over a period of time. If wealth is constant, it is possible to discover whether education was, for example, linked to the cultivation of new crops, or to the adoption of industrial innovations like sewing machines. The team will also ask what aspect of education helped people engage more with productive and innovative activities. Was it, for instance, literacy, numeracy, book ownership, years of schooling? Was there a threshold level – a tipping point – that needed to be reached to affect economic performance?

F
Ogilvie hopes to start finding answers to these questions over the next few years. One thing is already clear, she says: the relationship between education and economic growth is far from straightforward. ‘German-speaking central Europe is an excellent laboratory for testing theories of economic growth,’ she explains. Between 1600 and 1900, literacy rates and book ownership were high and yet the region remained poor. It was also the case that local guilds and merchant associations were extremely powerful and legislated against anything that undermined their monopolies. In villages throughout the region, guilds blocked labour migration and resisted changes that might reduce their influence. ‘Early findings suggest that the potential benefits of education for the economy can be held back by other barriers, and this has implications for today,’ says Ogilvie. ‘Huge amounts are spent improving education in developing countries, but this spending can fail to deliver economic growth if restrictions block people – especially women and the poor – from using their education in economically productive ways. If economic institutions are poorly set up, for instance, education can’t lead to growth.’`;

    test4.reading.passages[2].text = `A
Next month, a chess player named Timur Gareyev will take on nearly 50 opponents at once. But that is not the hard part. While his challengers will play the games as normal, Gareyev himself will be blindfolded. Even by world record standards, it sets a high bar for human performance. The 28-year-old already stands out in the rarefied world of blindfold chess. He has a fondness for bright clothes and unusual hairstyles, and he gets his kicks from the adventure sport of BASE jumping. He has already proved himself a strong chess player, too. In a 10-hour chess marathon in 2013, Gareyev played 33 games in his head simultaneously. He won 29 and lost none. The skill has become his brand: he calls himself the Blindfold King.

B
But Gareyev’s prowess has drawn interest from beyond the chess-playing community. In the hope of understanding how he and others like him can perform such mental feats, researchers at the University of California in Los Angeles (UCLA) called him in for tests. They now have their first results. ‘The ability to play a game of chess with your eyes closed is not a far reach for most accomplished player,’ said Jesse Rissman, who runs a memory lab at UCLA. ‘But the thing that’s so remarkable about Timur and a few other individuals is the number of games they can keep active at once. To me it is simply astonishing.’

C
Gareyev learned to play chess in his native Uzbekistan when he was six years old. Tutored by his grandfather, he entered his first tournament aged eight and soon became obsessed with competitions. At 16, he was crowned Asia’s youngest ever chess grandmaster. He moved to the US soon after, and as a student helped his university win its first national chess championship. In 2013, Gareyev was ranked the third best chess player in the US.

D
To the uninitiated, blindfold chess seems to call for superhuman skill. But displays of the feat go back centuries. The first recorded game in Europe was played in 13th-century Florence. In 1947, the Argentinian grandmaster Miguel Najdorf played 45 simultaneous games in his mind, winning 39 in the 24-hour session.

E
Accomplished players can develop the skill of playing blind even without realising it. The nature of the game is to run through possible moves in the mind to see how they play out. From this, regular players develop a memory for the patterns the pieces make, the defences and attacks. ‘You recreate it in your mind,’ said Gareyev. ‘A lot of players are capable of doing what I’m doing.’ The real mental challenge comes from playing multiple games at once in the head. Not only must the positions of each piece on every board be memorised, they must be recalled faithfully when needed, updated with each player’s moves, and then reliably stored again, so the brain can move on to the next board. First moves can be tough to remember because they are fairly uninteresting. But the ends of games are taxing too, as exhaustion sets in. When Gareyev is tired, his recall can get patchy. He sometimes makes moves based on only a fragmented memory of the pieces’ positions.

F
The scientists first had Gareyev perform some standard memory tests. These assessed his ability to hold numbers, pictures and words in mind. One classic test measures how many numbers a person can repeat, both forwards and backwards, soon after hearing them. Most people manage about seven. ‘He was not exceptional on any of these standard tests,’ said Rissman. ‘We didn’t find anything other than playing chess that he seems to be supremely gifted at.’ But next came the brain scans. With Gareyev lying down in the machine, Rissman looked at how well connected the various regions of the chess player’s brain were. Though the results are tentative and as yet unpublished, the scans found much greater than average communication between parts of Gareyev’s brain that make up what is called the frontoparietal control network. Of 63 people scanned alongside the chess player, only one or two scored more highly on the measure. ‘You use this network in almost any complex task. It helps you to allocate attention, keep rules in mind, and work out whether you should be responding or not,’ said Rissman.

G
It was not the only hint of something special in Gareyev’s brain. The scans also suggest that Gareyev’s visual network is more highly connected to other brain parts than usual. Initial results suggest that the areas of his brain that process visual images – such as chess boards – may have stronger links to other brain regions, and so be more powerful than normal. While the analyses are not finalised yet, they may hold the first clues to Gareyev’s extraordinary ability.

H
For the world record attempt, Gareyev hopes to play 47 blindfold games at once in about 16 hours. He will need to win 80% to claim the title. ‘I don’t worry too much about the winning percentage, that’s never been an issue for me,’ he said. ‘The most important part of blindfold chess for me is that I have found the one thing that I can fully dedicate myself to. I miss having an obsession.’`;

    // ---------- 写作（真实题目 + 范文示例） ----------
    test4.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '图表描述 - 折线图',
        prompt: 'The graph below shows the number of shops that closed and the number of new shops that opened in one country between 2011 and 2018.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The line graph illustrates the number of shops that opened and closed in a single country from 2011 to 2018.\n\nOverall, far more shops closed than opened throughout the period, with closures peaking dramatically in 2012 before gradually recovering, while openings remained relatively low and stable.\n\nIn 2011, around 8,500 shops opened and roughly 6,500 closed. The following year saw a sharp reversal: closures surged to about 14,000, far exceeding openings, which fell slightly. From 2013 to 2015, both figures declined, with closures dropping to approximately 5,000 and openings to about 4,000, meaning the gap narrowed.\n\nAfter 2015, the trend stabilised and even improved modestly. By 2018, closures had fallen to around 4,000, while openings recovered to nearly 6,000, so that more shops were opening than closing for the first time since the early part of the period.\n\nIn summary, the country’s retail sector suffered a severe net loss of shops around 2012 but showed a gradual recovery in the later years.',
        tips: '先写总览(overview)再分述；对比 opened 与 closed 的趋势与峰值；突出 2012 的净关闭；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（利弊/正负评价）',
        prompt: 'Nowadays, a growing number of people with health problems are trying alternative medicines and treatments instead of visiting their usual doctor.\n\nDo you think this is a positive or a negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
        modelAnswer: 'An increasing number of patients are turning to alternative medicines such as herbal remedies, acupuncture or homeopathy rather than consulting conventional doctors. In my view, this is largely a negative development, though not without some justification.\n\nThe main concern is safety. Alternative treatments are often less rigorously tested than mainstream medicine, and delaying proper diagnosis can allow serious conditions to worsen. For example, someone with early cancer who relies solely on unproven remedies may lose the chance of effective treatment. Furthermore, unregulated practitioners may give harmful advice, and interactions between herbal products and prescribed drugs can be dangerous.\n\nHowever, there are reasons for the shift. Many people are dissatisfied with impersonal, rushed consultations and are drawn to the holistic, patient-centred approach of alternative care. In some cases, practices like acupuncture can genuinely relieve pain or stress when used alongside conventional treatment.\n\nNevertheless, I believe the risks outweigh the benefits when alternative medicine replaces standard care. The best approach is integrative: patients should feel free to use complementary therapies, but only under the guidance of qualified medical professionals who can ensure they do no harm.\n\nIn conclusion, while the appeal of alternative treatments is understandable, treating them as a substitute for proper medical care is a negative trend that can endanger health.',
        tips: '明确立场（正负）；权衡双方并举例；建议"补充而非替代"的折中立场；至少250词'
      }
    ];

    // ---------- 口语（真实话题 + 参考回答示例） ----------
    test4.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Maps（地图）',
        questions: [
          { q: 'Do you think it’s better to use a paper map or a map on your phone? [Why?]', a: '参考回答: I think a phone map is far better – it gives real-time updates and suggests alternate routes for traffic, and you can search nearby places easily.' },
          { q: 'When was the last time you needed to use a map? [Why/Why not?]', a: '参考回答: A few weeks ago I used one to find a new restaurant in an unfamiliar area; it helped me avoid getting lost and find the quickest route.' },
          { q: 'If you visit a new city, do you always use a map to find your way around? [Why/Why not?]', a: '参考回答: Yes, I rely on a map in new cities so I don’t miss landmarks and feel confident navigating the streets.' },
          { q: 'In general, do you find it easy to read maps? [Why/Why not?]', a: '参考回答: Digital maps are easy with voice guidance, but I struggle a bit with traditional paper maps, which can be tricky to interpret.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe an occasion when you had to do something in a hurry.\n\nYou should say:\n– what you had to do\n– why you had to do this in a hurry\n– how well you did this\n– and explain how you felt about having to do this in a hurry.',
        modelAnswer: '参考回答:\n\nLast month I had to prepare a presentation for a work meeting at very short notice. My manager told me the day before that the original presenter had fallen ill, leaving me less than 24 hours to gather information, make slides and rehearse.\n\nI focused on the key points and kept the slides clear and concise. During the meeting I felt a flutter of nerves, but I delivered it confidently. In the end it went well and colleagues gave positive feedback.\n\nLooking back, I felt a mix of stress and accomplishment. It was challenging, but it taught me to keep calm under pressure and to prioritise what truly matters.',
        tips: '覆盖全部四个要点；用过去时叙述；说明匆忙原因与最终结果及感受；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Lateness & Time Management',
        questions: [
          { q: 'Do you think it’s OK to arrive late when meeting a friend?', a: '参考回答: It’s best to be on time as it shows you value their time; if delayed by emergencies, communicate and apologise promptly.' },
          { q: 'What should happen to people who arrive late for work?', a: '参考回答: Companies should have a fair system – verbal warnings or tracking repeat offences, while considering underlying causes like transport issues.' },
          { q: 'How can people make sure they don’t arrive late?', a: '参考回答: Plan ahead, allow a buffer for delays, set reminders, and prepare things the night before to streamline the morning.' },
          { q: 'Is it better to study in long periods or shorter blocks?', a: '参考回答: Shorter blocks are more effective; focus drops after 25-30 minutes, so breaks keep the mind sharp and aid retention.' },
          { q: 'What are the effects of poor study-time management?', a: '参考回答: It causes stress, cramming and lower-quality work, plus a shaky understanding of material and imbalance in life.' },
          { q: 'How important is leisure time for students?', a: '参考回答: Very important – it helps them recharge, relieves stress and returns them to study more focused, avoiding burnout.' }
        ]
      }
    ];
  }

  // ===================== 听力原文脚本（真实，覆盖 listening-scripts.js 中 17-3-* 与 17-4-*） =====================
  if (typeof LISTENING_SCRIPTS !== 'undefined') {
    LISTENING_SCRIPTS['17-3-0'] = `WOMAN: Jack, I'm thinking of taking the kids to the seaside on a surfing holiday this summer and I wanted to ask your advice – as I know you're such an expert.

JACK: Well, I don't know about that, but yes, I've done a bit of surfing over the years. I'd thoroughly recommend it. I think it's the kind of holiday all the family can enjoy together. The thing about surfing is that it's great for all ages and all abilities. My youngest started when he was only three!

WOMAN: Wow! But it's quite physically demanding, isn't it? I've heard you need to be pretty fit.

JACK: Yes. You'll certainly learn more quickly and won't tire as easily.

WOMAN: Well – that should be OK for us. You've been surfing a few times in Ireland, haven't you?

JACK: Yes. There's some great surfing there, which people don't always realise.

WOMAN: And which locations would you recommend? – there seem to be quite a few.

JACK: Yes, there are loads. Last year we went to County Donegal. There are several great places to surf there.

WOMAN: What about in County Clare? I read that's also really good for surfing.

JACK: Yes, it is. I've been there a few times. Most people go to Lahinch. My kids love it there. The waves aren't too challenging and the town is very lively.

WOMAN: Are there good hotels there?

JACK: Yes – some very nice ones and there are also a few basic hostels and campsites. It's great if you need lessons as the surf schools are excellent.

WOMAN: Sounds good.

JACK: Yes and there's lots to see in the area – like those well-known cliffs – I've forgotten the name of them.

WOMAN: Oh don't worry – I can look them up.

JACK: I've also been surfing in County Mayo, which is less well-known for surfing, but we had a really good time. That was a few years ago when the kids were younger. There's a good surf school at Carrowniskey beach.

WOMAN: How do you spell that?

JACK: C-A-double R-O-W-N-I-S-K-E-Y

WOMAN: OK.

JACK: I put the kids into the surf camp they run during the summer for 10-16 year olds.

WOMAN: Oh right. How long was that for?

JACK: Three hours every day for a week. It was perfect – they were so tired out after that.

WOMAN: I can imagine.

JACK: One thing we did while the kids were surfing was to rent some kayaks to have a look around the bay which is nearby. It's really beautiful.

WOMAN: Oh, I'd love to do that.

WOMAN: Now the only time I went to Ireland it rained practically every day.

JACK: Mmm yes – that can be a problem – but you can surf in the rain, you know.

WOMAN: It doesn't have the same appeal, somehow.

JACK: Well, the weather's been fine the last couple of years when I've been there, but actually, it tends to rain more in August than in the spring or autumn. September's my favourite month because the water is warmer then.

WOMAN: The only problem is that the kids are back to school then.

JACK: I know. But one good thing about Irish summers is that it doesn't get too hot. The average temperature is about 19 degrees and it usually doesn't go above 25 degrees.

WOMAN: That sounds alright. Now what about costs?

JACK: Surfing is a pretty cheap holiday really – the only cost is the hire of equipment. You can expect to pay a daily rate of about 30 euros for the hire of a wetsuit and board – but you can save about 40 euros if you hire by the week.

WOMAN: That's not too bad.

JACK: No. It's important to make sure you get good quality wetsuits – you'll all get too cold if you don't. And make sure you also get boots. They keep your feet warm and it's easier to surf with them on too.

WOMAN: OK. Well, thanks very much.`;

    LISTENING_SCRIPTS['17-3-1'] = `MRS CARTER: Good afternoon. My name's Mrs Carter and I run the before and after school extended hours childcare service. I hope you've had a chance to have a good look around the school and talk to staff and pupils. I know that many of you are interested in using our childcare service when your child joins the school, and perhaps you already know something about it, but for those that don't, I'll go through the main details now.

We offer childcare for children from the ages of four to eleven both before and after school. I know that many parents who work find this service invaluable. You can leave your child with us safe in the knowledge that they will be extremely well cared for.

We are insured to provide care for up to 70 children, although we rarely have this many attending at any one session. I think we generally expect around 50-60 children for the afternoon sessions and about half that number for the breakfast sessions. Although we currently do have 70 children registered with us, not all of these attend every day. It's ten years since we began offering an extended hours service and we've come a long way during that time. When we first opened, we only had about 20 children attending regularly.

We try to keep our costs as low as we can and we think we provide very good value for money. For the afternoon sessions, which run from 3.30 until 6 p.m., it's £7.20. But if you prefer, you can pay for one hour only, which costs £3.50, or two hours which costs £5.70.

The cost of the childcare includes food and snacks. They'll be given breakfast in the morning and in the afternoon, a healthy snack as soon as they finish school. At 5 p.m. children are given something more substantial, such as pasta or a casserole. Please inform us of any allergies that your child might have and we'll make sure they're offered a suitable alternative.

As you may know, the childcare service runs through the school holidays from 8 a.m. to 6 p.m. We offer a really varied and exciting programme to keep the children entertained – we don't want them to feel as if they are still at school! It will also feel different because they'll get the chance to make new friends with children from other schools – spaces are available for them because a lot of our term-time children don't always attend during the holiday. In the past, parents have asked if children over the age of 11 are allowed to come with their younger brothers and sisters – but I'm afraid we're unable to do this because of the type of insurance we have.

So now let me tell you about some of the activities that your child can do during the after-school sessions. As well as being able to use the playground equipment, computers and the library, there is usually at least one 'special' activity that children can do each day. For example, Spanish. We have a specialist teacher coming in every Thursday to give a basic introduction to the language through games and songs. She does two sessions: one for the over 8s and one for the younger children. This is the only activity which we have to make an extra charge for – but it's well worth it.

Once a week the children have the opportunity to do some music. We're very lucky that one of our staff is a member of a folk band. On Mondays, she teaches singing and percussion to groups of children. We do rely on parental support for this, so if any of you sing or play an instrument and would be prepared to help out at these sessions, we'd be delighted.

Painting continues to be one of the most popular activities. To begin with we weren't keen on offering this because of the extra mess involved, but children kept asking if they could do some art and so we finally gave in. Art is great for helping the children to relax after working hard at school all day.

Yoga is something that we've been meaning to introduce for some time but haven't been able to find anyone available to teach it – until now that is. So we'll see how this goes. Hopefully, children will benefit in all sorts of ways from this.

Cooking is another popular activity. They make a different sort of cake, or pizza or bread each week. Although the younger children love doing it, we found that the mess was just too much, so we've decided to restrict this to the over 8s, as they are better able to clean up after themselves.`;

    LISTENING_SCRIPTS['17-3-2'] = `HOLLY: Hello Dr Green – I'm here to talk to you about my work placement.

TUTOR: Oh yes, it's Holly, isn't it?

HOLLY: Yes.

TUTOR: So, which work placement have you chosen?

HOLLY: I decided to go for the Orion Stadium placement. The event I'll be managing is one where I'm helping to set up a sports competition for primary school children.

TUTOR: Yup. That's always a popular placement – even though it can be tougher than you think working with children.

HOLLY: I know, but it's the fresh air that attracts me – organising something indoors doesn't have the same appeal, even though it might be fun.

TUTOR: OK, so obviously safety's going to be one of your key concerns for this event.

HOLLY: Yes, I've already thought about that. I'll need to make sure none of the equipment's damaged.

TUTOR: Ah well, you'll be working with schools, so the equipment will be their responsibility. However, the grounds and what goes on there will be yours.

HOLLY: Oh I see – that'll include keeping everyone within the boundary once they're in their kit and on the field?

TUTOR: Exactly – you'll need to inspect areas like changing rooms as well for anything someone can trip over, but your main priority will be not to lose anyone!

HOLLY: Right. I'll need staff to help with that.

TUTOR: And don't forget about the spectators.

HOLLY: Mmm. I was thinking that many of them will be parents, who could help run the event.

TUTOR: I wouldn't rely on that. They'll be more interested in filming their children than volunteering.

HOLLY: I'll need to make sure they don't interfere with events doing that!

TUTOR: And that's not always easy, especially when a proud parent's trying to get a snap of their child and you want them to move elsewhere.

HOLLY: OK. What about the scheduling?

TUTOR: With sporting events there are all sorts of things that can alter the timetable – like rain, for instance – though so far, we've always been lucky with that.

HOLLY: Yeah, and I was thinking about what to do if someone got hurt as well. I know that last year that caused a terrible delay.

TUTOR: You have to be prepared for such things.

HOLLY: Oh. What if a match ends in a draw – do you let the teams keep going until someone wins?

TUTOR: That'll be up to you – and again, you need to plan for it.

HOLLY: Right.

TUTOR: Now, the aim of your work placement is to give you the opportunity to develop the skills that an events manager needs. So, let's talk about those a bit.

HOLLY: Well, I think my communication skills are pretty good. I can talk on the phone to people and book venues and that kind of thing.

TUTOR: Good – just remember it isn't only about what you say. If you meet someone face-to-face and want to persuade them to be a sponsor, for example…

HOLLY: Oh, I'll dress up for that! Sure.

TUTOR: Good. Let's go on to think about your organisational skills. You're working in a very people-based industry and that means things won't always go to plan.

HOLLY: I guess it's being prepared to make changes that matters.

TUTOR: That's right. You may have to make an on-the-spot change to a timetable because of a problem you hadn't anticipated…

HOLLY: … just do it! OK

TUTOR: How's your time management these days?

HOLLY: I'm working on it – I'm certainly better when I have a deadline, which is why this work suits me.

TUTOR: Yes, but it's how you respond as that deadline approaches!

HOLLY: I know I've got to look calm even if I'm in a panic.

TUTOR: Just think to yourself – no one must know I'm under pressure.

HOLLY: Yeah – even though I'm multi-tasking like crazy!

TUTOR: Another skill that events managers need is creativity. Often your client has what we call the 'big picture' idea, but it's up to the events manager to think of all the fine points that go to making it work.

HOLLY: Right, so I need to listen carefully to that idea and then fill in all the gaps.

TUTOR: That's right. And you'll have a team working under you, so another key skill is leadership. Your team may have lots of ideas too, but you've got to make the ultimate choices. Do we have refreshments inside or out, for example?

HOLLY: Isn't it better to be democratic?

TUTOR: It's a nice idea, but you have the ultimate responsibility. So, believe in what you think best. Be prepared to say 'yes', that's a good idea but it won't work here.

HOLLY: I see what you mean. What about the networking side of things? I know it's an area that a lot of students worry about because we don't have much experience to offer others.

TUTOR: But even without it – you can still be an interesting person with useful ideas. And the more people you impress, the better.

HOLLY: I guess that will help me when I apply for a real job.

TUTOR: Exactly – think ahead – remember what your ambitions are and keep them in mind.

HOLLY: Definitely.`;

    LISTENING_SCRIPTS['17-3-3'] = `Scientists believe that a majority of the earth's bird population migrate in some fashion or other. Some travel seasonally for relatively short distances, such as birds that move from their winter habitats in lowlands to mountain tops for the summers. Others, like the Arctic Tern, travel more than 25,000 miles seasonally between the northern and southern poles. Bird migration has been studied over many centuries through a variety of observations.

But until relatively recently, where birds went to in the winter was considered something of a mystery. The lack of modern science and technology led to many theories that we now recognize as error-filled and even somewhat amusing. Take hibernation theory for example – two thousand years ago, it was commonly believed that when birds left an area, they went underwater to hibernate in the seas and oceans. Another theory for the regular appearance and disappearance of birds was that they spend winter hidden in mud till the weather changed and food became abundant again. The theory that some birds hibernate persisted until experiments were done on caged birds in the 1940s which demonstrated that birds have no hibernation instinct.

One of the earliest naturalists and philosophers from ancient Greece was Aristotle who was the first writer to discuss the disappearance and reappearance of some bird species at certain times of year. He developed the theory of transmutation, the seasonal change of one species into another, by observing redstarts and robins. He observed that in the autumn, small birds called 'redstarts' began to lose their feathers, which convinced Aristotle that they changed into robins for the winter, and back into redstarts in the summer. These assumptions are understandable given that this pair of species are similar in shape, but are a classic example of an incorrect interpretation based on correct observations.

The most bizarre theory was put forward by an English amateur scientist, Charles Morton, in the seventeenth century. He wrote a surprisingly well-regarded paper claiming that birds migrate to the moon and back every year. He came to this conclusion as the only logical explanation for the total disappearance of some species.

One of the key moments in the development of migration theory came in 1822 when a white stork was shot in Germany. This particular stork made history because of the long spear in its neck which incredibly had not killed it – everyone immediately realised this spear was definitely not European. It turned out to be a spear from a tribe in Central Africa. This was a truly defining moment in the history of ornithology because it was the first evidence that storks spend their winters in sub-Saharan Africa. You can still see the 'arrow stork' in the Zoological Collection of the University of Rostock in Germany.

People gradually became aware that European birds moved south in autumn and north in summer but didn't know much about it until the practice of catching birds and putting rings on their legs became established. Before this, very little information was available about the actual destinations of particular species and how they travelled there. People speculated that larger birds provided a kind of taxi service for smaller birds by carrying them on their backs. This idea came about because it seemed impossible that small birds weighing only a few grams could fly over vast oceans. This idea was supported by observations of bird behaviour such as the harassment of larger birds by smaller birds.

The development of bird ringing, by a Danish schoolteacher, Hans Christian Cornelius Mortensen, made many discoveries possible. This is still common practice today and relies upon what is known as 'recovery' – this is when ringed birds are found dead in the place they have migrated to, and identified. Huge amounts of data were gathered in the early part of the twentieth century and for the first time in history people understood where birds actually went to in winter. In 1931, an atlas was published showing where the most common species of European birds migrated to. More recent theories about bird migration…`;

    LISTENING_SCRIPTS['17-4-0'] = `JACINTA: Hello, Easy Life Cleaning Services, Jacinta speaking.

CLIENT: Oh hello. I'm looking for a cleaning service for my apartment – do you do domestic cleaning?

JACINTA: Sure.

CLIENT: Well, it's just a one-bedroom flat. Do you have a basic cleaning package?

JACINTA: Yes. For a one-bedroom flat we're probably looking at about two hours for a clean. So we'd do a thorough clean of all surfaces in each room, and polish them where necessary. Does your apartment have carpets?

CLIENT: No, I don't have any, but the floor would need cleaning.

JACINTA: Of course – we'd do that in every room. And we'd do a thorough clean of the kitchen and bathroom.

CLIENT: OK.

JACINTA: Then we have some additional services which you can request if you want – so for example, we can clean your oven for you every week.

CLIENT: Actually, I hardly ever use that, but can you do the fridge?

JACINTA: Sure. Would you like that done every week?

CLIENT: Yes, definitely. And would ironing clothes be an additional service you can do?

JACINTA: Yes, of course.

CLIENT: It wouldn't be much, just my shirts for work that week.

JACINTA: That's fine. And we could also clean your microwave if you want.

CLIENT: No, I wipe that out pretty regularly so there's no need for that.

JACINTA: We also offer additional services that you might want a bit less often, say every month. So for example, if the inside of your windows need cleaning, we could do that.

CLIENT: Yes, that'd be good. I'm on the fifteenth floor, so the outside gets done regularly by specialists, but the inside goes get a bit grubby.

JACINTA: And we could arrange for your curtains to get cleaned if necessary.

CLIENT: No, they're OK. But would you be able to do something about the balcony? It's quite small and I don't use it much, but it could do with a wash every month or so.

JACINTA: Yes, we can get the pressure washer onto that.

JACINTA: Now if you're interested, we do offer some other possibilities to do with general maintenance. For example, if you have a problem with water and you need a plumber in a hurry, we can put you in touch with a reliable one who can come out straightaway. And the same thing if you need an electrician.

CLIENT: Right. That's good to know. I've only just moved here so I don't have any of those sorts of contacts.

JACINTA: And I don't know if this is of interest to you, but we also offer a special vacuum cleaning system which can improve the indoor air quality of your home by capturing up to 99% of all the dust in the air. So if you're troubled by allergies, this can make a big difference.

CLIENT: Right. In fact, I don't have that sort of problem, but I'll bear it in mind. Now can you tell me a bit about your cleaning staff?

JACINTA: Of course. So all our cleaners are very carefully selected. When they apply to us, they have to undergo a security check with the police to make sure they don't have any sort of criminal background, and, of course, they have to provide references as well. Then if we think they might be suitable for the job, we give them training for it. That lasts for two weeks so it's very thorough, and at the end of it, they have a test. If they pass that, we take them on, but we monitor them very carefully – we ask all our clients to complete a review of their performance after every visit and to email it to us. So we can pick up any problems straightaway and deal with them.

CLIENT: OK, well that all sounds good. And will I always have the same cleaner?

JACINTA: Yes, we do our best to organise it that way, and we usually manage it.

CLIENT: Good. That's fine. Right, so I'd like to go ahead and…`;

    LISTENING_SCRIPTS['17-4-1'] = `As many of you here today have worked in the hotel industry for some time, I'm sure you have experienced the problem of high staff turnover in your hotels. Every hotel relies on having loyal and experienced members of staff who make sure that everything runs smoothly. If staff are constantly changing, it can make life difficult for everyone. But why do staff leave frequently in many hotels? Of course, many hotel jobs, such as cleaning, are low-skilled and are not well-paid. A lot of managers think it's this and the long hours that are the main causes of high staff turnover – but what they don't realise is that it's the lack of training in many hotel jobs which is a huge factor.

So, what kind of problems does a high turnover of staff cause? Well, having to recruit new staff all the time can be very time-consuming, and managers may have to cover some duties while waiting for new staff to arrive. This means they don't have time to think about less immediate problems such as how to improve their service. When staff leave, it can also severely affect the colleagues they leave behind. It has a negative effect on remaining staff, who may start to feel that they too should be thinking about leaving.

So, what can be done to change this situation? Firstly, managers should stop making basic errors which leave their staff feeling upset and resentful. When organising shifts, for example, make sure you never give certain staff preferential treatment. All staff should be given some choice about when they work, and everyone should have to work some evening and weekend shifts. If you treat staff fairly, they'll be more likely to step in and help when extra staff are needed.

Keeping staff happy has other tangible benefits for the business. Take the Dunwich Hotel as an example. It had been experiencing a problem with staff complaints and in order to deal with this, invested in staff training and improved staff conditions. Not only did the level of complaints fall, but they also noticed a significant increase in the amount each customer spent during their stay. They have now introduced a customer loyalty scheme which is going really well.

Now I'd like to look at some ways you can reduce staff turnover in your hotels, and I'll do this by giving some examples of hotels where I've done some training recently.

The Sun Club received feedback which showed that staff thought managers didn't value their opinions. They weren't made to feel they were partners who were contributing to the success of the business as a whole. This situation has changed. Junior staff at all levels are regularly invited to meetings where their ideas are welcomed.

A year ago, The Portland recognised the need to invest in staff retention. Their first step was to introduce a scheme for recognising talent amongst their employees. The hope is that organising training for individuals with management potential will encourage them to stay with the business.

At Bluewater, managers decided to recognise 50 high achievers from across the company's huge hotel chain. As a reward, they're sent on an all-expenses-paid trip abroad every year. Fun is an important element in the trips, but there's also the opportunity to learn something useful. This year's trip included a visit to a brewery, where staff learned about the new beer that would be served in the hotel.

Pentlow Hotels identified that retention of junior reception staff was an issue. In order to encourage them to see that working in a hotel could be worthwhile and rewarding, with good prospects, they introduced a management programme. These staff were given additional responsibilities and the chance to work in various roles in the hotel.

Green Planet wanted to be seen as a caring employer. To make life easier for staff, many of whom had childcare responsibilities, the hotel began issuing vouchers to help cover the cost of childcare.

Louise Marsh at The Amesbury has one of the best staff retention rates in the business. Since she joined the company, she has made a huge effort to achieve this by creating a co-operative and supportive environment. For her, the staff are part of a large family where everyone is valued.

OK, now I'd like to…`;

    LISTENING_SCRIPTS['17-4-2'] = `JEANNE: Hi Thomas, how are you enjoying the course so far?

THOMAS: Yeah, I think it's good.

JEANNE: Remind me – why did you decide to study sports science? Didn't you want to be a professional athlete when you were at school?

THOMAS: Yeah – that was my goal, and all my classmates assumed I would achieve it; they thought I was brilliant.

JEANNE: That must have been a nice feeling.

THOMAS: Mm, I thought I could win anything. There was no one who could run faster than me.

JEANNE: Exactly – so what happened? Did your mum and dad want you to be more 'academic'?

THOMAS: Not at all. Perhaps they should have pushed me harder, though.

JEANNE: What do you mean?

THOMAS: I think I should have practised more.

JEANNE: What makes you say that?

THOMAS: Well, I went out to Kenya for a couple of weeks to train…

JEANNE: Really! I didn't know that.

THOMAS: I was chosen to go there out of loads of kids and run with some of the top teenage athletes in the world. And… I was so calm about it. I just kept thinking how fortunate I was. What a great chance this was! Everyone back home was so proud of me. But once we started competing, I very quickly realised I wasn't good enough.

JEANNE: That must have been a huge shock.

THOMAS: I thought 'this can't be happening'! I was used to winning.

JEANNE: I'm sorry to hear that.

THOMAS: It's OK. I'm over it now and I think it's much better to do a university course and this one has such a variety of sports-related areas. It's going to be good.

JEANNE: Oh, I agree – I chose it because of that.

THOMAS: So Jeanne – have you thought of any ideas for the discussion session next week on technology and sport?

JEANNE: We have to cover more than one sport, don't we?

THOMAS: Yeah.

JEANNE: You know – we always think technology is about the future, but we could gather some ideas about past developments in sport.

THOMAS: Look at early types of equipment perhaps? Uh, I remember reading something about table tennis bats once – how they ended up being covered with pimpled rubber.

JEANNE: Cos they were just wooden at first, I'd imagine.

THOMAS: Yeah. In about the 1920s, a factory was making rolls of the rubber in bulk for something like horse harnesses.

JEANNE: Really!

THOMAS: Yeah – and someone realised that it'd make a perfect covering for the wooden bats.

JEANNE: So what about cricket – that's had a few innovative changes. Maybe the pads they were on their legs?

THOMAS: I don't think they've changed much but, I'm just looking on the internet… and it says that when the first cricket helmet came in, in 1978, the Australian batsman who first wore it was booed and jeered by people watching because it was so ugly!

JEANNE: Wow, players have to protect themselves from getting hurt! I mean everyone wears one now.

THOMAS: Mm, unlike the cycle helmet.

JEANNE: Well, unless you're a professional, but you're right, many ordinary bikers don't wear a helmet.

THOMAS: Hey, look at these pictures of original helmet designs. This one looks like an upside-down bowl!

JEANNE: Yet, the woman's laughing – she's so proud to be wearing it!

THOMAS: It says serious cyclists ended up with wet hair from all the hard exercise.

JEANNE: I guess that's why they have large air vents in them now so that the skin can breathe more easily.

THOMAS: OK, so we've done helmets. What about golf balls or better still golf clubs – they've changed a lot.

JEANNE: Yeah – I remember my great grandfather telling me that because a club was made entirely of wood, it would easily break and players had to get another.

THOMAS: There's no wood at all in them now, is there?

JEANNE: No – they're much more powerful.

THOMAS: The same must be true of hockey sticks.

JEANNE: I don't think so because players still use wooden sticks today. What it does say here, though, is that when the game started you had to produce a stick yourself.

THOMAS: I guess they just weren't being manufactured. So, one more perhaps. What about football?

JEANNE: Well, I know the first balls were made of animal skin.

THOMAS: Yeah, they covered them with pieces of leather that were stitched together, but… the balls let in water when it rained.

JEANNE: Oh, that would have made them much heavier.

THOMAS: That's right. You can imagine the damage to player's necks when the ball was headed.

JEANNE: How painful that must have been!

THOMAS: Yeah, well, I think we can put together some useful ideas…`;

    LISTENING_SCRIPTS['17-4-3'] = `Hello everyone. Today we're going to look at another natural food product and that's maple syrup. What is this exactly? Well, maple syrup looks rather like clear honey, but it's not made by bees; it's produced from the plant fluid – or sap – inside the maple tree and that makes maple syrup a very natural product. Maple syrup is a thick, golden, sweet-tasting liquid that can be bought in bottles or jars and poured onto food such as waffles and ice cream or used in the baking of cakes and pastries. It contains no preservatives or added ingredients, and it provides a healthy alternative to refined sugar.

Let's just talk a bit about the maple tree itself, which is where maple syrup comes from. So, there are many species of maple tree, and they'll grow without fertilizer in areas where there's plenty of moisture in the soil. However, they'll only do this if another important criterion is fulfilled, which is that they must have full or partial sun exposure during the day and very cool nights. There are only certain parts of the world that provide all these conditions: one is Canada, and by that, I mean all parts of Canada, and the other is the north-eastern states of North America. In these areas, the climate suits the trees perfectly. In fact, Canada produces over two-thirds of the world's maple syrup, which is why the five-pointed maple leaf is a Canadian symbol and has featured on the flag since 1964.

So how did maple syrup production begin? Well, long before Europeans settled in these parts of the world, the indigenous communities had started producing maple sugar. They bored holes in the trunks of maple trees and used containers made of tree bark to collect the liquid sap as it poured out. As they were unable to keep the liquid for any length of time – they didn't have storage facilities in those days – they boiled the liquid by placing pieces of rock that had become scorching hot from the sun into the sap. They did this until it turned into sugar, and they were then able to use this to sweeten their food and drinks. Since that time, improvements have been made to the process, but it has changed very little overall.

So let's look at the production of maple syrup today. Clearly, the maple forests are a valuable resource in many Canadian and North American communities. The trees have to be well looked after and they cannot be used to make syrup until the trunks reach a diameter of around 25 centimetres. This can take anything up to 40 years. As I've already mentioned, maple trees need the right conditions to grow and also to produce sap. Why is this? Well, what happens is that during a cold night, the tree absorbs water from the soil, and that rises through the tree's vascular system. But then in the warmer daytime, the change in temperature causes the water to be pushed back down to the bottom of the tree. This continual movement – up and down – leads to the formation of the sap needed for maple syrup production.

When the tree is ready, it can be tapped and this involves drilling a small hole into the trunk and inserting a tube into it that ends in a bucket. The trees can often take several taps, though the workers take care not to cause any damage to the healthy growth of the tree itself. The sap that comes out of the trees consists of 98 percent water and 2 percent sugar and other nutrients. It has to be boiled so that much of that water evaporates, and this process has to take place immediately, using what are called evaporators. These are basically extremely large pans – the sap is poured into these, a fire is built and the pans are then heated until the sap boils. As it does this, the water evaporates, and the syrup begins to form. The evaporation process creates large quantities of steam, and the sap becomes thicker and denser, and, at just the right moment, when the sap is thick enough to be called maple syrup, the worker removes it from the heat. After this process, something called 'sugar sand' has to be filtered out as this builds up during the boiling and gives the syrup a cloudy appearance and a slightly gritty taste. Once this has been done, the syrup is ready to be packaged so that it can be used for a whole variety of products. It takes 40 litres of sap to produce one litre of maple syrup so you can get an idea of how much is needed!

So that's the basic process. In places like Quebec where…`;
  }

  console.log('[real-17b] 剑17 Test3 & Test4 已覆盖为练习题目（待与原版书核对）');
})();
