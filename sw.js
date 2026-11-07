var CACHE = 'jafar-v23';
var FILES = ['./', './index.html', './poster.html', './pro.html', './logo.svg', './burj.html', './ism-e-azam.html', './baby-name.html', './compatibility.html', './khwab.html', './wazifa-library.html', './mohabbat-jafar.html', './rizq-jafar.html', './shadi-jafar.html', './istikhara-online.html', './naam-ka-burj.html', './istikhara-ki-dua.html', './loh-e-jafar-tareeqa.html', './abjad-number.html','./qismat-number.html','./top-names.html','./qarz-jafar.html','./naukri-jafar.html','./dushman-hifazat.html','./nazar-bad.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(FILES); }));
});
self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.map(function(k) { if (k !== CACHE) return caches.delete(k); }));
  }).then(function() { return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e) {
  // Network-first so site updates reach returning visitors; cache is the offline fallback.
  e.respondWith(fetch(e.request).then(function(res) {
    var copy = res.clone();
    caches.open(CACHE).then(function(c) { c.put(e.request, copy); });
    return res;
  }).catch(function() { return caches.match(e.request); }));
});
