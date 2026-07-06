/**
 * 剑桥雅思真题数据
 * 包含听力、阅读、写作、口语四部分题目与答案
 * 题目为雅思考试格式原创练习内容
 */

const IELTS_DATA = {
  books: [
    {
      id: 19,
      title: '剑19',
      fullTitle: '剑桥雅思19',
      year: 2024,
      desc: '最新真题，2024年发布',
      tests: [
        {
          id: 1,
          title: 'Test 1',
          listening: {
            title: '听力 Listening',
            intro: '共4部分，40题，约30分钟',
            sections: [
              {
                part: 'Part 1',
                context: '一位学生打电话咨询租房信息',
                type: '表格填空',
                audioScript: 'Receptionist: Good morning, Pine Court Apartments, how can I help you? Student: Hi, I saw your advertisement online and I\'d like to ask about available apartments.',
                questions: [
                  { q: 'Available from:', a: '15th August' },
                  { q: 'Type of apartment:', a: 'two-bedroom flat' },
                  { q: 'Monthly rent:', a: '850' },
                  { q: 'Deposit required:', a: 'one month\'s rent' },
                  { q: 'Address:', a: '27 Cherry Road' },
                  { q: 'Nearest bus stop:', a: '5 minutes\' walk' },
                  { q: 'Included in rent:', a: 'water bills' },
                  { q: 'Contact number:', a: '01743 556289' },
                  { q: 'Viewing time:', a: 'Saturday morning' },
                  { q: 'Reference needed from:', a: 'current landlord' }
                ]
              },
              {
                part: 'Part 2',
                context: '一个社区中心的介绍广播',
                type: '选择题 + 地图标注',
                audioScript: 'Welcome to the Riverside Community Centre. Today I\'ll be telling you about our facilities and upcoming events.',
                questions: [
                  { q: 'The community centre was originally built as a', a: 'C. school (C选项)' },
                  { q: 'The swimming pool is open from', a: 'B. 6am to 10pm (B选项)' },
                  { q: 'The new fitness class offered is', a: 'A. yoga (A选项)' },
                  { q: 'Location of the cafe:', a: 'next to the main entrance (地图标注E)' },
                  { q: 'Location of the library:', a: 'opposite the reception (地图标注C)' },
                  { q: 'Location of the sports hall:', a: 'behind the car park (地图标注A)' }
                ]
              },
              {
                part: 'Part 3',
                context: '两个学生讨论关于海洋污染的研究课题',
                type: '匹配题',
                audioScript: 'Student A: So for our environmental science project, I think we should focus on ocean pollution. Student B: That\'s a good idea. Let me share what I\'ve found so far.',
                questions: [
                  { q: 'Plastic waste in oceans - main source:', a: 'F. rivers carrying waste to sea' },
                  { q: 'Impact on marine birds:', a: 'C. ingestion of microplastics' },
                  { q: 'Effect on coral reefs:', a: 'A. bleaching and death' },
                  { q: 'Chemical pollution source:', a: 'E. agricultural runoff' },
                  { q: 'Recommended solution:', a: 'D. international policy changes' }
                ]
              },
              {
                part: 'Part 4',
                context: '关于蜜蜂种群下降的学术讲座',
                type: '笔记填空',
                audioScript: 'Today\'s lecture focuses on the alarming decline in bee populations worldwide and its implications for agriculture and ecosystems.',
                questions: [
                  { q: 'Bees pollinate approximately ___ of crops worldwide.', a: '75%' },
                  { q: 'The decline began noticeably in the', a: 'early 2000s' },
                  { q: 'One major cause is the use of', a: 'neonicotinoid pesticides' },
                  { q: 'Another factor is the spread of', a: 'Varroa mites' },
                  { q: 'Climate change affects bees\'', a: 'foraging patterns' },
                  { q: 'Loss of ___ reduces available nutrition.', a: 'wildflower meadows' },
                  { q: 'Some bee species are now classified as', a: 'endangered' },
                  { q: 'Urban areas can help by planting', a: 'bee-friendly gardens' },
                  { q: 'Researchers recommend creating', a: 'corridors between habitats' },
                  { q: 'Citizens can participate in', a: 'bee monitoring programs' }
                ]
              }
            ]
          },
          reading: {
            title: '阅读 Reading',
            intro: '共3篇文章，40题，60分钟',
            passages: [
              {
                title: 'Passage 1: The History of Tea',
                difficulty: '中等',
                summary: '茶叶从中国传播到世界各地的历史',
                questions: [
                  { type: '判断题 True/False/Not Given', q: 'Tea was first discovered in India.', a: 'FALSE - 茶叶最早发现于中国' },
                  { type: '判断题', q: 'The British East India Company was the first to bring tea to Europe.', a: 'NOT GIVEN - 文中未提及是否为第一家' },
                  { type: '判断题', q: 'Tea became popular in Britain in the 17th century.', a: 'TRUE - 17世纪茶叶在英国流行' },
                  { type: '判断题', q: 'The Boston Tea Party was a protest against tea taxation.', a: 'TRUE - 波士顿倾茶事件抗议茶叶税' },
                  { type: '填空题', q: 'Tea plants were first cultivated in ____.', a: 'southwest China' },
                  { type: '填空题', q: 'The Silk Road helped spread tea to ____.', a: 'Central Asia and the Middle East' },
                  { type: '填空题', q: 'In Britain, tea became more affordable after ____ were reduced.', a: 'import taxes' }
                ]
              },
              {
                title: 'Passage 2: The Psychology of Color',
                difficulty: '中偏难',
                summary: '颜色对人类心理和行为的影响研究',
                questions: [
                  { type: '段落标题匹配', q: 'Paragraph A', a: 'iv. Historical use of color symbolism' },
                  { type: '段落标题匹配', q: 'Paragraph B', a: 'vii. Color and consumer behavior' },
                  { type: '段落标题匹配', q: 'Paragraph C', a: 'ii. Cultural differences in color perception' },
                  { type: '段落标题匹配', q: 'Paragraph D', a: 'ix. Color in workplace design' },
                  { type: '选择题', q: 'What does the writer say about red?', a: 'B. It can increase heart rate and appetite' },
                  { type: '选择题', q: 'The study on blue environments found that:', a: 'C. people felt more calm and focused' },
                  { type: '填空题', q: 'Companies use color to influence ____.', a: 'brand perception and purchasing decisions' }
                ]
              },
              {
                title: 'Passage 3: Artificial Intelligence and Ethics',
                difficulty: '难',
                summary: '人工智能发展中的伦理问题与挑战',
                questions: [
                  { type: 'Yes/No/Not Given', q: 'AI systems can make completely unbiased decisions.', a: 'NO - AI可能继承训练数据中的偏见' },
                  { type: 'Yes/No/Not Given', q: 'All countries have agreed on AI regulation standards.', a: 'NO - 各国AI监管标准不一' },
                  { type: 'Yes/No/Not Given', q: 'AI could potentially replace all human jobs by 2050.', a: 'NOT GIVEN - 文中未做此预测' },
                  { type: '选择题', q: 'The main ethical concern about AI is:', a: 'A. accountability and transparency' },
                  { type: '选择题', q: 'The author\'s attitude toward AI development is:', a: 'D. cautiously optimistic' },
                  { type: '摘要填空', q: 'AI ethics requires collaboration between ____ and ___.', a: 'technologists / policymakers' }
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
                prompt: 'The graph below shows the percentage of people using different modes of transport to commute to work in one European city between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
                modelAnswer: 'The line graph illustrates changes in the proportions of commuters using four different transport methods in a European city over a twenty-year period from 2000 to 2020.\n\nOverall, while the use of cars declined steadily, public transport and cycling saw significant increases. Walking remained relatively stable throughout the period.\n\nIn 2000, the car was the most popular mode of transport, used by approximately 55% of commuters. However, this figure fell dramatically to around 30% by 2020. Conversely, the proportion of people using public transport rose from about 25% to nearly 40%, making it the most common commuting method by the end of the period.\n\nCycling, which accounted for only about 5% of commuters in 2000, experienced a fourfold increase to roughly 20% by 2020. Meanwhile, the percentage of people walking to work remained fairly constant at around 10% throughout the two decades.\n\nThe data suggests a clear shift away from private car use toward more sustainable transport options over the twenty-year period.',
                tips: '注意时态使用（过去时）、数据对比、趋势总结、至少150词'
              },
              {
                task: 'Task 2 (大作文)',
                type: '议论文',
                prompt: 'Some people believe that universities should focus on providing academic skills, while others think they should prepare students for their future careers. Discuss both views and give your own opinion. Write at least 250 words.',
                modelAnswer: 'The role of universities has long been a subject of debate. While some argue that higher education should prioritise academic knowledge, others contend that universities ought to equip students with practical career skills. In my opinion, both aspects are essential and should be integrated.\n\nOn the one hand, those who advocate for an academic focus argue that universities are fundamentally centres of learning and research. By studying theoretical concepts, students develop critical thinking, analytical abilities, and a deep understanding of their chosen fields. These intellectual skills form the foundation upon which all professional expertise is built. Furthermore, academic research conducted at universities drives innovation and contributes to the advancement of human knowledge, which ultimately benefits society as a whole.\n\nOn the other hand, supporters of career-oriented education point out that the primary reason most students attend university is to improve their employment prospects. In today\'s competitive job market, employers increasingly seek graduates who possess practical skills such as teamwork, communication, and digital literacy. Universities that incorporate internships, industry projects, and professional certifications into their programmes produce graduates who are better prepared for the workplace. This approach also helps address the skills gap that many industries currently face.\n\nIn my view, the dichotomy between academic and career-focused education is a false one. The most effective university programmes seamlessly blend theoretical knowledge with practical application. For instance, a computer science student who understands both the mathematical foundations of algorithms and has experience building real-world software applications will be better equipped than one who has studied only theory or only coding.\n\nIn conclusion, universities should not be forced to choose between academic rigour and career preparation. By integrating both elements, they can produce graduates who are not only intellectually capable but also professionally competent, thereby fulfilling their dual mission of advancing knowledge and serving society.',
                tips: '结构清晰（引言-观点1-观点2-个人观点-结论）、词汇多样、连接词使用、至少250词'
              }
            ]
          },
          speaking: {
            title: '口语 Speaking',
            intro: '共3部分，约11-14分钟',
            parts: [
              {
                part: 'Part 1: Introduction & Interview',
                intro: '考官提问日常话题，约4-5分钟',
                questions: [
                  { q: 'Let\'s talk about your hometown. Where is it?', a: '参考回答: I come from Chengdu, which is the capital city of Sichuan Province in southwest China. It\'s a large, vibrant city known for its spicy food, particularly the famous hotpot, and of course, the giant pandas.' },
                  { q: 'What do you like most about your hometown?', a: '参考回答: What I love most about Chengdu is its relaxed pace of life. Despite being a major city, people here really know how to enjoy themselves. The teahouses, the parks, and the food culture make it a wonderful place to live.' },
                  { q: 'Is there anything you would change about it?', a: '参考回答: If I could change one thing, it would probably be the traffic. As the city has grown rapidly, congestion has become quite a problem, especially during rush hours. Better public transport would make a big difference.' },
                  { q: 'Let\'s move on to talk about reading. Do you enjoy reading?', a: '参考回答: Yes, I\'m quite fond of reading. I try to read for at least half an hour every day, usually before bed. I enjoy both fiction and non-fiction, though I tend to read more novels.' }
                ]
              },
              {
                part: 'Part 2: Long Turn (Cue Card)',
                intro: '根据题目卡准备1分钟，独自陈述2分钟',
                cueCard: 'Describe a skill you would like to learn in the future.\n\nYou should say:\n- what the skill is\n- how you would learn it\n- why you want to learn it\n- and explain how this skill might benefit you in the future.',
                modelAnswer: '参考回答:\n\nA skill I\'ve been wanting to learn for quite some time now is photography. I\'ve always been fascinated by how a single photograph can capture a moment, tell a story, or convey an emotion that words sometimes cannot.\n\nIf I were to learn photography, I would probably start by taking an online course to understand the technical fundamentals, such as aperture, shutter speed, and ISO settings. Once I have a grasp of the basics, I\'d practice regularly by taking photos of different subjects - landscapes, portraits, street scenes. I\'d also join a local photography club where I could learn from more experienced photographers and get feedback on my work.\n\nThe reason I want to learn photography is that I love traveling, and I feel frustrated that my phone photos never quite capture the beauty of the places I visit. I want to be able to take photos that do justice to the stunning landscapes and vibrant cultures I encounter.\n\nIn terms of future benefits, I think photography would not only enhance my travel experiences but could also become a creative outlet and even a potential side career. In today\'s visual world, quality photographs are increasingly valuable for social media, marketing, and storytelling. Beyond the practical benefits, I believe it would help me see the world differently - to notice light, composition, and details that I might otherwise overlook.',
                tips: '注意时间管理、使用连接词、展开细节、自然表达'
              },
              {
                part: 'Part 3: Discussion',
                intro: '围绕Part 2话题深入讨论，约4-5分钟',
                questions: [
                  { q: 'Do you think schools should teach more practical skills?', a: '参考回答: Absolutely. While academic subjects are important, I believe schools should place greater emphasis on practical skills like financial literacy, cooking, basic first aid, and digital skills. These are essential life skills that every adult needs, yet many young people leave school without them. Incorporating such skills into the curriculum would better prepare students for real-world challenges.' },
                  { q: 'How has technology changed the way people learn new skills?', a: '参考回答: Technology has revolutionised learning in several ways. Firstly, the internet has made information freely accessible - you can find tutorials for almost anything on YouTube. Secondly, online platforms like Coursera and Udemy offer structured courses from top institutions at low cost. Thirdly, apps with gamification elements make learning more engaging. However, I\'d also say technology can be a distraction, and the abundance of information can sometimes make it hard to identify quality content.' },
                  { q: 'Some people say it\'s harder to learn new skills as you get older. Do you agree?', a: '参考回答: To some extent, yes. Neurologically, our brains are more plastic when we\'re young, which makes absorbing new information easier. However, I think the bigger barrier for adults is often time and motivation rather than ability. Adults have work and family commitments that limit their learning time. On the positive side, adults bring life experience and self-discipline that can actually make them more effective learners in certain areas.' }
                ]
              }
            ]
          }
        },
      ]
    },
    {
      id: 18,
      title: '剑18',
      fullTitle: '剑桥雅思18',
      year: 2023,
      desc: '2023年发布真题',
      tests: [
        {
          id: 1,
          title: 'Test 1',
          listening: {
            title: '听力 Listening',
            intro: '共4部分，40题，约30分钟',
            sections: [
              {
                part: 'Part 1',
                context: '报名健身中心的对话',
                type: '表格填空',
                questions: [
                  { q: 'Membership type:', a: 'annual gold' },
                  { q: 'Start date:', a: '1st September' },
                  { q: 'Monthly fee:', a: '45' },
                  { q: 'Includes access to:', a: 'pool and gym' },
                  { q: 'Personal trainer sessions:', a: '2 free sessions' },
                  { q: 'Parking:', a: 'free for members' },
                  { q: 'Opening hours (weekday):', a: '6am - 11pm' },
                  { q: 'Address:', a: '14 Market Street' },
                  { q: 'Emergency contact:', a: '0800 456789' },
                  { q: 'Cancellation policy:', a: '30 days notice' }
                ]
              },
              {
                part: 'Part 2',
                context: '农场参观导览',
                type: '选择题 + 地图标注',
                questions: [
                  { q: 'The farm has been operating for', a: 'C. over 100 years (C选项)' },
                  { q: 'Visitors can currently see', a: 'B. newborn lambs (B选项)' },
                  { q: 'The farm shop sells', a: 'A. homemade cheese (A选项)' },
                  { q: 'Animal barn location:', a: '地图标注 - north field' },
                  { q: 'Picnic area location:', a: '地图标注 - near the pond' }
                ]
              },
              {
                part: 'Part 3',
                context: '两名学生讨论商业案例研究',
                type: '选择题 + 匹配题',
                questions: [
                  { q: 'The case study focuses on a company that:', a: 'B. shifted to online retail (B选项)' },
                  { q: 'The main challenge was:', a: 'C. maintaining customer trust (C选项)' },
                  { q: 'James thinks the company\'s strategy was:', a: 'A. innovative but risky (A选项)' },
                  { q: 'Presentation format:', a: 'F. role-play format' },
                  { q: 'Visual aids needed:', a: 'D. slides and handouts' }
                ]
              },
              {
                part: 'Part 4',
                context: '关于古代贸易路线的学术讲座',
                type: '笔记填空',
                questions: [
                  { q: 'The Silk Road spanned approximately ___ km.', a: '6,400' },
                  { q: 'It connected China with the ____.', a: 'Mediterranean' },
                  { q: 'The route was named by a German ____ in 1877.', a: 'geographer' },
                  { q: 'Silk was China\'s main ____ for centuries.', a: 'export' },
                  { q: 'Other traded goods included ____ and jade.', a: 'spices' },
                  { q: 'The route also facilitated ____ exchange.', a: 'cultural' },
                  { q: 'Buddhism spread to China via this route in the ___ century.', a: 'first' },
                  { q: 'Caravanserai were ____ for travelers.', a: 'rest stops' },
                  { q: 'The route declined after the development of ____ routes.', a: 'sea' },
                  { q: 'Today, parts of the route are ____ sites.', a: 'UNESCO World Heritage' }
                ]
              }
            ]
          },
          reading: {
            title: '阅读 Reading',
            intro: '共3篇文章，40题，60分钟',
            passages: [
              {
                title: 'Passage 1: The Pomelo and the Citrus Family',
                difficulty: '中等',
                summary: '柚子及柑橘类水果的起源与传播',
                questions: [
                  { type: '判断题', q: 'All citrus fruits originate from a single ancestor species.', a: 'TRUE' },
                  { type: '判断题', q: 'The pomelo is native to Southeast Asia.', a: 'TRUE' },
                  { type: '判断题', q: 'Grapefruit is a natural hybrid of pomelo and orange.', a: 'NOT GIVEN' },
                  { type: '填空题', q: 'The original citrus ancestor is believed to have grown in ____.', a: 'the foothills of the Himalayas' },
                  { type: '填空题', q: 'Citrus fruits were valued for their ____ properties.', a: 'medicinal' },
                  { type: '填空题', q: 'The word "pomelo" comes from the ____ language.', a: 'Dutch' }
                ]
              },
              {
                title: 'Passage 2: The Construction of Stonehenge',
                difficulty: '中偏难',
                summary: '巨石阵建造之谜与新研究发现',
                questions: [
                  { type: '段落标题匹配', q: 'Paragraph A', a: 'i. New dating evidence' },
                  { type: '段落标题匹配', q: 'Paragraph B', a: 'v. The bluestones mystery' },
                  { type: '段落标题匹配', q: 'Paragraph C', a: 'iii. Transport methods' },
                  { type: '选择题', q: 'Stonehenge was built primarily during:', a: 'B. 3000-2000 BCE' },
                  { type: '选择题', q: 'The bluestones likely came from:', a: 'C. the Preseli Hills in Wales' },
                  { type: '填空题', q: 'Recent research suggests stones were transported by ____.', a: 'water and land routes' }
                ]
              },
              {
                title: 'Passage 3: The Concept of Time Across Cultures',
                difficulty: '难',
                summary: '不同文化对时间概念的理解差异',
                questions: [
                  { type: 'Yes/No/Not Given', q: 'All cultures perceive time as linear.', a: 'NO - 部分文化视时间为循环' },
                  { type: 'Yes/No/Not Given', q: 'Monochronic cultures value punctuality more than polychronic cultures.', a: 'YES' },
                  { type: '选择题', q: 'The concept of "social time" refers to:', a: 'D. culturally influenced perceptions of time' },
                  { type: '选择题', q: 'The author suggests that globalization:', a: 'B. creates tension between different time orientations' },
                  { type: '摘要填空', q: 'Understanding cultural time concepts helps avoid ____.', a: 'misunderstandings in international business' }
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
                prompt: 'The table below shows the results of a survey about the types of books that people of different age groups read in one country in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
                modelAnswer: 'The table presents survey data on reading preferences across five book genres among four age groups in a particular country in 2022.\n\nOverall, fiction was the most popular genre across all age groups, while biography was the least preferred. Reading habits varied considerably by age, with younger readers favouring fiction and comics, and older readers showing more interest in history and biography.\n\nAmong readers aged 18-25, fiction accounted for 42% of books read, followed by comics at 25%. Non-fiction and history each represented 15%, while biography made up only 3%. The 26-40 age group showed similar preferences, with fiction at 38% and comics dropping to 18%, while non-fiction rose to 22%.\n\nFor the 41-60 age bracket, fiction remained the top choice at 30%, but history gained significant popularity at 28%. Non-fiction stayed steady at 22%, while biography increased to 12%. Among readers over 60, history became the most read genre at 35%, followed by fiction at 28% and biography at 18%.\n\nThe data reveals a clear age-related pattern: as readers grow older, their preferences shift from entertainment-focused genres toward more informational ones.',
                tips: '注意表格数据的横向和纵向对比'
              },
              {
                task: 'Task 2 (大作文)',
                type: '议论文',
                prompt: 'Some people think that the government should invest more money in teaching science subjects, while others believe that more funding should be given to other subjects. Discuss both views and give your own opinion. Write at least 250 words.',
                modelAnswer: 'The allocation of educational funding is a topic of ongoing debate. While some argue that governments should prioritise science subjects, others contend that equal or greater investment should be directed toward other disciplines. I believe that a balanced approach is most beneficial for society.\n\nAdvocates for increased science funding point to the crucial role that science and technology play in modern society. Scientific research drives medical breakthroughs, technological innovation, and environmental solutions. In an increasingly competitive global economy, nations with strong scientific capabilities tend to enjoy greater economic prosperity. Furthermore, STEM (Science, Technology, Engineering, and Mathematics) skills are in high demand in the job market, and investing in science education helps address skills shortages in critical sectors.\n\nOn the other hand, those who support funding for other subjects argue that a well-rounded education is essential for societal progress. Subjects such as history, literature, philosophy, and the arts foster critical thinking, cultural awareness, and empathy. These qualities are equally important for addressing complex social issues and maintaining a cohesive society. Moreover, creative industries contribute significantly to the economy, and subjects like music, art, and design nurture the creativity that drives innovation in all fields.\n\nIn my opinion, the debate presents a false dichotomy. Science and the humanities are not competing priorities but complementary ones. Scientific advancement without ethical reasoning or cultural understanding can lead to harmful consequences, while purely humanistic education without scientific literacy leaves citizens ill-equipped to understand modern challenges. The most effective educational systems invest in both areas, recognising that different disciplines contribute uniquely to human knowledge and societal wellbeing.\n\nIn conclusion, rather than choosing between science and other subjects, governments should strive for balanced educational funding. This approach ensures that students develop both the technical skills and the human understanding needed to navigate an increasingly complex world.',
                tips: '注意讨论双方观点、给出明确个人立场、论证充分'
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
                  { q: 'Let\'s talk about what you do. Do you work or are you a student?', a: '参考回答: I\'m currently a university student studying business administration. I\'m in my final year, so I\'m also doing an internship at a marketing company to gain some practical experience before I graduate.' },
                  { q: 'What do you enjoy about your studies/work?', a: '参考回答: I really enjoy the variety of subjects we cover. Business administration touches on so many different areas - finance, marketing, human resources, and strategy. I find it fascinating how these different aspects connect and influence each other in the real world.' },
                  { q: 'Is there anything you don\'t enjoy about it?', a: '参考回答: To be honest, the exam pressure can be quite stressful. We have a lot of assessments packed into a short period, and sometimes it feels like we\'re memorising information rather than truly understanding it. I wish there were more project-based assessments.' },
                  { q: 'What are your future plans after graduation?', a: '参考回答: I\'m hoping to work in digital marketing for a few years to build my career and gain experience. Eventually, I\'d like to start my own business, perhaps an e-commerce venture. But first things first - I need to focus on finishing my degree!' }
                ]
              },
              {
                part: 'Part 2: Long Turn (Cue Card)',
                cueCard: 'Describe a place you would like to visit in the future.\n\nYou should say:\n- where it is\n- how you would get there\n- what you would do there\n- and explain why you would like to visit this place.',
                modelAnswer: '参考回答:\n\nA place I\'ve always dreamed of visiting is Iceland. It\'s a small Nordic island nation in the North Atlantic Ocean, known for its dramatic landscapes and natural wonders.\n\nTo get there from China, I would need to take a long-haul flight, probably with a layover in a European city like Copenhagen or London. The total journey would take around 15 to 20 hours. Once in Iceland, I\'d rent a car and drive along the famous Ring Road, which circles the entire island.\n\nThere are so many things I\'d love to do there. First and foremost, I want to see the Northern Lights, which are visible during the winter months. I\'ve seen countless photos of these ethereal green and purple lights dancing across the sky, and I can only imagine how breathtaking they must be in person. I\'d also want to visit the Blue Lagoon, a geothermal spa where you can soak in warm, mineral-rich waters surrounded by volcanic landscapes. Other must-see attractions include the stunning waterfalls like Gullfoss and Seljalandsfoss, the black sand beaches near Vik, and the Vatnajokull glacier.\n\nThe reason I\'m so drawn to Iceland is its unique, almost otherworldly landscape. The combination of volcanoes, glaciers, geysers, and hot springs creates scenery that looks like it belongs on another planet. I\'ve always been fascinated by nature\'s power and beauty, and Iceland seems to concentrate all of that into one small country. Additionally, I\'m interested in learning about Icelandic culture and their commitment to environmental sustainability, as the country runs almost entirely on renewable energy.\n\nI hope to make this trip a reality within the next few years, ideally during winter to maximise my chances of seeing the Northern Lights.',
                tips: '注意描述细节、个人感受表达、逻辑连贯'
              },
              {
                part: 'Part 3: Discussion',
                questions: [
                  { q: 'Why do people enjoy traveling to different places?', a: '参考回答: I think there are several reasons. Primarily, travel allows people to experience different cultures, cuisines, and ways of life, which broadens their perspective. It also provides a break from routine, which can be refreshing and rejuvenating. Additionally, many people travel to see natural or historical wonders that they\'ve only read about or seen in pictures, fulfilling a sense of curiosity and adventure.' },
                  { q: 'Do you think tourism has a positive or negative impact on local communities?', a: '参考回答: It\'s a double-edged sword, really. On the positive side, tourism brings economic benefits, creating jobs and supporting local businesses. It can also help preserve cultural heritage and fund conservation efforts. However, mass tourism can lead to problems like environmental degradation, overcrowding, and the commercialisation of local culture. I think the key is sustainable tourism that benefits local communities while minimising negative impacts.' },
                  { q: 'How might technology change the way people travel in the future?', a: '参考回答: Technology is already transforming travel, and I think this will accelerate. Virtual and augmented reality might allow people to preview destinations before visiting, helping them make better choices. AI-powered translation tools will make communication easier in foreign countries. We might also see more personalised travel experiences driven by AI recommendations. However, I hope technology doesn\'t replace the authentic experience of discovering a new place for oneself.' }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 17,
      title: '剑17',
      fullTitle: '剑桥雅思17',
      year: 2022,
      desc: '2022年发布真题',
      tests: [
        {
          id: 1,
          title: 'Test 1',
          listening: {
            title: '听力 Listening',
            intro: '共4部分，40题，约30分钟',
            sections: [
              {
                part: 'Part 1',
                context: '预订酒店宴会的电话对话',
                type: '表格填空',
                questions: [
                  { q: 'Event type:', a: 'wedding reception' },
                  { q: 'Date:', a: '23rd October' },
                  { q: 'Number of guests:', a: '80' },
                  { q: 'Room:', a: 'Grand Ballroom' },
                  { q: 'Menu choice:', a: 'set menu B' },
                  { q: 'Dietary requirements:', a: '5 vegetarian meals' },
                  { q: 'Cake included:', a: 'yes, 3-tier' },
                  { q: 'Decorations:', a: 'white and gold theme' },
                  { q: 'Total cost:', a: '3,200' },
                  { q: 'Contact email:', a: 'sarah.m@email.com' }
                ]
              },
              {
                part: 'Part 2',
                context: '当地公园改造计划的介绍',
                type: '选择题 + 地图标注',
                questions: [
                  { q: 'The park was originally established in', a: 'A. 1920 (A选项)' },
                  { q: 'The main improvement will be', a: 'C. new playground equipment (C选项)' },
                  { q: 'The project is funded by', a: 'B. local council and donations (B选项)' },
                  { q: 'New cafe location:', a: '地图标注 - near the south gate' },
                  { q: 'Dog park area:', a: '地图标注 - northeast corner' }
                ]
              },
              {
                part: 'Part 3',
                context: '讨论关于记忆研究的实验设计',
                type: '选择题 + 匹配题',
                questions: [
                  { q: 'The experiment tests:', a: 'C. short-term memory capacity (C选项)' },
                  { q: 'Participants will be:', a: 'A. university students (A选项)' },
                  { q: 'The variable being tested is:', a: 'B. information presentation speed (B选项)' },
                  { q: 'Hypothesis:', a: 'F. faster presentation reduces recall' },
                  { q: 'Control group task:', a: 'D. standard speed presentation' }
                ]
              },
              {
                part: 'Part 4',
                context: '关于海洋深处生物探索的讲座',
                type: '笔记填空',
                questions: [
                  { q: 'The deep ocean covers ___ of Earth\'s surface.', a: '60%' },
                  { q: 'Only ___ of the deep ocean has been explored.', a: '5%' },
                  { q: 'Deep-sea creatures survive in conditions of extreme ____.', a: 'pressure and darkness' },
                  { q: 'Hydrothermal vents support ecosystems based on ____.', a: 'chemosynthesis' },
                  { q: 'The deepest point is the ____ Trench.', a: 'Mariana' },
                  { q: 'Bioluminescence is used for communication and ____.', a: 'hunting' },
                  { q: 'Some deep-sea fish can go without food for ____.', a: 'months' },
                  { q: 'Research submersibles can dive to about ____ deep.', a: '6,000 metres' },
                  { q: 'New species are discovered on almost every ____.', a: 'expedition' },
                  { q: 'Protecting deep-sea ecosystems requires ____.', a: 'international cooperation' }
                ]
              }
            ]
          },
          reading: {
            title: '阅读 Reading',
            intro: '共3篇文章，40题，60分钟',
            passages: [
              {
                title: 'Passage 1: The Development of the Bicycle',
                difficulty: '中等',
                summary: '自行车的发展历史',
                questions: [
                  { type: '判断题', q: 'The first bicycle had pedals.', a: 'FALSE - 早期自行车无踏板' },
                  { type: '判断题', q: 'The pneumatic tyre was invented by a veterinarian.', a: 'TRUE - John Dunlop是兽医' },
                  { type: '判断题', q: 'Bicycles were initially popular among the wealthy.', a: 'TRUE' },
                  { type: '填空题', q: 'The first bicycle was called the ____.', a: 'Draisienne (or running machine)' },
                  { type: '填空题', q: 'Pedals were added by ____ in the 1860s.', a: 'Pierre Michaux' },
                  { type: '填空题', q: 'The safety bicycle featured ____ wheels of equal size.', a: 'two' }
                ]
              },
              {
                title: 'Passage 2: The Science of Taste',
                difficulty: '中偏难',
                summary: '味觉科学：人类如何感知味道',
                questions: [
                  { type: '段落标题匹配', q: 'Paragraph A', a: 'ii. The five basic tastes' },
                  { type: '段落标题匹配', q: 'Paragraph B', a: 'v. How taste receptors work' },
                  { type: '段落标题匹配', q: 'Paragraph C', a: 'vii. The role of smell in flavour' },
                  { type: '选择题', q: 'Umami is best described as:', a: 'C. a savoury taste' },
                  { type: '选择题', q: 'Supertasters have:', a: 'D. more taste buds than average' },
                  { type: '填空题', q: 'Flavour is a combination of taste and ____.', a: 'smell' }
                ]
              },
              {
                title: 'Passage 3: The Impact of Social Media on Democracy',
                difficulty: '难',
                summary: '社交媒体对民主制度的影响',
                questions: [
                  { type: 'Yes/No/Not Given', q: 'Social media has universally strengthened democratic processes.', a: 'NO - 也有负面影响' },
                  { type: 'Yes/No/Not Given', q: 'Echo chambers exist only on social media.', a: 'NO - 传统媒体也有' },
                  { type: '选择题', q: 'The main concern about social media and politics is:', a: 'B. the spread of misinformation' },
                  { type: '选择题', q: 'The author\'s conclusion is that social media:', a: 'C. has both positive and negative effects on democracy' },
                  { type: '摘要填空', q: 'Addressing misinformation requires ____ and ___.', a: 'media literacy / platform regulation' }
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
                prompt: 'The pie charts below show the main reasons for migration to and from a particular country in 2019. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
                modelAnswer: 'The pie charts illustrate the primary reasons for people migrating to and from a specific country in the year 2019.\n\nOverall, employment was the most common reason for both immigration and emigration, though it accounted for a larger proportion of those entering the country. Family reasons were also significant in both directions, while study and other reasons made up smaller proportions.\n\nLooking at immigration, employment was the leading motivation, cited by 42% of immigrants. Family reunification was the second most common reason at 30%, followed by study at 18%. The remaining 10% migrated for other reasons.\n\nRegarding emigration, employment again topped the list but with a slightly higher proportion of 38%. Family reasons accounted for 25% of those leaving the country. Interestingly, study was a less common reason for emigration at only 12%, while "other" reasons represented a more substantial 25%, the largest difference between the two charts.\n\nThe data suggests that this country was attractive to job seekers and students, as reflected by the higher proportions of people migrating for employment and study purposes. Meanwhile, the larger percentage of people leaving for "other" reasons could indicate various personal or lifestyle factors prompting emigration.',
                tips: '注意两个饼图的对比、比例描述、主要特征总结'
              },
              {
                task: 'Task 2 (大作文)',
                type: '议论文',
                prompt: 'In the future, nobody will buy printed newspapers or books because they will be able to read everything they want online without paying. To what extent do you agree or disagree with this statement? Write at least 250 words.',
                modelAnswer: 'The assertion that printed newspapers and books will become obsolete as people shift to free online content is a provocative one. While I acknowledge the significant impact of digital media on reading habits, I disagree with the extreme view that print will disappear entirely.\n\nAdmittedly, the trend toward digital reading is undeniable. The convenience, accessibility, and often free nature of online content have attracted millions of readers. Digital platforms offer instant access to a vast array of information, searchable text, and interactive features that print cannot match. For news in particular, the speed of online publishing has made printed newspapers seem slow and outdated. Many major newspapers have already shifted their focus to digital platforms, and some have ceased print publication altogether.\n\nHowever, there are several reasons why printed materials are likely to persist. Firstly, many readers still value the tactile experience of holding a physical book or newspaper. Research has shown that reading from paper can improve comprehension and retention compared to screen reading, as it reduces distractions and eye strain. The physical presence of books also holds emotional and aesthetic value - people enjoy building personal libraries and giving books as gifts.\n\nSecondly, the assumption that all online content will remain free is questionable. As advertising revenues decline, many publishers are introducing paywalls and subscription models. Quality journalism and well-researched books require investment, and creators need sustainable revenue models. If online content becomes paid, the price advantage over print diminishes significantly.\n\nThirdly, printed materials serve important functions beyond mere information delivery. Books are cultural artifacts, and printed newspapers provide a curated, finite reading experience that many find preferable to the endless scroll of digital media. Additionally, in regions with unreliable internet access, print remains an essential medium.\n\nIn conclusion, while digital reading will undoubtedly continue to grow and may dominate certain sectors, I believe printed books and newspapers will retain a meaningful, if reduced, role. The coexistence of print and digital media is more likely than the complete extinction of either format.',
                tips: '注意立场明确、论证有力、让步段落使用'
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
                  { q: 'Let\'s talk about your free time. What do you usually do in your free time?', a: '参考回答: In my free time, I enjoy a mix of activities. I\'m quite active, so I usually go running or play basketball a few times a week. I also love watching films, especially documentaries, and I try to read regularly. On weekends, I often hang out with friends, trying new restaurants or exploring different parts of the city.' },
                  { q: 'Has your free time changed since you were a child?', a: '参考回答: Definitely. When I was a child, my free time was much more unstructured - I\'d play outside with neighbourhood kids for hours. Now, my free time is more limited and I tend to plan it more carefully. I also spend more time on digital activities now, though I try to balance that with physical exercise.' },
                  { q: 'Do you think it\'s important to have free time?', a: '参考回答: Absolutely. I think free time is essential for maintaining a healthy work-life balance. It gives us a chance to recharge, pursue personal interests, and spend quality time with loved ones. Without adequate free time, people can easily become stressed and burned out.' }
                ]
              },
              {
                part: 'Part 2: Long Turn (Cue Card)',
                cueCard: 'Describe an activity that you usually do when you have free time.\n\nYou should say:\n- what the activity is\n- how often you do it\n- who you do it with\n- and explain why you enjoy this activity.',
                modelAnswer: '参考回答:\n\nAn activity that I regularly do in my free time is hiking. Living near some beautiful mountain trails, I\'ve developed a real passion for exploring nature on foot.\n\nI try to go hiking at least twice a month, usually on weekends when I have more time. Sometimes I\'ll do a short hike on a weekday evening if the weather is nice and I finish work early. During holidays, I try to plan longer, more challenging hikes in different locations.\n\nI usually go with a small group of friends who share my interest in the outdoors. We\'ve been hiking together for about three years now, and it\'s become a tradition of sorts. Occasionally, I\'ll go alone if I need some quiet time to think and reflect - there\'s something meditative about walking alone in nature.\n\nThere are several reasons why I enjoy hiking so much. First and foremost, it\'s excellent exercise. Unlike going to the gym, hiking doesn\'t feel like a workout because you\'re surrounded by beautiful scenery. The physical challenge of climbing steep trails gives me a sense of accomplishment, and reaching a summit offers spectacular views that make the effort worthwhile.\n\nSecondly, hiking is a wonderful way to escape from the stress of city life. Being surrounded by trees, breathing fresh air, and listening to the sounds of nature - birds singing, leaves rustling, water flowing - has a remarkably calming effect. I always come back from a hike feeling refreshed and re-energised.\n\nFinally, hiking has strengthened my friendships. Spending hours walking and talking together creates a special bond, and we\'ve shared some unforgettable experiences and conversations on those trails. It\'s also given me a deeper appreciation for the natural world and a stronger commitment to environmental conservation.',
                tips: '注意描述频率、人物、原因、个人感受'
              },
              {
                part: 'Part 3: Discussion',
                questions: [
                  { q: 'Do you think people today have more or less free time than in the past?', a: '参考回答: It\'s an interesting paradox. Technologically, we should have more free time - appliances, computers, and smartphones have made many tasks faster and easier. Yet surveys consistently show that people feel busier than ever. I think this is partly because technology has blurred the boundary between work and personal life, with people constantly checking emails and messages. There\'s also a cultural tendency to fill every available moment with activity, making genuine free time scarce.' },
                  { q: 'Should employers give their employees more free time?', a: '参考回答: I strongly believe they should. Research consistently shows that excessive working hours reduce productivity and increase health problems. Countries with shorter working weeks, like some Scandinavian nations, often have higher productivity and greater life satisfaction. More free time allows employees to rest, pursue personal development, and spend time with family, which ultimately benefits both the individual and the employer through improved focus and motivation.' },
                  { q: 'How might technology change the way people spend their free time in the future?', a: '参考回答: Technology is already reshaping leisure time significantly. Virtual reality could create new forms of entertainment and social interaction. AI might help people discover new hobbies tailored to their interests. However, I\'m concerned that increased screen time could further reduce physical activity and face-to-face social interaction. The challenge will be using technology to enhance rather than replace authentic experiences. Ideally, technology should free up more time for meaningful activities rather than consuming it with endless scrolling.' }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 16,
      title: '剑16',
      fullTitle: '剑桥雅思16',
      year: 2021,
      desc: '2021年发布真题',
      tests: []
    },
    {
      id: 15,
      title: '剑15',
      fullTitle: '剑桥雅思15',
      year: 2020,
      desc: '2020年发布真题',
      tests: []
    },
    {
      id: 14,
      title: '剑14',
      fullTitle: '剑桥雅思14',
      year: 2019,
      desc: '2019年发布真题',
      tests: []
    },
    {
      id: 13,
      title: '剑13',
      fullTitle: '剑桥雅思13',
      year: 2018,
      desc: '2018年发布真题',
      tests: []
    },
    {
      id: 12,
      title: '剑12',
      fullTitle: '剑桥雅思12',
      year: 2017,
      desc: '2017年发布真题',
      tests: []
    },
    {
      id: 11,
      title: '剑11',
      fullTitle: '剑桥雅思11',
      year: 2016,
      desc: '2016年发布真题',
      tests: []
    }
  ]
};
