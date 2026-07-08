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
    // 存在文本选区时不取词（交给高亮/批注工具处理）
    var _sel = window.getSelection && window.getSelection();
    if (_sel && _sel.toString().trim().length) { hidePopup(); return; }
    // 点击交互元素 / 工具面板不取词
    if (e.target.closest && e.target.closest('button, a, input, textarea, select, .no-word-lookup, #comfort-panel, #comfort-btn, #word-popup, #hl-toolbar')) { hidePopup(); return; }
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
    applyHighlights(app);
    if ('MutationObserver' in window) {
      var mo = new MutationObserver(function (muts) {
        muts.forEach(function (m) {
          if (m.addedNodes) m.addedNodes.forEach(function (n) { if (n.nodeType === 1) { injectReadButtons(n); applyHighlights(n); } });
        });
        injectReadButtons(app);
        applyHighlights(app);
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

  // =================== 4) 阅读高亮与批注 ===================
  var HKEY = 'ielts_highlights_v1';
  function getHL() { try { return JSON.parse(localStorage.getItem(HKEY) || '[]'); } catch (e) { return []; } }
  function setHL(a) { try { localStorage.setItem(HKEY, JSON.stringify(a)); } catch (e) {} }
  function removeHLByKey(key) { setHL(getHL().filter(function (h) { return h.key !== key; })); }

  function getTextNodes(root) {
    var out = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    while (w.nextNode()) { if (w.currentNode.nodeValue.length) out.push(w.currentNode); }
    return out;
  }
  function buildText(body) {
    var nodes = getTextNodes(body), str = '', map = [];
    nodes.forEach(function (n) { map.push(str.length); str += n.nodeValue; });
    return { str: str, nodes: nodes, map: map };
  }
  function globalOffset(body, node, offset) {
    var nodes = getTextNodes(body), acc = 0;
    for (var i = 0; i < nodes.length; i++) { if (nodes[i] === node) return acc + offset; acc += nodes[i].nodeValue.length; }
    return acc;
  }
  function countOcc(s, sub) { var c = 0, i = 0; while ((i = s.indexOf(sub, i)) !== -1) { c++; i += sub.length; } return c; }
  function nthOffset(str, sub, occ) { var c = 0, i = 0; while ((i = str.indexOf(sub, i)) !== -1) { c++; if (c === occ) return i; i += sub.length; } return -1; }

  // 按全局字符偏移把 [start,end) 包进 <mark>，跨文本节点也能正确处理
  function wrapOffsetRange(body, start, end, color, note) {
    var t = buildText(body), nodes = t.nodes, acc = 0, segs = [];
    for (var i = 0; i < nodes.length; i++) {
      var len = nodes[i].nodeValue.length, ns = acc, ne = acc + len;
      if (ne <= start) { acc = ne; continue; }
      if (ns >= end) break;
      segs.push({ node: nodes[i], s: Math.max(0, start - ns), e: Math.min(len, end - ns) });
      acc = ne;
    }
    for (var j = segs.length - 1; j >= 0; j--) {
      var r = segs[j], node = r.node;
      var mid = node.splitText(r.s);
      var tail = mid.splitText(r.e - r.s);
      var mark = document.createElement('mark');
      mark.className = 'hl hl-' + color;
      mark.dataset.hid = 'h' + Date.now() + Math.random().toString(36).slice(2, 7);
      if (note) mark.dataset.note = note;
      mid.parentNode.insertBefore(mark, mid);
      mark.appendChild(mid);
    }
  }

  function passageKey(wrapper) {
    var section = wrapper.closest ? wrapper.closest('.exam-section') : null;
    var mod = wrapper.closest ? wrapper.closest('.module-block') : null;
    var mtitle = mod && mod.querySelector ? (mod.querySelector('.module-header h2') || {}).textContent : '';
    var ptitle = section && section.querySelector ? (section.querySelector('.passage-title') || {}).textContent : '';
    return (mtitle || '') + '||' + (ptitle || '');
  }

  // 在已渲染的篇章上重放保存的高亮（页面切换后调用，每篇仅一次）
  function applyHighlights(root) {
    $all('.passage-text-wrapper', root).forEach(function (w) {
      var body = w.querySelector('.passage-text-body');
      if (!body || body.dataset.hlApplied) return;
      body.dataset.hlApplied = '1';
      var key = passageKey(w);
      getHL().filter(function (h) { return h.key === key; }).forEach(function (h) {
        var off = nthOffset(buildText(body).str.toLowerCase(), h.text.toLowerCase(), h.occ);
        if (off !== -1) wrapOffsetRange(body, off, off + h.text.length, h.color, h.note);
      });
    });
  }

  var _pendingSel = null;
  function ensureHLToolbar() {
    if ($('#hl-toolbar')) return;
    var tb = document.createElement('div');
    tb.id = 'hl-toolbar'; tb.className = 'hl-hidden';
    tb.innerHTML =
      '<button class="hl-sw hl-yellow" data-hl-color="yellow" title="黄色高亮"></button>' +
      '<button class="hl-sw hl-green" data-hl-color="green" title="绿色高亮"></button>' +
      '<button class="hl-sw hl-pink" data-hl-color="pink" title="粉色高亮"></button>' +
      '<button class="hl-note-btn" data-hl-act="note" title="添加批注">📝</button>' +
      '<button class="hl-clear-btn" data-hl-act="clear" title="清除本文高亮">🧹</button>';
    document.body.appendChild(tb);
    tb.addEventListener('click', function (e) {
      var sw = e.target.closest('[data-hl-color]');
      var act = e.target.closest('[data-hl-act]');
      if (sw) { doHighlight(sw.getAttribute('data-hl-color')); hideHLToolbar(); }
      else if (act) {
        var a = act.getAttribute('data-hl-act');
        if (a === 'note') { addNoteToSelection(); hideHLToolbar(); }
        else if (a === 'clear') { clearCurrentPassage(); hideHLToolbar(); }
      }
    });
  }
  function hideHLToolbar() { var tb = $('#hl-toolbar'); if (tb) tb.className = 'hl-hidden'; }

  function showHLToolbar(body, start, end, text, rect) {
    _pendingSel = { body: body, start: start, end: end, text: text };
    var tb = $('#hl-toolbar'); if (!tb) return;
    tb.className = 'hl-show';
    var tw = 230, th = 46;
    tb.style.left = Math.min(Math.max(8, rect.left + rect.width / 2 - tw / 2), window.innerWidth - tw - 8) + 'px';
    tb.style.top = Math.min(Math.max(8, rect.bottom + 8), window.innerHeight - th - 8) + 'px';
  }
  function curOcc(p) { return countOcc(buildText(p.body).str.toLowerCase().slice(0, p.start).toLowerCase(), p.text.toLowerCase()) + 1; }

  function doHighlight(color) {
    var p = _pendingSel; if (!p) return;
    var w = p.body.closest('.passage-text-wrapper'), key = passageKey(w), occ = curOcc(p);
    var list = getHL().filter(function (h) { return !(h.key === key && h.text.toLowerCase() === p.text.toLowerCase() && h.occ === occ); });
    wrapOffsetRange(p.body, p.start, p.end, color, '');
    list.push({ key: key, text: p.text, occ: occ, color: color, note: '' });
    setHL(list); _pendingSel = null;
  }
  function addNoteToSelection() {
    var p = _pendingSel; if (!p) return;
    var note = window.prompt('为选中内容添加批注：', '');
    if (note === null) return;
    var w = p.body.closest('.passage-text-wrapper'), key = passageKey(w), occ = curOcc(p);
    var list = getHL().filter(function (h) { return !(h.key === key && h.text.toLowerCase() === p.text.toLowerCase() && h.occ === occ); });
    wrapOffsetRange(p.body, p.start, p.end, 'yellow', note);
    list.push({ key: key, text: p.text, occ: occ, color: 'yellow', note: note });
    setHL(list); _pendingSel = null;
  }
  function clearCurrentPassage() {
    var p = _pendingSel; if (!p) return;
    var w = p.body.closest('.passage-text-wrapper'), key = passageKey(w);
    $all('.hl', p.body).forEach(function (m) {
      var parent = m.parentNode;
      while (m.firstChild) parent.insertBefore(m.firstChild, m);
      parent.removeChild(m); parent.normalize();
    });
    removeHLByKey(key); _pendingSel = null;
  }

  document.addEventListener('mouseup', function () {
    setTimeout(function () {
      var sel = window.getSelection && window.getSelection();
      if (!sel || !sel.rangeCount) { hideHLToolbar(); return; }
      var text = sel.toString();
      if (!text || text.indexOf('\n') !== -1) { hideHLToolbar(); return; }
      var range = sel.getRangeAt(0);
      var sc = range.startContainer, ec = range.endContainer;
      var body = (sc.nodeType === 3 ? sc.parentNode : sc).closest ? (sc.nodeType === 3 ? sc.parentNode : sc).closest('.passage-text-body') : null;
      var endBody = (ec.nodeType === 3 ? ec.parentNode : ec).closest ? (ec.nodeType === 3 ? ec.parentNode : ec).closest('.passage-text-body') : null;
      if (!body || body !== endBody) { hideHLToolbar(); return; }
      var start = globalOffset(body, sc, range.startOffset);
      var end = globalOffset(body, ec, range.endOffset);
      if (end - start !== text.length) { hideHLToolbar(); return; }
      showHLToolbar(body, start, end, text, range.getBoundingClientRect());
    }, 10);
  });
  window.addEventListener('scroll', hideHLToolbar, true);

  // ---------- 启动 ----------
  function init() {
    applyComfort();
    ensureComfortBtn();
    ensureHLToolbar();
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
