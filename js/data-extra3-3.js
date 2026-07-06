/**
 * 剑桥雅思 19 补充真题数据 - Test 3 & Test 4
 * 剑19 Test 3、Test 4 完整数据（听力/阅读/写作/口语）
 * 题目为雅思考试格式原创练习内容。
 */

(function () {
  var extraTests = {
    19: [
      // =================== 剑19 Test 3 ===================
      {
        id: 3,
        title: 'Test 3',
        listening: {
          title: '听力 Listening',
          intro: '共4部分，40题，约30分钟',
          sections: [
            {
              part: 'Part 1',
              context: '一名顾客打电话向餐厅预订生日聚会',
              type: '表格填空',
              questions: [
                { q: 'Customer name:', a: 'Helen Brooks' },
                { q: 'Number of guests:', a: '18' },
                { q: 'Date of party:', a: '14th July' },
                { q: 'Time of party:', a: '7.30pm' },
                { q: 'Preferred room:', a: 'the Garden Room' },
                { q: 'Menu chosen:', a: 'Set Menu B' },
                { q: 'Special requirement:', a: 'vegetarian options' },
                { q: 'Deposit paid (£):', a: '50' },
                { q: 'Contact phone:', a: '07762 884913' },
                { q: 'Confirmation sent by:', a: 'email' }
              ]
            },
            {
              part: 'Part 2',
              context: '博物馆向导向访客介绍科学博物馆及馆内布局',
              type: '选择题 + 地图/布局标注',
              questions: [
                { q: 'The science museum was founded in', a: 'B. 1992' },
                { q: 'The museum\'s most popular exhibit is', a: 'C. the space gallery' },
                { q: 'Free guided tours are offered', a: 'A. every weekend' },
                { q: 'The price of an adult ticket is', a: 'B. £12' },
                { q: 'Location of the gift shop:', a: 'ground floor, near the main entrance' },
                { q: 'Location of the cafe:', a: 'top floor' },
                { q: 'Location of the planetarium:', a: 'basement' },
                { q: 'Location of the temporary exhibition hall:', a: 'first floor, east wing' },
                { q: 'The museum closes at', a: 'C. 6pm' },
                { q: 'Parking for visitors is', a: 'A. free' }
              ]
            },
            {
              part: 'Part 3',
              context: '两名学生与导师讨论城市公园益处的研究项目',
              type: '选择题 + 匹配题',
              questions: [
                { q: 'The research topic is', a: 'B. the benefits of urban parks' },
                { q: 'Their main research method is', a: 'C. questionnaires and interviews' },
                { q: 'They will study this number of parks:', a: 'A. four' },
                { q: 'The final report is due on', a: 'D. 30th June' },
                { q: 'Their target respondents are', a: 'B. local residents' },
                { q: 'Who will conduct the interviews?', a: 'Anna' },
                { q: 'Who will analyse the data?', a: 'Ben' },
                { q: 'Who will write the conclusion?', a: 'Anna' },
                { q: 'Who will present the findings to the class?', a: 'Ben' },
                { q: 'Who will liaise with the local council?', a: 'the tutor' }
              ]
            },
            {
              part: 'Part 4',
              context: '关于噪音污染对健康影响的学术讲座',
              type: '笔记填空',
              questions: [
                { q: 'Noise is measured in units called ___.', a: 'decibels' },
                { q: 'Exposure above ___ decibels can cause hearing loss.', a: '85' },
                { q: 'The ___ is the part of the ear most easily damaged.', a: 'cochlea' },
                { q: 'Noise pollution raises levels of the hormone ___.', a: 'cortisol' },
                { q: 'In cities, the main source of noise is ___.', a: 'traffic' },
                { q: 'Sleep disturbance can lead to ___ problems.', a: 'cardiovascular' },
                { q: 'Children in noisy areas may show slower ___ development.', a: 'language' },
                { q: 'One solution is better ___ standards for buildings.', a: 'insulation' },
                { q: 'Quiet zones have been introduced near ___.', a: 'hospitals' },
                { q: 'Individuals can protect their ears with ___.', a: 'earplugs' }
              ]
            }
          ]
        },
        reading: {
          title: '阅读 Reading',
          intro: '共3篇文章，40题，60分钟',
          passages: [
            {
              title: 'Passage 1: The Evolution of the Bicycle',
              difficulty: '中等',
              summary: '自行车的发展史：从早期双轮车到现代安全自行车',
              questions: [
                { type: '判断题', q: 'The first two-wheeled vehicle was invented in Germany.', a: 'TRUE' },
                { type: '判断题', q: 'Early bicycles could travel faster than horses.', a: 'FALSE - 早期自行车速度远不及马匹' },
                { type: '判断题', q: 'Women were banned from riding bicycles in the 19th century.', a: 'NOT GIVEN - 文中未提及禁止女性骑行' },
                { type: '填空题', q: 'The first two-wheeled vehicle was called the ___.', a: 'Draisine' },
                { type: '填空题', q: 'The ___ had pedals attached to its large front wheel.', a: 'penny-farthing' },
                { type: '填空题', q: 'The safety bicycle with equal-sized wheels appeared in the ___.', a: '1880s' }
              ]
            },
            {
              title: 'Passage 2: How the Brain Processes Language',
              difficulty: '中偏难',
              summary: '大脑如何处理语言：声音识别、意义构建与产出',
              questions: [
                { type: '段落标题匹配', q: 'Paragraph A', a: 'i. Recognising sounds' },
                { type: '段落标题匹配', q: 'Paragraph B', a: 'iii. Building meaning' },
                { type: '段落标题匹配', q: 'Paragraph C', a: 'ii. Producing speech' },
                { type: '段落标题匹配', q: 'Paragraph D', a: 'iv. The brain\'s flexibility' },
                { type: '选择题', q: 'When we hear a word, the brain first matches it to:', a: 'B. stored sound patterns' },
                { type: '填空题', q: 'The area that controls speech production is called ___ area.', a: 'Broca' }
              ]
            },
            {
              title: 'Passage 3: The Growing Problem of Space Debris',
              difficulty: '难',
              summary: '太空垃圾的成因、风险与国际治理努力',
              questions: [
                { type: 'Yes/No/Not Given', q: 'The amount of space debris has increased sharply since the 1960s.', a: 'YES' },
                { type: 'Yes/No/Not Given', q: 'All countries have agreed to remove their old satellites.', a: 'NO - 尚无全球强制清理协议' },
                { type: 'Yes/No/Not Given', q: 'Every satellite launched will eventually return to Earth safely.', a: 'NOT GIVEN' },
                { type: '选择题', q: 'A major source of debris is:', a: 'A. destroyed satellites' },
                { type: '选择题', q: 'Collisions in orbit are dangerous because they:', a: 'C. create more debris' },
                { type: '填空题', q: 'International guidelines ask operators to deorbit within ___ years.', a: '25' }
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
              prompt: 'The bar chart below shows the percentage of household waste recycled in a country in 2000 and 2020, by material (paper, glass, plastic, and garden waste). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
              modelAnswer: 'The bar chart compares the proportion of four types of household waste that were recycled in a country in 2000 and 2020.\n\nOverall, recycling rates rose for every material over the two decades, with paper and garden waste remaining the most recycled and plastic showing the largest improvement, although it stayed the least recycled in both years.\n\nIn 2000, paper had the highest recycling rate at around 45%, followed by garden waste at 40%, glass at 35%, and plastic at only 12%. By 2020, paper had increased to roughly 70%, garden waste to about 65%, and glass to 58%. The most striking change was plastic, which more than tripled to around 40%, reflecting stronger environmental regulation and better collection systems.\n\nAll four categories therefore followed an upward trend, and the gap between the best and worst recycled materials narrowed. Paper and garden waste continued to lead, while plastic, though much improved, still lagged behind the others in 2020.\n\nIn conclusion, the country made clear progress in recycling household waste between 2000 and 2020, with the largest relative gain in plastic and the highest overall rates for paper and garden waste.',
              tips: '注意两个年份的对比、各类材料的趋势、最高与最低值的描述'
            },
            {
              task: 'Task 2 (大作文)',
              type: '议论文',
              prompt: 'Some people think that governments should spend more money on public transport, while others believe that building new roads is more important. Discuss both views and give your own opinion. Write at least 250 words.',
              modelAnswer: 'How public money should be spent on transport is a frequent subject of debate. Some argue that investment should flow to public transport, while others maintain that new roads are the real priority. Both positions reflect genuine needs, and in my view a balance is required, though public transport deserves greater emphasis in crowded cities.\n\nThose who prioritise public transport point out that buses, trains, and metros move far more people per unit of space than private cars. Expanding these systems reduces congestion, lowers emissions, and gives mobility to people who cannot drive. In densely populated urban areas, where road space is scarce, a single new railway line can relieve pressure that dozens of new lanes could not. Supporters also note that public transport is more equitable, helping commuters who rely on it daily.\n\nOn the other hand, advocates of new roads argue that many regions, especially rural and suburban areas, have no viable alternative to cars. Businesses depend on efficient road freight, and congested highways cost time and money. They contend that without road expansion, economic growth stalls and existing roads simply become more gridlocked. For them, roads are basic infrastructure that underpins daily life.\n\nIn my opinion, the two are not strictly opposed. New roads can be useful where public transport is impractical, but in most cities the higher return comes from investing in mass transit, which addresses the root cause of congestion rather than accommodating more cars. The best policy combines a strong public-transport backbone with targeted road improvements where they are genuinely needed.\n\nIn conclusion, while both roads and public transport matter, governments in urbanised nations should tilt spending toward public transport, using limited road building to fill specific gaps rather than to expand car dependence.',
              tips: '注意"讨论双方+个人立场"结构、用"公交优先+针对性修路"的平衡视角收尾'
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
                { q: 'Let\'s talk about food. Do you enjoy cooking?', a: '参考回答: Yes, I do, though I\'m not very skilled. I like making simple pasta dishes and salads at weekends, because it feels relaxing and healthier than ordering takeaway.' },
                { q: 'What is a traditional dish from your country?', a: '参考回答: One well-known dish is dumplings, which families often make together during festivals. They can be steamed or fried, and everyone has a slightly different recipe passed down at home.' },
                { q: 'Do you prefer eating at home or in a restaurant?', a: '参考回答: I probably prefer eating at home for everyday meals, but I enjoy restaurants for special occasions, because the atmosphere and trying new cuisines make it feel like an experience.' },
                { q: 'Has your diet changed in recent years?', a: '参考回答: Yes, I eat more vegetables and less red meat than before, mainly for health reasons. I\'ve also started reading food labels, which I never used to do.' }
              ]
            },
            {
              part: 'Part 2: Long Turn (Cue Card)',
              cueCard: 'Describe a meal you enjoyed eating.\n\nYou should say:\n- what the meal was\n- where you ate it\n- who you were with\n- and explain why you enjoyed it.',
              modelAnswer: '参考回答:\n\nI\'d like to talk about a meal I had about a year ago at a small seaside restaurant with my family. It was a sunny Sunday, and we had driven two hours to the coast specifically to celebrate my mother\'s birthday.\n\nThe meal itself was grilled seafood: fresh fish, prawns, and squid, served with salad and local bread. What made it special was that the ingredients had clearly been caught that morning, so the flavours were clean and simple. We also shared a lemon tart for dessert, which was the perfect light finish.\n\nI was with my parents and my younger sister, and the mood was really warm. Because it was a rare occasion when we were all free at the same time, the conversation flowed easily, and we ended up staying at the table for nearly three hours, watching the waves.\n\nI enjoyed this meal for several reasons. First, the food was genuinely fresh and unpretentious, which I value more than fancy presentation. Second, the setting, with the sea breeze and the sound of gulls, made the whole experience feel like a short holiday. Most importantly, it was the company and the sense of togetherness that stayed with me. In a busy life, sharing a slow meal with family is something I increasingly treasure, and this particular lunch summed up exactly why.',
              tips: '注意按"是什么-在哪里-和谁-为什么"展开、加入感官细节与情感'
            },
            {
              part: 'Part 3: Discussion',
              questions: [
                { q: 'Why do you think food has become such an important part of culture?', a: '参考回答: Food is one of the most basic human needs, so every culture has developed its own ways of preparing it using local ingredients. Over time these habits become traditions that signal identity, bring communities together, and connect generations through shared recipes.' },
                { q: 'Do you think fast food has changed people\'s eating habits?', a: '参考回答: Definitely. Fast food is convenient and cheap, so it has made people eat more quickly and often less healthily. At the same time, busy schedules mean many see it as a necessary option, and home cooking has declined in some households as a result.' },
                { q: 'How can a country protect its traditional cuisine?', a: '参考回答: Education is key, teaching children to cook local dishes in schools. Government support for small producers, protection of geographical labels, and promoting food festivals can also keep traditional cuisine alive and valued rather than forgotten.' }
              ]
            }
          ]
        }
      },

      // =================== 剑19 Test 4 ===================
      {
        id: 4,
        title: 'Test 4',
        listening: {
          title: '听力 Listening',
          intro: '共4部分，40题，约30分钟',
          sections: [
            {
              part: 'Part 1',
              context: '一名顾客打电话报名周末烹饪课程',
              type: '表格填空',
              questions: [
                { q: 'Customer name:', a: 'James Whitfield' },
                { q: 'Course name:', a: 'Italian Cooking Class' },
                { q: 'Course date:', a: '22nd March' },
                { q: 'Number of places:', a: '2' },
                { q: 'Class duration:', a: '3 hours' },
                { q: 'Skill level:', a: 'beginner' },
                { q: 'Fee per person (£):', a: '45' },
                { q: 'Course includes:', a: 'ingredients and recipe book' },
                { q: 'Kitchen location:', a: 'Level 2, Block C' },
                { q: 'Payment method:', a: 'credit card' }
              ]
            },
            {
              part: 'Part 2',
              context: '自然保护区向导介绍园区布局与参观须知',
              type: '选择题 + 地图/布局标注',
              questions: [
                { q: 'The nature reserve was established in', a: 'B. 1985' },
                { q: 'The reserve is best known for its', a: 'A. birdwatching' },
                { q: 'Guided walks depart from', a: 'B. the visitor centre' },
                { q: 'Location of the lake:', a: 'north of the reserve' },
                { q: 'Location of the bird hide:', a: 'west side' },
                { q: 'Location of the cafe:', a: 'near the entrance' },
                { q: 'Location of the education centre:', a: 'south end' },
                { q: 'The adult entrance fee is', a: 'C. £8' },
                { q: 'The reserve is closed on', a: 'B. Mondays' },
                { q: 'Dogs in the reserve are', a: 'A. not allowed' }
              ]
            },
            {
              part: 'Part 3',
              context: '两名学生讨论新品饮料的市场营销作业',
              type: '选择题 + 匹配题',
              questions: [
                { q: 'The product they are promoting is', a: 'B. a new sports drink' },
                { q: 'Their target market is', a: 'C. teenagers' },
                { q: 'Their main research method is', a: 'A. focus groups' },
                { q: 'The planned launch date is', a: 'D. September' },
                { q: 'Their marketing budget is', a: 'B. £5,000' },
                { q: 'Who is responsible for market research?', a: 'Lucy' },
                { q: 'Who is responsible for advertising?', a: 'Tom' },
                { q: 'Who manages the social media campaign?', a: 'Lucy' },
                { q: 'Who controls the budget?', a: 'Tom' },
                { q: 'Who will present the findings?', a: 'both students' }
              ]
            },
            {
              part: 'Part 4',
              context: '关于水稻起源与种植的学术研究讲座',
              type: '笔记填空',
              questions: [
                { q: 'Rice was first domesticated in ___.', a: 'China' },
                { q: 'It feeds about ___ of the world\'s population.', a: 'half' },
                { q: 'The two main types are indica and ___.', a: 'japonica' },
                { q: 'Rice grows best in ___ fields.', a: 'flooded' },
                { q: 'Planting time is set by the ___ season.', a: 'monsoon' },
                { q: 'Modern varieties arose during the ___ Revolution.', a: 'Green' },
                { q: 'A serious pest is the rice ___ borer.', a: 'stem' },
                { q: 'Flooded fields can release the gas ___.', a: 'methane' },
                { q: 'Scientists are breeding ___ resistant strains.', a: 'drought' },
                { q: 'Rice is a staple food across ___.', a: 'Asia' }
              ]
            }
          ]
        },
        reading: {
          title: '阅读 Reading',
          intro: '共3篇文章，40题，60分钟',
          passages: [
            {
              title: 'Passage 1: The Global Journey of Coffee',
              difficulty: '中等',
              summary: '咖啡从埃塞俄比亚到全球饮料的发展史',
              questions: [
                { type: '判断题', q: 'Coffee was first discovered in Ethiopia.', a: 'TRUE' },
                { type: '判断题', q: 'Coffee reached Europe before it reached the Middle East.', a: 'FALSE - 咖啡先传入中东' },
                { type: '判断题', q: 'The first coffee house in London was opened by a woman.', a: 'NOT GIVEN - 文中未提及店主性别' },
                { type: '填空题', q: 'Coffee plants are native to the ___ region of Africa.', a: 'Ethiopian' },
                { type: '填空题', q: 'The first European coffee houses appeared in ___.', a: 'Italy' },
                { type: '填空题', q: 'Today the largest coffee producer is ___.', a: 'Brazil' }
              ]
            },
            {
              title: 'Passage 2: The Benefits of Urban Trees',
              difficulty: '中偏难',
              summary: '城市树木对降温、健康与生物多样性的益处',
              questions: [
                { type: '段落标题匹配', q: 'Paragraph A', a: 'i. Cooling the city' },
                { type: '段落标题匹配', q: 'Paragraph B', a: 'iii. Health benefits' },
                { type: '段落标题匹配', q: 'Paragraph C', a: 'ii. Supporting wildlife' },
                { type: '选择题', q: 'Trees help reduce city temperatures mainly by:', a: 'A. providing shade and evapotranspiration' },
                { type: '填空题', q: 'Trees can lower air temperature by several ___.', a: 'degrees' }
              ]
            },
            {
              title: 'Passage 3: Artificial Intelligence in Medicine',
              difficulty: '难',
              summary: '人工智能在医疗诊断、药物研发与伦理中的角色',
              questions: [
                { type: 'Yes/No/Not Given', q: 'AI can already diagnose some diseases more accurately than doctors.', a: 'YES' },
                { type: 'Yes/No/Not Given', q: 'All hospitals have fully replaced humans with AI systems.', a: 'NO - AI仍主要辅助人类医生' },
                { type: 'Yes/No/Not Given', q: 'Every government has passed laws on medical AI.', a: 'NOT GIVEN' },
                { type: '选择题', q: 'AI is especially useful in medicine for:', a: 'B. analysing medical images' },
                { type: '选择题', q: 'A major concern about medical AI is:', a: 'C. data privacy' },
                { type: '填空题', q: 'AI can speed up ___ discovery by screening compounds.', a: 'drug' }
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
              type: '图表描述 - 表格',
              prompt: 'The table below shows the average daily temperature and monthly rainfall in two cities, A and B, over a year. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
              modelAnswer: 'The table compares average daily temperature and monthly rainfall in City A and City B across a full year.\n\nOverall, City A has a warmer and drier climate, with temperatures consistently higher and rainfall lower than City B, which experiences cooler weather and more frequent precipitation throughout the year.\n\nIn City A, average daily temperatures range from about 18°C in winter to 32°C in summer, while rainfall stays below 60 millimetres in every month, with the driest period in July at around 10 millimetres. City B, by contrast, remains cooler, between 6°C and 22°C, and receives markedly more rain, peaking at roughly 130 millimetres in November and never falling below 70 millimetres.\n\nThe contrast is therefore clear and consistent: City A is hot and arid, suited to those who prefer dry heat, whereas City B is mild and wet, with a climate that supports lush vegetation but demands rain preparedness.\n\nIn conclusion, the two cities differ sharply in both temperature and rainfall, with City A warmer and drier and City B cooler and wetter across all twelve months.',
              tips: '注意两个城市的温度与降雨对比、最高最低值、整体气候特征总结'
            },
            {
              task: 'Task 2 (大作文)',
              type: '议论文',
              prompt: 'Some people believe that universities should focus on academic subjects, while others think they should prepare students for the world of work. Discuss both views and give your own opinion. Write at least 250 words.',
              modelAnswer: 'The purpose of university education is debated between those who value pure academic study and those who want practical career preparation. Both views highlight real functions of higher education, and in my opinion the strongest universities integrate the two rather than choosing one.\n\nSupporters of academic focus argue that universities exist to pursue knowledge for its own sake. Subjects such as philosophy, mathematics, and history cultivate critical thinking, creativity, and a deep understanding of the world that cannot be reduced to job training. They warn that an overly vocational curriculum narrows the mind and leaves graduates unprepared for careers that do not yet exist. In their view, the ability to learn independently matters more than a specific skill.\n\nOn the other hand, those who emphasise employability point out that students and families invest heavily in degrees and expect a return. They argue that universities should teach applied skills, internships, and professional competencies so graduates can enter the workforce confidently. With rapid technological change, they say, relevance to the labour market is not a luxury but a necessity, and unemployed graduates represent a failure of the system.\n\nIn my view, the divide is false. A university that teaches only theory may leave students unready for work, while one obsessed with training produces narrow technicians. The best model embeds practical experience, such as projects and placements, within a rigorous academic framework. This way, students gain both the breadth of understanding and the applicable skills that modern economies reward.\n\nIn conclusion, universities should not sacrifice academic depth for employability or vice versa. By weaving career preparation into a strong scholarly foundation, they can educate graduates who are both thoughtful and capable.',
              tips: '注意"讨论双方+个人立场"结构、用"学术+实践融合"的整合视角收尾'
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
                { q: 'Let\'s talk about sport. Do you play any sports?', a: '参考回答: I play badminton once a week with some colleagues. It\'s easy to organise, good exercise, and fun, so it fits my schedule better than team sports that need more people.' },
                { q: 'Did you enjoy sport when you were a child?', a: '参考回答: Yes, very much. I spent most afternoons outside playing football or riding my bike, and sport was how I made most of my early friends at school.' },
                { q: 'Do you prefer watching or playing sport?', a: '参考回答: I prefer playing, because taking part feels more energising. But I do enjoy watching big events like the Olympics occasionally, especially with friends.' },
                { q: 'Do you think schools should give more time to sport?', a: '参考回答: Yes, I think so. Physical activity supports both health and concentration, and not every child enjoys academic subjects, so sport can build confidence in a different way.' }
              ]
            },
            {
              part: 'Part 2: Long Turn (Cue Card)',
              cueCard: 'Describe a sport or physical activity you would like to try.\n\nYou should say:\n- what the activity is\n- where you would do it\n- why you want to try it\n- and explain how you think it would benefit you.',
              modelAnswer: '参考回答:\n\nA physical activity I would really like to try is rock climbing, preferably at an indoor climbing centre near my home. I\'ve never done it before, but it has fascinated me ever since a friend showed me photos from a climbing trip.\n\nIf I took it up, I would start at an indoor wall rather than on a real cliff, because beginners need proper instruction and safety equipment. There is a well-rated centre in the city with courses for newcomers, so that is where I would begin, perhaps going once a week to build confidence.\n\nThe reason I want to try it is partly the challenge. Climbing looks like a full-body workout that also demands focus and problem-solving, which appeals to me more than repetitive gym exercises. I\'m also drawn to the sense of achievement people describe when they reach the top after a difficult route.\n\nI think it would benefit me in several ways. Physically, it would improve my strength and balance, which I don\'t get enough of at a desk job. Mentally, it could teach me to stay calm under pressure, since climbers must control their breathing and fear. Socially, it\'s often done with partners, so it might also expand my circle of friends. Altogether, rock climbing seems like an activity that is healthy, exciting, and personally rewarding, which is exactly what I look for in a new hobby.',
              tips: '注意描述"是什么-在哪里-为什么-益处"、加入挑战性与个人期待'
            },
            {
              part: 'Part 3: Discussion',
              questions: [
                { q: 'Why do some people dislike physical exercise?', a: '参考回答: Often it\'s a lack of time or energy after work, but for many it\'s also a bad early experience, such as competitive PE classes that felt humiliating. If exercise is framed as fun rather than performance, more people might enjoy it.' },
                { q: 'Do you think professional sport receives too much attention?', a: '参考回答: In some ways yes, because elite sport gets huge media coverage and money while grassroots participation is underfunded. But sport also unites communities and inspires healthy habits, so its prominence isn\'t entirely negative.' },
                { q: 'How can governments encourage people to be more active?', a: '参考回答: They can invest in public facilities like parks and cycle lanes, make sport classes affordable, and run awareness campaigns. Crucially, urban planning that makes walking and cycling convenient has the widest long-term impact.' }
              ]
            }
          ]
        }
      }
    ]
  };

  // 将数据添加到 IELTS_DATA
  IELTS_DATA.books.forEach(function (b) {
    if (extraTests[b.id]) {
      extraTests[b.id].forEach(function (t) {
        b.tests.push(t);
      });
    }
  });
})();
