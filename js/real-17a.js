/**
 * 剑17 Test 1 & Test 2 真实剑桥雅思内容覆盖补丁
 * 目的：将 data.js 中 AI 生成的"原创练习"内容替换为真实剑桥雅思17 真题（Tests 1、2）。
 *
 * 数据核对来源（公开权威解析，含原题答案键）：
 *   听力原文/答案 — ielts-hub (Cambridge 17 Listening Test 1/2 完整 transcript)、ielts-training-online
 *                   (Cambridge 17 Listening T1/T2 题目 + 官方答案键)
 *   阅读原文/题目/答案 — engnovate (Test1: London Underground / Stadiums / To catch a king;
 *                   Test2: Dead Sea Scrolls / Domesticating the tomato / Insight or evolution)
 *                   与 老烤鸭(laokaoya) 官方答案键交叉核对（Test1 与 Test2 全部 40 题答案一致）
 *   写作题目 — scitudy / IELTS Writing (Cambridge IELTS 17 AC Writing Tests 1 & 2 题目)
 *   口语话题 — babarenglish (Cambridge 17 Speaking Test 1 & 2 题面与示例回答)、ieltspractices.com
 *
 * 说明：
 *   - 原文/题目为真实考题内容（逐题与官方答案键交叉核对）。
 *   - 范文与口语"参考回答"为学习用示例文本（非官方范文），仅作备考参考。
 * 本文件须放在所有数据文件（data.js、data-extra*.js、listening-scripts.js 等）之后、app.js 之前加载。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;
  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 17) book = b; });
  if (!book) return;

  // 安全覆盖模式：只查找已存在的 test 并替换其字段，绝不创建新 test / 不 push。
  [1, 2].forEach(function (tid) {
    var test = null;
    book.tests.forEach(function (t) { if (t.id === tid) test = t; });
    if (!test) { console.error('TEST 17-' + tid + ' NOT FOUND'); return; }

    if (tid === 1) {
      // ===================== 听力（真实） =====================
      test.listening.sections = [
        {
          part: 'Part 1',
          context: 'Jan 致电 Buckworth Conservation Group 秘书 Peter，咨询成为志愿者及近期活动安排',
          type: '笔记填空（ONE WORD AND/OR A NUMBER）',
          questions: [
            { q: 'Beach: making sure the beach does not have ___ on it.', a: 'litter' },
            { q: 'Beach: no ___ (they are banned from the beach).', a: 'dogs' },
            { q: 'Nature reserve: next task is attracting ___ (important for biodiversity).', a: 'insects' },
            { q: 'Nature reserve: identifying types of ___ that visit.', a: 'butterflies' },
            { q: 'Nature reserve: building a new ___ on the southern side.', a: 'wall' },
            { q: 'Forthcoming walk: reach the ___ (Ruston Island) at low tide.', a: 'island' },
            { q: 'Forthcoming walk: wear appropriate ___ (waterproof).', a: 'boots' },
            { q: 'Woodwork session: suitable for ___ to participate.', a: 'beginners' },
            { q: 'Woodwork session: making ___ out of wood.', a: 'spoons' },
            { q: 'Woodwork session: cost (no camping) is £___.', a: '35' }
          ]
        },
        {
          part: 'Part 2',
          context: '导游 Lou Miller 介绍塔斯马尼亚海岸游船行程',
          type: '单选题 + 双选（TWO answers）',
          questions: [
            { q: 'What is the maximum number of people who can stand on each side of the boat?', a: 'A' },
            { q: 'What colour are the tour boats?', a: 'C' },
            { q: 'Which lunchbox is suitable for someone who doesn’t eat meat or fish?', a: 'B' },
            { q: 'What should people do with their litter?', a: 'B' },
            { q: 'Which TWO features of the lighthouse does Lou mention? (1st)', a: 'A' },
            { q: 'Which TWO features of the lighthouse does Lou mention? (2nd)', a: 'D' },
            { q: 'Which TWO types of creature might come close to the boat? (1st)', a: 'B' },
            { q: 'Which TWO types of creature might come close to the boat? (2nd)', a: 'C' },
            { q: 'Which TWO points does Lou make about the caves? (1st)', a: 'D' },
            { q: 'Which TWO points does Lou make about the caves? (2nd)', a: 'E' }
          ]
        },
        {
          part: 'Part 3',
          context: '兽医专业学生 Diana 与 Tim 讨论农场实习经历与课程模块',
          type: '单选题 + 观点配对（多选）',
          questions: [
            { q: 'What problem did both Diana and Tim have when arranging work experience?', a: 'A' },
            { q: 'Tim was pleased to be able to help with a sheep that was having difficulty giving birth.', a: 'B' },
            { q: 'Diana says the sheep on her farm were mainly reared for their meat.', a: 'B' },
            { q: 'What did the students learn about adding supplements to chicken feed?', a: 'A' },
            { q: 'What happened when Diana was working with dairy cows?', a: 'C' },
            { q: 'What did both farmers mention about vets and farming?', a: 'C' },
            { q: 'Module – Medical terminology: Tim found this easier than expected.', a: 'A' },
            { q: 'Module – Diet and nutrition: Tim was shocked at something he learned.', a: 'E' },
            { q: 'Module – Animal disease: they were surprised how little is known.', a: 'F' },
            { q: 'Module – Wildlife medication: Diana may do further study on this.', a: 'C' }
          ]
        },
        {
          part: 'Part 4',
          context: '关于迷宫（labyrinths）与树篱迷宫（mazes）区别的讲座',
          type: '笔记填空（ONE WORD ONLY）',
          questions: [
            { q: 'Mazes are a type of ___.', a: 'puzzle' },
            { q: '___ is needed to navigate through a maze.', a: 'logic' },
            { q: 'The word “maze” is derived from a word meaning a feeling of ___.', a: 'confusion' },
            { q: 'Labyrinths have been used in ___ and prayer.', a: 'meditation' },
            { q: 'Ancient carvings on ___ have been found across many cultures.', a: 'stone' },
            { q: 'Ancient Greeks used the symbol on ___.', a: 'coins' },
            { q: 'The largest surviving turf labyrinth once had a big ___ at its centre.', a: 'tree' },
            { q: 'Walking a labyrinth can reduce a person’s ___ rate.', a: 'breathing' },
            { q: 'Patients who can’t walk can use “finger labyrinths” made from ___.', a: 'paper' },
            { q: 'Alzheimer’s sufferers experience less ___.', a: 'anxiety' }
          ]
        }
      ];

      // ===================== 阅读（真实） =====================
      test.reading.passages = [
        {
          title: 'Passage 1: The development of the London underground railway',
          difficulty: '中等',
          summary: '从19世纪中叶伦敦交通拥堵，到世界上第一条地铁（Metropolitan Railway）的规划、修建与深埋电气化铁路的发展。',
          questions: [
            { type: '笔记填空（ONE WORD ONLY）', q: 'The ___ of London increased rapidly between 1800 and 1850.', a: 'population' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'Building the railway would move people to better housing in the ___', a: 'suburbs' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'A number of ___ agreed with Pearson’s idea.', a: 'businessmen' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'The company had problems getting the ___ needed for the project.', a: 'funding' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'Negative articles about the project appeared in the ___', a: 'press' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'With the completion of the brick arch, the tunnel was covered with ___', a: 'soil' },
            { type: '判断题 (True/False/Not Given)', q: 'Other countries had built underground railways before the Metropolitan line opened.', a: 'FALSE' },
            { type: '判断题 (True/False/Not Given)', q: 'More people than predicted travelled on the Metropolitan line on the first day.', a: 'NOT GIVEN' },
            { type: '判断题 (True/False/Not Given)', q: 'The use of ventilation shafts failed to prevent pollution in the tunnels.', a: 'TRUE' },
            { type: '判断题 (True/False/Not Given)', q: 'A different approach from the “cut and cover” technique was required in London’s central area.', a: 'TRUE' },
            { type: '判断题 (True/False/Not Given)', q: 'The windows on City & South London trains were at eye level.', a: 'FALSE' },
            { type: '判断题 (True/False/Not Given)', q: 'The City & South London Railway was a financial success.', a: 'FALSE' },
            { type: '判断题 (True/False/Not Given)', q: 'Trains on the “Tuppenny Tube” nearly always ran on time.', a: 'NOT GIVEN' }
          ]
        },
        {
          title: 'Passage 2: Stadiums: past, present and future',
          difficulty: '中偏难',
          summary: '从古罗马圆形剧场到现代多功能体育场，探讨体育场如何随时代演变、融入城市并作为能源与社区枢纽。',
          questions: [
            { type: '段落信息匹配（A–G）', q: 'a mention of negative attitudes towards stadium building projects', a: 'A' },
            { type: '段落信息匹配（A–G）', q: 'figures demonstrating the environmental benefits of a certain stadium', a: 'F' },
            { type: '段落信息匹配（A–G）', q: 'examples of the wide range of facilities available at some new stadiums', a: 'E' },
            { type: '段落信息匹配（A–G）', q: 'reference to the disadvantages of the stadiums built during a certain era', a: 'D' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'The amphitheatre of Arles was converted first into a ___', a: 'fortress' },
            { type: '笔记填空（ONE WORD ONLY）', q: '...finally into an arena where spectators could watch ___', a: 'bullfights' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'the arena in Verona is famous today as a venue where ___ is performed', a: 'opera' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'Lucca’s amphitheatre site included the storage of ___', a: 'salt' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'It is now a market square with ___ and homes incorporated', a: 'shops' },
            { type: '多选题（选两项）', q: 'When comparing 20th-century stadiums to ancient amphitheatres, which TWO negative features does the writer mention?', a: 'C, D' },
            { type: '多选题（选两项）', q: 'Which TWO advantages of modern stadium design does the writer mention?', a: 'B, E' }
          ]
        },
        {
          title: 'Passage 3: To catch a king',
          difficulty: '难',
          summary: '书评：Charles Spencer《To Catch a King》讲述查理二世在伍斯特战败后逃亡六周的故事，及其历史学价值。',
          questions: [
            { type: '选词填空摘要（A–J）', q: 'Charles II then formed a ___ with the Scots.', a: 'H' },
            { type: '选词填空摘要（A–J）', q: 'he abandoned an important ___ that was held by his father.', a: 'J' },
            { type: '选词填空摘要（A–J）', q: 'The battle led to a ___ for the Parliamentarians.', a: 'F' },
            { type: '选词填空摘要（A–J）', q: 'A ___ was offered for Charles’s capture.', a: 'B' },
            { type: '选词填空摘要（A–J）', q: 'he eventually managed to reach the ___ of continental Europe.', a: 'D' },
            { type: '判断题 (Yes/No/Not Given)', q: 'Charles chose Pepys for the task because he considered him trustworthy.', a: 'NOT GIVEN' },
            { type: '判断题 (Yes/No/Not Given)', q: 'Charles’s personal recollection of the escape lacked sufficient detail.', a: 'NO' },
            { type: '判断题 (Yes/No/Not Given)', q: 'Charles indicated to Pepys that he had planned his escape before the battle.', a: 'NO' },
            { type: '判断题 (Yes/No/Not Given)', q: 'The inclusion of Charles’s account is a positive aspect of the book.', a: 'YES' },
            { type: '单选题', q: 'What is the reviewer’s main purpose in the first paragraph?', a: 'B' },
            { type: '单选题', q: 'Why does the reviewer include examples of the fugitives’ behaviour in the third paragraph?', a: 'C' },
            { type: '单选题', q: 'What point does the reviewer make about Charles II in the fourth paragraph?', a: 'A' },
            { type: '单选题', q: 'What does the reviewer say about Charles Spencer in the fifth paragraph?', a: 'B' },
            { type: '单选题', q: 'When the reviewer says the book “doesn’t quite hit the mark”, she is making the point that', a: 'D' }
          ]
        }
      ];

      test.reading.passages[0].text = `In the first half of the 1800s, London’s population grew at an astonishing rate, and the central area became increasingly congested. In addition, the expansion of the overground railway network resulted in more and more passengers arriving in the capital. However, in 1846, a Royal Commission decided that the railways should not be allowed to enter the City, the capital’s historic and business centre. The result was that the overground railway stations formed a ring around the City. The area within consisted of poorly built, overcrowded slums and the streets were full of horse-drawn traffic. Crossing the City became a nightmare. It could take an hour and a half to travel 8 km by horse-drawn carriage or bus. Numerous schemes were proposed to resolve these problems, but few succeeded.

Amongst the most vocal advocates for a solution to London’s traffic problems was Charles Pearson, who worked as a solicitor for the City of London. He saw both social and economic advantages in building an underground railway that would link the overground railway stations together and clear London slums at the same time. His idea was to relocate the poor workers who lived in the inner-city slums to newly constructed suburbs, and to provide cheap rail travel for them to get to work. Pearson’s ideas gained support amongst some businessmen and in 1851 he submitted a plan to Parliament. It was rejected, but coincided with a proposal from another group for an underground connecting line, which Parliament passed.

The two groups merged and established the Metropolitan Railway Company in August 1854. The company’s plan was to construct an underground railway line from the Great Western Railway’s (GWR) station at Paddington to the edge of the City at Farringdon Street - a distance of almost 5 km. The organisation had difficulty in raising the funding for such a radical and expensive scheme, not least because of the critical articles printed by the press. Objectors argued that the tunnels would collapse under the weight of traffic overhead, buildings would be shaken and passengers would be poisoned by the emissions from the train engines. However, Pearson and his partners persisted.

The GWR, aware that the new line would finally enable them to run trains into the heart of the City, invested almost £250,000 in the scheme. Eventually, over a five-year period, £1m was raised. The chosen route ran beneath existing main roads to minimise the expense of demolishing buildings. Originally scheduled to be completed in 21 months, the construction of the underground line took three years. It was built just below street level using a technique known as ‘cut and cover’. A trench about ten metres wide and six metres deep was dug, and the sides temporarily held up with timber beams. Brick walls were then constructed, and finally a brick arch was added to create a tunnel. A two-metre-deep layer of soil was laid on top of the tunnel and the road above rebuilt.

The Metropolitan line, which opened on 10 January 1863, was the world’s first underground railway. On its first day, almost 40,000 passengers were carried between Paddington and Farringdon, the journey taking about 18 minutes. By the end of the Metropolitan’s first year of operation, 9.5 million journeys had been made.

Even as the Metropolitan began operation, the first extensions to the line were being authorised; these were built over the next five years, reaching Moorgate in the east of London and Hammersmith in the west. The original plan was to pull the trains with steam locomotives, using firebricks in the boilers to provide steam, but these engines were never introduced. Instead, the line used specially designed locomotives that were fitted with water tanks in which steam could be condensed. However, smoke and fumes remained a problem, even though ventilation shafts were added to the tunnels.

Despite the extension of the underground railway, by the 1880s, congestion on London’s streets had become worse. The problem was partly that the existing underground lines formed a circuit around the centre of London and extended to the suburbs, but did not cross the capital’s centre. The ‘cut and cover’ method of construction was not an option in this part of the capital. The only alternative was to tunnel deep underground.

Although the technology to create these tunnels existed, steam locomotives could not be used in such a confined space. It wasn’t until the development of a reliable electric motor, and a means of transferring power from the generator to a moving train, that the world’s first deep-level electric railway, the City & South London, became possible. The line opened in 1890, and ran from the City to Stockwell, south of the River Thames. The trains were made up of three carriages and driven by electric engines. The carriages were narrow and had tiny windows just below the roof because it was thought that passengers would not want to look out at the tunnel walls. The line was not without its problems, mainly caused by an unreliable power supply. Although the City & South London Railway was a great technical achievement, it did not make a profit. Then, in 1900, the Central London Railway, known as the ‘Tuppenny Tube’, began operation using new electric locomotives. It was very popular and soon afterwards new railways and extensions were added to the growing tube network. By 1907, the heart of today’s Underground system was in place.`;

      test.reading.passages[1].text = `A. Stadiums are among the oldest forms of urban architecture: vast stadiums where the public could watch sporting events were at the centre of western city life as far back as the ancient Greek and Roman Empires, well before the construction of the great medieval cathedrals and the grand 19th- and 20th-century railway stations which dominated urban skylines in later eras.

Today, however, stadiums are regarded with growing scepticism. Construction costs can soar above £1 billion, and stadiums finished for major events such as the Olympic Games or the FIFA World Cup have notably fallen into disuse and disrepair.

But this need not be the case. History shows that stadiums can drive urban development and adapt to the culture of every age. Even today, architects and planners are finding new ways to adapt the mono-functional sports arenas which became emblematic of modernisation during the 20th century.

B. The amphitheatre of Arles in southwest France, with a capacity of 25,000 spectators, is perhaps the best example of just how versatile stadiums can be. Built by the Romans in 90 AD, it became a fortress with four towers after the fifth century, and was then transformed into a village containing more than 200 houses. With the growing interest in conservation during the 19th century, it was converted back into an arena for the staging of bullfights, thereby returning the structure to its original use as a venue for public spectacles. Another example is the imposing arena of Verona in northern Italy, with space for 30,000 spectators, which was built 60 years before the Arles amphitheatre and 40 years before Rome’s famous Colosseum. It has endured the centuries and is currently considered one of the world’s prime sites for opera, thanks to its outstanding acoustics.

C. The area in the centre of the Italian town of Lucca, known as the Piazza dell’Anfiteatro, is yet another impressive example of an amphitheatre becoming absorbed into the fabric of the city. The site evolved in a similar way to Arles and was progressively filled with buildings from the Middle Ages until the 19th century, variously used as houses, a salt depot and a prison. But rather than reverting to an arena, it became a market square, designed by Romanticist architect Lorenzo Nottolini. Today, the ruins of the amphitheatre remain embedded in the various shops and residences surrounding the public square.

D. There are many similarities between modern stadiums and the ancient amphitheatres intended for games. But some of the flexibility was lost at the beginning of the 20th century, as stadiums were developed using new products such as steel and reinforced concrete, and made use of bright lights for night-time matches. Many such stadiums are situated in suburban areas, designed for sporting use only and surrounded by parking lots. These factors mean that they may not be as accessible to the general public, require more energy to run and contribute to urban heat.

E. But many of today’s most innovative architects see scope for the stadium to help improve the city. Among the current strategies, two seem to be having particular success: the stadium as an urban hub, and as a power plant. There’s a growing trend for stadiums to be equipped with public spaces and services that serve a function beyond sport, such as hotels, retail outlets, conference centres, restaurants and bars, children’s playgrounds and green space. Creating mixed-use developments such as this reinforces compactness and multi-functionality, making more efficient use of land and helping to regenerate urban spaces. This opens the space up to families and a wider cross-section of society, instead of catering only to sportspeople and supporters. There have been many examples of this in the UK: the mixed-use facilities at Wembley and Old Trafford have become a blueprint for many other stadiums in the world.

F. The phenomenon of stadiums as power stations has arisen from the idea that energy problems can be overcome by integrating interconnected buildings by means of a smart grid, which is an electricity supply network that uses digital communications technology to detect and react to local changes in usage, without significant energy losses. Stadiums are ideal for these purposes, because their canopies have a large surface area for fitting photovoltaic panels and rise high enough (more than 40 metres) to make use of micro wind turbines. Freiburg Mage Solar Stadium in Germany is the first of a new wave of stadiums as power plants, which also includes the Amsterdam Arena and the Kaohsiung Stadium. The latter, inaugurated in 2009, has 8,844 photovoltaic panels producing up to 1.14 GWh of electricity annually. This reduces the annual output of carbon dioxide by 660 tons and supplies up to 80 percent of the surrounding area when the stadium is not in use. This is proof that a stadium can serve its city, and have a decidedly positive impact in terms of reduction of CO2 emissions.

G. Sporting arenas have always been central to the life and culture of cities. In every era, the stadium has acquired new value and uses: from military fortress to residential village, public space to theatre and most recently a field for experimentation in advanced engineering. The stadium of today now brings together multiple functions, thus helping cities to create a sustainable future.`;

      test.reading.passages[2].text = `Anna Keay reviews Charles Spencer’s book about the hunt for King Charles II during the English Civil War of the seventeenth century

Charles Spencer’s latest book, To Catch a King, tells us the story of the hunt for King Charles II in the six weeks after his resounding defeat at the Battle of Worcester in September 1651. And what a story it is. After his father was executed by the Parliamentarians in 1649, the young Charles II sacrificed one of the very principles his father had died for and did a deal with the Scots, thereby accepting Presbyterianism as the national religion in return for being crowned King of Scots. His arrival in Edinburgh prompted the English Parliamentary army to invade Scotland in a pre-emptive strike. This was followed by a Scottish invasion of England. The two sides finally faced one another at Worcester in the west of England in 1651. After being comprehensively defeated on the meadows outside the city by the Parliamentarian army, the 21-year-old king found himself the subject of a national manhunt, with a huge sum offered for his capture. Over the following six weeks he managed, through a series of heart-poundingly close escapes, to evade the Parliamentarians before seeking refuge in France. For the next nine years, the penniless and defeated Charles wandered around Europe with only a small group of loyal supporters.

Years later, after his restoration as king, the 50-year-old Charles II requested a meeting with the writer and diarist Samuel Pepys. His intention when asking Pepys to commit his story to paper was to ensure that this most extraordinary episode was never forgotten. Over two three-hour sittings, the king related to him in great detail his personal recollections of the six weeks he had spent as a fugitive. As the king and secretary settled down (a scene that is surely a gift for a future scriptwriter), Charles commenced his story: ‘After the battle was so absolutely lost as to be beyond hope of recovery, I began to think of the best way of saving myself.’

One of the joys of Spencer’s book, a result not least of its use of Charles II’s own narrative as well as those of his supporters, is just how close the reader gets to the action. The day-by-day retelling of the fugitives’ doings provides delicious details: the cutting of the king’s long hair with agricultural shears, the use of walnut leaves to dye his pale skin, and the day Charles spent lying on a branch of the great oak tree in Boscobel Wood as the Parliamentary soldiers scoured the forest floor below. Spencer draws out both the humour - such as the preposterous refusal of Charles’s friend Henry Wilmot to adopt disguise on the grounds that it was beneath his dignity - and the emotional tension when the secret of the king’s presence was cautiously revealed to his supporters.

Charles’s adventures after losing the Battle of Worcester hide the uncomfortable truth that whilst almost everyone in England had been appalled by the execution of his father, they had not welcomed the arrival of his son with the Scots army, but had instead firmly bolted their doors. This was partly because he rode at the head of what looked like a foreign invasion force and partly because, after almost a decade of civil war, people were desperate to avoid it beginning again. This makes it all the more interesting that Charles II himself loved the story so much ever after. As well as retelling it to anyone who would listen, causing eye-rolling among courtiers, he set in train a series of initiatives to memorialise it. There was to be a new order of chivalry, the Knights of the Royal Oak. A series of enormous oil paintings depicting the episode were produced, including a two-metre-wide canvas of Boscobel Wood and a set of six similarly enormous paintings of the king on the run. In 1660, Charles II commissioned the artist John Michael Wright to paint a flying squadron of cherubs carrying an oak tree to the heavens on the ceiling of his bedchamber. It is hard to imagine many other kings marking the lowest point in their life so enthusiastically, or indeed pulling off such an escape in the first place.

Charles Spencer is the perfect person to pass the story on to a new generation. His pacey, readable prose steers deftly clear of modern idioms and elegantly brings to life the details of the great tale. He has even-handed sympathy for both the fugitive king and the fierce republican regime that hunted him, and he succeeds in his desire to explore far more of the background of the story than previous books on the subject have done. Indeed, the opening third of the book is about how Charles II found himself at Worcester in the first place, which for some will be reason alone to read To Catch a King.

The tantalising question left, in the end, is that of what it all meant. Would Charles II have been a different king had these six weeks never happened? The days and nights spent in hiding must have affected him in some way. Did the need to assume disguises, to survive on wit and charm alone, to use trickery and subterfuge to escape from tight corners help form him? This is the one area where the book doesn’t quite hit the mark. Instead its depiction of Charles II in his final years as an ineffective, pleasure-loving monarch doesn’t do justice to the man (neither is it accurate), or to the complexity of his character. But this one niggle aside, To Catch a King is an excellent read, and those who come to it knowing little of the famous tale will find they have a treat in store.`;

      // ===================== 写作（真实题目 + 范文示例） =====================
      test.writing.tasks = [
        {
          task: 'Task 1 (小作文)',
          type: '地图比较 (Map)',
          prompt: 'The maps below show an industrial area in the town of Norbiton, and planned future development of the site.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
          modelAnswer: 'The two maps illustrate the present layout of an industrial zone in Norbiton and the proposed redevelopment of the same site in the future.\n\nOverall, the area will be transformed from a purely industrial district into a mixed residential and commercial one, with factories replaced by housing, shops, a school and a medical centre, while transport links and green spaces are added.\n\nAt present, the site is dominated by a number of factories in the centre, with a main road running through it from west to east and a river to the south. There is a single roundabout on the western side and little else besides the industrial buildings.\n\nIn the future plan, the factories will be removed. New residential housing will occupy much of the central and eastern area, and a school and a medical centre will be built in the north-east and south-east respectively. A small group of shops will be constructed near the centre, close to a newly added roundabout. Importantly, a bypass road will be laid to the south of the river, connected to the existing road by a bridge, which should reduce traffic through the residential zone. Some trees and green areas are also shown along the riverbank.\n\nIn summary, the redevelopment turns a dedicated industrial estate into a self-contained community with living, education, health and retail facilities.',
          tips: '对比“现在/将来”；先写总览再分述；重点写功能变化（工厂→住宅/学校/医疗）；注意道路与桥梁新增；至少150词'
        },
        {
          task: 'Task 2 (大作文)',
          type: '议论文（利弊讨论）',
          prompt: 'It is important for people to take risks, both in their professional lives and their personal lives.\n\nDo you think the advantages of taking risks outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
          modelAnswer: 'Taking risks is often seen as essential for progress, yet it can also lead to failure and loss. This essay will argue that, on balance, the advantages of taking calculated risks outweigh the disadvantages, provided they are not reckless.\n\nOn the one hand, risk-taking carries clear downsides. In a career, leaving a stable job to start a business may result in financial hardship if the venture fails. In personal life, risky decisions such as moving to an unfamiliar country can damage relationships or cause isolation. These negative outcomes explain why many people prefer to stay within their comfort zone.\n\nOn the other hand, avoiding all risk usually means missing opportunities for growth. Professionally, those who take measured risks - for example proposing an innovative project or accepting a demanding role - are more likely to advance and develop new skills. Personally, risks such as learning a difficult skill or forming unexpected friendships enrich life and build resilience. History shows that most significant achievements, from scientific breakthroughs to social change, required someone to act despite uncertainty.\n\nIn my view, the key is to distinguish constructive risk from careless gambles. When the potential benefit is meaningful and the worst case is manageable, taking the risk is worthwhile. Therefore, the advantages generally outweigh the disadvantages.\n\nIn conclusion, while risks can bring real costs, a willingness to take them is usually necessary for meaningful personal and professional development.',
          tips: '明确立场（advantages outweigh）；双方各写一段并举例；区分“calculated risk”与“reckless gamble”；结构清晰；至少250词'
        }
      ];

      // ===================== 口语（真实话题 + 参考回答示例） =====================
      test.speaking.parts = [
        {
          part: 'Part 1: Introduction & Interview',
          intro: '考官就日常话题提问，约4-5分钟。话题：History（历史）',
          questions: [
            { q: 'Did you study history when you were at school?', a: '参考回答: Yes, I did. History was part of the curriculum, and we covered British and world history from ancient times up to the modern era.' },
            { q: 'How often do you watch TV programmes about history now? Why/Why not?', a: '参考回答: Not very often, to be honest. I prefer current-affairs or entertainment shows, but I might watch a documentary if the topic is really interesting.' },
            { q: 'What period in history would you like to learn more about? Why?', a: '参考回答: I’d like to learn more about the Renaissance, because it was a period of huge cultural, artistic and scientific progress that shaped the modern world.' }
          ]
        },
        {
          part: 'Part 2: Long Turn (Cue Card)',
          intro: '根据题目卡准备1分钟，独自陈述2分钟',
          cueCard: 'Describe the neighbourhood you lived in when you were a child.\n\nYou should say:\n– where in your town/city the neighbourhood was\n– what kind of people lived there\n– what it was like to live in this neighbourhood\n– and explain whether you would like to live in this neighbourhood in the future.',
          modelAnswer: '参考回答:\n\nWhen I was a child, I lived in a neighbourhood in the northern part of my city. It was a suburban area, about a 20-minute drive from the centre, but it felt peaceful and residential. The streets were lined with trees and there were several parks nearby.\n\nThe people who lived there were mostly families with young children, similar to mine, plus a few elderly couples who had lived there for decades. It was a close-knit community where everyone knew each other, and we often had gatherings that brought us together.\n\nLiving there was wonderful. I had the freedom to play outside safely, and the local park was just a short walk away - a popular spot for kids to ride bikes and play games. The schools nearby were good, so most children in the neighbourhood went to the same ones and formed strong friendships.\n\nAs for the future, I would consider living there again. It holds many happy memories and is still a lovely place. However, now that my lifestyle has changed, I might prefer somewhere more urban. But if I started a family, it would be a great place to settle down.',
          tips: '覆盖四个要点；用过去时叙述；加入具体细节（位置、人群、生活感受）；控制2分钟'
        },
        {
          part: 'Part 3: Discussion',
          intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Neighbours 与 Facilities in Cities',
          questions: [
            { q: 'What sort of things can neighbours do to help each other?', a: '参考回答: They can look after each other’s homes when someone is away, collect mail, water plants, or help in emergencies such as babysitting or lending tools.' },
            { q: 'How well do people generally know their neighbours in your country?', a: '参考回答: It varies. In small towns people usually know their neighbours well, while in large cities many barely know each other, especially in apartment buildings.' },
            { q: 'How important do you think it is to have good neighbours?', a: '参考回答: Very important, because good neighbours create a sense of security and community, and can be invaluable in times of need.' },
            { q: 'Which facilities are most important to people living in cities?', a: '参考回答: Public transport, healthcare and schools are among the most important, since they affect daily commuting, health and family life.' },
            { q: 'How does shopping in small local shops differ from shopping in large city-centre shops?', a: '参考回答: Local shops offer a more personal, tailored experience with unique goods, while large centres have wider choice and lower prices but feel more impersonal.' },
            { q: 'Do you think that children should always go to the school nearest to where they live?', a: '参考回答: Not always. Convenience matters, but parents should be able to choose a school that best fits their child’s needs even if it is farther away.' }
          ]
        }
      ];

    } else if (tid === 2) {
      // ===================== 听力（真实） =====================
      test.listening.sections = [
        {
          part: 'Part 1',
          context: 'Frank（退休后搬到 Southoe 村）致电志愿者协调人 Jane，咨询村内志愿工作',
          type: '笔记/表格填空（ONE WORD ONLY）',
          questions: [
            { q: 'Library: help with ___ books (collecting them).', a: 'collecting' },
            { q: 'Library: help keep ___ of books up to date.', a: 'records' },
            { q: 'Library is in the ___ Room in the village hall.', a: 'West' },
            { q: 'Lunch club: help by providing ___.', a: 'transport' },
            { q: 'Lunch club: help with hobbies such as ___.', a: 'art' },
            { q: 'Next week: taking Mrs Carroll to the ___.', a: 'hospital' },
            { q: 'Next week: work in the ___ at Mr Selsbury’s house.', a: 'garden' },
            { q: '19 Oct event: ___ (quiz) in the village hall.', a: 'quiz' },
            { q: '18 Nov dance: help checking ___ at the door.', a: 'tickets' },
            { q: '31 Dec New Year’s Eve party: designing the ___.', a: 'poster' }
          ]
        },
        {
          part: 'Part 2',
          context: '导游 Nick 介绍 Oniton Hall 庄园（宅邸、花园、农场）',
          type: '单选题 + 地点活动配对',
          questions: [
            { q: 'Many past owners made changes to...', a: 'B' },
            { q: 'Sir Edward Downes built Oniton Hall because he wanted...', a: 'C' },
            { q: 'Visitors can learn about the work of servants in the past from...', a: 'C' },
            { q: 'What is new for children at Oniton Hall?', a: 'B' },
            { q: 'Which activity is offered at the dairy?', a: 'D' },
            { q: 'Which activity is offered at the large barn?', a: 'C' },
            { q: 'Which activity is offered at the small barn?', a: 'G' },
            { q: 'Which activity is offered at the stables?', a: 'A' },
            { q: 'Which activity is offered at the shed?', a: 'E' },
            { q: 'Which activity is offered at the parkland?', a: 'F' }
          ]
        },
        {
          part: 'Part 3',
          context: '学生 Ed 与 Gemma 讨论《罗密欧与朱丽叶》的剧评作业',
          type: '双选 + 观点配对 + 单选',
          questions: [
            { q: 'Which TWO things do they agree to include in the review? (1st)', a: 'D' },
            { q: 'Which TWO things do they agree to include in the review? (2nd)', a: 'E' },
            { q: 'Aspect – the set: they agree this was a major strength.', a: 'D' },
            { q: 'Aspect – the lighting: they agree this created the right atmosphere.', a: 'C' },
            { q: 'Aspect – the costume design: they both expected this to be more traditional.', a: 'A' },
            { q: 'Aspect – the music: they were both disappointed by this.', a: 'E' },
            { q: 'Aspect – the actors’ delivery: they disagree about why this was an issue.', a: 'F' },
            { q: 'They think the story is still relevant because it deals with problems families experience.', a: 'B' },
            { q: 'Watching it in another language was...', a: 'C' },
            { q: 'Why do they think Shakespeare’s plays have international appeal?', a: 'C' }
          ]
        },
        {
          part: 'Part 4',
          context: '关于数字技术对冰岛语（Icelandic）影响的讲座',
          type: '笔记填空（ONE WORD AND/OR A NUMBER）',
          questions: [
            { q: 'Icelandic has approximately ___ speakers.', a: '321,000' },
            { q: 'Icelandic has a ___ that is still growing.', a: 'vocabulary' },
            { q: 'It has its own words for concepts such as web browser and ___.', a: 'podcast' },
            { q: 'Young speakers are big users of digital technology such as ___.', a: 'smartphones' },
            { q: 'They are becoming ___ very quickly.', a: 'bilingual' },
            { q: 'They have discussions using only English in the ___ at school.', a: 'playground' },
            { q: 'They are better at identifying the content of a ___ in English than Icelandic.', a: 'picture' },
            { q: 'Tech companies write little Icelandic due to its small population and complicated ___.', a: 'grammar' },
            { q: 'The government worries young Icelanders may lose their ___ as Icelanders.', a: 'identity' },
            { q: 'It worries about children not being ___ in either language.', a: 'fluent' }
          ]
        }
      ];

      // ===================== 阅读（真实） =====================
      test.reading.passages = [
        {
          title: 'Passage 1: The Dead Sea Scrolls',
          difficulty: '中等',
          summary: '1947年前后死海古卷的发现、年代与语言、内容构成、铜卷与马萨姆大主教购回归来，以及2017年复原的一卷日历卷。',
          questions: [
            { type: '笔记填空（ONE WORD ONLY）', q: 'A teenage shepherd heard a noise when he threw a ___', a: 'rock' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'He and his companions later entered the ___', a: 'cave' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'The scrolls were found in containers made of ___', a: 'clay' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'They were thought written by a group called the ___', a: 'Essenes' },
            { type: '笔记填空（ONE WORD ONLY）', q: 'The texts were written mainly in the ___ language', a: 'Hebrew' },
            { type: '判断题 (True/False/Not Given)', q: 'The Bedouin teenagers were disappointed by how little money they received.', a: 'NOT GIVEN' },
            { type: '判断题 (True/False/Not Given)', q: 'There is agreement among academics about the origin of the Dead Sea Scrolls.', a: 'FALSE' },
            { type: '判断题 (True/False/Not Given)', q: 'Most of the books of the Bible found in the scrolls are incomplete.', a: 'TRUE' },
            { type: '判断题 (True/False/Not Given)', q: 'The information on the Copper Scroll is written in an unusual way.', a: 'TRUE' },
            { type: '判断题 (True/False/Not Given)', q: 'Mar Samuel was given some of the scrolls as a gift.', a: 'FALSE' },
            { type: '判断题 (True/False/Not Given)', q: 'In the early 1950s, US educational establishments were keen to buy scrolls from Mar Samuel.', a: 'FALSE' },
            { type: '判断题 (True/False/Not Given)', q: 'The scroll pieced together in 2017 contains information about annual occasions 2,000 years ago.', a: 'TRUE' },
            { type: '判断题 (True/False/Not Given)', q: 'Academics at the University of Haifa are currently researching how to decipher the final scroll.', a: 'NOT GIVEN' }
          ]
        },
        {
          title: 'Passage 2: A second attempt at domesticating the tomato',
          difficulty: '中偏难',
          summary: '巴西与中国团队用 CRISPR 技术重新“驯化”野生番茄，提升营养与抗病性；美国团队驯化酸浆果；并展望未来作物。',
          questions: [
            { type: '段落匹配（A–E）', q: 'a reference to a type of tomato that can resist a dangerous infection', a: 'C' },
            { type: '段落匹配（A–E）', q: 'an explanation of how problems arise from focusing only on a certain type of tomato plant', a: 'B' },
            { type: '段落匹配（A–E）', q: 'examples of plants not cultivated at present but could be useful as food', a: 'E' },
            { type: '段落匹配（A–E）', q: 'a comparison between early domestication of the tomato and more recent research', a: 'A' },
            { type: '段落匹配（A–E）', q: 'a personal reaction to the flavour of a genetically edited tomato', a: 'C' },
            { type: '人名观点匹配（A–D）', q: 'Domestication could allow plants to adapt to future environmental challenges.', a: 'B' },
            { type: '人名观点匹配（A–D）', q: 'Unusual plants may not be accepted on a large scale.', a: 'D' },
            { type: '人名观点匹配（A–D）', q: 'It is not advisable for the future direction of certain research to be made public.', a: 'A' },
            { type: '人名观点匹配（A–D）', q: 'Present efforts to domesticate one wild fruit are limited by costs.', a: 'C' },
            { type: '人名观点匹配（A–D）', q: 'Humans only make use of a small proportion of plant food available.', a: 'A' },
            { type: '单句填空（ONE WORD ONLY）', q: 'An undesirable trait such as loss of ___ may be caused by a mutation.', a: 'flavour' },
            { type: '单句填空（ONE WORD ONLY）', q: 'By modifying one gene, researchers made the tomato three times its original ___.', a: 'size' },
            { type: '单句填空（ONE WORD ONLY）', q: 'A type of tomato not badly affected by ___ was produced by the China team (rich in vitamin C).', a: 'salt' }
          ]
        },
        {
          title: 'Passage 3: Insight or evolution?',
          difficulty: '难',
          summary: '两位科学家探讨科学发现究竟是“顿悟/天才”还是“试错与进化”的过程，并以尼科尔森、赛马、便利贴等为例论证。',
          questions: [
            { type: '单选题', q: 'The purpose of the first paragraph is to...', a: 'D' },
            { type: '单选题', q: 'What are the writers doing in the second paragraph?', a: 'A' },
            { type: '单选题', q: 'What do the writers suggest about Darwin and Einstein in the third paragraph?', a: 'A' },
            { type: '单选题', q: 'John Nicholson is an example of a person whose idea...', a: 'C' },
            { type: '单选题', q: 'What is the key point of interest about the “acey-deucy” stirrup placement?', a: 'A' },
            { type: '判断题 (Yes/No/Not Given)', q: 'Acknowledging people such as Plato or da Vinci as geniuses will help us understand the creative process.', a: 'NO' },
            { type: '判断题 (Yes/No/Not Given)', q: 'The Law of Effect was discovered when psychologists sought a scientific reason for creativity.', a: 'NOT GIVEN' },
            { type: '判断题 (Yes/No/Not Given)', q: 'The Law of Effect states that no planning is involved in the behaviour of organisms.', a: 'YES' },
            { type: '判断题 (Yes/No/Not Given)', q: 'The Law of Effect sets out clear explanations about the sources of new ideas.', a: 'NO' },
            { type: '判断题 (Yes/No/Not Given)', q: 'Many scientists are now turning away from the notion of intelligent design and genius.', a: 'NOT GIVEN' },
            { type: '选词填空摘要（A–G）', q: 'breakthroughs happen when a single great mind has sudden ___', a: 'F' },
            { type: '选词填空摘要（A–G）', q: 'the process involves ___, such as Nicholson’s theory', a: 'D' },
            { type: '选词填空摘要（A–G）', q: 'there is an element of ___, e.g. the Post-It note coincidence', a: 'E' },
            { type: '选词填空摘要（A–G）', q: 'no clear ___ is involved, merely variation and selection', a: 'B' }
          ]
        }
      ];

      test.reading.passages[0].text = `In late 1946 or early 1947, three Bedouin teenagers were tending their goats and sheep near the ancient settlement of Qumran, located on the northwest shore of the Dead Sea in what is now known as the West Bank. One of these young shepherds tossed a rock into an opening on the side of a cliff and was surprised to hear a shattering sound. He and his companions later entered the cave and stumbled across a collection of large clay jars, seven of which contained scrolls with writing on them. The teenagers took the seven scrolls to a nearby town where they were sold for a small sum to a local antiquities dealer. Word of the find spread, and Bedouins and archaeologists eventually unearthed tens of thousands of additional scroll fragments from 10 nearby caves; together they make up between 800 and 900 manuscripts. It soon became clear that this was one of the greatest archaeological discoveries ever made.

The origin of the Dead Sea Scrolls, which were written around 2,000 years ago between 150 BCE and 70 CE, is still the subject of scholarly debate even today. According to the prevailing theory, they are the work of a population that inhabited the area until Roman troops destroyed the settlement around 70 CE. The area was known as Judea at that time, and the people are thought to have belonged to a group called the Essenes, a devout Jewish sect.

The majority of the texts on the Dead Sea Scrolls are in Hebrew, with some fragments written in an ancient version of its alphabet thought to have fallen out of use in the fifth century BCE. But there are other languages as well. Some scrolls are in Aramaic, the language spoken by many inhabitants of the region from the sixth century BCE to the siege of Jerusalem in 70 CE. In addition, several texts feature translations of the Hebrew Bible into Greek.

The Dead Sea Scrolls include fragments from every book of the Old Testament of the Bible except for the Book of Esther. The only entire book of the Hebrew Bible preserved among the manuscripts from Qumran is Isaiah; this copy, dated to the first century BCE, is considered the earliest biblical manuscript still in existence. Along with biblical texts, the scrolls include documents about sectarian regulations and religious writings that do not appear in the Old Testament.

The writing on the Dead Sea Scrolls is mostly in black or occasionally red ink, and the scrolls themselves are nearly all made of either parchment (animal skin) or an early form of paper called ‘papyrus’. The only exception is the scroll numbered 3Q15, which was created out of a combination of copper and tin. Known as the Copper Scroll, this curious document features letters chiselled onto metal - perhaps, as some have theorized, to better withstand the passage of time. One of the most intriguing manuscripts from Qumran, this is a sort of ancient treasure map that lists dozens of gold and silver caches. Using an unconventional vocabulary and odd spelling, it describes 64 underground hiding places that supposedly contain riches buried for safekeeping. None of these hoards have been recovered, possibly because the Romans pillaged Judea during the first century CE. According to various hypotheses, the treasure belonged to local people, or was rescued from the Second Temple before its destruction or never existed to begin with.

Some of the Dead Sea Scrolls have been on interesting journeys. In 1948, a Syrian Orthodox archbishop known as Mar Samuel acquired four of the original seven scrolls from a Jerusalem shoemaker and part-time antiquity dealer, paying less than $100 for them. He then travelled to the United States and unsuccessfully offered them to a number of universities, including Yale. Finally, in 1954, he placed an advertisement in the business newspaper The Wall Street Journal - under the category ‘Miscellaneous Items for Sale’ - that read: ‘Biblical Manuscripts dating back to at least 200 B.C. are for sale. This would be an ideal gift to an educational or religious institution by an individual or group.’ Fortunately, Israeli archaeologist and statesman Yigael Yadin negotiated their purchase and brought the scrolls back to Jerusalem, where they remain to this day.

In 2017, researchers from the University of Haifa restored and deciphered one of the last untranslated scrolls. The university’s Eshbal Ratson and Jonathan Ben-Dov spent one year reassembling the 60 fragments that make up the scroll. Deciphered from a band of coded text on parchment, the find provides insight into the community of people who wrote it and the 364-day calendar they would have used. The scroll names celebrations that indicate shifts in seasons and details two yearly religious events known from another Dead Sea Scroll. Only one more known scroll remains untranslated.`;

      test.reading.passages[1].text = `A. It took at least 3,000 years for humans to learn how to domesticate the wild tomato and cultivate it for food. Now two separate teams in Brazil and China have done it all over again in less than three years. And they have done it better in some ways, as the re-domesticated tomatoes are more nutritious than the ones we eat at present.

This approach relies on the revolutionary CRISPR genome editing technique, in which changes are deliberately made to the DNA of a living cell, allowing genetic material to be added, removed or altered. The technique could not only improve existing crops, but could also be used to turn thousands of wild plants into useful and appealing foods. In fact, a third team in the US has already begun to do this with a relative of the tomato called the groundcherry.

This fast-track domestication could help make the world’s food supply healthier and far more resistant to diseases, such as the rust fungus devastating wheat crops.

‘This could transform what we eat,’ says Jorg Kudla at the University of Munster in Germany, a member of the Brazilian team. ‘There are 50,000 edible plants in the world, but 90 percent of our energy comes from just 15 crops.’

‘We can now mimic the known domestication course of major crops like rice, maize, sorghum or others,’ says Caixia Gao of the Chinese Academy of Sciences in Beijing. ‘Then we might try to domesticate plants that have never been domesticated.’

B. Wild tomatoes, which are native to the Andes region in South America, produce pea-sized fruits. Over many generations, peoples such as the Aztecs and Incas transformed the plant by selecting and breeding plants with mutations in their genetic structure, which resulted in desirable traits such as larger fruit.

But every time a single plant with a mutation is taken from a larger population for breeding, much genetic diversity is lost. And sometimes the desirable mutations come with less desirable traits. For instance, the tomato strains grown for supermarkets have lost much of their flavour.

By comparing the genomes of modern plants to those of their wild relatives, biologists have been working out what genetic changes occurred as plants were domesticated. The teams in Brazil and China have now used this knowledge to reintroduce these changes from scratch while maintaining or even enhancing the desirable traits of wild strains.

C. Kudla’s team made six changes altogether. For instance, they tripled the size of fruit by editing a gene called FRUIT WEIGHT, and increased the number of tomatoes per truss by editing another called MULTIFLORA.

While the historical domestication of tomatoes reduced levels of the red pigment lycopene - thought to have potential health benefits - the team in Brazil managed to boost it instead. The wild tomato has twice as much lycopene as cultivated ones; the newly domesticated one has five times as much.

‘They are quite tasty,’ says Kudla. ‘A little bit strong. And very aromatic.’

The team in China re-domesticated several strains of wild tomatoes with desirable traits lost in domesticated tomatoes. In this way they managed to create a strain resistant to a common disease called bacterial spot race, which can devastate yields. They also created another strain that is more salt tolerant - and has higher levels of vitamin C.

D. Meanwhile, Joyce Van Eck at the Boyce Thompson Institute in New York state decided to use the same approach to domesticate the groundcherry or goldenberry (Physalis pruinosa) for the first time. This fruit looks similar to the closely related Cape gooseberry (Physalis peruviana).

Groundcherries are already sold to a limited extent in the US but they are hard to produce because the plant has a sprawling growth habit and the small fruits fall off the branches when ripe. Van Eck’s team has edited the plants to increase fruit size, make their growth more compact and to stop fruits dropping. ‘There’s potential for this to be a commercial crop,’ says Van Eck. But she adds that taking the work further would be expensive because of the need to pay for a licence for the CRISPR technology and get regulatory approval.

E. This approach could boost the use of many obscure plants, says Jonathan Jones of the Sainsbury Lab in the UK. But it will be hard for new foods to grow so popular with farmers and consumers that they become new staple crops, he thinks.

The three teams already have their eye on other plants that could be ‘catapulted into the mainstream’, including foxtail, oat-grass and cowpea. By choosing wild plants that are drought or heat tolerant, says Gao, we could create crops that will thrive even as the planet warms.

But Kudla didn’t want to reveal which species were in his team’s sights, because CRISPR has made the process so easy. ‘Anyone with the right skills could go to their lab and do this.’`;

      test.reading.passages[2].text = `Two scientists consider the origins of discoveries and other innovative behavior

Scientific discovery is popularly believed to result from the sheer genius of such intellectual stars as naturalist Charles Darwin and theoretical physicist Albert Einstein. Our view of such unique contributions to science often disregards the person’s prior experience and the efforts of their lesser-known predecessors. Conventional wisdom also places great weight on insight in promoting breakthrough scientific achievements, as if ideas spontaneously pop into someone’s head - fully formed and functional.

There may be some limited truth to this view. However, we believe that it largely misrepresents the real nature of scientific discovery, as well as that of creativity and innovation in many other realms of human endeavor.

Setting aside such greats as Darwin and Einstein - whose monumental contributions are duly celebrated - we suggest that innovation is more a process of trial and error, where two steps forward may sometimes come with one step back, as well as one or more steps to the right or left. This evolutionary view of human innovation undermines the notion of creative genius and recognizes the cumulative nature of scientific progress.

Consider one unheralded scientist: John Nicholson, a mathematical physicist working in the 1910s who postulated the existence of ‘proto-elements’ in outer space. By combining different numbers of weights of these proto-elements’ atoms, Nicholson could recover the weights of all the elements in the then-known periodic table. These successes are all the more noteworthy given the fact that Nicholson was wrong about the presence of proto-elements: they do not actually exist. Yet, amid his often fanciful theories and wild speculations, Nicholson also proposed a novel theory about the structure of atoms. Niels Bohr, the Nobel prize-winning father of modern atomic theory, jumped off from this interesting idea to conceive his now-famous model of the atom.

What are we to make of this story? One might simply conclude that science is a collective and cumulative enterprise. That may be true, but there may be a deeper insight to be gleaned. We propose that science is constantly evolving, much as species of animals do. In biological systems, organisms may display new characteristics that result from random genetic mutations. In the same way, random, arbitrary or accidental mutations of ideas may help pave the way for advances in science. If mutations prove beneficial, then the animal or the scientific theory will continue to thrive and perhaps reproduce.

Support for this evolutionary view of behavioral innovation comes from many domains. Consider one example of an influential innovation in US horseracing. The so-called ‘acey-deucy’ stirrup placement, in which the rider’s foot in his left stirrup is placed as much as 25 centimeters lower than the right, is believed to confer important speed advantages when turning on oval tracks. It was developed by a relatively unknown jockey named Jackie Westrope. Had Westrope conducted methodical investigations or examined extensive film records in a shrewd plan to outrun his rivals? Had he foreseen the speed advantage that would be conferred by riding acey-deucy? No. He suffered a leg injury, which left him unable to fully bend his left knee. His modification just happened to coincide with enhanced left-hand turning performance. This led to the rapid and widespread adoption of riding acey-deucy by many riders, a racing style which continues in today’s thoroughbred racing.

Plenty of other stories show that fresh advances can arise from error, misadventure, and also pure serendipity - a happy accident. For example, in the early 1970s, two employees of the company 3M each had a problem: Spencer Silver had a product - a glue which was only slightly sticky - and no use for it, while his colleague Art Fry was trying to figure out how to affix temporary bookmarks in his hymn book without damaging its pages. The solution to both these problems was the invention of the brilliantly simple yet phenomenally successful Post-It note. Such examples give lie to the claim that ingenious, designing minds are responsible for human creativity and invention. Far more banal and mechanical forces may be at work; forces that are fundamentally connected to the laws of science.

The notions of insight, creativity and genius are often invoked, but they remain vague and of doubtful scientific utility, especially when one considers the diverse and enduring contributions of individuals such as Plato, Leonardo da Vinci, Shakespeare, Beethoven, Galileo, Newton, Kepler, Curie, Pasteur and Edison. These notions merely label rather than explain the evolution of human innovations. We need another approach, and there is a promising candidate.

The Law of Effect was advanced by psychologist Edward Thorndike in 1898, some 40 years after Charles Darwin published his groundbreaking work on biological evolution, On the Origin of Species. This simple law holds that organisms tend to repeat successful behaviors and to refrain from performing unsuccessful ones. Just like Darwin’s Law of Natural Selection, the Law of Effect involves an entirely mechanical process of variation and selection, without any end objective in sight.

Of course, the origin of human innovation demands much further study. In particular, the provenance of the raw material on which the Law of Effect operates is not as clearly known as that of the genetic mutations on which the Law of Natural Selection operates. The generation of novel ideas and behaviors may not be entirely random, but constrained by prior successes and failures - of the current individual (such as Bohr) or of predecessors (such as Nicholson).

The time seems right for abandoning the naive notions of intelligent design and genius, and for scientifically exploring the true origins of creative behavior.`;

      // ===================== 写作（真实题目 + 范文示例） =====================
      test.writing.tasks = [
        {
          task: 'Task 1 (小作文)',
          type: '图表描述（表格 + 两个饼图）',
          prompt: 'The table and charts below give information on the police budget for 2017 and 2018 in one area of Britain. The table shows where the money came from and the charts show how it was distributed.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
          modelAnswer: 'The table and two pie charts show how the police budget of one area of Britain was funded and spent in 2017 and 2018.\n\nOverall, the total budget rose slightly, from £304.3m to £318.6m. National government remained the largest source of funding, while the proportion spent on salaries fell and the share for technology increased.\n\nRegarding funding, national government contributed £175.5m in 2017 and £177.8m in 2018. Local taxes rose from £91.2m to £102.3m, and other sources increased modestly from £37.6m to £38.5m.\n\nIn terms of expenditure, salaries took the biggest share but declined from 75% to 69%. Technology spending grew from 8% to 14%, while buildings and transport stayed roughly stable at around 17–18%. Other costs made up the remainder.\n\nIn summary, although the budget grew only a little, its distribution shifted: less went on staff pay and more on technology, and local taxpayers bore a slightly larger part of the cost.',
          tips: '先总览（总额、最大项）；分别写资金来源与支出占比；对比两年变化；至少150词'
        },
        {
          task: 'Task 2 (大作文)',
          type: '议论文（原因分析 + 利弊讨论）',
          prompt: 'Some children spend hours every day on their smartphones.\n\nWhy is this the case? Do you think this is a positive or a negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
          modelAnswer: 'Nowadays many children spend several hours a day on their smartphones, and this essay will examine why this happens and argue that it is largely a negative trend.\n\nThere are several reasons for the habit. Smartphones give instant access to games, videos and social media designed to be addictive, so children are easily drawn in. Moreover, busy parents may use devices as a convenient way to keep children occupied, and peer pressure means a child without a phone can feel left out. The Covid-19 period also normalised screen-based learning and entertainment.\n\nIn my view, this is more negative than positive. Excessive use harms physical health, contributing to poor eyesight, sleep loss and reduced exercise. It can also affect concentration and mental well-being, as constant comparison on social media lowers self-esteem. Academically, time on phones is time taken from reading, hobbies and face-to-face interaction that build real social skills.\n\nAdmittedly, smartphones are not wholly bad: they can aid learning and keep children connected with family. Yet these benefits require careful limits. Without parental guidance and screen-time rules, the drawbacks outweigh the advantages.\n\nIn conclusion, children overuse smartphones because of engaging content and weak boundaries, and this is mainly a negative development that needs to be managed.',
          tips: '两段式：先分析原因，再表立场（positive/negative）并论证；给出例子；结构清晰；至少250词'
        }
      ];

      // ===================== 口语（真实话题 + 参考回答示例） =====================
      test.speaking.parts = [
        {
          part: 'Part 1: Introduction & Interview',
          intro: '考官就日常话题提问，约4-5分钟。话题：Films（电影）',
          questions: [
            { q: 'Do you like watching films?', a: '参考回答: Yes, I love watching films because they help me relax and let me experience different stories and cultures.' },
            { q: 'What kind of films do you prefer?', a: '参考回答: I like action and comedy films the most - they are exciting and help me forget about stress.' },
            { q: 'How often do you watch films?', a: '参考回答: I watch a film about once a week, usually at home on weekends.' },
            { q: 'Do you prefer watching films at home or in the cinema?', a: '参考回答: I prefer watching at home because it is more comfortable and much cheaper than the cinema.' }
          ]
        },
        {
          part: 'Part 2: Long Turn (Cue Card)',
          intro: '根据题目卡准备1分钟，独自陈述2分钟',
          cueCard: 'Describe a skill that was difficult for you to learn.\n\nYou should say:\n– what it was\n– when you learned it\n– why you learned it\n– and explain why it was difficult.',
          modelAnswer: '参考回答:\n\nOne skill that was hard for me to learn was driving. I learned it two years ago because I needed to travel to university and public transport was inconvenient.\n\nAt first, I was really nervous about driving on busy roads and worried about making mistakes. During my first few lessons I kept stalling the car and forgetting to check my mirrors. It was difficult because I had to focus on so many things at once - the speed, the signals, the other cars, and the road rules.\n\nMy instructor was patient, and my father also practised with me on quiet streets at weekends. Balancing lessons with my studies was tiring, but after about four months I took the test and passed.\n\nWhen I passed, I felt proud because I had overcome my fear and achieved something I thought I could not do. Driving has made my life easier and taught me that, with practice and patience, I can master difficult skills.',
          tips: '覆盖四个要点；用过去时；强调“difficult”的原因（多任务、紧张）；加入感受；控制2分钟'
        },
        {
          part: 'Part 3: Discussion',
          intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Learning New Skills',
          questions: [
            { q: 'Do you think it’s important to learn new skills?', a: '参考回答: Yes, because learning new skills helps people grow, stay adaptable, and cope with changes in work and life.' },
            { q: 'What skills should children learn at school?', a: '参考回答: Besides academic subjects, they should learn practical life skills like communication, teamwork, and basic problem-solving.' },
            { q: 'Is it easier for young people or old people to learn new skills?', a: '参考回答: Young people usually learn faster, but older people can still learn well if they stay motivated and practise regularly.' }
          ]
        }
      ];
    }
  });

  // ===================== 听力原文脚本（真实，覆盖 listening-scripts.js 中 17-1-* / 17-2-*） =====================
  if (typeof LISTENING_SCRIPTS !== 'undefined') {

    LISTENING_SCRIPTS['17-1-0'] = `PETER: Hello?

JAN: Oh hello. My name's Jan. Are you the right person to talk to about the Buckworth Conservation Group?

PETER: Yes, I'm Peter. I'm the secretary.

JAN: Good. I've just moved to this area, and I'm interested in getting involved. I was in a similar group where I used to live. Could you tell me something about your activities, please?

PETER: Of course. Well, we have a mixture of regular activities and special events. One of the regular ones is trying to keep the beach free of litter. A few of us spend a couple of hours a month on it, and it's awful how much there is to clear. I wish people would be more responsible and take it home with them.

JAN: I totally agree. I'd be happy to help with that. Is it OK to take dogs?

PETER: I'm afraid not, as they're banned from the beach itself. You can take them along the cliffs, though. And children are welcome.

JAN: Right.

PETER: We also manage a nature reserve, and there's a lot to do there all year round. For example, because it's a popular place to visit, we spend a lot of time looking after the paths and making sure they're in good condition for walking.

JAN: I could certainly help with that.

PETER: Good. And we have a programme of creating new habitats there. We've just finished making and installing nesting boxes for birds to use, and next we're going to work on encouraging insects - they're important for the biodiversity of the reserve.

JAN: They certainly are.

PETER: Oh, and we're also running a project to identify the different species of butterflies that visit the reserve. You might be interested in taking part in that.

JAN: Sure. I was involved in something similar where I used to live, counting all the species of moths. I'd enjoy that.

PETER: Another job we're doing at the reserve is replacing the wall on the southern side, between the parking area and our woodshed. It was badly damaged in a storm last month.

JAN: OK.

PETER: Then as I said, we have a programme of events as well, both at the weekend, and during the week.

JAN: Right. I presume you have guided walks? I'd like to get to know the local countryside, as I'm new to the area.

PETER: Yes, we do. The next walk is to Ruston Island, a week on Saturday. We'll be meeting in the car park at Dunsmore Beach at low tide - that's when the sands are dry enough for us to walk to the island without getting wet.

JAN: Sounds good.

PETER: The island's a great place to explore. It's quite small, and it's got a range of habitats. It's also an ideal location for seeing seals just off the coast, or even on the beach.

JAN: OK. And is there anything we should bring, like a picnic, for instance?

PETER: Yes, do bring one, as it's a full-day walk. And of course it'll be wet walking across and back, so make sure your boots are waterproof.

JAN: I must buy a new pair - there's a hole in one of my current ones! Well, I'd definitely like to come on the walk.

PETER: Great. Then later this month we're having a one-day woodwork session in Hopton Wood.

JAN: I've never tried that before. Is it OK for beginners to take part?

PETER: Definitely. There'll be a couple of experts leading the session, and we keep the number of participants down, so you'll get as much help as you need.

JAN: Excellent! I'd love to be able to make chairs.

PETER: That's probably too ambitious for one day! You'll be starting with wooden spoons, and of course learning how to use the tools. And anything you make is yours to take home with you.

JAN: That sounds like fun. When is it?

PETER: It's on the 17th, from 10 a.m. until 3. There's a charge of 35 pounds, including lunch, or 40 if you want to camp in the wood.

JAN: I should think I'll come home the same day. Well, I'd certainly like to join the group.`;

    LISTENING_SCRIPTS['17-1-1'] = `LOU MILLER: So, hello everyone. My name's Lou Miller and I'm going to be your tour guide today as we take this fantastic boat trip around the Tasmanian coast. Before we set off, I just want to tell you a few things about our journey.

Our boats aren't huge as you can see. We already have three staff members on board and on top of that, we can transport a further fifteen people - that's you - around the coastline. But please note if there are more than nine people on either side of the boat, we'll move some of you over, otherwise all eighteen of us will end up in the sea!

We've recently upgraded all our boats. They used to be jet black, but our new ones now have these comfortable dark red seats and a light-green exterior in order to stand out from others and help promote our company. This gives our boats a rather unique appearance, don't you think?

We offer you a free lunchbox during the trip and we have three types. Lunchbox 1 contains ham and tomato sandwiches. Lunchbox 2 contains a cheddar cheese roll and Lunchbox 3 is salad-based and also contains eggs and tuna. All three lunchboxes also have a packet of crisps and a chocolate bar inside. Please let staff know which lunchbox you prefer.

I'm sure I don't have to ask you not to throw anything into the sea. We don't have any bins to put litter in, but Jess, myself or Ray, our other guide, will collect it from you after lunch and put it all in a large plastic sack.

The engine on the boat makes quite a lot of noise so before we head off, let me tell you a few things about what you're going to see.

This area is famous for its ancient lighthouse, which you'll see from the boat as we turn past the first little island. It was built in 1838 to protect sailors as a number of shipwrecks had led to significant loss of life. The construction itself was complicated as some of the original drawings kept by the local council show. It sits right on top of the cliffs in a very isolated spot. In the nineteenth century there were many jobs there, such as polishing the brass lamps, chopping firewood and cleaning windows, that kept lighthouse keepers busy. These workers were mainly prison convicts until the middle of that century when ordinary families willing to live in such circumstances took over.

Some of you have asked me what creatures we can expect to see. I know everyone loves the penguins, but they're very shy and, unfortunately, tend to hide from passing boats, but you might see birds in the distance, such as sea eagles, flying around the cliff edges where they nest. When we get to the rocky area inhabited by fur seals, we'll stop and watch them swimming around the coast. They're inquisitive creatures so don't be surprised if one pops up right in front of you. Their predators, orca whales, hunt along the coastline too, but spotting one of these is rare. Dolphins, on the other hand, can sometimes approach on their own or in groups as they ride the waves beside us.

Lastly, I want to mention the caves. Tasmania is famous for its caves and the ones we'll pass by are so amazing that people are lost for words when they see them. They can only be approached by sea, but if you feel that you want to see more than we're able to show you, then you can take a kayak into the area on another day and one of our staff will give you more information on that. What we'll do is to go through a narrow channel, past some incredible rock formations and from there we'll be able to see the openings to the caves, and at that point we'll talk to you about what lies beyond.`;

    LISTENING_SCRIPTS['17-1-2'] = `DIANA: So, Tim, we have to do a short summary of our work experience on a farm.

TIM: Right. My farm was great, but arranging the work experience was hard. One problem was it was miles away and I don't drive. And also, I'd really wanted a placement for a month, but I could only get one for two weeks.

DIANA: I was lucky, the farmer let me stay on the farm so I didn't have to travel. But finding the right sort of farm to apply to wasn't easy.

TIM: No, they don't seem to have websites, do they. I found mine through a friend of my mother's, but it wasn't easy.

DIANA: No.

TIM: My farm was mostly livestock, especially sheep. I really enjoyed helping out with them. I was up most of one night helping a sheep deliver a lamb.

DIANA: On your own?

TIM: No, the farmer was there, and he told me what to do. It wasn't a straightforward birth, but I managed. It was a great feeling to see the lamb stagger to its feet and start feeding almost straightaway, and to know that it was OK.

DIANA: Mm.

TIM: Then another time a lamb had broken its leg, and they got the vet in to set it, and he talked me through what he was doing. That was really useful.

DIANA: Yes, my farm had sheep too. The farm was in a valley and they had a lowland breed called Suffolks, although the farmer said they'd had other breeds in the past.

TIM: So were they bred for their meat?

DIANA: Mostly, yes. They're quite big and solid.

TIM: My farm was up in the hills and they had a different breed of sheep, they were Cheviots.

DIANA: Oh, I heard their wool's really sought after.

TIM: Yes. It's very hardwearing and they use it for carpets.

DIANA: Right.

TIM: I was interested in the amount of supplements they add to animals' feed nowadays. Like, even the chickens got extra vitamins and electrolytes in their feed.

DIANA: Yes, I found that too. And they're not cheap. But my farmer said some are overpriced for what they are. And he didn't give them as a matter of routine, just at times when the chickens seemed to particularly require them.

TIM: Yes, mine said the same. He said certain breeds of chickens might need more supplements than the others, but the cheap and expensive ones are all basically the same.

DIANA: Mm.

TIM: So did your farm have any other livestock, Diana?

DIANA: Yes, dairy cows. I made a really embarrassing mistake when I was working in the milk shed. Some cows had been treated with antibiotics, so their milk wasn't suitable for human consumption, and it had to be put in a separate container. But I got mixed up, and I poured some milk from the wrong cow in with the milk for humans, so the whole lot had to be thrown away. The farmer wasn't too happy with me.

TIM: I asked my farmer how much he depended on the vet to deal with health problems. I'd read reports that the livestock's health is being affected as farmers are under pressure to increase production. Well, he didn't agree with that, but he said that actually some of the stuff the vets do, like minor operations, he'd be quite capable of doing himself.

DIANA: Yeah. My farmer said the same. But he reckons vets' skills are still needed.

DIANA: Now we've got to give a bit of feedback about last term's modules - just short comments, apparently. Shall we do that now?

TIM: OK. So medical terminology.

DIANA: Well, my heart sank when I saw that, especially right at the beginning of the course. And I did struggle with it.

TIM: I'd thought it'd be hard, but actually I found it all quite straightforward. What did you think about diet and nutrition?

DIANA: OK, I suppose.

TIM: Do you remember what they told us about pet food and the fact that there's such limited checking into whether or not it's contaminated? I mean in comparison with the checks on food for humans - I thought that was terrible.

DIANA: Mm. I think the module that really impressed me was the animal disease one, when we looked at domesticated animals in different parts of the world, like camels and water buffalo and alpaca. The economies of so many countries depend on these, but scientists don't know much about the diseases that affect them.

TIM: Yes, I thought they'd know a lot about ways of controlling and eradicating those diseases, but that's not the case at all. I loved the wildlife medication unit. Things like helping birds that have been caught in oil spills. That's something I hadn't thought about before.

DIANA: Yeah, I thought I might write my dissertation on something connected with that.

TIM: Right. So ...`;

    LISTENING_SCRIPTS['17-1-3'] = `Labyrinths have existed for well over 4,000 years. Labyrinths and labyrinthine symbols have been found in regions as diverse as modern-day Turkey, Ireland, Greece, and India. There are various designs of labyrinth but what they all have in common is a winding spiral path which leads to a central area. There is one starting point at the entrance and the goal is to reach the central area. Finding your way through a labyrinth involves many twists and turns, but it's not possible to get lost as there is only one single path.

In modern times, the word labyrinth has taken on a different meaning and is often used as a synonym for a maze. A maze is quite different as it is a kind of puzzle with an intricate network of paths. Mazes became fashionable in the 15th and 16th centuries in Europe, and can still be found in the gardens of great houses and palaces. The paths are usually surrounded by thick, high hedges so that it's not possible to see over them. Entering a maze usually involves getting lost a few times before using logic to work out the pattern and find your way to the centre and then out again. There are lots of dead ends and paths which lead you back to where you started. The word 'maze' is believed to come from a Scandinavian word for a state of confusion. This is where the word 'amazing' comes from.

Labyrinths, on the other hand, have a very different function. Although people now often refer to things they find complicated as labyrinths, this is not how they were seen in the past. The winding spiral of the labyrinth has been used for centuries as a metaphor for life's journey. It served as a spiritual reminder that there is purpose and meaning to our lives and helped to give people a sense of direction. Labyrinths are thought to encourage a feeling of calm and have been used as a meditation and prayer tool in many cultures over many centuries.

The earliest examples of the labyrinth spiral pattern have been found carved into stone, from Sardinia to Scandinavia, from Arizona to India to Africa. In Europe, these spiral carvings date from the late Bronze Age. The Native American Pima tribe wove baskets with a circular labyrinth design that depicted their own cosmology. In Ancient Greece, the labyrinth spiral was used on coins around four thousand years ago. Labyrinths made of mosaics were commonly found in bathhouses, villas and tombs throughout the Roman Empire.

In Northern Europe, there were actual physical labyrinths designed for walking on. These were cut into the turf or grass, usually in a circular pattern. The origin of these walking labyrinths remains unclear, but they were probably used for fertility rites which may date back thousands of years. Eleven examples of turf labyrinths survive today, including the largest one at Saffron Walden, England, which used to have a large tree in the middle of it.

More recently labyrinths have experienced something of a revival. Some believe that walking a labyrinth promotes healing and mindfulness, and there are those who believe in its emotional and physical benefits, which include slower breathing and a restored sense of balance and perspective. This idea has become so popular that labyrinths have been laid into the floors of spas, wellness centres and even prisons in recent years.

A pamphlet at Colorado Children's Hospital informs patients that 'walking a labyrinth can often calm people in the midst of a crisis'. And apparently, it's not only patients who benefit. Many visitors find walking a labyrinth less stressful than sitting in a corridor or waiting room. Some doctors even walk the labyrinth during their breaks. In some hospitals, patients who can't walk can have a paper 'finger labyrinth' brought to their bed. The science behind the theory is a little sketchy, but there are dozens of small-scale studies which support claims about the benefits of labyrinths. For example, one study found that walking a labyrinth provided 'short-term calming, relaxation, and relief from anxiety' for Alzheimer's patients.

So, what is it about labyrinths that makes their appeal so universal? Well ...`;

    LISTENING_SCRIPTS['17-2-0'] = `JANE: Hello, Jane Fairbanks speaking.

FRANK: Oh, good morning. My name's Frank Pritchard. I've just retired and moved to Southoe. I'd like to become a volunteer, and I gather you co-ordinate voluntary work in the village.

JANE: That's right.

FRANK: What sort of thing could I do?

JANE: Well, we need help with the village library. We borrow books from the town library, and individuals also donate them. So, one thing you could do is get involved in collecting them - if you've got a car, that is.

FRANK: Yes, that's no problem.

JANE: The times are pretty flexible so we can arrange it to suit you. Another thing is the records that we keep of the books we're given, and those we borrow and need to return to the town library. It would be very useful to have another person to help keep them up to date.

FRANK: Right. I'm used to working on a computer - I presume they're computerised?

JANE: Oh yes.

FRANK: Is the library purpose-built? I haven't noticed it when I've walked round the village.

JANE: No, we simply have the use of a room in the village hall, the West Room. It's on the left as you go in.

FRANK: I must go and have a look inside the hall.

JANE: Yes, it's a nice building.

FRANK: Do you run a lunch club in the village for elderly people? I know a lot of places do.

JANE: Yes, we have a very successful club.

FRANK: I could help with transport, if that's of any use.

JANE: Ooo definitely. People come to the club from neighbouring villages, and we're always in need of more drivers.

FRANK: And does the club have groups that focus on a particular hobby, too? I could get involved in one or two, particularly if there are any art groups.

JANE: Excellent. I'll find out where we need help and get back to you.

FRANK: Fine. What about help for individual residents. Do you arrange that at all?

JANE: Yes, we do it as a one-off. In fact, there's Mrs Carroll. She needs a lift to the hospital next week, and we're struggling to find someone.

FRANK: When's her appointment?

JANE: On Tuesday. It would take the whole morning.

FRANK: I could do that.

JANE: Oh, that would be great. Thank you. And also, next week, we're arranging to have some work done to Mr Selsbury's house before he moves, as he isn't healthy enough to do it himself. We've got some people to decorate his kitchen, but if you could do some weeding in his garden, that would be wonderful.

FRANK: OK. I'd enjoy that. And presumably the day and time are flexible.

JANE: Oh yes. Just say when would suit you best, and we'll let Mr Selsbury know.

FRANK: Good.

JANE: The volunteers group also organises monthly social events, which is a great way to meet other people, of course.

FRANK: Uhuh.

JANE: So next month, on the 19th of October, we're holding a quiz - a couple of residents are great at planning unusual ones, and we always fill the village hall.

FRANK: That sounds like fun. Can I do anything to help?

JANE: Well, because of the number of people, we need plenty of refreshments for halfway through. So, if you could provide any, we'd be grateful.

FRANK: I'm sure I could. I'll think about what to make, and let you know.

JANE: Thank you. Then on November the 18th, we're holding a dance, also in the village hall. We've booked a band that specialises in music of the 1930s - they've been before, and we've had a lot of requests to bring them back.

FRANK: I'm not really a dancer, but I'd like to do something to help.

JANE: Well, we sell tickets in advance, and having an extra person to check them at the door, as people arrive, would be good - it can be quite a bottleneck if everyone arrives at once!

FRANK: OK, I'm happy with that.

JANE: We're also arranging a New Year's Eve party. We're expecting that to be a really big event, so instead of the village hall, it'll be held in the Mountfort Hotel.

FRANK: The ...?

JANE: Mountfort. M-O-U-N-T-F-O-R-T Hotel. It isn't in Southoe itself, but it's only a couple of miles away. The hotel will be providing dinner and we've booked a band. The one thing we haven't got yet is a poster. That isn't something you could do, by any chance, is it?

FRANK: Well actually, yes. Before I retired I was a graphic designer, so that's right up my street.

JANE: Oh perfect! I'll give you the details, and then perhaps you could send me a draft ...

FRANK: Of course.`;

    LISTENING_SCRIPTS['17-2-1'] = `NICK: Good morning, and welcome to Oniton Hall, one of the largest estates in the area. My name's Nick, and I'm one of the guides. I'll give you a brief introduction to the estate while you're sitting down, and then we'll walk round.

The estate consists of the house, gardens, parkland and farm, and it dates back to the fourteenth century. The original house was replaced in the late seventeenth century, and of course it has had a large number of owners. Almost all of them have left their mark, generally by adding new rooms, like the ballroom and conservatory, or by demolishing others. The farm looks much as it's always done, although the current owner has done a great deal of work to the flower beds.

In the seventeenth century, the estate was owned by a very wealthy man called Sir Edward Downes. His intention was to escape from the world of politics, after years as an active politician, and to build a new house worthy of his big collection of books, paintings and sculptures. He broke off contact with his former political allies, and hosted meetings of creative and literary people, like painters and poets. Unusually for his time, he didn't care whether his guests were rich or poor, as long as they had talent.

Big houses like Oniton had dozens of servants until the 1920s or 30s, and we've tried to show what their working lives were like. Photographs of course don't give much of an idea, so instead, as you go round the house, you'll see volunteers dressed up as nineteenth-century servants, going about their work. They'll explain what they're doing, and tell you their recipes, or what tools they're using. We've just introduced this feature to replace the audio guide we used to have available.

I see there are a number of children here with you today. Well, we have several activities specially for children, like dressing up in the sorts of clothes that children wore in the past, and as it's a fine day, some of you will probably want to play in the adventure playground. Our latest addition is child-sized tractors, that you can drive around the grounds.

We'll also be going into the farm that's part of the estate, where there's plenty to do. Most of the buildings date from the eighteenth century, so you can really step back into an agricultural past.

Until recently, the dairy was where milk from the cows was turned into cheese. It's now the place to go for lunch, or afternoon tea, or just a cup of coffee and a slice of homemade cake.

The big stone building that dominates the farm is the large barn, and in here is our collection of agricultural tools. These were used in the past to plough the earth, sow seeds, make gates, and much more.

There's a small barn, also made of stone, where you can groom the donkeys and horses, to keep their coats clean. They really seem to enjoy having it done, and children love grooming them.

The horses no longer live in the stables, which instead is the place to go to buy gifts, books, our own jams and pickles, and clothes and blankets made of wool from our sheep.

Outside the shed, which is the only brick building, you can climb into a horse-drawn carriage for a lovely, relaxing tour of the park and farm. The carriages are well over a hundred years old.

And finally, the parkland, which was laid out in the eighteenth century, with a lake and trees that are now well established. You'll see types of cattle and sheep that are hardly ever found on farms these days. We're helping to preserve them, to stop their numbers falling further.

OK, well if you'd like to come with me ...`;

    LISTENING_SCRIPTS['17-2-2'] = `ED: Did you make notes while you were watching the performances of Romeo and Juliet, Gemma?

GEMMA: Yes, I did. I found it quite hard though. I kept getting too involved in the play.

ED: Me too. I ended up not taking notes. I wrote down my impressions when I got home. Do you mind if I check a few things with you? In case I've missed anything. And I've also got some questions about our assignment.

GEMMA: No, it's good to talk things through. I may have missed things too.

ED: OK great. So first of all, I'm not sure how much information we should include in our reviews.

GEMMA: Right. Well, I don't think we need to describe what happens. Especially as Romeo and Juliet is one of Shakespeare's most well-known plays.

ED: Yeah, everyone knows the story. In an essay we'd focus on the poetry and Shakespeare's use of imagery etc., but that isn't really relevant in a review. We're supposed to focus on how effective this particular production is.

GEMMA: Mmm. We should say what made it a success or a failure.

ED: And part of that means talking about the emotional impact the performance had on us. I think that's important.

GEMMA: Yes. And we should definitely mention how well the director handled important bits of the play - like when Romeo climbs onto Juliet's balcony.

ED: And the fight between Mercutio and Tybalt.

GEMMA: Yes. It would also be interesting to mention the theatre space and how the director used it but I don't think we'll have space in 800 words.

ED: No. OK. That all sounds quite straightforward.

ED: So what about The Emporium Theatre's production of the play?

GEMMA: I thought some things worked really well but there were some problems too.

ED: Yeah. What about the set, for example?

GEMMA: I think it was visually really stunning. I'd say that was probably the most memorable thing about this production.

ED: You're right. The set design was really amazing, but actually I have seen similar ideas used in other productions.

GEMMA: What about the lighting? Some of the scenes were so dimly lit it was quite hard to see.

ED: I didn't dislike it. It helped to change the mood of the quieter scenes.

GEMMA: That's a good point.

ED: What did you think of the costumes?

GEMMA: I was a bit surprised by the contemporary dress, I must say.

ED: Yeah - I think it worked well, but I had assumed it would be more conventional.

GEMMA: Me too. I liked the music at the beginning and I thought the musicians were brilliant, but I thought they were wasted because the music didn't have much impact in Acts 2 and 3.

ED: Yes - that was a shame.

GEMMA: One problem with this production was that the actors didn't deliver the lines that well. They were speaking too fast.

ED: It was a problem I agree, but I thought it was because they weren't speaking loudly enough - especially at key points in the play.

GEMMA: I actually didn't have a problem with that.

ED: It's been an interesting experience watching different versions of Romeo and Juliet, hasn't it?

GEMMA: Definitely. It's made me realise how relevant the play still is.

ED: Right. I mean a lot's changed since Shakespeare's time, but in many ways nothing's changed. There are always disagreements and tension between teenagers and their parents.

GEMMA: Yes, that's something all young people can relate to - more than the violence and the extreme emotions in the play.

ED: How did you find watching it in translation?

GEMMA: Really interesting. I expected to find it more challenging, but I could follow the story pretty well.

ED: I stopped worrying about not being able to understand all the words and focused on the actors' expressions. The ending was pretty powerful.

GEMMA: Yes. That somehow intensified the emotion for me.

ED: Did you know Shakespeare's been translated into more languages than any other writer?

GEMMA: What's the reason for his international appeal, do you think?

ED: I was reading that it's because his plays are about basic themes that people everywhere are familiar with.

GEMMA: Yeah, and they can also be understood on different levels. The characters have such depth.

ED: Right - which allows directors to experiment and find new angles.

GEMMA: That's really important because ...`;

    LISTENING_SCRIPTS['17-2-3'] = `Right, everyone, let's make a start. Over the past few sessions, we've been considering the reasons why some world languages are in decline, and today I'm going to introduce another factor that affects languages, and the speakers of those languages, and that's technology and, in particular, digital technology. In order to illustrate its effect, I'm going to focus on the Icelandic language, which is spoken by around 321,000 people, most of whom live in Iceland - an island in the North Atlantic Ocean.

The problem for this language is not the number of speakers - even though this number is small. Nor is it about losing words to other languages, such as English. In fact, the vocabulary of Icelandic is continually increasing because when speakers need a new word for something, they tend to create one, rather than borrowing from another language. All this makes Icelandic quite a special language - it's changed very little in the past millennium, yet it can handle twenty-first-century concepts related to the use of computers and digital technology. Take, for example, the word for web browser - this is 'vafri' in Icelandic, which comes from the verb 'to wander'. I can't think of a more appropriate term because that's exactly what you do mentally when you browse the internet. Then there's an Icelandic word for podcast - which is too hard to pronounce! And so on.

Icelandic, then, is alive and growing, but - and it's a big but - young Icelanders spend a great deal of time in the digital world and this world is predominantly English. Think about smartphones. They didn't even exist until comparatively recently, but today young people use them all the time to read books, watch TV or films, play games, listen to music, and so on. Obviously, this is a good thing in many respects because it promotes their bilingual skills, but the extent of the influence of English in the virtual world is staggering and it's all happening really fast.

For their parents and grandparents, the change is less concerning because they already have their native-speaker skills in Icelandic. But for young speakers - well, the outcome is a little troubling. For example, teachers have found that playground conversations in Icelandic secondary schools can be conducted entirely in English, while teachers of much younger children have reported situations where their classes find it easier to say what is in a picture using English, rather than Icelandic. The very real and worrying consequence of all this is that the young generation in Iceland is at risk of losing its mother tongue.

Of course, this is happening to other European languages too, but while internet companies might be willing to offer, say, French options in their systems, it's much harder for them to justify the expense of doing the same for a language that has a population the size of a French town, such as Nice. The other drawback of Icelandic is the grammar, which is significantly more complex than in most languages. At the moment, the tech giants are simply not interested in tackling this.

So, what is the Icelandic government doing about this? Well, large sums of money are being allocated to a language technology fund that it is hoped will lead to the development of Icelandic sourced apps and other social media and digital systems, but clearly this is going to be an uphill struggle.

On the positive side, they know that Icelandic is still the official language of education and government. It has survived for well over a thousand years and the experts predict that its future in this nation state is sound and will continue to be so. However, there's no doubt that it's becoming an inevitable second choice in young people's lives.

This raises important questions. When you consider how much of the past is tied up in a language, will young Icelanders lose their sense of their own identity? Another issue that concerns the government of Iceland is this. If children are learning two languages through different routes, neither of which they are fully fluent in, will they be able to express themselves properly?`;
  }

  console.log('[real-17a] 剑17 Test1 & Test2 已覆盖为真实剑桥雅思内容');
})();
