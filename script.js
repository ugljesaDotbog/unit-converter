
let inputField = document.getElementById("text-input");

const submitBtn = document.getElementById("submit-btn");
let length = document.getElementById("length-output");
let volume = document.getElementById("volume-output");
let mass = document.getElementById("mass-output");


function lengthFunction() {
    let inputValue = inputField.value;
    let metertofeet = inputValue * 3.28084;
    let feettometer = inputValue * 0.3048;

    length.innerHTML +=`<br>${inputValue}m = ${metertofeet} feet || ${inputValue}ft = ${feettometer} meter`
}


function volumeFunction() {
    let inputValue = inputField.value;
    let litertogallon = inputValue * 0.264172;
    let gallontoliter = inputValue * 3.785;

    volume.innerHTML +=`<br>${inputValue}l = ${Math.round(litertogallon)} gallon || ${inputValue}gallon = ${Math.round(gallontoliter)}l`
}

function massFunction() {
    let inputValue = inputField.value;
    let kgtopound = inputValue * 2.2;
    let poundtokg = inputValue / 2.2;

    mass.innerHTML +=`<br>${inputValue}kg = ${Math.round(kgtopound)} pounds || ${inputValue}pounds = ${Math.round(poundtokg)}kg`
}

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    length.innerHTML = "";
    volume.innerHTML = "";
    mass.innerHTML = "";
    lengthFunction();
    volumeFunction();
    massFunction();
    inputField.value = "";
})