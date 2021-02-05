var button = document.getElementById("honk-btn");
var airhorn = new Audio('assets/media/audio/air-horn.mp3');
var carhorn = new Audio('assets/media/audio/car-horn.mp3');
var partyhorn = new Audio('assets/media/audio/party-horn.mp3');
button.addEventListener("click", function(event) {
    event.preventDefault();
    
    if(document.getElementById("radio-air-horn").checked)
    {   airhorn.play(); 
    }
    else if(document.getElementById("radio-car-horn").checked)
    {	carhorn.play();
    }
    else if(document.getElementById("radio-party-horn").checked)
    {	partyhorn.play();
    }
});
