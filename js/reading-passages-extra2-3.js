// 剑17-19 阅读文章原文 Test 2
// 放在 data-extra2-3.js 之后加载；key 为 bookId-testId-passageIndex
// 有"段落标题匹配"题的文章用 Paragraph A / B / C 标记
(function () {
  var passages = {

    // ========== 剑17 Test 2 ==========
    '17-2-0': `The History of Cartography

Cartography, the art and science of mapmaking, is among the oldest intellectual pursuits of humanity, predating written language in many cultures. Long before satellites and GPS, people drew representations of the world around them, and those early images reveal as much about imagination as about geography.

The oldest surviving map is a clay tablet from Babylonia, dating from around 600 BCE, though earlier examples almost certainly existed. This small tablet depicts the world as a flat disc surrounded by water, with the city of Babylon at its centre. The Babylonians, and their neighbours in Mesopotamia, produced such maps not for navigation alone but to record land ownership, mythological geography, and celestial observations. It is therefore incorrect to credit the ancient Greeks with the invention of cartography; although Greek scholars such as Anaximander and Ptolemy advanced the mathematical theory of maps, they built upon far older Mesopotamian and Egyptian traditions.

Ptolemy's great work, the Geography, compiled in the second century CE, listed thousands of places with coordinates and proposed a system of projection that would influence mapmakers for centuries. Yet after the fall of the Roman Empire, his text was lost to Europe for many centuries, surviving mainly in the Islamic world, where scholars such as al-Idrisi refined it. Only during the Renaissance was Ptolemy's Geography rediscovered in Europe, printed, and used as the basis for new maps, which is why his influence is often dated much later than his own lifetime.

The invention of the printing press transformed cartography more than any single technology before it. Manuscript maps were rare, expensive, and prone to error; once maps could be printed, they became cheaper, more accurate through standardisation, and available to the public rather than to a tiny elite of rulers and scholars. Treasured town plans, road maps, and world maps circulated widely, fuelling exploration, trade, and public curiosity about distant lands.

A pivotal figure was Gerardus Mercator, whose 1569 projection greatly improved sea navigation. By representing the globe on a flat surface in a way that preserved compass bearings, his map allowed sailors to plot a straight course, revolutionising maritime travel. Although the projection distorted the size of polar regions, its practical value was immense, and it remained the standard for nautical charts for four centuries.

The first modern atlas, a bound collection of uniform maps, was published in 1570 by Abraham Ortelius under the title Theatrum Orbis Terrarum. The atlas format made geographical knowledge systematic and portable, and it quickly spread across Europe. National mapping agencies soon followed, surveying their territories with growing precision.

In the modern era, cartography has been revolutionised once again by satellite technology and digital systems. Orbiting sensors and GPS now produce maps of extraordinary accuracy, updated in real time, and accessible on handheld devices. From a Babylonian clay tablet to a live digital display, the history of cartography is a story of humanity's enduring urge to picture its place in the world.`,

    '17-2-1': `The Benefits of Bilingualism

Paragraph A
A growing body of cognitive research suggests that speaking two languages reshapes the bilingual brain in measurable and lasting ways. From early childhood, bilingual individuals constantly manage two competing language systems, deciding which to use and which to suppress. This mental juggling strengthens what scientists call executive function, the set of control processes that govern attention, planning, and the ability to ignore distractions. In practical terms, studies have found that bilingual people are typically better at switching between tasks, because their brains are practised at shifting flexibly from one set of rules to another. They also tend to perform better on tests of working memory and problem solving. These cognitive advantages appear not because bilinguals are inherently more intelligent, but because the daily exercise of managing two languages trains the control systems of the mind, much as regular physical training strengthens muscles.

Paragraph B
Beyond everyday control, bilingualism appears to protect the ageing brain. Several longitudinal studies have followed monolingual and bilingual adults over many years and found that bilinguals develop the symptoms of dementia, on average, about four years later than those who speak only one language. The proposed mechanism is cognitive reserve: a kind of mental buffer built up by a lifetime of linguistic challenge, which allows the brain to cope better with age-related damage before functions decline. Notably, this protective effect has been observed even when education and lifestyle are taken into account, suggesting the benefit is tied specifically to bilingual experience. Brain imaging adds support, showing that bilinguals often have greater density in language areas and in regions linked to attention. Although bilingualism is no cure for dementia, the consistent finding of a delayed onset has made it a focus of research into healthy cognitive ageing.

Paragraph C
The advantages of bilingualism are not only internal but social and cultural. People who speak more than one language can communicate across communities, build relationships that would otherwise be impossible, and move more easily between cultures. Research indicates that bilingual children often show greater empathy and a more flexible understanding of others' perspectives, perhaps because switching languages also entails seeing the world from different cultural standpoints. For migrants and their descendants, bilingualism can preserve a link to heritage and identity while enabling full participation in a new society. Group language use, from family conversation to community festivals, strengthens social bonds and transmits values across generations. In short, the benefits of bilingualism span the cognitive, the neurological, and the social, making it one of the most rewarding forms of mental cultivation available to humans.`,

    '17-2-2': `The Economics of Happiness

For much of the twentieth century, policymakers treated economic growth as the primary measure of national success, assuming that rising income would automatically deliver rising wellbeing. Yet a growing field of research suggests the relationship between money and happiness is far more complicated than that simple equation implies, and that nations should look beyond gross domestic product.

The so-called Easterlin paradox, identified decades ago, observed that within a country richer people are generally happier than poorer people, but that at the national level, increases in average income do not always produce corresponding increases in average happiness. In other words, wealthier countries are not invariably happier than poorer ones, particularly once a certain level of development is reached. This challenges the assumption that endless economic expansion is the surest path to a satisfied population.

The explanation lies partly in adaptation. Human beings quickly become used to higher incomes and the goods they buy, a process psychologists call the hedonic treadmill. A pay rise brings a brief lift in mood, but before long the new standard of living feels normal, and the person returns to a similar level of contentment. Moreover, once basic needs, such as food, shelter, and security, are met, extra income has surprisingly little effect on happiness. Beyond that threshold, relative status, leisure time, and the quality of relationships matter far more than absolute wealth.

What does reliably raise wellbeing, according to cross-national studies, is not income alone but a cluster of social and health factors. Strong social support, low levels of inequality, trust in institutions, and good physical and mental health are consistently associated with higher life satisfaction. Countries that score well on these dimensions, such as the Nordic nations, often rank near the top of global happiness indexes even when their incomes are not the very highest. Access to healthcare, safe neighbourhoods, and opportunities for meaningful social connection thus weigh as heavily as money in the calculation of a good life.

In light of this evidence, some governments have begun to track wellbeing as well as GDP, publishing national happiness reports that guide spending toward mental health, community programmes, and environmental quality. Not every country has adopted such measures, and debates continue over how to define and compare happiness across cultures. Nevertheless, the central argument of the research is clear: money alone does not guarantee wellbeing, and a narrower focus on growth can obscure the conditions that actually make life worthwhile. A balanced policy, investing in both prosperity and the social foundations of happiness, offers a more realistic route to a flourishing society.`,

    // ========== 剑18 Test 2 ==========
    '18-2-0': `The History of Glass

Glass is so commonplace in modern life, from windows to smartphone screens, that it is easy to forget how ancient and remarkable its making truly is. Far from being a modern invention, glass has been shaped by human hands for more than five thousand years, and its story is one of accidental discovery followed by centuries of refinement.

The earliest glass objects date from about 3500 BCE and were produced not by the Romans, as many assume, but by craftspeople in Mesopotamia and Egypt. These first items were small beads and ornaments, likely the result of experiments with sand and natron exposed to high heat, rather than deliberate industrial production. The Roman Empire later became famous for its glass, perfecting techniques such as blown vessels and widespread window panes, but it inherited and expanded a craft that had already existed for millennia in the Near East. To credit Rome with the invention is therefore a historical error; Rome's real contribution was scale and sophistication.

A turning point came around 50 BCE with the development of glassblowing, a method thought to have emerged in the eastern Mediterranean. By blowing air through a tube into a blob of molten glass, workers could rapidly form thin, uniform vessels of varied shape. Glassblowing was faster and cheaper than earlier casting and moulding, and it democratised glass, turning it from a luxury of the few into a common household material across the empire. The technique spread quickly and remains, in essence, the basis of much glass production today.

For most of history, flat glass for windows was made by spinning or rolling, producing uneven, slightly distorted panes. The modern age of clear, flat glass began in the mid-twentieth century with the float glass process, developed by the Pilkington company in the 1950s. By floating molten glass on a bed of liquid tin, manufacturers achieved perfectly flat, smooth sheets at low cost, making large windows, mirrors, and later electronic displays practical for the mass market.

Environmental considerations have become central to glass today. Because glass is made largely from sand, soda ash, and limestone, its raw materials are abundant, but the melting process is energy intensive. The good news is that recycling glass reduces the energy needed for production substantially, since cullet, or crushed recycled glass, melts at a lower temperature than raw materials. In some countries, around 70% of glass is recycled, a rate that cuts both emissions and landfill waste, though collection systems vary widely.

From ancient Mesopotamian beads to Pilkington's float lines and today's recycling bins, the history of glass shows how a chance discovery became a cornerstone of civilisation. Its future will depend as much on sustainability as on new forms, as makers seek to keep this transparent wonder both useful and kind to the planet.`,

    '18-2-1': `The Psychology of Music

Paragraph A
Music is unique among human activities in its power to engage the brain so broadly and so rapidly. When a person listens to a piece they enjoy, scanners show that multiple brain regions light up at once, including those responsible for hearing, movement, emotion, and memory. Sound is first processed in the auditory cortex, but within moments the brain links the melody to past experience, which is why a single song can summon a vivid childhood memory or a long-forgotten place. Dopamine, the chemical associated with reward, is released not only at the emotional peak of a piece but in the seconds before, as the listener anticipates the resolution of a phrase. This anticipatory pleasure helps explain why music can be so absorbing. Researchers have also found that learning a musical instrument can improve memory and attention, because reading, coordinating movement, and listening simultaneously exercises several cognitive systems at once. In short, music is not a single mental event but a full-brain exercise that blends perception, prediction, and feeling.

Paragraph B
Beyond cognition, music exerts a powerful effect on emotional wellbeing. Almost everyone has used music to change or manage a mood, whether to energise a workout or soothe anxiety before sleep. Studies show that slow, gentle music can lower heart rate and cortisol, the body's stress hormone, while favourite songs reliably lift mood by triggering the brain's reward circuits. Music therapy is now used in hospitals and clinics to reduce pain perception, ease depression, and support recovery after stroke, where rhythmic cueing can help patients relearn movement. Importantly, the emotional benefit does not require formal training; even passive listening gives most people a reliable tool for regulating feeling. The link between sound and emotion is so direct that music often reaches people in distress when words fail, making it a quiet but effective ally for mental health.

Paragraph C
Music also binds people together, and its role in social bonding is among its oldest functions. From lullabies and national anthems to concert crowds and religious rites, shared musical experience creates a sense of unity that few other activities match. Group singing is especially potent: research shows that singing together raises levels of oxytocin, a hormone linked to trust and social connection, and participants report feeling closer to one another afterward. This may be why music sits at the heart of rituals, protests, and celebrations across every culture. Even simple communal listening, at a festival or around a fire, synchronises attention and feeling among strangers, building fleeting but real community. In these ways music is both a private comfort and a social glue, joining isolated minds into a shared emotional world.`,

    '18-2-2': `The Challenge of Megacities

A megacity is commonly defined as a metropolitan area with more than ten million inhabitants, and such cities are multiplying faster than at any point in history. By mid-century, many experts expect dozens of them, mostly in Asia and Africa, to house a substantial share of humanity. Yet their sheer scale brings problems as formidable as their economic promise, and managing them well is one of the century's great tests.

It would be a mistake to think megacities solve the problems of rural poverty. In practice, they often concentrate disadvantage. Millions arrive from the countryside chasing work, but many end up in informal settlements without secure housing, clean water, or legal tenure. Rather than erasing rural hardship, megacities can relocate it to overcrowded peripheries where services are thin. The promise of opportunity coexists with the risk of exclusion, and the gap between wealthy districts and sprawling slums can be stark.

The most immediate difficulty for most megacities is providing basic services. Supplying water, sanitation, electricity, waste collection, and healthcare to ten million or more people demands infrastructure on a scale that outpaces available funds. When planning lags, traffic chokes the streets, air quality falls, and floods overwhelm drains. These failures fall hardest on the poor, who can least afford private alternatives such as generators, bottled water, or private transport.

Resource use compounds the strain. Megacities consume a large share of global energy and produce a disproportionate slice of emissions, despite covering only a small fraction of the planet's surface. Their footprint extends far beyond their borders, drawing food, water, and materials from whole regions. Addressing this requires not only cleaner technology but a different logic of urban design, one that shortens distances and shrinks waste.

On the question of design, many specialists argue that planning should prioritise public transport. Dense cities move most efficiently when people rely on trains, buses, and metros rather than private cars, which clog roads and worsen pollution. Cities that invested early in mass transit, such as Tokyo or Singapore, cope far better than those built around the automobile. Paired with cycling lanes and walkable neighbourhoods, public transport can cut both congestion and carbon.

Sustainable megacities, however, need more than clever engineering. They need investment and good governance: honest institutions, fair taxation, and the capacity to enforce building and environmental standards. Without competent administration, even the best plans stall, and inequality hardens. The lesson of successful megacities is that scale is manageable only when technology, finance, and accountable government advance together.`,

    // ========== 剑19 Test 2 ==========
    '19-2-0': `The History of Coffee

Few beverages have travelled so far, or changed the world so much, as coffee. Today it is among the most consumed drinks on the planet, yet its beginnings lie not in the great cafes of Europe but in the highlands of Ethiopia, where the plant first grew wild.

According to popular legend, an Ethiopian goatherd named Kaldi noticed his goats becoming unusually lively after eating the bright red cherries of a certain shrub. Whether or not the story is true, botanical and historical evidence agrees that coffee plants originally grew in Ethiopia, and that the stimulating properties of the bean were known there long before the drink spread abroad. It was from Ethiopia that coffee travelled across the Red Sea to the Arabian Peninsula, where, by the fifteenth century, it was cultivated and brewed as a daily drink. To claim that coffee was first discovered in Arabia is therefore incorrect; Arabia was the cradle of coffee culture, not its birthplace.

From Arabia, coffee moved steadily westward. By the seventeenth century, coffee houses had become vibrant centres of conversation, commerce, and news in the Ottoman Empire, and the habit soon spread to Europe. The first European coffee house opened in Venice in 1645, and similar establishments quickly appeared in London, Oxford, Paris, and beyond. These coffee houses, often called schools of the wise, helped fuel the exchange of ideas that accompanied the scientific and commercial revolutions of the 1600s.

As demand grew, European powers sought to break Arab control of supply by smuggling coffee plants to their colonies in the tropics. The Dutch, then the French and the Portuguese, established plantations in Java, the Caribbean, and South America. It was in Brazil, with its vast land and suitable climate, that coffee found its largest home. Today Brazil is the top coffee producer, supplying roughly a third of the world's beans and shaping both global prices and tastes.

The drink itself kept changing. For centuries coffee was a bitter infusion, but in the nineteenth century inventors learned to remove caffeine, creating a milder option for those sensitive to its effects. The decaffeination process was invented in 1905, and although purists sometimes scorn it, decaf opened coffee to a wider public. Later innovations, from espresso machines to instant and capsule formats, turned coffee into a global industry worth hundreds of billions.

From an Ethiopian hillside to a Venetian coffee house and a Brazilian plantation, the history of coffee is a reminder of how a local plant can, through trade and taste, weave itself into the daily ritual of the world.`,

    '19-2-1': `The Science of Memory

Paragraph A
Memory is the faculty by which the brain encodes, stores, and later retrieves information, and understanding how it is formed is the first step to using it well. When we perceive something new, the brain encodes it by strengthening connections between neurons, a process supported by attention and emotion. Much of what we meet is held only briefly in short-term memory, a fragile store that can typically hold about seven items at once before they fade or are displaced. To be kept, information must be transferred into long-term memory, where it can survive for years. This transfer is aided by meaning: facts learned in context, or linked to what we already know, are far more likely to stick than isolated bits. In this sense, memory is not a passive recording but an active construction, shaped by what we notice and how we organise experience.

Paragraph B
Despite its power, memory is unreliable, and several factors cause forgetting. One is simply decay: if a memory is never reused, the neural trace weakens with time, like a path left untrodden. A second is interference, where similar or conflicting information blurs what came before, so that new phone numbers overwrite old ones. A third is the absence of retrieval cues; we often possess knowledge we cannot summon because nothing in the present moment triggers it. Strong emotion can either help, by marking an event as important, or hinder, by overwhelming the encoding process during trauma or stress. Forgetting is not always a flaw; it allows the mind to discard the irrelevant and focus on what matters, but it also explains why cramming the night before an exam rarely produces lasting learning.

Paragraph C
The good news is that memory can be improved with deliberate technique. Repeating information at spaced intervals, rather than in one long session, helps move it into long-term memory by forcing the brain to retrieve and reconsolidate it. Elaboration, or explaining an idea in your own words, builds richer connections that make recall easier. Mnemonic devices, such as linking items to vivid images, exploit the brain's strength in visual and spatial memory. Above all, sleep consolidates learning: during deep and REM stages the brain replays and stabilises the day's material, which is why a good night's rest after study beats another hour of tired revision. Combined, these methods, repetition, elaboration, imagery, and rest, turn memory from a matter of chance into a skill that can be trained.`,

    '19-2-2': `The Future of Money

Money, in one form or another, has served human society for millennia, but rarely has its future seemed as uncertain as it does today. Coins and banknotes, the physical tokens of exchange for centuries, now share the world with cards, phones, and entirely digital currencies, raising questions about what money will become and who will control it.

There is no doubt that digital payments are growing rapidly worldwide. In many cities, tapping a phone pays for a bus ride, a coffee, or a rent transfer in seconds, and even small traders now accept electronic payment. The main advantage of digital money is speed and convenience: transactions that once required a trip to a bank or the counting of cash now happen instantly across great distances, lowering the cost of commerce and drawing more people into the formal economy. For businesses and governments alike, digital records also reduce theft, simplify taxation, and make economic activity easier to track.

Yet reports of the death of cash are premature. Cash will not completely disappear within ten years, or likely even decades, because it remains valued for privacy, for use by those without bank accounts, and as a backup when networks fail. In emergencies or for the unbanked, physical money is still essential, and many societies are reluctant to abandon it entirely. The future is therefore more likely to be a mix, in which digital dominates but cash persists.

A more profound shift is the rise of central bank digital currencies, or CBDCs, electronic versions of national money issued directly by states. Several countries have launched or piloted them, arguing they can make payments cheaper and more inclusive. However, not every country has done so, and the pace varies widely; some governments are cautious about the technical and political risks. Private cryptocurrencies, meanwhile, have attracted both enthusiasm and scepticism, swinging in value and prompting regulators to act.

The writer warns that digital money raises privacy concerns. Every electronic payment leaves a trace, and concentrated data about individuals' spending can be misused by companies or states. Without strong safeguards, a cashless system could erode personal freedom as well as convenience. There is also the risk of exclusion if access depends on expensive devices or stable internet that not everyone has.

A safe system needs security and regulation. Encryption must protect users, rules must limit surveillance, and competition must prevent any single provider from dominating. If these conditions are met, the future of money could be both more efficient and more inclusive than the past. If they are not, the new architecture of finance may concentrate power as never before, making the design of digital money one of the quiet but crucial decisions of our time.`
  };

  IELTS_DATA.books.forEach(function (book) {
    book.tests.forEach(function (test) {
      test.reading.passages.forEach(function (p, pi) {
        var key = book.id + '-' + test.id + '-' + pi;
        if (passages[key]) {
          p.text = passages[key];
        }
      });
    });
  });
})();
