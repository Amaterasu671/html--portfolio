var nbClickName = 0;
var nbClickStudies = 0;
var nbClickExperience = 0;
var nbClickSkills = 0;
var nbClickRealisations = 0;
var nbClickHobbies = 0;

function Zoom(elt){
  var elem = document.getElementById(elt);
  /*elem.style.transform = "scale(1.1, 1.1)";*/
  /*if(elem === document.getElementById('nameBox')){
    nbClickName++;
    if(nbClickName%2 != 0)
      TakePlace('0%', '0%', '0%', '0%', 'absolute', 1,'scale(1.5, 1.5)', elem);
    else if (nbClickName%2 == 0) {
      elem.style.transform = "scale(1, 1)";
      TakePlace('55%', '-25%', '0%', '0%', 'absolute', 0,'scale(1, 1)', elem);
    }
  }
  else if(elem == document.getElementById('studiesBox')){
    nbClickStudies++;
    if(nbClickStudies%2 != 0)
      TakePlace('0% !important', '0% !important', '0%', '0%', 'absolute', 1,'scale(1.5, 1.5)', elem);
    else if (nbClickStudies%2 == 0) {
      elem.style.transform = "scale(1, 1)";
      TakePlace('0%', '-75%', '0%', '0%', 'absolute', 0, 'scale(1, 1)', elem);
    }
  }
  else if(elem == document.getElementById('experienceBox')){
    nbClickExperience++;
    if(nbClickExperience%2 != 0)
      TakePlace('0%', '0%', '0%', '0%', 'absolute', 1,'scale(1.5, 1.5)', elem);
    else if (nbClickExperience%2 == 0) {
      elem.style.transform = "scale(1, 1)";
      TakePlace('-55%', '-25%', '0%', '0%', 'absolute', 0, 'scale(1, 1)', elem);
    }
  }
  else if(elem == document.getElementById('skillsBox')){
    nbClickSkills++;
    if(nbClickSkills%2 != 0)
      TakePlace('0%', '0%', '0%', '0%', 'absolute', 1,'scale(1.5, 1.5)', elem);
    else if (nbClickSkills%2 == 0) {
      elem.style.transform = "scale(1, 1)";
      TakePlace('-55%', '25%', '0%', '0%', 'absolute', 0, 'scale(1, 1)', elem);
    }
  }
  else if(elem == document.getElementById('realisationsBox')){
    nbClickRealisations++;
    if(nbClickRealisations%2 != 0)
      TakePlace('0%', '0%', '0%', '0%', 'absolute', 1,'scale(1.5, 1.5)', elem);
    else if (nbClickRealisations%2 == 0) {
      elem.style.transform = "scale(1, 1)";
      TakePlace('0%', '75%', '0%', '0%', 'absolute', 0, 'scale(1, 1)', elem);
    }
  }
  else if(elem == document.getElementById('hobbiesBox')){
    nbClickHobbies++;
    if(nbClickHobbies%2 != 0)
      TakePlace('0%', '0%', '0%', '0%', 'absolute', 1,'scale(1.5, 1.5)', elem);
    else if (nbClickHobbies%2 == 0) {
      elem.style.transform = "scale(1, 1)";
      TakePlace('55%', '25%', '0%', '0%', 'absolute', 0, 'scale(1, 1)', elem);
    }
  }*/
}

function TakePlace(top, left, right, bottom, position, zIndex,transform, element){
  element.style.transform = transform;
  element.style.top = top;
  element.style.left = left;
  element.style.right = right;
  element.style.bottom = bottom;
  element.style.position = position;
  element.style.zIndex = zIndex;
  element.style.margin = 'auto';
}
