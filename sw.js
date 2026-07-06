const CACHE = 'ielts-cache-v1';
const ASSETS = [
  './', './index.html', './manifest.webmanifest', './icon.svg', './css/style.css',
  './js/data.js', './js/data-extra.js',
  './js/data-extra2-1.js', './js/data-extra2-2.js', './js/data-extra2-3.js',
  './js/listening-scripts.js', './js/listening-scripts-extra.js',
  './js/listening-scripts-extra2-1.js', './js/listening-scripts-extra2-2.js', './js/listening-scripts-extra2-3.js',
  './js/reading-passages-1.js', './js/reading-passages-2.js', './js/reading-passages-3.js',
  './js/reading-passages-extra2-1.js', './js/reading-passages-extra2-2.js', './js/reading-passages-extra2-3.js',
  './js/app.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return c.addAll(ASSETS);
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) {
      if (k !== CACHE) return caches.delete(k);
    }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(function (cached) {
    var network = fetch(e.request).then(function (res) {
      if (res && res.status === 200 && res.type === 'basic') {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () { return cached; });
    return cached || network;
  }));
});
