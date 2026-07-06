(function () {
  var SPEAKING_BANK = [
    {
      category: "Work & Study",
      topics: [
        {
          title: "Your Job",
          part1: [
            { q: "What is your job?", a: "I work as a software developer for a mid-sized tech company. I mainly build web applications, and I really enjoy the problem-solving side of the role." },
            { q: "Why did you choose that job?", a: "Honestly, I've always been fascinated by how technology can make life easier. After studying computer science, it felt like the natural path, and the salary and flexibility were a nice bonus." },
            { q: "Do you like your job?", a: "For the most part, yes. The work is challenging but rewarding, though I sometimes find the long meetings a bit draining. Overall it gives me a real sense of achievement." },
            { q: "What is a typical day like for you at work?", a: "I usually start by checking emails and planning my tasks, then spend most of the day coding and collaborating with my team. I try to take a proper lunch break so I don't burn out." }
          ],
          part2: {
            cueCard: "Describe a job you would like to do in the future.\nYou should say:\n- what the job is\n- what it involves\n- why you would like to do it\n- and explain how you might prepare for it",
            modelAnswer: "I'd like to talk about a career I've been dreaming of for quite a while: becoming a wildlife documentary filmmaker. Ever since I was a child, I've been glued to nature programmes on TV, and the idea of travelling to remote places and capturing the beauty of the natural world has always fascinated me.\n\nThe job would involve operating high-quality cameras, spending weeks in the field, and patiently waiting for the perfect shot of animals in their natural habitat. It also requires strong storytelling skills, because you have to edit the footage into a compelling narrative that educates and moves the audience.\n\nThe main reason I'm drawn to it is that it combines my two passions: adventure and conservation. I feel that if people see how fragile these ecosystems are, they might be more willing to protect them. It's meaningful work that goes beyond earning a living.\n\nTo prepare, I'd probably take a course in film production and learn to use professional equipment. I'd also volunteer with conservation projects to build field experience, and maybe start by making short videos about local wildlife to build a portfolio. It won't be easy, but it's a goal I'm genuinely committed to.",
            tips: "Use vivid, sensory details to bring the job to life. Show clear links between your motivation and the preparation steps."
          },
          part3: [
            { q: "Why do some people change careers?", a: "There are many reasons, but the most common is a lack of satisfaction or growth in their current role. Others change because of burnout, a desire for better work-life balance, or simply a late-discovered passion." },
            { q: "Is it better to choose a job for money or for interest?", a: "Ideally you find a balance, but I'd argue interest matters more in the long run. A high salary won't protect you from misery if you dread going to work every day, whereas passion can sustain you through tough periods." },
            { q: "How has technology changed the way people work?", a: "Massively. Remote work, instant communication and automation have made many jobs more flexible but also more demanding. People can now collaborate across continents, though it can blur the line between work and personal life." },
            { q: "Do you think job security is important?", a: "Yes, to a degree. Knowing you have a stable income reduces stress and lets you plan for the future. However, in today's fast-changing economy, adaptability is arguably just as valuable as security." }
          ]
        },
        {
          title: "Your Studies",
          part1: [
            { q: "What do you study?", a: "I'm studying international business at university. It covers everything from marketing to supply chains, and I particularly enjoy the cross-cultural side of it." },
            { q: "Why did you choose this subject?", a: "I've always been curious about how companies operate across borders. My parents run a small export business, so I grew up hearing about it and wanted to understand it properly." },
            { q: "Do you prefer studying alone or with others?", a: "It depends on the task. For memorising facts I like quiet solitude, but for group projects I really value bouncing ideas off classmates — it keeps me motivated." },
            { q: "What is the most difficult part of your studies?", a: "Without a doubt, the statistics modules. Numbers have never been my strong suit, so I've had to put in extra hours and even get a tutor to keep up." }
          ],
          part2: {
            cueCard: "Describe a subject you enjoyed studying at school or university.\nYou should say:\n- what the subject was\n- who taught it\n- what you learned from it\n- and explain why you enjoyed it",
            modelAnswer: "The subject I genuinely loved studying was history, specifically modern world history, which I took during my final two years of school. It was taught by a brilliant teacher called Mr. Davies, who had this incredible ability to make the past feel alive rather than like a list of dates.\n\nWhat I learned went far beyond memorising events. I discovered how political decisions ripple through generations, and how ordinary people's lives are shaped by forces much bigger than themselves. We analysed primary sources, debated causes of conflicts, and even recreated a mock United Nations session, which taught me to see issues from multiple perspectives.\n\nI enjoyed it for several reasons. First, Mr. Davies told stories rather than lectured, so every lesson felt like a narrative. Second, it sharpened my critical thinking — I learned that history is rarely black and white. Finally, it gave me a sense of identity and context; understanding where we come from helps me make sense of today's world.\n\nEven now, years later, I still read history books for pleasure. I'd say it was the subject that taught me not just facts, but how to think, and that's why it remains my favourite.",
            tips: "Name a specific teacher or moment to personalise the answer. Emphasise both what you learned and how it changed you."
          },
          part3: [
            { q: "Should education be free for everyone?", a: "In principle, yes, because it promotes equality and social mobility. However, completely free systems can strain public budgets, so many countries use a mixed model with subsidies and loans." },
            { q: "What skills are most important for students today?", a: "Beyond academic knowledge, I'd highlight critical thinking, digital literacy and adaptability. The job market is shifting fast, so the ability to keep learning matters more than any single fact." },
            { q: "Is online learning as effective as classroom learning?", a: "It has advantages like flexibility and access, but it often lacks the interaction and discipline of a real classroom. For many students, a blend of both works best." },
            { q: "Why do some students dislike school?", a: "Often it's because the teaching feels irrelevant or the pressure of exams is overwhelming. When learning is reduced to grades rather than curiosity, it's easy to lose interest." }
          ]
        }
      ]
    },
    {
      category: "Hometown",
      topics: [
        {
          title: "Your Hometown",
          part1: [
            { q: "Where is your hometown?", a: "It's a coastal city in the south of China called Xiamen. It's famous for its clean streets, islands and a really relaxed pace of life." },
            { q: "Is it a big city or a small town?", a: "It's medium-sized — not as hectic as a megacity, but big enough to have good universities, malls and an airport. I'd call it comfortably sized." },
            { q: "What do you like most about your hometown?", a: "Definitely the seaside. I love walking along the promenade in the evening, and the food scene is fantastic, especially the seafood. It just feels peaceful." },
            { q: "Has your hometown changed much since you were a child?", a: "Enormously. New metro lines, skyscrapers and a booming tech sector have appeared. Some old neighbourhoods are gone, which is a bit sad, but the city is far more convenient now." }
          ],
          part2: {
            cueCard: "Describe your hometown or a place you have lived in.\nYou should say:\n- where it is\n- what it looks like\n- what people usually do there\n- and explain whether you would recommend it to visitors",
            modelAnswer: "I'd like to describe my hometown, a city called Xiamen, located on the southeast coast of China facing the Taiwan Strait. It's an island city connected to the mainland by bridges, and it's known for being one of the cleanest and greenest places in the country.\n\nThe city has a laid-back, almost Mediterranean feel. Palm-lined boulevards, pastel-coloured colonial buildings on Gulangyu Island, and wide sandy beaches give it a postcard quality. The weather is mild most of the year, so the streets are full of life even in winter.\n\nA typical day for locals might involve morning tai chi by the sea, grabbing a bowl of noodles for lunch, and then an evening stroll along the waterfront. Weekends are often spent cycling or visiting the many tea houses, since the region is famous for oolong tea.\n\nWould I recommend it? Absolutely. It's perfect for travellers who want culture without chaos — you get history, nature and great food in one place. I've taken foreign friends there and they all left charmed. It may not be the most dazzling metropolis, but it has a warmth that stays with you.",
            tips: "Paint a picture with concrete imagery (colours, sounds, routines). A clear recommendation with reasons rounds off the monologue well."
          },
          part3: [
            { q: "Why do people move from small towns to big cities?", a: "Mostly for opportunity — better jobs, higher salaries and more entertainment. Cities also offer services like top hospitals and universities that smaller places can't match." },
            { q: "What are the disadvantages of living in a big city?", a: "The obvious ones are pollution, noise and the high cost of living. There's also a sense of anonymity; people can feel isolated despite being surrounded by millions." },
            { q: "How can cities become more livable?", a: "Investing in public transport, green spaces and affordable housing makes a huge difference. Good urban planning that mixes work and leisure areas also reduces stressful commutes." },
            { q: "Do you think people are happier in their hometown?", a: "Not always, but there's comfort in familiarity and community. Some thrive on the excitement of somewhere new, while others feel rootless away from home." }
          ]
        },
        {
          title: "A Place You Know Well",
          part1: [
            { q: "Do you like visiting new places?", a: "Very much. I find that new environments spark my curiosity and help me see things differently. Even a different neighbourhood can feel refreshing." },
            { q: "What kind of places do you usually visit?", a: "I'm drawn to historic towns and natural scenery. I'm not really into party destinations; I prefer somewhere I can slow down and absorb the atmosphere." },
            { q: "Do you prefer the countryside or the city?", a: "It depends on my mood. The countryside is my go-to for recharging, but I rely on the city for work and social life. I'd hate to give up either completely." }
          ],
          part2: {
            cueCard: "Describe a place in your country that you would recommend to foreigners.\nYou should say:\n- where it is\n- how you know about it\n- what visitors can do there\n- and explain why you would recommend it",
            modelAnswer: "I'd strongly recommend a place called Guilin, in the Guangxi region of southern China, which I first visited on a family trip about eight years ago. I'd heard about its landscapes from photos and textbooks, but seeing them in person was something else entirely.\n\nGuilin is famous for its karst mountains — dramatic limestone peaks that rise sharply from the ground and are often wrapped in mist. The Li River winds between them, and taking a bamboo raft or a slow boat down the river is the classic experience. The scenery looks almost like a traditional Chinese ink painting come to life.\n\nVisitors can cycle through the countryside, explore caves with spectacular rock formations, or simply watch the sunrise from a mountain viewpoint. The local food, especially the rice noodles, is another highlight.\n\nI recommend it because it captures a side of China that many foreigners never expect — tranquil, poetic and deeply connected to nature. It's also easy to reach by high-speed train. Whenever friends ask where to go for a truly memorable trip, Guilin is always my first suggestion.",
            tips: "Anchor the place in a personal memory. Describe sensory experiences (sight, food) so the listener can picture it."
          },
          part3: [
            { q: "How does tourism affect local communities?", a: "It can bring income and infrastructure, but also overcrowding and rising prices. The healthiest model is responsible tourism that respects local culture and spreads benefits fairly." },
            { q: "Why do some people prefer staying at home for holidays?", a: "Cost is a big factor, and so is comfort. Some people find travel stressful or exhausting, and a staycation at home can be just as restorative for them." },
            { q: "Should governments protect tourist sites from damage?", a: "Definitely. Famous sites are part of a nation's heritage, so limits on visitor numbers and proper maintenance are essential to preserve them for future generations." }
          ]
        }
      ]
    },
    {
      category: "Home & Family",
      topics: [
        {
          title: "Your Home",
          part1: [
            { q: "Do you live in a house or an apartment?", a: "I live in a flat on the twelfth floor of an apartment block. It's compact but cosy, and the view over the city is actually quite lovely at night." },
            { q: "What do you like about your home?", a: "I love that it's my own little sanctuary. I've decorated it with plants and warm lighting, so it feels calming after a long day. The location near a park is a bonus." },
            { q: "Would you like to move to a different home?", a: "Eventually, yes. I'd love a place with a balcony and more natural light. But right now it's practical and I'm attached to the neighbourhood, so I'm in no rush." },
            { q: "Which room do you spend the most time in?", a: "The living room, without question. It's where I relax, watch films and occasionally work on my laptop. It's the heart of the home for me." }
          ],
          part2: {
            cueCard: "Describe the home you live in or a home you remember well.\nYou should say:\n- where it is\n- what it looks like inside\n- who you live with\n- and explain what you like or dislike about it",
            modelAnswer: "I'd like to describe the apartment I currently live in, which is in a residential district about half an hour from the city centre. It's a two-bedroom flat that I share with a close friend, and we've made it feel genuinely like home over the past two years.\n\nInside, the style is simple and modern. The walls are a soft beige, and we've added lots of greenery — there's a tall monstera in the corner and herbs on the kitchen windowsill. The living room has a comfortable sofa and a bookshelf crammed with novels, which gives it a personal touch. We deliberately kept it uncluttered so the space feels open.\n\nI live there with my flatmate, who's also my childhood friend, so we're easy company. We cook together most evenings and have a small routine that makes daily life smooth.\n\nWhat I like most is the sense of peace it offers; after a stressful day, stepping inside feels like exhaling. The only downside is that the building's lift is often out of service, and carrying groceries up twelve floors is no joke. But honestly, that's a minor complaint. It's a space that reflects who I am, and that matters more than convenience.",
            tips: "Mention specific objects and routines to make the home feel real. Balance likes and a small dislike for a natural tone."
          },
          part3: [
            { q: "Is it better to rent or buy a home?", a: "Buying builds long-term security and equity, but renting offers flexibility, especially for young people whose careers may move them around. The right choice depends on stability and finances." },
            { q: "How has the design of homes changed over time?", a: "Modern homes are smaller, smarter and more open-plan. Technology like smart thermostats is common, and there's far more emphasis on energy efficiency than decades ago." },
            { q: "Why do people care so much about where they live?", a: "Because home shapes daily wellbeing. A good environment affects mood, health and relationships, so it's one of the most personal and emotional decisions we make." }
          ]
        },
        {
          title: "Family",
          part1: [
            { q: "How many people are there in your family?", a: "There are four of us — my parents, my younger sister and me. We're quite close, even though my sister and I bicker like most siblings do." },
            { q: "Who are you closest to in your family?", a: "Probably my mum. She's the one I call when something good or bad happens. We just click, and she gives advice without being judgemental." },
            { q: "Do you spend much time with your family?", a: "Less than I'd like, to be honest. Since I moved out for university, it's mostly video calls and visits once a month, but those matter a lot to me." },
            { q: "What do you usually do together?", a: "We love a good board game night or cooking a big meal on Sundays. It sounds simple, but those moments are when we actually catch up." }
          ],
          part2: {
            cueCard: "Describe a family member who has had an important influence on you.\nYou should say:\n- who this person is\n- what they are like\n- what they have taught you\n- and explain why their influence has been important",
            modelAnswer: "I'd like to talk about my father, who has probably shaped who I am more than anyone else. He's a calm, hard-working man with a dry sense of humour, and although he's not the most talkative person, his actions have always spoken loudly.\n\nWhat he's taught me is the value of perseverance and integrity. Growing up, I watched him run a small business through both good times and a few real setbacks. He never complained or cut corners; he simply kept going and treated everyone fairly. That example stuck with me more than any lecture could.\n\nOne specific lesson stands out. When I failed an important exam, I wanted to give up. He sat me down and said that failure isn't the opposite of success, it's part of it — then helped me make a study plan. That shift in mindset changed how I approach challenges.\n\nHis influence matters because it gave me a stable moral compass during uncertain years. In a world that often rewards shortcuts, his quiet consistency reminds me to do things properly. I may not say it often, but I'm deeply grateful, and I hope to pass the same values on someday.",
            tips: "Focus on concrete lessons and a specific story. Show the emotional impact, not just a list of traits."
          },
          part3: [
            { q: "Has the role of family changed in modern society?", a: "Yes. Families are smaller and more dispersed, and both parents often work, so extended family plays a smaller role. Yet emotional support from family remains as vital as ever." },
            { q: "Do you think children should live with their parents as adults?", a: "It depends on culture and circumstance. In some societies it's normal and practical; elsewhere independence is expected. As long as it's a choice, not pressure, either can work." },
            { q: "What makes a happy family?", a: "Open communication, mutual respect and time spent together. Money helps with comfort, but I don't think it's the core of family happiness at all." }
          ]
        }
      ]
    },
    {
      category: "Hobbies & Leisure",
      topics: [
        {
          title: "Hobbies",
          part1: [
            { q: "What do you do in your free time?", a: "I'm into photography and hiking at the moment. On weekends I'll grab my camera and head to the hills — it's my way of switching off from screens." },
            { q: "Did you have any hobbies as a child?", a: "I was obsessed with building model aeroplanes. It taught me patience, and I still have a shelf of them at my parents' house gathering dust." },
            { q: "Do you prefer indoor or outdoor activities?", a: "Outdoor, generally. Fresh air clears my head, though I do enjoy reading indoors when the weather's bad. A balance keeps things interesting." },
            { q: "Have your hobbies changed as you got older?", a: "Quite a bit. As a kid it was all about play; now I choose hobbies that help me relax or learn. I've become more intentional about how I spend leisure time." }
          ],
          part2: {
            cueCard: "Describe a hobby you enjoy doing in your free time.\nYou should say:\n- what the hobby is\n- when you started it\n- who you do it with\n- and explain why you enjoy it",
            modelAnswer: "One hobby I'm really passionate about is film photography, which I picked up about three years ago almost by accident. I found an old film camera at a flea market, bought a roll of film on a whim, and was hooked the moment I saw my first developed prints.\n\nI usually do it on my own, partly because it's a slow, thoughtful process that I enjoy in solitude. That said, I've joined a small community online where we share scans and tips, so I don't feel completely isolated in it. Occasionally a friend will come along when I shoot on the street.\n\nWhat I love about it is the surprise and the discipline. Unlike digital, you can't check the shot instantly, so you learn to be deliberate — considering light, framing and timing before pressing the button. Then there's the magic of the darkroom or the lab, when weeks later the photos finally appear.\n\nIt also forces me to notice details I'd otherwise miss: the pattern of shadows on a wall, a stranger's expression. In a fast, digital world, photography slows me down and makes ordinary days feel worth keeping. That's why it's more than a pastime — it's almost meditative.",
            tips: "Explain the emotional reward of the hobby, not just the activity. Contrast it with everyday life to show why it matters."
          },
          part3: [
            { q: "Why are hobbies important for people?", a: "They provide balance and relieve stress, but also build identity and skills outside work. A good hobby can even lead to friendships or a second career." },
            { q: "Do you think children should learn a musical instrument?", a: "It's beneficial — music builds discipline and creativity — but it shouldn't be forced. If a child enjoys it, great; if not, there are many other ways to grow." },
            { q: "Are hobbies becoming less popular because of technology?", a: "In some ways, yes — screen time eats into free hours. But technology also enables new hobbies like gaming, coding and content creation, so it's more of a shift than a loss." },
            { q: "Should hobbies be productive or just fun?", a: "They don't have to be productive at all. The point is restoration; if everything must have a purpose, we lose the joy of simply playing." }
          ]
        },
        {
          title: "Movies & TV",
          part1: [
            { q: "Do you like watching films?", a: "I do, yes. For me a good film is the best way to unwind on a Friday night. I lean towards dramas and thoughtful sci-fi rather than pure action." },
            { q: "How often do you go to the cinema?", a: "Maybe once a month. Streaming is convenient, but there's something special about the big screen and the shared silence of a theatre." },
            { q: "What kind of films do you prefer?", a: "I'm a sucker for character-driven stories with a bit of mystery. I'd take a quiet, well-written film over a loud blockbuster any day." },
            { q: "Did you watch much TV as a child?", a: "Too much, probably! Cartoons were my favourite, and my parents had to limit screen time. Looking back, some of those shows shaped my sense of humour." }
          ],
          part2: {
            cueCard: "Describe a film or TV programme that you enjoyed.\nYou should say:\n- what it was\n- when you watched it\n- what it was about\n- and explain why you enjoyed it",
            modelAnswer: "The film I want to talk about is 'Coco', an animated movie by Pixar that I watched a couple of years ago with my little cousin. I'll admit I expected a simple kids' film, but it completely surprised me.\n\nThe story follows a boy named Miguel who dreams of being a musician in a family that forbids music. On the Day of the Dead, he enters the Land of the Dead and embarks on a journey to uncover his family's history. Along the way, the film explores memory, loss and the bonds between generations.\n\nWhat I enjoyed most was how it balanced humour and deep emotion. The animation is stunning — every frame feels hand-crafted — but it's the themes that stayed with me. It made me think about my own grandparents and the stories we rarely ask them about.\n\nBy the end I was genuinely teary, which rarely happens with animated films. I enjoyed it because it respected its audience, young and old alike, and delivered a message about remembering those we love. I've since recommended it to several friends, and every one of them came away moved. It's the kind of film that stays in your heart.",
            tips: "Give a brief, spoiler-free plot summary, then focus on emotional and thematic reasons you enjoyed it."
          },
          part3: [
            { q: "How have films changed over the last few decades?", a: "Technology has transformed them — CGI and streaming have raised the bar for spectacle and access. But storytelling fundamentals remain, and audiences now expect more diverse voices." },
            { q: "Do you think watching films can help language learning?", a: "Absolutely. It exposes learners to natural rhythm, slang and culture. Subtitles bridge the gap, and repeated viewing builds both listening and vocabulary." },
            { q: "Are foreign films popular in your country?", a: "Increasingly, yes, thanks to subtitles and streaming platforms. Korean and European films especially have found loyal audiences who want something different from Hollywood." }
          ]
        }
      ]
    },
    {
      category: "Travel & Transport",
      topics: [
        {
          title: "Travel",
          part1: [
            { q: "Do you like travelling?", a: "I'm crazy about it. Even short trips recharge me, and I love the feeling of arriving somewhere unfamiliar and not quite knowing what to expect." },
            { q: "How do you usually travel?", a: "Trains are my favourite — you get space to read and watch the scenery. For longer distances I'll fly, but I avoid it when I can because of the hassle." },
            { q: "Where did you go on your last holiday?", a: "I went to a small town in the mountains with friends. We hiked, played cards and ate far too much local food. Simple but exactly what I needed." },
            { q: "Do you prefer travelling alone or with others?", a: "Both have merits. Solo travel gives freedom, but I cherish trips with close friends because the shared memories are half the fun." }
          ],
          part2: {
            cueCard: "Describe a memorable trip you have taken.\nYou should say:\n- where you went\n- who you went with\n- what you did there\n- and explain why it was memorable",
            modelAnswer: "I'd like to share a trip that still stands out in my memory: a week I spent in Yunnan province two years ago with two university friends. We'd been stressed with exams and desperately needed to escape the city, so we booked the tickets almost impulsively.\n\nOur base was a town called Lijiang, with its narrow stone streets and wooden houses backed by snow-capped mountains. From there we took day trips to a turquoise lake and a tiny village where we learned to make traditional pancakes with a local family.\n\nWhat made it special wasn't any single sight, but the feeling of freedom. We had no strict plan — some mornings we simply sat in a cafe watching the clouds move over the peaks. One night we joined a bonfire with locals and danced until late, something none of us would normally do.\n\nIt was memorable because it reset me. I returned with a clearer mind and a stronger friendship with the people who came. We still joke about the time we got lost in the rain and ended up in the kindest stranger's kitchen. Travel like that reminds you life isn't only about deadlines; it's about moments, and that trip was full of them.",
            tips: "Choose a trip with a clear emotional takeaway. Describe small, specific moments rather than a generic list of sights."
          },
          part3: [
            { q: "Why do people travel abroad for holidays?", a: "For novelty and perspective. Seeing different lifestyles broadens the mind, and many seek experiences they can't get at home, from food to landscapes." },
            { q: "Is travel becoming easier or harder?", a: "Easier in terms of booking and transport, but harder with overcrowding and stricter borders. Technology smoothed the logistics even as popular spots grew more congested." },
            { q: "Should tourists learn the local language?", a: "It's not required, but even a few phrases show respect and open doors to warmer interactions. It enriches the trip far beyond the practical benefit." },
            { q: "What are the problems caused by mass tourism?", a: "It can erode local culture, overload infrastructure and price out residents. Sustainable tourism — fewer visitors, longer stays — is the healthier alternative." }
          ]
        },
        {
          title: "Public Transport",
          part1: [
            { q: "What form of transport do you use most?", a: "The metro, without doubt. It's reliable and avoids the traffic jams I'd hit in a car. I probably take it twice a day during the week." },
            { q: "Do you prefer public or private transport?", a: "Public, for daily life — it's cheaper and greener. But for a road trip I'd choose a car every time for the freedom it gives." },
            { q: "Is transport in your city good?", a: "Fairly good. The subway network is extensive and clean, though it gets unbearably packed at rush hour. Buses are less dependable, to be honest." },
            { q: "Have you ever had a bad experience on public transport?", a: "Once I fell asleep and missed my stop by ten stations. I ended up exploring an unfamiliar district on foot, which turned out to be a happy accident." }
          ],
          part2: {
            cueCard: "Describe a journey you remember well using public transport.\nYou should say:\n- where you were going\n- what transport you used\n- what happened during the journey\n- and explain why you remember it",
            modelAnswer: "I'll talk about a train journey I took last spring from my city to visit a friend in another province. It was an ordinary trip on paper, but a few things made it stick in my mind.\n\nI was on a high-speed train, the kind that glides so smoothly you barely notice the speed. I'd booked a window seat and planned to work on my laptop, but the view changed that. We passed rice fields, then clusters of grey apartment blocks, then open countryside again — a constantly shifting postcard.\n\nMidway through, the train slowed near a small station and I noticed an elderly woman struggling with two heavy bags. A young student immediately stood and helped her lift them onto the rack. No one asked him to; it was just instinctive kindness. I caught his eye and we both smiled.\n\nThat small moment stayed with me. In a world that often feels rushed and self-focused, it was a quiet reminder that decency shows up in ordinary places. I arrived relaxed rather than frazzled, which is rare for travel. Whenever I think of that trip, it's not the destination I recall, but that fleeting, human scene through a train window.",
            tips: "A journey answer works best when it includes an unexpected human moment. Link the memory to a feeling, not just facts."
          },
          part3: [
            { q: "How can cities reduce traffic problems?", a: "By investing in reliable public transport and cycling lanes, and by discouraging car use through congestion charges. The goal is to make alternatives genuinely easier than driving." },
            { q: "Will self-driving cars solve transport issues?", a: "They could reduce accidents and optimise flow, but they won't fix overcrowding alone. They're a tool, not a miracle, and raise new ethical questions." },
            { q: "Is cycling a good form of city transport?", a: "Yes, for short trips — it's healthy, cheap and eco-friendly. Its success depends on safe infrastructure, which many cities still lack." }
          ]
        }
      ]
    },
    {
      category: "Food & Health",
      topics: [
        {
          title: "Food & Cooking",
          part1: [
            { q: "What is your favourite food?", a: "I'm a big fan of spicy Sichuan dishes — mapo tofu especially. The numbing heat is oddly comforting, and it reminds me of home cooking." },
            { q: "Do you like cooking?", a: "I've grown to like it. I'm no chef, but I can throw together a decent pasta or stir-fry. It feels satisfying to make something from scratch." },
            { q: "Who usually cooks in your family?", a: "My dad, surprisingly. He treats it like a creative outlet and experiments with recipes. We're the lucky beneficiaries of his weekend experiments." },
            { q: "Do you prefer eating out or at home?", a: "At home for everyday meals — it's healthier and cheaper. But I love eating out for the social side and trying cuisines I can't replicate." }
          ],
          part2: {
            cueCard: "Describe a meal you enjoyed cooking or eating with others.\nYou should say:\n- what the meal was\n- who you shared it with\n- how it was prepared\n- and explain why you enjoyed it",
            modelAnswer: "I'd like to describe a hotpot dinner I had last winter with six of my closest friends. It wasn't fancy, but it turned into one of my favourite evenings of the year.\n\nHotpot is a Chinese style of dining where you cook raw ingredients in a shared simmering broth at the table. We ordered a 'double-flavor' pot — one half mild, one half fiery — and surrounded it with plates of thinly sliced beef, leafy greens, tofu and noodles. Everyone cooked at their own pace, dipping and chatting between bites.\n\nThe preparation was half the fun: we'd each brought something, chopped vegetables together, and argued good-naturedly over the right sauce mix. There was laughter, a little chaos, and the comforting sound of broth bubbling away.\n\nI enjoyed it because it was deeply communal. Unlike a formal dinner where you sit and are served, hotpot makes everyone part of the process, so conversation never stops. The warmth of the food matched the warmth of the company. By the end we were full, relaxed and a little reluctant to leave. It's meals like that — simple, shared, unhurried — that I treasure most.",
            tips: "Explain the cultural or social aspect of the meal, not just the food. Show how the experience brought people together."
          },
          part3: [
            { q: "Why is healthy eating important?", a: "It directly affects energy, mood and long-term disease risk. A balanced diet supports both body and mind, whereas poor habits catch up with people later in life." },
            { q: "Are people's eating habits changing?", a: "Yes. There's more awareness of nutrition and plant-based options, but busy lifestyles also push many toward fast food. Convenience often wins over health." },
            { q: "Should schools teach cooking?", a: "I think so. Basic cooking is a life skill that promotes independence and healthier choices. It also teaches planning and even a bit of science and maths." },
            { q: "Is traditional food being lost?", a: "In some families, yes, as convenience foods take over. But there's also a revival, with young people rediscovering heritage recipes as a form of identity." }
          ]
        },
        {
          title: "Health & Exercise",
          part1: [
            { q: "How do you keep healthy?", a: "I try to sleep enough, eat reasonably and move daily. Honestly I'm not perfect, but a short run or stretch most mornings keeps me sane." },
            { q: "Do you do any sport regularly?", a: "I play badminton once a week with colleagues. It's social and gets my heart rate up without feeling like a chore." },
            { q: "Is health care good in your country?", a: "It's improved a lot and is affordable for basics, though big cities have better facilities than rural areas. Wait times can be long for non-urgent care." },
            { q: "Do you think people care more about health now?", a: "Generally yes, thanks to social media and rising awareness. But awareness doesn't always translate into action — many still sit too much and eat poorly." }
          ],
          part2: {
            cueCard: "Describe something you do to stay healthy.\nYou should say:\n- what it is\n- how often you do it\n- who you do it with\n- and explain why it is good for your health",
            modelAnswer: "A habit I rely on for my wellbeing is morning jogging, which I've kept up for about three years now. It started as a New Year's resolution and, against my expectations, actually stuck.\n\nI run about four times a week, usually at dawn before work, for around half an hour. The route is a loop through a nearby park, so I get greenery and fresh air rather than traffic. I mostly do it alone with music or a podcast, though sometimes a friend joins at the weekend for a slower, chattier session.\n\nThe physical benefits are clear: my stamina improved, I sleep better, and I rarely get sick. But the bigger payoff is mental. Running clears the clutter from my head; by the time I'm back, problems that felt huge at 6 a.m. seem manageable. It's like pressing a reset button before the day begins.\n\nI'd say it's good for health because it hits both body and mind at once, and it's free and flexible — no gym membership needed. On days I skip it, I notice the difference in my mood. It's become less of a routine and more of a need, which is the best kind of healthy habit to have.",
            tips: "Cover both physical and mental benefits to show depth. Mention consistency and how it fits your lifestyle."
          },
          part3: [
            { q: "Should governments promote public health?", a: "Yes, because prevention is cheaper than treatment. Campaigns on diet, smoking and exercise reduce long-term strain on health systems and improve quality of life." },
            { q: "Why do some people avoid exercise?", a: "Often it's lack of time, motivation or access to safe spaces. For some, past negative experiences in sport make exercise feel like punishment rather than pleasure." },
            { q: "Is mental health as important as physical health?", a: "Increasingly recognised as equally important. The two are linked — poor mental health harms the body, and vice versa. Societies are finally treating them as one system." }
          ]
        }
      ]
    },
    {
      category: "Technology",
      topics: [
        {
          title: "Computers & the Internet",
          part1: [
            { q: "How often do you use the internet?", a: "Constantly, if I'm honest. For work, study and keeping in touch, it's essential. I'd struggle to get through a day without it." },
            { q: "What do you usually do online?", a: "A mix of everything — emails, reading articles, watching videos and the odd online shopping spree. I try to limit aimless scrolling, though I don't always succeed." },
            { q: "Do you think the internet makes life easier?", a: "Largely yes. Information, banking and connection are at our fingertips. The downside is distraction and the pressure to be always available." },
            { q: "Did you use computers much as a child?", a: "Some, for games and homework. They were slower and clunkier, but I was still fascinated. I suppose that's where my interest in tech began." }
          ],
          part2: {
            cueCard: "Describe a website or app you find useful.\nYou should say:\n- what it is\n- how you found it\n- what you use it for\n- and explain why you find it useful",
            modelAnswer: "I'd like to talk about a language-learning app called Duolingo, which has become part of my daily routine for over a year. I stumbled on it after a friend recommended it when I mentioned wanting to learn Spanish for a trip.\n\nThe app is simple: each day it gives you a few short lessons with listening, translation and speaking exercises, all gamified with points and streaks. I use it for about fifteen minutes every morning, often while having coffee, so it never feels like a burden.\n\nWhat I use it for is building basic vocabulary and grammar in a low-pressure way. The speech-recognition tasks help my pronunciation, and the gentle daily reminders keep me consistent without a teacher.\n\nI find it useful for several reasons. First, it lowers the barrier to starting — no classes, no commute, no cost for the basics. Second, the streak system taps into my competitiveness, so I rarely skip a day. Most importantly, it made language learning feel achievable rather than intimidating. I'm far from fluent, but I can now read simple signs and order food on holiday, which feels like real progress. For a free tool, that's impressive.",
            tips: "Pick a tool you can describe concretely. Explain the mechanism (how it works) and the personal benefit clearly."
          },
          part3: [
            { q: "Does the internet bring people closer or apart?", a: "Both. It connects distant loved ones instantly, yet excessive use can weaken face-to-face bonds. The effect depends on whether we use it to enhance or replace real contact." },
            { q: "How has technology changed education?", a: "It's democratised access — anyone with a connection can learn almost anything. But it also demands self-discipline, and not all online content is trustworthy." },
            { q: "Are there dangers to relying on technology?", a: "Yes — privacy loss, misinformation and dependency. If we outsource memory and thinking to machines, we risk losing skills we may need later." }
          ]
        },
        {
          title: "Mobile Phones",
          part1: [
            { q: "Do you use your phone a lot?", a: "More than I'd like to admit. It's my alarm, map, camera and office. I'm trying to do phone-free evenings to reclaim some focus." },
            { q: "What do you use your phone for most?", a: "Messaging and navigation, mainly. And photos — I document far too much of my life, much of which I'll never look at again." },
            { q: "Could you live without a smartphone?", a: "Technically yes, but it'd be inconvenient. So much of modern life assumes you have one — payments, tickets, even door keys now. I'd feel oddly unmoored." },
            { q: "Do you think phones are bad for socialising?", a: "They can be, when people stare at screens instead of each other. But they also let us stay close to friends far away, so it's a double-edged sword." }
          ],
          part2: {
            cueCard: "Describe a time when your phone was very useful to you.\nYou should say:\n- when it was\n- where you were\n- what you used it for\n- and explain why it was so useful",
            modelAnswer: "I'll describe a moment last year when my phone genuinely saved the day during a trip abroad. I was in an unfamiliar city, had missed the last bus, and realised I was completely lost as darkness fell.\n\nMy phone became my lifeline. First, I used the maps app to figure out where I was and find a route — it even showed me a night bus I hadn't known existed. Then, when that bus was late, I used a translation app to ask a local shopkeeper for help, which would have been impossible otherwise.\n\nI also used it to message my hotel so they wouldn't worry, and to book a ride as a backup. Throughout, the offline maps I'd downloaded earlier meant I wasn't stranded despite weak signal.\n\nIt was so useful because it turned a stressful, potentially unsafe situation into a manageable one. Without it, I'd have been relying on luck and sign language. The experience made me appreciate how these devices quietly handle crises we don't anticipate. Of course, it also reminded me to charge it fully and download maps before wandering off next time.",
            tips: "Structure as a small story with a problem and resolution. Highlight specific functions (maps, translation) to show real utility."
          },
          part3: [
            { q: "Should young children have phones?", a: "Not smartphones, in my view. A basic phone for safety is reasonable, but early smartphone use risks addiction and exposure. Boundaries matter more than the device itself." },
            { q: "Why do people upgrade phones so often?", a: "Marketing and status play a role, plus genuine feature gains. But for many it's habit — the old phone often works fine, which raises sustainability concerns." },
            { q: "Will phones eventually replace computers?", a: "For casual use, largely yes, but not for serious work. Phones are great for consumption; creative and complex tasks still need a bigger screen and keyboard." }
          ]
        }
      ]
    },
    {
      category: "Environment",
      topics: [
        {
          title: "Environmental Protection",
          part1: [
            { q: "Are you interested in environmental issues?", a: "Yes, increasingly. I try to recycle and avoid single-use plastic, though I know individual actions are small next to systemic change." },
            { q: "What do you do to help the environment?", a: "I carry a reusable bottle, take public transport, and cut food waste. None of it is heroic, but I figure every bit counts if enough people join in." },
            { q: "Is pollution a problem in your city?", a: "It used to be worse, but air quality has improved with stricter rules. Traffic and plastic waste are still visible issues, especially along the river." },
            { q: "Do you think young people care about the environment?", a: "More than older generations, I'd say. Climate anxiety is real for them, and they're vocal about it — though turning concern into habits is the hard part." }
          ],
          part2: {
            cueCard: "Describe an environmental problem in your area or country.\nYou should say:\n- what the problem is\n- what causes it\n- what effects it has\n- and explain what could be done to solve it",
            modelAnswer: "I'd like to talk about a pressing environmental issue in my country: plastic pollution in our rivers and oceans. It's something I notice more and more, especially along the coast near where I grew up.\n\nThe causes are fairly clear. Mass consumption of packaged goods, weak recycling habits, and inadequate waste management mean huge amounts of plastic end up in waterways. During floods, you can literally see bags and bottles swept into the sea.\n\nThe effects are serious. Marine life ingests or gets entangled in plastic, microplastics enter the food chain, and beaches lose their appeal, hurting tourism. There's also a quiet cost to public health we don't fully grasp yet.\n\nTo tackle it, I think we need action on several fronts. Banning unnecessary single-use plastics is a start, but enforcement and alternatives must follow. Better waste collection, especially in smaller towns, is critical. Just as important is education — if people connect their litter to a dead turtle, behaviour shifts. No single fix works, but combined pressure from policy and public awareness can turn the tide.",
            tips: "Use a clear problem-cause-effect-solution structure. Give a concrete local example to make it credible."
          },
          part3: [
            { q: "Whose responsibility is the environment — individuals or governments?", a: "Both, really. Governments set the rules and infrastructure, but individuals create demand and daily habits. Blaming only one side lets the other off the hook." },
            { q: "Can technology solve climate change?", a: "It's a big part of the answer — renewables, batteries, carbon capture. But technology alone won't suffice without political will and changes in consumption." },
            { q: "Is recycling effective?", a: "It helps, but it's not a silver bullet. Reducing and reusing come first; recycling still uses energy. The real win is making less waste in the first place." },
            { q: "Do developed countries have more duty to act?", a: "Historically they caused more emissions, so fairness suggests they lead. But today's fast-growing economies also matter, so it must be a shared, differentiated effort." }
          ]
        },
        {
          title: "Weather & Seasons",
          part1: [
            { q: "What is the weather usually like in your city?", a: "It's quite mild and humid, with hot summers and short, gentle winters. We don't get snow, which I sometimes envy, to be honest." },
            { q: "Do you prefer hot or cold weather?", a: "I prefer cooler weather — around twenty degrees is ideal. Heat makes me sluggish, whereas a crisp day energises me and I sleep better." },
            { q: "Does the weather affect your mood?", a: "Definitely. Grey, rainy weeks drag me down a little, while sunshine genuinely lifts my spirits. I've learned to plan outdoor things around the forecast." },
            { q: "Has the weather changed in recent years?", a: "It feels more extreme — hotter summers and weirder storms. Whether it's perception or climate shift, the seasons seem less predictable than when I was a kid." }
          ],
          part2: {
            cueCard: "Describe your favourite season of the year.\nYou should say:\n- which season it is\n- what the weather is like\n- what you usually do in this season\n- and explain why it is your favourite",
            modelAnswer: "My favourite season is autumn, which in my region arrives around October and lasts until late November. After the stickiness of summer, the cooler, drier air feels like a relief, and the light takes on a soft golden quality I find beautiful.\n\nThe weather is mild — usually fifteen to twenty-two degrees — with clear skies and a gentle breeze. It's the kind of climate where you can walk for hours without sweating or shivering, which is perfect for someone like me who hates extremes.\n\nIn autumn I tend to spend more time outdoors. I go on long weekend hikes to watch the leaves turn red and gold, visit flea markets, and enjoy hot drinks in cafes with friends. It's also when I feel most focused, so I often start personal projects, like writing or learning something new.\n\nIt's my favourite because it feels like a fresh beginning without the pressure of New Year resolutions. Nature seems to slow down gracefully, and that calm rubs off on me. There's a cosiness to it — sweaters, books, warm food — that winter's harshness lacks. If I could freeze one season, autumn would be it.",
            tips: "Link the season to activities and a feeling, not just temperature. Personal rituals make the answer vivid."
          },
          part3: [
            { q: "How does climate affect people's lifestyles?", a: "Strongly. Climate shapes clothing, food, housing and even social rhythm — think of siestas in hot regions versus outdoor culture in mild ones. It subtly directs daily life." },
            { q: "Are seasons becoming less distinct?", a: "In many places, yes, likely due to climate change. Milder winters and hotter summers blur the transitions, which affects agriculture and ecosystems we depend on." },
            { q: "Do you think weather forecasts are reliable?", a: "More than they used to be, thanks to better modelling. But local surprises still happen, especially with storms, so I take them as guidance rather than certainty." }
          ]
        }
      ]
    },
    {
      category: "People & Relationships",
      topics: [
        {
          title: "A Friend",
          part1: [
            { q: "Do you have many friends?", a: "A handful of close ones, rather than a wide circle. I'd rather have a few people I truly trust than dozens of acquaintances I barely know." },
            { q: "How often do you see your friends?", a: "The core group meets roughly once a week, often for a meal. Others I catch up with monthly, but we stay in touch daily through messages." },
            { q: "What do you usually do with friends?", a: "Anything from deep talks to silly games. We cook together, watch films, or just wander the city. The activity matters less than the company." },
            { q: "What makes someone a good friend?", a: "Reliability and honesty, I'd say. Someone who shows up and tells you the truth, even when it's awkward, is worth more than ten fair-weather pals." }
          ],
          part2: {
            cueCard: "Describe a friend who is important to you.\nYou should say:\n- how you met\n- what he or she is like\n- what you do together\n- and explain why this friendship is important",
            modelAnswer: "I'd like to describe my friend Lin, who has been a constant in my life for over a decade. We met on the first day of high school, both awkward and new, and bonded over a shared love of bad puns and basketball.\n\nLin is the kind of person who lights up a room — outgoing, warm, and genuinely curious about everyone she meets. Beneath that cheerfulness is a fiercely loyal streak; she remembers the small things about people, which makes you feel seen.\n\nWhat we do together has evolved with age. As teens it was sports and homework; now it's long dinners where we dissect our lives, or trips where we explore new cities. We've travelled together three times, and those are some of my happiest memories.\n\nThis friendship matters because she anchors me. During my lowest periods — a rough breakup, a failed exam — she was there without judgement, often just sitting with me in silence. Good friends are rare, and the ease we have, the sense that I can be fully myself, is something I protect. I can't imagine my life without that steadiness, and I hope I offer her the same.",
            tips: "Show the friend's character through a story, not adjectives alone. Explain the friendship's emotional value to you."
          },
          part3: [
            { q: "Why is it sometimes hard to make friends as an adult?", a: "Life gets structured — work, family and routine leave little room. Plus adults are guarded; trust takes longer when you're no longer thrown together daily like at school." },
            { q: "Are online friendships real friendships?", a: "They can be. Shared interests and honest exchange create real bonds, though they lack physical presence. For many, especially the isolated, they're genuinely meaningful." },
            { q: "Do you think people need friends to be happy?", a: "Most do, yes — connection is deeply human. A few contented loners exist, but for the majority, friendship buffers stress and adds meaning to life." }
          ]
        },
        {
          title: "A Person You Admire",
          part1: [
            { q: "Who do you admire most?", a: "I admire my former biology teacher. She made a tough subject feel alive and believed in students others had written off, including me." },
            { q: "Do you have role models?", a: "A few, in different areas — a scientist, an athlete, a writer. They're not perfect people, just ones whose dedication I respect and try to learn from." },
            { q: "Do you admire famous people?", a: "Some, when their influence is positive. But I'm wary of celebrity culture; I admire actions and values more than fame itself." },
            { q: "Have your role models changed over time?", a: "Yes. As a kid I wanted to be a footballer; now I admire quiet competence and kindness over glory. Maturity shifted what I value in people." }
          ],
          part2: {
            cueCard: "Describe a person you admire who is not a family member.\nYou should say:\n- who this person is\n- how you know them\n- what they have achieved\n- and explain why you admire them",
            modelAnswer: "The person I admire is Malala Yousafzai, whom I first learned about through a documentary several years ago. She's not someone I know personally, but her story has stayed with me more than most I've encountered.\n\nI became aware of her when she was a teenager campaigning for girls' education in Pakistan, and was attacked for it. Rather than retreat, she turned the experience into a global voice for education rights, later becoming the youngest Nobel Peace Prize laureate.\n\nWhat she has achieved goes beyond awards. She founded a fund supporting education projects, addressed the United Nations, and kept studying herself — she recently graduated from university. Her work has drawn attention and resources to millions of girls denied schooling.\n\nI admire her for courage rooted in conviction, not anger. At an age when most are figuring out who they are, she faced terror and responded with resolve to help others. What moves me is that her cause is simple and just — that every child deserves to learn. In a noisy world, she reminds me that one steady voice, backed by principle, can shift history. She's a standard I measure my own courage against.",
            tips: "Choose someone with a clear, defensible achievement. Connect their story to a value you personally hold."
          },
          part3: [
            { q: "Why do people need role models?", a: "They offer a map of what's possible and what's worthy. Especially for the young, a role model turns abstract values into a living example to aim toward." },
            { q: "Is fame the same as being admirable?", a: "Not at all. Fame is attention; admiration is earned through character or contribution. Many admirable people are unknown, and many famous ones aren't admirable." },
            { q: "Should we admire historical figures despite their flaws?", a: "Context matters. We can honour their positive impact while acknowledging failings. Pretending they were flawless helps no one; honest memory is more useful." }
          ]
        }
      ]
    },
    {
      category: "Education",
      topics: [
        {
          title: "Schools",
          part1: [
            { q: "Do you remember your first school?", a: "Vividly, actually. It was a small place with a big playground and a kind headteacher. I made my first real friend there, which is what sticks most." },
            { q: "Did you like school as a child?", a: "Mostly, yes. I loved the social side and art class, but dreaded maths tests. Like most kids, my feelings swung between loving and loathing it." },
            { q: "What was your favourite subject at school?", a: "English literature. Reading stories from other lives felt like travel, and my teacher encouraged us to interpret rather than memorise. That freedom suited me." },
            { q: "How has school changed since you were young?", a: "Bigger classes with more technology, and far more testing pressure. There's more equipment, but I worry something playful has been lost along the way." }
          ],
          part2: {
            cueCard: "Describe a teacher who influenced you positively.\nYou should say:\n- who the teacher was\n- what subject they taught\n- how they taught\n- and explain how they influenced you",
            modelAnswer: "I'd like to tell you about Mr. Chen, my high-school English teacher, who changed my relationship with learning more than anyone else. He taught literature, but really he taught us to think.\n\nWhat set him apart was his method. Instead of making us memorise summaries, he'd read a passage aloud, then throw open a question with no fixed answer. We'd debate, sometimes loudly, and he'd nudge us toward deeper reasoning rather than telling us the 'right' view. Mistakes were welcome; curiosity was the currency.\n\nHe influenced me in two lasting ways. First, he showed that language is a tool for understanding yourself and others, not just for exams — that shifted how I read everything. Second, his faith in quiet students like me pulled me out of my shell; he'd call on me gently, then praise the effort, not just the result.\n\nBecause of him I started writing for pleasure and chose a path involving language. More broadly, he modelled that a good teacher doesn't fill a bucket but lights a fire. Years later, when I teach others something, I catch myself using his patient, questioning style. That, to me, is the truest sign of influence — it outlives the classroom.",
            tips: "Focus on teaching style and the specific change in you. Show the lasting effect, not just praise."
          },
          part3: [
            { q: "What makes a good teacher?", a: "Patience, clarity and the ability to inspire. Knowledge alone isn't enough; a great teacher adapts to students and makes them want to learn, not just comply." },
            { q: "Should education focus on exams or skills?", a: "Both have a place, but over-focus on exams narrows learning. Real preparation means critical thinking and practical skills, not just passing tests." },
            { q: "Is homework necessary?", a: "Useful in moderation — it reinforces practice and responsibility. But excessive homework breeds burnout, so the quality and purpose matter more than the quantity." },
            { q: "Should university education be for everyone?", a: "Access is good, but university isn't the only valid path. Vocational training and apprenticeships deserve equal respect; forcing all into degrees helps no one." }
          ]
        },
        {
          title: "Learning & Reading",
          part1: [
            { q: "Do you like reading?", a: "I do, though less than I'd like. A novel before bed is my favourite way to unwind, and non-fiction feeds my curiosity about how things work." },
            { q: "What did you read as a child?", a: "Adventure series mostly — fantasy and detective stories. Those books probably trained my imagination more than any class did." },
            { q: "Do you prefer books or screens?", a: "Books, for deep reading; the lack of notifications helps me focus. But I read news and articles on screens daily out of convenience." },
            { q: "Do you learn new things easily?", a: "It depends on the format. I learn by doing and discussing; passive lectures slip away. Give me a hands-on task and I'll pick it up fast." }
          ],
          part2: {
            cueCard: "Describe a book you have read and enjoyed.\nYou should say:\n- what the book was\n- when you read it\n- what it was about\n- and explain why you enjoyed it",
            modelAnswer: "The book I want to talk about is 'Sapiens' by Yuval Noah Harari, which I read two summers ago during a long train journey across the country. It's a sweeping history of humankind, and it completely reshaped how I see the world.\n\nThe book traces our species from early hunter-gatherers to the age of artificial intelligence. It explores how shared myths — money, religion, nations — allowed millions of strangers to cooperate, and how agriculture, science and capitalism reshaped societies. It's big, bold and sometimes provocative.\n\nWhat I enjoyed was the perspective it gave me. Harari has a gift for connecting dots — showing, for instance, how a belief about money and a discovery about germs both stem from our ability to believe stories. It made familiar facts feel new and asked uncomfortable questions about progress.\n\nI finished it feeling both small and empowered: small because individual lives are brief specks, yet empowered because ideas shape reality and we can choose better ones. It's the rare book that lingers for months, nudging how I read the news. I've since recommended it to several friends, and we've had great debates. A book that sparks that is, to me, a truly good one.",
            tips: "Give a brief, accurate summary, then explain the personal shift in perspective. Show why it mattered to you."
          },
          part3: [
            { q: "Is reading still important in the digital age?", a: "More than ever. Amid short, shallow content, long-form reading builds focus and depth. It's a muscle we risk losing, and with it, the capacity for complex thought." },
            { q: "Should children read more fiction or non-fiction?", a: "A mix is ideal. Fiction builds empathy and imagination; non-fiction builds knowledge. Forcing one over the other misses the different gifts each offers." },
            { q: "Why do some people dislike reading?", a: "Often because school made it feel like work, or they never found the right book. Reading clicks when it's chosen freely, not assigned — taste matters." }
          ]
        }
      ]
    },
    {
      category: "Culture & Art",
      topics: [
        {
          title: "Art",
          part1: [
            { q: "Are you interested in art?", a: "I enjoy it casually — visiting galleries on trips, not creating it. I find visual art a nice break from words and screens." },
            { q: "Did you do any art at school?", a: "Yes, painting and a bit of sculpture. I wasn't talented, but I liked the mess and freedom of it. It was one class where there were no wrong answers." },
            { q: "Do you have any art in your home?", a: "A few prints and one original painting from a local market. They're not valuable, but they make the walls feel personal." },
            { q: "What kind of art do you like?", a: "Modern and abstract, mostly — art that makes me feel or wonder rather than art I have to decode. I also love street art for its energy and accessibility." }
          ],
          part2: {
            cueCard: "Describe a piece of art you have seen or would like to see.\nYou should say:\n- what it is\n- where you saw or would see it\n- what it looks like\n- and explain how it made or makes you feel",
            modelAnswer: "I'd like to describe a painting I saw last year at a city gallery: a large abstract work by a local artist, all sweeping blues and oranges that seemed to move as you stepped back. I wasn't familiar with the artist, but the piece stopped me in the middle of the room.\n\nIt hung in a quiet corner, deliberately lit so the colours glowed against a grey wall. Up close it was chaos — layers of paint, scratches, even what looked like sand mixed in. From a distance, though, it resolved into something like a stormy sea at sunset, though the artist never named it, leaving it open.\n\nWhat struck me was the feeling it stirred without depicting anything literal. It was calm and turbulent at once, and I found myself breathing slower, almost as if the painting had paused my thoughts. I stood there longer than I intended, and left strangely refreshed.\n\nI think it moved me because it asked nothing of me — no story to follow, no message to decode — just an honest emotional response. In a busy day of schedules, that wordless exchange with a canvas felt like a small gift. I still think about those colours when I need to slow down, which says something about art's quiet power.",
            tips: "Describe the visual details and your emotional reaction. Emphasise the personal, subjective experience."
          },
          part3: [
            { q: "Should the government fund the arts?", a: "Yes, within reason. Art enriches society, preserves culture and supports jobs, yet it rarely survives on market forces alone. Public funding keeps it accessible to all." },
            { q: "Is modern art difficult to understand?", a: "Sometimes, by design — it asks for feeling over fact. But 'not understanding' isn't failure; engaging with it personally is the point, not decoding a secret." },
            { q: "Do you think art education matters in schools?", a: "It does. Beyond talent, art teaches observation, creativity and expression — skills useful in any field. Cutting it as 'extra' overlooks how it shapes thinking." }
          ]
        },
        {
          title: "Music",
          part1: [
            { q: "What kind of music do you like?", a: "Indie and acoustic mainly — songs with real lyrics and a bit of storytelling. I'll dip into jazz when I want to concentrate, and pop for a mood lift." },
            { q: "Do you play any musical instrument?", a: "I used to play the guitar, badly, then quit. I regret it now and keep meaning to restart. There's something satisfying about making music yourself." },
            { q: "When do you listen to music?", a: "Almost constantly — commuting, cooking, exercising. It soundtracks my day; certain songs even mark memories, like a personal time machine." },
            { q: "Did you learn music as a child?", a: "A little piano, forced by my mum, which I resisted then. Funny how I'd pay for lessons now. Timing and willingness rarely align in childhood." }
          ],
          part2: {
            cueCard: "Describe a song or piece of music you enjoy.\nYou should say:\n- what it is\n- who performs it\n- when you first heard it\n- and explain why you enjoy it",
            modelAnswer: "The piece of music I'd like to talk about is 'River' by a folk singer I discovered during university. It's a quiet acoustic song, just a voice and a guitar, but it has stayed with me for years.\n\nI first heard it late one night while studying, playing a random playlist to stay awake. The opening chords pulled me away from my books completely. The performer's voice is unpolished in the best way — you can hear the breath and feeling in every line.\n\nThe lyrics tell of leaving home and the mixed ache of freedom and loss, themes that hit hard at a time I'd just moved out on my own. It felt as if someone had written the song specifically for that lonely, excited chapter of my life.\n\nI enjoy it because it's honest and unhurried. In an era of auto-tuned, crowded production, its simplicity is a relief. Whenever I hear it, I'm transported back to that small room, that uncertain but hopeful version of me. Music like this doesn't just entertain; it holds a moment for you. I've since seen the artist live, and singing along with a room of strangers was oddly moving — proof that a simple song can connect people across distances.",
            tips: "Tie the music to a memory and a feeling. Explain why this specific song, not just music generally."
          },
          part3: [
            { q: "How does music affect people's emotions?", a: "Powerfully. It can calm anxiety, fuel energy or unlock grief, often bypassing reason. That's why it's used in therapy, film and even shopping — it shapes feeling directly." },
            { q: "Is traditional music still important?", a: "Yes, as cultural memory. It carries a community's stories and identity that pop trends can't replace. Keeping it alive, perhaps in new forms, matters for continuity." },
            { q: "Has technology changed how we experience music?", a: "Immensely. Streaming gives endless choice but also makes music background noise. We listen more, perhaps feel less — the ritual of an album is rare now." }
          ]
        }
      ]
    },
    {
      category: "Sports & Exercise",
      topics: [
        {
          title: "Sports",
          part1: [
            { q: "Do you play any sports?", a: "I play badminton weekly and swim when I can. I'm not competitive, but I love the mix of movement and chat — it doesn't feel like exercise." },
            { q: "What sport do you like to watch?", a: "Football, mostly. I'll watch big tournaments with friends; the shared tension and joy of a goal is half the fun, even if I don't follow a club closely." },
            { q: "Did you play sports as a child?", a: "Endlessly — football in the street, cycling, whatever was happening. Sport was just how we played, not a scheduled activity with gear and fees." },
            { q: "Why do people like sport?", a: "It's fun, social and a healthy outlet for energy and stress. For fans, it offers belonging and drama without real stakes — a safe place to care intensely." }
          ],
          part2: {
            cueCard: "Describe a sport you would like to learn.\nYou should say:\n- what the sport is\n- why you want to learn it\n- who you would learn it with\n- and explain how you think it would benefit you",
            modelAnswer: "A sport I've been meaning to learn is surfing, which has fascinated me since I watched it on a coastal holiday a few years ago. Standing on a board, reading the ocean and riding a wave looked both thrilling and peaceful.\n\nI want to learn it because I'm drawn to activities that demand full presence. Surfing leaves no room for a wandering mind — you're reading water, balancing, reacting — and that intensity is exactly the break I crave from screens and planning. There's also a meditative quality surfers describe, being at the mercy of nature, that appeals to me.\n\nI'd learn it with a friend who already surfs, or through a beginner camp where strangers become companions fast. Having someone to laugh with over failed attempts makes the steep learning curve less discouraging.\n\nI think it would benefit me on several levels. Physically, it's a full-body workout disguised as play. Mentally, the patience it teaches — waiting for the right wave, accepting wipeouts — builds resilience I could use elsewhere. And simply being in the sea, disconnected, would restore me. Even if I never get good, the attempt alone would broaden how I spend my leisure and maybe my character.",
            tips: "Explain the deeper appeal (presence, resilience) beyond fun. Show realistic expectations about the learning process."
          },
          part3: [
            { q: "Should sport be compulsory in schools?", a: "Largely yes — it builds health, teamwork and confidence. The key is variety and fun, so unathletic kids aren't humiliated; compulsion without care backfires." },
            { q: "Why are some sports more popular than others?", a: "Access and culture. Football spread because it needs little gear and fits any space; niche sports need facilities or money, limiting their reach." },
            { q: "Do you think extreme sports are too dangerous?", a: "They carry real risk, yes, but informed participants manage it with training and gear. The danger is part of the appeal — a controlled test of limits. Banning them is overreach." }
          ]
        },
        {
          title: "Outdoor Activities",
          part1: [
            { q: "Do you spend much time outdoors?", a: "I try to, at weekends at least. A walk in the park resets me, though during busy weeks I confess I stay indoors more than I should." },
            { q: "What outdoor activities do you enjoy?", a: "Hiking and picnics top the list. I also like cycling along the river — nothing intense, just enough to feel the air and move." },
            { q: "Did you play outside as a child?", a: "All the time. We'd build forts and explore, unsupervised and happy. I worry kids today miss that freedom, glued instead to tablets indoors." },
            { q: "Do you prefer the mountains or the beach?", a: "Mountains for hiking and quiet, beach for relaxing. If I need to think, mountains; if I need to switch off, the beach wins." }
          ],
          part2: {
            cueCard: "Describe an outdoor activity you enjoyed doing.\nYou should say:\n- what the activity was\n- where you did it\n- who you were with\n- and explain why you enjoyed it",
            modelAnswer: "I'd like to describe a hiking trip I took last autumn with three friends in a national park a few hours from my city. It was a two-day trek along a ridge with sweeping valley views, and it turned out to be one of my favourite outdoor experiences.\n\nWe set off early on a Saturday, carrying backpacks with food and tents. The first day was a steady climb through forests turning gold, then above the tree line where the wind picked up and the views opened completely. We camped by a small lake, cooked a simple dinner on a stove, and watched stars I never see at home.\n\nI went with close friends, which made all the difference. We laughed at our sore legs, shared the load, and sat in comfortable silence by the fire. There was no signal, so the usual buzz of messages simply vanished.\n\nI enjoyed it because it was a full reset. The physical effort, the clean air and the absence of screens left me clearer-headed than I'd felt in months. Reaching the summit at sunrise the next morning, with the world below still in shadow, felt like a small triumph we'd earned together. Activities like that remind me how little I need to feel content — good company, open sky, and a bit of effort.",
            tips: "Describe the setting and the shared experience. Emphasise the mental reset, not just the physical activity."
          },
          part3: [
            { q: "Why is outdoor recreation good for wellbeing?", a: "Nature lowers stress and lifts mood measurably; movement adds the physical gain. Combined, they counter the sedentary, screen-heavy lives many now lead." },
            { q: "Are cities providing enough green space?", a: "Unevenly. Some invest well in parks, others prioritise building over green. Access to nature shouldn't depend on postcode, yet often it does." },
            { q: "Do you think children spend less time outdoors now?", a: "Sadly, yes — screens, safety fears and packed schedules keep them in. That loss of free outdoor play may affect creativity and confidence more than we realise." }
          ]
        }
      ]
    }
  ];
  global.SPEAKING_BANK = SPEAKING_BANK;
})();
