var button = document.getElementById("honk-btn");
var airhorn = document.getElementById("horn-sound");
var audio = new Audio('assets/media/audio/party-horn.mp3');
button.addEventListener("click", function() {
    if(document.getElementById("radio-air-horn").checked)
    { 
      audio.play();
    }
    else if(document.getElementById("radio-car-horn").checked)
    {	alert("radio-car-horn");
    }
    else if(document.getElementById("radio-party-horn").checked)
    {	alert("radio-party-horn");
    }
});
