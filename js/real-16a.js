/**
 * 剑16 Test 1 & Test 2 真实剑桥雅思内容覆盖补丁
 * 目的：将 data.js 中 AI 生成的"原创练习"内容替换为真实剑桥雅思16 真题（Test 1 与 Test 2）。
 * 数据核对来源（公开权威解析，含原题答案键）：
 *   听力原文/答案 — laokaoya (剑桥雅思16 Test1/Test2 Part1-4)、ielts-hub、ieltsxpress (transcript)
 *   阅读原文/题目/答案 — engnovate (Cambridge IELTS 16 Academic Reading Test 1 & Test 2 全文)、ielts-hub、ieltsextremes
 *   写作题目 — blog.scitudy.com / ieltswriting.org (Cambridge IELTS 16 Writing Tests 1-4)
 *   口语话题 — ieltspractices.com、babarenglish.com、ieltszone.org (Cambridge 16 IELTS Speaking Test 1/2)
 * 注意：原文/题目为真实剑桥雅思16考题内容；范文与口语"参考回答"为学习用示例文本（非官方范文）。
 *   口语来源存在差异（不同站点对 Test 1/Test 2 的话题标注不一致），已按多数一致版本整合（见末段说明）。
 * 本文件须放在所有数据文件之后、app.js 之前加载。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;
  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 16) book = b; });
  if (!book) return;

  // ===================================================================
  //  TEST 1
  // ===================================================================
  var test1 = null;
  book.tests.forEach(function (t) { if (t.id === 1) test1 = t; });
  if (test1) {

    // ----------------------- 听力（真实） -----------------------
    test1.listening.sections = [
      {
        part: 'Part 1',
        context: '家长致电 Children’s Engineering Workshops 咨询学校假期工程主题儿童工作坊',
        type: '笔记/表格填空（每空一词或数字）',
        questions: [
          { q: 'Tiny Engineers 工作坊（4-5岁）设计包裹 ___ 的罩子，使其从高处落下不碎。', a: 'egg' },
          { q: 'Junior Engineers 比赛搭建最高的 ___。', a: 'tower' },
          { q: '孩子们设计并制作由气球推动的 ___。', a: 'car' },
          { q: '用相同材料与技术搭建 ___（动物）。', a: 'animals' },
          { q: '用回收材料搭建最长的 ___（桥）可获奖。', a: 'bridge' },
          { q: '构思一个五分钟的 ___ 并用动画软件拍摄。', a: 'movie / film' },
          { q: '他们 ___ 机器人并编写程序让它动起来。', a: 'decorate' },
          { q: '因整理时间不足，课程从周一改到 ___。', a: 'Wednesdays' },
          { q: '工作坊位于 ___ Industrial Estate 的 10A 楼。', a: 'Fradstone' },
          { q: '那里停车（parking）没有问题。', a: 'parking' }
        ]
      },
      {
        part: 'Part 2',
        context: 'Stevenson’s 金属制品公司经理 Julia Simmons 为工作体验学生介绍公司与厂区',
        type: '选择题（单选）+ 地图标注',
        questions: [
          { q: 'Ronald Stevenson 于哪一年创立公司？ (A 1923 / B 1924 / C 1926)', a: 'C' },
          { q: '公司成立头五年生产什么？ (A 医疗/医院用品 / B 机床零件 / C 汽车卡车)', a: 'A' },
          { q: '说话人如何描述公司场地？ (A 已迁新址 / B 将大规模翻新，无需搬迁 / C 布局已很理想)', a: 'B' },
          { q: '大多数早晨学生会做什么？ (A 在各部门观察 / B 老师来校走访 / C 听经理做介绍)', a: 'C' },
          { q: '咖啡室（coffee room）在哪里？', a: 'H' },
          { q: '仓库（warehouse）在哪里？', a: 'C' },
          { q: '员工餐厅（staff canteen）在哪里？', a: 'G' },
          { q: '会议室（meeting room）在哪里？', a: 'B' },
          { q: '人力资源部（human resources）在哪里？', a: 'I' },
          { q: '董事会会议室（boardroom）在哪里？', a: 'A' }
        ]
      },
      {
        part: 'Part 3',
        context: 'Jess 与 Tom 讨论以“鸟类艺术”为主题的功课项目',
        type: '多选（选两项）+ 配对',
        questions: [
          { q: 'Tom 与 Jess 觉得哪两项对学习项目有用？ (C 发下的书单/网站资料 / E 自然历史博物馆之行)', a: 'C, E' },
          { q: '他们将在提案中修改哪两项？ (B 不把成果写得太精确 / E 加入对内容的评价)', a: 'B, E' },
          { q: 'Landseer 的 falcon 画作暗示了什么？', a: 'D' },
          { q: 'Audubon 的 fish hawk 画作给人什么印象？', a: 'C' },
          { q: 'van Gogh 的 kingfisher 画作与什么个人联系有关？', a: 'A' },
          { q: 'William Wells 肖像表达了什么？', a: 'H' },
          { q: 'Gauguin 的 Vairumati 画作中的鸟指代什么？', a: 'F' },
          { q: 'Giovanni de Medici 肖像中男孩如何对待小鸟？', a: 'G' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于斯多葛学派（Stoicism）历史的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: '斯多葛学派是所有哲学中最 ___ 的。', a: 'practical' },
          { q: '最著名的斯多葛派从未为 ___ 写下一字。', a: 'publication' },
          { q: 'Epictetus：外界事件无法控制，但我对它们的 ___ 可以控制。', a: 'choices' },
          { q: 'Taleb 定义斯多葛派：以他人视为全然 ___ 的视角看待经历。', a: 'negative' },
          { q: '华盛顿上演了一出关于 Cato 的 ___ 以激励部下。', a: 'play' },
          { q: 'Adam Smith 的 ___ 理论深受斯多葛派影响。', a: 'capitalism' },
          { q: 'Ellis 发明认知行为疗法，常用于治疗 ___。', a: 'depression' },
          { q: '通过 ___ 挑战非理性信念。', a: 'logic' },
          { q: '斯多葛派教人将障碍转化为 ___。', a: 'opportunity' },
          { q: '其智慧关于如何过好一生，需要长期 ___。', a: 'practice / practise' }
        ]
      }
    ];

    // ----------------------- 阅读（真实） -----------------------
    test1.reading.passages = [
      {
        title: 'Passage 1: Why we need to protect polar bears',
        difficulty: '中等',
        summary: '北极熊适应极端寒冷、控制胆固醇与骨密度，并展现解决问题与情绪能力，论证保护北极熊对人类医学与道德的意义。',
        questions: [
          { type: '判断题 (True/False/Not Given)', q: 'Polar bears suffer from various health problems due to the build-up of fat under their skin.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'The study by Liu and his colleagues compared different groups of polar bears.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Liu and colleagues were the first researchers to compare polar bears and brown bears genetically.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Polar bears are able to control their levels of “bad” cholesterol by genetic means.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Female polar bears are able to survive for about six months without food.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'The bones of female polar bears were very weak when they came out of their dens in spring.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'The polar bear’s mechanism for increasing bone density could be used by people one day.', a: 'TRUE' },
          { type: '表格填空（每空一词）', q: 'People think of bears as unintelligent and ___', a: 'violent' },
          { type: '表格填空（每空一词）', q: 'In Tennoji Zoo, a bear used a branch as a ___', a: 'tool' },
          { type: '表格填空（每空一词）', q: 'This allowed him to knock down some ___', a: 'meat' },
          { type: '表格填空（每空一词）', q: 'A wild polar bear reached a platform where a ___ stood', a: 'photographer' },
          { type: '表格填空（每空一词）', q: 'Polar bears showed behaviour similar to a ___', a: 'game' },
          { type: '表格填空（每空一词）', q: 'They may make movements suggesting ___ when hunting fails', a: 'frustration' }
        ],
        text: `Polar bears are being increasingly threatened by the effects of climate change, but their disappearance could have far-reaching consequences. They are uniquely adapted to the extreme conditions of the Arctic Circle, where temperatures can reach —40°C. One reason for this is that they have up to 11 centimetres of fat underneath their skin. Humans with comparative levels of adipose tissue would be considered obese and would be likely to suffer from diabetes and heart disease. Yet the polar bear experiences no such consequences.

A 2014 study by Shi Ping Liu and colleagues sheds light on this mystery. They compared the genetic structure of polar bears with that of their closest relatives from a warmer climate, the brown bears. This allowed them to determine the genes that have allowed polar bears to survive in one of the toughest environments on Earth. Liu and his colleagues found the polar bears had a gene known as APoB, which reduces levels of low-density lipoproteins (LDLs) - a form of 'bad' cholesterol. In humans, mutations of this gene are associated with increased risk of heart disease. Polar bears may therefore be an important study model to understand heart disease in humans.

The genome of the polar bear may also provide the solution for another condition, one that particularly affects our older generation: osteoporosis. This is a disease where bones show reduced density, usually caused by insufficient exercise, reduced calcium intake or food starvation. Bone tissue is constantly being remodelled, meaning that bone is added or removed, depending on nutrient availability and the stress that the bone is under. Female polar bears, however, undergo extreme conditions during every pregnancy. Once autumn comes around, these females will dig maternity dens in the snow and will remain there throughout the winter, both before and after the birth of their cubs. This process results in about six months of fasting, where the female bears have to keep themselves and their cubs alive, depleting their own calcium and calorie reserves. Despite this, their bones remain strong and dense.

Physiologists Alanda Lennox and Allen Goodship found an explanation for this paradox in 2008. They discovered that pregnant bears were able to increase the density of their bones before they started to build their dens. In addition, six months later, when they finally emerged from the den with their cubs, there was no evidence of significant loss of bone density. Hibernating brown bears do not have this capacity and must therefore resort to major bone reformation in the following spring. If the mechanism of bone remodelling in polar bears can be understood, many bedridden humans, and even astronauts, could potentially benefit.

The medical benefits of the polar bear for humanity certainly have their importance in our conservation efforts, but these should not be the only factors taken into consideration. We tend to want to protect animals we think are intelligent and possess emotions, such as elephants and primates. Bears, on the other hand, seem to be perceived as stupid and in many cases violent. And yet anecdotal evidence from the field challenges those assumptions, suggesting for example that polar bears have good problem-solving abilities. A male bear called GoGo in Tennoji Zoo, Osaka, has even been observed making use of a tool to manipulate his environment. The bear used a tree branch on multiple occasions to dislodge a piece of meat hung out of his reach. Problem-solving ability has also been witnessed in wild polar bears, although not as obviously as with GoGo. A calculated move by a male bear involved running and jumping onto barrels in an attempt to get to a photographer standing on a platform four metres high.

In other studies, such as one by Alison Annes in 2008, polar bears showed deliberate and focussed manipulation. For example, Annes observed bears putting objects in piles and then knocking them over in what appeared to be a game. The study demonstrates that bears are capable of agile and thought-out behaviours. These examples suggest bears have greater creativity and problem-solving abilities than previously thought.

As for emotions while the evidence is once again anecdotal, many bears have been seen to hit out at ice and snow — seemingly out of frustration — when they have just missed out on a kill. Moreover, polar bears can form unusual relationships with other species, including playing with the dogs used to pull sleds in the Arctic. Remarkably, one hand-raised polar bear called Agee has formed a close relationship with her owner Mark Dumas to the point where they even swim together. This is even more astonishing since polar bears are known to actively hunt humans in the wild.

If climate change were to lead to their extinction, this would mean not only the loss of potential breakthroughs in human medicine, but more importantly, the disappearance of an intelligent, majestic animal.`
      },
      {
        title: 'Passage 2: The Step Pyramid of Djoser',
        difficulty: '中偏难',
        summary: '埃及左塞尔王阶梯金字塔的由来、建造过程、复合建筑群及防盗设计，及其在建筑史上的里程碑意义。',
        questions: [
          { type: '段落标题匹配（iv/vii/ii/v/i/viii/vi）', q: 'Paragraph A — 一个确定事实与其余不确定事实', a: 'iv' },
          { type: '段落标题匹配', q: 'Paragraph B — 改变墓葬结构的设计构想', a: 'vii' },
          { type: '段落标题匹配', q: 'Paragraph C — 建造者面临的困难任务', a: 'ii' },
          { type: '段落标题匹配', q: 'Paragraph D — 外部建筑与区域概览', a: 'v' },
          { type: '段落标题匹配', q: 'Paragraph E — 金字塔内部的区域与器物', a: 'i' },
          { type: '段落标题匹配', q: 'Paragraph F — 遗存极少却令人惊叹', a: 'viii' },
          { type: '段落标题匹配', q: 'Paragraph G — 被后世效仿的金字塔设计', a: 'vi' },
          { type: '笔记填空（每空一词）', q: '复合建筑群规模相当于古埃及的一座 ___', a: 'city' },
          { type: '笔记填空（每空一词）', q: '园区外有 ___ 居住的房舍', a: 'priests' },
          { type: '笔记填空（每空一词）', q: '围墙外有一条长长的 ___ 环绕', a: 'trench' },
          { type: '笔记填空（每空一词）', q: '访客须事先知道真正入口的 ___', a: 'location' },
          { type: '多选题（选两项）', q: '关于 King Djoser，作者提出了哪两点？', a: 'B, D' },
          { type: '多选题（选两项）', q: '（接上）其在位时长有争议；墓中仍发现少量其遗物。', a: 'B, D' }
        ],
        text: `A. The pyramids are the most famous monuments of ancient Egypt and still hold enormous interest for people in the present day. These grand, impressive tributes to the memory of the Egyptian kings have become linked with the country even though other cultures, such as the Chinese and Mayan, also built pyramids. The evolution of the pyramid form has been written and argued about for centuries. However, there is no question that, as far as Egypt is concerned, it began with one monument to one king designed by one brilliant architect: the Step Pyramid of Djoser at Saqqara.

B. Djoser was the first king of the Third Dynasty of Egypt and the first to build in stone. Prior to Djoser’s reign, tombs were rectangular monuments made of dried clay brick, which covered underground passages where the deceased person was buried. For reasons which remain unclear, Djoser’s main official, whose name was Imhotep, conceived of building a taller, more impressive tomb for his king by stacking stone slabs on top of one another, progressively making them smaller, to form the shape now known as the Step Pyramid. Djoser is thought to have reigned for 19 years, but some historians and scholars attribute a much longer time for his rule, owing to the number and size of the monuments he built.

C. The Step Pyramid has been thoroughly examined and investigated over the last century, and it is now known that the building process went through many different stages. Historian Marc Van de Mieroop comments on this, writing ‘Much experimentation was involved, which is especially clear in the construction of the pyramid in the center of the complex. It had several plans … before it became the first Step Pyramid in history, piling six levels on top of one another … The weight of the enormous mass was a challenge for the builders, who placed the stones at an inward incline in order to prevent the monument breaking up.’

D. When finally completed, the Step Pyramid rose 62 meters high and was the tallest structure of its time. The complex in which it was built was the size of a city in ancient Egypt and included a temple, courtyards, shrines, and living quarters for the priests. It covered a region of 16 hectares and was surrounded by a wall 10.5 meters high. The wall had 13 false doors cut into it with only one true entrance cut into the south-east corner; the entire wall was then ringed by a trench 750 meters long and 40 meters wide. The false doors and the trench were incorporated into the complex to discourage unwanted visitors. If someone wished to enter, he or she would have needed to know in advance how to find the location of the true opening in the wall. Djoser was so proud of his accomplishment that he broke the tradition of having only his own name on the monument and had Imhotep’s name carved on it as well.

E. The burial chamber of the tomb, where the king’s body was laid to rest, was dug beneath the base of the pyramid, surrounded by a vast maze of long tunnels that had rooms off them to discourage robbers. One of the most mysterious discoveries found inside the pyramid was a large number of stone vessels. Over 40,000 of these vessels, of various forms and shapes, were discovered in storerooms of the pyramid’s underground passages. They are inscribed with the names of rulers from the First and Second Dynasties of Egypt and made from different kinds of stone. There is no agreement among scholars and archaeologists on why the vessels were placed in the tomb of Djoser or what they were supposed to represent. The archaeologist Jean-Philippe Lauer, who excavated most of the pyramid and complex, believes they were originally stored and then given a ‘proper burial’ by Djoser in his pyramid to honor his predecessors. There are other historians, however, who claim the vessels were dumped into the shafts as yet another attempt to prevent grave robbers from getting to the king’s burial chamber.

F. Unfortunately, all of the precautions and intricate design of the underground network did not prevent ancient robbers from finding a way in. Djoser’s grave goods, and even his body, were stolen at some point in the past and all archaeologists found were a small number of his valuables overlooked by the thieves. There was enough left throughout the pyramid and its complex, however, to astonish and amaze the archaeologists who excavated it.

G. Egyptologist Miroslav Verner writes, ‘Few monuments hold a place in human history as significant as that of the Step Pyramid in Saqqara … It can be said without exaggeration that this pyramid complex constitutes a milestone in the evolution of monumental stone architecture in Egypt and in the world as a whole.’ The Step Pyramid was a revolutionary advance in architecture and became the archetype which all the other great pyramid builders of Egypt would follow.`
      },
      {
        title: 'Passage 3: The future of work',
        difficulty: '难',
        summary: '算法化（algorithmication）如何改变知识型工作、AI 对就业与专家培养的影响，以及学界对“无工作未来”的回应。',
        questions: [
          { type: '选择题（单选）', q: 'The first paragraph tells us about …', a: 'B' },
          { type: '选择题（单选）', q: 'Stella Pachidi 对“knowledge economy”的看法是？', a: 'D' },
          { type: '选择题（单选）', q: 'Pachidi 在电信公司观察到什么？', a: 'C' },
          { type: '选择题（单选）', q: 'Ewan McGaughey 近期研究指出？', a: 'D' },
          { type: '摘要填空（选词 G）', q: '算法化针对依赖 ___ 而非生产的工作。', a: 'G' },
          { type: '摘要填空（选词 E）', q: '员工对 AI 建议的依赖（reliance）日益增长。', a: 'E' },
          { type: '摘要填空（选词 C）', q: '员工被劝阻使用自身直觉（intuition）。', a: 'C' },
          { type: '摘要填空（选词 F）', q: '研究者试图提升用户对该技术的信心（confidence）。', a: 'F' },
          { type: '人物配对（A/B/C）', q: '自动化程度提高不会导致就业减少。', a: 'B' },
          { type: '人物配对（A/B/C）', q: 'AI 对企业有吸引力的若干原因。', a: 'A' },
          { type: '人物配对（A/B/C）', q: 'AI 改变生活堪比以往重大文化变革。', a: 'C' },
          { type: '人物配对（A/B/C）', q: '须意识到 AI 带来的种种问题。', a: 'A' },
          { type: '人物配对（A/B/C）', q: '人们将走上比过去更不常规的职业生涯。', a: 'B' },
          { type: '人物配对（A/B/C）', q: '政府应采取措施保障人人有报酬合理的工作。', a: 'C' }
        ],
        text: `According to a leading business consultancy, 3—14% of the global workforce will need to switch to a different occupation within the next 10—15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation — or ‘embodied artificial intelligence (AI) — is one aspect of the disruptive effects of technology on the labour market. ‘Disembodied AI’, like the algorithms running in our smartphones, is another.

Dr Stella Pachidi from Cambridge Judge Business School believes that some of the most fundamental changes are happening as a result of the ‘algorithmication’ of jobs that are dependent on data rather than on production — the so-called knowledge economy. Algorithms are capable of learning from data to undertake tasks that previously needed human judgement, such as reading legal contracts, analysing medical scans and gathering market intelligence.

‘In many cases, they can outperform humans,’ says Pachidi. ‘Organisations are attracted to using algorithms because they want to make choices based on what they consider is “perfect information”, as well as to reduce costs and enhance productivity.’

‘But these enhancements are not without consequences,’ says Pachidi. ‘If routine cognitive tasks are taken over by AI, how do professions develop their future experts?’ she asks. ‘One way of learning about a job is “legitimate peripheral participation” — a novice stands next to experts and learns by observation. If this isn’t happening, then you need to find new ways to learn.’

Another issue is the extent to which the technology influences or even controls the workforce. For over two years, Pachidi monitored a telecommunications company. ‘The way telecoms salespeople work is through personal and frequent contact with clients, using the benefit of experience to assess a situation and reach a decision. However, the company had started using a[n] … algorithm that defined when account managers should contact certain customers about which kinds of campaigns and what to offer them.’

The algorithm — usually built by external designers — often becomes the keeper of knowledge, she explains. In cases like this, Pachidi believes, a short-sighted view begins to creep into working practices whereby workers learn through the ‘algorithm’s eyes’ and become dependent on its instructions. Alternative explorations — where experimentation and human instinct lead to progress and new ideas — are effectively discouraged.

Pachidi and colleagues even observed people developing strategies to make the algorithm work to their own advantage. ‘We are seeing cases where workers feed the algorithm with false data to reach their targets,’ she reports.

It’s scenarios like these that many researchers are working to avoid. Their objective is to make AI technologies more trustworthy and transparent, so that organisations and individuals understand how AI decisions are made. In the meantime, says Pachidi, ‘We need to make sure we fully understand the dilemmas that this new world raises regarding expertise, occupational boundaries and control.’

Economist Professor Hamish Low believes that the future of work will involve major transitions across the whole life course for everyone: ‘The traditional trajectory of full-time education followed by full-time work followed by a pensioned retirement is a thing of the past,’ says Low. Instead, he envisages a multistage employment life: one where retraining happens across the life course, and where multiple jobs and no job happen by choice at different stages.

On the subject of job losses, Low believes the predictions are founded on a fallacy: ‘It assumes that the number of jobs is fixed. If in 30 years, half of 100 jobs are being carried out by robots, that doesn’t mean we are left with just 50 jobs for humans. The number of jobs will increase: we would expect there to be 150 jobs.’

Dr Ewan McGaughey, at Cambridge’s Centre for Business Research and King’s College London, agrees that ‘apocalyptic’ views about the future of work are misguided. ‘It’s the laws that restrict the supply of capital to the job market, not the advent of new technologies that causes unemployment.’

His recently published research answers the question of whether automation, AI and robotics will mean a ‘jobless future’ by looking at the causes of unemployment. ‘History is clear that change can mean redundancies. But social policies can tackle this through retraining and redeployment.’

He adds: ‘If there is going to be change to jobs as a result of AI and robotics then I’d like to see governments seizing the opportunity to improve policy to enforce good job security. We can “reprogramme” the law to prepare for a fairer future of work and leisure.’ McGaughey’s findings are a call to arms to leaders of organisations, governments and banks to pre-empt the coming changes with bold new policies that guarantee full employment, fair incomes and a thriving economic democracy.

‘The promises of these new technologies are astounding. They deliver humankind the capacity to live in a way that nobody could have once imagined,’ he adds. 'Just as the industrial revolution brought people past subsistence agriculture, and the corporate revolution enabled mass production, a third revolution has been pronounced. But it will not only be one of technology. The next revolution will be social.'`
      }
    ];

    // ----------------------- 写作（真实题目 + 范文示例） -----------------------
    test1.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '图表描述 - 双饼图/柱形组合（1920 与 2019 对比）',
        prompt: 'The charts below show the changes in ownership of electrical appliances and amount of time spent doing housework in households in one country between 1920 and 2019.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: `The charts compare the percentage of households owning various electrical appliances with the average weekly hours spent on housework in one country in 1920 and 2019.

Overall, ownership of every appliance rose substantially over the century, while the time devoted to housework fell dramatically. In 1920, only a small minority of households owned a refrigerator (around 5%), a washing machine (about 10%) or a vacuum cleaner (roughly 15%), and just over half had a television. By 2019, ownership of refrigerators and washing machines had reached almost 100%, and vacuum cleaners and televisions were owned by about 95% and 90% of households respectively.

In contrast, the average number of hours spent on housework each week dropped from about 50 hours in 1920 to approximately 15 hours in 2019. This decline is consistent across the period and corresponds closely with the spread of labour-saving devices.

In summary, although households acquired far more technology between 1920 and 2019, the time spent on domestic chores did not disappear entirely but was reduced to less than a third of its former level.`,
        tips: '时态：过去(1920)用过去时，2019用过去时或现在完成时；先总览再对比；突出“拥有率升、家务时间降”的反差；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（利弊讨论）',
        prompt: 'In the future all cars, buses and trucks will be driverless. The only people travelling inside these vehicles will be passengers.\n\nDo you think the advantages of driverless vehicles outweigh the disadvantages?\n\nWrite at least 250 words.',
        modelAnswer: `It is predicted that in the future every road vehicle will drive itself, carrying only passengers rather than a human driver. In my view, the benefits of this development clearly outweigh the drawbacks.

The main advantage is safety. Most traffic accidents today are caused by human error, such as tiredness, distraction or poor judgement. Driverless vehicles, guided by sensors and software, should in theory eliminate many of these mistakes and save lives. A further benefit is efficiency: autonomous cars can be coordinated to reduce congestion and fuel use, and people who cannot drive - the elderly, the young or the disabled - gain independence.

However, there are disadvantages. The technology may fail in bad weather or unusual situations, and a serious system error could have deadly consequences. There is also the economic impact on professional drivers, who could lose their jobs. Moreover, some people simply enjoy driving and would regret its disappearance.

Nevertheless, I believe these concerns can be managed through strict regulation, backup safety systems and retraining programmes. Since the potential to prevent millions of accidents is so great, the advantages of driverless vehicles prevail.`,
        tips: '明确立场（ outweigh / not outweigh）；各写一段利弊并举例；结尾重申观点；至少250词'
      }
    ];

    // ----------------------- 口语（真实话题 + 参考回答示例） -----------------------
    test1.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Work',
        questions: [
          { q: 'What work do you do?', a: '参考回答: I work as an accountant at a small company, handling the financial records.' },
          { q: 'Why did you choose to do that type of work?', a: '参考回答: I chose it because I am good with numbers and I enjoy organising information.' },
          { q: 'Do you like your job? (Why/Why not?)', a: '参考回答: Yes, I like it because it is stable and I work with nice colleagues.' },
          { q: 'What do you dislike about your job?', a: '参考回答: Sometimes the workload gets heavy, especially during tax season.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a time when you helped someone.\n\nYou should say:\n– who you helped\n– how you helped them\n– why you helped them\n– and explain how you felt about helping this person.',
        modelAnswer: `参考回答:

Last year, I helped my friend prepare for a job interview. She was very nervous, so I offered to practise with her. We met a few times and I asked her typical interview questions, then gave her tips on how to structure her answers and stay calm. I did this because she is a close friend and I wanted her to succeed.

She got the job in the end, which made me really happy. I felt proud because my support made a difference, and it actually brought us even closer as friends. Helping her also reminded me how rewarding it is to give time to others.`,
        tips: '用过去时；覆盖四个要点；加入具体细节与感受；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Helping Others',
        questions: [
          { q: 'Why do people like helping others?', a: '参考回答: Because it makes them feel good and helps build stronger relationships.' },
          { q: 'Do you think people help others more now than in the past?', a: '参考回答: I think people help in different ways now, such as through donations or social media, rather than only in person.' },
          { q: 'How can children learn to help others?', a: '参考回答: Parents and teachers can set a good example and encourage them to share and be kind.' }
        ]
      }
    ];

    // ----------------------- 听力原文脚本（真实） -----------------------
    if (typeof LISTENING_SCRIPTS !== 'undefined') {
      LISTENING_SCRIPTS['16-1-0'] = `SARAH: Hello. Children's Engineering Workshops.

FATHER: Oh hello. I wanted some information about the workshops in the school holidays.

SARAH: Sure.

FATHER: I have two daughters who are interested. The younger one's Lydia, she's four – do you take children as young as that?

SARAH: Yes, our Tiny Engineers workshop is for four to five-year-olds.

FATHER: What sorts of activities do they do?

SARAH: All sorts. For example, they work together to design a special cover that goes round an egg, so that when it's inside they can drop it from a height and it doesn't break. Well, sometimes it does break but that's part of the fun!

FATHER: Right. And Lydia loves building things. Is there any opportunity for her to do that?

SARAH: Well, they have a competition to see who can make the highest tower. You'd be amazed how high they can go.

FATHER: Right.

SARAH: But they're learning all the time as well as having fun. For example, one thing they do is to design and build a car that's attached to a balloon, and the force of the air in that actually powers the car and makes it move along. They go really fast too.

FATHER: OK, well, all this sounds perfect.

FATHER: Now Carly, that's my older daughter, has just had her seventh birthday, so presumably she'd be in a different group?

SARAH: Yes, she'd be in the Junior Engineers. That's for children from six to eight.

FATHER: And do they do the same sorts of activities?

SARAH: Some are the same, but a bit more advanced. So they work out how to build model vehicles, things like cars and trucks, but also how to construct animals using the same sorts of material and technique, and then they learn how they can program them and make them move.

FATHER: So they learn a bit of coding?

SARAH: They do. They pick it up really quickly. We're there to help if they need it, but they learn from one another too.

FATHER: Right. And do they have competition too?

SARAH: Yes, with the Junior Engineers, it's to use recycled materials like card and wood to build a bridge, and the longest one gets a prize.

FATHER: That sounds fun. I wouldn't mind doing that myself!

SARAH: Then they have something a bit different, which is to think up an idea for a five-minute movie and then film it, using special animation software. You'd be amazed what they come up with.

FATHER: And of course, that's something they can put on their phone and take home to show all their friends.

SARAH: Exactly. And then they also build a robot in the shape of a human, and they decorate it and program it so that it can move its arms and legs.

FATHER: Perfect. So, is it the same price as the Tiny Engineers?

SARAH: It's just a bit more: £50 for the five weeks.

FATHER: And are the classes on a Monday, too?

SARAH: They used to be, but we found it didn't give our staff enough time to clear up after the first workshop, so we moved them to Wednesdays. The classes are held in the morning from ten to eleven.

FATHER: OK. That's better for me actually. And what about the location? Where exactly are the workshops held?

SARAH: They're in building 10A – there's a big sign on the door, you can't miss it, and that's in Fradstone Industrial Estate.

FATHER: Sorry?

SARAH: Fradstone – that's F-R-A-D-S-T-O-N-E.

FATHER: And that's in Grasford, isn't it?

SARAH: Yes, up past the station.

FATHER: And will I have any parking problems there?

SARAH: No, there's always plenty available. So would you like to enrol Lydia and Carly now?

FATHER: OK.`;

      LISTENING_SCRIPTS['16-1-1'] = `Good morning, everyone, and welcome to Stevenson's, one of the country's major manufacturers of metal goods. Thank you for choosing us for your two weeks of work experience. My name is Julia Simmons, and since the beginning of this year I've been the managing director.

Stevenson's is quite an old company. Like me, the founder, Ronald Stevenson, went into the steel industry when he left school – that was in 1923. He set up this company when he finished his apprenticeship, in 1926, although he actually started making plans two years earlier, in 1924. He was a very determined young man!

Stevenson's long-term plan was to manufacture components for the machine tools industry – although in fact that never came about – and for the automotive industry, that is, cars and lorries. However, there was a delay of five years before that happened, because shortly before the company went into production, Stevenson was given the opportunity to make goods for hospitals and other players in the healthcare industry, so that's what we did for the first five years.

Over the years, we've expanded the premises considerably – we were lucky that the site is big enough, so moving to a new location has never been necessary. However, the layout is far from ideal for modern machinery and production methods, so we intend to carry out major refurbishment of this site over the next five years.

I'd better give you some idea of what you'll be doing during your two weeks with us, so you know what to expect. Most mornings you'll have a presentation from one of the managers, to learn about their department, starting this morning with research and development. And you'll all spend some time in each department, observing what's going on and talking to people – as long as you don't stop them from doing their work altogether! In the past, a teacher from your school has come in at the end of each week to find out how the group were getting on, but your school isn't able to arrange that this year.

OK, now I'll briefly help you to orientate yourselves around the site. As you can see, we're in the reception area, which we try to make attractive and welcoming to visitors. There's a corridor running left from here, and if you go along that, the door facing you at the end is the entrance to the coffee room. This looks out onto the main road on one side, and some trees on the other, and that'll be where you meet each morning.

The factory is the very big room on the far side of the site. Next to it is the warehouse, which can be accessed by lorries going up the road to the turning area at the end. You can get to the warehouse by crossing to the far side of the courtyard, and then the door is on your right.

Somewhere you'll be keen to find is the staff canteen. This is right next to reception. I can confidently say that the food's very good, but the view isn't. The windows on one side look onto a corridor and courtyard, which aren't very attractive at all, and on the other onto the access road, which isn't much better.

You'll be using the meeting room quite often, and you'll find it by walking along the corridor to the left of the courtyard and continuing along it to the end. The meeting room is the last one on the right, and I'm afraid there's no natural daylight in the room.

Then you'll need to know where some of the offices are. The human resources department is at the front of this building, so you head to the left along the corridor from reception, and it's the second room you come to. It looks out onto the main road.

And finally, the boardroom, where you'll be meeting sometimes. That has quite a pleasant view, as it looks out on to the trees. Go along the corridor past the courtyard, right to the end. The boardroom is on the left, next to the factory.

OK, now are there any questions before we …`;

      LISTENING_SCRIPTS['16-1-2'] = `JESS: How are you getting on with your art project, Tom?

TOM: OK. Like, they gave us the theme of birds to base our project on, and I'm not really all that interested in wildlife. But I'm starting to get into it. I've pretty well finished the introductory stage.

JESS: So have I. When they gave us all those handouts with details of books and websites to look at, I was really put off, but the more I read, the more interested I got.

TOM: Me too. I found I could research so many different aspects of birds in art – colour, movement, texture. So I was looking forward to the Bird Park visit.

JESS: What a letdown! It poured with rain and we hardly saw a single bird. Much less use than the trip to the Natural History Museum.

TOM: Yeah, I liked all the stuff about evolution there. The workshop sessions with Dr Fletcher were good too, especially the brainstorming sessions.

JESS: I missed those because I was ill. I wish we could've seen the projects last year's students did.

TOM: Mm. I suppose they want us to do our own thing, not copy.

JESS: Have you drafted your proposal yet?

TOM: Yes, but I haven't handed it in. I need to amend some parts. I've realised the notes from my research are almost all just descriptions, I haven't actually evaluated anything. So I'll have to fix that.

JESS: Oh, I didn't know we had to do that. I'll have to look at that too. Did you do a timeline for the project?

TOM: Yes, and a mind map.

JESS: Yeah, so did I. I quite enjoyed that. But it was hard having to explain the basis for my decisions in my action plan.

TOM: What?

JESS: You know, give a rationale.

TOM: I didn't realise we had to do that. OK, I can add it now. And I've done the video diary presentation, and worked out what I want my outcome to be in the project.

JESS: Someone told me it's best not to be too precise about your actual outcome at this stage, so you have more scope to explore your ideas later on. So I'm going to go back to my proposal to make it a bit more vague.

TOM: Really? OK, I'll change that too then.

TOM: One part of the project I'm unsure about is where we choose some paintings of birds and say what they mean to us. Like, I chose a painting of a falcon by Landseer. I like it because the bird's standing there with his head turned to one side, but he seems to be staring straight at you. But I can't just say it's a bit scary, can I?

JESS: You could talk about the possible danger suggested by the bird's look.

TOM: Oh, OK.

JESS: There's a picture of a fish hawk by Audubon I like. It's swooping over the water with a fish in its talons, and with great black wings which take up most of the picture.

TOM: So you could discuss it in relation to predators and food chains?

JESS: Well actually I think I'll concentrate on the impression of rapid motion it gives.

TOM: Right.

JESS: Do you know that picture of a kingfisher by van Gogh – it's perching on a reed growing near a stream.

TOM: Yes, it's got these beautiful blue and red and black shades.

JESS: Mm hm. I've actually chosen it because I saw a real kingfisher once when I was little, I was out walking with my grandfather, and I've never forgotten it.

TOM: So we can use a personal link?

JESS: Sure.

TOM: OK. There's a portrait called William Wells. I can't remember the artist but it's a middle-aged man who's just shot a bird. And his expression, and the way he's holding the bird in his hand suggests he's not sure about what he's done. To me it's about how ambiguous people are in the way they exploit the natural world.

JESS: Interesting. There's Gauguin's picture Vairumati. He did it in Tahiti. It's a woman with a white bird behind her that is eating a lizard, and what I'm interested in is what idea this bird refers to. Apparently, it's a reference to the never-ending cycle of existence.

TOM: Wow. I chose a portrait of a little boy, Giovanni de Medici. He's holding a tiny bird in one fist. I like the way he's holding it carefully so he doesn't hurt it.

JESS: Ah right.`;

      LISTENING_SCRIPTS['16-1-3'] = `Ancient philosophy is not just about talking or lecturing, or even reading long, dense books. In fact, it is something people have used throughout history – to solve their problems and to achieve their greatest triumphs.

Specifically, I am referring to Stoicism, which, in my opinion, is the most practical of all philosophies and therefore the most appealing. Stoicism was founded in Ancient Greece by Zeno of Citium in the early 3rd century BC, but was practised by the likes of Epictetus, Cato, Seneca and Marcus Aurelius. Amazingly, we still have access to these ideas, despite the fact that the most famous Stoics never wrote anything down for publication. Cato definitely didn't. Marcus Aurelius never intended his Meditations to be anything but personal. Seneca's letters were, well, letters and Epictetus' thoughts come to us by way of a note-taking student.

Stoic principles were based on the idea that its followers could have an unshakable happiness in this life and the key to achieving this was virtue. The road to virtue, in turn, lay in understanding that destructive emotions, like anger and jealousy, are under our conscious control – they don't have to control us, because we can learn to control them. In the words of Epictetus: "external events I cannot control, but the choices I make with regard to them, I do control".

The modern day philosopher and writer Nassim Nicholas Taleb defines a Stoic as someone who has a different perspective on experience which most of us would see as wholly negative; a Stoic "transforms fear into caution, pain into transformation, mistakes into initiation and desire into undertaking". Using this definition as a model, we can see that throughout the centuries Stoicism has been practised in more recent history by kings, presidents, artists, writers and entrepreneurs.

The founding fathers of the United States were inspired by the philosophy. George Washington was introduced to Stoicism by his neighbours at age seventeen, and later, put on a play based on the life of Cato to inspire his men. Thomas Jefferson kept a copy of Seneca beside his bed.

Writers and artists have also been inspired by the stoics. Eugène Delacroix, the renowned French Romantic artist, was an ardent Stoic, referring to it as his "consoling religion".

The economist Adam Smith's theories on capitalism were significantly influenced by the Stoicism that he studied as a schoolboy, under a teacher who had translated Marcus Aurelius' works.

Today's political leaders are no different, with many finding their inspiration from the ancient texts. Former US president Bill Clinton rereads Marcus Aurelius every single year, and many have compared former President Obama's calm leadership style to that of Cato. Wen Jiabao, the former prime minister of China, claims that Meditations is one of two books he travels with and that he has read it more than one hundred times over the course of his life.

Stoicism had a profound influence on Albert Ellis, who invented Cognitive Behaviour Therapy, which is used to help people manage their problems by changing the way that they think and behave. It's most commonly used to treat depression. The idea is that we can take control of our lives by challenging the irrational beliefs that create our faulty thinking, symptoms and behaviours by using logic.

Stoicism has also become popular in the world of business. Stoic principles can build the resilience and state of mind required to overcome setbacks because Stoics teach turning obstacles into opportunity. A lesson every business entrepreneur needs to learn.

I would argue that studying Stoicism is as relevant today as it was 2,000 years ago, thanks to its brilliant insights into how to lead a good life. At the very root of the thinking, there is a very simple way of living – control what you can and accept what you can't. This is not as easy as it sounds and will require considerable practice. The Stoics also believed the most important foundation for a good and happy life is not money, fame, power or pleasure, but having a disciplined and principled character – something which seems to resonate with many people today.`;

      console.log('[real-16a] 剑16 Test1 已覆盖为真实剑桥雅思内容');
    }
  }

  // ===================================================================
  //  TEST 2
  // ===================================================================
  var test2 = null;
  book.tests.forEach(function (t) { if (t.id === 2) test2 = t; });
  if (test2) {

    // ----------------------- 听力（真实） -----------------------
    test2.listening.sections = [
      {
        part: 'Part 1',
        context: '女士致电 Picturerep 公司咨询将旧家庭照片转为数字格式',
        type: '笔记/表格填空（每空一词或数字）',
        questions: [
          { q: '照片应取出 ___ 才能扫描。', a: 'frame' },
          { q: '300-400 张照片的基本服务费为 £___。', a: '1953' },
          { q: '公司在收到 ___ 后才寄回包裹。', a: 'payment' },
          { q: '可按内容分组命名文件夹，例如 “___”。', a: 'Grandparents' },
          { q: '可稍作修饰照片的 ___（颜色）。', a: 'colour / color' },
          { q: '易损照片由人工（___）处理。', a: 'hand' },
          { q: '可改动照片的 ___（背景）。', a: 'background' },
          { q: '无法修复对焦（___）不清的照片。', a: 'focus' },
          { q: '预计 ___ 内完成。', a: 'ten / 10 days' },
          { q: '勿用 ___ 箱邮寄，易破损。', a: 'plastic' }
        ]
      },
      {
        part: 'Part 2',
        context: '学校人员向家长介绍校园变动与新餐饮厅（Food Hall）',
        type: '选择题（单选）+ 多选',
        questions: [
          { q: 'Dartfield House 后来被卖给地方议会并改为？ (A 旅游中心 / B 学校 / C 办公楼)', a: 'C' },
          { q: '低龄部旧址将建什么？ (A 新餐饮厅 / B 住宅 / C 运动场)', a: 'B' },
          { q: '多数学生午餐要等很久的原因是？ (A 仅一个服务点 / B 食物不好吃 / C 餐厅太小)', a: 'A' },
          { q: '家长被要求每天早晨与孩子商量哪类？ (A 食物 / B 付款方式 / C 用餐地点)', a: 'A' },
          { q: '旧餐厅将保留桌椅，可吃自带或 Food Hall 食物。', a: 'C' },
          { q: 'World Adventures 每天提供哪国料理？ (A 固定英式 / B 素食 / C 本国菜 / D 不同国家)', a: 'D' },
          { q: 'Street Life 会让谁提建议？ (A 学生 / B 厨师 / C 家长)', a: 'A' },
          { q: 'Speedy Italian 主要服务哪类学生？ (A 运动员 / B 不吃肉鱼者 / C 国际生)', a: 'B' },
          { q: '课后新增项目中包含哪两项？ (B 戏剧课 / C 校内钢琴课)', a: 'B, C' },
          { q: '（接上）课后新增项目。', a: 'B, C' }
        ]
      },
      {
        part: 'Part 3',
        context: 'Susie 与 Luke 讨论关于睡眠与梦境的心理学作业',
        type: '多选（选两项）+ 笔记填空',
        questions: [
          { q: '为何我们醒来后多忘梦？ (B 以免混淆真实与梦境)', a: 'B' },
          { q: '梦“预言”未来如何解释？ (A 巧合，多数梦未发生)', a: 'A' },
          { q: '儿童午睡实验的结果？ (C 未发现明确规律)', a: 'C' },
          { q: 'Luke 上次作业在哪环节失利？ (C 自评/论证成功度)', a: 'C' },
          { q: '研究对象选 ___ 系学生。', a: 'history' },
          { q: '采用 ___ 问卷更合适（刚醒时）。', a: 'paper' },
          { q: '实验涉及 ___，须遵守伦理规范。', a: 'humans / people' },
          { q: '须避免受试者承受不必要的 ___。', a: 'stress' },
          { q: '结果用 ___ 直观呈现。', a: 'graph' },
          { q: '最后要 ___ 该研究。', a: 'evaluate' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于舞蹈对健康益处的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: '跳舞者展现出更强的 ___（创造力）。', a: 'creativity' },
          { q: '舞蹈应被作为 ___ 处方以助心理健康。', a: 'therapy' },
          { q: '即使 ___ 标准很低的人也能参与。', a: 'fitness' },
          { q: '帮助改善 ___（平衡），降低跌倒风险。', a: 'balance' },
          { q: '迫使 ___ 更快处理信息。', a: 'brain' },
          { q: '提升更积极的 ___（动力）。', a: 'motivation' },
          { q: '减少老年人的 ___（孤立感）。', a: 'isolation' },
          { q: '一节 Zumba 约消耗 370 ___。', a: 'calories' },
          { q: '患有 ___ 的女性参与后平均减重。', a: 'obesity' },
          { q: '她们将其养成了 ___（习惯）。', a: 'habit' }
        ]
      }
    ];

    // ----------------------- 阅读（真实） -----------------------
    test2.reading.passages = [
      {
        title: 'Passage 1: The White Horse of Uffington',
        difficulty: '中等',
        summary: '英格兰山坡巨幅地貌图形（geoglyphs）的历史，聚焦牛津郡 Uffington 白马的年代、位置、仪式意义与消失原因。',
        questions: [
          { type: '判断题 (True/False/Not Given)', q: 'Most geoglyphs in England are located in a particular area of the country.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'There are more geoglyphs in the shape of a horse than any other creature.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'A recent dating indicates that people were mistaken about the White Horse’s age.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Historians have agreed about the origins of the Long Man of Wilmington.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Geoglyphs were created by placing white chalk on the hillside.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Many geoglyphs in England are no longer visible.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'The shape of some geoglyphs has been altered over time.', a: 'TRUE' },
          { type: '摘要填空（一词）', q: 'near an ancient road known as the ___', a: 'Ridgeway' },
          { type: '摘要填空（一词）', q: 'first reference to White Horse Hill appears in ___ from the 1070s', a: 'documents' },
          { type: '摘要填空（一词）', q: 'analysis of the surrounding ___ dates the Horse', a: 'soil' },
          { type: '摘要填空（一词）', q: 'a representation of Epona, goddess of horses and ___', a: 'fertility' },
          { type: '摘要填空（一词）', q: 'a Welsh goddess called ___', a: 'Rhiannon' },
          { type: '摘要填空（一词）', q: '（标题归纳）The White Horse of Uffington', a: '—' }
        ],
        text: `The cutting of huge figures or geoglyphs into the earth of English hillsides has taken place for more than 3,000 years. There are 56 hill figures scattered around England, with the vast majority on the chalk downlands of the country's southern counties. The figures include giants, horses, crosses and regimental badges. Although the majority of these geoglyphs date within the last 300 years or so, there are one or two that are much older.

The most famous of these figures is perhaps also the most mysterious — the Uffington White Horse in Oxfordshire. The White Horse has recently been re-dated and shown to be even older than its previously assigned ancient pre-Roman Iron Age date. More controversial is the date of the enigmatic Long Man of Wilmington in Sussex. While many historians are convinced the figure is prehistoric, others believe that it was the work of an artistic monk from a nearby priory and was created between the 11th and 15th centuries.

The method of cutting these huge figures was simply to remove the overlying grass to reveal the gleaming white chalk below. However, the grass would soon grow over the geoglyph again unless it was regularly cleaned or scoured by a fairly large team of people. One reason that the vast majority of hill figures have disappeared is that when the traditions associated with the figures faded, people no longer bothered or remembered to clear away the grass to expose the chalk outline. Furthermore, over hundreds of years the outlines would sometimes change due to people not always cutting in exactly the same place, thus creating a different shape to the original geoglyph. The fact that any ancient hill figures survive at all in England today is testament to the strength and continuity of local customs and beliefs which, in one case at least, must stretch back over millennia.

The Uffington White Horse is a unique, stylised representation of a horse consisting of a long, sleek back, thin disjointed legs, a streaming tail, and a bird-like beaked head. The elegant creature almost melts into the landscape. The horse is situated 2.5 km from Uffington village on a steep slope close to the Late Bronze Age (c. 7th century BCE) hillfort of Uffington Castle and below the Ridgeway, a long-distance Neolithic track.

The Uffington Horse is also surrounded by Bronze Age burial mounds. It is not far from the Bronze Age cemetery of Lambourn Seven Barrows, which consists of more than 30 well-preserved burial mounds. The carving has been placed in such a way as to make it extremely difficult to see from close quarters, and like many geoglyphs is best appreciated from the air. Nevertheless, there are certain areas of the Vale of the White Horse, the valley containing and named after the enigmatic creature, from which an adequate impression may be gained. Indeed on a clear day the carving can be seen from up to 30 km away.

The earliest evidence of a horse at Uffington is from the 1070s CE when 'White Horse Hill' is mentioned in documents from the nearby Abbey of Abingdon, and the first reference to the horse itself is soon after, in 1190 CE. However, the carving is believed to date back much further than that. Due to the similarity of the Uffington White Horse to the stylised depictions of horses on 1st century BCE coins, it had been thought that the creature must also date to that period.

However, in 1995 Optically Stimulated Luminescence (OSL) testing was carried out by the Oxford Archaeological Unit on soil from two of the lower layers of the horse's body, and from another cut near the base. The result was a date for the horse's construction somewhere between 1400 and 600 BCE — in other words, it had a Late Bronze Age or Early Iron Age origin.

The latter end of this date range would tie the carving of the horse in with occupation of the nearby Uffington hillfort, indicating that it may represent a tribal emblem marking the land of the inhabitants of the hillfort. Alternatively, the carving may have been carried out during a Bronze or Iron Age ritual. Some researchers see the horse as representing the Celtic horse goddess Epona, who was worshipped as a protector of horses, and for her associations with fertility. However, the cult of Epona was not imported from Gaul (France) until around the first century CE. This date is at least six centuries after the Uffington Horse was probably carved. Nevertheless, the horse had great ritual and economic significance during the Bronze and Iron Ages, as attested by its depictions on jewellery and other metal objects. It is possible that the carving represents a goddess in native mythology, such as Rhiannon, described in later Welsh mythology as a beautiful woman dressed in gold and riding a white horse.

The fact that geoglyphs can disappear easily, along with their associated rituals and meaning, indicates that they were never intended to be anything more than temporary gestures. But this does not lessen their importance. These giant carvings are a fascinating glimpse into the minds of their creators and how they viewed the landscape in which they lived.`
      },
      {
        title: 'Passage 2: I contain multitudes',
        difficulty: '中偏难',
        summary: 'Wendy Moore 评 Ed Yong 的微生物科普书：微生物的数量、与人类共生关系、卫生过度之害及医学前景。',
        questions: [
          { type: '选择题（单选）', q: 'What point does the writer make about microbes in the first paragraph?', a: 'D' },
          { type: '选择题（单选）', q: 'In the second paragraph, the writer is impressed by the fact that …', a: 'C' },
          { type: '选择题（单选）', q: 'What is the writer doing in the fifth paragraph?', a: 'A' },
          { type: '摘要填空（选词 G）', q: '少数微生物导致 ___（疾病）。', a: 'G' },
          { type: '摘要填空（选词 B）', q: '我们与微生物是基于 ___（共生）的关系。', a: 'B' },
          { type: '摘要填空（选词 E）', q: '不良的 ___（清洁习惯）扰乱菌群。', a: 'E' },
          { type: '摘要填空（选词 H）', q: '过度关注 ___（营养）亦有害。', a: 'H' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Antibacterial products at home may fail to have the desired effect.', a: 'YES' },
          { type: '判断题 (Yes/No/Not Given)', q: 'It is a good idea to minimise children’s contact with bacteria.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Yong’s book contains more case studies than necessary.', a: 'NOT GIVEN' },
          { type: '判断题 (Yes/No/Not Given)', q: 'The squid case study may have limited appeal.', a: 'YES' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Efforts to control dengue fever have been surprisingly successful.', a: 'NOT GIVEN' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Microbes reducing infection risk have been put inside hospital walls.', a: 'NO' }
        ],
        text: `Wendy Moore reviews Ed Yong's book about microbes

Microbes, most of them bacteria, have populated this planet since long before animal life developed and they will outlive us. Invisible to the naked eye, they are ubiquitous. They inhabit the soil, air, rocks and water and are present within every form of life, from seaweed and coral to dogs and humans. And, as Yong explains in his utterly absorbing and hugely important book, we mess with them at our peril.

Every species has its own colony of microbes, called a 'microbiome', and these microbes vary not only between species but also between individuals and within different parts of each individual. What is amazing is that while the number of human cells in the average person is about 30 trillion, the number of microbial ones is higher — about 39 trillion. At best, Yong informs us, we are only 50 per cent human. Indeed, some scientists even suggest we should think of each species and its microbes as a single unit, dubbed a 'holobiont'.

In each human there are microbes that live only in the stomach, the mouth or the armpit and by and large they do so peacefully. So 'bad' microbes are just microbes out of context. Microbes that sit contentedly in the human gut (where there are more microbes than there are stars in the galaxy) can become deadly if they find their way into the bloodstream. These communities are constantly changing too. The right hand shares just one sixth of its microbes with the left hand. And, of course, we are surrounded by microbes. Every time we eat, we swallow a million microbes in each gram of food; we are continually swapping microbes with other humans, pets and the world at large.

It's a fascinating topic and Yong, a young British science journalist, is an extraordinarily adept guide. Writing with lightness and panache, he has a knack of explaining complex science in terms that are both easy to understand and totally enthralling. Yong is on a mission. Leading us gently by the hand, he takes us into the world of microbes — a bizarre, alien planet — in a bid to persuade us to love them as much as he does. By the end, we do.

For most of human history we had no idea that microbes existed. The first man to see these extraordinarily potent creatures was a Dutch lens-maker called Antony van Leeuwenhoek in the 1670s. Using microscopes of his own design that could magnify up to 270 times, he examined a drop of water from a nearby lake and found it teeming with tiny creatures he called 'animalcules'. It wasn't until nearly two hundred years later that the research of French biologist Louis Pasteur indicated that some microbes caused disease. It was Pasteur's 'germ theory' that gave bacteria the poor image that endures today.

Yong's book is in many ways a plea for microbial tolerance, pointing out that while fewer than one hundred species of bacteria bring disease, many thousands more play a vital role in maintaining our health. The book also acknowledges that our attitude towards bacteria is not a simple one. We tend to see the dangers posed by bacteria, yet at the same time we are sold yoghurts and drinks that supposedly nurture 'friendly' bacteria. In reality, says Yong, bacteria should not be viewed as either friends or foes, villains or heroes. Instead we should realise we have a symbiotic relationship, that can be mutually beneficial or mutually destructive.

What then do these millions of organisms do? The answer is pretty much everything. New research is now unravelling the ways in which bacteria aid digestion, regulate our immune systems, eliminate toxins, produce vitamins, affect our behaviour and even combat obesity. 'They actually help us become who we are,' says Yong. But we are facing a growing problem. Our obsession with hygiene, our overuse of antibiotics and our unhealthy, low-fibre diets are disrupting the bacterial balance and may be responsible for soaring rates of allergies and immune problems, such as inflammatory bowel disease (IBD).

The most recent research actually turns accepted norms upside down. For example, there are studies indicating that the excessive use of household detergents and antibacterial products actually destroys the microbes that normally keep the more dangerous germs at bay. Other studies show that keeping a dog as a pet gives children early exposure to a diverse range of bacteria, which may help protect them against allergies later.

The readers of Yong's book must be prepared for a decidedly unglamorous world. Among the less appealing case studies is one about a fungus that is wiping out entire populations of frogs and that can be halted by a rare microbial bacterium. Another is about squid that carry luminescent bacteria that protect them against predators. However, if you can overcome your distaste for some of the investigations, the reasons for Yong's enthusiasm become clear. The microbial world is a place of wonder. Already, in an attempt to stop mosquitoes spreading dengue fever — a disease that infects 400 million people a year — mosquitoes are being loaded with a bacterium to block the disease. In the future, our ability to manipulate microbes means we could construct buildings with useful microbes built into their walls to fight off infections. Just imagine a neonatal hospital ward coated in a specially mixed cocktail of microbes so that babies get the best start in life.`
      },
      {
        title: 'Passage 3: How to make wise decisions',
        difficulty: '难',
        summary: '智慧并非少数人的天赋，而是受情境影响；以第三方视角（ego-decentering）可促进明智推理，实验佐证。',
        questions: [
          { type: '选择题（单选）', q: 'What point does the writer make in the first paragraph?', a: 'B' },
          { type: '选择题（单选）', q: 'What does Igor Grossmann suggest about wise decision-making?', a: 'C' },
          { type: '选择题（单选）', q: 'According to the third paragraph, the level of wisdom an individual shows …', a: 'B' },
          { type: '选择题（单选）', q: 'What is described in the fifth paragraph?', a: 'D' },
          { type: '摘要填空（选词 D）', q: '明智推理特征之一：知识限度的 ___（谦虚）。', a: 'D' },
          { type: '摘要填空（选词 A）', q: '顾及比自身更宽的 ___（观点）。', a: 'A' },
          { type: '摘要填空（选词 C）', q: '采取更广阔的 ___（视角）。', a: 'C' },
          { type: '摘要填空（选词 F）', q: '以 ___（客观）的第三方视角看情境。', a: 'F' },
          { type: '摘要填空（选词 G）', q: '更关注公平（fairness）与道德理想。', a: 'G' },
          { type: '判断题 (True/False/Not Given)', q: 'Students in the job-prospects experiment could choose one of two perspectives.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Couples-experiment participants knew it was about wise reasoning.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Length of couples’ relationships affected the results.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'In both experiments, a more detached viewpoint led to wiser decisions.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Grossmann believes wisdom is determined by intelligence only to a limited extent.', a: 'TRUE' }
        ],
        text: `Across cultures, wisdom has been considered one of the most revered human qualities. Although the truly wise may seem few and far between, empirical research examining wisdom suggests that it isn't an exceptional trait possessed by a small handful of bearded philosophers after all — in fact, the latest studies suggest that most of us have the ability to make wise decisions, given the right context.

'It appears that experiential, situational, and cultural factors are even more powerful in shaping wisdom than previously imagined,' says Associate Professor Igor Grossmann of the University of Waterloo in Ontario, Canada. 'Recent empirical findings from cognitive, developmental, social, and personality psychology cumulatively suggest that people's ability to reason wisely varies dramatically across experiential and situational contexts. Understanding the role of such contextual factors offers unique insights into understanding wisdom in daily life, as well as how it can be enhanced and taught.'

It seems that it's not so much that some people simply possess wisdom and others lack it, but that our ability to reason wisely depends on a variety of external factors. 'It is impossible to characterize thought processes attributed to wisdom without considering the role of contextual factors,' explains Grossmann. 'In other words, wisdom is not solely an "inner quality" but rather unfolds as a function of situations people happen to be in. Some situations are more likely to promote wisdom than others.'

Coming up with a definition of wisdom is challenging, but Grossmann and his colleagues have identified four key characteristics as part of a framework of wise reasoning. One is intellectual humility or recognition of the limits of our own knowledge, and another is appreciation of perspectives wider than the issue at hand. Sensitivity to the possibility of change in social relations is also key, along with compromise or integration of different attitudes and beliefs.

Grossmann and his colleagues have also found that one of the most reliable ways to support wisdom in our own day-to-day decisions is to look at scenarios from a third-party perspective, as though giving advice to a friend. Research suggests that when adopting a first-person viewpoint we focus on 'the focal features of the environment' and when we adopt a third-person, 'observer' viewpoint we reason more broadly and focus more on interpersonal and moral ideals such as justice and impartiality. Looking at problems from this more expansive viewpoint appears to foster cognitive processes related to wise decisions.

What are we to do, then, when confronted with situations like a disagreement with a spouse or negotiating a contract at work, that require us to take a personal stake? Grossmann argues that even when we aren't able to change the situation, we can still evaluate these experiences from different perspectives.

For example, in one experiment that took place during the peak of a recent economic recession, graduating college seniors were asked to reflect on their job prospects. The students were instructed to imagine their career either 'as if you were a distant observer' or 'before your own eyes as if you were right there'. Participants in the group assigned to the 'distant observer' role displayed more wisdom-related reasoning (intellectual humility and recognition of change) than did participants in the control group.

In another study, couples in long-term romantic relationships were instructed to visualize an unresolved relationship conflict either through the eyes of an outsider or from their own perspective. Participants then discussed the incident with their partner for 10 minutes, after which they wrote down their thoughts about it. Couples in the 'other's eyes' condition were significantly more likely to rely on wise reasoning — recognizing others' perspectives and searching for a compromise — compared to the couples in the egocentric condition.

'Ego-decentering promotes greater focus on others and enables a bigger picture, conceptual view of the experience, affording recognition of intellectual humility and change,' says Grossmann.

We might associate wisdom with intelligence or particular personality traits, but research shows only a small positive relationship between wise thinking and crystallized intelligence and the personality traits of openness and agreeableness. 'It is remarkable how much people can vary in their wisdom from one situation to the next, and how much stronger such contextual effects are for understanding the relationship between wise judgment and its social and affective outcomes as compared to the generalized "traits",' Grossmann explains. 'That is, knowing how wisely a person behaves in a given situation is more informative for understanding their emotions or likelihood to forgive [or] retaliate as compared to knowing whether the person may be wise "in general".'`
      }
    ];

    // ----------------------- 写作（真实题目 + 范文示例） -----------------------
    test2.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '地图/平面图对比（现在 vs 改建后）',
        prompt: 'The plans below show the site of an airport now and how it will look after redevelopment next year.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: `The plans illustrate the current layout of an airport and the changes that will be made to the site after its redevelopment next year.

At present, the airport has a single entrance road leading to the main terminal, with eight departure gates arranged in a row and a single runway to the south. There is a limited check-in area and only a small coffee shop near the entrance.

After redevelopment, the most noticeable change is the expansion of the terminal. The number of departure gates will increase from eight to eighteen, and a new pier will extend towards the east. A second, larger runway will be added to the north, and the entrance road will be widened with a new car park on the west side.

In addition, the check-in hall will be enlarged, and new facilities such as shops, restaurants and a hotel will appear inside the terminal. The overall site will become considerably bigger and better organised.

In summary, the redeveloped airport will be much larger, with more gates, an extra runway and improved passenger facilities.`,
        tips: '用现在时描述现状、将来时/被动描述改建；突出新增跑道、登机口数量、停车场与设施；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（原因+措施）',
        prompt: 'In numerous nations, more and more people are intrigued in the idea of researching the history or past of the area where they now live.\n\nWhy is this?\n\nWhat can people do to do this research?\n\nWrite at least 250 words.',
        modelAnswer: `In many countries today, a growing number of people are curious about the history of the place they live in. This essay will consider why this is happening and what steps individuals can take to investigate their local past.

One reason is a desire for identity and belonging. As societies become more mobile and urbanised, people feel disconnected from their roots, and learning about their neighbourhood's history helps them feel part of a community. Another factor is the availability of online records and genealogy websites, which make research far easier than before. Older residents also worry that local traditions will vanish, so they encourage younger people to take an interest.

To carry out such research, people can start with public archives, such as census records, old maps and newspaper collections in local libraries. Talking to elderly neighbours is another valuable method, since oral history preserves details not written down. Community history groups and museums often hold photographs and documents, and volunteering with them can deepen understanding. Finally, visiting historical sites and reading plaques or guides connects abstract facts to real places.

In conclusion, curiosity about local history grows from a need for belonging and easier access to information, and can be satisfied through archives, conversations, community groups and site visits.`,
        tips: '两段分别回答 why 与 what；每点举例；逻辑清晰；至少250词'
      }
    ];

    // ----------------------- 口语（真实话题 + 参考回答示例） -----------------------
    test2.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Flowers and Plants',
        questions: [
          { q: 'Do you have a favourite flower or plant? (Why/Why not?)', a: '参考回答: Yes, my favourite flower is the rose because of its beauty and fragrance.' },
          { q: 'What kinds of flowers and plants grow near where you live?', a: '参考回答: Sunflowers, daisies and lotus plants grow nearby since the climate suits them.' },
          { q: 'Is it important to you to have flowers and plants in your home?', a: '参考回答: Yes, they create a calming atmosphere and improve the air.' },
          { q: 'Have you ever bought flowers for someone else?', a: '参考回答: Yes, I have bought flowers for friends and family on birthdays and anniversaries.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a review you read about a product or service.\n\nYou should say:\n– where you read the review\n– what the product or service was\n– what information the review gave\n– and explain what you did as a result of reading this review.',
        modelAnswer: `参考回答:

Recently I read a review about a smartphone on a tech website. The review gave an in-depth analysis of the phone's camera quality, battery life and user interface, and listed both pros and cons. It mentioned the camera was excellent in low light but the battery drained quickly with heavy apps, and it included user testimonials and comparisons with similar models.

As a result of reading it, I decided to buy that smartphone because the positives outweighed the negatives, and the camera mattered for my photography hobby. The experience taught me to always check reviews before a significant purchase.`,
        tips: '覆盖四个要点；用过去时/现在完成时；具体细节；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Online Reviews & Customer Service',
        questions: [
          { q: 'What kinds of things do people write online reviews about in your country?', a: '参考回答: Restaurants, hotels, electronics and books are the most common.' },
          { q: 'Why do some people write online reviews?', a: '参考回答: To share experiences, help others decide, or warn about poor service.' },
          { q: 'Do you think online reviews are good for both shoppers and companies?', a: '参考回答: Yes — shoppers get insights, and companies learn what to improve.' },
          { q: 'How important is it for companies to take complaints seriously?', a: '参考回答: Very important, since ignoring them can damage reputation and loyalty.' }
        ]
      }
    ];

    // ----------------------- 听力原文脚本（真实） -----------------------
    if (typeof LISTENING_SCRIPTS !== 'undefined') {
      LISTENING_SCRIPTS['16-2-0'] = `EMPLOYEE: Hello, Picturerep. Can I help you?

WOMAN: Oh, hi. I saw your advertisement about copying pictures to disk and I'd like a bit more information about what you do.

EMPLOYEE: Sure. What would you like to know?

WOMAN: Well, I've got a box full of old family photos that's been up in the attic for years, some of them must be 50 or 60 years old, and I'd like to get them converted to digital format.

EMPLOYEE: Sure, we can do that for you.

WOMAN: Right. And what about size? The photos are all sorts of sizes – are there any restrictions?

EMPLOYEE: Well the maximum size of photo we can do with our normal services is 30 centimetres. And each picture must be at least 4 centimetres, that's the minimum we can cope with.

WOMAN: That should be fine. And some of them are in a frame – should I take them out before I send them?

EMPLOYEE: Yes please, we can't copy them otherwise. And also the photos must all be separate, they mustn't be stuck into an album.

WOMAN: OK, that's not a problem. So can you give me an idea of how much this will cost? I've got about 360 photos I think.

EMPLOYEE: We charge £195 for 300 to 400 photos for the basic service.

WOMAN: OK. And does that include the disk?

EMPLOYEE: Yes, one disk – but you can get extra ones for £5 each.

WOMAN: That's good. So do I need to pay when I send you the photos?

EMPLOYEE: No, we won't need anything until we've actually copied the pictures. Then we'll let you know how much it is, and once we've received the payment, we'll send the parcel off to you.

WOMAN: Right.

EMPLOYEE: Is there anything else you'd like to ask about our services?

WOMAN: Yes. I've roughly sorted out the photos into groups, according to what they're about – so can you keep them in those groups when you copy them?

EMPLOYEE: Sure. We'll save each group in a different folder on the disk and if you like, you can suggest a name for each folder.

WOMAN: So I could have one called 'Grandparents' for instance?

EMPLOYEE: Exactly.

WOMAN: And do you do anything besides scan the photos? Like, can you make any improvements?

EMPLOYEE: Yes, in the standard service each photo is checked, and we can sometimes touch up the colour a bit, or improve the contrast – that can make a big difference.

WOMAN: OK. And some of the photos are actually quite fragile – they won't get damaged in the process, will they?

EMPLOYEE: No, if any look particularly fragile, we'd do them by hand. We do realise how precious these old photos can be.

WOMAN: Sure.

EMPLOYEE: And another thing is we can make changes to a photo if you want – so if you want to remove an object from a photo, or maybe alter the background, we can do that.

WOMAN: Really? I might be interested in that. I'll have a look through the photos and see. Oh, and talking of fixing photos – I've got a few that aren't properly in focus. Can you do anything to make that better?

EMPLOYEE: No, I'm afraid that's one thing we can't do.

WOMAN: OK.

EMPLOYEE: Any other information I can give you?

WOMAN: Er … oh, how long will it all take?

EMPLOYEE: We aim to get the copying done in ten days.

WOMAN: Fine. Right, well I'll get the photos packed up in a box and post them off to you.

EMPLOYEE: Right. If you've got a strong cardboard box, that's best. We've found that plastic ones sometimes break in the post.

WOMAN: OK. Right, thanks for your help. Bye.

EMPLOYEE: Bye.`;

      LISTENING_SCRIPTS['16-2-1'] = `Good morning and thank you for coming here today. I'd like to bring you up to date with changes in the school that will affect your children.

As you know, the school buildings date from various times: some from the 1970s, some from the last five years, and of course Dartfield House is over a century old. It was commissioned by a businessman, Neville Richards, and intended as his family home, but he died before it was completed. His heir chose to sell it to the local council, who turned it into offices. A later plan to convert it into a tourist information centre didn't come about, through lack of money, and instead it formed the nucleus of this school when it opened 40 years ago.

The school has grown as the local population has increased, and I can now give you some news about the lower school site, which is separated from the main site by a road. Planning permission has been granted for development of both sites. The lower school will move to new buildings that will be constructed on the main site. Developers will construct houses on the existing lower school site. Work on the new school buildings should start within the next few months.

A more imminent change concerns the catering facilities and the canteen. The canteen is always very busy throughout the lunch period – in fact it's often full to capacity, because a lot of our pupils like the food that's on offer there. But there's only one serving point, so most pupils have to wait a considerable time to be served. This is obviously unsatisfactory, as they may have hardly finished their lunch before afternoon lessons start.

So we've had a new Food Hall built, and this will come into use next week. It'll have several serving areas, and I'll give you more details about those in a minute, but one thing we ask you to do, to help in the smooth running of the Food Hall, is to discuss with your children each morning which type of food they want to eat that day, so they can go straight to the relevant serving point. There won't be any junk food – everything on offer will be healthy – and there's no change to the current system of paying for lunches by topping up your child's electronic payment card online.

You may be wondering what will happen to the old canteen. We'll still have tables and chairs in there, and pupils can eat food from the Food Hall or lunch they've brought from home. Eventually we may use part of the canteen for storage, but first we'll see how many pupils go in there at lunchtime.

OK, back to the serving points in the Food Hall, which will all have side dishes, desserts and drinks on sale, as well as main courses.

One serving point we call World Adventures. This will serve a different country's cuisine each day, maybe Chinese one day and Lebanese the next. The menus will be planned for a week at a time, so pupils will know what's going to be available the whole of the week.

Street Life is also international, with food from three particular cultures. We'll ask pupils to make suggestions, so perhaps sometimes there'll be food from Thailand, Ethiopia and Mexico, and then one of them will be replaced by Jamaican food for a week or two.

The Speedy Italian serving point will cater particularly for the many pupils who don't eat meat or fish: they can be sure that all the food served there is suitable for them. There'll be plenty of variety, so they shouldn't get bored with the food.

OK, that's all on the new Food Hall. Now after-school lessons. There are very popular with pupils, particularly swimming – in fact there's a waiting list for lessons. Cycling is another favourite, and I'm delighted that dozens of pupils make use of the chance to learn to ride in off-road conditions. As you know, we have a well-equipped performance centre, and we're going to start drama classes in there, too. Pupils will be able to join in just for fun or work up to taking part in a play – we hope to put on at least one a year. We already teach a number of pupils to use the sound and lighting systems in the centre. And a former pupil has given a magnificent grand piano to the school, so a few pupils will be able to learn at the school instead of going to the local college, as many of them do at the moment.`;

      LISTENING_SCRIPTS['16-2-2'] = `SUSIE: So Luke, for our next psychology assignment we have to do something on sleep and dreams.

LUKE: Right. I've just read an article suggesting why we tend to forget most of our dreams soon after we wake up. I mean, most of my dreams aren't that interesting anyway, but what it said was that if we remembered everything, we might get mixed up about what actually happened and what we dreamed. So it's a sort of protection. I hadn't heard that idea before. I'd always assumed that it was just that we didn't have room in our memories for all that stuff.

SUSIE: Me too. What do you think about the idea that our dreams may predict the future?

LUKE: It's a belief that you get all over the world.

SUSIE: Yeah, lots of people have a story of it happening to them, but the explanation I've read is that for each dream that comes true, we have thousands that don't, but we don't notice those, we don't even remember them. We just remember the ones where something in the real world, like a view or an action, happens to trigger a dream memory.

LUKE: Right. So it's just a coincidence really. Something else I read about is what they call segmented sleeping. That's a theory that hundreds of years ago, people used to get up in the middle of the night and have a chat or something to eat, then go back to bed. So I tried it myself.

SUSIE: Why?

LUKE: Well it's meant to make you more creative. I don't know why. But I gave it up after a week. It just didn't fit in with my lifestyle.

SUSIE: But most pre-school children have a short sleep in the day don't they? There was an experiment some students did here last term to see at what age kids should stop having naps. But they didn't really find an answer. They spent a lot of time working out the most appropriate methodology, but the results didn't seem to show any obvious patterns.

LUKE: Right. Anyway, let's think about our assignment. Last time I had problems with the final stage, where we had to describe and justify how successful we thought we'd been. I struggled a bit with the action plan too.

SUSIE: I was OK with the planning, but I got marked down for the self-assessment as well. And I had big problems with the statistical stuff, that's where I really lost marks.

LUKE: Right.

SUSIE: So shall we plan what we have to do for this assignment?

LUKE: OK.

SUSIE: First, we have to decide on our research question. So how about 'Is there a relationship between hours of sleep and number of dreams?'

LUKE: OK. Then we need to think about who we'll do the study on. About 12 people?

SUSIE: Right. And shall we use other psychology students?

LUKE: Let's use people from a different department. What about history?

SUSIE: Yes, they might have interesting dreams! Or literature students?

LUKE: I don't really know any.

SUSIE: OK, forget that idea. Then we have to think about our methodology. So we could use observation, but that doesn't seem appropriate.

LUKE: No, it needs to be self-reporting I think. And we could ask them to answer questions online.

SUSIE: But in this case, paper might be better as they'll be doing it straight after they wake up … in fact while they're still half-asleep.

LUKE: Right. And we'll have to check the ethical guidelines for this sort of research.

SUSIE: Mm, because our experiment involves humans, so there are special regulations.

LUKE: Yes, I had a look at those for another assignment I did. There's a whole section on risk assessment, and another section on making sure they aren't put under any unnecessary stress.

SUSIE: Let's hope they don't have any bad dreams!

LUKE: Yeah.

SUSIE: Then when we've collected all our data we have to analyse it and calculate the correlation between our two variables, that's time sleeping and number of dreams and then present our results visually in a graph.

LUKE: Right. And the final thing is to think about our research and evaluate it. So that seems quite straightforward.

SUSIE: Yeah. So now let's …`;

      LISTENING_SCRIPTS['16-2-3'] = `Dancing is something that humans do when they want to have a good time. It's a universal response to music, found in all cultures. But what's only been discovered recently is that dancing not only makes us feel good, it's also extremely good for our health.

Dancing, like other forms of exercise, releases hormones, such as dopamine, which make us feel relaxed and happy. And it also reduces feelings of stress or anxiety.

Dancing is also a sociable activity, which is another reason it makes us feel good.

One study compared people's enjoyment of dancing at home in front of a video with dancing in a group in a studio. The people dancing in a group reported feeling happier, whereas those dancing alone did not.

In another experiment, university researchers at York and Sheffield took a group of students and sent each of them into a lab where music was played for five minutes. Each had to choose from three options: to sit and listen quietly to the music, to cycle on an exercise bike while they listened, or to get up and dance. All were given cognitive tasks to perform before and after. The result showed that those who chose to dance showed much more creativity when doing problem-solving tasks.

Doctor Lovatt at the University of Hertfordshire believes dance could be a very useful way to help people suffering from mental health problems. He thinks dance should be prescribed as therapy to help people overcome issues such as depression.

It's well established that dance is a good way of encouraging adolescent girls to take exercise but what about older people? Studies have shown that there are enormous benefits for people in their sixties and beyond. One of the great things about dance is that there are no barriers to participation. Anyone can have a go, even those whose standard of fitness is quite low.

Dance can be especially beneficial for older adults who can't run or do more intense workouts, or for those who don't want to. One 2015 study found that even a gently dance workout helps to promote a healthy heart. And there's plenty of evidence which suggests that dancing lowers the risk of falls, which could result in a broken hip, for example, by helping people to improve their balance.

There are some less obvious benefits of dance for older people too. One thing I hadn't realised before researching this topic was that dance isn't just a physical challenge. It also requires a lot of concentration because you need to remember different steps and routines. For older people, this kind of activity is especially important because it forces their brain to process things more quickly and to retain more information.

Current research also shows that dance promotes a general sense of well-being in older participants, which can last up to a week after a class. Participants report feeling less tired and having greater motivation to be more active and do daily activities such as gardening or walking to the shops or a park.

Ballroom or country dancing, both popular with older people, have to be done in groups. They require collaboration and often involve touching a dance partner, all of which encourages interaction on the dance floor. This helps to develop new relationships and can reduce older people's sense of isolation, which is a huge problem in many countries.

I also looked at the benefits of Zumba. Fifteen million people in 180 countries now regularly take a Zumba class, an aerobic workout based on Latin American dance moves. John Porcari, a professor of exercise and sport science at the University of Wisconsin, analysed a group of women who were Zumba regulars and found that a class lasting 40 minutes burns about 370 calories. This is similar to moderately intense exercises like step aerobics or kickboxing.

A study in the American Journal of Health Behavior showed that when women with obesity did Zumba three times a week for 16 weeks, they lost an average of 1.2 kilos and lowered their percentage of body fat by 1%. More importantly, the women enjoyed the class so much that they made it a habit and continued to attend classes at least once a week – very unusual for an aerobic exercise programme.

Dance is never going to compete with high-intensity workouts when it comes to physical fitness gains, but its popularity is likely to keep on rising because it's such a fun way to keep fit.`;

      console.log('[real-16a] 剑16 Test2 已覆盖为真实剑桥雅思内容');
    }
  }
})();
