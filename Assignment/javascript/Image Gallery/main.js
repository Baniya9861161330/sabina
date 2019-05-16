var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
var i = 1;
for (i=1; i<=5; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic'+i+'.jpg');
  thumbBar.appendChild(newImage);

  newImage.onclick = function(clk){
    var imagesource = clk.target.getAttribute('src');
    imageDisplay(imagesource);
  }
}

function imageDisplay(imagesource) {
  displayedImage.setAttribute('src', imagesource);
}
 

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
  var buttontype = btn.getAttribute('class'); 

  if(buttontype === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
  else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}