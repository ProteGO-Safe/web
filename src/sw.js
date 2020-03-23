importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL('/index.html'),
  {
    blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/]
  }
);
