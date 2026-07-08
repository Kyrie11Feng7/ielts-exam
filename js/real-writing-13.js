/*
 * 剑13 写作剑桥练习题目覆盖补丁
 * 来源: mdhira-ai/advancedenglishtests-updated (data/cambridgeWritingTasks.ts)
 * 说明: 写作题目(prompt)为剑桥雅思原题；modelAnswer 为官方/权威范文（若源提供）。
 */
(function () {
  if (typeof IELTS_DATA === 'undefined') return;
  var book = null;
  IELTS_DATA.books.forEach(function (b) { if (b.id === 13) book = b; });
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
        type: "bar chart",
        prompt: "The chart below shows how frequently people in the USA ate in fast food restaurants between 2003 and 2013. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        modelAnswer: "",
        tips: ''
      },
      {
        task: "Task 2 (大作文)",
        type: "opinion",
        prompt: "Living in a country where you have to speak a foreign language can cause serious social problems, as well as practical problems. To what extent do you agree or disagree with this statement?",
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
        type: "table",
        prompt: "The table below gives information about the underground railway systems in six cities. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        modelAnswer: "",
        tips: ''
      },
      {
        task: "Task 2 (大作文)",
        type: "opinion",
        prompt: "Some people believe that nowadays we have too many choices. To what extent do you agree or disagree with this statement?",
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
        type: "chart and table",
        prompt: "The chart below shows what Anthropology graduates from one university did after finishing their undergraduate degree course. The table shows the salaries of the anthropologists in work after five years. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        modelAnswer: "",
        tips: ''
      },
      {
        task: "Task 2 (大作文)",
        type: "discussion",
        prompt: "Some people say History is one of the most important school subjects. Other people think that, in today's world, subjects like Science and Technology are more important than History. Discuss both these views and give your own opinion.",
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
        type: "maps/plans",
        prompt: "The plans below show the layout of a university's sports centre now, and how it will look after redevelopment. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        modelAnswer: "",
        tips: ''
      },
      {
        task: "Task 2 (大作文)",
        type: "problem-solution",
        prompt: "In spite of the advances made in agriculture, many people around the world still go hungry. Why is this the case? What can be done to address this problem?",
        modelAnswer: "",
        tips: ''
      }
    ];
  })();
  console.log('[real-writing-13] 已覆盖为写作练习题目（待与原版书核对）');
})();
