// Ciclo de vida del SW
self.addEventListener('install', event => {

    console.log('SW Install: Instalando SW');    

    const instalacion = new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1000);

    });

    event.waitUntil( instalacion );
});

self.addEventListener('activate', event => {

    console.log('Service Worker Monserrat Portillo Morales');

});

self.addEventListener('fetch', event => {

    console.log( 'SW fetch:', event.request.url );

});