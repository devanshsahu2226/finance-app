const CACHE_NAME = 'finance-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/mutual-funds.html',
  '/nps.html',
  '/style.css',
  '/home.css',
  '/mutual-funds.css',
  '/nps.css',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});