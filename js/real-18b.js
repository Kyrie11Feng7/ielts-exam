/**
 * 剑18 Test 3 & Test 4 剑桥雅思内容覆盖补丁
 * 目的：将 data.js / 各 data-extra 中 AI 生成的"原创练习"内容替换为剑桥雅思18 Test 3、Test 4 练习题目。
 * 数据核对来源（公开权威解析，含原题答案键）：
 *   听力原文/答案 — laokaoya (剑桥雅思18Test3 / Test4 各 Part 原文与答案)、ielts-hub、ieltsxpress、engnovate
 *   阅读原文/题目/答案 — engnovate (Cambridge IELTS 18 Academic Reading Test 3 / Test 4)、ielts-hub、ieltsextremes
 *   写作题目 — engnovate / blog.scitudy (Cambridge IELTS 18 Writing Test 3 / Test 4)
 *   口语话题 — engnovate (Cambridge IELTS 18 Academic Speaking Test 3 / Test 4)、ieltspracticeonline
 * 注意：
 *   - 原文 / 题目 / 题目答案键 为剑桥雅思18 (Cambridge University Press) 考题内容；
 *   - 写作 modelAnswer 与口语 a:"参考回答: ..." 为学习用示例文本（非官方范文/标准回答），仅作备考参考；
 *   - 听力/阅读/写作用英文，口语示例用中文"参考回答"。
 * 本文件须放在所有数据文件（data.js + data-extra*.js）与 listening-scripts.js 之后、app.js 之前加载。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;

  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 18) book = b; });
  if (!book) return;

  // 确保 book 18 含 test 3 / test 4（当前数据仅有 test 1，由本补丁创建 3、4）
  function ensureTest(id, title) {
    var t = null;
    (book.tests || []).forEach(function (x) { if (x.id === id) t = x; });
    if (!t) {
      t = {
        id: id,
        title: title,
        listening: { title: '听力 Listening', intro: '共4部分，40题，约30分钟', sections: [] },
        reading: { title: '阅读 Reading', intro: '共3篇文章，40题，60分钟', passages: [] },
        writing: { title: '写作 Writing', intro: '共2部分，60分钟', tasks: [] },
        speaking: { title: '口语 Speaking', intro: '共3部分，11-14分钟', parts: [] }
      };
      if (!book.tests) book.tests = [];
      book.tests.push(t);
    }
    return t;
  }

  var LS = (typeof LISTENING_SCRIPTS !== 'undefined')
    ? LISTENING_SCRIPTS
    : (globalThis.LISTENING_SCRIPTS = globalThis.LISTENING_SCRIPTS || {});

  // ====================================================================
  //  TEST 3
  // ====================================================================
  var t3 = ensureTest(3, 'Test 3');

  // ----------------------- 听力（真实） -----------------------
  t3.listening.sections = [
    {
      part: 'Part 1',
      context: '男士 Dan 致电 Wayside Camera Club 咨询入会事宜（个人资料、会员类型、过往参赛经历）',
      type: '表格/笔记填空（每空一词或一数字）',
      questions: [
        { q: 'Address: 52 ___ Street, Peacetown.', a: 'Marrowfield' },
        { q: 'He heard about the club from a ___ (a person he had spoken to).', a: 'relative' },
        { q: 'Reason for joining: to enter competitions and to ___ with other photographers.', a: 'socialise' },
        { q: 'Type of membership chosen: ___ membership (£30/year, can vote).', a: 'full' },
        { q: 'First competition entered – theme: ___ Life.', a: 'Domestic' },
        { q: 'Second competition (sunsets) – had to capture the ___ as well as the setting sun.', a: 'clouds' },
        { q: 'Feedback on the sunset photo: the ___ was not right (taken too soon).', a: 'timing' },
        { q: 'Third competition entered – called: ___ (name of the competition).', a: 'Animal Magic' },
        { q: 'The animal photo had to show some ___ in the scene.', a: 'movement' },
        { q: 'The night-time animal photo was too ___ (a quality problem).', a: 'dark' }
      ]
    },
    {
      part: 'Part 2',
      context: '野外蘑菇专家 Dan Beagle 介绍安全采摘野生蘑菇的注意事项',
      type: '多选题（选两项）+ 单选题',
      questions: [
        { q: 'Questions 11-12: Which TWO things does the speaker say you should AVOID when picking wild mushrooms?', a: 'B, C' },
        { q: 'Questions 13-14: Which TWO statements about wild mushrooms does the speaker make?', a: 'B, D' },
        { q: 'Question 15: When does the speaker say is the best time to go mushroom picking?', a: 'C' },
        { q: 'Question 16: What does the speaker recommend for complete beginners?', a: 'B' },
        { q: 'Question 17: What rule about conservation does the speaker mention?', a: 'B' },
        { q: 'Question 18: What does the speaker say is the biggest problem for wild mushrooms in his area?', a: 'C' },
        { q: 'Question 19: What does the speaker say about storing mushrooms?', a: 'A' },
        { q: 'Question 20: According to the speaker, wild mushrooms are particularly good in which of the following?', a: 'A' }
      ]
    },
    {
      part: 'Part 3',
      context: '两名学生 Yong Man 与 Yong Woman 讨论第一次工业革命与未来工作的变化',
      type: '多选题（选两项）+ 匹配题',
      questions: [
        { q: 'Questions 21-22: Which TWO statements do the students make about the Luddites?', a: 'A, E' },
        { q: 'Questions 23-24: Which TWO predictions about the future of work does the man express doubt about?', a: 'B, D' },
        { q: 'Question 25: Accountants – what change does the woman note?', a: 'G' },
        { q: 'Question 26: Hairdressers – why has demand gone up?', a: 'E' },
        { q: 'Question 27: Administrative staff – how has the job changed?', a: 'B' },
        { q: 'Question 28: Agricultural workers – what does the man say about their numbers?', a: 'C' },
        { q: 'Question 29: Care workers – what does the man predict?', a: 'F' },
        { q: 'Question 30: Bank clerks – what does the man think technology will do?', a: 'A' }
      ]
    },
    {
      part: 'Part 4',
      context: '关于建立太空交通管理系统的天文学讲座',
      type: '笔记填空（每空一词）',
      questions: [
        { q: 'A Space Traffic Management system needs legal measures and ___ systems to prevent collisions.', a: 'technical' },
        { q: 'Satellites are relatively ___ nowadays, so more people can afford them.', a: 'cheap' },
        { q: 'Operators launch whole constellations of ___ of satellites.', a: 'thousands' },
        { q: 'Once in orbit, a satellite need not send information back to Earth to allow its ___.', a: 'identification' },
        { q: 'At present there are not enough proper ways of ___ satellites.', a: 'tracking' },
        { q: 'Some satellites may be designed for ___ purposes (operators unwilling to share info).', a: 'military' },
        { q: 'Details are needed about the object and its ___ at a particular time.', a: 'location' },
        { q: 'Scientists can only make a ___ about where a satellite is heading next.', a: 'prediction' },
        { q: 'All collected information should be entered into a single ___.', a: 'database' },
        { q: 'The system must establish ___ between the people who use it.', a: 'trust' }
      ]
    }
  ];

  // ----------------------- 阅读（真实） -----------------------
  t3.reading.passages = [
    {
      title: 'Passage 1: Materials to take us beyond concrete',
      difficulty: '中等',
      summary: '混凝土虽好但碳排放高，科学家探索木材、粉煤灰/矿渣及新型水泥等替代材料。',
      questions: [
        { type: '段落信息匹配 (A–H)', q: 'an explanation of the industrial processes that create potential raw materials for concrete', a: 'G' },
        { type: '段落信息匹配 (A–H)', q: 'a reference to the various locations where high-rise wooden buildings can be found', a: 'D' },
        { type: '段落信息匹配 (A–H)', q: 'an indication of how widely available the raw materials of concrete are', a: 'C' },
        { type: '段落信息匹配 (A–H)', q: 'the belief that more high-rise wooden buildings are needed before wood can be regarded as a viable alternative', a: 'F' },
        { type: '摘要填空 (ONE WORD ONLY)', q: 'current environmental concerns are encouraging ___ to use wood in modern construction', a: 'architects' },
        { type: '摘要填空 (ONE WORD ONLY)', q: 'wood increases in size as ___ in the atmosphere enters it', a: 'moisture' },
        { type: '摘要填空 (ONE WORD ONLY)', q: 'in cross-laminated timber, ___ of solid wood are glued together', a: 'layers' },
        { type: '摘要填空 (ONE WORD ONLY)', q: 'wooden buildings are an improvement in the ___ with which they can be constructed', a: 'speed' },
        { type: '人物观点匹配 (A–D)', q: 'The environmental advantage of cement alternatives may not be as great as assumed.', a: 'C' },
        { type: '人物观点匹配 (A–D)', q: 'It would be hard to create a construction alternative to concrete offering comparable benefits.', a: 'A' },
        { type: '人物观点匹配 (A–D)', q: 'Worries about the environment have led to increased interest in wood as a construction material.', a: 'B' },
        { type: '人物观点匹配 (A–D)', q: 'Expense has been a factor in the negative response to the development of new cements.', a: 'D' },
        { type: '人物观点匹配 (A–D)', q: 'The environmental damage from concrete is due to the large scale of its production.', a: 'A' }
      ]
    },
    {
      title: 'Passage 2: The steam car',
      difficulty: '中偏难',
      summary: 'Doble 兄弟研发蒸汽汽车的成败：技术先进却最终因成本与设计多变而未获商业成功。',
      questions: [
        { type: '段落标题匹配 (i–viii)', q: 'Paragraph A', a: 'iii' },
        { type: '段落标题匹配 (i–viii)', q: 'Paragraph B', a: 'viii' },
        { type: '段落标题匹配 (i–viii)', q: 'Paragraph C', a: 'vi' },
        { type: '段落标题匹配 (i–viii)', q: 'Paragraph D', a: 'v' },
        { type: '段落标题匹配 (i–viii)', q: 'Paragraph E', a: 'vii' },
        { type: '段落标题匹配 (i–viii)', q: 'Paragraph F', a: 'i' },
        { type: '段落标题匹配 (i–viii)', q: 'Paragraph G', a: 'ii' },
        { type: '单选题', q: 'What point does the writer make about the steam car in Paragraph B?', a: 'A' },
        { type: '单选题', q: 'When building their first steam car, the Doble brothers:', a: 'C' },
        { type: '单选题', q: 'In order to produce the Model C, the Doble brothers:', a: 'B' },
        { type: '摘要填空 (ONE WORD AND/OR A NUMBER)', q: 'A later version of the Model E raised its ___ while keeping emissions extremely low.', a: 'speed' },
        { type: '摘要填空 (ONE WORD AND/OR A NUMBER)', q: 'Under ___ cars were produced before the company went out of business.', a: 'fifty' },
        { type: '摘要填空 (ONE WORD AND/OR A NUMBER)', q: 'They satisfy California’s ___ emissions laws.', a: 'strict' }
      ]
    },
    {
      title: 'Passage 3: The case for mixed-ability classes',
      difficulty: '难',
      summary: '探讨按能力分班（streaming）与混合能力班的利弊，结合维果茨基理论与 Hattie 研究。',
      questions: [
        { type: '单选题', q: 'The writer describes the Romeo and Juliet lesson in order to demonstrate:', a: 'B' },
        { type: '单选题', q: 'What does the writer say about streaming in the third paragraph?', a: 'A' },
        { type: '单选题', q: 'What idea is suggested by the reference to Mount Qomolangma in the fifth paragraph?', a: 'C' },
        { type: '单选题', q: 'What does the word “scaffolding” in the sixth paragraph refer to?', a: 'C' },
        { type: '摘要选词 (A–I)', q: 'Streaming leads to ___ for the brightest students in higher sets.', a: 'H' },
        { type: '摘要选词 (A–I)', q: 'Streaming significantly and negatively affects students placed in the ___.', a: 'D' },
        { type: '摘要选词 (A–I)', q: 'This is especially where a large proportion have ___.', a: 'F' },
        { type: '摘要选词 (A–I)', q: 'For the ___, there appears to be only minimal advantage.', a: 'E' },
        { type: '摘要选词 (A–I)', q: 'Teachers tend to have ___ of students in streamed groups.', a: 'B' },
        { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'The Vygotsky model of education supports the concept of a mixed-ability class.', a: 'NO' },
        { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Some teachers are uncertain about allowing students to take on MKO roles in the classroom.', a: 'NOT GIVEN' },
        { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'It can be rewarding to teach knowledge you have only recently acquired.', a: 'YES' },
        { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'The priority should be to ensure the highest-achieving students attain their goals.', a: 'NO' },
        { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Taking part in collaborative outdoor activities can improve student outcomes in the classroom.', a: 'NOT GIVEN' }
      ]
    }
  ];

  // 阅读原文（真实逐字）
  t3.reading.passages[0].text = `Concrete is the second most used substance in the global economy, after water – and one of the world’s biggest single sources of greenhouse gas emissions. The chemical process by which cement, the key ingredient of concrete, is created results in large quantities of carbon dioxide. The UN estimates that there will be 9.8 billion people living on the planet by mid-century. They will need somewhere to live. If concrete is the only answer to the construction of new cities, then carbon emissions will soar, aggravating global warming. And so scientists have started innovating with other materials, in a scramble for alternatives to a universal commodity that has underpinned our modern life for many years.

The problem with replacing concrete is that it is so very good at what it does. Chris Cheeseman, an engineering professor at Imperial College London, says the key thing to consider is the extent to which concrete is used around the world, and is likely to continue to be used. ‘Concrete is not a high-carbon product. Cement is high carbon, but concrete is not. But it is the scale on which it is used that makes it high carbon. The sheer scale of manufacture is so huge, that is the issue.’

Not only are the ingredients of concrete relatively cheap and found in abundance in most places around the globe, the stuff itself has marvellous properties: Portland cement, the vital component of concrete, is mouldable and pourable, but quickly sets hard. Cheeseman also notes another advantage: concrete and steel have similar thermal expansion properties, so steel can be used to reinforce concrete, making it far stronger and more flexible as a building material than it could be on its own. According to Cheeseman, all these factors together make concrete hard to beat. ‘Concrete is amazing stuff. Making anything with similar properties is going to be very difficult.’

A possible alternative to concrete is wood. Making buildings from wood may seem like a rather medieval idea, but climate change is driving architects to turn to treated timber as a possible resource. Recent years have seen the emergence of tall buildings constructed almost entirely from timber. Vancouver, Vienna and Brumunddal in Norway are all home to constructed tall, wooden buildings.

Using wood to construct buildings, however, is not straightforward. Wood expands as it absorbs moisture from the air and is susceptible to pests, not to mention fire. But treating wood and combining it with other materials can improve its properties. Cross-laminated timber is engineered wood. An adhesive is used to stick layers of solid-sawn timber together, crosswise, to form building blocks. This material is light but has the strength of concrete and steel. Construction experts say that wooden buildings can be constructed at a greater speed than ones of concrete and steel and the process, it seems, is quieter.

Stora Enso is Europe’s biggest supplier of cross-laminated timber, and its vice-president Markus Mannstrom reports that the company is seeing increasing demand globally for building in wood, with climate change concerns the key driver. Finland, with its large forests, where Stora Enso is based, has been leading the way, but the company is seeing a rise in demand for its timber products across the world, including in Asia. Of course, using timber in a building also locks away the carbon that it absorbed as it grew. But even treated wood has its limitations and only when a wider range of construction projects has been proven in practice will it be possible to see wood as a real alternative to concrete in constructing tall buildings.

Fly ash and slag from iron ore are possible alternatives to cement in a concrete mix. Fly ash, a byproduct of coal-burning power plants, can be incorporated into concrete mixes to make up as much as 15 to 30% of the cement, without harming the strength or durability of the resulting mix. Iron-ore slag, a byproduct of the iron-ore smelting process, can be used in a similar way. Their incorporation into concrete mixes has the potential to reduce greenhouse gas emissions.

But Anna Surgenor, of the UK’s Green Building Council, notes that although these waste products can save carbon in the concrete mix, their use is not always straightforward. ‘It’s possible to replace the cement content in concrete with waste products to lower the overall carbon impact. But there are several calculations that need to be considered across the entire life cycle of the building – these include factoring in where these materials are being shipped from. If they are transported over long distances, using fossil fuels, the use of alternative materials might not make sense from an overall carbon reduction perspective.’

While these technologies are all promising ideas, they are either unproven or based on materials that are not abundant. In their overview of innovation in the concrete industry, Felix Preston and Johanna Lehne of the UK’s Royal Institute of International Affairs reached the conclusion that, ‘Some novel cements have been discussed for more than a decade within the research community, without breaking through. At present, these alternatives are rarely as cost-effective as conventional cement, and they face raw-material shortages and resistance from customers.’`;

  t3.reading.passages[1].text = `When primitive automobiles first began to appear in the 1800s, their engines were based on steam power. Steam had already enjoyed a long and successful career in the railways, so it was only natural that the technology evolved into a miniaturized version which was separate from the trains. But these early cars inherited steam’s weaknesses along with its strengths. The boilers had to be lit by hand, and they required about twenty minutes to build up pressure before they could be driven. Furthermore, their water reservoirs only lasted for about thirty miles before needing replenishment. Despite such shortcomings, these newly designed self-propelled carriages offered quick transportation, and by the early 1900s it was not uncommon to see such machines shuttling wealthy citizens around town.

But the glory days of steam cars were few. A new technology called the Internal Combustion Engine soon appeared, which offered the ability to drive down the road just moments after starting up. At first, these noisy gasoline cars were unpopular because they were more complicated to operate and they had difficult hand-crank starters, which were known to break arms when the engines backfired. But in 1912 General Motors introduced the electric starter, and over the following few years steam power was gradually phased out.

Even as the market was declining, four brothers made one last effort to rekindle the technology. Between 1906 and 1909, while still attending high school, Abner Doble and his three brothers built their first steam car in their parents’ basement. It comprised parts taken from a wrecked early steam car but reconfigured to drive an engine of their own design. Though it did not run well, the Doble brothers went on to build a second and third prototype in the following years. Though the Doble boys’ third prototype, nicknamed the Model B, still lacked the convenience of an internal combustion engine, it drew the attention of automobile trade magazines due to its numerous improvements over previous steam cars. The Model B proved to be superior to gasoline automobiles in many ways. Its high-pressure steam drove the engine pistons in virtual silence, in contrast to clattering gas engines which emitted the aroma of burned hydrocarbons. Perhaps most impressively, the Model B was amazingly swift. It could accelerate from zero to sixty miles per hour in just fifteen seconds, a feat described as ‘remarkable acceleration’ by Automobile magazine in 1914.

The following year Abner Doble drove the Model B from Massachusetts to Detroit in order to seek investment in his automobile design, which he used to open the General Engineering Company. He and his brothers immediately began working on the Model C, which was intended to expand upon the innovations of the Model B. The brothers added features such as a key-based ignition in the cabin, eliminating the need for the operator to manually ignite the boiler. With these enhancements, the Dobles’ new car company promised a steam vehicle which would provide all of the convenience of a gasoline car, but with much greater speed, much simpler driving controls, and a virtually silent powerplant. By the following April, the General Engineering Company had received 5,390 deposits for Doble Detroits, which were scheduled for delivery in early 1918.

Later that year Abner Doble delivered unhappy news to those eagerly awaiting the delivery of their modern new cars. Those buyers who received the handful of completed cars complained that the vehicles were sluggish and erratic, sometimes going in reverse when they should go forward. The new engine design, though innovative, was still plagued with serious glitches.

The brothers made one final attempt to produce a viable steam automobile. In early 1924, the Doble brothers shipped a Model E to New York City to be road-tested by the Automobile Club of America. After sitting overnight in freezing temperatures, the car was pushed out into the road and left to sit for over an hour in the frosty morning air. At the turn of the key, the boiler lit and reached its operating pressure inside of forty seconds. As they drove the test vehicle further, they found that its evenly distributed weight lent it surprisingly good handling, even though it was so heavy. As the new Doble steamer was further developed and tested, its maximum speed was pushed to over a hundred miles per hour, and it achieved about fifteen miles per gallon of kerosene with negligible emissions.

Sadly, the Dobles’ brilliant steam car never was a financial success. Priced at around $18,000 in 1924, it was popular only among the very wealthy. Plus, it is said that no two Model Es were quite the same, because Abner Doble tinkered endlessly with the design. By the time the company folded in 1931, fewer than fifty of the amazing Model E steam cars had been produced. For his whole career, until his death in 1961, Abner Doble remained adamant that steam-powered automobiles were at least equal to gasoline cars, if not superior. Given the evidence, he may have been right. Many of the Model E Dobles which have survived are still in good working condition, some having been driven over half a million miles with only normal maintenance. Astonishingly, an unmodified Doble Model E runs clean enough to pass the emissions laws in California today, and they are pretty strict. It is true that the technology poses some difficult problems, but you cannot help but wonder how efficient a steam car might be with the benefit of modern materials and computers. Under the current pressure to improve automotive performance and reduce emissions, it is not unthinkable that the steam car may rise again.`;

  t3.reading.passages[2].text = `Picture this scene. It’s an English literature lesson in a UK school, and the teacher has just read an extract from Shakespeare’s Romeo and Juliet with a class of 15-year-olds. He’s given some of the students copies of No Fear Shakespeare, a kid-friendly translation of the original. For three students, even these literacy demands are beyond them. Another girl simply can’t focus and he gives her pens and paper to draw with. The teacher can ask the No Fear group to identify the key characters and maybe provide a tentative plot summary. He can ask most of the class about character development, and five of them might be able to support their statements with textual evidence. Now two curious students are wondering whether Shakespeare advocates living a life of moderation or one of passionate engagement.

As a teacher myself, I’d think my lesson would be going rather well if the discussion went as described above. But wouldn’t this kind of class work better if there weren’t such a huge gap between the top and the bottom? If we put all the kids who needed literacy support into one class, and all the students who want to discuss the virtue of moderation into another?

The practice of ‘streaming’, or ‘tracking’, involves separating students into classes depending on their diagnosed levels of attainment. At a macro level, it requires the establishment of academically selective schools for the brightest students, and comprehensive schools for the rest. Within schools, it means selecting students into a ‘stream’ of general ability, or ‘sets’ of subject-specific ability. The practice is intuitively appealing to almost every stakeholder.

I have heard the mixed-ability model attacked by way of analogy: a group hike. The fittest in the group take the lead and set a brisk pace, only to have to stop and wait every 20 minutes. This is frustrating, and their enthusiasm wanes. Meanwhile, the slowest ones are not only embarrassed but physically struggling to keep up. What’s worse, they never get a long enough break. They honestly just want to quit. Hiking, they feel, is not for them.

Mixed-ability classes bore students, frustrate parents and burn out teachers. The brightest ones will never summit Mount Qomolangma, and the stragglers won’t enjoy the lovely stroll in the park they are perhaps more suited to. Individuals suffer at the demands of the collective, mediocrity prevails. So: is learning like hiking?

The current pedagogical paradigm is arguably that of constructivism, which emerged out of the work of psychologist Lev Vygotsky. In the 1930s, Vygotsky emphasised the importance of targeting a student’s specific ‘zone of proximal development’ (ZPD). This is the gap between what they can achieve only with support – teachers, textbooks, worked examples, parents and so on – and what they can achieve independently. The purpose of teaching is to provide and then gradually remove this ‘scaffolding’ until they are autonomous. If we accept this model, it follows that streaming students with similar ZPDs would be an efficient and effective solution. And that forcing everyone on the same hike – regardless of aptitude – would be madness.

Despite all this, there is limited empirical evidence to suggest that streaming results in better outcomes for students. Professor John Hattie, director of the Melbourne Education Research Institute, notes that ‘tracking has minimal effects on learning outcomes’. What is more, streaming appears to significantly – and negatively – affect those students assigned to the lowest sets. These students tend to have much higher representation of low socioeconomic class. Less significant is the small benefit for those lucky clever students in the higher sets. The overall result is that the smart stay smart and the dumb get dumber, further entrenching the social divide.

In the latest update of Hattie’s influential meta-analysis of factors influencing student achievement, one of the most significant factors is the teachers’ estimate of achievement. Streaming students by diagnosed achievement automatically limits what the teacher feels the student is capable of. Meanwhile, in a mixed environment, teachers’ estimates need to be more diverse and flexible.

While streaming might seem to help teachers effectively target a student’s ZPD, it can underestimate the importance of peer-to-peer learning. A crucial aspect of constructivist theory is the role of the MKO – ‘more knowledgeable other’ – in knowledge construction. While teachers are traditionally the MKOs in classrooms, the value of knowledgeable student peers must not go unrecognised either.

I find it amazing to watch students get over an idea to their peers in ways that I would never think of. They operate with different language tools and different social tools from teachers and, having just learnt it themselves, they possess similar cognitive structures to their struggling classmates. There is also something exciting about passing on skills and knowledge that you yourself have just mastered – a certain pride and zeal, a certain freshness to the interaction between ‘teacher’ and ‘learner’ that is often lost by the expert for whom the steps are obvious and the joy of discovery forgotten.

Having a variety of different abilities in a collaborative learning environment provides valuable resources for helping students meet their learning needs, not to mention improving their communication and social skills. And today, more than ever, we need the many to flourish – not suffer at the expense of a few bright stars. Once a year, I go on a hike with my class, a mixed bunch of students. It is challenging. The fittest students realise they need to encourage the reluctant. There are lookouts who report back, and extra items to carry for others. We make it – together.`;

  // ----------------------- 写作（真实题目 + 范文示例） -----------------------
  t3.writing.tasks = [
    {
      task: 'Task 1 (小作文)',
      type: '图表描述 - 平面图对比',
      prompt: 'The diagram below shows the floor plan of a public library 20 years ago and how it looks now.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
      modelAnswer: 'The diagrams illustrate the layout of a public library two decades ago and its current arrangement. Overall, the library has been modernised and reorganised: the central reading areas have been reduced and replaced by computer-related facilities and a cafe, while the book collection has been concentrated along the outer edges.\n\nTwenty years ago, the building was divided into clear zones. Near the entrance were the enrolment desk and a separate café, while reading tables occupied the central space. Fiction and non-fiction books were housed in two large rooms on the left and right, with a reference section at the far right. There was also a children’s books room at the top left.\n\nIn the current plan, the central reading tables have disappeared. The left side now contains a computer room and a separate IT centre, reflecting the growth of digital services. The café has been moved to the central area near the entrance, and the enrolment desk remains close by. The right-hand side is now devoted entirely to book storage, with non-fiction at the bottom right and fiction at the top right, while the former reference section has been removed. The children’s books area has been relocated to the bottom left.\n\nIn summary, the library has shifted from a reading-and-borrowing focus to a more technology-oriented space, with books pushed to the periphery.',
      tips: '先总览再分述；对比“过去 vs 现在”的空间功能变化；重点写显著变化（计算机房、咖啡区位移、中部阅览桌消失）；至少150词'
    },
    {
      task: 'Task 2 (大作文)',
      type: '议论文（积极 / 消极发展）',
      prompt: 'In many countries around the world, rural people are moving to cities, so the population in the countryside is decreasing.\n\nDo you think this is a positive or a negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
      modelAnswer: 'In recent decades, large numbers of people have left the countryside to settle in cities, and rural populations are shrinking as a result. In my view, this is largely a negative development, although it does bring some benefits.\n\nThe most obvious advantage is economic. Migrants to cities often find better-paid work and access to services such as healthcare and education that villages cannot provide. Families may raise their standard of living, and cities gain the labour they need to grow. From a national perspective, urban concentration can increase productivity and tax revenue.\n\nHowever, the drawbacks are considerable. In the countryside, the loss of young, working-age people leaves behind an ageing population and a shortage of labour for farming and local services. Schools and shops close, communities weaken, and traditional ways of life disappear. Environmentally, abandoned land may degrade, while cities suffer overcrowding, higher living costs and pressure on housing and transport.\n\nMoreover, the move is not always positive for the migrants themselves. Many end up in low-paid, insecure jobs and poor housing, and they may lose the social support of their home communities. The promised urban opportunity is therefore not guaranteed.\n\nIn conclusion, while city migration offers individuals some real advantages, the overall effect on both rural and urban areas is more harmful than beneficial, and governments should do more to make village life viable.',
      tips: '明确立场（正/负）；双边各写一段并举例；可承认对方合理之处再反驳；结构清晰、连接自然；至少250词'
    }
  ];

  // ----------------------- 口语（真实话题 + 参考回答示例） -----------------------
  t3.speaking.parts = [
    {
      part: 'Part 1: Introduction & Interview',
      intro: '考官就日常话题提问，约4-5分钟。话题：Online shopping（网购）',
      questions: [
        { q: 'How often do you buy things online? [Why?]', a: '参考回答: I buy things online about once a week – mostly books and everyday items – because it’s convenient and often cheaper than going to the shops.' },
        { q: 'What was the last thing you bought online?', a: '参考回答: The last thing I bought was a pair of running shoes from a sports website; they arrived within two days.' },
        { q: 'Do you ever see things in shops and then buy them online? [Why/Why not?]', a: '参考回答: Yes, sometimes I try clothes on in a store to check the size, then order them online where they’re on sale.' },
        { q: 'Do you think the popularity of online shopping is changing your town or city centre? [Why/Why not?]', a: '参考回答: Definitely. Several small shops in my town have closed, and the centre feels quieter because people now prefer delivery to browsing.' }
      ]
    },
    {
      part: 'Part 2: Long Turn (Cue Card)',
      intro: '根据题目卡准备1分钟，独自陈述2分钟',
      cueCard: 'Describe a time when you enjoyed visiting a member of your family in their home.\n\nYou should say:\n– who you visited and where they lived\n– why you made this visit\n– what happened during this visit\n– and explain what you enjoyed about this visit.',
      modelAnswer: '参考回答:\n\nI’d like to talk about the time I visited my aunt in the countryside last spring. She lives in a small village about two hours from my city, in a cosy old house with a big garden.\n\nI made the visit because I had a short holiday and wanted a break from my studies, and she had invited me for the weekend. When I arrived, she welcomed me with homemade food and showed me around her garden, which was full of vegetables and flowers.\n\nDuring the visit we cooked together, went for a long walk by the river, and in the evening we sat by the fire chatting about our family history. It was very relaxed and different from my usual busy life.\n\nWhat I enjoyed most was the peace and the feeling of being cared for. My aunt is a great storyteller, and I learned a lot about my grandparents. It reminded me how important family is, and I left feeling refreshed and happy.',
      tips: '覆盖全部四个要点；用过去时；加入具体细节与感受；控制2分钟'
    },
    {
      part: 'Part 3: Discussion',
      intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Family occasions',
      questions: [
        { q: 'When do families celebrate together in your country?', a: '参考回答: We usually gather for the Spring Festival, national holidays and big events like weddings or a child’s birthday.' },
        { q: 'How often do all the generations in a family come together in your country?', a: '参考回答: Not very often – maybe only two or three times a year, because relatives often live in different cities.' },
        { q: 'Why is it that some people might not enjoy attending family occasions?', a: '参考回答: Some find them stressful because of awkward questions from elders or because they feel compared with cousins.' },
        { q: 'Do you think it is a good thing for parents to help their children with schoolwork?', a: '参考回答: It can be good if done patiently, but too much help may stop children from learning independently.' },
        { q: 'How important do you think it is for families to eat together at least once a day?', a: '参考回答: Quite important – it’s a chance to communicate and bond, though modern schedules make it hard.' },
        { q: 'Do you believe that everyone in a family should share household tasks?', a: '参考回答: Yes, sharing tasks teaches responsibility and keeps the home fairer for all members.' }
      ]
    }
  ];

  // ----------------------- 听力原文脚本（真实，覆盖 18-3-*） -----------------------
  LS['18-3-0'] = `BREDA: Hello, Wayside Camera Club, Breda speaking.

DAN: Oh, hello, um, my name’s Dan and I’d like to join your club.

BREDA: That’s great, Dan. We have an application form – would you like to complete it over the phone, then you can ask any questions you might have?

DAN: Oh, yes, thanks.

BREDA: OK, so what’s your family name? It’s Green – Dan Green.

DAN: So – can I take your email address? Yes, it’s dan1068@market.com.

BREDA: Thanks. And what about your home address?

DAN: Well, I’m about ten miles away from your club in Peacetown. I live in a house there.

BREDA: OK, so what’s the house number and street?

DAN: It’s 52 Marrowfield Street.

BREDA: Is that M-A double R-O-W-F-I-E-L-D?

DAN: That’s right.

BREDA: .. and that’s Peacetown, you said?

DAN: Uhuh.

BREDA: So how did you hear about our club? Did you look on the internet?

DAN: I usually do that, but this time, well, I was talking to a relative the other day and he suggested it.

BREDA: Oh, is he a member too?

DAN: He belongs to another club – but he’d heard good things about yours.

BREDA: OK. So what do you hope to get from joining?

DAN: Well, one thing that really interests me is the competitions that you have. I enjoy entering those.

BREDA: Right. Anything else?

DAN: Well, I also like to socialise with other photographers.

BREDA: That’s great. So what type of membership would you like? What are the options?

BREDA: It’s 30 pounds a year for full membership or 20 pounds a year if you’re an associate.

DAN: I think I’ll go for the full membership, then.

BREDA: That’s a good idea because you can’t vote in meetings with an associate membership.

BREDA: If I could just find out a bit more about you…

DAN: OK.

BREDA: So you said you wanted to compete – have you ever won any photography competitions?

DAN: Not yet, but I have entered three in the past.

BREDA: Oh, that’s interesting. So why don’t you tell me something about those? Let’s start with the first one.

DAN: Well, the theme was entitled ‘Domestic Life’.

BREDA: I see – so it had to be something related to the home?

DAN: Yeah. I chose to take a photo of a family sitting round the dinner table having a meal, and, um, I didn’t win, but I did get some feedback.

BREDA: Oh, what did the judges say?

DAN: That it was too ‘busy’ as a picture.

BREDA: Aha – so it was the composition of the picture that they criticised?

DAN: That’s right – and once they’d told me that, I could see my mistake.

BREDA: So what was the theme of the second competition?

DAN: Well, my university was on the coast and that area gets a lot of beautiful sunsets, so that was the theme.

BREDA: Oh, sunsets, that’s a great theme.

DAN: Yes. The instructions were to capture the clouds as well – it couldn’t just be blue sky and a setting sun.

BREDA: Sure, cause they give you all those amazing pinks and purples.

DAN: Yeah – and I thought I’d done that well, but the feedback was that I should have waited a bit longer to get the shot.

BREDA: I see. So the timing wasn’t right.

DAN: Yes – I took it too soon, basically. And then the third competition I entered was called ‘Animal Magic’.

BREDA: Well, that’s a difficult subject!

DAN: I know! I had to take hundreds of shots.

BREDA: I’m sure – because animals move all the time.

DAN: That’s what we had to show – there had to be some movement in the scene. I got a great shot of a fox in the end, but I took it at night and, well, I suspected that it was a bit dark, which is what I was told.

BREDA: Well Dan – you seem to be really keen and we’d be delighted to have you in our club. I’m sure we can help with all those areas that you’ve outlined.

DAN: Thanks, that’s great.`;

  LS['18-3-1'] = `DAN: Thank you very much. Well, I need to start by talking about safety. You really need to know what you’re doing because some mushrooms are extremely poisonous. Having said that, once you know what to look for, it’s really worth doing for the amazing variety of mushrooms available – which you can’t get in the shops. But of course, you have to be very careful and that’s why I always say you should never consume mushrooms picked by friends or neighbours – always remember that some poisonous mushrooms look very similar to edible ones and it’s easy for people to get confused. The other thing to avoid is mushrooms growing beside busy roads for obvious reasons. But nothing beats the taste of freshly picked mushrooms – don’t forget that the ones in the shops are often several days old and past their best.

There are certain ideas about wild mushrooms that it’s important to be aware of. Don’t listen to people who tell you that it’s only OK to eat mushrooms that are pale or dull – this is completely untrue. Some edible mushrooms are bright red, for example. Personally, I prefer mushrooms cooked but it won’t do you any harm to eat them uncooked in salads – it’s not necessary to peel them. Another thing you should remember is that you can’t tell if a mushroom is safe to eat by its smell – some of the most deadly mushrooms have no smell and taste quite nice, apparently. Finally, just because deer or squirrels eat a particular mushroom doesn’t mean that you can.

Of course, mushroom picking is associated with the countryside but if you haven’t got a car, your local park can be a great place to start. There are usually a range of habitats where mushrooms grow, such as playing fields and wooded areas. But you need to be there first thing in the morning, as there’s likely to be a lot of competition – not just from people but wildlife too. The deer often get the best mushrooms in my local park.

If you’re a complete beginner, I wouldn’t recommend going alone or relying on photos in a book, even the one I’ve written! There are some really good phone apps for identifying mushrooms, but you can’t always rely on getting a good signal in the middle of a wood. If possible, you should go with a group led by an expert – you’ll stay safe and learn a lot that way.

Conservation is a really important consideration and you must follow a few basic rules. You should never pick all the mushrooms in one area – collect only enough for your own needs. Be very careful that you don’t trample on young mushrooms or other plants. And make sure you don’t pick any mushrooms that are endangered and protected by law.

There’s been a decline in some varieties of wild mushrooms in this part of the country. Restaurants are becoming more interested in locally sourced food like wild mushrooms, but the biggest problem is that so many new houses have been built in this area in the last ten years. And more water is being taken from rivers and reservoirs because of this, and mushroom habitats have been destroyed.

Anyway, a word of advice on storing mushrooms. Collect them in a brown paper bag and as soon as you get home, put them in the fridge. They’ll be fine for a couple of days, but it’s best to cook them as soon as possible – after washing them really carefully first, of course.

So everybody knows what a mushroom tastes like, right? Well, you’ll be surprised by the huge variety of wild mushrooms there are. Be adventurous! They’re great in so many dishes – stir fries, risottos, pasta. But just be aware that some people can react badly to certain varieties so it’s a good idea not to eat huge quantities to begin with.

OK, so now I’m going to show you …`;

  LS['18-3-2'] = `YONG MAN: That seminar yesterday on automation and the future of work was really good, wasn’t it? Looking at the first industrial revolution in Britain in the 19th century and seeing how people reacted to massive change was a real eye-opener.

YONG WOMAN: Yes. It was interesting to hear how people felt about automation then and what challenges they faced. I didn’t know that first started with workers in the textile industry.

YONG MAN: With those protesting workers called the Luddites destroying their knitting machines because they were so worried about losing their jobs.

YONG WOMAN: Yes, and ultimately, they didn’t achieve anything. And anyway, industrialization created more jobs than it destroyed.

YONG MAN: Yes, that’s true – but it probably didn’t seem a positive thing at the time. I can see why the Luddites felt so threatened.

YONG WOMAN: I know. I’m sure I would have felt the same. The discussion about the future of work was really optimistic for a change. I like the idea that work won’t involve doing boring, repetitive tasks, as robots will do all that. Normally, you only hear negative stuff about the future.

YONG MAN: Bit too optimistic, don’t you think? For example, I can’t see how people are about to have more leisure time, when all the evidence shows people are spending longer than ever at work.

YONG WOMAN: No – that’s true. And what about lower unemployment? I’m not so sure about that.

YONG MAN: Perhaps in the long term – but not in the foreseeable future.

YONG WOMAN: Mmm. And I expect most people will be expected to work until they’re much older – as everyone’s living much longer.

YONG MAN: That’s already happening.

YONG WOMAN: I enjoyed all that stuff on how technology has changed some jobs and how they’re likely to change in the near future.

YONG MAN: Yeah, incredible. Like accountants. You might think all the technological innovations would have put them out of a job, but in fact there are more of them than ever. They’re still really in demand and have become far more efficient.

YONG WOMAN: Right. That was amazing. Twenty times more accountants in this country compared to the 19th century.

YONG MAN: I know. I’d never have thought that demand for hairdressing would have gone up so much in the last hundred years. One hairdresser for every 287 people now, compared to one for over 1,500.

YONG WOMAN: Yeah because people’s earning power has gone up so they can afford to spend more on personal services like that.

YONG MAN: But technology hasn’t changed the actual job that much.

YONG WOMAN: No, they’ve got hairdryers, etc. but it’s one job where you don’t depend on a computer. The kind of work that administrative staff do has changed enormously, thanks to technology. Even 20 years ago there were secretaries doing dictation and typing.

YONG MAN: Yes. Really boring compared to these days when they’re given much more responsibility and higher status.

YONG WOMAN: Mmm. A lot of graduates go in for this kind of work now. I’d expected there to be a much bigger change in the number of agricultural workers in the 19th century. But the 1871 census showed that roughly 25% of the population worked on the land.

YONG MAN: Yeah, I’d have assumed it would be more than 50%. Now it’s less than 0.2%.

YONG WOMAN: What about care workers?

YONG MAN: They barely existed in the 19th century as people’s lifespan was so much shorter. But now of course this sector will see huge growth.

YONG WOMAN: Yeah – and it’s hard enough to meet current demand. The future looks quite bleak for bank clerks. They’ve been in decline since ATMs were introduced in the eighties.

YONG MAN: And technology will certainly make most of the jobs they do now redundant, I think.

YONG WOMAN: I agree, although the situation may change. It’s very hard to predict what will happen.`;

  LS['18-3-3'] = `In today’s astronomy lecture, I’m going to talk about the need for a system to manage the movement of satellites and other objects in orbit around the Earth. In other words, a Space Traffic Management system. We already have effective Air Traffic Control systems that are used internationally to ensure that planes navigate our skies safely. Well, Space Traffic Management is a similar concept, but focusing on the control of satellites.

The aim of such a system would be to prevent the danger of collisions in space between the objects in orbit around the Earth. In order to do this, we’d need to have a set of legal measures, and we’d also have to develop the technical systems to enable us to prevent such accidents.

But unfortunately, at present we don’t actually have a Space Traffic Management system that works. So why not? What are the problems in developing such a system?

Well, for one thing, satellites are relatively cheap these days, compared with how they were in the past, meaning that more people can afford to put them into space. So there’s a lot more of them out there, and people aren’t just launching single satellites but whole constellations, consisting of thousands of them designed to work together. So space is getting more crowded every day.

But in spite of this, one thing you may be surprised to learn is that you can launch a satellite into space and, once it’s out there, it doesn’t have to send back any information to Earth to allow its identification. So while we have international systems for ensuring we know where the planes in our skies are, and to prevent them from colliding with one another, when it comes to the safety of satellites, at present we don’t have anything like enough proper ways of tracking them.

And it isn’t just entire satellites that we need to consider. A greater threat is the huge amount of space debris in orbit around the Earth – broken bits of satellite and junk from space stations and so on. And some of these are so small that they can be very hard to identify, but they can still be very dangerous.

In addition, some operators may be unwilling to share information about the satellites they’ve launched. For example, a satellite may be designed for military purposes, or it may have been launched for commercial reasons, and the operators don’t want competitors to have information about it.

And even if the operators are willing to provide it, the information isn’t easy to collect. Details are needed about the object itself as well as about its location at a particular time – and remember that a satellite isn’t very big, and it’s likely to be moving at thousands of kilometres an hour. We don’t have any sensors that can constantly follow something moving so fast, so all that the scientists can do is to put forward a prediction concerning where the satellite is heading next.

So those are some of the problems that we’re facing. Let’s consider now some of the solutions that have been suggested. One key issue is the way in which information is dealt with. We need more information, but it also needs to be accessible at a global level, so we need to establish shared standards that we can all agree on for the way in which this information is presented. We already do this in other areas of science, so although this is a challenge, it’s not an impossible task. Then, as all this information’s collected, it needs to be put together so it can be used, and that will involve creating a single database on which it can be entered.

As we continue to push forward new developments, congestion of the space environment is only going to increase. To cope with this, we need to develop a system like the one I’ve described to coordinate the work of the numerous spacecraft operators, but it’s also essential that this system is one that establishes trust in the people that use it, both nationally and at a global level.

One interesting development …`;

  // ====================================================================
  //  TEST 4
  // ====================================================================
  var t4 = ensureTest(4, 'Test 4');

  // ----------------------- 听力（真实） -----------------------
  t4.listening.sections = [
    {
      part: 'Part 1',
      context: '就业中介 Greg 致电 Julie 介绍一份医疗中心接待员职位',
      type: '笔记填空（每空一词或一数字）',
      questions: [
        { q: 'Role: ___ (a position at a medical centre).', a: 'receptionist' },
        { q: 'Location: Fordham ___ Centre.', a: 'medical' },
        { q: 'Address: ___ Road, Fordham (near the station).', a: 'Chastons' },
        { q: 'Work involves dealing with enquiries and making ___ (and rescheduling).', a: 'appointments' },
        { q: 'Also responsible for keeping the centre’s internal ___ up to date.', a: 'database' },
        { q: 'Requirement: relevant ___ (essential).', a: 'experience' },
        { q: 'Must be calm and ___ when dealing with the public.', a: 'confident' },
        { q: 'Type of contract: a ___ job (to the end of September).', a: 'temporary' },
        { q: 'Hours: start 7.45 a.m., finish at ___ p.m.', a: '1.15' },
        { q: 'Facility: ___ is available onsite for staff.', a: 'parking' }
      ]
    },
    {
      part: 'Part 2',
      context: '向导介绍 Museum of Farming Life 的背景与各个展区',
      type: '单选题 + 匹配题',
      questions: [
        { q: 'Question 11: The museum building was originally:', a: 'B' },
        { q: 'Question 12: The university uses part of the museum building as:', a: 'A' },
        { q: 'Question 13: What does the guide say about the entrance fee?', a: 'A' },
        { q: 'Question 14: What are visitors advised to leave in the cloakroom?', a: 'C' },
        { q: 'Question 15: Four Seasons area:', a: 'F' },
        { q: 'Question 16: Farmhouse Kitchen:', a: 'G' },
        { q: 'Question 17: A Year on the Farm:', a: 'E' },
        { q: 'Question 18: Wagon Walk:', a: 'A' },
        { q: 'Question 19: Bees are Magic:', a: 'C' },
        { q: 'Question 20: The Pond:', a: 'B' }
      ]
    },
    {
      part: 'Part 3',
      context: '学生 Seb 与 Lia 在导师指导下讨论折纸（origami）作为教学工具的视频课',
      type: '多选题（选两项）+ 匹配题 + 单选题',
      questions: [
        { q: 'Questions 21-22: Which TWO educational skills were shown in the video of children doing origami?', a: 'B, D' },
        { q: 'Question 23: Sid', a: 'D' },
        { q: 'Question 24: Jack', a: 'A' },
        { q: 'Question 25: Naomi', a: 'C' },
        { q: 'Question 26: Anya', a: 'G' },
        { q: 'Question 27: Zara', a: 'F' },
        { q: 'Question 28: Before an origami activity, the students think it is important for the teacher to:', a: 'A' },
        { q: 'Question 29: The students agree some teachers might be unwilling to use origami because:', a: 'B' },
        { q: 'Question 30: Why do the students decide to use origami in their maths teaching practice?', a: 'C' }
      ]
    },
    {
      part: 'Part 4',
      context: '关于法国作家 Victor Hugo 及其根西岛住宅的讲座',
      type: '笔记填空（每空一词）',
      questions: [
        { q: 'We know more about the novel’s ___ than about its author.', a: 'plot' },
        { q: 'Hugo spoke publicly about social issues such as ___ and education.', a: 'poverty' },
        { q: 'Because of exile, Hugo had to live elsewhere in ___.', a: 'Europe' },
        { q: 'He bought his Guernsey house using income from the sale of his ___.', a: 'poetry' },
        { q: 'The ground floor contains portraits, ___ and tapestries he valued.', a: 'drawings' },
        { q: 'He bought cheap ___ made of wood and turned it into wall carvings.', a: 'furniture' },
        { q: 'The first floor has Chinese-designed wallpaper and ___.', a: 'lamps' },
        { q: 'He wrote in a top-floor room with a view of the ___.', a: 'harbour' },
        { q: 'He entertained writers as well as poor ___ in his house.', a: 'children' },
        { q: 'Hugo’s ___ gave the house to the city of Paris in 1927.', a: 'relatives' }
      ]
    }
  ];

  // ----------------------- 阅读（真实） -----------------------
  t4.reading.passages = [
    {
      title: 'Passage 1: Green roofs',
      difficulty: '中等',
      summary: '绿色屋顶的好处、与其他城市绿化措施的结合、推广障碍及新变体（蓝屋顶、棕屋顶等）。',
      questions: [
        { type: '段落信息匹配 (A–E)', q: 'mention of several challenges to be overcome before a green roof can be installed', a: 'D' },
        { type: '段落信息匹配 (A–E)', q: 'reference to a city where green roofs have been promoted for many years', a: 'C' },
        { type: '段落信息匹配 (A–E)', q: 'a belief that existing green roofs should be used as a model for new ones', a: 'E' },
        { type: '段落信息匹配 (A–E)', q: 'examples of how green roofs work with other green urban initiatives', a: 'B' },
        { type: '段落信息匹配 (A–E)', q: 'the need to make a persuasive argument for the financial benefits of green roofs', a: 'D' },
        { type: '摘要填空 (ONE WORD ONLY)', q: 'Green roofs help reduce spending on ___.', a: 'energy' },
        { type: '摘要填空 (ONE WORD ONLY)', q: 'Green roofs / roofs can be used for producing ___.', a: 'food' },
        { type: '摘要填空 (ONE WORD ONLY)', q: 'The medical profession recommends ___ as an activity.', a: 'gardening' },
        { type: '摘要填空 (ONE WORD ONLY)', q: 'Access to green space helps prevent physical problems such as ___.', a: 'obesity' },
        { type: '多选题 (TWO letters, Paragraph C)', q: 'Questions 10-11: Which TWO advantages of using newer buildings for green roofs are mentioned in Paragraph C?', a: 'C, D' },
        { type: '多选题 (TWO letters, Paragraph E)', q: 'Questions 12-13: Which TWO aims of new variations on green roofs are mentioned in Paragraph E?', a: 'A, D' }
      ]
    },
    {
      title: 'Passage 2: The growth mindset',
      difficulty: '中偏难',
      summary: '成长型思维理论的起源、Dweck 实验、受到的批评以及在课堂中应用的局限。',
      questions: [
        { type: '单选题', q: 'What can we learn from the first paragraph?', a: 'B' },
        { type: '单选题', q: 'The second paragraph describes how schools encourage students to:', a: 'C' },
        { type: '单选题', q: 'In the third paragraph, students with a fixed mindset:', a: 'D' },
        { type: '人物匹配 (A–E)', q: 'Andrew Gelman – methodology behind studies not strict enough', a: 'C' },
        { type: '人物匹配 (A–E)', q: 'Carol Dweck – idea incorrectly interpreted / misapplied', a: 'B' },
        { type: '人物匹配 (A–E)', q: 'Alfred Binet – intellectual ability as an unchangeable feature', a: 'A' },
        { type: '人物匹配 (A–E)', q: 'Yeager and Walton – should be promoted without students being aware', a: 'E' },
        { type: '人物匹配 (A–E)', q: 'Carol Dweck – not simply about boosting morale', a: 'B' },
        { type: '人物匹配 (A–E)', q: 'Timothy Bates – research shows no effect on academic achievement', a: 'D' },
        { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Dweck handled criticisms of her work in an admirable way.', a: 'YES' },
        { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Self-perception is a more effective driver of achievement than actual achievement.', a: 'NO' },
        { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Recent evidence attracted unfair media coverage.', a: 'NOT GIVEN' },
        { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Deliberate attempts to encourage high achievement may have a negative effect.', a: 'YES' }
      ]
    },
    {
      title: 'Passage 3: Alfred Wegener: science, exploration and the theory of continental drift',
      difficulty: '难',
      summary: '传记作者 Greene 谈 Wegener 的生平与大陆漂移说，及其与板块构造论的关系。',
      questions: [
        { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Wegener’s ideas were widely disputed while he was alive.', a: 'YES' },
        { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'The fixed-continent view was defended in respected publications.', a: 'NOT GIVEN' },
        { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Wegener relied on a limited range of scientific fields.', a: 'NO' },
        { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'The similarities between his theory and plate tectonics are enormous.', a: 'NO' },
        { type: '摘要选词 (A–J)', q: 'The writer’s ___ is that Wegener was not a geologist.', a: 'I' },
        { type: '摘要选词 (A–J)', q: 'His ___ were limited to atmospheric physics and geophysics.', a: 'F' },
        { type: '摘要选词 (A–J)', q: 'Wegener was already a person of ___ before the theory.', a: 'A' },
        { type: '摘要选词 (A–J)', q: 'His ___ of 52 hours in a balloon.', a: 'C' },
        { type: '摘要选词 (A–J)', q: 'His ___ of Greenland’s coast.', a: 'H' },
        { type: '摘要选词 (A–J)', q: 'The attention of a ___ of German scientists.', a: 'E' },
        { type: '单选题', q: 'What is Greene doing in the fifth paragraph?', a: 'B' },
        { type: '单选题', q: 'What is said about Wegener in the sixth paragraph?', a: 'C' },
        { type: '单选题', q: 'What does Greene say about other famous scientists?', a: 'D' },
        { type: '单选题', q: 'What is the main point of the final paragraph?', a: 'C' }
      ]
    }
  ];

  // 阅读原文（真实逐字）
  t4.reading.passages[0].text = `Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world. More and more private companies and city authorities are investing in green roofs, drawn to their wide-ranging benefits. Among the benefits are saving on energy costs, mitigating the risk of floods, making habitats for urban wildlife, tackling air pollution and even growing food. These increasingly radical urban designs can help cities adapt to the monumental problems they face, such as access to resources and a lack of green space due to development. But the involvement of city authorities, businesses and other institutions is crucial to ensuring their success – as is research investigating different options to suit the variety of rooftop spaces found in cities. The UK is relatively new to developing green roofs, and local governments and institutions are playing a major role in spreading the practice. London is home to much of the UK’s green roof market, mainly due to forward-thinking policies such as the London Plan, which has paved the way to more than doubling the area of green roofs in the capital.

Ongoing research is showcasing how green roofs in cities can integrate with ‘living walls’: environmentally friendly walls which are partially or completely covered with greenery, including a growing medium, such as soil or water. Research also indicates that green roofs can be integrated with drainage systems on the ground, such as street trees, so that the water is managed better and the built environment is made more sustainable. There is also evidence to demonstrate the social value of green roofs. Doctors are increasingly prescribing time spent gardening outdoors for patients dealing with anxiety and depression. And research has found that access to even the most basic green spaces can provide a better quality of life for dementia sufferers and help people avoid obesity.

In North America, green roofs have become mainstream, with a wide array of expansive, accessible and food-producing roofs installed in buildings. Again, city leaders and authorities have helped push the movement forward – only recently, San Francisco, USA, created a policy requiring new buildings to have green roofs. Toronto, Canada, has policies dating from the 1990s, encouraging the development of urban farms on rooftops. These countries also benefit from having newer buildings than in many parts of the world, which makes it easier to install green roofs. Being able to keep enough water at roof height and distribute it right across the rooftop is crucial to maintaining the plants on any green roof – especially on ‘edible roofs’ where fruit and vegetables are farmed. And it’s much easier to do this in newer buildings, which can typically hold greater weight, than to retro-fit old ones. Having a stronger roof also makes it easier to grow a greater variety of plants, since the soil can be deeper.

For green roofs to become the norm for new developments, there needs to be support from public authorities and private investors. Those responsible for maintaining buildings may have to acquire new skills, such as landscaping, and in some cases, volunteers may be needed to help out. Other considerations include installing drainage paths, meeting health and safety requirements and perhaps allowing access for the public, as well as planning restrictions and disruption from regular activities in and around the buildings during installation. To convince investors and developers that installing green roofs is worthwhile, economic arguments are still the most important. The term ‘natural capital’ has been developed to explain the economic value of nature; for example, measuring the money saved by installing natural solutions to protect against flood damage, adapt to climate change or help people lead healthier and happier lives.

As the expertise about green roofs grows, official standards have been developed to ensure that they are designed, constructed and maintained properly, and function well. Improvements in the science and technology underpinning green roof development have also led to new variations in the concept. For example, ‘blue roofs’ enable buildings to hold water over longer periods of time, rather than draining it away quickly – crucial in times of heavier rainfall. There are also combinations of green roofs with solar panels, and ‘brown roofs’ which are wilder in nature and maximise biodiversity. If the trend continues, it could create new jobs and a more vibrant and sustainable local food economy – alongside many other benefits. There are still barriers to overcome, but the evidence so far indicates that green roofs have the potential to transform cities and help them function sustainably long into the future. The success stories need to be studied and replicated elsewhere, to make green, blue, brown and food-producing roofs the norm in cities around the world.`;

  t4.reading.passages[1].text = `Over the past century, a powerful idea has taken root in the educational landscape. The concept of intelligence as something innate has been supplanted by the idea that intelligence is not fixed, and that, with the right training, we can be the authors of our own cognitive capabilities. Psychologist Alfred Binet, the developer of the first intelligence tests, was one of many 19th-century scientists who held that earlier view and sought to quantify cognitive ability. Then, in the early 20th century, progressive thinkers revolted against the notion that inherent ability is destiny. Instead, educators such as John Dewey argued that every child’s intelligence could be developed, given the right environment.

‘Growth mindset theory’ is a relatively new – and extremely popular – version of this idea. In many schools today you will see hallways covered in motivational posters and hear speeches on the mindset of great sporting heroes who simply believed their way to the top. A major focus of the growth mindset in schools is coaxing students away from seeing failure as an indication of their ability, and towards seeing it as a chance to improve that ability. As educationalist Jeff Howard noted several decades ago: ‘Smart is not something that you just are, smart is something that you can get.’

The idea of the growth mindset is based on the work of psychologist Carol Dweck in California in the 1990s. In one key experiment, Dweck divided a group of 10- to 12-year-olds into two groups. All were told that they had achieved a high score on a test but the first group were praised for their intelligence in achieving this, while the others were praised for their effort. The second group – those who had been instilled with a ‘growth mindset’ – were subsequently far more likely to put effort into future tasks. Meanwhile, the former took on only those tasks that would not risk their sense of worth. This group had inferred that success or failure is due to innate ability, and this ‘fixed mindset’ had led them to fear of failure and lack of effort. Praising ability actually made the students perform worse, while praising effort emphasised that change was possible.

One of the greatest impediments to successfully implementing a growth mindset, however, is the education system itself: in many parts of the world, the school climate is obsessed with performance in the form of constant testing, analysing and ranking of students – a key characteristic of the fixed mindset. Nor is it unusual for schools to create a certain cognitive dissonance, when they applaud the benefits of a growth mindset but then hand out fixed target grades in lessons based on performance.

Aside from the implementation problem, the original growth mindset research has also received harsh criticism. The statistician Andrew Gelman claims that ‘their research designs have enough degrees of freedom that they could take their data to support just about any theory at all’. Professor of Psychology Timothy Bates, who has been trying to replicate Dweck’s work, is finding that the results are repeatedly null. He notes that: ‘People with a growth mindset don’t cope any better with failure … Kids with the growth mindset aren’t getting better grades, either before or after our intervention study.’

Much of this criticism is not lost on Dweck, and she deserves great credit for responding to it and adapting her work accordingly. In fact, she argues that her work has been misunderstood and misapplied in a range of ways. She has also expressed concerns that her theories are being misappropriated in schools by being conflated with the self-esteem movement: ‘For me the growth mindset is a tool for learning and improvement. It’s not just a vehicle for making children feel good.’

But there is another factor at work here. The failure to translate the growth mindset into the classroom might reflect a misunderstanding of the nature of teaching and learning itself. Growth mindset supporters David Yeager and Gregory Walton claim that interventions should be delivered in a subtle way to maximise their effectiveness. They say that if adolescents perceive a teacher’s intervention as conveying that they are in need of help, this could undo its intended effects.

A lot of what drives students is their innate beliefs and how they perceive themselves. There is a strong correlation between self-perception and achievement, but there is evidence to suggest that the actual effect of achievement on self-perception is stronger than the other way round. To stand up in a classroom and successfully deliver a good speech is a genuine achievement, and that is likely to be more powerfully motivating than vague notions of ‘motivation’ itself.

Recent evidence would suggest that growth mindset interventions are not the elixir of student learning that its proponents claim it to be. The growth mindset appears to be a viable construct in the lab, which, when administered in the classroom via targeted interventions, doesn’t seem to work. It is hard to dispute that having faith in the capacity to change is a good attribute for students. Paradoxically, however, that aspiration is not well served by direct interventions that try to instil it.

Motivational posters and talks are often a waste of time, and might well give students a deluded notion of what success actually means. Teaching concrete skills such as how to write an effective introduction to an essay then praising students’ effort in getting there is probably a far better way of improving confidence than telling them how unique they are, or indeed how capable they are of changing their own brains. Perhaps growth mindset works best as a philosophy and not an intervention.`;

  t4.reading.passages[2].text = `This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as ‘continental drift’. Wegener proposed this theory in 1912 and developed it extensively for nearly 20 years. His book on the subject, The Origin of Continents and Oceans, went through four editions and was the focus of an international controversy in his lifetime and for some years after his death.

Wegener’s basic idea was that many mysteries about the Earth’s history could be solved if one supposed that the continents moved laterally, rather than supposing that they remained fixed in place. Wegener showed in great detail how such continental movements were plausible and how they worked, using evidence from a large number of sciences including geology, geophysics, paleontology, and climatology. Wegener’s idea – that the continents move – is at the heart of the theory that guides Earth sciences today: namely plate tectonics. Plate tectonics is in many respects quite different from Wegener’s proposal, in the same way that modern evolutionary theory is very different from the ideas Charles Darwin proposed in the 1850s about biological evolution. Yet plate tectonics is a descendant of Alfred Wegener’s theory of continental drift, in quite the same way that modern evolutionary theory is a descendant of Darwin’s theory of natural selection.

When I started writing about Wegener’s life and work, one of the most intriguing things about him for me was that, although he came up with a theory on continental drift, he was not a geologist. He trained as an astronomer and pursued a career in atmospheric physics. When he proposed the theory of continental displacements in 1912, he was a lecturer in physics and astronomy at the University of Marburg, in southern Germany. However, he was not an ‘unknown’. In 1906 he had set a world record (with his brother Kurt) for time aloft in a hot-air balloon: 52 hours. Between 1906 and 1908 he had taken part in a highly publicized and extremely dangerous expedition to the coast of northeast Greenland. He had also made a name for himself amongst a small circle of meteorologists and atmospheric physicists in Germany as the author of a textbook, Thermodynamics of the Atmosphere (1911), and of a number of interesting scientific papers.

As important as Wegener’s work on continental drift has turned out to be, it was largely a sideline to his interest in atmospheric physics, geophysics, and paleoclimatology, and thus I have been at great pains to put Wegener’s work on continental drift in the larger context of his other scientific work, and in the even larger context of atmospheric sciences in his lifetime. This is a ‘continental drift book’ only to the extent that Wegener was interested in that topic and later became famous for it. My treatment of his other scientific work is no less detailed, though I certainly have devoted more attention to the reception of his ideas on continental displacement, as they were much more controversial than his other work.

Readers interested in the specific detail of Wegener’s career will see that he often stopped pursuing a given line of investigation (sometimes for years on end), only to pick it up later. I have tried to provide guideposts to his rapidly shifting interests by characterizing different phases of his life as careers in different sciences, which is reflected in the titles of the chapters. Thus, the index should be a sufficient guide for those interested in a particular aspect of Wegener’s life but perhaps not all of it. My own feeling, however, is that the parts do not make as much sense on their own as do all of his activities taken together. In this respect I urge readers to try to experience Wegener’s life as he lived it, with all the interruptions, changes of mind, and renewed efforts this entailed.

Wegener left behind a few published works but, as was standard practice, these reported the results of his work – not the journey he took to reach that point. Only a few hundred of the many thousands of letters he wrote and received in his lifetime have survived and he didn’t keep notebooks or diaries that recorded his life and activities. He was not active (with a few exceptions) in scientific societies, and did not seek to find influence or advance his ideas through professional contacts and politics, spending most of his time at home in his study reading and writing, or in the field collecting observations.

Some famous scientists, such as Newton, Darwin, and Einstein, left mountains of written material behind, hundreds of notebooks and letters numbering in the tens of thousands. Others, like Michael Faraday, left extensive journals of their thoughts and speculations, parallel to their scientific notebooks. The more such material a scientist leaves behind, the better chance a biographer has of forming an accurate picture of how a scientist’s ideas took shape and evolved.

I am firmly of the opinion that most of us, Wegener included, are not in any real sense the authors of our own lives. We plan, think, and act, often with apparent freedom, but most of the time our lives ‘happen to us’, and we only retrospectively turn this happenstance into a coherent narrative of fulfilled intentions. This book, therefore, is a story both of the life and scientific work that Alfred Wegener planned and intended and of the life and scientific work that actually ‘happened to him’. These are, as I think you will soon see, not always the same thing.

* Paleoclimatology – The study of past climates`;

  // ----------------------- 写作（真实题目 + 范文示例） -----------------------
  t4.writing.tasks = [
    {
      task: 'Task 1 (小作文)',
      type: '图表描述 - 折线图',
      prompt: 'The graph below shows the average monthly change in the prices of three metals during 2014.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
      modelAnswer: 'The line graph shows the average monthly percentage change in the prices of three metals – copper, lithium and nickel – over the course of 2014.\n\nOverall, the three metals followed different trends. Copper and nickel showed generally declining prices as the year went on, while lithium rose steadily and finished the year as the strongest performer.\n\nCopper started 2014 with a modest monthly increase but soon turned negative, fluctuating around a slight downward path and ending the year with a small average monthly fall. Nickel was more volatile: it rose sharply in the first few months, peaked around the middle of the year, then dropped and finished with a slight decline.\n\nIn contrast, lithium showed a clear upward trend. After a slow start it increased almost every month, with the rate of growth accelerating in the second half of the year, so that by December its average monthly change was the highest of the three.\n\nIn summary, 2014 was a weak year for copper and nickel prices but a strong one for lithium, whose consistent gains set it apart from the other two metals.',
      tips: '先总览（总体趋势）再分述三种金属；对比上升/下降与波动；关注起点与年末；至少150词'
    },
    {
      task: 'Task 2 (大作文)',
      type: '议论文（利弊权衡）',
      prompt: 'In many countries, people are now living longer than ever before. Some people say an ageing population creates problems for governments. Other people think there are benefits if society has more elderly people.\n\nTo what extent do the advantages of having an ageing population outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
      modelAnswer: 'People today live longer than in the past, and societies are ageing rapidly. While an ageing population clearly creates difficulties, I believe the disadvantages currently outweigh the advantages, although the benefits should not be ignored.\n\nThe main problems are economic and social. Governments face rising pension and healthcare costs, and a smaller working-age population must support a growing number of retirees, which can slow economic growth. Hospitals and care systems become strained, and there may be labour shortages in some sectors. Families, too, can feel the burden of caring for elderly relatives.\n\nHowever, there are real benefits. Older people accumulate experience and wisdom, and many remain active, volunteering or supporting their families financially and by caring for grandchildren. An ageing society can also encourage industries such as healthcare, leisure and accessible technology, creating new jobs. Moreover, longer lives mean more time for personal fulfilment and intergenerational bonds.\n\nIn my view, the advantages are worthwhile but largely personal, whereas the disadvantages are systemic and affect whole economies. Without reforms such as raising retirement ages, encouraging higher birth rates and automating care, the pressures on public finances will dominate.\n\nIn conclusion, while elderly people bring valuable contributions, the structural problems of an ageing population are greater, so its disadvantages currently outweigh its advantages.',
      tips: '明确“利弊权衡”立场；分别论述弊端（财政/劳动力）与好处（经验/新产业）；给出平衡结论；至少250词'
    }
  ];

  // ----------------------- 口语（真实话题 + 参考回答示例） -----------------------
  t4.speaking.parts = [
    {
      part: 'Part 1: Introduction & Interview',
      intro: '考官就日常话题提问，约4-5分钟。话题：Sleep（睡眠）',
      questions: [
        { q: 'How many hours do you usually sleep at night?', a: '参考回答: I usually sleep about seven hours on weekdays, though at weekends I might sleep a bit longer to catch up.' },
        { q: 'Do you sometimes sleep during the day? [Why/Why not?]', a: '参考回答: Rarely – I’m too busy, but if I’m really tired after a long trip I might take a short nap.' },
        { q: 'What do you do if you can’t get to sleep at night? [Why?]', a: '参考回答: I usually read a book or listen to calm music, because looking at my phone only keeps me awake.' },
        { q: 'Do you ever remember the dreams you’ve had while you were asleep?', a: '参考回答: Sometimes I remember vivid dreams the next morning, especially if they were unusual or a bit frightening.' }
      ]
    },
    {
      part: 'Part 2: Long Turn (Cue Card)',
      intro: '根据题目卡准备1分钟，独自陈述2分钟',
      cueCard: 'Describe a time when you met someone who you became good friends with.\n\nYou should say:\n– who you met\n– when and where you met this person\n– what you thought about this person\n– and explain why you think you became good friends with this person.',
      modelAnswer: '参考回答:\n\nI’d like to talk about a friend I met at university during my first year. His name is Leo, and we met on the opening day in the dormitory corridor when we were both moving in.\n\nAt first I thought he was a bit quiet and serious, but also friendly and polite. We ended up in the same class and started sitting together, and I soon realised he had a great sense of humour.\n\nWe became good friends because we shared the same interests – we both liked playing basketball and watching films – and we helped each other with coursework when one of us was struggling. More importantly, he was reliable and easy to talk to, so I always felt comfortable around him.\n\nLooking back, I think we became close so quickly because we arrived in a new place at the same time and supported each other through the challenges of starting university. He’s still one of my best friends today.',
      tips: '覆盖全部四个要点；用过去时；说明“为什么成为好友”的具体原因；控制2分钟'
    },
    {
      part: 'Part 3: Discussion',
      intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Friends（朋友）',
      questions: [
        { q: 'How important is it for children to have lots of friends at school?', a: '参考回答: It’s quite important for social development, but a few close friends may matter more than having many.' },
        { q: 'Do you think it is wrong for parents to influence which friends their children have?', a: '参考回答: Parents should guide gently, but completely controlling friendships is wrong and can backfire.' },
        { q: 'Why do you think children often choose different friends as they get older?', a: '参考回答: Their interests and personalities change, and they meet new people in different schools or activities.' },
        { q: 'If a person is moving to a new town, what is a good way for them to make friends?', a: '参考回答: Joining clubs, sports teams or volunteering helps, because shared activities create natural connections.' },
        { q: 'Can you think of any disadvantages of making new friends online?', a: '参考回答: You can’t always verify who they are, and online friendships may lack real support in daily life.' },
        { q: 'Would you say it is harder for people to make new friends as they get older?', a: '参考回答: Often yes, because adults have less free time and established routines, though it’s still possible through work or hobbies.' }
      ]
    }
  ];

  // ----------------------- 听力原文脚本（真实，覆盖 18-4-*） -----------------------
  LS['18-4-0'] = `JULIE: Hello?

GREG: Oh, hello. Is that Julie Davison?

JULIE: Yes.

GREG: This is Greg Preston from the Employment Agency. We met last week when you came in to enquire about office work.

JULIE: Oh, that’s right.

GREG: Now we’ve just had some details come in of a job which might interest you.

JULIE: OK.

GREG: So this is a position for a receptionist – I believe you’ve done that sort of work before?

JULIE: Yes, I have, I worked in a sports centre for a couple of years before I got married and had the children.

GREG: Right. Well, this job’s in Fordham, so not too far away for you, and it’s at the medical centre there.

JULIE: OK. So where exactly is that?

GREG: It’s quite near the station, on Chastons Road.

JULIE: Sorry?

GREG: Chastons Road – that’s C-H-A-S-T-O-N-S.

JULIE: OK, thanks. So what would the work involve? Dealing with enquiries from patients?

GREG: Yes, and you’d also be involved in making appointments, whether face to face or on the phone. And rescheduling them if necessary.

JULIE: Fine, that shouldn’t be a problem.

GREG: And another of your duties would be keeping the centre’s database up-to-date. Then you might have other general administrative duties as well, but those would be the main ones.

JULIE: OK.

GREG: Now when the details came in, I immediately thought of you because one thing they do require is someone with experience, and you did mention your work at the sports centre when you came in to see us.

JULIE: Yes, in fact I enjoyed that job. Is there anything else they’re looking for?

GREG: Well, they say it’s quite a high-pressure environment, they’re always very busy, and patients are often under stress, so they want someone who can cope with that and stay calm, and at the same time be confident when interacting with the public.

JULIE: Well, after dealing with three children all under five, I reckon I can cope with that.

GREG: I’m sure you can.

GREG: And then another thing they mention is that they’re looking for someone with good IT skills …

JULIE: Not a problem.

GREG: So you’d be interested in following this up?

JULIE: Sure. When would it start?

GREG: Well, they’re looking for someone from the beginning of next month, but I should tell you that this isn’t a permanent job, it’s temporary, so the contract would be just to the end of September. But they do say that there could be further opportunities after that.

JULIE: OK. And what would the hours be?

GREG: Well, they want someone who can start at a quarter to eight in the morning – could you manage that?

JULIE: Yes, my husband would have to get the kids up and off to my mother’s – she’s going to be looking after them while I’m at work. What time would I finish?

GREG: One fifteen.

JULIE: That should work out all right. I can pick the kids up on my way home, and then I’ll have the afternoon with them. Oh, one thing … is there parking available for staff at the centre?

GREG: Yes, there is. And it’s also on a bus route.

JULIE: Right. Well, I expect I’ll have the car but it’s good to know that. OK, so where do I go from here?

GREG: Well, if you’re happy for me to do so, I’ll forward your CV and references, and then the best thing would probably be for you to phone them so they can arrange for an interview.

JULIE: Great. Well thank you very much.

GREG: You’re welcome. Bye now.

JULIE: Bye.`;

  LS['18-4-1'] = `Good morning everyone, and welcome to the Museum of Farming Life. I understand it’s your first visit here, so I’d like to give you some background information about the museum and then explain a little about what you can see during your visit.

So, where we’re standing at the moment is the entrance to a large building that was constructed in 1880 as the home of a local businessman, Alfred Palmer, of the Palmer biscuit factory. It was later sold and became a hall of residence for students in 1911, and a museum in 1951. In 2005, a modern extension was built to accommodate the museum’s collections.

The museum’s owned by the university, and apart from two rooms that are our offices, the university uses the main part of the building. You may see students going into the building for lessons, but it’s not open to museum visitors, I’m afraid. It’s a shame because the interior architectural features are outstanding, especially the room that used to be the library.

Luckily, we’ve managed to keep entry to the museum free. This includes access to all the galleries, outdoor areas and the rooms for special exhibitions. We run activities for children and students, such as the museum club, for which there’s no charge. We do have a donation box just over there so feel free to give whatever amount you consider appropriate.

We do have a cloakroom, if you’d like to leave your coats and bags somewhere. Unlike other museums, photography is allowed here, so you might like to keep your cameras with you. You might be more comfortable not carrying around heavy rucksacks, though keep your coats and jackets on as it’s quite cold in the museum garden today.

I’d like to tell you about the different areas of the museum.

Just inside, and outside the main gallery, we have an area called Four Seasons. Here you can watch a four-minute animation of a woodland scene. It was designed especially for the museum by a group of young people on a film studies course, and it’s beautiful. Children absolutely love it, but then, so do adults.

The main gallery’s called Town and Country. It includes a photographic collection of prize-winning sheep and shepherds. Leaving Town and Country, you enter Farmhouse Kitchen, which is … well, self-explanatory. Here we have the oldest collection of equipment for making butter and cheese in the country. And this morning, a specialist cheesemaker will be giving demonstrations of how it’s produced. You may even get to try some.

After that, you can go in two directions. To the right is a staircase that takes you up to a landing from where you can look down on the galleries. To the left is a room called A Year on the Farm. There’s lots of seating here as sometimes we use the room for school visits, so it’s a good place to stop for a rest. If you’re feeling competitive, you can take our memory test in which you answer questions about things you’ve seen in the museum.

The next area’s called Wagon Walk. This contains farm carts from nearly every part of the country. It’s surprising how much regional variation there was. Beside the carts are display boards with information about each one. The carts are old and fragile, so we ask you to keep your children close to you and ensure they don’t climb on the carts.

From Wagon Walk, you can either make your way back to reception or go out into the garden – or even go back to take another look in the galleries. In the far corner of the garden is Bees are Magic, but we’re redeveloping this area so you can’t visit that at the moment. You can still buy our honey in the shop, though.

Finally, there’s The Pond, which contains all kinds of interesting wildlife. There are baby ducks that are only a few days old, as well as tiny frogs. The Pond isn’t deep and there’s a fence around it, so it’s perfectly safe for children.`;

  LS['18-4-2'] = `TUTOR: So now I want you to discuss the lesson we’ve just been watching on the video and think about the ways in which origami can be a useful educational tool. Can you all work with the person sitting next to you …

SEB: I had no idea that such a simple thing like folding squares of paper to make the shape of something like a bird could be such an amazing tool. It’s made me see origami in a whole new light.

LIA: I know. It was interesting to see the educational skills the children were developing by doing origami. On the video you could see them really listening hard to make sure they did all the steps in the right order to make the bird.

SEB: That’s right. In this lesson they were working individually but it would also be interesting to see if the children could work out how to make something simple without being given any direction. That would help with building teamwork as well.

LIA: Yes, but much more of a challenge. One thing that really stood out for me was that the children were all having fun while being taught something new.

SEB: Which is a key aim of any lesson with this age group. And although these kids had no problems with folding the paper, with younger children you could do origami to help practise fine motor skills.

LIA: Absolutely. Shall we talk about the individual children we saw on the video? I wrote all their names down and took some notes.

SEB: Yes, I did too.

LIA: OK, good. Let’s start with Sid.

SEB: He was interesting because before they started doing the origami, he was being quite disruptive.

LIA: Yes. He really benefited from having to use his hands – it helped him to settle down and start concentrating.

SEB: Yes, I noticed that too. What about Jack? I noticed he seemed to want to work things out for himself.

LIA: Mmm. You could see him trying out different things rather than asking the teacher for help. What did you make of Naomi?

SEB: She seemed to be losing interest at one point but then she decided she wanted her mouse to be the best and that motivated her to try harder.

LIA: She didn’t seem satisfied with hers in the end, though.

SEB: No.

LIA: Anya was such a star. She listened so carefully and then produced the perfect bird with very little effort.

SEB: Mmm – I think the teacher could have increased the level of difficulty for her.

LIA: Maybe. I think it was the first time Zara had come across origami.

SEB: She looked as if she didn’t really get what was going on.

LIA: She seemed unsure about what she was supposed to do, but in the end hers didn’t turn out too badly.

SEB: Yeah. I’m sure it was a positive learning experience for her.

LIA: Mmm.

LIA: I think one reason why the origami activity worked so well in this class was that the teacher was well prepared.

SEB: Right. I think it would have taken me ages to prepare examples, showing each of the steps involved in making the bird. But that was a really good idea. The children could see what they were aiming for – and much better for them to be able to hold something, rather than just looking at pictures.

LIA: Mmm – those physical examples supported her verbal explanations really well.

SEB: It’s strange that origami isn’t used more widely. Why do you think that is?

LIA: Well, teachers may just feel it’s not that appealing to children who are used to doing everything on computers, especially boys. Even if they’re aware of the benefits.

SEB: Oh, I don’t know. It’s no different to any other craft activity. I bet it’s because so many teachers are clumsy like me.

LIA: That’s true – too much effort required if you’re not good with your hands.

SEB: Well, anyway, I think we should try it out in our maths teaching practice with Year 3. I can see using origami is a really engaging way of reinforcing children’s knowledge of geometric shapes, like they were doing in the video, but I think it would also work really well for presenting fractions, which is coming up soon.

LIA: Good idea – that’s something most of the kids in that class might struggle with. Origami would also be good practice for using symmetry – but I think they did that last term.

SEB: OK – well let’s try and get some ideas together and plan the lesson next week.

TUTOR: OK, if you could all stop …`;

  LS['18-4-3'] = `The person I’ve chosen to talk about is the French writer Victor Hugo – many people have heard of him because his novel, Les Miserables, which he wrote in 1862, is famous around the world. It became a stage musical in the 1980s, and a film version was also released in 2012. So, some of us, I’m sure, have a pretty general idea of the plot, but we know much less about the author. Today, I’m going to provide a little more insight into this talented man and I’m going to talk particularly about the home he had on the island of Guernsey in the British Channel Islands.

But first, his early career … as I’ve said, he was a writer, he was at the height of his career in Paris and he was very highly regarded by his colleagues. As far as literature was concerned, he was the leading figure of the Romantic movement. However, as well as being a literary genius, he also gave many speeches about issues like the level of poverty in his society. He felt very strongly about this and about other areas where change was needed, like education. This kind of outspoken criticism was not well liked by the rulers of France and, eventually, the emperor – Napoleon III – told Victor Hugo to leave Paris and not return; in other words, he sent him into exile.

So Victor Hugo was forced to reside in other parts of Europe. Guernsey was actually his third place of exile and he landed there in 1855. He produced a lot while on Guernsey – including Les Miserables – and to do this, he had to spend a great deal of time in the home that he had there. This was a property that he bought using the money he’d made in France from the publication of a collection of his poetry. It was the only property he ever owned, and he was very proud of it.

The property Victor Hugo bought on Guernsey was a large, five-storey house in the capital town of St Peter Port and he lived there for 15 years, returning to France in 1870 when Napoleon’s Empire collapsed. He decorated and furnished each level, or floor, of the house in unique and wonderful ways, and many people consider the inside of the house to be a ‘work of art’. Today it’s a museum that attracts 200,000 visitors a year.

He lived in the house with his family … and portraits of its members still hang in rooms on the ground floor, along with drawings that he did during his travels that he felt were important to him. In other ground-floor rooms, there are huge tapestries that he would have designed and loved. The walls are covered in dark wood panelling that Victor Hugo created himself using wooden furniture that he bought in the market. The items were relatively inexpensive, and he used them to create intricate carvings. They gave an atmosphere on the lower level that was shadowy and rather solemn.

On the next level of the house there are two impressive lounges, where he entertained his guests. One lounge has entirely red furnishings, such as sofas and wall coverings, and the other blue. There’s a strong Chinese influence in these areas in things like the wallpaper pattern and the lamps – which he would have made himself by copying original versions.

His library, where he left many of his favourite books, forms the hallway to the third floor and was a comfortable area where he could relax and enjoy his afternoons. And then, at the very top of the house, there’s a room called the Lookout – called that because it looks out over the harbour. In contrast to the rather dark lower levels, it’s full of light and was like a glass office where he would write until lunchtime – often at his desk.

So, Victor Hugo was a man of many talents, but he was also true to his values. While living in his house on Guernsey, he entertained many other famous writers, but he also invited a large group of local children from the deprived areas of the island to dinner once a week. What’s more, he served them their food, which was an extraordinary gesture for the time period.

In 1927, the house was owned by his relatives, and they decided to donate it to the city of Paris. It has since been restored using photographs from the period and, as I mentioned earlier, is now a museum that is open to the public.`;

  console.log('[real-18b] 剑18 Test 3 & Test 4 已覆盖为练习题目（待与原版书核对）');
})();
