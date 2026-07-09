/**
 * IELTS 官方免费样题（真实题目）
 * 来源：雅思官方（IELTS / British Council / Cambridge）公开发布的 Sample Tasks PDF（ielts.org/cdn/...）
 * 这些题目是雅思官方免费发布、可合法使用的真实样题，逐字取自官方 PDF。
 * 注意：这不是剑桥雅思剑 4–19 全量（后者受版权保护，不可转载）；本文件仅含官方免费样题。
 * 加载顺序：须位于 data.js 之后、app.js 之前。
 *
 * 本文件包含 6 套官方样题（均 officialSample:true，逐字来自官方免费发布材料）：
 *   Test 1  Academic Sample Tasks        —— 听力(Packham) + 学术阅读(rockets/dung beetles) + 学术写作 + 口语
 *   Test 2  General Training Sample A    —— 听力(酒店/社交/Open University) + 培训类阅读 + 培训类写作(信+议论文) + 口语
 *   Test 3  General Training Sample B    —— 听力(艺术中心/选课) + 培训类阅读 + 培训类写作(信+议论文) + 口语
 *   Test 4  官方补充样题·学术写作与口语   —— 学术写作(Task1 图表×2 + Task2 议论文×2) + 口语第二套(来源：British Council / IELTS.org 免费练习)
 *   Test 5  官方补充样题·培训写作与口语   —— 培训类写作(书信 + 议论文) + 口语(来源：British Council / IELTS.org 免费练习)
 *   Test 6  官方补充样题·培训写作 Test 2  —— 培训类写作 Test 2(丢物品信 + 退休年龄议论文) + 口语第二套(来源：British Council 免费练习)
 * 注：Test 4/5/6 的听力/阅读原声与文章见雅思官网，故这几套仅含写作+口语官方样题，不编造缺答案密钥的题目。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;

  // 口语官方样题（全站唯一一套，三套测试共用）
  var SPK = {
    title: '口语 Speaking',
    intro: '雅思官方免费发布的口语样题（真实题目）',
    parts: [
      {
        part: 'Part 1',
        questions: [
          { q: 'What kind of place is it?', a: '' },
          { q: 'What’s the most interesting part of your town/village?', a: '' },
          { q: 'What kind of jobs do the people in your town/village do?', a: '' },
          { q: 'Would you say it’s a good place to live? (Why?)', a: '' },
          { q: 'Tell me about the kind of accommodation you live in?', a: '' },
          { q: 'How long have you lived there?', a: '' },
          { q: 'What do you like about living there?', a: '' },
          { q: 'What sort of accommodation would you most like to live in?', a: '' }
        ]
      },
      {
        part: 'Part 2',
        cueCard:
          'Describe something you own which is very important to you.\n' +
          'You should say:\n' +
          '– where you got it from\n' +
          '– how long you have had it\n' +
          '– what you use it for\n' +
          'You have one minute to think about what you’re going to say. You can make some notes to help you if you wish.',
        questions: [
          { q: 'Is it valuable in terms of money?', a: '' },
          { q: 'Would it be easy to replace?', a: '' }
        ]
      },
      {
        part: 'Part 3',
        questions: [
          { q: 'What kind of things give status to people in your country?', a: '' },
          { q: 'Have things changed since your parents’ time?', a: '' },
          { q: 'Do you think advertising influences what people buy?', a: '' }
        ]
      }
    ]
  };

  // 口语官方样题（第二套，来源：British Council / IELTS.org 免费练习）
  var SPK2 = {
    title: '口语 Speaking',
    intro: '雅思官方免费发布的口语样题（真实题目，来源：British Council / IELTS.org 免费练习）',
    parts: [
      {
        part: 'Part 1',
        questions: [
          { q: 'Are you a student or do you work?', a: '' },
          { q: 'What is your place of work like?', a: '' },
          { q: 'What do you like about your job?', a: '' },
          { q: 'Is there anything you don’t like about your job?', a: '' },
          { q: 'Do you have a lot of free time?', a: '' },
          { q: 'Do you spend your free time outside?', a: '' },
          { q: 'What sort of things do you like doing outside?', a: '' },
          { q: 'Is there a free time activity you would like to try in the future?', a: '' },
          { q: 'Do you like animals?', a: '' },
          { q: 'Do you have any animals in your home as a pet?', a: '' },
          { q: 'Did you have a pet when you were a child?', a: '' },
          { q: 'Would you like to have a pet in the future?', a: '' }
        ]
      },
      {
        part: 'Part 2',
        cueCard:
          'Describe a special event or festival that you liked.\n' +
          'Say:\n' +
          '– what the event was\n' +
          '– where it was\n' +
          '– what happened\n' +
          'and say why you liked it.\n' +
          'You have one minute to think about what you’re going to say. You can make some notes to help you if you wish.',
        questions: [
          { q: 'Did the other people also enjoy this event?', a: '' }
        ]
      },
      {
        part: 'Part 3',
        questions: [
          { q: 'Why do you think celebrations are important in society?', a: '' },
          { q: 'Do you think celebrations are experienced differently by the different generations?', a: '' },
          { q: 'Do you think International events help to promote cooperation and collaboration between countries?', a: '' },
          { q: 'Do you think international sporting events are more popular with the older or younger generation?', a: '' },
          { q: 'Do you think we will see changes in the future to international events? And if so, what sort of changes might we see?', a: '' }
        ]
      }
    ]
  };

  var OFFICIAL_SAMPLE_BOOK = {
    id: 0,
    title: '官方样题',
    fullTitle: 'IELTS 官方免费样题（学术 + 培训类）',
    year: 2024,
    desc: '雅思官方免费发布的真实样题（Listening / Reading / Writing / Speaking，含学术与培训类），逐字取自 ielts.org 官方 Sample Tasks PDF',
    officialSample: true,
    tests: [
      // ===================== Test 1：Academic Sample Tasks =====================
      {
        id: 1,
        title: 'Academic Sample Tasks',
        listening: {
          title: '听力 Listening',
          intro: 'PART 1, Questions 1–10（官方样题，含录音文本；原声请见雅思官网）',
          sections: [
            {
              part: 'Part 1',
              type: 'Form Completion（表格填空）',
              context: 'Packham’s Shipping Agency —— 一位顾客致电货运代理，安排把一个大箱子从英国寄回肯尼亚。',
              audioScript:
                'A: Good morning. Packham’s Shipping Agents. Can I help you?\n' +
                'B: Oh yes, I’m ringing to make enquiries about sending a large box, a container, back home to Kenya from the UK.\n' +
                'A: Yes, of course. Would you like me to try and find some quotations for you?\n' +
                'B: Yes, that’d be great. Thank you.\n' +
                'A: Well first of all, I need a few details from you.\n' +
                'B: Fine.\n' +
                'A: Can I take your name?\n' +
                'B: It’s Jacob Mkere.\n' +
                'A: Can you spell your surname, please?\n' +
                'B: Yes, it’s M-K-E-R-E.\n' +
                'A: Is that ‘M’ for mother?\n' +
                'B: Yes.\n' +
                'A: Thank you, and you say that you will be sending the box to Kenya?\n' +
                'B: That’s right.\n' +
                'A: And where would you like the box picked up from?\n' +
                'B: From college, if possible.\n' +
                'A: Yes, of course. I’ll take down the address now.\n' +
                'B: It’s Westall College.\n' +
                'A: Is that W-E-S-T-A-L-L?\n' +
                'B: Yes, … college.\n' +
                'A: Westall College. And where’s that?\n' +
                'B: It’s Downlands Road, in Bristol.\n' +
                'A: Oh yes, I know it. And the postcode?\n' +
                'B: It’s BS8 9PU.\n' +
                'A: Right … and I need to know the size.\n' +
                'B: Yes, I’ve measured it carefully and it’s 1.5m long …\n' +
                'A: Right.\n' +
                'B: 0.75m wide …\n' +
                'A: OK.\n' +
                'B: And it’s 0.5m high or deep.\n' +
                'A: Great. So I’ll calculate the volume in a moment and get some quotes for that. But first can you tell me, you know, very generally, what will be in the box?\n' +
                'B: Yes there’s mostly clothes.\n' +
                'A: OK. [writing down]\n' +
                'B: And there’s some books.\n' +
                'A: OK. Good. Um … Anything else?\n' +
                'B: Yes, there’s also some toys.\n' +
                'A: OK and what is the total value, do you think, of the contents?\n' +
                'B: Well the main costs are the clothes and the books – they’ll be about £1500 but then the toys are about another two hundred – so I’d put down £1700.',
              questions: [
                { q: 'Name: Jacob ___', a: 'Mkere' },
                { q: 'Address to be collected from: ___ College, Downlands Road', a: 'Westall' },
                { q: 'Postcode', a: 'BS8 9PU' },
                { q: 'Size of container – Width', a: '0.75 m (three-quarters of a metre)' },
                { q: 'Size of container – Height', a: '0.5 m (half a metre)' },
                { q: 'Contents (clothes and ___)', a: 'books' },
                { q: 'Contents (clothes, books and ___)', a: 'toys' },
                { q: 'Total estimated value', a: '£1,700' }
              ]
            },
            {
              part: 'Part 1',
              type: 'Multiple Choice（选择题）',
              context: '同一段货运对话的结尾部分 —— 讨论保险与送达方式。',
              audioScript:
                'A: OK right. Now obviously insurance is an important thing to consider and our companies are able to offer very good rates in a number of different all-inclusive packages.\n' +
                'B: Sorry, could you explain a bit more?\n' +
                'A: Yes, sorry, um. There’s really three rates according to quality of insurance cover – there’s the highest comprehensive cover which is Premium rate, then there’s Standard rate and then there’s Economy rate. That one will only cover the cost of the contents second hand.\n' +
                'B: Oh I’ve been stung before with Economy insurance so I’ll go for the highest.\n' +
                'A: Mh’m and can I just check would you want home delivery or to a local depot or would you want to pick it up at the nearest port?\n' +
                'B: The port’d be fine – I’ve got transport that end.\n' +
                'A: Fine and will you be paying by credit card?\n' +
                'B: Can I pay by cheque?',
              questions: [
                { q: 'Type of insurance chosen', a: 'C (Premium)', options: ['A Economy', 'B Standard', 'C Premium'] },
                { q: 'Customer wants goods delivered to', a: 'A (port)', options: ['A port', 'B home', 'C depot'] }
              ]
            }
          ]
        },
        reading: {
          title: '阅读 Reading',
          intro: '官方样题：Matching Features 与 Table Completion 两篇（学术类）',
          passages: [
            {
              title: 'Matching Features —— The development of rockets',
              type: 'Matching Features',
              context:
                'The invention of rockets is linked inextricably with the invention of ‘black powder’. Most historians of technology credit the Chinese with its discovery. They base their belief on studies of Chinese writings or on the notebooks of early Europeans who settled in or made long visits to China to study its history and civilisation. It is probable that, some time in the tenth century, black powder was first compounded from its basic ingredients of saltpetre, charcoal and sulphur. But this does not mean that it was immediately used to propel rockets. By the thirteenth century, powder-propelled fire arrows had become rather common.\n' +
                'The Chinese relied on this type of technological development to produce incendiary projectiles of many sorts, explosive grenades and possibly cannons to repel their enemies. One such weapon was the ‘basket of fire’. The 0.7 metre-long arrows, each with a long tube of gunpowder attached near the point of each arrow, could be fired from a long, octagonal-shaped basket at the same time and had a range of 400 paces.\n' +
                'It was not until the eighteenth century that Europe became seriously interested in the possibilities of using the rocket itself as a weapon of war. Prior to this, rockets were used only in pyrotechnic displays. The incentive for the more aggressive use of rockets came not from within the European continent but from far-away India, whose leaders had built up a corps of rocketeers and used rockets successfully against the British in the late eighteenth century.\n' +
                'The Indian rockets used against the British were described by a British Captain serving in India as ‘an iron envelope about 200 millimetres long and 40 millimetres in diameter with sharp points at the top and a 3m-long bamboo guiding stick’. In the early nineteenth century the British began to experiment with incendiary barrage rockets. The British rocket differed from the Indian version in that it was completely encased in a stout, iron cylinder.\n' +
                'The Americans developed a rocket, complete with its own launcher, to use against the Mexicans in the mid-nineteenth century. A long cylindrical tube was propped up by two sticks and fastened to the top of the launcher, thereby allowing the rockets to be inserted and lit from the other end.',
              questions: [
                { q: 'black powder', a: 'A (the Chinese)', options: ['A the Chinese', 'B the Indians', 'C the British', 'D the Arabs', 'E the Americans'] },
                { q: 'rocket-propelled arrows for fighting', a: 'A (the Chinese)', options: ['A the Chinese', 'B the Indians', 'C the British', 'D the Arabs', 'E the Americans'] },
                { q: 'rockets as war weapons', a: 'B (the Indians)', options: ['A the Chinese', 'B the Indians', 'C the British', 'D the Arabs', 'E the Americans'] },
                { q: 'the rocket launcher', a: 'E (the Americans)', options: ['A the Chinese', 'B the Indians', 'C the British', 'D the Arabs', 'E the Americans'] }
              ]
            },
            {
              title: 'Table Completion —— Dung beetles in Australia',
              type: 'Table Completion',
              difficulty: 'Moderate',
              summary: '关于在澳洲引入粪甲虫的学术节选（Table Completion 题型）',
              text:
                'Introducing dung beetles into a pasture is a simple process: approximately 1,500 beetles are released, a handful at a time, into fresh cow pats in the cow pasture. The beetles immediately disappear beneath the pats digging and tunnelling and, if they successfully adapt to their new environment, soon become a permanent, self-sustaining part of the local ecology.\n' +
                'Dung beetles work from the inside of the pat so they are sheltered from predators such as birds and foxes. Most species burrow into the soil and bury dung in tunnels directly underneath the pats. Some large species originating from France excavate tunnels to a depth of approximately 30 cm below the dung pat. These beetles make sausage-shaped brood chambers along the tunnels. The shallowest tunnels belong to a much smaller Spanish species that buries dung in chambers that hang like fruit from the branches of a pear tree. South African beetles dig narrow tunnels of approximately 20 cm below the surface of the pat.\n' +
                'For maximum dung burial in spring, summer and autumn, farmers require a variety of species with overlapping periods of activity. In the cooler environments of the state of Victoria, the large French species (2.5 cms long) is matched with smaller (half this size), temperate-climate Spanish species. The former are slow to recover from the winter cold and produce only one or two generations of offspring from late spring until autumn. The latter, which multiply rapidly in early spring, produce two to five generations annually.\n' +
                'The South African ball-rolling species, being a sub-tropical beetle, prefers the climate of northern and coastal New South Wales where it commonly works with the South African tunneling species.',
              questions: [
                { q: 'Spanish species – Preferred climate', a: 'temperate' },
                { q: 'Spanish species – Start of active period', a: 'early spring' },
                { q: 'Spanish species – generations per year', a: 'two to five' },
                { q: 'South African ball roller – Preferred climate', a: 'sub-tropical' },
                { q: 'South African ball roller – Complementary species', a: 'South African tunneling' }
              ]
            }
          ]
        },
        writing: {
          title: '写作 Writing',
          intro: '雅思官方免费发布的写作样题（真实题目）。Task 1 配图请参见雅思官方样题 PDF。',
          tasks: [
            {
              task: 'Task 1',
              type: '小作文（图表 / 流程 / 地图）',
              prompt: 'The chart below shows the number of men and women in further education in Britain in three periods and whether they were studying full-time or part-time. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'
            },
            {
              task: 'Task 1',
              type: '小作文（图表 / 流程 / 地图）',
              prompt: 'The graph below shows radio and television audiences throughout the day in 1992. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'
            },
            {
              task: 'Task 1',
              type: '小作文（图表 / 流程 / 地图）',
              prompt: 'The diagram below shows the process by which bricks are manufactured for the building industry. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'
            },
            {
              task: 'Task 2',
              type: '大作文（议论文）',
              prompt: 'Children who are brought up in families that do not have large amounts of money are better prepared to deal with the problems of adult life than children brought up by wealthy parents. To what extent do you agree or disagree with this opinion? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.'
            },
            {
              task: 'Task 2',
              type: '大作文（议论文）',
              prompt: 'International tourism has brought enormous benefit to many places. At the same time, there is concern about its impact on local inhabitants and the environment. Do the disadvantages of international tourism outweigh the advantages? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.'
            }
          ]
        },
        speaking: SPK
      },

      // ===================== Test 2：General Training Sample A =====================
      {
        id: 2,
        title: 'General Training Sample A',
        listening: {
          title: '听力 Listening',
          intro: '官方样题：Matching / Short-answer / Sentence Completion（含录音文本；原声请见雅思官网）',
          sections: [
            {
              part: 'Part 1',
              type: 'Matching（信息匹配）',
              context: '一位男士在旅游信息中心向工作人员咨询五家酒店（The Bridge Hotel / Carlton House / The Imperial / The Majestic / The Royal Oak）。',
              audioScript:
                'Official Can I help you?\n' +
                'Man Yes, I was wanting somewhere to stay for a few days - a four- or five-star hotel. Can you tell me something about the possibilities?\n' +
                'Official OK, right, well there are five hotels that might interest you. Were you wanting a city centre location, or would you be interested in something a bit further out?\n' +
                'Man Well, I do have a car so I could go for either.\n' +
                'Official Well, there are two central hotels in the range you’re looking for – there’s Carlton House and The Imperial, they’re both near the main square, but if you’ve got your own transport you might be interested in the Royal Oak – that’s out in the country, about ten kilometres away, very peaceful. Then there’s the Bridge hotel and the Majestic – they’re both in town but not in the centre, they’re out on the airport road.\n' +
                'Man Mmm that might be a bit far out actually. OK, now the other two you mentioned, in the city centre. Can you tell me a bit about them?\n' +
                'Official Well, they’re both excellent hotels. If you want something with a bit of character, Carlton House is quite unusual – it’s a very old building that was originally a large private house. It was bought by the Vannis chain and they completely refurbished it – they took their first guests just a few months ago but it’s already got an excellent reputation. That’s a five-star hotel. Or there’s the Imperial, which is a much more modern building. That also has its own gym and it also has internet connection and meetings rooms – it’s used for conferences and corporate events as well as private guests. That’s five-star as well.\n' +
                'Man Does it have a swimming pool as well as a gym?\n' +
                'Official No – the Royal Oak has an outdoor pool, which is lovely in the summer, but the only hotel with an indoor pool is the Bridge Hotel. It doesn’t have a gym though. The Majestic is planning to build a swimming pool and a fitness centre, but it’s not finished yet.\n' +
                'Man I see. Well, I think I’ll probably go for one of the city centre hotels.',
              questions: [
                { q: 'Which hotel is in a rural area?', a: 'E (The Royal Oak)', options: ['A The Bridge Hotel', 'B Carlton House', 'C The Imperial', 'D The Majestic', 'E The Royal Oak'] },
                { q: 'Which hotel only opened recently?', a: 'B (Carlton House)', options: ['A The Bridge Hotel', 'B Carlton House', 'C The Imperial', 'D The Majestic', 'E The Royal Oak'] },
                { q: 'Which hotel offers facilities for business functions?', a: 'C (The Imperial)', options: ['A The Bridge Hotel', 'B Carlton House', 'C The Imperial', 'D The Majestic', 'E The Royal Oak'] },
                { q: 'Which hotel has an indoor swimming pool?', a: 'A (The Bridge Hotel)', options: ['A The Bridge Hotel', 'B Carlton House', 'C The Imperial', 'D The Majestic', 'E The Royal Oak'] }
              ]
            },
            {
              part: 'Part 2',
              type: 'Short-answer Questions（简答题）',
              context: 'John Parker 在英国文化协会向即将赴英的人士介绍如何在当地建立社交联系。',
              audioScript:
                'Good evening, and welcome to the British Council. My name is John Parker and I’ve been asked to talk to you briefly about certain aspects of life in the UK before you actually go there. So I’m going to talk first about the best ways of making social contacts there. Now you might be wondering why it should be necessary. After all, we meet people all the time. But when you’re living in a foreign country it can be more difficult, not just because of the language, but because customs may be different.\n' +
                'If you’re going to work in the UK you will probably be living in private accommodation, so it won’t be quite so easy to meet people. But there are still things that you can do to help yourself. First of all, you can get involved in activities in your local community, join a group of some kind. For example, you’ll probably find that there are theatre groups who might be looking for actors, set designers and so on, or if you play an instrument you could join music groups in your area. Or if you like the idea of finding out about local history there’ll be a group for that too. These are just examples. And the best places to get information about things like this are either the town hall or the public library. Libraries in the UK perform quite a broad range of functions nowadays – they’re not just confined to lending books, although that’s their main role of course.',
              questions: [
                { q: 'One factor that can make social contact difficult in a foreign country', a: 'language' },
                { q: 'The other factor that can make social contact difficult', a: 'customs' },
                { q: 'A type of community group the speaker mentions (besides theatre)', a: 'music groups' },
                { q: 'Another type of community group the speaker mentions', a: 'local history groups' },
                { q: 'One place to find information about community activities', a: 'public library' },
                { q: 'Another place to find information about community activities', a: 'town hall' }
              ]
            },
            {
              part: 'Part 3',
              type: 'Sentence Completion（句子填空）',
              context: 'Rachel 与 Paul 讨论通过 Open University 远程学习的体会。',
              audioScript:
                'Paul The other thing I wanted to ask you was, did you find it hard, studying with the Open University?\n' +
                'Rachel You mean, because you’re studying on your own, most of the time?\n' +
                'Paul Mm.\n' +
                'Rachel Well it took me a while to get used to it. I found I needed to maintain a high level of motivation, because it’s so different from school. There’s no-one saying, ‘Why haven’t you written your assignment yet?’ and that sort of thing.\n' +
                'Paul Oh dear.\n' +
                'Rachel You’ll learn it, Paul. Another thing was that I got very good at time-management because I had to fit time for studying round a full-time job.\n' +
                'Paul Well I’m hoping to change to working part-time, so that’ll help.\n' +
                'Rachel What makes it easier is that the degree is made up of modules, so you can take time off between them if you need to. It isn’t like a traditional three-or four-year course, where you’ve got to do the whole thing of it in one go.\n' +
                'Paul That’s good, because I’d like to spend six months travelling next year.\n' +
                'Rachel Huh, it’s all right for some. Then even though you’re mostly studying at home, remember you’ve got tutors to help you, and from time to time there are summer schools. They usually last a week. They’re great, because you meet all the other people struggling with the same things as you. I’ve made some really good friends that way.',
              questions: [
                { q: 'Studying with the Open University demanded a great deal of ___', a: 'motivation' },
                { q: 'Studying and working at the same time improved Rachel’s ___ skills', a: 'time-management' },
                { q: 'It was helpful that the course was structured in ___', a: 'modules' },
                { q: 'She enjoyed meeting other students at ___', a: 'summer school(s)' }
              ]
            }
          ]
        },
        reading: {
          title: '阅读 Reading（培训类 General Training）',
          intro: '官方培训类阅读样题：True/False/Not Given、Matching Headings、Short-answer',
          passages: [
            {
              title: 'London to Brighton Bike Ride',
              type: 'Identifying Information (True / False / Not Given)',
              text:
                'The start\n' +
                'The bike ride starts at Clapham Common tube station.\n' +
                '• Your Start Time is indicated by the colour of your body number in this pack. It is also printed on the address label of the envelope. Please arrive no earlier than 30 minutes before that time.\n' +
                '• We allocate an equal number of cyclists for each Start Time to ensure a steady flow. Please keep to the time you’ve been given so we can keep to our schedule and avoid delaying other riders and prevent ‘bunching’ further down the route.\n' +
                '• An Information Point, toilets and refreshment stands will be open from very early in the day.\n' +
                'Ride carefully\n' +
                'We put together as many facilities as possible to help ensure you have a trouble-free day. But we also rely on you to ride safely and with due consideration for other cyclists and road users. Although many roads are closed to oncoming traffic, this is not always the case and you should be aware of the possibility that there could be vehicles coming in the opposite direction. Please do not attempt reckless overtaking whilst riding – remember it is NOT a race.\n' +
                'Follow all instructions\n' +
                'Every effort is made to ensure that the route is well signed and marshalled. Please obey all directions from police and marshals on the route. If you hear a motorcycle marshal blow his/her whistle three times, move left.\n' +
                'Wear a helmet\n' +
                'Every year we are delighted to see more riders wearing protective helmets, but we would like to see every cyclist on the ride wearing one. More than half of reported injuries in cycling accidents are to the head, and a helmet gives the best protection when the head hits the ground.\n' +
                'Attracting assistance\n' +
                'If you have an accident, ask a marshal for help; they are in contact with the support/emergency services. To call for help from our motorcycle marshals, give a ‘thumbs down’ signal. The marshal will do all he/she can to help, providing he/she is not already going to a more serious accident. If a motorcycle marshal slows down to help you, but you have just stopped for a rest and don’t need help, please give a ‘thumbs up’ signal and he/she will carry on. Remember – thumbs down means ‘I need help’.\n' +
                'In case of breakdown\n' +
                'Refer to your route map and make your way to a Mechanics Point. Mechanical assistance is free when you show your Rider Identity Card; you just pay for the parts.\n' +
                'Refreshment stops\n' +
                'Look out for these along the route. Most are organised by voluntary clubs and their prices give you real value for money. They are also raising money for their local communities and the British Heart Foundation, so please give them your support.\n' +
                'Rain or shine – be prepared\n' +
                'In the event of very bad weather, watch out for signs to wet weather stations en route. Good waterproofs, like a cycle cape, are essential. Our first aid staff can only supply bin liners and by the time you get one you may be very wet. However, the English summer is unpredictable – it may also be hot, so don’t forget the sun protection cream as well!\n' +
                'If you have to drop out\n' +
                'We will try to pick up your bike for you on the day. Call Bike Events (01225 310859) no more than two weeks after the ride to arrange collection. Sorry, we cannot guarantee this service nor can we accept liability for any loss or damage to your bike. Bike Events will hold your bike for three months, after which it may be disposed of. You will be charged for all costs incurred in returning your cycle.',
              questions: [
                { q: 'You should not arrive more than half an hour before your allocated starting time.', a: 'TRUE', options: ['TRUE', 'FALSE', 'NOT GIVEN'] },
                { q: 'Your Rider Identity Card will be sent to you before the event.', a: 'NOT GIVEN', options: ['TRUE', 'FALSE', 'NOT GIVEN'] },
                { q: 'Some roads may have normal traffic flow on them.', a: 'TRUE', options: ['TRUE', 'FALSE', 'NOT GIVEN'] },
                { q: 'Helmets are compulsory for all participants.', a: 'FALSE', options: ['TRUE', 'FALSE', 'NOT GIVEN'] },
                { q: 'Refreshments are free to all participants during the ride.', a: 'FALSE', options: ['TRUE', 'FALSE', 'NOT GIVEN'] },
                { q: 'If you need a rest you must get off the road.', a: 'NOT GIVEN', options: ['TRUE', 'FALSE', 'NOT GIVEN'] },
                { q: 'First aid staff can provide cycle capes.', a: 'FALSE', options: ['TRUE', 'FALSE', 'NOT GIVEN'] },
                { q: 'Bike Events will charge you for the return of your bike.', a: 'TRUE', options: ['TRUE', 'FALSE', 'NOT GIVEN'] }
              ]
            },
            {
              title: 'Robots at Work',
              type: 'Matching Headings',
              text:
                'A The newspaper production process has come a long way from the old days when the paper was written, edited, typeset and ultimately printed in one building with the journalists working on the upper floors and the printing presses going on the ground floor. These days the editor, subeditors and journalists who put the paper together are likely to find themselves in a totally different building or maybe even in a different city. This is the situation which now prevails in Sydney. The daily paper is compiled at the editorial headquarters, known as the prepress centre, in the heart of the city, but printed far away in the suburbs at the printing centre. Here human beings are in the minority as much of the work is done by automated machines controlled by computers.\n' +
                'B Once the finished newspaper has been created for the next morning’s edition, all the pages are transmitted electronically from the prepress centre to the printing centre. The system of transmission is an update on the sophisticated page facsimile system already in use on many other newspapers. An imagesetter at the printing centre delivers the pages as film. Each page takes less than a minute to produce, although for colour pages four versions, once each for black, cyan, magenta and yellow are sent. The pages are then processed into photographic negatives and the film is used to produce aluminum printing plates ready for the presses.\n' +
                'C The LGVs move at walking speed. Should anyone step in front of one or get too close, sensors stop the vehicle until the path is clear. The company has chosen a laser guide function system for the vehicles because, as the project development manager says “The beauty of it is that if you want to change the routes, you can work out a new route on your computer and lay it down for them to follow”. When an LGV’s batteries run low, it will take itself off line and go to the nearest battery maintenance point for replacement batteries. And all this is achieved with absolute minimum human input and a much reduced risk of injury to people working in the printing centres.\n' +
                'D The robots’ principal job, however, is to shift the newsprint (the printing paper) that arrives at the plant in huge reels and emerges at the other end some time later as newspapers. Once the size of the paper reels has been determined at head office, the information is punched into the computer and the LGVs are programmed to go about their work. The LGVs collect the appropriate size paper reels and take them where they have to go.\n' +
                'E A procession of automated vehicles is busy at the new printing centre where the Sydney Morning Herald is printed each day. With lights flashing and warning horns honking, the robots (to give them their correct name, the LGVs or laser guided vehicles) look for all the world like enthusiastic machines from a science fiction movie, as they follow their own random paths around the plant busily getting on with their jobs. Automation of this kind is now standard in all modern newspaper plants. The robots can detect unauthorised personnel and alert security staff immediately if they find an “intruder”; not surprisingly, tall tales are already being told about the machines starting to take on personalities of their own.\n' +
                'F Then one of the four paster robots moves in. Specifically designed for the job, it trims the paper neatly and prepares the reel for the press. If required the reel can be loaded directly onto the press; if not needed immediately, an LGV takes it to the storage area. When the press computer calls for a reel, an LGV takes it to the reel loading area of the presses. It lifts the reel into the loading position and places it in the correct spot with complete accuracy. As each reel is used up, the press drops the heavy cardboard core into a waste bin. When the bin is full, another LGV collects it and deposits the cores into a shredder for recycling.\n' +
                'G The question newspaper workers must now ask, however is, “how long will it be before the robots are writing the newspapers as well as running the printing centre, churning out the latest edition every morning?”',
              questions: [
                { q: 'Paragraph A', a: 'v (Split location for newspaper production)', options: ['i Robots working together', 'ii Preparing LGVs for takeover', 'iii Looking ahead', 'iv The LGVs’ main functions', 'v Split location for newspaper production', 'vi Newspapers superseded by technology', 'vii Getting the newspaper to the printing centre', 'viii Controlling the robots', 'ix Beware of robots!'] },
                { q: 'Paragraph B', a: 'vii (Getting the newspaper to the printing centre)', options: ['i Robots working together', 'ii Preparing LGVs for takeover', 'iii Looking ahead', 'iv The LGVs’ main functions', 'v Split location for newspaper production', 'vi Newspapers superseded by technology', 'vii Getting the newspaper to the printing centre', 'viii Controlling the robots', 'ix Beware of robots!'] },
                { q: 'Paragraph D', a: 'iv (The LGVs’ main functions)', options: ['i Robots working together', 'ii Preparing LGVs for takeover', 'iii Looking ahead', 'iv The LGVs’ main functions', 'v Split location for newspaper production', 'vi Newspapers superseded by technology', 'vii Getting the newspaper to the printing centre', 'viii Controlling the robots', 'ix Beware of robots!'] },
                { q: 'Paragraph E', a: 'i (Robots working together)', options: ['i Robots working together', 'ii Preparing LGVs for takeover', 'iii Looking ahead', 'iv The LGVs’ main functions', 'v Split location for newspaper production', 'vi Newspapers superseded by technology', 'vii Getting the newspaper to the printing centre', 'viii Controlling the robots', 'ix Beware of robots!'] },
                { q: 'Paragraph F', a: 'viii (Controlling the robots)', options: ['i Robots working together', 'ii Preparing LGVs for takeover', 'iii Looking ahead', 'iv The LGVs’ main functions', 'v Split location for newspaper production', 'vi Newspapers superseded by technology', 'vii Getting the newspaper to the printing centre', 'viii Controlling the robots', 'ix Beware of robots!'] },
                { q: 'Paragraph G', a: 'iii (Looking ahead)', options: ['i Robots working together', 'ii Preparing LGVs for takeover', 'iii Looking ahead', 'iv The LGVs’ main functions', 'v Split location for newspaper production', 'vi Newspapers superseded by technology', 'vii Getting the newspaper to the printing centre', 'viii Controlling the robots', 'ix Beware of robots!'] }
              ]
            },
            {
              title: 'Product Return Notice — Fancy Foods',
              type: 'Short-answer Questions',
              text:
                'IMPORTANT NOTICE: PRODUCT RETURN\n' +
                'Fancy Foods wishes to inform the public that pieces of metal have been found in some jars of Fancy Foods Chicken Curry (Spicy). The batches of the jars involved have numbers from J6617 to J6624. The batch number is printed on the bottom of each jar.\n' +
                'If you have any jars with these batch numbers, please return them (preferably unopened) to the supermarket where you purchased them. You can also return them to the factory (Fancy Foods Retailers, Blacktown). Fancy Foods will pay $10 for each jar returned unopened and $5 for each jar already opened.\n' +
                'No payment will be made for empty jars, which do not need to be returned. However, the Retailing Manager will be interested to hear from people who have consumed chicken curry from any of the above batch numbers. In particular, it will be helpful if they can give information about the place of purchase of the product.\n' +
                'Jars of Fancy Foods Chicken Curry (Coconut) and Fancy Foods Chicken Curry (Mango) have not been affected and do not need to be returned.\n' +
                'REWARD\n' +
                'Fancy Foods will pay a reward of $10,000 to $50,000 for information which leads to the conviction of any person found guilty of placing metal pieces in its products. If you have such information, please contact the Customer Relations Manager, Fancy Foods Retailers, Blacktown.',
              questions: [
                { q: 'What has been found in some Fancy Foods products?', a: 'pieces of metal' },
                { q: 'Where can you find the batch number on the jars?', a: '(on) the bottom' },
                { q: 'How much will you receive for an opened jar of contaminated Chicken Curry?', a: '$5' },
                { q: 'If you have eaten Chicken Curry from a jar with one of the batch numbers listed, whom should you contact?', a: '(the) Retailing Manager' },
                { q: 'What is the maximum reward Fancy Foods is offering for information about who contaminated their product?', a: '$50,000' }
              ]
            }
          ]
        },
        writing: {
          title: '写作 Writing（培训类 General Training）',
          intro: '官方培训类写作样题：Task 1 书信 + Task 2 议论文',
          tasks: [
            {
              task: 'Task 1',
              type: '小作文（书信）',
              prompt: 'You live in a room in college which you share with another student. However, there are many problems with this arrangement and you find it very difficult to work. Write a letter to the accommodation officer at the college. In the letter: describe the situation; explain your problems and why it is difficult to work; say what kind of accommodation you would prefer. Write at least 150 words. You do NOT need to write any addresses. Begin your letter as follows: Dear Sir or Madam,'
            },
            {
              task: 'Task 2',
              type: '大作文（议论文）',
              prompt: 'In Britain, when someone gets old they often go to live in a home with other old people where there are nurses to look after them. Sometimes the government has to pay for this care. Who do you think should pay for this care, the government or the family? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.'
            }
          ]
        },
        speaking: SPK
      },

      // ===================== Test 3：General Training Sample B =====================
      {
        id: 3,
        title: 'General Training Sample B',
        listening: {
          title: '听力 Listening',
          intro: '官方样题：Note Completion / Matching（含录音文本；原声请见雅思官网）',
          sections: [
            {
              part: 'Part 2',
              type: 'Note Completion（笔记填空）',
              context: 'Dave Green 在电台节目“Focus on the Arts”中介绍 The National Arts Centre。',
              audioScript:
                'Hello, and welcome to “Focus on the Arts”. I’m your host - Dave Green - and this is your very own local radio programme. Every Friday evening we put the spotlight on different arts and culture facilities, and look at the shows and events that are on offer in the coming week.\n' +
                'And today the focus is on The National Arts Centre. Now, if you don’t already know it yourself, I’m sure you’ve all heard of it. It’s famous throughout the world as one of the major venues for classical music.\n' +
                'But did you know that it’s actually much more than just a place to hear concerts? The Centre itself is a huge complex that caters for a great range of arts. Under a single roof it houses concert rooms, theatres, cinemas, art galleries and a wonderful public library, as well as service facilities including 3 restaurants and a book shop. So, at any one time, the choice of entertainment there is simply enormous.\n' +
                'So, how did they manage to build such a big arts complex right in the heart of the city? Well, the area was completely destroyed by bombs during the war in 1940. So, the opportunity was taken to create a cultural centre that would be, what they called: ‘the City’s gift to the Nation’. Of course, it took a while for such a big project to get started, but it was planned in the 60s, built in the 70s and eventually opened to the public in 1983. Ever since then it has proved to be a great success. It’s not privately owned, like many arts centres, but is still in public hands: - it’s run by the City Council.\n' +
                'Both our National Symphony Orchestra and National Theatre Company were involved in the planning of the project, and they are now based there - giving regular performances every week - and as the Centre is open 363 days of the year, there are plenty of performances to choose from.\n' +
                'So, to give you some idea of what’s on, and to help you choose from the many possibilities, we’ve made a selection of the star attractions.\n' +
                'If you’re interested in classical music, then we recommend you go along to the National on either Monday or Tuesday evening at 7.30 for a spectacular production of ‘The Magic Flute’ - probably the most popular of all Mozart’s operas. It’s in the Garden Hall and tickets start at only £8.00, but you’ll have to be early if you want to get them that cheap! And remember, it’s only on for those two evenings.\n' +
                'For those more interested in the cinema, you might like to see the new Canadian film which is showing on Wednesday evening at 8pm in Cinema 2. And that’s called ‘Three Lives.’ It’s had fantastic reviews and tickets cost just £4.50, which is a reduction on the usual price of £5.50. So it’s really good value, especially for such a great movie.\n' +
                'But you can see the centre’s main attraction at the weekend, because on Saturday and Sunday, 11am to 10pm, they’re showing a wonderful new exhibition that hasn’t been seen anywhere else in Europe yet. It’s a collection of Chinese Art called ‘Faces of China’ - that’s in Gallery 1 - and it has some really fascinating paintings and sculptures by leading artists from all over China - and the good news is that it’s completely free, so don’t miss it!',
              questions: [
                { q: 'The National Arts Centre is well known for', a: 'classical music (concerts)' },
                { q: 'The complex also includes a', a: '(a) bookshop' },
                { q: 'In the 1960s the Centre was', a: 'planned' },
                { q: 'It opened to the public in', a: '1983' },
                { q: 'It is managed by', a: '(the) City Council' },
                { q: 'It is open', a: '363 days per year' },
                { q: '‘The Magic Flute’ is in', a: '(the) Garden Hall' },
                { q: 'The Canadian film is called', a: 'Three Lives' },
                { q: 'Tickets for the Canadian film cost', a: '£4.50' },
                { q: 'The weekend exhibition is called', a: 'Faces of China' }
              ]
            },
            {
              part: 'Part 3',
              type: 'Matching（信息匹配）',
              context: '传播学学生 Jack 与导师 Dr Ray 讨论下学期的选修课（Media Studies / Women and Power / Culture and Society / Identity and Popular Culture / Introduction to Cultural Theory）。',
              audioScript:
                'Dr Ray Come in. Oh hello Jack. Have a seat. Right ... you said you wanted to see me to talk about your options next semester?\n' +
                'Jack That’s right. We have to decide by the end of next week. Really, I’d like to do all five options but we have to choose two, don’t we.\n' +
                'Dr Ray Yes, but the choice depends on your major to some extent. You’re majoring in Communication Studies, aren’t you?\n' +
                'Jack That’s right.\n' +
                'Dr Ray So for example the Media Studies Option will cover quite a lot of the same area you did in the core module on mass communications this semester - the development of the media through the last two centuries, in relation to political and social issues.\n' +
                'Jack Mmm. Well that was interesting, but I’ve decided I’d rather do something completely new. There’s a Women’s Studies option, isn’t there?\n' +
                'Dr Ray Yes, ‘Women and Power’ – again it has a historical focus, it aims to contextualise women’s studies by looking at the legal and social situation in the nineteenth and early twentieth centuries …\n' +
                'Jack So it would be useful if I intended to specialise in women’s studies ... but I’m not sure I do actually.\n' +
                'Dr Ray Well, it might still be useful to give you an idea of the issues involved. It’s taught by Dr Steed.\n' +
                'Jack Oh, really? I’ll sign up for that, then. What about the option on Culture and Society?\n' +
                'Dr Ray That addresses the historical debate on the place of culture since the Industrial Revolution in Britain.\n' +
                'Jack So a historical focus again ...\n' +
                'Dr Ray Do I get the message you’re not so keen on history?\n' +
                'Jack Well, it’s just we seem to have done quite a lot this semester … anyway I’ll think about that one.\n' +
                'Dr Ray If you’re interested in a course focusing on current issues there’s the option on Identity and Popular Culture – that approaches the subject through things like contemporary film, adverts, soap operas and so on.\n' +
                'Jack Oh? That sounds interesting. Can you tell me who runs it?\n' +
                'Dr Ray Well, it’s normally Dr Stevens but he’s on sabbatical next semester, so I’m not sure who’ll be running it. It should be decided by next week though.\n' +
                'Jack Right, well I might wait until then to decide ... And the last option is Introduction to Cultural Theory, isn’t it. I’m quite interested in that too – I was talking to one of the second year students, and she said it was really useful, it made a lot of things fall into place.\n' +
                'Dr Ray Yes, but in fact in your major, you’ll have covered a lot of that already in Communications 102, so that might be less useful than some of the others.\n' +
                'Jack Oh, I’ll forget about that one, then.',
              questions: [
                { q: 'Media Studies', a: 'C (won’t do it)', options: ['A He’ll definitely do it', 'B He may or may not do it', 'C He won’t do it'] },
                { q: 'Women and Power', a: 'A (will definitely do it)', options: ['A He’ll definitely do it', 'B He may or may not do it', 'C He won’t do it'] },
                { q: 'Culture and Society', a: 'B (may or may not do it)', options: ['A He’ll definitely do it', 'B He may or may not do it', 'C He won’t do it'] },
                { q: 'Identity and Popular Culture', a: 'B (may or may not do it)', options: ['A He’ll definitely do it', 'B He may or may not do it', 'C He won’t do it'] },
                { q: 'Introduction to Cultural Theory', a: 'C (won’t do it)', options: ['A He’ll definitely do it', 'B He may or may not do it', 'C He won’t do it'] }
              ]
            }
          ]
        },
        reading: {
          title: '阅读 Reading（培训类 General Training）',
          intro: '官方培训类阅读样题：Matching Features、Note Completion、True/False/Not Given',
          passages: [
            {
              title: 'The History of Cinema',
              type: 'Matching Features',
              text:
                'Although French, German, American and British pioneers have all been credited with the invention of cinema, the British and the Germans played a relatively small role in its worldwide exploitation. It was above all the French, followed closely by the Americans, who were the most passionate exporters of the new invention, helping to start cinema in China, Japan, Latin America and Russia. In terms of artistic development it was again the French and the Americans who took the lead, though in the years before the First World War, Italy, Denmark and Russia also played a part.\n' +
                'In the end it was the United States that was to become, and remain, the largest single market for films. By protecting their own market and pursuing a vigorous export policy, the Americans achieved a dominant position on the world market by the start of the First World War. The centre of filmmaking had moved westwards, to Hollywood, and it was films from these new Hollywood studios that flooded onto the world’s film markets in the years after the First World War, and have done so ever since. Faced with total Hollywood domination, few film industries proved competitive. The Italian industry, which had pioneered the feature film with spectacular films like “Quo Vadis?” (1913) and “Cabiria” (1914), almost collapsed. In Scandinavia, the Swedish cinema had a brief period of glory, notably with powerful epic films and comedies. Even the French cinema found itself in a difficult position. In Europe, only Germany proved industrially capable, while in the new Soviet Union and in Japan, the development of the cinema took place in conditions of commercial isolation.\n' +
                'Hollywood took the lead artistically as well as industrially. Hollywood films appealed because they had better constructed narratives, their special effects were more impressive, and the star system added a new dimension to screen acting. If Hollywood did not have enough of its own resources, it had a great deal of money to buy up artists and technical innovations from Europe to ensure its continued dominance over present or future competition.\n' +
                'From early cinema, it was only American slapstick comedy that successfully developed in both short and feature format. However, during this ‘Silent Film’ era, animation, comedy, serials and dramatic features continued to thrive, along with factual films or documentaries, which acquired an increasing distinctiveness as the period progressed. It was also at this time that the avant-garde film first achieved commercial success, this time thanks almost exclusively to the French and the occasional German film.\n' +
                'Of the countries which developed and maintained distinctive national cinemas in the silent period, the most important were France, Germany and the Soviet Union. Of these, the French displayed the most continuity, in spite of the war and post-war economic uncertainties. The German cinema, relatively insignificant in the pre-war years, exploded on to the world scene after 1919. Yet even they were both overshadowed by the Soviets after the 1917 Revolution. They turned their back on the past, leaving the style of the pre-war Russian cinema to the émigrés who fled westwards to escape the Revolution.\n' +
                'The other countries whose cinemas changed dramatically are: Britain, which had an interesting but undistinguished history in the silent period; Italy, which had a brief moment of international fame just before the war; the Scandinavian countries, particularly Denmark, which played a role in the development of silent cinema quite out of proportion to their small population; and Japan, where a cinema developed based primarily on traditional theatrical and, to a lesser extent, other art forms and only gradually adapted to western influence.',
              questions: [
                { q: 'It helped other countries develop their own film industry.', a: 'A (France)', options: ['A France', 'B Germany', 'C USA', 'D Denmark', 'E Sweden', 'F Japan', 'G Russia', 'H Italy', 'I Britain', 'J China'] },
                { q: 'It was the biggest producer of films.', a: 'C (USA)', options: ['A France', 'B Germany', 'C USA', 'D Denmark', 'E Sweden', 'F Japan', 'G Russia', 'H Italy', 'I Britain', 'J China'] },
                { q: 'It was first to develop the ‘feature’ film.', a: 'H (Italy)', options: ['A France', 'B Germany', 'C USA', 'D Denmark', 'E Sweden', 'F Japan', 'G Russia', 'H Italy', 'I Britain', 'J China'] },
                { q: 'It was responsible for creating stars.', a: 'C (USA)', options: ['A France', 'B Germany', 'C USA', 'D Denmark', 'E Sweden', 'F Japan', 'G Russia', 'H Italy', 'I Britain', 'J China'] },
                { q: 'It made the most money from ‘avant-garde’ films.', a: 'A (France)', options: ['A France', 'B Germany', 'C USA', 'D Denmark', 'E Sweden', 'F Japan', 'G Russia', 'H Italy', 'I Britain', 'J China'] },
                { q: 'It made movies based more on its own culture than outside influences.', a: 'F (Japan)', options: ['A France', 'B Germany', 'C USA', 'D Denmark', 'E Sweden', 'F Japan', 'G Russia', 'H Italy', 'I Britain', 'J China'] },
                { q: 'It had a great influence on silent movies, despite its size.', a: 'D (Denmark)', options: ['A France', 'B Germany', 'C USA', 'D Denmark', 'E Sweden', 'F Japan', 'G Russia', 'H Italy', 'I Britain', 'J China'] }
              ]
            },
            {
              title: 'City Media Internships',
              type: 'Note Completion',
              text:
                'We are a proudly Canadian organization offering six annual internships, valued at $10,000 each, to deserving persons from minority groups. We offer career assistance, and an opportunity for these individuals to demonstrate the talent they have and get hands-on experience in broadcasting. We hope that our commitment to these groups becomes an industry-wide model of acceptance. Our goal is to have the City Media family mirror the diversity that makes our nation strong.\n' +
                'The internship winners will work at one of our two speciality TV stations. The Connect station provides programming on regional events, while the emphasis at Transview is on instructional shows. Each intern will work in an entry-level position within an area that meets the requirements of the company and be paid at the opening rate set by the company for that position. If the assignment makes relocation necessary, a maximum $1,500 grant is provided to assist with these expenses.\n' +
                'Interested broadcasting applicants should provide evidence of full-time enrolment in the field of broadcasting at an accredited post-secondary institution. An official transcript from the educational institution is also required. Mature students may replace this transcript with a one-page typewritten statement of their goals. References from three teachers or employers will be necessary if the application proceeds.\n' +
                'Once your application is accepted, you will receive a confirmation letter by mail from Personnel. The application is then referred to a Canada-wide panel of City Media employees. These individuals are familiar with the positions that would be considered a complementary fit with your stated career path. They will put together a shortlist of promising candidates and conduct an in-person or telephone interview. The type of interview will vary with the distance of each candidate. The hiring decisions of the panel are final.\n' +
                'If a candidate is not eligible, the application will be removed from the competition, as will those whose applications and accompanying documents are received later than the deadline for submission. No exceptions can be made for delayed, lost or misdirected mail.',
              questions: [
                { q: 'internships: allow minorities to gain ___ and show their talents', a: 'experience' },
                { q: 'further City Media’s aim to reflect the ___ of people in Canada', a: 'diversity' },
                { q: 'an additional amount of money is given if ___ is required', a: 'relocation' },
                { q: 'support application with proof of present ___ in broadcasting studies', a: 'enrolment' },
                { q: 'a ___ issued by your school', a: 'transcript' },
                { q: 'interview method depends on', a: 'distance' }
              ]
            },
            {
              title: 'Railway Season Tickets',
              type: 'Identifying Information (True / False / Not Given)',
              text:
                'Types of Season Tickets\n' +
                'Standard season tickets allow unlimited travel between the two train stations shown on the ticket for the full duration of their validity. You can break your journey at any train station between the origin and destination station on your season ticket.\n' +
                'Combined rail-and-bus season tickets are available from some rail stations. This means if you can make your main journey by rail, you can then complete it by bus. Two separate season tickets may be required for some destinations.\n' +
                'Ticket Duration\n' +
                '7-day: These normally cost less than five standard day-returns. They are valid for a full seven days’ rail travel between the points shown on the train ticket.\n' +
                'Monthly: Monthly season tickets are priced at less than four times the cost of 7-day train tickets and are valid for a full calendar month from the date of commencement.\n' +
                'Annual Card: This gives you a full calendar year’s weekday travel for the price of only 40 weekly tickets. Annual Card holders can also save a third on the price of most Standard Class train fares in the region at weekends and on Bank Holidays. You can also take up to three adults with you at the same discount, while up to four children (aged 5–15) may accompany you for a minimum of £1 each.\n' +
                'How do I buy my first season ticket?\n' +
                'Your season ticket is not valid without a photocard, and both must always be carried together. A photocard will be issued to you free of charge when you first purchase a season ticket. You just need to take a passport-sized photograph to a ticket office and we’ll do the rest. As long as your photo remains a good likeness, you can continue to use the photocard with any subsequent season tickets that you buy.',
              questions: [
                { q: 'You are allowed to stop off at an intermediate station when making a journey using a standard season ticket.', a: 'True', options: ['TRUE', 'FALSE', 'NOT GIVEN'] },
                { q: 'When using a combined rail-and-bus season ticket, the major part of your journey must be by train.', a: 'True', options: ['TRUE', 'FALSE', 'NOT GIVEN'] },
                { q: 'It is more expensive to buy four 7-day tickets than a monthly season ticket for the same journey.', a: 'True', options: ['TRUE', 'FALSE', 'NOT GIVEN'] },
                { q: 'Annual Card season tickets entitle you to savings on other rail journeys outside of the working week.', a: 'True', options: ['TRUE', 'FALSE', 'NOT GIVEN'] },
                { q: 'Children under the age of 5 are charged one third of the full ticket price when accompanying you on an Annual Card journey.', a: 'NOT GIVEN', options: ['TRUE', 'FALSE', 'NOT GIVEN'] },
                { q: 'The photo you supply at the time of application is displayed on your season ticket.', a: 'False', options: ['TRUE', 'FALSE', 'NOT GIVEN'] }
              ]
            }
          ]
        },
        writing: {
          title: '写作 Writing（培训类 General Training）',
          intro: '官方培训类写作样题：Task 1 书信 + Task 2 议论文',
          tasks: [
            {
              task: 'Task 1',
              type: '小作文（书信）',
              prompt: 'Your local public library wants to make improvements to their services and facilities. In order to get ideas from the public, they have asked library users to send them suggestions in writing. Write a letter to the librarian. In your letter: describe what you like about the library; say what you don’t like; make suggestions for improvements. Write at least 150 words. You do NOT need to write any addresses. Begin your letter as follows: Dear Sir or Madam,'
            },
            {
              task: 'Task 2',
              type: '大作文（议论文）',
              prompt: 'Shopping is becoming more and more popular as a leisure activity. However, some people feel that this has both positive and negative effects. Why is shopping so popular? What effects does its increase in popularity have on individuals and on society? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.'
            }
          ]
        },
        speaking: SPK
      },

      // ===================== Test 4：官方补充样题 · 学术写作与口语 =====================
      // 内容逐字取自 British Council / IELTS.org 官方免费练习（听力/阅读原声与文章见官网，故本套仅含写作+口语）
      {
        id: 4,
        title: '官方补充样题 · 学术写作与口语',
        writing: {
          title: '写作 Writing（学术类）',
          intro: '雅思官方免费发布的学术写作样题（真实题目，来源：British Council / IELTS.org 免费练习）。Task 1 配图请参见雅思官方样题页面。',
          tasks: [
            {
              task: 'Task 1',
              type: '小作文（图表 / 流程 / 地图）',
              prompt: 'The graph below shows the proportion of four different materials that were recycled from 1982 to 2010 in a particular country. Summarise the information by selecting and reporting the main features, making comparisons where relevant. Write at least 150 words.'
            },
            {
              task: 'Task 2',
              type: '大作文（议论文）',
              prompt: 'Learning English at school is often seen as more important than learning local languages. If these are not taught, many are at risk of dying out. In your opinion, is it important for everyone to learn English? Should we try to ensure the survival of local languages and, if so, how? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.'
            },
            {
              task: 'Task 1',
              type: '小作文（图表 / 流程 / 地图）',
              prompt: 'The graph below shows the population of India and China from the year 2000 to the present day with projections for growth to the year 2050. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'
            },
            {
              task: 'Task 2',
              type: '大作文（议论文）',
              prompt: 'Many people go through life doing work that they hate or have no talent for. Why does this happen? What are the consequences of this situation? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.'
            }
          ]
        },
        speaking: SPK2
      },

      // ===================== Test 5：官方补充样题 · 培训写作与口语 =====================
      {
        id: 5,
        title: '官方补充样题 · 培训写作与口语',
        writing: {
          title: '写作 Writing（培训类 General Training）',
          intro: '雅思官方免费发布的培训类写作样题（真实题目，来源：British Council / IELTS.org 免费练习）。',
          tasks: [
            {
              task: 'Task 1',
              type: '小作文（书信）',
              prompt: 'A friend has agreed to look after your house and pet while you are on holiday. Write a letter to your friend. In your letter: give contact details for when you are away; give instructions about how to care for your pet; describe other household duties you would like your friend to undertake. You do NOT need to write any addresses. Begin your letter as follows: Dear .......,'
            },
            {
              task: 'Task 2',
              type: '大作文（议论文）',
              prompt: 'Some people believe that teaching children at home is best for a child’s development while others think that it is important for children to go to school. Discuss the advantages of both methods and give your own opinion. Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.'
            }
          ]
        },
        speaking: SPK
      },

      // ===================== Test 6：官方补充样题 · 培训写作 Test 2 =====================
      // 内容逐字取自 British Council 官方免费练习 Writing Test Two（来源同上，真实官方题目）
      {
        id: 6,
        title: '官方补充样题 · 培训写作 Test 2',
        writing: {
          title: '写作 Writing（培训类 General Training）',
          intro: '雅思官方免费发布的培训类写作样题（真实题目，来源：British Council 免费练习 Test Two）。',
          tasks: [
            {
              task: 'Task 1',
              type: '小作文（书信）',
              prompt: 'You have lost an item of value on a train. Write a letter to the railway company. In your letter: describe the item; explain where and when you left it; say what action you would like the company to take. Write at least 150 words. You do NOT need to write any addresses. Begin your letter as follows: Dear Sir or Madam,'
            },
            {
              task: 'Task 2',
              type: '大作文（议论文）',
              prompt: 'Some people think that having a set retirement age (e.g. 65 years) for everybody, regardless of occupation, is unfair. They believe that certain workers deserve to retire and receive a pension at an earlier age. Do you agree or disagree? Which types of workers do you think should benefit from early retirement? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.'
            }
          ]
        },
        speaking: SPK2
      }
    ]
  };

  // 注入到最前面，作为“官方样题”系列
  IELTS_DATA.books.unshift(OFFICIAL_SAMPLE_BOOK);
})();
