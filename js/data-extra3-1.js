/**
 * 剑桥雅思 15/16 补充真题数据 - Test 3 & Test 4
 * 为剑15、剑16 各生成 2 套完整的 Test（Test 3、Test 4）
 * 题目为雅思考试格式原创练习内容，话题与各自 Test 1/Test 2 完全不同
 * 数据结构与 data.js / data-extra2-*.js 完全一致
 */

(function () {
  var extraTests = {

    // ========== 剑15 Test 3 ==========
    15: [
      {
        id: 3,
        title: 'Test 3',
        listening: {
          title: '听力 Listening',
          intro: '共4部分，40题，约30分钟',
          sections: [
            {
              part: 'Part 1',
              context: '一位顾客打电话向自行车旅游公司预约河滨一日骑行游',
              type: '表格填空',
              audioScript: 'Receptionist: Good morning, Greenwheel Bike Tours, this is Kate speaking. How can I help you?',
              questions: [
                { q: 'Tour name:', a: 'Riverside Day Tour' },
                { q: 'Customer name:', a: 'James Walker' },
                { q: 'Bike type:', a: 'mountain bike' },
                { q: 'Number of riders:', a: '2' },
                { q: 'Date:', a: '14th July' },
                { q: 'Start time:', a: '9.30 am' },
                { q: 'Duration:', a: '4 hours' },
                { q: 'Difficulty level:', a: 'easy' },
                { q: 'Helmet included:', a: 'yes' },
                { q: 'Total price:', a: '60' }
              ]
            },
            {
              part: 'Part 2',
              context: '城市野生动物园的导览广播',
              type: '选择题 + 地图标注',
              audioScript: 'Hello everyone, and welcome to Greenfield City Wildlife Park! My name is Tom, and I will give you a short orientation.',
              questions: [
                { q: 'The wildlife park was opened to the public in', a: 'C. 1995 (C选项)' },
                { q: 'The park is best known for its', a: 'A. free-roaming deer (A选项)' },
                { q: 'The bird show takes place', a: 'B. twice daily (B选项)' },
                { q: 'Location of the visitor centre:', a: 'near the main entrance (地图标注B)' },
                { q: 'Location of the deer enclosure:', a: 'north side of the park (地图标注D)' },
                { q: 'Location of the cafe:', a: 'by the lake (地图标注F)' }
              ]
            },
            {
              part: 'Part 3',
              context: '两名学生讨论关于城市绿地的课程项目',
              type: '选择题 + 匹配题',
              audioScript: 'Tutor: So, your geography project is about green spaces in the city. Tell me your plan.',
              questions: [
                { q: 'The topic of their project is', a: 'B. urban green spaces (B选项)' },
                { q: 'They will collect data by', a: 'C. surveys and measurements (C选项)' },
                { q: 'The deadline for the first draft:', a: 'F. end of March' },
                { q: 'Anna is responsible for:', a: 'D. writing the report' },
                { q: 'Ben is responsible for:', a: 'A. taking photographs' }
              ]
            },
            {
              part: 'Part 4',
              context: '关于巧克力历史的学术讲座',
              type: '笔记填空',
              audioScript: 'Today we explore the long and surprising history of chocolate, from a bitter drink to a global sweet.',
              questions: [
                { q: 'Chocolate is made from the ___ plant.', a: 'cacao' },
                { q: 'The cacao tree is native to ___ .', a: 'Central America' },
                { q: 'The earliest known users of cacao were the ___ .', a: 'Maya' },
                { q: 'Cacao beans were once used as ___ .', a: 'money' },
                { q: 'Chocolate was first brought to Europe by the ___ .', a: 'Spanish' },
                { q: 'The first chocolate house in Europe opened in ___ .', a: 'London' },
                { q: 'In the 1800s, the ___ made chocolate into a solid bar.', a: 'Dutch' },
                { q: 'Milk chocolate was developed by ___ .', a: 'Daniel Peter' },
                { q: 'Today, the largest producer of cocoa is ___ .', a: 'Ivory Coast' },
                { q: 'Dark chocolate is valued for its ___ .', a: 'antioxidants' }
              ]
            }
          ]
        },
        reading: {
          title: '阅读 Reading',
          intro: '共3篇文章，40题，60分钟',
          passages: [
            {
              title: 'Passage 1: The History of Paper',
              difficulty: '中等',
              summary: '纸张从中国发明到传遍世界的历程',
              questions: [
                { type: '判断题', q: 'Paper was invented in ancient Egypt.', a: 'FALSE - 最早由中国发明' },
                { type: '判断题', q: 'The technique of papermaking reached Europe by the 12th century.', a: 'TRUE' },
                { type: '判断题', q: 'The world\'s first paper was made from wood pulp.', a: 'FALSE - 以树皮麻头为原料' },
                { type: '判断题', q: 'All modern paper is still made by hand.', a: 'NOT GIVEN - 文中未提及全部手工制造' },
                { type: '填空题', q: 'Paper was first made during the ___ dynasty.', a: 'Han' },
                { type: '填空题', q: 'The inventor credited with papermaking is ___ .', a: 'Cai Lun' },
                { type: '填空题', q: 'Paper spread westward along the ___ Road.', a: 'Silk' }
              ]
            },
            {
              title: 'Passage 2: The Science of Sleep',
              difficulty: '中偏难',
              summary: '睡眠的阶段、对健康的作用以及改善方法',
              questions: [
                { type: '段落标题匹配', q: 'Paragraph A', a: 'ii. The stages of sleep' },
                { type: '段落标题匹配', q: 'Paragraph B', a: 'v. Why sleep matters for health' },
                { type: '段落标题匹配', q: 'Paragraph C', a: 'i. How to sleep better' },
                { type: '选择题', q: 'During REM sleep, the brain is:', a: 'B. highly active (B选项)' },
                { type: '选择题', q: 'Chronic lack of sleep is linked to:', a: 'C. weakened immunity (C选项)' },
                { type: '填空题', q: 'Most adults need about ___ hours of sleep.', a: '8' }
              ]
            },
            {
              title: 'Passage 3: The Impact of Social Media on Society',
              difficulty: '难',
              summary: '社交媒体对社会沟通、心理健康与信息的影响',
              questions: [
                { type: 'Yes/No/Not Given', q: 'Social media has reduced face-to-face communication among young people.', a: 'YES' },
                { type: 'Yes/No/Not Given', q: 'All social media platforms are harmful to mental health.', a: 'NO - 影响因使用方式而异' },
                { type: 'Yes/No/Not Given', q: 'Every government has introduced laws on social media.', a: 'NOT GIVEN - 文中未说各国都已立法' },
                { type: '选择题', q: 'One positive effect of social media is:', a: 'B. faster information sharing (B选项)' },
                { type: '选择题', q: 'The writer suggests the key to healthy use is:', a: 'C. self-awareness and balance (C选项)' },
                { type: '摘要填空', q: 'Responsible use requires ___ and ___ .', a: 'critical thinking / self-control' }
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
              prompt: 'The bar chart below shows average weekly household spending (in pounds) on five categories in a country in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
              modelAnswer: 'The bar chart compares average weekly household spending across five categories in one country in 2010 and 2020.\n\nOverall, spending rose in every category over the decade, with housing and food showing the largest absolute increases. Transport and leisure also grew, while communication costs, though still the smallest, more than doubled.\n\nIn 2010, households spent about 180 pounds on housing, the highest figure. Food cost around 90 pounds, transport 70, leisure 50, and communication only 20. By 2020, housing had climbed to roughly 250 pounds and food to 120, making them clearly the dominant expenses.\n\nTransport rose to about 95 pounds and leisure to 75. The most notable proportional change was in communication, which increased from 20 to 45 pounds as smartphones and internet use spread. The gap between the largest and smallest categories widened, reflecting rising living costs.\n\nIn summary, while all areas became more expensive, housing and food accounted for the bulk of household budgets in both years, and communication showed the fastest relative growth.',
              tips: '对比两年五类支出、突出最高与增长最快项、用过去时描述'
            },
            {
              task: 'Task 2 (大作文)',
              type: '议论文',
              prompt: 'Some people believe that universities should focus on academic subjects, while others think they should prepare students directly for the world of work. Discuss both views and give your own opinion. Write at least 250 words.',
              modelAnswer: 'Universities have long been debated as places of pure learning or as training grounds for careers. Some argue they should teach academic subjects, while others believe job preparation is their real duty. In my view, a good university does both.\n\nThose who favour academic focus contend that universities exist to pursue knowledge for its own sake. Subjects such as philosophy, history, and mathematics train the mind and preserve culture, regardless of immediate employment. They warn that narrowing education to vocational skills may lower standards and produce graduates who lack depth, adaptability, and the ability to think critically in unfamiliar situations.\n\nOn the other hand, supporters of career preparation point out that students and families invest heavily in degrees and expect returns. They argue that universities should teach practical skills, offer internships, and work with employers so graduates can enter the job market smoothly. In a competitive economy, they say, irrelevant study wastes both time and money.\n\nIn my opinion, the two aims are not opposed. The best programmes weave employability into a strong academic base, for example by adding projects, placements, and communication training to traditional courses. A graduate who is both thoughtful and employable serves society better than one who is only one or the other.\n\nIn conclusion, universities should not choose between academic and vocational goals. By combining rigorous study with practical preparation, they can develop knowledgeable, capable, and work-ready citizens.',
              tips: '讨论双方观点、提出整合立场、至少250词'
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
                { q: 'Let\'s talk about food. What kind of food do you like?', a: '参考回答: I enjoy a mix of foods, but I especially like Mediterranean dishes, salads, and grilled fish. I also enjoy trying street food when I travel, though I try to keep it balanced.' },
                { q: 'Who usually cooks in your home?', a: '参考回答: My mother does most of the cooking, but I help on weekends. My father rarely cooks, though he makes a good breakfast on holidays.' },
                { q: 'Do you prefer eating at home or in restaurants?', a: '参考回答: I prefer eating at home because it is healthier and cheaper, but I do enjoy restaurants for special occasions and to try new cuisines.' },
                { q: 'Has your diet changed in recent years?', a: '参考回答: Yes. I eat far less fast food now and more vegetables, partly because I have become more aware of health and partly because cooking at home is more relaxing.' }
              ]
            },
            {
              part: 'Part 2: Long Turn (Cue Card)',
              cueCard: 'Describe a restaurant you enjoyed visiting.\n\nYou should say:\n- where it was\n- what kind of food it served\n- who you went with\n- and explain why you enjoyed it.',
              modelAnswer: '参考回答:\n\nI would like to describe a small restaurant I visited about a year ago in a coastal town. It was called The Blue Crab, and it was located near the harbour, just a short walk from the bus station where I arrived.\n\nThe restaurant specialised in seafood, especially freshly caught fish, grilled octopus, and a local shellfish soup that the owner was famous for. Although it looked modest from outside, the inside was warm and welcoming, with wooden tables and friendly staff.\n\nI went there with two close friends during a weekend trip. We had booked a table by the window so we could watch the boats. We ordered several dishes to share, which made the meal feel like a small feast, and we spent nearly two hours talking and laughing.\n\nWhat I enjoyed most was the freshness of the food and the relaxed atmosphere. Because the ingredients came straight from the morning market, every dish tasted clean and bright. The owner even came to our table to explain how the soup was made, which made us feel like guests rather than customers. Altogether, it was one of those simple meals that stays in your memory long after the trip ends.',
              tips: '按地点-食物-同伴-原因展开、加入感官细节与个人感受'
            },
            {
              part: 'Part 3: Discussion',
              questions: [
                { q: 'Why do you think food culture is important to a country?', a: '参考回答: Food culture reflects a nation\'s history, climate, and values, and it brings people together. Traditional dishes are a source of pride and identity, and they attract tourists who want an authentic experience of a place.' },
                { q: 'How has tourism changed local food in many places?', a: '参考回答: Tourism can improve local food by creating demand and reviving recipes, but it can also make dishes less authentic when they are simplified for foreign tastes. The challenge is to benefit from visitors while keeping traditions genuine.' },
                { q: 'Do you think people will cook less in the future?', a: '参考回答: Possibly, as busy lifestyles and delivery apps make eating out easier. But I also think there is a counter-movement of people wanting to cook for health and pleasure, so I expect both trends to continue side by side.' }
              ]
            }
          ]
        }
      },

      // ========== 剑15 Test 4 ==========
      {
        id: 4,
        title: 'Test 4',
        listening: {
          title: '听力 Listening',
          intro: '共4部分，40题，约30分钟',
          sections: [
            {
              part: 'Part 1',
              context: '一位女士打电话向酒店预订生日聚会场地',
              type: '表格填空',
              audioScript: 'Receptionist: Good evening, The Grand Hotel, this is Lucy. How may I help you?',
              questions: [
                { q: 'Event type:', a: 'birthday party' },
                { q: 'Customer name:', a: 'Helen Carter' },
                { q: 'Number of guests:', a: '30' },
                { q: 'Date:', a: '8th November' },
                { q: 'Room booked:', a: 'Grand Hall' },
                { q: 'Start time:', a: '6pm' },
                { q: 'Catering option:', a: 'buffet' },
                { q: 'Deposit required:', a: '100' },
                { q: 'Total cost:', a: '450' },
                { q: 'Contact phone:', a: '07890 112233' }
              ]
            },
            {
              part: 'Part 2',
              context: '铁路博物馆的导览广播',
              type: '选择题 + 地图标注',
              audioScript: 'Welcome to the National Railway Museum. I am your guide, Peter, and I will help you find your way around.',
              questions: [
                { q: 'The museum was founded in', a: 'B. 1975 (B选项)' },
                { q: 'The oldest exhibit is a', a: 'C. steam locomotive (C选项)' },
                { q: 'Guided tours run', a: 'A. every hour (A选项)' },
                { q: 'Location of the ticket office:', a: 'at the main entrance (地图标注B)' },
                { q: 'Location of the model train room:', a: 'on the first floor (地图标注D)' },
                { q: 'Location of the cafe:', a: 'behind the gift shop (地图标注F)' }
              ]
            },
            {
              part: 'Part 3',
              context: '两名学生与导师讨论一项心理学实验作业',
              type: '选择题 + 匹配题',
              audioScript: 'Tutor: Right, let\'s hear about your psychology experiment on memory and attention.',
              questions: [
                { q: 'The experiment studies', a: 'B. memory and attention (B选项)' },
                { q: 'The participants are', a: 'C. university students (C选项)' },
                { q: 'Their hypothesis is that', a: 'E. music improves focus' },
                { q: 'Lucy\'s task in the project:', a: 'D. recruiting participants' },
                { q: 'Mark\'s task in the project:', a: 'F. analysing results' }
              ]
            },
            {
              part: 'Part 4',
              context: '关于文字发展历史的学术讲座',
              type: '笔记填空',
              audioScript: 'Today\'s lecture traces the history of writing, from marks on clay to the screens we read from now.',
              questions: [
                { q: 'The earliest writing appeared in ___ .', a: 'Mesopotamia' },
                { q: 'It was first used for ___ .', a: 'record-keeping' },
                { q: 'The Sumerians wrote on ___ .', a: 'clay tablets' },
                { q: 'Their script is called ___ .', a: 'cuneiform' },
                { q: 'Egyptian writing used ___ .', a: 'hieroglyphs' },
                { q: 'The invention of ___ made books portable.', a: 'paper' },
                { q: 'The printing press was invented by ___ in the 1400s.', a: 'Gutenberg' },
                { q: 'Moveable type was invented earlier in ___ .', a: 'China' },
                { q: 'Today, most writing is ___ .', a: 'digital' },
                { q: 'Literacy rates are ___ than in the past.', a: 'higher' }
              ]
            }
          ]
        },
        reading: {
          title: '阅读 Reading',
          intro: '共3篇文章，40题，60分钟',
          passages: [
            {
              title: 'Passage 1: The History of Chocolate',
              difficulty: '中等',
              summary: '巧克力从中美洲饮品到全球甜食的传播史',
              questions: [
                { type: '判断题', q: 'Chocolate was first consumed as a bitter drink.', a: 'TRUE' },
                { type: '判断题', q: 'The cacao tree grows naturally in Europe.', a: 'FALSE - 原产中美洲' },
                { type: '判断题', q: 'Sugar was added to chocolate from the beginning.', a: 'FALSE - 欧洲人后来加糖' },
                { type: '判断题', q: 'Chocolate is the most popular flavour worldwide.', a: 'NOT GIVEN - 文中未做比较' },
                { type: '填空题', q: 'Cacao was first used by people in ___ .', a: 'Mesoamerica' },
                { type: '填空题', q: 'Cacao beans were once used as ___ .', a: 'money' },
                { type: '填空题', q: 'Milk chocolate was first created in ___ .', a: 'Switzerland' }
              ]
            },
            {
              title: 'Passage 2: The Psychology of Decision Making',
              difficulty: '中偏难',
              summary: '决策心理学：情绪、习惯与改善方法',
              questions: [
                { type: '段落标题匹配', q: 'Paragraph A', a: 'iii. How emotions affect choices' },
                { type: '段落标题匹配', q: 'Paragraph B', a: 'v. The role of habits' },
                { type: '段落标题匹配', q: 'Paragraph C', a: 'i. Improving decisions' },
                { type: '选择题', q: 'People often rely on mental shortcuts called:', a: 'B. heuristics (B选项)' },
                { type: '选择题', q: 'One way to decide better is to:', a: 'C. gather more information (C选项)' },
                { type: '填空题', q: 'Stress can lead to ___ decisions.', a: 'poor' }
              ]
            },
            {
              title: 'Passage 3: The Future of Work',
              difficulty: '难',
              summary: '工作的未来：自动化、远程办公与终身学习',
              questions: [
                { type: 'Yes/No/Not Given', q: 'Automation will eliminate all human jobs.', a: 'NO - 多数工作会被改变而非消失' },
                { type: 'Yes/No/Not Given', q: 'Remote work increased significantly after 2020.', a: 'YES' },
                { type: 'Yes/No/Not Given', q: 'Every country offers the same worker protection.', a: 'NOT GIVEN - 文中未称各国一致' },
                { type: '选择题', q: 'The main benefit of automation is:', a: 'B. higher productivity (B选项)' },
                { type: '选择题', q: 'The writer believes the future needs:', a: 'C. lifelong learning (C选项)' },
                { type: '摘要填空', q: 'Workers need flexibility, training and ___ .', a: 'adaptability / support' }
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
              prompt: 'The graph below shows the number of international tourists visiting a country (in millions) in three categories from 2005 to 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
              modelAnswer: 'The line graph illustrates international tourist arrivals in a country, divided into three purpose groups, between 2005 and 2020.\n\nOverall, leisure tourism grew steadily and stayed the largest category, while visiting friends and relatives rose moderately. Business travel increased until around 2015 and then declined.\n\nIn 2005, leisure tourists numbered about 10 million, rising to roughly 20 million by 2020. The visiting-friends-and-relatives group grew from 3 million to about 6 million over the same period. Business travel began at 5 million, peaked near 8 million in 2015, then fell back to around 5.5 million by 2020, likely due to virtual meetings.\n\nThe clearest pattern is the steady rise of leisure travel and the volatility of business travel. By 2020, leisure made up more than half of all arrivals, underlining its dominance.\n\nIn summary, although all three categories fluctuated, leisure and family visits drove long-term growth, while business travel became less central to inbound tourism.',
              tips: '描述三条线趋势、指出峰值与转折、总体总结'
            },
            {
              task: 'Task 2 (大作文)',
              type: '议论文',
              prompt: 'Some people think that the best way to reduce crime is to give longer prison sentences, while others believe education and social programmes are more effective. Discuss both views and give your own opinion. Write at least 250 words.',
              modelAnswer: 'Reducing crime is a priority for every society, yet there is disagreement about the best method. Some advocate longer prison sentences, while others favour education and social support. Both approaches have merit, and I believe a balanced strategy works best.\n\nSupporters of tougher sentencing argue that prison removes dangerous offenders from the streets and deters others from committing crimes. When punishments are certain and lengthy, they claim, potential criminals think twice. Long sentences also give victims a sense of justice and protect the public in the short term.\n\nHowever, critics point out that prisons often fail to reform offenders. Many former prisoners reoffend because they lack education, jobs, and support on release. They argue that prevention through education, youth programmes, and community services addresses the root causes of crime, such as poverty and lack of opportunity, and is therefore more effective and cheaper over time.\n\nIn my view, the two are complementary. Firm sentencing is necessary for serious and violent crime, but it should be paired with rehabilitation, training, and social programmes that reduce the urge to offend in the first place. A system that only punishes without preventing simply cycles offenders through prison.\n\nIn conclusion, the most effective response to crime combines proportionate punishment with investment in education and social support, tackling both the symptoms and the causes of criminal behaviour.',
              tips: '讨论双方、提出惩罚+预防的组合立场、至少250词'
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
                { q: 'Let\'s talk about where you live. Do you like your home?', a: '参考回答: Yes, I do. I live in a small flat with my family, and although it is not large, it is comfortable and close to my workplace, which saves me a lot of commuting time.' },
                { q: 'What do you like most about your neighbourhood?', a: '参考回答: I like that it is quiet but has everything nearby, a park, a market, and a few cafes. I can walk to most places, which makes daily life easy.' },
                { q: 'Would you like to move to a different place?', a: '参考回答: Sometimes I dream of living near the sea, but realistically I am happy where I am. Moving is expensive and stressful, and my current area suits my needs well.' },
                { q: 'How has your home changed since you were a child?', a: '参考回答: It has changed a lot. We now have better heating, faster internet, and more electronics, but the sense of being a family home has stayed the same.' }
              ]
            },
            {
              part: 'Part 2: Long Turn (Cue Card)',
              cueCard: 'Describe a neighbour you know well.\n\nYou should say:\n- who the neighbour is\n- how long you have known them\n- what you usually do together\n- and explain why you like this neighbour.',
              modelAnswer: '参考回答:\n\nI would like to talk about my neighbour, Mrs. Thompson, who lives next door. She is in her seventies, retired, and has been my neighbour for about six years, ever since my family moved into this building.\n\nI first met her when she brought us a plate of homemade biscuits to welcome us. Since then we have spoken almost every day, usually in the corridor or in the small garden downstairs. We often chat about the weather, her garden, and sometimes about books, because she reads a great deal.\n\nWhat we usually do together is tend the shared garden. She grows tomatoes and herbs, and I help her water the plants and carry the heavy pots. In return, she often shares vegetables with my mother and tells us stories about the neighbourhood when it was younger.\n\nI like Mrs. Thompson because she is kind, patient, and genuinely interested in others. She never complains, even when the building is noisy, and she always has a warm word. Knowing her makes me feel that I belong here, and I have learned from her that small daily kindnesses matter. She is, in many ways, like a grandmother to me.',
              tips: '描述人物、相识时间、共同活动与喜爱原因、使用现在/过去时混合'
            },
            {
              part: 'Part 3: Discussion',
              questions: [
                { q: 'Why is a sense of community important in cities?', a: '参考回答: A sense of community gives people support and belonging, which reduces loneliness and stress. In big cities where life can feel anonymous, knowing neighbours builds trust and makes streets safer and friendlier.' },
                { q: 'How can neighbours help each other more?', a: '参考回答: Simple things like sharing tools, watching each other\'s homes, or checking on the elderly make a difference. Community events and online groups for the building also help people connect without much effort.' },
                { q: 'Do you think people are less neighbourly than in the past?', a: '参考回答: In many places, yes, because busy lives and private screens keep us apart. But I also see new forms of community online and among shared-interest groups, so neighbourliness has changed rather than disappeared.' }
              ]
            }
          ]
        }
      }
    ],

    // ========== 剑16 Test 3 ==========
    16: [
      {
        id: 3,
        title: 'Test 3',
        listening: {
          title: '听力 Listening',
          intro: '共4部分，40题，约30分钟',
          sections: [
            {
              part: 'Part 1',
              context: '一名学生电话报名西班牙语晚间课程',
              type: '表格填空',
              audioScript: 'Coordinator: Good morning, Language Centre, this is Sofia. How can I help you?',
              questions: [
                { q: 'Course name:', a: 'Spanish Evening Course' },
                { q: 'Student name:', a: 'Olivia Smith' },
                { q: 'Level:', a: 'beginner' },
                { q: 'Day of class:', a: 'Tuesday' },
                { q: 'Class time:', a: '6.30pm' },
                { q: 'Course length:', a: '12 weeks' },
                { q: 'Course fee:', a: '220' },
                { q: 'Materials included:', a: 'textbook' },
                { q: 'Classroom:', a: 'Room 7' },
                { q: 'Start date:', a: '5th October' }
              ]
            },
            {
              part: 'Part 2',
              context: '森林保护区的导览广播',
              type: '选择题 + 地图标注',
              audioScript: 'Hello and welcome to Oakwood Forest Reserve. I am Ranger Joe, and I will give you a quick orientation.',
              questions: [
                { q: 'The reserve was established in', a: 'C. 1982 (C选项)' },
                { q: 'The reserve is famous for its', a: 'A. ancient trees (A选项)' },
                { q: 'The guided night walk lasts', a: 'B. 2 hours (B选项)' },
                { q: 'Location of the information centre:', a: 'at the park entrance (地图标注B)' },
                { q: 'Location of the waterfall trail:', a: 'on the western side (地图标注D)' },
                { q: 'Location of the picnic area:', a: 'beside the river (地图标注F)' }
              ]
            },
            {
              part: 'Part 3',
              context: '两名学生讨论环境科学的野外考察',
              type: '选择题 + 匹配题',
              audioScript: 'Tutor: So for your environmental science field trip, you are studying a wetland. What is the plan?',
              questions: [
                { q: 'The field trip destination is', a: 'B. a wetland (B选项)' },
                { q: 'The main aim is to study', a: 'C. water quality (C选项)' },
                { q: 'Data will be collected using', a: 'E. water testing kits' },
                { q: 'Chloe\'s job in the group:', a: 'D. taking photos' },
                { q: 'Sam\'s job in the group:', a: 'F. writing the report' }
              ]
            },
            {
              part: 'Part 4',
              context: '关于疫苗历史的学术讲座',
              type: '笔记填空',
              audioScript: 'Today\'s lecture looks at the history of vaccines, one of medicine\'s greatest successes.',
              questions: [
                { q: 'The first successful vaccine was for ___ .', a: 'smallpox' },
                { q: 'It was developed by ___ in 1796.', a: 'Edward Jenner' },
                { q: 'Jenner used material from ___ .', a: 'cowpox' },
                { q: 'Vaccines work by training the ___ .', a: 'immune system' },
                { q: 'The ___ declared smallpox eradicated by 1980.', a: 'WHO' },
                { q: 'Polio cases have fallen by about ___ .', a: '99%' },
                { q: 'Some vaccines contain a ___ version of the virus.', a: 'weakened' },
                { q: 'Vaccines are usually given as an ___ .', a: 'injection' },
                { q: 'Misinformation can lower ___ rates.', a: 'vaccination' },
                { q: 'Modern research uses ___ technology.', a: 'mRNA' }
              ]
            }
          ]
        },
        reading: {
          title: '阅读 Reading',
          intro: '共3篇文章，40题，60分钟',
          passages: [
            {
              title: 'Passage 1: The History of the Book',
              difficulty: '中等',
              summary: '书籍从卷轴到印刷本再到电子书的发展历程',
              questions: [
                { type: '判断题', q: 'The first books were written on papyrus scrolls.', a: 'TRUE' },
                { type: '判断题', q: 'The codex format was invented in China.', a: 'FALSE - 源于罗马' },
                { type: '判断题', q: 'The Gutenberg Bible was printed in the 15th century.', a: 'TRUE' },
                { type: '判断题', q: 'E-books have completely replaced printed books.', a: 'NOT GIVEN - 文中未称完全取代' },
                { type: '填空题', q: 'The earliest known books appeared in ___ .', a: 'Egypt' },
                { type: '填空题', q: 'The printing press spread rapidly after ___ .', a: '1450' },
                { type: '填空题', q: 'Today, ___ books are a growing market.', a: 'electronic' }
              ]
            },
            {
              title: 'Passage 2: The Benefits of Exercise',
              difficulty: '中偏难',
              summary: '运动对身体、心理的好处及保持活跃的方法',
              questions: [
                { type: '段落标题匹配', q: 'Paragraph A', a: 'ii. Physical benefits of exercise' },
                { type: '段落标题匹配', q: 'Paragraph B', a: 'iv. Exercise and mental health' },
                { type: '段落标题匹配', q: 'Paragraph C', a: 'vi. How to stay active' },
                { type: '选择题', q: 'Regular exercise is shown to:', a: 'B. lower the risk of disease (B选项)' },
                { type: '选择题', q: 'Even short activity can improve:', a: 'C. mood (C选项)' },
                { type: '填空题', q: 'Adults should aim for about ___ minutes of activity a day.', a: '30' }
              ]
            },
            {
              title: 'Passage 3: The Economics of Renewable Energy',
              difficulty: '难',
              summary: '可再生能源的经济学：成本、增长与转型条件',
              questions: [
                { type: 'Yes/No/Not Given', q: 'Renewable energy is now cheaper than coal in many places.', a: 'YES' },
                { type: 'Yes/No/Not Given', q: 'All countries have met their climate targets.', a: 'NO - 多数尚未达标' },
                { type: 'Yes/No/Not Given', q: 'Every household can afford solar panels.', a: 'NOT GIVEN - 文中未称全部可负担' },
                { type: '选择题', q: 'The fastest-growing renewable source is:', a: 'B. solar power (B选项)' },
                { type: '选择题', q: 'The writer says the transition requires:', a: 'C. government policy (C选项)' },
                { type: '摘要填空', q: 'A clean grid needs investment, storage and ___ .', a: 'infrastructure / political will' }
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
              prompt: 'The pie charts below show how people in one country spent their free time in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
              modelAnswer: 'The pie charts compare how people in one country spent their leisure time in 2010 and 2020.\n\nOverall, watching television remained the most common activity, but its share fell, while using the internet and playing games grew sharply. Reading and socialising both declined slightly over the decade.\n\nIn 2010, watching TV accounted for 42 per cent of free time, the largest slice. Socialising with friends stood at 20 per cent, reading at 15 per cent, and internet use only 13 per cent. Other activities made up the remaining 10 per cent.\n\nBy 2020, the pattern had shifted. TV watching dropped to 30 per cent, while internet use more than doubled to 28 per cent. Playing video games, grouped within digital leisure, also rose. Socialising fell to 17 per cent and reading to 10 per cent, with other activities at 15 per cent.\n\nThe data shows a clear move from traditional, passive leisure such as TV and books toward interactive digital pastimes, with screens taking a much larger share of people\'s free time by 2020.',
              tips: '比较两个饼图份额变化、突出最大与增长最快项、至少150词'
            },
            {
              task: 'Task 2 (大作文)',
              type: '议论文',
              prompt: 'Some people believe that the best way to protect the environment is for people to use less plastic, while others think that governments should take the lead. Discuss both views and give your own opinion. Write at least 250 words.',
              modelAnswer: 'Plastic pollution is a pressing global problem, and there is debate about who should act first. Some argue that individuals must use less plastic, while others believe governments must lead. In my view, both are necessary and reinforce each other.\n\nThose who emphasise personal responsibility note that consumer choices drive demand. When people refuse single-use plastic, carry reusable bottles, and choose unwrapped goods, companies notice and adapt. Individual action is immediate, requires no new law, and builds habits that spread through communities and influence others.\n\nHowever, critics argue that individuals alone cannot solve a systemic issue. Most plastic waste comes from industry and poor waste management, not from personal choices. Without government bans on certain plastics, better recycling systems, and rules for producers, individual efforts remain marginal. Only the state can set standards and fund the infrastructure needed at scale.\n\nIn my opinion, waiting for only one side is ineffective. Personal action creates pressure and proves alternatives work, while government policy makes those alternatives easy and affordable for everyone. The most successful cases, such as plastic bag charges, combine a small individual change with a clear legal nudge.\n\nIn conclusion, protecting the environment from plastic requires both citizen action and government leadership. Neither is sufficient alone, but together they can sharply reduce waste and change norms.',
              tips: '讨论双方、提出个人+政府协同立场、至少250词'
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
                { q: 'Let\'s talk about learning. Do you enjoy learning new things?', a: '参考回答: Yes, I do, though I learn best when the topic interests me. I recently learned to cook a few dishes online, and the sense of progress was very satisfying.' },
                { q: 'What did you find difficult to learn?', a: '参考回答: I found learning to drive quite stressful at first, because there were so many things to coordinate at once. With practice it became natural, but the beginning was hard.' },
                { q: 'Do you prefer to learn alone or with others?', a: '参考回答: It depends. For languages I like a class because others motivate me, but for practical skills like cooking I prefer learning alone at my own pace.' },
                { q: 'Do you think learning stops after school?', a: '参考回答: Not at all. I believe learning is lifelong. Even now I pick up small skills from videos and colleagues, and I expect to keep learning as the world changes.' }
              ]
            },
            {
              part: 'Part 2: Long Turn (Cue Card)',
              cueCard: 'Describe a skill you would like to learn in the future.\n\nYou should say:\n- what the skill is\n- why you want to learn it\n- how you might learn it\n- and explain how this skill could be useful to you.',
              modelAnswer: '参考回答:\n\nA skill I would really like to learn in the future is playing the guitar. I have wanted to for years, but I never found the time while studying, and now I feel ready to finally start.\n\nThe main reason I want to learn it is simply the joy of music. I love acoustic songs, and the idea of being able to play a familiar tune myself, or sing along with friends, is very appealing. It also seems like a healthy hobby that helps me relax after work.\n\nI would probably learn by taking a short evening course at a local music school, then practising at home with online tutorials. I think a teacher is important at the start, because posture and finger placement are easy to get wrong alone. After a few months I could join a beginner group to stay motivated.\n\nThis skill would be useful in several ways. Socially, it gives me something to share at gatherings, and it could help me meet people who enjoy music. Personally, it offers a break from screens and a creative outlet that reduces stress. Even if I never perform, the quiet satisfaction of improving would make the effort worthwhile.\n\nIn short, learning guitar would bring me pleasure, connection, and balance, which is why it is high on my list of future skills.',
              tips: '描述技能、动机、学习方式与用途、用将来时'
            },
            {
              part: 'Part 3: Discussion',
              questions: [
                { q: 'Why do some people find it hard to learn new skills as adults?', a: '参考回答: Adults often fear looking foolish, have less free time, and worry about failing. Unlike children, they also carry habits that are hard to change, so the early stage of learning can feel uncomfortable and slow.' },
                { q: 'How can schools better prepare students for lifelong learning?', a: '参考回答: Schools can teach how to learn, not just facts, by encouraging questions, projects, and self-direction. If students enjoy the process and know how to find information, they will keep learning long after exams end.' },
                { q: 'Do you think online learning will replace classrooms?', a: '参考回答: I doubt it will fully replace them. Online learning is convenient and cheap, but classrooms offer feedback, teamwork, and discipline that screens cannot easily provide. The future is more likely a blend of both.' }
              ]
            }
          ]
        }
      },

      // ========== 剑16 Test 4 ==========
      {
        id: 4,
        title: 'Test 4',
        listening: {
          title: '听力 Listening',
          intro: '共4部分，40题，约30分钟',
          sections: [
            {
              part: 'Part 1',
              context: '一名顾客致电旅行社预订哥斯达黎加生态游',
              type: '表格填空',
              audioScript: 'Agent: Good morning, Sunrise Travel, this is Daniel. How can I help you?',
              questions: [
                { q: 'Destination:', a: 'Costa Rica' },
                { q: 'Customer name:', a: 'Robert Lee' },
                { q: 'Number of people:', a: '2' },
                { q: 'Departure date:', a: '12th March' },
                { q: 'Duration:', a: '10 days' },
                { q: 'Accommodation:', a: 'eco-lodge' },
                { q: 'Transport:', a: 'flight and transfer' },
                { q: 'Price per person:', a: '1200' },
                { q: 'Insurance:', a: 'included' },
                { q: 'Booking reference:', a: 'TR-7782' }
              ]
            },
            {
              part: 'Part 2',
              context: '雕塑公园的导览广播',
              type: '选择题 + 地图标注',
              audioScript: 'Welcome to Riverside Sculpture Park. My name is Anna, and I will give you a short orientation.',
              questions: [
                { q: 'The sculpture park opened to the public in', a: 'B. 2001 (B选项)' },
                { q: 'The most famous work is by', a: 'C. a local artist (C选项)' },
                { q: 'The park closes at', a: 'A. 6pm (A选项)' },
                { q: 'Location of the entrance:', a: 'at the south gate (地图标注B)' },
                { q: 'Location of the fountain square:', a: 'in the centre (地图标注D)' },
                { q: 'Location of the cafe:', a: 'in the north corner (地图标注F)' }
              ]
            },
            {
              part: 'Part 3',
              context: '两名学生讨论一份商业案例分析作业',
              type: '选择题 + 匹配题',
              audioScript: 'Tutor: So your business case study is about a food company. What did you find?',
              questions: [
                { q: 'The company in the case study is in', a: 'B. the food industry (B选项)' },
                { q: 'The main problem the company faces is', a: 'C. falling sales (C选项)' },
                { q: 'Their proposed solution is', a: 'E. online marketing' },
                { q: 'Emma\'s part of the work:', a: 'D. financial analysis' },
                { q: 'Jack\'s part of the work:', a: 'F. the presentation' }
              ]
            },
            {
              part: 'Part 4',
              context: '关于食糖历史的学术讲座',
              type: '笔记填空',
              audioScript: 'Today we trace the surprising history of sugar, once called white gold and now a global commodity.',
              questions: [
                { q: 'Sugar was first produced from ___ .', a: 'sugarcane' },
                { q: 'Its earliest cultivation was in ___ .', a: 'India' },
                { q: 'Sugar reached Europe via ___ traders.', a: 'Arab' },
                { q: 'In the 1500s, plantations grew in the ___ .', a: 'Caribbean' },
                { q: 'Sugar was once called ___ .', a: 'white gold' },
                { q: 'The slave trade was linked to ___ production.', a: 'sugar' },
                { q: 'Beet sugar was first developed in ___ .', a: 'Prussia' },
                { q: 'Today, the biggest user of sugar is the ___ industry.', a: 'food' },
                { q: 'Too much sugar causes ___ .', a: 'health problems' },
                { q: 'Alternatives include ___ sweeteners.', a: 'artificial' }
              ]
            }
          ]
        },
        reading: {
          title: '阅读 Reading',
          intro: '共3篇文章，40题，60分钟',
          passages: [
            {
              title: 'Passage 1: The History of Silk',
              difficulty: '中等',
              summary: '丝绸从中国发明、垄断到传遍世界的历程',
              questions: [
                { type: '判断题', q: 'Silk was first discovered and used in China.', a: 'TRUE' },
                { type: '判断题', q: 'For many centuries, only China knew how to make silk.', a: 'TRUE' },
                { type: '判断题', q: 'Silkworms are a type of butterfly.', a: 'FALSE - 是蚕蛾幼虫' },
                { type: '判断题', q: 'Synthetic silk is used in all clothing today.', a: 'NOT GIVEN - 文中未称全部使用' },
                { type: '填空题', q: 'Silk is produced from the ___ of the silkworm.', a: 'cocoon' },
                { type: '填空题', q: 'Silk reached the West via the ___ Road.', a: 'Silk' },
                { type: '填空题', q: 'The silk fibre is mainly composed of ___ .', a: 'protein' }
              ]
            },
            {
              title: 'Passage 2: The Science of Language Acquisition',
              difficulty: '中偏难',
              summary: '语言习得科学：儿童母语、二语学习与年龄因素',
              questions: [
                { type: '段落标题匹配', q: 'Paragraph A', a: 'ii. How children learn language' },
                { type: '段落标题匹配', q: 'Paragraph B', a: 'iv. Learning a second language' },
                { type: '段落标题匹配', q: 'Paragraph C', a: 'vi. Age and language learning' },
                { type: '选择题', q: 'Children acquire language mainly through:', a: 'B. exposure and interaction (B选项)' },
                { type: '选择题', q: 'Adults can still learn languages by:', a: 'C. regular practice (C选项)' },
                { type: '填空题', q: 'The best age to start language learning is thought to be ___ .', a: 'early childhood' }
              ]
            },
            {
              title: 'Passage 3: The Future of Education',
              difficulty: '难',
              summary: '教育的未来：在线学习、灵活性与混合模式',
              questions: [
                { type: 'Yes/No/Not Given', q: 'Online learning gives students more flexibility.', a: 'YES' },
                { type: 'Yes/No/Not Given', q: 'Online courses are easier than classroom courses.', a: 'NO - 需要更强自律' },
                { type: 'Yes/No/Not Given', q: 'All schools will close within ten years.', a: 'NOT GIVEN - 文中未称学校将关闭' },
                { type: '选择题', q: 'A key advantage of online learning is:', a: 'B. access for remote students (B选项)' },
                { type: '选择题', q: 'The writer predicts education will be:', a: 'C. a blend of online and in-person (C选项)' },
                { type: '摘要填空', q: 'Good learning needs motivation, access and ___ .', a: 'support / interaction' }
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
              prompt: 'The bar chart below shows the percentage of people using five different modes of transport to commute to work in a city in 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
              modelAnswer: 'The bar chart compares the share of commuters using five transport modes in a city in 2000 and 2020.\n\nOverall, car use fell while public transport and cycling grew, showing a clear shift toward greener commuting. Walking stayed roughly stable.\n\nIn 2000, cars accounted for about 50 per cent of commutes, the largest share. Buses stood at 20 per cent, trains at 12 per cent, cycling at 5 per cent, and walking at 13 per cent. By 2020, car use had dropped to 38 per cent, while buses rose to 24 per cent and trains to 18 per cent.\n\nCycling showed the most striking growth, increasing from 5 per cent to 14 per cent as the city added bike lanes. Walking remained around 12 per cent. The combined share of buses, trains, and cycling clearly overtook the car by 2020.\n\nIn summary, the city moved away from private cars toward public and active transport over the two decades, reflecting both policy changes and environmental awareness.',
              tips: '对比两年五种交通方式、突出汽车下降与骑行增长、用过去时'
            },
            {
              task: 'Task 2 (大作文)',
              type: '议论文',
              prompt: 'Some people think that public museums and art galleries should be free to enter, while others believe visitors should pay. Discuss both views and give your own opinion. Write at least 250 words.',
              modelAnswer: 'Museums and galleries preserve a society\'s heritage, and there is debate about whether entry should be free. Some say access should be open to all, while others believe payment is fair. In my view, a mixed model is best.\n\nSupporters of free entry argue that culture is a public good. When entry is free, everyone, including low-income families and students, can benefit, not just those who can pay. Free access also encourages repeat, informal visits and strengthens shared identity. They note that the educational value of broad access outweighs ticket income.\n\nOn the other hand, those who favour charges point out that museums are costly to run. Conservation, security, and staffing require steady funds, and tickets help cover these costs, reducing pressure on public budgets. They also argue that those who use the service directly should contribute, leaving tax money for essential services like health and education.\n\nIn my opinion, the best approach is compromise. Major national museums could offer free general admission, funded because they benefit society, while special exhibitions charge a fee to cover extra cost. Concessions for students, seniors, and locals keep cost from being a barrier.\n\nIn conclusion, while fees can support museums, the social value of wide access is greater; a system of free general entry with paid special shows serves the public best.',
              tips: '讨论双方、提出免费常设+收费特展的折中立场、至少250词'
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
                { q: 'Let\'s talk about travel. Do you enjoy travelling?', a: '参考回答: Yes, I do, though I cannot travel as often as I would like. I prefer places with nature or history, and I enjoy discovering how other people live.' },
                { q: 'What kind of transport do you prefer when travelling?', a: '参考回答: I like trains because they are comfortable and let me see the landscape. For short trips I cycle or walk, but for long distances flying is sometimes necessary.' },
                { q: 'Have you travelled to another country?', a: '参考回答: Yes, a few times. I visited neighbouring countries by bus and train, and each trip taught me something about different customs and food.' },
                { q: 'Do you think travel is easier now than in the past?', a: '参考回答: In many ways yes, because of online booking, maps, and translation apps. But it can also feel less adventurous when everything is planned in advance.' }
              ]
            },
            {
              part: 'Part 2: Long Turn (Cue Card)',
              cueCard: 'Describe a journey you remember well.\n\nYou should say:\n- where you went\n- how you travelled\n- who you went with\n- and explain why this journey was memorable.',
              modelAnswer: '参考回答:\n\nI would like to describe a train journey I took two years ago from my city to the mountains in the north. It was an overnight trip with my sister, and it turned out to be one of my favourite memories.\n\nWe travelled by train, which took about nine hours. We booked a small cabin with two beds so we could sleep, and we spent the evening by the window watching the plains give way to hills. My sister and I played cards, shared snacks, and talked for hours, which is rare in our busy lives.\n\nWhen we woke up, the train was climbing through forests and mist, and by morning we reached a small station surrounded by snow-tipped peaks. The air was crisp, and the silence after the city was striking. We spent three days walking, visiting a lake, and meeting friendly locals at a guesthouse.\n\nThis journey was memorable for several reasons. First, the slow travel itself felt special, a contrast to rushed flights. Second, sharing it with my sister strengthened our bond. Finally, the landscape was so different from home that it refreshed my mind completely. I still smile when I see the photos from that trip.',
              tips: '按目的地-交通-同伴-原因展开、加入感官与情感细节'
            },
            {
              part: 'Part 3: Discussion',
              questions: [
                { q: 'How does travel affect young people?', a: '参考回答: Travel broadens the mind, builds confidence, and teaches independence, especially for young people who travel without family. It also builds tolerance by exposing them to different ways of life, though it can be costly and is not equally available to all.' },
                { q: 'Should governments invest more in public transport for tourists?', a: '参考回答: Yes, up to a point. Good trains and buses help both tourists and locals, reduce traffic, and spread the benefits of tourism beyond famous spots. But funds should be balanced with other public needs.' },
                { q: 'Do you think tourism always helps local economies?', a: '参考回答: Not always. While tourism brings money and jobs, it can raise prices for residents and harm the environment if unmanaged. The gains are real only when income reaches local people and growth is kept sustainable.' }
              ]
            }
          ]
        }
      }
    ]
  };

  // 将数据添加到 IELTS_DATA（剑15/16 的 Test 3、Test 4）
  IELTS_DATA.books.forEach(function (b) {
    if (extraTests[b.id]) {
      extraTests[b.id].forEach(function (t) {
        b.tests.push(t);
      });
    }
  });
})();
