const PRECACHE_ASSETS = ['/assets/', '/src/'];

const ASSETS_CACHE = 'assets-cache-v1';

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Listener for the installation event - pre-caches our assets list on service worker install.
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(ASSETS_CACHE);
      cache.addAll(PRECACHE_ASSETS);
    })(),
  );
});
