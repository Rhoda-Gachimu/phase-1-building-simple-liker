// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById('modal')
errorModal.classList.add('hidden')
const emptyHeart = document.querySelectorAll('span.like-glyph')
emptyHeart.forEach(heart => heart.addEventListener('click', function() {
  mimicServerCall()
  .then(() => onSuccess(heart))
  .catch((error) => showErrorMessage(error))
}))

function onSuccess(heart) {
  if (heart.textContent === FULL_HEART) {
    heart.classList.remove('activated-heart')
    heart.textContent = EMPTY_HEART
  } else {
    heart.classList.add('activated-heart')
    heart.textContent = FULL_HEART
  }
}

function showErrorMessage(error) {
  errorModal.classList.remove('hidden')
  let errorParagraph = document.querySelector('#modal-message')
  errorParagraph.textContent = error
  errorModal.appendChild(errorParagraph)
  setTimeout(function() {
    errorModal.classList.add('hidden')
  }, 3000)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
