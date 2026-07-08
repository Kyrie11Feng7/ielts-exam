/*
 * 剑11 写作剑桥练习题目覆盖补丁
 * 来源: mdhira-ai/advancedenglishtests-updated (data/cambridgeWritingTasks.ts)
 * 说明: 写作题目(prompt)为剑桥雅思原题；modelAnswer 为官方/权威范文（若源提供）。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;
  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 11) book = b; });
  if (!book) return;
  function ensureTest(id) {
    var t = null;
    book.tests.forEach(function (x) { if (x.id === id) t = x; });
    if (!t) {
      t = { id: id, title: 'Test ' + id, listening: { title: '听力 Listening', intro: '共4部分，40题，约30分钟', sections: [] }, reading: { passages: [] }, writing: { tasks: [] }, speaking: { parts: [] } };
      book.tests.push(t);
    }
    return t;
  }
  (function () {
    var t = ensureTest(1);
    t.writing.tasks = [
      {
        task: "Task 1 (小作文)",
        type: "pie charts",
        prompt: "The charts below show the percentage of water used for different purposes in six areas of the world. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        modelAnswer: "",
        tips: ''
      },
      {
        task: "Task 2 (大作文)",
        type: "opinion",
        prompt: "Governments should spend money on railways rather than roads. To what extent do you agree or disagree with this statement?",
        modelAnswer: "",
        tips: ''
      }
    ];
  })();
  (function () {
    var t = ensureTest(2);
    t.writing.tasks = [
      {
        task: "Task 1 (小作文)",
        type: "line graph",
        prompt: "The graph below shows average carbon dioxide (CO2) emissions per person in the United Kingdom, Sweden, Italy and Portugal between 1967 and 2007. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        modelAnswer: "",
        tips: ''
      },
      {
        task: "Task 2 (大作文)",
        type: "opinion",
        prompt: "Some people claim that not enough of the waste from homes is recycled. They say that the only way to increase recycling is for governments to make it a legal requirement. To what extent do you think laws are needed to make people recycle more of their waste?",
        modelAnswer: "",
        tips: ''
      }
    ];
  })();
  (function () {
    var t = ensureTest(3);
    t.writing.tasks = [
      {
        task: "Task 1 (小作文)",
        type: "bar chart",
        prompt: "The chart below shows the number of men and women in further education in Britain in three periods and whether they were studying full-time or part-time. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        modelAnswer: "",
        tips: ''
      },
      {
        task: "Task 2 (大作文)",
        type: "discussion",
        prompt: "Some people say that the only reason for learning a foreign language is in order to travel to or work in a foreign country. Others say that these are not the only reasons why someone should learn a foreign language. Discuss both these views and give your own opinion.",
        modelAnswer: "",
        tips: ''
      }
    ];
  })();
  (function () {
    var t = ensureTest(4);
    t.writing.tasks = [
      {
        task: "Task 1 (小作文)",
        type: "table",
        prompt: "The table below gives information about consumer spending on different items in five different countries in 2002. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        modelAnswer: "",
        tips: ''
      },
      {
        task: "Task 2 (大作文)",
        type: "discussion",
        prompt: "Many governments think that economic progress is their most important goal. Some people, however, think that other types of progress are equally important for a country. Discuss both these views and give your own opinion.",
        modelAnswer: "",
        tips: ''
      }
    ];
  })();
  console.log('[real-writing-11] 已覆盖为写作练习题目（待与原版书核对）');
})();
