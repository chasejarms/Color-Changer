

var currentColor;
var colors  = ['red', 'green', 'yellow'];
var buttonContainer = document.getElementById('color-buttons');

init();

function init () {

  buttonContainer.innerHTML = '';

  for (var x=0; x < colors.length; x++) {
    var colorButton = document.createElement('BUTTON');
    colorButton.innerHTML = colors[x];
    colorButton.setAttribute('onclick', 'changeColor(\''+colors[x]+'\')');
    buttonContainer.appendChild(colorButton);
    colorButton.className = colors[x] + " " + "allButtons";
    colorButton.style.backgroundColor = colors[x];
  }
}

var colorContainer = document.getElementById('color-selector');

var listOfColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine", "Azure", "Yellow", "Blue", "Green", "Orange", "Red", "Purple"];
for (var i = 0; i < listOfColors.length; i++) {
  var color = listOfColors[i];
  var optionE1 = document.createElement('OPTION');
  optionE1.textContent = color;
  optionE1.value = color;
  colorContainer.appendChild(optionE1);
}

function changeColor(color) {
  document.body.style.backgroundColor = color;
  currentColor = color;
}

function addNew() {
  var exist = false;
  var newColor = document.getElementById('color-selector').value;
  for (var x=0; x < colors.length; x++) {
    if (newColor === colors[x]) {
      exist = true;
      alert('That color already exists.');
    }
  }
  if (exist === false && newColor !== '') {
    colors.push(newColor);
  }
  init();
}

function removeButton() {
  for (var i = 0; i < colors.length; i++) {
    if (currentColor === colors[i]) {
      colors.splice(i, 1);
    }
  }
  init();
}
