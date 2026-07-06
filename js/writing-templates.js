// IELTS Writing structure / template library
// Each task1 chart type and task2 essay type provides a reusable structure,
// formula sentences, useful phrases, target vocabulary, and common mistakes.
// Loaded via <script src="js/writing-templates.js"></script> after app.js if desired.

// Make `global` resolve in both Node (for verification) and the browser.
var global = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

(function () {
  var WRITING_TEMPLATES = {
    task1: [
      {
        type: 'Line Graph',
        when: 'Used when the chart shows changes in one or more variables over a period of time (years, months, decades).',
        structure: [
          'Introduction: paraphrase the prompt (the graph/chart, what it shows, time period)',
          'Overview: 2 key features — overall trend and the highest/lowest point',
          'Body 1: describe the most significant line(s) or the first half of the period',
          'Body 2: describe the remaining line(s) or the second half, noting crossovers'
        ],
        introFormula: 'The line graph illustrates [what is measured] between [time1] and [time2].',
        overviewTips: 'Group the lines by overall direction. Mention which line started/ended highest and any clear turning points. Do NOT give numbers in the overview — keep it general.',
        phrases: [
          'saw a steady increase',
          'peaked at [number] in [year]',
          'remained stable at around [number]',
          'experienced a sharp decline',
          'fluctuated between [a] and [b]',
          'overtook [x] in [year]'
        ],
        vocab: ['fluctuate', 'soar', 'plummet', 'plateau', 'triple', 'gradually']
      },
      {
        type: 'Bar Chart',
        when: 'Used when the data is divided into categories and compared by the height/length of bars (can show time or static comparison).',
        structure: [
          'Introduction: paraphrase the prompt (the categories and what is measured)',
          'Overview: highest and lowest categories, and one overall pattern',
          'Body 1: describe the top group(s) of bars with figures',
          'Body 2: describe the remaining/middle/bottom group(s), noting similarities'
        ],
        introFormula: 'The bar chart compares [category] across [group/period] in terms of [measurement].',
        overviewTips: 'Pick the biggest and smallest categories for the overview. If many bars, group them (e.g. "three European countries...") rather than listing every single one.',
        phrases: [
          'ranked first with',
          'was the least popular, at only',
          'accounted for roughly [number]',
          'was comparable to',
          'by a considerable margin',
          'followed a similar pattern'
        ],
        vocab: ['proportion', 'substantially', 'margin', 'dominant', 'negligible', 'respectively']
      },
      {
        type: 'Pie Chart',
        when: 'Used when the data shows how a whole is divided into percentages or shares (proportions of a total).',
        structure: [
          'Introduction: paraphrase the prompt (what the pies represent and the year(s))',
          'Overview: the largest and smallest slices, and the main split',
          'Body 1: describe the major categories (largest 2–3 slices)',
          'Body 2: describe the minor categories and any comparison between two pies'
        ],
        introFormula: 'The pie charts show the percentage distribution of [category] in [year1] and [year2].',
        overviewTips: 'Focus on proportions, not absolute numbers (unless given). State which slice dominated and which was smallest. If two pies, mention the biggest change.',
        phrases: [
          'made up the largest share at',
          'accounted for just [number] per cent',
          'the remainder was split between',
          'a mere [number] per cent',
          'constituted roughly half of',
          'the proportion of [x] more than doubled'
        ],
        vocab: ['share', 'comprise', 'majority', 'minority', 'percentage', 'proportion']
      },
      {
        type: 'Table',
        when: 'Used when figures are presented in rows and columns without a visual chart (figures for several groups over time or categories).',
        structure: [
          'Introduction: paraphrase the prompt (what the table shows and its units)',
          'Overview: the highest/lowest row or column and one clear trend',
          'Body 1: describe the top-performing or first set of figures',
          'Body 2: describe the remaining figures and any notable exceptions'
        ],
        introFormula: 'The table provides data on [what is measured] for [groups] during [period].',
        overviewTips: 'Tables are information-dense — do NOT describe every cell. Select the most important rows/columns and group similar values. A clear overview is essential for band 7+.',
        phrases: [
          'recorded the highest figure, at',
          'the lowest value was [number]',
          'in contrast to the others',
          'figures ranged from [a] to [b]',
          'was closely followed by',
          'showed little variation'
        ],
        vocab: ['figure', 'category', 'respectively', 'whereas', 'notable', 'respectively']
      },
      {
        type: 'Multiple Charts (combined)',
        when: 'Used when the task gives two different visuals (e.g. a pie + a line, or a table + a bar) that must be described together.',
        structure: [
          'Introduction: state both charts and what each shows',
          'Overview: the key feature of chart 1 and the key feature of chart 2',
          'Body 1: describe the first chart in detail',
          'Body 2: describe the second chart, linking it to the first where possible'
        ],
        introFormula: 'The charts consist of a [chart A] and a [chart B], showing [topic] from [perspective A] and [perspective B].',
        overviewTips: 'Treat each chart separately in the body but connect them in the overview (e.g. "while X was the most common, Y grew fastest"). Avoid repeating the same data twice.',
        phrases: [
          'while the first chart highlights',
          'the second chart reveals that',
          'corresponds to the trend shown in',
          'in line with the data above',
          'by comparison',
          'overall, the two charts suggest'
        ],
        vocab: ['correlate', 'contrast', 'illustrate', 'reflect', 'indicate', 'consequently']
      },
      {
        type: 'Map',
        when: 'Used when the task shows changes to a town, island, school, or building between two dates, or a current layout.',
        structure: [
          'Introduction: paraphrase (two maps of [place] in [year1] and [year2])',
          'Overview: the most dramatic change and the overall scale of development',
          'Body 1: describe changes to one zone (e.g. the north / residential area)',
          'Body 2: describe changes to the remaining zone (e.g. the south / facilities)'
        ],
        introFormula: 'The maps illustrate the development of [place] between [year1] and [year2].',
        overviewTips: 'Use compass directions (north/south/east/west) and fixed reference points. Mention what was added, removed, and replaced. State whether the site became bigger or more modern.',
        phrases: [
          'was replaced by',
          'a new [building/road] was constructed',
          'converted into',
          'to the north of the site',
          'was demolished to make way for',
          'expanded considerably'
        ],
        vocab: ['relocate', 'transform', 'demolish', 'renovate', 'enlarge', 'previously']
      },
      {
        type: 'Process / Diagram',
        when: 'Used when the task shows how something is made, a natural cycle, or a sequence of stages (no numbers, just steps).',
        structure: [
          'Introduction: paraphrase (the diagram shows how [product] is made / the cycle of [x])',
          'Overview: number of stages and where it starts/ends (or that it is cyclical)',
          'Body 1: describe the first half of the stages in order',
          'Body 2: describe the second half of the stages, ending at the product/restart'
        ],
        introFormula: 'The diagram outlines the process by which [product] is manufactured / the life cycle of [x].',
        overviewTips: 'Use passive voice for man-made processes ("is heated", "are mixed"). For natural cycles, say it is "continuous / cyclical". Follow the arrows in order — do not skip steps.',
        phrases: [
          'is heated to a temperature of',
          'once [step] is completed',
          'the mixture is then poured into',
          'following this,',
          'at this stage,',
          'the cycle begins again'
        ],
        vocab: ['stage', 'process', 'manufacture', 'cycle', 'raw material', 'output']
      }
    ],
    task2: [
      {
        type: 'Opinion (To what extent do you agree?)',
        when: 'Used when the question asks for YOUR view, e.g. "To what extent do you agree or disagree?" or "Do you agree?"',
        structure: [
          'Introduction: restate the question in your own words + clear thesis (your position)',
          'Body 1: strongest reason supporting your view + explanation + example',
          'Body 2: second reason (or concession of the opposite view) + example',
          'Conclusion: summarise your position without new points'
        ],
        introFormula: 'It is argued that [paraphrase topic]. While I agree / disagree to some extent, I believe that [thesis].',
        bodyFormula: 'Firstly, [reason]. For example, [specific example], which shows that [link back to view].',
        conclusionFormula: 'In conclusion, although [counterpoint], I maintain that [restate thesis].',
        linkers: ['Furthermore', 'However', 'On the other hand', 'Therefore', 'In contrast', 'Nevertheless'],
        mistakes: [
          'Sitting on the fence without a clear position',
          'Using memorised phrases that do not fit the argument',
          'Not supporting reasons with concrete examples'
        ]
      },
      {
        type: 'Discussion (Discuss both views)',
        when: 'Used when the question says "Discuss both views and give your own opinion."',
        structure: [
          'Introduction: paraphrase the two views + state you will discuss both',
          'Body 1: explain view A and why some people support it + example',
          'Body 2: explain view B and why others support it + example',
          'Conclusion: state which view you find more convincing'
        ],
        introFormula: 'Some people believe that [view A], whereas others argue that [view B]. This essay will examine both perspectives.',
        bodyFormula: 'Those who support [view A] claim that [reason]. A clear example is [example].',
        conclusionFormula: 'In conclusion, while both arguments have merit, I am more convinced by [view A / B] because [reason].',
        linkers: ['On the one hand', 'On the other hand', 'Supporters of this view', 'In contrast', 'That said', 'Overall'],
        mistakes: [
          'Forgetting to give your OWN opinion in the conclusion',
          'Describing only one view and ignoring the other',
          'Mixing the two views within a single paragraph'
        ]
      },
      {
        type: 'Advantage / Disadvantage',
        when: 'Used when the question asks whether the advantages outweigh the disadvantages, or to discuss both.',
        structure: [
          'Introduction: paraphrase the topic + outline that you will weigh both sides',
          'Body 1: main advantage(s) with explanation + example',
          'Body 2: main disadvantage(s) with explanation + example',
          'Conclusion: state whether the benefits or drawbacks are greater'
        ],
        introFormula: 'The widespread use of [topic] has generated both benefits and drawbacks, which will be considered below.',
        bodyFormula: 'One major advantage is that [advantage]. For instance, [example], meaning that [impact].',
        conclusionFormula: 'In conclusion, the advantages/ disadvantages predominate because [reasoning].',
        linkers: ['One benefit is', 'A further drawback', 'In spite of this', 'As a result', 'Nevertheless', 'On balance'],
        mistakes: [
          'Listing only advantages or only disadvantages',
          'Not stating a clear verdict in the conclusion',
          'Giving opinions without explaining the consequence'
        ]
      },
      {
        type: 'Problem / Solution',
        when: 'Used when the question identifies a problem and asks you to suggest causes and/or solutions.',
        structure: [
          'Introduction: paraphrase the problem and its relevance',
          'Body 1: explain the causes of the problem + example',
          'Body 2: propose solutions and explain how they would work',
          'Conclusion: summarise the problem and the most effective measure'
        ],
        introFormula: 'In recent years, [problem] has become a pressing issue, largely because of [cause].',
        bodyFormula: 'The root cause is [cause]; for example, [example]. A workable solution would be to [solution].',
        conclusionFormula: 'In conclusion, tackling [problem] requires [solution], without which the issue will persist.',
        linkers: ['A primary cause is', 'Consequently', 'To address this', 'One possible remedy', 'In the long term', 'Therefore'],
        mistakes: [
          'Describing the problem but offering no solutions',
          'Suggesting unrealistic or vague measures',
          'Confusing causes with effects'
        ]
      },
      {
        type: 'Two-part Question',
        when: 'Used when the question asks two distinct things, e.g. "Why is this happening? Is this a positive or negative development?"',
        structure: [
          'Introduction: paraphrase the phenomenon and note the two parts',
          'Body 1: answer the first question (causes / reasons) with example',
          'Body 2: answer the second question (effects / positive or negative) with example',
          'Conclusion: brief summary answering both parts'
        ],
        introFormula: 'The trend of [phenomenon] raises two questions: why it occurs, and whether it is beneficial.',
        bodyFormula: 'This happens mainly because [reason]; a good illustration is [example]. Regarding its impact, it is largely [positive/negative] since [reason].',
        conclusionFormula: 'In conclusion, [phenomenon] is driven by [cause] and should be seen as [positive/negative] overall.',
        linkers: ['The main reason is', 'This leads to', 'In terms of its impact', 'Moreover', 'From this perspective', 'Ultimately'],
        mistakes: [
          'Answering only one of the two questions',
          'Writing a generic essay unrelated to the specific prompts',
          'Not clearly labelling which part is being addressed'
        ]
      }
    ]
  };
  global.WRITING_TEMPLATES = WRITING_TEMPLATES;
})();
