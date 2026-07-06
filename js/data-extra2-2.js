/**
 * 剑桥雅思14/15/16 补充真题数据（Test 2）
 * 为剑14、剑15、剑16 各生成1套完整的 Test 2
 * 题目为雅思考试格式原创练习内容，话题与各自 Test 1 完全不同
 */

(function () {
  var extraTests = {

    // ========== 剑14 Test 2 ==========
    14: {
      id: 2,
      title: 'Test 2',
      listening: {
        title: '听力 Listening',
        intro: '共4部分，40题，约30分钟',
        sections: [
          {
            part: 'Part 1',
            context: '学员打电话报名周末摄影工作坊',
            type: '表格填空',
            audioScript: 'Receptionist: Hello, Lakeside Photography School, how can I help you?',
            questions: [
              { q: 'Workshop name:', a: 'Weekend Photography Workshop' },
              { q: 'Date:', a: '19th October' },
              { q: 'Location:', a: 'Lakeside Studio' },
              { q: 'Duration:', a: '2 days' },
              { q: 'Course fee:', a: '95' },
              { q: 'Skill level:', a: 'intermediate' },
              { q: 'Equipment needed:', a: 'own camera and tripod' },
              { q: 'Maximum group size:', a: '12' },
              { q: 'Booking reference:', a: 'PW-1947' },
              { q: 'Contact email:', a: 'photo.workshop@mail.com' }
            ]
          },
          {
            part: 'Part 2',
            context: '导游介绍城市植物园及游览路线',
            type: '选择题 + 地图标注',
            audioScript: 'Welcome to Greenvale Botanical Garden, everyone. My name is Helen and I will be your guide today.',
            questions: [
              { q: 'The botanical garden was founded in', a: 'B. 1910 (B选项)' },
              { q: 'The current special exhibit features', a: 'C. rare orchids (C选项)' },
              { q: 'Guided tours depart from', a: 'A. the main gate (A选项)' },
              { q: 'Location of the palm house:', a: 'north of the lake (地图标注D)' },
              { q: 'Location of the cafe:', a: 'east side, near the exit (地图标注B)' },
              { q: 'Location of the children\'s garden:', a: 'southwest corner (地图标注F)' }
            ]
          },
          {
            part: 'Part 3',
            context: '两名学生讨论课程论文的写作方法',
            type: '选择题 + 匹配题',
            audioScript: 'Tutor: So, you two are working on the essay about social media. How is the planning going?',
            questions: [
              { q: 'The essay topic they chose is', a: 'C. impact of social media on teenagers (C选项)' },
              { q: 'The tutor recommended', a: 'B. a mixed-methods approach (B选项)' },
              { q: 'Literature review deadline:', a: 'F. by next Monday' },
              { q: 'First draft due:', a: 'D. end of the month' },
              { q: 'Final submission format:', a: 'A. printed and online' }
            ]
          },
          {
            part: 'Part 4',
            context: '关于人类记忆原理的学术讲座',
            type: '笔记填空',
            audioScript: 'Today\'s lecture looks at how human memory works and why we remember some things but forget others.',
            questions: [
              { q: 'Short-term memory can hold about ___ items.', a: '7' },
              { q: 'Information enters long-term memory through', a: 'rehearsal' },
              { q: 'The hippocampus is responsible for forming new', a: 'memories' },
              { q: 'Emotional events are better remembered because of the', a: 'amygdala' },
              { q: 'Forgetting can result from ___ interference.', a: 'retroactive' },
              { q: 'Sleep improves memory', a: 'consolidation' },
              { q: 'Mnemonics help by using ___ associations.', a: 'visual' },
              { q: 'The "spacing effect" shows studying over time is ___ than cramming.', a: 'more effective' },
              { q: 'Stress harms memory by releasing', a: 'cortisol' },
              { q: 'Regular ___ can improve everyday memory.', a: 'exercise' }
            ]
          }
        ]
      },
      reading: {
        title: '阅读 Reading',
        intro: '共3篇文章，40题，60分钟',
        passages: [
          {
            title: 'Passage 1: The History of Cartography',
            difficulty: '中等',
            summary: '地图绘制从古代到数字时代的发展历程',
            questions: [
              { type: '判断题', q: 'The earliest surviving maps were produced in ancient Babylonia.', a: 'TRUE' },
              { type: '判断题', q: 'From the beginning, mapmaking was treated as a precise science.', a: 'FALSE - 早期地图多为象征性描绘' },
              { type: '判断题', q: 'Ptolemy\'s maps were used unchanged for exactly 1,000 years.', a: 'NOT GIVEN - 文中未提及是否原封不动沿用千年' },
              { type: '判断题', q: 'The printing press made maps widely available in Europe.', a: 'TRUE' },
              { type: '填空题', q: 'The oldest known world map comes from ____.', a: 'Babylonia' },
              { type: '填空题', q: 'Ptolemy\'s guide to mapmaking was later called ____.', a: 'Geography' },
              { type: '填空题', q: 'Modern digital maps are built from ____ imagery.', a: 'satellite' }
            ]
          },
          {
            title: 'Passage 2: The Science of Happiness',
            difficulty: '中偏难',
            summary: '幸福科学：定义、社会关系与感恩练习的研究',
            questions: [
              { type: '段落标题匹配', q: 'Paragraph A', a: 'i. Defining and measuring happiness' },
              { type: '段落标题匹配', q: 'Paragraph B', a: 'iii. Why social connections matter' },
              { type: '段落标题匹配', q: 'Paragraph C', a: 'v. The practice of gratitude' },
              { type: '选择题', q: 'Research shows a person\'s happiness is most strongly linked to:', a: 'B. the quality of their social relationships (B选项)' },
              { type: '选择题', q: 'Gratitude exercises are found to:', a: 'C. lower stress and improve mood (C选项)' },
              { type: '填空题', q: 'Twin studies suggest about ___ of happiness is inherited.', a: '50%' }
            ]
          },
          {
            title: 'Passage 3: The Future of Urban Farming',
            difficulty: '难',
            summary: '都市农业（屋顶农场与垂直农场）的未来前景',
            questions: [
              { type: 'Yes/No/Not Given', q: 'Urban farming can significantly reduce food transport emissions.', a: 'YES' },
              { type: 'Yes/No/Not Given', q: 'All vertical farms are currently profitable businesses.', a: 'NO - 多数仍因能耗高而亏损' },
              { type: 'Yes/No/Not Given', q: 'Governments worldwide have agreed on common urban farming standards.', a: 'NOT GIVEN - 文中未提及全球统一标准' },
              { type: '选择题', q: 'The main advantage of vertical farming is:', a: 'B. year-round crop production (B选项)' },
              { type: '选择题', q: 'The writer believes the future food supply will be:', a: 'C. a combination of urban and rural sources (C选项)' },
              { type: '摘要填空', q: 'Successful urban farming requires ___ and ___ .', a: 'technology / community support' }
            ]
          }
        ]
      },
      writing: {
        title: '写作 Writing',
        intro: '共2部分，60分钟',
        tasks: [
          {
            task: 'Task 1 (小作文)',
            type: '图表描述 - 线图',
            prompt: 'The graph below shows the percentage of people in four age groups who visited a public library at least once a month in one country between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
            modelAnswer: 'The line graph illustrates the proportions of monthly public-library visitors across four age groups in a particular country over the two decades from 2000 to 2020.\n\nOverall, library usage declined in every age group over the period, with the sharpest fall occurring among younger people. The 18-30 age bracket consistently had the lowest usage, while the 60+ group remained the most committed users throughout.\n\nIn 2000, around 55% of those aged 31-45 visited a library monthly, the highest proportion of any group. By 2020 this figure had fallen to roughly 32%. The 46-60 group showed a similar pattern, dropping from about 50% to 35%. The 60+ group, although also declining, remained the strongest, falling only from 48% to 40%.\n\nThe most dramatic change was seen in the 18-30 group. Starting at 40% in 2000, monthly visits collapsed to just 15% by 2020. This suggests that younger generations have increasingly turned to digital sources for information and reading.\n\nIn summary, although all age groups used libraries less by 2020, older citizens maintained comparatively high levels of engagement, while young adults all but abandoned the habit.',
            tips: '注意描述整体下降趋势、各年龄组对比、最显著变化，用过去时'
          },
          {
            task: 'Task 2 (大作文)',
            type: '议论文',
            prompt: 'Some people think that museums and art galleries should be free for everyone to enter, while others believe that visitors should pay for admission. Discuss both views and give your own opinion. Write at least 250 words.',
            modelAnswer: 'Museums preserve a nation\'s cultural and historical heritage, and there is ongoing debate about whether access to them should be free or paid. Both positions have reasonable arguments, and in my view a partly subsidised model is the most sensible.\n\nThose who argue for free admission point out that museums are public goods. They serve an educational function, especially for children and students who may not be able to afford entrance fees. When entry is free, a wider cross-section of society can benefit, including low-income families who might otherwise never visit. Free access also encourages repeat, informal learning and can strengthen a shared sense of national identity.\n\nOn the other hand, supporters of charging argue that museums are expensive to maintain. Heating, lighting, security, conservation, and staff salaries all require substantial funds. Ticket revenue helps cover these costs and reduces dependence on government budgets. Moreover, those who use the service directly are, arguably, the ones who should contribute to its upkeep, leaving public money available for more essential services such as healthcare and education.\n\nIn my opinion, the best approach is a compromise. Core national museums could offer free general admission, funded by the state because they benefit society as a whole, while special temporary exhibitions might carry a charge to cover their extra cost. Concessions for students, seniors, and local residents can ensure that cost is never a barrier for those who wish to learn.\n\nIn conclusion, while admission fees can help finance museums, the educational and social value of wide access is greater; a mixed system of free general entry with paid special exhibitions best serves the public.',
            tips: '讨论双方观点并给出折中立场，使用连接词，至少250词'
          }
        ]
      },
      speaking: {
        title: '口语 Speaking',
        intro: '共3部分，约11-14分钟',
        parts: [
          {
            part: 'Part 1: Introduction & Interview',
            questions: [
              { q: 'Let\'s talk about shopping. Do you enjoy going shopping?', a: '参考回答: I quite enjoy shopping, but mainly for necessities rather than for fun. I find it satisfying to compare products and find good value, though I dislike crowded shopping centres at weekends.' },
              { q: 'What kind of things do you usually buy?', a: '参考回答: Mostly books, clothes, and household items. I also buy groceries online every week because it saves me a lot of time.' },
              { q: 'Do you prefer shopping in stores or online? Why?', a: '参考回答: It depends. For clothes I prefer trying things on in a store, but for electronics and books online is more convenient and often cheaper.' },
              { q: 'Has your shopping habit changed in recent years?', a: '参考回答: Definitely. I now do far more online shopping than before, partly because of better return policies and faster delivery.' }
            ]
          },
          {
            part: 'Part 2: Long Turn (Cue Card)',
            cueCard: 'Describe a park or garden that you enjoy visiting.\n\nYou should say:\n- where it is\n- how often you go there\n- what you do there\n- and explain why you enjoy visiting this place.',
            modelAnswer: '参考回答:\n\nI\'d like to talk about a botanical garden that I absolutely love visiting. It\'s called Greenvale Botanical Garden, and it\'s located on the edge of my city, about a thirty-minute bus ride from where I live.\n\nI try to go there roughly once a month, usually on a Sunday morning when it\'s quiet and the light is soft. I first discovered it two years ago when a friend suggested we meet there for a walk, and since then it has become my favourite escape from the noise of the city.\n\nWhen I\'m there, I usually follow the same gentle route. I start at the main gate, walk past the lake, and then wander through the orchid house, which is always warm and fragrant. I often bring a book and sit on a bench near the water for half an hour, just listening to the birds. Sometimes I take photos of the flowers, which I share with my family.\n\nThe reason I enjoy this place so much is that it feels completely separate from everyday life. The air is fresher, the colours are calming, and there\'s a real sense of peace. After an hour or two there, I always return home feeling relaxed and recharged. It\'s a small place, but for me it\'s a kind of sanctuary.',
            tips: '描述地点、频率、活动与感受，使用过去/现在时态混合'
          },
          {
            part: 'Part 3: Discussion',
            questions: [
              { q: 'Why do you think public parks are important in cities?', a: '参考回答: Public parks are vital because they give city dwellers access to nature and open space, which is essential for mental and physical health. They also provide free places for exercise, socialising, and relaxation, helping to build a sense of community.' },
              { q: 'How can cities encourage people to spend more time outdoors?', a: '参考回答: They can design safer, greener, and more attractive public spaces, add walking and cycling paths, and organise free outdoor events. Improving public transport to parks also helps, especially for families without cars.' },
              { q: 'Do you think natural spaces will become more or less important in the future?', a: '参考回答: I believe they will become more important. As cities get denser and lives get busier, people will increasingly need quiet natural environments to reduce stress. I expect demand for green spaces to keep rising.' }
            ]
          }
        ]
      }
    },

    // ========== 剑15 Test 2 ==========
    15: {
      id: 2,
      title: 'Test 2',
      listening: {
        title: '听力 Listening',
        intro: '共4部分，40题，约30分钟',
        sections: [
          {
            part: 'Part 1',
            context: '顾客致电快递公司办理退换货',
            type: '表格填空',
            audioScript: 'Customer Service: Good morning, QuickReturn Delivery, Sophie speaking. How can I help?',
            questions: [
              { q: 'Order number:', a: 'QR-55231' },
              { q: 'Item to return:', a: 'wireless headphones' },
              { q: 'Reason for return:', a: 'faulty battery' },
              { q: 'Purchase date:', a: '3rd May' },
              { q: 'Refund method:', a: 'original payment card' },
              { q: 'Collection date:', a: '12th May' },
              { q: 'Collection fee:', a: 'free' },
              { q: 'Expected refund time:', a: '5 working days' },
              { q: 'Replacement option:', a: 'exchange for new unit' },
              { q: 'Customer phone:', a: '07854 332190' }
            ]
          },
          {
            part: 'Part 2',
            context: '科技博物馆的导览广播',
            type: '选择题 + 地图标注',
            audioScript: 'Thank you for visiting the National Science and Technology Museum. Here is a short orientation before you begin.',
            questions: [
              { q: 'The museum first opened to the public in', a: 'C. 1988 (C选项)' },
              { q: 'The newest permanent gallery is about', a: 'B. robotics and AI (B选项)' },
              { q: 'The planetarium show lasts', a: 'A. 40 minutes (A选项)' },
              { q: 'Location of the robotics gallery:', a: 'second floor, east wing (地图标注E)' },
              { q: 'Location of the cafe:', a: 'ground floor, near entrance (地图标注B)' },
              { q: 'Location of the gift shop:', a: 'basement, by the lift (地图标注F)' }
            ]
          },
          {
            part: 'Part 3',
            context: '两名学生讨论市场营销小组作业',
            type: '选择题 + 匹配题',
            audioScript: 'Tutor: Right, let\'s hear about your marketing plan for the new app. What did you decide?',
            questions: [
              { q: 'Their target customer is', a: 'B. young professionals (B选项)' },
              { q: 'The main promotional channel is', a: 'C. social media influencers (C选项)' },
              { q: 'Market research method:', a: 'E. online questionnaire' },
              { q: 'Budget allocated to advertising:', a: 'D. £2,000' },
              { q: 'Final presentation length:', a: 'F. 15 minutes' }
            ]
          },
          {
            part: 'Part 4',
            context: '关于全球咖啡贸易历史的学术讲座',
            type: '笔记填空',
            audioScript: 'Today we trace the remarkable story of coffee, from a wild plant to the world\'s second most traded commodity.',
            questions: [
              { q: 'Coffee was first cultivated in', a: 'Ethiopia' },
              { q: 'It spread from Ethiopia to ___ in the 15th century.', a: 'Yemen' },
              { q: 'The first coffee houses in Europe opened in', a: 'Venice' },
              { q: 'Brazil became the leading producer in the', a: '19th century' },
              { q: 'Coffee is now the ___ most traded commodity.', a: 'second' },
              { q: 'Around ___ of the world\'s population drinks coffee.', a: 'one-third' },
              { q: 'Most beans are harvested by', a: 'hand' },
              { q: 'Climate change threatens crops by raising', a: 'temperature' },
              { q: 'Fair-trade certification aims to help', a: 'small farmers' },
              { q: 'Instant coffee was developed in', a: '1901' }
            ]
          }
        ]
      },
      reading: {
        title: '阅读 Reading',
        intro: '共3篇文章，40题，60分钟',
        passages: [
          {
            title: 'Passage 1: The History of Glass',
            difficulty: '中等',
            summary: '玻璃从古代工艺品到现代材料的演变',
            questions: [
              { type: '判断题', q: 'Glass was first deliberately manufactured by the ancient Egyptians.', a: 'TRUE' },
              { type: '判断题', q: 'For most of history, glass was used mainly for windows.', a: 'FALSE - 早期多用于器皿与装饰' },
              { type: '判断题', q: 'The Romans were the first to produce completely clear glass.', a: 'NOT GIVEN - 文中未提及罗马人首个造出透明玻璃' },
              { type: '判断题', q: 'Float glass made large flat panes cheap to produce.', a: 'TRUE' },
              { type: '填空题', q: 'Glassblowing was invented around ____ BCE.', a: '100' },
              { type: '填空题', q: 'Modern window glass is made by the ___ process.', a: 'float' },
              { type: '填空题', q: 'Fibre optics rely on glass that carries ____ signals.', a: 'light' }
            ]
          },
          {
            title: 'Passage 2: The Science of Colour',
            difficulty: '中偏难',
            summary: '颜色科学：光、感知与文化差异',
            questions: [
              { type: '段落标题匹配', q: 'Paragraph A', a: 'ii. How the eye detects colour' },
              { type: '段落标题匹配', q: 'Paragraph B', a: 'iv. Colour and emotion' },
              { type: '段落标题匹配', q: 'Paragraph C', a: 'vi. Cultural meanings of colour' },
              { type: '选择题', q: 'Red is often associated with:', a: 'B. excitement and urgency (B选项)' },
              { type: '选择题', q: 'The passage suggests that colour perception is:', a: 'C. partly shaped by culture (C选项)' },
              { type: '填空题', q: 'Designers use colour to influence consumer ____ .', a: 'behaviour' }
            ]
          },
          {
            title: 'Passage 3: The Future of Money',
            difficulty: '难',
            summary: '货币的未来：数字货币、现金与隐私',
            questions: [
              { type: 'Yes/No/Not Given', q: 'Cash will disappear completely within ten years.', a: 'NO - 现金仍将在多地长期使用' },
              { type: 'Yes/No/Not Given', q: 'Digital currencies can reduce the cost of payments.', a: 'YES' },
              { type: 'Yes/No/Not Given', q: 'All central banks have launched their own digital currency.', a: 'NOT GIVEN - 文中仅提及部分国家试点' },
              { type: '选择题', q: 'A major concern about digital money is:', a: 'B. the loss of financial privacy (B选项)' },
              { type: '选择题', q: 'The writer predicts the future will involve:', a: 'C. both digital and physical money (C选项)' },
              { type: '摘要填空', q: 'A successful system needs security, access and ____ .', a: 'trust / regulation' }
            ]
          }
        ]
      },
      writing: {
        title: '写作 Writing',
        intro: '共2部分，60分钟',
        tasks: [
          {
            task: 'Task 1 (小作文)',
            type: '图表描述 - 饼图',
            prompt: 'The pie charts below show the sources of household energy in a country in 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
            modelAnswer: 'The pie charts compare the proportions of household energy drawn from five sources in one country in 2000 and 2020.\n\nOverall, the energy mix shifted away from fossil fuels and towards renewables over the two decades. Natural gas remained the single largest source in both years, while solar and wind saw the most noticeable growth.\n\nIn 2000, natural gas accounted for 40% of household energy, the largest share. Coal contributed 25%, oil 18%, and nuclear power 12%. Renewables such as solar and wind made up only 5% combined.\n\nBy 2020, the share of natural gas had fallen slightly to 34%, while coal dropped sharply to 12%. Oil also declined, to 10%. Nuclear remained steady at around 12%. The most striking change was in renewables, which rose to 32%, overtaking both coal and oil.\n\nIn summary, although natural gas stayed dominant, the country clearly moved toward cleaner energy, with renewables becoming a major part of the household energy supply by 2020.',
            tips: '比较两个饼图的主要差异，突出可再生能源增长，过去时描述'
          },
          {
            task: 'Task 2 (大作文)',
            type: '议论文',
            prompt: 'Some people believe that advertising aimed at children should be banned. To what extent do you agree or disagree? Write at least 250 words.',
            modelAnswer: 'Advertising directed at children is a controversial issue. While some argue it should be banned to protect young people, others see it as a normal part of a market economy. I largely agree that such advertising needs strict limitation, though a complete ban may be impractical.\n\nThere are strong reasons to restrict advertising to children. Young children lack the cognitive ability to distinguish advertising from entertainment, and they are easily persuaded by colourful, repetitive messages. This can lead to pester power, where children pressure parents to buy unhealthy snacks, toys, or gadgets they do not need. Worse, frequent exposure to food advertising is linked to poor diets and rising childhood obesity. Protecting children from commercial manipulation is, I believe, a legitimate role of government.\n\nHowever, opponents argue that advertising is a source of information and that a total ban is excessive. They point out that parents, not the state, should regulate what their children see, and that bans can be hard to enforce in the digital age, where children encounter ads on social media and games regardless of rules. Some also argue that children need to learn to navigate marketing as a life skill.\n\nIn my view, a balance is best. A full ban on advertising to very young children, say under eight, is justified because they cannot understand persuasion. For older children, strict rules on timing, content, and the types of products advertised would be more realistic than an outright prohibition. Combined with media-literacy education, this approach protects children without denying useful information.\n\nIn conclusion, I agree that advertising aimed at children should be heavily restricted, especially for the youngest, but a nuanced regulatory approach is more workable than a total ban.',
            tips: '明确立场，承认反方观点，提出分层监管方案，至少250词'
          }
        ]
      },
      speaking: {
        title: '口语 Speaking',
        intro: '共3部分，约11-14分钟',
        parts: [
          {
            part: 'Part 1: Introduction & Interview',
            questions: [
              { q: 'Let\'s talk about reading. Do you like reading books?', a: '参考回答: Yes, I do, though I read less than I used to. I still try to finish a novel every few weeks, usually before bed.' },
              { q: 'What kind of books do you prefer?', a: '参考回答: I\'m drawn to mysteries and historical fiction. They let me escape while also teaching me something about the past.' },
              { q: 'Do you read more on paper or on a screen?', a: '参考回答: Increasingly on a screen, because my phone is always with me, but for long novels I still prefer paper.' },
              { q: 'Did you read more when you were younger?', a: '参考回答: Surprisingly, no. I read far more now, because I choose books myself rather than being told what to read at school.' }
            ]
          },
          {
            part: 'Part 2: Long Turn (Cue Card)',
            cueCard: 'Describe a time when you helped someone.\n\nYou should say:\n- who you helped\n- when it happened\n- what you did\n- and explain how you felt about helping them.',
            modelAnswer: '参考回答:\n\nI\'d like to describe a time when I helped an elderly neighbour during a heavy snowstorm last winter.\n\nIt happened in January, after a night of unusual snowfall that left the streets and pavements outside our block completely covered. My neighbour, Mrs. Lopez, is in her eighties and lives alone next door. I noticed her struggling to open her front gate, which was blocked by a pile of snow.\n\nI went over and offered to help. First, I shovelled the snow from her path and cleared her car so she could reach the road if needed. Then I realised she had no milk or bread, so I walked to the nearby shop for her and carried the bags back. We chatted for a while, and I checked that her heating was working, since she was worried about the cold.\n\nHelping her made me feel genuinely happy and useful. It was a small effort on my part, but it clearly meant a lot to her, and she thanked me several times. I realised how isolating winter can be for people who live alone, and that a little neighbourliness goes a long way. Ever since, I\'ve made a habit of checking on her regularly, especially in bad weather.\n\nIt was a simple thing, but it left me with a warm sense of having done something that truly mattered.',
            tips: '按时间顺序叙述，表达感受，使用过去时'
          },
          {
            part: 'Part 3: Discussion',
            questions: [
              { q: 'Why is it important for people to help others in their community?', a: '参考回答: Helping others builds trust and a sense of belonging, which are the foundations of a healthy community. It also creates a safety net, so that when we ourselves need support, others are more likely to step in.' },
              { q: 'Should schools teach children to volunteer?', a: '参考回答: I think they should. Volunteering teaches empathy, responsibility, and practical skills, and it shows young people that they can make a difference. Many schools already include community service, and I\'d like to see it become standard.' },
              { q: 'Do you think people help others less than they used to?', a: '参考回答: In some ways, yes. Modern life is busier and more individualistic, and we may know our neighbours less. But technology also enables new forms of help, like crowdfunding and online support groups, so helping has simply changed shape.' }
            ]
          }
        ]
      }
    },

    // ========== 剑16 Test 2 ==========
    16: {
      id: 2,
      title: 'Test 2',
      listening: {
        title: '听力 Listening',
        intro: '共4部分，40题，约30分钟',
        sections: [
          {
            part: 'Part 1',
            context: '会员致电健身房办理续约',
            type: '表格填空',
            audioScript: 'Receptionist: Good morning, FitLife Gym, this is Tom. How can I help you?',
            questions: [
              { q: 'Member name:', a: 'Daniel Brown' },
              { q: 'Membership type:', a: 'premium monthly' },
              { q: 'Current expiry:', a: '30th June' },
              { q: 'New renewal period:', a: '12 months' },
              { q: 'Monthly fee:', a: '38' },
              { q: 'Includes:', a: 'classes and sauna' },
              { q: 'Freeze option:', a: '2 months per year' },
              { q: 'Guest passes per month:', a: '3' },
              { q: 'Payment method:', a: 'direct debit' },
              { q: 'Membership card number:', a: 'FL-30982' }
            ]
          },
          {
            part: 'Part 2',
            context: '导游介绍历史小镇的旧城区游览',
            type: '选择题 + 地图标注',
            audioScript: 'Welcome to Oldmarket Town. I\'m your guide, Eleanor, and I\'ll walk you through our historic quarter.',
            questions: [
              { q: 'The town was founded in', a: 'B. 1340 (B选项)' },
              { q: 'The old market hall now houses', a: 'C. a local museum (C选项)' },
              { q: 'The walking tour takes about', a: 'A. 90 minutes (A选项)' },
              { q: 'Location of the clock tower:', a: 'town centre, by the square (地图标注D)' },
              { q: 'Location of the river bridge:', a: 'north end of High Street (地图标注A)' },
              { q: 'Location of the tea rooms:', a: 'beside the church (地图标注F)' }
            ]
          },
          {
            part: 'Part 3',
            context: '两名学生讨论产品设计方案',
            type: '选择题 + 匹配题',
            audioScript: 'Tutor: So, your group is redesigning the kitchen timer. What direction did you take?',
            questions: [
              { q: 'The product they redesigned is a', a: 'C. kitchen timer (C选项)' },
              { q: 'Their main design priority was', a: 'B. ease of use for the elderly (B选项)' },
              { q: 'User testing method:', a: 'E. interviews with seniors' },
              { q: 'Material chosen:', a: 'D. recycled plastic' },
              { q: 'Prototype deadline:', a: 'F. in two weeks' }
            ]
          },
          {
            part: 'Part 4',
            context: '关于塑料污染与海洋环境的学术讲座',
            type: '笔记填空',
            audioScript: 'Today\'s lecture examines how plastic pollution reaches the oceans and what can be done about it.',
            questions: [
              { q: 'About ___ million tonnes of plastic enter oceans yearly.', a: '11' },
              { q: 'Most ocean plastic comes from', a: 'land-based sources' },
              { q: 'Rivers carry waste to the sea from', a: 'cities' },
              { q: 'Microplastics are smaller than', a: '5mm' },
              { q: 'They have been found in', a: 'drinking water' },
              { q: 'Marine animals mistake plastic for', a: 'food' },
              { q: 'Chemicals from plastic can cause', a: 'toxicity' },
              { q: 'One solution is better', a: 'recycling' },
              { q: 'Biodegradable plastics need special', a: 'composting conditions' },
              { q: 'The key to progress is', a: 'international cooperation' }
            ]
          }
        ]
      },
      reading: {
        title: '阅读 Reading',
        intro: '共3篇文章，40题，60分钟',
        passages: [
          {
            title: 'Passage 1: The History of Coffee',
            difficulty: '中等',
            summary: '咖啡从非洲被发现到成为全球饮品的历史',
            questions: [
              { type: '判断题', q: 'Coffee was first discovered in Ethiopia.', a: 'TRUE' },
              { type: '判断题', q: 'Coffee was originally eaten as a food rather than drunk.', a: 'FALSE - 早期作为饮品' },
              { type: '判断题', q: 'The first coffee house in England opened in London in 1650.', a: 'NOT GIVEN - 文中未给出确切年份' },
              { type: '判断题', q: 'Brazil is today the world\'s largest coffee producer.', a: 'TRUE' },
              { type: '填空题', q: 'Coffee houses first appeared in ____ in the 15th century.', a: 'Yemen' },
              { type: '填空题', q: 'The stimulant in coffee is called ____.', a: 'caffeine' },
              { type: '填空题', q: 'Instant coffee was first made in ____ in 1901.', a: 'the United States' }
            ]
          },
          {
            title: 'Passage 2: Coral Reef Ecosystems',
            difficulty: '中偏难',
            summary: '珊瑚礁生态系统：结构、威胁与保护',
            questions: [
              { type: '段落标题匹配', q: 'Paragraph A', a: 'ii. The structure of a reef' },
              { type: '段落标题匹配', q: 'Paragraph B', a: 'iv. Threats from warming seas' },
              { type: '段落标题匹配', q: 'Paragraph C', a: 'vi. Protecting the reefs' },
              { type: '选择题', q: 'Coral gets its colour from:', a: 'B. algae living in its tissue (B选项)' },
              { type: '选择题', q: 'The main cause of coral bleaching is:', a: 'C. rising sea temperature (C选项)' },
              { type: '填空题', q: 'Reefs cover only about ___ of the ocean floor.', a: '1%' }
            ]
          },
          {
            title: 'Passage 3: The Future of Healthcare',
            difficulty: '难',
            summary: '医疗的未来：人工智能、远程医疗与可及性',
            questions: [
              { type: 'Yes/No/Not Given', q: 'AI will replace human doctors entirely.', a: 'NO - AI辅助而非取代医生' },
              { type: 'Yes/No/Not Given', q: 'Telemedicine improved access in remote areas.', a: 'YES' },
              { type: 'Yes/No/Not Given', q: 'All countries now have equal healthcare technology.', a: 'NOT GIVEN - 文中未称各国技术均等' },
              { type: '选择题', q: 'The main benefit of AI in diagnosis is:', a: 'B. earlier and more accurate detection (B选项)' },
              { type: '选择题', q: 'The writer argues the future of care will be:', a: 'C. a blend of human and digital care (C选项)' },
              { type: '摘要填空', q: 'Better healthcare needs training, funding and ____ .', a: 'infrastructure / equity' }
            ]
          }
        ]
      },
      writing: {
        title: '写作 Writing',
        intro: '共2部分，60分钟',
        tasks: [
          {
            task: 'Task 1 (小作文)',
            type: '图表描述 - 柱状图',
            prompt: 'The bar chart below shows the average number of times per week that people in five age groups did physical exercise in 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
            modelAnswer: 'The bar chart compares the average weekly frequency of physical exercise among five age groups in 2015 and 2025.\n\nOverall, exercise frequency rose in every age group over the decade, with the largest increase among older people. The 18-25 group remained the most active in both years.\n\nIn 2015, those aged 18-25 exercised about 4.5 times per week, the highest figure. By 2025 this had risen slightly to 5.0. The 26-35 group went from 3.8 to 4.3, while the 36-45 group increased from 3.0 to 3.6. The 46-55 group showed a more notable rise, from 2.2 to 3.1.\n\nThe most dramatic change was in the 56+ group, which climbed from just 1.5 sessions per week in 2015 to 2.8 in 2025, almost doubling. This suggests growing health awareness among older citizens.\n\nIn summary, while younger adults stayed the most active, all age groups became more physically active over the ten years, with the greatest relative gains among the elderly.',
            tips: '对比两个年份、五个年龄组，突出最大增幅，用过去时'
          },
          {
            task: 'Task 2 (大作文)',
            type: '议论文',
            prompt: 'Some people think that the best way to protect the environment is to increase the price of fuel. Others believe there are better ways to do this. Discuss both views and give your own opinion. Write at least 250 words.',
            modelAnswer: 'Protecting the environment is urgent, but there is disagreement about the best method. Some advocate higher fuel prices, while others prefer alternative measures. Both approaches have merit, and I believe a combination is most effective.\n\nThose who support raising fuel prices argue that cost is a powerful signal. When petrol and diesel become expensive, individuals and businesses are pushed to drive less, carpool, or switch to public transport and electric vehicles. Higher taxes also generate revenue that governments can invest in green infrastructure. Because the change affects everyone, it can produce rapid, broad reductions in emissions.\n\nHowever, critics point out that fuel taxes are regressive: they hit low-income households hardest, who often have no choice but to commute by car. They also argue that better solutions exist, such as improving public transport, subsidising renewable energy, and setting stricter efficiency standards for industry. These measures can cut pollution without punishing ordinary citizens and may be more politically acceptable.\n\nIn my view, the two approaches are not mutually exclusive. Modestly higher fuel prices, paired with exemptions or rebates for low-income families, can discourage waste, while the revenue funds cleaner alternatives. At the same time, investment in trains, buses, and cycling lanes gives people real choices, so the transition feels fair rather than punitive.\n\nIn conclusion, raising fuel prices alone is insufficient and potentially unfair, but as part of a broader package that includes better public transport and regulation, it is a useful tool for environmental protection. Crucially, the revenue from such charges must be ring-fenced for green projects, so citizens see a clear benefit and public support for the policy remains strong.',
            tips: '讨论双方观点，提出组合方案，注意公平性论述，至少250词'
          }
        ]
      },
      speaking: {
        title: '口语 Speaking',
        intro: '共3部分，约11-14分钟',
        parts: [
          {
            part: 'Part 1: Introduction & Interview',
            questions: [
              { q: 'Let\'s talk about music. What kind of music do you like?', a: '参考回答: I listen to a mix, but I especially like acoustic and soft rock. I find it relaxing when I\'m studying or travelling.' },
              { q: 'Do you play any musical instrument?', a: '参考回答: I used to play the piano as a child, but I stopped. I\'ve been thinking about learning the guitar again recently.' },
              { q: 'Do you listen to music more now or in the past?', a: '参考回答: Much more now, mainly because streaming makes it so easy. I have playlists for work, exercise, and sleeping.' },
              { q: 'Is live music popular with young people where you live?', a: '参考回答: Yes, concerts and music festivals are very popular, though tickets can be expensive, so many people go to smaller live shows instead.' }
            ]
          },
          {
            part: 'Part 2: Long Turn (Cue Card)',
            cueCard: 'Describe a piece of music you remember well.\n\nYou should say:\n- what the music is\n- when you first heard it\n- who introduced it to you\n- and explain why you remember it so well.',
            modelAnswer: '参考回答:\n\nI\'d like to talk about a piece of music that has stayed with me: the piano piece "River Flows in You" by Yiruma. It\'s a gentle, emotional composition for solo piano, and although it\'s quite simple, it has a haunting beauty.\n\nI first heard it about five years ago, during my final year of university. A friend of mine played it on her phone one evening when we were both stressed about exams. She told me she listened to it whenever she needed to calm down, and she thought I might like it too.\n\nWhat I remember most is the context. That was a difficult period, and the music became a kind of comfort for me. I started playing it on loop while revising, and over time it became linked in my mind with that mixture of anxiety and hope. Even now, hearing the first notes takes me straight back to that small dorm room and that friendship.\n\nI remember it so well because it marked a moment in my life, and because the melody is so memorable. Unlike many songs with lyrics, this piece says everything through emotion alone, which is perhaps why it feels timeless to me. To this day, it\'s the first thing I play when I want to relax.',
            tips: '描述音乐、初次聆听背景与个人记忆，使用过去时'
          },
          {
            part: 'Part 3: Discussion',
            questions: [
              { q: 'How does music affect people\'s emotions?', a: '参考回答: Music strongly influences mood because it engages the brain\'s emotional centres directly. A fast, major-key tune can lift energy, while slow, minor pieces often bring calm or even sadness. That\'s why we use music to celebrate, focus, or heal.' },
              { q: 'Do you think traditional music is being lost?', a: '参考回答: In many places, yes. Global pop culture dominates streaming platforms, and young people may never hear their grandparents\' folk songs. Yet there are revival efforts, and some traditional styles are being blended with modern music, which helps keep them alive.' },
              { q: 'Should music education be part of school curricula?', a: '参考回答: I think it should. Music education supports creativity, discipline, and even maths skills, and it gives children a way to express themselves. Even basic singing or instrument lessons can enrich a child\'s development far beyond the classroom.' }
            ]
          }
        ]
      }
    }
  };

  // 将数据添加到 IELTS_DATA
  IELTS_DATA.books.forEach(function (book) {
    if (extraTests[book.id]) {
      book.tests.push(extraTests[book.id]);
    }
  });
})();
