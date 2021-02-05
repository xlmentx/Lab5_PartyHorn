var button = document.getElementById("honk-btn");
var airhorn = new Audio("./assets/media/audio/air-horn.mp3");
var carhorn = new Audio("./assets/media/audio/car-horn.mp3");
var partyhorn = new Audio("./assets/media/audio/party-horn.mp3");

button.addEventListener("click", function() {
    if(document.getElementById("radio-air-horn").checked)
    { alert("radio-air-horn");
      airhorn.play();
    }
    else if(document.getElementById("radio-car-horn").checked)
    {	alert("radio-car-horn");
      carhorn.play();
    }
    else if(document.getElementById("radio-party-horn").checked)
    {	alert("radio-party-horn");
      partyhorn.play();
    }
});
