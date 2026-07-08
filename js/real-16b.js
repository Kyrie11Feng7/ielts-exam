/**
 * 剑16 Test 3 & Test 4 剑桥雅思内容覆盖补丁
 * 目的：将 data-extra3-1.js 中 AI 生成的"原创练习"内容替换为剑桥雅思16 Test 3、Test 4 练习题目。
 * 数据核对来源（公开权威解析，含原题答案键）：
 *   听力原文/答案 — ieltsxpress (Cambridge IELTS 16 Listening Test 3/4 Audio Transcript)、ieltsextremes (answer key)
 *   阅读原文/题目/答案 — ieltsxpress (Cambridge IELTS 16 Academic Reading 3/4)、laokaoya (剑16T4阅读答案)
 *   写作题目 — engnovate (Cambridge IELTS 16 Academic Writing Test 3/4)、ieltsessaybank
 *   口语话题 — babarenglish / ieltspractices / ieltsworldly (Cambridge 16 Speaking Test 3/4)
 * 注意：原文/题目为真实考题内容；范文与口语"参考回答"为学习用示例文本（非官方范文）。
 * 本文件须放在所有数据文件（data.js + data-extra*.js）之后、app.js 之前加载。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;
  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 16) book = b; });
  if (!book) return;

  // ============================================================
  // 剑16 TEST 3
  // ============================================================
  var t3 = null;
  book.tests.forEach(function (t) { if (t.id === 3) t3 = t; });
  if (t3) {

    // ---------------- 听力（真实） ----------------
    t3.listening.sections = [
      {
        part: 'Part 1',
        context: '家长致电 Junior Cycle 骑行营咨询为 7 岁儿子 Charlie 报名事宜',
        type: '笔记填空（每空一词及/或一数字）',
        questions: [
          { q: 'Before going on the road, children are first taken to ride in the ___ .', a: 'park' },
          { q: 'The instructors themselves wear ___ shirts.', a: 'blue' },
          { q: 'Instructors must submit a ___ from someone who has seen them work with children.', a: 'reference' },
          { q: 'In quiet times, the instructor might tell the children a ___ .', a: 'story' },
          { q: 'Classes still go ahead even if it ___ (bad weather).', a: 'rains' },
          { q: 'Children should bring a ___ for break time.', a: 'snack' },
          { q: 'Charlie has to take ___ every few hours.', a: 'medication' },
          { q: 'On Day 1 there is a careful check that the child’s ___ fits properly.', a: 'helmet' },
          { q: 'Instructors and their class meet up in the ___ .', a: 'tent' },
          { q: 'Cost of the camp per week: $___ .', a: '199' }
        ]
      },
      {
        part: 'Part 2',
        context: '招聘顾问 Megan Baker 介绍农业/园艺行业职业机会（AVT Recruitment）',
        type: '多选题（选两项字母）+ 工作匹配（选字母）',
        questions: [
          { q: 'Questions 11–12: Which TWO does Megan say are advantages of working in agriculture/horticulture? (A flexible hours, B work outdoors, C health benefits, D travel, E high salaries)', a: 'A, C' },
          { q: 'Questions 13–14: Which TWO disadvantages does Megan mention? (A low pay, B unpleasant in bad weather, C remote locations, D hard to find accommodation, E physically demanding)', a: 'B, C' },
          { q: 'Q15: Which post is in a “very fast-paced environment” where staff “work hard, play hard”?', a: 'D' },
          { q: 'Q16: Which post offers good opportunities to move quickly up the career ladder?', a: 'F' },
          { q: 'Q17: Which post is a 12-month maternity cover?', a: 'A' },
          { q: 'Q18: Which post involves visiting garden centres in the region?', a: 'H' },
          { q: 'Q19: Which post might accept someone who has just completed a training course?', a: 'C' },
          { q: 'Q20: Which post may include renting a small cottage on the estate?', a: 'G' }
        ]
      },
      {
        part: 'Part 3',
        context: '两名学生 Adam 与 Rosie 讨论饮食与肥胖课堂展示的构思',
        type: '多选 + 句子填空/配对',
        questions: [
          { q: 'Questions 21–22: Which TWO points did Adam make about his sweetener experiment? (C participants did not know which drink they had, D he tested a large number of people)', a: 'C, D' },
          { q: 'Questions 23–24: Which TWO problems does Rosie think affected her nut-fat experiment? (C nuts not ground enough, E scales not accurate enough)', a: 'C, E' },
          { q: 'Q25: Putting low-calorie items at the beginning and end of a menu makes people choose them — TRUE of menus?', a: 'C' },
          { q: 'Q26: Rosie thinks manufacturers make calorie labels confusing on purpose.', a: 'A' },
          { q: 'Q27: Self-reported exercise vs measured exercise (40%/30% vs 6%/4%): which is correct?', a: 'B' },
          { q: 'Q28: Increasing the ___ of stairs gets more people to use them.', a: 'A' },
          { q: 'Q29: Adam thinks they should NOT include exercise in the presentation.', a: 'A' },
          { q: 'Q30: They decide to plan what to include and where it will go.', a: 'C' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于手工编织（hand knitting）的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'People often picture an elderly person, e.g. a ___ , knitting by the fire.', a: 'grandmother' },
          { q: 'In the previous ___ , knitting was predicted to vanish.', a: 'decade' },
          { q: 'Sales of knitting ___ are increasing.', a: 'equipment' },
          { q: 'Knitting can help during ___ hardship.', a: 'economic' },
          { q: 'The skills needed to start are quite ___ .', a: 'basic' },
          { q: 'The earliest knitted items were mostly ___ (not flat).', a: 'round' },
          { q: 'Early needles were made from wood or other natural materials like ___ .', a: 'bone' },
          { q: 'Linen/hemp yarns were often very ___ on the skin.', a: 'rough' },
          { q: 'Regional differences in ___ developed.', a: 'style' },
          { q: 'People knitted while watching over ___ .', a: 'sheep' }
        ]
      }
    ];

    // ---------------- 阅读（真实） ----------------
    t3.reading.passages = [
      {
        title: 'Passage 1: Roman shipbuilding and navigation',
        difficulty: '中等',
        summary: '古罗马造船依靠经验与继承的技术，战船与商船特点、以及依靠地标与天体导航的方式。',
        questions: [
          { type: '判断题 (True/False/Not Given)', q: 'The Romans traditionally considered themselves to be a seafaring people.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Mosaic art was used by the Romans to decorate the floors of their ships.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'The Romans built ships long before the Greeks and Egyptians.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'Warships were designed to sail close to the coast.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Merchant ships and warships used both sails and oars.', a: 'TRUE' },
          { type: '摘要填空（每空一词）', q: 'Warships were built to be ___ so they could be fast.', a: 'lightweight' },
          { type: '摘要填空（每空一词）', q: 'Warships had a ___ ram to pierce enemy hulls.', a: 'bronze' },
          { type: '摘要填空（每空一词）', q: 'Rowers sat on different ___ (top, middle, lower).', a: 'levels' },
          { type: '摘要填空（每空一词）', q: 'Merchant ships had a deep V-shaped ___ .', a: 'hull' },
          { type: '摘要填空（每空一词）', q: 'Merchant ships had a small ___ sail at the bow.', a: 'triangular' },
          { type: '摘要填空（每空一词）', q: 'Music helped oarsmen keep ___ with the rhythm.', a: 'time' },
          { type: '摘要填空（每空一词）', q: 'Rome imported ___ from Egypt’s Nile valley.', a: 'grain' },
          { type: '摘要填空（每空一词）', q: 'Ships were dragged to quay by ___ .', a: 'towboats' }
        ]
      },
      {
        title: 'Passage 2: Climate change reveals ancient artefacts in Norway’s glaciers',
        difficulty: '中偏难',
        summary: '气候变暖使挪威高山冰川消融，露出数千年的狩猎器物，并揭示古人在寒冷期的山地活动。',
        questions: [
          { type: '段落信息匹配（选段落字母 A–H）', q: 'a mention of items that would have been thrown away after a hunting trip', a: 'D' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'a reference to the limited spread of ice found in the research area', a: 'C' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'examples of artefacts that are only revealed after the ice melts', a: 'F' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'mention of artefacts that are unlikely to have been discovered except by chance', a: 'H' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'reference to the possibility of artefacts being destroyed by natural forces', a: 'G' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'a description of organic materials that are rarely found intact', a: 'B' },
          { type: '摘要填空（每空一词）', q: 'Organic artefacts decay because of ___ that break them down.', a: 'microorganisms' },
          { type: '摘要填空（每空一词）', q: 'Reindeer gathered on ice patches to escape biting ___ .', a: 'insects' },
          { type: '摘要填空（每空一词）', q: 'Trade routes through the mountains linked Norway with the rest of ___ .', a: 'Europe' },
          { type: '多选题（选两项字母）', q: 'Which TWO things did glacial archaeologists have to deal with?', a: 'B, C' },
          { type: '多选题（选两项字母）', q: 'Which TWO findings surprised researchers about mountain activity?', a: 'A, C' }
        ]
      },
      {
        title: 'Passage 3: Plant ‘thermometer’ triggers springtime growth by measuring night-time heat',
        difficulty: '难',
        summary: '剑桥大学发现植物光受体 phytochrome 在夜间充当"温度计"，感知温度调控春季生长，有助于培育耐气候作物。',
        questions: [
          { type: '判断题 (True/False/Not Given)', q: 'The Cambridge team’s findings were based on a single species of plant.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Light and temperature both affect plant growth through the same mechanism.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'Phytochromes change their state more quickly in warmer conditions.', a: 'TRUE' },
          { type: '判断题 (True/False/Not Given)', q: 'The phytochrome mechanism is unique to Arabidopsis.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'Plants grow more slowly in winter because phytochromes remain active longer.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'The rhyme about oak and ash trees has no scientific basis.', a: 'FALSE' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'a description of the experiment that led to the discovery', a: 'H' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'an explanation of how phytochromes react to sunlight', a: 'D' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'examples of plants that use temperature as a signal', a: 'G' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'a reference to the potential benefits for agriculture', a: 'C' },
          { type: '段落信息匹配（选段落字母 A–H）', q: 'an outline of the historical background of the research', a: 'A' },
          { type: '句子完成（不超过两词）', q: 'Warm winters can cause trees and flowers to bud ___ .', a: 'early' },
          { type: '句子完成（不超过两词）', q: 'A hotter summer is more likely after a ___ spring.', a: 'warm' },
          { type: '句子完成（不超过两词）', q: 'The research used a model plant called ___ .', a: 'Arabidopsis' }
        ]
      }
    ];

    t3.reading.passages[0].text = `Shipbuilding today is based on science and ships are built using computers and sophisticated tools. Shipbuilding in ancient Rome, however, was more of an art relying on estimation, inherited techniques and personal experience. The Romans were not traditionally sailors but mostly land-based people, who learned to build ships from the people that they conquered, namely the Greeks and the Egyptians.

There are a few surviving written documents that give descriptions and representations of ancient Roman ships, including the sails and rigging. Excavated vessels also provide some clues about ancient shipbuilding techniques. Studies of these have taught us that ancient Roman shipbuilders built the outer hull first, then proceeded with the frame and the rest of the ship. Planks used to build the outer hull were initially sewn together. Starting from the 6th century BCE, they were fixed using a method called mortise and tenon, whereby one plank locked into another without the need for stitching. Then in the first centuries of the current era, Mediterranean shipbuilders shifted to another shipbuilding method, still in use today, which consisted of building the frame first and then proceeding with the hull and the other components of the ship. This method was more systematic and dramatically shortened ship construction times. The ancient Romans built large merchant ships and warships whose size and technology were unequalled until the 16th century CE.

Warships were built to be lightweight and very speedy. They had to be able to sail near the coast which is why they had no ballast or excess load and were built with a long, narrow hull. They did not sink when damaged and often would lie crippled on the sea’s surface following naval battles. They had a bronze battering ram, which was used to pierce the timber hulls or break the oars of enemy vessels. Warships used both wind (sails) and human power (oarsmen) and were therefore very fast. Eventually, Rome’s navy became the largest and most powerful in the Mediterranean, and the Romans had control over what they therefore called Mare Nostrum meaning ‘our sea’.

There were many kinds of warship. The ‘trireme’ was the dominant warship from the 7th to 4th century BCE. It had rowers in the top, middle and lower levels, and approximately 50 rowers in each bank. The rowers at the bottom had the most uncomfortable position as they were under the other rowers and were exposed to the water entering through the oar-holes. It is worth noting that contrary to popular perception, rowers were not slaves but mostly Roman citizens enrolled in the military. The trireme was superseded by larger ships with even more rowers.

Merchant ships were built to transport lots of cargo over long distances and at a reasonable cost. They had a wider hull, double planking and a solid interior for added stability. Unlike warships, their V-shaped hull was deep underwater, meaning that they could not sail too close to the coast. They usually had two huge side rudders located off the stern and controlled by a small tiller bar connected to a system of cables. They had from one to three masts with large square sails and a small triangular sail at the bow. Just like warships, merchant ships used oarsmen, but coordinating the hundreds of rowers in both types of ship was not an easy task. In order to assist them, music would be played on an instrument, and oars would then keep time with this.

The cargo on merchant ships included raw materials (e.g. iron bars, copper, marble and granite), and agricultural products (e.g. grain from Egypt’s Nile valley). During the Empire, Rome was a huge city by ancient standards of about one million inhabitants. Goods from all over the world would come to the city through the port of Pozzuoli situated west of the bay of Naples in Italy and through the gigantic port of Ostia situated at the mouth of the Tiber River. Large merchant ships would approach the destination port and, just like today, be intercepted by a number of towboats that would drag them to the quay.

The time of travel along the many sailing routes could vary widely. Navigation in ancient Rome did not rely on sophisticated instruments such as compasses but on experience, local knowledge and observation of natural phenomena. In conditions of good visibility, seamen in the Mediterranean often had the mainland or islands in sight, which greatly facilitated navigation. They sailed by noting their position relative to a succession of recognisable landmarks. When weather conditions were not good or where land was no longer visible, Roman mariners estimated directions from the pole star or, with less accuracy, from the Sun at noon. They also estimated directions relative to the wind and swell. Overall, shipping in ancient Roman times resembled shipping today with large vessels regularly crossing the seas and bringing supplies from their Empire.`;

    t3.reading.passages[1].text = `Well above the treeline in Norway’s highest mountains, ancient fields of ice are shrinking as Earth’s climate warms. As the ice has vanished, it has been giving up the treasures it has preserved in cold storage for the last 6,000 years – items such as ancient arrows and skis from Viking Age traders. And those artefacts have provided archaeologists with some surprising insights into how ancient Norwegians made their livings.

*Viking Age: a period of European history from around 700 CE to around 1050 CE when Scandinavian Vikings migrated throughout Europe by means of trade and warfare

Organic materials like textiles and hides are relatively rare finds at archaeological sites. This is because unless they’re protected from the microorganisms that cause decay, they tend not to last long. Extreme cold is one reliable way to keep artefacts relatively fresh for a few thousand years, but once thawed out, these materials experience degradation relatively swiftly.

With climate change shrinking ice cover around the world, glacial archaeologists need to race the clock to find newly revealed artefacts, preserve them, and study them. If something fragile dries and is windblown it might very soon be lost to science, or an arrow might be exposed and then covered again by the next snow and remain well-preserved. The unpredictability means that glacial archaeologists have to be systematic in their approach to fieldwork.

Over a nine-year period, a team of archaeologists, which included Lars Pilø of Oppland County Council, Norway, and James Barrett of the McDonald Institute for Archaeological Research, surveyed patches of ice in Oppland, an area of south-central Norway that is home to some of the country’s highest mountains. Reindeer once congregated on these ice patches in the later summer months to escape biting insects, and from the late Stone Age, hunters followed. In addition, trade routes threaded through the mountain passes of Oppland, linking settlements in Norway to the rest of Europe.

The slow but steady movement of glaciers tends to destroy anything at their bases, so the team focused on stationary patches of ice, mostly above 1,400 metres. That ice is found amid fields of frost-weathered boulders, fallen rocks, and exposed bedrock that for nine months of the year is buried beneath snow.

Fieldwork is hard work – hiking with all our equipment, often camping on permafrost – but very rewarding. You’re rescuing the archaeology, bringing the melting ice to wider attention, discovering a unique environmental history and really connecting with the natural environment, says Barrett.

**The Stone Age: a period in early history that began about 3.4 million years ago

At the edges of the contracting ice patches, archaeologists found more than 2,000 artefacts, which formed a material record that ran from 4,000 BCE to the beginnings of the Renaissance in the 14th century. Many of the artefacts are associated with hunting. Hunters would have easily misplaced arrows and they often discarded broken bows rather than take them all the way home. Other items could have been used by hunters traversing the high mountain passes of Oppland: all-purpose items like tools, skis, and horse tack.

Barrett’s team radiocarbon-dated 153 of the artefacts and compared those dates to the timing of major environmental changes in the region – such as periods of cooling or warming – and major social and economic shifts – such as the growth of farming settlements and the spread of international trade networks leading up to the Viking Age. They found that some periods had produced lots of artefacts, which indicates that people had been pretty active in the mountains during those times. But there were few or no signs of activity during other periods.

What was surprising, according to Barrett, was the timing of these periods. Oppland’s mountains present daunting terrain and in periods of extreme cold, glaciers could block the higher mountain passes and make travel in the upper reaches of the mountains extremely difficult. Archaeologists assumed people would stick to lower elevations during a time like the Late Antique Little Ice Age, a short period of deeper-than-usual cold from about 536–600 CE. But it turned out that hunters kept regularly venturing into the mountains even when the climate turned cold, based on the amount of stuff they had apparently dropped there.

Remarkably, though, the finds from the ice may have continued through this period, perhaps suggesting that the importance of mountain hunting increased to supplement failing agricultural harvests in times of low temperatures, says Barrett. A colder turn in the Scandinavian climate would likely have meant widespread crop failures, so more people would have depended on hunting to make up for those losses.

Many of the artefacts Barrett’s team recovered date from the beginning of the Viking Age, the 700s through to the 900s CE. Trade networks connecting Scandinavia with Europe and the Middle East were expanding around this time. Although we usually think of ships when we think of Scandinavian expansion, these recent discoveries show that plenty of goods travelled on overland routes, like the mountain passes of Oppland. And growing Norwegian towns, along with export markets, would have created a booming demand for hides to fight off the cold, as well as antlers to make useful things like combs. Business must have been good for hunters.

Norway’s mountains are probably still hiding a lot of history – and prehistory – in remote ice patches. When Barrett’s team looked at the dates for their sample of 153 artefacts, they noticed a gap with almost no artefacts from about 3,800 to 2,200 BCE. In fact, archaeological finds from that period are rare all over Norway. The researchers say that could be because many of those artefacts have already disintegrated or are still frozen in the ice. That means archaeologists could be extracting some of those artefacts from retreating ice in years to come.`;

    t3.reading.passages[2].text = `A photoreceptor molecule in plant cells has been found to have a second job as a thermometer after dark – allowing plants to read seasonal temperature changes. Scientists say the discovery could help breed crops that are more resilient to the temperatures expected to result from climate change.

An international team of scientists led by the University of Cambridge has discovered that the ‘thermometer’ molecule in plants enables them to develop according to seasonal temperature changes. Researchers have revealed that molecules called phytochromes – used by plants to detect light during the day – actually change their function in darkness to become cellular temperature gauges that measure the heat of the night.

The new findings, published in the journal Science, show that phytochromes control genetic switches in response to temperature as well as light to dictate plant development.

At night, these molecules change states, and the pace at which they change is ‘directly proportional to temperature’, say scientists, who compare phytochromes to mercury in a thermometer. The warmer it is, the faster the molecular change – stimulating plant growth.

Farmers and gardeners have known for hundreds of years how responsive plants are to temperature: warm winters cause many trees and flowers to bud early, something humans have long used to predict weather and harvest times for the coming year. The latest research pinpoints for the first time a molecular mechanism in plants that reacts to temperature – often triggering the buds of spring we long to see at the end of winter.

With weather and temperatures set to become ever more unpredictable due to climate change, researchers say the discovery that this light-sensing molecule also functions as the internal thermometer in plant cells could help us breed tougher crops. ‘It is estimated that agricultural yields will need to double by 2050, but climate change is a major threat to achieving this. Key crops such as wheat and rice are sensitive to high temperatures. Thermal stress reduces crop yields by around 10% for every one degree increase in temperature,’ says lead researcher Dr Philip Wigge from Cambridge’s Sainsbury Laboratory. ‘Discovering the molecules that allow plants to sense temperature has the potential to accelerate the breeding of crops resilient to thermal stress and climate change.’

In their active state, phytochrome molecules bind themselves to DNA to restrict plant growth. During the day, sunlight activates the molecules, slowing down growth. If a plant finds itself in shade, phytochromes are quickly inactivated – enabling it to grow faster to find sunlight again. This is how plants compete to escape each other’s shade. ‘Light-driven changes to phytochrome activity occur very fast, in less than a second,’ says Wigge.

At night, however, it’s a different story. Instead of a rapid deactivation following sundown, the molecules gradually change from their active to inactive state. This is called ‘dark reversion’. ‘Just as mercury rises in a thermometer, the rate at which phytochromes revert to their inactive state during the night is a direct measure of temperature,’ says Wigge.

The lower the temperature, the slower the rate at which phytochromes revert to inactivity, so the molecules spend more time in their active, growth-suppressing state. This is why plants are slower to grow in winter. Warm temperatures accelerate dark reversion, so that phytochromes rapidly reach an inactive state and detach themselves from the plant’s DNA – allowing genes to be expressed and plant growth to resume. Wigge believes phytochrome thermo-sensing evolved at a later stage, and co-opted the biological network already used for light-based growth during the downtime of night.

Some plants mainly use day length as an indicator of the season. Other species, such as daffodils, have considerable temperature sensitivity, and can flower months in advance during a warm winter. In fact, the discovery of the dual role of phytochromes provides the science behind a well-known rhyme long used to predict the coming season: oak before ash we’ll have a plash, ash before oak we’re in for a soak.

Wigge explains: ‘Oak trees rely much more on temperature, likely using phytochromes as thermometers to dictate development, whereas ash trees rely on measuring day length to determine their seasonal timing. A warmer spring, and consequently a higher likeliness of a hot summer, will result in oak leafing before ash. A cold spring will see the opposite. As the British know only too well, a colder summer is likely to be a rain-soaked one.’

The new findings are the culmination of twelve years of research involving scientists from Germany, Argentina and the US, as well as the Cambridge team. The work was done in a model system, using a mustard plant called Arabidopsis, but Wigge says the phytochrome genes necessary for temperature sensing are found in crop plants as well. ‘Recent advances in plant genetics now mean that scientists are able to rapidly identify the genes controlling these processes in crop plants, and even alter their activity using precise molecular “scalpels”,’ adds Wigge. ‘Cambridge is uniquely well-positioned to do this kind of research as we have outstanding collaborators nearby who work on more applied aspects of plant biology, and can help us transfer this new knowledge into the field.’`;

    // ---------------- 写作（真实题目 + 范文示例） ----------------
    t3.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '地图/平面图描述',
        prompt: 'The plans below show the site of an airport now and how it will look after redevelopment next year.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The plans illustrate the current layout of an airport and the changes that are planned after its redevelopment next year.\n\nOverall, the redevelopment will make the airport considerably larger and more modern. The most noticeable changes are the addition of a new runway and a second terminal, while the main terminal and the car park will be expanded.\n\nAt present, there is a single runway in the west of the site and a main terminal in the centre, with a car park to its north. A bus station is located to the south-east, and a road runs around the perimeter linking all the facilities.\n\nAfter redevelopment, a new runway will be built to the south of the existing one, and a second terminal will be constructed to the east of the main terminal. The original terminal will be extended, and the car park will be made larger to cope with increased demand. A new taxi rank and a new hotel are also planned, the hotel being placed in the north-east corner of the site. The road network will be enlarged to connect the new buildings.\n\nIn summary, the airport will grow in both capacity and the range of services it offers.',
        tips: '先总览(overview)再分述；对比现在与未来；描述方位用 north/south/east/west；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（同意/不同意）',
        prompt: 'Many manufactured food and drink products contain high levels of sugar, which causes many health problems. Sugary products should be made more expensive to encourage people to consume less sugar. Do you agree or disagree?\n\nWrite at least 250 words.',
        modelAnswer: 'It is true that many processed foods and drinks contain large amounts of sugar, and that this contributes to serious health problems such as obesity and diabetes. Some argue that raising the price of sugary products is the best way to reduce consumption. I partly agree, but I believe this measure should be combined with other approaches.\n\nOn the one hand, making sugary items more expensive would probably discourage some people, particularly those on low incomes, from buying them. A higher price acts as a signal and can shift behaviour, much like taxes on tobacco have reduced smoking. If the extra money were used to subsidise healthier food, the effect could be even stronger.\n\nOn the other hand, a price increase alone is unfair and may not work well. Poor families would be penalised for a problem that is largely created by manufacturers and aggressive marketing. Moreover, people may simply switch to other cheap, unhealthy products. Education about nutrition and clearer labelling are also needed so that consumers understand the risks and can make informed choices.\n\nIn my view, a modest “sugar tax” is a reasonable step, but it should be only one part of a broader strategy that includes education, restrictions on advertising to children, and support for healthier alternatives. Relying on price alone is unlikely to solve the problem.\n\nIn conclusion, although making sugary products more expensive may help, it should be introduced alongside education and regulation to be truly effective.',
        tips: '明确立场（部分同意）；分别论述价格手段的作用与局限；提出综合方案；至少250词'
      }
    ];

    // ---------------- 口语（真实话题 + 参考回答示例） ----------------
    t3.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Shopping',
        questions: [
          { q: 'Do you enjoy shopping? [Why/Why not?]', a: '参考回答: Yes, I enjoy it because it’s relaxing and I like finding good deals, though I try not to overspend.' },
          { q: 'What kinds of things do you usually buy?', a: '参考回答: Mostly clothes, groceries, and occasionally gifts for family or friends.' },
          { q: 'Where do you usually shop?', a: '参考回答: I usually go to local markets and shopping malls because they have a wide range of options.' },
          { q: 'Do you prefer shopping alone or with other people? [Why?]', a: '参考回答: I prefer shopping alone because I can take my time and don’t feel rushed by others.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe a time when you made a complaint and were satisfied with the result.\n\nYou should say:\n– who you complained to\n– what you complained about\n– what happened as a result\n– and explain why you were satisfied with the result.',
        modelAnswer: '参考回答:\n\nLast year I ordered a jacket online, but when it arrived it was the wrong size and colour. I complained to the customer service team by email, explaining the problem and attaching photos.\n\nThey replied quickly and asked me to return the jacket free of charge. Within a week they sent me the correct one, and they also refunded the postage. I was satisfied because they solved the problem without any hassle and were polite and professional throughout.\n\nThis experience made me trust that company more, and it showed me that complaining politely but clearly can lead to a good outcome. I would not hesitate to shop with them again.',
        tips: '覆盖全部四个要点；用过去时；加入具体细节与感受；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Complaints',
        questions: [
          { q: 'Why do some people find it difficult to complain?', a: '参考回答: They may feel shy or worry it will cause conflict, or they think nothing will change.' },
          { q: 'Do you think it’s always worth complaining when you’re not satisfied with something?', a: '参考回答: Not always – small things can be let go, but for serious problems it is important to speak up.' },
          { q: 'How can companies handle complaints better?', a: '参考回答: They should listen carefully, respond quickly, and offer fair solutions to keep customers happy.' }
        ]
      }
    ];
  }

  // ============================================================
  // 剑16 TEST 4
  // ============================================================
  var t4 = null;
  book.tests.forEach(function (t) { if (t.id === 4) t4 = t; });
  if (t4) {

    // ---------------- 听力（真实） ----------------
    t4.listening.sections = [
      {
        part: 'Part 1',
        context: 'Tom 致电房东 Shirley 咨询五月租用 Chervil Cottage 度假屋',
        type: '笔记填空（每空一词及/或一数字）',
        questions: [
          { q: 'Chervil Cottage is available the week beginning ___ May.', a: '28th' },
          { q: 'Cost of Chervil Cottage per week: £___ .', a: '480' },
          { q: 'The other cottage (built as a garage) is called ___ Cottage.', a: 'Chervil' },
          { q: 'The building was originally a ___ .', a: 'garage' },
          { q: 'You reach the ___ from the living room through French doors.', a: 'garden' },
          { q: 'There is plenty of ___ space at the front.', a: 'parking' },
          { q: 'The stove burns ___ (provided by the owners).', a: 'wood' },
          { q: 'From the living room you can see a famous stone ___ .', a: 'bridge' },
          { q: 'From the bedroom you can see a hilltop ___ .', a: 'monument' },
          { q: 'The final payment deadline is the end of ___ .', a: 'March' }
        ]
      },
      {
        part: 'Part 2',
        context: '地方议会关于交通与道路、以及休闲场地改造的会议报告',
        type: '选择题 + 地图标注',
        questions: [
          { q: 'Q11: A survey found people’s main concern about traffic was', a: 'C (changes in the type of traffic)' },
          { q: 'Q12: The cycle path next to the river will shortly be', a: 'A (widened)' },
          { q: 'Q13: Plans for a pedestrian crossing have been postponed because', a: 'B (the proposed location is unsafe)' },
          { q: 'Q14: On Station Road, notices have been erected', a: 'B (asking motorists not to leave engines running)' },
          { q: 'Q15: New car park (map letter)', a: 'C' },
          { q: 'Q16: New cricket pitch (map letter)', a: 'F' },
          { q: 'Q17: Children’s playground (map letter)', a: 'A' },
          { q: 'Q18: Skateboard ramp (map letter)', a: 'I' },
          { q: 'Q19: Pavilion (map letter)', a: 'E' },
          { q: 'Q20: Notice board (map letter)', a: 'H' }
        ]
      },
      {
        part: 'Part 3',
        context: '两名学生 Jake 与 Amy 讨论城市共享单车报告的构思',
        type: '多选 + 观点匹配',
        questions: [
          { q: 'Questions 21–22: Which TWO benefits of bike-sharing do they agree are most important? (B reduced congestion, C improved air quality)', a: 'B, C' },
          { q: 'Questions 23–24: Which TWO things are necessary for success? (B easy-to-use app, C public awareness campaign)', a: 'B, C' },
          { q: 'Q25: Amsterdam – they are surprised it has been so successful.', a: 'C' },
          { q: 'Q26: Dublin – they disagree about the reasons for its success.', a: 'F' },
          { q: 'Q27: London – more investment (cycle lanes) is required.', a: 'D' },
          { q: 'Q28: Buenos Aires – they think the system has been well designed.', a: 'E' },
          { q: 'Q29: New York – they think it should be cheaper.', a: 'B' },
          { q: 'Q30: Sydney – they agree it has been disappointing.', a: 'A' }
        ]
      },
      {
        part: 'Part 4',
        context: '关于渡渡鸟（dodo）灭绝的讲座',
        type: '笔记填空（每空一词）',
        questions: [
          { q: 'In 1507 Portuguese ships carrying ___ stopped at Mauritius.', a: 'spices' },
          { q: 'In 1638 the Dutch established a ___ on the island.', a: 'colony' },
          { q: 'A Dutch painting shows the dodo was very ___ .', a: 'fat' },
          { q: 'The only surviving soft tissue is a dried dodo ___ .', a: 'head' },
          { q: 'Studies suggest the dodo was capable of rapid ___ .', a: 'movement' },
          { q: 'Small wings were probably used to maintain ___ .', a: 'balance' },
          { q: 'Its ___ was of average size, not small.', a: 'brain' },
          { q: 'Its sense of ___ helped it find food.', a: 'smell' },
          { q: '___ also escaped from ships and ate the birds’ eggs.', a: 'Rats' },
          { q: 'The arrival of farming meant the ___ was destroyed.', a: 'forest' }
        ]
      }
    ];

    // ---------------- 阅读（真实） ----------------
    t4.reading.passages = [
      {
        title: 'Passage 1: Roman tunnels',
        difficulty: '中等',
        summary: '罗马人借鉴波斯 qanat 法与 counter-excavation 法开凿隧道，用于供水、道路与采矿。',
        questions: [
          { type: '图表标注（每空一词）', q: 'Posts were placed over a hill in a straight line to keep the tunnel on ___ .', a: 'route' },
          { type: '图表标注（每空一词）', q: 'Dug earth was removed up the shafts to a ___ .', a: 'canal' },
          { type: '图表标注（每空一词）', q: 'Shafts provided ___ during the work.', a: 'ventilation' },
          { type: '图表标注（每空一词）', q: 'Shafts were covered with a wooden or stone ___ .', a: 'lid' },
          { type: '图表标注（每空一词）', q: 'Climbers used handholds and footholds to control the ___ of the shaft.', a: 'depth' },
          { type: '图表标注（每空一词）', q: 'A plumb line helped check the ___ of the tunnel.', a: 'slope' },
          { type: '判断题 (True/False/Not Given)', q: 'The qanat method was invented by the Romans.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'The Romans built tunnels using only the counter-excavation method.', a: 'NOT GIVEN' },
          { type: '判断题 (True/False/Not Given)', q: 'The counter-excavation method required advanced surveying knowledge.', a: 'FALSE' },
          { type: '判断题 (True/False/Not Given)', q: 'The Claudius tunnel took eleven years to build.', a: 'TRUE' },
          { type: '简答题（不超过两词）', q: 'Traces of tunnels used to mine ___ can be found in Wales.', a: 'gold' },
          { type: '简答题（不超过两词）', q: 'Inscriptions often show the name of the ___ .', a: 'architect' },
          { type: '简答题（不超过两词）', q: 'The Çevlik tunnel was built to divert floodwater from the ___ .', a: 'harbour' }
        ]
      },
      {
        title: 'Passage 2: Changes in reading habits',
        difficulty: '中偏难',
        summary: '数字阅读时代下，人类"深度阅读"神经回路的变化及对理解力与同理心的影响。',
        questions: [
          { type: '选择题（单选）', q: 'What point does the writer make about the reading brain?', a: 'A' },
          { type: '选择题（单选）', q: 'According to the writer, what has changed in the reading circuit?', a: 'B' },
          { type: '选择题（单选）', q: 'What does the writer say about print versus digital reading?', a: 'D' },
          { type: '选择题（单选）', q: 'What does Mark Edmundson describe about college students?', a: 'B' },
          { type: '摘要填空（选词 A–H）', q: 'The move to digital reading is described as ___ for society.', a: 'D' },
          { type: '摘要填空（选词 A–H）', q: 'Research into the reading brain has been ___ .', a: 'H' },
          { type: '摘要填空（选词 A–H）', q: 'Understanding deep reading is ___ to achieve.', a: 'F' },
          { type: '摘要填空（选词 A–H）', q: 'Some readers feel ___ from the world of books.', a: 'B' },
          { type: '摘要填空（选词 A–H）', q: 'Skimming leads to a loss of ___ engagement.', a: 'C' },
          { type: '判断题 (Yes/No/Not Given)', q: 'The writer believes digital reading will completely replace print.', a: 'YES' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Older students are better at screen reading than print.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'All age groups are equally affected by digital reading.', a: 'NOT GIVEN' },
          { type: '判断题 (Yes/No/Not Given)', q: 'We can still change how we read before the effects become fixed.', a: 'YES' }
        ]
      },
      {
        title: 'Passage 3: Attitudes towards Artificial Intelligence',
        difficulty: '难',
        summary: '人们为何不信任 AI 预测、媒体偏见的影响，以及提升信任的建议。',
        questions: [
          { type: '段落标题匹配（选标题 i–viii）', q: 'Paragraph A', a: 'iii' },
          { type: '段落标题匹配（选标题 i–viii）', q: 'Paragraph B', a: 'vi' },
          { type: '段落标题匹配（选标题 i–viii）', q: 'Paragraph C', a: 'ii' },
          { type: '段落标题匹配（选标题 i–viii）', q: 'Paragraph D', a: 'i' },
          { type: '段落标题匹配（选标题 i–viii）', q: 'Paragraph E', a: 'vii' },
          { type: '段落标题匹配（选标题 i–viii）', q: 'Paragraph F', a: 'v' },
          { type: '选择题（单选）', q: 'What is the writer’s main point in Paragraph B (Watson for Oncology)?', a: 'C' },
          { type: '选择题（单选）', q: 'Why do people distrust AI, according to the writer?', a: 'B' },
          { type: '选择题（单选）', q: 'What does the experiment in Paragraph D show?', a: 'A' },
          { type: '判断题 (Yes/No/Not Given)', q: 'AI is always more accurate than human forecasts.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'People’s attitudes to AI are influenced by the media they consume.', a: 'NOT GIVEN' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Allowing people some control over AI improves trust.', a: 'YES' },
          { type: '判断题 (Yes/No/Not Given)', q: 'High-profile companies already publish AI transparency reports.', a: 'NO' },
          { type: '判断题 (Yes/No/Not Given)', q: 'Understanding AI fully is necessary to trust it.', a: 'YES' }
        ]
      }
    ];

    t4.reading.passages[0].text = `The Romans, who once controlled areas of Europe, North Africa and Asia Minor, adopted the construction techniques of other civilizations to build tunnels in their territories.

The Persians, who lived in present-day Iran, were one of the first civilizations to build tunnels that provided a reliable supply of water to human settlements in dry areas. In the early first millennium BCE, they introduced the qanat method of tunnel construction, which consisted of placing posts over a hill in a straight line, to ensure that the tunnel kept to its route, and then digging vertical shafts down into the ground at regular intervals. Underground, workers removed the earth from between the ends of the shafts, creating a tunnel. The excavated soil was taken up to the surface using the shafts, which also provided ventilation during the work. Once the tunnel was completed, it allowed water to flow from the top of a hillside down towards a canal, which supplied water for human use. Remarkably, some qanats built by the Persians 2,700 years ago are still in use today.

They later passed on their knowledge to the Romans, who also used the qanat method to construct water-supply tunnels for agriculture. Roma qanat tunnels were constructed with vertical shafts dug at intervals of between 30 and 60 meters. The shafts were equipped with handholds and footholds to help those climbing in and out of them and were covered with a wooden or stone lid. To ensure that the shafts were vertical, Romans hung a plumb line from a rod placed across the top of each shaft and made sure that the weight at the end of it hung in the center of the shaft. Plumb lines were also used to measure the depth of the shaft and to determine the slope of the tunnel. The 5.6-kilometer-long Claudius tunnel, built in 41 CE to drain the Fucine Lake in central Italy, had shafts that were up to 122 meters deep, took 11 years to build and involved approximately 30,000 workers.

By the 6th century BCE, a second method of tunnel construction appeared called the counter-excavation method, in which the tunnel was constructed from both ends. It was used to cut through high mountains when the qanat method was not a practical alternative. This method required greater planning and advanced knowledge of surveying, mathematics and geometry as both ends of a tunnel had to meet correctly at the center of the mountain. Adjustments to the direction of the tunnel also had to be made whenever builders encountered geological problems or when it deviated from its set path. They constantly checked the tunnel’s advancing direction, for example, by looking back at the light that penetrated through the tunnel mouth, and made corrections whenever necessary. Large deviations could happen, and they could result in one end of the tunnel not being usable. An inscription written on the side of a 428-meter tunnel, built by the Romans as part of the Saldae aqueduct system in modern-day Algeria, describes how the two teams of builders missed each other in the mountain and how the later construction of a lateral link between both corridors corrected the initial error.

The Romans dug tunnels for their roads using the counter-excavation method, whenever they encountered obstacles such as hills or mountains that were too high for roads to pass over. An example is the 37-meter-long, 6-meter-high, Furlo Pass Tunnel built in Italy in 69–79 CE. Remarkably, a modern road still uses this tunnel today. Tunnels were also built for mineral extraction. Miners would locate a mineral vein and then pursue it with shafts and tunnels underground. Traces of such tunnels used to mine gold can still be found at the Dolaucothi mines in Wales. When the sole purpose of a tunnel was mineral extraction, construction required less planning, as the tunnel route was determined by the mineral vein.

Roman tunnel projects were carefully planned and carried out. The length of time it took to construct a tunnel depended on the method being used and the type of rock being excavated. The qanat construction method was usually faster than the counter-excavation method as it was more straightforward. This was because the mountain could be excavated not only from the tunnel mouths but also from shafts. The type of rock could also influence construction times. When the rock was hard, the Romans employed a technique called fire quenching which consisted of heating the rock with fire, and then suddenly cooling it with cold water so that it would crack. Progress through hard rock could be very slow, and it was not uncommon for tunnels to take years, if not decades, to be built. Construction marks left on a Roman tunnel in Bologna show that the rate of advance through solid rock was 30 centimeters per day. In contrast, the rate of advance of the Claudius tunnel can be calculated at 1.4 meters per day. Most tunnels had inscriptions showing the names of patrons who ordered construction and sometimes the name of the architect. For example, the 1.4-kilometer Çevlik tunnel in Turkey, built to divert the floodwater threatening the harbor of the ancient city of Seleuceia Pieria, had inscriptions on the entrance, still visible today, that also indicate that the tunnel was started in 69 CE and was completed in 81 CE.`;

    t4.reading.passages[1].text = `What are the implications of the way we read today?

Look around on your next plane trip. The iPad is the new pacifier for babies and toddlers. Younger school-aged children read stories on smartphones; older kids don’t read at all, but hunch over video games. Parents and other passengers read on tablets or skim a flotilla of email and news feeds. Unbeknown to most of us, an invisible, game-changing transformation links everyone in this picture: the neuronal circuit that underlies the brain’s ability to read is subtly, rapidly changing and this has implications for everyone from the pre-reading toddler to the expert adult.

As work in neurosciences indicates, the acquisition of literacy necessitated a new circuit in our species’ brain more than 6,000 years ago. That circuit evolved from a very simple mechanism for decoding basic information, like the number of goats in one’s herd, to the present, highly elaborated reading brain. My research depicts how the present reading brain enables the development of some of our most important intellectual and affective processes: internalized knowledge, analogical reasoning, and inference; perspective-taking and empathy; critical analysis and the generation of insight. Research surfacing in many parts of the world now cautions that each of these essential ‘deep reading’ processes may be under threat as we move into digital-based modes of reading.

This is not a simple, binary issue of print versus digital reading and technological innovations. As MIT scholar Sherry Turkle has written, we do not err as a society when we innovate but when we ignore what we disrupt or diminish while innovating. In this hinge moment between print and digital cultures, society needs to confront what is diminishing in the expert reading circuit, what our children and older students are not developing, and what we can do about it.

We know from research that the reading circuit is not given to human beings through a genetic blueprint like vision or language; it needs an environment to develop. Further, it will adapt to that environment’s requirements – from different writing systems to the characteristics of whatever medium is used. If the dominant medium advantages processes that are fast, multi-task oriented and well-suited for large volumes of information, like the current digital medium, so will the reading circuit. As UCLA psychologist Patricia Greenfield writes, the result is that less attention and time will be allocated to slower, time-demanding deep reading processes.

Increasing reports from educators and from researchers in psychology and the humanities bear this out. English literature scholar and teacher Mark Edmundson describes how many college students actively avoid the classic literature of the 19th and 20th centuries in favour of something simpler as they no longer have the patience to read longer, denser, more difficult texts. We should be less concerned with students’ ‘cognitive impatience’, however, than by what may underlie it: the potential inability of large numbers of students to read with a level of critical analysis sufficient to comprehend the complexity of thought and argument found in more demanding texts.

Multiple studies show that digital screen use may be causing a variety of troubling downstream effects on reading comprehension in older high school and college students. In Stavanger, Norway, psychologist Anne Mangen and colleagues studied how high school students comprehend the same material in different mediums. Mangen’s group asked subjects questions about a short story whose plot had universal student appeal; half of the students read the story on a tablet, the other half in paperback. Results indicated that students who read on print were superior in their comprehension to screen-reading peers, particularly in their ability to sequence detail and reconstruct the plot in chronological order.

Ziming Liu from San Jose State University has conducted a series of studies which indicate that the ‘new norm’ in reading is skimming, involving word-spotting and browsing through the text. Many readers now use a pattern when reading in which they sample the first line and then word-spot through the rest of the text. When the reading brain skims like this, it reduces time allocated to deep reading processes. In other words, we don’t have time to grasp complexity, to understand another’s feelings, to perceive beauty, and to create thoughts of the reader’s own.

The possibility that critical analysis, empathy and other deep reading processes could become the unintended ‘collateral damage’ of our digital culture is not a straightforward binary issue about print versus digital reading. It is about how we all have begun to read on various mediums and how that changes not only what we read, but also the purposes for which we read. Nor is it only about the young. The subtle atrophy of critical analysis and empathy affects us all equally. It affects our ability to navigate a constant bombardment of information. It incentivizes a retreat to the most familiar stores of unchecked information, which require and receive no analysis, leaving us susceptible to false information and irrational ideas.

There’s an old rule in neuroscience that does not alter with age: use it or lose it. It is a very hopeful principle when applied to critical thought in the reading brain because it implies choice. The story of the changing reading brain is hardly finished. We possess both the science and the technology to identify and redress the changes in how we read before they become entrenched. If we work to understand exactly what we will lose, alongside the extraordinary new capacities that the digital world has brought us, there is as much reason for excitement as caution.`;

    t4.reading.passages[2].text = `Artificial intelligence (AI) can already predict the future. Police forces are using it to map when and where crime is likely to occur. Doctors can use it to predict when a patient is most likely to have a heart attack or stroke. Researchers are even trying to give AI imagination so it can plan for unexpected consequences.

Many decisions in our lives require a good forecast, and AI is almost always better at forecasting than we are. Yet for all these technological advances, we still seem to deeply lack confidence in AI predictions. Recent cases show that people don’t like relying on AI and prefer to trust human experts, even if these experts are wrong.

If we want AI to really benefit people, we need to find a way to get people to trust it. To do that, we need to understand why people are so reluctant to trust AI in the first place.

Take the case of Watson for Oncology, one of technology giant IBM’s supercomputer programs. Their attempt to promote this program to cancer doctors was a PR disaster. The AI promised to deliver top-quality recommendations on the treatment of 12 cancers that accounted for 80% of the world’s cases. But when doctors first interacted with Watson, they found themselves in a rather difficult situation. On the one hand, if Watson provided guidance about a treatment that coincided with their own opinions, physicians did not see much point in Watson’s recommendations. The supercomputer was simply telling them what they already knew, and these recommendations did not change the actual treatment.

On the other hand, if Watson generated a recommendation that contradicted the experts’ opinion, doctors would typically conclude that Watson wasn’t competent. And the machine wouldn’t be able to explain why its treatment was plausible because its machine-learning algorithms were simply too complex to be fully understood by humans. Consequently, this has caused even more suspicion and disbelief, leading many doctors to ignore the seemingly outlandish AI recommendations and stick to their own expertise.

This is just one example of people’s lack of confidence in AI and their reluctance to accept what AI has to offer. Trust in other people is often based on our understanding of how others think and having experience of their reliability. This helps create a psychological feeling of safety. AI, on the other hand, is still fairly new and unfamiliar to most people. Even if it can be technically explained (and that’s not always the case), AI’s decision-making process is usually too difficult for most people to comprehend. And interacting with something we don’t understand can cause anxiety and give us a sense that we’re losing control.

Many people are also simply not familiar with many instances of AI actually working, because it often happens in the background. Instead, they are acutely aware of instances where AI goes wrong. Embarrassing AI failures receive a disproportionate amount of media attention, emphasising the message that we cannot rely on technology. Machine learning is not foolproof, in part because the humans who design it aren’t.

Feelings about AI run deep. In a recent experiment, people from a range of backgrounds were given various sci-fi films about AI to watch and then asked questions about automation in everyday life. It was found that, regardless of whether the film they watched depicted AI in a positive or negative light, simply watching a cinematic vision of our technological future polarised the participants’ attitudes. Optimists became more extreme in their enthusiasm for AI and sceptics became even more guarded.

This suggests people use relevant evidence about AI in a biased manner to support their existing attitudes, a deep-rooted human tendency known as “confirmation bias”. As AI is represented more and more in media and entertainment, it could lead to a society split between those who benefit from AI and those who reject it. More pertinently, refusing to accept the advantages offered by AI could place a large group of people at a serious disadvantage.

Fortunately, we already have some ideas about how to improve trust in AI. Simply having previous experience with AI can significantly improve people’s opinions about the technology, as was found in the study mentioned above. Evidence also suggests the more you use other technologies such as the internet, the more you trust them.

Another solution may be to reveal more about the algorithms which AI uses and the purposes they serve. Several high-profile social media companies and online marketplaces already release transparency reports about government requests and surveillance disclosures. A similar practice for AI could help people have a better understanding of the way algorithmic decisions are made.

Research suggests that allowing people some control over AI decision-making could also improve trust and enable AI to learn from human experience. For example, one study showed that when people were allowed the freedom to slightly modify an algorithm, they felt more satisfied with its decisions, more likely to believe it was superior and more likely to use it in the future.

We don’t need to understand the intricate inner workings of AI systems, but if people are given a degree of responsibility for how they are implemented, they will be more willing to accept AI into their lives.`;

    // ---------------- 写作（真实题目 + 范文示例） ----------------
    t4.writing.tasks = [
      {
        task: 'Task 1 (小作文)',
        type: '流程图描述',
        prompt: 'The diagram below shows the process for recycling plastic bottles.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
        modelAnswer: 'The diagram illustrates the stages involved in recycling plastic bottles. Overall, the process consists of several steps, from collection and sorting to crushing, washing, making pellets, and finally producing new products or repeating the cycle.\n\nFirst, used plastic bottles are collected and transported to a recycling centre, where they are sorted by type and colour. The bottles are then crushed into small pieces. After that, the pieces are washed thoroughly to remove any remaining impurities.\n\nNext, the clean pieces are placed into a machine that produces plastic pellets. These pellets are then heated so that they can be made into raw material, which is used to manufacture a variety of new items, such as bottles, boxes, or clothing. Notably, some recycled material can re-enter the process, making the system cyclical.\n\nIn summary, plastic-bottle recycling is a multi-stage, largely closed-loop process that turns waste into reusable raw material.',
        tips: '用 first/then/next/after that 连接步骤；突出循环(cyclical)特征；至少150词'
      },
      {
        task: 'Task 2 (大作文)',
        type: '议论文（利弊对比）',
        prompt: 'In the future all cars, buses and trucks will be driverless. The only people travelling inside these vehicles will be passengers.\n\nDo you think the advantages of driverless vehicles outweigh the disadvantages?\n\nWrite at least 250 words.',
        modelAnswer: 'It is predicted that in the future all road vehicles will be driverless, carrying only passengers. While this development has clear benefits, I believe the disadvantages are currently more significant, though the balance may shift over time.\n\nOn the positive side, driverless vehicles could greatly reduce accidents caused by human error, since most crashes result from tiredness or mistakes. They may also improve traffic flow through better coordination, and they would give mobility to people who cannot drive, such as the elderly or visually impaired.\n\nHowever, there are serious drawbacks. The loss of driving jobs would affect millions of workers, from lorry drivers to delivery staff. Security and safety are also concerns: a system failure or hacking could have deadly consequences, and it is unclear who would be responsible after an accident. Furthermore, many people simply value the independence of driving and may resist the change.\n\nIn my view, although driverless technology offers real advantages in safety and access, the social and economic costs at present outweigh them. The technology should be introduced gradually, with strong regulation, rather than replacing human drivers all at once.\n\nIn conclusion, the benefits of driverless vehicles are important but not yet sufficient to outweigh the disadvantages.',
        tips: '明确立场（利大于弊/弊大于利）；各写一段并举例；至少250词'
      }
    ];

    // ---------------- 口语（真实话题 + 参考回答示例） ----------------
    t4.speaking.parts = [
      {
        part: 'Part 1: Introduction & Interview',
        intro: '考官就日常话题提问，约4-5分钟。话题：Fast Food',
        questions: [
          { q: 'What kinds of fast food have you tried? [Why/Why not?]', a: '参考回答: I’ve tried burgers, pizzas and fried chicken. They’re convenient when I’m in a hurry or out with friends.' },
          { q: 'Do you ever use a microwave to cook food quickly? [Why/Why not?]', a: '参考回答: Yes, I often use one to reheat leftovers because it saves time on busy days.' },
          { q: 'How popular are fast food restaurants where you live? [Why/Why not?]', a: '参考回答: They’re quite popular, especially among young people who like the convenience and low price.' },
          { q: 'When would you go to a fast-food restaurant? [Why/Why not?]', a: '参考回答: Usually after work or with friends when I want a quick, casual meal.' }
        ]
      },
      {
        part: 'Part 2: Long Turn (Cue Card)',
        intro: '根据题目卡准备1分钟，独自陈述2分钟',
        cueCard: 'Describe some technology (e.g. an app, phone, software program) that you decided to stop using.\n\nYou should say:\n– when and where you got this technology\n– why you started using this technology\n– why you decided to stop using it\n– and explain how you feel about the decision you made.',
        modelAnswer: '参考回答:\n\nI decided to stop using a social media app that I downloaded about two years ago. I got it on my phone while looking for ways to keep in touch with friends and share experiences.\n\nAt first I enjoyed it because it felt like a good way to see what others were doing. However, over time I realised it had become a distraction. I was scrolling for hours instead of focusing on study or spending time with family.\n\nI finally deleted the app because it was affecting my productivity and mood. Since then, I have felt more relaxed and present in daily life, and I don’t miss the constant notifications. It was a positive decision that gave me back control of my time.',
        tips: '覆盖全部四个要点；用过去时叙述获取与放弃；加入感受；控制2分钟'
      },
      {
        part: 'Part 3: Discussion',
        intro: '围绕 Part 2 话题深入讨论，约4-5分钟。话题：Computer games & Technology in the classroom',
        questions: [
          { q: 'What kinds of computer games do people play in your country?', a: '参考回答: Many play action, adventure and online multiplayer games, which let them compete or cooperate with friends.' },
          { q: 'Why do people enjoy playing computer games?', a: '参考回答: They offer an escape from stress, exciting challenges, and a way to socialise with others.' },
          { q: 'Do you think all computer games should have a minimum age for players?', a: '参考回答: Yes, age ratings help protect younger players from content that is too mature for them.' },
          { q: 'In what ways can technology in the classroom be helpful?', a: '参考回答: It provides interactive lessons, easy access to information, and tools for collaboration among students.' },
          { q: 'Are students often better at using technology than their teachers?', a: '参考回答: Often yes, since many grew up with it and learn new apps faster than teachers do.' },
          { q: 'Do you believe computers will ever replace human teachers?', a: '参考回答: No – machines can help, but teachers give emotional support and guidance that computers cannot.' }
        ]
      }
    ];
  }

  // ============================================================
  // 听力原文脚本（真实，覆盖 listening-scripts.js 中 16-3-* / 16-4-*）
  // ============================================================
  if (typeof LISTENING_SCRIPTS !== 'undefined') {

    // ---- 剑16 Test 3 ----
    LISTENING_SCRIPTS['16-3-0'] = `JAKE: Hello, Junior Cycle camp, Jake speaking.

WOMAN: Hi. I'm calling for some information about the cycle camp – I'm thinking of sending my son.

JAKE: Great. Well, it's held every weekday morning over the summer vacation and we focus on basic cycling skills and safety. We have eight levels for children from three years upwards. How old's your son?

WOMAN: Charlie? He's seven. He can ride a bike, but he needs a little more training before he's safe to go on the road.

JAKE: He'd probably be best in Level 5. They start off practising on the site here, and we aim to get them riding on the road, but first they're taken to ride in the park, away from the traffic.

WOMAN: Right. And can you tell me a bit about the instructors?

JAKE: Well, all our staff wear different coloured shirts. So, we have three supervisors, and they have red shirts. They support the instructors, and they also stand in for me if I'm not around. Then the instructors themselves are in blue shirts, and one of these is responsible for each class.

WOMAN: OK.

JAKE: In order to be accepted, all our instructors have to submit a reference from someone who's seen them work with children – like if they've worked as a babysitter, for example. Then they have to complete our training course, including how to do lesson plans, and generally care for the well-being of the kids in their class. They do a great job, I have to say.

WOMAN: Right. And tell me a bit about the classes. What size will Charlie's class be?

JAKE: We have a limit of eight children in each class, so their instructor really gets to know them well. They're out riding most of the time but they have quiet times too, where their instructor might tell them a story that's got something to do with cycling, or get them to play a game together. It's a lot of fun.

WOMAN: It must be. Now, what happens if there's rain? Do the classes still run?

JAKE: Oh yes. We don't let that put us off – we just put on our waterproofs and keep cycling.

WOMAN: And is there anything special Charlie should bring along with him?

JAKE: Well, maybe some spare clothes, especially if the weather's not so good. And a snack for break time.

WOMAN: How about a drink?

JAKE: No, we'll provide that. And make sure he has shoes, not sandals.

WOMAN: Sure. And just at present Charlie has to take medication every few hours, so I'll make sure he has that.

JAKE: Absolutely. Just give us details of when he has to take it and we'll make sure he does.

WOMAN: Thanks.

JAKE: Now, there are a few things you should know about Day 1 of the camp. The classes normally start at 9.30 every morning, but on Day 1 you should aim to get Charlie here by 9.20. The finishing time will be 12.30 as usual. We need the additional time because there are a few extra things to do. The most important is that we have a very careful check to make sure that every child's helmet fits properly. If it doesn't fit, we'll try to adjust it, or we'll find him another one – but he must wear it all the time he's on the bike.

WOMAN: Of course.

JAKE: Then after that, all the instructors will be waiting to meet their classes, and they'll meet up in the tent – you can't miss it. And each instructor will take their class away and get started.

WOMAN: OK. Well that all sounds good. Now can you tell me how much the camp costs a week?

JAKE: One hundred ninety-nine dollars. We've managed to keep the price more or less the same as last year – it was one hundred ninety then. But the places are filling up quite quickly.

WOMAN: Right. OK, well I'd like to book for …`;

    LISTENING_SCRIPTS['16-3-1'] = `Hello everyone. My name's Megan Baker and I'm a recruitment consultant at AVT Recruitment specialists.

Now, our company specialises in positions that involve working in the agriculture and horticulture sectors, so that's fresh food production, garden and park maintenance and so on. And these sectors do provide some very special career opportunities. For a start, they often offer opportunities for those who don't want to be stuck with a 40-hour week, but need to juggle work with other responsibilities such as child care – and this is very important for many of our recruits. Some people like working in a rural setting, surrounded by plants and trees instead of buildings, although we can't guarantee that. But there are certainly health benefits, especially in jobs where you're not sitting all day looking at a screen – a big plus for many people. Salaries can sometimes be good too, although there's a lot of variety here. And you may have the opportunity in some types of jobs for travel overseas, although that obviously depends on the job, and not everyone is keen to do it.

Of course, working outdoors does have its challenges. It's fine in summer, but can be extremely unpleasant when it's cold and windy. You may need to be pretty fit for some jobs, though with modern technology that's not as important as it once was. And standards of health and safety are much higher now than they used to be, so there are fewer work-related accidents. But if you like a lively city environment surrounded by lots of people, these jobs are probably not for you – they're often in pretty remote areas. And some people worry about finding a suitable place to live, but in our experience, this usually turns out fine.

Now let me tell you about some of the exciting jobs that we have on our books right now.

One is for a fresh food commercial manager. Our client here is a very large fresh food producer supplying a range of top supermarkets. They operate in a very fast-paced environment with low profit margins – the staff there work hard, but they play hard as well, so if you've a sociable personality this may be for you.

We have an exciting post as an agronomist advising farmers on issues such as crop nutrition, protection against pests, and the latest legislation on farming and agricultural practices. There are good opportunities for the right person to quickly make their way up the career ladder, but a deep knowledge of the agricultural sector is expected of applicants.

A leading supermarket is looking for a fresh produce buyer who is available for a 12-month maternity cover contract. You need to have experience in administration, planning and buying in the fresh produce industry, and in return will receive a very competitive salary.

We have also received a request for a sales manager for a chain of garden centres. You will be visiting centres in the region to ensure their high levels of customer service are maintained. This post is only suitable for someone who is prepared to live in the region.

There is also a vacancy for a tree technician to carry out tree cutting, forestry and conservation work. Candidates must have a clean driving licence and have training in safety procedures. A year's experience would be preferred but the company might be prepared to consider someone who has just completed an appropriate training course.

Finally, we have a position for a farm worker. This will involve a wide range of farm duties including crop sowing and harvesting, machine maintenance and animal care. Perks of the job include the possibility of renting a small cottage on the estate, and the chance to earn a competitive salary. A driving licence and tractor driving experience are essential.`;

    LISTENING_SCRIPTS['16-3-2'] = `ADAM: OK Rosie, shall we try to get some ideas together for our presentation on diet and obesity?

ROSIE: Sure.

ADAM: I can talk about the experiment I did to see if people can tell the difference between real sugar and artificial sweeteners.

ROSIE: Where you have people drinks with either sugar or artificial sweeteners and they had to say which they thought it was?

ADAM: Yeah. It took me ages to decide exactly how I'd organise it, especially how I could make sure that people didn't know which drink I was giving them. It was hard to keep track of it all, especially as I had so many people doing it – I had to make sure I kept a proper record of what each person had had.

ROSIE: So could most people tell the difference?

ADAM: Yeah – I hadn't thought they would be able to, but most people could.

ROSIE: Then there's that experiment I did measuring the fat content of nuts, to see if the nutritional information given on the packet was accurate.

ADAM: The one where you ground up the nuts and mixed them with a chemical to absorb the fat?

ROSIE: Yes. My results were a bit problematic – the fat content for that type of nut seemed much lower than it said on the package. But I reckon the package information was right. I think I should probably have ground up the nuts more than I did. It's possible that the scales for weighing the fat weren't accurate enough, too. I'd really like to try the experiment again some time.

ADAM: So what can we say about helping people to lose weight? There's a lot we could say about what restaurants could do to reduce obesity. I read that the items at the start of a menu and the items at the end of a menu are much more likely to be chosen than the items in the middle. So, if you put the low-calorie items at the beginning and end of the menu, people will probably go for the food with fewer calories, without even realising what they're doing.

ROSIE: I think food manufacturers could do more to encourage healthy eating.

ADAM: How?

ROSIE: Well, when manufacturers put calorie counts of a food on the label, they're sometimes really confusing and I suspect they do it on purpose. Because food that's high in calories tastes better, and so they'll sell more.

ADAM: Yeah, so if you look at the amount of calories in a pizza, they'll give you the calories per quarter pizza and you think, oh that's not too bad. But who's going to eat a quarter pizza?

ROSIE: Exactly.

ADAM: I suppose another approach to this problem is to get people to exercise more.

ROSIE: Right. In England, the current guidelines are for at least 30 minutes of brisk walking, five days a week. Now when you ask them, about 40% of men and 30% of women say they do this, but when you objectively measure the amount of walking they do with motion sensors, you find that only 6% of men and 4% of women do the recommended amount of exercise.

ADAM: Mm, so you can see why obesity is growing.

ROSIE: So how can people be encouraged to take more exercise?

ADAM: Well, for example, think of the location of stairs at a station. If people reach the stairs before they reach the escalator when they're leaving the station, they're more likely to take the stairs. And if you increase the width of the stairs, you'll get more people using them at the same time. It's an unconscious process and influenced by minor modifications in their environment.

ROSIE: Right. And it might not be a big change, but if it happens every day, it all adds up.

ADAM: Yes. But actually, I'm not sure if we should be talking about exercise in our presentation.

ROSIE: Well, we've done quite a bit of reading about it.

ADAM: I know, but it's going to mean we have a very wide focus, and our tutor did say that we need to focus on causes and solutions in terms of nutrition.

ROSIE: I suppose so. And we've got plenty of information about that. OK, well that will be simpler.

ADAM: So what shall we do now? We've still got half an hour before our next lecture.

ROSIE: Let's think about what we're going to include and what will go where. Then we can decide what slides we need.

ADAM: OK, fine.`;

    LISTENING_SCRIPTS['16-3-3'] = `Good morning everyone. So today we're going to look at an important creative activity and that's hand knitting. Ancient knitted garments have been found in many different countries, showing that knitting is a global activity with a long history.

When someone says the word 'knitting' we might well picture an elderly person – a grandmother perhaps – sitting by the fire knitting garments for themselves or other members of the family. It's a homely image, but one that may lead you to feel that knitting is an activity of the past – and, indeed, during the previous decade, it was one of the skills that was predicted to vanish from everyday life. For although humans have sewn and knitted their own clothing for a very long time, many of these craft-based skills went into decline when industrial machines took over – mainly because they were no longer passed down from one generation to another. However, that's all changing and interest in knitting classes in many countries is actually rising, as more and more people are seeking formal instruction in the skill. With that trend, we're also seeing an increase in the sales figures for knitting equipment.

So why do people want to be taught to knit at a time when a machine can readily do the job for them? The answer is that knitting, as a handicraft, has numerous benefits for those doing it. Let's consider what some of these might be. While many people knitted garments in the past because they couldn't afford to buy clothes, it's still true today that knitting can be helpful if you're experiencing economic hardship. If you have several children who all need warm winter clothes, knitting may save you a lot of money. And the results of knitting your own clothes can be very rewarding, even though the skills you need to get going are really quite basic and the financial outlay is minimal.

But the more significant benefits in today's world are to do with well-being. In a world where it's estimated that we spend up to nine hours a day online, doing something with our hands that is craft-based makes us feel good. It releases us from the stress of a technological, fast-paced life.

Now, let's look back a bit to early knitting activities. In fact, no one really knows when knitting first began, but archaeological remains have disclosed plenty of information for us to think about.

One of the interesting things about knitting is that the earliest pieces of clothing that have been found suggest that most of the items produced were round rather than flat. Discoveries from the 3rd and 4th centuries in Egypt show that things like socks and gloves, that were needed to keep hands and feet warm, were knitted in one piece using four or five needles. That's very different from most knitting patterns today, which only require two. What's more, the very first needles people used were hand carved out of wood and other natural materials, like bone, whereas today's needles are largely made of steel or plastic and make that characteristic clicking sound when someone's using them. Ancient people knitted using yarns made from linen, hemp, cotton and wool, and these were often very rough on the skin. The spinning wheel, which allowed people to make finer yarns and produce much greater quantities of them, led to the dominance of wool in the knitting industry – often favoured for its warmth.

Another interesting fact about knitting is that because it was practised in so many parts of the world for so many purposes, regional differences in style developed. This visual identity has allowed researchers to match bits of knitted clothing that have been unearthed over time to the region from which the wearer came or the job that he or she did.

As I've mentioned, knitting offered people from poor communities a way of making extra money while doing other tasks. For many centuries, it seems, men, women and children took every opportunity to knit, for example, while watching over sheep, walking to market or riding in boats. So, let's move on to take a …`;

    // ---- 剑16 Test 4 ----
    LISTENING_SCRIPTS['16-4-0'] = `SHIRLEY: Hello?

TOM: Oh hello. I was hoping to speak to Jack Fitzgerald about renting a cottage.

SHIRLEY: I'm his wife, Shirley, and we own the cottages together, so I'm sure I can help you.

TOM: Great. My name's Tom. Some friends of ours rented Granary Cottage from you last year, and they thought it was great. So my wife and I are hoping to come in May for a week.

SHIRLEY: What date did you have in mind?

TOM: The week beginning the 14th, if possible.

SHIRLEY: I'll just check … I'm sorry, Tom, it's already booked that week. It's free the week beginning the 28th, though, for seven nights. In fact, that's the only time you could have it in May.

TOM: Oh. Well, we could manage that, I think. We'd just need to change a couple of things. How much would it cost?

SHIRLEY: That's the beginning of high season, so it'd be £550 for the week.

TOM: Ah. That's a bit more than we wanted to pay, I'm afraid. We've budgeted up to £500 for accommodation.

SHIRLEY: Well, we've just finished converting another building into a cottage, which we're calling Chervil Cottage.

TOM: Sorry? What was that again?

SHIRLEY: Chervil. C-H-E-R-V for Victor I-L.

TOM: Oh, that's a herb, isn't it?

SHIRLEY: That's right. It grows fairly wild around here. You could have that for the week you want for £480.

TOM: OK. So could you tell me something about it, please?

SHIRLEY: Of course. The building was built as a garage. It's a little smaller than Granary Cottage.

TOM: So that must sleep two people, as well?

SHIRLEY: That's right. There's a double bedroom.

TOM: Does it have a garden?

SHIRLEY: Yes, you get to it from the living room through French doors, and we provide two deckchairs. We hope to build a patio in the near future, but I wouldn't like to guarantee it'll be finished by May.

TOM: OK.

SHIRLEY: The front door opens onto the old farmyard, and parking isn't a problem – there's plenty of room at the front for that. There are some trees and potted plants there.

TOM: What about facilities in the cottage? It has standard things like a cooker and fridge, I presume.

SHIRLEY: In the kitchen area there's a fridge-freezer and we've just put in an electric cooker.

TOM: Is there a washing machine?

SHIRLEY: Yes. There's also a TV in the living room, which plays DVDs too. The bathroom is too small for a bath, so there's a shower instead. I think a lot of people prefer that nowadays, anyway.

TOM: It's more environmentally friendly, isn't it? Unless you spend half the day in it!

SHIRLEY: Exactly.

TOM: What about heating? It sometimes gets quite cool at that time of year.

SHIRLEY: There's central heating, and if you want to light a fire, there's a stove. We can provide all the wood you need for it. It smells so much nicer than coal, and it makes the room very cosy – we've got one in our own house.

TOM: That sounds very pleasant. Perhaps we should come in the winter, to make the most of it!

SHIRLEY: Yes, we find we don't want to go out when we've got the fire burning. There are some attractive views from the cottage, which I haven't mentioned. There's a famous stone bridge – it's one of the oldest in the region, and you can see it from the living room. It isn't far away. The bedroom window looks in the opposite direction, and has a lovely view of the hills and the monument at the top.

TOM: Well, that all sounds perfect. I'd like to book it, please. Would you want a deposit?

SHIRLEY: Yes, we ask for thirty percent to secure your booking, so that'll be, um, £144.

TOM: And when would you like the rest of the money?

SHIRLEY: You're coming in May, so the last day of March, please.

TOM: Fine.

SHIRLEY: Excellent. Could I just take your details …`;

    LISTENING_SCRIPTS['16-4-1'] = `CHAIRPERSON: Right. Next on the agenda we have traffic and highways. Councillor Thornton.

COUNCILLOR THORNTON: Thank you. Well, we now have the results of the survey carried out last month about traffic and road transport in the town. People were generally satisfied with the state of the roads. There were one or two complaints about potholes which will be addressed, but a significant number of people complained about the increasing number of heavy vehicles using our local roads to avoid traffic elsewhere. We'd expected more complaints by commuters about the reduction in the train service, but it doesn't seem to have affected people too much. The cycle path that runs alongside the river is very well used by both cyclists and pedestrians since the surface was improved last year, but overtaking can be a problem so we're going to add a bit on the side to make it wider. At some stage, we'd like to extend the path so that it goes all the way through the town, but that won't be happening in the immediate future.

The plans to have a pedestrian crossing next to the Post Office have unfortunately had to be put on hold for the time being. We'd budgeted for this to be done this financial year, but then there were rumours that the Post Office was going to move, which would have meant there wasn't really a need for a crossing. Now they've confirmed that they're staying where they are, but the Highways Department have told us that it would be dangerous to have a pedestrian crossing where we'd originally planned it as there's a bend in the road there. So that'll need some more thought.

On Station Road near the station and level crossing, drivers can face quite long waits if the level crossing's closed, and we've now got signs up requesting them not to leave their engines running at that time. This means pedestrians waiting on the pavement to cross the railway line don't have to breathe in car fumes. We've had some problems with cyclists leaving their bikes chained to the railings outside the ticket office, but the station has agreed to provide bike racks there.

CHAIRPERSON: So next on the agenda is 'Proposals for improvements to the recreation ground'. Councillor Thornton again.

COUNCILLOR THORNTON: Well, since we managed to extend the recreation ground, we've spent some time talking to local people about how it could be made a more attractive and useful space. If you have a look at the map up on the screen, you can see the river up in the north, and the Community Hall near the entrance from the road. At present, cars can park between the Community Hall and that line of trees to the east, but this is quite dangerous for pedestrians so we're suggesting a new car park on the opposite side of the Community Hall, right next to it. We also have a new location for the cricket pitch. As we've now purchased additional space to the east of the recreation ground, beyond the trees, we plan to move it away from its current location, which is rather near the road, into this new area beyond the line of trees. This means there's less danger of stray balls hitting cars or pedestrians.

We've got plans for a children's playground which will be accessible by a footpath from the Community Hall and will be alongside the river. We'd originally thought of having it close to the road, but we think this will be a more attractive location.

The skateboard ramp is very popular with both younger and older children – we had considered moving this up towards the river, but in the end we decided to have it in the southeast corner near the road. The pavilion is very well used at present by both football players and cricketers. It will stay where it is now – to the left of the line of trees and near to the river – handy for both the football and cricket pitches. And finally, we'll be getting a new notice board for local information, and that will be directly on people's right as they go from the road into the recreation ground.`;

    LISTENING_SCRIPTS['16-4-2'] = `JAKE: Now that we've done all the research into bike-sharing schemes in cities around the world, we need to think about how we're going to organise our report.

AMY: Right. I think we should start by talking about the benefits. I mean it's great that so many cities have introduced these schemes where anyone can pick up a bike from dozens of different locations and hire it for a few hours. It makes riding a bike very convenient for people.

JAKE: Yes, but the costs can add up and that puts people on low incomes off in some places.

AMY: I suppose so, but if it means more people in general are cycling rather than driving, then because they're increasing the amount of physical activity they do, it's good for their health.

JAKE: OK. But isn't that of less importance? I mean, doesn't the impact of reduced emissions on air pollution have a more significant effect on people's health?

AMY: Certainly, in some cities bike-sharing had made a big contribution to that. And also helped to cut the number of cars on the road significantly.

JAKE: Which is the main point.

AMY: Exactly. But I'd say it's had less of an impact on noise pollution because there are still loads of buses and lorries around.

JAKE: Right.

AMY: Shall we quickly discuss the recommendations we're going to make?

JAKE: In order to ensure bike-sharing schemes are successful?

AMY: Yes.

JAKE: OK. Well, while I think it's nice to have really state-of-the-art bikes with things like GPS, I wouldn't say they're absolutely necessary.

AMY: But some technical things are really important – like a fully functional app – so people can make payments and book bikes easily. Places which haven't invested in that have really struggled.

JAKE: Good point … Some people say there shouldn't be competing companies offering separate bike-sharing schemes, but in some really big cities, competition's beneficial and anyway one company might not be able to manage the whole thing.

AMY: Right. Deciding how much to invest is a big question. Cities which have opened loads of new bike lanes at the same time as introducing bike-sharing schemes have generally been more successful – but there are examples of successful schemes where this hasn't happened … What does matter though – is having a big publicity campaign.

JAKE: Definitely. If people don't know how to use the scheme or don't understand its benefits, they won't use it. People need a lot of persuasion to stop using their cars.

AMY: Shall we look at some examples now? And say what we think is good or bad about them.

JAKE: I suppose we should start with Amsterdam as this was one of the first cities to have a bike-sharing scheme.

AMY: Yes. There was already a strong culture of cycling here. In a way it's strange that there was such a demand for bike-sharing because you'd have thought most people would have used their own bikes.

JAKE: And yet it's one of the best-used schemes … Dublin's an interesting example of a success story.

AMY: It must be because the public transport system's quite limited.

JAKE: Not really – there's no underground, but there are trams and a good bus network. I'd say price has a lot to do with it. It's one of the cheapest schemes in Europe to join.

AMY: But the buses are really slow – anyway the weather certainly can't be a factor!

JAKE: No – definitely not. The London scheme's been quite successful.

AMY: Yes – it's been a really good thing for the city. The bikes are popular and the whole system is well maintained but it isn't expanding quickly enough.

JAKE: Basically, not enough's been spent on increasing the number of cycle lanes. Hopefully that'll change.

AMY: Yes. Now what about outside Europe?

JAKE: Well bike-sharing schemes have taken off in places like Buenos Aires.

AMY: Mmm. They built a huge network of cycle lanes to support the introduction of the scheme there, didn't they? It attracted huge numbers of cyclists where previously there were hardly any.

JAKE: An example of good planning.

AMY: Absolutely. New York is a good example of how not to introduce a scheme. When they launched it, it was more than ten times the price of most other schemes.

JAKE: More than it costs to take a taxi. Crazy. I think the organisers lacked vision and ambition there.

AMY: I think so too. Sydney would be a good example to use. I would have expected it to have grown pretty quickly here.

JAKE: Yes. I can't quite work out why it hasn't been an instant success like some of the others. It's a shame really.

AMY: I know. OK so now we've thought about …`;

    LISTENING_SCRIPTS['16-4-3'] = `One of the most famous cases of extinction is that of a bird known as the dodo. In fact there's even a saying in English, 'as dead as the dodo', used to refer to something which no longer exists. But for many centuries the dodo was alive and well, although it could only be found in one place, the island of Mauritius in the Indian Ocean. It was a very large bird, about one metre tall, and over the centuries it had lost the ability to fly, but it survived happily under the trees that covered the island.

Then in the year 1507 the first Portuguese ships stopped at the island. The sailors were carrying spices back to Europe, and found the island a convenient stopping place where they could stock up with food and water for the rest of the voyage, but they didn't settle on Mauritius. However, in 1638 the Dutch arrived and set up a colony there. These first human inhabitants of the island found the dodo birds a convenient source of meat, although not everyone liked the taste.

It's hard to get an accurate description of what the dodo actually looked like. We do have some written records from sailors, and a few pictures, but we don't know how reliable these are. The best-known picture is a Dutch painting in which the bird appears to be extremely fat, but this may not be accurate – an Indian painting done at the same time shows a much thinner bird.

Although attempts were made to preserve the bodies of some of the birds, no complete specimen survives. In the early 17th century four dried parts of a bird were known to exist – of these, three have disappeared, so only one example of soft tissue from the dodo survives, a dodo head. Bones have also been found, but there's only one complete skeleton in existence.

This single dodo skeleton has recently been the subject of scientific research which suggests that many of the earlier beliefs about dodos may have been incorrect. For example, early accounts of the birds mention how slow and clumsy it was, but scientists now believe the bird's strong knee joints would have made it capable of movement which was not slow, but actually quite fast. In fact, one 17th-century sailor wrote that he found the birds hard to catch. It's true that the dodo's small wings wouldn't have allowed it to leave the ground, but the scientists suggest that these were probably employed for balance while going over uneven ground. Another group of scientists carried out analysis of the dodo's skull. They found that the reports of the lack of intelligence of the dodo were not borne out by their research, which suggested the bird's brain was not small, but average in size. In fact, in relation to its body size, it was similar to that of the pigeon, which is known to be a highly intelligent bird. The researchers also found that the structure of the bird's skull suggested that one sense which was particularly well-developed was that of smell. So the dodo may also have been particularly good at locating ripe fruit and other food in the island's thick vegetation.

So it looks as if the dodo was better able to survive and defend itself than was originally believed. Yet less than 200 years after Europeans first arrived on the island, they had become extinct. So what was the reason for this? For a long time, it was believed that the dodos were hunted to extinction, but scientists now believe the situation was more complicated than this. Another factor may have been the new species brought to the island by the sailors. These included dogs, which would have been a threat to the dodos, and also monkeys, which ate the fruit that was the main part of the dodos' diet. These were brought to the island deliberately, but the ships also brought another type of creature – rats, which came to land from the ships and rapidly overran the island. These upset the ecology of the island, not just the dodos but other species too. However, they were a particular danger to the dodos because they consumed their eggs, and since each dodo only laid one at a time, this probably had a devastating effect on populations.

However, we now think that probably the main cause of the birds' extinction was not the introduction of non-native species, but the introduction of agriculture. This meant that the forest that had once covered all the island, and that had provided a perfect home for the dodo, was cut down so that crops such as sugar could be grown. So although the dodo had survived for thousands of years, suddenly it was gone.`;
  }

  console.log('[real-16b] 剑16 Test3&4 已覆盖为练习题目（待与原版书核对）');
})();
