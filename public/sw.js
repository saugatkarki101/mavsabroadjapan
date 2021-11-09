//This is for service worker functions . Must be in public directory so that
// it's scope is all over the files
//if any changes are made to sw.js file, it needs to be reloaded
//or else you will have two sw's running in "Application" tab
//if you want to see your sw running and activated and updated, click
// skipWaiting in "Service Workers"
self.addEventListener('install', function(event)
{
  console.log('[Service Worker] Installing Service Worker ... ', event);

});

self.addEventListener('activate', function(event)
{
  console.log('[Service Worker] Activating Service Worker ... ', event);
});

self.addEventListener('fetch', function(event)
{
  //console.log('[Service Worker] Fetching... ', event);
  event.respondWith(fetch(event.request));
});

self.addEventListener("install", e => {

    //this function will take in a promise
    e.waitUntil(
        //we will open a cache called static. If this cache doesn't exist,
        //it will be created which will then contain cached static resources.
        caches.open("static").then(cache=>{
            return cache.addAll(["./", "./src/css/style.css", "./src/images/logoCropped-removebg.png"]);
        })
        //Now, the service worker won't be considered installed until those promises
        //up there are settled. So, once everything is cached, sw will be installed.
    );
});

//This will run when there's a fetch request.
self.addEventListener("fetch", e => {
    //Event object cotains a request. So, we are simply printing out the URL of that request
    console.log("Intercepting fetch request for: ${e.request.url}")
});
