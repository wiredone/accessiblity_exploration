// define a function that adds a tabindex of -1 and sends focus to the container
var skipTo = function() {
    var dest = document.querySelector(this.getAttribute('href'));


    dest.classList.remove('-nofocus');
    dest.focus();
};

// get all the skip links
var skippers = document.querySelectorAll('[data-js="skipper"]');

// loop over the links and bind the click event
for (var i = 0, len = skippers.length; i < len; i++) {
  skippers[i].addEventListener('click', skipTo);
}
