function TakePlace(element, top, left, right, bottom, position){
  element.style.top = top;
  element.style.left = left;
  element.style.right = right;
  element.style.bottom = bottom;
  element.style.position = position;
}

function ScatterInfoBoxes(){
  TakePlace(document.getElementById('nameBox'), '55%', '-25%', '0%', '0%', 'absolute');
  TakePlace(document.getElementById('studiesBox'), '0%', '-75%', '0%', '0%', 'absolute');
  TakePlace(document.getElementById('experienceBox'), '-55%', '-25%', '0%', '0%', 'absolute');
  TakePlace(document.getElementById('skillsBox'), '-55%', '25%', '0%', '0%', 'absolute');
  TakePlace(document.getElementById('realisationsBox'), '0%', '75%', '0%', '0%', 'absolute');
  TakePlace(document.getElementById('hobbiesBox'), '55%', '25%', '0%', '0%', 'absolute');
}
