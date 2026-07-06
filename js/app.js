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

    const prog = Store.getProgress();
    const bookCards = IELTS_DATA.books.filter(function (book) {
      if (!searchQuery) return true;
      var hay = (book.title + ' ' + book.fullTitle + ' ' + book.desc + ' ' + book.year).toLowerCase();
      return hay.indexOf(searchQuery) !== -1;
    }).map(function (book) {
      const testCount = book.tests.length;
      const hasContent = testCount > 0;
      var completedForBook = book.tests.filter(function (t) { return prog[book.id + '-' + t.id]; }).length;
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
      if (completedForBook > 0) {
        badge += '<span class="badge badge-done">✅ 已练 ' + completedForBook + ' 套</span>';
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

    var searchBannerHtml = searchQuery
      ? '<div class="search-banner">🔍 搜索 "<b>' + escapeHtml(searchQuery) + '</b>" 的结果 <button class="search-clear" id="search-clear">清除</button></div>'
      : '';

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
      searchBannerHtml +
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

    var clearBtn = document.getElementById('search-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        searchQuery = '';
        var inp = document.getElementById('global-search');
        if (inp) inp.value = '';
        renderHome();
      });
    }
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
        '<div class="test-card-header"><h3>' + test.title + '</h3>' + favStarHtml(bookId + '-' + test.id) + '<span class="test-arrow">→</span></div>' +
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
      card.addEventListener('click', function (e) {
        if (e.target.closest('[data-fav]')) return;
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
      renderSpeaking(test.speaking, bookId, testId) +
      '</div>' +
      '<div style="text-align:center; margin-top:32px;"><button class="btn-back" data-nav="book" data-book="' + bookId + '">← 返回' + book.fullTitle + '</button></div>';

    bindNav();
    bindAnswerToggles();
    bindAudioPlayers(bookId, testId);
    bindVocabSelection();
    bindSpeakRecorder();
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
  function renderSpeaking(data, bookId, testId) {
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
      var recKey = bookId + '-' + testId + '-spk' + idx;
      return (
        '<div class="exam-section"><div class="exam-section-header">' +
        '<span class="exam-section-tag tag-speaking">' + part.part + '</span></div>' +
        (part.intro ? '<p class="exam-section-context">' + part.intro + '</p>' : '') + content +
        '<div class="speak-recorder" data-rec-key="' + recKey + '">' +
        '<button class="btn-small btn-rec">🎙 录音作答</button>' +
        '<button class="btn-small btn-stop-rec" style="display:none;">⏹ 停止</button>' +
        '<button class="btn-small btn-del-rec" style="display:none;">🗑 删除</button>' +
        '<span class="rec-status"></span>' +
        '<div class="rec-playback"></div></div>' +
        '</div>'
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
        (task.tips ? '<div class="writing-tips-inline"><span>💡 ' + escapeHtml(task.tips) + '</span></div>' : '') +
        '<div class="writing-toolbar"><span class="word-count-label">字数：<span class="word-count" data-key="' + answerKey + '">0</span> / ' + minWords + '+</span>' +
        '<button class="btn-small btn-writing-check" data-key="' + answerKey + '" data-min="' + minWords + '">✍️ 批改助手</button></div>' +
        '<textarea class="exam-textarea" data-key="' + answerKey + '" placeholder="在此输入你的作文..." rows="12"></textarea>' +
        '<div class="writing-feedback" data-key="' + answerKey + '" data-hidden="true"></div>' +
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

    // 写作批改助手
    document.querySelectorAll('.btn-writing-check').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-key');
        var min = parseInt(btn.getAttribute('data-min'), 10) || 150;
        var ta = document.querySelector('.exam-textarea[data-key="' + key + '"]');
        var fb = document.querySelector('.writing-feedback[data-key="' + key + '"]');
        if (!ta || !fb) return;
        fb.innerHTML = analyzeWriting(ta.value, min);
        fb.setAttribute('data-hidden', 'false');
        fb.classList.add('answer-visible');
        fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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

    // 保存进度与错题到本地
    saveExamResult(bookId, testId, lCorrect, lTotal, rCorrect, rTotal, lBand, rBand, lDetails, rDetails);
    updateNavCounts();

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
      '<div class="result-header-top"><h1>📊 考试成绩报告</h1>' +
      '<button class="btn-primary" id="btn-share-card">📤 生成分享卡片</button></div>' +
      '<p>' + book.fullTitle + ' · ' + test.title + ' · 用时 ' + mins + '分' + secs + '秒 · ✅ 已保存</p>' +
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

    var shareBtn = document.getElementById('btn-share-card');
    if (shareBtn) {
      shareBtn.addEventListener('click', function () {
        generateShareCard({
          bookTitle: book.fullTitle, testTitle: test.title,
          overall: overallBand, lBand: lBand.toFixed(1), rBand: rBand.toFixed(1),
          lCorrect: lCorrect, lTotal: lTotal, rCorrect: rCorrect, rTotal: rTotal,
          streak: computeStreak()
        });
      });
    }

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

  // ==========================================
  // ========== 个人学习数据 (localStorage) ==========
  // ==========================================
  const Store = {
    keys: { progress: 'ielts_progress_v1', wrong: 'ielts_wrong_v1', fav: 'ielts_fav_v1', vocab: 'ielts_vocab_v1', theme: 'ielts_theme_v1' },
    _read: function (k, def) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch (e) { return def; } },
    _write: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
    getProgress: function () { return this._read(this.keys.progress, {}); },
    setProgress: function (p) { this._write(this.keys.progress, p); },
    getWrong: function () { return this._read(this.keys.wrong, []); },
    setWrong: function (w) { this._write(this.keys.wrong, w); },
    getFav: function () { return this._read(this.keys.fav, []); },
    setFav: function (f) { this._write(this.keys.fav, f); },
    getVocab: function () { return this._read(this.keys.vocab, []); },
    setVocab: function (v) { this._write(this.keys.vocab, v); },
    getTheme: function () { return this._read(this.keys.theme, 'light'); },
    setTheme: function (t) { this._write(this.keys.theme, t); }
  };

  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function isFaved(key) { return Store.getFav().indexOf(key) !== -1; }
  function toggleFav(key) {
    var fav = Store.getFav();
    var i = fav.indexOf(key);
    if (i === -1) fav.push(key); else fav.splice(i, 1);
    Store.setFav(fav);
    return i === -1;
  }

  function favStarHtml(key) {
    var faved = isFaved(key);
    return '<span class="fav-star' + (faved ? ' faved' : '') + '" data-fav="' + key + '" title="收藏此题">收藏</span>';
  }

  // 交卷后保存进度与错题
  function saveExamResult(bookId, testId, lCorrect, lTotal, rCorrect, rTotal, lBand, rBand, lDetails, rDetails) {
    var prog = Store.getProgress();
    var pkey = bookId + '-' + testId;
    var prev = prog[pkey] || { attempts: 0, bestL: 0, bestR: 0, bestOverall: 0, history: [] };
    prev.attempts += 1;
    prev.bestL = Math.max(prev.bestL, lCorrect);
    prev.bestR = Math.max(prev.bestR, rCorrect);
    prev.bestOverall = Math.max(prev.bestOverall, parseFloat(((lBand + rBand) / 2).toFixed(1)));
    prev.history = prev.history || [];
    prev.history.push({ date: todayStr(), l: lCorrect + '/' + lTotal, r: rCorrect + '/' + rTotal, overall: parseFloat(((lBand + rBand) / 2).toFixed(1)) });
    if (prev.history.length > 20) prev.history = prev.history.slice(-20);
    prog[pkey] = prev;
    Store.setProgress(prog);

    var wrong = Store.getWrong();
    var newWrongMap = {};
    lDetails.concat(rDetails).forEach(function (d) {
      if (!d.isCorrect && d.userAns.trim()) {
        newWrongMap[d.key] = {
          id: bookId + '-' + testId + '-' + d.key,
          bookId: bookId, testId: testId,
          module: d.key.charAt(0) === 'L' ? 'listening' : 'reading',
          qKey: d.key, question: d.q.q, userAnswer: d.userAns,
          correctAnswer: d.q.a, type: d.q.type || '', date: todayStr()
        };
      }
    });
    // 本次答对的旧错题 -> 从错题本移除（已掌握）
    wrong = wrong.filter(function (w) { return !(w.bookId === bookId && w.testId === testId && !newWrongMap[w.qKey]); });
    Object.keys(newWrongMap).forEach(function (k) {
      var existing = wrong.find(function (w) { return w.id === newWrongMap[k].id; });
      if (existing) { existing.userAnswer = newWrongMap[k].userAnswer; existing.date = newWrongMap[k].date; }
      else wrong.push(newWrongMap[k]);
    });
    Store.setWrong(wrong);
  }

  function computeStreak() {
    var prog = Store.getProgress();
    var set = {};
    Object.keys(prog).forEach(function (k) {
      (prog[k].history || []).forEach(function (h) { set[h.date] = true; });
    });
    var d = new Date();
    var ds = function (x) { return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); };
    if (!set[ds(d)]) d.setDate(d.getDate() - 1);
    var streak = 0;
    while (set[ds(d)]) { streak++; d.setDate(d.getDate() - 1); }
    return streak;
  }

  function toast(msg) {
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add('show'); }, 10);
    setTimeout(function () { t.classList.remove('show'); setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 300); }, 1800);
  }

  function updateNavCounts() {
    var favC = document.getElementById('fav-count');
    var wrongC = document.getElementById('wrong-count');
    if (favC) favC.textContent = Store.getFav().length ? Store.getFav().length : '';
    if (wrongC) wrongC.textContent = Store.getWrong().length ? Store.getWrong().length : '';
  }

  // ========== 页面导航 ==========
  function navigateTo(page) {
    if (examTimerInterval) { clearInterval(examTimerInterval); examTimerInterval = null; }
    TTS.stop();
    if (page === 'home') renderHome();
    else if (page === 'dashboard') renderDashboard();
    else if (page === 'wrong') renderWrongBook();
    else if (page === 'fav') renderFavorites();
    else if (page === 'vocab') renderVocab();
  }

  // 全局委托点击：页面导航 / 收藏 / 错题重做
  document.addEventListener('click', function (e) {
    var navEl = e.target.closest('[data-nav-page]');
    if (navEl) { e.preventDefault(); navigateTo(navEl.getAttribute('data-nav-page')); return; }
    var favEl = e.target.closest('[data-fav]');
    if (favEl) {
      e.preventDefault(); e.stopPropagation();
      var key = favEl.getAttribute('data-fav');
      var added = toggleFav(key);
      favEl.classList.toggle('faved', added);
      favEl.textContent = added ? '★ 已收藏' : '收藏';
      updateNavCounts();
      toast(added ? '已加入收藏' : '已取消收藏');
      return;
    }
    var redoEl = e.target.closest('[data-start-exam]');
    if (redoEl) {
      e.preventDefault();
      var b = parseInt(redoEl.getAttribute('data-book'), 10);
      var t = parseInt(redoEl.getAttribute('data-test'), 10);
      if (examTimerInterval) { clearInterval(examTimerInterval); examTimerInterval = null; }
      TTS.stop();
      renderExamIntro(b, t);
      return;
    }
  });

  // ========== 深色模式 ==========
  function applyTheme() {
    var t = Store.getTheme();
    document.documentElement.setAttribute('data-theme', t);
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
  }
  function bindThemeToggle() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var t = Store.getTheme() === 'dark' ? 'light' : 'dark';
      Store.setTheme(t); applyTheme();
    });
  }

  // ========== 搜索 ==========
  var searchQuery = '';
  function bindSearch() {
    var inp = document.getElementById('global-search');
    if (!inp) return;
    inp.addEventListener('input', function () {
      searchQuery = this.value.trim().toLowerCase();
      if (currentView.bookId === null && currentView.testId === null) renderHome();
      else renderHome();
    });
  }

  // ========== PWA 注册 ==========
  function registerSW() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
    }
  }

  // ========== 生词本：阅读文章双击取词 ==========
  function bindVocabSelection() {
    document.querySelectorAll('.passage-text-body').forEach(function (body) {
      if (body.dataset.vocabBound) return;
      body.dataset.vocabBound = '1';
      body.addEventListener('dblclick', function () {
        var sel = window.getSelection();
        var text = sel ? sel.toString().trim() : '';
        if (!text || text.indexOf(' ') !== -1) return;
        var meaning = window.prompt('为单词 "' + text + '" 添加释义：', '');
        if (meaning && meaning.trim()) {
          var vocab = Store.getVocab();
          if (!vocab.some(function (v) { return v.word.toLowerCase() === text.toLowerCase(); })) {
            vocab.unshift({ word: text, meaning: meaning.trim(), date: todayStr() });
            Store.setVocab(vocab);
            toast('已加入生词本：' + text);
          } else { toast('生词本已有该词'); }
        }
      });
    });
  }

  // ========== 仪表盘 ==========
  function renderDashboard() {
    currentView = { bookId: null, testId: null };
    TTS.stop();
    document.title = '学习仪表盘 - 雅思真题库';
    var prog = Store.getProgress();
    var wrong = Store.getWrong();
    var keys = Object.keys(prog);
    var totalAttempts = 0, bestOverall = 0, sumOverall = 0;
    var activity = [];
    keys.forEach(function (k) {
      var p = prog[k];
      totalAttempts += p.attempts;
      if (p.bestOverall > bestOverall) bestOverall = p.bestOverall;
      sumOverall += p.bestOverall;
      (p.history || []).forEach(function (h) { activity.push({ key: k, date: h.date, overall: h.overall, l: h.l, r: h.r }); });
    });
    var completed = keys.length;
    var streak = computeStreak();
    var avgOverall = completed ? (sumOverall / completed).toFixed(1) : '0.0';

    activity.sort(function (a, b) { return a.date < b.date ? 1 : (a.date > b.date ? -1 : 0); });
    var recent = activity.slice(0, 10);

    var untried = null;
    for (var i = 0; i < IELTS_DATA.books.length && !untried; i++) {
      var bk = IELTS_DATA.books[i];
      for (var j = 0; j < bk.tests.length; j++) {
        if (!prog[bk.id + '-' + bk.tests[j].id]) { untried = { bookId: bk.id, testId: bk.tests[j].id, title: bk.fullTitle + ' ' + bk.tests[j].title }; break; }
      }
    }

    function bookTestName(key) {
      var parts = key.split('-');
      var bk = IELTS_DATA.books.find(function (b) { return b.id === parseInt(parts[0], 10); });
      if (!bk) return key;
      var tst = bk.tests.find(function (t) { return t.id === parseInt(parts[1], 10); });
      return bk.fullTitle + ' · ' + (tst ? tst.title : '');
    }

    var recentHtml = recent.length ? recent.map(function (a) {
      return '<div class="activity-item"><div class="activity-name">' + bookTestName(a.key) + '</div>' +
        '<div class="activity-meta">总分 Band ' + a.overall + ' · 听 ' + a.l + ' · 读 ' + a.r + '</div>' +
        '<div class="activity-date">' + a.date + '</div></div>';
    }).join('') : '<div class="empty-state small"><p>还没有练习记录，去完成一套模拟考试吧！</p></div>';

    var trendHtml = recent.length ? recent.slice(0, 8).reverse().map(function (a) {
      var pct = Math.max(0, Math.min(100, (parseFloat(a.overall) / 9) * 100));
      return '<div class="trend-row"><span class="trend-label">' + a.date.slice(5) + '</span>' +
        '<div class="trend-track"><div class="trend-fill" style="width:' + pct.toFixed(0) + '%"></div></div>' +
        '<span class="trend-val">' + a.overall + '</span></div>';
    }).join('') : '';

    var statCards =
      '<div class="dash-stats">' +
      '<div class="dash-stat"><div class="ds-num">' + completed + '</div><div class="ds-label">已完成套数</div></div>' +
      '<div class="dash-stat"><div class="ds-num">' + totalAttempts + '</div><div class="ds-label">总练习次数</div></div>' +
      '<div class="dash-stat"><div class="ds-num">' + bestOverall.toFixed(1) + '</div><div class="ds-label">最高总分</div></div>' +
      '<div class="dash-stat"><div class="ds-num">' + streak + '</div><div class="ds-label">连续打卡(天)</div></div>' +
      '<div class="dash-stat"><div class="ds-num">' + wrong.length + '</div><div class="ds-label">错题数量</div></div>' +
      '<div class="dash-stat"><div class="ds-num">' + avgOverall + '</div><div class="ds-label">平均总分</div></div>' +
      '</div>';

    app.innerHTML =
      '<div class="breadcrumb"><a href="#" data-nav-page="home">首页</a><span class="sep">/</span><span>学习仪表盘</span></div>' +
      '<div class="dash-header"><h1>📊 我的学习仪表盘</h1><p>记录你的练习轨迹与进步</p></div>' +
      statCards +
      (trendHtml ? '<div class="dash-section"><h2>📈 成绩趋势</h2><div class="trend-bars">' + trendHtml + '</div></div>' : '') +
      (untried ? '<div class="dash-suggest"><span>💡 推荐练习：' + untried.title + '</span><button class="btn-primary" data-start-exam data-book="' + untried.bookId + '" data-test="' + untried.testId + '">开始模拟考试 →</button></div>' : '') +
      '<div class="dash-section"><h2>📅 最近练习</h2><div class="activity-list">' + recentHtml + '</div></div>' +
      '<div style="text-align:center; margin-top:32px;"><button class="btn-back" data-nav-page="home">← 返回首页</button></div>';

    window.scrollTo(0, 0);
  }

  // ========== 错题本 ==========
  function renderWrongBook() {
    currentView = { bookId: null, testId: null };
    TTS.stop();
    document.title = '错题本 - 雅思真题库';
    var wrong = Store.getWrong().slice().reverse();

    function bookTestName(item) {
      var bk = IELTS_DATA.books.find(function (b) { return b.id === item.bookId; });
      if (!bk) return '';
      var tst = bk.tests.find(function (t) { return t.id === item.testId; });
      return bk.fullTitle + ' · ' + (tst ? tst.title : '');
    }

    var listHtml = wrong.length ? wrong.map(function (w, idx) {
      return '<div class="wrong-item" data-wid="' + w.id + '">' +
        '<div class="wrong-head"><span class="wrong-mod">' + (w.module === 'listening' ? '🎧 听力' : '📖 阅读') + '</span>' +
        '<span class="wrong-src">' + bookTestName(w) + '</span><span class="wrong-date">' + w.date + '</span></div>' +
        '<div class="wrong-q">' + escapeHtml(w.question) + '</div>' +
        '<div class="wrong-answers"><div class="detail-user">你的答案：<span>' + escapeHtml(w.userAnswer) + '</span></div>' +
        '<div class="detail-correct">正确答案：<span>' + escapeHtml(w.correctAnswer) + '</span></div></div>' +
        '<div class="wrong-actions">' +
        '<button class="btn-small btn-redo" data-start-exam data-book="' + w.bookId + '" data-test="' + w.testId + '">🔁 重做此题</button>' +
        '<button class="btn-small btn-del-wrong" data-wid="' + w.id + '">🗑 移除</button></div></div>';
    }).join('') : '<div class="empty-state"><div class="empty-icon">✅</div><h2>还没有错题</h2><p>完成模拟考试后，答错的题目会自动收集到这里</p></div>';

    app.innerHTML =
      '<div class="breadcrumb"><a href="#" data-nav-page="home">首页</a><span class="sep">/</span><span>错题本</span></div>' +
      '<div class="dash-header"><h1>❌ 我的错题本</h1><p>共 ' + wrong.length + ' 道错题 · 重做巩固薄弱环节</p></div>' +
      '<div class="wrong-list">' + listHtml + '</div>' +
      '<div style="text-align:center; margin-top:32px;"><button class="btn-back" data-nav-page="home">← 返回首页</button></div>';

    document.querySelectorAll('.btn-del-wrong').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = this.getAttribute('data-wid');
        var arr = Store.getWrong().filter(function (w) { return w.id !== id; });
        Store.setWrong(arr);
        renderWrongBook();
        updateNavCounts();
      });
    });
    window.scrollTo(0, 0);
  }

  // ========== 收藏夹 ==========
  function renderFavorites() {
    currentView = { bookId: null, testId: null };
    TTS.stop();
    document.title = '收藏夹 - 雅思真题库';
    var fav = Store.getFav();
    var cards = '';
    if (fav.length) {
      cards = fav.map(function (key) {
        var parts = key.split('-');
        var bk = IELTS_DATA.books.find(function (b) { return b.id === parseInt(parts[0], 10); });
        if (!bk) return '';
        var tst = bk.tests.find(function (t) { return t.id === parseInt(parts[1], 10); });
        if (!tst) return '';
        return '<div class="fav-card">' +
          '<div class="fav-card-info"><h3>' + bk.fullTitle + ' · ' + tst.title + '</h3>' +
          '<p>' + bk.desc + '</p></div>' +
          '<div class="fav-card-actions">' +
          '<button class="btn-small" data-nav-book="' + bk.id + '">查看试题</button>' +
          '<button class="btn-small btn-start-exam" data-start-exam data-book="' + bk.id + '" data-test="' + tst.id + '">模拟考试</button>' +
          '<button class="btn-small btn-del-fav" data-fav="' + key + '">取消收藏</button></div></div>';
      }).join('');
    }
    app.innerHTML =
      '<div class="breadcrumb"><a href="#" data-nav-page="home">首页</a><span class="sep">/</span><span>收藏夹</span></div>' +
      '<div class="dash-header"><h1>⭐ 我的收藏</h1><p>共 ' + fav.length + ' 套收藏真题</p></div>' +
      (fav.length ? '<div class="fav-list">' + cards + '</div>' : '<div class="empty-state"><div class="empty-icon">⭐</div><h2>还没有收藏</h2><p>在真题卡片上点击「收藏」即可加入</p></div>') +
      '<div style="text-align:center; margin-top:32px;"><button class="btn-back" data-nav-page="home">← 返回首页</button></div>';

    document.querySelectorAll('[data-nav-book]').forEach(function (btn) {
      btn.addEventListener('click', function () { renderBook(parseInt(this.getAttribute('data-nav-book'), 10)); });
    });
    document.querySelectorAll('.btn-del-fav').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = this.getAttribute('data-fav');
        var arr = Store.getFav().filter(function (k) { return k !== key; });
        Store.setFav(arr);
        renderFavorites();
        updateNavCounts();
      });
    });
    window.scrollTo(0, 0);
  }

  // ========== 生词本 ==========
  function renderVocab() {
    currentView = { bookId: null, testId: null };
    TTS.stop();
    document.title = '生词本 - 雅思真题库';
    var vocab = Store.getVocab();
    var listHtml = vocab.length ? vocab.map(function (v, idx) {
      return '<div class="vocab-item"><div class="vocab-word">' + escapeHtml(v.word) + '</div>' +
        '<div class="vocab-meaning">' + escapeHtml(v.meaning) + '</div>' +
        '<button class="btn-small btn-del-vocab" data-vidx="' + idx + '">🗑</button></div>';
    }).join('') : '<div class="empty-state"><div class="empty-icon">📝</div><h2>生词本为空</h2><p>在练习模式阅读真题中<b>双击单词</b>即可快速收藏，或在此手动添加</p></div>';

    app.innerHTML =
      '<div class="breadcrumb"><a href="#" data-nav-page="home">首页</a><span class="sep">/</span><span>生词本</span></div>' +
      '<div class="dash-header dash-header-row"><div><h1>📝 我的生词本</h1><p>共 ' + vocab.length + ' 个单词</p></div>' +
      (vocab.length ? '<button class="btn-primary" id="btn-vocab-study">🎴 开始背诵</button>' : '') + '</div>' +
      '<div class="vocab-add"><input type="text" id="vocab-word" placeholder="单词 (如: sustainable)">' +
      '<input type="text" id="vocab-meaning" placeholder="释义">' +
      '<button class="btn-primary" id="vocab-add-btn">添加</button></div>' +
      '<div class="vocab-list">' + listHtml + '</div>' +
      '<div style="text-align:center; margin-top:32px;"><button class="btn-back" data-nav-page="home">← 返回首页</button></div>';

    function doAdd() {
      var w = document.getElementById('vocab-word').value.trim();
      var m = document.getElementById('vocab-meaning').value.trim();
      if (!w) { toast('请输入单词'); return; }
      var arr = Store.getVocab();
      if (!arr.some(function (v) { return v.word.toLowerCase() === w.toLowerCase(); })) {
        arr.unshift({ word: w, meaning: m || '（未填释义）', date: todayStr() });
        Store.setVocab(arr);
        renderVocab();
        toast('已添加：' + w);
      } else { toast('该词已存在'); }
    }
    document.getElementById('vocab-add-btn').addEventListener('click', doAdd);
    var studyBtn = document.getElementById('btn-vocab-study');
    if (studyBtn) studyBtn.addEventListener('click', function () { renderVocabStudy(); });
    document.getElementById('vocab-word').addEventListener('keydown', function (e) { if (e.key === 'Enter') doAdd(); });
    document.getElementById('vocab-meaning').addEventListener('keydown', function (e) { if (e.key === 'Enter') doAdd(); });
    document.querySelectorAll('.btn-del-vocab').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var i = parseInt(this.getAttribute('data-vidx'), 10);
        var arr = Store.getVocab();
        arr.splice(i, 1);
        Store.setVocab(arr);
        renderVocab();
      });
    });
    window.scrollTo(0, 0);
  }

  // ==========================================
  // ========== 新功能：写作批改 / 生词背诵 / 分享卡片 / 口语录音 ==========
  // ==========================================

  // ---------- 写作批改助手（启发式自评，无后端）----------
  function analyzeWriting(text, minWords) {
    var raw = (text || '').trim();
    if (!raw) return '<p class="wf-empty">还没有内容，先动笔写一点吧～</p>';
    var words = raw.split(/\s+/).filter(function (w) { return w.length > 0; });
    var wordCount = words.length;
    var sentences = raw.split(/[.!?。！？]+/).map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 0; });
    var sentenceCount = sentences.length;
    var avgLen = sentenceCount ? (wordCount / sentenceCount).toFixed(1) : '0';
    var lower = words.map(function (w) { return w.toLowerCase().replace(/[^a-z']/g, ''); }).filter(function (w) { return w.length > 0; });
    var uniq = {}; lower.forEach(function (w) { uniq[w] = 1; });
    var diversity = lower.length ? Math.round((Object.keys(uniq).length / lower.length) * 100) : 0;
    var connectives = ['however', 'therefore', 'moreover', 'furthermore', 'in addition', 'for example', 'for instance', 'on the other hand', 'in contrast', 'as a result', 'although', 'whereas', 'nevertheless', 'consequently', 'in conclusion', 'to sum up', 'firstly', 'secondly', 'finally', 'besides', 'thus'];
    var connFound = connectives.filter(function (c) { return raw.toLowerCase().indexOf(c) !== -1; });
    var issues = [];
    if (wordCount < minWords) issues.push('字数不足：当前 ' + wordCount + ' 词，建议至少 ' + minWords + ' 词（直接影响 Task Response 得分）。');
    if (sentenceCount && parseFloat(avgLen) > 28) issues.push('句子偏长（平均 ' + avgLen + ' 词），多用标点拆分，提升可读性。');
    if (sentenceCount && parseFloat(avgLen) < 8) issues.push('句子偏短（平均 ' + avgLen + ' 词），尝试用从句与连接词合并，增强连贯性。');
    if (connFound.length < 3) issues.push('连接词偏少（仅 ' + connFound.length + ' 个），建议增加 however / therefore / for example 等，提升 Coherence & Cohesion。');
    if (diversity < 55) issues.push('词汇重复率偏高（多样性 ' + diversity + '%），可多用同义替换提升 Lexical Resource。');
    var stats =
      '<div class="wf-stats">' +
      '<div class="wf-stat"><span>' + wordCount + '</span><label>字数 / ' + minWords + '+</label></div>' +
      '<div class="wf-stat"><span>' + sentenceCount + '</span><label>句子数</label></div>' +
      '<div class="wf-stat"><span>' + avgLen + '</span><label>平均句长</label></div>' +
      '<div class="wf-stat"><span>' + diversity + '%</span><label>词汇多样性</label></div>' +
      '</div>';
    var connHtml = '<div class="wf-conn">已用连接词：' + (connFound.length ? connFound.map(function (c) { return '<span class="conn-chip">' + c + '</span>'; }).join('') : '<span class="wf-muted">暂无</span>') + '</div>';
    var issuesHtml = issues.length ? '<ul class="wf-issues">' + issues.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>' : '<p class="wf-ok">👍 当前文本在长度与基本结构上较为达标，继续打磨论证与词汇即可。</p>';
    var checklist =
      '<div class="wf-checklist"><h5>四项评分标准自检</h5>' +
      '<div class="wf-crit"><span>Task Response</span><i>' + (wordCount >= minWords ? '字数达标，检查是否充分回应所有要点' : '字数不足，需覆盖全部任务要求') + '</i></div>' +
      '<div class="wf-crit"><span>Coherence & Cohesion</span><i>' + (connFound.length >= 3 ? '连接词使用良好' : '建议增加连接词与指代衔接') + '</i></div>' +
      '<div class="wf-crit"><span>Lexical Resource</span><i>' + (diversity >= 55 ? '词汇较丰富' : '建议替换重复词汇') + '</i></div>' +
      '<div class="wf-crit"><span>Grammatical Range</span><i>建议混用简单句与复合句，注意时态一致</i></div>' +
      '</div>';
    return stats + connHtml + '<div class="wf-title">💡 改进建议</div>' + issuesHtml + checklist +
      '<p class="wf-note">* 本批改为基于字数、句式、连接词与词汇多样性的启发式自评，仅供参考，不替代人工/考官评分。</p>';
  }

  // ---------- 生词背诵（闪卡 + 简易间隔重复）----------
  function renderVocabStudy() {
    currentView = { bookId: null, testId: null };
    TTS.stop();
    var list = Store.getVocab();
    if (!list.length) { toast('生词本还是空的，先去添加单词吧'); renderVocab(); return; }
    document.title = '生词背诵 - 雅思真题库';
    var queue = list.slice().sort(function (a, b) { return (a.level || 0) - (b.level || 0); });
    var pos = 0, knownCnt = 0;
    function card() {
      if (pos >= queue.length) {
        app.innerHTML =
          '<div class="breadcrumb"><a href="#" data-nav-page="home">首页</a><span class="sep">/</span><span>生词背诵</span></div>' +
          '<div class="study-done"><div class="study-emoji">🎉</div><h2>本轮背诵完成！</h2>' +
          '<p>共 ' + queue.length + ' 个单词，其中 ' + knownCnt + ' 个已标记为「认识」</p>' +
          '<button class="btn-primary" id="study-again">🔁 再来一轮</button> ' +
          '<button class="btn-back" data-nav-page="vocab">← 返回生词本</button></div>';
        var again = document.getElementById('study-again');
        if (again) again.addEventListener('click', function () { pos = 0; knownCnt = 0; card(); });
        window.scrollTo(0, 0);
        return;
      }
      var v = queue[pos];
      var total = queue.length;
      app.innerHTML =
        '<div class="breadcrumb"><a href="#" data-nav-page="home">首页</a><span class="sep">/</span><span>生词背诵</span></div>' +
        '<div class="study-progress"><div class="study-bar" style="width:' + Math.round((pos / total) * 100) + '%"></div></div>' +
        '<div class="study-counter">第 ' + (pos + 1) + ' / ' + total + ' 个</div>' +
        '<div class="flashcard" id="flashcard">' +
        '<div class="flash-word">' + escapeHtml(v.word) + '</div>' +
        '<div class="flash-meaning" id="flash-meaning" data-hidden="true">《' + escapeHtml(v.meaning) + '》</div>' +
        '<button class="btn-small" id="flash-reveal">👁 显示释义</button>' +
        '</div>' +
        '<div class="study-actions">' +
        '<button class="btn-primary study-known" id="study-known">✅ 我认识</button>' +
        '<button class="btn-secondary study-unknown" id="study-unknown">❌ 还不认识</button>' +
        '</div>' +
        '<button class="btn-back" data-nav-page="vocab">← 退出背诵</button>';
      var reveal = document.getElementById('flash-reveal');
      var meaning = document.getElementById('flash-meaning');
      if (reveal) reveal.addEventListener('click', function () {
        meaning.setAttribute('data-hidden', 'false'); meaning.classList.add('answer-visible');
        reveal.style.display = 'none';
      });
      var kBtn = document.getElementById('study-known');
      var uBtn = document.getElementById('study-unknown');
      function next() { pos++; card(); }
      if (kBtn) kBtn.addEventListener('click', function () { knownCnt++; v.level = Math.min(2, (v.level || 0) + 1); Store.setVocab(list); next(); });
      if (uBtn) uBtn.addEventListener('click', function () { v.level = 0; Store.setVocab(list); next(); });
      window.scrollTo(0, 0);
    }
    card();
  }

  // ---------- 分享成绩卡片（Canvas 生成图片）----------
  function generateShareCard(d) {
    if (typeof document === 'undefined') return;
    var W = 1080, H = 1350;
    var canvas = document.createElement('canvas');
    if (!canvas || !canvas.getContext) { toast('当前环境不支持生成图片'); return; }
    canvas.width = W; canvas.height = H;
    var ctx = canvas.getContext('2d');
    if (!ctx) { toast('当前环境不支持生成图片'); return; }
    var g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, '#1e3a5f'); g.addColorStop(1, '#0d9488');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    ctx.globalAlpha = 0.12; ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(W - 120, 160, 220, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(120, H - 160, 180, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff'; ctx.textAlign = 'center';
    ctx.font = 'bold 56px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText('雅思真题库 · 成绩报告', W / 2, 130);
    ctx.font = '30px "PingFang SC", sans-serif'; ctx.fillStyle = '#cfe9e6';
    ctx.fillText((d.bookTitle || '') + ' ' + (d.testTitle || ''), W / 2, 180);
    ctx.beginPath(); ctx.arc(W / 2, 430, 200, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.12)'; ctx.fill();
    ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 4; ctx.stroke();
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 150px sans-serif';
    ctx.fillText(String(d.overall), W / 2, 470);
    ctx.font = '34px "PingFang SC", sans-serif'; ctx.fillStyle = '#cfe9e6';
    ctx.fillText('预估总分 Band', W / 2, 540);
    var rows = [
      ['🎧 听力', 'Band ' + d.lBand, d.lCorrect + '/' + d.lTotal],
      ['📖 阅读', 'Band ' + d.rBand, d.rCorrect + '/' + d.rTotal],
      ['🔥 连续打卡', d.streak + ' 天', '']
    ];
    var y = 760;
    rows.forEach(function (r) {
      ctx.textAlign = 'left'; ctx.fillStyle = '#ffffff'; ctx.font = 'bold 40px "PingFang SC", sans-serif';
      ctx.fillText(r[0], 140, y);
      ctx.textAlign = 'right'; ctx.font = 'bold 44px sans-serif';
      ctx.fillText(r[1], W - 140, y);
      if (r[2]) { ctx.fillStyle = '#cfe9e6'; ctx.font = '32px sans-serif'; ctx.fillText(r[2], W - 140, y + 44); }
      ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(140, y + 64); ctx.lineTo(W - 140, y + 64); ctx.stroke();
      y += 130;
    });
    ctx.textAlign = 'center'; ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.font = '30px sans-serif';
    ctx.fillText('📘 ielts-exam · 开启你的雅思之路', W / 2, H - 70);
    ctx.fillText(new Date().toLocaleDateString(), W / 2, H - 30);

    var overlay = document.createElement('div'); overlay.className = 'share-overlay';
    var box = document.createElement('div'); box.className = 'share-box';
    var img = document.createElement('img'); img.src = canvas.toDataURL('image/png'); img.className = 'share-img';
    var actions = document.createElement('div'); actions.className = 'share-actions';
    var dl = document.createElement('button'); dl.className = 'btn-primary'; dl.textContent = '⬇ 下载图片';
    dl.addEventListener('click', function () {
      var a = document.createElement('a'); a.href = img.src; a.download = 'ielts-score.png'; a.click();
    });
    var sh = document.createElement('button'); sh.className = 'btn-secondary'; sh.textContent = '📤 分享';
    sh.addEventListener('click', function () {
      if (navigator.share) {
        canvas.toBlob(function (b) { if (!b) return; navigator.share({ files: [new File([b], 'ielts-score.png', { type: 'image/png' })], title: '我的雅思成绩' }).catch(function () {}); });
      } else { toast('当前环境不支持系统分享，请使用下载图片'); }
    });
    var close = document.createElement('button'); close.className = 'btn-back'; close.textContent = '关闭';
    close.addEventListener('click', function () { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); });
    actions.appendChild(dl); actions.appendChild(sh); actions.appendChild(close);
    box.appendChild(img); box.appendChild(actions); overlay.appendChild(box);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function (e) { if (e.target === overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay); });
  }

  // ---------- 口语录音（MediaRecorder + IndexedDB）----------
  var _idb = null;
  function idbOpen(cb) {
    if (typeof window === 'undefined' || !window.indexedDB) { cb(null); return; }
    if (_idb) { cb(_idb); return; }
    try {
      var req = window.indexedDB.open('ielts_rec', 1);
      req.onupgradeneeded = function (e) { var db = e.target.result; if (!db.objectStoreNames.contains('recordings')) db.createObjectStore('recordings'); };
      req.onsuccess = function (e) { _idb = e.target.result; cb(_idb); };
      req.onerror = function () { cb(null); };
    } catch (e) { cb(null); }
  }
  function idbPut(key, blob, cb) {
    idbOpen(function (db) { if (!db) { if (cb) cb(); return; }
      try { var tx = db.transaction('recordings', 'readwrite'); tx.objectStore('recordings').put(blob, key); tx.oncomplete = function () { if (cb) cb(); }; } catch (e) { if (cb) cb(); } });
  }
  function idbGet(key, cb) {
    idbOpen(function (db) { if (!db) { cb(null); return; }
      try { var tx = db.transaction('recordings', 'readonly'); var r = tx.objectStore('recordings').get(key); r.onsuccess = function () { cb(r.result || null); }; r.onerror = function () { cb(null); }; } catch (e) { cb(null); } });
  }
  function idbDel(key, cb) {
    idbOpen(function (db) { if (!db) { if (cb) cb(); return; }
      try { var tx = db.transaction('recordings', 'readwrite'); tx.objectStore('recordings').delete(key); tx.oncomplete = function () { if (cb) cb(); }; } catch (e) { if (cb) cb(); } });
  }
  function bindSpeakRecorder() {
    document.querySelectorAll('.speak-recorder').forEach(function (el) {
      if (el.dataset.bound) return;
      el.dataset.bound = '1';
      var key = el.getAttribute('data-rec-key');
      var recBtn = el.querySelector('.btn-rec');
      var stopBtn = el.querySelector('.btn-stop-rec');
      var delBtn = el.querySelector('.btn-del-rec');
      var playArea = el.querySelector('.rec-playback');
      var status = el.querySelector('.rec-status');
      var mediaRecorder = null, chunks = [], stream = null;
      function setStatus(s) { if (status) status.textContent = s; }
      function showPlayback(blob) {
        if (!playArea) return;
        var url = URL.createObjectURL(blob);
        playArea.innerHTML = '<audio controls src="' + url + '"></audio>';
        if (delBtn) delBtn.style.display = '';
      }
      idbGet(key, function (blob) { if (blob) showPlayback(blob); });
      if (recBtn) recBtn.addEventListener('click', function () {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { toast('当前浏览器不支持录音'); return; }
        recBtn.disabled = true;
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
          stream = s; chunks = [];
          mediaRecorder = new MediaRecorder(s);
          mediaRecorder.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
          mediaRecorder.onstop = function () {
            var blob = new Blob(chunks, { type: mediaRecorder.mimeType || 'audio/webm' });
            idbPut(key, blob, function () { showPlayback(blob); });
            if (stream) stream.getTracks().forEach(function (t) { t.stop(); });
            setStatus('✅ 录音已保存'); recBtn.disabled = false; if (stopBtn) stopBtn.style.display = 'none';
          };
          mediaRecorder.start();
          setStatus('● 录音中…'); if (stopBtn) stopBtn.style.display = '';
        }).catch(function () {
          recBtn.disabled = false;
          setStatus('无法访问麦克风'); toast('麦克风权限被拒绝，请在浏览器设置中允许麦克风');
        });
      });
      if (stopBtn) stopBtn.addEventListener('click', function () { if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop(); });
      if (delBtn) delBtn.addEventListener('click', function () { idbDel(key, function () { if (playArea) playArea.innerHTML = ''; delBtn.style.display = 'none'; setStatus('已删除录音'); }); });
    });
  }

  // ========== 初始化 ==========
  applyTheme();
  bindThemeToggle();
  bindSearch();
  registerSW();
  updateNavCounts();
  renderHome();
})();
