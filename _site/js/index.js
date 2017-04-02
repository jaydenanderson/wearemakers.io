// Dropdown Menu
var dropdown = document.querySelectorAll('.js-toggle');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
  var button = el.querySelector('.js-toggle-trigger');

  button.onclick = function(event) {
    this.parentNode.classList.toggle('is-active');
    event.preventDefault();
  };
})