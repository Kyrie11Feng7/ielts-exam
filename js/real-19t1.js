/**
 * 剑19 Test 1 剑桥雅思内容覆盖补丁
 * 目的：将 data.js 中 AI 生成的"原创练习"内容替换为剑桥雅思19 Test 1 练习题目。
 * 数据核对来源（公开权威解析，含原题答案键）：
 *   听力原文/答案 — laokaoya (剑桥雅思19Test1 Part1-4)
 *   阅读原文/题目/答案 — engnovate / ieltsmaterial / laokaoya (剑桥雅思19 Test1 R1-R3)
 *   写作题目 — engnovate / TED IELTS (Cambridge IELTS 19)
 *   口语话题 — ieltspractices.com (Cambridge 19 IELTS Speaking Test 1)
 * 注意：原文/题目为真实考题内容；范文与口语"参考回答"为学习用示例文本（非官方范文）。
 * 本文件须放在所有数据文件之后、app.js 之前加载。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;
  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 19) book = b; });
  if (!book) return;
  var test = null;
  book.tests.forEach(function (t) { if (t.id === 1) test = t; });
  if (!test) return;

  // ===================== 听力（真实） =====================
  test.listening.sections = [
    {
      part: 'Part 1',
      context: '学校教师 John 致电 Hinchingbrooke 乡村公园，咨询组织学生参观事宜',
      type: '填空题（笔记/表格，每空一词或一数字）',
      questions: [
        { q: 'The park covers ___ hectares (about 170 acres).', a: '69' },
        { q: 'A ___ flows through the park.', a: 'stream' },
        { q: 'Children collect and analyse ___ about what they see.', a: 'data' },
        { q: 'They practise reading a ___ and using a compass.', a: 'map' },
        { q: 'The leisure and tourism focus is about the park’s ___', a: 'visitors' },
        { q: 'In music activities, children create ___ with natural materials.', a: 'sounds' },
        { q: 'Learning outside encourages a sense of ___', a: 'freedom' },
        { q: 'Children discover they can do things and develop new ___', a: 'skills' },
        { q: 'Cost per child is ___ euros (for groups of over 30).', a: '4.95' },
        { q: 'There is no charge for ___ and other adults.', a: 'leaders' }
      ]
    },
    {
      part: 'Part 2',
      context: '友好城市协会介绍迎接法国友好城市 Malatte 居民来访的安排',
      type: '选择题 + 地图标注',
      questions: [
        { q: 'What did the visitors enjoy most about their trip to Malatte?', a: 'B' },
        { q: 'What have they decided to do to mark the 25th anniversary?', a: 'A' },
        { q: 'Which fundraising event was most successful?', a: 'B' },
        { q: 'What does the speaker suggest doing on the first evening?', a: 'C' },
        { q: 'Who will perform at the football club on Saturday evening?', a: 'A' },
        { q: 'Where is the farm shop (in the old stables)?', a: 'G' },
        { q: 'Where is the disabled entry to the house?', a: 'C' },
        { q: 'Where is the adventure playground?', a: 'B' },
        { q: 'Where are the kitchen gardens?', a: 'D' },
        { q: 'Where is the Temple of the Four Winds?', a: 'A' }
      ]
    },
    {
      part: 'Part 3',
      context: '两名学生 Colin 与 Marie 讨论食物相关课题（废弃面包再造、食品标签等）',
      type: '多选 + 配对',
      questions: [
        { q: 'Colin was pleased with the different patterns/colours he added to the biscuits.', a: 'B' },
        { q: 'Colin made something appetising out of old bread that would be thrown away.', a: 'D' },
        { q: 'Marie thought the touch-sensitive label could help drug storage in hospitals.', a: 'A' },
        { q: 'Marie thought the label could show the weight of a joint of meat.', a: 'E' },
        { q: 'What trend does Colin mention first?', a: 'D' },
        { q: 'What does Colin say needs to be reduced?', a: 'G' },
        { q: 'What does Marie say about gluten/lactose-free food?', a: 'C' },
        { q: 'What example does Colin give of a disappointing celebrity product?', a: 'B' },
        { q: 'What point does Colin make about “ghost kitchens”?', a: 'F' },
        { q: 'What concern does Colin raise about eating different mushrooms?', a: 'H' }
      ]
    },
    {
      part: 'Part 4',
      context: '关于爱尔兰 Ceide Fields 新石器遗址考古发现的讲座',
      type: '笔记填空（每空一词）',
      questions: [
        { q: 'The rows of stones must be ___', a: 'walls' },
        { q: 'Patrick Caulfield’s ___ (Seamus) later became an archaeologist.', a: 'son' },
        { q: 'Local people used probes to find ___ buried in the bog.', a: 'fuel' },
        { q: 'Preservation is due to peat acidity and lack of ___', a: 'oxygen' },
        { q: 'Neolithic houses were ___ (not round).', a: 'rectangular' },
        { q: 'Pots filled with fat served as ___', a: 'lamps' },
        { q: 'Each plot of land was sized to sustain an extended ___', a: 'family' },
        { q: 'No structures were found to shelter animals in ___', a: 'winter' },
        { q: 'The ___ became less productive, leading to abandonment.', a: 'soil' },
        { q: 'Conditions became wetter with a lot more ___', a: 'rain' }
      ]
    }
  ];

  // ===================== 阅读（真实） =====================
  test.reading.passages = [
    {
      title: 'Passage 1: How tennis rackets have changed',
      difficulty: '中等',
      summary: '网球拍从天然羊肠线到合成线、从木框到个性化定制的发展，以及其对职业比赛的影响。',
      questions: [
        { type: '判断题 (True/False/Not Given)', q: 'People had expected Andy Murray to become the world’s top tennis player for at least five years before 2016.', a: 'FALSE' },
        { type: '判断题 (True/False/Not Given)', q: 'The change Andy Murray made to his rackets attracted a lot of attention.', a: 'FALSE' },
        { type: '判断题 (True/False/Not Given)', q: 'Most of the world’s top players take a professional racket stringer on tour with them.', a: 'NOT GIVEN' },
        { type: '判断题 (True/False/Not Given)', q: 'Mike and Bob Bryan use rackets that are light in comparison to the majority of rackets.', a: 'FALSE' },
        { type: '判断题 (True/False/Not Given)', q: 'Werner Fischer played with a spaghetti-strung racket that he designed himself.', a: 'NOT GIVEN' },
        { type: '判断题 (True/False/Not Given)', q: 'The weather can affect how professional players adjust the strings on their rackets.', a: 'TRUE' },
        { type: '判断题 (True/False/Not Given)', q: 'It was believed the change Pete Sampras made to his rackets contributed to his strong serve.', a: 'TRUE' },
        { type: '填空题（笔记，每空一词）', q: 'Mike and Bob Bryan made changes to the types of ___ used on their racket frames.', a: 'paint' },
        { type: '填空题（笔记，每空一词）', q: 'The spaghetti-strung racket was banned because of the amount of ___ it created.', a: 'topsin' },
        { type: '填空题（笔记，每空一词）', q: 'Changes to rackets can be as important as diets or the ___ players do.', a: 'training' },
        { type: '填空题（笔记，每空一词）', q: 'All rackets used to have natural strings made from the ___ of animals.', a: 'intestines' },
        { type: '填空题（笔记，每空一词）', q: 'Pete Sampras had metal ___ put into the frames of his rackets.', a: 'weights' },
        { type: '填空题（笔记，每空一词）', q: 'Gonçalo Oliveira changed the ___ on his racket handles.', a: 'grips' }
      ]
    },
    {
      title: 'Passage 2: The pirates of the ancient Mediterranean',
      difficulty: '中偏难',
      summary: '从公元前到罗马帝国时期，地中海海盗的兴衰、各文明对海盗的态度，以及庞培剿灭海盗的历程。',
      questions: [
        { type: '段落信息匹配（选段落字母 A–G）', q: 'a reference to a denial of involvement in piracy', a: 'D' },
        { type: '段落信息匹配（选段落字母 A–G）', q: 'details of how a campaign to eradicate piracy was carried out', a: 'G' },
        { type: '段落信息匹配（选段落字母 A–G）', q: 'a mention of when states would make use of pirates', a: 'C' },
        { type: '段落信息匹配（选段落字母 A–G）', q: 'a reference to how people today commonly view pirates', a: 'A' },
        { type: '段落信息匹配（选段落字母 A–G）', q: 'an explanation of how some people were encouraged not to return to piracy', a: 'G' },
        { type: '段落信息匹配（选段落字母 A–G）', q: 'a mention of the need for sailing vessels to stay close to land', a: 'B' },
        { type: '多选题（选两项字母）', q: 'Which TWO statements are made about inhabitants of the Mediterranean region in the ancient world?', a: 'B, E' },
        { type: '多选题（选两项字母）', q: 'Which TWO statements does the writer make about piracy and ancient Greece?', a: 'C, E' },
        { type: '填空题（摘要，每空一词）', q: 'Pirate attacks on vessels transporting ___ led to calls for ___ of the pirates.', a: 'grain' },
        { type: '填空题（摘要，每空一词）', q: '(continued) calls for ___ of the pirates responsible.', a: 'punishment' },
        { type: '填空题（摘要，每空一词）', q: 'Some pirates demanded a ___ for the return of Roman officials they captured.', a: 'ransom' }
      ]
    },
    {
      title: 'Passage 3: The persistence and peril of misinformation',
      difficulty: '难',
      summary: '错误信息为何易被相信、媒体与监管为何难以阻止其传播，以及纠正错误信息所需的努力。',
      questions: [
        { type: '选择题（单选）', q: 'What point does the writer make about misinformation in the first paragraph?', a: 'D' },
        { type: '选择题（单选）', q: 'What does the writer say about the role of technology?', a: 'A' },
        { type: '选择题（单选）', q: 'What is the writer doing in the fourth paragraph?', a: 'C' },
        { type: '选择题（单选）', q: 'What point does the writer make about regulation in the USA?', a: 'D' },
        { type: '摘要填空（选短语 A–J）', q: 'Although people have frequent ___ to misinformation, there is debate about how we label things true/untrue.', a: 'G' },
        { type: '摘要填空（选短语 A–J）', q: 'Descartes and Spinoza had different ___ about how people engage with information.', a: 'J' },
        { type: '摘要填空（选短语 A–J）', q: 'Spinoza argued a distinct ___ is involved in verifying information.', a: 'H' },
        { type: '摘要填空（选短语 A–J）', q: 'Recent research has provided ___ for Spinoza’s theory.', a: 'B' },
        { type: '摘要填空（选短语 A–J）', q: 'People accept information as true even for an extremely ___', a: 'E' },
        { type: '摘要填空（选短语 A–J）', q: 'The resources for scepticism and for perceiving are in ___ in the brain.', a: 'C' },
        { type: '判断题 (Yes/No/Not Given)', q: 'Campaigns to correct misinformation will fail if people cannot understand them.', a: 'YES' },
        { type: '判断题 (Yes/No/Not Given)', q: 'Attempts to teach elementary students about misinformation have been opposed.', a: 'NOT GIVEN' },
        { type: '判断题 (Yes/No/Not Given)', q: 'It may be possible to overcome the problem of misinformation in a relatively short period.', a: 'NO' },
        { type: '判断题 (Yes/No/Not Given)', q: 'The need to keep up with new information is hugely exaggerated today.', a: 'NOT GIVEN' }
      ]
    }
  ];

  // 阅读原文（真实），覆盖 reading-passages-1.js 中对应键的 AI 文本
  test.reading.passages[0].text = `In 2016, the British professional tennis player Andy Murray was ranked as the world’s number one. It was an incredible achievement by any standard – made even more remarkable by the fact that he did this during a period considered to be one of the strongest in the sport’s history, competing against the likes of Rafael Nadal, Roger Federer and Novak Djokovic, to name just a few. Yet five years previously, he had been regarded as a talented outsider who entered but never won the major tournaments.

Of the changes that account for this transformation, one was visible and widely publicised: in 2011, Murray invited former number one player Ivan Lendl onto his coaching team – a valuable addition that had a visible impact on the player’s playing style. Another change was so subtle as to pass more or less unnoticed. Like many players, Murray has long preferred a racket that consists of two types of string: one for the mains (verticals) and another for the crosses (horizontals). While he continued to use natural string in the crosses, in 2012 he switched to a synthetic string for the mains. A small change, perhaps, but its importance should not be underestimated.

The modification that Murray made is just one of a number of options available to players looking to tweak their rackets in order to improve their games. ‘Touring professionals have their rackets customised to their specific needs,’ says Colin Triplow, a UK-based professional racket stringer. ‘It’s a highly important part of performance maximisation.’ Consequently, the specific rackets used by the world’s elite are not actually readily available to the public; rather, each racket is individually made to suit the player who uses it. Take the US professional tennis players Mike and Bob Bryan, for example: ‘We’re very particular with our racket specifications,’ they say. ‘All our rackets are sent from our manufacturer to Tampa, Florida, where our frames go through a thorough customisation process.’ They explain how they have adjusted not only racket length, but even experimented with different kinds of paint. The rackets they use now weigh more than the average model and also have a denser string pattern.

The primary reason for these modifications is simple: as the line between winning and losing becomes thinner and thinner, even these slight changes become more and more important. As a result, players and their teams are becoming increasingly creative with the modifications to their rackets as they look to maximise their competitive advantage.

Racket modifications mainly date back to the 1970s, when the amateur German tennis player Werner Fischer started playing with the so-called spaghetti-strung racket. It created a string bed that generated so much topspin that it was quickly banned by the International Tennis Federation. However, within a decade or two, racket modification became a regular practice. Today it is, in many ways, an aspect of the game that is equal in significance to nutrition or training.

Modifications can be divided into two categories: those to the string bed and those to the racket frame. The former is far more common than the latter: the choice of the strings and the tension with which they are installed is something that nearly all professional players experiment with. They will continually change it depending on various factors including the court surface, climatic conditions, and game styles. Some will even change it depending on how they feel at the time.

At one time, all tennis rackets were strung with natural gut made from the outer layer of sheep or cow intestines. This all changed in the early 1990s with the development of synthetic strings that were cheaper and more durable. They are made from three materials: nylon, Kevlar, or co-polyester. Even so, many professional players continue to use a ‘hybrid set-up’, where a combination of both synthetic and natural strings are used.

Of the synthetics, co-polyester is by far the most widely used. It’s a perfect fit for the style of tennis now played, where players tend to battle it out from the back of the court rather than coming to the net. Studies indicate that the average spin from a co-polyester string is 25% greater than that from natural string or other synthetics. In a sense, the development of co-polyester strings has revolutionised the game.

However, many players go beyond these basic adjustments to the strings and make changes to the racket frame itself. For example, much of the serving power of US professional player Pete Sampras was attributed to the addition of four to five lead weights onto his rackets. Other changes to the frame involve the handle: players have individual preferences for the shape of the handle, and some will have the handle of one racket moulded onto the frame of a different racket.

Racket customisation and modification have pushed the standards of the game to greater levels that few could have anticipated in the days of natural strings and heavy, wooden frames, and it’s exciting to see what further developments there will be in the future.`;

  test.reading.passages[1].text = `A. When one mentions pirates, an image springs to most people’s minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea. Yet from the first to the third millennium BCE, thousands of years before these swashbucklers began spreading fear across the Caribbean, pirates prowled the Mediterranean, raiding merchant ships and threatening vital trade routes. However, despite all efforts and the might of various ancient states, piracy could not be stopped. The situation remained unchanged for thousands of years. Only when the pirates directly threatened the interests of ancient Rome did the Roman Republic organise a massive fleet to eliminate piracy. Under the command of the Roman general Pompey, Rome eradicated piracy, transforming the Mediterranean into ‘Mare Nostrum’ (Our Sea).

B. Although piracy in the Mediterranean is first recorded in ancient Egypt during the reign of Pharaoh Amenhotep III (c. 1390-1353 BCE), it is reasonable to assume it predated this powerful civilisation. This is partly due to the great importance the Mediterranean held at this time, and partly due to its geography. While the Mediterranean region is predominantly fertile, some parts are rugged and hilly, even mountainous. In the ancient times, the inhabitants of these areas relied heavily on marine resources. Most had their own boats, possessed good seafaring skills, and unsurpassed knowledge of the local coastline and sailing routes. Thus, it is not surprising that during hardships, these men turned to piracy. Geography itself further benefited the pirates, with the numerous coves along the coast providing places for them to hide their boats and strike undetected. Before the invention of ocean-going caravels in the 15th century, ships could not easily cross long distances over open water. Thus, in the ancient world most were restricted to a few well-known navigable routes that followed the coastline. Caught in a trap, a slow merchant ship laden with goods had no other option but to surrender.

C. One should also add that it was not unknown in the first and second millennia BCE for governments to resort to pirates’ services, especially during wartime, employing their skills and numbers against their opponents. A pirate fleet would serve in the first wave of attack, preparing the way for the navy. Some of the regions were known for providing safe harbours to pirates, who, in return, boosted the local economy.

D. The first known record of a named group of Mediterranean pirates, made during the rule of ancient Egyptian Pharaoh Akhenaten (c. 1353-1336 BCE), was in the Amarna Letters. These were extracts of diplomatic correspondence between the pharaoh and his allies. It seems the pharaoh was troubled by two distinct pirate groups, the Lukka and the Sherden. Despite the Egyptian fleet’s best efforts, the pirates continued to cause substantial disruption to regional commerce. In the letters, the king of Alashiya (modern Cyprus) rejected Akhenaten’s claims of a connection with the Lukka. The king assured Akhenaten he was prepared to punish any of his subjects involved in piracy.

E. The ancient Greek world’s experience of piracy was different from that of Egyptian rulers. While Egypt’s power was land-based, the ancient Greeks relied on the Mediterranean in almost all aspects of life. Interestingly, in his works the Iliad and the Odyssey, the ancient Greek writer Homer not only condones, but praises the lifestyle and actions of pirates. The opinion remained unchanged in the following centuries. The ancient Greek historian Thucydides, for instance, glorified pirates’ daring attacks on ships or even cities. For Greeks, piracy was a part of everyday life. Even high-ranking members of the state were not beyond engaging in such activities. According to the Greek orator Demosthenes, in 355 BCE, Athenian ambassadors made a detour from their official travel to capture a ship sailing from Egypt, taking the wealth found onboard for themselves. The Greeks’ liberal approach towards piracy does not mean they always tolerated it, but attempts to curtail piracy were hampered by the large number of pirates operating in the Mediterranean.

F. The rising power of ancient Rome required the Roman Republic to deal with piracy in the Mediterranean. While piracy was a serious issue for the Republic, Rome profited greatly from its existence. Pirate raids provided a steady source of slaves, essential for Rome’s agriculture and mining industries. But this arrangement could work only while the pirates left Roman interests alone. Pirate attacks on grain ships, which were essential to Roman citizens, led to angry voices in the Senate, demanding punishment of the culprits. Rome, however, did nothing, further encouraging piracy. By the 1st century BCE, emboldened pirates kidnapped prominent Roman dignitaries, asking for a large ransom to be paid. Their most famous hostage was none other than Julius Caesar, captured in 75 BCE.

G. By now, Rome was well aware that pirates had outlived their usefulness. The time had come for concerted action. In 67 BCE, a new law granted Pompey vast funds to combat the Mediterranean menace. Taking personal command, Pompey divided the entire Mediterranean into 13 districts, assigning a fleet and commander to each. After cleansing one district of pirates, the fleet would join another in the next district. The process continued until the entire Mediterranean was free of pirates. Although thousands of pirates died at the hands of Pompey’s troops, as a long-term solution to the problem, many more were offered land in fertile areas located far from the sea. Instead of a maritime menace, Rome got productive farmers that further boosted its economy.`;

  test.reading.passages[2].text = `Brian Southwell looks at how human brains verify information and discusses some of the challenges of battling widespread falsehoods.

Misinformation – both deliberately promoted and accidentally shared – is perhaps an inevitable part of the world in which we live, but it is not a new problem. People likely have lied to one another for roughly as long as verbal communication has existed. Deceiving others can offer an apparent opportunity to gain strategic advantage, to motivate others to action, or even to protect interpersonal bonds. Moreover, people inadvertently have been sharing inaccurate information with one another for thousands of years.

However, we currently live in an era in which technology enables information to reach large audiences distributed across the globe, and thus the potential for immediate and widespread effects from misinformation now looms larger than in the past. Yet the means to correct misinformation might, over time, be found in those same patterns of mass communication and of the facilitated spread of information.

The main worry regarding misinformation is its potential to unduly influence attitudes and behavior, leading people to think and act differently than they would if they were correctly informed. In other words, we worry that misinformation might lead people to hold misperceptions and that these misperceptions, especially when they occur among large groups of people, may have detrimental, downstream consequences for health, social harmony, and the political climate.

At least three observations related to misinformation in the contemporary mass-media environment warrant the attention of researchers, policy makers, and really everyone who watches television, listens to the radio, or reads information online. First of all, people who encounter misinformation tend to believe it, at least initially. Secondly, electronic and print media often do not block many types of misinformation before it appears in content available to large audiences. Thirdly, countering misinformation once it has enjoyed wide exposure can be a resource-intensive effort.

Knowing what happens when people initially encounter misinformation holds tremendous importance for estimating the potential for subsequent problems. Although it is fairly routine for individuals to come across information that is false, the question of exactly how – and when – we mentally label information as true or false has garnered philosophical debate. The dilemma is neatly summarized by a contrast between how the 17th-century philosophers Rene Descartes and Baruch Spinoza described human information engagement, with conflicting predictions that only recently have been empirically tested. Descartes argued that a person only accepts or rejects information after considering its truth or falsehood; Spinoza argued that people accept all encountered information by default and then subsequently verify or reject it through a separate cognitive process. In recent decades, empirical evidence has supported Spinoza’s account: people appear to encode all new information as if it were true, even if only momentarily, and later tag the information as being either true or false.

What about our second observation that misinformation often can appear in electronic or print media without being preemptively blocked? In support of this, one might consider the nature of regulatory structures in the United States: regulatory agencies here tend to focus on post hoc detection of broadcast information. Organizations such as the Food and Drug Administration (FDA) offer considerable monitoring and notification functions, but these roles typically do not involve preemptive censoring. Such programs, although laudable and useful, do not keep false advertising off the airwaves. In addition, even misinformation that is successfully corrected can continue to affect attitudes.

This leads us to our third observation: a campaign to correct misinformation, even if rhetorically compelling, requires resources and planning to accomplish necessary reach and frequency. For corrective campaigns to be persuasive, audiences need to be able to comprehend them, which requires either effort to frame messages in ways that are accessible or effort to educate and sensitize audiences to the possibility of misinformation. That some audiences might be unaware of the potential for misinformation also suggests the utility of media literacy efforts as early as elementary school. Even with journalists and scholars pointing to the phenomenon of ‘fake news’, people do not distinguish between demonstrably false stories and those based in fact when scanning and processing written information.

We live at a time when widespread misinformation is common. Yet at this time many people also are passionately developing potential solutions and remedies. The journey forward undoubtedly will be a long and arduous one. Future remedies will require not only continued theoretical consideration but also the development and maintenance of consistent monitoring tools and a recognition among fellow members of society that claims which find prominence in the media but are insufficiently based in scientific consensus and social reality should be countered.`;

  // ===================== 写作（真实题目 + 范文示例） =====================
  test.writing.tasks = [
    {
      task: 'Task 1 (小作文)',
      type: '图表描述 - 线图',
      prompt: 'The graph below gives information on the numbers of participants for different activities at one social centre in Melbourne, Australia for the period 2000 to 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
      modelAnswer: 'The line graph illustrates the number of participants in five different activities — basketball, swimming, mathematics, biology and chess — at one social centre in Melbourne, Australia, over the 20-year period from 2000 to 2020.\n\nOverall, basketball was by far the most popular activity throughout the period and its numbers remained relatively stable, while participation in swimming fell sharply. By contrast, chess and mathematics both showed clear growth, and biology stayed fairly constant.\n\nBasketball attracted the highest number of participants in every year, starting at around 80 in 2000, rising slightly to a peak of 85 in 2005, and finishing at approximately 83 in 2020. Swimming, however, declined steadily from 60 participants in 2000 to only about 10 by 2020.\n\nMathematics was absent in 2000 and 2005 but grew from 2010 onwards, reaching roughly 35 by 2020. Chess also increased, from 10 in 2000 to a high of 50 in 2015, before dropping back to around 30 in the final year. Biology was the most stable of the remaining activities, hovering between 40 and 50 participants across the two decades and ending at 50.\n\nIn summary, despite some fluctuation, the centre’s traditional team and physical activities remained strong, while newer intellectual pursuits gained ground over the 20 years.',
      tips: '时态统一用过去时；先写总览(overview)再分述；对比最高/最低与变化趋势；至少150词'
    },
    {
      task: 'Task 2 (大作文)',
      type: '议论文（讨论双方观点）',
      prompt: 'Some people think that competition at work, at school and in daily life is a good thing. Others believe that we should try to cooperate more, rather than competing against each other.\n\nDiscuss both these views and give your own opinion.\n\nWrite at least 250 words.',
      modelAnswer: 'Whilst some people believe that competition is beneficial, others think people should cooperate more. This essay will argue that both approaches can be positive, but it depends on the situation.\n\nFirst of all, competition can be very helpful in different situations. In the workplace, people who compete with their co-workers might perform better, which results in a more productive company. In the sales industry, this practice is extremely common, and companies that best handle the competitive element tend to make more sales and thus better profits. In education, competition can also be positive because it prepares students for the harsh realities of life, whilst motivating them to learn more.\n\nOn the other hand, competition can be detrimental because it often encourages selfishness and can create destructive attitudes. In the previous examples, the positives can also be outweighed by the negatives in some cases. A salesperson who is too competitive might annoy their co-workers, resulting in a bad working environment. When only one person is successful and the others are demoralised, overall sales might decline. Meanwhile, students may suffer from the pressure of a competitive environment and those who fail might lose the will to continue learning. As such, cooperation must also be encouraged. This allows people to balance the self-centred competitive approach with a more team-oriented one, offsetting some of the potential negatives.\n\nIn conclusion, both competition and cooperation are important in various aspects of life. It would be best to emphasise the benefits of each and to encourage some sort of balance between them so that people learn lessons from both.',
      tips: '讨论双方 + 明确个人立场；每方各写一段并举例；结构清晰、连接词自然；至少250词'
    }
  ];

  // ===================== 口语（真实话题 + 参考回答示例） =====================
  test.speaking.parts = [
    {
      part: 'Part 1: Introduction & Interview',
      intro: '考官就日常话题提问，约4-5分钟。话题：Music',
      questions: [
        { q: 'Do you like listening to music?', a: '参考回答: Yes, I really love it because it helps me relax and feel happy after a busy day.' },
        { q: 'What type of music do you usually listen to?', a: '参考回答: I mostly listen to pop and soft rock — they match my mood and are easy to sing along to.' },
        { q: 'When do you listen to music?', a: '参考回答: I listen when I’m travelling, studying, or doing chores around the house.' },
        { q: 'Do you prefer listening to music alone or with others?', a: '参考回答: I prefer listening alone because I can focus on it and enjoy it more.' }
      ]
    },
    {
      part: 'Part 2: Long Turn (Cue Card)',
      intro: '根据题目卡准备1分钟，独自陈述2分钟',
      cueCard: 'Describe something you did that was difficult but successful.\n\nYou should say:\n– what you did\n– why it was difficult\n– how you did it\n– and explain how you felt about it.',
      modelAnswer: '参考回答:\n\nOne thing I did that was difficult but turned out to be successful was learning to drive and getting my driving licence. I started learning two years ago because I needed to travel to university and public transport wasn’t convenient.\n\nAt first it was really challenging because I was afraid of driving in heavy traffic and worried about making mistakes. During my first few lessons I was so nervous that I kept stalling the car or forgetting to check my mirrors. But I didn’t give up — I booked extra lessons, and my father practised with me on quiet streets at weekends.\n\nBalancing lessons with my studies and part-time job was exhausting, yet worth it. After about four months of practice I finally took the test. On the day I stayed calm and focused on what I had learned.\n\nWhen I passed, I felt so proud because I had overcome my fear and achieved something I thought I couldn’t do. Driving has made my life easier and taught me that with patience and effort I can succeed at anything.',
      tips: '用过去时叙述；覆盖全部四个要点；加入具体细节与感受；控制2分钟'
    },
    {
      part: 'Part 3: Discussion',
      intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Challenges',
      questions: [
        { q: 'Why do people like challenging themselves?', a: '参考回答: It makes them feel stronger and gives them a sense of achievement when they overcome difficulty.' },
        { q: 'Is it always good to face difficult situations?', a: '参考回答: Not always, but sometimes difficulties help people learn and grow that they wouldn’t otherwise.' },
        { q: 'How can schools encourage students to handle challenges?', a: '参考回答: They can give projects that push students to think and solve problems together, building confidence gradually.' }
      ]
    }
  ];

  // ===================== 听力原文脚本（真实，覆盖 listening-scripts.js 中 19-1-*） =====================
  if (typeof LISTENING_SCRIPTS !== 'undefined') {
    LISTENING_SCRIPTS['19-1-0'] = `SALLY: Good morning. Hinchingbrooke Country Park, Sally speaking. I'm one of the rangers.

JOHN: Oh hello. My name's John Chapman, and I'm a teaching assistant at a local primary school. I've been asked to arrange a visit to the park for two of our classes.

SALLY: OK. What would you like to know?

JOHN: Well, I'm new to this area, so perhaps you could tell me something about the park first, please.

SALLY: Of course. Altogether the park covers 170 acres, that's 69 hectares. There are three main types of habitat: wetland, grassland and woodland. The woods are well established and varied, with an oak plantation, and other areas of mixed species.

JOHN: Right.

SALLY: The wetland is quite varied, too. The original farmland was dug up around 40 years ago to extract gravel. Once this work was completed, the gravel pits filled with water, forming the two large lakes. There are also several smaller ones, ponds and a stream that flows through the park.

JOHN: OK, so I suppose with these different habitats there's quite a variety of wildlife.

SALLY: There certainly is – a lot of different species of birds and insects, and also animals like deer and rabbits.

JOHN: And I understand you organise educational visits for school parties.

SALLY: That's right. We can organise a wide range of activities and adapt them to suit all ages.

JOHN: Can you give me some examples of the activities?

SALLY: Well, one focus is on science, where we help children to discover and study plants, trees and insects. They also collect and analyse data about the things they see.

JOHN: Uhuh.

SALLY: Another focus is on geography. The park is a great environment to learn and practise reading a map and using a compass to navigate around the park.

JOHN: Do you do anything connected with history?

SALLY: Yes, we do. For instance, the children can explore how the use of the land has changed over time. Then there's leisure and tourism.

JOHN: That focuses on your visitors, I would imagine.

SALLY: Yes, mostly. The children find out about them, their requirements, the problems they may cause and how we manage these. And another subject we cover is music: here the children experiment with natural materials to create sounds and explore rhythm and tempo.

JOHN: That must be fun!

SALLY: Most children really enjoy it.

SALLY: And of course, all the activities are educational, too. Learning outside the classroom encourages children to be creative, and to explore and discover for themselves.

JOHN: I would imagine they get a sense of freedom that might not be a normal part of their lives.

SALLY: That's right. And very often the children discover that they can do things they didn't know they could do, and they develop new skills. This gives them greater self-confidence.

JOHN: It sounds great. So, what about the practical side of it? How much does it cost for a full-day visit? We would expect to bring between 30 and 40 children.

SALLY: If there are over 30, it costs 4.95 euros for each child who attends on the day. We invoice you afterwards, so you don't pay for children who can't come because of sickness, for example. There's no charge for leaders and other adults – as many as you want to bring.

JOHN: That sounds very fair. Well, thanks for all the information. I'll need to discuss it with my colleagues, and I hope to get back to you soon to make a booking.

SALLY: We'll look forward to hear. Goodbye.

JOHN: Goodbye, and thankyou.`;

    LISTENING_SCRIPTS['19-1-1'] = `It's great to see so many members of the Twinning Association here tonight. Since the twinning link between our two towns, Stanthorpe here in England and Malatte in France, was established, the relationship between the towns has gone from strength to strength.

Last month, 25 members of the association from Stanthorpe spent a weekend in Malatte. Our hosts had arranged a great programme. We learned how cheese is produced in the region and had the chance to taste the products. The theme park trip had to be cancelled, but we all had a great time on the final boat trip down the river – that was the real highlight.

This is a special year for the Association because it's 25 years since we were founded. In Malatte, they're planning to mark this by building a footbridge in the municipal park. We've been discussing what to do here and we've decided to plant a poplar tree in the museum gardens. We considered buying a garden seat to put there, but the authorities weren't happy with that idea.

In terms of fundraising to support our activities, we've done very well. Our pancake evening was well attended and made record profits. And everyone enjoyed the demonstration of French cookery, which was nearly as successful. Numbers for our film show were limited because of the venue so we're looking for somewhere bigger next year.

We're looking forward to welcoming our French visitors here next week, and I know that many of you here will be hosting individuals or families. The coach from France will arrive at 5 pm on Friday. Don't try to do too much that first evening as they'll be tired, so have dinner in the house or garden rather than eating out. The weather looks as if it'll be OK so you might like to plan a barbecue. Then the next morning's market day in town, and that's always a good place to stroll round.

On Saturday evening, we'll all meet up at the football club, where once again we'll have Toby Sharp and his band performing English and Scottish country songs. Toby will already be well known to many of you as last year he organised our special quiz night and presented the prizes.

Now on Sunday, we'll be taking our visitors to Farley House. You may not all be familiar with it, so here's a map to help you. You can see the car park at the bottom of the map. There's an excellent farm shop in the grounds where our visitors can buy local produce – it's in the old stables, which is the first building you come to. They're built round a courtyard, and the shop's in the far corner on the left. There's also a small cafe on the right as you go in.

I know that one or two of our visitors may not be all that mobile. The main entrance to the house has a lot of steps so you might want to use the disabled entry. This is on the far side of the house from the car park.

Children will probably be most interested in the adventure playground. That's at the northern end of the larger lake, in a bend on the path that leads to the lake. There's lots for children to do there.

There are a number of lovely gardens near the house. The kitchen gardens are rectangular and surrounded by a wall. They're to the north-east of the house, quite near the smaller lake. They're still in use and have a great collection of fruit and vegetables.

The Temple of the Four Winds is a bit more of a walk – but it's worth it. Take the path from the car park and go past the western sides of the stables and the house. Then when the path forks, take the right-hand path. Go up there with the woods on your left and the temple is right at the end. There are great views over the whole area.

OK, so that's...`;

    LISTENING_SCRIPTS['19-1-2'] = `COLIN: I haven't seen you for a bit, Marie.

MARIE: No. I've been busy with my project.

COLIN: You're making a vegan alternative to eggs, aren't you? Something that doesn't use animal products?

MARIE: Yes. I'm using chickpeas. I had two main aims when I first started looking for an alternative to eggs, but actually I've found chickpeas have got more advantages.

COLIN: Right.

MARIE: But how about your project on reusing waste food – you were looking at bread, weren't you?

COLIN: Yes. It's been hard work, but I've enjoyed it. The basic process was quite straightforward – breaking the stale bread down to a paste then reforming it.

MARIE: But you were using 3-D printing, weren't you, to make the paste into biscuits?

COLIN: Yeah, I'd used that before, but in this project, I had time to play around with different patterns for the biscuits and finding how I could add fruit and vegetables to make them a more appetising colour, and I was really pleased with what I managed to produce.

MARIE: It must've been a great feeling to make something appetising out of bits of old bread that would've been thrown away otherwise.

COLIN: It was. And I'm hoping that some of the restaurants in town will be interested in the biscuits. I'm going to send them some samples.

MARIE: I came across something on the internet yesterday that might interest you. It was a company that's developed touch-sensitive sensors for food labels.

COLIN: Mmm?

MARIE: It's a special sort of label on the food package. When the label's smooth, the food is fresh and then when you can feel bumps on the label, that means the food's gone bad. It started off as a project to help visually impaired people know whether food was fit to eat or not.

COLIN: Interesting. So just solid food?

MARIE: No, things like milk and juice as well. But actually, I thought it might be really good for drug storage in hospitals and pharmacies.

COLIN: Right. And coming back to food, maybe it'd be possible to use it for other things besides freshness. Like how many kilograms a joint of meat is, for example.

MARIE: Yes, there's all sorts of possibilities.

COLIN: I was reading an article about food trends predicting how eating habits might change in the next few years.

MARIE: Oh – things like more focus on local products? That seems so obvious, but the shops are still full of imported foods.

COLIN: Yes, they need to be more proactive to address that.

MARIE: And somehow motivate consumers to change, yes.

COLIN: One thing everyone's aware of is the need for a reduction in unnecessary packaging – but just about everything you buy in supermarkets is still covered in plastic. The government needs to do something about it.

MARIE: Absolutely. It's got to change.

COLIN: Do you think there'll be more interest in gluten- and lactose-free food?

MARIE: For people with allergies or food intolerances? I don't know. Lots of people I know have been buying that type of food for years now.

COLIN: Yes, even if they haven't been diagnosed with an allergy.

MARIE: That's right. One thing I've noticed is the number of branded products related to celebrity chefs – people watch them cooking on TV and then buy things like spice mixes or frozen foods with the chef's name on. I bought something like that once, but I won't again.

COLIN: Yeah – I bought a ready-made spice mix for chicken which was supposed to be used by a chef I'd seen on television, and it didn't actually taste of anything.

MARIE: Mm. Did the article mention 'ghost kitchens' used to produce takeaway food?

COLIN: No. What are they?

MARIE: Well, they might have the name of a restaurant, but actually they're a cooking facility just for delivery meals – the public don't ever go there. But people aren't aware of that – it's all kept very quiet.

COLIN: So people don't realise the food's not actually from the restaurant?

MARIE: Right.

COLIN: Did you know more and more people are using all sorts of different mushrooms now, to treat different health concerns? Things like heart problems?

MARIE: Hmm. They might be taking a big risk there.

COLIN: Yes, it's hard to know which varieties are safe to eat. Anyway maybe now...`;

    LISTENING_SCRIPTS['19-1-3'] = `For my presentation today, I'm going to talk about the Ceide Fields in the northwest of Ireland, one of the largest Neolithic sites in the world. I recently visited this site and observed the work that is currently being done by a team of archaeologists there.

The site was first discovered in the 1930s by a local teacher, Patrick Caulfield. He noticed that when local people were digging in the bog, they were constantly hitting against what seemed to be rows of stones. He realised that these must be walls and that they must be thousands of years old for them to predate the bog which subsequently grew over them.

He wrote to the National Museum in Dublin to ask them to investigate, but no one took him seriously. It wasn't until 40 years later, when Patrick Caulfield's son Seamus, who had become an archaeologist by then, began to explore further. He inserted iron probes into the bog to map the formation of the stones, a traditional method which local people had always used for finding fuel buried in the bog for thousands of years. Carbon dating later proved that the site was over 5,000 years old and was the largest Neolithic site in Ireland.

Thanks to the bog which covers the area, the remains of the settlement at Ceide Fields, which is over 5,000 years old, are extremely well-preserved. A bog is 90 percent water; its soil is so saturated that when the grasses and heathers that grow on its surface die, they don't fully decay but accumulate in layers. Objects remain so well preserved in these conditions because of the acidity of the peat and the deficiency of oxygen. At least 175 days of rain a year are required for this to happen; this part of Ireland gets an average of 225 days.

The Neolithic farmers at Ceide would have enjoyed several centuries of relative peace and stability. Neolithic farmers generally lived in larger communities than their predecessors, with a number of houses built around a community building. As they lived in permanent settlements, Neolithic farmers were able to build bigger houses. These weren't round as people often assume, but rectangular with a small hole in the roof that allowed smoke to escape. This is one of many innovations and indicates that the Neolithic farmers were the first people to cook indoors. Another new technology that Neolithic settlers brought to Ireland was pottery. Fragments of Neolithic pots have been found in Ceide and elsewhere in Ireland. The pots were used for many things; as well as for storing food, pots were filled with a small amount of fat and when this was set alight, they served as lamps.

It's thought that the Ceide Fields were mainly used as paddocks for animals to graze in. Evidence from the Ceide Fields suggests that each plot of land was of a suitable size to sustain an extended family. They may have used a system of rotational grazing in order to prevent over-grazing and to allow for plant recovery and regrowth. This must have been a year-round activity as no structures have been found which would have been used to shelter animals in the winter.

However, archaeologists believe that this way of life at Ceide ceased abruptly. Why was this? Well, several factors may have contributed to the changing circumstances. The soil would have become less productive and led to the abandonment of farming. The crop rotation system was partly responsible for this as it would have been very intensive and was not sustainable. But there were also climatic pressures too. The farmers at Ceide would have enjoyed a relatively dry period, but this began to change and the conditions became wetter as there was a lot more rain. It was these conditions that encouraged the bog to form over the area which survives today.

So now I'd like to show you some...`;
  }

  console.log('[real-19t1] 剑19 Test1 已覆盖为练习题目（待与原版书核对）');
})();
