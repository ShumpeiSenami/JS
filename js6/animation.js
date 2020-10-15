var header = document.getElementById('header');
var degree = 0;
function rotateHeader(){
  degree = degree +6;
  header.style.transform = 'rotateX(' + degree + 'deg)';
}

setInterval(rotateHeader, 20);