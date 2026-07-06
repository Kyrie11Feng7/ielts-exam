/**
 * 剑桥雅思17/18/19 补充真题数据 - Test 2
 * 题目为雅思考试格式原创练习内容（话题与 Test 1 完全不同）
 * 数据结构与 data.js / data-extra.js 完全一致
 */

(function () {
  var extraTests = {

    // ========== 剑17 Test 2 ==========
    17: {
      id: 2,
      title: `Test 2`,
      listening: {
        title: `听力 Listening`,
        intro: `共4部分，40题，约30分钟`,
        sections: [
          {
            part: `Part 1`,
            context: `一名学生电话咨询语言交换俱乐部的会员注册`,
            type: `表格填空`,
            questions: [
              { q: `Club name:`, a: `Global Friends` },
              { q: `Membership type:`, a: `annual` },
              { q: `Annual fee:`, a: `40` },
              { q: `Meeting day:`, a: `Wednesday` },
              { q: `Meeting time:`, a: `7pm` },
              { q: `Venue:`, a: `Central Library` },
              { q: `Languages offered:`, a: `Spanish and French` },
              { q: `First event date:`, a: `5th October` },
              { q: `Organiser name:`, a: `Maria Lopez` },
              { q: `Contact email:`, a: `info@globalfriends.org` }
            ]
          },
          {
            part: `Part 2`,
            context: `科技馆的导览广播`,
            type: `选择题 + 地图标注`,
            questions: [
              { q: `The science museum first opened to the public in`, a: `B. 1998 (B选项)` },
              { q: `The planetarium show is presented`, a: `A. every hour (A选项)` },
              { q: `The most visited exhibit is about`, a: `C. robotics and AI (C选项)` },
              { q: `Location of the cafe:`, a: `ground floor, near the entrance (地图标注B)` },
              { q: `Location of the gift shop:`, a: `first floor, east wing (地图标注E)` },
              { q: `Location of the hands-on lab:`, a: `basement level (地图标注F)` }
            ]
          },
          {
            part: `Part 3`,
            context: `两名学生与导师讨论关于海岸洪水的气候研究课题`,
            type: `选择题 + 匹配题`,
            questions: [
              { q: `The main focus of their research project is`, a: `B. coastal flooding (B选项)` },
              { q: `The data they will analyse comes from`, a: `C. satellite records (C选项)` },
              { q: `Cause of current sea-level rise:`, a: `D. melting ice sheets` },
              { q: `Effect on coastal cities:`, a: `A. more frequent flooding` },
              { q: `Recommended local response:`, a: `F. building sea defences` }
            ]
          },
          {
            part: `Part 4`,
            context: `关于植物之间如何"交流"的学术讲座`,
            type: `笔记填空`,
            questions: [
              { q: `Plants mainly communicate through ___ signals.`, a: `chemical` },
              { q: `The "wood wide web" is a network of ___ in the soil.`, a: `fungi` },
              { q: `Trees can pass ___ to neighbouring plants via the network.`, a: `sugar` },
              { q: `Plants can recognise their own ___ (kin).`, a: `relatives` },
              { q: `When eaten, a plant releases ___ into the air.`, a: `volatile organic compounds` },
              { q: `Neighbouring plants respond by producing ___ chemicals.`, a: `defensive` },
              { q: `Some plants emit a ___ to attract helpful insects.`, a: `scent` },
              { q: `The network also lets trees share ___ with each other.`, a: `water` },
              { q: `Research on plant communication began in the ___.`, a: `1990s` },
              { q: `This knowledge may improve ___ management.`, a: `forest` }
            ]
          }
        ]
      },
      reading: {
        title: `阅读 Reading`,
        intro: `共3篇文章，40题，60分钟`,
        passages: [
          {
            title: `Passage 1: The History of Cartography`,
            difficulty: `中等`,
            summary: `地图绘制从古代到现代的发展历史`,
            questions: [
              { type: `判断题`, q: `The earliest known maps were produced by the ancient Greeks.`, a: `FALSE - 最早的地图出自美索不达米亚` },
              { type: `判断题`, q: `Ptolemy's geographical work was unknown in Europe for many centuries.`, a: `TRUE - 文艺复兴时才重新传入欧洲` },
              { type: `判断题`, q: `The first printed map was produced in Italy.`, a: `NOT GIVEN - 文中未提及印刷地图的产地` },
              { type: `判断题`, q: `The invention of the printing press made maps available to the public.`, a: `TRUE - 印刷术使地图得以普及` },
              { type: `填空题`, q: `The oldest surviving map is a clay tablet from ____.`, a: `Babylonia` },
              { type: `填空题`, q: `Mercator's 1569 projection greatly improved ____ navigation.`, a: `sea (maritime)` },
              { type: `填空题`, q: `The first modern atlas was published in ____.`, a: `1570` }
            ]
          },
          {
            title: `Passage 2: The Benefits of Bilingualism`,
            difficulty: `中偏难`,
            summary: `双语能力对认知、健康与社会交往的益处`,
            questions: [
              { type: `段落标题匹配`, q: `Paragraph A`, a: `ii. Cognitive advantages of bilingualism` },
              { type: `段落标题匹配`, q: `Paragraph B`, a: `v. Protection against cognitive decline` },
              { type: `段落标题匹配`, q: `Paragraph C`, a: `i. Social and cultural benefits` },
              { type: `选择题`, q: `Bilingual people are typically better at:`, a: `B. switching between tasks` },
              { type: `选择题`, q: `Brain studies of bilinguals show:`, a: `C. greater density in language areas` },
              { type: `填空题`, q: `Bilingualism delays the onset of dementia by about ___ years.`, a: `4` }
            ]
          },
          {
            title: `Passage 3: The Economics of Happiness`,
            difficulty: `难`,
            summary: `收入与幸福感之间的关系及政策启示`,
            questions: [
              { type: `Yes/No/Not Given`, q: `Richer countries are always happier than poorer ones.`, a: `NO - 收入超过一定水平后幸福感不再显著增加` },
              { type: `Yes/No/Not Given`, q: `Once basic needs are met, extra income has little effect on happiness.`, a: `YES` },
              { type: `Yes/No/Not Given`, q: `All national governments now publish happiness reports.`, a: `NOT GIVEN - 文中未说所有政府都发布` },
              { type: `选择题`, q: `The central argument of the passage is that:`, a: `A. money alone does not guarantee wellbeing` },
              { type: `选择题`, q: `The writer suggests governments should:`, a: `D. track wellbeing as well as GDP` },
              { type: `摘要填空`, q: `Improving national happiness requires ____ and ____.`, a: `social support / health` }
            ]
          }
        ]
      },
      writing: {
        title: `写作 Writing`,
        intro: `共2部分，60分钟`,
        tasks: [
          {
            task: `Task 1 (小作文)`,
            type: `图表描述 - 柱状图`,
            prompt: `The bar chart below shows the number of international students enrolled at three universities (A, B and C) in a country in 2015 and 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
            modelAnswer: `The bar chart compares the numbers of international students enrolled at three universities in a particular country in the years 2015 and 2022.\n\nOverall, all three universities saw a growth in their international student populations over the seven-year period, with University A consistently hosting the largest number. The gap between the three institutions narrowed slightly by 2022.\n\nIn 2015, University A had approximately 8,500 international students, the highest figure among the three. University B followed with around 6,200, while University C had the smallest intake at roughly 4,000. By 2022, University A's number had risen to about 11,000, representing an increase of around 2,500 students. University B grew more modestly to 7,400, and University C experienced the most proportional growth, reaching 5,600.\n\nThe most notable change was at University C, whose international enrolment increased by about 40 per cent, the fastest rate of the three. Meanwhile, University A maintained its leading position, though its share of the total international student body declined slightly as the other two expanded.\n\nThe data indicates a general upward trend in international education demand across all three institutions, with the smaller universities catching up gradually.`,
            tips: `注意比较两年数据、突出最大/最小及增长最快者、使用恰当对比词汇`
          },
          {
            task: `Task 2 (大作文)`,
            type: `议论文`,
            prompt: `Some people believe that governments should invest more money in public transport, while others think that roads and motorways should receive more funding. Discuss both views and give your own opinion. Write at least 250 words.`,
            modelAnswer: `How public funds should be allocated to transport infrastructure is a contentious issue. While some argue that governments ought to prioritise public transport, others contend that roads and motorways deserve greater investment. In my view, a balanced approach that leans toward public transport is the most sustainable.\n\nThose who support investment in roads and motorways argue that the majority of people still depend on private vehicles, particularly in suburban and rural areas where public transport is limited. They point out that congested highways hinder the movement of goods, raise business costs, and reduce economic efficiency. Upgrading roads, they claim, benefits commuters, freight operators, and emergency services alike, and is therefore a practical use of public money.\n\nOn the other hand, advocates of public transport emphasise its wider social and environmental benefits. Buses, trains, and metros can move far more people per unit of road space than cars, easing congestion for everyone. Crucially, public transport produces lower per-passenger emissions, helping governments meet climate and air-quality targets. In densely populated cities, expanding rail and bus networks is also more cost-effective than continually widening roads, which quickly fill with new traffic.\n\nIn my opinion, while maintaining existing roads is necessary, the greater long-term return comes from investing in public transport. The most successful cities combine reliable, affordable networks with policies that discourage excessive car use, such as congestion charging. Such an approach serves both mobility and sustainability.\n\nIn conclusion, although roads require upkeep, governments should direct the larger share of transport funding toward public systems, which deliver broader economic, environmental, and social dividends.`,
            tips: `讨论双方观点、明确个人立场、使用对比连接词、至少250词`
          }
        ]
      },
      speaking: {
        title: `口语 Speaking`,
        intro: `共3部分，约11-14分钟`,
        parts: [
          {
            part: `Part 1: Introduction & Interview`,
            questions: [
              { q: `Let's talk about the weather. What's the weather usually like in your hometown?`, a: `参考回答: My hometown has a humid subtropical climate, so summers are hot and rainy while winters are short and mild. I'd say the most pleasant season is autumn, when the temperature is comfortable and there's less rain.` },
              { q: `Do you prefer hot or cold weather? Why?`, a: `参考回答: I generally prefer cooler weather because I find it easier to concentrate and sleep. In extreme heat I feel tired and sluggish, whereas a crisp, cool day makes me want to go outside and be active.` },
              { q: `Has the weather in your area changed in recent years?`, a: `参考回答: Yes, I think the summers have become noticeably hotter and longer than when I was a child. There also seem to be more sudden heavy storms, which I suspect is related to climate change.` },
              { q: `What do you usually do when the weather is bad?`, a: `参考回答: On rainy or very cold days I tend to stay indoors and read, watch films, or cook. If I have to go out, I just bring an umbrella and carry on, but I do prefer planning outdoor activities for clearer days.` }
            ]
          },
          {
            part: `Part 2: Long Turn (Cue Card)`,
            cueCard: `Describe a book that influenced you.\n\nYou should say:\n- what the book was\n- who wrote it\n- when you read it\n- and explain how it influenced you.`,
            modelAnswer: `参考回答:\n\nA book that had a real influence on me is "Sapiens: A Brief History of Humankind" by Yuval Noah Harari, which I read about three years ago during a long summer holiday.\n\nI had seen it recommended online many times, and eventually I picked up a copy from my local library. It's a sweeping account of how humans came to dominate the planet, covering everything from the cognitive revolution to modern capitalism. Although it's quite long, I found it surprisingly readable because Harari uses vivid examples and asks provocative questions rather than simply listing facts.\n\nWhat influenced me most was the book's perspective on the stories and shared beliefs that hold large societies together. It made me realise how much of what we take for granted, money, nations, even human rights, is based on collective imagination rather than absolute truth. This shifted the way I think about news, advertising, and political debate.\n\nAfter reading it, I became much more curious about history, science, and economics, and I started watching documentaries and reading articles to learn more. It also made me more questioning of assumptions and more open to different viewpoints. In short, the book didn't just teach me facts; it changed the lens through which I see the world, and for that reason it remains one of the most meaningful books I have ever read.`,
            tips: `注意描述书籍内容但不剧透、解释影响要具体、使用过去时`
          },
          {
            part: `Part 3: Discussion`,
            questions: [
              { q: `Do you think reading books is still important in the digital age?`, a: `参考回答: Absolutely. Although we consume more information from screens, books train sustained attention and deeper thinking in a way short videos cannot. They also remain one of the best vehicles for complex ideas, so I believe reading is as important as ever, perhaps even more so.` },
              { q: `Should schools require students to read more classic literature?`, a: `参考回答: I think a balance is best. Classics expose students to foundational ideas and beautiful language, but forcing too many can feel like a chore and put young people off reading. Schools should mix classics with contemporary books that reflect students' interests and diverse cultures.` },
              { q: `How might books change in the future?`, a: `参考回答: I expect digital and interactive formats to grow, with audio books already very popular. Yet I doubt printed books will vanish, because many readers value the focus and tactile pleasure they offer. The future will likely be a mix, where each format serves different moments and needs.` }
            ]
          }
        ]
      }
    },

    // ========== 剑18 Test 2 ==========
    18: {
      id: 2,
      title: `Test 2`,
      listening: {
        title: `听力 Listening`,
        intro: `共4部分，40题，约30分钟`,
        sections: [
          {
            part: `Part 1`,
            context: `一名年轻人电话咨询社区志愿者工作的报名`,
            type: `表格填空`,
            questions: [
              { q: `Volunteer name:`, a: `Thomas Reed` },
              { q: `Age group:`, a: `18-24` },
              { q: `Availability:`, a: `weekday evenings` },
              { q: `Preferred role:`, a: `event assistant` },
              { q: `Transport:`, a: `by bicycle` },
              { q: `Languages:`, a: `English and German` },
              { q: `Previous experience:`, a: `yes, 1 year` },
              { q: `First training date:`, a: `14th September` },
              { q: `Contact phone:`, a: `07922 334455` },
              { q: `Email:`, a: `t.reed@email.com` }
            ]
          },
          {
            part: `Part 2`,
            context: `海洋馆的导览广播`,
            type: `选择题 + 地图标注`,
            questions: [
              { q: `The aquarium was founded in`, a: `C. 2003 (C选项)` },
              { q: `The new ocean tunnel opened in`, a: `A. 2019 (A选项)` },
              { q: `The feeding show takes place`, a: `B. twice daily (B选项)` },
              { q: `Location of the shark tank:`, a: `central hall (地图标注C)` },
              { q: `Location of the touch pool:`, a: `ground floor, left side (地图标注A)` },
              { q: `Location of the cafe:`, a: `top floor, sea-view (地图标注F)` }
            ]
          },
          {
            part: `Part 3`,
            context: `两名学生与导师讨论关于一处考古遗址的发掘计划`,
            type: `选择题 + 匹配题`,
            questions: [
              { q: `The dig site is located in`, a: `B. southern Turkey (B选项)` },
              { q: `The main aim of the excavation is to`, a: `C. date the settlement (C选项)` },
              { q: `Findings - pottery shards indicate:`, a: `D. trade with neighbours` },
              { q: `Findings - bone tools suggest:`, a: `A. hunting activities` },
              { q: `Recommended next step:`, a: `F. radiocarbon dating` }
            ]
          },
          {
            part: `Part 4`,
            context: `关于人工智能伦理的学术讲座`,
            type: `笔记填空`,
            questions: [
              { q: `AI systems learn patterns from ___ supplied by humans.`, a: `training data` },
              { q: `A key problem is ___ in the data being amplified.`, a: `bias` },
              { q: `Facial recognition technology threatens individual ___.`, a: `privacy` },
              { q: `Autonomous vehicles must make ___ choices in accidents.`, a: `ethical` },
              { q: `The European Union passed the first ___ law on AI.`, a: `comprehensive` },
              { q: `To build trust, AI must be ___ and understandable.`, a: `transparent` },
              { q: `Some routine jobs will disappear, but others will ___.`, a: `be created` },
              { q: `Schools should teach ___ that machines lack.`, a: `creative skills` },
              { q: `Firms require an ___ framework for AI use.`, a: `ethics` },
              { q: `Safe AI progress needs ___ with the public.`, a: `dialogue` }
            ]
          }
        ]
      },
      reading: {
        title: `阅读 Reading`,
        intro: `共3篇文章，40题，60分钟`,
        passages: [
          {
            title: `Passage 1: The History of Glass`,
            difficulty: `中等`,
            summary: `玻璃从古代发明到现代制造的发展历程`,
            questions: [
              { type: `判断题`, q: `Glass was first made by the ancient Romans.`, a: `FALSE - 最早由美索不达米亚/古埃及人制造` },
              { type: `判断题`, q: `The technique of glassblowing was developed around 50 BCE.`, a: `TRUE - 约公元前50年出现吹制玻璃法` },
              { type: `判断题`, q: `The world's largest glass factory is located in Germany.`, a: `NOT GIVEN - 文中未提及最大工厂位置` },
              { type: `判断题`, q: `Recycling glass reduces the energy needed for production.`, a: `TRUE - 回收玻璃可降低能耗` },
              { type: `填空题`, q: `The earliest glass objects date from about ____ BCE.`, a: `3500` },
              { type: `填空题`, q: `Modern float glass was developed by the ___ company.`, a: `Pilkington` },
              { type: `填空题`, q: `In some countries, around ___ of glass is recycled.`, a: `70%` }
            ]
          },
          {
            title: `Passage 2: The Psychology of Music`,
            difficulty: `中偏难`,
            summary: `音乐如何影响大脑、情绪与社交`,
            questions: [
              { type: `段落标题匹配`, q: `Paragraph A`, a: `iii. How music affects the brain` },
              { type: `段落标题匹配`, q: `Paragraph B`, a: `vi. Music and emotional wellbeing` },
              { type: `段落标题匹配`, q: `Paragraph C`, a: `ii. Music's role in social bonding` },
              { type: `选择题`, q: `Listening to music activates:`, a: `B. multiple brain regions` },
              { type: `选择题`, q: `Group singing is linked to:`, a: `C. stronger social connection` },
              { type: `填空题`, q: `Learning a musical instrument can improve ___ skills.`, a: `memory` }
            ]
          },
          {
            title: `Passage 3: The Challenge of Megacities`,
            difficulty: `难`,
            summary: `超级大城市面临的可持续性与治理挑战`,
            questions: [
              { type: `Yes/No/Not Given`, q: `Megacities solve the problem of rural poverty.`, a: `NO - 超级城市本身带来新挑战` },
              { type: `Yes/No/Not Given`, q: `Megacities consume a large share of global energy.`, a: `YES` },
              { type: `Yes/No/Not Given`, q: `All megacities are located in Asia.`, a: `NOT GIVEN - 文中未说全部位于亚洲` },
              { type: `选择题`, q: `The main difficulty for megacities is:`, a: `A. providing basic services` },
              { type: `选择题`, q: `The writer argues that planning should:`, a: `D. prioritise public transport` },
              { type: `摘要填空`, q: `Sustainable megacities need ___ and ___.`, a: `investment / good governance` }
            ]
          }
        ]
      },
      writing: {
        title: `写作 Writing`,
        intro: `共2部分，60分钟`,
        tasks: [
          {
            task: `Task 1 (小作文)`,
            type: `图表描述 - 线图`,
            prompt: `The graph below shows the population of three cities (X, Y and Z) from 2000 to 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
            modelAnswer: `The line graph illustrates the population trends of three cities between 2000 and 2020.\n\nOverall, all three cities grew over the two decades, but at different rates. City X remained the largest throughout, while City Z, though smallest, expanded the most rapidly in percentage terms.\n\nIn 2000, City X had roughly 6 million inhabitants. Its population rose steadily to about 8.5 million by 2020. City Y started at around 4 million and reached approximately 5.5 million, with slower growth after 2010. City Z began with only 2 million people but more than doubled to around 4.2 million by 2020, overtaking City Y in the final years.\n\nThe most striking feature is City Z's acceleration after 2010, possibly due to migration from rural areas. In contrast, City Y's growth flattened in the last decade.\n\nThe data shows a clear pattern of urban expansion, with smaller cities catching up to larger ones over time.`,
            tips: `注意描述总体趋势、突出交点与最快速增长者、使用恰当动词`
          },
          {
            task: `Task 2 (大作文)`,
            type: `议论文`,
            prompt: `Some people think that the best way to protect the environment is to use more renewable energy, while others think individuals should change their lifestyle. Discuss both views and give your own opinion. Write at least 250 words.`,
            modelAnswer: `Environmental protection is one of the defining challenges of our age. Some argue that shifting to renewable energy is the most effective solution, whereas others believe individual lifestyle changes are the key. I believe both are necessary and mutually reinforcing.\n\nSupporters of renewable energy point to the scale of the problem. Power generation, transport, and industry account for the majority of greenhouse gas emissions, so replacing coal and oil with solar, wind, and hydro power can cut pollution more decisively than personal action alone. They also note that once clean infrastructure exists, millions of people benefit automatically, regardless of individual habits. For this reason, many argue that government policy and corporate investment should lead the response.\n\nHowever, those who emphasise lifestyle argue that collective consumer choices matter enormously. If millions of households reduce meat consumption, fly less, and waste less, the cumulative effect is substantial. Moreover, individual action can drive cultural change, pressuring businesses and politicians to do more. They contend that waiting only for top-down solutions risks delay while habits remain unsustainable.\n\nIn my view, the two approaches are not in competition. Renewable energy provides the structural foundation, but it cannot succeed without citizens who use resources efficiently and support green policies. The most effective strategy combines clean technology with responsible daily behaviour.\n\nIn conclusion, neither renewable energy nor lifestyle change alone is sufficient; a genuine environmental solution requires both systemic transformation and individual commitment. By combining clean infrastructure with responsible daily habits, societies can cut emissions while building a culture of sustainability that endures for future generations.`,
            tips: `讨论双方、给出整合性立场、举例支撑、至少250词`
          }
        ]
      },
      speaking: {
        title: `口语 Speaking`,
        intro: `共3部分，约11-14分钟`,
        parts: [
          {
            part: `Part 1: Introduction & Interview`,
            questions: [
              { q: `Let's talk about food. What kind of food do you like?`, a: `参考回答: I enjoy a wide range of food, but I'm especially fond of Mediterranean dishes, salads, grilled fish, and fresh bread. I also like spicy food occasionally, though I can't handle anything too hot.` },
              { q: `Who usually cooks in your family?`, a: `参考回答: My mother does most of the cooking at home, but I've started helping on weekends. My father rarely cooks, though he's good at making breakfast.` },
              { q: `Do you ever try food from other countries?`, a: `参考回答: Yes, quite often. In my city there are restaurants serving Japanese, Mexican, and Ethiopian food, and I love exploring them. Trying foreign cuisines feels like travelling without leaving town.` },
              { q: `Is food important to you? Why?`, a: `参考回答: I'd say yes, because sharing a meal is one of the easiest ways to connect with people. Good food also improves my mood, so I think it plays a bigger role in wellbeing than we often admit.` }
            ]
          },
          {
            part: `Part 2: Long Turn (Cue Card)`,
            cueCard: `Describe a place where you learned something new.\n\nYou should say:\n- where it was\n- what you learned\n- who you were with\n- and explain why this learning was meaningful to you.`,
            modelAnswer: `参考回答:\n\nA place where I learned something genuinely new was a small pottery studio in my neighbourhood, which I visited with a friend about a year ago.\n\nNeither of us had ever worked with clay, so we signed up for a beginner's workshop on a Saturday afternoon. The studio was calm and a little messy, with shelves of half-finished bowls and the smell of wet earth in the air. Under the guidance of the instructor, we learned how to centre the clay on the spinning wheel and gradually pull it upward to form a simple cup.\n\nWhat I learned went beyond the technique. I discovered how difficult it is to control something so soft and responsive, and how much patience the craft demands. Within twenty minutes my first attempt had collapsed twice, but by the end I managed a small, slightly uneven cup that I felt proud of.\n\nThis experience was meaningful because it taught me to slow down. In daily life I'm used to fast results from screens and devices, yet pottery forced me to focus on my hands and breath. It also gave me a new respect for artisans who make everyday objects. Since then I've become more interested in handmade crafts and more mindful about the things I buy.`,
            tips: `注意描述地点与过程、说明学到的具体内容与意义`
          },
          {
            part: `Part 3: Discussion`,
            questions: [
              { q: `Do you think traditional skills are still useful today?`, a: `参考回答: Yes, I do. Even if machines can produce things faster, traditional skills carry cultural value and offer a sense of achievement that mass production cannot. They also connect younger generations to their heritage, which matters in a fast-changing world.` },
              { q: `How can schools encourage students to learn practical skills?`, a: `参考回答: Schools could include hands-on subjects like cooking, woodwork, or gardening in the curriculum, and partner with local craftspeople for workshops. Making such activities fun and graded lightly would reduce pressure and spark real interest.` },
              { q: `Will technology replace the need to learn new skills?`, a: `参考回答: Not entirely. Technology can do many tasks for us, but it also creates new skills to learn, such as coding or managing digital tools. Rather than removing the need, it shifts what we must learn, so lifelong learning remains essential.` }
            ]
          }
        ]
      }
    },

    // ========== 剑19 Test 2 ==========
    19: {
      id: 2,
      title: `Test 2`,
      listening: {
        title: `听力 Listening`,
        intro: `共4部分，40题，约30分钟`,
        sections: [
          {
            part: `Part 1`,
            context: `一名顾客电话咨询音乐节门票预订`,
            type: `表格填空`,
            questions: [
              { q: `Festival name:`, a: `Riverside Music Festival` },
              { q: `Dates:`, a: `22-24 August` },
              { q: `Venue:`, a: `Lakeside Park` },
              { q: `Day ticket price:`, a: `55` },
              { q: `Weekend pass price:`, a: `130` },
              { q: `Camping option:`, a: `yes, with pass` },
              { q: `Age policy:`, a: `under 14 free` },
              { q: `Food stalls:`, a: `over 30` },
              { q: `Parking fee:`, a: `8 per day` },
              { q: `Booking ref:`, a: `RM-4491` }
            ]
          },
          {
            part: `Part 2`,
            context: `植物园的导览广播`,
            type: `选择题 + 地图标注`,
            questions: [
              { q: `The botanical garden was established in`, a: `B. 1890 (B选项)` },
              { q: `The glasshouse contains plants from`, a: `C. tropical regions (C选项)` },
              { q: `The guided tour lasts`, a: `A. 90 minutes (A选项)` },
              { q: `Location of the rose garden:`, a: `south lawn (地图标注D)` },
              { q: `Location of the lake:`, a: `centre of the garden (地图标注B)` },
              { q: `Location of the cafe:`, a: `near the main gate (地图标注F)` }
            ]
          },
          {
            part: `Part 3`,
            context: `两名学生讨论关于珊瑚礁保护的海洋研究课题`,
            type: `选择题 + 匹配题`,
            questions: [
              { q: `The project focuses on protecting`, a: `B. coral reefs (B选项)` },
              { q: `The biggest threat identified is`, a: `C. ocean warming (C选项)` },
              { q: `Local community role:`, a: `D. reducing plastic use` },
              { q: `Scientific method used:`, a: `A. underwater surveys` },
              { q: `Expected outcome:`, a: `F. restored reef area` }
            ]
          },
          {
            part: `Part 4`,
            context: `关于睡眠科学的学术讲座`,
            type: `笔记填空`,
            questions: [
              { q: `Adults need about ___ hours of sleep nightly.`, a: `8` },
              { q: `The body repairs tissue during ___ sleep.`, a: `deep` },
              { q: `REM sleep is linked to ___ processing.`, a: `emotional` },
              { q: `Lack of sleep weakens the ___ system.`, a: `immune` },
              { q: `Screens before bed reduce ___ production.`, a: `melatonin` },
              { q: `A regular ___ improves sleep quality.`, a: `schedule` },
              { q: `Caffeine can stay in the body for ___ hours.`, a: `6` },
              { q: `Naps should be under ___ minutes.`, a: `30` },
              { q: `Avoid exercise near ___.`, a: `bedtime` },
              { q: `Chronic poor sleep raises the risk of ___.`, a: `disease` }
            ]
          }
        ]
      },
      reading: {
        title: `阅读 Reading`,
        intro: `共3篇文章，40题，60分钟`,
        passages: [
          {
            title: `Passage 1: The History of Coffee`,
            difficulty: `中等`,
            summary: `咖啡从原产地到全球饮品的传播历史`,
            questions: [
              { type: `判断题`, q: `Coffee was first discovered in Arabia.`, a: `FALSE - 最早发现于埃塞俄比亚` },
              { type: `判断题`, q: `Coffee houses spread to Europe in the 1600s.`, a: `TRUE - 17世纪传入欧洲` },
              { type: `判断题`, q: `The most expensive coffee in the world comes from Indonesia.`, a: `NOT GIVEN - 文中未提及最贵咖啡产地` },
              { type: `判断题`, q: `Brazil is the top coffee producer today.`, a: `TRUE - 巴西现为最大生产国` },
              { type: `填空题`, q: `Coffee plants originally grew in ____.`, a: `Ethiopia` },
              { type: `填空题`, q: `The first European coffee house opened in ___ in 1645.`, a: `Venice` },
              { type: `填空题`, q: `The decaffeination process was invented in ____.`, a: `1905` }
            ]
          },
          {
            title: `Passage 2: The Science of Memory`,
            difficulty: `中偏难`,
            summary: `记忆如何形成、遗忘原因及提升方法`,
            questions: [
              { type: `段落标题匹配`, q: `Paragraph A`, a: `iv. How memory is formed` },
              { type: `段落标题匹配`, q: `Paragraph B`, a: `vii. Factors that cause forgetting` },
              { type: `段落标题匹配`, q: `Paragraph C`, a: `ii. Techniques to improve memory` },
              { type: `选择题`, q: `Short-term memory can typically hold about:`, a: `B. 7 items` },
              { type: `选择题`, q: `Sleep is important for memory because it:`, a: `C. consolidates learning` },
              { type: `填空题`, q: `Repeating information helps move it into ___ memory.`, a: `long-term` }
            ]
          },
          {
            title: `Passage 3: The Future of Money`,
            difficulty: `难`,
            summary: `数字货币兴起及其带来的机遇与风险`,
            questions: [
              { type: `Yes/No/Not Given`, q: `Cash will completely disappear within ten years.`, a: `NO - 现金仍将在许多地方使用` },
              { type: `Yes/No/Not Given`, q: `Digital payments are growing rapidly worldwide.`, a: `YES` },
              { type: `Yes/No/Not Given`, q: `Every country has now launched its own digital currency.`, a: `NOT GIVEN - 文中未说所有国家都已发行` },
              { type: `选择题`, q: `The main advantage of digital money is:`, a: `A. speed and convenience` },
              { type: `选择题`, q: `The writer warns that digital money raises:`, a: `D. privacy concerns` },
              { type: `摘要填空`, q: `A safe system needs ___ and ___.`, a: `security / regulation` }
            ]
          }
        ]
      },
      writing: {
        title: `写作 Writing`,
        intro: `共2部分，60分钟`,
        tasks: [
          {
            task: `Task 1 (小作文)`,
            type: `图表描述 - 饼图`,
            prompt: `The pie charts below show the sources of energy used in a country in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
            modelAnswer: `The pie charts compare the proportions of different energy sources used in a particular country in 2010 and 2020.\n\nOverall, fossil fuels remained dominant in both years, but their share declined noticeably, while renewable sources expanded considerably over the decade.\n\nIn 2010, coal accounted for 40 per cent of total energy, the largest single source. Oil contributed 30 per cent, and natural gas 18 per cent, meaning fossil fuels together made up 88 per cent. Renewables, including wind, solar, and hydro, represented only 8 per cent, with nuclear at 4 per cent.\n\nBy 2020, coal had fallen to 28 per cent and oil to 24 per cent, though natural gas rose slightly to 20 per cent. The most significant change was in renewables, which more than doubled to 20 per cent. Nuclear remained stable at 4 per cent.\n\nThe data indicates a clear, if gradual, shift toward cleaner energy, with renewables replacing a substantial portion of former coal use.`,
            tips: `注意两个饼图对比、突出占比变化最大项、至少150词`
          },
          {
            task: `Task 2 (大作文)`,
            type: `议论文`,
            prompt: `Some people believe that advertising aimed at children should be banned, while others think it is the parents' responsibility to control this. Discuss both views and give your own opinion. Write at least 250 words.`,
            modelAnswer: `Advertising directed at children is a divisive issue. Some argue it should be banned, while others believe parents should manage their children's exposure. In my view, a combination of regulation and parental guidance is the most realistic response.\n\nThose in favour of a ban highlight children's vulnerability. Young minds cannot easily distinguish persuasion from information, and constant exposure to tempting adverts for sugary snacks or expensive toys can fuel unhealthy habits and family conflict. Critics also note that such advertising pressures parents financially and can contribute to childhood obesity. For these reasons, they argue that protecting children is a duty the state should enforce through law.\n\nOn the other hand, those who oppose a ban stress personal responsibility. They argue that parents, not the government, should decide what their children watch and buy. A total ban, they claim, is an overreach that limits free commercial speech and treats families as incapable of judgement. Instead, they advocate teaching children media literacy so they can critically assess adverts themselves, a skill useful throughout life.\n\nIn my opinion, neither extreme is ideal. An outright ban may be hard to enforce in a digital age, yet leaving everything to parents ignores the unequal resources families have. The best approach is targeted restrictions, such as limiting advertising during children's programmes, paired with parental guidance and education about consumption.\n\nIn conclusion, child-directed advertising requires both sensible regulation and active parenting, rather than relying on one alone. Only by blending legal limits with education at home can societies protect children effectively while still preserving free choice for families.`,
            tips: `讨论双方、提出折中立场、逻辑衔接、至少250词`
          }
        ]
      },
      speaking: {
        title: `口语 Speaking`,
        intro: `共3部分，约11-14分钟`,
        parts: [
          {
            part: `Part 1: Introduction & Interview`,
            questions: [
              { q: `Let's talk about music. Do you like listening to music?`, a: `参考回答: Yes, very much. I listen to music almost every day, usually in the background while I study or on my commute. It really helps me relax and focus.` },
              { q: `What kind of music do you usually listen to?`, a: `参考回答: I listen to a mix, but mainly pop and soft rock. When I need to concentrate I prefer instrumental or lo-fi music, and when I exercise I like something more energetic.` },
              { q: `Did you learn to play a musical instrument when you were young?`, a: `参考回答: I took piano lessons for a few years as a child, but I quit because I found practice boring. Looking back, I wish I had stuck with it, because it's a skill I'd still enjoy now.` },
              { q: `Do you prefer to watch music performances live or recorded?`, a: `参考回答: I love live performances for the atmosphere and energy, though they're expensive. Recorded concerts are more convenient and let me pause, but they lack the excitement of being in the crowd.` }
            ]
          },
          {
            part: `Part 2: Long Turn (Cue Card)`,
            cueCard: `Describe a piece of technology you find useful.\n\nYou should say:\n- what it is\n- how often you use it\n- what you use it for\n- and explain why you find it useful.`,
            modelAnswer: `参考回答:\n\nA piece of technology I find genuinely useful is my smartphone, specifically the note-taking and map applications on it. Although a phone might sound ordinary, the way I rely on it has become essential to my daily life.\n\nI use it constantly, probably dozens of times a day. In the morning I check my calendar and weather, during the day I use navigation to get around the city, and in the evening I often record quick voice memos of ideas I don't want to forget. It's rarely out of arm's reach.\n\nWhat I use it for most is organisation. I keep study notes, to-do lists, and scanned documents in one place, and the search function means I can find anything in seconds. The translation app has also been a lifesaver when reading English articles or travelling. Beyond productivity, I use it to keep in touch with family through messages and video calls.\n\nI find it useful because it combines so many tools that once required separate devices, saving both time and space. More importantly, it reduces mental load: I no longer worry about remembering every detail because I know it's stored safely. Of course, I try not to overuse it, but as a tool for learning and staying organised, it's hard to imagine life without it.`,
            tips: `注意描述功能与使用频率、具体说明为何有用`
          },
          {
            part: `Part 3: Discussion`,
            questions: [
              { q: `Do you think technology makes people's lives better or worse?`, a: `参考回答: On balance, better. Technology has improved healthcare, communication, and access to knowledge enormously. The downside is distraction and inequality, but these can be managed. Overall I'd say the benefits outweigh the harms.` },
              { q: `Should children be given smartphones at a young age?`, a: `参考回答: I'm cautious about that. A phone can aid learning and safety, but too early may harm attention and sleep. I'd delay it until secondary school and set clear limits, balancing the benefits against the risks.` },
              { q: `How might technology change education in the future?`, a: `参考回答: I think it will make learning more personalised, with AI tutors adapting to each student's pace. Virtual reality could bring history or science to life. However, human teachers will still matter for motivation and social skills, so technology should support rather than replace them.` }
            ]
          }
        ]
      }
    }
  };

  // 将数据添加到 IELTS_DATA（剑17/18/19 的 Test 2）
  IELTS_DATA.books.forEach(function (book) {
    if (extraTests[book.id]) {
      book.tests.push(extraTests[book.id]);
    }
  });
})();
