var button = document.getElementById("honk-btn");
var airhorn = new Audio('assets/media/audio/air-horn.mp3');
var carhorn = new Audio('assets/media/audio/car-horn.mp3');
var partyhorn = new Audio('assets/media/audio/party-horn.mp3');

var air = document.getElementById("radio-air-horn");
var car = document.getElementById("radio-car-horn");
var party = document.getElementById("radio-party-horn");
var sound;

air.addEventListener("click", function(){
    sound=airhorn
});
    
car.addEventListener("click", function(){
    sound=carhorn
});

party.addEventListener("click", function(){
    sound=partyhorn
});


button.addEventListener("click", function(event) {
    event.preventDefault();
    sound.play(); 
});
