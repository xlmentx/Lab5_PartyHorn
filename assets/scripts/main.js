var btn = document.getElementById("honk-btn");
var tBTN = document.getElementById("test");
var snd = document.getElementById("horn-sound");

var val = getRadioVal(document.getElementById('audio-selection'), 'radio-sound');

button.addEventListener('click', function(){snd.play()}); 
button.addEventListener('click', function(){alert(val)}); 

