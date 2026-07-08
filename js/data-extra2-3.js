/**
 * 剑桥雅思17 Test 2 补充练习数据
 * 题目为雅思练习内容（非官方真题）
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
    }
  };

  // 将数据添加到 IELTS_DATA（剑17/18/19 的 Test 2）
  IELTS_DATA.books.forEach(function (book) {
    if (extraTests[book.id]) {
      book.tests.push(extraTests[book.id]);
    }
  });
})();
