let inputBox = document.getElementById('inputbox');
let display = document.getElementById('display');


// adding a keypress event listener to the inputbox
inputBox.addEventListener('keypress', function(e) {
    display.innerText = "you have Pressed" + e.key
})