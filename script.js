const clearButton = document.querySelector('.clear-button');
const display = document.getElementById('display-text');

const backspace = document.getElementById('backspace');

//adds a click listener to the 'Clear' button
clearButton.addEventListener('click', clearDisplay);

function clearDisplay() {
    //erases anything that is in the display.
    display.textContent = '';
}

backspace.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, display.textContent.length -1);
})