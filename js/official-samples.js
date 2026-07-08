/**
 * IELTS 官方免费样题（真实题目）
 * 来源：雅思官方（IELTS / British Council / Cambridge）公开发布的 Sample Tasks PDF（ielts.org/cdn/...）
 * 这些题目是雅思官方免费发布、可合法使用的真实样题，逐字取自官方 PDF。
 * 注意：这不是剑桥雅思剑 4–19 全量（后者受版权保护，不可转载）；本文件仅含官方免费样题。
 * 加载顺序：须位于 data.js 之后、app.js 之前。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;

  var OFFICIAL_SAMPLE_BOOK = {
    id: 0,
    title: '官方样题',
    fullTitle: 'IELTS 官方免费样题',
    year: 2024,
    desc: '雅思官方免费发布的真实样题（Listening / Reading / Writing / Speaking）',
    officialSample: true,
    tests: [
      {
        id: 1,
        title: 'Official Sample Tasks',
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
          intro: '官方样题：Matching Features 与 Table Completion 两篇',
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
        speaking: {
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
        }
      }
    ]
  };

  // 注入到最前面，作为“官方样题”系列
  IELTS_DATA.books.unshift(OFFICIAL_SAMPLE_BOOK);
})();
