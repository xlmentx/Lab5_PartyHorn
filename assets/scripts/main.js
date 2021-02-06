var volumeImage = document.getElementById("volume-image");
var volumeNumber = document.getElementById("volume-number");
var volumeSlider = document.getElementById("volume-slider");
var airhorn = document.getElementById("radio-air-horn");
var carhorn = document.getElementById("radio-car-horn");
var partyhorn = document.getElementById("radio-party-horn");
var image = document.getElementById("sound-image");
var sound = new Audio('assets/media/audio/air-horn.mp3');
var button = document.getElementById("honk-btn");

volumeNumber.addEventListener("change", function(){
    volumeSlider.value = volumeNumber.value;
    updateVolumeIcon();
});

volumeSlider.addEventListener("change", function(){
    volumeNumber.value = volumeSlider.value;
    updateVolumeIcon();
});

function updateVolumeIcon()
{   button.disabled = false;
    if(volumeNumber.value == 0)
    {   button.disabled = true;
        volumeImage.src = "assets/media/icons/volume-level-0.svg";
    }   
    else if(volumeNumber.value <= 33)
    {   volumeImage.src = "assets/media/icons/volume-level-1.svg";
    }   
    else if(volumeNumber.value <= 66)
    {   volumeImage.src = "assets/media/icons/volume-level-2.svg";
    }   
    else
    {   volumeImage.src = "assets/media/icons/volume-level-3.svg";
    }   
}

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
    sound.volume = volumeNumber.value/100;
    sound.play(); 
});
