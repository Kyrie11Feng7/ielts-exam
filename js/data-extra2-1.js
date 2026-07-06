/**
 * 剑桥雅思 11/12/13 补充真题数据 - Test 2
 * 为剑11、剑12、剑13 各生成 1 套完整的 Test 2
 * 题目为雅思考试格式原创练习内容，话题与各自 Test 1 完全不同
 */

(function () {
  var extraTests = {

    // ========== 剑11 Test 2 ==========
    11: {
      id: 2,
      title: 'Test 2',
      listening: {
        title: '听力 Listening',
        intro: '共4部分，40题，约30分钟',
        sections: [
          {
            part: 'Part 1',
            context: '一位顾客打电话向健身中心预约私人训练课程',
            type: '表格填空',
            audioScript: 'Receptionist: Good morning, Peak Fitness Centre, how can I help you?',
            questions: [
              { q: 'Customer name:', a: 'Laura Bennett' },
              { q: 'Package chosen:', a: 'Personal Training Starter' },
              { q: 'Number of sessions:', a: '12 sessions' },
              { q: 'Session duration:', a: '60 minutes' },
              { q: 'Start date:', a: '5th September' },
              { q: 'Preferred time:', a: 'evenings (after 6pm)' },
              { q: 'Trainer assigned:', a: 'Mark Stevens' },
              { q: 'Monthly fee:', a: '95' },
              { q: 'Includes gym access:', a: 'yes, full access' },
              { q: 'Contact number:', a: '07984 221567' }
            ]
          },
          {
            part: 'Part 2',
            context: '社区活动中心开放日的广播介绍',
            type: '选择题 + 地图标注',
            audioScript: 'Welcome to the Greenfield Community Centre open day.',
            questions: [
              { q: 'The community centre was established in', a: 'B. 2008 (B选项)' },
              { q: 'This year\'s open day theme is', a: 'C. health and wellbeing (C选项)' },
              { q: 'The free trial class offered is', a: 'A. yoga (A选项)' },
              { q: 'Location of the fitness studio:', a: 'first floor, east wing (地图标注D)' },
              { q: 'Location of the cafe:', a: 'ground floor, near main entrance (地图标注B)' },
              { q: 'Location of the children\'s play area:', a: 'outdoor, behind the building (地图标注F)' }
            ]
          },
          {
            part: 'Part 3',
            context: '两名学生与导师讨论本地历史纪录片小组项目',
            type: '选择题 + 匹配题',
            audioScript: 'Tutor: So, you two are making a short documentary about local history. Tell me your plan.',
            questions: [
              { q: 'The documentary focuses on:', a: 'B. the old harbour district (B选项)' },
              { q: 'The main source material will be:', a: 'C. archived photographs and newspapers (C选项)' },
              { q: 'The estimated film length is:', a: 'A. 15 minutes (A选项)' },
              { q: 'Tom\'s role in the project:', a: 'F. interviewing local residents' },
              { q: 'Emma\'s role in the project:', a: 'D. editing and sound' }
            ]
          },
          {
            part: 'Part 4',
            context: '关于蜜蜂授粉作用的学术讲座',
            type: '笔记填空',
            audioScript: 'Today\'s lecture looks at the crucial role bees play in pollination and food production.',
            questions: [
              { q: 'Bees pollinate approximately ___ of the world\'s food crops.', a: '75%' },
              { q: 'A single honeybee can visit up to ___ flowers per day.', a: '5,000' },
              { q: 'The transfer of pollen between flowers is called', a: 'cross-pollination' },
              { q: 'Bees locate flowers using their', a: 'colour and scent' },
              { q: 'The global decline in bee numbers began in the', a: 'early 2000s' },
              { q: 'One cause is the loss of', a: 'wildflower habitats' },
              { q: 'Pesticides containing ___ are especially harmful.', a: 'neonicotinoids' },
              { q: 'Bees also pollinate crops that provide', a: 'fibre (e.g. cotton)' },
              { q: 'Urban gardens can give bees', a: 'nectar and shelter' },
              { q: 'Citizens can help by planting', a: 'bee-friendly flowers' }
            ]
          }
        ]
      },
      reading: {
        title: '阅读 Reading',
        intro: '共3篇文章，40题，60分钟',
        passages: [
          {
            title: 'Passage 1: The History of Maps and Cartography',
            difficulty: '中等',
            summary: '地图与制图学的发展历史：从古代泥板到现代投影',
            questions: [
              { type: '判断题', q: 'The first maps in human history were drawn by ancient Greek cartographers.', a: 'FALSE - 最早地图由巴比伦人制作' },
              { type: '判断题', q: 'Many medieval European maps placed Jerusalem at the centre of the world.', a: 'TRUE' },
              { type: '判断题', q: 'Digital mapping has completely replaced paper maps worldwide.', a: 'NOT GIVEN' },
              { type: '填空题', q: 'The oldest surviving world map was created in ancient ____.', a: 'Babylon' },
              { type: '填空题', q: 'Ptolemy\'s geographical work introduced the use of ____.', a: 'latitude and longitude (grid lines)' },
              { type: '填空题', q: 'The ____ projection, developed in 1569, remains vital for navigation.', a: 'Mercator' }
            ]
          },
          {
            title: 'Passage 2: The Benefits of Bilingualism',
            difficulty: '中偏难',
            summary: '双语能力对认知、大脑健康及社会文化的益处',
            questions: [
              { type: '段落标题匹配', q: 'Paragraph A', a: 'ii. Cognitive advantages of bilingualism' },
              { type: '段落标题匹配', q: 'Paragraph B', a: 'v. Bilingualism and brain health' },
              { type: '段落标题匹配', q: 'Paragraph C', a: 'i. Social and cultural benefits' },
              { type: '选择题', q: 'Bilingual people tend to perform better at:', a: 'B. multitasking and attention control' },
              { type: '选择题', q: 'Learning a second language may help to delay:', a: 'C. the onset of dementia' },
              { type: '填空题', q: 'Bilingual children often show greater ____ awareness.', a: 'metalinguistic' }
            ]
          },
          {
            title: 'Passage 3: Deep Sea Exploration',
            difficulty: '难',
            summary: '深海探索的科学价值、生态系统与保护挑战',
            questions: [
              { type: 'Yes/No/Not Given', q: 'The deep ocean has been almost entirely mapped by scientists.', a: 'NO - 大部分深海仍未探明' },
              { type: 'Yes/No/Not Given', q: 'Life around hydrothermal vents relies on sunlight for energy.', a: 'NO - 依赖化能合成' },
              { type: 'Yes/No/Not Given', q: 'All countries have agreed to protect the deep sea from mining.', a: 'NOT GIVEN' },
              { type: '选择题', q: 'The deepest point in the ocean is the:', a: 'A. Mariana Trench' },
              { type: '选择题', q: 'Bioluminescence in deep-sea creatures is mainly used for:', a: 'C. hunting and communication' },
              { type: '摘要填空', q: 'Protecting deep-sea ecosystems requires ____.', a: 'international cooperation' }
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
            prompt: 'The bar chart below shows the percentage of national energy generated from four renewable sources (hydro, wind, solar, and biomass) in a European country in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
            modelAnswer: 'The bar chart compares the proportion of a country\'s energy generated from four renewable sources in 2010 and 2020.\n\nOverall, the share of renewables grew substantially over the decade, with wind and solar showing the most dramatic increases, while hydro remained the largest single source throughout. Biomass contributed the least in both years.\n\nIn 2010, hydropower accounted for approximately 28% of renewable energy, the highest among the four sources. Wind followed at around 15%, while solar and biomass each contributed roughly 5%. By 2020, wind power had surged to about 32%, overtaking hydro at 30%. Solar power experienced the most remarkable growth, rising from 5% to 22%.\n\nBiomass, although still the smallest contributor, increased modestly from 5% to 9%. The combined contribution of the four sources clearly climbed, indicating a decisive shift toward cleaner energy.\n\nIn conclusion, the country significantly expanded its renewable capacity between 2010 and 2020, driven mainly by rapid growth in wind and solar generation.',
            tips: '注意两个年份的对比、各类能源的趋势、最高与最低值的描述'
          },
          {
            task: 'Task 2 (大作文)',
            type: '议论文',
            prompt: 'Some people believe that the best way to protect the environment is for individuals to make changes to their daily lives, while others think that only governments and large companies can make a difference. Discuss both views and give your own opinion. Write at least 250 words.',
            modelAnswer: 'Environmental protection is one of the defining challenges of our age, and there is ongoing debate about where responsibility should lie. While some argue that individual lifestyle changes are the key, others contend that only institutional action can produce meaningful results. In my view, both levels of action are necessary and mutually reinforcing.\n\nThose who emphasise personal responsibility point out that collective change begins with millions of individual choices. When people reduce waste, conserve energy, choose public transport, or adopt plant-based diets, the cumulative effect is substantial. Moreover, individual action raises awareness and creates social norms that encourage others to follow. Simple habits such as recycling and refusing single-use plastics can, across a population, significantly reduce environmental pressure.\n\nOn the other hand, critics note that individuals alone cannot address systemic problems. Large corporations and industrial activity are responsible for the majority of global emissions and pollution. Without government regulation, carbon pricing, and corporate accountability, individual efforts may be marginal. For instance, even the most conscientious consumer cannot prevent a factory from discharging toxins unless laws forbid it. Therefore, strong policy and corporate reform are indispensable.\n\nIn my opinion, the dichotomy is false. Individual action and institutional change feed into each other. Citizens who adopt greener habits create political demand for stronger environmental policies, while effective government regulation makes sustainable choices easier and more affordable for everyone. The most successful environmental strategies combine both: empowered individuals and responsive institutions.\n\nIn conclusion, protecting the environment requires action at every level. Individuals should embrace responsible daily habits, but governments and companies must provide the framework and incentives that make large-scale change possible.',
            tips: '注意讨论双方观点、避免极端立场、提出"个人+制度"协同的个人见解'
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
              { q: 'Let\'s talk about hobbies. Do you have any hobbies?', a: '参考回答: Yes, I do. My main hobby is photography. I started about three years ago when I got my first camera, and since then I\'ve enjoyed capturing landscapes and street scenes in my spare time.' },
              { q: 'How did you become interested in it?', a: '参考回答: It actually began by accident. A friend took me on a trip to the mountains, and I was frustrated that my phone couldn\'t capture the view. That pushed me to learn photography properly.' },
              { q: 'Do you prefer indoor or outdoor hobbies?', a: '参考回答: Definitely outdoor. I find that being outside, whether hiking or photographing nature, helps me relax and clears my mind after a busy week.' },
              { q: 'Do you think hobbies are important?', a: '参考回答: Absolutely. I think everyone needs an activity that isn\'t work or study. Hobbies give us balance, reduce stress, and can even help us meet like-minded people.' }
            ]
          },
          {
            part: 'Part 2: Long Turn (Cue Card)',
            cueCard: 'Describe a hobby you enjoy doing in your free time.\n\nYou should say:\n- what the hobby is\n- how you started it\n- how often you do it\n- and explain why you enjoy it.',
            modelAnswer: '参考回答:\n\nI\'d like to talk about photography, which has become my favourite hobby over the past few years.\n\nI first became interested in photography during a holiday with some friends. We visited a national park, and while they were taking quick phone snaps, I borrowed a friend\'s camera and was amazed by how much more detail it captured. That experience made me want to learn the craft properly, so I enrolled in a short weekend course and later bought my own entry-level camera.\n\nThese days, I practise photography at least twice a month. On weekends, I often wake up early to catch the morning light in the city or travel to nearby countryside. I also edit my photos on weekday evenings, which I find oddly relaxing. Occasionally, I join local photography walks organised by a community group.\n\nWhat I enjoy most about this hobby is the way it changes how I see the world. Because I\'m always looking for interesting light, shapes, and moments, I notice details I used to walk past without thinking. Photography has also encouraged me to spend more time outdoors and to slow down. On top of that, sharing my pictures with friends and on social media gives me a real sense of achievement. Finally, it\'s a hobby that combines creativity with technique, so there\'s always something new to learn, which keeps it exciting.',
            tips: '注意描述起始、频率、原因；用具体细节和个人感受展开'
          },
          {
            part: 'Part 3: Discussion',
            questions: [
              { q: 'Why do you think some people lose interest in their hobbies?', a: '参考回答: I think it usually happens when a hobby starts to feel like a duty rather than a pleasure. If people set unrealistic goals or compare themselves too much to others, the fun disappears. Busy schedules and changing life circumstances, such as starting a new job, can also push hobbies aside.' },
              { q: 'Do you think technology has changed people\'s hobbies?', a: '参考回答: Yes, significantly. On one hand, technology has made many hobbies more accessible, like editing photos or learning instruments through apps. On the other hand, screens now compete for our free time, and some traditional hobbies, such as board games or crafting, have declined among younger people.' },
              { q: 'Should schools help students develop hobbies?', a: '参考回答: I believe they should. Schools are in a perfect position to expose children to a wide range of activities before they form preferences. Hobbies built early can support mental health and even shape future careers, so encouraging them is a valuable investment in students\' well-being.' }
            ]
          }
        ]
      }
    },

    // ========== 剑12 Test 2 ==========
    12: {
      id: 2,
      title: 'Test 2',
      listening: {
        title: '听力 Listening',
        intro: '共4部分，40题，约30分钟',
        sections: [
          {
            part: 'Part 1',
            context: '顾客打电话向搬家公司预约搬家服务',
            type: '表格填空',
            audioScript: 'Agent: Good morning, QuickMove Removals, how can I help you?',
            questions: [
              { q: 'Customer name:', a: 'Daniel Carter' },
              { q: 'Move date:', a: '20th August' },
              { q: 'Property type:', a: 'two-bedroom flat' },
              { q: 'From address:', a: '15 Birch Lane' },
              { q: 'To address:', a: '8 Oak Court' },
              { q: 'Service level:', a: 'full packing service' },
              { q: 'Number of boxes provided:', a: '40' },
              { q: 'Insurance cover:', a: '2000' },
              { q: 'Total cost:', a: '450' },
              { q: 'Deposit required:', a: '90' }
            ]
          },
          {
            part: 'Part 2',
            context: '国家公园向导的入园介绍广播',
            type: '选择题 + 地图标注',
            audioScript: 'Hello and welcome to Lakeview National Park.',
            questions: [
              { q: 'The national park was established in', a: 'C. 1974 (C选项)' },
              { q: 'The park is best known for its', a: 'A. mountain lakes (A选项)' },
              { q: 'Guided walks depart from', a: 'B. the visitor centre (B选项)' },
              { q: 'Location of the camping site:', a: 'north shore of the lake (地图标注D)' },
              { q: 'Location of the waterfall:', a: 'eastern trail (地图标注F)' },
              { q: 'Location of the cafe:', a: 'near the main entrance (地图标注B)' }
            ]
          },
          {
            part: 'Part 3',
            context: '两名学生讨论学习一门外语的计划',
            type: '选择题 + 匹配题',
            audioScript: 'Tom: So we both want to learn a new language this year. Have you decided which one?',
            questions: [
              { q: 'The language they discuss learning is', a: 'B. Japanese (B选项)' },
              { q: 'The main difficulty mentioned is', a: 'C. the writing system (C选项)' },
              { q: 'Their preferred study method is', a: 'A. language exchange (A选项)' },
              { q: 'Tom\'s strength:', a: 'F. listening comprehension' },
              { q: 'Emma\'s strength:', a: 'D. speaking fluency' }
            ]
          },
          {
            part: 'Part 4',
            context: '关于茶的历史的学术讲座',
            type: '笔记填空',
            audioScript: 'Today\'s lecture traces the long and fascinating history of tea.',
            questions: [
              { q: 'Tea originated in ____.', a: 'southwest China' },
              { q: 'The earliest use of tea was as a', a: 'medicinal drink' },
              { q: 'Tea reached Europe via ____ in the 16th century.', a: 'Portuguese traders' },
              { q: 'The ____ Company dominated the early tea trade.', a: 'East India' },
              { q: 'After the 1830s, Britain began growing tea in', a: 'India' },
              { q: 'The traditional Japanese tea ceremony is called', a: 'chanoyu' },
              { q: 'Black tea is fully ____ during processing.', a: 'oxidised (fermented)' },
              { q: 'The world\'s largest tea producer today is', a: 'China' },
              { q: 'Green tea is prized for its', a: 'antioxidants' },
              { q: 'Afternoon tea was popularised by ____ in the 1840s.', a: 'the Duchess of Bedford' }
            ]
          }
        ]
      },
      reading: {
        title: '阅读 Reading',
        intro: '共3篇文章，40题，60分钟',
        passages: [
          {
            title: 'Passage 1: The Development of Glass',
            difficulty: '中等',
            summary: '玻璃制造技术的发展：从古代泥釉到现代浮法玻璃',
            questions: [
              { type: '判断题', q: 'Glass was first manufactured by the ancient Egyptians.', a: 'FALSE - 最早由美索不达米亚人制造' },
              { type: '判断题', q: 'Roman glassmakers developed the technique of blown glass.', a: 'TRUE' },
              { type: '判断题', q: 'Glass was used for windows in every ancient civilisation.', a: 'NOT GIVEN' },
              { type: '填空题', q: 'The earliest glass objects date from around ____ BCE.', a: '3500' },
              { type: '填空题', q: 'Venetian glassmakers of the ____ century were famous for their quality.', a: 'fifteenth (15th)' },
              { type: '填空题', q: 'Modern float glass was invented by ____ in 1959.', a: 'Pilkington' }
            ]
          },
          {
            title: 'Passage 2: The Science of Memory',
            difficulty: '中偏难',
            summary: '记忆的运作机制、遗忘因素与提升方法',
            questions: [
              { type: '段落标题匹配', q: 'Paragraph A', a: 'iii. How memories are formed' },
              { type: '段落标题匹配', q: 'Paragraph B', a: 'vi. Factors that cause forgetting' },
              { type: '段落标题匹配', q: 'Paragraph C', a: 'ii. Techniques to improve memory' },
              { type: '选择题', q: 'Short-term memory can typically hold about:', a: 'B. 7 items, plus or minus 2' },
              { type: '选择题', q: 'Sleep is important for memory because it:', a: 'C. consolidates memories' },
              { type: '填空题', q: 'Repeating information helps transfer it to ____ memory.', a: 'long-term' }
            ]
          },
          {
            title: 'Passage 3: The Impact of Tourism on Local Cultures',
            difficulty: '难',
            summary: '旅游业对地方文化的影响：机遇、风险与可持续路径',
            questions: [
              { type: 'Yes/No/Not Given', q: 'Tourism inevitably destroys local traditions wherever it develops.', a: 'NO - 也可能促进文化复兴' },
              { type: 'Yes/No/Not Given', q: 'Some communities have revived lost crafts because of tourist interest.', a: 'YES' },
              { type: 'Yes/No/Not Given', q: 'All popular tourist destinations suffer from severe overcrowding.', a: 'NOT GIVEN' },
              { type: '选择题', q: 'A major negative effect of mass tourism is:', a: 'B. the commercialisation of culture' },
              { type: '选择题', q: 'Sustainable tourism aims to:', a: 'D. benefit local communities' },
              { type: '摘要填空', q: 'Responsible tourism requires ____ and ____.', a: 'planning / community involvement' }
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
            prompt: 'The graph below shows the number of international tourists visiting a country (in millions) from 2010 to 2020, divided into three purpose categories: leisure, business, and visiting friends and relatives. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
            modelAnswer: 'The line graph illustrates the number of international tourist arrivals in a country, categorised by purpose, between 2010 and 2020.\n\nOverall, leisure tourism grew steadily and remained the dominant category, while business travel peaked around 2015 before declining. Visits to friends and relatives showed modest, stable growth.\n\nIn 2010, leisure tourists numbered approximately 12 million, rising consistently to about 22 million by 2020. Business travel started at 6 million, climbed to a peak of nearly 9 million around 2015, then fell to roughly 6.5 million by 2020, partly due to the rise of virtual meetings. The "visiting friends and relatives" category grew slowly from 4 million to 6 million over the decade.\n\nThe data indicates that leisure remained the main driver of inbound tourism, whereas business travel became more volatile. The overall upward trend suggests growing international connectivity despite fluctuations in specific segments.',
            tips: '注意三条线的趋势对比、峰值与转折点、整体总结'
          },
          {
            task: 'Task 2 (大作文)',
            type: '议论文',
            prompt: 'Some people think that schools should teach children how to be good members of society, while others believe that academic subjects are more important. Discuss both views and give your own opinion. Write at least 250 words.',
            modelAnswer: 'The purpose of schooling has long been debated, particularly whether schools should prioritise social education or academic subjects. Both perspectives highlight essential functions of education, and in my opinion a balanced curriculum should integrate the two.\n\nThose who argue for social education stress that schools shape citizens, not merely workers. Children spend a large part of their formative years in school, so it is the ideal place to cultivate values such as respect, responsibility, and cooperation. Learning how to contribute to society can reduce crime, strengthen communities, and prepare young people for family and civic life. Proponents also note that academic success alone does not guarantee a person will be ethical or socially responsible.\n\nConversely, supporters of academic focus contend that the core mission of schools is to transmit knowledge and skills. Subjects like mathematics, science, and languages build the intellectual foundation necessary for individual advancement and national development. They warn that diverting time to social training may lower educational standards and leave students underprepared for higher education and the job market. In an competitive global economy, strong academic results are seen as vital.\n\nIn my view, the two aims are complementary rather than conflicting. A school that teaches only facts but neglects character produces unbalanced individuals, while one that ignores academic rigour fails to equip students for life. The best systems weave social learning into academic subjects, for example through group projects, community service, and discussions of ethical issues within history or literature.\n\nIn conclusion, schools should not choose between academic and social education. By combining both, they can develop knowledgeable, capable, and responsible members of society.',
            tips: '注意"讨论双方+个人立场"结构、用整合视角收尾、避免非此即彼'
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
              { q: 'Let\'s talk about travel. Do you like travelling?', a: '参考回答: Yes, I really do. I try to take at least one trip a year, usually somewhere with nature or history. Travelling helps me relax and see how other people live.' },
              { q: 'What kind of places do you prefer to visit?', a: '参考回答: I prefer quiet places like lakes or small towns rather than busy cities. I find mountains and national parks especially refreshing because they\'re peaceful.' },
              { q: 'Do you prefer travelling alone or with others?', a: '参考回答: I enjoy both, but I probably prefer going with close friends. Sharing the experience is more fun, though travelling alone gives you total freedom over the schedule.' },
              { q: 'Have your travel habits changed in recent years?', a: '参考回答: Yes. I used to focus on famous landmarks, but now I care more about local culture and food. I also plan less and leave room for surprises.' }
            ]
          },
          {
            part: 'Part 2: Long Turn (Cue Card)',
            cueCard: 'Describe a memorable trip you have taken.\n\nYou should say:\n- where you went\n- who you went with\n- what you did there\n- and explain why it was memorable.',
            modelAnswer: '参考回答:\n\nI\'d like to describe a trip I took two years ago to a national park in the north of my country. It was a three-day trip with two of my closest friends, and it turned out to be one of the most memorable experiences I\'ve had.\n\nWe travelled there by train and then took a local bus to the park entrance. The plan was simple: hike during the day and stay in a small guesthouse at night. On the first day, we walked along a trail that led to a beautiful mountain lake, where the water was so clear it reflected the surrounding peaks. The second day was more challenging; we climbed to a viewpoint at sunrise, and the panorama was absolutely breathtaking.\n\nWhat made the trip special was not just the scenery but the atmosphere. Because there was no phone signal in most areas, we ended up talking for hours without distractions, something that rarely happens in daily life. We also met a local guide who told us stories about the region\'s history and wildlife, which made the place feel alive.\n\nI consider this trip memorable for several reasons. First, it was a rare chance to disconnect from technology and reconnect with nature and friends. Second, the sense of achievement after the difficult climb stayed with me for weeks. Finally, it reminded me how refreshing slow, simple travel can be compared with the usual rushed city routine. I still look back on those three days with a smile.',
            tips: '注意按"地点-同伴-活动-原因"展开、加入感官与个人感受细节'
          },
          {
            part: 'Part 3: Discussion',
            questions: [
              { q: 'How does tourism affect the environment?', a: '参考回答: Tourism has a double impact. On the negative side, heavy footfall damages fragile ecosystems, and flights increase carbon emissions. On the positive side, tourism revenue can fund conservation and make protected areas financially sustainable. The key is managing visitor numbers carefully.' },
              { q: 'Why do some people prefer staying at home rather than travelling?', a: '参考回答: Travelling can be expensive, tiring, and time-consuming. Some people also feel anxious in unfamiliar places or simply value the comfort of home. For them, relaxing nearby or enjoying hobbies may feel more rewarding than sightseeing.' },
              { q: 'Do you think technology makes travel easier or less authentic?', a: '参考回答: It definitely makes travel easier, with navigation, translation, and booking all on our phones. But it can reduce authenticity if we experience a place only through screens. I think the best approach is to use technology for practical help while still being present and open to real interaction.' }
            ]
          }
        ]
      }
    },

    // ========== 剑13 Test 2 ==========
    13: {
      id: 2,
      title: 'Test 2',
      listening: {
        title: '听力 Listening',
        intro: '共4部分，40题，约30分钟',
        sections: [
          {
            part: 'Part 1',
            context: '一位女士打电话报名艺术中心的绘画课程',
            type: '表格填空',
            audioScript: 'Coordinator: Good morning, Riverside Art Centre, how can I help you?',
            questions: [
              { q: 'Course name:', a: 'Watercolour Painting' },
              { q: 'Student name:', a: 'Sophie Morgan' },
              { q: 'Skill level:', a: 'beginner' },
              { q: 'Day of class:', a: 'Thursday' },
              { q: 'Class time:', a: '7pm - 9pm' },
              { q: 'Course length:', a: '10 weeks' },
              { q: 'Course fee:', a: '180' },
              { q: 'Materials included:', a: 'basic set' },
              { q: 'Studio location:', a: 'Room 4, Arts Block' },
              { q: 'Enrolment deadline:', a: '15th September' }
            ]
          },
          {
            part: 'Part 2',
            context: '古城步行游览的导览广播',
            type: '选择题 + 地图标注',
            audioScript: 'Good morning, everyone, and welcome to our walking tour of Old Mill Town.',
            questions: [
              { q: 'The town was founded in', a: 'B. the 12th century (B选项)' },
              { q: 'The old market square is known for its', a: 'C. medieval clock tower (C选项)' },
              { q: 'The walking tour lasts approximately', a: 'A. 90 minutes (A选项)' },
              { q: 'Location of the town museum:', a: 'north side of the square (地图标注D)' },
              { q: 'Location of the river bridge:', a: 'south end of town (地图标注F)' },
              { q: 'Location of the craft shops:', a: 'east lane (地图标注B)' }
            ]
          },
          {
            part: 'Part 3',
            context: '两名学生讨论一部电影的分析作业',
            type: '选择题 + 匹配题',
            audioScript: 'James: So for our film studies assignment, we need to analyse one film in depth.',
            questions: [
              { q: 'The film they analyse is a', a: 'C. documentary (C选项)' },
              { q: 'The central theme of the film is', a: 'B. climate change (B选项)' },
              { q: 'They will focus their analysis on', a: 'A. cinematography (A选项)' },
              { q: 'James\'s part of the analysis:', a: 'F. sound and music' },
              { q: 'Clara\'s part of the analysis:', a: 'D. editing and narrative structure' }
            ]
          },
          {
            part: 'Part 4',
            context: '关于珊瑚礁生态系统的学术讲座',
            type: '笔记填空',
            audioScript: 'Today\'s lecture examines coral reef ecosystems and the threats they face.',
            questions: [
              { q: 'Coral reefs cover about ___ of the ocean floor.', a: '1%' },
              { q: 'They are home to around ___ of all marine species.', a: '25%' },
              { q: 'Reefs are built by tiny animals called', a: 'polyps' },
              { q: 'The algae living inside coral are called', a: 'zooxanthellae' },
              { q: 'Coral gets much of its colour from these', a: 'algae' },
              { q: 'A major threat is ____ caused by warming seas.', a: 'coral bleaching' },
              { q: 'Another threat is ____ from coastal development.', a: 'pollution' },
              { q: 'The largest reef system is the ____ Reef.', a: 'Great Barrier' },
              { q: 'Reefs protect coastlines from', a: 'storm waves' },
              { q: 'Conservation requires ____ and local action.', a: 'marine protected areas' }
            ]
          }
        ]
      },
      reading: {
        title: '阅读 Reading',
        intro: '共3篇文章，40题，60分钟',
        passages: [
          {
            title: 'Passage 1: The History of the Postal System',
            difficulty: '中等',
            summary: '邮政系统的发展：从古代驿站到现代自动化分拣',
            questions: [
              { type: '判断题', q: 'The world\'s first state-run postal system was established by the Roman Empire.', a: 'FALSE - 波斯帝国更早建立' },
              { type: '判断题', q: 'Rowland Hill introduced the first adhesive postage stamp in Britain.', a: 'TRUE' },
              { type: '判断题', q: 'Email has completely replaced postal letters in every country.', a: 'NOT GIVEN' },
              { type: '填空题', q: 'The first adhesive postage stamp was the ____.', a: 'Penny Black' },
              { type: '填空题', q: 'In ancient Persia, messages were carried by ____ relays.', a: 'horse (mounted couriers)' },
              { type: '填空题', q: 'Modern postal services rely heavily on ____ sorting.', a: 'automated (machine)' }
            ]
          },
          {
            title: 'Passage 2: The Psychology of Happiness',
            difficulty: '中偏难',
            summary: '幸福感的心理学研究：关系、财富与助人行为',
            questions: [
              { type: '段落标题匹配', q: 'Paragraph A', a: 'iv. What research reveals about happiness levels' },
              { type: '段落标题匹配', q: 'Paragraph B', a: 'ii. The importance of relationships' },
              { type: '段落标题匹配', q: 'Paragraph C', a: 'vi. Money, helping others, and happiness' },
              { type: '选择题', q: 'Studies consistently link happiness most strongly to:', a: 'B. social connections' },
              { type: '选择题', q: 'After basic needs are met, extra income:', a: 'C. has only a limited effect on happiness' },
              { type: '填空题', q: 'Helping others can raise happiness through ____ behaviour.', a: 'altruistic (prosocial)' }
            ]
          },
          {
            title: 'Passage 3: The Impact of Climate Change on Oceans',
            difficulty: '难',
            summary: '气候变化对海洋的影响：升温、酸化与保护',
            questions: [
              { type: 'Yes/No/Not Given', q: 'Ocean temperatures have risen significantly in recent decades.', a: 'YES' },
              { type: 'Yes/No/Not Given', q: 'All fish species will easily adapt to warmer ocean water.', a: 'NO - 许多物种难以适应' },
              { type: 'Yes/No/Not Given', q: 'Every coastal city now has a plan to cope with sea-level rise.', a: 'NOT GIVEN' },
              { type: '选择题', q: 'Ocean acidification is mainly caused by:', a: 'A. CO2 absorbed from the atmosphere' },
              { type: '选择题', q: 'The greatest threat to coral reefs is:', a: 'B. rising sea temperatures' },
              { type: '摘要填空', q: 'Protecting oceans requires cutting ____ and ____.', a: 'emissions / pollution' }
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
            prompt: 'The pie charts below show the distribution of leisure time activities among adults in a country in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
            modelAnswer: 'The pie charts compare how adults in a country spent their leisure time in 2010 and 2020.\n\nOverall, watching television remained the most common activity in both years, but its share declined, while digital activities such as using the internet and playing games grew noticeably. Reading and socialising both decreased slightly.\n\nIn 2010, watching TV accounted for 40% of leisure time, the largest portion. Socialising with friends and family represented 22%, reading 15%, and internet use only 13%. Other activities made up the remaining 10%.\n\nBy 2020, the picture had shifted. TV watching fell to 30%, while internet use more than doubled to 28%. Playing video games, grouped under "other" or digital entertainment, also rose. Socialising dropped to 18% and reading to 10%. The "other" category stood at 14%.\n\nThe data suggests a clear movement from traditional, passive leisure such as TV and reading toward interactive digital pastimes over the decade.',
            tips: '注意两个饼图的主要份额变化、最大与最小项的对比'
          },
          {
            task: 'Task 2 (大作文)',
            type: '议论文',
            prompt: 'Some people think that advertising aimed at children should be banned, while others believe it is the parents\' responsibility to control what children see. Discuss both views and give your own opinion. Write at least 250 words.',
            modelAnswer: 'Advertising directed at children is a contentious issue, with some calling for an outright ban and others arguing that parental guidance is sufficient. Both positions raise valid concerns about the vulnerability of young people and the limits of regulation.\n\nSupporters of a ban argue that children lack the maturity to distinguish persuasion from information. Advertisements for sugary snacks, toys, and games can create unrealistic desires and place pressure on parents, while evidence links such marketing to childhood obesity and materialistic attitudes. Because children cannot defend themselves against sophisticated advertising techniques, proponents believe only a legal ban can offer real protection.\n\nOpponents, however, contend that banning advertising is excessive and impractical. They argue that responsibility lies with parents, who can limit screen time, discuss commercials with their children, and teach critical thinking. They also warn that a ban could extend state control too far into family life and unfairly restrict legitimate information about useful products, such as educational books or healthy foods.\n\nIn my opinion, a complete ban may be difficult to enforce in the digital age, yet some restrictions are necessary. The most balanced approach combines measured regulation, such as limiting advertising during children\'s programmes and requiring clear labelling, with parental education. Children need protection from exploitative marketing, but parents also need the tools and awareness to guide them.\n\nIn conclusion, neither a total ban nor total parental responsibility alone is sufficient. A partnership between sensible regulation and active parenting is the most effective way to shield children from harmful advertising.',
            tips: '注意"双方观点+个人平衡立场"、用"监管+家庭"协同收尾'
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
              { q: 'Let\'s talk about art. Do you enjoy art?', a: '参考回答: I do, yes, though I\'m not an artist myself. I enjoy visiting galleries and looking at paintings, especially landscapes and abstract works. Art helps me see the world differently.' },
              { q: 'Did you learn any art forms when you were young?', a: '参考回答: I took drawing classes for a few years as a child, and later learned a bit of piano. I wasn\'t especially talented, but I enjoyed the creative freedom it gave me.' },
              { q: 'Do you think art is important in society?', a: '参考回答: Definitely. Art reflects culture, provokes thought, and brings people together. Even simple things like public sculptures can make a city feel more human and welcoming.' },
              { q: 'Would you like to learn a new art form in the future?', a: '参考回答: Yes, I\'d love to try watercolour painting. It looks relaxing, and I think it would teach me to observe colours and light more carefully in everyday life.' }
            ]
          },
          {
            part: 'Part 2: Long Turn (Cue Card)',
            cueCard: 'Describe a piece of art or craft you would like to learn to make.\n\nYou should say:\n- what it is\n- how you would learn it\n- why you want to learn it\n- and explain how you might use this skill.',
            modelAnswer: '参考回答:\n\nA craft I would really like to learn is pottery, specifically making bowls and cups on a wheel. I\'ve always been fascinated by how a lump of clay can be transformed into something both useful and beautiful with just a pair of hands.\n\nIf I were to learn pottery, I would probably join a weekend workshop at a local studio. I think hands-on guidance is essential at the beginning, because shaping clay on a spinning wheel looks deceptively simple but requires real control. After a few classes, I\'d practise at home with a small starter kit and watch tutorial videos to improve my technique.\n\nThe reason I want to learn pottery is partly practical and partly emotional. On the practical side, I\'d love to make my own mugs and plates, which feels more meaningful than buying them. On the emotional side, working with clay seems very calming; the slow, repetitive motion of the wheel could be a form of meditation after a stressful week.\n\nIn terms of how I might use this skill, I imagine giving handmade pieces as gifts to friends and family, which would carry far more thought than something shop-bought. I might even sell a few items at local craft markets one day. Beyond that, I think the patience and focus pottery teaches would spill over into other areas of my life. Altogether, it\'s a skill that combines creativity, relaxation, and practical value, which is why it appeals to me so much.',
            tips: '注意描述"是什么-怎么学-为什么-用途"、加入情感与个人规划'
          },
          {
            part: 'Part 3: Discussion',
            questions: [
              { q: 'Why do you think traditional crafts are declining?', a: '参考回答: I think it\'s mainly because mass-produced goods are cheaper and faster to obtain. Modern lifestyles also leave less time for slow, handmade processes, and fewer young people see crafting as a viable career, so the skills aren\'t passed down as often.' },
              { q: 'Should governments support traditional arts and crafts?', a: '参考回答: Yes, I believe they should. Traditional crafts are part of cultural identity and often support rural economies through tourism. Government funding for training programmes and exhibitions can keep these skills alive and give artisans a sustainable income.' },
              { q: 'Do you think digital technology can help preserve traditional art?', a: '参考回答: Absolutely. Online videos and social media allow artisans to teach and promote their work globally, reaching audiences they never could before. Digital archives also help document endangered techniques, so even if practitioners are few, the knowledge isn\'t lost.' }
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
