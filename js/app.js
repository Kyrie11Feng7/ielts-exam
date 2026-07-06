/**
 * 雅思真题网站交互逻辑
 * 练习模式 + 考试模式
 * 练习模式：查看题目与答案，支持TTS听力朗读
 * 考试模式：模拟真实雅思考试，含计时器、答题输入、自动评分
 */

(function () {
  'use strict';

  const app = document.getElementById('app');

  // ========== 全局状态 ==========
  let currentMode = 'practice'; // 'practice' | 'exam'
  let currentView = { bookId: null, testId: null };
  let examState = null;
  let examTimerInterval = null;

  // ========== TTS 播放器管理 ==========
  const TTS = {
    synth: window.speechSynthesis,
    currentUtterance: null,
    currentButton: null,
    isPaused: false,
    rate: 0.9,
    voice: null,

    init: function () {
      if (!this.synth) return;
      const setVoice = () => {
        const voices = this.synth.getVoices();
        this.voice = voices.find(v => v.lang === 'en-GB') ||
                     voices.find(v => v.lang === 'en-US') ||
                     voices.find(v => v.lang.startsWith('en')) ||
                     voices[0];
      };
      setVoice();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = setVoice;
      }
    },

    isSupported: function () {
      return !!this.synth && typeof SpeechSynthesisUtterance !== 'undefined';
    },

    play: function (text, buttonEl) {
      if (!this.isSupported()) return;
      this.stop();
      this.currentButton = buttonEl;
      this.isPaused = false;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = this.rate;
      utterance.pitch = 1;
      utterance.volume = 1;
      if (this.voice) utterance.voice = this.voice;
      utterance.onstart = () => { this.updateUI('playing'); };
      utterance.onend = () => { this.updateUI('idle'); this.currentUtterance = null; this.currentButton = null; };
      utterance.onerror = () => { this.updateUI('idle'); this.currentUtterance = null; this.currentButton = null; };
      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    },

    pause: function () {
      if (!this.synth || !this.currentUtterance) return;
      if (this.isPaused) { this.synth.resume(); this.isPaused = false; this.updateUI('playing'); }
      else { this.synth.pause(); this.isPaused = true; this.updateUI('paused'); }
    },

    stop: function () {
      if (!this.synth) return;
      this.synth.cancel();
      this.isPaused = false;
      if (this.currentButton) { this.updateUI('idle'); }
      this.currentUtterance = null;
      this.currentButton = null;
    },

    setRate: function (rate) {
      this.rate = rate;
      if (this.currentUtterance && this.currentButton) {
        const text = this.currentUtterance.text;
        const btn = this.currentButton;
        this.play(text, btn);
      }
    },

    updateUI: function (state) {
      if (!this.currentButton) return;
      const player = this.currentButton.closest('.audio-player');
      if (!player) return;
      const playBtn = player.querySelector('.ap-play');
      const pauseBtn = player.querySelector('.ap-pause');
      const statusEl = player.querySelector('.ap-status');
      if (state === 'playing') {
        player.classList.add('player-active');
        if (playBtn) playBtn.style.display = 'none';
        if (pauseBtn) pauseBtn.style.display = 'flex';
        if (statusEl) statusEl.textContent = '播放中...';
      } else if (state === 'paused') {
        if (playBtn) playBtn.style.display = 'flex';
        if (pauseBtn) pauseBtn.style.display = 'none';
        if (statusEl) statusEl.textContent = '已暂停';
      } else {
        player.classList.remove('player-active');
        if (playBtn) playBtn.style.display = 'flex';
        if (pauseBtn) pauseBtn.style.display = 'none';
        if (statusEl) statusEl.textContent = '点击播放听力原文';
      }
    }
  };

  TTS.init();
  window.addEventListener('beforeunload', () => TTS.stop());

  // ========== 工具函数 ==========
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  function formatScript(text) {
    return text.split('\n').map(function (line) {
      var trimmed = line.trim();
      if (!trimmed) return '';
      var formatted = escapeHtml(trimmed);
      formatted = formatted.replace(/^([A-Z][A-Z\s]+:)/, '<strong class="speaker">$1</strong>');
      return '<p>' + formatted + '</p>';
    }).join('');
  }

  function renderPassageText(text) {
    if (!text) return '';
    var paragraphs = text.split(/\n\n+/);
    return paragraphs.map(function (para) {
      var trimmed = para.trim();
      if (!trimmed) return '';
      var html = escapeHtml(trimmed);
      html = html.replace(/^Paragraph\s+([A-Z])/, '<strong class="para-label">Paragraph $1</strong>');
      return '<p>' + html + '</p>';
    }).join('');
  }

  // ========== 首页渲染（含模式切换）==========
  function renderHome() {
    currentView = { bookId: null, testId: null };
    TTS.stop();
    if (examTimerInterval) { clearInterval(examTimerInterval); examTimerInterval = null; }
    document.title = '雅思真题库 - 历年雅思官方真题与答案';

    const bookCards = IELTS_DATA.books.map(function (book) {
      const testCount = book.tests.length;
      const hasContent = testCount > 0;
      var badge;
      if (currentMode === 'exam') {
        badge = hasContent
          ? '<span class="badge badge-exam">可考试 ' + testCount + ' 套</span>'
          : '<span class="badge badge-soon">即将收录</span>';
      } else {
        badge = hasContent
          ? '<span class="badge badge-available">已收录 ' + testCount + ' 套</span>'
          : '<span class="badge badge-soon">即将收录</span>';
      }

      return (
        '<div class="book-card' + (hasContent ? '' : ' disabled') + '" data-book="' + book.id + '">' +
        '<div class="book-card-header">' +
        '<div class="book-number">' + book.title + '</div>' +
        '<div class="book-year">' + book.year + '</div>' +
        '</div>' +
        '<div class="book-card-body">' +
        '<h3>' + book.fullTitle + '</h3>' +
        '<p class="book-desc">' + book.desc + '</p>' +
        badge +
        '</div>' +
        '</div>'
      );
    }).join('');

    var modeToggleHtml =
      '<div class="mode-toggle-wrapper">' +
      '<div class="mode-toggle">' +
      '<button class="mode-btn' + (currentMode === 'practice' ? ' active' : '') + '" data-mode="practice">📖 练习模式</button>' +
      '<button class="mode-btn' + (currentMode === 'exam' ? ' active' : '') + '" data-mode="exam">📝 考试模式</button>' +
      '</div>' +
      '<p class="mode-hint">' + (currentMode === 'practice'
        ? '浏览真题题目与答案，支持听力语音朗读'
        : '模拟真实雅思考试流程，含计时器、答题、自动评分') + '</p>' +
      '</div>';

    var featuresHtml = currentMode === 'practice' ?
      '<div class="features-grid">' +
      '<div class="feature-card"><div class="feature-icon">🎧</div><h3>听力训练</h3><p>涵盖 Part 1-4 全题型，支持语音朗读原文与答案解析</p></div>' +
      '<div class="feature-card"><div class="feature-icon">📖</div><h3>阅读精练</h3><p>三篇文章完整收录，判断题、填空题、匹配题全覆盖</p></div>' +
      '<div class="feature-card"><div class="feature-icon">✍️</div><h3>写作范文</h3><p>小作文+大作文，附高分范文与写作技巧</p></div>' +
      '<div class="feature-card"><div class="feature-icon">🗣️</div><h3>口语示范</h3><p>三部分完整口语题，含参考回答与答题策略</p></div>' +
      '</div>'
      :
      '<div class="features-grid">' +
      '<div class="feature-card"><div class="feature-icon">⏱️</div><h3>考试计时</h3><p>150分钟全真模拟，听力30分钟 + 阅读60分钟 + 写作60分钟</p></div>' +
      '<div class="feature-card"><div class="feature-icon">✏️</div><h3>在线答题</h3><p>填空题文本输入，选择题单选作答，写作在线编辑</p></div>' +
      '<div class="feature-card"><div class="feature-icon">📊</div><h3>自动评分</h3><p>听力和阅读自动判分，输出雅思Band Score估算</p></div>' +
      '<div class="feature-card"><div class="feature-icon">📋</div><h3>答题卡</h3><p>实时答题进度追踪，一键跳转任意题目</p></div>' +
      '</div>';

    app.innerHTML =
      '<section class="hero">' +
      '<div class="hero-content">' +
      '<div class="hero-badge">IELTS Official Practice</div>' +
      '<h1 class="hero-title">雅思真题库</h1>' +
      '<p class="hero-subtitle">历年剑桥雅思官方真题 · 听力 / 阅读 / 写作 / 口语</p>' +
      '<p class="hero-desc">' + (currentMode === 'exam'
        ? '模拟真实雅思考试流程，在线答题、自动评分、Band Score估算'
        : '收录剑桥雅思系列真题，每套试题包含完整四部分题目与参考答案，助你高效备考') + '</p>' +
      '<div class="hero-stats">' +
      '<div class="stat"><span class="stat-num">' + IELTS_DATA.books.filter(b => b.tests.length > 0).length + '</span><span class="stat-label">真题系列</span></div>' +
      '<div class="stat"><span class="stat-num">4</span><span class="stat-label">考试模块</span></div>' +
      '<div class="stat"><span class="stat-num">40</span><span class="stat-label">每套题数</span></div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      modeToggleHtml +
      '<section class="books-section">' +
      '<div class="section-header">' +
      '<h2>选择真题系列</h2>' +
      '<p>' + (currentMode === 'exam' ? '点击卡片进入模拟考试' : '点击下方卡片进入对应真题') + '</p>' +
      '</div>' +
      '<div class="books-grid">' + bookCards + '</div>' +
      '</section>' +
      '<section class="features-section">' +
      '<div class="section-header"><h2>' + (currentMode === 'exam' ? '考试功能' : '备考功能') + '</h2></div>' +
      featuresHtml +
      '</section>' +
      '<footer class="footer"><p>雅思真题库 · 仅供学习参考使用 · 题目为雅思格式原创练习内容</p></footer>';

    // 绑定模式切换
    document.querySelectorAll('.mode-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentMode = this.dataset.mode;
        renderHome();
      });
    });

    // 绑定书籍卡片
    document.querySelectorAll('.book-card').forEach(function (card) {
      card.addEventListener('click', function () {
        if (this.classList.contains('disabled')) return;
        const bookId = parseInt(this.dataset.book, 10);
        renderBook(bookId);
      });
    });
  }

  // ========== 练习模式：书籍详情 ==========
  function renderBook(bookId) {
    currentView = { bookId: bookId, testId: null };
    TTS.stop();
    const book = IELTS_DATA.books.find(function (b) { return b.id === bookId; });
    if (!book) { renderHome(); return; }
    document.title = book.fullTitle + ' - 雅思真题库';

    if (book.tests.length === 0) {
      app.innerHTML =
        '<div class="breadcrumb"><a href="#" data-nav="home">首页</a><span class="sep">/</span><span>' + book.fullTitle + '</span></div>' +
        '<div class="empty-state"><div class="empty-icon">📚</div><h2>' + book.fullTitle + '</h2><p>该系列真题正在收录中，敬请期待</p><button class="btn-back" data-nav="home">返回首页</button></div>';
      bindNav();
      window.scrollTo(0, 0);
      return;
    }

    var testCards = book.tests.map(function (test) {
      var buttonText = currentMode === 'exam' ? '开始模拟考试' : '查看试题';
      var buttonIcon = currentMode === 'exam' ? '📝' : '📖';
      return (
        '<div class="test-card" data-test="' + test.id + '">' +
        '<div class="test-card-header"><h3>' + test.title + '</h3><span class="test-arrow">→</span></div>' +
        '<div class="test-sections">' +
        '<div class="test-section-tag">🎧 听力</div>' +
        '<div class="test-section-tag">📖 阅读</div>' +
        '<div class="test-section-tag">✍️ 写作</div>' +
        '<div class="test-section-tag">🗣️ 口语</div>' +
        '</div>' +
        '<div class="test-card-action">' + buttonIcon + ' ' + buttonText + '</div>' +
        '</div>'
      );
    }).join('');

    app.innerHTML =
      '<div class="breadcrumb"><a href="#" data-nav="home">首页</a><span class="sep">/</span><span>' + book.fullTitle + '</span></div>' +
      '<div class="book-header">' +
      '<div class="book-header-number">' + book.title + '</div>' +
      '<div class="book-header-info"><h1>' + book.fullTitle + '</h1><p>' + book.desc + ' · 共 ' + book.tests.length + ' 套完整试题</p></div>' +
      '</div>' +
      '<div class="tests-grid">' + testCards + '</div>' +
      '<div style="text-align:center; margin-top:32px;"><button class="btn-back" data-nav="home">← 返回首页</button></div>';

    bindNav();
    document.querySelectorAll('.test-card').forEach(function (card) {
      card.addEventListener('click', function () {
        const testId = parseInt(this.dataset.test, 10);
        if (currentMode === 'exam') {
          renderExamIntro(bookId, testId);
        } else {
          renderTest(bookId, testId);
        }
      });
    });
    window.scrollTo(0, 0);
  }

  // ========== 练习模式：试卷详情 ==========
  function renderTest(bookId, testId) {
    currentView = { bookId: bookId, testId: testId };
    TTS.stop();
    const book = IELTS_DATA.books.find(function (b) { return b.id === bookId; });
    if (!book) { renderHome(); return; }
    const test = book.tests.find(function (t) { return t.id === testId; });
    if (!test) { renderBook(bookId); return; }
    document.title = book.fullTitle + ' ' + test.title + ' - 雅思真题库';

    app.innerHTML =
      '<div class="breadcrumb">' +
      '<a href="#" data-nav="home">首页</a><span class="sep">/</span>' +
      '<a href="#" data-nav="book" data-book="' + bookId + '">' + book.fullTitle + '</a><span class="sep">/</span>' +
      '<span>' + test.title + '</span></div>' +
      '<div class="test-header"><h1>' + book.fullTitle + ' · ' + test.title + '</h1><p>完整四部分试题，点击各模块查看题目与答案</p></div>' +
      '<div class="sections-container">' +
      renderListening(test.listening, bookId, testId) +
      renderReading(test.reading) +
      renderWriting(test.writing) +
      renderSpeaking(test.speaking) +
      '</div>' +
      '<div style="text-align:center; margin-top:32px;"><button class="btn-back" data-nav="book" data-book="' + bookId + '">← 返回' + book.fullTitle + '</button></div>';

    bindNav();
    bindAnswerToggles();
    bindAudioPlayers(bookId, testId);
    window.scrollTo(0, 0);
  }

  // ========== 练习模式：听力渲染 ==========
  function renderListening(data, bookId, testId) {
    const sectionsHtml = data.sections.map(function (section, idx) {
      const scriptKey = bookId + '-' + testId + '-' + idx;
      const hasScript = typeof LISTENING_SCRIPTS !== 'undefined' && LISTENING_SCRIPTS[scriptKey];
      const playerHtml = TTS.isSupported() && hasScript
        ? renderAudioPlayer(scriptKey)
        : (!TTS.isSupported()
            ? '<div class="tts-unsupported">⚠️ 当前浏览器不支持语音朗读功能，建议使用 Chrome 或 Edge 浏览器</div>'
            : '<div class="tts-unsupported">该部分听力原文正在准备中</div>');

      const questionsHtml = section.questions.map(function (item, qIdx) {
        return (
          '<div class="question-item"><div class="question-num">Q' + (qIdx + 1) + '</div>' +
          '<div class="question-body"><div class="question-text">' + item.q + '</div>' +
          '<div class="answer-text" data-hidden="true"><span class="answer-label">答案：</span>' + item.a + '</div>' +
          '<button class="btn-toggle-answer">显示答案</button></div></div>'
        );
      }).join('');

      const scriptHtml = hasScript
        ? '<div class="audio-script-wrapper"><button class="btn-script-toggle">📄 查看听力原文</button>' +
          '<div class="audio-script-full" data-hidden="true">' + formatScript(LISTENING_SCRIPTS[scriptKey]) + '</div></div>'
        : '';

      return (
        '<div class="exam-section listening-section">' +
        '<div class="exam-section-header"><span class="exam-section-tag tag-listening">' + section.part + '</span>' +
        '<span class="exam-section-type">' + section.type + '</span></div>' +
        '<p class="exam-section-context">' + section.context + '</p>' +
        playerHtml + scriptHtml +
        '<div class="questions-list">' + questionsHtml + '</div></div>'
      );
    }).join('');

    return (
      '<div class="module-block module-listening">' +
      '<div class="module-header"><span class="module-icon">🎧</span><div><h2>' + data.title + '</h2>' +
      '<p class="module-intro">' + data.intro + ' · 支持语音朗读原文</p></div></div>' +
      '<div class="all-answer-toggle"><button class="btn-toggle-all" data-action="show">显示全部答案</button></div>' +
      sectionsHtml + '</div>'
    );
  }

  // ========== 音频播放器渲染（共用）==========
  function renderAudioPlayer(scriptKey) {
    return (
      '<div class="audio-player" data-script-key="' + scriptKey + '">' +
      '<div class="ap-controls">' +
      '<button class="ap-btn ap-play" title="播放听力原文">▶</button>' +
      '<button class="ap-btn ap-pause" title="暂停" style="display:none;">⏸</button>' +
      '<button class="ap-btn ap-stop" title="停止">⏹</button>' +
      '<div class="ap-status">点击播放听力原文</div>' +
      '<div class="ap-speed"><label>语速</label><select class="ap-speed-select">' +
      '<option value="0.7">0.7x</option><option value="0.8">0.8x</option>' +
      '<option value="0.9" selected>0.9x</option><option value="1.0">1.0x</option>' +
      '<option value="1.1">1.1x</option><option value="1.25">1.25x</option></select></div>' +
      '</div>' +
      '<div class="ap-wave"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' +
      '</div>'
    );
  }

  // ========== 练习模式：阅读渲染 ==========
  function renderReading(data) {
    const passagesHtml = data.passages.map(function (passage, idx) {
      const questionsHtml = passage.questions.map(function (item, qIdx) {
        return (
          '<div class="question-item"><div class="question-num">Q' + (qIdx + 1) + '</div>' +
          '<div class="question-body"><div class="question-text">' +
          (item.type ? '<span class="q-type">' + item.type + '</span> ' : '') + item.q + '</div>' +
          '<div class="answer-text" data-hidden="true"><span class="answer-label">答案：</span>' + item.a + '</div>' +
          '<button class="btn-toggle-answer">显示答案</button></div></div>'
        );
      }).join('');
      return (
        '<div class="exam-section"><div class="exam-section-header">' +
        '<span class="exam-section-tag tag-reading">Passage ' + (idx + 1) + '</span>' +
        '<span class="exam-section-type">' + passage.difficulty + '</span></div>' +
        '<h3 class="passage-title">' + passage.title + '</h3>' +
        '<p class="passage-summary">' + passage.summary + '</p>' +
        (passage.text ? '<div class="passage-text-wrapper"><button class="btn-toggle-passage" data-hidden="false">📄 收起原文</button><div class="passage-text-body">' + renderPassageText(passage.text) + '</div></div>' : '') +
        '<div class="questions-list">' + questionsHtml + '</div></div>'
      );
    }).join('');
    return (
      '<div class="module-block module-reading">' +
      '<div class="module-header"><span class="module-icon">📖</span><div><h2>' + data.title + '</h2>' +
      '<p class="module-intro">' + data.intro + '</p></div></div>' +
      '<div class="all-answer-toggle"><button class="btn-toggle-all" data-action="show">显示全部答案</button></div>' +
      passagesHtml + '</div>'
    );
  }

  // ========== 练习模式：写作渲染 ==========
  function renderWriting(data) {
    const tasksHtml = data.tasks.map(function (task, idx) {
      const modelAnswerHtml = task.modelAnswer.split('\n').map(function (line) {
        return line.trim() ? '<p>' + escapeHtml(line) + '</p>' : '';
      }).join('');
      return (
        '<div class="exam-section writing-task"><div class="exam-section-header">' +
        '<span class="exam-section-tag tag-writing">' + task.task + '</span>' +
        '<span class="exam-section-type">' + task.type + '</span></div>' +
        '<div class="writing-prompt"><h4>题目要求</h4><p>' + escapeHtml(task.prompt) + '</p></div>' +
        '<div class="writing-answer" data-hidden="true"><h4>参考范文</h4>' +
        '<div class="model-answer">' + modelAnswerHtml + '</div>' +
        '<div class="writing-tips"><span>💡 写作提示：</span>' + task.tips + '</div></div>' +
        '<button class="btn-toggle-answer btn-writing-toggle">显示范文</button></div>'
      );
    }).join('');
    return (
      '<div class="module-block module-writing">' +
      '<div class="module-header"><span class="module-icon">✍️</span><div><h2>' + data.title + '</h2>' +
      '<p class="module-intro">' + data.intro + '</p></div></div>' + tasksHtml + '</div>'
    );
  }

  // ========== 练习模式：口语渲染 ==========
  function renderSpeaking(data) {
    const partsHtml = data.parts.map(function (part, idx) {
      var content = '';
      if (part.cueCard) {
        content =
          '<div class="cue-card"><div class="cue-card-label">Cue Card</div>' +
          '<p>' + part.cueCard.replace(/\n/g, '<br>') + '</p></div>' +
          '<div class="writing-answer" data-hidden="true"><h4>参考回答</h4>' +
          '<div class="model-answer">' + part.modelAnswer.replace(/\n/g, '<br>') + '</div>' +
          (part.tips ? '<div class="writing-tips"><span>💡 答题提示：</span>' + part.tips + '</div>' : '') + '</div>' +
          '<button class="btn-toggle-answer btn-writing-toggle">显示参考回答</button>';
      } else {
        var questionsHtml = part.questions.map(function (item, qIdx) {
          return (
            '<div class="question-item"><div class="question-num">Q' + (qIdx + 1) + '</div>' +
            '<div class="question-body"><div class="question-text">' + item.q + '</div>' +
            '<div class="answer-text" data-hidden="true"><span class="answer-label">参考回答：</span>' + item.a + '</div>' +
            '<button class="btn-toggle-answer">显示回答</button></div></div>'
          );
        }).join('');
        content = '<div class="questions-list">' + questionsHtml + '</div>';
      }
      return (
        '<div class="exam-section"><div class="exam-section-header">' +
        '<span class="exam-section-tag tag-speaking">' + part.part + '</span></div>' +
        (part.intro ? '<p class="exam-section-context">' + part.intro + '</p>' : '') + content + '</div>'
      );
    }).join('');
    return (
      '<div class="module-block module-speaking">' +
      '<div class="module-header"><span class="module-icon">🗣️</span><div><h2>' + data.title + '</h2>' +
      '<p class="module-intro">' + data.intro + '</p></div></div>' + partsHtml + '</div>'
    );
  }

  // ========== 练习模式：答案切换绑定 ==========
  function bindAnswerToggles() {
    document.querySelectorAll('.btn-toggle-answer').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var answerEl = this.previousElementSibling;
        if (!answerEl || !answerEl.classList.contains('answer-text') && !answerEl.classList.contains('writing-answer')) {
          var parent = this.parentElement;
          answerEl = parent.querySelector('.answer-text, .writing-answer');
        }
        if (!answerEl) return;
        var isHidden = answerEl.getAttribute('data-hidden') === 'true';
        if (isHidden) {
          answerEl.setAttribute('data-hidden', 'false');
          answerEl.classList.add('answer-visible');
          this.textContent = this.textContent.replace('显示', '隐藏');
        } else {
          answerEl.setAttribute('data-hidden', 'true');
          answerEl.classList.remove('answer-visible');
          this.textContent = this.textContent.replace('隐藏', '显示');
        }
      });
    });
    document.querySelectorAll('.btn-toggle-all').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var module = this.closest('.module-block');
        if (!module) return;
        var action = this.getAttribute('data-action');
        var answers = module.querySelectorAll('.answer-text');
        var buttons = module.querySelectorAll('.btn-toggle-answer');
        if (action === 'show') {
          answers.forEach(function (el) { el.setAttribute('data-hidden', 'false'); el.classList.add('answer-visible'); });
          buttons.forEach(function (b) { if (b.textContent.indexOf('显示') !== -1) b.textContent = b.textContent.replace('显示', '隐藏'); });
          this.setAttribute('data-action', 'hide');
          this.textContent = '隐藏全部答案';
        } else {
          answers.forEach(function (el) { el.setAttribute('data-hidden', 'true'); el.classList.remove('answer-visible'); });
          buttons.forEach(function (b) { if (b.textContent.indexOf('隐藏') !== -1) b.textContent = b.textContent.replace('隐藏', '显示'); });
          this.setAttribute('data-action', 'show');
          this.textContent = '显示全部答案';
        }
      });
    });
    document.querySelectorAll('.btn-toggle-passage').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var body = this.nextElementSibling;
        if (!body || !body.classList.contains('passage-text-body')) return;
        var isHidden = this.getAttribute('data-hidden') === 'true';
        if (isHidden) {
          this.setAttribute('data-hidden', 'false');
          body.style.display = '';
          this.textContent = '📄 收起原文';
        } else {
          this.setAttribute('data-hidden', 'true');
          body.style.display = 'none';
          this.textContent = '📄 展开原文';
        }
      });
    });
  }
  function bindAudioPlayers(bookId, testId) {
    if (!TTS.isSupported()) return;
    document.querySelectorAll('.audio-player .ap-play').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var player = this.closest('.audio-player');
        var key = player.dataset.scriptKey;
        if (!key || !LISTENING_SCRIPTS[key]) return;
        if (TTS.isPaused && TTS.currentButton === this) { TTS.pause(); return; }
        TTS.play(LISTENING_SCRIPTS[key], this);
      });
    });
    document.querySelectorAll('.audio-player .ap-pause').forEach(function (btn) {
      btn.addEventListener('click', function () { TTS.pause(); });
    });
    document.querySelectorAll('.audio-player .ap-stop').forEach(function (btn) {
      btn.addEventListener('click', function () { TTS.stop(); });
    });
    document.querySelectorAll('.ap-speed-select').forEach(function (select) {
      select.addEventListener('change', function () {
        var rate = parseFloat(this.value);
        TTS.rate = rate;
        document.querySelectorAll('.ap-speed-select').forEach(function (s) { s.value = rate; });
      });
    });
    document.querySelectorAll('.btn-script-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var scriptEl = this.nextElementSibling;
        if (!scriptEl) return;
        var isHidden = scriptEl.getAttribute('data-hidden') === 'true';
        if (isHidden) {
          scriptEl.setAttribute('data-hidden', 'false');
          scriptEl.classList.add('script-visible');
          this.textContent = '📄 隐藏听力原文';
        } else {
          scriptEl.setAttribute('data-hidden', 'true');
          scriptEl.classList.remove('script-visible');
          this.textContent = '📄 查看听力原文';
        }
      });
    });
  }

  // ==========================================
  // ========== 考试模式 ==========
  // ==========================================

  // ========== 考试模式：考试介绍页 ==========
  function renderExamIntro(bookId, testId) {
    currentView = { bookId: bookId, testId: testId };
    TTS.stop();
    const book = IELTS_DATA.books.find(function (b) { return b.id === bookId; });
    if (!book) { renderHome(); return; }
    const test = book.tests.find(function (t) { return t.id === testId; });
    if (!test) { renderBook(bookId); return; }
    document.title = book.fullTitle + ' ' + test.title + ' 模拟考试 - 雅思真题库';

    // 统计题目数量
    var listenQ = 0;
    test.listening.sections.forEach(function (s) { listenQ += s.questions.length; });
    var readQ = 0;
    test.reading.passages.forEach(function (p) { readQ += p.questions.length; });

    app.innerHTML =
      '<div class="breadcrumb">' +
      '<a href="#" data-nav="home">首页</a><span class="sep">/</span>' +
      '<a href="#" data-nav="book" data-book="' + bookId + '">' + book.fullTitle + '</a><span class="sep">/</span>' +
      '<span>' + test.title + ' 模拟考试</span></div>' +
      '<div class="exam-intro">' +
      '<div class="exam-intro-card">' +
      '<div class="exam-intro-icon">📝</div>' +
      '<h1>' + book.fullTitle + ' · ' + test.title + '</h1>' +
      '<p class="exam-intro-subtitle">雅思全真模拟考试</p>' +
      '<div class="exam-rules">' +
      '<div class="exam-rule-item"><span class="rule-icon">🎧</span><div><strong>听力 Listening</strong><p>约30分钟 · ' + listenQ + '题 · 4个Part</p><small>点击播放按钮朗读听力原文，边听边答题</small></div></div>' +
      '<div class="exam-rule-item"><span class="rule-icon">📖</span><div><strong>阅读 Reading</strong><p>60分钟 · ' + readQ + '题 · 3篇文章</p><small>包含判断题、填空题、选择题、匹配题</small></div></div>' +
      '<div class="exam-rule-item"><span class="rule-icon">✍️</span><div><strong>写作 Writing</strong><p>60分钟 · 2个Task</p><small>Task 1 不少于150词，Task 2 不少于250词</small></div></div>' +
      '</div>' +
      '<div class="exam-rules-note">' +
      '<h3>📋 考试说明</h3>' +
      '<ul>' +
      '<li>考试总时长 <strong>150分钟</strong>，倒计时结束自动交卷</li>' +
      '<li>可自由切换听力/阅读/写作三个部分</li>' +
      '<li>听力部分使用语音朗读模拟真实听力考试</li>' +
      '<li>交卷后系统自动评分听力与阅读，输出 Band Score 估算</li>' +
      '<li>写作部分提供范文对比，需自行评估</li>' +
      '<li>口语部分请在成绩页查看参考答案</li>' +
      '</ul>' +
      '</div>' +
      '<button class="btn-start-exam" id="btn-start-exam">🚀 开始考试</button>' +
      '<button class="btn-back" data-nav="book" data-book="' + bookId + '">← 返回</button>' +
      '</div></div>';

    bindNav();
    document.getElementById('btn-start-exam').addEventListener('click', function () {
      startExam(bookId, testId);
    });
    window.scrollTo(0, 0);
  }

  // ========== 开始考试 ==========
  function startExam(bookId, testId) {
    examState = {
      bookId: bookId,
      testId: testId,
      answers: {},
      startTime: Date.now(),
      duration: 150 * 60 * 1000,
      currentSection: 'listening',
      submitted: false
    };
    renderExam(bookId, testId);
  }

  // ========== 考试界面渲染 ==========
  function renderExam(bookId, testId) {
    const book = IELTS_DATA.books.find(function (b) { return b.id === bookId; });
    const test = book.tests.find(function (t) { return t.id === testId; });

    document.title = book.fullTitle + ' ' + test.title + ' [考试中] - 雅思真题库';

    app.innerHTML =
      '<div class="exam-toolbar">' +
      '<div class="exam-toolbar-left">' +
      '<span class="exam-toolbar-title">📝 ' + book.fullTitle + ' ' + test.title + '</span>' +
      '</div>' +
      '<div class="exam-toolbar-right">' +
      '<div class="exam-timer" id="exam-timer">02:30:00</div>' +
      '<button class="btn-submit-exam" id="btn-submit-exam">交卷</button>' +
      '</div>' +
      '</div>' +
      '<div class="exam-tabs">' +
      '<button class="exam-tab active" data-section="listening">🎧 听力 Listening</button>' +
      '<button class="exam-tab" data-section="reading">📖 阅读 Reading</button>' +
      '<button class="exam-tab" data-section="writing">✍️ 写作 Writing</button>' +
      '</div>' +
      '<div class="exam-body">' +
      '<div class="exam-panel exam-panel-listening active" id="panel-listening">' +
      renderExamListening(test.listening, bookId, testId) +
      '</div>' +
      '<div class="exam-panel exam-panel-reading" id="panel-reading">' +
      renderExamReading(test.reading) +
      '</div>' +
      '<div class="exam-panel exam-panel-writing" id="panel-writing">' +
      renderExamWriting(test.writing) +
      '</div>' +
      '</div>' +
      '<div class="exam-bottom-bar">' +
      '<div class="answer-sheet-mini" id="answer-sheet-mini">' +
      renderAnswerSheet(test) +
      '</div>' +
      '</div>';

    bindExamEvents(bookId, testId);
    startExamTimer(examState.duration);
    bindAudioPlayers(bookId, testId);
    window.scrollTo(0, 0);
  }

  // ========== 考试模式：听力渲染 ==========
  function renderExamListening(data, bookId, testId) {
    let globalQ = 0;
    const sectionsHtml = data.sections.map(function (section, idx) {
      const scriptKey = bookId + '-' + testId + '-' + idx;
      const hasScript = typeof LISTENING_SCRIPTS !== 'undefined' && LISTENING_SCRIPTS[scriptKey];
      const playerHtml = TTS.isSupported() && hasScript
        ? renderAudioPlayer(scriptKey)
        : '<div class="tts-unsupported">该部分听力原文正在准备中</div>';

      const questionsHtml = section.questions.map(function (item, qIdx) {
        globalQ++;
        const answerKey = 'L-' + idx + '-' + qIdx;
        return renderExamQuestion(item, answerKey, globalQ);
      }).join('');

      return (
        '<div class="exam-section listening-section">' +
        '<div class="exam-section-header">' +
        '<span class="exam-section-tag tag-listening">' + section.part + '</span>' +
        '<span class="exam-section-type">' + section.type + '</span></div>' +
        '<p class="exam-section-context">' + section.context + '</p>' +
        playerHtml +
        '<div class="questions-list">' + questionsHtml + '</div></div>'
      );
    }).join('');

    return (
      '<div class="module-block module-listening">' +
      '<div class="module-header"><span class="module-icon">🎧</span><div>' +
      '<h2>' + data.title + '</h2><p class="module-intro">' + data.intro + ' · 点击播放按钮开始听力</p></div></div>' +
      sectionsHtml + '</div>'
    );
  }

  // ========== 考试模式：阅读渲染 ==========
  function renderExamReading(data) {
    let globalQ = 0;
    const passagesHtml = data.passages.map(function (passage, idx) {
      const questionsHtml = passage.questions.map(function (item, qIdx) {
        globalQ++;
        const answerKey = 'R-' + idx + '-' + qIdx;
        return renderExamQuestion(item, answerKey, globalQ);
      }).join('');
      return (
        '<div class="exam-section"><div class="exam-section-header">' +
        '<span class="exam-section-tag tag-reading">Passage ' + (idx + 1) + '</span>' +
        '<span class="exam-section-type">' + passage.difficulty + '</span></div>' +
        '<h3 class="passage-title">' + passage.title + '</h3>' +
        '<p class="passage-summary">' + passage.summary + '</p>' +
        (passage.text ? '<div class="passage-text-wrapper passage-text-exam"><div class="passage-text-header">📄 Reading Passage</div><div class="passage-text-body">' + renderPassageText(passage.text) + '</div></div>' : '') +
        '<div class="questions-list">' + questionsHtml + '</div></div>'
      );
    }).join('');
    return (
      '<div class="module-block module-reading">' +
      '<div class="module-header"><span class="module-icon">📖</span><div>' +
      '<h2>' + data.title + '</h2><p class="module-intro">' + data.intro + '</p></div></div>' +
      passagesHtml + '</div>'
    );
  }

  // ========== 考试模式：写作渲染 ==========
  function renderExamWriting(data) {
    const tasksHtml = data.tasks.map(function (task, idx) {
      const answerKey = 'W-' + idx;
      const minWords = idx === 0 ? 150 : 250;
      return (
        '<div class="exam-section writing-task"><div class="exam-section-header">' +
        '<span class="exam-section-tag tag-writing">' + task.task + '</span>' +
        '<span class="exam-section-type">' + task.type + '</span></div>' +
        '<div class="writing-prompt"><h4>题目要求</h4><p>' + escapeHtml(task.prompt) + '</p></div>' +
        '<div class="exam-writing-area">' +
        '<div class="writing-toolbar"><span class="word-count-label">字数：<span class="word-count" data-key="' + answerKey + '">0</span> / ' + minWords + '+</span></div>' +
        '<textarea class="exam-textarea" data-key="' + answerKey + '" placeholder="在此输入你的作文..." rows="12"></textarea>' +
        '</div></div>'
      );
    }).join('');
    return (
      '<div class="module-block module-writing">' +
      '<div class="module-header"><span class="module-icon">✍️</span><div>' +
      '<h2>' + data.title + '</h2><p class="module-intro">' + data.intro + '</p></div></div>' +
      tasksHtml + '</div>'
    );
  }

  // ========== 考试模式：题目渲染（含输入框）==========
  function renderExamQuestion(question, answerKey, qNum) {
    const qInfo = detectQuestionType(question);
    var inputHtml = '';

    if (qInfo.inputType === 'radio') {
      var optionsHtml = qInfo.options.map(function (opt) {
        var value = opt;
        var label = opt;
        // 对于 A/B/C/D 选项，显示为带字母的按钮
        return '<label class="exam-radio-option">' +
          '<input type="radio" name="' + answerKey + '" value="' + value + '">' +
          '<span class="radio-label">' + label + '</span></label>';
      }).join('');
      inputHtml = '<div class="exam-input-radio">' + optionsHtml + '</div>';
    } else {
      inputHtml = '<input type="text" class="exam-input-text" data-key="' + answerKey + '" placeholder="输入答案..." autocomplete="off" spellcheck="false">';
    }

    return (
      '<div class="question-item exam-question-item" data-qkey="' + answerKey + '">' +
      '<div class="question-num">Q' + qNum + '</div>' +
      '<div class="question-body">' +
      '<div class="question-text">' +
      (question.type ? '<span class="q-type">' + question.type + '</span> ' : '') +
      question.q + '</div>' +
      inputHtml + '</div></div>'
    );
  }

  // ========== 题型检测 ==========
  function detectQuestionType(question) {
    const type = (question.type || '').toLowerCase();
    const answer = question.a || '';

    // True/False/Not Given
    if (type.indexOf('true/false') !== -1 || type.indexOf('判断题') !== -1) {
      return { inputType: 'radio', options: ['TRUE', 'FALSE', 'NOT GIVEN'] };
    }
    // Yes/No/Not Given
    if (type.indexOf('yes/no') !== -1) {
      return { inputType: 'radio', options: ['YES', 'NO', 'NOT GIVEN'] };
    }
    // Multiple choice - answer starts with A./B./C./D.
    if (/^[A-D]\./.test(answer)) {
      // 提取选项字母
      var letters = ['A', 'B', 'C', 'D'];
      return { inputType: 'radio', options: letters };
    }
    // Default: text input
    return { inputType: 'text' };
  }

  // ========== 答题卡渲染 ==========
  function renderAnswerSheet(test) {
    var html = '<div class="as-section"><div class="as-title">🎧 听力 <span class="as-count" id="as-listen-count">0/0</span></div><div class="as-grid">';
    var totalL = 0;
    test.listening.sections.forEach(function (section, sIdx) {
      section.questions.forEach(function (q, qIdx) {
        totalL++;
        var key = 'L-' + sIdx + '-' + qIdx;
        html += '<button class="as-btn" data-key="' + key + '">' + totalL + '</button>';
      });
    });
    html += '</div></div>';

    html += '<div class="as-section"><div class="as-title">📖 阅读 <span class="as-count" id="as-read-count">0/0</span></div><div class="as-grid">';
    var totalR = 0;
    test.reading.passages.forEach(function (passage, pIdx) {
      passage.questions.forEach(function (q, qIdx) {
        totalR++;
        var key = 'R-' + pIdx + '-' + qIdx;
        html += '<button class="as-btn" data-key="' + key + '">' + totalR + '</button>';
      });
    });
    html += '</div></div>';

    html += '<div class="as-section"><div class="as-title">✍️ 写作 <span class="as-count" id="as-write-count">0/2</span></div><div class="as-grid">';
    html += '<button class="as-btn as-btn-writing" data-key="W-0">T1</button>';
    html += '<button class="as-btn as-btn-writing" data-key="W-1">T2</button>';
    html += '</div></div>';

    // 初始化计数
    setTimeout(function () {
      updateAnswerSheetCounts(test, totalL, totalR);
    }, 0);

    return html;
  }

  function updateAnswerSheetCounts(test, totalL, totalR) {
    var lc = document.getElementById('as-listen-count');
    var rc = document.getElementById('as-read-count');
    var wc = document.getElementById('as-write-count');
    if (lc) lc.textContent = '0/' + totalL;
    if (rc) rc.textContent = '0/' + totalR;
    if (wc) wc.textContent = '0/2';
  }

  // ========== 更新答题卡状态 ==========
  function updateAnswerSheet() {
    if (!examState) return;
    document.querySelectorAll('.as-btn').forEach(function (btn) {
      var key = btn.dataset.key;
      var val = examState.answers[key];
      if (val && val.toString().trim()) {
        btn.classList.add('answered');
      } else {
        btn.classList.remove('answered');
      }
    });
    // 更新计数
    var lAnswered = 0, lTotal = 0;
    var rAnswered = 0, rTotal = 0;
    var wAnswered = 0;
    document.querySelectorAll('.as-btn:not(.as-btn-writing)').forEach(function (btn) {
      var key = btn.dataset.key;
      if (key.startsWith('L-')) {
        lTotal++;
        if (examState.answers[key] && examState.answers[key].trim()) lAnswered++;
      } else if (key.startsWith('R-')) {
        rTotal++;
        if (examState.answers[key] && examState.answers[key].trim()) rAnswered++;
      }
    });
    document.querySelectorAll('.as-btn-writing').forEach(function (btn) {
      var key = btn.dataset.key;
      if (examState.answers[key] && examState.answers[key].trim()) wAnswered++;
    });
    var lc = document.getElementById('as-listen-count');
    var rc = document.getElementById('as-read-count');
    var wc = document.getElementById('as-write-count');
    if (lc) lc.textContent = lAnswered + '/' + lTotal;
    if (rc) rc.textContent = rAnswered + '/' + rTotal;
    if (wc) wc.textContent = wAnswered + '/2';
  }

  // ========== 考试事件绑定 ==========
  function bindExamEvents(bookId, testId) {
    // Tab切换
    document.querySelectorAll('.exam-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        var section = this.dataset.section;
        document.querySelectorAll('.exam-tab').forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');
        document.querySelectorAll('.exam-panel').forEach(function (p) { p.classList.remove('active'); });
        var panel = document.getElementById('panel-' + section);
        if (panel) panel.classList.add('active');
        examState.currentSection = section;
        window.scrollTo(0, 0);
      });
    });

    // 文本输入
    document.querySelectorAll('.exam-input-text').forEach(function (input) {
      input.addEventListener('input', function () {
        examState.answers[this.dataset.key] = this.value;
        updateAnswerSheet();
      });
    });

    // 单选
    document.querySelectorAll('.exam-input-radio input[type="radio"]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        examState.answers[this.name] = this.value;
        updateAnswerSheet();
      });
    });

    // 写作 textarea
    document.querySelectorAll('.exam-textarea').forEach(function (textarea) {
      textarea.addEventListener('input', function () {
        examState.answers[this.dataset.key] = this.value;
        var words = this.value.trim().split(/\s+/).filter(function (w) { return w.length > 0; }).length;
        var countEl = document.querySelector('.word-count[data-key="' + this.dataset.key + '"]');
        if (countEl) countEl.textContent = words;
        updateAnswerSheet();
      });
    });

    // 答题卡跳转
    document.querySelectorAll('.as-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = this.dataset.key;
        var section = key.startsWith('L-') ? 'listening' : (key.startsWith('R-') ? 'reading' : 'writing');
        // 切换到对应tab
        document.querySelectorAll('.exam-tab').forEach(function (t) { t.classList.remove('active'); });
        document.querySelector('.exam-tab[data-section="' + section + '"]').classList.add('active');
        document.querySelectorAll('.exam-panel').forEach(function (p) { p.classList.remove('active'); });
        document.getElementById('panel-' + section).classList.add('active');
        examState.currentSection = section;
        // 滚动到题目
        setTimeout(function () {
          var qEl = document.querySelector('.exam-question-item[data-qkey="' + key + '"]');
          if (qEl) {
            qEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            qEl.classList.add('highlight');
            setTimeout(function () { qEl.classList.remove('highlight'); }, 2000);
          } else {
            window.scrollTo(0, 0);
          }
        }, 100);
      });
    });

    // 交卷按钮
    document.getElementById('btn-submit-exam').addEventListener('click', function () {
      showSubmitConfirm(bookId, testId);
    });
  }

  // ========== 交卷确认 ==========
  function showSubmitConfirm(bookId, testId) {
    var lTotal = 0, rTotal = 0, wTotal = 0;
    var lAnswered = 0, rAnswered = 0, wAnswered = 0;
    const book = IELTS_DATA.books.find(function (b) { return b.id === bookId; });
    const test = book.tests.find(function (t) { return t.id === testId; });

    test.listening.sections.forEach(function (s, si) {
      s.questions.forEach(function (q, qi) {
        lTotal++;
        if (examState.answers['L-' + si + '-' + qi] && examState.answers['L-' + si + '-' + qi].trim()) lAnswered++;
      });
    });
    test.reading.passages.forEach(function (p, pi) {
      p.questions.forEach(function (q, qi) {
        rTotal++;
        if (examState.answers['R-' + pi + '-' + qi] && examState.answers['R-' + pi + '-' + qi].trim()) rAnswered++;
      });
    });
    test.writing.tasks.forEach(function (t, ti) {
      wTotal++;
      if (examState.answers['W-' + ti] && examState.answers['W-' + ti].trim()) wAnswered++;
    });

    var totalAnswered = lAnswered + rAnswered + wAnswered;
    var totalQ = lTotal + rTotal + wTotal;

    var overlay = document.createElement('div');
    overlay.className = 'exam-modal-overlay';
    overlay.innerHTML =
      '<div class="exam-modal">' +
      '<h2>确认交卷？</h2>' +
      '<div class="submit-summary">' +
      '<div class="submit-row"><span>🎧 听力</span><span>' + lAnswered + '/' + lTotal + ' 已答</span></div>' +
      '<div class="submit-row"><span>📖 阅读</span><span>' + rAnswered + '/' + rTotal + ' 已答</span></div>' +
      '<div class="submit-row"><span>✍️ 写作</span><span>' + wAnswered + '/' + wTotal + ' 已答</span></div>' +
      '<div class="submit-row submit-total"><span>总计</span><span>' + totalAnswered + '/' + totalQ + ' 已答</span></div>' +
      '</div>' +
      (totalAnswered < totalQ ? '<p class="submit-warning">⚠️ 还有 ' + (totalQ - totalAnswered) + ' 题未作答</p>' : '') +
      '<div class="modal-buttons">' +
      '<button class="btn-modal-cancel" id="btn-modal-cancel">继续考试</button>' +
      '<button class="btn-modal-confirm" id="btn-modal-confirm">确认交卷</button>' +
      '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    document.getElementById('btn-modal-cancel').addEventListener('click', function () {
      document.body.removeChild(overlay);
    });
    document.getElementById('btn-modal-confirm').addEventListener('click', function () {
      document.body.removeChild(overlay);
      submitExam(bookId, testId);
    });
  }

  // ========== 交卷 ==========
  function submitExam(bookId, testId) {
    if (examTimerInterval) { clearInterval(examTimerInterval); examTimerInterval = null; }
    TTS.stop();
    examState.submitted = true;
    renderExamResults(bookId, testId);
  }

  // ========== 考试计时器 ==========
  function startExamTimer(duration) {
    var startTime = Date.now();
    var endTime = startTime + duration;
    if (examTimerInterval) clearInterval(examTimerInterval);

    function update() {
      var remaining = endTime - Date.now();
      if (remaining <= 0) {
        clearInterval(examTimerInterval);
        examTimerInterval = null;
        alert('⏰ 考试时间已到，系统自动交卷！');
        submitExam(examState.bookId, examState.testId);
        return;
      }
      var totalSec = Math.floor(remaining / 1000);
      var h = Math.floor(totalSec / 3600);
      var m = Math.floor((totalSec % 3600) / 60);
      var s = totalSec % 60;
      var display = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
      var timerEl = document.getElementById('exam-timer');
      if (timerEl) {
        timerEl.textContent = display;
        if (totalSec < 300) timerEl.classList.add('timer-danger');
        else if (totalSec < 600) timerEl.classList.add('timer-warning');
      }
    }
    update();
    examTimerInterval = setInterval(update, 1000);
  }

  // ========== 答案评分 ==========
  function scoreAnswer(question, userAnswer) {
    if (!userAnswer || !userAnswer.trim()) return false;
    var correctAnswer = question.a || '';
    var type = (question.type || '').toLowerCase();
    var userAns = userAnswer.trim().toLowerCase();
    var correctAns = correctAnswer.trim().toLowerCase();

    // True/False/Not Given
    if (type.indexOf('true/false') !== -1 || type.indexOf('判断题') !== -1) {
      var tfCorrect = correctAns.split(' - ')[0].split('（')[0].trim();
      return userAns === tfCorrect;
    }
    // Yes/No/Not Given
    if (type.indexOf('yes/no') !== -1) {
      var ynCorrect = correctAns.split(' - ')[0].split('（')[0].trim();
      return userAns === ynCorrect;
    }
    // Multiple choice
    if (/^[a-d]\./.test(correctAns)) {
      var correctLetter = correctAns[0];
      return userAns === correctLetter;
    }
    // Text fill-in-blank
    var coreAnswer = correctAns.replace(/\(.*?\)/g, '').replace(/（.*?）/g, '').trim();
    coreAnswer = coreAnswer.split(' - ')[0].split('（')[0].trim();
    if (userAns === coreAnswer) return true;
    if (coreAnswer.length >= 3 && coreAnswer.indexOf(userAns) !== -1) return true;
    if (userAns.length >= 3 && userAns.indexOf(coreAnswer) !== -1) return true;
    return false;
  }

  // ========== Band Score 计算 ==========
  function calculateBandScore(correct, total) {
    if (total === 0) return 0;
    var score = correct;
    if (score >= 39) return 9.0;
    if (score >= 37) return 8.5;
    if (score >= 35) return 8.0;
    if (score >= 33) return 7.5;
    if (score >= 30) return 7.0;
    if (score >= 27) return 6.5;
    if (score >= 23) return 6.0;
    if (score >= 20) return 5.5;
    if (score >= 16) return 5.0;
    if (score >= 13) return 4.5;
    if (score >= 10) return 4.0;
    if (score >= 6) return 3.5;
    if (score >= 4) return 3.0;
    if (score >= 3) return 2.5;
    if (score >= 2) return 2.0;
    if (score >= 1) return 1.0;
    return 0;
  }

  // ========== 考试结果页 ==========
  function renderExamResults(bookId, testId) {
    const book = IELTS_DATA.books.find(function (b) { return b.id === bookId; });
    const test = book.tests.find(function (t) { return t.id === testId; });

    // 评分
    var lCorrect = 0, lTotal = 0;
    var rCorrect = 0, rTotal = 0;
    var lDetails = [], rDetails = [];

    test.listening.sections.forEach(function (section, sIdx) {
      section.questions.forEach(function (q, qIdx) {
        var key = 'L-' + sIdx + '-' + qIdx;
        var userAns = examState.answers[key] || '';
        var isCorrect = scoreAnswer(q, userAns);
        if (isCorrect) lCorrect++;
        lTotal++;
        lDetails.push({ q: q, userAns: userAns, isCorrect: isCorrect, key: key, sIdx: sIdx, qIdx: qIdx });
      });
    });

    test.reading.passages.forEach(function (passage, pIdx) {
      passage.questions.forEach(function (q, qIdx) {
        var key = 'R-' + pIdx + '-' + qIdx;
        var userAns = examState.answers[key] || '';
        var isCorrect = scoreAnswer(q, userAns);
        if (isCorrect) rCorrect++;
        rTotal++;
        rDetails.push({ q: q, userAns: userAns, isCorrect: isCorrect, key: key, pIdx: pIdx, qIdx: qIdx });
      });
    });

    var lBand = calculateBandScore(lCorrect, lTotal);
    var rBand = calculateBandScore(rCorrect, rTotal);
    var overallBand = ((lBand + rBand) / 2).toFixed(1);

    // 用时
    var timeUsed = Math.floor((Date.now() - examState.startTime) / 1000);
    var mins = Math.floor(timeUsed / 60);
    var secs = timeUsed % 60;

    document.title = '考试成绩 - 雅思真题库';

    // 成绩卡片
    var scoreCards =
      '<div class="result-score-cards">' +
      '<div class="result-score-card card-listening">' +
      '<div class="rsc-icon">🎧</div><div class="rsc-label">听力</div>' +
      '<div class="rsc-score">' + lCorrect + '<span class="rsc-total">/' + lTotal + '</span></div>' +
      '<div class="rsc-band">Band ' + lBand.toFixed(1) + '</div></div>' +
      '<div class="result-score-card card-reading">' +
      '<div class="rsc-icon">📖</div><div class="rsc-label">阅读</div>' +
      '<div class="rsc-score">' + rCorrect + '<span class="rsc-total">/' + rTotal + '</span></div>' +
      '<div class="rsc-band">Band ' + rBand.toFixed(1) + '</div></div>' +
      '<div class="result-score-card card-writing">' +
      '<div class="rsc-icon">✍️</div><div class="rsc-label">写作</div>' +
      '<div class="rsc-score">—</div><div class="rsc-band">待评估</div>' +
      '<div class="rsc-note">查看范文自评</div></div>' +
      '<div class="result-score-card card-overall">' +
      '<div class="rsc-icon">🎯</div><div class="rsc-label">预估总分</div>' +
      '<div class="rsc-score rsc-overall">Band ' + overallBand + '</div>' +
      '<div class="rsc-note">听读平均</div></div>' +
      '</div>';

    // 听力详情
    var listenDetailHtml = lDetails.map(function (d, idx) {
      var statusIcon = !d.userAns.trim() ? '⚪' : (d.isCorrect ? '✅' : '❌');
      var statusClass = !d.userAns.trim() ? 'unanswered' : (d.isCorrect ? 'correct' : 'wrong');
      return (
        '<div class="detail-item ' + statusClass + '">' +
        '<div class="detail-status">' + statusIcon + '</div>' +
        '<div class="detail-body">' +
        '<div class="detail-q">Q' + (idx + 1) + '. ' + escapeHtml(d.q.q) + '</div>' +
        '<div class="detail-answers">' +
        '<div class="detail-user">你的答案：<span>' + (d.userAns.trim() ? escapeHtml(d.userAns) : '未作答') + '</span></div>' +
        '<div class="detail-correct">正确答案：<span>' + escapeHtml(d.q.a) + '</span></div>' +
        '</div></div></div>'
      );
    }).join('');

    // 阅读详情
    var readDetailHtml = rDetails.map(function (d, idx) {
      var statusIcon = !d.userAns.trim() ? '⚪' : (d.isCorrect ? '✅' : '❌');
      var statusClass = !d.userAns.trim() ? 'unanswered' : (d.isCorrect ? 'correct' : 'wrong');
      return (
        '<div class="detail-item ' + statusClass + '">' +
        '<div class="detail-status">' + statusIcon + '</div>' +
        '<div class="detail-body">' +
        '<div class="detail-q">Q' + (idx + 1) + '. ' + (d.q.type ? '<span class="q-type">' + d.q.type + '</span> ' : '') + escapeHtml(d.q.q) + '</div>' +
        '<div class="detail-answers">' +
        '<div class="detail-user">你的答案：<span>' + (d.userAns.trim() ? escapeHtml(d.userAns) : '未作答') + '</span></div>' +
        '<div class="detail-correct">正确答案：<span>' + escapeHtml(d.q.a) + '</span></div>' +
        '</div></div></div>'
      );
    }).join('');

    // 写作详情
    var writeDetailHtml = test.writing.tasks.map(function (task, idx) {
      var userEssay = examState.answers['W-' + idx] || '';
      var wordCount = userEssay.trim().split(/\s+/).filter(function (w) { return w.length > 0; }).length;
      var modelAnswerHtml = task.modelAnswer.split('\n').map(function (line) {
        return line.trim() ? '<p>' + escapeHtml(line) + '</p>' : '';
      }).join('');
      return (
        '<div class="writing-result">' +
        '<div class="exam-section-header"><span class="exam-section-tag tag-writing">' + task.task + '</span>' +
        '<span class="exam-section-type">' + task.type + '</span></div>' +
        '<div class="writing-prompt"><h4>题目要求</h4><p>' + escapeHtml(task.prompt) + '</p></div>' +
        '<div class="writing-comparison">' +
        '<div class="writing-col"><h4>你的作文 <span class="word-tag">' + wordCount + ' 词</span></h4>' +
        '<div class="user-essay">' + (userEssay.trim() ? escapeHtml(userEssay).replace(/\n/g, '<br>') : '<p class="empty-essay">未作答</p>') + '</div></div>' +
        '<div class="writing-col"><h4>参考范文</h4>' +
        '<div class="model-answer">' + modelAnswerHtml + '</div>' +
        '<div class="writing-tips"><span>💡 写作提示：</span>' + task.tips + '</div></div>' +
        '</div></div>'
      );
    }).join('');

    // 口语参考
    var speakDetailHtml = test.speaking.parts.map(function (part, idx) {
      var content = '';
      if (part.cueCard) {
        content = '<div class="cue-card"><div class="cue-card-label">Cue Card</div><p>' + part.cueCard.replace(/\n/g, '<br>') + '</p></div>' +
          '<div class="model-answer visible"><h4>参考回答</h4><div class="model-answer-content">' + part.modelAnswer.replace(/\n/g, '<br>') + '</div></div>';
      } else {
        content = part.questions.map(function (item, qi) {
          return '<div class="speak-q-item"><div class="speak-q">Q' + (qi + 1) + '. ' + escapeHtml(item.q) + '</div><div class="speak-a">' + escapeHtml(item.a) + '</div></div>';
        }).join('');
      }
      return '<div class="exam-section"><div class="exam-section-header"><span class="exam-section-tag tag-speaking">' + part.part + '</span></div>' + content + '</div>';
    }).join('');

    app.innerHTML =
      '<div class="exam-results">' +
      '<div class="result-header">' +
      '<h1>📊 考试成绩报告</h1>' +
      '<p>' + book.fullTitle + ' · ' + test.title + ' · 用时 ' + mins + '分' + secs + '秒</p>' +
      '</div>' +
      scoreCards +
      '<div class="result-actions">' +
      '<button class="btn-result-tab active" data-rtab="listening">🎧 听力详情 (' + lCorrect + '/' + lTotal + ')</button>' +
      '<button class="btn-result-tab" data-rtab="reading">📖 阅读详情 (' + rCorrect + '/' + rTotal + ')</button>' +
      '<button class="btn-result-tab" data-rtab="writing">✍️ 写作对比</button>' +
      '<button class="btn-result-tab" data-rtab="speaking">🗣️ 口语参考</button>' +
      '</div>' +
      '<div class="result-panels">' +
      '<div class="result-panel active" id="rtab-listening"><div class="details-list">' + listenDetailHtml + '</div></div>' +
      '<div class="result-panel" id="rtab-reading"><div class="details-list">' + readDetailHtml + '</div></div>' +
      '<div class="result-panel" id="rtab-writing">' + writeDetailHtml + '</div>' +
      '<div class="result-panel" id="rtab-speaking">' + speakDetailHtml + '</div>' +
      '</div>' +
      '<div class="result-footer">' +
      '<button class="btn-back" data-nav="home">← 返回首页</button>' +
      '<button class="btn-back" data-nav="book" data-book="' + bookId + '">← 返回' + book.fullTitle + '</button>' +
      '</div>' +
      '</div>';

    bindNav();

    // 结果Tab切换
    document.querySelectorAll('.btn-result-tab').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var rtab = this.dataset.rtab;
        document.querySelectorAll('.btn-result-tab').forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        document.querySelectorAll('.result-panel').forEach(function (p) { p.classList.remove('active'); });
        var panel = document.getElementById('rtab-' + rtab);
        if (panel) panel.classList.add('active');
        window.scrollTo({ top: document.querySelector('.result-actions').offsetTop - 80, behavior: 'smooth' });
      });
    });

    window.scrollTo(0, 0);
  }

  // ========== 导航绑定 ==========
  function bindNav() {
    document.querySelectorAll('[data-nav]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var target = this.getAttribute('data-nav');
        if (target === 'home') {
          if (examTimerInterval) { clearInterval(examTimerInterval); examTimerInterval = null; }
          TTS.stop();
          renderHome();
        } else if (target === 'book') {
          var bookId = parseInt(this.getAttribute('data-book'), 10);
          if (examTimerInterval) { clearInterval(examTimerInterval); examTimerInterval = null; }
          TTS.stop();
          renderBook(bookId);
        }
      });
    });
  }

  // ========== 初始化 ==========
  renderHome();
})();
