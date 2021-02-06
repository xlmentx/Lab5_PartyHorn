var airhorn = document.getElementById("radio-air-horn");
var carhorn = document.getElementById("radio-car-horn");
var partyhorn = document.getElementById("radio-party-horn");
var image = document.getElementById("sound-image");
var sound = new Audio('assets/media/audio/air-horn.mp3');
var button = document.getElementById("honk-btn");

airhorn.addEventListener("click", function(){
    image.src = "assets/media/images/air-horn.svg";
    sound = new Audio('assets/media/audio/air-horn.mp3');
});
    
carhorn.addEventListener("click", function(){
    image.src = "assets/media/images/car.svg";
    sound = new Audio('assets/media/audio/car-horn.mp3');
});

partyhorn.addEventListener("click", function(){
    image.src = "assets/media/images/party-horn.svg";
    sound = new Audio('assets/media/audio/party-horn.mp3');
});


button.addEventListener("click", function(event) {
    event.preventDefault();
    sound.play(); 
});
