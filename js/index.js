window.onload = function() {
  // Dropdown Menu
  var dropdown = document.querySelectorAll('.js-toggle'),
  dropdownArray = Array.prototype.slice.call(dropdown,0);
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

function modalWindow(modal, check) {
  var toggle = modal.getAttribute('data-modal-toggle'),
  check = modal.getAttribute('data-modal-auto-check'),
  toggleBody = document.querySelector('[data-modal-window="' + toggle + '"]'),
  toggleClose = document.querySelector('[data-modal-close="' + toggle + '"]'),
  autoCheck = document.getElementById(check);
  toggleBody.classList.add('is-active'),
  checkbox = document.getElementsByTagName('input'),
  checkboxArray = Array.prototype.slice.call(checkbox,0);

  for(var i = 0; i < checkboxArray.length; i++){
    checkboxArray[i].checked = false;
  };

  document.body.classList.add('is-modal-active');
  if(autoCheck != null) {
    autoCheck.checked = true;
  }

  toggleClose.onclick = function(event) {
    toggleBody.classList.remove('is-active');
    document.body.classList.remove('is-modal-active');
  };
};

function isSubmitted(form) {
  form.classList.add('is-submitted');
  form.onclick = function(event) {
    form.classList.remove('is-active');
    document.body.classList.remove('is-modal-active');
  }
};