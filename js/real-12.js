/**
 * 剑12 Test 1 & Test 2 剑桥雅思内容覆盖补丁
 * 目的：将 data.js（含 data-extra*.js）中 AI 生成的"原创练习"内容替换为剑桥雅思12 Test 1、Test 2 练习题目。
 *
 * 数据核对来源（公开权威解析，含原题答案键）：
 *   听力原文/答案 — ielts-hub (Cambridge IELTS 12 Test 01/02 Transcript)、luckyielts (完整答案键)、
 *                    ieltsday / ieltstrainingonline (题目册题干与选项)
 *   阅读原文/题目/答案 — ieltsprogress (Cork / Collecting as a Hobby / What's the purpose of gaining knowledge? /
 *                        The risks agriculture faces in developing countries / The Lost City /
 *                        The Benefits of Being Bilingual，含完整原文与答案)
 *   写作题目 — engnovate / ieltszone (Cambridge 12 Academic Writing Test 1 & 2)
 *   口语话题 — ieltspractices.com (Cambridge 12 IELTS Speaking Test 1 & 2)
 *
 * 注意：
 *   - 原文/题目为真实考题内容（转载自上述公开解析站，待与原版书核对答案键）。
 *   - 范文与口语"参考回答"为学习用示例文本（非官方范文），仅供参考。
 *   - 部分旧版书籍（如剑12）个别题目在第三方站点存在"Test 编号"标注不一致的情况，本文件已按官方书内结构核对
 *     （Test 1 阅读 = Cork / Collecting as a Hobby / What's the purpose of gaining knowledge?；
 *      Test 2 阅读 = The risks agriculture faces in developing countries / The Lost City / The Benefits of Being Bilingual）。
 * 本文件须放在所有数据文件（data.js + data-extra*.js）之后、app.js 之前加载。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;
  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 12) book = b; });
  if (!book) return;

  // 若 data 中尚未包含该 test（tests 为空），则创建骨架，保证覆盖后可被渲染与校验
  function ensureTest(id) {
    var t = null;
    book.tests.forEach(function (x) { if (x.id === id) t = x; });
    if (!t) {
      t = {
        id: id,
        title: 'Test ' + id,
        listening: { title: '听力 Listening', intro: '共4部分，40题，约30分钟', sections: [] },
        reading: { passages: [] },
        writing: { tasks: [] },
        speaking: { parts: [] }
      };
      book.tests.push(t);
    }
    return t;
  }

  // ===================== 剑12 TEST 1 =====================
  (function () {
    var test = ensureTest(1);

    // ---------- 听力（真实） ----------
    test.listening.sections = [
      {
        part: 'Part 1',
        context: '游客致电旅游咨询处，询问适合家庭的湖上出游活动（游船、农场、骑行）',
        type: '笔记填空（每空一词及/或一个数字）',
        questions: [
          { q: 'Can take photos of the ___ that surround the lake.', a: 'mountains' },
          { q: 'Visit can include a 40-minute ride on a ___ .', a: 'horse' },
          { q: 'Visitors can walk in the farm’s ___ by the lake.', a: 'garden(s)' },
          { q: '___ is available at extra cost (at the farm).', a: 'lunch' },
          { q: 'A ___ is provided (with the cruise ticket, no extra charge).', a: 'map' },
          { q: 'Cycling trail only suitable for cyclists who have some ___ .', a: 'experience' },
          { q: 'Bikes can be hired from ___ (near the Cruise Ship Terminal).', a: 'Ratchesons' },
          { q: 'Cyclists need a ___ (can be hired from the bike place).', a: 'helmet' },
          { q: 'There are no ___ or accommodation in the area.', a: 'shops' },
          { q: 'Total cost for whole family of cruise and farm visit: $ ___ .', a: '267' }
        ]
      },
      {
        part: 'Part 2',
        context: '餐厅经理向新入职的厨房助理介绍工作情况与规定',
        type: '选择题（单选）+ 配对',
        questions: [
          { q: '11 According to the manager, what do most people like about the job of kitchen assistant? (A the variety of work / B the friendly atmosphere / C the opportunities for promotion)', a: 'A' },
          { q: '12 The manager is concerned about some of the new staff’s ___ . (A jewellery / B hair styles / C shoes)', a: 'A' },
          { q: '13 The manager says the day is likely to be busy because ___ . (A it is a public holiday / B the head chef is absent / C the restaurant is almost fully booked)', a: 'C' },
          { q: '14 Only kitchen staff who are 18 or older may use ___ . (A the waste disposal unit / B the electric mixer / C the meat slicer)', a: 'C' },
          { q: '15&16 Which TWO things can make the job stressful? (A follow orders immediately / B the kitchen gets very hot / C may not be able to take a break / D do overtime / E physically demanding)', a: 'A, E' },
          { q: '17 Joy Parkins — responsibility? (box A–F: A training courses / B food stocks / C first aid / D breakages / E staff discounts / F timetables)', a: 'F' },
          { q: '18 David Field — responsibility? (box A–F)', a: 'C' },
          { q: '19 Dexter Wills — responsibility? (box A–F)', a: 'D' },
          { q: '20 Mike Smith — responsibility? (box A–F)', a: 'B' }
        ]
      },
      {
        part: 'Part 3',
        context: '两名学生 Trudie 与 Stewart 讨论关于"公共图书馆"的论文',
        type: '选择题（单选）+ 笔记填空',
        questions: [
          { q: '21 What will be the main topic of their paper? (A how services are organised in different countries / B how changes in society are reflected in public libraries / C how funding has changed)', a: 'B' },
          { q: '22 They agree one disadvantage of free digitalised books is that ___ . (A they take long to read / B they can be difficult to read / C they are generally old)', a: 'C' },
          { q: '23 Stewart expects future libraries will ___ . (A maintain their traditional function / B become community centres / C no longer contain any books)', a: 'C' },
          { q: '24 whether the library has a ___ of its own', a: 'budget' },
          { q: '25 how it is affected by laws regarding all aspects of ___', a: 'employment' },
          { q: '26 how the design needs to take the ___ of customers into account', a: 'safety' },
          { q: '27 what ___ is required in case of accidents', a: 'insurance' },
          { q: '28 why a famous person’s ___ is located in the library', a: 'diary' },
          { q: '29 whether it has a ___ of local organisations', a: 'database' },
          { q: '30 how it is different from a library in a ___', a: 'museum' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于四种商业价值观（协作、勤奋、创意、卓越）可能引发反效果的讲座',
        type: '笔记填空（每空不超过两词）',
        questions: [
          { q: '31 Many business values can result in ___ .', a: 'damage' },
          { q: '32 Senior managers must understand and deal with potential ___ .', a: 'side effects' },
          { q: '33 On a training course the speaker’s team had to build a ___ .', a: 'bridge' },
          { q: '34 Other teams experienced ___ from trying to collaborate.', a: 'confusion' },
          { q: '35 Sales of a ___ were poor because of collaboration.', a: 'smartphone' },
          { q: '36 Hard work may be a bad use of company ___ .', a: 'resources' },
          { q: '37 “Lazy” here refers to people who avoid tasks that are ___ .', a: 'unnecessary' },
          { q: '38 An advert for a ___ was memorable but failed to boost sales.', a: 'chocolate bar' },
          { q: '39 Creativity should respond to a particular ___ .', a: 'problem' },
          { q: '40 Pioneers had a far higher ___ than followers.', a: 'market share' }
        ]
      }
    ];

    // ---------- 阅读（真实） ----------
    test.reading.passages = [
      {
        title: 'Passage 1: Cork',
        difficulty: '中等',
        summary: '软木（cork）这种来自栓皮栎的天然材料的特点、采收方式，以及面对替代瓶塞时的环保优势。',
        questions: [
          { type: '判断题 (True/False/Not Given)', q: 'The cork oak has the thickest bark of any living tree.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Scientists have developed a synthetic cork with the same cellular structure as natural cork.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Individual cork oak trees must be left for 25 years between the first and second harvest.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Cork bark should be stripped in dry atmospheric conditions.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'The only way to remove the bark from cork oak trees is by hand.', a: 'TRUE' },
          { type: '笔记填空（每空一词）', q: 'Aluminium screw caps do not affect the ___ of the bottle contents.', a: 'taste' },
          { type: '笔记填空（每空一词）', q: 'Aluminium screw caps are ___ to produce.', a: 'cheaper' },
          { type: '笔记填空（每空一词）', q: 'Aluminium screw caps are ___ to use.', a: 'convenient' },
          { type: '笔记填空（每空一词）', q: 'Cork stoppers suit the ___ of quality products.', a: 'image' },
          { type: '笔记填空（每空一词）', q: 'Cork is a ___ material that can be recycled.', a: 'sustainable' },
          { type: '笔记填空（每空一词）', q: 'Cork stoppers can be easily ___ .', a: 'recycled' },
          { type: '笔记填空（每空一词）', q: 'Cork forests aid ___ .', a: 'biodiversity' },
          { type: '笔记填空（每空一词）', q: 'Cork forests stop ___ happening.', a: 'desertification' }
        ],
        text: `Cork – the thick bark of the cork oak tree (Quercus suber) – is a remarkable material. It is tough, elastic, buoyant, and fire-resistant, and suitable for a wide range of purposes. It has also been used for millennia: the ancient Egyptians sealed their sarcophagi (stone coffins) with cork, while the ancient Greeks and Romans used it for anything from beehives to sandals.

And the cork oak itself is an extraordinary tree. Its bark grows up to 20 cm in thickness, insulating the tree like a coat wrapped around the trunk and branches and keeping the inside at a constant 20°C all year round. Developed most probably as a defence against forest fires, the bark of the cork oak has a particular cellular structure – with about 40 million cells per cubic centimetre – that technology has never succeeded in replicating. The cells are filled with air, which is why cork is so buoyant. It also has an elasticity that means you can squash it and watch it spring back to its original size and shape when you release the pressure.

Cork oaks grow in a number of Mediterranean countries, including Portugal, Spain, Italy, Greece and Morocco. They flourish in warm, sunny climates where there is a minimum of 400 millimetres of rain per year, and no more than 800 millimetres. Like grape vines, the trees thrive in poor soil, putting down deep roots in search of moisture and nutrients. Southern Portugal's Alentejo region meets all of these requirements, which explains why, by the early 20th century, this region had become the world's largest producer of cork, and why today it accounts for roughly half of all cork production around the world.

Most cork forests are family-owned. Many of these family businesses, and indeed many of the trees themselves, are around 200 years old. Cork production is, above all, an exercise in patience. From the planting of a cork sapling to the first harvest takes 25 years, and a gap of approximately a decade must separate harvests from an individual tree. And for top-quality cork, it's necessary to wait a further 15 or 20 years. You even have to wait for the right kind of summer's day to harvest cork. If the bark is stripped on a day when it's too cold – or when the air is damp – the tree will be damaged.

Cork harvesting is a very specialised profession. No mechanical means of stripping cork bark has been invented, so the job is done by teams of highly skilled workers. First, they make vertical cuts down the bark using small sharp axes, then lever it away in pieces as large as they can manage. The most skilful cork-strippers prise away a semi-circular husk that runs the length of the trunk from just above ground level to the first branches. It is then dried on the ground for about four months, before being taken to factories, where it is boiled to kill any insects that might remain in the cork. Over 60% of cork then goes on to be made into traditional bottle stoppers, with most of the remainder being used in the construction trade. Corkboard and cork tiles are ideal for thermal and acoustic insulation, while granules of cork are used in the manufacture of concrete.

Recent years have seen the end of the virtual monopoly of cork as the material for bottle stoppers, due to concerns about the effect it may have on the contents of the bottle. This is caused by a chemical compound called 2,4,6-trichloroanisole (TCA), which forms through the interaction of plant phenols, chlorine and mould. The tiniest concentrations – as little as three or four parts to a trillion – can spoil the taste of the product contained in the bottle. The result has been a gradual yet steady move first towards plastic stoppers and, more recently, to aluminium screw caps. These substitutes are cheaper to manufacture and, in the case of screw caps, more convenient for the user.

The classic cork stopper does have several advantages, however. Firstly, its traditional image is more in keeping with that of the type of high quality goods with which it has long been associated. Secondly – and very importantly – cork is a sustainable product that can be recycled without difficulty. Moreover, cork forests are a resource which supports local biodiversity, and prevents desertification in the regions where they are planted. So, given the current concerns about environmental issues, the future of this ancient material once again looks promising.`
      },
      {
        title: 'Passage 2: Collecting as a Hobby',
        difficulty: '中等',
        summary: '从心理学角度探讨人们收藏的种种动机（赚钱、社交、寻求目标、教育价值、掌控感、彰显个性等）。',
        questions: [
          { type: '句子填空（每空一词）', q: 'The writer mentions collecting ___ as an example of collecting in order to make money.', a: 'antiques' },
          { type: '句子填空（每空一词）', q: 'Collectors may get a feeling of ___ from buying and selling items.', a: 'triumph' },
          { type: '句子填空（每空一词）', q: 'Collectors’ clubs provide opportunities to share ___ .', a: 'information' },
          { type: '句子填空（每空一词）', q: 'Collectors’ clubs offer ___ with people who have similar interests.', a: 'contact' },
          { type: '句子填空（每空一词）', q: 'Collecting sometimes involves a life-long ___ for a special item.', a: 'hunt' },
          { type: '句子填空（每空一词）', q: 'Searching for something particular may stop people feeling their life is completely ___ .', a: 'aimless' },
          { type: '句子填空（每空一词）', q: 'Stamp collecting may be ___ because it provides facts about different countries.', a: 'educational' },
          { type: '句子填空（每空一词）', q: '___ tends to be mostly a male hobby.', a: 'trainspotting' },
          { type: '判断题 (True/False/Not Given)', q: 'The number of people buying dolls has grown over the centuries.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Sixteenth century European dolls were normally made of wax and porcelain.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Arranging a stamp collection by the size of the stamps is less common than other methods.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Someone who collects unusual objects may want others to think he or she is also unusual.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Collecting gives a feeling that other hobbies are unlikely to inspire.', a: 'TRUE' }
        ],
        text: `Collecting must be one of the most varied of human activities, and it's one that many of us psychologists find fascinating.

Many forms of collecting have been dignified with a technical name: an archtophilist collects teddy bears, a philatelist collects postage stamps, and a deltiologist collects postcards. Amassing hundreds or even thousands of postcards, chocolate wrappers or whatever, takes time, energy and money that could surely go to much more productive use. And yet there are millions of collectors around the world. Why do they do it?

There are the people who collect because they want to make money – this could be called an instrumental reason for collecting; that is, collecting as a means to an end. They'll look for, say, antiques that they can buy cheaply and expect to be able to sell at a profit. But there may well be a psychological element, too – buying cheap and selling dear can give the collector a sense of triumph. And as selling online is so easy, more and more people are joining in.

Many collectors collect to develop their social life, attending meetings of a group of collectors and exchanging information on items. This is a variant on joining a bridge club or a gym, and similarly brings them into contact with like-minded people. Another motive for collecting is the desire to find something special, or a particular example of the collected item, such as a rare early recording by a particular singer.

Some may spend their whole lives in a hunt for this. Psychologically, this can give a purpose to a life that otherwise feels aimless. There is a danger, though, that if the individual is ever lucky enough to find what they're looking for, rather than celebrating their success, they may feel empty, now that the goal that drove them on has gone.

If you think about collecting postage stamps another potential reason for it – or, perhaps, a result of collecting – is its educational value. Stamp collecting opens a window to other countries, and to the plants, animals, or famous people shown on their stamps.

Similarly, in the 19th century, many collectors amassed fossils, animals and plants from around the globe, and their collections provided a vast amount of information about the natural world. Without those collections, our understanding would be greatly inferior to what it is.

In the past – and nowadays, too, though to a lesser extent – a popular form of collecting, particularly among boys and men, was trainspotting. This might involve trying to see every locomotive of a particular type, using published data that identifies each one, and ticking off each engine as it is seen. Trainspotters exchange information, these days often by mobile phone, so they can work out where to go to, to see a particular engine. As a by-product, many practitioners of the hobby become very knowledgeable about railway operations, or the technical specifications of different engine types.

Similarly, people who collect dolls may go beyond simply enlarging their collection, and develop an interest in the way that dolls are made, or the materials that are used. These have changed over the centuries from the wood that was standard in 16th century Europe, through the wax and porcelain of later centuries, to the plastics of today's dolls. Or collectors might be inspired to study how dolls reflect notions of what children like, or ought to like.

Not all collectors are interested in learning from their hobby, though, so what we might call a psychological reason for collecting is the need for a sense of control, perhaps as a way of dealing with insecurity. Stamp collectors, for instance, arrange their stamps in albums, usually very neatly, organising their collection according to certain commonplace principles – perhaps by country in alphabetical order, or grouping stamps by what they depict – people, birds, maps, and so on.

One reason, conscious or not, for what someone chooses to collect is to show the collector's individualism. Someone who decides to collect something as unexpected as dog collars, for instance, may be conveying their belief that they must be interesting themselves. And believe it or not, there is at least one dog collar museum in existence, and it grew out of a personal collection.

Of course, all hobbies give pleasure, but the common factor in collecting is usually passion: pleasure is putting it far too mildly. More than most other hobbies, collecting can be totally engrossing, and can give a strong sense of personal fulfilment. To non-collectors, it may appear an eccentric, if harmless, way of spending time, but potentially, collecting has a lot going for it.`
      },
      {
        title: 'Passage 3: What’s the purpose of gaining knowledge?',
        difficulty: '中偏难',
        summary: '借"以纵火牟利"课程引发的思考，探讨知识（如营销、消防）的"手段"与"目的"及其伦理边界。',
        context: '段落标题匹配（选 i–viii）：i 需高度投入的课程 / ii 有双重含义的课程名称 / iii 两个关键问题同等重要 / iv 在意外情境中应用理论 / v 学习的经济收益 / vi 出人意料的课程名称 / vii 不同结果对应不同名称 / viii 可能吸引错误类型的学生',
        questions: [
          { type: '段落标题匹配（A–F 选 i–viii）', q: 'Section A', a: 'vi' },
          { type: '段落标题匹配（A–F 选 i–viii）', q: 'Section B', a: 'viii' },
          { type: '段落标题匹配（A–F 选 i–viii）', q: 'Section C', a: 'ii' },
          { type: '段落标题匹配（A–F 选 i–viii）', q: 'Section D', a: 'iv' },
          { type: '段落标题匹配（A–F 选 i–viii）', q: 'Section E', a: 'iii' },
          { type: '段落标题匹配（A–F 选 i–viii）', q: 'Section F', a: 'vii' },
          { type: '摘要填空（每空不超过两词）', q: 'The “Arson for Profit” course is intended for undergraduates studying ___ .', a: 'fire science' },
          { type: '摘要填空（每空不超过两词）', q: 'They expect to become arson ___ .', a: 'investigators' },
          { type: '摘要填空（每空不超过两词）', q: 'The course helps them detect arson and find ___ of criminal intent.', a: 'evidence' },
          { type: '摘要填空（每空不超过两词）', q: 'leading to successful ___ in the courts.', a: 'prosecution' },
          { type: '判断题 (Yes/No/Not Given)', q: 'It is difficult to attract students onto courses that do not focus on a career.', a: 'NOT GIVEN' },
          { type: '判断题 (Yes/No/Not Given)', q: 'The “Arson for Profit” course would be useful for people intending to set fire to buildings.', a: 'YES' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Fire science courses are too academic to help people to be good at the job of firefighting.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'The writer’s fire science students provided a detailed definition of the purpose of their studies.', a: 'NO' }
        ],
        text: `A

'I would found an institution where any person can find instruction in any subject' That was the founder's motto for Cornell University, and it seems an apt characterization of the different university, also in the USA, where I currently teach philosophy. A student can prepare for a career in resort management, engineering, interior design, accounting, music, law enforcement, you name it. But what would the founders of these two institutions have thought of a course called 'Arson for Profit'? I kid you not: we have it on the books. Any undergraduates who have met the academic requirements can sign up for the course in our program in 'fire science'.

B

Naturally, the course is intended for prospective arson investigators, who can learn all the tricks of the trade for detecting whether a fire was deliberately set, discovering who did it, and establishing a chain of evidence for effective prosecution in a court of law. But wouldn't this also be the perfect course for prospective arsonists to sign up for? My point is not to criticize academic programs in fire science: they are highly welcome as part of the increasing professionalization of this and many other occupations. However, it's not unknown for a firefighter to torch a building. This example suggests how dishonest and illegal behavior, with the help of higher education, can creep into every aspect of public and business life.

C

I realized this anew when I was invited to speak before a class in marketing, which is another of our degree programs. The regular instructor is a colleague who appreciates the kind of ethical perspective I can bring as a philosopher. There are endless ways I could have approached this assignment, but I took my cue from the title of the course: 'Principles of Marketing'. It made me think to ask the students, 'Is marketing principled?' After all, a subject matter can have principles in the sense of being codified, having rules, as with football or chess, without being principled in the sense of being ethical. Many of the students immediately assumed that the answer to my question about marketing principles was obvious: no. Just look at the ways in which everything under the sun has been marketed; obviously, it need not be done in a principled (=ethical) fashion.

D

Is that obvious? I made the suggestion, which may sound downright crazy in light of the evidence, that perhaps marketing is by definition principled. My inspiration for this judgement is the philosopher Immanuel Kant, who argued that any body of knowledge consists of an end (or purpose) and a means.

E

Let us apply both the terms 'means' and 'end' to marketing. The students have signed up for a course in order to learn how to market effectively. But to what end? There seem to be two main attitudes toward that question. One is that the answer is obvious: the purpose of marketing is to sell things and to make money. The other attitude is that the purpose of marketing is irrelevant: each person comes to the program and course with his or her own plans, and these need not even concern the acquisition of marketing expertise as such. My proposal, which I believe would also be Kant's, is that neither of these attitudes captures the significance of the end to the means for marketing. A field of knowledge or a professional endeavor is defined by both the means and the end; hence both deserve scrutiny. Students need to study both how to achieve X, and also what X is.

F

It is at this point that 'Arson for Profit' becomes supremely relevant. That course is presumably all about means: how to detect and prosecute criminal activity. It is therefore assumed that the end is good in an ethical sense. When I ask fire science students to articulate the end, or purpose, of their field, they eventually generalize to something like, 'The safety and welfare of society,' which seems right. As we have seen, someone could use the very same knowledge of means to achieve a much less noble end, such as personal profit via destructive, dangerous, reckless activity. But we would not call that firefighting. We have a separate word for it: arson. Similarly, if you employed the 'principles of marketing' in an unprincipled way, you would not be doing marketing. We have another term for it: fraud. Kant gives the example of a doctor and a poisoner, who use the identical knowledge to achieve their divergent ends. We would say that one is practicing medicine, the other, murder.`
      }
    ];

    // ---------- 写作（真实题目 + 范文示例） ----------
    test.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '图表描述 - 柱状图',
        prompt: 'The bar chart below shows the percentage of Australian men and women in different age groups who did regular physical activity in 2010.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The bar chart illustrates the proportion of Australian males and females across six age groups who took part in regular physical activity in 2010.\n\nOverall, a larger share of women than men exercised regularly in most age brackets, and the gender gap was widest among middle-aged groups. Female participation peaked in the 55–64 category, whereas men’s figures were more stable and generally lower.\n\nAmong men, the youngest group (15–24) recorded the lowest rate of all, at just under 40%, before rising to around 42–45% for the 25–44 groups. After a slight dip for the 45–54 group, it climbed again and remained between roughly 43% and 46% for the older categories, with a small increase for those aged 65 and over. Women, by contrast, started higher (close to half in the 15–24 group) and continued to rise with age, reaching a peak of over 53% in the 55–64 band before falling slightly for the 65+ group.\n\nIn summary, although both sexes followed a broadly similar upward trend with age, women consistently reported higher levels of regular physical activity, and the difference nearly disappeared only among the oldest age group.',
        tips: '时态用一般过去时；先写总览(overview)再分述男女差异与年龄趋势；引用图中具体数据；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（讨论双方观点）',
        prompt: 'Some people believe that it is good to share as much information as possible in scientific research, business and the academic world. Others believe that some information is too important or too valuable to be shared freely.\n\nDiscuss both these views and give your own opinion.\n\nWrite at least 250 words.',
        modelAnswer: 'It is often argued that openness in research, business and academia is beneficial, while others contend that certain information is too valuable or sensitive to be made public. This essay will examine both positions and argue that a balanced approach, with sensible limits, is preferable.\n\nOn the one hand, sharing information freely can accelerate progress. In science, open data and published findings allow researchers worldwide to build on one another’s work, avoiding duplication and speeding up discoveries that benefit society, such as new medicines. In business, transparency about methods or market data can foster collaboration and trust among partners. Academia, too, rests on the free exchange of ideas through journals and conferences.\n\nOn the other hand, not all information should be unrestricted. Some knowledge – for example, military technology, personal data, or a company’s trade secrets – could cause harm or unfair loss if released. A business that gives away its unique research may lose its competitive edge, while individuals’ private information could be misused. Thus, protecting certain information is sometimes necessary for safety and fairness.\n\nIn my view, the two views are not opposed. Most information should circulate openly to promote progress, but a limited category – defined by law and ethics – must remain protected. With clear boundaries, society can enjoy the benefits of sharing without exposing itself to unnecessary risk.',
        tips: '讨论双方 + 明确个人立场；每方各写一段并举例；结构清晰、连接词自然；至少250词'
      }
    ];

    // ---------- 口语（真实话题 + 参考回答示例） ----------
    test.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Neighbours（邻居）',
        questions: [
          { q: 'Do you know many people who live near you?', a: '参考回答: Yes, I know a few of my neighbours quite well. We sometimes chat when we meet in the hallway or outside.' },
          { q: 'How often do you see them?', a: '参考回答: I see them almost every day, especially in the mornings or evenings when we come home from work.' },
          { q: 'Do you think it’s important to have good neighbours?', a: '参考回答: Yes, definitely. Good neighbours can help each other out and make you feel safer and more comfortable where you live.' },
          { q: 'What kinds of problems can people have with their neighbours?', a: '参考回答: Sometimes people argue about noise, parking spaces, or pets. These small issues can cause a lot of tension if they’re not handled well.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a place where you like to go to relax.\n\nYou should say:\n– where this place is\n– what you do there\n– who you go there with\n– and explain why you like this place.',
        modelAnswer: '参考回答:\n\nOne place I love to go to relax is a small park near my house. It’s about a ten-minute walk away, so it’s really convenient for me to go there whenever I feel stressed or just need some fresh air.\n\nWhen I’m there, I usually find a quiet bench under a big tree where I can read a book or listen to music. Sometimes, I just enjoy watching people walking their dogs or kids playing around. I don’t always go with someone – most of the time I prefer to go alone to clear my mind, but occasionally I go with my best friend if we want to chat and enjoy nature together.\n\nI really like this park because it’s peaceful and full of greenery. It helps me forget my worries and feel calm, especially after a busy day. The sound of birds and the fresh breeze make it feel like a little escape from the noise of the city. It’s a simple place, but spending even half an hour there always makes me feel relaxed and refreshed.',
        tips: '用现在时描述地点与活动；覆盖四个要点；加入感受细节；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Relaxation（放松）',
        questions: [
          { q: 'Why is it important for people to relax?', a: '参考回答: Because relaxing helps reduce stress and keeps people healthy, both physically and mentally. Without rest, people can become tired and less productive.' },
          { q: 'What are some ways people relax in your country?', a: '参考回答: People like going to parks, spending time with family, watching TV, or having a cup of tea with friends. Many also enjoy doing hobbies like gardening.' },
          { q: 'Do people have more free time than in the past?', a: '参考回答: I think it depends. Some people feel busier now because of work and technology, but others can find free time more easily thanks to modern conveniences.' }
        ]
      }
    ];
  })();

  // ===================== 剑12 TEST 2 =====================
  (function () {
    var test = ensureTest(2);

    // ---------- 听力（真实） ----------
    test.listening.sections = [
      {
        part: 'Part 1',
        context: '游客致电 Kenton 节日售票处，咨询节日期间各项活动安排',
        type: '笔记填空（每空一词及/或一个数字）',
        questions: [
          { q: 'Opening ceremony events will start at ___ .', a: '2.45' },
          { q: 'A ___ will perform at the opening ceremony.', a: 'band' },
          { q: 'There will be a performance of a ___ about Helen Tungate.', a: 'play' },
          { q: 'Helen Tungate was a ___ (born in Kenton 100 years ago).', a: 'scientist' },
          { q: 'Evening fireworks display is situated across the ___ .', a: 'river' },
          { q: 'Videos are about relationships children have with their ___ .', a: 'grandparents' },
          { q: 'The videos are shown at ___ House.', a: 'Handsworth' },
          { q: 'There will be a performance of ___ dances.', a: 'traditional' },
          { q: 'The dances are held in the ___ market in the town centre.', a: 'outdoor' },
          { q: 'Tickets available from shops which have the festival ___ in their windows.', a: 'logo' }
        ]
      },
      {
        part: 'Part 2',
        context: '导游向团员说明慕尼黑戏剧之旅（Munich theatre trip）的行程安排',
        type: '选择题（单选）+ 配对',
        questions: [
          { q: '11 When the group meet at the airport they will have ___ . (A breakfast / B coffee / C lunch)', a: 'B' },
          { q: '12 The group will be met at Munich Airport by ___ . (A an employee at the National Theatre / B a theatre manager / C a tour operator)', a: 'C' },
          { q: '13 How much per night for a double room? (A 110 euros / B 120 euros / C 150 euros)', a: 'A' },
          { q: '14 What type of restaurant on Tuesday evening? (A an Italian restaurant / B a Lebanese restaurant / C a typical local restaurant)', a: 'B' },
          { q: '15 Who will they meet on Wednesday afternoon? (A an actor / B a playwright / C a theatre director)', a: 'C' },
          { q: '16 Wednesday’s play — comment? (box A–G: A playwright present / B written for an anniversary / C in a historic building / D with live music / E performed outdoors / F performed for the first time / G attended by officials)', a: 'F' },
          { q: '17 Thursday’s play — comment? (box A–G)', a: 'B' },
          { q: '18 Friday’s play — comment? (box A–G)', a: 'E' },
          { q: '19 Saturday’s play — comment? (box A–G)', a: 'G' },
          { q: '20 Monday’s play — comment? (box A–G)', a: 'C' }
        ]
      },
      {
        part: 'Part 3',
        context: '导师 Beth 与新生 James 讨论 Scandinavian Studies 课程、毕业打算与论文写作',
        type: '选择题（单选）+ 流程填空配对',
        questions: [
          { q: '21 James chose Scandinavian Studies because as a child ___ . (A he was often taken to Denmark / B his mother spoke to him in Danish / C Danish people visited his family)', a: 'C' },
          { q: '22 When he graduates, James would like to ___ . (A take a postgraduate course / B work in the media / C become a translator)', a: 'B' },
          { q: '23 Which course will end this term? (A Swedish cinema / B Danish television programmes / C Scandinavian literature)', a: 'C' },
          { q: '24 They agree his literature paper will be on ___ . (A 19th century playwrights / B the Icelandic sagas / C modern Scandinavian novels)', a: 'A' },
          { q: '25 Beth recommends the paper should be ___ . (A a historical overview of the genre / B an in-depth analysis of a single writer / C a study of the social background to the literature)', a: 'C' },
          { q: '26 He’ll read a ___ and choose his topic. (box A–G: A bullet points / B film / C notes / D structure / E student paper / F textbook / G documentary)', a: 'E' },
          { q: '27 He’ll borrow a ___ from Beth. (box A–G)', a: 'G' },
          { q: '28 He’ll plan the ___ of the paper. (box A–G)', a: 'D' },
          { q: '29 He’ll read sources and write ___ . (box A–G)', a: 'C' },
          { q: '30 He’ll write the paper using ___ . (box A–G)', a: 'A' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于职场冲突（conflict at work）的成因、类型与应对讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: '31 Conflict mostly consists of behaviour in the category of ___ .', a: 'bullying' },
          { q: '32 Often a result of people wanting to prove their ___ .', a: 'superiority' },
          { q: '33 Also caused by differences in ___ between people.', a: 'personality' },
          { q: '34 “___” conflicts: people more concerned about own team than the company.', a: 'structural' },
          { q: '35 Conflict-related stress can cause ___ that may last for months.', a: 'absence' },
          { q: '36 Many CEOs have both ___ and anxiety.', a: 'confidence' },
          { q: '37 Conflict may occur between people with different ___ .', a: 'visions' },
          { q: '38 A structure that is more ___ may create uncertainty about who to report to.', a: 'democratic' },
          { q: '39 Bosses need to try hard to gain ___ .', a: 'respect' },
          { q: '40 Someone from outside may be given the role of ___ to resolve conflicts.', a: 'mediator' }
        ]
      }
    ];

    // ---------- 阅读（真实） ----------
    test.reading.passages = [
      {
        title: 'Passage 1: The risks agriculture faces in developing countries',
        difficulty: '中偏难',
        summary: '关于发展中国家小农面临风险（气候、市场、基础设施等）及缓解对策（政府干预、风险管理工具、集体行动等）的在线辩论综述。',
        questions: [
          { type: '段落信息匹配（A–I）', q: 'a reference to characteristics that only apply to food production', a: 'A' },
          { type: '段落信息匹配（A–I）', q: 'a reference to challenges faced only by farmers in certain parts of the world', a: 'B' },
          { type: '段落信息匹配（A–I）', q: 'a reference to difficulties in bringing about co-operation between farmers', a: 'H' },
          { type: '人物信息匹配（A–G）', q: 'Financial assistance from the government does not always go to the farmers who most need it.', a: 'D' },
          { type: '人物信息匹配（A–G）', q: 'Farmers can benefit from collaborating as a group.', a: 'B' },
          { type: '人物信息匹配（A–G）', q: 'Financial assistance from the government can improve the standard of living of farmers.', a: 'C' },
          { type: '人物信息匹配（A–G）', q: 'Farmers may be helped if there is financial input by the same individuals who buy from them.', a: 'G' },
          { type: '人物信息匹配（A–G）', q: 'Governments can help to reduce variation in prices.', a: 'B' },
          { type: '人物信息匹配（A–G）', q: 'Improvements to infrastructure can have a major impact on risk for farmers.', a: 'A' },
          { type: '多选题（选两项 A–E）', q: 'Which TWO problems affect farmers with small farms in developing countries? (A lack of demand for local food / B lack of irrigation / C unable to get insurance / D effects of changing weather patterns / E having to sell to intermediary buyers)', a: 'D, E' },
          { type: '多选题（选两项 A–E）', q: 'Which TWO actions are recommended for improving conditions for farmers? (A reducing food stocks / B ensuring prices rise at certain times / C co-operation among interested parties / D consumers take a financial stake / E making customers aware of price reasons)', a: 'C, D' }
        ],
        text: `Synthesis of an online debate

A

Two things distinguish food production from all other productive activities: first, every single person needs food each day and has a right to it; and second, it is hugely dependent on nature. These two unique aspects, one political, the other natural, make food production highly vulnerable and different from any other business. At the same time, cultural values are highly entrenched in food and agricultural systems worldwide.

B

Farmers everywhere face major risks; including extreme weather, long-term climate change, and price volatility in input and product markets. However, smallholder farmers in developing countries must in addition deal with adverse environments, both natural, in terms of soil quality, rainfall, etc. and human, in terms of infrastructure, financial systems, markets, knowledge and technology. Counter-intuitively, hunger is prevalent among many smallholder farmers in the developing world.

C

Participants in the online debate argued that our biggest challenge is to address the underlying causes of the agricultural system's inability to ensure sufficient food for all, and they identified as drivers of this problem our dependency on fossil fuels and unsupportive government policies.

D

On the question of mitigating the risks farmers face, most essayists called for greater state intervention. In his essay, Kanayo F. Nwanze, President of the International Fund for Agricultural Development, argued that governments can significantly reduce risks for farmers by providing basic services like roads to get produce more efficiently to markets, or water and food storage facilities to reduce losses. Sophia Murphy, senior advisor to the Institute for Agriculture and Trade Policy, suggested that the procurement and holding of stocks by governments can also help mitigate wild swings in food prices by alleviating uncertainties about market supply.

E

Shenggen Fan, Director General of the International Food Policy Research Institute, held up social safety nets and public welfare programmes in Ethiopia, Brazil and Mexico as valuable ways to address poverty among farming families and reduce their vulnerability to agriculture shocks. However, some commentators responded that cash transfers to poor families do not necessarily translate into increased food security, as these programmes do not always strengthen food production or raise incomes. Regarding state subsidies for agriculture, Rokeya Kabir, Executive Director of Bangladesh Nari Progati Sangha, commented in her essay that these 'have not compensated for the stranglehold exercised by private traders. In fact, studies show that sixty percent of beneficiaries of subsidies are not poor, but rich landowners and non-farmer traders.

F

Nwanze, Murphy and Fan argued that private risk management tools, like private insurance, commodity futures markets, and rural finance can help small-scale producers mitigate risk and allow for investment in improvements. Kabir warned that financial support schemes often encourage the adoption of high-input agricultural practices, which in the medium term may raise production costs beyond the value of their harvests. Murphy noted that when futures markets become excessively financialised they can contribute to short-term price volatility, which increases farmers' food insecurity. Many participants and commentators emphasised that greater transparency in markets is needed to mitigate the impact of volatility, and make evident whether adequate stocks and supplies are available. Others contended that agribusiness companies should be held responsible for paying for negative side effects.

G

Many essayists mentioned climate change and its consequences for small-scale agriculture. Fan explained that in addition to reducing crop yields, climate change increases the magnitude and the frequency of extreme weather events, which increase smallholder vulnerability. The growing unpredictability of weather patterns increases farmers' difficulty in managing weather-related risks. According to this author, one solution would be to develop crop varieties that are more resilient to new climate trends and extreme weather patterns. Accordingly, Pat Mooney, co-founder and executive director of the ETC Group, suggested that 'if we are to survive climate change, we must adopt policies that let peasants diversify the plant and animal species and varieties/breeds that make up our menus.

H

Some participating authors and commentators argued in favour of community-based and autonomous risk management strategies through collective action groups, co-operatives or producers' groups. Such groups enhance market opportunities for small-scale producers, reduce marketing costs and synchronise buying and selling with seasonal price conditions. According to Murphy, 'collective action offers an important way for farmers to strengthen their political and economic bargaining power, and to reduce their business risks.' One commentator, Giel Ton, warned that collective action does not come as a free good. It takes time, effort and money to organise, build trust and to experiment. Others, like Marcel Vernooij and Marcel Beukeboom, suggested that in order to 'apply what we already know', all stakeholders, including business, government, scientists and civil society, must work together, starting at the beginning of the value chain.

I

Some participants explained that market price volatility is often worsened by the presence of intermediary purchasers who, taking advantage of farmers' vulnerability, dictate prices. One commentator suggested farmers can gain greater control over prices and minimise price volatility by selling directly to consumers. Similarly, Sonali Bisht, founder and advisor to the Institute of Himalayan Environmental Research and Education (INHERE), India, wrote that community-supported agriculture, where consumers invest in local farmers by subscription and guarantee producers a fair price, is a risk-sharing model worth more attention. Direct food distribution systems not only encourage small-scale agriculture but also give consumers more control over the food they consume, she wrote.`
      },
      {
        title: 'Passage 2: The Lost City',
        difficulty: '中偏难',
        summary: '美国探险家 Hiram Bingham 1911 年"发现"马丘比丘（Machu Picchu）的经过，及其对该遗址意义认识的演变。',
        context: '段落标题匹配（A–G 选 i–viii）：i 对同一旅程的不同记述 / ii Bingham 获得支持 / iii 一种普遍看法 / iv 此行目的 / v 生动的描述 / vi 一条新路线 / vii Bingham 发表其理论 / viii Bingham 缺乏热情',
        questions: [
          { type: '段落标题匹配（A–G 选 i–viii）', q: 'Paragraph A', a: 'iv' },
          { type: '段落标题匹配（A–G 选 i–viii）', q: 'Paragraph B', a: 'vi' },
          { type: '段落标题匹配（A–G 选 i–viii）', q: 'Paragraph C', a: 'viii' },
          { type: '段落标题匹配（A–G 选 i–viii）', q: 'Paragraph D', a: 'v' },
          { type: '段落标题匹配（A–G 选 i–viii）', q: 'Paragraph E', a: 'i' },
          { type: '段落标题匹配（A–G 选 i–viii）', q: 'Paragraph F', a: 'vii' },
          { type: '段落标题匹配（A–G 选 i–viii）', q: 'Paragraph G', a: 'iii' },
          { type: '判断题 (True/False/Not Given)', q: 'Bingham went to South America in search of an Inca city.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Bingham chose a particular route down the Urubamba valley because it was the most common route used by travellers.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Bingham understood the significance of Machu Picchu as soon as he saw it.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Bingham returned to Machu Picchu in order to find evidence to support his theory.', a: 'NOT GIVEN' },
          { type: '句子填空（每空一词）', q: 'The track down the Urubamba valley had been created for the transportation of ___ .', a: 'rubber' },
          { type: '句子填空（每空一词）', q: 'Bingham found out about the ruins from a ___ in the Urubamba valley.', a: 'farmer' }
        ],
        text: `An explorer's encounter with the ruined city of Machu Picchu, the most famous icon of the Inca civilisation

A

When the US explorer and academic Hiram Bingham arrived in South America in 1911, he was ready for what was to be the greatest achievement of his life: the exploration of the remote hinterland to the west of Cusco, the old capital of the Inca empire in the Andes mountains of Peru. His goal was to locate the remains of a city called Vitcos, the last capital of the Inca civilisation. Cusco lies on a high plateau at an elevation of more than 3,000 metres, and Bingham's plan was to descend from this plateau along the valley of the Urubamba river, which takes a circuitous route down to the Amazon and passes through an area of dramatic canyons and mountain ranges.

B

When Bingham and his team set off down the Urubamba in late July, they had an advantage over travellers who had preceded them: a track had recently been blasted down the valley canyon to enable rubber to be brought up by mules from the jungle. Almost all previous travellers had left the river at Ollantaytambo and taken a high pass across the mountains to rejoin the river lower down, thereby cutting a substantial corner, but also therefore never passing through the area around Machu Picchu.

C

On 24 July they were a few days into their descent of the valley. The day began slowly, with Bingham trying to arrange sufficient mules for the next stage of the trek. His companions showed no interest in accompanying him up the nearby hill to see some ruins that a local farmer, Melchor Arteaga, had told them about the night before. The morning was dull and damp, and Bingham also seems to have been less than keen on the prospect of climbing the hill. In his book Lost City of the Incas, he relates that he made the ascent without having the least expectation that he would find anything at the top.

D

Bingham writes about the approach in vivid style in his book. First, as he climbs up the hill, he describes the ever-present possibility of deadly snakes, 'capable of making considerable springs when in pursuit of their prey'; not that he sees any. Then there's a sense of mounting discovery as he comes across great sweeps of terraces, then a mausoleum, followed by monumental staircases and, finally, the grand ceremonial buildings of Machu Picchu. 'It seemed like an unbelievable dream the sight held me spellbound', he wrote.

E

We should remember, however, that Lost City of the Incas is a work of hindsight, not written until 1948, many years after his journey. His journal entries of the time reveal a much more gradual appreciation of his achievement. He spent the afternoon at the ruins noting down the dimensions of some of the buildings, then descended and rejoined his companions, to whom he seems to have said little about his discovery. At this stage, Bingham didn't realise the extent or the importance of the site, nor did he realise what use he could make of the discovery.

F

However, soon after returning it occurred to him that he could make a name for himself from this discovery. When he came to write the National Geographic magazine article that broke the story to the world in April 1913, he knew he had to produce a big idea. He wondered whether it could have been the birthplace of the very first Inca, Manco the Great, and whether it could also have been what chroniclers described as 'the last city of the Incas'. This term refers to Vilcabamba the settlement where the Incas had fled from Spanish invaders in the 1530s. Bingham made desperate attempts to prove this belief for nearly 40 years. Sadly, his vision of the site as both the beginning and end of the Inca civilisation, while a magnificent one, is inaccurate. We now know, that Vilcabamba actually lies 65 kilometres away in the depths of the jungle.

G

One question that has perplexed visitors, historians and archaeologists alike ever since Bingham, is why the site seems to have been abandoned before the Spanish Conquest. There are no references to it by any of the Spanish chroniclers – and if they had known of its existence so close to Cusco they would certainly have come in search of gold. An idea which has gained wide acceptance over the past few years is that Machu Picchu was a moya, a country estate built by an Inca emperor to escape the cold winters of Cusco, where the elite could enjoy monumental architecture and spectacular views. Furthermore, the particular architecture of Machu Picchu suggests that it was constructed at the time of the greatest of all the Incas, the emperor Pachacuti (1438-71). By custom, Pachacuti's descendants built other similar estates for their own use, and so Machu Picchu would have been abandoned after his death, some 50 years before the Spanish Conquest.`
      },
      {
        title: 'Passage 3: The Benefits of Being Bilingual',
        difficulty: '难',
        summary: '研究指出双语者在认知控制、感官处理、延缓认知衰退及婴儿阶段即具优势，并探讨了双语的某些负面效应。',
        questions: [
          { type: '表格填空（每空不超过两词）', q: 'Observing the ___ of Russian-English bilingual people when asked to select certain objects.', a: 'eye movements' },
          { type: '表格填空（每空不超过两词）', q: 'Bilingual people engage both languages simultaneously: a mechanism known as ___ .', a: 'language co-activation' },
          { type: '表格填空（每空不超过两词）', q: 'A test called the ___ , focusing on naming colours.', a: 'Stroop Task' },
          { type: '表格填空（每空不超过两词）', q: 'Bilingual people are more able to handle tasks involving a skill called ___ .', a: 'conflict management' },
          { type: '表格填空（每空不超过两词）', q: 'When changing strategies, bilingual people have superior ___ .', a: 'cognitive control' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Attitudes towards bilingualism have changed in recent years.', a: 'YES' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Bilingual people are better than monolingual people at guessing correctly what words are before they are finished.', a: 'NOT GIVEN' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Bilingual people consistently name images faster than monolingual people.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Bilingual people’s brains process single sounds more efficiently than monolingual people in all situations.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Fewer bilingual people than monolingual people suffer from brain disease in old age.', a: 'NOT GIVEN' },
          { type: '段落信息匹配（A–G）', q: 'an example of how bilingual and monolingual people’s brains respond differently to a certain type of non-verbal auditory input', a: 'D' },
          { type: '段落信息匹配（A–G）', q: 'a demonstration of how a bilingual upbringing has benefits even before we learn to speak', a: 'G' },
          { type: '段落信息匹配（A–G）', q: 'a description of the process by which people identify words that they hear', a: 'B' },
          { type: '段落信息匹配（A–G）', q: 'reference to some negative consequences of being bilingual.', a: 'C' }
        ],
        text: `A

According to the latest figures, the majority of the world's population is now bilingual or multilingual, having grown up speaking two or more languages. In the past, such children were considered to be at a disadvantage compared with their monolingual peers. Over the past few decades, however, technological advances have allowed researchers to look more deeply at how bilingualism interacts with and changes the cognitive and neurological systems, thereby identifying several clear benefits of being bilingual.

B

Research shows that when a bilingual person uses one language, the other is active at the same time. When we hear a word, we don't hear the entire word all at once: the sounds arrive in sequential order. Long before the word is finished, the brain's language system begins to guess what that word might be. If you hear 'can', you will likely activate words like 'candy' and 'candle' as well, at least during the earlier stages of word recognition. For bilingual people, this activation is not limited to a single language; auditory input activates corresponding words regardless of the language to which they belong. Some of the most compelling evidence for this phenomenon, called 'language co-activation', comes from studying eye movements. A Russian-English bilingual asked to 'pick up a marker' from a set of objects would look more at a stamp than someone who doesn't know Russian, because the Russian word for 'stamp', marka, sounds like the English word he or she heard, 'marker'. In cases like this, language co-activation occurs because what the listener hears could map onto words in either language.

C

Having to deal with this persistent linguistic competition can result in difficulties, however. For instance, knowing more than one language can cause speakers to name pictures more slowly, and can increase 'tip-of-the-tongue states', when you can almost, but not quite, bring a word to mind. As a result, the constant juggling of two languages creates a need to control how much a person accesses a language at any given time. For this reason, bilingual people often perform better on tasks that require conflict management. In the classic Stroop Task, people see a word and are asked to name the colour of the word's font. When the colour and the word match (i.e. the word 'red' printed in red), people correctly name the colour more quickly than when the colour and the word don't match (i.e. the word 'red' printed in blue). This occurs because the word itself ('red') and its font colour (blue) conflict. Bilingual people often excel at tasks such as this, which tap into the ability to ignore competing perceptual information and focus on the relevant aspects of the input. Bilinguals are also better at switching between two tasks; for example, when bilinguals have to switch from categorizing objects by colour (red or green) to categorizing them by shape (circle or triangle), they do so more quickly than monolingual people, reflecting better cognitive control when having to make rapid changes of strategy.

D

It also seems that the neurological roots of the bilingual advantage extend to brain areas more traditionally associated with sensory processing. When monolingual and bilingual adolescents listen to simple speech sounds without any intervening background noise, they show highly similar brain stem responses. When researchers play the same sound to both groups in the presence of background noise, however, the bilingual listeners' neural response is considerably larger, reflecting better encoding of the sound's fundamental frequency, a feature of sound closely related to pitch perception.

E

Such improvements in cognitive and sensory processing may help a bilingual person to process information in the environment, and help explain why bilingual adults acquire a third language better than monolingual adults master a second language. This advantage may be rooted in the skill of focussing on information about the new language while reducing interference from the languages they already know.

F

Research also indicates that bilingual experience may help to keep the cognitive mechanisms sharp by recruiting alternate brain networks to compensate for those that become damaged during aging. Older bilinguals enjoy improved memory relative to monolingual people, which can lead to real-world health benefits. In a study of over 200 patients with Alzheimer's disease, a degenerative brain disease, bilingual patients reported showing initial symptoms of the disease an average of five years later than monolingual patients. In a follow-up study, researchers compared the brains of bilingual and monolingual patients matched on the severity of Alzheimer's symptoms. Surprisingly, the bilinguals' brains had more physical signs of disease than their monolingual counterparts, even though their outward behaviour and abilities were the same. If the brain is an engine, bilingualism may help it to go farther on the same amount of fuel.

G

Furthermore, the benefits associated with bilingual experience seem to start very early. In one study, researchers taught seven-month-old babies growing up in monolingual or bilingual homes that when they heard a tinkling sound, a puppet appeared on one side of a screen. Halfway through the study, the puppet began appearing on the opposite side of the screen. In order to get a reward, the infants had to adjust the rule they'd learned; only the bilingual babies were able to successfully learn the new rule. This suggests that for very young children, as well as for older people, navigating a multilingual environment imparts advantages that transfer far beyond language.`
      }
    ];

    // ---------- 写作（真实题目 + 范文示例） ----------
    test.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '地图描述（现状与规划对比）',
        prompt: 'The maps below show the centre of a small town called Islip as it is now, and plans for its development.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The maps illustrate the current layout of the town centre of Islip and a proposed plan for its future development.\n\nOverall, the most significant change is the construction of a dual carriageway (ring road) around the town, which bypasses the existing main road and frees the centre for pedestrians. While the residential areas surrounding the town remain, several new facilities are introduced.\n\nAt present, a main road runs east–west through the centre, with shops on either side and a public park to the north-west. Housing occupies the spaces to the north and south. Under the plan, the main road becomes a pedestrian-only area, and a new bus station is built to the south of it. A shopping centre, a car park and a new park appear in the northern part, while the original park remains. To the south-east, a new school and a large housing estate are added, and a golf course is introduced in the south-west.\n\nIn summary, the redevelopment reduces through-traffic in the centre, adds leisure, retail and transport infrastructure, and expands housing on the town’s edges.',
        tips: '对比现状与规划；描述主要变化（环城公路、步行区、新设施位置）；用将来时/被动语态；注意方位词；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（利弊权衡）',
        prompt: 'At the present time, the population of some countries includes a relatively large number of young adults, compared with the number of older people.\n\nDo the advantages of this situation outweigh the disadvantages?\n\nWrite at least 250 words.',
        modelAnswer: 'In several countries today, the population is notably younger, with a high proportion of young adults relative to older people. This essay will argue that the advantages of such a structure outweigh the disadvantages.\n\nOne major benefit is economic dynamism. A large young workforce can drive productivity, innovation and entrepreneurship, as younger people are generally more adaptable to new technologies and more willing to relocate for work. This can accelerate a country’s development and increase tax revenues that fund public services.\n\nA further advantage is social vitality. Young populations tend to demand education, housing and cultural infrastructure, encouraging investment in the future. They are also less burdened by age-related healthcare costs in the short term, freeing resources for growth.\n\nHowever, there are drawbacks. A youth-heavy population can face high youth unemployment if jobs are insufficient, leading to frustration and instability. Over time, as this cohort ages, there is a risk of an old-age dependency burden unless pensions and healthcare are planned early.\n\nIn conclusion, while challenges exist, the energy, adaptability and economic potential of a young population provide clear advantages, provided that governments invest in education and job creation to realise them.',
        tips: '明确 outweigh 哪一方；用两段分别讨论优/劣并举例；结尾重申立场；至少250词'
      }
    ];

    // ---------- 口语（真实话题 + 参考回答示例） ----------
    test.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Daily Routine（日常生活）',
        questions: [
          { q: 'What is your daily routine?', a: '参考回答: On weekdays, I usually get up early, have breakfast, and go to work. After work, I like to relax by reading or watching a series before going to bed.' },
          { q: 'Do you usually do the same things at the same time every day?', a: '参考回答: Yes, more or less. Having a routine helps me stay organised, although sometimes I like to change things up on weekends.' },
          { q: 'What part of your day do you like most?', a: '参考回答: I like the evenings the most because I can finally relax and spend time with my family or friends.' },
          { q: 'Would you like to change your daily routine?', a: '参考回答: Yes, I’d like to include more time for exercise because I feel I sit too much during the day.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a family celebration that you remember.\n\nYou should say:\n– what you were celebrating\n– where and when it happened\n– who was there\n– and explain why you remember this celebration so well.',
        modelAnswer: '参考回答:\n\nOne family celebration I remember well was my sister’s wedding. It happened two years ago in my hometown. The ceremony was held at a beautiful hall decorated with flowers and lights.\n\nAll my close relatives, family friends, and even neighbours were there. It was such a big gathering and everyone was in a festive mood. We had delicious food, music, and a dance floor where we all danced for hours.\n\nWhat I loved most was seeing my sister so happy. She looked beautiful in her wedding dress, and my parents were really proud. I remember helping with the arrangements, like decorating the stage and welcoming guests. It was tiring but also exciting.\n\nI remember this celebration so well because it was full of love, laughter, and togetherness. Everyone forgot their daily worries and just enjoyed the moment. It brought our family closer and created memories that we still talk about today.',
        tips: '用过去时叙述；覆盖四个要点；加入具体细节与感受；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Family and Celebrations（家庭与庆祝）',
        questions: [
          { q: 'How important are family celebrations in your culture?', a: '参考回答: They’re very important. They give families a chance to gather, share joy, and strengthen their relationships.' },
          { q: 'Why do some people prefer small family gatherings to big parties?', a: '参考回答: Some people feel more comfortable with close family members because it’s more intimate and less stressful than a big event.' },
          { q: 'Are family celebrations the same now as in the past?', a: '参考回答: Not exactly. Nowadays, people sometimes prefer celebrating in restaurants or event halls instead of at home, and they may invite fewer people.' }
        ]
      }
    ];
  })();

  // ===================== 听力原文脚本（真实，覆盖 listening-scripts.js 中 12-1-* / 12-2-*） =====================
  if (typeof LISTENING_SCRIPTS !== 'undefined') {

    // ---- Test 1 ----
    LISTENING_SCRIPTS['12-1-0'] = `TC EMPLOYEE: Hi. Can I help you?

VISITOR: I'd like to find out if you have any excursions suitable for families.

TC EMPLOYEE: Sure. How about taking your family for a cruise? We have a steamship that takes passengers out several times a day (Example) – it's over 100 years old.

VISITOR: That sounds interesting. How long is the trip?

TC EMPLOYEE: About an hour and a half. And don't forget to take pictures of the mountains (Q1). They're all around you when you're on the boat and they look fantastic.

VISITOR: OK. And I assume there's a café or something on board?

TC EMPLOYEE: Sure. How old are your children?

VISITOR: Er, my daughter's fifteen and my son's seven.

TC EMPLOYEE: Right. Well there are various things you can do once you've crossed the lake, to make a day of it. One thing that's very popular is a visit to the Country Farm. You're met off the boat by the farmer and he'll take you to the holding pens, where the sheep are kept. Children love feeling them!

VISITOR: My son would love that. He really likes animals.

TC EMPLOYEE: Well, there's also a 40-minute trek round the farm on a horse (Q2), if he wants.

VISITOR: Do you think he'd manage it? He hasn't done that before.

TC EMPLOYEE: Sure. It's suitable for complete beginners.

VISITOR: Ah, good.

TC EMPLOYEE: And again, visitors are welcome to explore the farm on their own, as long as they take care to close gates and so on. There are some very beautiful gardens along the side of the lake which also belong to the farm (Q3) – they'll be just at their best now. You could easily spend an hour or two there.

VISITOR: OK. Well that all sounds good. And can we get lunch there? (Q4)

TC EMPLOYEE: You can, and it's very good, though it's not included in the basic cost. You pay when you get there.

VISITOR: Right.

VISITOR: So is there anything else to do over on that side of the lake?

TC EMPLOYEE: Well, what you can do is take a bike over on the ship and then go on a cycling trip. There's a trail there called the Back Road – you could easily spend three or four hours exploring it, and the scenery's wonderful. They'll give you a map when you get your ticket for the cruise – there's no extra charge. (Q5)

VISITOR: What's the trail like in terms of difficulty?

TC EMPLOYEE: Quite challenging in places. It wouldn't be suitable for your seven-year-old. It needs someone who's got a bit more experience. (Q6)

VISITOR: Hmm. Well, my daughter loves cycling and so do I, so maybe the two of us could go, and my wife and son could stay on the farm. That might work out quite well. But we don't have bikes here… is there somewhere we could rent them?

TC EMPLOYEE: Yes, there's a place here in the city. It's called Ratchesons. (Q7)

VISITOR: I'll just make a note of that – er, how do you spell it?

TC EMPLOYEE: R-A-T-C-H-E-S-O-N-S. It's just by the cruise ship terminal.

VISITOR: OK.

TC EMPLOYEE: You'd also need to pick up a repair kit for the bike from there to take along with you, and you'd need to take along a snack and some water – it'd be best to get those in the city.

VISITOR: Fine. That shouldn't be a problem. And I assume I can rent a helmet from the bike place? (Q8)

TC EMPLOYEE: Sure, you should definitely get that. It's a great ride, but you want to be well prepared because it's very remote – you won't see any shops round there, or anywhere to stay (Q9), so you need to get back in time for the last boat.

VISITOR: Yeah. So what sort of prices are we looking at here?

TC EMPLOYEE: Let's see, that'd be one adult and one child for the cruise with farm tour, that's $117, and an adult and a child for the cruise only so that's $214 dollars altogether. Oh, wait a minute, how old did you say your daughter was?

VISITOR: Fifteen.

TC EMPLOYEE: Then I'm afraid it's $267 (Q10) because she has to pay the adult fare, which is $75 instead of the child fare which is $22 – sorry about that.

VISITOR: That's OK. Er, so how do …`;

    LISTENING_SCRIPTS['12-1-1'] = `JOY PARKINS (RESTAURANT MANAGER): Good morning everyone. My name's Joy Parkins and I'm the restaurant manager. And I understand that none of you've had any previous experience as kitchen assistants? Well, you might be feeling a bit nervous now, but most of our kitchen assistants say they enjoy the work. OK, they might get shouted at sometimes, but it's nothing personal, and they're pleased that they have so many different things to do, which means they never get bored (Q11). And I'll tell you straightaway that if you do well, we might think about moving you up and giving you some more responsibility.

Right, well, you've all shown up on time, which is an excellent start. Now I'm glad to see none of you have unsuitable footwear, so that's good – you need to be careful as the floors can get very wet and slippery. Those of you with long hair have got it well out of the way, but some of you'll need to remove your rings and bracelets – just put them somewhere safe for today, and remember to leave them at home tomorrow, as they can be a safety hazard. (Q12)

Now it's going to be a busy day for you all today – we don't have any tables free for this evening, and only a few for lunch (Q13). Fortunately we've got our Head Chef back – he was away on holiday all last week which meant the other chefs had extra work. Now, I'll tell you a bit more about the job in a minute but first, some general regulations. For all of you, whatever your age, there's some equipment you mustn't use until you've been properly trained, like the waste disposal system for example, for health and safety reasons. Then I think there are two of you here who are under 18 – that's Emma and Jake, isn't it? Right, so for you two, the meat slicer is out of bounds (Q14). And of course none of you are allowed to use the electric mixer until you've been shown how it works.

Now you may have heard that this can be a stressful job, and I have to say that can be true. You'll be working an eight-hour day for the first week, though you'll have the chance to do overtime after that as well if you want to. But however long the hours are, you'll get a break in the middle. What you will find is that you're on your feet all day long, lifting and carrying, so if you're not fit now you soon will be! You'll find you don't have much chance to take it easy – when someone tells you to do something you need to do it straightaway (Q15&Q16) – but at least we do have a very efficient air conditioning system compared with some kitchens.

Now let me tell you about some of the people you need to know. So as I said, I'm Joy Parkins and I decide who does what during the day and how long they work for (Q17). I'll be trying to get you to work with as many different people in the kitchen as possible, so that you learn while you're on the job. One person whose name you must remember is David Field. If you injure yourself at all, even if it's really minor, you must report to him and he'll make sure the incident is recorded and you get the appropriate treatment (Q18). He's trained to give basic treatment to staff himself, or he'll send you off somewhere else if necessary. Then there's Dexter Wills – he's the person you need to see if you smash a plate or something like that (Q19). Don't just leave it and hope no one will notice – it's really important to get things noted and replaced or there could be problems later. And finally, there's Mike Smith. He's the member of staff who takes care of all the stores of perishables, so if you notice we're getting low on flour or sugar or something, make sure you let him know so he can put in an order. (Q20)

OK, now the next thing …`;

    LISTENING_SCRIPTS['12-1-2'] = `TRUDIE: OK, Stewart. We need to start planning our paper on public libraries. Have you thought of an angle yet?

STEWART: Well, there's so much we could look into. How libraries have changed over the centuries, for instance, or how different countries organise them. What do you think, Trudie?

TRUDIE: Maybe we should concentrate on this country, and try to relate the changes in libraries to external developments, like the fact that far more people can read than a century ago, and that the local population may speak lots of different languages. (Q21)

STEWART: We could include something about changes in the source of funding, too.

TRUDIE: Yes, but remember we're only supposed to write a short paper, so it's probably best if we don't go into funding in any detail.

STEWART: Right. Well, shall we just brainstorm a few ideas, to get started?

TRUDIE: OK. We obviously need to look at the impact of new technology, particularly the internet. Now that lots of books have been digitalised, people can access them from their own computers at home.

STEWART: And if everyone did that, libraries would be obsolete.

TRUDIE: Yes.

STEWART: But the digitalised books that are available online for free are mostly out of copyright, aren't they? And copyright in this country lasts for 70 years after the author dies. So you won't find the latest best-seller or up-to-date information. (Q22)

TRUDIE: That's an important point. Anyway, I find it hard to concentrate when I'm reading a long text on a screen. I'd much rather read a physical book. And it takes longer to read on a screen.

STEWART: Oh, I prefer it. I suppose it's just a personal preference.

TRUDIE: Mm. I expect that libraries will go on evolving in the next few years. Some have already become centres where community activities take place, like local clubs meeting there. I think that'll become even more common.

STEWART: I'd like to think so, and that they'll still be serving their traditional function, but I'm not so sure. There are financial implications, after all. What I'm afraid will happen is that books and magazines will all disappear, and there'll just be rows and rows of computers (Q23). They won't look anything like the libraries we're used to.

TRUDIE: Well, we'll see.

TRUDIE: I've just had an idea. Why don't we make an in-depth study of our local public library as background to our paper?

STEWART: Yes, that'd be interesting, and raise all sorts of issues. Let's make a list of possible things we could ask about, then work out some sort of structure. For instance, um, we could interview some of the staff, and find out whether the library has its own budget, or if that's controlled by the local council. (Q24)

TRUDIE: And what their policies are. I know they don't allow food, but I'd love to find out what types of noise they ban – there always seems to be a lot of talking, but never music. I don't know if that's a policy or it just happens.

STEWART: Ah, I've often wondered. Then there are things like how the library is affected by employment laws. I suppose there are rules about working hours, facilities for staff, and so on. (Q25)

TRUDIE: Right. Then there are other issues relating to the design of the building and how customers use it. Like what measures does the library take to ensure their safety? (Q26) They'd need floor coverings that aren't slippery, and emergency exits, for instance. Oh, and another thing – there's the question of the kind of insurance the library needs to have, in case anyone gets injured. (Q27)

STEWART: Yes, that's something else to find out. You know something I've often wondered?

TRUDIE: What's that?

STEWART: Well, you know they've got an archive of local newspapers going back years? Well, next to it they've got the diary of a well-known politician from the late 19th century (Q28). I wonder why it's there. Do you know what his connection was with this area?

TRUDIE: No idea. Let's add it to our list of things to find out. Oh, I've just thought – you know people might ask in the library about local organisations, like sports clubs? Well, I wonder if they keep a database, or whether they just look online. (Q29)

STEWART: Right. I quite fancy finding out what the differences are between a library that's open to the public and one that's part of a museum, for example (Q30) – they must be very different.

TRUDIE: Mmm. Then something else I'd like to know is …`;

    LISTENING_SCRIPTS['12-1-3'] = `For my presentation today, I'm going to talk about four business values: collaboration, hard work, creativity and excellence. Most people would say they're all 'good things'. I'm going to suggest that's an over-simple view.

The trouble with these values is that they're theoretical concepts, removed from the reality of day-to-day business. Pursue values by all means, but be prepared for what may happen as a result. They can actually cause damage, which is not at all the intention. (Q31)

Business leaders generally try to do the right thing. But all too often the right thing backfires, if those leaders adopt values without understanding and managing the side effects that arise (Q32). The values can easily get in the way of what's actually intended.

OK. So the first value I'm going to discuss is collaboration. Let me give you an example. On a management training course I once attended, we were put into groups and had to construct a bridge across a stream (Q33), using building blocks that we were given. The rule was that everyone in the team had to move at least one building block during the construction. This was intended to encourage teamwork.

But it was really a job best done by one person. The other teams tried to collaborate on building the structure, and descended into confusion (Q34), with everyone getting in each other's way. Our team leader solved the challenge brilliantly. She simply asked everyone in the team to move a piece a few centimetres, to comply with the rule, and then let the person in the team with an aptitude for puzzles like this build it alone. We finished before any other team. My point is that the task wasn't really suited to teamworking, so why make it one?

Teamwork can also lead to inconsistency – a common cause of poor sales. In the case of a smartphone that a certain company launched, one director wanted to target the business market, and another demanded it was aimed at consumers. The company wanted both directors to be involved, so gave the product a consumer-friendly name, but marketed it to companies. The result was that it met the needs of neither group. It would have been better to let one director or the other have his way, not both. (Q35)

Now industriousness, or hard work. It's easy to mock people who say they work hard: after all, a hamster running around in a wheel is working hard – and getting nowhere. Of course hard work is valuable, but only when properly targeted. Otherwise it wastes the resources that companies value most – time and energy. And that's bad for the organisation. (Q36)

There's a management model that groups people according to four criteria: clever, hard-working, stupid and lazy. Here 'lazy' means having a rational determination not to carry out unnecessary tasks (Q37). It doesn't mean trying to avoid work altogether. Most people display two of these characteristics, and the most valuable people are those who are both clever and lazy: they possess intellectual clarity, and they don't rush into making decisions. They come up with solutions to save the time and energy spent by the stupid and hard-working group. Instead of throwing more man-hours at a problem, the clever and lazy group looks for a more effective solution.

Next we come to creativity. This often works well – creating an attention-grabbing TV commercial, for example, might lead to increased sales. But it isn't always a good thing. Some advertising campaigns are remembered for their creativity, without having any effect on sales. This happened a few years ago with the launch of a chocolate bar (Q38): subsequent research showed that plenty of consumers remembered the adverts, but had no idea what was being advertised. The trouble is that the creator derives pleasure from coming up with the idea, and wrongly assumes the audience for the campaign will share that feeling.

A company that brings out thousands of new products may seem more creative than a company that only has a few, but it may be too creative, and make smaller profits. Creativity needs to be targeted, to solve a problem that the company has identified (Q39). Just coming up with more and more novel products isn't necessarily a good thing.

And finally, excellence. We all know companies that claim they 'strive for excellence', but it takes a long time to achieve excellence. In business, being first with a product is more profitable than having the best product. A major study of company performance compared pioneers – that is, companies bringing out the first version of a particular product – with followers, the companies that copied and improved on that product. The study found that the pioneers commanded an average market share of 29 percent, while the followers achieved less than half that, only 13 percent (Q40) – even though their product might have been better.

Insisting on excellence in everything we do is time-consuming, wastes energy and leads to losing out on opportunities. Sometimes, second-rate work is more worthwhile than excellence. 'Make sure it's excellent' sounds like a good approach to business, but the 'just-get-started' approach is likely to be more successful.`;

    // ---- Test 2 ----
    LISTENING_SCRIPTS['12-2-0'] = `MAN: Good morning, Kenton Festival box office. How can I help you?

WOMAN: Oh, good morning. I'm coming to Kenton for a few days' holiday next month, and a friend told me there's a festival. She gave me this number to find out about it.

MAN: That's right, the festival begins on the 16th of May (Example) and goes on till the 19th.

WOMAN: Oh, that's great. I'll be there from the 15th till the 19th. So could you tell me the programme, please?

MAN: Well, on the first day, there's the opening ceremony, in the town centre. People start gathering around 2 o'clock, to get a good place to see from, and the events will start at 2.45 (Q1), and finish about 5.30.

WOMAN: OK, thanks. I'll make sure I get there early to get a good spot.

MAN: The festival will be officially opened by the mayor. He'll just speak for a few minutes, welcoming everyone to the festival. All the town councillors will be there, and of course lots of other people.

WOMAN: Right.

MAN: Then there'll be a performance by a band (Q2). Most years we have a children's choir, but this year the local army cadets offered to perform, and they're very good.

WOMAN: Uhuh.

MAN: After that, a community group from the town will perform a play they've written themselves, just a short one. It's about Helen Tungate (Q3). I don't know if you've heard of her?

WOMAN: I certainly have. She was a scientist years ago (Q4).

MAN: That's right. She was born in Kenton exactly 100 years ago, so we're celebrating her centenary.

WOMAN: I'm a biologist, so I've always been interested in her, I didn't realise she came from Kenton.

MAN: Yes. Well, all that will take place in the afternoon, and later, as the sun sets, there'll be a firework display. You should go to the park to watch, as you'll get the best view from there, and the display takes place on the opposite side of the river (Q5). It's always one of the most popular events in the festival.

WOMAN: Sounds great.

MAN: And what's happening on the other days?

WOMAN: Are there any displays of ballet dancing? I'm particularly interested in that as I do it as a hobby.

MAN: There isn't any ballet, I'm afraid, but there'll be a demonstration of traditional dances from all round the country (Q8).

WOMAN: Oh, that'd be nice. Where's that being held?

MAN: It's in the market in the town centre – the outdoor one, not the covered market (Q9). And it's on at 2 and 5 every afternoon of the festival, apart from the first day.

WOMAN: Lovely. I'm interested in all kinds of dancing, so I'm sure I'll enjoy that!

MAN: Mmm. I'm sure you will.

WOMAN: And I'd really like to go to some concerts, if there are any.

MAN: Yes, there are several. Three performed by professionals, and one by local children.

WOMAN: And where is it being held?

MAN: It's in the library, which is in Part Street. On the 18th, at 6.30 in the evening.

WOMAN: I presume I'll need tickets for that.

MAN: Yes, you can book online, or you can buy them when you arrive in Kenton, either at the festival box office, or from any shops displaying our logo in the windows (Q10).

WOMAN: Well, I think that'll keep me busy for the whole of my stay in Kenton. Thank you so much for all your help.

MAN: You're welcome. I hope you enjoy your stay.

WOMAN: Thank you. Goodbye.`;

    LISTENING_SCRIPTS['12-2-1'] = `Right. I've now almost succeeded in finalising plans for our tour, so I'll bring you up to date with what I know.

As you know, we're flying first to Munich, on Monday the 4th.

The flight is at 11.30, so it's too early to have lunch at the airport. I suggest we meet there for coffee at 10 (Q11), which should give us plenty of time for breakfast before we leave home.

When we arrive in Munich, we'll be met at the airport by Claus Bauer. Claus works for a tour operator (Q12), and he'll look after us for the time we'll be in Germany. He's already liaised with the managers of the theatres we're going to visit, and he's also arranged for an officer of the National Theatre in Munich to show us round the theatre one afternoon during our stay.

Now last time we discussed this trip, I didn't have the precise cost for hotel rooms, but now I have. The normal rate at the hotel where we're staying is 150 euros a night for a double room. I'd hoped to get that down to 120 euros, but in fact I've been able to negotiate a rate of 110 (Q13). That'll be reflected in the final payment which you'll need to make by the end of this week.

On Tuesday, the day after our arrival, I had hoped we could sit in on a rehearsal at one of the theatres, but unfortunately that's proved very difficult to arrange, so instead we'll have a coach trip to one of the amazing castles in the mountains south of Munich.

On Tuesday evening, we'll all have dinner together in a restaurant near our hotel. From talking to you all about your preferences, it was clear that a typical local restaurant would be too meat-oriented for some of you. Some of you suggested an Italian restaurant, but I must confess that I decided to book a Lebanese one (Q14), as we have plenty of opportunities to go to an Italian restaurant at home.

On Wednesday afternoon, the director of the play we're going to see that evening will talk to us at the theatre (Q15). She'll describe the whole process of producing a play, including how she chose the actors, and, as the play we're going to see is a modern one, how she worked with the playwright.

Right. Now I'd just like to make a few points about the plays we're going to see, partly because it might influence your choice of clothes to take with you!

The play we're seeing on Wednesday evening is a modern one, and we're going to the premiere (Q16), so it'll be quite a dressy occasion, though of course you don't have to dress formally. I gather it's rather a multimedia production, with amazing lighting effects and a soundtrack of electronic music, though unfortunately the playwright is ill and is unlikely to be able to attend.

On Thursday we're seeing a play that was first performed last year, when it was commissioned to mark a hundred years since the birth in the town of a well-known scientist (Q17). We're going to see a revival of that production, which aroused a lot of interest.

Friday's play will really make you think hard about what clothes to pack, as it'll be in the garden of a palace (Q18). It's a beautiful setting, but I'd better warn you, there won't be much protection from the wind.

On Saturday, we're going by coach to a theatre in another town, not far from Munich. This will be the opening of a drama festival, and the mayor and all the other dignitaries of the town will be attending (Q19). After the performance, the mayor is hosting a reception for all the audience, and there'll be a band playing traditional music of the region.

And after having a day off on Sunday, our final play is on Monday, and it's in the stunning setting of the old Town Hall, which dates back to the 14th century (Q20). The performance marks the fifty years that the lead actor has been on stage, and the play is the one where he made his first professional appearance, all those years ago.

And the day after that, we'll be flying back home. Now have you got any questions before I …`;

    LISTENING_SCRIPTS['12-2-2'] = `BETH: Oh good morning. You must be James. I'm Beth Cartwright – please call me Beth.

JAMES: Thank you.

BETH: Now as this is your first tutorial since you started on the Scandinavian Studies course, I'd like to find out something about you. Why did you decide to take this course?

JAMES: Well, my mother is Danish, and although we always lived in England, she used to talk about her home a lot, and that made me want to visit Denmark. We hardly ever did, though – my mother usually went on her own. But whenever her relations or friends were in England they always came to see us (Q21).

BETH: I see. So I assume you already speak Danish, one of the languages you'll be studying.

JAMES: I can get by when I talk to people, though I'm not terribly accurate.

BETH: Now you probably know that you'll spend the third year of the course abroad. Have you had any thoughts about that?

JAMES: I'm really looking forward to it. And although Denmark seems the obvious place to go, because of my family connections, I'd love to spend the time in Iceland.

BETH: Oh, I'm sure it can be arranged. Do you have any plans for when you graduate? A lot of students go on to take a master's degree.

JAMES: I think the four years of the undergraduate course will be enough for me. I'm interested in journalism, and I quite like the idea of moving to Scandinavia and writing for magazines (Q22). I'd find that more creative than translating, which I suppose most graduates do.

BETH: OK. Now how are you finding the courses you're taking this term, James?

JAMES: Well, I'm really enjoying the one on Swedish cinema.

BETH: That'll continue next term, but the one on Scandinavian literature that's running at the moment will be replaced by more specialised courses (Q23). Oh, and by the way, if you're interested in watching Danish television programmes – there's going to be a course on that the term after next.

JAMES: That sounds good.

BETH: Have you started thinking about the literature paper that you have to write in the next few weeks?

JAMES: Yes, my first choice would be to do something on the Icelandic sagas.

BETH: Hmm. The trouble with that is that a lot of people choose that topic, and it can be difficult to get hold of the books you'll need. Why not leave that for another time?

JAMES: Right.

BETH: You might find modern novels or 19th century playwrights interesting (Q24).

JAMES: I've read or seen several plays in translation, so that would be a good idea.

BETH: Fine. I'll put you down for that topic.

JAMES: Right. So what would you advise me to aim at in the paper?

BETH: First I suggest you avoid taking one writer and going into a great deal of detail. That approach certainly has its place, but I think you first need to get an understanding of the literature in the context of the society in which it was produced – who it was written for, how it was published, and so on (Q25). I also think that's more fruitful than placing it within the history of the genre.

JAMES: OK, that sounds reasonable.

JAMES: Could I ask for some advice about writing the paper I'm working on about the Vikings? I have to do that this week, and I'm a bit stuck.

BETH: Of course. Have you decided yet what to write about?

JAMES: No, I haven't. There's so much that seems interesting – Viking settlement in other countries, trade, mythology …

BETH: Well, what I suggest is that you read an assignment a student wrote last year (Q26), which is kept in the library. It's short and well focused, and I'm sure you'll find it helpful. I'll give you the details in a moment. Textbooks usually cover so many topics, it can be very difficult to choose just one.

JAMES: OK. I've got a DVD of the film about the Vikings that came out earlier this year. Should I watch that again?

BETH: If it's the one I am thinking of, hmm, I'd ignore it – it's more fantasy than reality. But I've got a recording of a documentary that you should watch (Q27). It makes some interesting and provocative points, which I think will help you to focus your topic.

JAMES: Right.

BETH: So then should I work out an outline? (Q28)

JAMES: Yes. Just headings for different sections, at this stage. And then you should start looking for suitable articles and books to draw on, and take notes (Q29) which you organise according to those headings.

BETH: I see.

JAMES: Then put short phrases and sentences as bullet points under each heading (Q30). Make sure that this skeleton makes sense and flows properly, before writing up the paper in full.

BETH: OK. Thanks, that's very helpful.`;

    LISTENING_SCRIPTS['12-2-3'] = `Over the years, attitudes towards workers have changed considerably. After all, there was a time when workers had no rights at all, and laboured in appalling conditions. Conditions have improved a lot, but conflict in the workplace is still common. And human resources managers nowadays need to be able to deal with it when necessary.

What is conflict in the workplace? Definitions vary, but I'm taking it to refer to a whole range of behaviours that the victim finds unacceptable, from minor, harmless arguments to – at the opposite extreme – physical violence. Much of this is covered by the term bullying (Q31), by which I mean one or more people behaving abusively or aggressively against another who is in a weaker position. Although all behaviour like this is a form of conflict, not all conflict can be described in these terms.

As with all human behaviour, there are numerous reasons for it. But often it's caused by someone who feels the need to show their superiority over someone else (Q32), in order to feel that they aren't at the lowest level in a hierarchy or a group of people.

In some cases one person simply dislikes the other, on the basis that the personality of one is in some way incompatible with that of the other person (Q33). A general habit of optimism in one person could make them intolerant of a colleague who's constantly pessimistic – not that that justifies treating them badly, of course.

Some conflicts arise when people are more interested in promoting themselves and their team than in the company as a whole. These conflicts are called 'structural' (Q34), and could come about, for example, when a sales team believe they are the only people in the business who do any useful work, and look down on behind-the-scenes administrators.

Conflict obviously affects the individuals concerned – the situation is likely to be very stressful for victims, resulting in their absence from work, possibly for months (Q35). For the company, if no effort is made to deal with conflict, it can spiral out of control, and even lead to the breakdown of the business.

Some interesting work with chief executives – CEOs – has uncovered some of the reasons why they may treat colleagues badly. Many CEOs combine two opposing characteristics: confidence – that is, the belief that they're capable of great achievements – with a high level of anxiety (Q36), a fear of missing targets, whether set by themselves or by the directors of the company. This combination can make them respond badly to anyone who questions their decisions.

In a high pressure work environment, such characteristics become problematic. And it's particularly difficult to tackle the situation where colleagues, managers and board members are all trying to achieve their own visions (Q37). When they can't agree on strategic issues and on where they see the business going, there are real problems.

For managers at lower levels within the organisation, it might seem that an autocratic form of management – where the chief executive gives orders and everyone else has to obey – would see more conflict than others. Interestingly, though, a company with a more democratic business model can suffer more, when uncertainty about who to report to leads to conflicting demands (Q38).

Now I'll say a little about dealing with the type of conflict that has harmful effects. Of course the ideal is to prevent it arising in the first place. A good manager, at any level, will make efforts to earn the respect of the people they work with (Q39), particularly those who report to them. That will involve politeness in all communications, and treating them as equals who happen to have a different role within the organisation.

Sometimes, of course, conflict does occur, and can get out of hand. In such cases the human resources department often gets involved. However, if one of the parties in a conflict sees human resources as simply a mouthpiece for the chief executive, then an external mediator might be able to help (Q40). By talking to both sides, and trying to find the truth of what's been happening, they can build a clear picture of the situation, and give feedback that both sides will accept, precisely because they're independent.`;
  }

  console.log('[real-12] 剑12 Test 1 & Test 2 已覆盖为练习题目（待与原版书核对）');
})();
