var button = document.getElementById("honk-btn");
var airhorn = document.getElementById("horn-sound");

button.addEventListener("click", function() {
    if(document.getElementById("radio-air-horn").checked)
    { alert("radio-air-horn");
      airhorn.play();
    }
    else if(document.getElementById("radio-car-horn").checked)
    {	alert("radio-car-horn");
    }
    else if(document.getElementById("radio-party-horn").checked)
    {	alert("radio-party-horn");
    }
});
