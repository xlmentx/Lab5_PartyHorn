var button = document.getElementById("honk-btn");
var airhorn = document.getElementById("horn-sound");
var audio = new Audio("assets/media/audio/air-horn.mp3");
button.addEventListener("click", function() {
    if(document.getElementById("radio-air-horn").checked)
    { alert("radio-air-horn");
      audio.play();
    }
    else if(document.getElementById("radio-car-horn").checked)
    {	alert("radio-car-horn");
    }
    else if(document.getElementById("radio-party-horn").checked)
    {	alert("radio-party-horn");
    }
});
