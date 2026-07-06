/**
 * 剑桥雅思 17 / 18 补充真题数据 - Test 3 & Test 4
 * 为剑17、剑18 各生成 2 套完整的 Test（Test 3、Test 4）
 * 题目为雅思考试格式原创练习内容，话题与各自 Test 1/2 完全不同
 */

(function () {
  var extraTests = {

    // ========== 剑17 Test 3 ==========
    17: [
      {
        id: 3,
        title: 'Test 3',
        listening: {
          title: '听力 Listening',
          intro: '共4部分，40题，约30分钟',
          sections: [
            {
              part: 'Part 1',
              context: '一位顾客打电话向旅行社预订观鲸生态游',
              type: '表格填空',
              questions: [
                { q: 'Customer name:', a: 'James Whitfield' },
                { q: 'Tour name:', a: 'Ocean Watch Whale Tour' },
                { q: 'Number of adults:', a: '2' },
                { q: 'Number of children:', a: '1' },
                { q: 'Tour date:', a: '14th July' },
                { q: 'Departure time:', a: '8:30 am' },
                { q: 'Meeting point:', a: 'Harbour Quay' },
                { q: 'Tour duration:', a: '5 hours' },
                { q: 'Price per adult:', a: '65' },
                { q: 'Booking reference:', a: 'OW-7721' }
              ]
            },
            {
              part: 'Part 2',
              context: '美术馆志愿者向访客介绍新展览与馆内布局',
              type: '选择题 + 匹配题',
              questions: [
                { q: 'The gallery was founded in', a: 'B. 1962 (B选项)' },
                { q: 'The special exhibition is about', a: 'C. modern sculpture (C选项)' },
                { q: 'Guided tours begin from', a: 'A. the main hall (A选项)' },
                { q: 'Entry for students is', a: 'free (免费)' },
                { q: 'The gift shop is on the', a: 'ground floor, near entrance' },
                { q: 'The sculpture garden is', a: 'behind the building' },
                { q: 'The cafe is on the', a: 'first floor, east side' },
                { q: 'The education room is on the', a: 'second floor' },
                { q: 'The cloakroom is in the', a: 'basement' },
                { q: 'The exhibition closes at', a: '6pm' }
              ]
            },
            {
              part: 'Part 3',
              context: '两名学生与导师讨论关于城市狐狸的研究项目',
              type: '选择题 + 匹配题',
              questions: [
                { q: 'The research topic they chose is', a: 'B. urban foxes (B选项)' },
                { q: 'Their main research method is', a: 'C. camera trapping (C选项)' },
                { q: 'The study area is', a: 'A. a city suburb (A选项)' },
                { q: 'Anna\'s main task is', a: 'D. analysing video footage' },
                { q: 'Ben\'s main task is', a: 'F. maintaining the cameras' },
                { q: 'The tutor suggests they', a: 'B. compare with rural data' },
                { q: 'The written report should be', a: 'C. 3,000 words' },
                { q: 'The first draft is due', a: 'end of March' },
                { q: 'Final submission is', a: 'mid-May' },
                { q: 'They will present at', a: 'a student conference' }
              ]
            },
            {
              part: 'Part 4',
              context: '关于噪音污染对健康影响的学术讲座',
              type: '笔记填空',
              questions: [
                { q: 'Noise above ___ decibels can damage hearing.', a: '85' },
                { q: 'The main source of city noise is', a: 'traffic' },
                { q: 'Long-term exposure raises the risk of', a: 'high blood pressure' },
                { q: 'Night noise from ___ disturbs sleep.', a: 'aircraft' },
                { q: 'Children near noisy roads score lower in', a: 'reading' },
                { q: 'Noise reduces our ability to', a: 'concentrate' },
                { q: 'A cheap solution is better building', a: 'insulation' },
                { q: 'Parks and trees act as a noise', a: 'barrier' },
                { q: 'Quiet zones are placed near', a: 'hospitals' },
                { q: 'The lecture calls for stricter noise', a: 'regulations' }
              ]
            }
          ]
        },
        reading: {
          title: '阅读 Reading',
          intro: '共3篇文章，40题，60分钟',
          passages: [
            {
              title: 'Passage 1: The Little Ice Age',
              difficulty: 'Easy',
              summary: '小冰期：一段全球降温期的起因、特征与社会影响',
              questions: [
                { type: '判断题', q: 'The Little Ice Age started in the 13th century.', a: 'FALSE - 约始于14世纪' },
                { type: '判断题', q: 'Volcanic eruptions helped cause the cooling.', a: 'TRUE' },
                { type: '判断题', q: 'The cooling affected every region of the world equally.', a: 'FALSE - 存在明显地区差异' },
                { type: '判断题', q: 'Failed harvests in Europe were common in this period.', a: 'TRUE' },
                { type: '填空题', q: 'The cold period followed a warmer era called the ____.', a: 'Medieval Warm Period' },
                { type: '填空题', q: 'Artworks show people skating on frozen ____.', a: 'rivers' }
              ]
            },
            {
              title: 'Passage 2: The Benefits of Urban Green Spaces',
              difficulty: 'Medium',
              summary: '城市绿地的益处：身体健康、心理福祉与生态环境',
              questions: [
                { type: '段落标题匹配', q: 'Paragraph A', a: 'ii. Physical health benefits' },
                { type: '段落标题匹配', q: 'Paragraph B', a: 'iv. Mental wellbeing' },
                { type: '段落标题匹配', q: 'Paragraph C', a: 'vi. Environmental advantages' },
                { type: '选择题', q: 'Green spaces are linked to lower rates of:', a: 'B. heart disease (B选项)' },
                { type: '选择题', q: 'Time in parks is shown to reduce:', a: 'C. stress (C选项)' },
                { type: '填空题', q: 'Trees in cities help lower summer ____.', a: 'temperature' }
              ]
            },
            {
              title: 'Passage 3: The Future of Artificial Intelligence in Education',
              difficulty: 'Hard',
              summary: '人工智能在教育中的应用前景、风险与治理',
              questions: [
                { type: 'Yes/No/Not Given', q: 'AI systems will completely replace human teachers.', a: 'NO - 辅助而非取代教师' },
                { type: 'Yes/No/Not Given', q: 'Some AI tools can give instant feedback on writing.', a: 'YES' },
                { type: 'Yes/No/Not Given', q: 'All secondary schools now use AI marking.', a: 'NOT GIVEN' },
                { type: '选择题', q: 'A key benefit of AI is:', a: 'B. personalised learning (B选项)' },
                { type: '选择题', q: 'The writer warns AI may increase:', a: 'C. inequality (C选项)' },
                { type: '摘要填空', q: 'Good use of AI requires training and clear ____.', a: 'regulation' }
              ]
            }
          ]
        },
        writing: {
          title: '写作 Writing',
          intro: '共2部分，60分钟',
          tasks: [
            {
              task: 'Task 1',
              type: '图表描述 - 柱状图',
              prompt: 'The bar chart below shows the percentage of people in a country who used four modes of transport (bus, train, bicycle, and car) to commute to work in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
              modelAnswer: 'The bar chart compares the proportions of commuters using four transport modes for work journeys in a country in 2010 and 2020.\n\nOverall, the car remained the dominant mode in both years, but its share declined slightly, while train and bicycle use grew. Bus travel fell over the decade.\n\nIn 2010, the car accounted for about 45% of commutes, the largest share. The train followed at roughly 22%, the bus at 20%, and the bicycle at only 13%. By 2020, car use had dipped to around 41%, while train travel rose to 27% and bicycle use climbed to 19%. Bus travel was the only category to decrease, falling from 20% to 13%.\n\nThe data suggests a gradual shift away from private cars and buses toward rail and active travel. This pattern is consistent with policies encouraging public transport and cycling in many countries during the 2010s.\n\nIn conclusion, although the car stayed the most common commute choice, the decade saw a clear movement toward trains and bicycles, and a decline in both bus and car use.',
              tips: '对比两条年份、四种交通方式；突出最大项与增长最快项；用过去时'
            },
            {
              task: 'Task 2',
              type: '议论文',
              prompt: 'Some people think that universities should focus on academic subjects, while others believe they should prepare students for the world of work. Discuss both views and give your own opinion. Write at least 250 words.',
              modelAnswer: 'A central debate in higher education is whether universities should prioritise academic study or vocational preparation. Both perspectives reflect genuine aims of university life, and in my view the strongest model blends the two.\n\nThose who emphasise academic subjects argue that universities exist to advance knowledge and cultivate the mind. Disciplines such as philosophy, history, and pure mathematics train students to think critically, reason rigorously, and engage with ideas beyond immediate utility. They warn that an overly vocational focus reduces education to job training and may leave graduates narrow in outlook when the labour market changes.\n\nOn the other hand, supporters of work preparation point out that most students attend university to improve their career prospects. They argue that courses should teach practical skills, internships, and professional competence so that graduates can contribute to the economy without a long period of further training. In a competitive global market, they say, relevance matters as much as theory.\n\nIn my opinion, the two aims are not opposed. A history student also learns research and writing skills useful in many jobs, while an engineering student benefits from the broad analytical habits that academic study builds. The best universities embed employability within academic depth: through projects, placements, and teaching that connects theory to real problems.\n\nIn conclusion, universities should not choose between academic and vocational goals. By combining rigorous study with practical relevance, they can produce graduates who are both thoughtful and employable.',
              tips: '讨论双方并给出整合立场；避免极端；至少250词'
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
                { q: 'Let\'s talk about photography. Do you like taking photos?', a: '参考回答: Yes, I do, especially when I travel. I like capturing ordinary moments, and I probably take more photos now that everyone has a good camera on their phone.' },
                { q: 'What do you usually take photos of?', a: '参考回答: Mostly scenery and food, but also friends and family at gatherings. I enjoy looking back at them later, because they bring the memory back clearly.' },
                { q: 'Do you prefer taking photos with a phone or a camera?', a: '参考回答: Usually my phone, because it\'s always with me and easy to share. But for special trips I borrow a friend\'s camera for better quality.' },
                { q: 'Do you think people take too many photos these days?', a: '参考回答: Possibly. Some people experience events only through a screen and forget to enjoy the moment. But on balance I think photos are a lovely record, as long as we don\'t overdo it.' }
              ]
            },
            {
              part: 'Part 2: Long Turn (Cue Card)',
              cueCard: 'Describe a photograph you are proud of.\n\nYou should say:\n- when and where it was taken\n- what the photo shows\n- how you took it\n- and explain why you are proud of it.',
              modelAnswer: '参考回答:\n\nI\'d like to talk about a photograph I took about two years ago during a trip to the coast. It was early morning, and I was standing on a quiet beach just as the sun was rising.\n\nThe photo shows a lone wooden boat resting on wet sand, with the sky behind it turning from deep blue to orange. What I like about it is the stillness: there was no one else around, and the only sound was the gentle wave. I took it with my phone, but I crouched low so the boat looked larger against the sky, and I waited for the exact moment when the light hit the water.\n\nI\'m proud of this photo for a few reasons. First, the timing was lucky, but it also took patience, because I had to get up before dawn and stand in the cold. Second, the composition turned out better than I expected; the empty space in the sky gives the small boat a sense of calm. Finally, the picture reminds me of a peaceful start to a holiday when I really needed to relax.\n\nWhenever I look at it, I feel the same quiet I felt that morning. I even printed it and put it on my wall, which I rarely do with my photos. That\'s why it\'s the one I\'m most proud of.',
              tips: '按"时间地点-内容-拍摄方式-自豪原因"展开；加入光线与情感细节'
            },
            {
              part: 'Part 3: Discussion',
              questions: [
                { q: 'Why do you think people like to share photos on social media?', a: '参考回答: I think it\'s a way to connect and feel seen. A photo can say more than words, and getting likes gives a small sense of approval. It also lets people share experiences with friends who aren\'t there.' },
                { q: 'Has technology changed the way we remember things?', a: '参考回答: Yes, a lot. Because we can photograph everything, we may rely less on memory and more on our devices. That\'s convenient, but some argue it makes memories shallower, since we don\'t work to keep them.' },
                { q: 'Do you think professional photography is still valuable?', a: '参考回答: Definitely. Professionals bring skill, vision, and equipment that phones can\'t match, especially for important events like weddings. Casual photos are fun, but craft still matters for quality and meaning.' }
              ]
            }
          ]
        }
      },

      // ========== 剑17 Test 4 ==========
      {
        id: 4,
        title: 'Test 4',
        listening: {
          title: '听力 Listening',
          intro: '共4部分，40题，约30分钟',
          sections: [
            {
              part: 'Part 1',
              context: '一位女士打电话向图书馆报名参加社区语言课程',
              type: '表格填空',
              questions: [
                { q: 'Customer name:', a: 'Sophie Lambert' },
                { q: 'Course name:', a: 'Community Spanish' },
                { q: 'Skill level:', a: 'beginner' },
                { q: 'Day of class:', a: 'Wednesday' },
                { q: 'Class time:', a: '6pm - 8pm' },
                { q: 'Course length:', a: '8 weeks' },
                { q: 'Course fee:', a: '120' },
                { q: 'Materials included:', a: 'textbook' },
                { q: 'Venue:', a: 'Central Library' },
                { q: 'Enrolment number:', a: 'CL-3058' }
              ]
            },
            {
              part: 'Part 2',
              context: '自行车之旅公司导游介绍城市骑行路线与设施',
              type: '选择题 + 匹配题',
              questions: [
                { q: 'The bike tour company started in', a: 'B. 2009 (B选项)' },
                { q: 'The most popular route is the', a: 'C. riverside route (C选项)' },
                { q: 'Tours are suitable for', a: 'A. all levels (A选项)' },
                { q: 'The longest tour lasts', a: 'D. 4 hours (D选项)' },
                { q: 'Helmets are', a: 'provided free' },
                { q: 'Bike hire is at', a: 'the station forecourt' },
                { q: 'The lunch stop is by', a: 'the old harbour' },
                { q: 'The viewpoint is on', a: 'Hill Road' },
                { q: 'Repair support is available at', a: 'every checkpoint' },
                { q: 'The tour ends at', a: 'City Square' }
              ]
            },
            {
              part: 'Part 3',
              context: '两名学生讨论制作一期关于本地音乐的播客作业',
              type: '选择题 + 匹配题',
              questions: [
                { q: 'The podcast topic they chose is', a: 'B. local music scenes (B选项)' },
                { q: 'Their target length is', a: 'C. 20 minutes (C选项)' },
                { q: 'They will record in', a: 'A. a studio (A选项)' },
                { q: 'The assessment is based on', a: 'D. a written report (D选项)' },
                { q: 'Lily\'s role is', a: 'D. scripting and research' },
                { q: 'Tom\'s role is', a: 'F. sound editing' },
                { q: 'The intro music was made by', a: 'a friend' },
                { q: 'They will publish on', a: 'a free platform' },
                { q: 'The deadline for episode one is', a: 'end of April' },
                { q: 'The tutor advises them to', a: 'keep a consistent schedule' }
              ]
            },
            {
              part: 'Part 4',
              context: '关于少数族群语言消亡的学术讲座',
              type: '笔记填空',
              questions: [
                { q: 'About ___ of the world\'s languages are endangered.', a: 'half' },
                { q: 'Most endangered languages have few', a: 'speakers' },
                { q: 'A language dies when its last speaker', a: 'dies' },
                { q: 'Globalisation increases pressure on', a: 'small languages' },
                { q: 'Children often shift to', a: 'a dominant language' },
                { q: 'Recording elders helps build', a: 'archives' },
                { q: 'Some schools teach heritage languages in', a: 'bilingual programmes' },
                { q: 'Language loss reduces cultural', a: 'diversity' },
                { q: 'Technology can help through', a: 'apps' },
                { q: 'Revival works best with', a: 'community support' }
              ]
            }
          ]
        },
        reading: {
          title: '阅读 Reading',
          intro: '共3篇文章，40题，60分钟',
          passages: [
            {
              title: 'Passage 1: The History of Chocolate',
              difficulty: 'Easy',
              summary: '巧克力从美洲饮品到全球甜食的历史演变',
              questions: [
                { type: '判断题', q: 'Chocolate was first consumed as a drink by the Maya.', a: 'TRUE' },
                { type: '判断题', q: 'Christopher Columbus introduced chocolate to Europe.', a: 'FALSE - 由西班牙人科尔特斯引入' },
                { type: '判断题', q: 'Chocolate was originally sweetened with sugar in Africa.', a: 'NOT GIVEN' },
                { type: '填空题', q: 'Cocoa beans were once used as', a: 'currency' },
                { type: '填空题', q: 'The first solid chocolate bar was made in', a: 'the 19th century' },
                { type: '填空题', q: 'Modern milk chocolate was developed in', a: 'Switzerland' }
              ]
            },
            {
              title: 'Passage 2: The Psychology of Decision Making',
              difficulty: 'Medium',
              summary: '决策心理：直觉、思维捷径与改善方法',
              questions: [
                { type: '段落标题匹配', q: 'Paragraph A', a: 'i. The role of intuition' },
                { type: '段落标题匹配', q: 'Paragraph B', a: 'iii. Common mental shortcuts' },
                { type: '段落标题匹配', q: 'Paragraph C', a: 'v. Improving choices' },
                { type: '选择题', q: 'People often rely too heavily on:', a: 'B. first impressions (B选项)' },
                { type: '选择题', q: 'Writing a list tends to:', a: 'C. improve decisions (C选项)' },
                { type: '填空题', q: 'Sleep can help with', a: 'difficult choices' }
              ]
            },
            {
              title: 'Passage 3: Rewilding and Its Critics',
              difficulty: 'Hard',
              summary: '野化恢复生态的做法、成效与争议',
              questions: [
                { type: 'Yes/No/Not Given', q: 'Rewilding means returning land to a totally wild state.', a: 'NO - 通常指引入物种以恢复生态' },
                { type: 'Yes/No/Not Given', q: 'Some rewilding projects have brought back beavers.', a: 'YES' },
                { type: 'Yes/No/Not Given', q: 'All farmers support rewilding schemes.', a: 'NOT GIVEN' },
                { type: '选择题', q: 'A main benefit is increased', a: 'B. biodiversity (B选项)' },
                { type: '选择题', q: 'Critics worry about loss of', a: 'C. farmland (C选项)' },
                { type: '摘要填空', q: 'Successful projects need funding and local ____.', a: 'consent' }
              ]
            }
          ]
        },
        writing: {
          title: '写作 Writing',
          intro: '共2部分，60分钟',
          tasks: [
            {
              task: 'Task 1',
              type: '图表描述 - 线图',
              prompt: 'The graph below shows the consumption of three types of meat (beef, chicken, and pork) per person per year in a country from 1990 to 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
              modelAnswer: 'The line graph illustrates the annual per-person consumption of beef, chicken, and pork in a country between 1990 and 2020.\n\nOverall, chicken consumption rose steadily and became the most eaten meat, while beef and pork both declined. By 2020, chicken clearly led the three.\n\nIn 1990, beef was the most consumed at about 25 kg per person, followed by pork at 20 kg and chicken at only 12 kg. Over the next thirty years, chicken rose sharply to around 30 kg, overtaking both rivals. Beef fell gradually to roughly 15 kg, and pork dipped slightly to about 18 kg by 2020.\n\nThe most notable change is the reversal of rankings: chicken moved from last to first, whereas beef dropped from first to third. Health advice and lower prices likely drove the shift toward chicken, while concerns about fat and cost reduced red-meat eating.\n\nIn summary, the period saw a clear move from red meat toward chicken, with chicken becoming the dominant choice by 2020.',
              tips: '描述三条线的趋势与排名变化；突出鸡肉的反超；用过去时'
            },
            {
              task: 'Task 2',
              type: '议论文',
              prompt: 'Some people believe that the government should invest more in public transport, while others think roads should remain the priority. Discuss both views and give your own opinion. Write at least 250 words.',
              modelAnswer: 'How public money should be spent on transport is a frequent source of debate. Some argue for greater investment in public transport, while others maintain that roads deserve priority. Both positions address real needs, and I believe a balanced approach is best.\n\nSupporters of public transport point out that buses, trains, and metros move many people using far less space and fuel than cars. Better services reduce congestion, lower emissions, and give mobility to those who cannot drive, such as the young, the elderly, and the poor. They contend that road building often induces more traffic, so it rarely solves congestion in the long run.\n\nThose who prioritise roads counter that most journeys still depend on cars, especially in rural and suburban areas where public transport is impractical. They argue that businesses need reliable roads for deliveries, and that neglecting them harms the economy. They also note that many citizens have already paid for road use through taxes and expect maintained infrastructure.\n\nIn my view, the answer depends on context. Dense cities benefit most from rail and bus networks, whereas remote regions need good roads. Rather than treating the two as rivals, governments should fund public transport where it is efficient and maintain roads where it is essential, while pricing road use to reflect its social and environmental cost.\n\nIn conclusion, public transport and roads each serve different populations. Smart investment directs money to the mode that fits each place, instead of favouring one universally.',
              tips: '讨论双方并给出因地制宜的立场；至少250词'
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
                { q: 'Let\'s talk about food. Do you enjoy cooking?', a: '参考回答: I do, yes, though I\'m not very skilled. I like making simple pasta and salads, and cooking helps me relax after a long day.' },
                { q: 'What is your favourite food?', a: '参考回答: I love noodles, especially in a spicy soup. It\'s comforting and quick, and every region seems to have its own version, which makes it fun to explore.' },
                { q: 'Do you prefer eating at home or in restaurants?', a: '参考回答: Mostly at home, because it\'s cheaper and healthier. But I enjoy restaurants for special occasions, when I can try food I wouldn\'t cook myself.' },
                { q: 'Has your diet changed in recent years?', a: '参考回答: Yes, I eat more vegetables now and less fast food than before. I became more aware of health, and I try to cook fresh meals during the week.' }
              ]
            },
            {
              part: 'Part 2: Long Turn (Cue Card)',
              cueCard: 'Describe a meal you enjoyed very much.\n\nYou should say:\n- when and where you had it\n- who you were with\n- what you ate\n- and explain why you enjoyed it.',
              modelAnswer: '参考回答:\n\nI\'d like to describe a meal I had about a year ago at a small seaside restaurant with my family. It was during a short holiday, and we went there on our last evening.\n\nWe were a group of five, and we ordered several dishes to share, which I always enjoy because it means more variety. There was fresh grilled fish, a big bowl of shellfish in a light broth, roasted vegetables, and warm bread with olive oil. Everything tasted of the sea and the region, and you could tell the ingredients were local and fresh.\n\nWhat made the meal special was the setting as much as the food. We sat outside as the sun was setting, with the sound of waves nearby, and the pace was slow and unhurried. Nobody was checking a phone; we just talked and laughed for hours.\n\nI enjoyed it so much because it combined three things I value: good company, simple fresh food, and a calm moment away from routine. It wasn\'t a fancy or expensive meal, but the atmosphere made it feel special. Even now, when I think of that trip, the taste of that broth comes back to me. It\'s a small memory, but a happy one.',
              tips: '描述时间地点、同伴、食物与享受原因；加入感官与氛围细节'
            },
            {
              part: 'Part 3: Discussion',
              questions: [
                { q: 'Why do you think food is important to a culture?', a: '参考回答: Food carries history, climate, and identity. The dishes a culture develops reflect what grows locally and how people lived, and sharing meals is a key way communities bond and pass on tradition.' },
                { q: 'Is traditional food in your country changing?', a: '参考回答: Yes, quite fast. Global ingredients and fast food are common now, especially among young people. Still, many traditional dishes survive at festivals and family gatherings, so the core hasn\'t disappeared.' },
                { q: 'Should schools teach children to cook?', a: '参考回答: I think they should. Cooking is a life skill that supports health and independence, and learning it young makes children more willing to try real food instead of relying on ready meals.' }
              ]
            }
          ]
        }
      }
    ],

    // ========== 剑18 Test 3 ==========
    18: [
      {
        id: 3,
        title: 'Test 3',
        listening: {
          title: '听力 Listening',
          intro: '共4部分，40题，约30分钟',
          sections: [
            {
              part: 'Part 1',
              context: '一对夫妇打电话向酒店预订婚礼宴会',
              type: '表格填空',
              questions: [
                { q: 'Customer name:', a: 'Emma Richardson' },
                { q: 'Event type:', a: 'wedding reception' },
                { q: 'Number of guests:', a: '80' },
                { q: 'Event date:', a: '9th August' },
                { q: 'Room booked:', a: 'Garden Suite' },
                { q: 'Meal style:', a: 'buffet' },
                { q: 'Start time:', a: '4pm' },
                { q: 'Cake supplied by:', a: 'the hotel' },
                { q: 'Deposit paid:', a: '500' },
                { q: 'Confirmation number:', a: 'WR-4410' }
              ]
            },
            {
              part: 'Part 2',
              context: '自然保护区向导介绍观鸟步道与设施',
              type: '选择题 + 匹配题',
              questions: [
                { q: 'The nature reserve was created in', a: 'B. 1995 (B选项)' },
                { q: 'The best season for birdwatching is', a: 'C. spring (C选项)' },
                { q: 'The trail is about', a: 'A. 3 km (A选项)' },
                { q: 'Guided walks leave from', a: 'D. the visitor centre (D选项)' },
                { q: 'The reserve is famous for its', a: 'wetland birds' },
                { q: 'The observation hide is near', a: 'the lake' },
                { q: 'The picnic area is by', a: 'the woodland edge' },
                { q: 'The shop is at', a: 'the entrance' },
                { q: 'The car park is off', a: 'Mill Lane' },
                { q: 'The toilet block is near', a: 'the car park' }
              ]
            },
            {
              part: 'Part 3',
              context: '两名学生与导师讨论考古田野实习项目',
              type: '选择题 + 匹配题',
              questions: [
                { q: 'The excavation site is in', a: 'B. a coastal village (B选项)' },
                { q: 'The team expects to find', a: 'C. Roman pottery (C选项)' },
                { q: 'Students will work for', a: 'A. three weeks (A选项)' },
                { q: 'The dig is funded by', a: 'A. the university (A选项)' },
                { q: 'Dr. Shaw leads', a: 'D. the overall dig' },
                { q: 'Maria records', a: 'F. the finds database' },
                { q: 'The local museum provides', a: 'B. storage space' },
                { q: 'Evening lectures cover', a: 'E. research methods' },
                { q: 'The final report is due', a: 'end of September' },
                { q: 'Students must bring', a: 'sturdy boots' }
              ]
            },
            {
              part: 'Part 4',
              context: '关于真菌在森林中作用的学术讲座',
              type: '笔记填空',
              questions: [
                { q: 'Fungi belong to their own', a: 'kingdom' },
                { q: 'Most fungi live underground as', a: 'mycelium' },
                { q: 'They form partnerships with tree', a: 'roots' },
                { q: 'This partnership is called', a: 'mycorrhiza' },
                { q: 'Fungi help trees absorb', a: 'water' },
                { q: 'In return, trees give fungi', a: 'sugar' },
                { q: 'Some fungi break down dead', a: 'wood' },
                { q: 'They release nutrients back to the', a: 'soil' },
                { q: 'Certain fungi are used to make', a: 'medicine' },
                { q: 'Fungi could help clean', a: 'pollution' }
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
              difficulty: 'Easy',
              summary: '印刷术的发明：从活字到古登堡圣经',
              questions: [
                { type: '判断题', q: 'Moveable type was invented in China before Europe.', a: 'TRUE' },
                { type: '判断题', q: 'Gutenberg printed the first book in English.', a: 'FALSE - 首部印刷品为拉丁文圣经' },
                { type: '判断题', q: 'Printing spread to every continent within ten years.', a: 'NOT GIVEN' },
                { type: '填空题', q: 'Gutenberg\'s press was developed around', a: '1440' },
                { type: '填空题', q: 'Early printed books are known as', a: 'incunabula' },
                { type: '填空题', q: 'The printing press helped spread', a: 'literacy' }
              ]
            },
            {
              title: 'Passage 2: The Science of Dreams',
              difficulty: 'Medium',
              summary: '梦境科学：为何做梦、记忆加工与清明梦',
              questions: [
                { type: '段落标题匹配', q: 'Paragraph A', a: 'ii. Why we dream' },
                { type: '段落标题匹配', q: 'Paragraph B', a: 'iv. Dreams and memory' },
                { type: '段落标题匹配', q: 'Paragraph C', a: 'vi. Lucid dreaming' },
                { type: '选择题', q: 'During REM sleep, dreams are most', a: 'B. vivid (B选项)' },
                { type: '选择题', q: 'Dreams may help the brain sort', a: 'C. daily experiences (C选项)' },
                { type: '填空题', q: 'Keeping a dream ___ can improve recall.', a: 'journal' }
              ]
            },
            {
              title: 'Passage 3: The Economics of Happiness',
              difficulty: 'Hard',
              summary: '幸福经济学：收入、社会关系与政策',
              questions: [
                { type: 'Yes/No/Not Given', q: 'Rich countries are always the happiest.', a: 'NO - 收入超阈值后幸福感趋平' },
                { type: 'Yes/No/Not Given', q: 'Long commutes lower personal wellbeing.', a: 'YES' },
                { type: 'Yes/No/Not Given', q: 'All governments now measure happiness.', a: 'NOT GIVEN' },
                { type: '选择题', q: 'Studies show money matters most for', a: 'B. the very poor (B选项)' },
                { type: '选择题', q: 'Strong social ties are linked to', a: 'C. longer life (C选项)' },
                { type: '摘要填空', q: 'Policy should balance growth and ____.', a: 'wellbeing' }
              ]
            }
          ]
        },
        writing: {
          title: '写作 Writing',
          intro: '共2部分，60分钟',
          tasks: [
            {
              task: 'Task 1',
              type: '图表描述 - 饼图',
              prompt: 'The pie charts below show household spending in a country in 1990 and 2020 across five categories (housing, food, transport, leisure, and other). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
              modelAnswer: 'The pie charts compare how households in one country spent their money across five categories in 1990 and 2020.\n\nOverall, the share spent on housing and transport rose, while food and leisure fell slightly. Housing remained the largest single category in both years.\n\nIn 1990, housing accounted for 30% of spending, the biggest portion. Food was next at 25%, transport 18%, leisure 15%, and other 12%. By 2020, housing had grown to 35%, and transport rose to 22%. Food dropped to 20%, leisure to 13%, and other stayed at 10%.\n\nThe clearest shift is the rise in housing and transport, likely reflecting higher rents and car ownership, while food\'s share declined as it became relatively cheaper. Leisure spending also slipped, perhaps because of the higher fixed costs of housing.\n\nIn summary, household budgets shifted toward housing and transport over the thirty years, with food and leisure taking smaller shares by 2020.',
              tips: '对比两张饼图的主要变化；突出住房与交通增长；用过去时'
            },
            {
              task: 'Task 2',
              type: '议论文',
              prompt: 'Some people think that people should be encouraged to use bicycles instead of cars. To what extent do you agree or disagree? Write at least 250 words.',
              modelAnswer: 'Cycling is often promoted as a solution to urban problems, and some argue people should be pushed to ride bikes rather than drive. I largely agree that cycling should be strongly encouraged, though I do not think it can or should fully replace cars for everyone.\n\nThere are strong reasons to promote bicycles. Riding improves personal health, reduces traffic congestion, and produces no exhaust emissions, which helps air quality and climate goals. In dense cities, bikes use far less space than cars and are often faster for short trips. Encouragement through protected lanes, bike-sharing, and tax breaks can shift behaviour at low cost.\n\nHowever, disagreement is reasonable in some contexts. In rural areas, for people with disabilities, or when carrying children and heavy loads, cars are simply practical. A forced ban on cars would harm those who depend on them and could be unfair. Moreover, cycling in extreme weather or unsafe roads is unrealistic for many commuters.\n\nTherefore, I agree that cycling should be greatly encouraged, but through incentives and infrastructure rather than prohibition. The aim should be to make the bike the easy, safe choice for suitable trips, while keeping cars available where necessary. Combined with better public transport, this reduces car dependence without punishing those who need it.\n\nIn conclusion, I strongly support encouraging cycling, but as part of a broader, fair transport strategy rather than a rigid replacement of cars.',
              tips: '明确立场（支持但非强制替代）；承认反方；提出激励而非禁令；至少250词'
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
                { q: 'Let\'s talk about travel. Do you like going on holiday?', a: '参考回答: Yes, very much. I try to take one longer trip and a couple of short breaks each year. Travel helps me switch off and see different ways of living.' },
                { q: 'What kind of places do you usually visit?', a: '参考回答: I prefer nature and small towns to big cities. Mountains, lakes, and quiet coastlines appeal to me more than crowded tourist centres.' },
                { q: 'Do you prefer relaxing or active holidays?', a: '参考回答: A bit of both. I like walking and exploring during the day, but I also value slow evenings with good food and no schedule.' },
                { q: 'Have your travel habits changed recently?', a: '参考回答: Yes. I now book less and choose places closer to home to save money and time. I also care more about local culture than famous sights.' }
              ]
            },
            {
              part: 'Part 2: Long Turn (Cue Card)',
              cueCard: 'Describe a memorable holiday you have had.\n\nYou should say:\n- where you went\n- who you went with\n- what you did there\n- and explain why it was memorable.',
              modelAnswer: '参考回答:\n\nI\'d like to describe a holiday I took three years ago to a lake region in the mountains. I went with two close friends for five days in early autumn, and it turned out to be one of my favourite trips.\n\nWe travelled by train and then hiked from a small village to a guesthouse by the water. The plan was simple: walk during the day and read in the evenings. On the first day we followed a trail to a viewpoint where the lake lay far below, perfectly still and blue. The second day we rented a small boat and paddled to the other shore, where we found a tiny cafe with homemade cake.\n\nWhat made it memorable was the combination of scenery and friendship. Because there was little phone signal, we talked for hours without distraction, something rare in daily life. We also met a local farmer who invited us to taste his cheese and told stories about the valley that we would never have read in a guidebook.\n\nI remember it so well because it was calm, genuine, and unhurried. After a stressful year, those five days reset my mood completely. The view, the boat, and the long conversations stayed with me, and I still think of that lake when I need to relax. It was a simple trip, but deeply refreshing.',
              tips: '按"地点-同伴-活动-原因"展开；加入感官与人际细节'
            },
            {
              part: 'Part 3: Discussion',
              questions: [
                { q: 'Why do you think tourism is growing worldwide?', a: '参考回答: Rising incomes, cheaper flights, and easy online booking all play a role. People also value experiences more than objects now, and social media makes distant places feel familiar and tempting.' },
                { q: 'What are the downsides of mass tourism?', a: '参考回答: It can overcrowd cities, raise prices for locals, and damage fragile sites and nature. When places become too commercial, they also lose the authenticity that attracted visitors in the first place.' },
                { q: 'How can travellers be more responsible?', a: '参考回答: They can visit off-season, support local businesses, use public transport, and respect rules and nature. Spreading visits beyond famous spots reduces pressure and makes tourism fairer for residents.' }
              ]
            }
          ]
        }
      },

      // ========== 剑18 Test 4 ==========
      {
        id: 4,
        title: 'Test 4',
        listening: {
          title: '听力 Listening',
          intro: '共4部分，40题，约30分钟',
          sections: [
            {
              part: 'Part 1',
              context: '一位顾客打电话向维修公司报修洗衣机',
              type: '表格填空',
              questions: [
                { q: 'Customer name:', a: 'Oliver Bennett' },
                { q: 'Address:', a: '22 Maple Drive' },
                { q: 'Appliance:', a: 'washing machine' },
                { q: 'Brand:', a: 'Bosch' },
                { q: 'Problem reported:', a: 'won\'t drain' },
                { q: 'Preferred date:', a: '18th June' },
                { q: 'Time slot:', a: 'morning' },
                { q: 'Call-out fee:', a: '40' },
                { q: 'Warranty:', a: 'expired' },
                { q: 'Job number:', a: 'WM-2293' }
              ]
            },
            {
              part: 'Part 2',
              context: '博物馆导游介绍维多利亚时代生活展览',
              type: '选择题 + 匹配题',
              questions: [
                { q: 'The museum opened to the public in', a: 'B. 1890 (B选项)' },
                { q: 'The Victorian exhibition focuses on', a: 'C. daily life (C选项)' },
                { q: 'A highlight is a restored', a: 'A. steam engine (A选项)' },
                { q: 'The exhibition is on the', a: 'D. first floor (D选项)' },
                { q: 'Audio guides are available in', a: 'three languages' },
                { q: 'The ticket desk is on the', a: 'ground floor' },
                { q: 'The costume display is in', a: 'Room 3' },
                { q: 'The toy collection is in', a: 'Room 5' },
                { q: 'The cafe is near the', a: 'main stairs' },
                { q: 'The gift shop is by the', a: 'exit' }
              ]
            },
            {
              part: 'Part 3',
              context: '两名学生讨论关于太阳能的小组研究项目',
              type: '选择题 + 匹配题',
              questions: [
                { q: 'The project is about', a: 'B. solar power (B选项)' },
                { q: 'Their chosen region is', a: 'C. a desert area (C选项)' },
                { q: 'The report must include', a: 'A. a cost analysis (A选项)' },
                { q: 'The final grade is based on', a: 'D. group and individual work (D选项)' },
                { q: 'Priya researches', a: 'D. panel efficiency' },
                { q: 'Sam researches', a: 'F. storage batteries' },
                { q: 'The survey targets', a: 'B. local residents' },
                { q: 'The poster is due', a: 'next Friday' },
                { q: 'The group will meet', a: 'twice a week' },
                { q: 'The tutor suggests', a: 'a site visit' }
              ]
            },
            {
              part: 'Part 4',
              context: '关于恐龙灭绝理论的学术讲座',
              type: '笔记填空',
              questions: [
                { q: 'Dinosaurs ruled for about ___ million years.', a: '160' },
                { q: 'The extinction occurred ___ million years ago.', a: '66' },
                { q: 'Most scientists blame a', a: 'meteor' },
                { q: 'The impact site is in', a: 'Mexico' },
                { q: 'It threw up a huge', a: 'dust cloud' },
                { q: 'This blocked', a: 'sunlight' },
                { q: 'Global temperatures then', a: 'fell' },
                { q: 'Plants and plant-eaters died from', a: 'cold' },
                { q: 'Birds are survivors of the', a: 'dinosaur' },
                { q: 'The event allowed ___ to spread.', a: 'mammals' }
              ]
            }
          ]
        },
        reading: {
          title: '阅读 Reading',
          intro: '共3篇文章，40题，60分钟',
          passages: [
            {
              title: 'Passage 1: The Domestication of the Dog',
              difficulty: 'Easy',
              summary: '狗的驯化：从灰狼到人类伙伴',
              questions: [
                { type: '判断题', q: 'Dogs were the first animals domesticated by humans.', a: 'TRUE' },
                { type: '判断题', q: 'All dogs descend from grey wolves.', a: 'TRUE' },
                { type: '判断题', q: 'The oldest known dog was found in Australia.', a: 'FALSE - 发现于欧洲/中东地区' },
                { type: '填空题', q: 'Domestication began around', a: '15,000' },
                { type: '填空题', q: 'Early dogs helped humans with', a: 'hunting' },
                { type: '填空题', q: 'DNA shows dogs split from wolves', a: 'early' }
              ]
            },
            {
              title: 'Passage 2: The Impact of Social Media on Teenagers',
              difficulty: 'Medium',
              summary: '社交媒体对青少年的影响：连接、风险与健康使用',
              questions: [
                { type: '段落标题匹配', q: 'Paragraph A', a: 'i. Social connection online' },
                { type: '段落标题匹配', q: 'Paragraph B', a: 'iii. Risks to wellbeing' },
                { type: '段落标题匹配', q: 'Paragraph C', a: 'v. Healthy use' },
                { type: '选择题', q: 'Heavy social media use is linked to', a: 'B. poor sleep (B选项)' },
                { type: '选择题', q: 'Comparing oneself to others can cause', a: 'C. low self-esteem (C选项)' },
                { type: '填空题', q: 'Setting time ___ helps reduce harm.', a: 'limits' }
              ]
            },
            {
              title: 'Passage 3: Space Debris: A Growing Problem',
              difficulty: 'Hard',
              summary: '太空垃圾：成因、风险与清理',
              questions: [
                { type: 'Yes/No/Not Given', q: 'There are more than 30,000 tracked objects in orbit.', a: 'YES' },
                { type: 'Yes/No/Not Given', q: 'All debris will fall to Earth within a year.', a: 'NO - 多数在轨停留很久' },
                { type: 'Yes/No/Not Given', q: 'Every country has signed a clean-up treaty.', a: 'NOT GIVEN' },
                { type: '选择题', q: 'The greatest danger is', a: 'B. collisions (B选项)' },
                { type: '选择题', q: 'A proposed fix is', a: 'C. robotic removal (C选项)' },
                { type: '摘要填空', q: 'Cleaning orbit needs cooperation and ____.', a: 'funding' }
              ]
            }
          ]
        },
        writing: {
          title: '写作 Writing',
          intro: '共2部分，60分钟',
          tasks: [
            {
              task: 'Task 1',
              type: '图表描述 - 柱状图',
              prompt: 'The bar chart below shows the percentage of households owning four appliances (dishwasher, freezer, microwave, and computer) in a country in 1990 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
              modelAnswer: 'The bar chart compares the share of households owning four common appliances in a country in 1990 and 2020.\n\nOverall, ownership of every item rose, with the computer showing the most dramatic increase. By 2020, nearly all households had a freezer and a microwave.\n\nIn 1990, freezers were the most common at about 70% of households, followed by microwaves at 45%, dishwashers at 30%, and computers at only 12%. By 2020, freezer ownership reached 92% and microwaves 88%, both near-universal. Dishwashers more than doubled to 65%, while computers jumped to 85%.\n\nThe standout change is the computer, which went from the least-owned to one of the most, reflecting the digital revolution. Microwaves also became standard quickly, while dishwashers, though growing, remained the least widespread in 2020.\n\nIn conclusion, household appliance ownership expanded across the board, led by the rapid rise of computers and the near-saturation of freezers and microwaves.',
              tips: '对比两个年份、四种家电；突出电脑的剧增；用过去时'
            },
            {
              task: 'Task 2',
              type: '议论文',
              prompt: 'Some people think that children should start school at a very early age, while others believe they should not begin until they are older. Discuss both views and give your own opinion. Write at least 250 words.',
              modelAnswer: 'When children should begin formal schooling is debated by parents and policymakers alike. Some favour an early start, while others prefer a later one. Both sides raise valid points, and I believe the best answer lies in a balanced, play-rich early years programme rather than extremes.\n\nThose who support early schooling argue that young children are quick learners and benefit from structure, social contact, and language-rich environments. Early education can narrow gaps for disadvantaged children and build habits, such as curiosity and routine, that help later academic success. They note that many high-performing systems begin around age five or even earlier.\n\nOn the other hand, those who prefer a later start warn that too much formal pressure can harm development. They argue that young children learn best through play, movement, and exploration, and that forcing reading and writing too soon may cause stress and reduce love of learning. They also value the family bond and free play that earlier starting erodes.\n\nIn my view, neither extreme is ideal. Children benefit from some group learning and stimulation from around age four or five, but this should be gentle and play-based, not a rigid classroom. The goal in early years is social and emotional growth more than academic content. Pushing hard academics at three risks burnout, while starting at seven may leave some children behind.\n\nIn conclusion, an early but playful start offers the best of both worlds: social development without premature academic stress.',
              tips: '讨论双方并给出折中立场（早期但游戏化）；至少250词'
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
                { q: 'Let\'s talk about technology. Do you use your phone a lot?', a: '参考回答: Probably too much. I use it for messages, maps, and news, but I try to put it away at meals. It\'s useful, yet I notice it eats time.' },
                { q: 'What do you use your phone for most?', a: '参考回答: Communication and navigation mainly. I also read articles and listen to podcasts on it during commutes, which feels productive.' },
                { q: 'Do you think phones make life easier?', a: '参考回答: Yes, in many ways, they put information and services in our pocket. But they can also distract us and make it harder to be present with people.' },
                { q: 'Have you ever tried to spend less time on your phone?', a: '参考回答: I have, briefly. I deleted a few apps and set screen limits. It helped, though I slipped back. I think small limits work better than going cold turkey.' }
              ]
            },
            {
              part: 'Part 2: Long Turn (Cue Card)',
              cueCard: 'Describe a useful electronic device you own.\n\nYou should say:\n- what it is\n- when you got it\n- how you use it\n- and explain why it is useful to you.',
              modelAnswer: '参考回答:\n\nA useful electronic device I own is my e-reader, a small tablet made just for books. I bought it about three years ago when I realised I wasn\'t reading enough because carrying paperbacks was inconvenient.\n\nI use it almost every evening before sleep, and also on trains and during trips. It holds thousands of books, so I always have something to read, and the screen is easy on the eyes in dim light. I borrow library books straight onto it, which saves money and shelf space. I also like that I can change the text size, which helps when I\'m tired.\n\nIt is useful to me for several reasons. First, it removed the excuse of not having a book with me, so my reading has increased a lot. Second, it made reading cheaper and more portable, which suits my commuting life. Third, the built-in dictionary means I can check a word instantly, which helps my English.\n\nI consider it the most valuable device I own because, unlike my phone, it does one thing calmly without notifications pulling me away. It has genuinely changed a habit for the better, and that is why I would struggle to give it up.',
              tips: '描述"是什么-何时得到-如何使用-为何有用"；强调习惯改变'
            },
            {
              part: 'Part 3: Discussion',
              questions: [
                { q: 'Why do you think new technology spreads so fast?', a: '参考回答: Because it solves real problems and is heavily marketed, plus network effects: once friends use something, you join too. Falling prices also let more people adopt devices quickly.' },
                { q: 'Are there downsides to relying on devices?', a: '参考回答: Yes. We can lose basic skills, become dependent on batteries and signals, and face privacy risks. Overuse also hurts attention and face-to-face interaction if not managed.' },
                { q: 'Do you think schools should use more technology?', a: '参考回答: In moderation, yes. Tablets and simulations can make learning engaging and personalised, but they should support, not replace, teachers and hands-on activity, and equity of access must be ensured.' }
              ]
            }
          ]
        }
      }
    ]
  };

  // 将数据添加到 IELTS_DATA
  IELTS_DATA.books.forEach(function (b) {
    if (extraTests[b.id]) {
      extraTests[b.id].forEach(function (t) {
        b.tests.push(t);
      });
    }
  });
})();
