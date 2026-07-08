/**
 * 剑15 Test 3、Test 4 剑桥雅思内容覆盖补丁
 * 目的：将 data-extra3-1.js 中 AI 生成的"原创练习"内容替换为剑桥雅思15 Test 3、Test 4 练习题目。
 *
 * 数据核对来源（公开权威解析，含原题答案键）：
 *   听力原文/答案 — ieltstrainingonline (Audio-script / Practice Cam 15 Listening Test 3 & 4)
 *   阅读原文/题目/答案 — ieltstrainingonline (Answers and Explanations Cam 15 Reading Test 3 & 4)、
 *                        ieltsextremes (Cambridge 15 Reading Test 4 answers)
 *   写作题目 — engnovate / ieltsworldly / ieltszone (Cambridge IELTS 15 Writing Test 3 & 4)
 *   口语话题 — ieltspracticeonline / babarenglish / engnovate (Cambridge 15 Speaking Test 3 & 4)
 *
 * 注意：
 *   - 原文（听力脚本、阅读篇章）、题目与答案键为剑桥雅思考题内容（版权属 Cambridge University Press）。
 *   - 写作 modelAnswer 与口语 "参考回答" 均为学习用示例文本（非官方范文），仅供参考。
 * 本文件须放在所有数据文件（data.js / data-extra*.js / reading-passages*.js / listening-scripts*.js）之后、app.js 之前加载。
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

  // ======================================================================
  // ====================== 剑15 Test 3 （真实） ==========================
  // ======================================================================
  (function () {
    var test = findTest(3);
    if (!test) return;

    // ----------------------- 听力 -----------------------
    test.listening.sections = [
      {
        part: 'Part 1',
        context: 'Joe 到职业介绍所（Sally）咨询两份工作：北伦敦行政助理与南伦敦仓库助理',
        type: '笔记填空（每空一词或一数字）',
        questions: [
          { q: 'First job: administrative assistant in a company that produces ___ (North London).', a: 'furniture' },
          { q: 'Responsibilities: go to ___ and take notes.', a: 'meetings' },
          { q: 'Responsibilities: management of ___ .', a: 'diary' },
          { q: 'Requirements: attention to ___ .', a: 'detail(s)' },
          { q: 'Need a minimum of ___ of experience of teleconferencing.', a: 'one year' },
          { q: 'Second job (warehouse): managing ___ .', a: 'deliveries' },
          { q: 'Second job: very organised and ___ .', a: 'tidy' },
          { q: 'Used to working in a ___ .', a: 'team' },
          { q: 'Able to cope with items that are ___ .', a: 'heavy' },
          { q: 'Need experience of ___ service.', a: 'customer' }
        ]
      },
      {
        part: 'Part 2',
        context: 'Alice Riches 介绍 Street Play Scheme（Beechwood Road 街道游戏计划）及 King Street 限行实验',
        type: '选择题 + 多选题',
        questions: [
          { q: 'When did the Street Play Scheme first take place?', a: 'B' },
          { q: 'How often is Beechwood Road closed to traffic now?', a: 'A' },
          { q: 'Who is responsible for closing the road?', a: 'C' },
          { q: 'Residents who want to use their cars must:', a: 'B' },
          { q: 'Alice says Street Play Schemes are most needed in:', a: 'C' },
          { q: 'Reaction of residents who are not parents:', a: 'B' },
          { q: 'Which TWO benefits for children does Alice think are most important?', a: 'B, D' },
          { q: 'Which TWO results of the King Street experiment surprised Alice?', a: 'A, E' }
        ]
      },
      {
        part: 'Part 3',
        context: 'Hazel 向 Tom 请教媒体研究作业：对比不同报纸对同一事件的报道',
        type: '笔记填空（每空一词） + 匹配',
        questions: [
          { q: 'What ___ the item is on.', a: 'page' },
          { q: 'The ___ of the item, including the headline.', a: 'size' },
          { q: 'Any ___ accompanying the item.', a: 'graphic(s)' },
          { q: 'The ___ of the item, e.g. what is made prominent.', a: 'structure' },
          { q: 'The writer’s main ___ .', a: 'purpose' },
          { q: 'The ___ the writer may make about the reader.', a: 'assumption(s)' },
          { q: 'National news item — will she look for one?', a: 'A' },
          { q: 'Editorial — will she look for one?', a: 'C' },
          { q: 'Human interest — will she look for one?', a: 'C' },
          { q: 'Arts — will she look for one?', a: 'B' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于人类保持清洁的早期历史的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'Water was used to wash off ___ .', a: 'mud' },
          { q: 'Soap-like material found in ___ cylinders.', a: 'clay' },
          { q: 'Strigil – a scraper made of ___ .', a: 'metal' },
          { q: 'Ancient Germans/Gauls used soap to colour their ___ .', a: 'hair' },
          { q: 'Water carried to Roman ___ by aqueducts.', a: 'bath(s)' },
          { q: 'Decline in bathing contributed to occurrence of ___ .', a: 'disease(s)' },
          { q: '___ began to be added to soap.', a: 'perfume' },
          { q: 'Leblanc invented a way of making soda ash from ___ .', a: 'salt' },
          { q: 'Chevreul turned soapmaking into a ___ .', a: 'science' },
          { q: 'From the 1800s, there was no longer a ___ on soap.', a: 'tax' }
        ]
      }
    ];

    // ----------------------- 阅读 -----------------------
    test.reading.passages = [
      {
        title: 'Passage 1: Henry Moore (1898–1986)',
        difficulty: '中等',
        summary: '英国雕塑家 Henry Moore 的生平与艺术风格演变，从早期受古典训练到受原始艺术影响，再到战后回归人本主题。',
        questions: [
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'On leaving school, Moore did what his father wanted him to do.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Moore began studying sculpture in his first term at the Leeds School of Art.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'When Moore started at the Royal College of Art, its reputation for teaching sculpture was excellent.', a: 'NOT GIVEN' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Moore became aware of ancient sculpture as a result of visiting London museums.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'The Trocadero Museum’s Mayan sculpture attracted a lot of public interest.', a: 'NOT GIVEN' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Moore thought the Mayan sculpture was similar in certain respects to other stone sculptures.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'The artists who belonged to Unit One wanted to make modern art and architecture more popular.', a: 'TRUE' },
          { type: '笔记填空（每空一词）', q: 'Moore is urged to offer his ___ and leave the Royal College.', a: 'resignation' },
          { type: '笔记填空（每空一词）', q: 'Moore turns to drawing because ___ for sculpting are not readily available.', a: 'materials' },
          { type: '笔记填空（每空一词）', q: 'While visiting his hometown, Moore does some drawings of ___ .', a: 'miners' },
          { type: '笔记填空（每空一词）', q: 'Moore is employed to produce a sculpture of a ___ .', a: 'family' },
          { type: '笔记填空（每空一词）', q: '___ start to buy Moore’s work.', a: 'collectors' },
          { type: '笔记填空（每空一词）', q: 'Moore’s increased ___ makes it possible for him to do more ambitious sculptures.', a: 'income' }
        ]
      },
      {
        title: 'Passage 2: The Desolenator: producing clean water',
        difficulty: '中偏难',
        summary: 'William Janssen 受东南亚太阳能热水器启发，发明便携式太阳能海水淡化装置 Desolenator，并介绍其原理、市场与环保使命。',
        questions: [
          { type: '段落标题匹配（选标题字母）', q: 'Paragraph A', a: 'iii. From initial inspiration to new product' },
          { type: '段落标题匹配（选标题字母）', q: 'Paragraph B', a: 'vi. Cleaning water from a range of sources' },
          { type: '段落标题匹配（选标题字母）', q: 'Paragraph C', a: 'v. What makes the device different from alternatives' },
          { type: '段落标题匹配（选标题字母）', q: 'Paragraph D', a: 'x. The number of people affected by water shortages' },
          { type: '段落标题匹配（选标题字母）', q: 'Paragraph E', a: 'iv. The range of potential customers for the device' },
          { type: '段落标题匹配（选标题字母）', q: 'Paragraph F', a: 'viii. Profit not the primary goal' },
          { type: '段落标题匹配（选标题字母）', q: 'Paragraph G', a: 'i. Getting the finance for production' },
          { type: '句子填空（每空一词）', q: 'The device has two ___ for easy transport.', a: 'wheels' },
          { type: '句子填空（每空一词）', q: 'A thin ___ of water flows over a solar panel.', a: 'film' },
          { type: '句子填空（每空一词）', q: 'Particles in the water are caught in a ___ .', a: 'filter' },
          { type: '句子填空（每空一词）', q: 'All types of ___ come out through the other tube.', a: 'waste' },
          { type: '句子填空（每空一词）', q: 'A screen displays the ___ of the device.', a: 'performance' },
          { type: '句子填空（每空一词）', q: 'Information is transmitted to the company so it knows when servicing is required.', a: 'servicing' }
        ]
      },
      {
        title: 'Passage 3: Why fairy tales are really scary tales',
        difficulty: '难',
        summary: '人类学家 Jamie Tehrani 借用系统发生分析研究童话（以小红帽为例）的演变，发现恐怖元素而非道德训诫最易被保留。',
        questions: [
          { type: '选择题（单选）', q: 'What is true about details of the plot in fairy tales across cultures?', a: 'C' },
          { type: '选择题（单选）', q: 'What does Tehrani reject about the usefulness of fairy tales?', a: 'B' },
          { type: '选择题（单选）', q: 'What does the writer say about theories of fairy tales’ social significance?', a: 'F' },
          { type: '选择题（单选）', q: 'How may insights into fairy-tale development be gained?', a: 'A' },
          { type: '选择题（单选）', q: 'What is true about all the fairy tales analysed by Tehrani?', a: 'E' },
          { type: '句子填空（每空一词）', q: 'Tehrani established that ___ existed among the 58 stories.', a: 'links' },
          { type: '句子填空（每空一词）', q: 'He explored which elements showed the fewest ___ .', a: 'variations' },
          { type: '句子填空（每空一词）', q: 'Some ___ included in a story tended to change.', a: 'events' },
          { type: '句子填空（每空一词）', q: 'Elements that provide a sort of ___ were unimportant.', a: 'warning' },
          { type: '句子填空（每空一词）', q: 'What was most important in a story’s survival was ___ .', a: 'horror' },
          { type: '选择题（单选）', q: 'What method did Tehrani use to test his ideas about fairy tales?', a: 'B' },
          { type: '选择题（单选）', q: 'When discussing Tehrani’s views, what does Jack Zipes suggest?', a: 'D' },
          { type: '选择题（单选）', q: 'Why does Tehrani refer to Chinese and Japanese fairy tales?', a: 'A' },
          { type: '选择题（单选）', q: 'What does Mathias Clasen believe about fairy tales?', a: 'A' }
        ]
      }
    ];

    // 阅读 Passage 1 原文（真实）
    test.reading.passages[0].text = `Henry Moore (1898–1986)
The British sculptor Henry Moore was a leading figure in the 20th-century art world

Henry Moore was born in Castleford, a small town near Leeds in the north of England. He was the seventh child of Raymond Moore and his wife Mary Baker. He studied at Castleford Grammar School from 1909 to 1915, where his early interest in art was encouraged by his teacher Alice Gostick. After leaving school, Moore hoped to become a sculptor, but instead he complied with his father's wish that he train as a schoolteacher. He had to abandon his training in 1917 when he was sent to France to fight in the First World War.

After the war, Moore enrolled at the Leeds School of Art, where he studied for two years. In his first year, he spent most of his time drawing. Although he wanted to study sculpture, no teacher was appointed until his second year. At the end of that year, he passed the sculpture examination and was awarded a scholarship to the Royal College of Art in London. In September 1921, he moved to London and began three years of advanced study in sculpture.

Alongside the instruction he received at the Royal College, Moore visited many of the London museums, particularly the British Museum, which had a wide-ranging collection of ancient sculpture. During these visits, he discovered the power and beauty of ancient Egyptian and African sculpture. As he became increasingly interested in these 'primitive' forms of art, he turned away from European sculptural traditions.

After graduating, Moore spent the first six months of 1925 travelling in France. When he visited the Trocadero Museum in Paris, he was impressed by a cast of a Mayan sculpture of the rain spirit. It was a male reclining figure with its knees drawn up together, and its head at a right angle to its body. Moore became fascinated with this stone sculpture, which he thought had a power and originality that no other stone sculpture possessed. He himself started carving a variety of subjects in stone, including depiction of reclining women, mother-and-child groups, and masks.

Moore's exceptional talent soon gained recognition, and in 1926 he started work as a sculpture instructor at the Royal College. In 1933, he became a member of a group of young artists called Unit One. The aim of the group was to convince the English public of the merits of the emerging international movement in modern art and architecture.

Around this time, Moore moved away from the human figure to experiment with abstract shapes. In 1931, he held an exhibition at the Leicester Galleries in London. His work was enthusiastically welcomed by fellow sculptors, but the reviews in the press were extremely negative and turned Moore into a notorious figure. There were calls for his resignation from the Royal College, and the following year, when his contract expired, he left to start a sculpture department at the Chelsea School of Art in London.

Throughout the 1930s, Moore did not show any inclination to please the British public. He became interested in the paintings of the Spanish artist Pablo Picasso, whose work inspired him to distort the human body in a radical way. At times, he seemed to abandon the human figure altogether. The pages of his sketchbooks from this period show his ideas for abstract sculptures that bore little resemblance to the human form.

In 1940, during the Second World War, Moore stopped teaching at the Chelsea School and moved to a farmhouse about 20 miles north of London. A shortage of materials forced him to focus on drawing. He did numerous small sketches of Londoners, later turning these ideas into large coloured drawings in his studio. In 1942, he returned to Castleford to make a series of sketches of the miners who worked there.

In 1944, Harlow, a town near London, offered Moore a commission for a sculpture depicting a family. The resulting work signifies a dramatic change in Moore's style, away from the experimentation of the 1930s towards a more natural and humanistic subject matter. He did dozens of studies in clay for the sculpture, and these were cast in bronze and issued in editions of seven to nine copies each. In this way, Moore's work became available to collectors all over the world. The boost to his income enabled him to take on ambitious projects and start working on the scale he felt his sculpture demanded.

Critics who had begun to think that Moore had become less revolutionary were proven wrong by the appearance, in 1950, of the first of Moore's series of standing figures in bronze, with their harsh and angular pierced forms and distinct impression of menace. Moore also varied his subject matter in the 1950s with such works as Warrior with Shield and Falling Warrior. These were rare examples of Moore's use of the male figure and owe something to his visit to Greece in 1951, when he had the opportunity to study ancient works of art.

In his final years, Moore created the Henry Moore Foundation to promote art appreciation and to display his work. Moore was the first modern English sculptor to achieve international critical acclaim and he is still regarded as one of the most important sculptors of the 20th century.`;

    // 阅读 Passage 2 原文（真实）
    test.reading.passages[1].text = `The Desolenator: producing clean water

A
Travelling around Thailand in the 1990s, William Janssen was impressed with the basic rooftop solar heating systems that were on many homes, where energy from the sun was absorbed by a plate and then used to heat water for domestic use. Two decades later Janssen developed that basic idea he saw in Southeast Asia into a portable device that uses the power from the sun to purify water.

B
The Desolenator operates as a mobile desalination unit that can take water from different places, such as the sea, rivers, boreholes and rain, and purify it for human consumption. It is particularly valuable in regions where natural groundwater reserves have been polluted, or where seawater is the only water source available. Janssen saw that there was a need for a sustainable way to clean water in both the developing and the developed countries when he moved to the United Arab Emirates and saw large-scale water processing. 'I was confronted with the enormous carbon footprint that the Gulf nations have because of all of the desalination that they do,' he says.

C
The Desolenator can produce 15 litres of drinking water per day, enough to sustain a family for cooking and drinking. Its main selling point is that unlike standard desalination techniques, it doesn't require a generated power supply: just sunlight. It measures 120 cm by 90 cm, and it is easy to transport, thanks to its two wheels. Water enters through a pipe, and flows as a thin film between a sheet of double glazing and the surface of a solar panel, where it is heated by the sun. The warm water flows into a small boiler (heated by a solar-powered battery) where it is converted to steam. When the steam cools, it becomes distilled water. The device has a very simple filter to trap particles, and this can easily be shaken to remove them. There are two tubes for liquid coming out: one for the waste – salt from seawater, fluoride, etc. – and another for the distilled water. The performance of the unit is shown on an LCD screen and transmitted to the company which provides servicing when necessary.

D
A recent analysis found that at least two-thirds of the world's population lives with severe water scarcity for at least a month every year. Janssen says that by 2030 half of the world's population will be living with water stress – where the demand exceeds the supply over a certain period of time. 'It is really important that a sustainable solution is brought to the market that is able to help these people,' he says. Many countries 'don't have the money for desalination plants, which are very expensive to build. They don't have the money to operate them, they are very maintenance intensive, and they don't have the money to buy the diesel to run the desalination plants, so it is a really bad situation.'

E
The device is aimed at a wide variety of users – from homeowners in the developing world who do not have a constant supply of water to people living off the grid in rural parts of the US. The first commercial versions of the Desolenator are expected to be in operation in India early next year, after field tests are carried out. The market for the self-sufficient devices in developing countries is twofold – those who cannot afford the money for the device outright and pay through microfinance, and middle-income homes that can lease their own equipment. 'People in India don't pay for a fridge outright; they pay for it over six months. They would put the Desolenator on their roof and hook it up to their municipal supply and they would get very reliable drinking water on a daily basis,' Janssen says. In the developed world, it is aimed at niche markets where tap water is unavailable – for camping, on boats, or for the military, for instance.

F
Prices will vary according to where it is bought. In the developing world, the price will depend on what deal aid organisations can negotiate. In developed countries, it is likely to come in at $1,000 (£685) a unit, said Janssen. 'We are a venture with a social mission. We are aware that the product we have envisioned is mainly finding application in the developing world and humanitarian sector and that this is the way we will proceed. We do realise, though, that to be a viable company there is a bottom line to keep in mind,' he says.

G
The company itself is based at Imperial College London, although Janssen, its chief executive, still lives in the UAE. It has raised £340,000 in funding so far. Within two years, he says, the company aims to be selling 1,000 units a month, mainly in the humanitarian field. They are expected to be sold in areas such as Australia, northern Chile, Peru, Texas and California.`;

    // 阅读 Passage 3 原文（真实）
    test.reading.passages[2].text = `Why fairy tales are really scary tales
Some people think that fairy tales are just stories to amuse children, but their universal and enduring appeal may be due to more serious reasons

People of every culture tell each other fairy tales but the same story often takes a variety of forms in different parts of the world. In the story of Little Red Riding Hood that European children are familiar with, a young girl on the way to see her grandmother meets a wolf and tells him where she is going. The wolf runs on ahead and disposes of the grandmother, then gets into bed dressed in the grandmother's clothes to wait for Little Red Riding Hood. You may think you know the story – but which version? In some versions, the wolf swallows up the grandmother, while in others it locks her in a cupboard. In some stories Red Riding Hood gets the better of the wolf on her own, while in others a hunter or a woodcutter hears her cries and comes to her rescue.

The universal appeal of these tales is frequently attributed to the idea that they contain cautionary messages: in the case of Little Red Riding Hood, to listen to your mother, and avoid talking to strangers. 'It might be what we find interesting about this story is that it's got this survival-relevant information in it,' says anthropologist Jamie Tehrani at Durham University in the UK. But his research suggests otherwise. 'We have this huge gap in our knowledge about the history and prehistory of storytelling, despite the fact that we know this genre is an incredibly ancient one,' he says. That hasn't stopped anthropologists, folklorists and other academics devising theories to explain the importance of fairy tales in human society. Now Tehrani has found a way to test these ideas, borrowing a technique from evolutionary biologists.

To work out the evolutionary history, development and relationships among groups of organisms, biologists compare the characteristics of living species in a process called 'phylogenetic analysis'. Tehrani has used the same approach to compare related versions of fairy tales to discover how they have evolved and which elements have survived longest.

Tehrani's analysis focused on Little Red Riding Hood in its many forms, which include another Western fairy tale known as The Wolf and the Kids. Checking for variants of these two tales and similar stories from Africa, East Asia and other regions, he ended up with 58 stories recorded from oral traditions. Once his phylogenetic analysis had established that they were indeed related, he used the same methods to explore how they have developed and altered over time.

First he tested some assumptions about which aspects of the story alter least as it evolves, indicating their importance. Folklorists believe that what happens in a story is more central to the story than the characters in it – that visiting a relative, only to be met by a scary animal in disguise, is more fundamental than whether the visitor is a little girl or three siblings, or the animal is a tiger instead of a wolf.

However, Tehrani found no significant difference in the rate of evolution of incidents compared with that of characters. 'Certain episodes are very stable because they are crucial to the story, but there are lots of other details that can evolve quite freely,' he says. Neither did his analysis support the theory that the central section of a story is the most conserved part. He found no significant difference in the flexibility of events there compared with the beginning or the end.

But the really big surprise came when he looked at the cautionary elements of the story. 'Studies on hunter-gatherer folk tales suggest that these narratives include really important information about the environment and the possible dangers that may be faced there – stuff that's relevant to survival,' he says. Yet in his analysis such elements were just as flexible as seemingly trivial details. What, then, is important enough to be reproduced from generation to generation?

The answer, it would appear, is fear – blood-thirsty and gruesome aspects of the story, such as the eating of the grandmother by the wolf, turned out to be the best preserved of all. Why are these details retained by generations of storytellers, when other features are not? Tehrani has an idea: 'In an oral context, a story won't survive because of one great teller. It also needs to be interesting when it's told by someone who's not necessarily a great storyteller.' Maybe being swallowed whole by a wolf, then cut out of its stomach alive is so gripping that it helps the story remain popular, no matter how badly it's told.

Jack Zipes at the University of Minnesota, Minneapolis, is unconvinced by Tehrani's views on fairy tales. 'Even if they're gruesome, they won't stick unless they matter,' he says. He believes the perennial theme of women as victims in stories like Little Red Riding Hood explains why they continue to feel relevant. But Tehrani points out that although this is often the case in Western versions, it is not always true elsewhere. In Chinese and Japanese versions, often known as The Tiger Grandmother, the villain is a woman, and in both Iran and Nigeria, the victim is a boy.

Mathias Clasen at Aarhus University in Denmark isn't surprised by Tehrani's findings. 'Habits and morals change, but the things that scare us, and the fact that we seek out entertainment that's designed to scare us – those are constant,' he says. Clasen believes that scary stories teach us what it feels like to be afraid without having to experience real danger, and so build up resistance to negative emotions.`;

    // ----------------------- 写作 -----------------------
    test.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '流程图/示意图描述 - 方便面生产过程',
        prompt: `The diagram below shows how instant noodles are manufactured.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
        modelAnswer: `The diagram illustrates the stages involved in the manufacture of instant noodles, from the preparation of the raw ingredients to the final packaged product.

Overall, the process consists of eight main steps. It begins with the storage of flour in silos and ends with the labelling and sealing of the finished cups or packets. The two most distinctive stages are the steaming and the drying in oil, which give instant noodles their characteristic texture and long shelf life.

In the first stage, flour is transported from the silos to a mixer, where it is combined with water and oil to form a dough. This dough is then rolled into a flat sheet by a rolling machine, before being cut into thin strips by a series of blades. The strips of dough are next moulded into the familiar noodle shape using a noodle disc.

After shaping, the noodles are cooked in steam for a short period and then dried by being dipped in oil. Following this, the dried noodles are placed into cups, to which vegetables and spices are added. In the final stage, the cups are labelled and sealed, making the product ready for distribution and sale.

In summary, instant noodle production is a largely automated industrial process that transforms simple ingredients into a convenient, long-lasting food product.`,
        tips: '按时间顺序概述8个步骤；突出蒸煮与油炸两道关键工序；用被动语态与顺序连接词；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（讨论双方观点）',
        prompt: `Some people say that advertising is extremely successful at persuading us to buy things. Other people think that advertising is so common that we no longer pay attention to it.

Discuss both these views and give your own opinion.

Write at least 250 words.`,
        modelAnswer: `Advertising is everywhere in modern life, and opinions differ as to how effective it really is. Some argue that it remains a powerful tool of persuasion, while others believe that people have become so used to it that they simply ignore it. This essay will examine both views and offer my own opinion.

On the one hand, advertising can be highly effective. Companies spend huge sums on carefully designed campaigns because they clearly work: catchy slogans, attractive images and celebrity endorsements can create desires that consumers did not know they had. Moreover, repeated exposure to a brand builds familiarity and trust, which often translates into sales. For this reason, it is reasonable to say that advertising still persuades many people to buy.

On the other hand, it is true that we are surrounded by advertisements on television, the internet and in public spaces. Because we see so many every day, a great deal of advertising may fade into the background and go unnoticed. People have also learned to skip ads, use ad-blockers, or simply distrust exaggerated claims. In this sense, the sheer volume of advertising may reduce its impact.

In my view, both positions contain truth, but advertising is still influential overall. Even if individuals ignore particular adverts, the cumulative effect of constant exposure shapes habits and social norms. However, the most successful advertising today is subtle and personalised rather than loud and obvious.

In conclusion, while over-exposure has made some advertising less noticeable, it remains a successful means of persuasion, especially when it is well targeted.`,
        tips: '讨论双方各写一段并举例；结尾给出明确个人立场；用词准确、连接自然；至少250词'
      }
    ];

    // ----------------------- 口语 -----------------------
    test.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Swimming（游泳）',
        questions: [
          { q: 'Did you learn to swim when you were a child? Why/Why not?', a: '参考回答: Yes, I did. My parents believed swimming was an essential safety skill, so they enrolled me in lessons at a local pool when I was young.' },
          { q: 'How often do you go swimming now? Why/Why not?', a: '参考回答: I try to go about once a week. It’s a great full-body workout and helps me relax, though I’m sometimes too busy with work.' },
          { q: 'What places are there for swimming where you live? Why?', a: '参考回答: There are several public swimming pools and a lake not far away. The indoor pools are convenient all year, while the lake is nice in summer.' },
          { q: 'Do you think it would be more enjoyable to go swimming outdoors or at an indoor pool? Why?', a: '参考回答: I prefer indoor pools because they’re clean and weather-proof, but swimming outdoors in a lake on a sunny day can feel more relaxing and close to nature.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: `Describe a famous business person that you know about.

You should say:
– who this person is
– what kind of business this person is involved in
– what you know about this business person
– and explain what you think of this business person.`,
        modelAnswer: `参考回答:

I’d like to talk about a famous business person I admire: Elon Musk. He is the CEO of several companies, most notably Tesla, which makes electric cars, and SpaceX, a company focused on space exploration.

What I know about him is that he started with online businesses before moving into areas that many thought impossible. Tesla has pushed electric vehicles into the mainstream, and SpaceX has developed reusable rockets, which was long considered unachievable. He is known for setting extremely ambitious goals, such as making space travel affordable and speeding up the switch to sustainable energy.

I think highly of him because he combines vision with determination. Rather than following safe, short-term trends, he invests in ideas that could benefit society in the long run, like clean energy and cheaper access to space. Of course, he is a controversial figure and not everyone agrees with his style, but I respect his willingness to take risks.

In short, I see him as a bold innovator who has changed several industries, and that is why he stands out to me as a remarkable business person.`,
        tips: '覆盖四个要点：人物、行业、所知、评价；用过去/现在时混合；加入具体例子与感受；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：名人现象',
        questions: [
          { q: 'What kinds of people are most famous in your country today?', a: '参考回答: I think celebrities, athletes and social-media influencers are the most famous now. Many gain attention through TV, films or platforms like Instagram rather than through traditional achievements.' },
          { q: 'Why are there so many stories about famous people in the news?', a: '参考回答: People are naturally curious about others’ lives, and the media know such stories attract readers and viewers, so they publish them to sell papers and gain clicks.' },
          { q: 'Do you agree or disagree that many young people today want to be famous?', a: '参考回答: I agree. Social media makes fame seem achievable, and many young people hope to become known for their talents or simply for their online presence.' },
          { q: 'Do you think it is easy for famous people to earn a lot of money?', a: '参考回答: Often yes, because they can earn from endorsements, concerts or sponsorship. But it usually requires constant work to stay popular and keep earning.' },
          { q: 'Why might famous people enjoy having fans?', a: '参考回答: Fans give them a sense of validation and support, and a loyal fan base also helps their career and income through ticket and product sales.' },
          { q: 'In what ways could famous people use their influence to do good things?', a: '参考回答: They can raise awareness of important issues, support charities, and set positive examples that encourage young people to act responsibly.' }
        ]
      }
    ];

    // ----------------------- 听力原文脚本（真实） -----------------------
    if (typeof LISTENING_SCRIPTS !== 'undefined') {
      LISTENING_SCRIPTS['15-3-0'] = `SALLY: Good morning. Thanks for coming in to see us here at the agency, Joe. I'm one of the agency representatives, and my name's Sally Baker.

JOE: Hi Sally. I think we spoke on the phone, didn't we?

SALLY: That's right, we did. So thank you for sending in your CV. We've had quite a careful look at it and I think we have two jobs that might be suitable for you.

JOE: OK.

SALLY: The first one is in a company based in North London. They're looking for an administrative assistant.

JOE: OK. What sort of company is it?

SALLY: They're called Home Solutions and they design and make furniture.

JOE: Oh, I don't know much about that, but it sounds interesting.

SALLY: Yes, well as I said, they want someone in their office, and looking at your past experience it does look as if you fit quite a few of the requirements. So on your CV it appears you've done some data entry?

JOE: Yes.

SALLY: So that's one skill they want. Then they expect the person they appoint to attend meetings and take notes there ...

JOE: OK. I've done that before, yes.

SALLY: And you'd need to be able to cope with general admin.

JOE: Filing, and keeping records and so on? That should be OK. And in my last job I also had to manage the diary.

SALLY: Excellent. That's something they want here too. I'd suggest you add it to your CV – I don't think you mentioned that, did you?

JOE: No.

SALLY: So as far as the requirements go, they want good computer skills, of course, and they particularly mention spreadsheets.

JOE: That should be fine.

SALLY: And interpersonal skills – which would be something they'd check with your references.

JOE: I think that should be OK, yes.

SALLY: Then they mention that they want someone who is careful and takes care with details – just looking at your CV, I'd say you're probably alright there.

JOE: I think so, yes. Do they want any special experience?

SALLY: I think they wanted some experience of teleconferencing.

JOE: I've got three years' experience of that.

SALLY: Let's see, yes, good. In fact they're only asking for at least one year, so that's great. So is that something that might interest you?

JOE: It is, yes. The only thing is, you said they were in North London so it would be quite a long commute for me.

SALLY: OK.

SALLY: So the second position might suit you better as far as the location goes; that's for a warehouse assistant and that's in South London.

JOE: Yes, that would be a lot closer.

SALLY: And you've worked in a warehouse before, haven't you?

JOE: Yes.

SALLY: So as far as the responsibilities for this position go, they want someone who can manage the stock, obviously, and also deliveries.

JOE: That should be OK. You've got to keep track of stuff, but I've always been quite good with numbers.

SALLY: Good, that's their first requirement. And they want someone who's computer literate, which we know you are.

JOE: Sure.

SALLY: Then they mention organisational skills. They want someone who's well organised.

JOE: Yes, I think I am.

SALLY: And tidy?

JOE: Yes, they go together really, don't they?

SALLY: Sure. Then the usual stuff; they want someone who can communicate well both orally and in writing.

JOE: OK. And for the last warehouse job I had, one of the things I enjoyed most was being part of a team. I found that was really essential for the job.

SALLY: Excellent. Yes, they do mention that they want someone who's used to that, yes. Now when you were working in a warehouse last time, what sorts of items were you dealing with?

JOE: It was mostly bathroom and kitchen equipment, sinks and stoves and fridges.

SALLY: So you're OK moving heavy things?

JOE: Sure. I'm quite strong, and I've had the training.

SALLY: Good. Now as far as experience goes, they mention they want someone with a licence, and that you have experience of driving in London – so you can cope with the traffic and so on.

JOE: Yes, no problem.

SALLY: And you've got experience of warehouse work ... and the final thing they mention is customer service. I think looking at your CV you're OK there.

JOE: Right. So what about pay? Can you tell me a bit more about that, please ...`;

      LISTENING_SCRIPTS['15-3-1'] = `PRESENTER: My guest on the show today is Alice Riches who started the Street Play Scheme where she lives in Beechwood Road. For those of you that don't already know – Street Play involves local residents closing off their street for a few hours so that children have a chance to play in the street safely. She started it in her own street, Beechwood Road, and the idea caught on, and there are now Street Play Schemes all over the city. So when did you actually start the scheme, Alice?

ALICE: Well, I first had the idea when my oldest child was still a toddler, so that's about six years ago now – but it took at least two years of campaigning before we were actually able to make it happen. So the scheme's been up and running for three years now. We'd love to be able to close our road for longer – for the whole weekend, from Saturday morning until Sunday evening, for example. At the moment it's just once a week. But when we started it was only once a month. But we're working on it.

PRESENTER: So what actually happens when Beechwood Road is closed?

ALICE: We have volunteer wardens, mostly parents but some elderly residents too, who block off our road at either end. The council have provided special signs but there's always a volunteer there to explain what's happening to any motorists. Generally, they're fine about it – we've only had to get the police involved once or twice.

Now I should explain that the road isn't completely closed to cars. But only residents' cars are allowed. If people really need to get in or out of Beechwood Road, it's not a problem – as long as they drive at under 20 kilometres per hour. But most people just decide not to use their cars during this time, or they park in another street. The wardens are only there to stop through traffic.

PRESENTER: So can anyone apply to get involved in Street Play?

ALICE: Absolutely – we want to include all kids in the city – especially those who live on busy roads. It's here that demand is greatest. Obviously, there isn't such demand in wealthier areas where the children have access to parks or large gardens – or in the suburbs where there are usually more places for children to play outside.

I'd recommend that anyone listening who likes the idea should just give it a go. We've been surprised by the positive reaction of residents all over the city. And that's not just parents. There are always a few who complain but they're a tiny minority. On the whole everyone is very supportive and say they're very happy to see children out on the street – even if it does get quite noisy.

ALICE: There have been so many benefits of Street Play for the kids. Parents really like the fact that the kids are getting fresh air instead of sitting staring at a computer screen, even if they're not doing anything particularly energetic. And of course it's great that kids can play with their friends outside without being supervised by their parents – but for me the biggest advantage is that kids develop confidence in themselves to be outside without their parents. The other really fantastic thing is that children get to know the adults in the street – it's like having a big extended family.

PRESENTER: It certainly does have a lot of benefits. I want to move on now and ask you about a related project in King Street.

ALICE: Right. Well this was an experiment I was involved in where local residents decided to try and reduce the traffic along King Street, which is the busiest main road in our area, by persuading people not to use their cars for one day. We thought about making people pay more for parking – but we decided that would be really unpopular – so instead we just stopped people from parking on King Street but left the other car parks open.

It was surprising how much of a difference all this made. As we'd predicted, air quality was significantly better but what I hadn't expected was how much quieter it would be – even with the buses still running. Of course everyone said they felt safer but we were actually amazed that sales in the shops went up considerably that day – we thought there'd be fewer people out shopping – not more.

PRESENTER: That's really interesting so the fact that ...`;

      LISTENING_SCRIPTS['15-3-2'] = `HAZEL: Tom, could I ask you for some advice, please?

TOM: Yes of course, if you think I can help. What's it about?

HAZEL: It's my first media studies assignment, and I'm not sure how to go about it. You must have done it last year.

TOM: Is that the one comparing the coverage of a particular story in a range of newspapers?

HAZEL: That's right.

TOM: Oh yes, I really enjoyed writing it.

HAZEL: So what sort of things do I need to compare?

TOM: Well, there are several things. For example, there's the question of which page of the newspaper the item appears on.

HAZEL: You mean, because there's a big difference between having it on the front page and the bottom of page ten, for instance?

TOM: Exactly. And that shows how important the editor thinks the story is. Then there's the size – how many column inches the story is given, how many columns it spreads over.

HAZEL: And I suppose that includes the headline.

TOM: It certainly does. It's all part of attracting the reader's attention.

HAZEL: What about graphics – whether there's anything visual in addition to the text?

TOM: Yes, you need to consider those, too, because they can have a big effect on the reader's understanding of the story – sometimes a bigger effect than the text itself. Then you'll need to look at how the item is put together: what structure is it given? Bear in mind that not many people read beyond the first paragraph, so what has the journalist put at the beginning? And if, say, three are conflicting opinions about something, does one appear near the end, where people probably won't read it?

HAZEL: And newspapers sometimes give wrong or misleading information, don't they? Either deliberately or by accident. Should I be looking at that, too?

TOM: Yes, if you can. Compare what's in different versions, and as far as possible, try and work out what's true and what isn't. And that relates to a very important point: what's the writer's purpose, or at least the most important one, if they have several. It may seem to be to inform the public, but often it's that they want to create fear, or controversy, or to make somebody look ridiculous.

HAZEL: Gosh, I see what you mean. And I suppose the writer may make assumptions about the reader.

TOM: That's right – about their knowledge of the subject, their attitudes, and their level of education, which means writing so that the readers understand without feeling patronised. All of that will make a difference to how the story is presented.

HAZEL: Does it matter what type of story I write about?

TOM: No – national or international politics, the arts ... Anything, as long as it's covered in two or three newspapers. Though of course it'll be easier and more fun if it's something you're interested in and know something about.

HAZEL: And on that basis a national news item would be worth analysing – I'm quite keen on politics, so I'll try and find a suitable topic. What did you choose for your analysis, Tom?

TOM: I was interested in how newspapers express their opinions explicitly, so I wanted to compare editorials in different papers, but when I started looking, I couldn't find two on the same topic that I felt like analysing.

HAZEL: In that case, I won't even bother to look.

TOM: So in the end I chose a human interest story – a terribly emotional story about a young girl who was very ill, and lots of other people – mostly strangers – raised money so she could go abroad for treatment. Actually, I was surprised – some papers just wrote about how wonderful everyone was, but others considered the broader picture, like why treatment wasn't available here.

HAZEL: Hmm, I usually find stories like that raise quite strong feelings in me! I'll avoid that. Perhaps I'll choose an arts topic, like different reviews of a film, or something about funding for the arts – I'll think about that.

TOM: Yes, that might be interesting.

HAZEL: OK, well thanks a lot for your help, Tom. It's been really useful.

TOM: You're welcome. Good luck with the assignment, Hazel.`;

      LISTENING_SCRIPTS['15-3-3'] = `LECTURER: Nowadays, we use different products for personal cleanliness, laundry, dishwashing and household cleaning, but this is very much a 20th-century development.

The origins of cleanliness date back to prehistoric times. Since water is essential for life, the earliest people lived near water and knew something about its cleansing properties – at least that it rinsed mud off their hands.

During the excavation of ancient Babylon, evidence was found that soapmaking was known as early as 2800 BC. Archaeologists discovered cylinders made of clay, with inscriptions on them saying that fats were boiled with ashes. This is a method of making soap, though there's no reference to the purpose of this material.

The early Greeks bathed for aesthetic reasons and apparently didn't use soap. Instead, they cleaned their bodies with blocks of sand, pumice and ashes, then anointed themselves with oil, and scraped off the oil and dirt with a metal instrument known as a strigil. They also used oil mixed with ashes. Clothes were washed without soap in streams.

The ancient Germans and Gauls are also credited with discovering how to make a substance called 'soap', made of melted animal fat and ashes. They used this mixture to tint their hair red.

Soap got its name, according to an ancient Roman legend, from Mount Sapo, where animals were sacrificed, leaving deposits of animal fat. Rain washed these deposits, along with wood ashes, down into the clay soil along the River Tiber. Women found that this mixture greatly reduced the effort required to wash their clothes.

As Roman civilisation advanced, so did bathing. The first of the famous Roman baths, supplied with water from their aqueducts, was built around 312 BC. The baths were luxurious, and bathing became very popular. And by the second century AD, the Greek physician Galen recommended soap for both medicinal and cleaning purposes.

After the fall of Rome in 467 AD and the resulting decline in bathing habits, much of Europe felt the impact of filth on public health. This lack of personal cleanliness and related unsanitary living conditions were major factors in the outbreaks of disease in the Middle Ages, and especially the Black Death of the 14th century.

Nevertheless, soapmaking became an established craft in Europe, and associations of soapmakers guarded their trade secrets closely. Vegetable and animal oils were used with ashes of plants, along with perfume, apparently for the first time. Gradually more varieties of soap became available for shaving and shampooing, as well as bathing and laundering.

A major step toward large-scale commercial soapmaking occurred in 1791, when a French chemist, Nicholas Leblanc, patented a process for turning salt into soda ash, or sodium carbonate. Soda ash is the alkali obtained from ashes that combines with fat to form soap. The Leblanc process yielded quantities of good-quality, inexpensive soda ash.

Modern soapmaking was born some 20 years later, in the early 19th century, with the discovery by Michel Eugène Chevreul, another French chemist, of the chemical nature and relationship of fats, glycerine and fatty acids. His studies established the basis for both fat and soap chemistry, and soapmaking became a science. Further developments during the 19th century made it easier and cheaper to manufacture soap.

Until the 19th century, soap was regarded as a luxury item, and was heavily taxed in several countries. As it became more readily available, it became an everyday necessity, a development that was reinforced when the high tax was removed. Soap was then something ordinary people could afford, and cleanliness standards improved.

With this widespread use came the development of milder soaps for bathing and soaps for use in the washing machines that were available to consumers by the turn of the 20th century.`;
    }
    console.log('[real-15b] 剑15 Test3 已覆盖为练习题目（待与原版书核对）');
  })();

  // ======================================================================
  // ====================== 剑15 Test 4 （真实） ==========================
  // ======================================================================
  (function () {
    var test = findTest(4);
    if (!test) return;

    // ----------------------- 听力 -----------------------
    test.listening.sections = [
      {
        part: 'Part 1',
        context: '火车站顾客满意度调查：Sophie Bird 接受关于当日行程与车站设施的访问',
        type: '表格填空（每空一词或一数字）',
        questions: [
          { q: 'Occupation:', a: 'journalist' },
          { q: 'Reason for travel today:', a: 'shopping' },
          { q: 'Name of station returning to:', a: 'Staunfirth' },
          { q: 'Type of ticket purchased: Standard ___ ticket.', a: 'return' },
          { q: 'Cost of ticket: £___ .', a: '23.70' },
          { q: 'Where ticket was bought:', a: 'online' },
          { q: 'Least satisfied with: the ___ this morning.', a: 'delay' },
          { q: 'Most satisfied with: how much ___ was provided.', a: 'information' },
          { q: 'Least satisfied with: lack of seats on the ___ .', a: 'platform(s)' },
          { q: 'Neither satisfied nor dissatisfied with: the ___ available.', a: 'parking' }
        ]
      },
      {
        part: 'Part 2',
        context: '镇议会公园小组主席介绍 Croft Valley Park 近期改造（地图标注与设施说明）',
        type: '地图标注 + 多选题',
        questions: [
          { q: 'On the map, the café is at:', a: 'D' },
          { q: 'On the map, the toilets are at:', a: 'C' },
          { q: 'On the map, the formal gardens are at:', a: 'G' },
          { q: 'On the map, the outdoor gym is at:', a: 'H' },
          { q: 'On the map, the skateboard ramp is at:', a: 'A' },
          { q: 'On the map, the wild flowers are at:', a: 'E' },
          { q: 'Which TWO statements are true about the adventure playground?', a: 'A, D' },
          { q: 'Which TWO statements are true about the glass houses?', a: 'A, C' }
        ]
      },
      {
        part: 'Part 3',
        context: 'Annie 与 Jack 讨论关于 refrigeration（制冷）的课堂陈述分工',
        type: '选择题 + 匹配（谁负责研究）',
        questions: [
          { q: 'What did Annie discover from reading about icehouses?', a: 'B' },
          { q: 'What point does Annie make about refrigeration in ancient Rome?', a: 'A' },
          { q: 'In connection with modern fridges, both are worried about:', a: 'B' },
          { q: 'What do Jack and Annie agree regarding domestic fridges?', a: 'A' },
          { q: 'The goods that are refrigerated — who will research it?', a: 'A' },
          { q: 'The effects on health — who will research it?', a: 'A' },
          { q: 'The impact on food producers — who will research it?', a: 'B' },
          { q: 'The impact on cities — who will research it?', a: 'B' },
          { q: 'Refrigerated transport — who will research it?', a: 'A' },
          { q: 'Domestic fridges — who will research it?', a: 'C' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于工业革命如何改变英国人生活的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'For the first time, possessions measured Britain’s ___ .', a: 'wealth' },
          { q: 'Developments in production of goods and in ___ greatly changed lives.', a: 'technology' },
          { q: 'The Industrial Revolution needed new types of ___ .', a: 'power' },
          { q: 'The leading industry was ___ .', a: 'textiles' },
          { q: 'New ___ made factories necessary, so people moved to towns.', a: 'machines' },
          { q: 'Greater access to ___ made people aware of shop goods.', a: 'newspapers' },
          { q: 'People were not limited to buying ___ goods.', a: 'local' },
          { q: 'Better ___ inside stores increased visibility of goods.', a: 'lighting' },
          { q: 'Outside, ___ were made much bigger (plate glass).', a: 'windows' },
          { q: 'Persuasive ___ became much more common.', a: 'Advertising' }
        ]
      }
    ];

    // ----------------------- 阅读 -----------------------
    test.reading.passages = [
      {
        title: 'Passage 1: The return of the huarango',
        difficulty: '中等',
        summary: '秘鲁南部干旱山谷原生植物 huarango 树因深根保水而关键，砍伐导致荒漠化；Kew 植物园专家推动恢复与社区参与。',
        questions: [
          { type: '摘要填空（每空一词）', q: 'The huarango’s long roots bring up ___ for the tree.', a: 'water' },
          { type: '摘要填空（每空一词）', q: 'The tree was key to the ancient people’s ___ .', a: 'diet' },
          { type: '摘要填空（每空一词）', q: 'It let people survive years of ___ .', a: 'drought' },
          { type: '摘要填空（每空一词）', q: 'Without it, soil is not held in place, causing ___ .', a: 'erosion' },
          { type: '摘要填空（每空一词）', q: 'Eventually the land becomes ___ .', a: 'desert' },
          { type: '表格填空（每空一词）', q: '___ were used to make charcoal for cooking/heating.', a: 'branches' },
          { type: '表格填空（每空一词）', q: '___ were used for herbal remedies.', a: 'leaves and bark' },
          { type: '表格填空（每空一词）', q: 'The ___ was used to build houses.', a: 'trunk' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Local families told Whaley about traditional uses of huarango products.', a: 'NOT GIVEN' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Farmer Alberto Benevides is now making a good profit from huarangos.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Whaley needs farmers’ co-operation to help preserve wildlife.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'For the project to succeed, it must extend over a very large area.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Whaley plans to go to Africa to set up a similar project.', a: 'NOT GIVEN' }
        ]
      },
      {
        title: 'Passage 2: Silbo Gomero – the whistle “language” of the Canary Islands',
        difficulty: '中偏难',
        summary: '加那利群岛 La Gomera 的口哨"语言" Silbo Gomero，研究揭示其激活大脑语言区；现代通讯技术威胁其存续，已被纳入学校课程。',
        questions: [
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'La Gomera is the most mountainous of all the Canary Islands.', a: 'NOT GIVEN' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Silbo is only appropriate for short and simple messages.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'In the brain study, silbadores and non-whistlers produced different results.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'The Spanish introduced Silbo to the islands in the 15th century.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Precise data exists for all whistle languages in existence today.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Children of Gomera now learn Silbo.', a: 'TRUE' },
          { type: '笔记填空（每空一词）', q: 'Spanish ___ are recoded into high/low-frequency whistles.', a: 'words' },
          { type: '笔记填空（每空一词）', q: 'A ___ in the mouth raises the whistle’s pitch.', a: 'finger' },
          { type: '笔记填空（每空一词）', q: 'A cupped hand changes the ___ of the sound.', a: 'direction' },
          { type: '笔记填空（每空一词）', q: 'Silbadores use whistles to send short ___ .', a: 'commands' },
          { type: '笔记填空（每空一词）', q: 'Silbo was useful when ___ occurred on the island.', a: 'fires' },
          { type: '笔记填空（每空一词）', q: 'Silbo is threatened by modern ___ .', a: 'technology' },
          { type: '笔记填空（每空一词）', q: 'Locals seek a UNESCO ___ to preserve it.', a: 'award' }
        ]
      },
      {
        title: 'Passage 3: Environmental practices of big businesses',
        difficulty: '难',
        summary: '大企业破坏环境往往因短期利润最大；唯有有效政府监管与公众施压才能促成环保，公众才是最终责任方。',
        questions: [
          { type: '摘要填空（选词）', q: 'Businesses may harm others when there are no ___ to stop them.', a: 'moral standards' },
          { type: '摘要填空（选词）', q: 'Dirty firms win when there is a lack of government ___ .', a: 'control' },
          { type: '摘要填空（选词）', q: 'Clean firms win when the public shows ___ .', a: 'involvement' },
          { type: '摘要填空（选词）', q: 'Examples: unmanaged fishery (___ ) and rainforest logging.', a: 'overfishing' },
          { type: '摘要填空（选词）', q: 'Rainforest logging means destruction of ___ .', a: 'trees' },
          { type: '选择题（单选）', q: 'The third paragraph suggests environmental damage could be prevented by:', a: 'C' },
          { type: '选择题（单选）', q: 'The fourth paragraph describes ways the public can:', a: 'D' },
          { type: '选择题（单选）', q: 'In the BSE case, pressure was exerted when:', a: 'B' },
          { type: '判断题 (YES/NO/NOT GIVEN)', q: 'The public should fund good environmental practices.', a: 'YES' },
          { type: '判断题 (YES/NO/NOT GIVEN)', q: 'There is a contrast between the moral principles of different businesses.', a: 'NOT GIVEN' },
          { type: '判断题 (YES/NO/NOT GIVEN)', q: 'We must make a clear distinction between acceptable and unacceptable behaviour.', a: 'NO' },
          { type: '判断题 (YES/NO/NOT GIVEN)', q: 'The public have successfully influenced businesses in the past.', a: 'YES' },
          { type: '判断题 (YES/NO/NOT GIVEN)', q: 'In future, businesses will show more concern for the environment.', a: 'NOT GIVEN' },
          { type: '选择题（单选）', q: 'The best subheading for this passage is:', a: 'D' }
        ]
      }
    ];

    // 阅读 Passage 1 原文（真实）
    test.reading.passages[0].text = `The return of the huarango
The arid valleys of southern Peru are welcoming the return of a native plant

The south coast of Peru is a narrow, 2,000-kilometre-long strip of desert squeezed between the Andes and the Pacific Ocean. It is also one of the most fragile ecosystems on Earth. It hardly ever rains there, and the only year-round source of water is located tens of metres below the surface. This is why the huarango tree is so suited to life there: it has the longest roots of any tree in the world. They stretch down 50–80 metres and, as well as sucking up water for the tree, they bring it into the higher subsoil, creating a water source for other plant life.

Dr David Beresford-Jones, archaeobotanist at Cambridge University, has been studying the role of the huarango tree in landscape change in the Lower Ica Valley in southern Peru. He believes the huarango was key to the ancient people's diet and, because it could reach deep water sources, it allowed local people to withstand years of drought when their other crops failed. But over the centuries huarango trees were gradually replaced with crops. Cutting down native woodland leads to erosion, as there is nothing to keep the soil in place. So when the huarangos go, the land turns into a desert. Nothing grows at all in the Lower Ica Valley now.

For centuries the huarango tree was vital to the people of the neighbouring Middle Ica Valley too. They grew vegetables under it and ate products made from its seed pods. Its leaves and bark were used for herbal remedies, while its branches were used for charcoal for cooking and heating, and its trunk was used to build houses. But now it is disappearing rapidly. The majority of the huarango forests in the valley have already been cleared for fuel and agriculture – initially, these were smallholdings, but now they're huge farms producing crops for the international market.

'Of the forests that were here 1,000 years ago, 99 per cent have already gone,' says botanist Oliver Whaley from Kew Gardens in London, who, together with ethnobotanist Dr William Milliken, is running a pioneering project to protect and restore the rapidly disappearing habitat. In order to succeed, Whaley needs to get the local people on board, and that has meant overcoming local prejudices. 'Increasingly aspirational communities think that if you plant food trees in your home or street, it shows you are poor, and still need to grow your own food,' he says. In order to stop the Middle Ica Valley going the same way as the Lower Ica Valley, Whaley is encouraging locals to love the huarangos again. 'It's a process of cultural resuscitation,' he says. He has already set up a huarango festival to reinstate a sense of pride in their eco-heritage, and has helped local schoolchildren plant thousands of trees.

'In order to get people interested in habitat restoration, you need to plant a tree that is useful to them,' says Whaley. So, he has been working with local families to attempt to create a sustainable income from the huarangos by turning their products into foodstuffs. 'Boil up the beans and you get this thick brown syrup like molasses. You can also use it in drinks, soups or stews.' The pods can be ground into flour to make cakes, and the seeds roasted into a sweet, chocolatey 'coffee'. 'It's packed full of vitamins and minerals,' Whaley says.

And some farmers are already planting huarangos. Alberto Benevides, owner of Ica Valley's only certified organic farm, which Whaley helped set up, has been planting the tree for 13 years. He produces syrup and flour, and sells these products at an organic farmers' market in Lima. His farm is relatively small and doesn't yet provide him with enough to live on, but he hopes this will change. 'The organic market is growing rapidly in Peru,' Benevides says. 'I am investing in the future.'

But even if Whaley can convince the local people to fall in love with the huarango again, there is still the threat of the larger farms. Some of these cut across the forests and break up the corridors that allow the essential movement of mammals, birds and pollen up and down the narrow forest strip. In the hope of counteracting this, he's persuading farmers to let him plant forest corridors on their land. He believes the extra woodland will also benefit the farms by reducing their water usage through a lowering of evaporation and providing a refuge for bio-control insects.

'If we can record biodiversity and see how it all works, then we're in a good position to move on from there. Desert habitats can reduce down to very little,' Whaley explains. 'It's not like a rainforest that needs to have this huge expanse. Life has always been confined to corridors and islands here. If you just have a few trees left, the population can grow up quickly because it's used to exploiting water when it arrives.' He sees his project as a model that has the potential to be rolled out across other arid areas around the world. 'If we can do it here, in the most fragile system on Earth, then that's a real message of hope for lots of places, including Africa, where there is drought and they just can't afford to wait for rain.'`;

    // 阅读 Passage 2 原文（真实）
    test.reading.passages[1].text = `Silbo Gomero – the whistle 'language' of the Canary Islands

La Gomera is one of the Canary Islands situated in the Atlantic Ocean off the northwest coast of Africa. This small volcanic island is mountainous, with steep rocky slopes and deep, wooded ravines, rising to 1,487 metres at its highest peak. It is also home to the best known of the world's whistle 'languages', a means of transmitting information over long distances which is perfectly adapted to the extreme terrain of the island.

This 'language', known as 'Silbo' or 'Silbo Gomero' – from the Spanish word for 'whistle' – is now shedding light on the language-processing abilities of the human brain, according to scientists. Researchers say that Silbo activates parts of the brain normally associated with spoken language, suggesting that the brain is remarkably flexible in its ability to interpret sounds as language.

'Science has developed the idea of brain areas that are dedicated to language, and we are starting to understand the scope of signals that can be recognised as language,' says David Corina, co-author of a recent study and associate professor of psychology at the University of Washington in Seattle.

Silbo is a substitute for Spanish, with individual words recoded into whistles which have high- and low-frequency tones. A whistler – or silbador – puts a finger in his or her mouth to increase the whistle's pitch, while the other hand can be cupped to adjust the direction of the sound. 'There is much more ambiguity in the whistled signal than in the spoken signal,' explains lead researcher Manuel Carreiras, psychology professor at the University of La Laguna on the Canary island of Tenerife. Because whistled 'words' can be hard to distinguish, silbadores rely on repetition, as well as awareness of context, to make themselves understood.

The silbadores of Gomera are traditionally shepherds and other isolated mountain folk, and their novel means of staying in touch allows them to communicate over distances of up to 10 kilometres. Carreiras explains that silbadores are able to pass a surprising amount of information via their whistles. 'In daily life they use whistles to communicate short commands, but any Spanish sentence could be whistled.' Silbo has proved particularly useful when fires have occurred on the island and rapid communication across large areas has been vital.

The study team used neuroimaging equipment to contrast the brain activity of silbadores while listening to whistled and spoken Spanish. Results showed the left temporal lobe of the brain, which is usually associated with spoken language, was engaged during the processing of Silbo. The researchers found that other key regions in the brain's frontal lobe also responded to the whistles, including those activated in response to sign language among deaf people. When the experiments were repeated with non-whistlers, however, activation was observed in all areas of the brain.

'Our results provide more evidence about the flexibility of human capacity for language in a variety of forms,' Corina says. 'These data suggest that left-hemisphere language regions are uniquely adapted for communicative purposes, independent of the modality of signal. The non-Silbo speakers were not recognising Silbo as a language. They had nothing to grab onto, so multiple areas of their brains were activated.'

Carreiras says the origins of Silbo Gomero remain obscure, but that indigenous Canary Islanders, who were of North African origin, already had a whistled language when Spain conquered the volcanic islands in the 15th century. Whistled languages survive today in Papua New Guinea, Mexico, Vietnam, Guyana, China, Nepal, Senegal, and a few mountainous pockets in southern Europe. There are thought to be as many as 70 whistled languages still in use, though only 12 have been described and studied scientifically. This form of communication is an adaptation found among cultures where people are often isolated from each other, according to Julien Meyer, a researcher at the Institute of Human Sciences in Lyon, France. 'They are mostly used in mountains or dense forests,' he says. 'Whistled languages are quite clearly defined and represent an original adaptation of the spoken language for the needs of isolated human groups.'

But with modern communication technology now widely available, researchers say whistled languages like Silbo are threatened with extinction. With dwindling numbers of Gomera islanders still fluent in the language, Canaries' authorities are taking steps to try to ensure its survival. Since 1999, Silbo Gomero has been taught in all of the island's elementary schools. In addition, locals are seeking assistance from the United Nations Educational, Scientific and Cultural Organization (UNESCO). 'The local authorities are trying to get an award from the organisation to declare [Silbo Gomero] as something that should be preserved for humanity,' Carreiras adds.`;

    // 阅读 Passage 3 原文（真实）
    test.reading.passages[2].text = `Environmental practices of big businesses

The environmental practices of big businesses are shaped by a fundamental fact that for many of us offend our sense of justice. Depending on the circumstances, a business may maximize the amount of money it makes, at least in the short term, by damaging the environment and hurting people. That is still the case today for fishermen in an unmanaged fishery without quotas, and for international logging companies with short-term leases on tropical rainforest land in places with corrupt officials and unsophisticated landowners. When government regulation is effective, and when the public is environmentally aware, environmentally clean big businesses may out-compete dirty ones, but the reverse is likely to be true if government regulation is ineffective and if the public doesn't care.

It is easy for the rest of us to blame a business for helping itself by hurting other people. But blaming alone is unlikely to produce change. It ignores the fact that businesses are not charities but profit-making companies, and that publicly owned companies with shareholders are under obligation to those shareholders to maximize profits, provided that they do so by legal means. US laws make a company's directors legally liable for something termed 'breach of fiduciary responsibility' if they knowingly manage a company in a way that reduces profits. The car manufacturer Henry Ford was in fact successfully sued by shareholders in 1919 for raising the minimum wage of his workers to $5 per day: the courts declared that, while Ford's humanitarian sentiments about his employees were nice, his business existed to make profits for its stockholders.

Our blaming of businesses also ignores the ultimate responsibility of the public for creating the condition that let a business profit through destructive environmental policies. In the long run, it is the public, either directly or through its politicians, that has the power to make such destructive policies unprofitable and illegal, and to make sustainable environmental policies profitable.

The public can do that by suing businesses for harming them, as happened after the Exxon Valdez disaster, in which over 40,000m3 of oil were spilled off the coast of Alaska. The public may also make their opinion felt by preferring to buy sustainably harvested products; by making employees of companies with poor track records feel ashamed of their company and complain to their own management; by preferring their governments to award valuable contracts to businesses with a good environmental track record; and by pressing their governments to pass and enforce laws and regulations requiring good environmental practices.

In turn, big businesses can exert powerful pressure on any suppliers that might ignore public or government pressure. For instance, after the US public became concerned about the spread of a disease known as BSE, which was transmitted to humans through infected meat, the US government's Food and Drug Administration introduced rules demanding that the meat industry abandon practices associated with the risk of the disease spreading. But for five years the meat packers refused to follow these, claiming that they would be too expensive to obey. However, when a major fast-food company then made the same demands after customer purchases of its hamburgers plummeted, the meat industry complied within weeks. The public's task is therefore to identify which links in the supply chain are sensitive to public pressure: for instance, fast-food chains or jewelry stores, but not meat packers or gold miners.

Some readers may be disappointed or outraged that I place the ultimate responsibility for business practices harming the public on the public itself. I also believe that the public must accept the necessity for higher prices for products to cover the added costs, if any, of sound environmental practices. My views may seem to ignore the belief that businesses should act in accordance with moral principles even if this leads to a reduction in their profits. But I think we have to recognize that, throughout human history, in all politically complex human societies, government regulation has arisen precisely because it was found that not only did moral principles need to be made explicit, they also needed to be enforced.

To me, the conclusion that the public has the ultimate responsibility for the behavior of even the biggest businesses is empowering and hopeful, rather than disappointing. My conclusion is not a moralistic one about who is right or wrong, admirable or selfish, a good guy or a bad guy. In the past, businesses have changed when the public came to expect and require different behavior, to reward businesses for behavior that the public wanted, and to make things difficult for businesses practicing behaviors that the public didn't want. I predict that in the future, just as in the past, changes in public attitudes will be essential for changes in businesses' environmental practices.`;

    // ----------------------- 写作 -----------------------
    test.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '图表描述 - 组合图（柱状图 + 表格）',
        prompt: `The chart below shows what Anthropology graduates from one university did after finishing their undergraduate degree course. The table shows the salaries of the anthropologists in work after five years.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
        modelAnswer: `The bar chart shows the destinations of Anthropology graduates from one university immediately after finishing their degree, while the table gives the salaries of those in work five years later.

Overall, the majority of graduates combined work with further study or moved directly into employment, and only a small minority were unemployed. Salary levels after five years varied considerably according to the type of work.

Looking at the chart, about 50% of graduates were in full-time work, and a further 10% combined work with study. Roughly 15% continued studying only, 5% were unknown, and only around 8% were unemployed. The largest single group was therefore those in employment.

The table reveals that, after five years, those working as anthropologists earned the highest salaries, averaging around £35,000, followed by those in other related jobs at about £27,000. Graduates in unrelated jobs earned noticeably less, at approximately £22,000, while those who had combined work and study or remained in full-time study naturally had lower or no fixed salaries.

In summary, an Anthropology degree led most graduates into work or further study, and those who stayed in the field earned the most five years on.`,
        tips: '先总览（多数就业/深造，失业少）；再分述柱状图比例与表格薪资；做对比；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（优势与劣势）',
        prompt: `In some cultures, children are often told that they can achieve anything if they try hard enough. What are the advantages and disadvantages of giving children this message?

Write at least 250 words.`,
        modelAnswer: `In many societies, children hear that hard work can help them achieve anything. While this message can be motivating, it also has potential drawbacks. This essay will consider both the advantages and disadvantages.

One advantage is that the message builds confidence and a strong work ethic. Children who believe their effort matters are more likely to persevere when facing difficulties, set ambitious goals, and take responsibility for their learning. This can lead to genuine achievement and greater self-reliance in later life.

Another benefit is that it encourages a positive attitude towards failure. If children think success depends on effort rather than innate ability, they may be less afraid of making mistakes and more willing to try new challenges, which supports personal growth.

However, there are disadvantages. Telling children they can achieve anything may create unrealistic expectations. Not every goal is reachable regardless of effort, because talent, opportunity and external circumstances also matter. Children who internalise this message but still fail may feel personally inadequate or guilty, which can harm their self-esteem.

A further downside is that it can place excessive pressure on young people. They may believe that any shortfall is their own fault, leading to stress and anxiety, particularly in highly competitive environments.

In conclusion, the message has clear benefits in fostering effort and resilience, but it should be balanced with realistic guidance so that children develop healthy ambition without unbearable pressure.`,
        tips: '分别讨论优势（自信、韧性）与劣势（不切实际期望、压力）；给出平衡结论；结构清晰；至少250词'
      }
    ];

    // ----------------------- 口语 -----------------------
    test.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Jewellery（珠宝）',
        questions: [
          { q: 'How often do you wear jewellery? Why/Why not?', a: '参考回答: I wear jewellery only occasionally, usually for special occasions like weddings or parties, because I prefer a simple daily style.' },
          { q: 'What type of jewellery do you like best? Why/Why not?', a: '参考回答: I like necklaces best, especially simple and elegant ones, because they suit many outfits without being too flashy.' },
          { q: 'When do people like to give jewellery in your country? Why?', a: '参考回答: People often give jewellery at weddings, anniversaries and festivals, as it symbolises love, commitment and celebration.' },
          { q: 'Have you ever given jewellery to someone as a gift? Why/Why not?', a: '参考回答: Yes, I gave my sister a bracelet for her birthday because I wanted her to have something lasting and meaningful.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: `Describe a TV programme that you found interesting/educational.

You should say:
– what (science) topic the TV programme was about
– when you watched it
– what you learned from it
– and explain why you found this TV programme interesting.`,
        modelAnswer: `参考回答:

I'd like to talk about a TV documentary on climate change that I watched a few months ago on a popular science channel.

The programme focused on the science of global warming – in particular the greenhouse effect and how human activities, such as burning fossil fuels, release gases that trap heat in the atmosphere. It used clear diagrams and real-world examples to explain the causes and likely consequences of rising temperatures.

I watched it one evening at home, and what I learned was quite eye-opening. I already knew the basics, but the programme showed how different systems – oceans, forests and weather – are connected, and how small changes can have large effects. It also presented practical solutions, such as renewable energy and protecting natural habitats.

I found it interesting for two reasons. First, the visuals were stunning and made complex science easy to follow. Second, it felt relevant and urgent: it made me more aware of environmental issues and motivated me to live more sustainably, for example by wasting less energy. Overall, it was both educational and genuinely engaging.`,
        tips: '覆盖四个要点：话题、时间、所学、为何有趣；用过去时；加入细节与感受；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：科学与社会',
        questions: [
          { q: 'How interested are most people in your country in science?', a: '参考回答: I think interest is moderate. People are curious about big discoveries, but many only notice science when it appears in the news or affects daily life.' },
          { q: 'Why might children today be better at science than their parents?', a: '参考回答: Children grow up with the internet, educational apps and better equipment, so they meet scientific ideas earlier and more interactively than past generations.' },
          { q: 'How can the public learn more about scientific developments?', a: '参考回答: Through accessible media like documentaries, podcasts and social media, plus schools encouraging curiosity and hands-on experiments.' },
          { q: 'What are the most important scientific discoveries in the last 100 years?', a: '参考回答: I would mention vaccines, the structure of DNA, and renewable-energy technology – all of which have greatly improved health and the environment.' },
          { q: 'Are there no major scientific discoveries left to make?', a: '参考回答: I disagree. Fields like space exploration, medicine and climate science still hold many unknowns, so major breakthroughs are still possible.' },
          { q: 'Who should pay for scientific research – governments or private companies?', a: '参考回答: Both have a role: government funding supports public welfare and basic research, while companies drive practical innovation; cooperation works best.' }
        ]
      }
    ];

    // ----------------------- 听力原文脚本（真实） -----------------------
    if (typeof LISTENING_SCRIPTS !== 'undefined') {
      LISTENING_SCRIPTS['15-4-0'] = `MAN: Hello. Do you mind if I ask you some questions about your journey today? We're doing a customer satisfaction survey.

SOPHIE: Yes. OK. I've got about ten minutes before my train home leaves. I'm on a day trip.

MAN: Great. Thank you. So first of all, could you tell me your name?

SOPHIE: It's Sophie Bird.

MAN: Thank you. And would you mind telling me what you do?

SOPHIE: I'm a journalist.

MAN: Oh really? That must be interesting.

SOPHIE: Yes. It is.

MAN: So was the reason for your visit here today work?

SOPHIE: Actually, it's my day off. I came here to do some shopping.

MAN: Right.

SOPHIE: But I do sometimes come here for work.

MAN: OK. Now I'd like to ask some questions about your journey today, if that's OK.

SOPHIE: Yes. No problem.

MAN: Right, so can you tell me which station you're travelling back to?

SOPHIE: Staunfirth, where I live.

MAN: Can I just check the spelling? S-T-A-U-N-F-I-R-T-H?

SOPHIE: That's right.

MAN: And you travelled from there this morning?

SOPHIE: Yes.

MAN: OK, good. Next, can I ask what kind of ticket you bought? I assume it wasn't a season ticket, as you don't travel every day.

SOPHIE: That's right. No, I just got a normal return ticket. I don't have a rail card so I didn't get any discount. I keep meaning to get one because it's a lot cheaper.

MAN: Yes – you'd have saved 20% on your ticket today. So you paid the full price for your ticket?

SOPHIE: I paid £23.70.

MAN: OK. Do you think that's good value for money?

SOPHIE: Not really. I think it's too much for a journey that only takes 45 minutes.

MAN: Yes, that's one of the main complaints we get. So, you didn't buy your ticket in advance?

SOPHIE: No. I know it's cheaper if you buy a week in advance but I didn't know I was coming then.

MAN: I know. You can't always plan ahead. So, did you buy it this morning?

SOPHIE: No, it was yesterday.

MAN: Right. And do you usually buy your tickets at the station?

SOPHIE: Well, I do usually but the ticket office closes early and I hate using ticket machines. I think ticket offices should be open for longer hours. There's always a queue for the machines and they're often out of order.

MAN: A lot of customers are saying the same thing.

SOPHIE: So to answer your question ... I got an e-ticket online.

MAN: OK. Thank you. Now I'd like to ask you about your satisfaction with your journey. So what would you say you were most satisfied with today?

SOPHIE: Well, I like the wifi on the train. It's improved a lot. It makes it easier for me to work if I want to.

MAN: That's the first time today anyone's mentioned that. It's good to get some positive feedback on that.

SOPHIE: Mmm.

MAN: And, is there anything you weren't satisfied with?

SOPHIE: Well, normally, the trains run on time and are pretty reliable but today there was a delay; the train was about 15 minutes behind schedule.

MAN: OK. I'll put that down. Now I'd also like to ask about the facilities at this station. You've probably noticed that the whole station's been upgraded. What are you most satisfied with?

SOPHIE: I think the best thing is that they've improved the amount of information about train times etc. that's given to passengers – it's much clearer – before there was only one board and I couldn't always see it properly – which was frustrating.

MAN: That's good. And is there anything you're not satisfied with?

SOPHIE: Let's see ... I think things have generally improved a lot. The trains are much more modern and I like the new café. But one thing is that there aren't enough places to sit down, especially on the platforms.

MAN: OK – so I'll put 'seating' down, shall I, as the thing you're least satisfied with?

SOPHIE: Yes, OK.

MAN: Can I ask your opinion about some of the other facilities? We'd like feedback on whether people are satisfied, dissatisfied or neither satisfied nor dissatisfied.

SOPHIE: OK.

MAN: What about the parking at the station?

SOPHIE: Well to be honest, I don't really have an opinion as I never use it.

MAN: So, neither satisfied nor dissatisfied for that then.

SOPHIE: Yes, I suppose so ...

MAN: OK, and what about ...?`;

      LISTENING_SCRIPTS['15-4-1'] = `CHAIR: As chair of the town council subcommittee on park facilities, I'd like to bring you up to date on some of the changes that have been made recently to the Croft Valley Park. So if you could just take a look at the map I handed out, let's begin with a general overview. So the basic arrangement of the park hasn't changed – it still has two gates, north and south, and a lake in the middle.

The café continues to serve an assortment of drinks and snacks and is still in the same place, looking out over the lake and next to the old museum.

We're hoping to change the location of the toilets, and bring them nearer to the centre of the park as they're a bit out of the way at present, near the adventure playground, in the corner of your map.

The formal gardens have been replanted and should be at their best in a month or two. They used to be behind the old museum, but we're now using the space near the south gate – between the park boundary and the path that goes past the lake towards the old museum.

We have a new outdoor gym for adults and children, which is already proving very popular. It's by the glass houses, just to the right of the path from the south gate. You have to look for it as it's a bit hidden in the trees.

One very successful introduction has been our skateboard ramp. It's in constant use during the evenings and holidays. It's near the old museum, at the end of a little path that leads off from the main path between the lake and the museum.

We've also introduced a new area for wild flowers, to attract bees and butterflies. It's on a bend in the path that goes round the east side of the lake, just south of the adventure playground.

Now let me tell you a bit more about some of the changes to Croft Valley Park.

One of our most exciting developments has been the adventure playground. We were aware that we had nowhere for children to let off steam, and decided to use our available funds to set up a completely new facility in a large space to the north of the park. It's open year-round, though it closes early in the winter months, and entrance is completely free. Children can choose whatever activities they want to do, irrespective of their age, but we do ask adults not to leave them on their own there. There are plenty of seats where parents can relax and keep an eye on their children at the same time.

Lastly, the glass houses. A huge amount of work has been done on them to repair the damage following the disastrous fire that recently destroyed their western side. Over £80,000 was spent on replacing the glass walls and the metal supports, as well as the plants that had been destroyed, although unfortunately the collection of tropical palm trees has proved too expensive to replace up to now. At present the glass houses are open from 10am to 3pm Mondays to Thursdays, and it's hoped to extend this to the weekend soon. We're grateful to all those who helped us by contributing their time and money to this achievement.

The gardens have ...`;

      LISTENING_SCRIPTS['15-4-2'] = `ANNIE: OK, Jack. Before we plan our presentation about refrigeration, let's discuss what we've discovered so far.

JACK: Fine, Annie. Though I have to admit I haven't done much research yet.

ANNIE: Nor me. But I found an interesting article about icehouses. I'd been to some 18th- and 19th-century ones here in the UK, so I knew they were often built in a shady area or underground, close to lakes that might freeze in the winter. Then blocks of ice could be cut and stored in the icehouse. But I didn't realise that insulating the blocks with straw or sawdust meant they didn't melt for months. The ancient Romans had refrigeration, too.

JACK: I didn't know that.

ANNIE: Yes, pits were dug in the ground, and snow was imported from the mountains – even though they were at quite a distance. The snow was stored in the pits. Ice formed at the bottom of it. Both the ice and the snow were then sold. The ice cost more than the snow and my guess is that only the wealthy members of society could afford it.

JACK: I wouldn't be surprised. I also came across an article about modern domestic fridges. Several different technologies are used, but they were too complex for me to understand.

ANNIE: You have to wonder what happens when people get rid of old ones.

JACK: You mean because the gases in them are harmful for the environment?

ANNIE: Exactly. At least these days there are plenty of organisations that will recycle most of the components safely, but of course some people just dump old fridges in the countryside.

JACK: It's hard to see how they can be stopped unfortunately. In the UK we get rid of three million a year altogether!

ANNIE: That sounds a lot, especially because fridges hardly ever break down.

JACK: That's right. In this country we keep domestic fridges for 11 years on average, and a lot last for 20 or more. So if you divide the cost by the number of years you can use a fridge, they're not expensive, compared with some household appliances.

ANNIE: True. I suppose manufacturers encourage people to spend more by making them different colours and designs. I'm sure when my parents bought their first fridge they had hardly any choice!

JACK: Yes, there's been quite a change.

Right, let's make a list of topics to cover in our presentation, and decide who's going to do more research on them. Then later, we can get together and plan the next step.

ANNIE: OK. How about starting with how useful refrigeration is, and the range of goods that are refrigerated nowadays? Because of course it's not just food and drinks.

JACK: No, I suppose flowers and medicines are refrigerated, too.

ANNIE: And computers. I could do that, unless you particularly want to.

JACK: No, that's fine by me. What about the effects of refrigeration on people's health? After all, some of the chemicals used in the 19th century were pretty harmful, but there have been lots of benefits too, like always having access to fresh food. Do you fancy dealing with that?

ANNIE: I'm not terribly keen, to be honest.

JACK: Nor me. My mind just goes blank when I read anything about chemicals.

ANNIE: Oh, all right then, I'll do you a favour. But you owe me, Jack.

What about the effects on food producers, like farmers in poorer countries being able to export their produce to developed countries? Something for you, maybe?

JACK: I don't mind. It should be quite interesting.

ANNIE: I think we should also look at how refrigeration has helped whole cities – like Las Vegas, which couldn't exist without refrigeration because it's in the middle of a desert.

JACK: Right. I had a quick look at an economics book in the library that's got a chapter about this sort of thing. I could give you the title, if you want to do this section.

ANNIE: Not particularly, to be honest. I find economics books pretty heavy going, as a rule.

JACK: OK, leave it to me, then.

ANNIE: Thanks. Then there's transport, and the difference that refrigerated trucks have made. I wouldn't mind having a go at that.

JACK: Don't forget trains, too. I read something about milk and butter being transported in refrigerated railroad cars in the USA, right back in the 1840s.

ANNIE: I hadn't thought of trains. Thanks.

JACK: Shall we have a separate section on domestic fridges? After all, they're something everyone's familiar with.

ANNIE: What about splitting it into two? You could investigate 19th- and 20th-century fridges, and I'll concentrate on what's available these days, and how manufacturers differentiate their products from those of their competitors.

JACK: OK, that'd suit me.`;

      LISTENING_SCRIPTS['15-4-3'] = `PRESENTER: Hi everyone, in this session I'll be presenting my research about the social history of Britain during the Industrial Revolution. I particularly looked at how ordinary lives were affected by changes that happened at that time. This was a time that saw the beginning of a new phenomenon; consumerism – where buying and selling goods became a major part of ordinary people's lives.

In fact, it was in the 19th century that the quantity and quality of people's possessions was used as an indication of the wealth of the country. Before this, the vast majority of people had very few possessions, but all that was changed by the Industrial Revolution. This was the era from the mid-18th to the late 19th century, when improvements in how goods were made as well as in technology triggered massive social changes that transformed life for just about everybody in several key areas.

First let's look at manufacturing. When it comes to manufacturing, we tend to think of the Industrial Revolution in images of steam engines and coal. And it's true that the Industrial Revolution couldn't have taken place at all if it weren't for these new sources of power. They marked an important shift away from the traditional watermills and windmills that had dominated before this. The most advanced industry for much of the 19th century was textiles. This meant that fashionable fabrics, and lace and ribbons were made available to everyone.

Before the Industrial Revolution, most people made goods to sell in small workshops, often in their own homes. But enormous new machines were now being created that could produce the goods faster and on a larger scale, and these required a lot more space. So large factories were built, replacing the workshops, and forcing workers to travel to work. In fact, large numbers of people migrated from villages into towns as a result.

As well as manufacturing, there were new technologies in transport, contributing to the growth of consumerism. The horse-drawn stagecoaches and carts of the 18th century, which carried very few people and goods, and travelled slowly along poorly surfaced roads, were gradually replaced by the numerous canals that were constructed. These were particularly important for the transportation of goods. The canals gradually fell out of use, though, as railways were developed, becoming the main way of moving goods and people from one end of the country to the other. And the goods they moved weren't just coal, iron, clothes, and so on – significantly, they included newspapers, which meant that thousands of people were not only more knowledgeable about what was going on in the country, but could also read about what was available in the shops. And that encouraged them to buy more. So faster forms of transport resulted in distribution becoming far more efficient – goods could now be sold all over the country, instead of just in the local market.

The third main area that saw changes that contributed to consumerism was retailing. The number and quality of shops grew rapidly, and in particular, small shops suffered as customers flocked to the growing number of department stores – a form of retailing that was new in the 19th century. The entrepreneurs who opened these found new ways to stock them with goods, and to attract customers: for instance, improved lighting inside greatly increased the visibility of the goods for sale. Another development that made goods more visible from outside resulted from the use of plate glass, which made it possible for windows to be much larger than previously. New ways of promoting goods were introduced, too. Previously, the focus had been on informing potential customers about the availability of goods; now there was an explosion in advertising trying to persuade people to go shopping.

Flanders claims that one of the great effects of the Industrial Revolution was that it created choice. All sorts of things that had previously been luxuries – from sugar to cutlery – became conveniences, and before long they'd turned into necessities: life without sugar or cutlery was unimaginable. Rather like mobile phones these days!`;
    }
    console.log('[real-15b] 剑15 Test4 已覆盖为练习题目（待与原版书核对）');
  })();
})();
