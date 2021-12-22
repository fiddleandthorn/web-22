var el = document.querySelector('.search-toggle');
el.onclick = function() {
  var search = document.querySelector('#search');
  search.classList.toggle('open');
}
