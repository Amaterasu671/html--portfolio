var count = 0;
var numero = 0;
var slide = new Array('Images/image1.jpg', 'Images/image2.jpg', 'Images/image3.jpg', 'Images/image4.jpg');
document.getElementById('imgHaut').style.opacity = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById('slide').src = slide[numero];
    document.getElementById('slide').style.transitionDuration = '5s';
}
function firstLoad(){
  setTimeout(slidePopup, 2000);
}

function slideUp() {
  count++;
  if(count > 6){
    count = 1;
  }
  document.getElementById('inner'+String(count)).style.zIndex = '10';
  document.getElementById('inner'+String(count)).style.opacity = '1';
  document.getElementById('inner'+String(count)).style.transitionDuration = '2s';
  for (var i = 1; i <= 6; i++) {
    if (i != count) {
      document.getElementById('inner'+String(i)).style.zIndex = '0';
      document.getElementById('inner'+String(i)).style.opacity = '0';
      document.getElementById('inner'+String(i)).style.transitionDuration = '2s';
    }
  }
}

function slideDown() {
  count--;
  if(count < 1){
    count = 6;
  }
  document.getElementById('inner'+String(count)).style.zIndex = '10';
  document.getElementById('inner'+String(count)).style.opacity = '1';
  document.getElementById('inner'+String(count)).style.transitionDuration = '2s';
  for (var i = 1; i <= 6; i++) {
    if (i != count) {
      document.getElementById('inner'+String(i)).style.zIndex = '0';
      document.getElementById('inner'+String(i)).style.opacity = '0';
      document.getElementById('inner'+String(i)).style.transitionDuration = '2s';
    }
  }
  document.getElementById('imgHaut').style.animationName = 'animeImgHaut';
  document.getElementById('imgHaut').style.animationDuration = '2s';
  document.getElementById('imgHaut').style.animationFillMode = 'forwards';
}

function slidePopup(element){
  document.getElementById('popupWindow').style.animationName = 'slide';
  document.getElementById('popupWindow').style.animationDuration = '1s';
  document.getElementById('popupWindow').style.animationFillMode = 'forwards';
  document.getElementById('infoBoxContainer').style.display = 'none';
  document.getElementById('infoBoxContainer').style.transitionDuration = '3s';
}
function slideBackPopup() {
  document.getElementById('popupWindow').style.animationName = 'slideBack';
  document.getElementById('popupWindow').style.animationDuration = '1s';
  document.getElementById('popupWindow').style.animationFillMode = 'forwards';
  document.getElementById('infoBoxContainer').style.display = 'flex';
  document.getElementById('infoBoxContainer').style.transitionDuration = '3s';
}
