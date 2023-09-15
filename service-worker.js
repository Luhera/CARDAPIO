var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './sample-inner-page-contatos.html',

        './sample-inner-page-menu.html',

        './sample-inner-page-reserva.html',

        './assets/css/main.css',
        
        './assets/js/main.js',

        './assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
        './assets/vendor/aos/aos.js',
        './assets/vendor/glightbox/js/glightbox.min.js',
        './assets/vendor/purecounter/purecounter_vanilla.js',
        './assets/vendor/swiper/swiper-bundle.min.js',
        './assets/vendor/php-email-form/validate.js',
        './assets/vendor/bootstrap-icons/bootstrap-icons.css',

        './assets/img/menu/menu-almoco/menu-item-1.png',
        './assets/img/menu/menu-almoco/menu-item-2.png',
        './assets/img/menu/menu-almoco/menu-item-3.png',
        './assets/img/menu/menu-almoco/menu-item-4.png',
        './assets/img/menu/menu-almoco/menu-item-5.png',
        './assets/img/menu/menu-almoco/menu-item-6.png',

        './assets/img/menu/menu-cafe-da-manha/menu-item-1.png',
        './assets/img/menu/menu-cafe-da-manha/menu-item-2.png',
        './assets/img/menu/menu-cafe-da-manha/menu-item-3.png',
        './assets/img/menu/menu-cafe-da-manha/menu-item-4.png',
        './assets/img/menu/menu-cafe-da-manha/menu-item-5.png',
        './assets/img/menu/menu-cafe-da-manha/menu-item-6.png',
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

    //Atualizacao cache
    /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
     );*/

  });
  
