/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const buttonEL = document.getElementById("convert-btn")
const inputValue = document.getElementById("value-h1")
const lengthEL = document.getElementById("length-box")
const volumeEL = document.getElementById("volume-box")
const massEL = document.getElementById("mass-box")

buttonEL.addEventListener('click', function(){
    let value = inputValue.value
    displayLength(value)
    displayVolume(value)
    displayMass(value)
})

function displayLength(number){
    let feet = (number * 3.281).toFixed(3)
    let meters = (number / 3.281).toFixed(3)
    lengthEL.innerHTML += `<p id="numbers"> ${number} meters = ${feet} feet
    | ${number} feet = ${meters} meters </p>`
}

function displayVolume(number){
    let gallons = (number * 0.264).toFixed(3)
    let liters = (number / 0.264).toFixed(3)
    volumeEL.innerHTML += `<p id="numbers"> ${number} liters = ${gallons} gallons
    | ${number} gallons = ${liters} liters </p>`
}

function displayMass(number){
    let pounds = (number * 2.204).toFixed(3)
    let kilos = (number / 2.204).toFixed(3)
    massEL.innerHTML += `<p id="numbers"> ${number} kilos = ${pounds} pounds
    | ${number} pounds = ${kilos} kilos </p>`
}
