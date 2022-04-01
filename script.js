const clearButton = document.querySelector('.clear-button');
const display = document.getElementById('display-text');

//adds a click listener to the 'Clear' button
clearButton.addEventListener('click', clearDisplay);

function clearDisplay() {
    //erases anything that is in the display.
    display.textContent = '';
}