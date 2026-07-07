/**
 * 剑19 Test 2 / 3 / 4 真实剑桥雅思内容覆盖补丁
 * 目的：将 data.js 中 AI 生成的"原创练习"内容替换为真实剑桥雅思19 Test 2/3/4 真题。
 * 数据核对来源（公开权威解析，含原题答案键）：
 *   听力原文/答案 — ieltsxpress (Cambridge IELTS 19 Listening Test 2/3/4 with answers & audio transcript)
 *   阅读原文/题目/答案 — engnovate (Cambridge IELTS 19 Academic Reading Test 2/3/4)；ielts-hub (Test 2 P1)
 *   写作题目 — howtodoielts / TED IELTS (Cambridge IELTS 19 各 Test 写作题)；engnovate (Test 2/4 Task 1)
 *   口语话题 — ieltspractices.com (Cambridge 19 IELTS Speaking Test 2/3/4)
 * 注意：原文/题目/听力原文为真实剑桥雅思19真题内容；范文与口语"参考回答"为学习用示例文本（非官方范文）。
 * 答案键已与 engnovate / ieltsxpress 等至少一处来源交叉核对。
 * 本文件须放在所有数据文件（data.js, data-extra*.js, listening-scripts.js 等）之后、app.js 之前加载。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;
  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 19) book = b; });
  if (!book) return;

  // ===================== TEST 2 =====================
  var test2 = {
    sections: [
      {
        part: 'Part 1',
        context: 'Shannon 向朋友 Leon 咨询 Kite Place 一带的本地食材商店（鱼市、有机店、超市）',
        type: '笔记/表格填空（每空一词或一数字）',
        questions: [
          { q: 'Guitar Group 协调员 (coordinator) 的名字：Gary ___', a: 'Mathieson' },
          { q: '课程级别 (level)：', a: 'beginners' },
          { q: '地点 (place)：The ___', a: 'college' },
          { q: '街道：___ Street（New Street，靠近环岛）', a: 'New' },
          { q: '时间：周四上午 ___（11 am）', a: '11' },
          { q: '推荐网站：“The perfect ___”', a: 'instrument' },
          { q: '调音：用 app 或凭 ___（by ear）', a: 'ear' },
          { q: '老师 ___ 时大家保持节奏（clapping）', a: 'clapping' },
          { q: '学歌时常先听一首歌的 ___（recording）', a: 'recording' },
          { q: '最后单独 (___) 弹奏', a: 'alone' }
        ]
      },
      {
        part: 'Part 2',
        context: 'David 讲述自己成为 Northsea 救生艇志愿者的经历',
        type: '单选 + 双选',
        questions: [
          { q: 'What made David leave London and move to Northsea?', a: 'C' },
          { q: 'The Lifeboat Institution in Northsea was built with money provided by', a: 'B' },
          { q: 'In his health assessment, the doctor was concerned about the fact that David', a: 'A' },
          { q: 'After arriving at the lifeboat station, they aim to launch the boat within', a: 'B' },
          { q: 'As a “helmsman”, David has the responsibility of deciding', a: 'C' },
          { q: 'As well as going out on the lifeboat, David', a: 'A' },
          { q: 'Which TWO things does David say about the Lifeboat Volunteer training? (first)', a: 'C' },
          { q: 'Which TWO things does David say about the Lifeboat Volunteer training? (second)', a: 'E' },
          { q: 'Which TWO things does David find most motivating about the work? (first)', a: 'A' },
          { q: 'Which TWO things does David find most motivating about the work? (second)', a: 'B' }
        ]
      },
      {
        part: 'Part 3',
        context: 'Bella 与 Don 讨论以"回收鞋类"为课题做课堂展示',
        type: '单选 + 配对',
        questions: [
          { q: 'At first, Don thought the topic of recycling footwear might be too', a: 'A' },
          { q: 'When discussing trainers, Bella and Don disagree about', a: 'B' },
          { q: 'Bella says that she sometimes recycles shoes because', a: 'B' },
          { q: 'What did the article say that confused Don?', a: 'B' },
          { q: 'Recycling manager’s reason for rejecting the high-heeled shoes', a: 'E' },
          { q: 'Recycling manager’s reason for rejecting the ankle boots', a: 'B' },
          { q: 'Recycling manager’s reason for rejecting the baby shoes', a: 'A' },
          { q: 'Recycling manager’s reason for rejecting the trainers', a: 'C' },
          { q: 'Why did the project to make “new” shoes out of old shoes fail?', a: 'C' },
          { q: 'Bella and Don agree that they can present their topic', a: 'A' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于缓步动物（水熊虫 / tardigrades）的学术报告',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'Tardigrades are also called water “bears” because of how they ___', a: 'move' },
          { q: 'They have a ___ round body and four pairs of legs', a: 'short' },
          { q: 'Claws or ___ for gripping', a: 'discs' },
          { q: 'A fluid that carries both ___ and blood', a: 'oxygen' },
          { q: 'Mouth shaped like a ___ with teeth called stylets', a: 'tube' },
          { q: 'They can exist in very low or high ___', a: 'temperatures' },
          { q: 'A type of ___ ensures their DNA is not damaged', a: 'protein' },
          { q: 'Research into how many days they survive in ___', a: 'space' },
          { q: 'They consume liquids from moss or ___', a: 'seaweed' },
          { q: 'They are not considered to be ___', a: 'endangered' }
        ]
      }
    ],
    passages: [
      {
        title: 'Passage 1: The Industrial Revolution in Britain',
        difficulty: '中等',
        summary: '英国工业革命的起源、蒸汽机、纺织与钢铁业变革、通讯进步及社会影响。',
        questions: [
          { type: '笔记填空（每空一词）', q: 'In Watt and Boulton’s steam engine, the movement of the ___ was linked to a gear system.', a: 'piston' },
          { type: '笔记填空（每空一词）', q: 'A greater supply of ___ was required to power steam engines.', a: 'coal' },
          { type: '笔记填空（每空一词）', q: 'Before the Industrial Revolution, spinners and weavers worked at home and in ___', a: 'workshops' },
          { type: '笔记填空（每空一词）', q: 'Not as much ___ was needed to produce cloth once the spinning jenny and power loom were invented.', a: 'labour' },
          { type: '笔记填空（每空一词）', q: 'Smelting of iron ore with coke resulted in material that was better ___', a: 'quality' },
          { type: '笔记填空（每空一词）', q: 'Demand for iron increased with the growth of the ___', a: 'railways' },
          { type: '笔记填空（每空一词）', q: 'The new cities were dirty, crowded and lacked sufficient ___', a: 'sanitation' },
          { type: '判断题 (True/False/Not Given)', q: 'Britain’s canal network grew rapidly so that more goods could be transported around the country.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Costs in the iron industry rose when the technique of smelting iron ore with coke was introduced.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Samuel Morse’s communication system was more reliable than that developed by Cooke and Wheatstone.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'The economic benefits of industrialisation were limited to certain sectors of society.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Some skilled weavers believed that the introduction of the new textile machines would lead to job losses.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'There was some sympathy among local people for the Luddites arrested near Huddersfield.', a: 'NOT GIVEN' },
          { type: '段落信息匹配（A–F）', q: 'reference to two chemical compounds which impact on performance', a: 'D' },
          { type: '段落信息匹配（A–F）', q: 'examples of strategies for minimising the effects of stress', a: 'F' },
          { type: '段落信息匹配（A–F）', q: 'how a sportsperson accounted for their own experience of stress', a: 'A' },
          { type: '段落信息匹配（A–F）', q: 'study results indicating links between stress responses and performance', a: 'D' },
          { type: '段落信息匹配（A–F）', q: 'mention of people who can influence how athletes perceive their stress responses', a: 'F' },
          { type: '句子完成（每空一词）', q: 'Performance stress involves the possible risk of ___', a: 'injury' },
          { type: '句子完成（每空一词）', q: 'Cortisol can cause tennis players to produce fewer good ___', a: 'serves' },
          { type: '句子完成（每空一词）', q: 'Psychologists can help athletes view physiological responses as the effect of ___ such as excitement', a: 'excitement' },
          { type: '句子完成（每空一词）', q: '___ is an example of a psychological technique which can reduce stress responses.', a: 'visualisation' },
          { type: '多选题（选两项）', q: 'Which TWO facts about Emma Raducanu’s withdrawal from Wimbledon are mentioned?', a: 'B, D' },
          { type: '多选题（选两项）', q: 'Which TWO facts about anxiety are mentioned in Paragraph E?', a: 'A, E' },
          { type: '摘要填空（选短语 A–K）', q: 'Maryam Mirzakhani regarded as ___', a: 'H' },
          { type: '摘要填空（选短语 A–K）', q: 'maths held little ___ for her', a: 'A' },
          { type: '摘要填空（选短语 A–K）', q: 'she was ___ by a difficult puzzle', a: 'C' },
          { type: '摘要填空（选短语 A–K）', q: 'she proved herself ___ in the face of setbacks', a: 'B' },
          { type: '摘要填空（选短语 A–K）', q: 'her greatest ___ was the excitement of discovery', a: 'J' },
          { type: '摘要填空（选短语 A–K）', q: 'her mathematical studies were extremely ___', a: 'I' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Many people who won prestigious intellectual prizes were only average when young.', a: 'YES' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Einstein’s failures as a young man were due to his lack of confidence.', a: 'NOT GIVEN' },
          { type: '判断题 (Yes/No/Not Given)', q: 'It is difficult to reach agreement on whether some children are born gifted.', a: 'YES' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Einstein was upset by the public’s view of his life’s work.', a: 'NOT GIVEN' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Einstein put his success down to the speed at which he dealt with questions.', a: 'NO' },
          { type: '选择题（单选）', q: 'What does Eyre believe is needed for children to equal “gifted” standards?', a: 'C' },
          { type: '选择题（单选）', q: 'What is the result of Ericsson’s research?', a: 'B' },
          { type: '选择题（单选）', q: 'In the penultimate paragraph, the key to some deprived children’s success is', a: 'D' }
        ]
      },
      {
        title: 'Passage 2: Athletes and stress',
        difficulty: '中偏难',
        summary: '运动员在比赛中的心理压力、挑战状态与威胁状态，以及应对压力的策略。',
        questions: [],
        text: `A

It isn’t easy being a professional athlete. Not only are the physical demands greater than most people could handle, athletes also face intense psychological pressure during competition. This is something that British tennis player Emma Raducanu wrote about on social media following her withdrawal from the 2021 Wimbledon tournament. Though the young player had been doing well in the tournament, she began having difficulty regulating her breathing and heart rate during a match, which she later attributed to ‘the accumulation of the excitement and the buzz’.

B

For athletes, some level of performance stress is almost unavoidable. But there are many different factors that dictate just how people’s minds and bodies respond to stressful events. Typically, stress is the result of an exchange between two factors: demands and resources. An athlete may feel stressed about an event if they feel the demands on them are greater than they can handle. These demands include the high level of physical and mental effort required to succeed, and also the athlete’s concerns about the difficulty of the event, their chance of succeeding, and any potential dangers such as injury. Resources, on the other hand, are a person’s ability to cope with these demands. These include factors such as the competitor’s degree of confidence, how much they believe they can control the situation’s outcome, and whether they’re looking forward to the event or not.

C

Each new demand or change in circumstances affects whether a person responds positively or negatively to stress. Typically, the more resources a person feels they have in handling the situation, the more positive their stress response. This positive stress response is called a challenge state. But should the person feel there are too many demands placed on them, the more likely they are to experience a negative stress response - known as a threat state. Research shows that the challenge states lead to good performance, while threat states lead to poorer performance. So, in Emma Raducanu’s case, a much larger audience, higher expectations and facing a more skilful opponent, may all have led her to feel there were greater demands being placed on her at Wimbledon - but she didn’t have the resources to tackle them. This led to her experiencing a threat response.

D

Our challenge and threat responses essentially influence how our body responds to stressful situations, as both affect the production of adrenaline and cortisol - also known as ‘stress hormones’. During a challenge state, adrenaline increases the amount of blood pumped from the heart and expands the blood vessels, which allows more energy to be delivered to the muscles and brain. This increase of blood and decrease of pressure in the blood vessels has been consistently related to superior sport performance in everything from cricket batting, to golf putting and football penalty taking. But during a threat state, cortisol inhibits the positive effect of adrenaline, resulting in tighter blood vessels, higher blood pressure, slower psychological responses, and a faster heart rate. In short, a threat state makes people more anxious - they make worse decisions and perform more poorly. In tennis players, cortisol has been associated with more unsuccessful serves and greater anxiety.

E

That said, anxiety is also a common experience for athletes when they’re under pressure. Anxiety can increase heart rate and perspiration, cause heart palpitations, muscle tremors and shortness of breath, as well as headaches, nausea, stomach pain, weakness and a desire to escape in more extreme cases. Anxiety can also reduce concentration and self-control and cause overthinking. The intensity with which a person experiences anxiety depends on the demands and resources they have. Anxiety may also manifest itself in the form of excitement or nervousness depending on the stress response. Negative stress responses can be damaging to both physical and mental health - and repeated episodes of anxiety coupled with negative responses can increase risk of heart disease and depression.

F

But there are many ways athletes can ensure they respond positively under pressure. Positive stress responses can be promoted through the language that they and others - such as coaches or parents - use. Psychologists can also help athletes change how they see their physiological responses - such as helping them see a higher heart rate as excitement, rather than nerves. Developing psychological skills, such as visualisation, can also help decrease physiological responses to threat. Visualisation may involve the athlete recreating a mental picture of a time when they performed well, or picturing themselves doing well in the future. This can help create a feeling of control over the stressful event. Recreating competitive pressure during training can also help athletes learn how to deal with stress. An example of this might be scoring athletes against their peers to create a sense of competition. This would increase the demands which players experience compared to a normal training session, while still allowing them to practise coping with stress.`
      },
      {
        title: 'Passage 3: An inquiry into the existence of the gifted child',
        difficulty: '难',
        summary: '探讨"天才儿童"是否天生，以及高表现是否来自后天努力、好奇心与正确支持。',
        questions: [],
        text: `Let us start by looking at a modern ‘genius’, Maryam Mirzakhani, who died at the early age of 40. She was the only woman to win the Fields Medal - the mathematical equivalent of a Nobel prize. It would be easy to assume that someone as special as Mirzakhani must have been one of those ‘gifted’ children, those who have an extraordinary ability in a specific sphere of activity or knowledge. But look closer and a different story emerges. Mirzakhani was born in Tehran, Iran. She went to a highly selective girls’ school but maths wasn’t her interest - reading was. She loved novels and would read anything she could lay her hands on. As for maths, she did rather poorly at it for the first couple of years in her middle school, but became interested when her elder brother told her about what he’d learned. He shared a famous maths problem from a magazine that fascinated her and she was hooked.

In adult life it is clear that she was curious, excited by what she did and also resolute in the face of setbacks. One of her comments sums it up. ‘Of course, the most rewarding part is the “Aha” moment, the excitement of discovery and enjoyment of understanding something new … But most of the time, doing mathematics for me is like being on a long hike with no trail and no end in sight.’ That trail took her to the heights of original research into mathematics.

Is her background unusual? Apparently not. Most Nobel prize winners were unexceptional in childhood. Einstein was slow to talk as a baby. He failed the general part of the entry test to Zurich Polytechnic - though they let him in because of high physics and maths scores. He struggled at work initially, but he kept plugging away and eventually rewrote the laws of Newtonian mechanics with his theory of relativity.

There has been a considerable amount of research on high performance over the last century that suggests it goes way beyond tested intelligence. On top of that, research is clear that brains are flexible, new neural pathways can be created, and IQ isn’t fixed. For example, just because you can read stories with hundreds of pages at the age of five doesn’t mean you will still be ahead of your contemporaries in your teens. While the jury is out on giftedness being innate and other factors potentially making the difference, what is certain is that the behaviours associated with high levels of performance are replicable and most can be taught - even traits such as curiosity.

According to my colleague Prof Deborah Eyre, with whom I’ve collaborated on the book Great Minds and How to Grow Them, the latest neuroscience and psychological research suggests most individuals can reach levels of performance associated in school with the gifted and talented. However, they must be taught the right attitudes and approaches to their learning and develop the attributes of high performers - curiosity, persistence and hard work, for example - an approach Eyre calls ‘high performance learning’. Critically, they need the right support in developing those approaches at home as well as at school.

Prof Anders Ericsson, an eminent education psychologist at Florida State University, US, is the co-author of Peak: Secrets from the New Science of Expertise. After research going back to 1980 into diverse achievements, from music to memory to sport, he doesn’t think unique and innate talents are at the heart of performance. Deliberate practice, that stretches you every step of the way, and around 10,000 hours of it, is what produces the goods. It’s not a magic number - the highest performers move on to doing a whole lot more, of course. Ericsson’s memory research is particularly interesting because random students, trained in memory techniques for the study, went on to outperform others thought to have innately superior memories - those who you might call gifted.

But it is perhaps the work of Benjamin Bloom, another distinguished American educationist working in the 1980s, that gives the most pause for thought. Bloom’s team looked at a group of extraordinarily high achieving people in disciplines as varied as ballet, swimming, piano, tennis, maths, sculpture and neurology. He found a pattern of parents encouraging and supporting their children, often in areas they enjoyed themselves. Bloom’s outstanding people had worked very hard and consistently at something they had become hooked on when at a young age, and their parents all emerged as having strong work ethics themselves.

Eyre says we know how high performers learn. From that she has developed a high performing learning approach. She is working on this with a group of schools, both in Britain and abroad. Some spin-off research, which looked in detail at 24 of the 3,000 children being studied who were succeeding despite difficult circumstances, found something remarkable. Half were getting free school meals because of poverty, more than half were living with a single parent, and four in five were living in disadvantaged areas. Interviews uncovered strong evidence of an adult or adults in the child’s life who valued and supported education, either in the immediate or extended family or in the child’s wider community. Children talked about the need to work hard at school, to listen in class and keep trying.

Let us end with Einstein, the epitome of a genius. He clearly had curiosity, character and determination. He struggled against rejection in early life but was undeterred. Did he think he was a genius or even gifted? He once wrote: ‘It’s not that I’m so smart, it’s just that I stay with problems longer. Most people say it is the intellect which makes a great scientist. They are wrong: it is character.’`
      }
    ],
    writing: [
      {
        task: 'Task 1 (小作文)',
        type: '地图题（两张平面图对比）',
        prompt: 'The plans below show a harbour in 2000 and how it looks today.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The plans compare the layout of a harbour in the year 2000 with its present-day appearance. Overall, the harbour has been substantially redeveloped: former industrial and open areas have been converted into leisure and tourist facilities, while the basic function of the water as a docking area has been retained.\n\nIn 2000, the northern side of the harbour contained a large open car park and a fishing area, with a few small buildings near the entrance. The central and southern parts were dominated by shipyards, workshops and a quarry, and most of the space was used for industry rather than visitors.\n\nToday, the car park has been reduced and partly replaced by a cafe and a children’s play area. The fishing area remains, but the shipyards and workshops have been removed and replaced by a marina for private boats, a private beach, and a new hotel standing close to the water. The quarry in the south has been turned into a picnic area with a footpath, and a new road now gives easier access to the eastern side.\n\nIn summary, the harbour has shifted from an industrial to a recreational space, with more amenities for tourists and residents.',
        tips: '先写总览(overview)再分述；对比 2000 与 today 的主要设施变化；突出"工业→休闲"的功能转变；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（同意/不同意）',
        prompt: 'The working week should be shorter and workers should have a longer weekend.\n\nDo you agree or disagree?\n\nWrite at least 250 words.',
        modelAnswer: 'In many modern societies people work long hours, often at the expense of their health and personal lives. I agree that reducing the working week and lengthening the weekend would bring significant benefits to both individuals and society.\n\nFirstly, shorter working hours are better for physical health. People who work excessively often lack sleep and exercise, which can lead to illness. A longer weekend would give them time to rest and be active, reducing pressure on healthcare systems. Secondly, mental well-being would improve; leisure time helps people relax and socialise, lowering stress and anxiety. Families in particular would benefit from more time together.\n\nHowever, some argue that a shorter week could reduce productivity and economic output. Businesses might need to hire more staff or lose working hours. Yet studies in some countries suggest that well-rested employees are often more efficient, so the overall effect on output may be smaller than feared.\n\nIn conclusion, although there are costs for employers, I believe a shorter working week and longer weekend would improve quality of life and should be adopted where possible.',
        tips: '明确立场（agree/disagree）；从健康与家庭生活两方面论证；可提及对经济/生产力的反对意见并回应；至少250词'
      }
    ],
    speaking: [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Photos',
        questions: [
          { q: 'Do you like taking photos?', a: '参考回答: Yes, I do. I take photos almost every day, especially when I’m travelling or spending time with friends, because they help me keep memories.' },
          { q: 'What do you usually take photos of?', a: '参考回答: Mostly scenery, my family and special moments like birthdays. I also like taking pictures of food in restaurants.' },
          { q: 'Do you prefer taking photos or being in them?', a: '参考回答: I prefer taking photos because I enjoy capturing the moment, though I’ll join in when friends want a group shot.' },
          { q: 'Do you ever print your photos?', a: '参考回答: Sometimes. I print my favourites and put them in a frame or a photo album at home.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a place you would like to visit in the future.\n\nYou should say:\n– where it is\n– who you would go with\n– what you would do there\n– and explain why you want to visit this place.',
        modelAnswer: '参考回答:\n\nA place I would really like to visit in the future is Switzerland. I’ve seen many beautiful photos of its mountains, lakes and small towns, and I’ve always dreamed of going there. I’d love to go with my family because they also enjoy nature and exploring new places.\n\nIf I go, I’d like to visit the Swiss Alps and see the snow-covered mountains. I’d probably try skiing for the first time, and I’d also like to take a scenic train ride through the countryside. We’d visit small villages, try traditional Swiss chocolate and enjoy the local food.\n\nI want to visit Switzerland because it seems so peaceful and clean, surrounded by mountains and fresh air. It would be a good break from my busy life, and I love taking photos, so I’d take many pictures of the landscapes. My cousin went there last year and said it was the best trip of his life, which made me want to go even more.',
        tips: '覆盖全部四个要点；用将来时/愿望表达；加入具体细节与原因；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Travel',
        questions: [
          { q: 'Why do people like travelling?', a: '参考回答: Because it helps them relax, see new places and learn about different cultures and ways of life.' },
          { q: 'Do you think travel is easier now than in the past?', a: '参考回答: Yes, transport is faster and booking flights or hotels online is simple, so it’s much more convenient than before.' },
          { q: 'How does travelling benefit young people?', a: '参考回答: It makes them more open-minded, confident and independent, since they learn to solve problems in unfamiliar situations.' }
        ]
      }
    ]
  };

  // ===================== TEST 3 =====================
  var test3 = {
    sections: [
      {
        part: 'Part 1',
        context: 'Leon 给刚搬来的 Shannon 介绍 Kite Place 一带买食材的本地商店',
        type: '笔记/表格填空（每空一词或一数字）',
        questions: [
          { q: 'Kite Place 位于 ___ 附近（harbour）', a: 'Harbour' },
          { q: '去鱼市要穿过 ___（bridge）', a: 'Bridge' },
          { q: '最好在 ___ pm 之前到（3.30）', a: '3.30' },
          { q: '有机店名叫 “___”（Rose）', a: 'Rose' },
          { q: '店外有大型 ___（sign）', a: 'Sign' },
          { q: '坐 ___ 小巴，车次 289（purple）', a: 'Purple' },
          { q: '可买一把 ___（海草 samphire）', a: 'Samphire' },
          { q: '甜点买一个 ___（melon）', a: 'Melon' },
          { q: '香料和 ___（coconut）', a: 'Coconut' },
          { q: '买一个 ___ 塔（草莓 strawberry）', a: 'Strawberry' }
        ]
      },
      {
        part: 'Part 2',
        context: '儿童书展组织者 Jenny Morgan 介绍书展工作坊与推荐书目',
        type: '配对 + 双选',
        questions: [
          { q: 'Workshop “Superheroes” 信息对应', a: 'C' },
          { q: 'Workshop “Just do it” 信息对应', a: 'D' },
          { q: 'Workshop “Count on me” 信息对应', a: 'F' },
          { q: 'Workshop “Speak up” 信息对应', a: 'G' },
          { q: 'Workshop “Jump for joy” 信息对应', a: 'B' },
          { q: 'Workshop “Sticks and stones” 信息对应', a: 'H' },
          { q: '推荐 Alive and Kicking 的理由（first）', a: 'D' },
          { q: '推荐 Alive and Kicking 的理由（second）', a: 'E' },
          { q: '给家长关于阅读的建议（first）', a: 'B' },
          { q: '给家长关于阅读的建议（second）', a: 'C' }
        ]
      },
      {
        part: 'Part 3',
        context: '实习教师 Clare 与 Jake 讨论为 Year 12 科学课设计"饮食与小鼠"实验',
        type: '单选 + 流程填空',
        questions: [
          { q: 'How does Clare feel about her Year 12 science class?', a: 'C' },
          { q: 'How does Jake react to Clare’s suggestion about a diet experiment?', a: 'B' },
          { q: 'What problem do they agree may be involved in an animal experiment?', a: 'A' },
          { q: 'What question do they decide the experiment should address?', a: 'A' },
          { q: 'Clare might also consider another experiment involving', a: 'C' },
          { q: 'Choose mice which are all the same ___', a: 'C' },
          { q: 'Two groups each with a different ___', a: 'H' },
          { q: 'Group B gets sugar contained in ___', a: 'E' },
          { q: 'Weighing chamber to prevent ___', a: 'B' },
          { q: 'Do all necessary ___', a: 'F' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于微塑料（microplastics）对环境与土壤影响的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'Fibres from some ___ during washing', a: 'clothing' },
          { q: 'They cause injuries to the ___ of wildlife', a: 'mouths' },
          { q: 'They enter the food chain via tap water, ___ and seafood', a: 'salt' },
          { q: 'Banned in skin cleaners and ___ in some countries', a: 'toothpaste' },
          { q: 'They enter soil through air, rain and ___', a: 'fertilisers' },
          { q: 'Earthworms add ___ to the soil', a: 'nutrients' },
          { q: 'Study aimed to find effects on plant ___', a: 'growth' },
          { q: 'Caused ___ loss in earthworms', a: 'weight' },
          { q: 'A rise in the level of ___ in the soil', a: 'acid' },
          { q: 'Soil damage affects ecosystems and ___', a: 'society' }
        ]
      }
    ],
    passages: [
      {
        title: 'Passage 1: Archaeologists discover evidence of prehistoric island settlers',
        difficulty: '中等',
        summary: '澳大利亚国立大学团队在印尼 Obi 岛发现距今约 1.8 万年前人类居住证据，揭示早期岛屿迁徙。',
        questions: [
          { type: '判断题 (True/False/Not Given)', q: 'Archaeological research had taken place on Obi before the arrival of Ceri Shipton and his colleagues.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'At the Kelo sites, the researchers found the first clam-shell axes ever discovered in the region.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'The size of Obi today is less than it was 18,000 years ago.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'A change in climate around 11,700 years ago had a greater impact on Obi than on surrounding islands.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'The researchers believe there is a connection between warmer, wetter weather and a change in axe material.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Shipton’s team were surprised to find evidence of the Obi islanders’ hunting practices.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'It is thought that the Kelo shelters were occupied continuously until about 1,000 years ago.', a: 'FALSE' },
          { type: '笔记填空（每空一词）', q: 'Excavations of rock shelters inside ___ near Kelo revealed axes.', a: 'caves' },
          { type: '笔记填空（每空一词）', q: 'Axes made out of ___ dating from around 11,700 years ago.', a: 'stone' },
          { type: '笔记填空（每空一词）', q: '___ of an animal: evidence of what islanders ate.', a: 'bones' },
          { type: '笔记填空（每空一词）', q: 'Obsidian and ___ resembling ones found on other islands.', a: 'beads' },
          { type: '笔记填空（每空一词）', q: 'From 8,000 years ago, Obi islanders had ___ as well as items made of metal.', a: 'pottery' },
          { type: '笔记填空（每空一词）', q: 'They probably took part in the production and sale of ___', a: 'spices' }
        ]
      },
      {
        title: 'Passage 2: The global importance of wetlands',
        difficulty: '中偏难',
        summary: '湿地的生态、气候与文化价值，以及排水开垦（尤其泥炭地）带来的碳排放与灾害。',
        questions: [
          { type: '段落信息匹配（A–H）', q: 'reference to the need to ensure inhabitants of wetland regions continue to benefit', a: 'G' },
          { type: '段落信息匹配（A–H）', q: 'the proportion of wetlands which have already been lost', a: 'A' },
          { type: '段落信息匹配（A–H）', q: 'reference to the idea that people are beginning to appreciate wetlands’ value', a: 'H' },
          { type: '段落信息匹配（A–H）', q: 'mention of the cultural significance of wetlands', a: 'B' },
          { type: '句子完成（每空一词）', q: 'Peatlands which have been drained begin to release ___ instead of storing it.', a: 'carbon' },
          { type: '句子完成（每空一词）', q: 'Once peatland areas are cleared, ___ are more likely to occur.', a: 'fires' },
          { type: '句子完成（每空一词）', q: 'Clearing peatland forests destroys the ___ of the local environment.', a: 'biodiversity' },
          { type: '句子完成（每空一词）', q: 'Water is drained out through ___ created by logging companies.', a: 'ditches' },
          { type: '句子完成（每空一词）', q: 'Draining peatlands leads to ___ : a serious problem causing coastal flooding.', a: 'subsidence' },
          { type: '人名配对（A–D）', q: 'Communities living in wetland regions must be included in discussions about their future.', a: 'A' },
          { type: '人名配对（A–D）', q: 'Official policies towards wetlands vary from one nation to the next.', a: 'C' },
          { type: '人名配对（A–D）', q: 'People cause harm to wetlands without having any intention to do so.', a: 'D' },
          { type: '人名配对（A–D）', q: 'Initiatives to reverse environmental damage need not be complex.', a: 'B' }
        ]
      },
      {
        title: 'Passage 3: Is the era of artificial speech translation upon us?',
        difficulty: '难',
        summary: '人工智能语音翻译的发展、局限与对社会、文化及人际关系的影响。',
        questions: [
          { type: '选择题（单选）', q: 'What does the reader learn about the conversation in the first paragraph?', a: 'D' },
          { type: '选择题（单选）', q: 'What assists the electronic translator during lectures at Karlsruhe?', a: 'A' },
          { type: '选择题（单选）', q: 'When referring to The Hitchhiker’s Guide to the Galaxy, the writer suggests that', a: 'B' },
          { type: '选择题（单选）', q: 'What does the writer say about sharing earpieces?', a: 'B' },
          { type: '句子完成（选结尾 A–F）', q: 'Speech translation methods are developing fast in Japan', a: 'C' },
          { type: '句子完成（选结尾 A–F）', q: 'TV interviews using translation voiceover are successful', a: 'E' },
          { type: '句子完成（选结尾 A–F）', q: 'Future translation systems should address people appropriately', a: 'F' },
          { type: '句子完成（选结尾 A–F）', q: 'Users may maintain their local customs', a: 'B' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Language translation systems will be seen as very useful throughout academic and professional worlds.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'The overall value of automated translation to family life is yet to be shown.', a: 'YES' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Automated translation could make life more difficult for immigrant families.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Visual aspects of language translation are being considered by scientists.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'International scientists have found English easier to translate than Latin.', a: 'NOT GIVEN' },
          { type: '判断题 (Yes/No/Not Given)', q: 'There is a difference between people’s social and practical needs regarding language.', a: 'YES' }
        ]
      }
    ],
    writing: [
      {
        task: 'Task 1 (小作文)',
        type: '流程图（示意图）',
        prompt: 'The diagram below shows how a biofuel called ethanol is produced.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The diagram illustrates the process by which ethanol, a type of biofuel, is produced. Overall, it is a multi-stage industrial process that begins with natural raw materials and ends with a usable fuel.\n\nFirst, the raw material - typically a plant-based source containing sugar or starch - is harvested and prepared. It is then broken down, often through milling and mixing with water, so that the sugars can be released. Next, the mixture enters a fermentation stage where yeast is added, converting the sugars into alcohol.\n\nAfter fermentation, the liquid is distilled to separate the ethanol from water and other substances. The resulting ethanol is then purified and may be blended with other components before being stored and finally distributed as biofuel for vehicles.\n\nIn summary, ethanol production involves preparation, fermentation, distillation and purification, turning agricultural material into a renewable fuel.',
        tips: '按步骤顺序描述（被动语态/连接词）；先总览再分述；不必列出所有细节但要点出主要阶段；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（同意/不同意）',
        prompt: 'It is important for everyone, including young people, to save money for their future.\n\nTo what extent do you agree or disagree with this statement?\n\nWrite at least 250 words.',
        modelAnswer: 'Many people hold the view that saving money is essential, and I largely agree that everyone - including young people - should put money aside for the future, although I would add a note of caution about inflation.\n\nSaving is clearly sensible because unexpected costs, such as medical emergencies, can arise at any time. Moreover, people will eventually retire and need funds to live on when they can no longer work. Young people in particular benefit, since starting early gives more time for savings to grow.\n\nHowever, simply saving cash is not enough. Inflation can reduce the value of money over time, so money kept idle may lose purchasing power. A balanced approach is to save while also investing in assets, such as property or shares, that tend to hold or increase their value.\n\nIn conclusion, I agree that saving for the future is important for people of all ages, but it should be combined with smart financial planning to be truly effective.',
        tips: '表达程度（to what extent）；从应急与退休两方面论证；可加入"通货膨胀"平衡观点；至少250词'
      }
    ],
    speaking: [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Art',
        questions: [
          { q: 'Do you like art?', a: '参考回答: Yes, I like art because it’s creative and inspiring, and it helps me see the world differently.' },
          { q: 'Did you learn art at school?', a: '参考回答: Yes, we had art classes in primary school, which I really enjoyed, especially drawing.' },
          { q: 'Do you ever visit art galleries?', a: '参考回答: Not very often, but I like visiting them when I have time, especially for special exhibitions.' },
          { q: 'Have you ever tried painting or drawing?', a: '参考回答: Yes, I enjoy drawing as a hobby in my free time, though I’m not very skilled.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe an activity you enjoy doing with your family.\n\nYou should say:\n– what the activity is\n– when you do it\n– who you do it with\n– and explain why you enjoy it.',
        modelAnswer: '参考回答:\n\nAn activity I really enjoy doing with my family is having a barbecue in our backyard. We usually do this about once a month, especially when the weather is nice, and it’s a great way to relax after a busy week.\n\nMy parents, my siblings and sometimes my cousins join us. Everyone has a role: my father takes care of the grill, my mother prepares the salads, and my brother and I set up the chairs and tables. While the food cooks, we play music and talk.\n\nI enjoy it because it brings everyone together and we share stories and jokes. The food tastes great, and it gives us a chance to be outdoors and away from our phones. These small moments remind me how important family is.',
        tips: '覆盖四个要点；用一般现在时描述习惯；加入具体分工与感受；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Family Activities',
        questions: [
          { q: 'Why is it important for families to spend time together?', a: '参考回答: It builds trust and closeness, and creates happy memories that strengthen family bonds.' },
          { q: 'Do you think family activities have changed over time?', a: '参考回答: Yes, nowadays people do more indoor and screen-based activities, and travel more, compared with the past.' },
          { q: 'How can parents encourage children to spend more time with family?', a: '参考回答: They can plan fun activities everyone enjoys, making family time something children look forward to.' }
        ]
      }
    ]
  };

  // ===================== TEST 4 =====================
  var test4 = {
    sections: [
      {
        part: 'Part 1',
        context: '主管 Kaeden 给第一天上班的 Charlotte 交代超市工作的注意事项',
        type: '笔记/表格填空（每空一词或一数字）',
        questions: [
          { q: '主管名字：', a: 'Kaeden' },
          { q: '外套和包放在员工室的 ___（locker）', a: 'lockers' },
          { q: '去 HR 给 ___ 号码（passport）', a: 'passport' },
          { q: '领取 ___（uniform）', a: 'uniform' },
          { q: 'HR 办公室在 ___ 楼（third）', a: 'third' },
          { q: '主管手机号：', a: '0412 665 903' },
          { q: '使用 ___ 标签（yellow）', a: 'yellow' },
          { q: '补充 ___ 盒子（plastic）', a: 'plastic' },
          { q: '从冷藏间取 ___ 给鱼保鲜（ice）', a: 'ice' },
          { q: '须戴特殊 ___（gloves）', a: 'gloves' }
        ]
      },
      {
        part: 'Part 2',
        context: '跑步教练 Liz Fuller 谈新手跑步训练计划与俱乐部经历',
        type: '双选 + 配对',
        questions: [
          { q: 'Problem with some training programmes (first)', a: 'C' },
          { q: 'Problem with some training programmes (second)', a: 'E' },
          { q: 'Tip recommended for new runners (first)', a: 'A' },
          { q: 'Tip recommended for new runners (second)', a: 'D' },
          { q: 'Ceri was prevented from joining earlier by', a: 'A' },
          { q: 'James was prevented from joining earlier by', a: 'B' },
          { q: 'Leo was prevented from joining earlier by', a: 'C' },
          { q: 'Mark was prevented from joining earlier by', a: 'A' },
          { q: 'What does Liz say about running her first marathon?', a: 'C' },
          { q: 'Liz says new runners should sign up for a race', a: 'B' }
        ]
      },
      {
        part: 'Part 3',
        context: 'Jane 与 Kieran 讨论爷爷书店的书籍保管与陈列',
        type: '单选 + 地点配对',
        questions: [
          { q: 'Kieran thinks the packing advice from Jane’s grandfather is', a: 'A' },
          { q: 'How does Jane feel about the books her grandfather gave her?', a: 'C' },
          { q: 'Jane and Kieran agree that hardback books should be', a: 'A' },
          { q: 'While talking about taking a book from a shelf, Jane', a: 'B' },
          { q: 'What do they suggest about new books?', a: 'C' },
          { q: 'Location of rare books', a: 'D' },
          { q: 'Location of children’s books', a: 'F' },
          { q: 'Location of unwanted books', a: 'A' },
          { q: 'Location of requested books', a: 'C' },
          { q: 'Location of coursebooks', a: 'G' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于植树造林（tree planting / reforestation）的环保讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'Invasive species cause possible ___ with native species', a: 'competition' },
          { q: 'Provide sustainable sources of ___ for local people', a: 'food' },
          { q: 'Increase resistance to ___ and climate change', a: 'disease' },
          { q: 'Avoid land used for ___', a: 'agriculture' },
          { q: 'Base decisions on accurate ___', a: 'maps' },
          { q: 'Drones identify areas endangered by keeping ___ and illegal logging', a: 'cattle' },
          { q: 'Figs increase the ___ of recovery', a: 'speed' },
          { q: '___ were soon attracted to the area', a: 'monkeys' },
          { q: 'Local people made a living from ___', a: 'fishing' },
          { q: 'Protects against higher risk of ___', a: 'flooding' }
        ]
      }
    ],
    passages: [
      {
        title: 'Passage 1: The impact of climate change on butterflies in Britain',
        difficulty: '中等',
        summary: '气候变化下英国蝴蝶通过改变物候（出现时间）适应，灵活物种受益，单一繁殖物种面临风险。',
        questions: [
          { type: '判断题 (True/False/Not Given)', q: 'Forty years ago, there were fewer butterflies in Britain than at present.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Caterpillars are eaten by a number of different predators.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: '“Phenology” describes a creature’s ability to alter the location of a lifecycle event.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Some species have a reduced lifespan due to spring temperature increases.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'There is a clear reason for the adaptations butterflies are making.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'The study data came from amateur butterfly watchers.', a: 'TRUE' },
          { type: '笔记填空（每空一词）', q: 'The Small Blue lives in large ___', a: 'colonies' },
          { type: '笔记填空（每空一词）', q: 'It first appears at the start of ___', a: 'spring' },
          { type: '笔记填空（每空一词）', q: 'The High Brown Fritillary is considered more ___ than other species', a: 'endangered' },
          { type: '笔记填空（每空一词）', q: 'Its caterpillars occupy a limited range of ___', a: 'habitats' },
          { type: '笔记填空（每空一词）', q: 'The Silver-studded Blue can reproduce twice a year in warm areas of ___', a: 'Europe' },
          { type: '笔记填空（每空一词）', q: 'The White Admiral is found in ___ areas of England', a: 'southern' },
          { type: '笔记填空（每空一词）', q: 'Both climate change and the ___ of the caterpillar are possible reasons for decline', a: 'diet' }
        ]
      },
      {
        title: 'Passage 2: Deep-sea Mining',
        difficulty: '中偏难',
        summary: '深海采矿在金属需求与保护海洋生态、未知法规风险之间的争议。',
        questions: [
          { type: '段落信息匹配（A–F）', q: 'reference to the rapidly increasing need for one raw material in transport', a: 'C' },
          { type: '段落信息匹配（A–F）', q: 'a rough estimate of the area of Earth covered by the oceans', a: 'F' },
          { type: '段落信息匹配（A–F）', q: 'how a habitat where minerals and organisms co-exist is formed', a: 'E' },
          { type: '段落信息匹配（A–F）', q: 'reference to the fact that countries have yet to agree on seabed rules', a: 'D' },
          { type: '人名配对（A–E）', q: 'A move away from heavily mined land reserves is a good idea.', a: 'D' },
          { type: '人名配对（A–E）', q: 'Negative effects of undersea exploration on local areas are being ignored.', a: 'B' },
          { type: '人名配对（A–E）', q: 'There are more worthwhile things to extract from the sea than minerals.', a: 'A' },
          { type: '人名配对（A–E）', q: 'No other human exploration will have such a destructive impact on marine life.', a: 'E' },
          { type: '人名配对（A–E）', q: 'More is known about outer space than about the oceans.', a: 'B' },
          { type: '人名配对（A–E）', q: 'There is one marine habitat where experts agree mining should not take place.', a: 'C' },
          { type: '摘要填空（每空一词）', q: 'Mining corporations say resources can be removed without much ___', a: 'waste' },
          { type: '摘要填空（每空一词）', q: 'Extraction often adapts ___ already used on land', a: 'machinery' },
          { type: '摘要填空（每空一词）', q: 'Concerned groups believe ___ is necessary due to unknown consequences', a: 'caution' }
        ]
      },
      {
        title: 'Passage 3: The Unselfish Gene',
        difficulty: '难',
        summary: '反思"人性本自私"的假设，以狩猎采集社会证据主张合作、平等与利他才是人类固有特质。',
        questions: [
          { type: '选择题（单选）', q: 'What is the writer doing in the first paragraph?', a: 'C' },
          { type: '选择题（单选）', q: 'What point is made about Dawkins’ book The Selfish Gene?', a: 'C' },
          { type: '选择题（单选）', q: 'What does the writer suggest about the prehistoric era in paragraph 4?', a: 'B' },
          { type: '选择题（单选）', q: 'The writer refers to Bruce Knauft’s work as support for', a: 'A' },
          { type: '摘要填空（每空一词）', q: 'Contemporary hunter-gatherers exhibit a high level of ___', a: 'egalitarianism' },
          { type: '摘要填空（每空一词）', q: 'They prevent differences in ___ arising', a: 'status' },
          { type: '摘要填空（每空一词）', q: 'Credit for success at ___ is given to another member', a: 'hunting' },
          { type: '摘要填空（每空一词）', q: 'Individuals who behave in a ___ manner are excluded', a: 'domineering' },
          { type: '摘要填空（每空一词）', q: 'Women have a high level of ___ in work and marriage', a: 'autonomy' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Some anthropologists are mistaken about when !Kung-type societies began to decline.', a: 'NOT GIVEN' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Warlike traits in prehistory would have given an advantage over others.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Being peaceful and cooperative is a natural way for people to behave.', a: 'YES' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Negative traits are more apparent in some modern cultures than others.', a: 'NOT GIVEN' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Animal research has failed to reveal a link between environment change and aggression.', a: 'NO' }
        ]
      }
    ],
    writing: [
      {
        task: 'Task 1 (小作文)',
        type: '组合图表（柱图/饼图）',
        prompt: 'The charts below give information on the location and types of dance classes young people in a town in Australia are currently attending.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The charts show where young people in an Australian town attend dance classes and what types of dance they take. Overall, private studios are the most common location, and ballet is the most popular type, especially among the under-11s.\n\nRegarding location, the majority of students go to private dance studios, while smaller numbers attend school halls or community centres. For the types of dance, ballet has the largest attendance, followed by tap and modern; the under-11 group is far more involved in ballet than the 11-16 group.\n\nIn comparison, the older age group shows more interest in modern and street dance. Community centres are used mainly by the older students. In summary, dance participation is led by private studios and ballet, with clear differences between the two age groups.',
        tips: '分别描述"地点"与"舞种"两张图；比较 two age groups（under 11 / 11-16）；先总览再细节；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（积极/消极）',
        prompt: 'In many countries nowadays, consumers can go to a supermarket and buy food produced all over the world.\n\nDo you think this is a positive or negative development?\n\nWrite at least 250 words.',
        modelAnswer: 'Nowadays supermarkets in many countries sell food from all over the world. I believe this is generally a positive development because it gives consumers more choice and can improve their diet.\n\nThe main benefit is choice. Supermarkets can source food globally in a way local markets cannot, so people can try flavours from other cultures, which many find enjoyable. Another advantage is health: supermarkets import fruit, vegetables and spices that local farmers cannot grow, especially in cold climates, giving people more vitamins year-round.\n\nCritics say this hurts local producers and increases transport emissions. These are valid points, but the wider availability of affordable, nutritious food benefits far more people.\n\nIn conclusion, although there are downsides, importing food via supermarkets is a positive trend because it expands choice and supports healthier diets.',
        tips: '明确 positive/negative 立场；从"选择"与"健康饮食"两方面论证；可承认"本地农户/运输排放"反面；至少250词'
      }
    ],
    speaking: [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Shoes',
        questions: [
          { q: 'Do you like buying shoes?', a: '参考回答: Yes, I like having comfortable and stylish shoes, though I don’t buy them very often.' },
          { q: 'How often do you buy shoes?', a: '参考回答: Maybe twice a year, or when my old ones wear out and can’t be repaired.' },
          { q: 'What kind of shoes do you like?', a: '参考回答: I prefer casual shoes that are comfortable for daily use, like trainers or flats.' },
          { q: 'Do you care about fashion when it comes to shoes?', a: '参考回答: Not much - I care more about comfort and quality than the latest fashion.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a film you would like to watch again.\n\nYou should say:\n– what the film is\n– when you first watched it\n– who you watched it with\n– and explain why you would like to watch it again.',
        modelAnswer: '参考回答:\n\nA film I’d love to watch again is The Pursuit of Happyness. I first watched it about four years ago with my family on a weekend. It’s based on a true story and stars Will Smith as a father struggling to build a better life for his son.\n\nI found it inspiring because it shows how someone keeps going even when life is hard. We all felt emotional but motivated afterwards. I’d like to watch it again because I think I’d understand it better now, and it reminds me to stay hopeful and work hard. I’d enjoy seeing it with my family once more.',
        tips: '覆盖四个要点；用过去时讲第一次观看、现在时讲想再看的原因；加入感受；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Films',
        questions: [
          { q: 'Why do some people prefer watching films to reading books?', a: '参考回答: Films are more visual and entertaining, so they are easier to follow than reading a long book.' },
          { q: 'How do films influence people’s behaviour?', a: '参考回答: They can inspire people or change how they see life, for example by showing positive role models.' },
          { q: 'Do you think watching films at home is better than in the cinema?', a: '参考回答: At home is more comfortable and cheaper, but the cinema feels more exciting with a bigger screen and sound.' }
        ]
      }
    ]
  };

  var dataset = { 2: test2, 3: test3, 4: test4 };

  [2, 3, 4].forEach(function (tid) {
    var test = null;
    book.tests.forEach(function (t) { if (t.id === tid) test = t; });
    if (!test) return;
    var d = dataset[tid];
    test.listening.sections = d.sections;
    test.reading.passages = d.passages;
    test.writing.tasks = d.writing;
    test.speaking.parts = d.speaking;
  });

  // ===================== 阅读原文（真实，覆盖各 passage 的 .text，含 Test2 P1 及 Test3/4 全部） =====================
  var TEXTS = {
    2: [
      `The Industrial Revolution began in Britain in the mid-1700s and by the 1830s and 1840s had spread to many other parts of the world, including the United States. In Britain, it was a period when a largely rural, agrarian society was transformed into an industrialised, urban one. Goods that had once been crafted by hand started to be produced in mass quantities by machines in factories, thanks to the invention of steam power and the introduction of new machines and manufacturing techniques in textiles, iron-making and other industries.

The foundations of the Industrial Revolution date back to the early 1700s, when the English inventor Thomas Newcomen designed the first modern steam engine. Called the 'atmospheric steam engine', Newcomen's invention was originally used to power machines that pumped water out of mines. In the 1760s, the Scottish engineer James Watt started to adapt one of Newcomen's models, and succeeded in making it far more efficient. Watt later worked with the English manufacturer Matthew Boulton to invent a new steam engine driven by both the forward and backward strokes of the piston, while the gear mechanism it was connected to produced rotary motion. It was a key innovation that would allow steam power to spread across British industries.

The demand for coal, which was a relatively cheap energy source, grew rapidly during the Industrial Revolution, as it was needed to run not only the factories used to produce manufactured goods, but also steam-powered transportation. In the early 1800s, the English engineer Richard Trevithick built a steam-powered locomotive, and by 1830 goods and passengers were being transported between the industrial centres of Manchester and Liverpool. In addition, steam-powered boats and ships were widely used to carry goods along Britain's canals as well as across the Atlantic.

Britain had produced textiles like wool, linen and cotton, for hundreds of years, but prior to the Industrial Revolution, the British textile business was a true 'cottage industry', with the work performed in small workshops or even homes by individual spinners, weavers and dyers. Starting in the mid-1700s, innovations like the spinning jenny and the power loom made weaving cloth and spinning yarn and thread much easier. With these machines, relatively little labour was required to produce cloth, and the new, mechanised textile factories that opened around the country were quickly able to meet customer demand for cloth both at home and abroad.

The British iron industry also underwent major change as it adopted new innovations. Chief among the new techniques was the smelting of iron ore with coke (a material made by heating coal) instead of the traditional charcoal. This method was cheaper and produced metals that were of a higher quality, enabling Britain's iron and steel production to expand in response to demand created by the Napoleonic Wars (1803-15) and the expansion of the railways from the 1830s.

The latter part of the Industrial Revolution also saw key advances in communication methods, as people increasingly saw the need to communicate efficiently over long distances. In 1837, British inventors William Cooke and Charles Wheatstone patented the first commercial telegraphy system. In the 1830s and 1840s, Samuel Morse and other inventors worked on their own versions in the United States. Cooke and Wheatstone's system was soon used for railway signalling in the UK. As the speed of the new locomotives increased, it was essential to have a fast and effective means of avoiding collisions.

The impact of the Industrial Revolution on people's lives was immense. Although many people in Britain had begun moving to the cities from rural areas before the Industrial Revolution, this accelerated dramatically with industrialisation, as the rise of large factories turned smaller towns into major cities in just a few decades. This rapid urbanisation brought significant challenges, as overcrowded cities suffered from pollution and inadequate sanitation.

Although industrialisation increased the country's economic output overall and improved the standard of living for the middle and upper classes, many poor people continued to struggle. Factory workers had to work long hours in dangerous conditions for extremely low wages. These conditions along with the rapid pace of change fuelled opposition to industrialisation. A group of British workers who became known as 'Luddites' were British weavers and textile workers who objected to the increased use of mechanised looms and knitting frames. Many had spent years learning their craft, and they feared that unskilled machine operators were robbing them of their livelihood. A few desperate weavers began breaking into factories and smashing textile machines. They called themselves Luddites after Ned Ludd, a young apprentice who was rumoured to have wrecked a textile machine in 1779.

The first major instances of machine breaking took place in 1811 in the city of Nottingham, and the practice soon spread across the country. Machine-breaking Luddites attacked and burned factories, and in some cases they even exchanged gunfire with company guards and soldiers. The workers wanted employers to stop installing new machinery, but the British government responded to the uprisings by making machine-breaking punishable by death. The unrest finally reached its peak in April 1812, when a few Luddites were shot during an attack on a mill near Huddersfield. In the days that followed, other Luddites were arrested, and dozens were hanged or transported to Australia. By 1813, the Luddite resistance had all but vanished.`,
      null,
      null
    ],
    3: [
      `In early April 2019, Dr Ceri Shipton and his colleagues from Australian National University became the first archaeologists to explore Obi, one of many tropical islands in Indonesia's Maluku Utara province. The research team's discoveries suggest that the prehistoric people who lived on Obi were adept on both land and sea, hunting in the dense rainforest, foraging on the seashore, and possibly even voyaging between islands.

The excavations were part of a project to learn more about how people first dispersed from mainland Asia, through the Indonesian archipelago and into the prehistoric continent that once connected Australia and New Guinea. The team's earlier research suggested that the northernmost islands in the group, known as the Wallacean islands, including Obi, would have offered the easiest migration route. It also seemed likely that these islands were crucial 'stepping stones' on humans' island-hopping voyages through this region millennia ago. But to support this idea, they needed archaeological evidence for humans living in this remote area in the ancient past. So, they travelled to Obi to look for sites that might reveal evidence of early occupation.

Just inland from the village of Kelo on Obi's northern coast, Shipton and his colleagues found two caves containing prehistoric rock shelters that were suitable for excavation. With the permission and help of the local people of Kelo, they dug a small test excavation in each shelter. There they found numerous artefacts, including fragments of axes, some dating to about 14,000 years ago. The earliest axes at Kelo were made using clam shells. Axes made from clam shells from roughly the same time had also previously been found elsewhere in this region, including on the nearby island of Gebe to the northeast. As on Gebe, it is highly likely that Obi's axes were used in the construction of canoes, thus allowing these early peoples to maintain connections between communities on neighbouring islands.

The oldest cultural layers from the Kelo site provided the team with the earliest record for human occupation on Obi, dating back around 18,000 years. At this time the climate was drier and colder than today, and the island's dense rainforests would likely have been much less impenetrable than they are now. Sea levels were about 120 metres lower, meaning Obi was a much larger island, encompassing what is today the separate island of Bisa, as well as several other small islands nearby.

Roughly 11,700 years ago, as the most recent ice age ended, the climate became significantly warmer and wetter, no doubt making Obi's jungle much thicker. According to the researchers, it is no coincidence that around this time the first axes crafted from stone rather than sea shells appear, likely in response to their heavy-duty use for clearing and modification of the increasingly dense rainforest. While stone takes about twice as long to grind into an axe compared to shell, the harder material keeps its sharp edge for longer.

Judging by the bones which the researchers unearthed in the Kelo caves, people living there mainly hunted the Rothschild's cuscus, a possum-like creature that still lives on Obi today. As the forest grew more dense, people probably used axes to clear patches of forest and make hunting easier. Shipton's team's excavation of the shelters at the Kelo site unearthed a volcanic glass substance called obsidian, which must have been brought over from another island, as there is no known source on Obi. It also revealed particular types of beads, similar to those previously found on islands in southern Wallacea. These finds again support the idea that Obi islanders routinely travelled to other islands.

The excavations suggest people successfully lived in the two Kelo shelters for about 10,000 years. But then, about 8,000 years ago, both were abandoned. Did the residents leave Obi completely, or move elsewhere on the island? Perhaps the jungle had grown so thick that axes were no longer a match for the dense undergrowth. Perhaps people simply moved to the coast and turned to fishing rather than hunting as a means of survival.

Whatever the reason for the departure, there is no evidence for use of the Kelo shelters after this time, until about 1,000 years ago, when they were re-occupied by people who owned pottery as well as items made out of gold and silver. It seems likely, in view of Obi's location, that this final phase of occupation also saw the Kelo shelters used by people involved in the historic trade in spices between the Maluku islands and the rest of the world.`,
      `A

Wetlands are areas where water covers the soil, or is present either at or near the surface of the soil, for all or part of the year. These are complex ecosystems, rich in unique plant and animal life. But according to the World Wide Fund for Nature (WWF), half of the world's wetlands have disappeared since 1990 - converted or destroyed for commercial development, drainage schemes and the extraction of minerals and peat. Many of those that remain have been damaged by agricultural pesticides and fertilizers, industrial pollutants, and construction works.

B

Throughout history, humans have gathered around wetlands, and their fertile ecosystems have played an important part in human development. Consequently, they are of considerable religious, historical and archaeological value to many communities around the world. 'Wetlands directly support the livelihoods and well-being of millions of people,' says Dr Matthew McCartney, principal researcher and hydrologist at the International Water Management Institute (IWMI). 'In many developing countries, large numbers of people are dependent on wetland agriculture for their livelihoods.'

C

They also serve a crucial environmental purpose. 'Wetlands are one of the key tools in mitigating climate change across the planet,' says Pieter van Eijk, head of Climate Adaptation at Wetlands International (WI), pointing to their use as buffers that protect coastal areas from sea-level rise and extreme weather events such as hurricanes and flooding. Wetland coastal forests provide food and water, as well as shelter from storms, and WI and other agencies are working to restore those forests which have been lost. 'It can be as simple as planting a few trees per hectare to create shade and substantially change a microclimate,' he says. 'Implementing climate change projects isn't so much about money.'

D

The world's wetlands are, unfortunately, rich sources for in-demand commodities, such as palm oil and pulpwood. Peatlands - wetlands with a waterlogged organic soil layer - are particularly targeted. When peatlands are drained for cultivation, they become net carbon emitters instead of active carbon stores, and, according to Marcel Silvius, head of Climate-smart Land-use at WI, this practice causes six per cent of all global carbon emissions. The clearance of peatlands for planting also increases the risk of forest fires, which release huge amounts of CO2. 'We're seeing huge peatland forests with extremely high biodiversity value being lost for a few decades of oil palm revenues,' says Silvius.

E

The damage starts when logging companies arrive to clear the trees. They dig ditches to enter the peat swamps by boat and then float the logs out the same way. These are then used to drain water out of the peatlands to allow for the planting of corn, oil palms or pulpwood trees. Once the water has drained away, bacteria and fungi then break down the carbon in the peat and turn it into CO2 and methane. Meanwhile, the remainder of the solid matter in the peat starts to move downwards, in a process known as subsidence. Peat comprises 90 per cent water, so this is one of the most alarming consequences of peatland clearances. 'In the tropics, peat subsides at about four centimetres a year, so within half a century, very large landscapes on Sumatra and Borneo will become flooded as the peat drops below water level,' says Silvius. 'It's a huge catastrophe that's in preparation. Some provinces will lose 40 per cent of their landmass.'

F

And while these industries affect wetlands in ways that can easily be documented, Dr Dave Tickner of the WWF believes that more subtle impacts can be even more devastating. 'Sediment run-off and fertilizers can be pretty invisible,' says Tickner. 'Over-extraction of water is equally invisible. You do get shock stories about rivers running red, or even catching fire, but there's seldom one big impact that really hurts a wetland.' Tickner does not blame anyone for deliberate damage, however. 'I've worked on wetland issues for 20 years and have never met anybody who wanted to damage a wetland,' he says. 'It isn't something that people generally set out to do. Quite often, the effects simply come from people trying to make a living.'

G

Silvius also acknowledges the importance of income generation. 'It's not that we just want to restore the biodiversity of wetlands - which we do - but we recognise there's a need to provide an income for local people.' This approach is supported by IWMI. 'The idea is that people in a developing country will only protect wetlands if they value and profit from them,' says McCartney. 'For sustainability, it's essential that local people are involved in wetland planning and decision making and have clear rights to use wetlands.'

H

The fortunes of wetlands would be improved, Silvius suggests, if more governments recognized their long-term value. 'Different governments have different attitudes,' he says, and goes on to explain that some countries place a high priority on restoring wetlands, while others still deny the issue. McCartney is cautiously optimistic, however. 'Awareness of the importance of wetlands is growing,' he says. 'It's true that wetland degradation still continues at a rapid pace, but my impression is that things are slowly changing.'`,
      `Once the stuff of science fiction, technology that enables people to talk using different languages is now here. But how effective is it?

Noise, Alex Waibel tells me, is one of the major challenges that artificial speech translation has to meet. A device may be able to recognize speech in a laboratory, or a meeting room, but will struggle to cope with the kind of background noise I can hear in my office surrounding Professor Waibel as he speaks to me from Kyoto station in Japan. I'm struggling to follow him in English, on a scratchy line that reminds me we are nearly 10,000 kilometers apart - and that distance is still an obstacle to communication even if you're speaking the same language, as we are. We haven't reached the future yet. If we had, Waibel would have been able to speak more comfortably in his native German and I would have been able to hear his words in English.

At Karlsruhe Institute of Technology, where he is a professor of computer science, Waibel and his colleagues already give lectures in German that their students can follow in English via an electronic translator. The system generates text that students can read on their laptops or phones, so the process is somewhat similar to subtitling. It helps that lecturers speak clearly, don't have to compete with background chatter, and say much the same thing each year.

The idea of artificial speech translation has been around for a long time. Douglas Adams' science fiction novel, The Hitchhiker's Guide to the Galaxy, published in 1979, featured a life form called the 'Babel fish' which, when placed in the ear, enabled a listener to understand any language in the universe. It came to represent one of those devices that technology enthusiasts dream of long before they become practically realizable, like TVs flat enough to hang on walls: objects that we once could only dream of having but that are now commonplace. Now devices that look like prototype Babel fish have started to appear, riding a wave of advances in artificial translation and voice recognition.

At this stage, however, they seem to be regarded as eye-catching novelties rather than steps towards what Waibel calls 'making a language-transparent society.' They tend to be domestic devices or applications suitable for hotel check-ins, for example, providing a practical alternative to speaking traveler's English. The efficiency of the translator is less important than the social function. However, 'Professionals are less inclined to be patient in a conversation,' founder and CEO at Waverly Labs, Andrew Ochoa, observes. To redress this, Waverly is now preparing a new model for professional applications, which entails performance improvements in speech recognition, translation accuracy and the time it takes to deliver the translated speech.

For a conversation, both speakers need to have devices called Pilots (translator earpieces) in their ears. 'We find that there's a barrier with sharing one of the earphones with a stranger,' says Ochoa. That can't have been totally unexpected. The problem would be solved if earpiece translators became sufficiently prevalent that strangers would be likely to already have their own in their ears. Whether that happens, and how quickly, will probably depend not so much on the earpieces themselves, but on the prevalence of voice-controlled devices and artificial translation in general.

Waibel highlights the significance of certain Asian nations, noting that voice translation has really taken off in countries such as Japan with a range of systems. There is still a long way to go, though. A translation system needs to be simultaneous, like the translator's voice speaking over the foreign politician being interviewed on the TV, rather than in sections that oblige speakers to pause after every few remarks and wait for the translation to be delivered. It needs to work offline, for situations where internet access isn't possible, and to address apprehensions about the amount of private speech data accumulating in the cloud, having been sent to servers for processing.

Systems not only need to cope with physical challenges such as noise, they will also need to be socially aware by addressing people in the right way. Some cultural traditions demand solemn respect for academic status, for example, and it is only polite to respect this. Etiquette-sensitive artificial translators could relieve people of the need to know these differing cultural norms. At the same time, they might help to preserve local customs, slowing the spread of habits associated with international English, such as its readiness to get on first-name terms.

Professors and other professionals will not outsource language awareness to software, though. If the technology matures into seamless, ubiquitous artificial speech translation, it will actually add value to language skills. Whether it will help people conduct their family lives or relationships is open to question - though one noteworthy possibility is that it could overcome the language barriers that often arise between generations after migration, leaving children and their grandparents without a shared language.

Whatever uses it is put to, though, it will never be as good as the real thing. Even if voice-morphing technology simulates the speaker's voice, their lip movements won't match, and they will look like they are in a dubbed movie. The contrast will underline the value of shared languages, and the value of learning them. Sharing a language can promote a sense of belonging and community, as with the international scientists who use English as a lingua franca, where their predecessors used Latin. Though the practical need for a common language will diminish, the social value of sharing one will persist. And software will never be a substitute for the subtle but vital understanding that comes with knowledge of a language.`
    ],
    4: [
      `According to conservationists, populations of around two thirds of butterfly species have declined in Britain over the past 40 years. If this trend continues, it might have unpredictable knock-on effects for other species in the ecosystem. Butterfly eggs develop into caterpillars and these insects, which are the second stage in a new butterfly's lifecycle, consume vast quantities of plant material, and in turn act as prey for birds as well as bats and other small mammals. Only by arming themselves with an understanding of why butterfly numbers are down can conservationists hope to halt or reverse the decline.

Butterflies prefer outdoor conditions to be 'just right', which means neither too hot nor too cold. Under the conditions of climate change, the temperature at any given time in summer is generally getting warmer, leaving butterflies with the challenge of how to deal with this. One of the main ways in which species are ensuring conditions suit them is by changing the time of year at which they are active and reproduce. Scientists refer to the timing of such lifecycle events as 'phenology', so when an animal or plant starts to do something earlier in the year than it usually does, it is said to be 'advancing its phenology'.

These advances have been observed already in a wide range of butterflies - indeed, most species are advancing their phenology to some extent. In Britain, as the average spring temperature has increased by roughly 0.5°C over the past 20 years, species have advanced by between three days and a week on average, to keep in line with cooler temperatures. Is this a sign that butterflies are well equipped to cope with climate change, and readily adjust to new temperatures? Or are these populations under stress, being dragged along unwillingly by unnaturally fast changes? The answer is still unknown, but a new study is seeking to answer these questions.

First, the researchers pulled together data from millions of records that had been submitted by butterfly enthusiasts - people who spend their free time observing the activities of different species. This provided information on 130 species of butterflies in Great Britain every year for a 20-year period. They then estimated the abundance and distribution of each species across this time, along with how far north in the country they had moved. The data also, crucially, allowed researchers to estimate subtle changes in what time of the year each species was changing into an adult butterfly.

Analyzing the trends in each variable, the researchers discovered that species with more flexible lifecycles were more likely to be able to benefit from an earlier emergence driven by climate change. Some species are able to go from caterpillar to butterfly twice or more per year, so that the individual butterflies you see flying in the spring are the grandchildren or great-grandchildren of the individuals seen a year previously.

Among these species, researchers observed that those which have been advancing their phenology the most over the 20-year study period also had the most positive trends in abundance, distribution and northwards extent. For these species, such as Britain's tiniest butterfly, the dainty Small Blue, whose colonies are up to a hundred strong, some develop into butterflies early in spring, allowing their summer generations to complete another reproductive cycle by autumn so that more population growth occurs.

Other species, however, are less flexible and restricted to a single reproductive cycle per year. For these species, there was no evidence of any benefit to emerging earlier. Indeed, worryingly, it was found that the species in this group that specialize in very specific habitat types, often related to the caterpillar's preferred diet, actually tended to be most at harm from advancing phenology. The beautiful High Brown Fritillary, often described as Britain's most endangered butterfly, is in this group. It is found only in coppiced woodland and limestone pavement habitats. It is also a single-generation butterfly that has advanced its phenology. This suggests that climate change, while undoubtedly not the sole cause, might have played a part in the downfall of this species.

All is not lost, however. Many of Britain's single-generation species show the capacity, in continental Europe, to add a second generation in years that are sufficiently warm. Therefore, as the climate continues to warm, species like the Silver-studded Blue might be able to switch to multiple generations in the UK as well, and so begin to extract benefits from the additional warmth, potentially leading to population increases.

More immediately, conservationists can arm themselves with all this knowledge to spot the warning signs of species that may be at risk. The White Admiral of southern England, a much sought-after butterfly, experienced a significant increase in numbers from the 1920s but has shown a considerable decline in the past 20 years. This may be because the caterpillar exists solely on a diet of a plant called honeysuckle. But it is also likely to be due to climate change.`,
      `A

When Professor Mat Upton found that a microbe from a deep-sea sponge was killing pathogenic bugs in his laboratory, he realised it could be a breakthrough in the fight against antibiotic-resistant superbugs, which are responsible for thousands of deaths a year in the UK alone. Further tests confirmed that an antibiotic from the sponge bacteria, found living more than 700 metres under the sea at the Rockall trough in the north-east Atlantic, was previously unknown to science, boosting its potential as a life-saving medicine. But Upton, and other scientists who view the deep ocean and its wealth of unique and undocumented species as a prospecting ground for new medicines, fear such potential will be lost in the rush to exploit the deep sea's equally rich metal and mineral resources.

B

'We're looking at the bioactive potential of marine resources, to see if there are any more medicines or drugs down there before we destroy it for ever,' says Upton, a medical microbiologist at the University of Plymouth. He is among many scientists urging a halt to deep-sea mining, asking for time to weigh up the pros and cons. 'In sustainability terms, this could be a better way of exploiting the economic potential of the deep sea,' he argues. Oceanographers using remotely operated vehicles have spotted many new species. Among them have been sea cucumbers with tails allowing them to sail along the ocean floor, and a rare 'Dumbo' octopus, found 3,000 metres under the Pacific Ocean, off the coast of California. Any one of these could offer lifesaving potential. Upton estimates it could take up to a decade for a newly discovered antibiotic to become a medicine but the race towards commercial mining in the ocean abyss has already begun.

C

The deep sea contains more nickel, cobalt and rare earth metals than all land reserves combined, according to the US Geological Survey. Mining corporations argue that deep-sea exploration could help diversify the supply of metals and point to the fact that demand for resources such as copper, aluminum, cobalt for electric car batteries and other metals to power technology and smartphones, is soaring. They say that deep-sea mining could yield far superior ore to land mining with little, if any, waste. Different methods of extraction exist, but most involve employing some form of converted machinery previously used in terrestrial mining to excavate materials from the sea floor, at depths of up to 6,000 meters, then drawing a seawater slurry, containing rock and other solid particles, from the sea floor to ships on the surface. The slurry is then 'de-watered' and transferred to another vessel for shipping. Extracted seawater is pumped back down and discharged close to the sea floor.

D

But environmental and legal groups have urged caution, arguing there are potentially massive and unknown ramifications for the environment and for nearby communities, and that the global regulatory framework is not yet drafted. 'Despite arising in the last half century, the "new global gold rush" of deep-sea mining shares many features with past resource scrambles - including a general disregard for environmental and social impacts, and the marginalisation of indigenous peoples and their rights,' a paper, written by Julie Hunter and Julian Aguon, from Blue Ocean Law, and Pradeep Singh, from the Center for Marine Environmental Sciences, Bremen, argues. The authors say that knowledge of the deep seabed remains extremely limited. 'The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail, leading marine scientists to commonly remark that, with respect to the deep sea, "We don't yet know what we need to know".'

E

Scientific research - including a recent paper in Marine Policy journal - has suggested the deep seabed, and hydrothermal vents, which are created when seawater meets volcanic magma, have crucial impacts upon biodiversity and the global climate. The mineral-rich vents and their surrounds are also home to many well-known animals including crustaceans, tubeworms, clams, slugs, anemones and fish. 'It is becoming increasingly clear that deep-sea mining poses a grave threat to these vital seabed functions,' the paper says. 'Extraction methods would produce large sediment plumes and involve the discharge of waste back into the ocean, significantly disturbing seafloor environments,' the paper continues. 'On deep sea vents, scientists are clear,' says Dr Jon Copley of the National Oceanography Centre, Southampton: 'We don't want mining on them.'

F

The oceans occupy around 70% of the planet and are relatively unexplored, says Mike Johnston, chief executive of Nautilus, a Canadian underwater exploration company: 'It makes sense to explore this untapped potential in an environmentally sustainable way, instead of continually looking at the fast depleting land resources of the planet to meet society's rising needs.' Those leading the global rush to place giant mining machines thousands of metres below the sea surface say the environmental impacts will be far lower than on land. But critics say exotic and little-known ecosystems in the deep oceans could be destroyed and must be protected. 'Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans,' according to hydrothermal vent expert Verena Tunnicliffe, at the University of Victoria in Canada. She argues that active vents must be off-limits for mining to protect the new knowledge and biotechnology spin-offs they can deliver, and that strict controls must be in place elsewhere.`,
      `There has long been a general assumption that human beings are essentially selfish. We're apparently ruthless, with strong impulses to compete against each other for resources and to accumulate power and possessions. If we are kind to one another, it's usually because we have ulterior motives. If we are good, it's only because we have managed to control and transcend our innate selfishness and brutality.

This bleak view of human nature is closely associated with the science writer Richard Dawkins, whose 1976 book The Selfish Gene became popular because it fitted so well with - and helped to justify - the competitive and individualistic ethos that was so prevalent in late 20th-century societies. Like many others, Dawkins justifies his views with reference to the field of evolutionary psychology. Evolutionary psychology theorises that present-day human traits developed in prehistoric times, during what is termed the 'environment of evolutionary adaptedness'.

Prehistory is usually seen as a period of intense competition, when life was such a brutal battle that only those with traits such as selfishness, aggression and ruthlessness survived. And because survival depended on access to resources - such as rivers, forests and animals - there was bound to be conflict between rival groups, which led to the development of traits such as racism and warfare. This seems logical. But, in fact, the assumption on which this all rests - that prehistoric life was a desperate struggle for survival - is false.

It's important to remember that in the prehistoric era, the world was very sparsely populated. According to some estimates, around 15,000 years ago, the population of Europe was only 29,000, and the population of the whole world was less than half a million. Humans at that time were hunter-gatherers: people who lived by hunting wild animals and collecting wild plants. With such small population densities, it seems unlikely that prehistoric hunter-gatherer groups had to compete against each other for resources or had any need to develop ruthlessness and competitiveness, or to go to war.

There is significant evidence to back this notion from contemporary hunter-gatherer groups, who live in the same way as prehistoric humans did. As the anthropologist Bruce Knauft has remarked, hunter-gatherers are characterized by 'extreme political and sexual egalitarianism'. Knauft has observed that individuals in such groups don't accumulate property or possessions and have an ethical obligation to share everything. They also have methods of preserving egalitarianism by ensuring that disparities of status don't arise.

The !Kung people of southern Africa, for example, swap arrows before going hunting and when an animal is killed, the acclaim does not go to the person who fired the arrow, but to the person the arrow belongs to. And if a person becomes too domineering, the other members of the group ostracise them, exiling the offender from society. Typically in such groups, men do not dictate what women do. Women in hunter-gatherer groups worldwide often benefit from a high level of autonomy, being able to select their own marriage partners, decide what work they do and work whenever they choose to. And if a marriage breaks down, they have custody rights over their children.

Many anthropologists believe that societies such as the !Kung were normal until a few thousand years ago, when population growth led to the development of agriculture and a settled lifestyle. In view of the above, there seems little reason to assume that traits such as racism, warfare and male domination should have been selected by evolution - as they would have been of little benefit in the prehistoric era. Individuals who behaved selfishly and ruthlessly would be less likely to survive, since they would have been ostracised from their groups.

It makes more sense, then, to see traits such as cooperation, egalitarianism, altruism and peacefulness as innate characteristics of human beings. These were the traits that were prevalent in human life for tens of thousands of years. So presumably these traits are still strong in us now.

But if prehistoric life wasn't really as brutal as has often been assumed, why do modern humans behave so selfishly and ruthlessly? Perhaps these negative traits should be seen as a later development, the result of environmental and psychological factors. Research has shown repeatedly that when the natural habitats of primates such as apes and gorillas are disrupted, they tend to become more violent and hierarchical.

So, it could well be that the same thing has happened to us. I believe that the end of the hunter-gatherer lifestyle and the advent of farming was connected to a psychological change that occurred in some groups of people. There was a new sense of individuality and separateness, which led to a new selfishness, and ultimately to hierarchical societies, patriarchy and warfare. At any rate, these negative traits appear to have developed so recently that it doesn't seem feasible to explain them in adaptive or evolutionary terms.`
    ]
  };

  [2, 3, 4].forEach(function (tid) {
    var test = null;
    book.tests.forEach(function (t) { if (t.id === tid) test = t; });
    if (!test) return;
    (TEXTS[tid] || []).forEach(function (txt, i) {
      if (txt && test.reading.passages[i]) test.reading.passages[i].text = txt;
    });
  });

  // ===================== 听力原文脚本（真实，覆盖 listening-scripts.js 中 19-2-/19-3-/19-4-*） =====================
  if (typeof LISTENING_SCRIPTS !== 'undefined') {
    LISTENING_SCRIPTS['19-2-0'] = `WOMAN: Hi Coleman, how are you?

COLEMAN: Good, thanks.

WOMAN: I wanted to have a chat with you because our friend Josh told me that you've joined a guitar group, and it sounds interesting. I'd really like to learn myself.

COLEMAN: Why don't you come along? I'm sure there's room for another person.

WOMAN: Really? So—who runs the classes?

COLEMAN: He's called a 'coordinator'—his name's Gary Mathieson.

WOMAN: Let me note that down. Gary… How do you spell his surname?

COLEMAN: It's M-A-T-H-I-E-S-O-N.

WOMAN: Right, thanks.

COLEMAN: He's retired, actually, but he's a really nice guy and used to play in a lot of bands.

WOMAN: Thanks. So how long have you been going?

COLEMAN: About a month now.

WOMAN: And could you play anything before you started?

COLEMAN: I knew a few chords, but that's all.

WOMAN: I'm sure everyone will be better than me.

COLEMAN: That's what I thought, too. When I first spoke to Gary on the phone, he said it was a class for beginners, but I was still worried that everyone would be better than me. But we were all equally hopeless!

WOMAN: Oh, that's reassuring. So where do you meet?

COLEMAN: Well, when I joined the group, they were meeting in Gary's home, but as the group got bigger, he decided to book a room at the college in town. I prefer going there.

WOMAN: I know that place. I used to go to tap dancing classes there when I was at secondary school. I haven't been since, though, and I can't remember what road it's in… Is it Lock Street?

COLEMAN: It's just beyond there at the bottom of New Street near the city roundabout.

WOMAN: Yes, of course.

COLEMAN: The guitar club is on the first floor in Room T347.

WOMAN: Right. And when do you meet? Is it at the weekend?

COLEMAN: We meet on Thursdays. It used to be 10:30, and that suited me well, but now we meet at 11. The class that's in there before us asked if they could have the room for another 30 minutes.

WOMAN: Oh, I see. Well, I'd love to come, but I don't have a guitar.

COLEMAN: Well, you can always buy a second-hand one. There's a website called The Perfect Instrument that sells all kinds of guitars, violins, and so on. I'm sure you'll find something there.

WOMAN: So, what's a typical lesson like with Gary?

COLEMAN: Well, he always starts by getting us to tune our guitars. That takes about five minutes.

WOMAN: Uh-huh.

COLEMAN: Some people have an app they use, but others do it by ear. Gary goes around and helps them. And while he's doing that, he tells us what he's going to do during the lesson.

WOMAN: Right.

COLEMAN: First, we usually spend about ten minutes doing some strumming.

WOMAN: So, is that using… what are they called… plectrums?

COLEMAN: No—we just use our thumbs.

WOMAN: Much easier.

COLEMAN: Gary reminds us where to put our fingers for each chord, and then we play them together. Sometimes we all just start laughing because we're so bad at keeping time, so Gary starts clapping to help us.

WOMAN: Do you learn to play any songs?

COLEMAN: Yes—we do at least one song with words and chords. I mean, that's harder than you think.

WOMAN: Oh, I'm sure it is!

COLEMAN: That part of the lesson takes about 15 minutes. He often brings a recording of the song and plays it to us first. Then he hands out the song, and if there's a new chord in it, we practise that before we play it together—but really slowly.

WOMAN: Do you do any fingerpicking?

COLEMAN: That's the last ten minutes of the lesson, when we pick out the individual notes from a tune he's made up. It's always quite simple.

WOMAN: That must be hard, though.

COLEMAN: It is, but people like it because they can really concentrate, and if we're all playing well, it sounds quite impressive. The only trouble is that he sometimes gets us to play one at a time—you know, alone.

WOMAN: That's scary.

COLEMAN: It is, but I've got used to it now. At the end, he spends about five minutes telling us what to practise for the following week.

WOMAN: Well, thanks, Coleman. I'll go and have a look at that website, I think.`;

    LISTENING_SCRIPTS['19-2-1'] = `I never really planned to be a lifeboat volunteer when I came to live in Northsea. I'd been working in London as a website designer, but although that was interesting, I didn't like city life. I'd been really keen on boats as a teenager, and I thought if I went to live by the sea, I might be able to pursue that interest a bit more in my free time. Then I found that the Lifeboat Institution was looking for volunteers, so I decided to apply.

The Lifeboat Institution building here in Northsea's hard to miss; it's one of the largest in the country. It was built 15 years ago with funds provided by a generous member of the public, who'd lived here all her life. As the Lifeboat Institution is a charity that relies on that kind of donation, rather than funding provided by the government, that kind of help is much needed. When I applied, I had to have a health assessment. The doctors were particularly interested in my vision. I used to be short-sighted, so I'd had to wear glasses, but I'd had laser eye surgery two years earlier so that was OK. They gave me tests for colour blindness and they thought I might have a problem there, but it turned out I was OK. When the coastguard gets an alert, all the volunteers are contacted and rush to the lifeboat station. Our target's to get there in five minutes, then we try to get the boat off the dock and out to sea in another six to eight minutes. Our team's proud that we usually achieve that – the average time across the country's eight and a half minutes.

As well as steering the lifeboat, as a 'helmsman,' I have the ultimate responsibility for the lifeboat. I have to check that the equipment we use is in working order – we have special life jackets that can support up to four people in the water. And it's ultimately my decision whether it's safe to launch the boat. But it's very rare not to launch, even in the worst weather. As well as going out on the lifeboat, my work involves other things too. A lot of people underestimate how windy conditions can change at sea, so I speak to youth groups and sailing clubs in the area about the sorts of problems that sailors and swimmers can have if the weather suddenly gets bad. We also have a lot of volunteers who organise activities to raise money for us, and we couldn't manage without them.

The training we get is a continuous process, focusing on technical competence and safe handling techniques, and it's given me the confidence to deal with extreme situations without panicking. I was glad I'd done a first aid course before I started, as that's a big help with the casualty care activities we do. We've done a lot on how to deal with ropes and tie knots – that's an essential skill. After a year, I did a one-week residential course, led by specialists. They had a wave-tank where they could create extreme weather conditions – so we could get experience at what to do if the boat turned over in a storm at night, for example. Since I started, I've had to deal with a range of emergency situations.

But the work's hugely motivating. It's not just about saving lives – I've learned a lot about the technology involved. My background in IT's been useful here, and I can use my expertise to help other volunteers. They're a great group – we're like a family really, which helps when you're dragging yourself out of bed on a cold stormy night. But actually, it's the colder months that can be the most rewarding time. That's when the incidents tend to be more serious, and you realise that you can make a huge difference to the outcome. So if any of you listeners are interested…`;

    LISTENING_SCRIPTS['19-2-2'] = `BELLA: Hi Don – did you get the copy of the article on recycling footwear that I emailed you?

DON: Yeah – it's here … I've had a look at it.

BELLA: So do you think it's a good topic for our presentation?

DON: Well, before I started reading it, I thought recycling footwear, well, although it's quite interesting, perhaps there isn't enough to say about it, cos we put shoes in recycling bins, they go to charity shops and that's about it.

BELLA: … but there's much more to it than that.

DON: I realise that now and I'm keen to research the topic more.

BELLA: That's great.

DON: One of the things I didn't realise until I read the article was just how many pairs of trainers get recycled!

BELLA: Well, a lot of young people wear them all the time now. They've become more popular than ordinary shoes.

DON: I know. I guess they are very hard-wearing, but don't they look a bit casual for school uniform? I don't think they're right for that.

BELLA: Actually, I think some of them look quite smart on pupils … better than a scruffy old pair of shoes.

DON: So do you keep shoes a long time?

BELLA: Yes. Though I do tend to wear my old pairs for doing dirty jobs like cleaning my bike.

BELLA: I must admit, I've recycled some perfectly good shoes, that haven't gone out of fashion and still fit, just because they don't look great on me anymore. That's awful isn't it?

DON: I think it's common because there's so much choice. The article did say that recent sales of footwear have increased enormously.

BELLA: That didn't surprise me.

DON: No. But then it said that the amount of recycled footwear has fallen: it's 6 percent now compared to a previous level of 11 percent. That doesn't seem to make sense.

BELLA: That's because not everything goes through the recycling process. Some footwear just isn't good enough to re-sell, for one reason or another, and gets rejected.

BELLA: So let's find some examples in the article of footwear that was rejected for recycling.

DON: OK. I think there are some in the interview with the recycling manager. Yeah – here it is.

BELLA: Mmm. Let's start with the ladies' high-heeled shoes. What did he say about those?

DON: He said they were probably expensive – the material was suede and they were beige in colour – it looked like someone had only worn them once, but in a very wet field so the heels were too stained with mud and grass to re-sell them.

BELLA: OK … and the leather ankle boots. What was wrong with them?

DON: Apparently, the heels were worn – but that wasn't the problem. One of the shoes was a much lighter shade than the other one – it had obviously been left in the sun. I suppose even second-hand shoes should look the same!

BELLA: Sure. Then there were the red baby shoes.

DON: Oh yes – we're told to tie shoes together when we put them in a recycling bin, but people often don't bother.

BELLA: You'd think it would have been easy to find the other, but it wasn't. That was a shame because they were obviously new.

DON: The trainers were interesting. He said they looked like they'd been worn by a marathon runner.

BELLA: Yeah – weren't they split?

DON: Not exactly. One of the soles was so worn under the foot that you could put your finger through it.

BELLA: Well, we could certainly use some of those examples in our presentation to explain why 90 percent of shoes that people take to recycling centres or bins get thrown into landfill.

DON: Mmm. What did you think about the project his team set up to avoid this by making new shoes out of the good parts of old shoes?

BELLA: It sounded like a good idea. They get so many shoes, they should be able to match parts. I wasn't surprised that it failed, though. I mean, who wants to buy second-hand shoes really? Think of all the germs you could catch!

DON: Well, people didn't refuse them for that reason, did they? It was because the pairs of shoes weren't identical.

BELLA: They still managed to ship them overseas, though.

DON: That's another area we need to discuss.

BELLA: You know I used to consider this topic just from my own perspective, by thinking about my own recycling behaviour without looking at the bigger picture. So much happens once shoes leave the recycling area.

DON: It's not as simple as you first think, and we can show that by taking a very different approach to it.

BELLA: Absolutely. So let's discuss …`;

    LISTENING_SCRIPTS['19-2-3'] = `For my project on invertebrates, I chose to study tardigrades. These are microscopic — or to be more precise — near-microscopic animals. There are well over a thousand known species of these tiny animals, which belong to the phylum Tardigrada. Most tardigrades range in length from 0.05 to 1 millimetre, though the largest species can grow to be 1.2 millimetres in length. They are also sometimes called 'water bears': 'water' because that's where they thrive best, and 'bear' because of the way they move.

'Moss piglet' is another name for tardigrades because of the way they look when viewed from the front. They were first discovered in Germany in 1773 by Johann Goeze, who coined the name Tardigrada.

As I say, there are many different species of tardigrade — too many to describe here — but, generally speaking, the different species share similar physical traits. They have a body which is short, and also rounded — a bit like a barrel — and the body comprises four segments. Each segment has a pair of legs, at the end of which are between four and eight sharp claws. I should also say that some species don't have any claws: what they have are discs, and these work by means of suction.

They enable the tardigrade to cling to surfaces or to grip its prey. Within the body, there are no lungs, or any organs for breathing at all. Instead, oxygen and also blood are transported in a fluid that fills the cavity of the body.

As far as the tardigrade's head is concerned, the best way I can describe this is that it looks rather strange — a bit squashed even. The tardigrade's mouth is a kind of tube that can open outwards to reveal teeth-like structures known as 'stylets'. These are sharp enough to pierce plant or animal cells.

So, where are tardigrades found? Well, they live in every part of the world, in a variety of habitats: most commonly, on the bed of a lake, or on many kinds of plants or in very wet environments. There's been some interesting research which has found that tardigrades are capable of surviving radiation and very high pressure, and they're also able to withstand temperatures as low as minus 200 degrees centigrade, or highs of more than 148 degrees centigrade, which is incredibly hot.

It has been said that tardigrades could survive long after human beings have been wiped out, even in the event of an asteroid hitting the earth. If conditions become too extreme and tardigrades are at risk of drying out, they enter a state called cryptobiosis. They form a little ball, called a tun, by retracting their head and legs, and their metabolism drops to less than one percent of normal levels. They can stay in this state for decades, and if re-introduced to water, they will come back to life in a matter of a few hours. While in this state of cryptobiosis, tardigrades produce a protein that protects their DNA.

In 2016, scientists revived two tardigrades that had been tuns for more than 30 years. There are currently several tests taking place in space, to determine how long tardigrades might be able to survive there. I believe the record so far is 10 days.

In terms of their diet, tardigrades consume liquids in order to survive. They suck the juices from moss, or extract fluid from seaweed, but some species prey on other tardigrades.

Finally, I'd like to mention the conservation status of tardigrades. It is estimated that they have been in existence for approximately half a billion years and, in that time, they have survived five mass extinctions. So, tardigrades have not been evaluated by the International Union for Conservation of Nature and are not on any endangered list. Some researchers have described them as thriving.

Does anyone have any questions they'd like to ask?`;

    LISTENING_SCRIPTS['19-3-0'] = `LEON: Hi Shannon – how are you settling into your new flat?

SHANNON: Really well, thanks.

LEON: You look like you're going shopping.

SHANNON: Yes, I am. My cousins are coming to stay for a couple of days, and I have to cook for them.

LEON: Well, there are plenty of places to buy food in Kite Place – it's the area by the harbour.

SHANNON: Oh. OK, I'll find that on the map. Thanks.

LEON: What sort of food do you need to get?

SHANNON: Well, neither of them eats meat but they both like fish.

LEON: Well, there's a really good fish market there.

SHANNON: Oh great – where is it exactly?

LEON: It's at the far end of Kite Place, so you have to go over the bridge and then it's on the right.

SHANNON: OK – is it open all day?

LEON: It doesn't close until four, but I'd recommend going earlier than that – it does run out of some things.

SHANNON: Oh, I don't want that to happen.

LEON: As long as you get there by 3.30, you should be fine. It's only 11 now, so plenty of time.

SHANNON: Right.

LEON: Do you need to buy vegetables too?

SHANNON: I do, and I want to avoid all the plastic packaging in the supermarket!

LEON: Well, there's a really nice organic shop there. Now what's it called … it's the name of a flower. I know, it's 'Rose'.

SHANNON: That's a nice name.

LEON: Yeah – it sells vegetables and quite a lot of other stuff.

SHANNON: And where's that?

LEON: Well, as you reach the market, you'll see a big grey building on your left – I think it used to be a warehouse. Anyway, now it's a restaurant upstairs, but the ground floor has two shops either side of the entrance and it's the one on the left.

SHANNON: That's easy enough.

LEON: You can't miss it – there's also a big sign on the pavement so you can look for that.

SHANNON: Fine! I guess if I need anything else, I'll have to go to the supermarket.

LEON: Yeah – you should be able to get everything you need, but there's a minibus that goes to the supermarket if you need it. It's purple and the number is 289.

SHANNON: Thanks, that's great.

LEON: So what do you need to get at the fish market? The salmon is always very good and the shellfish.

SHANNON: I'm going to make a curry, I think, and I need about 12 prawns for that.

LEON: They'll have plenty of those.

SHANNON: OK.

LEON: Have you ever tried samphire?

SHANNON: No – what's that?

LEON: It's a type of seaweed. I just ask for a handful and you fry it in butter. It's delicious!

SHANNON: Oh, I might try that – how do you spell it?

LEON: It's S-A-M-P-H-I-R-E.

SHANNON: Great – it's always good to try something different.

LEON: Yeah.

SHANNON: I'll see what beans they have in the organic shop and I think I'll get something for dessert there.

LEON: How about a mango?

SHANNON: I'm not sure – they're not always ripe. I'd prefer a melon – it's bigger too.

LEON: Good idea. The owner also sells a lot of spices there that you can put in a curry, and things like coconut.

SHANNON: Oh, that's very helpful. I'll have a look.

LEON: No problem.

SHANNON: I know bread doesn't really go with curry but I always like to have some in case.

LEON: As I said – all the bread is home-made and there's lots of variety. I like the brown bread myself.

SHANNON: Mm, sounds good.

LEON: They sell other things there too.

SHANNON: Like cakes? I love chocolate cake.

LEON: Well – not that, but they have a whole range of tarts and the best are the strawberry ones.

SHANNON: Perfect – hopefully I won't even have to go to the supermarket!`;

    LISTENING_SCRIPTS['19-3-1'] = `PRESENTER: The children's book festival is coming up again soon and here to tell us all about it is the festival's organiser, Jenny Morgan. So tell us what we can expect this year, Jenny.

JENNY: Well, as usual we've got five days of action-packed exciting events for children, with writers coming from all over the country getting involved.

Just to give you an idea of what's on offer in the workshops, first of all, there's a very special event called Superheroes. This is a chance for deaf children to share their reading experiences with author Madeleine Gordon, who is herself hearing impaired. 'Just do it' is a practical workshop led by the well-known illustrator Mark Keane. He'll take participants on a magical journey to faraway lands with an opportunity for aspiring actors to do some role play. 'Count on me' is an inspiring and entertaining look at the issues of friendship for 13–14-year-olds. It looks at some of the friendships described in popular books and asks participants to compare these with their own experiences.

'Speak up' is part of a series of workshops on the subject of mental health. This is a creative writing workshop encouraging children to describe situations where young people experience loneliness. A recent survey revealed that children can be lonely even when they're at home with their families. 'Jump for joy', as many of you will know, is the heart-warming, best-selling story by Nina Karan about a young girl's trip to visit her relatives in India. It recently received the gold medal at the Waterford Awards. Nina will get children to celebrate the word 'joy' by writing a poem.

'Sticks and stones' is the beautifully illustrated picture book for young readers about a community who organise an African-Caribbean festival to help local children learn about their Jamaican roots. This will be a musical event where children will have the chance to play steel drums. This is bound to be very popular, so please book as soon as possible.

PRESENTER: Thanks Jenny. That all sounds really interesting. I'm just wondering if you have a favourite book you could recommend for our readers?

JENNY: It's hard to choose, but Alive and Kicking is definitely worth mentioning. You won't have heard of the writer as it's her first book – which is really impressive. It's basically the teenage diary of a boy from Somalia who comes to live in the UK. It deals with the serious issue of immigration and all the challenges the boy has to face at school and with the language barrier, etc. Usually, books like this are quite sad, but this one actually made me cry with laughter. On each page, there are simple but hilarious black and white stick drawings of the boy with his friends and teachers. At the end of each diary entry, there are new English words the boy learns each day, which may help develop some children's vocabulary.

PRESENTER: I think my kids would enjoy that. What about any advice for parents on how to encourage their children to read more?

JENNY: Well, this is something I get asked about a lot. There are so many distractions for kids these days that it can be hard to find time for reading. One thing I'd say is to make time to sit down with your child and share books with them. A lot of parents give up reading aloud to their children as soon as they learn to read independently, but this is a mistake. It's good to read more advanced books to them as it helps to develop their vocabulary. If you don't have time for this, then let them listen to audio books. Often, they'll want to read books they've listened to for themselves. I think it's a good idea to make a mental note of the type of books your child is reading – often they just read the same genre all the time, which can get a bit boring. You can introduce new authors and genres to them. Librarians should be able to help you with this.`;

    LISTENING_SCRIPTS['19-3-2'] = `CLARE: Hi Jake. How are you getting on with the practical teaching?

JAKE: It's harder than I expected, but I've got some great classes. How about you?

CLARE: Not brilliant. I'm really struggling with my Year 12 science class.

JAKE: Are they hard to control?

CLARE: Well, I don't have discipline problems as such. It's just that they don't seem to think that science has anything to do with their lives. It's depressing. They listen to what I say, and I gave them a test last week and the results weren't too bad, but there's no real engagement.

JAKE: Right.

CLARE: And as part of my teaching practice, I have to design an experiment for them to do. I was wondering about something on the children's diets… you know, asking them to record what they eat and maybe linking it to their state of health.

JAKE: Mmm. Let's think. So your methodology would involve the children recording what they eat. OK, but you'd also need to have access to the children's medical records and I don't think people would be happy about that; confidentiality would be an issue. If you could get the right data, the conclusions might be significant, but I suspect it's just not going to be easy.

CLARE: Right.

JAKE: Have you thought about doing an experiment using animals?

CLARE: Wouldn't that be upsetting for the children?

JAKE: Well, the animals don't have to be harmed in any way. It could just be an experiment where they're given a certain diet and the effects are observed.

CLARE: Would I have to get permission to use animals?

JAKE: Yes, you'd have to submit an outline of the experiment and fill in a form, but it's quite straightforward.

CLARE: But if we found out that, say, a particular diet affects the health of animals, the same thing wouldn't necessarily be true for people, would it?

JAKE: No that's true, but the findings for any experiment are going to be limited. It's inevitable.

CLARE: I suppose so. So what animals could I use to investigate the effects of diet? Mice?

JAKE: Yes. You'd need experimental mice – ones that have been specially bred for experiments. OK, so what will your experiment be investigating exactly?

CLARE: Well, something to do with nutrition. So maybe we could look at food supplements… things like extra iron and extra protein, and their impact on health.

JAKE: Mmm. That might be rather broad. Maybe just look at the effects of one supplement, like sugar, on the health of the mice?

CLARE: In fact, maybe the focus could be on whether mice can control their own diet.

JAKE: So, what happens when they have access to more sugar, that they don't really need?

CLARE: Exactly. Do they eat it or do they decide to leave it?

JAKE: Great. Then later on, you could do a follow-up experiment adding another variable. Like, you could give some of the mice the chance to be more active, running on a wheel or something, and the others just sit around and don't do much.

CLARE: Or I could repeat the experiment but change the type of food I provided … or use mice with a different genetic structure. But I think your idea would be more interesting, I might think about that some more.

CLARE: So can I talk through a possible procedure for the experiment where mice are given a sugar supplement?

JAKE: Sure. I did a similar experiment in college actually.

CLARE: Great. So how many mice would I need?

JAKE: I'd say about 12. And all young ones, not a mixture of old and young.

CLARE: OK. And I'd need two groups of equal sizes, so six in each group. And how would I tell them apart? I suppose I could put some sort of tag on one group… or just mark them in some way?

JAKE: You could use food colouring, that wouldn't hurt them.

CLARE: Perfect. Then each group would go into a separate cage, and one group, let's call them group A, would be the control group. So they'd just have ordinary mouse food. I suppose you can buy that?

JAKE: Yes, it comes in dry pellets.

CLARE: And the other group would have the same as the first group, but they'd also have the extra sugar.

JAKE: Would you just give them straight sugar?

CLARE: I might be better to give them something like cereal with it.

JAKE: Hmm. Then you'd need to weigh the mice, I should think once a week. And you'd need an electronic balance.

CLARE: But we can't hold them on the balance, or it'd affect the reading.

JAKE: Exactly. So you need something called a weighing chamber to stop the mice from running away. It sounds complicated, but actually you can just use a plastic box with holes in the top.

CLARE: OK. So once we've measured the weight gain of each mouse we can work out the average for each group, as well as the standard deviation. And then see where we go from there. That sounds cool, I think the students will enjoy it.

JAKE: Yes. One thing…`;

    LISTENING_SCRIPTS['19-3-3'] = `In today's lecture, I'm going to be talking about microplastics.

Microplastics are tiny pieces of plastic smaller than five millimetres in size. Recently there's been a greater awareness that there are large quantities of plastic waste – big and small – in the environment. The amount of plastic waste in the oceans has received widespread attention, but far less is known about the effects of microplastics in freshwater and particularly in soil.

Microplastics can enter the environment via a number of different sources. Threads and microfibres detach from synthetic clothing every time they're put in a washing machine, and these find their way into the water system. Other sources include big pieces of plastic waste that are already in the environment, and these break down into microscopic particles over a period of time. On a larger scale, factory waste is another route, as are tyres which wear down as cars, lorries and so on travel along road surfaces.

We already understand some of the impacts of microplastics from studies involving fish and other animals. There is evidence that microplastics harm small creatures in a variety of ways, such as by damaging their mouths, or by impairing their ability to feed, for example when microplastics get lodged in their digestive system.

Surprisingly perhaps, it is likely that humans consume microplastics, as these have been detected in a wide range of food and drink products, including bottled water, as well as in water that comes direct from the tap. What's more, salt and many kinds of seafood have also been found to contain microplastics. However, it's important to underline that there is not yet conclusive proof that microplastics cause significant harm to people. In many countries, including here in the UK, there is legislation which prevents manufacturers from adding plastic microbeads to shower gels, facial cleansers and toothpaste. It is very difficult to accurately estimate the total amount of microplastic particles in the soil as they can be hard to detect, but we do know they are carried in the air and deposited in the soil by rain. What's more, many of the fertilisers used by both farmers and gardeners contain microplastics.

A team from the Anglia Ruskin University in Cambridge has carried out a study of the effects of microplastics on the digestive tracts of earthworms. These worms, which live in topsoil, are an essential component of our agricultural system. By feeding on soil, they mix nutrients into it, thereby making it more fertile. The researchers set out to discover whether the introduction of microplastics into the soil – and the subsequent ingestion of these by earthworms – would impact soil quality and ultimately inhibit plant growth. The short answer was, yes, it did. After placing three different types of microplastic particles into the soil, they planted perennial rye grass. The particles of microplastic, which included biodegradable PLA and conventional high-density polyethylene, or HDPE, were then ingested by the earthworms in the soil.

The result was that the worms lost weight rapidly. What's more, a lower percentage than normal of the rye grass seeds germinated, and the researchers concluded that this was a direct result of the earthworms being unable to fulfil their normal role in making soil more fertile. The team also discovered that there was an increase in the amount of acid found in the soil, and this was attributed mainly to the microplastic particles from conventional HDPE plastic.

The conclusions of the study make for very interesting reading. To summarise, the authors proposed the idea that we need to regard soil as we would regard any other process in nature. This means we should accept the implications of soil being dependent on decaying and dead matter constantly being passed through the bodies of earthworms. That is, when soil becomes impoverished by the presence of microplastics, not only ecosystems but also the whole of society are negatively impacted.`;

    LISTENING_SCRIPTS['19-4-0'] = `KAEDEN: Hello Charlotte. I'm Kaeden, one of the supervisors. Welcome to the team.

CHARLOTTE: Hi Aiden.

KAEDEN: It's Kaeden.

CHARLOTTE: I'm so sorry.

KAEDEN: Don't worry. People often get my name wrong; they never know how to spell it. It's K-A-E-D-E-N, in case you ever need to write it.

CHARLOTTE: I'll try and remember.

KAEDEN: So, there are a few practical things you need to sort out this morning. Then I'll show you what you're going to do today.

CHARLOTTE: The email I received said to go to the front desk, to show my letter of appointment and pick up my badge.

KAEDEN: You'll need that for the staffroom and other areas of the supermarket where shoppers aren't allowed. So, after you've finished at the front desk, I'll take you to the staffroom. Put your coat and rucksack in one of the lockers there. Take whichever one is free.

CHARLOTTE: Will I have a key?

KAEDEN: Yes. Try not to lose it. At the end of the day, leave it in the door for the next person to use.

CHARLOTTE: Will do.

KAEDEN: You also need to go to the HR department to see Tiffany. She's really helpful.

CHARLOTTE: I was told to bring my passport with me. HR need to take a note of the number in it.

KAEDEN: That's right. Or you can show your ID card.

CHARLOTTE: I don't have one of those.

KAEDEN: OK. Tiffany will give you a uniform. They have lots in different sizes, so you just tell her what you need. I won't come with you to HR – I've got to go and sort something else out. Problem with a bread slicer.

CHARLOTTE: Is the HR office near the staffroom?

KAEDEN: The staffroom's on the first floor, and HR are a couple of floors above that, on the third floor. There's a staircase outside the staffroom.

CHARLOTTE: OK.

KAEDEN: When you've finished with HR, come and find me in the bakery section of the shop.

CHARLOTTE: I'm looking forward to getting started.

KAEDEN: I'll just give you my phone number, in case you can't find me. Have you got your phone there?

CHARLOTTE: Yes … OK, ready.

KAEDEN: It's oh-four-one-two double-six-five nine-oh-three.

CHARLOTTE: OK, done.

KAEDEN: So, Charlotte, your tasks today are in the bakery section, on the sushi counter, and on the meat and fish counters. The first job is to check sell-by dates on the bread and cakes. If any of the dates are today's, put a new price label on the packaging.

CHARLOTTE: What if any of the labels are yesterday's dates, or older? Do I throw those items away?

KAEDEN: Yes, but that shouldn't happen – we check the stock every day. When something needs a new price label, put a yellow one on the package, next to the original price.

CHARLOTTE: OK.

KAEDEN: After that, you'll go to the sushi takeaway counter.

CHARLOTTE: Will I be preparing boxes of food?

KAEDEN: For today, you'll just be helping the staff.

CHARLOTTE: Yes, of course.

KAEDEN: You'll see lots of flat cardboard boxes at one end of the counter. Beneath those is where we keep the plastic boxes - we run out of those really quickly, so you should bring more from the storeroom.

CHARLOTTE: Is that my only task on the sushi counter?

KAEDEN: No. You also need to clean the area where they prepare the dishes. There are cloths and bottles of spray by the sink. Oh, and please make sure you clean that too.

CHARLOTTE: Sure. That's important, isn't it?

KAEDEN: Absolutely. But you mustn't wash up knives. You have to do some training before you're allowed to touch sharp objects.

CHARLOTTE: What should I do if there are any?

KAEDEN: Ask someone to put them in the dishwasher.

CHARLOTTE: OK, thanks. I don't want to get anything wrong.

KAEDEN: Don't worry. You'll be fine. And I'll be around to help.

CHARLOTTE: Right.

KAEDEN: Finally, the meat and fish counters. You need to clean the area where staff serve customers, including wiping the weighing scales.

CHARLOTTE: OK. Anything else?

KAEDEN: The fish is laid on ice, but when that starts to melt, you'll need to get more from the cold-room.

CHARLOTTE: I know the staff on the food counters wear a hat. Will that be the same for me?

KAEDEN: You won't be serving customers directly, so no. But make sure you put on thermal gloves when you take anything out of the cold-room. The temperature's low enough in there to get frostbite from touching things.

CHARLOTTE: Understood.`;

    LISTENING_SCRIPTS['19-4-1'] = `My name's Liz Fuller and I'm a running coach with Compton Park Runners Club.

Welcome to my podcast. If you're thinking about taking up running – I'm here to help.

There are many training programmes available online which aim to help people build up to running 5 kilometres. Some of them are great, and thousands of people of all ages are taking part in 5-kilometre races across the country as a result. People like them because they're easy to follow and don't push them too hard. However, they don't work for everyone – especially if you suffer from something like a heart condition or asthma, because they're aimed at people with average fitness and running ability. Another thing is that everyone is different – and if you have any specific questions related to your needs, there's no one to provide any answers.

I have a couple of simple tips I always give to new runners. I expect you've been told to run very slowly until your fitness increases – well, I find that can prevent progress. You should run at a speed that feels comfortable, but time yourself and try to run a bit faster each time. Listening to music can be very helpful – it takes your mind off things and helps your body get into a rhythm. I'd say that is better than running with a friend – especially as most people are competitive, and that's not what you want when you're just starting. I don't think the time of day is especially important – some people are better in the evening, while others are morning people – but you need to be consistent, so aim to train regularly. Twice a week is enough to begin with.

New members often say to me that they've been put off running either because they lack confidence, or they don't have time, or they think they dislike running. Ceri, for example, joined the club two years ago at the age of 40. She'd always enjoyed running at school but wasn't sure if she'd be able to do it. She was worried about being left behind and being the slowest runner. But she says she was made to feel so welcome she soon forgot all about that. James had always hated the idea of running, but a friend encouraged him to come along for a taster session and he hasn't looked back. He never misses a training session despite having a really demanding job. Leo was worried about having to commit himself to training sessions every week and wasn't sure he'd be able to fit training into his busy schedule. But after experiencing a lot of stress at work, he came along to us and gave it a go. Now he says he feels much more relaxed and he looks forward to his weekly run. Mark is quite typical of our new members. He's never considered himself to be a sporty person and it was only when he retired that he decided to take up the challenge of trying to run 5 kilometres. It took him months to find the courage to contact us, but he felt reassured immediately as there were other people his age who were only just taking up running for the first time.

My own journey hasn't been easy. I did my first marathon when I was 37, after having had two kids. My husband had been running marathons for years, but I never dreamed I'd be doing one with him. I managed to complete it in four hours, but I felt like giving up halfway through – it was only the support of the spectators that kept me going.

I do think signing up for a race of whatever length is motivating – whether it's 5K or 25K – because it's good to have something to work towards, and it gives you a sense of achievement. I did my first 10K after only six months, which was certainly very challenging and not something I'd necessarily recommend. But after you've been training for a few weeks, it's worth putting your name down for a 5K. Some people find they only need a few practice runs before taking part in a race, but I'd give yourself a couple of months at least. Well, I hope that's given you some insight…`;

    LISTENING_SCRIPTS['19-4-2'] = `KIERAN: So Jane – you'll be off to Denmark soon to do your work placement.

JANE: Yes, I'm really looking forward to it and I've just started packing up all my books to put in storage.

KIERAN: Well, I hope they don't get spoilt.

JANE: It's OK – my grandfather works in a bookshop and he told me how to pack them.

KIERAN: Oh, that's helpful.

JANE: He says you have to support the spine otherwise the paper can come away from the cover.

KIERAN: Yeah – that's obvious.

JANE: He also told me to pack them flat in the box not on their side – again because they can bend and if you leave them like that for, say, a year, it's quite hard to get them back to their normal shape.

KIERAN: Well, it's pretty clear that ruins them, but a lot of people just can't be bothered to protect their books.

JANE: He always says it's such a shame that publishers don't use better-quality paper.

KIERAN: It's the acid in the paper that causes the problem, isn't it?

JANE: Yeah – that's why old books go yellow. You know some of the books my grandfather's given me are like that already.

KIERAN: Oh …

JANE: I should dump them really if they're going to deteriorate further, but I'd feel bad. They'll always remind me of him. He's quite a collector, you know.

KIERAN: Well, if they're important to you …

JANE: Yeah – I'd regret just throwing them away.

KIERAN: You know, maybe it's because I was taught to treasure books … but I hate seeing students force open the pages – of paperbacks. They press so hard they end up breaking the spine.

JANE: I know, but unfortunately, paperbacks aren't designed to last a long time and people know that. Hardbacks aren't quite as weak.

KIERAN: Yeah, they're different, I suppose. But I still don't think people value hardbacks like they used to.

JANE: Well, they aren't decorative, are they, like other objects. Plus, nowadays, people don't keep them out on shelves as much as they used to.

KIERAN: That's such a pity. When I visit someone – if they have, say, a colorful book on a table, it's the first thing I'm drawn to.

JANE: I agree – and book covers can be a work of art in themselves. Some are really eye-catching.

KIERAN: I've always been taught to handle books carefully. If you watch someone take a book off a shelf, well, they usually do it wrong.

JANE: Ah, my grandfather says, you should put your hand right over the top of the book … or if you can't do that, pull the other books on the shelf aside so that you can hold the whole cover.

KIERAN: When did you learn all this?

JANE: He watched me pull a heavy book off the shelf when I was small, and it fell on the floor and broke apart.

KIERAN: Oh dear!

JANE: I can still remember it!

KIERAN: You know what I really like?

JANE: What?

KIERAN: The smell of new books.

JANE: Me too.

KIERAN: My parents used to laugh at me when I was a kid because I loved putting books up to my nose. Almost as much as reading them!

JANE: New books aren't cheap, though, are they?

KIERAN: I guess we're lucky we can buy them.

JANE: My grandfather stocks second-hand books as well as new ones and they don't smell quite as good.

KIERAN: I'd love to have a bookshop like your grandfather. What's it like?

JANE: Well, it's quite big – it's got two floors and an attic, and he stocks all kinds of books really.

KIERAN: I guess he treasures things like first editions and other rare books.

JANE: Yeah – you might think he'd keep those in the attic or somewhere.

KIERAN: … so they'd be hidden?

JANE: Yeah. But he likes people to know that he has them. So, he puts them out in the shop but makes sure you need a ladder to get them.

KIERAN: Right. That would prevent any thefts!

JANE: Uhuh.

KIERAN: Does he stock books for children?

JANE: He does. He particularly likes to encourage kids to read; he always says that he used to sit under the stairs as a child with a pile of books and read them all.

KIERAN: Is that where he keeps them, then?

JANE: Not exactly – he's got a dedicated area on the ground floor with cushions so that parents can enter with their toddlers, go there and spend some time reading to them.

KIERAN: Oh cool.

JANE: And then there's a place for pushchairs by the front door. And a café if anyone needs refreshments.

KIERAN: That's good to know.

JANE: As I said, it's a big shop and there's a storage area out the back as well.

KIERAN: Oh, what does he keep there? Books he wants to throw away?

JANE: He hardly ever throws anything away – he just leaves unwanted books by the front door for customers to take.

KIERAN: Well, that's very nice.

JANE: Yeah – and books people or institutions have requested, they all go at the far end.

KIERAN: Oh.

JANE: He thinks it's best to keep these out of the main shopping area as they're boxed and new.

KIERAN: Did you get your coursebooks from him?

JANE: Naturally. He stocks books for a lot of the colleges. He used to keep these books on the first floor, but now there's a new university in my hometown, he's moved them downstairs to attract the students. They're actually part of the coffee shop, on low shelves all around it.

KIERAN: Pretty central then. You'll have to take me there some time!`;

    LISTENING_SCRIPTS['19-4-3'] = `Tree planting now dominates political and popular agendas and is often presented as an easy answer to the climate crisis, as well as a way for business corporations to offset their carbon emissions. But unfortunately, tree planting isn't as straightforward as some people think. When the wrong trees are planted in the wrong place, it can do considerably more damage than good, failing to help either people or the environment.

Reforestation projects are currently being undertaken on a huge scale in many countries and it's crucial that the right trees are selected. A mix of species should always be planted, typical of the local natural forest ecosystem and including rare and endangered species in order to create a rich ecosystem. It's important to avoid non-native species that could become invasive. Invasive species are a significant contributor to the current global biodiversity crisis and are often in competition with native species and may threaten their long-term survival. Restoring biodiversity that will maximise carbon capture is key when reforesting an area, but ideally any reforestation project should have several goals. These could include selecting trees that can contribute to wildlife conservation, improve the availability of food for the local community and maintain the stability of soil systems. Meeting as many of these goals as possible, whilst doing no harm to local communities, native ecosystems and vulnerable species, is the sign of a highly successful tree-planting scheme.

To ensure the survival and resilience of a planted forest, it's vital to use tree seeds with appropriate levels of genetic diversity: the amount of genetic variation found within a species essential for their survival. Using seeds with low genetic diversity generally lowers the resilience of restored forests, which can make them vulnerable to disease and unable to adapt to climate change.

Choosing the right location for reforestation projects is as important as choosing the right trees. Ultimately, the best area for planting trees would be in formerly forested areas that are in poor condition. It's better to avoid non-forested landscapes such as natural grasslands, savannas or wetlands as these ecosystems already contribute greatly to capturing carbon. It would also be advantageous to choose an area where trees could provide other benefits, such as recreational spaces. Reforesting areas which are currently exploited for agriculture should be avoided as this often leads to other areas being deforested.

Large-scale reforestation projects require careful planning. Making the right decisions about where to plant trees depends on having the right information. Having detailed and up-to-date maps identifying high-priority areas for intervention is essential. Drone technology is a useful tool in helping to prioritise and monitor areas of degraded forest for restoration. In Brazil, it's being used to identify and quantify how parts of the Amazon are being devastated by human activities such as rearing cattle and illegal logging. A good example of where the right trees were picked to achieve a restored forest is in Lampang Province in Northern Thailand. A previously forested site which had been degraded through mining was reforested by a cement company together with Chiang Mai University. After spreading 60 cm of topsoil, they planted 14 different native tree species which included several species of fig. Figs are a keystone species because of the critical role they play in maintaining wildlife populations. They are central to tropical reforestation projects as they accelerate the speed of the recovery process by attracting animals and birds which act as natural seed dispersers. This helps to promote diversity through the healthy regrowth of a wide range of plant species. Unlike the majority of fruit trees, figs bear fruit all year round, providing a reliable food source for many species. At this site, for example, after only three rainy seasons, monkeys started visiting to eat the fig fruits, naturally dispersing seeds through defecation.

Reforestation projects should always aim to make sure that local communities are consulted and involved in the decision-making process.

The restoration of mangrove forests in Madagascar is an example of a project which has succeeded in creating real benefits for the community. Destruction of the mangrove forests had a terrible impact on plant and animal life, and also badly affected the fishing industry, which was a major source of employment for local people living in coastal areas. The reforestation project involved hiring local people to plant and care for the new mangrove trees. Millions of mangrove trees have now been planted which has resulted in the return of a healthy aquatic ecosystem. The mangroves also act as a defence against the increased threat of flooding caused by climate change. What's more, the local economy is more stable and thousands more Madagascans are now able to send their children to school.

One other important point to consider …`;
  }

  console.log('[real-19b] 剑19 Test 2/3/4 已覆盖为真实剑桥雅思内容');
})();
