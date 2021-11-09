// import { deferredPrompt } from './app.js';
var TripGuideButton = document.querySelector('#trip');
function openTripGuide() {
  if(deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(function(choiceResult){
      console.log(choiceResult.outcome);

      if(choiceResult.outcome === 'dismissed'){
        console.log('User cancelled installation');
      }
      else {
        console.log('User added to home screen');
      }
    });
    deferredPrompt = null;
  }
}

//whenever user clicks trip guide, prompt them to install the webapp.
if(TripGuideButton){
  TripGuideButton.addEventListener('click', openTripGuide);
}
