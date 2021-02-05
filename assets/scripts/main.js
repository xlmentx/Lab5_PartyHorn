var btn = document.getElementById("honk-btn");
var tBTN = document.getElementById("test");
var snd = document.getElementById("horn-sound");

var val = getRadioVal(document.getElementById("audio-selection"), "radio-sound");

btn.addEventListener('click', snd.play()); 
tBTN.addEventListener('click', alert(val)); 

