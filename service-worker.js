var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/main.css',

        './assets/img/hero-img.png',
        './assets/img/favicon.png',
        './assets/img/logo.png',

        './assets/img/menu/menu-entradas/menu-item-1.png',
        './assets/img/menu/menu-entradas/menu-item-2.png',
        './assets/img/menu/menu-entradas/menu-item-3.png',
        './assets/img/menu/menu-entradas/menu-item-4.png',
        './assets/img/menu/menu-entradas/menu-item-5.png',
        './assets/img/menu/menu-entradas/menu-item-6.png',

        './assets/img/menu/menu-cafe-da-manha/menu-item-1.png',
        './assets/img/menu/menu-cafe-da-manha/menu-item-2.png',
        './assets/img/menu/menu-cafe-da-manha/menu-item-3.png',
        './assets/img/menu/menu-cafe-da-manha/menu-item-4.png',
        './assets/img/menu/menu-cafe-da-manha/menu-item-5.png',
        './assets/img/menu/menu-cafe-da-manha/menu-item-6.png',

        './assets/img/menu/menu-almoco/menu-item-1.png',
        './assets/img/menu/menu-almoco/menu-item-2.png',
        './assets/img/menu/menu-almoco/menu-item-3.png',
        './assets/img/menu/menu-almoco/menu-item-4.png',
        './assets/img/menu/menu-almoco/menu-item-5.png',
        './assets/img/menu/menu-almoco/menu-item-6.png',

        './assets/img/menu/janta/menu-item-1.png',
        './assets/img/menu/janta/menu-item-2.png',
        './assets/img/menu/janta/menu-item-3.png',
        './assets/img/menu/janta/menu-item-4.png',
        './assets/img/menu/janta/menu-item-5.png',
        './assets/img/menu/janta/menu-item-6.png',

        './assets/img/icon/144.png',
        './assets/img/icon/152.png',
        './assets/img/icon/167.png',
        './assets/img/icon/180.png',
        './assets/img/icon/192.png',
        './assets/img/icon/256.png',
        './assets/img/icon/512.png',

        './assets/img/reservation.jpg',
        
        './assets/js/main.js',

      ]))
  );
});
self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
      self.skipWaiting();
    }
  });
  
  self.addEventListener('fetch', function (event) {
    //Atualizacao internet
    event.respondWith(async function () {
      try {
        return await fetch(event.request);
      } catch (err) {
        return caches.match(event.request);
      }
    }());
  });
  