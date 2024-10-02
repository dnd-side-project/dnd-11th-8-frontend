/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'my-cache';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache
        .addAll([`/`, `/index.html`, `static/js/bundle.js`])
        .then(() => self.skipWaiting());
    }),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: '/public/favicon-96x96.png',
    lang: 'ko',
    renotify: true,
    requireInteraction: true,
    vibrate: [100, 50, 100],
  };
  event.waitUntil(self.registration.showNotification('Blooming', options));
});
