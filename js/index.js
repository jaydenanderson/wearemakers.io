window.onload = function() {
  // Dropdown Menu
  var dropdown = document.querySelectorAll('.js-toggle');
  var dropdownArray = Array.prototype.slice.call(dropdown,0);
  dropdownArray.forEach(function(el){
    var button = el.querySelector('.js-toggle-trigger');

    button.onclick = function(event) {
      this.parentNode.classList.toggle('is-active');
      event.preventDefault();
    };
  });

  window.onscroll = function() {
      if ( window.pageYOffset > 100 ) {
          document.body.classList.add("is-scrolled");
      } else {
          document.body.classList.remove("is-scrolled");
      }
  }
};

function modalWindow(modal) {
  var toggle = modal.getAttribute('data-modal-toggle');
  var toggleBody = document.querySelector('[data-modal-window="' + toggle + '"]');
  var toggleClose = document.querySelector('[data-modal-close="' + toggle + '"]');
  toggleBody.classList.add('is-active');
  document.body.classList.add('is-modal-active');

  toggleClose.onclick = function(event) {
    toggleBody.classList.remove('is-active');
    document.body.classList.remove('is-modal-active');
  };
};