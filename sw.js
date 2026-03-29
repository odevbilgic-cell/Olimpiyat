const cacheName = 'olimpiyat-v1';
const assets = [
  '/',
  '/index.html',
  '/logom.png',
  '/yuvarlak.png',
  'https://cdn.tailwindcss.com'
];

// Yükleme sırasında dosyaları önbelleğe al
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Çevrimdışı desteği: Önce önbelleğe bak, yoksa ağdan çek
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
