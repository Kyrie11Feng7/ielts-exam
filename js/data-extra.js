/**
 * 剑桥雅思11-16补充真题数据
 * 为剑11、12、13、14、15、16各生成1套完整的Test 1
 * 题目为雅思考试格式原创练习内容
 */

(function() {
  const extraTests = {
    
    // ========== 剑11 Test 1 ==========
    11: {
      id: 1,
      title: 'Test 1',
      listening: {
        title: '听力 Listening',
        intro: '共4部分，40题，约30分钟',
        sections: [
          {
            part: 'Part 1',
            context: '一位学生打电话咨询图书馆会员注册信息',
            type: '表格填空',
            audioScript: 'Librarian: Good morning, City Central Library, how can I help you?',
            questions: [
              { q: 'Membership type:', a: 'student membership' },
              { q: 'Required document:', a: 'student ID card' },
              { q: 'Application fee:', a: 'free' },
              { q: 'Card valid for:', a: 'one academic year' },
              { q: 'Number of books allowed:', a: '8 items' },
              { q: 'Loan period:', a: '3 weeks' },
              { q: 'Renewal allowed:', a: 'twice' },
              { q: 'Late return fine:', a: '0.50 per day' },
              { q: 'Online access includes:', a: 'academic databases' },
              { q: 'Registration address:', a: 'door 3, ground floor' }
            ]
          },
          {
            part: 'Part 2',
            context: '一个艺术中心的介绍广播',
            type: '选择题 + 地图标注',
            audioScript: 'Welcome to the Contemporary Arts Centre.',
            questions: [
              { q: 'The arts centre opened to the public in', a: 'B. 2015 (B选项)' },
              { q: 'The current main exhibition features', a: 'C. digital art installations (C选项)' },
              { q: 'Workshop sessions are held on', a: 'A. Saturday mornings (A选项)' },
              { q: 'Location of the sculpture garden:', a: 'north side of the building (地图标注D)' },
              { q: 'Location of the cafe and shop:', a: 'ground floor, near entrance (地图标注B)' },
              { q: 'Location of the theatre:', a: 'first floor, east wing (地图标注F)' }
            ]
          },
          {
            part: 'Part 3',
            context: '两个学生讨论关于城市绿化项目的研究',
            type: '匹配题',
            audioScript: 'Emma: So for our environmental studies project, I\'ve been looking into urban greening initiatives.',
            questions: [
              { q: 'Benefits to air quality:', a: 'D. reduction in air pollutants' },
              { q: 'Impact on mental health:', a: 'A. lower stress levels' },
              { q: 'Effect on property values:', a: 'F. increase by up to 15%' },
              { q: 'Social benefits:', a: 'C. stronger community connections' },
              { q: 'Challenges mentioned:', a: 'E. maintenance costs' }
            ]
          },
          {
            part: 'Part 4',
            context: '关于咖啡历史的学术讲座',
            type: '笔记填空',
            audioScript: 'Today\'s lecture explores the fascinating history of coffee.',
            questions: [
              { q: 'Coffee was discovered in ___ in the 9th century.', a: 'Ethiopia' },
              { q: 'The name "coffee" derives from the Arabic word', a: 'qahwa' },
              { q: 'Coffee houses first appeared in ___ in the 15th century.', a: 'Yemen' },
              { q: 'The first coffee house in Europe opened in ___ in 1645.', a: 'Venice' },
              { q: 'Coffee became the national drink of ___ in the 18th century.', a: 'Brazil' },
              { q: 'Today, the top coffee producer is ___', a: 'Brazil' },
              { q: 'Coffee contains over ___ different chemical compounds.', a: '1,000' },
              { q: 'The decaffeination process was invented in', a: '1905' },
              { q: 'Instant coffee was first produced in ___ in 1901.', a: 'the United States' },
              { q: 'Specialty coffee shops emphasize ___ and origin.', a: 'bean quality' }
            ]
          }
        ]
      },
      reading: {
        title: '阅读 Reading',
        intro: '共3篇文章，40题，60分钟',
        passages: [
          {
            title: 'Passage 1: The Invention of the Printing Press',
            difficulty: '中等',
            summary: '印刷机的发明及其对知识传播的影响',
            questions: [
              { type: '判断题 True/False/Not Given', q: 'The printing press was invented by Johannes Gutenberg in the 1440s.', a: 'TRUE' },
              { type: '判断题', q: 'Before the printing press, all books were written in Latin.', a: 'FALSE' },
              { type: '判断题', q: 'The printing press immediately replaced handwritten manuscripts.', a: 'NOT GIVEN' },
              { type: '填空题', q: 'Gutenberg\'s Bible was printed using ___ ink.', a: 'oil-based' },
              { type: '填空题', q: 'The printing press allowed books to be produced ___ times faster.', a: '50' },
              { type: '填空题', q: 'The first book printed in English was published in ____.', a: '1474' }
            ]
          },
          {
            title: 'Passage 2: The Benefits of Urban Greening',
            difficulty: '中偏难',
            summary: '城市绿化对环境和居民健康的益处',
            questions: [
              { type: '段落标题匹配', q: 'Paragraph A', a: 'iv. Environmental advantages of city trees' },
              { type: '段落标题匹配', q: 'Paragraph B', a: 'vi. Health benefits for urban residents' },
              { type: '段落标题匹配', q: 'Paragraph C', a: 'ii. Economic impacts of green spaces' },
              { type: '选择题', q: 'Trees in cities can reduce air temperature by:', a: 'B. 2-8°C' },
              { type: '选择题', q: 'The article suggests that green spaces:', a: 'D. encourage physical activity and social interaction' },
              { type: '填空题', q: 'Urban trees can absorb up to ___ of rainfall.', a: '30%' }
            ]
          },
          {
            title: 'Passage 3: The Value of Space Exploration',
            difficulty: '难',
            summary: '太空探索的科学价值与成本效益分析',
            questions: [
              { type: 'Yes/No/Not Given', q: 'Space exploration has led to numerous technological innovations on Earth.', a: 'YES' },
              { type: 'Yes/No/Not Given', q: 'All countries benefit equally from space research.', a: 'NO' },
              { type: 'Yes/No/Not Given', q: 'The cost of space missions has decreased by 50% in the last decade.', a: 'NOT GIVEN' },
              { type: '选择题', q: 'The writer argues that space exploration:', a: 'C. provides valuable scientific knowledge and practical benefits' },
              { type: '选择题', q: 'The author\'s tone in the passage is:', a: 'B. persuasive and informative' },
              { type: '摘要填空', q: 'Space technology has contributed to ____ and ____ on Earth.', a: 'communication systems / medical devices' }
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
            prompt: 'The graph below shows the percentage of households with access to the internet in five different countries between 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
            modelAnswer: 'The line graph illustrates the changes in the proportion of households with internet access in five countries from 2010 to 2020.\n\nOverall, internet penetration increased in all five countries over the ten-year period. While South Korea and Singapore maintained the highest levels of connectivity throughout, the developing nations of India and Brazil experienced the most dramatic growth rates.\n\nIn 2010, South Korea had the highest internet access rate at approximately 82%, followed closely by Singapore at 78%. Over the decade, both countries saw steady increases, reaching about 96% and 95% respectively by 2020. The United Kingdom followed a similar pattern, rising from around 72% to 93%.\n\nThe most significant changes occurred in Brazil and India. Brazil\'s internet access rate more than doubled from roughly 35% in 2010 to 78% in 2020. India, starting from the lowest level at just 15% in 2010, saw an even more remarkable increase to 60% by 2020.\n\nThe data reveals a clear trend toward greater digital connectivity worldwide, with the gap between developed and developing nations narrowing considerably over the period.',
            tips: '注意趋势描述、国家间对比、最高和最低值的变化'
          },
          {
            task: 'Task 2 (大作文)',
            type: '议论文',
            prompt: 'Some people think that governments should spend money on art. Others believe that this money should be used for more important priorities. Discuss both views and give your own opinion. Write at least 250 words.',
            modelAnswer: 'The allocation of public funds is a subject of ongoing debate, particularly regarding spending on the arts versus more practical priorities such as healthcare and education. While both sides present valid arguments, I believe that a balanced approach that includes investment in the arts is essential for a healthy society.\n\nThose who argue against government funding for the arts contend that limited public resources should be directed toward pressing social needs. Healthcare, education, and infrastructure are fundamental to citizens\' wellbeing and economic development. In many countries, hospitals lack adequate equipment, schools are overcrowded, and roads are in disrepair. Supporters of this view argue that art is a luxury that should be funded privately rather than through taxpayers\' money.\n\nOn the other hand, proponents of arts funding argue that the arts provide substantial benefits to society. Firstly, the arts contribute significantly to the economy through tourism and creative industries. Secondly, engagement with the arts has been shown to improve educational outcomes. Thirdly, the arts play a crucial role in preserving cultural heritage and fostering social cohesion.\n\nIn my opinion, the debate presents a false dichotomy. Investment in the arts does not necessarily come at the expense of healthcare, education, or infrastructure. Many countries successfully fund both, recognising that they serve different but equally important societal needs.\n\nIn conclusion, while practical priorities should undoubtedly receive substantial public funding, the arts deserve government support as well. A civilised society invests not only in the physical health and economic prosperity of its citizens but also in their cultural and creative wellbeing.',
            tips: '注意讨论双方观点、给出平衡的个人立场、提供具体例子'
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
              { q: 'Let\'s talk about music. Do you like music?', a: '参考回答: Yes, I\'m a big music lover. I listen to music almost every day, usually while I\'m commuting or studying.' },
              { q: 'What kind of music did you listen to when you were young?', a: '参考回答: When I was younger, I mostly listened to pop music because that\'s what all my friends were into.' },
              { q: 'Has the way you listen to music changed over the years?', a: '参考回答: Definitely. When I was a child, we had CDs and radio. Now, everything is streamed.' }
            ]
          },
          {
            part: 'Part 2: Long Turn (Cue Card)',
            cueCard: 'Describe a skill you would like to learn in the future.\n\nYou should say:\n- what the skill is\n- how you would learn it\n- why you want to learn it\n- and explain how this skill might benefit you.',
            modelAnswer: '参考回答:\n\nA skill I\'ve been wanting to learn for quite some time now is photography. I\'ve always been fascinated by how a single photograph can capture a moment, tell a story, or convey an emotion that words sometimes cannot.\n\nIf I were to learn photography, I would probably start by taking an online course to understand the technical fundamentals. Once I have a grasp of the basics, I\'d practice regularly by taking photos of different subjects. I\'d also join a local photography club where I could learn from more experienced photographers.\n\nThe reason I want to learn photography is that I love traveling, and I feel frustrated that my phone photos never quite capture the beauty of the places I visit.\n\nIn terms of future benefits, I think photography would not only enhance my travel experiences but could also become a creative outlet and even a potential side career.',
            tips: '注意时间管理、使用连接词、展开细节'
          },
          {
            part: 'Part 3: Discussion',
            questions: [
              { q: 'Do you think schools should teach more practical skills?', a: '参考回答: Absolutely. While academic subjects are important, I believe schools should place greater emphasis on practical skills like financial literacy, cooking, and digital skills.' },
              { q: 'How has technology changed the way people learn new skills?', a: '参考回答: Technology has revolutionised learning in several ways. Firstly, the internet has made information freely accessible. Secondly, online platforms offer structured courses from top institutions.' },
              { q: 'Some people say it\'s harder to learn new skills as you get older. Do you agree?', a: '参考回答: To some extent, yes. Neurologically, our brains are more plastic when we\'re young. However, I think the bigger barrier for adults is often time and motivation rather than ability.' }
            ]
          }
        ]
      }
    },
    
    // ========== 剑12 Test 1 ==========
    12: {
      id: 1,
      title: 'Test 1',
      listening: {
        title: '听力 Listening',
        intro: '共4部分，40题，约30分钟',
        sections: [
          {
            part: 'Part 1',
            context: '顾客咨询手机套餐的对话',
            type: '表格填空',
            questions: [
              { q: 'Plan name:', a: 'Super Data Plan' },
              { q: 'Monthly price:', a: '25' },
              { q: 'Data allowance:', a: '30GB' },
              { q: 'Free calls:', a: 'unlimited' },
              { q: 'Free texts:', a: 'unlimited' },
              { q: 'International calls:', a: 'not included' },
              { q: 'Contract length:', a: '12 months' },
              { q: 'Activation fee:', a: '10' },
              { q: 'Customer service:', a: '24/7' },
              { q: 'Cancellation notice:', a: '30 days' }
            ]
          },
          {
            part: 'Part 2',
            context: '当地运动中心的介绍',
            type: '选择题 + 地图标注',
            questions: [
              { q: 'The sports complex was built in', a: 'C. 1998 (C选项)' },
              { q: 'The new swimming pool opened in', a: 'A. 2021 (A选项)' },
              { q: 'Membership includes', a: 'B. free parking (B选项)' },
              { q: 'Location of the tennis courts:', a: 'south of the main building (地图标注A)' },
              { q: 'Location of the changing rooms:', a: 'next to the reception (地图标注C)' },
              { q: 'Location of the gym:', a: 'first floor (地图标注E)' }
            ]
          },
          {
            part: 'Part 3',
            context: '学生讨论关于社交媒体使用的研究项目',
            type: '选择题 + 匹配题',
            questions: [
              { q: 'The research focuses on', a: 'A. teenagers\' social media habits (A选项)' },
              { q: 'The main research method is', a: 'C. online survey (C选项)' },
              { q: 'The sample size is', a: 'B. 500 participants (B选项)' },
              { q: 'Data collection period:', a: 'E. three months' },
              { q: 'Expected completion date:', a: 'D. end of semester' }
            ]
          },
          {
            part: 'Part 4',
            context: '关于塑料污染的学术讲座',
            type: '笔记填空',
            questions: [
              { q: 'Approximately ___ million tonnes of plastic are produced annually.', a: '380' },
              { q: 'Only ___ of plastic waste is recycled globally.', a: '9%' },
              { q: 'The Great Pacific Garbage Patch covers 1.6 million square', a: 'kilometres' },
              { q: 'Microplastics are defined as pieces smaller than', a: '5mm' },
              { q: 'Plastic can take up to ___ years to decompose.', a: '1,000' },
              { q: 'Over ___ marine species have been affected by plastic pollution.', a: '800' },
              { q: 'Biodegradable plastics require specific', a: 'temperature and conditions' },
              { q: 'The European Union banned single-use plastics in', a: '2021' },
              { q: 'Alternatives to plastic include', a: 'bamboo and glass' },
              { q: 'Individual actions can reduce plastic use by', a: '50%' }
            ]
          }
        ]
      },
      reading: {
        title: '阅读 Reading',
        intro: '共3篇文章，40题，60分钟',
        passages: [
          {
            title: 'Passage 1: The Origin of Chocolate',
            difficulty: '中等',
            summary: '巧克力的起源及其从苦味饮料到甜食的演变',
            questions: [
              { type: '判断题', q: 'Chocolate was first consumed as a bitter drink.', a: 'TRUE' },
              { type: '判断题', q: 'The Aztecs used cocoa beans as currency.', a: 'TRUE' },
              { type: '判断题', q: 'Milk chocolate was invented in Switzerland.', a: 'TRUE' },
              { type: '填空题', q: 'The scientific name for the cacao tree is ____.', a: 'Theobroma cacao' },
              { type: '填空题', q: 'Chocolate was introduced to Europe by the ____.', a: 'Spanish' },
              { type: '填空题', q: 'The first chocolate bar was produced in ____.', a: '1847' }
            ]
          },
          {
            title: 'Passage 2: The Psychology of Decision Making',
            difficulty: '中偏难',
            summary: '决策心理学：人们如何做出选择及其影响因素',
            questions: [
              { type: '段落标题匹配', q: 'Paragraph A', a: 'i. The role of emotions in decisions' },
              { type: '段落标题匹配', q: 'Paragraph B', a: 'v. Cognitive biases and heuristics' },
              { type: '段落标题匹配', q: 'Paragraph C', a: 'ii. The impact of too many choices' },
              { type: '选择题', q: 'The "paradox of choice" suggests that:', a: 'C. more options can lead to worse decisions' },
              { type: '选择题', q: 'Emotional decisions are often:', a: 'B. faster but less rational' },
              { type: '填空题', q: 'People tend to rely on ____ when making quick decisions.', a: 'intuition' }
            ]
          },
          {
            title: 'Passage 3: The Future of Renewable Energy',
            difficulty: '难',
            summary: '可再生能源的未来发展前景与挑战',
            questions: [
              { type: 'Yes/No/Not Given', q: 'Renewable energy will completely replace fossil fuels by 2050.', a: 'NO' },
              { type: 'Yes/No/Not Given', q: 'Solar power is currently the cheapest form of new electricity generation.', a: 'YES' },
              { type: 'Yes/No/Not Given', q: 'All countries have equal access to renewable energy technology.', a: 'NO' },
              { type: '选择题', q: 'The main challenge for renewable energy is:', a: 'A. energy storage and intermittency' },
              { type: '选择题', q: 'The writer\'s attitude toward renewable energy is:', a: 'D. optimistic but realistic' },
              { type: '摘要填空', q: 'The transition to renewables requires ____ and ____.', a: 'investment / policy support' }
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
            prompt: 'The bar chart below shows the number of visitors to three different museums in London between 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
            modelAnswer: 'The bar chart compares the visitor numbers to three museums in London over a ten-year period from 2010 to 2020.\n\nOverall, the British Museum consistently attracted the highest number of visitors throughout the period, while the Science Museum had the lowest. All three museums experienced fluctuations in visitor numbers, with a general upward trend until 2019, followed by a sharp decline in 2020.\n\nIn 2010, the British Museum received approximately 5.5 million visitors. By 2019, these figures had increased to about 6.8 million. The most notable change occurred in 2020, when all three museums saw a dramatic drop in visitor numbers due to the pandemic.\n\nThe data indicates that while all three museums grew in popularity over the decade, they were all severely impacted by the pandemic in 2020.',
            tips: '注意比较三个博物馆、描述趋势和突变'
          },
          {
            task: 'Task 2 (大作文)',
            type: '议论文',
            prompt: 'Some people believe that it is better for children to grow up in the city, while others think that life in the countryside is more beneficial for them. Discuss both views and give your own opinion. Write at least 250 words.',
            modelAnswer: 'The question of whether children should be raised in urban or rural environments is a topic of considerable debate. Both settings offer distinct advantages and challenges.\n\nThose who advocate for city upbringing argue that urban areas provide superior educational opportunities. Cities typically have a wider range of schools and better healthcare facilities. Additionally, cities offer greater cultural exposure.\n\nOn the other hand, supporters of rural upbringing contend that the countryside offers a healthier and safer environment for children. Air quality is generally better in rural areas, and there are more opportunities for outdoor physical activity.\n\nIn my opinion, both environments have merit, but the best choice depends on the specific needs and values of the family. If academic excellence and cultural exposure are top priorities, the city may be preferable. However, if health, safety, and connection to nature are more important, the countryside might be the better option.',
            tips: '注意平衡讨论、给出 nuanced 的观点'
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
              { q: 'Do you prefer to live in the city or the countryside? Why?', a: '参考回答: I currently live in the city, and while I appreciate the convenience, I think I\'d actually prefer the countryside in the long term.' },
              { q: 'What do you like most about the area where you live?', a: '参考回答: What I like most is the convenience. I can walk to the supermarket, and public transport is excellent.' },
              { q: 'Would you like to move to a different area in the future?', a: '参考回答: Yes, I think so. Once I have children, I\'d seriously consider moving to the suburbs or countryside.' }
            ]
          },
          {
            part: 'Part 2: Long Turn (Cue Card)',
            cueCard: 'Describe a place where you like to study or work.',
            modelAnswer: '参考回答:\n\nI\'d like to talk about a particular café where I love to study and do work. It\'s called "The Reading Room," and it\'s located in the city centre.\n\nI discovered this place about a year ago when I was looking for a quiet spot to prepare for my exams. The café has a really lovely setup for studying with high ceilings and large windows.\n\nWhat really makes this place special for studying is the atmosphere. It\'s always quiet but not silent. The staff are very respectful of people studying.\n\nI particularly like this place because it gets me out of the house. When I study at home, I\'m constantly distracted.',
            tips: '注意描述地点特征、个人感受'
          },
          {
            part: 'Part 3: Discussion',
            questions: [
              { q: 'What are the advantages and disadvantages of studying in a public place like a café?', a: '参考回答: There are several advantages. Public places can provide a change of scenery. However, there are disadvantages too, such as unpredictable noise levels.' },
              { q: 'How important is the learning environment for students?', a: '参考回答: I think it\'s extremely important. The environment can significantly affect concentration and motivation.' },
              { q: 'Do you think technology has changed where and how people study?', a: '参考回答: Absolutely. Laptops and smartphones have made it possible to study almost anywhere.' }
            ]
          }
        ]
      }
    },
    
    // ========== 剑13 Test 1 ==========
    13: {
      id: 1,
      title: 'Test 1',
      listening: {
        title: '听力 Listening',
        intro: '共4部分，40题，约30分钟',
        sections: [
          {
            part: 'Part 1',
            context: '一位女士咨询志愿者工作的电话对话',
            type: '表格填空',
            questions: [
              { q: 'Volunteer name:', a: 'Jennifer Walsh' },
              { q: 'Age group:', a: '25-34' },
              { q: 'Availability:', a: 'weekends' },
              { q: 'Preferred activity:', a: 'working with children' },
              { q: 'Transport method:', a: 'own car' },
              { q: 'Language skills:', a: 'Spanish and English' },
              { q: 'Previous experience:', a: 'yes, 2 years' },
              { q: 'First orientation date:', a: '5th March' },
              { q: 'Contact phone:', a: '07891 234567' },
              { q: 'Email address:', a: 'j.walsh@email.com' }
            ]
          },
          {
            part: 'Part 2',
            context: '当地社区花园项目的介绍',
            type: '选择题 + 地图标注',
            questions: [
              { q: 'The community garden was established in', a: 'B. 2020 (B选项)' },
              { q: 'The garden produces food for', a: 'C. local food banks (C选项)' },
              { q: 'Volunteers meet every', a: 'A. Sunday morning (A选项)' },
              { q: 'Location of the tool shed:', a: 'southeast corner (地图标注)' },
              { q: 'Location of the composting area:', a: 'northwest area (地图标注)' },
              { q: 'Location of the children\'s garden:', a: 'near the entrance (地图标注)' }
            ]
          },
          {
            part: 'Part 3',
            context: '两名学生讨论关于年轻人使用社交媒体的研究',
            type: '匹配题',
            questions: [
              { q: 'Most popular platform among teens:', a: 'E. Instagram and TikTok' },
              { q: 'Average daily usage:', a: 'C. 3-4 hours' },
              { q: 'Main reason for use:', a: 'A. staying connected with friends' },
              { q: 'Negative impact mentioned:', a: 'D. sleep disruption' },
              { q: 'Recommended healthy limit:', a: 'F. 2 hours per day' }
            ]
          },
          {
            part: 'Part 4',
            context: '关于蜜蜂智能的学术讲座',
            type: '笔记填空',
            questions: [
              { q: 'Bees can recognise ___ patterns.', a: 'abstract' },
              { q: 'They can solve problems using', a: 'tool use' },
              { q: 'Bees demonstrate ___ memory.', a: 'long-term' },
              { q: 'They can learn by', a: 'observing others' },
              { q: 'Bees understand the concept of', a: 'zero' },
              { q: 'They can navigate using the', a: 'sun' },
              { q: 'Bees communicate through', a: 'waggle dance' },
              { q: 'They can recognise human', a: 'faces' },
              { q: 'Bees show ___ behaviour.', a: 'emotional' },
              { q: 'Their brain size is only ___ of a grain of sand.', a: 'less than 1%' }
            ]
          }
        ]
      },
      reading: {
        title: '阅读 Reading',
        intro: '共3篇文章，40题，60分钟',
        passages: [
          {
            title: 'Passage 1: The History of Banking',
            difficulty: '中等',
            summary: '银行业的发展历史：从古代到现代',
            questions: [
              { type: '判断题', q: 'The first banks were established in ancient Greece.', a: 'FALSE' },
              { type: '判断题', q: 'The concept of paper money originated in China.', a: 'TRUE' },
              { type: '判断题', q: 'The Bank of England was the first central bank.', a: 'NOT GIVEN' },
              { type: '填空题', q: 'The word "bank" comes from the Italian word ____.', a: 'banca' },
              { type: '填空题', q: 'The first ATMs were installed in ____ in 1967.', a: 'London' },
              { type: '填空题', q: 'Online banking became widely available in the ____.', a: '1990s' }
            ]
          },
          {
            title: 'Passage 2: The Mystery of Language Death',
            difficulty: '中偏难',
            summary: '语言消亡的现象及其文化影响',
            questions: [
              { type: '段落标题匹配', q: 'Paragraph A', a: 'iv. The current rate of language loss' },
              { type: '段落标题匹配', q: 'Paragraph B', a: 'i. Causes of language endangerment' },
              { type: '段落标题匹配', q: 'Paragraph C', a: 'vii. Efforts to preserve endangered languages' },
              { type: '选择题', q: 'How many languages are currently considered endangered?', a: 'C. Approximately 2,500' },
              { type: '选择题', q: 'The main cause of language death is:', a: 'B. globalisation and dominant languages' },
              { type: '填空题', q: 'When a language dies, valuable ____ knowledge is lost.', a: 'cultural and ecological' }
            ]
          },
          {
            title: 'Passage 3: The Impact of Nanotechnology',
            difficulty: '难',
            summary: '纳米技术的影响：应用、益处与风险',
            questions: [
              { type: 'Yes/No/Not Given', q: 'Nanotechnology has applications in medicine.', a: 'YES' },
              { type: 'Yes/No/Not Given', q: 'All scientists agree that nanomaterials are completely safe.', a: 'NO' },
              { type: 'Yes/No/Not Given', q: 'Nanotechnology will replace all conventional manufacturing methods.', a: 'NOT GIVEN' },
              { type: '选择题', q: 'The main advantage of nanotechnology in medicine is:', a: 'A. targeted drug delivery' },
              { type: '选择题', q: 'The writer suggests that regulation of nanotechnology:', a: 'D. needs to be strengthened' },
              { type: '摘要填空', q: 'Nanotechnology involves manipulating matter at the ____ level.', a: 'atomic and molecular' }
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
            prompt: 'The table below shows the number of international tourists visiting three different destinations in 2015 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
            modelAnswer: 'The table compares international tourist arrivals and average length of stay at three destinations in 2015 and 2020.\n\nOverall, all three countries experienced an increase in tourist numbers over the five-year period. Country A received the highest number of visitors in both years, while Country C had the lowest.\n\nIn 2015, Country A attracted 12.5 million tourists, rising to 15.8 million by 2020. Country B saw its visitor numbers grow from 8.2 million to 10.5 million, while Country C experienced more modest growth from 4.1 million to 5.3 million.\n\nThe data indicates that while all three destinations became more popular over the period, Country A maintained its position as the leading destination.',
            tips: '注意表格数据的横向和纵向对比'
          },
          {
            task: 'Task 2 (大作文)',
            type: '议论文',
            prompt: 'Many people believe that companies should do more to protect the environment, while others think that governments should take the lead. Discuss both views and give your own opinion. Write at least 250 words.',
            modelAnswer: 'Environmental protection is one of the most pressing challenges of our time, and there is ongoing debate about whether corporations or governments should bear greater responsibility.\n\nThose who argue that companies should take the lead point out that businesses are often the primary contributors to environmental degradation. Furthermore, companies have the financial resources and technical expertise to develop innovative solutions.\n\nOn the other hand, supporters of government leadership argue that only states have the authority and capacity to implement systemic change. Environmental challenges require coordinated international action that only governments can facilitate.\n\nIn my view, the most effective approach involves collaboration between governments and businesses. Governments should set clear environmental targets and create incentives for companies to meet them.',
            tips: '注意讨论双方观点、提出合作解决方案'
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
              { q: 'Let\'s talk about food. What\'s your favourite type of food?', a: '参考回答: I\'m quite passionate about Italian cuisine. I love pasta dishes, especially carbonara and pesto pasta.' },
              { q: 'Do you prefer eating at home or eating out?', a: '参考回答: It really depends on my mood and the occasion. For everyday meals, I prefer eating at home.' },
              { q: 'Have your eating habits changed as you\'ve gotten older?', a: '参考回答: Definitely. When I was younger, I could eat pretty much anything without consequences. Now I\'m much more conscious of what I eat.' }
            ]
          },
          {
            part: 'Part 2: Long Turn (Cue Card)',
            cueCard: 'Describe a meal that you enjoyed very much.',
            modelAnswer: '参考回答:\n\nI\'d like to describe a truly memorable meal I had about two years ago at a small family-run restaurant in Rome, Italy.\n\nIt was a warm evening in late September, and I was traveling with my sister. We stumbled upon this unassuming restaurant in a quiet side street.\n\nFor the meal itself, we started with bruschetta. For the main course, I ordered the cacio e pepe, a classic Roman pasta dish.\n\nWhat made this meal so special wasn\'t just the food, though that was exceptional. It was the entire experience - the warm, friendly service and the joy of sharing that moment with my sister.',
            tips: '注意描述细节、情感表达'
          },
          {
            part: 'Part 3: Discussion',
            questions: [
              { q: 'How have eating habits changed in your country in recent years?', a: '参考回答: Eating habits have changed quite dramatically, largely due to globalisation and busier lifestyles.' },
              { q: 'Should schools teach children about healthy eating?', a: '参考回答: Absolutely, I think it\'s essential. With rising rates of childhood obesity, schools have a responsibility to educate students about nutrition.' },
              { q: 'Do you think traditional cuisine will disappear in the future?', a: '参考回答: I don\'t think traditional cuisine will completely disappear, but it will certainly evolve.' }
            ]
          }
        ]
      }
    },
    
    // ========== 剑14 Test 1 ==========
    14: {
      id: 1,
      title: 'Test 1',
      listening: {
        title: '听力 Listening',
        intro: '共4部分，40题，约30分钟',
        sections: [
          {
            part: 'Part 1',
            context: '咨询夏季音乐节门票的对话',
            type: '表格填空',
            questions: [
              { q: 'Festival name:', a: 'Summer Beats Festival' },
              { q: 'Dates:', a: '14-16 July' },
              { q: 'Location:', a: 'Riverside Park' },
              { q: 'Day ticket price:', a: '65' },
              { q: 'Weekend pass price:', a: '150' },
              { q: 'VIP package includes:', a: 'backstage access' },
              { q: 'Age restriction:', a: 'under 16 must be accompanied' },
              { q: 'Camping available:', a: 'yes, for weekend pass holders' },
              { q: 'Parking fee:', a: '10 per day' },
              { q: 'Ticket collection:', a: 'at the gate with ID' }
            ]
          },
          {
            part: 'Part 2',
            context: '当地历史博物馆的导览介绍',
            type: '选择题 + 地图标注',
            questions: [
              { q: 'The museum building was originally a', a: 'C. town hall (C选项)' },
              { q: 'The museum was established in', a: 'A. 1892 (A选项)' },
              { q: 'The current special exhibition is about', a: 'B. local industrial heritage (B选项)' },
              { q: 'Location of the gift shop:', a: 'ground floor, right of entrance (地图标注)' },
              { q: 'Location of the local history section:', a: 'first floor, west wing (地图标注)' },
              { q: 'Location of the cafe:', a: 'basement level (地图标注)' }
            ]
          },
          {
            part: 'Part 3',
            context: '学生讨论关于多元智能理论的研究项目',
            type: '选择题 + 匹配题',
            questions: [
              { q: 'The research project is about', a: 'B. different types of intelligence (B选项)' },
              { q: 'The main theory being examined is', a: 'C. Gardner\'s Multiple Intelligences (C选项)' },
              { q: 'The students plan to', a: 'A. conduct surveys with teachers (A选项)' },
              { q: 'First deadline:', a: 'F. literature review by Friday' },
              { q: 'Final presentation format:', a: 'D. PowerPoint with case studies' }
            ]
          },
          {
            part: 'Part 4',
            context: '关于睡梦功能的学术讲座',
            type: '笔记填空',
            questions: [
              { q: 'Most people spend about ___ of their lives sleeping.', a: 'one-third' },
              { q: 'REM sleep occurs approximately every ___ minutes.', a: '90' },
              { q: 'Dreams mainly occur during', a: 'REM sleep' },
              { q: 'The average person has about ___ dreams per night.', a: '4-6' },
              { q: 'Dreams help with ___ processing.', a: 'emotional' },
              { q: 'During sleep, the brain consolidates', a: 'memories' },
              { q: 'Lack of sleep affects ___ function.', a: 'cognitive' },
              { q: 'Some dreams may help solve', a: 'problems' },
              { q: 'Recurring dreams often indicate unresolved', a: 'stress or anxiety' },
              { q: 'Keeping a dream ___ can improve recall.', a: 'journal' }
            ]
          }
        ]
      },
      reading: {
        title: '阅读 Reading',
        intro: '共3篇文章，40题，60分钟',
        passages: [
          {
            title: 'Passage 1: The Development of Photography',
            difficulty: '中等',
            summary: '摄影技术的发展历史',
            questions: [
              { type: '判断题', q: 'The first photograph was taken in 1826.', a: 'TRUE' },
              { type: '判断题', q: 'Early photography required exposures of several hours.', a: 'FALSE' },
              { type: '判断题', q: 'Colour photography was available from the beginning.', a: 'FALSE' },
              { type: '填空题', q: 'The first photographic process was called ____.', a: 'heliography' },
              { type: '填空题', q: 'The daguerreotype was invented by ____.', a: 'Louis Daguerre' },
              { type: '填空题', q: 'The Kodak camera made photography ____.', a: 'accessible to the public' }
            ]
          },
          {
            title: 'Passage 2: The Science of Sleep',
            difficulty: '中偏难',
            summary: '睡眠科学：睡眠的功能和不同阶段',
            questions: [
              { type: '段落标题匹配', q: 'Paragraph A', a: 'iii. The stages of sleep cycle' },
              { type: '段落标题匹配', q: 'Paragraph B', a: 'vi. Why we dream' },
              { type: '段落标题匹配', q: 'Paragraph C', a: 'i. Effects of sleep deprivation' },
              { type: '选择题', q: 'Deep sleep is important for:', a: 'D. physical restoration' },
              { type: '选择题', q: 'Insomnia affects approximately:', a: 'B. 30% of adults' },
              { type: '填空题', q: 'During sleep, the brain clears out ____.', a: 'toxins' }
            ]
          },
          {
            title: 'Passage 3: The Future of Transportation',
            difficulty: '难',
            summary: '未来交通：电动汽车、高铁和自动驾驶',
            questions: [
              { type: 'Yes/No/Not Given', q: 'Electric vehicles will completely replace petrol cars by 2030.', a: 'NO' },
              { type: 'Yes/No/Not Given', q: 'High-speed rail is faster than air travel for journeys under 500km.', a: 'YES' },
              { type: 'Yes/No/Not Given', q: 'All major car manufacturers have stopped developing petrol engines.', a: 'NOT GIVEN' },
              { type: '选择题', q: 'The main barrier to electric vehicle adoption is:', a: 'C. charging infrastructure and cost' },
              { type: '选择题', q: 'The writer predicts that autonomous vehicles will:', a: 'B. reduce accidents caused by human error' },
              { type: '摘要填空', q: 'Future transport systems will be ____, ____, and ____.', a: 'electric / autonomous / shared' }
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
            prompt: 'The pie charts below show the energy consumption by sector in two countries in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
            modelAnswer: 'The pie charts compare the distribution of energy consumption across four sectors in two countries in 2020.\n\nOverall, the industrial sector was the dominant energy consumer in both countries, though to differing degrees. Country X showed a more balanced distribution of energy use across sectors compared to Country Y.\n\nIn Country X, the industrial sector accounted for 38% of total energy consumption. The residential and transportation sectors each represented 25% and 22% respectively.\n\nIn contrast, Country Y had a significantly higher proportion of energy consumed by the industrial sector at 52%. The transportation sector accounted for 21%, followed by the residential sector at 18%.\n\nThe data indicates that while all countries made progress in extending life expectancy, significant disparities remain.',
            tips: '注意比较两个饼图、描述主要差异'
          },
          {
            task: 'Task 2 (大作文)',
            type: '议论文',
            prompt: 'Some people think that it is better to educate boys and girls in separate schools. Others believe that boys and girls benefit more from attending mixed schools. Discuss both views and give your own opinion. Write at least 250 words.',
            modelAnswer: 'The question of whether single-sex or coeducational schooling is more beneficial for students has been debated for decades. Both approaches have their advocates and potential advantages.\n\nSupporters of single-sex education argue that separating boys and girls can create more effective learning environments. Research suggests that boys and girls often have different learning styles.\n\nOn the other hand, advocates of coeducation argue that mixed schools better prepare students for real life. In coeducational settings, students learn to communicate and collaborate with the opposite sex.\n\nIn my opinion, both models can be effective depending on how they are implemented. The most important factors are the quality of teaching and the school culture.',
            tips: '注意平衡讨论、避免绝对立场'
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
              { q: 'Let\'s talk about photography. Do you like taking photos?', a: '参考回答: Yes, I do enjoy photography, though I wouldn\'t call myself a photographer. I mostly take photos with my phone.' },
              { q: 'What do you usually take photos of?', a: '参考回答: I take a lot of landscape and travel photos when I\'m on holiday. I also like taking candid photos of friends at gatherings.' },
              { q: 'Do you think you take more photos now than in the past?', a: '参考回答: Definitely. Smartphones have made it so much easier.' }
            ]
          },
          {
            part: 'Part 2: Long Turn (Cue Card)',
            cueCard: 'Describe a photograph that you like very much.',
            modelAnswer: '参考回答:\n\nI\'d like to talk about a photograph that has special meaning for me. It\'s a picture of my grandparents sitting on a bench in a park, taken about ten years ago.\n\nThis photo was taken during a family gathering at a local park. My cousin was the one who took it.\n\nWhat the photo shows is a really natural, unposed moment of happiness and affection between two people who had been married for over 50 years.\n\nI love this photograph for several reasons. First, it perfectly captures the deep bond my grandparents shared.',
            tips: '注意描述照片内容、情感价值'
          },
          {
            part: 'Part 3: Discussion',
            questions: [
              { q: 'How has photography changed society?', a: '参考回答: Photography has had a profound impact on society in many ways. It has democratised the creation and sharing of images.' },
              { q: 'Do you think professional photographers will still be needed in the future?', a: '参考回答: Absolutely. While anyone can take a photo now, there\'s still a big difference between casual snapshots and professional photography.' },
              { q: 'Is it better to take photos of special moments or just enjoy them?', a: '参考回答: This is a really interesting question. There\'s definitely a tension between experiencing a moment fully and documenting it.' }
            ]
          }
        ]
      }
    },
    
    // ========== 剑15 Test 1 ==========
    15: {
      id: 1,
      title: 'Test 1',
      listening: {
        title: '听力 Listening',
        intro: '共4部分，40题，约30分钟',
        sections: [
          {
            part: 'Part 1',
            context: '一位学生咨询语言课程的电话对话',
            type: '表格填空',
            questions: [
              { q: 'Course enquiry for:', a: 'Spanish evening class' },
              { q: 'Student level:', a: 'beginner' },
              { q: 'Course start date:', a: '12th September' },
              { q: 'Number of lessons per week:', a: '2' },
              { q: 'Lesson duration:', a: '90 minutes' },
              { q: 'Course fee:', a: '240' },
              { q: 'Material cost:', a: 'included' },
              { q: 'Class size maximum:', a: '15 students' },
              { q: 'Assessment method:', a: 'continuous assessment' },
              { q: 'Certificate awarded:', a: 'yes, upon completion' }
            ]
          },
          {
            part: 'Part 2',
            context: '当地自行车租赁服务的介绍',
            type: '选择题 + 地图标注',
            questions: [
              { q: 'The bike share programme started in', a: 'C. 2022 (C选项)' },
              { q: 'A standard rental costs', a: 'B. £2 per hour (B选项)' },
              { q: 'All bikes are equipped with', a: 'A. GPS tracking (A选项)' },
              { q: 'Location of Station 1:', a: 'train station entrance (地图标注)' },
              { q: 'Location of Station 5:', a: 'university campus (地图标注)' },
              { q: 'Location of maintenance depot:', a: 'industrial estate (地图标注)' }
            ]
          },
          {
            part: 'Part 3',
            context: '两名学生讨论关于植物智能的研究项目',
            type: '匹配题',
            questions: [
              { q: 'Plants can communicate through', a: 'D. chemical signals' },
              { q: 'Some plants show memory of', a: 'A. past events' },
              { q: 'The "wood wide web" refers to', a: 'F. fungal networks' },
              { q: 'Plants can recognise their', a: 'C. relatives' },
              { q: 'Research methods include', a: 'E. time-lapse photography' }
            ]
          },
          {
            part: 'Part 4',
            context: '关于城市化影响的学术讲座',
            type: '笔记填空',
            questions: [
              { q: 'Currently, ___ of the world population lives in cities.', a: '55%' },
              { q: 'By 2050, this figure is expected to reach', a: '68%' },
              { q: 'The largest megacity is', a: 'Tokyo' },
              { q: 'Urban areas produce ___ of global GDP.', a: '80%' },
              { q: 'Rapid urbanisation can lead to', a: 'informal settlements' },
              { q: 'Cities cover only ___ of Earth\'s land surface.', a: '3%' },
              { q: 'Urban forests can reduce', a: 'urban heat island effect' },
              { q: 'Smart city technologies improve', a: 'resource efficiency' },
              { q: 'Participatory planning involves', a: 'community engagement' },
              { q: 'Sustainable cities prioritise', a: 'public transport' }
            ]
          }
        ]
      },
      reading: {
        title: '阅读 Reading',
        intro: '共3篇文章，40题，60分钟',
        passages: [
          {
            title: 'Passage 1: The Invention of the Telescope',
            difficulty: '中等',
            summary: '望远镜的发明及其对天文学的影响',
            questions: [
              { type: '判断题', q: 'The telescope was invented by Galileo.', a: 'FALSE' },
              { type: '判断题', q: 'The first astronomical telescope used lenses made of glass.', a: 'TRUE' },
              { type: '判断题', q: 'Galileo\'s telescope could magnify images 30 times.', a: 'NOT GIVEN' },
              { type: '填空题', q: 'The telescope was invented in the year ____.', a: '1608' },
              { type: '填空题', q: 'Galileo discovered Jupiter\'s ____ using his telescope.', a: 'moons' },
              { type: '填空题', q: 'The Hubble Space Telescope was launched in ____.', a: '1990' }
            ]
          },
          {
            title: 'Passage 2: The Science of Taste Perception',
            difficulty: '中偏难',
            summary: '味觉感知科学：舌头如何检测味道',
            questions: [
              { type: '段落标题匹配', q: 'Paragraph A', a: 'iv. The five basic tastes' },
              { type: '段落标题匹配', q: 'Paragraph B', a: 'ii. How taste buds work' },
              { type: '段落标题匹配', q: 'Paragraph C', a: 'vi. Individual differences in taste' },
              { type: '选择题', q: 'Umami was identified as a basic taste in:', a: 'C. 1908' },
              { type: '选择题', q: 'Supertasters have approximately:', a: 'B. twice as many taste buds' },
              { type: '填空题', q: 'Taste perception also depends on ____.', a: 'smell and texture' }
            ]
          },
          {
            title: 'Passage 3: The Future of Remote Work',
            difficulty: '难',
            summary: '远程工作的未来：趋势、挑战与机遇',
            questions: [
              { type: 'Yes/No/Not Given', q: 'Remote work will become the dominant work model by 2030.', a: 'NOT GIVEN' },
              { type: 'Yes/No/Not Given', q: 'Remote workers are generally more productive than office workers.', a: 'YES' },
              { type: 'Yes/No/Not Given', q: 'All companies should adopt remote work policies.', a: 'NO' },
              { type: '选择题', q: 'The main challenge of remote work is:', a: 'D. isolation and communication difficulties' },
              { type: '选择题', q: 'The writer suggests that the future workplace will be:', a: 'B. hybrid' },
              { type: '摘要填空', q: 'Successful remote work requires ____ and ____.', a: 'self-discipline / effective communication tools' }
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
            prompt: 'The graph below shows the population growth of three major cities from 2000 to 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
            modelAnswer: 'The line graph illustrates the population changes in three major cities from 2000 to 2020.\n\nOverall, all three cities experienced population growth throughout the period, though at different rates. City X consistently had the largest population, while City Z had the smallest.\n\nIn 2000, City X had a population of approximately 8 million, which increased steadily to reach around 11 million by 2020. City Y started with about 4 million people and saw more rapid growth.\n\nThe data reveals that while all three cities are growing, City Y is catching up to City X in terms of population size.',
            tips: '注意描述趋势、比较三个城市'
          },
          {
            task: 'Task 2 (大作文)',
            type: '议论文',
            prompt: 'Some people believe that university education should be free for all students, while others think that students should pay for their own education. Discuss both views and give your own opinion. Write at least 250 words.',
            modelAnswer: 'The question of whether higher education should be funded by the state or by students themselves is a subject of considerable debate worldwide. Both positions have merit.\n\nAdvocates of free university education argue that it promotes equality of opportunity. When higher education is free, talented students from all backgrounds can pursue their academic goals.\n\nOn the other hand, those who believe students should pay contend that it creates a more sustainable system. University education is expensive, and free tuition places a heavy burden on taxpayers.\n\nIn my opinion, a balanced approach is most appropriate. Ideally, university education should be either free or heavily subsidised, but with conditions attached.',
            tips: '注意讨论双方观点、提出平衡解决方案'
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
              { q: 'Let\'s talk about sport and exercise. Do you do any sports?', a: '参考回答: Yes, I try to stay active. I play badminton twice a week with some friends from work.' },
              { q: 'Did you play sports when you were a child?', a: '参考回答: I was quite active as a child. I played on the school football team and also did athletics.' },
              { q: 'Do you think sport is important for children?', a: '参考回答: Absolutely. Sport is crucial for children\'s physical development, but it\'s also important for social skills and discipline.' }
            ]
          },
          {
            part: 'Part 2: Long Turn (Cue Card)',
            cueCard: 'Describe a sport or exercise that you enjoy doing.',
            modelAnswer: '参考回答:\n\nI\'d like to talk about swimming, which is a sport I really enjoy and try to do regularly.\n\nI started swimming when I was quite young because my parents wanted me to learn water safety. These days, I probably go swimming about once every two weeks.\n\nThere are several reasons why I enjoy swimming so much. First, it\'s excellent exercise but low-impact. Second, there\'s something incredibly relaxing about being in the water.\n\nAnother thing I love is that swimming is a solitary activity but not a lonely one.',
            tips: '注意描述频率、地点、原因'
          },
          {
            part: 'Part 3: Discussion',
            questions: [
              { q: 'How has technology changed sport?', a: '参考回答: Technology has transformed sport in numerous ways. In professional sport, technologies like VAR have changed how games are played.' },
              { q: 'Should governments invest more in sports facilities?', a: '参考回答: I think they should, yes. Public sports facilities promote public health, which reduces healthcare costs in the long run.' },
              { q: 'Do you think e-sports should be considered real sports?', a: '参考回答: This is a fascinating question. Traditionally, sports involve physical exertion, which e-sports clearly don\'t.' }
            ]
          }
        ]
      }
    },
    
    // ========== 剑16 Test 1 ==========
    16: {
      id: 1,
      title: 'Test 1',
      listening: {
        title: '听力 Listening',
        intro: '共4部分，40题，约30分钟',
        sections: [
          {
            part: 'Part 1',
            context: '顾客咨询网络宽带套餐的电话对话',
            type: '表格填空',
            questions: [
              { q: 'Service type:', a: 'fibre broadband' },
              { q: 'Package name:', a: 'SuperFast 100' },
              { q: 'Download speed:', a: '100 Mbps' },
              { q: 'Monthly fee:', a: '35' },
              { q: 'Contract length:', a: '18 months' },
              { q: 'Installation fee:', a: 'free' },
              { q: 'Router included:', a: 'yes, Wi-Fi 6 router' },
              { q: 'Installation date:', a: '3rd August' },
              { q: 'Installation time slot:', a: 'morning (9am-12pm)' },
              { q: 'Customer service number:', a: '0800 123456' }
            ]
          },
          {
            part: 'Part 2',
            context: '当地剧院的重新开放介绍',
            type: '选择题 + 地图标注',
            questions: [
              { q: 'The theatre first opened in', a: 'B. 1925 (B选项)' },
              { q: 'The renovation cost', a: 'C. £12 million (C选项)' },
              { q: 'The first performance will be', a: 'A. a Shakespeare play (A选项)' },
              { q: 'Location of the box office:', a: 'main foyer (地图标注)' },
              { q: 'Location of the new restaurant:', a: 'second floor (地图标注)' },
              { q: 'Location of accessible seating:', a: 'ground floor, aisle seats (地图标注)' }
            ]
          },
          {
            part: 'Part 3',
            context: '学生讨论关于沙漠生态系统的研究项目',
            type: '选择题 + 匹配题',
            questions: [
              { q: 'The research focuses on deserts in', a: 'C. North Africa (C选项)' },
              { q: 'The main research question is about', a: 'B. adaptation strategies of plants (B选项)' },
              { q: 'Fieldwork will be conducted in', a: 'A. June and July (A选项)' },
              { q: 'Data analysis method:', a: 'E. statistical modelling' },
              { q: 'Expected publication date:', a: 'D. within 12 months' }
            ]
          },
          {
            part: 'Part 4',
            context: '关于电子书未来的学术讲座',
            type: '笔记填空',
            questions: [
              { q: 'The first e-reader was released in', a: '1998' },
              { q: 'E-books currently account for approximately ___ of total book sales.', a: '20%' },
              { q: 'The most popular e-reader device is the', a: 'Kindle' },
              { q: 'E-books are projected to outsell print by', a: '2030' },
              { q: 'Digital textbooks can reduce costs by up to', a: '50%' },
              { q: 'One advantage of e-books is ___ search.', a: 'instant' },
              { q: 'Print books remain popular for ___ reading.', a: 'long-form' },
              { q: 'Some libraries now offer ___ e-book lending.', a: 'subscription-based' },
              { q: 'The environmental impact of e-readers depends on ___ of use.', a: 'lifespan' },
              { q: 'The future likely holds ___ formats.', a: 'hybrid (print and digital)' }
            ]
          }
        ]
      },
      reading: {
        title: '阅读 Reading',
        intro: '共3篇文章，40题，60分钟',
        passages: [
          {
            title: 'Passage 1: The History of Chocolate in Europe',
            difficulty: '中等',
            summary: '巧克力在欧洲的传播历史',
            questions: [
              { type: '判断题', q: 'Chocolate was first brought to Europe by Spanish conquistadors.', a: 'TRUE' },
              { type: '判断题', q: 'Initially, chocolate was consumed as a sweet treat.', a: 'FALSE' },
              { type: '判断题', q: 'The first chocolate house in London opened in 1657.', a: 'TRUE' },
              { type: '填空题', q: 'The scientific name for the cacao tree is ____.', a: 'Theobroma cacao' },
              { type: '填空题', q: '___ invented the process of making solid chocolate.', a: 'Joseph Fry' },
              { type: '填空题', q: 'Milk chocolate was first produced in ____ in 1875.', a: 'Switzerland' }
            ]
          },
          {
            title: 'Passage 2: Desert Ecosystems',
            difficulty: '中偏难',
            summary: '沙漠生态系统：适应性与生物多样性',
            questions: [
              { type: '段落标题匹配', q: 'Paragraph A', a: 'v. Survival strategies of desert plants' },
              { type: '段落标题匹配', q: 'Paragraph B', a: 'ii. Animal adaptations to extreme heat' },
              { type: '段落标题匹配', q: 'Paragraph C', a: 'iv. Human communities in deserts' },
              { type: '选择题', q: 'Cacti store water in their:', a: 'D. stems' },
              { type: '选择题', q: 'Many desert animals are nocturnal to:', a: 'B. avoid daytime heat' },
              { type: '填空题', q: 'Desert ecosystems cover about ___ of Earth\'s land surface.', a: 'one-third' }
            ]
          },
          {
            title: 'Passage 3: The Digital Revolution in Education',
            difficulty: '难',
            summary: '教育中的数字革命：机遇与挑战',
            questions: [
              { type: 'Yes/No/Not Given', q: 'Digital technology has improved educational outcomes for all students.', a: 'NO' },
              { type: 'Yes/No/Not Given', q: 'Online learning will completely replace traditional classrooms.', a: 'NO' },
              { type: 'Yes/No/Not Given', q: 'Teachers\' roles will become less important in digital education.', a: 'NO' },
              { type: '选择题', q: 'The main challenge of educational technology is:', a: 'C. equitable access and teacher training' },
              { type: '选择题', q: 'The writer believes that technology in education should:', a: 'A. enhance rather than replace traditional methods' },
              { type: '摘要填空', q: 'Successful digital education requires ____, ____, and ____.', a: 'infrastructure / training / pedagogical understanding' }
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
            prompt: 'The table below shows the life expectancy in years for males and females in four different countries in 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
            modelAnswer: 'The table compares life expectancy for men and women in four countries in 2000 and 2020.\n\nOverall, life expectancy increased for both genders in all four countries over the twenty-year period. Women consistently had higher life expectancy than men in both years and all countries.\n\nIn 2000, Country A had the highest life expectancy for both sexes. By 2020, these figures had increased. Country C had the lowest life expectancy in both years.\n\nThe data indicates that while all countries made progress in extending life expectancy, significant disparities remain.',
            tips: '注意表格数据的横向和纵向对比'
          },
          {
            task: 'Task 2 (大作文)',
            type: '议论文',
            prompt: 'Some people think that the best way to reduce crime is to give longer prison sentences. Others believe there are better alternative ways to reduce crime. Discuss both views and give your own opinion. Write at least 250 words.',
            modelAnswer: 'Crime reduction is a complex challenge that societies have grappled with for centuries. While some advocate for longer prison sentences, others argue that alternative approaches are more effective.\n\nSupporters of longer prison sentences argue that harsher punishments deter potential offenders. Additionally, longer sentences keep dangerous criminals off the streets.\n\nHowever, critics point out that longer sentences are costly and may not address underlying causes. Alternative approaches may be more effective at preventing reoffending.\n\nIn my opinion, the most effective approach combines appropriately lengthy sentences with substantial investment in prevention and rehabilitation.',
            tips: '注意讨论双方观点、提出综合方案'
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
              { q: 'Let\'s talk about films and cinema. Do you enjoy watching films?', a: '参考回答: Yes, I\'m a big film fan. I watch films regularly - probably two or three a week on average.' },
              { q: 'What type of films do you prefer?', a: '参考回答: I\'m particularly drawn to science fiction and psychological thrillers. I love films that make you think.' },
              { q: 'Do you prefer watching films at home or at the cinema?', a: '参考回答: It depends. For big blockbusters, nothing beats the cinema experience. But for more dialogue-driven films, I prefer the comfort of my own home.' }
            ]
          },
          {
            part: 'Part 2: Long Turn (Cue Card)',
            cueCard: 'Describe a film that you enjoyed watching.',
            modelAnswer: '参考回答:\n\nI\'d like to talk about a film that really stayed with me after I watched it. It\'s called "Parasite," a South Korean film directed by Bong Joon-ho.\n\nI had heard a lot of buzz about this film and my expectations were quite high. without giving too much away, the film is about two families - one wealthy, one poor.\n\nWhat I loved most about this film was its storytelling. Every scene feels carefully crafted. The way the house itself is used as a metaphor is just brilliant.\n\nI enjoyed this film so much because it was completely unpredictable.',
            tips: '注意描述电影内容但不剧透、解释为什么喜欢'
          },
          {
            part: 'Part 3: Discussion',
            questions: [
              { q: 'How have films changed over the years?', a: '参考回答: Films have changed dramatically, largely due to technology. Visual effects have revolutionised what\'s possible on screen.' },
              { q: 'Do you think violent films have a negative influence on society?', a: '参考回答: This is a really debated topic. Some argue that exposure to screen violence desensitises people, but research on this link is inconclusive.' },
              { q: 'Should governments support their local film industries?', a: '参考回答: I believe they should, yes. Film industries contribute significantly to cultural identity and soft power.' }
            ]
          }
        ]
      }
    }
  };
  
  // 将数据添加到 IELTS_DATA
  IELTS_DATA.books.forEach(function(book) {
    if (extraTests[book.id]) {
      book.tests.push(extraTests[book.id]);
    }
  });
})();