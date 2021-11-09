//Code for progressive handling

var deferredPrompt;
//register service worker
//checks if the service workers are supported by the web browser
//sw.js = url for the service worker
if('serviceWorker' in navigator){
  navigator.serviceWorker
  .register('/sw.js')
  .then(function() {
    console.log('Service worker registered');
  })
  .catch(function(err){
    console.log(err);
  });
}
else {
  console.log('Service worker not registered');
}

// prompt installation of webapp to user
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

//export {
//  deferredPrompt
//};
