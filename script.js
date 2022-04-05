const clearButton = document.querySelector('.clear-button');
const display = document.getElementById('display-text');

const backspace = document.getElementById('backspace');

const zeroButton = document.getElementById('zeroNum');
const oneNum = document.getElementById('oneNum');
const twoNum = document.getElementById('twoNum');
const threeNum = document.getElementById('threeNum');
const fourNum = document.getElementById('fourNum');
const fiveNum = document.getElementById('fiveNum');
const sixNum = document.getElementById('sixNum');
const sevenNum = document.getElementById('sevenNum');
const eightNum = document.getElementById('eightNum');
const nineNum = document.getElementById('nineNum');

const divideButton = document.getElementById('divide-button');
const multiplyButton = document.getElementById('multiply-button');
const addButton = document.getElementById('plus-button');
const subtractButton = document.getElementById('subtract-button');
const resultButton = document.querySelector('.result-button');

//adds a click listener to the 'Clear' button
clearButton.addEventListener('click', clearDisplay);

function clearDisplay() {
    //erases anything that is in the display.
    display.textContent = '';
}

//backspace button.
backspace.addEventListener('click', () => {
    //removes the last character of the display array. 
    display.textContent = display.textContent.slice(0, display.textContent.length -1);
})

zeroButton.onclick = () => {
    display.textContent = display.textContent + 0
};
oneNum.onclick = () => {
    display.textContent = display.textContent + 1
};
twoNum.onclick = () => {
    display.textContent = display.textContent + 2
};
threeNum.onclick = () => {
    display.textContent = display.textContent + 3
};
fourNum.onclick = () => {
    display.textContent = display.textContent + 4
};
fiveNum.onclick = () => {
    display.textContent = display.textContent + 5
};
sixNum.onclick = () => {
    display.textContent = display.textContent + 6
};
sevenNum.onclick = () => {
    display.textContent = display.textContent + 7
};
eightNum.onclick = () => {
    display.textContent = display.textContent + 8
};
nineNum.onclick = () => {
    display.textContent = display.textContent + 9
};

divideButton.onclick = () => {
    if (!display.textContent.includes('÷')) {
        display.textContent = display.textContent + '÷';
    }
}

multiplyButton.onclick = () => {
    if (!display.textContent.includes('x')) {
        display.textContent = display.textContent + 'x';
    }
}

addButton.onclick = () => {
    if (display.textContent.includes('-')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('-'))
        let secondNumber = display.textContent.slice(display.textContent.indexOf('-') + 1)
        
        display.textContent = firstNumber - secondNumber;
    }

    if(!display.textContent.includes('+')){
        display.textContent = display.textContent + '+'
    }
};

subtractButton.onclick = () => {
    if (display.textContent.includes('+')) {
        let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('+'));
        let secondNumber = +display.textContent.slice(display.textContent.indexOf('+') + 1);
        display.textContent = firstNumber + secondNumber;
    }

    if(!display.textContent.includes('-')){
        display.textContent = display.textContent + '-'
    }
};

resultButton.onclick = () => {

    if (display.textContent.includes('÷')) {
        let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('÷'));
        let secondNumber = +display.textContent.slice(display.textContent.indexOf('÷') + 1);

        display.textContent = firstNumber / secondNumber;
    }

    if (display.textContent.includes('x')) {
        let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('x'));
        let secondNumber = +display.textContent.slice(display.textContent.indexOf('x') + 1);

        display.textContent = firstNumber * secondNumber;
    }

    if (display.textContent.includes('-')) {
        let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('-'));
        let secondNumber = +display.textContent.slice(display.textContent.indexOf('-') + 1);
        display.textContent = firstNumber - secondNumber;
    }

    if(display.textContent.includes('+')) {
    let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('+'));
    let secondNumber = +display.textContent.slice(display.textContent.indexOf('+') + 1);
    
    display.textContent = firstNumber + secondNumber;
    }
}