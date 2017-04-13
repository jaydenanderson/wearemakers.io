window.onload = function() {
  window.onscroll = function() {
      if ( window.pageYOffset > 20 ) {
          document.body.classList.add("is-scrolled");
      } else {
          document.body.classList.remove("is-scrolled");
      }
  }
};

function modalWindow(modal, check) {
  var toggle = modal.getAttribute('data-modal-toggle'),
  modalSwitch = modal.getAttribute('data-modal-switch'),
  check = modal.getAttribute('data-modal-auto-check'),
  toggleBody = document.querySelector('[data-modal-window="' + toggle + '"]'),
  toggleClose = document.querySelector('[data-modal-close="' + toggle + '"]'),
  autoCheck = document.getElementById(check),
  checkbox = document.getElementsByTagName('input'),
  checkboxArray = Array.prototype.slice.call(checkbox,0);

  if(modalSwitch == 'true') {
    toggleBody.classList.toggle('is-active');
    if(toggle != 'dropdown') {
      document.body.classList.toggle('is-modal-active');
    }
  }
  else {
    toggleBody.classList.add('is-active');
    document.body.classList.add('is-modal-active');
  };

  for(var i = 0; i < checkboxArray.length; i++){
    checkboxArray[i].checked = false;
  };

  if(autoCheck != null) {
    autoCheck.checked = true;
  };

  if(toggleClose != null) {
    toggleClose.onclick = function(event) {
      toggleBody.classList.remove('is-active');
      document.body.classList.remove('is-modal-active')
    };
  };
};

function isSubmitted(form) {
  form.classList.add('is-submitted');
  form.onclick = function(event) {
    form.classList.remove('is-active');
    document.body.classList.remove('is-modal-active');
  }
};