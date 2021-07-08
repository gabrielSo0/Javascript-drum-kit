// Link de tutorial para começar https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API

const hithatDrumSound = document.querySelector(".hit-hat-sound");
const bassDrumSound = document.querySelector(".bass-sound");
const snareDrumSound = document.querySelector(".snare-sound");
const tomDrumSound = document.querySelector(".tom-sound");
const rideDrumSound = document.querySelector(".ride-sound");
document.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "KeyD":
        case "KeyW":
            hithatDrumSound.play();
            break;
        case "KeyR":
        case "KeyJ":
            bassDrumSound.play();
            break;
        case "KeyH":
            snareDrumSound.play();
            break;
        case "KeyA":
            tomDrumSound.play();
            break;
        case "KeyN":
            rideDrumSound.play();
            
    }
    
})