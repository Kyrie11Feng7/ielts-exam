/*
 * 雅思真题库 · 英语学习助手（自包含模块）
 * 功能：
 *   1) 划词查词：在阅读/题目/写作/口语文本中单击单词，弹出释义弹窗
 *      —— 🔊 真人发音(TTS) + 英文释义(dictionaryapi.dev) + 中文释义(mymemory) + 例句 + 一键加入生词本
 *   2) 阅读舒适化：字号 / 行距 / 阅读主题(默认·护眼·夜间) 调节并持久化
 *   3) 文章朗读：为每个阅读篇章注入「🔊 朗读」按钮，整段朗读(TTS)
 * 与现有「生词本」共用 localStorage 键 ielts_vocab_v1，单词直接出现在生词本/闪卡/测试中。
 */
(function () {
  'use strict';

  // 浏览器环境守卫：本模块仅在前端运行（依赖 document / window / speechSynthesis）
  if (typeof document === 'undefined' || typeof window === 'undefined') return;

  // ---------- 小工具 ----------
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }
  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var canSpeak = ('speechSynthesis' in window);
  function speak(text, btn) {
    if (!canSpeak || !text) return;
    if (window.__passageSpeaking && window.__passageSpeaking !== btn) {
      window.speechSynthesis.cancel();
    }
    if (window.speechSynthesis.speaking && window.__passageSpeaking === btn) {
      window.speechSynthesis.cancel();
      window.__passageSpeaking = null;
      if (btn) btn.textContent = '🔊 朗读';
      return;
    }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-GB'; u.rate = 0.9; u.pitch = 1;
    u.onend = function () { window.__passageSpeaking = null; if (btn) btn.textContent = '🔊 朗读'; };
    u.onerror = function () { window.__passageSpeaking = null; if (btn) btn.textContent = '🔊 朗读'; };
    window.__passageSpeaking = btn;
    if (btn) btn.textContent = '⏹ 停止';
    window.speechSynthesis.speak(u);
  }

  // ---------- 生词本（与现有系统共用 localStorage）----------
  var VKEY = 'ielts_vocab_v1';
  function getVocab() { try { return JSON.parse(localStorage.getItem(VKEY) || '[]'); } catch (e) { return []; } }
  function setVocab(a) { try { localStorage.setItem(VKEY, JSON.stringify(a)); } catch (e) {} }
  function hasWord(w) {
    w = (w || '').trim().toLowerCase();
    return getVocab().some(function (v) { return v.word.toLowerCase() === w; });
  }
  function addWord(word) {
    word = (word || '').trim();
    if (!word) return 'empty';
    if (hasWord(word)) return 'dup';
    var arr = getVocab();
    arr.unshift({ word: word, cn: '', en: '', phonetic: '', example: '', date: todayStr(), level: 0, loading: false });
    setVocab(arr);
    // 异步拉取真实释义并回写，与现有生词本自动查词保持一致
    fetchWordInfo(word).then(function (info) {
      var a = getVocab(), hit = null;
      for (var i = 0; i < a.length; i++) { if (a[i].word.toLowerCase() === word.toLowerCase()) { hit = a[i]; break; } }
      if (hit) {
        if (info.phonetic) hit.phonetic = info.phonetic;
        if (info.enDef) hit.en = info.enDef;
        if (info.example) hit.example = info.example;
        if (info.cn) hit.cn = info.cn;
        setVocab(a);
      }
    });
    return 'ok';
  }

  // ---------- 真实释义查询（免费、无需密钥，与站点 autoFillDefinition 同源）----------
  function fetchWordInfo(rawWord) {
    return new Promise(function (resolve) {
      var word = (rawWord || '').trim();
      var out = { phonetic: '', enDef: '', example: '', cn: '' };
      var done = 0, total = 2, settled = false;
      function finish() { if (settled) return; settled = true; resolve(out); }
      if (!word) { finish(); return; }
      var enUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(word.toLowerCase());
      var cnUrl = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(word) + '&langpair=en%7Czh-CN';
      function tick() { if (++done >= total) finish(); }
      fetch(enUrl).then(function (r) { return r.ok ? r.json() : Promise.reject(); }).then(function (data) {
        try {
          var arr = Array.isArray(data) ? data : [data];
          var ph = arr[0].phonetic;
          if (!ph && arr[0].phonetics) { for (var i = 0; i < arr[0].phonetics.length; i++) { if (arr[0].phonetics[i].text) { ph = arr[0].phonetics[i].text; break; } } }
          if (ph) out.phonetic = ph;
          var parts = [], ex = '';
          (arr[0].meanings || []).slice(0, 3).forEach(function (m) {
            var pos = m.partOfSpeech ? '[' + m.partOfSpeech + '] ' : '';
            (m.definitions || []).slice(0, 2).forEach(function (d) { parts.push(pos + d.definition); if (!ex && d.example) ex = d.example; });
          });
          out.enDef = parts.join('  ');
          out.example = ex;
        } catch (e) {}
        tick();
      }).catch(function () { tick(); });
      fetch(cnUrl).then(function (r) { return r.json(); }).then(function (data) {
        try {
          var t = data && data.responseData && data.responseData.translatedText;
          if (t && !/MYMEMORY WARNING/.test(t)) out.cn = t;
        } catch (e) {}
        tick();
      }).catch(function () { tick(); });
      setTimeout(function () { if (done < total) { done = total; finish(); } }, 9000);
    });
  }

  // =================== 1) 划词查词弹窗 ===================
  var popup = null;
  function ensurePopup() {
    if (popup) return popup;
    popup = document.createElement('div');
    popup.id = 'word-popup';
    popup.className = 'wp-hidden';
    popup.innerHTML =
      '<div class="wp-head">' +
        '<span class="wp-word"></span>' +
        '<button class="wp-speak" title="真人发音" aria-label="发音">🔊</button>' +
        '<button class="wp-close" title="关闭" aria-label="关闭">✕</button>' +
      '</div>' +
      '<div class="wp-ph"></div>' +
      '<div class="wp-body"><div class="wp-loading">查询中…</div></div>' +
      '<div class="wp-actions"><button class="wp-add">＋ 加入生词本</button></div>';
    document.body.appendChild(popup);
    popup.querySelector('.wp-close').addEventListener('click', hidePopup);
    popup.querySelector('.wp-speak').addEventListener('click', function () {
      var w = popup.getAttribute('data-word');
      if (w) speak(w);
    });
    popup.querySelector('.wp-add').addEventListener('click', function () {
      var w = popup.getAttribute('data-word');
      if (!w) return;
      var r = addWord(w);
      var btn = popup.querySelector('.wp-add');
      if (r === 'dup') { btn.textContent = '✓ 已在生词本'; btn.disabled = true; toast('该词已在生词本'); }
      else if (r === 'ok') { btn.textContent = '✓ 已加入'; btn.disabled = true; toast('已加入生词本：' + w); }
    });
    return popup;
  }
  function hidePopup() { if (popup) { popup.className = 'wp-hidden'; } }

  function wordAtPoint(x, y) {
    var textNode = null, offset = 0;
    if (document.caretRangeFromPoint) {
      var r = document.caretRangeFromPoint(x, y);
      if (r) { textNode = r.startContainer; offset = r.startOffset; }
    } else if (document.caretPositionFromPoint) {
      var p = document.caretPositionFromPoint(x, y);
      if (p) { textNode = p.offsetNode; offset = p.offset; }
    }
    if (!textNode || textNode.nodeType !== 3) return null;
    var text = textNode.textContent;
    if (offset > text.length) offset = text.length;
    var start = offset, end = offset;
    while (start > 0 && /[A-Za-z'’\-]/.test(text[start - 1])) start--;
    while (end < text.length && /[A-Za-z'’\-]/.test(text[end])) end++;
    var word = text.slice(start, end).replace(/['’\-]+$/, '').replace(/^['’\-]+/, '');
    if (!/^[A-Za-z]{2,}$/.test(word)) return null;
    return word;
  }

  function showWordAt(word, x, y) {
    var p = ensurePopup();
    p.setAttribute('data-word', word);
    p.querySelector('.wp-word').textContent = word;
    p.querySelector('.wp-ph').textContent = '';
    p.querySelector('.wp-body').innerHTML = '<div class="wp-loading">查询中…</div>';
    var addBtn = p.querySelector('.wp-add');
    if (hasWord(word)) { addBtn.textContent = '✓ 已在生词本'; addBtn.disabled = true; }
    else { addBtn.textContent = '＋ 加入生词本'; addBtn.disabled = false; }
    p.className = 'wp-show';
    // 定位（fixed，限制在视口内）
    var pw = 320, ph = 220;
    var left = Math.min(Math.max(8, x + 12), window.innerWidth - pw - 8);
    var top = Math.min(Math.max(8, y + 14), window.innerHeight - ph - 8);
    p.style.left = left + 'px';
    p.style.top = top + 'px';
    fetchWordInfo(word).then(function (info) {
      if (p.getAttribute('data-word') !== word) return; // 已切换到别的词
      if (info.phonetic) p.querySelector('.wp-ph').textContent = '/ ' + info.phonetic + ' /';
      var html = '';
      if (info.cn) html += '<div class="wp-cn">' + escapeHtml(info.cn) + '</div>';
      if (info.enDef) html += '<div class="wp-en"><span class="wp-tag">EN</span> ' + escapeHtml(info.enDef) + '</div>';
      if (info.example) html += '<div class="wp-ex">“' + escapeHtml(info.example) + '”</div>';
      if (!html) html = '<div class="wp-muted">（未获取到网络释义，可点击 🔊 听发音）</div>';
      p.querySelector('.wp-body').innerHTML = html;
    });
  }

  document.addEventListener('click', function (e) {
    // 点击弹窗内部不处理
    if (e.target.closest && e.target.closest('#word-popup')) return;
    // 点击交互元素 / 工具面板不取词
    if (e.target.closest && e.target.closest('button, a, input, textarea, select, .no-word-lookup, #comfort-panel, #comfort-btn, #word-popup')) { hidePopup(); return; }
    // 仅在左键单击时取词
    if (e.button !== 0) return;
    var word = null;
    var sel = window.getSelection && window.getSelection();
    if (sel && sel.toString().trim() && sel.toString().trim().indexOf(' ') === -1 && /^[A-Za-z]{2,}$/.test(sel.toString().trim())) {
      word = sel.toString().trim();
    } else {
      word = wordAtPoint(e.clientX, e.clientY);
    }
    if (word) { showWordAt(word, e.clientX, e.clientY); }
    else { hidePopup(); }
  }, true);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hidePopup(); });
  window.addEventListener('scroll', hidePopup, true);

  // =================== 2) 阅读舒适化 ===================
  var CKEY = 'ielts_comfort_v1';
  function loadComfort() {
    var def = { fontSize: 16, lineHeight: 1.9, theme: 'default' };
    try { var v = JSON.parse(localStorage.getItem(CKEY)); if (v) return Object.assign(def, v); } catch (e) {}
    return def;
  }
  function saveComfort(c) { try { localStorage.setItem(CKEY, JSON.stringify(c)); } catch (e) {} }
  function applyComfort() {
    var c = loadComfort();
    var root = document.documentElement;
    root.style.setProperty('--reading-font-size', c.fontSize + 'px');
    root.style.setProperty('--reading-line-height', String(c.lineHeight));
    var app = document.getElementById('app');
    if (app) app.setAttribute('data-reading-theme', c.theme);
  }
  function ensureComfortPanel() {
    if ($('#comfort-panel')) return;
    var panel = document.createElement('div');
    panel.id = 'comfort-panel';
    panel.className = 'cf-hidden';
    panel.innerHTML =
      '<div class="cf-title">📖 阅读舒适化</div>' +
      '<div class="cf-row"><label>字号 <span id="cf-fs-val">16</span>px</label>' +
        '<input type="range" id="cf-fs" min="14" max="26" step="1"></div>' +
      '<div class="cf-row"><label>行距 <span id="cf-lh-val">1.9</span></label>' +
        '<input type="range" id="cf-lh" min="1.4" max="2.6" step="0.1"></div>' +
      '<div class="cf-row"><label>阅读主题</label>' +
        '<div class="cf-themes">' +
          '<button data-theme="default" class="cf-theme">默认</button>' +
          '<button data-theme="sepia" class="cf-theme">护眼</button>' +
          '<button data-theme="night" class="cf-theme">夜间</button>' +
        '</div></div>' +
      '<div class="cf-tip">设置自动保存，下次访问依然生效</div>';
    document.body.appendChild(panel);
    var c = loadComfort();
    var fs = $('#cf-fs'), lh = $('#cf-lh');
    fs.value = c.fontSize; lh.value = c.lineHeight;
    $('#cf-fs-val').textContent = c.fontSize;
    $('#cf-lh-val').textContent = c.lineHeight;
    function syncThemeBtns() {
      var cur = loadComfort().theme;
      $all('.cf-theme').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-theme') === cur); });
    }
    syncThemeBtns();
    fs.addEventListener('input', function () {
      var c = loadComfort(); c.fontSize = parseInt(fs.value, 10); saveComfort(c); applyComfort();
      $('#cf-fs-val').textContent = fs.value;
    });
    lh.addEventListener('input', function () {
      var c = loadComfort(); c.lineHeight = parseFloat(lh.value); saveComfort(c); applyComfort();
      $('#cf-lh-val').textContent = parseFloat(lh.value).toFixed(1);
    });
    $all('.cf-theme').forEach(function (b) {
      b.addEventListener('click', function () {
        var c = loadComfort(); c.theme = b.getAttribute('data-theme'); saveComfort(c); applyComfort(); syncThemeBtns();
      });
    });
  }
  function ensureComfortBtn() {
    if ($('#comfort-btn')) return;
    var btn = document.createElement('button');
    btn.id = 'comfort-btn';
    btn.className = 'float-btn';
    btn.title = '阅读舒适化（字号/行距/主题）';
    btn.textContent = 'Aa';
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      ensureComfortPanel();
      var p = $('#comfort-panel');
      p.className = (p.className === 'cf-hidden') ? 'cf-show' : 'cf-hidden';
    });
    document.body.appendChild(btn);
  }

  // =================== 3) 文章朗读按钮注入 ===================
  function injectReadButtons(root) {
    $all('.passage-text-wrapper', root).forEach(function (w) {
      if (w.getAttribute('data-tts-injected')) return;
      w.setAttribute('data-tts-injected', '1');
      var btn = document.createElement('button');
      btn.className = 'btn-passage-tts';
      btn.type = 'button';
      btn.textContent = '🔊 朗读';
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var body = w.querySelector('.passage-text-body');
        var text = body ? body.innerText : w.innerText;
        speak(text, btn);
      });
      var header = w.querySelector('.passage-text-header') || w;
      header.insertBefore(btn, header.firstChild);
    });
  }

  // 监听 #app 内容变化，动态注入朗读按钮（应对路由切换/重渲染）
  function observeApp() {
    var app = document.getElementById('app');
    if (!app) return;
    injectReadButtons(app);
    if ('MutationObserver' in window) {
      var mo = new MutationObserver(function (muts) {
        muts.forEach(function (m) {
          if (m.addedNodes) m.addedNodes.forEach(function (n) { if (n.nodeType === 1) injectReadButtons(n); });
        });
        injectReadButtons(app);
      });
      mo.observe(app, { childList: true, subtree: true });
    }
  }

  // ---------- 轻量 toast（复用站点样式；若不存在则自建）----------
  function toast(msg) {
    var t = $('#toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast'; t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('toast-show');
    clearTimeout(window.__toastT);
    window.__toastT = setTimeout(function () { t.classList.remove('toast-show'); }, 1800);
  }

  // ---------- 启动 ----------
  function init() {
    applyComfort();
    ensureComfortBtn();
    observeApp();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  // 暴露给调试
  window.StudyTools = { addWord: addWord, hasWord: hasWord, speak: speak, applyComfort: applyComfort };
})();
