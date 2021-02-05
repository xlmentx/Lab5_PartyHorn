var btn = document.getElementById("honk-btn");
var tBTN = document.getElementById("test");
var snd = document.getElementById("horn-sound");

var val = getRadioVal(document.getElementById('audio-selection'), 'radio-sound');

btn.addEventListener('click', function(){snd.play()}); 
tBTN.addEventListener('click', function(){alert(val)}); 

