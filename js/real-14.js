/**
 * 剑14 Test 1 & Test 2 剑桥雅思内容覆盖补丁
 * 目的：将 data.js 中 AI 生成的"原创练习"内容替换为剑桥雅思14（Cambridge IELTS 14, Academic）练习题目。
 * 数据核对来源（公开权威解析，含原题答案键）：
 *   听力原文/答案/题目 — laokaoya（剑桥雅思14 Test1/Test2 Section1-4 听力原文与答案）
 *   阅读原文/题目/答案 — engnovate（Cambridge IELTS 14 Academic Reading Test 1 / Test 2 全文与题解）
 *   写作题目       — ieltswriting.org（IELTS 14 Authentic Practice Tests – Academic, Test 1 & Test 2）
 *   口语话题       — babarenglish / ieltspractices.com（Cambridge 14 IELTS Speaking Test 1 / Test 2）
 * 注意：原文/题目均为真实考题内容；范文与口语"参考回答"为学习用示例文本（非官方范文，由本补丁编写）。
 * 本文件须放在所有数据文件（data.js, data-extra*.js, listening-scripts.js）之后、app.js 之前加载。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;
  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 14) book = b; });
  if (!book) return;

  function findTest(id) {
    var t = null;
    book.tests.forEach(function (x) { if (x.id === id) t = x; });
    return t;
  }

  // ======================================================================
  // 剑14 TEST 1
  // ======================================================================
  var t1 = findTest(1);
  if (t1) {
    t1.listening.sections = [
      {
        part: 'Part 1',
        context: 'Louise Taylor 向警局报案：在博物馆外被一群男孩偷走钱包与手机',
        type: '个人信息填空（每空一词或数字）',
        questions: [
          { q: 'Louise 的国籍：___ (例：Canadian)', a: 'Canadian' },
          { q: '她来英国做 interior designer，购买旧 ___ (antiques)', a: 'furniture' },
          { q: '目前住在 ___ Apartments, King Street', a: 'Park' },
          { q: '钱包里约有 £___ 现金被盗', a: '250' },
          { q: '同时被盗的还有她的 ___（仅用了一周）', a: 'phone' },
          { q: '案发日期：September ___', a: '10(th)' },
          { q: '她最后出现并遇袭的地点：the ___', a: 'museum' },
          { q: '男孩们围上来问当时是几点（what ___ it was）', a: 'time' },
          { q: '说话最多的男孩头发是 ___ 色', a: 'blond(e)' },
          { q: '警局给的 crime reference number：___', a: '87954 82361' }
        ]
      },
      {
        part: 'Part 2',
        context: 'HR 经理 Janet Parker 给新学徒的入职介绍（apprenticeship induction）',
        type: '多选题 + 配对/单选',
        questions: [
          { q: 'Which TWO pieces of advice does the manager give about the first week? [choose TWO]', a: 'A, C' },
          { q: 'Which TWO things does your mentor do? [choose TWO]', a: 'B, E' },
          { q: 'What does the manager say about using the internet?', a: 'B' },
          { q: 'What does she say about flexible working?', a: 'B' },
          { q: 'What does she say about the holiday policy?', a: 'C' },
          { q: 'What does she say about overtime?', a: 'A' },
          { q: 'What does she say about the dress code?', a: 'A' },
          { q: 'What does she say about the canteen?', a: 'C' }
        ]
      },
      {
        part: 'Part 3',
        context: '学生 Carla 与 Rob 在导师指导下讨论关于"海滨城市"的课堂演示',
        type: '单选 + 配对（演示内容安排）',
        questions: [
          { q: 'What surprised Rob about coastal cities?', a: 'B' },
          { q: 'What does Rob say about rivers in coastal cities?', a: 'A' },
          { q: 'What did Miami’s authorities fail to take into account when building drainage channels?', a: 'C' },
          { q: 'What does Rob say needs to be done now in Miami?', a: 'B' },
          { q: 'What does Carla say about international cooperation on coastal cities?', a: 'A' },
          { q: 'What do they agree about the historical-background section?', a: 'B' },
          { q: 'How will they present the geographical factors (maps etc.)?', a: 'A' },
          { q: 'What will they use the New Orleans flooding case study for?', a: 'F' },
          { q: 'What do they still need to do for the “future risks” section?', a: 'G' },
          { q: 'How will they end the presentation?', a: 'C' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于海洋可再生能源（marine / ocean energy）的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'Demand rising due to growth in population and ___', a: 'industry' },
          { q: 'Wave energy’s source is ___ (no standstill)', a: 'constant' },
          { q: 'Wind pushes waves in every ___', a: 'direction' },
          { q: 'Sediment on the ocean ___ may be blocked', a: 'floor' },
          { q: 'Tidal energy is ___ (we know tide times for years)', a: 'predictable' },
          { q: 'The lagoon is in a ___ at Swansea', a: 'bay' },
          { q: 'Water is released through ___ in the breakwater', a: 'gates' },
          { q: 'Turbines need no ___ (no emissions)', a: 'fuel' },
          { q: 'Manufacturing would create over 2,000 ___', a: 'jobs' },
          { q: 'Risk: disturbs birds’ and fish’ ___ patterns', a: 'migration' }
        ]
      }
    ];

    t1.reading.passages = [
      {
        title: 'Passage 1: The Importance of Children’s Play',
        difficulty: '中等',
        summary: '探讨儿童游戏（play）对创造力、自控力、社交情感发展及日后学业成就的重要作用，以及现代社会游戏机会减少的现象。',
        questions: [
          { type: '笔记填空（ONE WORD ONLY）', q: 'Building a “magical kingdom” may help develop a child’s capacity for ___', a: 'creativity' },
          { type: '笔记填空（ONE WORD ONLY）', q: 'Board games involve following ___ and taking turns', a: 'rules' },
          { type: '笔记填空（ONE WORD ONLY）', q: 'Over half the world’s ___ now live in cities', a: 'population' },
          { type: '笔记填空（ONE WORD ONLY）', q: 'Outdoor play is curtailed by fear of ___ (e.g. traffic)', a: 'traffic' },
          { type: '笔记填空（ONE WORD ONLY）', q: 'Parents also want to protect children from being victims of ___', a: 'crime' },
          { type: '笔记填空（ONE WORD ONLY）', q: 'Greater ___ in academic learning and schools', a: 'competition' },
          { type: '笔记填空（ONE WORD ONLY）', q: 'Policies often lack the ___ to base them on', a: 'evidence' },
          { type: '笔记填空（ONE WORD ONLY）', q: 'Impact of play on the rest of the child’s ___', a: 'life' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Children with good self-control are known to be likely to do well at school later on.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'The way a child plays may provide clues about possible medical problems.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Playing with dolls was found to benefit girls’ writing more than boys’ writing.', a: 'NOT GIVEN' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Children had problems thinking up ideas when they first created the story with Lego.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'People nowadays regard children’s play as less significant than they did in the past.', a: 'TRUE' }
        ]
      },
      {
        title: 'Passage 2: The growth of bike-sharing schemes around the world',
        difficulty: '中等',
        summary: '回顾荷兰工程师 Luud Schimmelpennink 从 1965 年阿姆斯特丹 Witte Fietsenplan 到现代共享单车体系的发展历程。',
        questions: [
          { type: '段落信息匹配（选段落字母 A–G）', q: 'a description of how people misused a bike-sharing scheme', a: 'E' },
          { type: '段落信息匹配（选段落字母 A–G）', q: 'an explanation of why a proposed bike-sharing scheme was turned down', a: 'C' },
          { type: '段落信息匹配（选段落字母 A–G）', q: 'a reference to a person being unable to profit from their work', a: 'F' },
          { type: '段落信息匹配（选段落字母 A–G）', q: 'an explanation of the potential savings a bike-sharing scheme would bring', a: 'C' },
          { type: '段落信息匹配（选段落字母 A–G）', q: 'a reference to the problems a bike-sharing scheme was intended to solve', a: 'A' },
          { type: '多选题（选两项）', q: 'Which TWO statements are made about the 1999 Amsterdam bike-sharing scheme? [choose TWO]', a: 'B, D' },
          { type: '多选题（选两项）', q: 'Which TWO statements are made about Amsterdam today? [choose TWO]', a: 'D, E' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'Provo was a group of Dutch ___ who wanted to change society', a: 'activists' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'They were concerned about air pollution and ___', a: 'consumerism' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'They distributed ___ describing the dangers of cars', a: 'leaflets' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'The ___ removed the white bikes', a: 'police' }
        ]
      },
      {
        title: 'Passage 3: Motivational factors and the hospitality industry',
        difficulty: '难',
        summary: '探讨酒店业员工激励与流失问题，对照外在动机（Herzberg 双因素理论）与内在动机、乐趣对绩效的影响。',
        questions: [
          { type: '研究者匹配（选字母 A–F）', q: 'Hotel managers need to know what would encourage good staff to remain.', a: 'E' },
          { type: '研究者匹配（选字母 A–F）', q: 'Managers’ actions may make staff feel they shouldn’t move to a different employer.', a: 'D' },
          { type: '研究者匹配（选字母 A–F）', q: 'Little is done in the hospitality industry to help workers improve their skills.', a: 'B' },
          { type: '研究者匹配（选字母 A–F）', q: 'Staff are less likely to change jobs if cooperation is encouraged.', a: 'D' },
          { type: '研究者匹配（选字母 A–F）', q: 'Dissatisfaction with pay is not the only reason hospitality workers change jobs.', a: 'C' },
          { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'One reason for high staff turnover is poor morale.', a: 'YES' },
          { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Research has shown that staff have a tendency to dislike their workplace.', a: 'NO' },
          { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Improving conditions and job security makes staff satisfied.', a: 'NO' },
          { type: '观点判断 (YES/NO/NOT GIVEN)', q: 'Staff should be allowed to choose when they take breaks.', a: 'NOT GIVEN' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'A study focused on staff from a chain of themed ___ in the US', a: 'restaurants' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'Fun had a favourable impact on their ___', a: 'performance' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'Manager support reduced staff ___', a: 'turnover' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'Fun must align with organisational ___', a: 'goals' },
          { type: '摘要填空（ONE WORD ONLY）', q: '…and with employee ___', a: 'characteristics' }
        ]
      }
    ];

    t1.reading.passages[0].text = `Brick by brick, six-year-old Alice is building a magical kingdom. Imagining fairy-tale turrets and fire-breathing dragons, wicked witches and gallant heroes, she’s creating an enchanting world. Although she isn’t aware of it, this fantasy is helping her take her first steps towards her capacity for creativity and so it will have important repercussions in her adult life.

Minutes later, Alice has abandoned the kingdom in favour of playing schools with her younger brother. When she bosses him around as his ‘teacher’, she’s practising how to regulate her emotions through pretence. Later on, when they tire of this and settle down with a board game, she’s learning about the need to follow rules and take turns with a partner.

‘Play in all its rich variety is one of the highest achievements of the human species,’ says Dr David Whitebread from the Faculty of Education at the University of Cambridge, UK. ‘It underpins how we develop as intellectual, problem-solving adults and is crucial to our success as a highly adaptable species.’

Recognizing the importance of play is not new: over two millennia ago, the Greek philosopher Plato extolled its virtues as a means of developing skills for adult life, and ideas about play-based learning have been developing since the 19th century.

But we live in changing times, and Whitebread is mindful of a worldwide decline in play, pointing out that over half the people in the world now live in cities. ‘The opportunities for free play, which I experienced almost every day of my childhood, are becoming increasingly scarce,’ he says. Outdoor play is curtailed by perceptions of risk to do with traffic, as well as parents’ increased wish to protect their children from being the victims of crime, and by the emphasis on ‘earlier is better’ which is leading to greater competition in academic learning and schools.

International bodies like the United Nations and the European Union have begun to develop policies concerned with children’s right to play, and to consider implications for leisure facilities and educational programmes. But what they often lack is the evidence to base policies on.

‘The type of play we are interested in is child-initiated, spontaneous and unpredictable – but, as soon as you ask a five-year-old “to play”, then you as the researcher have intervened,’ explains Dr Sara Baker. ‘And we want to know what the long-term impact of play is. It’s a real challenge.’

Dr Jenny Gibson agrees, pointing out that although some of the steps in the puzzle of how and why play is important have been looked at, there is very little data on the impact it has on the child’s later life.

Now, thanks to the university’s new Centre for Research on Play in Education, Development and Learning (PEDAL), Whitebread, Baker, Gibson and a team of researchers hope to provide evidence on the role played by play in how a child develops.

‘A strong possibility is that play supports the early development of children’s self-control,’ explains Baker. ‘This is our ability to develop awareness of our own thinking progresses – it influences how effectively we go about undertaking challenging activities.’

In a study carried out by Baker with toddlers and young pre-schoolers, she found that children with greater self-control solved problems more quickly when exploring an unfamiliar set-up requiring scientific reasoning. ‘This sort of evidence makes us think that giving children the chance to play will make them more successful problem-solvers in the long run.’

If playful experiences do facilitate this aspect of development, say the researchers, it could be extremely significant for educational practices, because the ability to self-regulate has been shown to be a key predictor of academic performance.

Gibson adds: ‘Playful behavior is also an important indicator of healthy social and emotional development. In my previous research, I investigated how observing children at play can give us important clues about their well-being and can even be useful in the diagnosis of neurodevelopmental disorders like autism.’

Whitebread’s recent research has involved developing a play-based approach to supporting children’s writing. ‘Many primary school children find writing difficult, but we showed in a previous study that a playful stimulus was far more effective than an instructional one.’ Children wrote longer and better-structured stories when they first played with dolls representing characters in the story. In the latest study, children first created their story with Lego*, with similar results. ‘Many teachers commented that they had always previously had children saying they didn’t know what to write about. With the Lego building, however, not a single child said this through the whole year of the project.’

Whitebread, who directs PEDAL, trained as a primary school teacher in the early 1970s, when, as he describes, ‘the teaching of young children was largely a quiet backwater, untroubled by any serious intellectual debate or controversy.’ Now, the landscape is very different, with hotly debated topics such as school starting age.

‘Somehow the importance of play has been lost in recent decades. It’s regarded as something trivial, or even as something negative that contrasts with “work”. Let’s not lose sight of its benefits, and the fundamental contributions it makes to human achievements in the arts, sciences and technology. Let’s make sure children have a rich diet of play experiences.’

* Lego: coloured plastic building blocks and other pieces that can be joined together`;

    t1.reading.passages[1].text = `How Dutch engineer Luud Schimmelpennink helped to devise urban bike-sharing schemes

A

The original idea for an urban bike-sharing scheme dates back to a summer’s day in Amsterdam in 1965. Provo, the organization that came up with the idea, was a group of Dutch activists who wanted to change society. They believed the scheme, which was known as the Witte Fietsenplan, was an answer to the perceived threats of air pollution and consumerism. In the centre of Amsterdam, they painted a small number of used bikes white. They also distributed leaflets describing the dangers of cars and inviting people to use the white bikes. The bikes were then left unlocked at various locations around the city, to be used by anyone in need of transport.

B

Luud Schimmelpennink, a Dutch industrial engineer who still lives and cycles in Amsterdam, was heavily involved in the original scheme. He recalls how the scheme succeeded in attracting a great deal of attention – particularly when it came to publicising Provo’s aims – but struggled to get off the ground. The police were opposed to Provo’s initiatives and almost as soon as the white bikes were distributed around the city, they removed them. However, for Schimmelpennink and for bike-sharing schemes in general, this was just the beginning. ‘The first Witte Fietsenplan was just a symbolic thing,’ he says. ‘We painted a few bikes white, that was all. Things got more serious when I became a member of the Amsterdam city council two years later.’

C

Schimmelpennink seized this opportunity to present a more elaborate Witte Fietsenplan to the city council. ‘My idea was that the municipality of Amsterdam would distribute 10,000 white bikes over the city, for everyone to use,’ he explains. ‘I made serious calculations. It turned out that a white bicycle – per person, per kilometer – would cost the municipality only 10% of what it contributed to public transport per person per kilometer.’ Nevertheless, the council unanimously rejected the plan. ‘They said that the bicycle belongs to the past. They saw a glorious future for the car,’ says Schimmelpennink. But he was not in the least discouraged.

D

Schimmelpennink never stopped believing in bike-sharing, and in the mid-90s, two Danes asked for his help to set up a system in Copenhagen. The result was the world’s first large-scale bike-share programme. It worked on a deposit: ‘You dropped a coin in the bike and when you returned it, you got your money back.’ After setting up the Danish system, Schimmelpennink decided to try his luck again in the Netherlands – and this time he succeeded in arousing the interest of the Dutch Ministry of Transport. ‘Times had changed,’ he recalls. ‘People had become more environmentally conscious, and the Danish experiment had proved that bike-sharing was a real possibility.’ A new Witte Fietsenplan was launched in 1999 in Amsterdam. However, riding a white bike was no longer free; it cost one guilder per trip and payment was made with a chip card developed by the Dutch bank Postbank. Schimmelpennink designed conspicuous, sturdy white bikes locked in special racks which could be opened with the chip card – the plan started with 250 bikes, distributed over five stations.

E

Theo Molenaar, who was a system designer for the project, worked alongside Schimmelpennink. ‘I remember when we were testing the bike racks, he announced that he had already designed better ones. But of course, we had to go through with the ones we had.’ The system, however, was prone to vandalism and theft. ‘After every weekend there would always be a couple of bikes missing,’ Molenaar says. ‘I really have no idea what people did with them, because they could instantly be recognised as white bikes.’ But the biggest blow came when Postbank decided to abolish the chip card, because it wasn’t profitable. ‘That chip card was pivotal to the system,’ Molenaar says. ‘To continue the project we would have needed to set up another system, but the business partner had lost interest.’

F

Schimmelpennink was disappointed, but – characteristically – not for long. In 2002 he got a call from the French advertising corporation JC Decaux, who wanted to set up his bike-sharing scheme in Vienna. ‘That went really well. After Vienna, they set up a system in Lyon. Then in 2007, Paris followed. That was a decisive moment in the history of bike-sharing.’ The huge and unexpected success of the Parisian bike-sharing programme, which now boasts more than 20,000 bicycles, inspired cities all over the world to set up their own schemes, all modelled on Schimmelpennink’s. ‘It’s wonderful that this happened,’ he says. ‘But financially I didn’t really benefit from it, because I never filed for a patent.’

G

In Amsterdam today, 38% of all trips are made by bike and, along with Copenhagen, it is regarded as one of the two most cycle-friendly capitals in the world – but the city never got another Witte Fietsenplan. Molenaar believes this may be because everybody in Amsterdam already has a bike. Schimmelpennink, however, cannot see that this changes Amsterdam’s need for a bike-sharing scheme. ‘People who travel on the underground don’t carry their bikes around. But often they need additional transport to reach their final destination.’ Although he thinks it is strange that a city like Amsterdam does not have a successful bike-sharing scheme, he is optimistic about the future. ‘In the ‘60s we didn’t stand a chance because people were prepared to give their lives to keep cars in the city. But that mentality has totally changed. Today everybody longs for cities that are not dominated by cars.’`;

    t1.reading.passages[2].text = `A critical ingredient in the success of hotels is developing and maintaining superior performance from their employees. How is that accomplished? What Human Resource Management (HRM) practices should organizations invest in to acquire and retain great employees?

Some hotels aim to provide superior working conditions for their employees. The idea originated from workplaces – usually in the non-service sector – that emphasized fun and enjoyment as part of work-life balance. By contrast, the service sector, and more specifically hotels, has traditionally not extended these practices to address basic employee needs, such as good working conditions.

Pfeffer (1994) emphasizes that in order to succeed in a global business environment, organizations must make investment in Human Resource Management (HRM) to allow them to acquire employees who possess better skills and capabilities than their competitors. This investment will be to their competitive advantage. Despite this recognition of the importance of employee development, the hospitality industry has historically been dominated by underdeveloped HR practices (Lucas, 2002).

Lucas also points out that ‘the substance of HRM practices does not appear to be designed to foster constructive relations with employees or to represent a managerial approach that enables developing and drawing out the full potential of people, even though employees may be broadly satisfied with many aspects of their work’ (Lucas, 2002). In addition, or maybe as a result, high employee turnover has been a recurring problem throughout the hospitality industry. Among the many cited reasons are low compensation, inadequate benefits, poor working conditions and compromised employee morale and attitudes (Maroudas et al., 2008).

Ng and Sorensen (2008) demonstrated that when managers provide recognition to employees, motivate employees to work together, and remove obstacles preventing effective performance, employees feel more obligated to stay with the company. This was succinctly summarized by Michel et al. (2013): ‘[P]roviding support to employees gives them the confidence to perform their jobs better and the motivation to stay with the organization.’ Hospitality organizations can therefore enhance employee motivation and retention through the development and improvement of their working conditions. These conditions are inherently linked to the working environment.

While it seems likely that employees’ reactions to their job characteristics could be affected by a predisposition to view their work environment negatively, no evidence exists to support this hypothesis (Spector et al., 2000). However, given the opportunity, many people will find something to complain about in relation to their workplace (Poulston, 2009). There is a strong link between the perceptions of employees and particular factors of their work environment that are separate from the work itself, including company policies, salary and vacations.

Such conditions are particularly troubling for the luxury hotel market, where high-quality service, requiring a sophisticated approach to HRM, is recognized as a critical source of competitive advantage (Maroudas et al., 2008). In a real sense, the services of hotel employees represent their industry (Schneider and Bowen, 1993). This representation has commonly been limited to guest experiences. This suggests that there has been a dichotomy between the guest environment provided in luxury hotels and the working conditions of their employees.

It is therefore essential for hotel management to develop HRM practices that enable them to inspire and retain competent employees. This requires an understanding of what motivates employees at different levels of management and different stages of their careers (Enz and Siguaw, 2000). This implies that it is beneficial for hotel managers to understand what practices are most favorable to increase employee satisfaction and retention.

Herzberg (1966) proposes that people have two major types of needs, the first being extrinsic motivation factors relating to the context in which work is performed, rather than the work itself. These include working conditions and job security. When these factors are unfavorable, job dissatisfaction may result. Significantly, though, just fulfilling these needs does not result in satisfaction, but only in the reduction of dissatisfaction (Maroudas et al., 2008).

Employees also have intrinsic motivation needs or motivators, which include such factors as achievement and recognition. Unlike extrinsic factors, motivator factors may ideally result in job satisfaction (Maroudas et al., 2008). Herzberg’s (1966) theory discusses the need for a ‘balance’ of these two types of needs.

The impact of fun as a motivating factor at work has also been explored. For example, Tews, Michel and Stafford (2013) conducted a study focusing on staff from a chain of themed restaurants in the United States. It was found that fun activities had a favorable impact on performance and manager support for fun had a favorable impact in reducing turnover. Their findings support the view that fun may indeed have a beneficial effect, but the framing of that fun must be carefully aligned with both organizational goals and employee characteristics. ‘Managers must learn how to achieve the delicate balance of allowing employees the freedom to enjoy themselves at work while simultaneously [achieving] high levels of performance’ (Tews et al., 2013).

Deery (2008) has recommended several actions that can be adopted at the organizational level to retain good staff as well as assist in balancing work and family life. Those particularly appropriate to the hospitality industry include allowing adequate breaks during the working day, staff functions that involve families, and providing health and well-being opportunities.`;

    t1.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '图表描述 - 三张饼图（营养素占比）',
        prompt: 'The charts below show the average percentages in typical meals of three types of nutrients, all of which may be unhealthy if eaten too much.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The three pie charts illustrate the average proportion of three potentially unhealthy nutrients – sodium, saturated fat and added sugar – consumed in four typical meals (breakfast, lunch, dinner and snacks) in the USA.\n\nOverall, dinner contains the largest share of sodium and saturated fat, while snacks contain by far the highest proportion of added sugar. Breakfast is the meal with the smallest amount of all three nutrients.\n\nSodium is most heavily consumed at dinner (43%), compared with 29% at lunch and only 14% each at breakfast and as snacks. A similar pattern appears for saturated fat: dinner again leads with 37%, followed by lunch (26%), snacks (21%) and breakfast (16%).\n\nAdded sugar, however, shows a different trend. Snacks are the clear peak at 42%, with dinner at 23%, lunch at 19% and breakfast at 16%. This means snacks, rather than the main meals, are the dominant source of excess sugar.\n\nIn summary, although every meal contributes at least 14% of these nutrients, dinner is the least healthy for sodium and fat, whereas snacks are the least healthy for sugar.',
        tips: '概述段点明三餐与零食的对比；分别描述三种营养素并做横向比较；注意 breakfast 在三项中都是最低；至少150词，用过去/现在一般时'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（讨论双方观点）',
        prompt: 'Some people believe that it is best to accept a bad situation, such as an unsatisfactory job or shortage of money. Others argue that it is better to try and improve such situations.\n\nDiscuss both these views and give your own opinion.\n\nWrite at least 250 words.',
        modelAnswer: 'Some people believe that it is best to accept a bad situation, such as an unsatisfactory job or shortage of money. Others argue that it is better to try and improve such situations. This essay will discuss both views and give my own opinion.\n\nOn the one hand, accepting a difficult situation can bring peace of mind. People who “go with the flow” avoid constant stress and may focus on what they can control. For example, a student who accepts a slightly lower grade may use the experience as quiet motivation to work harder next time, rather than becoming anxious. Acceptance also saves time and energy that might otherwise be wasted fighting unavoidable circumstances.\n\nOn the other hand, trying to improve a bad situation often leads to real progress. A person facing a shortage of money can take practical action, such as finding part-time work, which directly resolves the problem. In the workplace, those who challenge unsatisfying conditions may gain promotion or a better role. Without such effort, problems such as poverty or boredom can persist or worsen.\n\nIn my view, the best approach depends on the situation. Where the problem is temporary or minor, acceptance may be wiser; where it is harmful and changeable, active improvement is better. The key is to analyse each case rather than apply one rule to all.\n\nIn conclusion, both accepting and improving have value, and we should choose according to the circumstances.',
        tips: '两端各写一段并举例；明确给出个人立场（视情况而定）；使用连接词与对比结构；至少250词'
      }
    ];

    t1.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Future（未来）',
        questions: [
          { q: 'What jobs would you like to have 10 years from now?', a: '参考回答: I’m currently a junior teacher, and in ten years I hope to become the head of an elementary school. I love teaching children and don’t want to leave the classroom completely.' },
          { q: 'How useful will English be for your future?', a: '参考回答: English is already essential for my career, and in the future I’d like to be a travelling teacher in Europe, so English will be indispensable for communicating across countries.' },
          { q: 'How much travelling do you hope to do in the future?', a: '参考回答: Quite a lot – I plan to visit several European countries such as Italy, France and Sweden, so travelling will be a big part of my life.' },
          { q: 'How do you think your life will change in the future?', a: '参考回答: My career may stay similar, but as I get older my attitudes and tastes might change, and technology will probably change how I teach.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a book that you enjoyed a lot and that had a strong effect on you.\n\nYou should say:\n– what the book was\n– when and where you read it\n– what it was about\n– and explain why it was enjoyable and influential.',
        modelAnswer: '参考回答:\n\nI’d like to talk about a short novel called “The Old Man and the Sea” by Ernest Hemingway, which I read when I was a student. A teacher recommended it highly, and I borrowed it from the library.\n\nThe story is about an old Cuban fisherman named Santiago who, after 84 days without a catch, hooks a giant marlin far out at sea. He battles the fish for days, then loses most of it to sharks on the way home, returning with only a skeleton. Although he fails to bring the fish back, the villagers admire his courage.\n\nWhat I enjoyed most was how the simple language conveyed such deep emotion. I felt as if I were Santiago, fighting the marlin and the sharks myself. The book made me think about perseverance and self-belief: Santiago shows that age is just a number and that we should never lose hope, whatever the circumstances.\n\nIt influenced me because it changed how I face difficulties – I now try to keep going instead of giving up. That’s why this book was both enjoyable and meaningful to me.',
        tips: '用过去时叙述阅读经历、现在时讲内容与感悟；覆盖四个要点；加入具体细节与感受；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Children and reading / Electronic books',
        questions: [
          { q: 'What are the most popular types of children’s books in your country?', a: '参考回答: Children love fantasy series like Harry Potter, as well as comics such as Superman and Batman, and many also enjoy local folk stories and adventure books.' },
          { q: 'What are the benefits of parents reading books to their children?', a: '参考回答: It strengthens the parent-child bond, builds the child’s interest in reading, improves decision-making skills, and helps shape their values.' },
          { q: 'Should parents always let children choose the books they read?', a: '参考回答: Not completely – children should have some freedom, but parents must guide them away from age-restricted or harmful material.' },
          { q: 'How popular are electronic books in your country?', a: '参考回答: They are growing in cities, especially among young people and the tech-savvy, but older people still prefer printed books, and rural areas lag behind.' }
        ]
      }
    ];
  }

  // ======================================================================
  // 剑14 TEST 2
  // ======================================================================
  var t2 = findTest(2);
  if (t2) {
    t2.listening.sections = [
      {
        part: 'Part 1',
        context: 'Julie Garcia 在 Total Health Clinic 首次就诊，向医生 Carl 说明膝盖伤痛及个人情况',
        type: '个人信息填空（每空一词或数字）',
        questions: [
          { q: 'Contact phone number: ___', a: '219 442 9785' },
          { q: 'Date of birth: October ___', a: '10(th)' },
          { q: 'Occupation: ___ (in a restaurant chain)', a: 'manager' },
          { q: 'Insurance company: ___ (C-A-W-L-E-Y)', a: 'Cawley' },
          { q: 'Pain in: the ___ (left one)', a: 'knee' },
          { q: 'Pain noticed: ___ ago', a: '3 weeks' },
          { q: 'Plays: ___ (belongs to a club)', a: 'tennis' },
          { q: 'Also does: ___ a few times a week', a: 'running' },
          { q: 'Previously hurt: the ___ (last year)', a: 'shoulder' },
          { q: 'Takes regularly: ___ (for health)', a: 'vitamins' }
        ]
      },
      {
        part: 'Part 2',
        context: '导游在抵达 Branley Castle 前对游客的介绍（城堡历史、参观项目与园区地图）',
        type: '单选 + 地图标注',
        questions: [
          { q: 'What did Elizabeth I’s hosts decide to do when she visited in 1576?', a: 'B' },
          { q: 'Who took over the castle in 1982?', a: 'C' },
          { q: 'What can be seen in the state rooms?', a: 'C' },
          { q: 'What are the old zoo buildings used for now?', a: 'B' },
          { q: 'Where will afternoon tea be served?', a: 'A' },
          { q: 'Where is the starting point for walking around the walls?', a: 'H' },
          { q: 'Where is the archery show?', a: 'D' },
          { q: 'Where is the birds of prey (falconry) display?', a: 'F' },
          { q: 'Where is the traditional dancing outdoor stage?', a: 'A' },
          { q: 'Where is the shop?', a: 'E' }
        ]
      },
      {
        part: 'Part 3',
        context: '学生 Rosie 与 Martin 在导师指导下讨论关于 St Paul’s Island 猛犸象的课堂演示',
        type: '单选 + 配对（各演示环节的安排）',
        questions: [
          { q: 'How will they introduce the topic of woolly mammoths?', a: 'B' },
          { q: 'Why was the St Paul’s Island tooth discovery significant?', a: 'C' },
          { q: 'What happened to mammoths when the island was cut off from the mainland?', a: 'A' },
          { q: 'What did they conclude about when the mammoths became extinct?', a: 'A' },
          { q: 'What will they do for the introduction section?', a: 'E' },
          { q: 'What will they do for the mammoth-tooth section?', a: 'D' },
          { q: 'What will they do for the initial-questions section?', a: 'A' },
          { q: 'What will they do for the further-research section?', a: 'H' },
          { q: 'What will they do for the findings section?', a: 'G' },
          { q: 'What will they do for the relevance-to-present-day section?', a: 'C' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于天气预报历史（the history of weather forecasting）的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'Ancient cultures developed rites such as ___ to please weather gods', a: 'dances' },
          { q: 'Their ___ depended on observing the skies', a: 'survival' },
          { q: 'Babylonians based forecasts on observations of ___', a: 'clouds' },
          { q: 'Chinese calendar divided the year into 24 ___', a: 'festivals' },
          { q: 'Aristotle also described celestial phenomena such as ___', a: 'comets' },
          { q: 'Proverb: red ___ in the morning, shepherd’s warning', a: 'sky' },
          { q: 'From the 15th century, scientists saw the need for ___', a: 'instruments' },
          { q: 'Galileo developed the world’s first ___', a: 'thermometer' },
          { q: 'Franklin discovered ___ generally travel from west to east', a: 'storms' },
          { q: 'The invention of the ___ made records collatable', a: 'telegraph' }
        ]
      }
    ];

    t2.reading.passages = [
      {
        title: 'Passage 1: Alexander Henderson (1831-1913)',
        difficulty: '中等',
        summary: '苏格兰出生、移民加拿大的风景摄影师 Alexander Henderson 的生平与摄影事业（早期受 Notman 影响，后专拍风景，并为铁路公司工作）。',
        questions: [
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Henderson rarely visited the area around Press Estate when he was younger.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Henderson pursued a business career because it was what his family wanted.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Henderson and Notman were surprised by the results of their 1865 experiment.', a: 'NOT GIVEN' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'There were many similarities between Henderson’s early landscapes and those of Notman.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'The studio Henderson opened in 1866 was close to his home.', a: 'NOT GIVEN' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Henderson gave up portraiture so that he could focus on landscape photography.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'When he began work for the Intercolonial Railway, the Montreal–Halifax line had been finished.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Henderson’s last work as a photographer was with the Canadian Pacific Railway.', a: 'FALSE' },
          { type: '笔记填空（ONE WORD ONLY）', q: 'His father was a ___', a: 'merchant' },
          { type: '笔记填空（ONE WORD ONLY）', q: 'The photographic ___ was heavy', a: 'equipment' },
          { type: '笔记填空（ONE WORD ONLY）', q: 'People bought photographs as souvenirs or ___', a: 'gifts' },
          { type: '笔记填空（ONE WORD ONLY）', q: 'He often travelled by ___ on eastern rivers', a: 'canoe' },
          { type: '笔记填空（ONE WORD ONLY）', q: 'He photographed the ___ and the railway at Rogers Pass', a: 'mountains' }
        ]
      },
      {
        title: 'Passage 2: Back to the future of skyscraper design',
        difficulty: '中偏难',
        summary: '剑桥大学 Alan Short 教授主张回归19-20世纪被动式通风/自然冷却的建筑设计，以减少摩天楼对空调的依赖。',
        questions: [
          { type: '段落信息匹配（选段落字母 A–I）', q: 'why some people avoided hospitals in the 19th century', a: 'F' },
          { type: '段落信息匹配（选段落字母 A–I）', q: 'a suggestion that the popularity of tall buildings is linked to prestige', a: 'C' },
          { type: '段落信息匹配（选段落字母 A–I）', q: 'comparison between air circulation in a 19th-century building and modern standards', a: 'E' },
          { type: '段落信息匹配（选段落字母 A–I）', q: 'how Short tested air circulation in a 19th-century building', a: 'D' },
          { type: '段落信息匹配（选段落字母 A–I）', q: 'implication that advertising led to a large increase in use of air conditioning', a: 'B' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'Buildings rely on sealed ___ rather than fresh air', a: 'design' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'Billings put ___ in the airstreams', a: 'pathogens' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'Someone with ___ coughing in the wards', a: 'TB' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'Patients kept safe in the ___', a: 'wards' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'Communal areas suited to certain ___', a: 'communal' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'Driven by demand from the ___', a: 'public' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'Toxic air known as ___', a: 'miasmas' },
          { type: '摘要填空（ONE WORD ONLY）', q: 'Epidemics of ___ in London and Paris', a: 'cholera' }
        ]
      },
      {
        title: 'Passage 3: Why companies should welcome disorder',
        difficulty: '难',
        summary: '批判现代企业对"秩序"的过度迷恋，指出无序（disorder）在创新中同样有价值，应以有用性为准平衡二者。',
        questions: [
          { type: '段落小标题（List of Headings）', q: 'Section A', a: 'vi' },
          { type: '段落小标题（List of Headings）', q: 'Section B', a: 'i' },
          { type: '段落小标题（List of Headings）', q: 'Section C', a: 'iii' },
          { type: '段落小标题（List of Headings）', q: 'Section D', a: 'ii' },
          { type: '段落小标题（List of Headings）', q: 'Section E', a: 'ix' },
          { type: '段落小标题（List of Headings）', q: 'Section F', a: 'vii' },
          { type: '段落小标题（List of Headings）', q: 'Section G', a: 'iv' },
          { type: '段落小标题（List of Headings）', q: 'Section H', a: 'viii' },
          { type: '句子填空（ONE WORD ONLY）', q: 'Order can become less ___ over time', a: 'productive' },
          { type: '句子填空（ONE WORD ONLY）', q: 'Perfectionists regard themselves as ___', a: 'perfectionists' },
          { type: '句子填空（ONE WORD ONLY）', q: 'Workers may feel ___ with aspects of their work', a: 'dissatisfied' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Both businesses and people aim at order without really considering its value.', a: 'TRUE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Innovation is most successful if the people involved have distinct roles.', a: 'FALSE' },
          { type: '判断题 (TRUE/FALSE/NOT GIVEN)', q: 'Google was inspired to adopt flexibility by the success of General Electric.', a: 'NOT GIVEN' }
        ]
      }
    ];

    t2.reading.passages[0].text = `Alexander Henderson was born in Scotland in 1831 and was the son of a successful merchant. His grandfather, also called Alexander, had founded the family business, and later became the first chairman of the National Bank of Scotland. The family had extensive landholding in Scotland. Besides its residence in Edinburgh, it owned Press Estate, 650 acres of farmland about 35 miles southeast of the city. The family often stayed at Press Castle, the large mansion on the northern edge of the property, and Alexander spent much of his childhood in the area, playing on the beach near Eyemouth or fishing in the streams nearby.

Even after he went to school at Murcheston Academy on the outskirts of Edinburgh, Henderson returned to Press at weekends. In 1849 he began a three-year apprenticeship to become an accountant. Although he never liked the prospect of a business career, he stayed with it to please his family. In October 1855, however, he emigrated to Canada with his wife Agnes Elder Robertson and they settled in Montreal.

Henderson learned photography in Montreal around the year 1857 and quickly took it up as a serious amateur. He became a personal friend and colleague of the Scottish – Canadian photographer William Notman. The two men made a photographic excursion to Niagara Falls in 1860 and they cooperated on experiments with magnesium flares as a source of artificial light in 1865. They belonged to the same societies and were among the founding members of the Art Association of Montreal. Henderson acted as chairman of the association’s first meeting, which was held in Notman’s studio on 11 January 1860.

In spite of their friendship, their styles of photography were quite different. While Notman’s landscapes were noted for their bold realism, Henderson for the first 20 years of his career produced romantic images, showing the strong influence of the British landscape tradition. His artistic and technical progress was rapid and in 1865 he published his first major collection of landscape photographs. The publication had limited circulation (only seven copies have ever been found), and was called Canadian Views and Studies. The contents of each copy vary significantly and have proved a useful source for evaluating Henderson’s early work.

In 1866, he gave up his business to open a photographic studio, advertising himself as a portrait and landscape photographer. From about 1870 he dropped portraiture to specialize in landscape photography and other views. His numerous photographs of city life revealed in street scenes, houses, and markets are alive with human activity, and although his favourite subject was landscape he usually composed his scenes around such human pursuits as farming the land, cutting ice on a river, or sailing down a woodland stream. There was sufficient demand for these types of scenes and others he took depicting the lumber trade, steamboats and waterfalls to enable him to make a living. There was little competing hobby or amateur photography before the late 1880s because of the time-consuming techniques involved and the weight of equipment. People wanted to buy photographs as souvenirs of a trip or as gifts, and catering to this market, Henderson had stock photographs on display at his studio for mounting, framing, or inclusion in albums.

Henderson frequently exhibited his photographs in Montreal and abroad, in London, Edinburgh, Dublin, Paris, New York, and Philadelphia. He met with greater success in 1877 and 1878 in New York when he won first prizes in the exhibition held by E and H T Anthony and Company for landscapes using the Lambertype process. In 1878 his work won second prize at the world exhibition in Paris.

In the 1870s and 1880s Henderson travelled widely throughout Quebec and Ontario, in Canada, documenting the major cities of the two provinces and many of the villages in Quebec. He was especially fond of the wilderness and often travelled by canoe on the Blanche, du Lièvre, and other noted eastern rivers. He went on several occasions to the Maritimes and in 1872 he sailed by yacht along the lower north shore of the St Lawrence River. That same year, while in the lower St Lawrence River region, he took some photographs of the construction of the Intercolonial Railway. This undertaking led in 1875 to a commission from the railway to record the principal structures along the almost-completed line connecting Montreal to Halifax. Commissions from other railways followed. In 1876 he photographed bridges on the Quebec, Montreal, Ottawa and Occidental Railway between Montreal and Ottawa. In 1885 he went west along the Canadian Pacific Railway (CPR) as far as Rogers Pass in British Columbia, where he took photographs of the mountains and the progress of construction.

In 1892 Henderson accepted a full-time position with the CPR as manager of a photographic department which he was to set up and administer. His duties included spending four months in the field each year. That summer he made his second trip west, photographing extensively along the railway line as far as Victoria. He continued in this post until 1897, when he retired completely from photography.

When Henderson died in 1913, his huge collection of glass negatives was stored in the basement of his house. Today collections of his work are held at the National Archives of Canada, Ottawa, and the McCord Museum of Canadian History, Montreal.`;

    t2.reading.passages[1].text = `A

The Recovery of Natural Environments in Architecture by Professor Alan Short is the culmination of 30 years of research and award-winning green building design by Short and colleagues in Architecture, Engineering, Applied Maths and Earth Sciences at the University of Cambridge.

‘The crisis in building design is already here,’ said Short. ‘Policy makers think you can solve energy and building problems with gadgets. You can’t. As global temperatures continue to rise, we are going to continue to squander more and more energy on keeping our buildings mechanically cool until we have run out of capacity.’

B

Short is calling for a sweeping reinvention of how skyscrapers and major public buildings are designed – to end the reliance on sealed buildings which exist solely via the ‘life support’ system of vast air conditioning units.

Instead, he shows it is entirely possible to accommodate natural ventilation and cooling in large buildings by looking into the past, before the widespread introduction of air conditioning systems, which were ‘relentlessly and aggressively marketed’ by their inventors.

C

Short points out that to make most contemporary buildings habitable, they have to be sealed and air conditioned. The energy use and carbon emissions this generates is spectacular and largely unnecessary. Buildings in the West account for 40-50% of electricity usage, generating substantial carbon emissions, and the rest of the world is catching up at a frightening rate. Short regards glass, steel and air-conditioned skyscrapers as symbols of status, rather than practical ways of meeting our requirements.

D

Short’s book highlights a developing and sophisticated art and science of ventilating buildings through the 19th and earlier-20th centuries, including the design of ingeniously ventilated hospitals. Of particular interest were those built to the designs of John Shaw Billings, including the first Johns Hopkins Hospital in the US city of Baltimore (1873-1889).

‘We spent three years digitally modelling Billings’ final designs,’ says Short. ‘We put pathogens* in the airstreams, modelled for someone with tuberculosis (TB) coughing in the wards and we found the ventilation systems in the room would have kept other patients safe from harm.’

* pathogens: microorganisms that can cause disease

E

‘We discovered that 19th-century hospital wards could generate up to 24 air changes an hour – that’s similar to the performance of a modern-day, computer-controlled operating theatre. We believe you could build wards based on these principles now.

Single rooms are not appropriate for all patients. Communal wards appropriate for certain patients – older people with dementia, for example – would work just as well in today’s hospitals, at a fraction of the energy cost.’

Professor Short contends the mindset and skill-sets behind these designs have been completely lost, lamenting the disappearance of expertly designed theatres, opera houses, and other buildings where up to half the volume of the building was given over to ensuring everyone got fresh air.

F

Much of the ingenuity present in 19th-century hospital and building design was driven by a panicked public clamouring for buildings that could protect against what was thought to be the lethal threat of miasmas – toxic air that spread disease. Miasmas were feared as the principal agents of disease and epidemics for centuries, and were used to explain the spread of infection from the Middle Ages right through to the cholera outbreaks in London and Paris during the 1850s. Foul air, rather than germs, was believed to be the main driver of ‘hospital fever’, leading to disease and frequent death. The prosperous steered clear of hospitals.

While miasma theory has been long since disproved, Short has for the last 30 years advocated a return to some of the building design principles produced in its wake.

G

Today, huge amounts of a building’s space and construction cost are given over to air conditioning. ‘But I have designed and built a series of buildings over the past three decades which have tried to reinvent some of these ideas and then measure what happens.

‘To go forward into our new low-energy, low-carbon future, we would be well advised to look back at design before our high-energy, high-carbon present appeared. What is surprising is what a rich legacy we have abandoned.’

H

Successful examples of Short’s approach include the Queen’s Building at De Montfort University in Leicester. Containing as many as 2,000 staff and students, the entire building is naturally ventilated, passively cooled and naturally lit, including the two largest auditoria, each seating more than 150 people. The award-winning building uses a fraction of the electricity of comparable buildings in the UK.

Short contends that glass skyscrapers in London and around the world will become a liability over the next 20 or 30 years if climate modelling predictions and energy price rises come to pass as expected.

I

He is convinced that sufficiently cooled skyscrapers using the natural environment can be produced in almost any climate. He and his team have worked on hybrid buildings in the harsh climates of Beijing and Chicago – built with natural ventilation assisted by back-up air conditioning – which, surprisingly perhaps, can be switched off more than half the time on milder days and during the spring and autumn.

Short looks at how we might reimagine the cities, offices and homes of the future. Maybe it’s time we changed our outlook.`;

    t2.reading.passages[2].text = `A

Organisation is big business. Whether it is of our lives – all those inboxes and calendars – or how companies are structured, a multi-billion dollar industry helps to meet this need.

We have more strategies for time management, project management and self-organisation than at any other time in human history. We are told that we ought to organize our company, our home life, our week, our day and even our sleep, all as a means to becoming more productive. Every week, countless seminars and workshops take place around the world to tell a paying public that they ought to structure their lives in order to achieve this.

This rhetoric has also crept into the thinking of business leaders and entrepreneurs, much to the delight of self-proclaimed perfectionists with the need to get everything right. The number of business schools and graduates has massively increased over the past 50 years, essentially teaching people how to organise well.

B

Ironically, however, the number of business that fail has also steadily increased. Work-related stress has increased. A large proportion of workers from all demographics claim to be dissatisfied with the way their work is structured and the way they are managed.

This begs the question: what has gone wrong? Why is it that on paper the drive for organisation seems a sure shot for increasing productivity, but in reality falls well short of what is expected?

C

This has been a problem for a while now. Frederick Taylor was one of the forefathers of scientific management. Writing in the first half of the 20th century, he designed a number of principles to improve the efficiency of the work process, which have since become widespread in modern companies. So the approach has been around for a while.

D

New research suggests that this obsession with efficiency is misguided. The problem is not necessarily the management theories or strategies we use to organise our work; it’s the basic assumptions we hold in approaching how we work. Here it’s the assumption that order is a necessary condition for productivity. This assumption has also fostered the idea that disorder must be detrimental to organizational productivity. The result is that businesses and people spend time and money organising themselves for the sake of organising, rather than actually looking at the end goal and usefulness of such an effort.

E

What’s more, recent studies show that order actually has diminishing returns. Order does increase productivity to a certain extent, but eventually the usefulness of the process of organisation, and the benefit it yields, reduce until the point where any further increase in order reduces productivity. Some argue that in a business, if the cost of formally structuring something outweighs the benefit of doing it, then that thing ought not to be formally structured. Instead, the resources involved can be better used elsewhere.

F

In fact, research shows that, when innovating, the best approach is to create an environment devoid of structure and hierarchy and enable everyone involved to engage as one organic group. These environments can lead to new solutions that, under conventionally structured environments (filled with bottlenecks in term of information flow, power structures, rules, and routines) would never be reached.

G

In recent times companies have slowly started to embrace this disorganisation. Many of them embrace it in terms of perception (embracing the idea of disorder, as opposed to fearing it) and in terms of process (putting mechanisms in place to reduce structure).

For example, Oticon, a large Danish manufacturer of hearing aids, used what it called a ‘spaghetti’ structure in order to reduce the organisation’s rigid hierarchies. This involved scrapping formal job titles and giving staff huge amounts of ownership over their own time and projects. This approach proved to be highly successful initially, with clear improvements in worker productivity in all facets of the business.

In similar fashion, the former chairman of General Electric embraced disorganisation, putting forward the idea of the ‘boundaryless’ organisation. Again, it involves breaking down the barriers between different parts of a company and encouraging virtual collaboration and flexible working. Google and a number of other tech companies have embraced (at least in part) these kinds of flexible structures, facilitated by technology and strong company values which glue people together.

H

A word of warning to others thinking of jumping on this bandwagon: the evidence so far suggests disorder, much like order, also seems to have diminishing utility, and can also have detrimental effects on performance if overused. Like order, disorder should be embraced only so far as it is useful. But we should not fear it – nor venerate one over the other. This research also shows that we should continually question whether or not our existing assumptions work.`;

    t2.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '图表描述 - 柱状图 + 表格',
        prompt: 'The chart below shows the value of one country’s exports in various categories during 2015 and 2016. The table shows the percentage change in each category of exports in 2016 compared with 2015.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The bar chart shows the value of a country’s exports in five categories in 2015 and 2016, while the table gives the percentage change for each category between those two years.\n\nOverall, petroleum products were the most valuable export in both years, and most categories increased in value. Gems and jewellery was the only category to decline.\n\nIn 2015, petroleum products were worth just over $60 billion and rose by 3% to about $63 billion in 2016. Engineered goods showed the biggest growth, from over $50 billion to more than $60 billion (an increase of over 8%). Agricultural products stayed around $30 billion with a small rise of 0.81%, while textiles grew from about $25 billion to over $30 billion (a 15.24% increase).\n\nBy contrast, gems and jewellery, the third-largest export, fell by 5.18% – the only decrease among the five categories.\n\nIn summary, the country’s exports grew in almost every sector in 2016, with engineered goods and textiles showing the strongest gains and gems and jewellery the sole decline.',
        tips: '先总览（petroleum 最大、多数增长、gems 唯一下降）；用具体 $ billion 数值与百分比；对比各品类；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（讨论双方观点）',
        prompt: 'Some people say that the main environmental problem of our time is the loss of particular species of plants and animals. Others say that there are more important environmental problems.\n\nDiscuss both these views and give your own opinion.\n\nWrite at least 250 words.',
        modelAnswer: 'Some people say that the main environmental problem of our time is the loss of particular species of plants and animals. Others argue that there are more important environmental problems. This essay will discuss both views and state my opinion.\n\nOn the one hand, the disappearance of species is deeply regrettable. Rare animals such as the white rhino have died out, and many more are threatened. Losing biodiversity weakens ecosystems that humans depend on for food, clean air and water, so protecting species is clearly important.\n\nOn the other hand, other problems may be even more urgent. Climate change is causing rising sea levels and flooding, displacing some of the world’s poorest communities, while plastic waste chokes oceans and enters the food chain, harming countless creatures. These issues affect all life on Earth, not only individual species.\n\nIn my view, while saving particular species deserves attention, the broader problems of climate change and pollution are more critical because they threaten entire habitats and human survival. Efforts should focus on these systemic issues, which would also help protect many species at once.\n\nIn conclusion, species loss is serious, but climate change and plastic pollution are the more important environmental problems of our time.',
        tips: '两端各写一段并举例（白犀牛、海平面上升、塑料）；明确个人立场（气候与污染更关键）；用对比与因果连接；至少250词'
      }
    ];

    t2.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Social Media（社交媒体）',
        questions: [
          { q: 'Which social media websites do you use?', a: '参考回答: I use several, including Instagram, Facebook and Twitter. They help me keep in touch with friends and follow current events.' },
          { q: 'How much time do you spend on social media sites?', a: '参考回答: About an hour a day. It’s a nice way to relax, but I try to limit it so I don’t get distracted.' },
          { q: 'What kind of information about yourself have you put on social media?', a: '参考回答: Mostly photos and updates about my hobbies and trips. I keep private details hidden for security reasons.' },
          { q: 'Is there anything you don’t like about social media?', a: '参考回答: Yes – the pressure to show a perfect life, which creates unrealistic comparisons and affects self-esteem.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe something you liked very much which you bought for your home.\n\nYou should say:\n– what you bought\n– when and where you bought it\n– why you chose this particular thing\n– and explain why you liked it so much.',
        modelAnswer: '参考回答:\n\nI’d like to talk about a large, comfortable armchair I bought for my living room last summer from a local furniture store.\n\nI chose it because I wanted a cosy spot to read and relax. Its design matched my room’s decoration, and the colour added a nice touch to the space, so it felt just right.\n\nWhat I love most is the comfort – I can sit in it for hours without feeling tired. It has become my favourite place to unwind with a good book or enjoy a movie, and it makes the whole room feel warmer and more welcoming.\n\nI liked it so much because it turned an ordinary corner into a special retreat where I can escape stress. Every time I sit there, I feel relaxed and happy, which is why it’s the purchase for my home I value most.',
        tips: '用过去时讲购买、现在时讲感受；覆盖四个要点；补充颜色/舒适度等细节；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Creating a Nice Home / Different Types of Home',
        questions: [
          { q: 'Why do some people buy lots of things for their home?', a: '参考回答: They want a comfortable, welcoming space and to express their personality through decoration; more items can make a home feel complete.' },
          { q: 'Do you think it is very expensive to make a home look nice?', a: '参考回答: It can be, but there are affordable options like DIY projects and thrift stores, so a nice home is possible on a budget.' },
          { q: 'In what ways is living in a flat/apartment better than living in a house?', a: '参考回答: Flats need less maintenance and are usually closer to shops and transport, which is convenient in cities.' },
          { q: 'Do you agree that the kinds of homes people prefer change as they get older?', a: '参考回答: Yes – younger people may want large family homes, while older people often prefer smaller, easier-to-maintain places.' }
        ]
      }
    ];
  }

  // ======================================================================
  // 听力原文脚本（真实，覆盖 listening-scripts.js 中 14-1-* 与 14-2-*）
  // ======================================================================
  if (typeof LISTENING_SCRIPTS !== 'undefined') {

    // ---------- 剑14 TEST 1 ----------
    LISTENING_SCRIPTS['14-1-0'] = `OFFICER: Good morning. What can I do for you?

LOUISE: I want to report a theft. I had some things stolen out of my bag yesterday.

OFFICER: I’m sorry to hear that. Right, so I’ll need to take a few details. Can I start with your name?

LOUISE: Louise Taylor.

OFFICER: OK, thank you. And are you resident in the UK?

LOUISE: No, I’m actually Canadian, though my mother was British.

OFFICER: And your date of birth?

LOUISE: December 14th, 1977.

OFFICER: So you’re just visiting this country?

LOUISE: That’s right. I come over most summers on business. I’m an interior designer and I come over to buy old furniture, antiques you know. There are some really lovely things around here, but you need to get out to the small towns. I’ve had a really good trip this year, until this happened.

OFFICER: OK. So you’ve been here quite a while?

LOUISE: Yes, I’m here for two months. I go back next week.

OFFICER: So may I ask where you’re staying now?

LOUISE: Well at present I’ve got a place at Park Apartments, that’s on King Street. I was staying at the Riverside Apartments on the same street, but the apartment there was only available for six weeks so I had to find another one.

OFFICER: OK. And the apartment number?

LOUISE: Fifteen.

OFFICER: Right. Now, I need to take some details of the theft. So you said you had some things stolen out of your bag?

LOUISE: That’s right.

OFFICER: And were you actually carrying the bag when the theft took place?

LOUISE: Yes. I really can’t understand it. I had my backpack on. And I went into a supermarket to buy a few things and when I opened it up my wallet wasn’t there.

OFFICER: And what did your wallet have in it?

LOUISE: Well, fortunately I don’t keep my credit cards in that wallet – I keep them with my passport in an inside compartment in my backpack. But there was quite a bit of cash there … about £250 sterling, I should think. I withdrew £300 from my account yesterday, but I did a bit of shopping, so I must have already spent about £50 of that.

OFFICER: OK.

LOUISE: At first I thought, oh I must have left the wallet back in the apartment, but then I realised my phone had gone as well. It was only a week old, and that’s when I realised I’d been robbed. Anyway at least they didn’t take the keys to my rental car.

OFFICER: Yes. So you say the theft occurred yesterday?

LOUISE: Yes.

OFFICER: So that was September the tenth. And do you have any idea at all of where or when the things might possibly have been stolen?

LOUISE: Well at first I couldn’t believe it because the bag had been on my back ever since I left the apartment after lunch. It’s just a small backpack, but I generally use it when I’m travelling because it seems safer than a handbag. Anyway, I met up with a friend, and we spent a couple of hours in the museum. But I do remember that as we were leaving there, at about 4 o’clock, a group of young boys ran up to us, and they were really crowding round us, and they were asking us what time it was, then all of a sudden they ran off.

OFFICER: Can you remember anything about them?

LOUISE: The one who did most of the talking was wearing a T-shirt with a picture of something … let’s see … a tiger.

OFFICER: Right. Any idea of how old he might have been?

LOUISE: Around twelve years old?

OFFICER: And can you remember anything else about his appearance?

LOUISE: Not much. He was quite thin …

OFFICER: Colour of hair?

LOUISE: I do remember that – he was blond. All the others were dark-haired.

OFFICER: And any details of the others?

LOUISE: Not really. They came and went so quickly.

OFFICER: Right. So what I’m going to do now is give you a crime reference number so you can contact your insurance company. So this is ten digits: 87954 82361.

LOUISE: Thank you. So should I…`;

    LISTENING_SCRIPTS['14-1-1'] = `Good morning everyone. My name’s Janet Parker and I’m the human resources manager. We’re very happy to welcome you to your new apprenticeship. I hope that the next six months will be a positive and enjoyable experience for you.

I’d like to start with some general advice about being an apprentice. Most of you have very little or no experience of working for a big organisation and the first week or so may be quite challenging. There will be a lot of new information to take in but don’t worry too much about trying to remember everything. The important thing is to check with someone if you’re not sure what to do – you’ll find your supervisor is very approachable and won’t mind explaining things or helping you out. You’re here to learn so make the most of that opportunity. You’ll be spending time in different departments during your first week so make an effort to talk to as many people as possible about their work – you’ll make some new friends and find out lots of useful information.

As well as having a supervisor, you’ll each be assigned a mentor. This person will be someone who’s recently completed an apprenticeship and you’ll meet with them on a weekly basis. Their role is to provide help and support throughout your apprenticeship. Of course, this doesn’t mean they’ll actually do any of your work for you – instead they’ll be asking you about what goals you’ve achieved so far, as well as helping you to identify any areas for improvement. You can also discuss your more long-term ambitions with them as well.

Now I just want to run through a few company policies for our apprenticeship scheme with you… Most importantly, the internet. As part of your job you’ll be doing some research online so obviously you’ll have unlimited access for that but please don’t use it for personal use – you’ll have your own phones for that.

Some of you have already asked me about flexible working. After your probationary three-month period – some of you will be eligible for this – but it will depend on which department you’re in and what your personal circumstances are. So please don’t assume you’ll automatically be permitted to do this.

I want to make sure there’s no confusion about our holiday policy. Apart from any statutory public holidays we ask that you don’t book any holidays until after your six-month apprenticeship has finished. Time off should only be taken if you are unwell. Please speak to your supervisor if this is going to be a problem.

You’ll be expected to work a 40-hour week but there may be opportunities to do overtime during busy periods. Although you’re not required to do this, it can be a valuable experience – so we advise you to take it up if possible. Obviously, we understand that people do have commitments outside work, so don’t worry if there are times when you are unavailable.

As you know, we don’t have a formal dress code here – you may wear casual clothes as long as they’re practical – and the only restriction for shoes we have is on high heels for health and safety reasons. Comfortable shoes like trainers are preferable.

There’s a heavily subsidised canteen on site where you can get hot meals or salads cheaply. Snacks and drinks are also provided – so we’ve decided to introduce a no packed lunch policy. This is partly to encourage healthy eating at work and partly to stop people from eating at their workstation, which is unhygienic.

OK moving on to …`;

    LISTENING_SCRIPTS['14-1-2'] = `TUTOR: OK, so what I’d like you to do now is to talk to your partner about your presentations on urban planning. You should have done most of the reading now, so I’d like you to share your ideas, and talk about the structure of your presentation and what you need to do next.

CARLA: OK Rob. I’m glad we chose quite a specific topic – cities built next to the sea. It made it much easier to find relevant information.

ROB: Yeah. And cities are growing so quickly – I mean, we know that more than half the world’s population lives in cities now.

CARLA: Yeah, though that’s all cities, not just ones on the coast. But most of the biggest cities are actually built by the sea, I’d not realised that before.

ROB: Nor me. And what’s more, a lot of them are built at places where rivers come out into the sea. But apparently this can be a problem.

CARLA: Why?

ROB: Well, as the city expands, agriculture and industry tend to spread further inland along the rivers, and so agriculture moves even further inland up the river. That’s not necessarily a problem, except it means more and more pollutants are discharged into the rivers.

CARLA: So these are brought downstream to the cities?

ROB: Right. Hmm. Did you read that article about Miami, on the east coast of the USA?

CARLA: No.

ROB: Well, apparently back in the 1950s they built channels to drain away the water in case of flooding.

CARLA: Sounds sensible.

ROB: Yeah, they spent quite a lot of money on them. But what they didn’t take into account was global warming. So they built the drainage channels too close to sea level, and now sea levels are rising, they’re more or less useless. If there’s a lot of rain, the water can’t run away, there’s nowhere for it to go. The whole design was faulty.

CARLA: So what are the authorities doing about it now?

ROB: I don’t know. I did read that they’re aiming to stop disposing of waste water into the ocean over the next ten years.

CARLA: But that won’t help with flood prevention now, will it?

ROB: No. Really they just need to find the money for something to replace the drainage channels, in order to protect against flooding now. But in the long term they need to consider the whole ecosystem.

CARLA: Right. Really, though, coastal cities can’t deal with their problems on their own, can they? I mean, they’ve got to start acting together at an international level instead of just doing their own thing.

ROB: Absolutely. The thing is, everyone knows what the problems are and environmentalists have a pretty good idea of what we should be doing about them, so they should be able to work together to some extent. But it’s going to be a long time before countries come to a decision on what principles they’re prepared to abide by.

CARLA: Yes, if they ever do.

CARLA: So I think we’ve probably got enough for our presentation. It’s only fifteen minutes.

ROB: OK. So I suppose we’ll begin with some general historical background about why coastal cities were established. But we don’t want to spend too long on that, the other students will already know a bit about it. It’s all to do with communications and so on.

CARLA: Yes. We should mention some geographical factors, things like wetlands and river estuaries and coastal erosion and so on. We could have some maps of different cities with these features marked.

ROB: On a handout you mean? Or some slides everyone can see?

CARLA: Yeah, that’d be better.

ROB: It’d be good to go into past mistakes in a bit more detail. Did you read that case study of the problems there were in New Orleans with flooding a few years ago?

CARLA: Yes. We could use that as the basis for that part of the talk. I don’t think the other students will have read it, but they’ll remember hearing about the flooding at the time.

ROB: OK. So that’s probably enough background.

CARLA: So then we’ll go on to talk about what action’s being taken to deal with the problems of coastal cities.

ROB: OK. What else do we need to talk about? Maybe something on future risks, looking more at the long term, if populations continue to grow.

CARLA: Yeah. We’ll need to do a bit of work there, I haven’t got much information, have you?

ROB: No. We’ll need to look at some websites. Shouldn’t take too long.

CARLA: OK. And I think we should end by talking about international implications. Maybe we could ask people in the audience. We’ve got people from quite a lot of different places.

ROB: That’d be interesting, if we have time, yes. So now shall we …`;

    LISTENING_SCRIPTS['14-1-3'] = `In this series of lectures about marine renewable energy, I’ll start by examining its early history – that’ll be the subject of today’s talk.

Producing enough energy to meet our needs has become a serious problem. Demand is rising rapidly, because of the world’s increasing population and expanding industry. Burning fossil fuels, like gas, coal and oil, seriously damages the environment and they’ll eventually run out. For a number of years now, scientists have been working out how we can derive energy from renewable sources, such as the sun and wind, without causing pollution. Today I’ll outline marine renewable energy – also called ocean energy – which harnesses the movement of the oceans.

Marine renewable energy can be divided into three main categories: wave energy, tidal energy and ocean thermal energy conversion, and I’ll say a few words about each one.

First, wave energy. Numerous devices have been invented to harvest wave energy, with names such as Wave Dragon, the Penguin and Mighty Whale, and research is going on to try and come up with a really efficient method. This form of energy has plenty of potential, as the source is constant, and there’s no danger of waves coming to a standstill. Electricity can be generated using onshore systems, using a reservoir, or offshore systems. But the problem with ocean waves is that they’re erratic, with the wind making them travel in every direction. This adds to the difficulty of creating efficient technology: ideally all the waves would travel smoothly and regularly along the same straight line. Another drawback is that sand and other sediment on the ocean floor might be stopped from flowing normally, which can lead to environmental problems.

The second category of marine energy that I’ll mention is tidal energy. One major advantage of using the tide, rather than waves, as a source of energy is that it’s predictable: we know the exact times of high and low tides for years to come.

For tidal energy to be effective, the difference between high and low tides needs to be at least five metres, and this occurs naturally in only about forty places on Earth. But the right conditions can be created by constructing a tidal lagoon, an area of sea water separated from the sea.

One current plan is to create a tidal lagoon on the coast of Wales. This will be an area of water within a bay at Swansea, sheltered by a U-shaped breakwater, or dam, built out from the coast. The breakwater will contain sixteen hydro turbines, and as the tide rises, water rushes through the breakwater, activating the turbines, which turn a generator to produce electricity. Then, for three hours as the tide goes out, the water is held back within the breakwater, increasing the difference in water level, until it’s several metres higher within the lagoon than in the open sea. Then, in order to release the stored water, gates in the breakwater are opened. It pours powerfully out of the lagoon, driving the turbines in the breakwater in the opposite direction and again generating thousands of megawatts of electricity. As there are two high tides a day, this lagoon scheme would generate electricity four times a day, every day, for a total of around 14 hours in every 24 – and enough electricity for over 150,000 homes.

This system has quite a lot in its favour: unlike solar and wind energy it doesn’t depend on the weather; the turbines are operated without the need for fuel, so it doesn’t create any greenhouse gas emissions; and very little maintenance is needed. It’s estimated that electricity generated in this way will be relatively cheap, and that manufacturing the components would create more than 2,000 jobs, a big boost to the local economy.

On the other hand, there are fears that lagoons might harm both fish and birds, for example by disturbing migration patterns, and causing a build-up of silt, affecting local ecosystems.

There are other forms of tidal energy, but I’ll go on to the third category of marine energy: ocean thermal energy conversion. This depends on there being a big difference in temperature between surface water and the water a couple of kilometres below the surface, and this occurs in tropical coastal areas. The idea is to bring cold water up to the surface using a submerged pipe. The concept dates back to 1881, when …`;

    // ---------- 剑14 TEST 2 ----------
    LISTENING_SCRIPTS['14-2-0'] = `CARL: Hi, come and take a seat.

JULIE: Thank you.

CARL: My name’s Carl Rogers and I’m one of the doctors here at the Total Health Clinic. So I understand this is your first visit to the clinic?

JULIE: Yes, it is.

CARL: OK, well I hope you’ll be very happy with the service you receive here. So if it’s alright with you I’ll take a few details to help me give you the best possible service.

JULIE: Sure.

CARL: So can I check first of all that we have the correct personal details for you? So your full name is Julie Anne Garcia?

JULIE: That’s correct.

CARL: Perfect. And can I have a contact phone number?

JULIE: It’s 219 442 9785.

CARL: OK, and then can I just check that we have the correct date of birth?

JULIE: October tenth, 1992.

CARL: Oh, I actually have 1991, I’ll just correct that now. Right, so that’s all good. Now I just need just a few more personal details … do you have an occupation, either full-time or part-time?

JULIE: Yes, I work full-time in Esterhazy’s – you know, the restaurant chain. I started off as a waitress there a few years ago and I’m a manager now.

CARL: Oh I know them, yeah, they’re down on 114th Street, aren’t they?

JULIE: That’s right.

CARL: Yeah, I’ve been there a few times. I just love their salads.

JULIE: That’s good to hear.

CARL: Right, so one more thing I need to know before we talk about why you’re here, Julie, and that’s the name of your insurance company.

JULIE: It’s Cawley Life Insurance, that’s C-A-W-L-E-Y.

CARL: Excellent, thank you so much.

CARL: Now Julie, let’s look at how we can help you. So tell me a little about what brought you here today.

JULIE: Well, I’ve been getting a pain in my knee, the left one. Not very serious at first, but it’s gotten worse, so I thought I ought to see someone about it.

CARL: That’s certainly the right decision. So how long have you been aware of this pain? Is it just a few days, or is it longer than that?

JULIE: Longer. It’s been worse for the last couple of days, but it’s three weeks since I first noticed it. It came on quite gradually though, so I kind of ignored it at first.

CARL: And have you taken any medication yourself, or treated it in anyway?

JULIE: Yeah, I’ve been taking medication to deal with the pain, Tylenol, and that works OK for a few hours. But I don’t like to keep taking it.

CARL: OK. And what about heat treatment? Have you tried applying heat at all?

JULIE: No, but I have been using ice on it for the last few days.

CARL: And does that seem to help the pain at all?

JULIE: A little, yes.

CARL: Good. Now you look as if you’re quite fit normally?

JULIE: I am, yes.

CARL: So do you do any sport on a regular basis?

JULIE: Yes, I play a lot of tennis. I belong to a club so I go there a lot. I’m quite competitive so I enjoy that side of it as well as the exercise. But I haven’t gone since this started.

CARL: Sure. And do you do any other types of exercise?

JULIE: Yeah, I sometimes do a little swimming, but usually just when I’m on vacation. But normally I go running a few times a week, maybe three or four times.

CARL: Hmm. So your legs are getting quite a pounding. But you haven’t had any problems up to now?

JULIE: No, not with my legs. I did have an accident last year when I slipped and hurt my shoulder, but that’s better now.

CARL: Excellent. And do you have any allergies?

JULIE: No, none that I’m aware of.

CARL: And do you take any medication on a regular basis?

JULIE: Well, I take vitamins, but that’s all. I’m generally very healthy.

CARL: OK, well let’s have a closer look and see what might be causing this problem. If you can just get up …`;

    LISTENING_SCRIPTS['14-2-1'] = `We’ll be arriving at Branley Castle in about five minutes, but before we get there I’ll give you a little information about the castle and what our visit will include.

So in fact there’s been a castle on this site for over eleven hundred years. The first building was a fort constructed in 914 AD for defence against Danish invaders by King Alfred the Great’s daughter, who ruled England at the time. In the following century, after the Normans conquered England, the land was given to a nobleman called Richard de Vere, and he built a castle there that stayed in the de Vere family for over four hundred years.

However, when Queen Elizabeth I announced that she was going to visit the castle in 1576 it was beginning to look a bit run down, and it was decided that rather than repair the guest rooms, they’d make a new house for her out of wood next to the main hall. She stayed there for four nights and apparently it was very luxurious, but unfortunately it was destroyed a few years later by fire.

In the seventeenth century the castle belonged to the wealthy Fenys family, who enlarged it and made it more comfortable. However, by 1982 the Fenys family could no longer afford to maintain the castle, even though they received government support, and they put it on the market. It was eventually taken over by a company who owned a number of amusement parks, but when we get there I think you’ll see that they’ve managed to retain the original atmosphere of the castle.

When you go inside, you’ll find that in the state rooms there are life-like moving wax models dressed in costumes of different periods in the past, which even carry on conversations together. As well as that, in every room there are booklets giving information about what the room was used for and the history of the objects and furniture it contains.

The castle park’s quite extensive. At one time sheep were kept there, and in the nineteenth century the owners had a little zoo with animals like rabbits and even a baby elephant. Nowadays the old zoo buildings are used for public displays of paintings and sculpture. The park also has some beautiful trees, though the oldest of all, which dated back 800 years, was sadly blown down in 1987.

Now, you’re free to wander around on your own until 4.30, but then at the end of our visit we’ll all meet together at the bottom of the Great Staircase. We’ll then go on to the long gallery, where there’s a wonderful collection of photographs showing the family who owned the castle a hundred years ago having tea and cakes in the conservatory – and we’ll then take you to the same place, where afternoon tea will be served to you.

Now if you can take a look at your plans you’ll see Branley Castle has four towers, joined together by a high wall, with the river on two sides.

Don’t miss seeing the Great Hall. That’s near the river in the main tower, the biggest one, which was extended and redesigned in the eighteenth century.

If you want to get a good view of the whole castle, you can walk around the walls. The starting point’s quite near the main entrance – walk straight down the path until you get to the south gate, and it’s just there. Don’t go on to the north gate – there’s no way up from there.

There’ll shortly be a show in which you can see archers displaying their skill with a bow and arrow. The quickest way to get there is to take the first left after the main entrance and follow the path past the bridge, then you’ll see it in front of you at the end.

If you like animals there’s also a display of hunting birds – falcons and eagles and so on. If you go from the main entrance in the direction of the south gate, but turn right before you get there instead of going through it, you’ll see it on your right past the first tower.

At 3 pm there’s a short performance of traditional dancing on the outdoor stage. That’s right at the other side of the castle from the entrance, and over the bridge. It’s about ten minutes’ walk or so.

And finally the shop. It’s actually inside one of the towers, but the way in is from the outside. Just take the first left after the main entrance, go down the path and take the first right. It’s got some lovely gifts and souvenirs.

Right, so we’re just arriving …`;

    LISTENING_SCRIPTS['14-2-2'] = `TUTOR: So, Rosie and Martin, let’s look at what you’ve got for your presentation on woolly mammoths.

ROSIE: OK, we’ve got a short outline here.

TUTOR: Thanks. So it’s about a research project in North America?

MARTIN: Yes. But we thought we needed something general about woolly mammoths in our introduction, to establish that they were related to our modern elephant, and they lived thousands of years ago in the last ice age.

ROSIE: Maybe we could show a video clip of a cartoon about mammoths. But that’d be a bit childish. Or we could have a diagram, it could be a timeline to show when they lived, with illustrations?

MARTIN: Or we could just show a drawing of them walking in the ice? No, let’s go with your last suggestion.

TUTOR: Good. Then you’re describing the discovery of the mammoth tooth on St Paul’s Island in Alaska, and why it was significant.

MARTIN: Yes. The tooth was found by a man called Russell Graham. He picked it up from under a rock in a cave. He knew it was special – for a start it was in really good condition, as if it had been just extracted from the animal’s jawbone. Anyway, they found it was 6,500 years old.

TUTOR: So why was that significant?

ROSIE: Well the mammoth bones previously found on the North American mainland were much less recent than that. So this was really amazing.

MARTIN: Then we’re making an animated diagram to show the geography of the area in prehistoric times. So originally, St Paul’s Island wasn’t an island, it was connected to the mainland, and mammoths and other animals like bears were able to roam around the whole area.

ROSIE: Then the climate warmed up and the sea level began to rise, and the island got cut off from the mainland. So those mammoths on the island couldn’t escape; they had to stay on the island.

MARTIN: And in fact the species survived there for thousands of years after they’d become extinct on the mainland.

TUTOR: So why do you think they died out on the mainland?

ROSIE: No one’s sure.

MARTIN: Anyway, next we’ll explain how Graham and his team identified the date when the mammoths became extinct on the island. They concluded that the extinction happened 5,600 years ago, which is a very precise time for a prehistoric extinction. It’s based on samples they took from mud at the bottom of a lake on the island. They analysed it to find out what had fallen in over time – bits of plants, volcanic ash and even DNA from the mammoths themselves. It’s standard procedure, but it took nearly two years to do.

TUTOR: So why don’t you quickly go through the main sections of your presentation and discuss what action’s needed for each part?

MARTIN: OK. So for the introduction, we’re using a visual, so once we’ve prepared that we’re done.

ROSIE: I’m not sure. I think we need to write down all the ideas we want to include here, not just rely on memory. How we begin the presentation is so important…

MARTIN: You’re right.

ROSIE: The discovery of the mammoth tooth is probably the most dramatic part, but we don’t have that much information, only what we got from the online article. I thought maybe we could get in touch with the researcher who led the team and ask him to tell us a bit more.

MARTIN: Great idea. What about the section with the initial questions asked by the researchers? We’ve got a lot on that but we need to make it interesting.

ROSIE: We could ask the audience to suggest some questions about it and then see how many of them we can answer. I don’t think it would take too long.

TUTOR: Yes that would add a bit of variety.

MARTIN: Then the section on further research carried out on the island – analysing the mud in the lake. I wonder if we’ve actually got too much information here, should we cut some?

ROSIE: I don’t think so, but it’s all a bit muddled at present.

MARTIN: Yes, maybe it would be better if it followed a chronological pattern.

ROSIE: I think so. The findings and possible explanations section is just about ready, but we need to practise it so we’re sure it won’t overrun.

MARTIN: I think it should be OK, but yes, let’s make sure.

TUTOR: In the last section, relevance to the present day, you’ve got some good ideas but this is where you need to move away from the ideas of others and give your own viewpoint.

MARTIN: OK, we’ll think about that. Now shall we …`;

    LISTENING_SCRIPTS['14-2-3'] = `In this series of lectures about the history of weather forecasting, I’ll start by examining its early history – that’ll be the subject of today’s talk.

OK, so we’ll start by going back thousands of years. Most ancient cultures had weather gods, and weather catastrophes, such as floods, played an important role in many creation myths. Generally, weather was attributed to the whims of the gods, as the wide range of weather gods in various cultures shows. For instance, there’s the Egyptian sun god Ra, and Thor, the Norse god of thunder and lightning. Many ancient civilisations developed rites such as dances in order to make the weather gods look kindly on them.

But the weather was of daily importance: observing the skies and drawing the correct conclusions from these observations was really important, in fact their survival depended on it. It isn’t known when people first started to observe the skies, but at around 650 BC, the Babylonians produced the first short-range weather forecasts, based on their observations of clouds and other phenomena. The Chinese also recognised weather patterns, and by 300 BC, astronomers had developed a calendar which divided the year into 24 festivals, each associated with a different weather phenomenon.

The ancient Greeks were the first to develop a more scientific approach to explaining the weather. The work of the philosopher and scientist Aristotle, in the fourth century BC, is especially noteworthy, as his ideas held sway for nearly 2,000 years. In 340 BC, he wrote a book in which he attempted to account for the formation of rain, clouds, wind and storms. He also described celestial phenomena such as haloes – that is, bright circles of light around the sun, the moon and bright stars – and comets. Many of his observations were surprisingly accurate. For example, he believed that heat could cause water to evaporate. But he also jumped to quite a few wrong conclusions, such as that winds are breathed out by the Earth. Errors like this were rectified from the Renaissance onwards.

For nearly 2,000 years, Aristotle’s work was accepted as the chief authority on weather theory. Alongside this, though, in the Middle Ages weather observations were passed on in the form of proverbs, such as ‘Red sky at night, shepherd’s delight; red sky in the morning, shepherd’s warning’. Many of these are based on very good observations and are accurate, as contemporary meteorologists have discovered.

For centuries, any attempt to forecast the weather could only be based on personal observations, but in the fifteenth century scientists began to see the need for instruments. Until then, the only ones available were weather vanes – to determine the wind direction – and early versions of rain gauges. One of the first, invented in the fifteenth century, was a hygrometer, which measured humidity. This was one of many inventions that contributed to the development of weather forecasting.

In 1592, the Italian scientist and inventor Galileo developed the world’s first thermometer. His student Torricelli later invented the barometer, which allowed people to measure atmospheric pressure. In 1648, the French philosopher Pascal proved that pressure decreases with altitude. This discovery was verified by English astronomer Halley in 1686; and Halley was also the first person to map trade winds.

This increasing ability to measure factors related to weather helped scientists to understand the atmosphere and its processes better, and they started collecting weather observation data systematically. In the eighteenth century, the scientist and politician Benjamin Franklin carried out work on electricity and lightning in particular, but he was also very interested in weather and studied it throughout most of his life. It was Franklin who discovered that storms generally travel from west to east.

In addition to new meteorological instruments, other developments contributed to our understanding of the atmosphere. People in different locations began to keep records, and in the mid-nineteenth century, the invention of the telegraph made it possible for these records to be collated. This led, by the end of the nineteenth century, to the first weather services.

It was not until the early twentieth century that mathematics and physics became part of meteorology, and we’ll continue from that point next week.`;
  }

  console.log('[real-14] 剑14 Test1 & Test2 已覆盖为练习题目（待与原版书核对）');
})();
