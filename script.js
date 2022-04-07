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
    //erases everything and display zero
    display.textContent = 0;
}

//backspace button.
backspace.addEventListener('click', () => {
    //removes the last character but only if the number of characters in the display is higher 
    // than 1.
    if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, display.textContent.length -1);
    //if it isn't it'll set the display to zero.
    } else {display.textContent = '0'}
})

//when clicking the zero button:
//if the calc screen is displaying 0, it won't do anything;
//otherwise, it'll add a zero to the display string.
zeroButton.onclick = () => {
    display.textContent == 0 ? display.textContent = display.textContent + '' : 
    display.textContent = display.textContent + 0
};
//when clicking the 'one' button:
//if the calc screen is displaying 0, it'll substitute it for 1;
//otherwise, it'll add a 1 to the display string.
oneNum.onclick = () => {
    display.textContent == 0 ? display.textContent = 1 : display.textContent = display.textContent + 1
};
//when clicking the 'two' button:
//if the calc screen is displaying 0, it'll substitute it for 2;
//otherwise, it'll add a 2 to the display string.
twoNum.onclick = () => {
    display.textContent == 0 ? display.textContent = 2 : display.textContent = display.textContent + 2
};
//when clicking the 'three' button:
//if the calc screen is displaying 0, it'll substitute it for 3;
//otherwise, it'll add a 3 to the display string.
threeNum.onclick = () => {
    display.textContent == 0 ? display.textContent = 3 : display.textContent = display.textContent + 3
};
//when clicking the 'four' button:
//if the calc screen is displaying 0, it'll substitute it for 4;
//otherwise, it'll add a 4 to the display string.
fourNum.onclick = () => {
    display.textContent == 0 ? display.textContent = 4 : display.textContent = display.textContent + 4
};
fiveNum.onclick = () => {
    display.textContent == 0 ? display.textContent = 5 : display.textContent = display.textContent + 5
};
sixNum.onclick = () => {
    display.textContent == 0 ? display.textContent = 6 : display.textContent = display.textContent + 6
};
sevenNum.onclick = () => {
    display.textContent == 0 ? display.textContent = 7 : display.textContent = display.textContent + 7
};
eightNum.onclick = () => {
    display.textContent == 0 ? display.textContent = 8 : display.textContent = display.textContent + 8
};
nineNum.onclick = () => {
    display.textContent == 0 ? display.textContent = 9 : display.textContent = display.textContent + 9
};

//======When you click the multiply button======
divideButton.onclick = () => {
    //if the display already contains a division character,
    //it'll resolve it first, and then add another division character.
    if (display.textContent.includes('÷')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('÷'));
        let secondNumber = display.textContent.slice(display.textContent.indexOf('÷') + 1);
        display.textContent = (firstNumber / secondNumber).toFixed(1);
    }
    //if the display already contains a multiply character, 
    //it'll resolve it first, and then add the division sign.
    if (display.textContent.includes('x')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('x'));
        let secondNumber = display.textContent.slice(display.textContent.indexOf('x') + 1);
        display.textContent = (firstNumber * secondNumber).toFixed(1);
    }
    //if the display already contains a plus sign, 
    //it'll resolve it first, and then add division character.
    if (display.textContent.includes('+')) {
        let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('+'))
        let secondNumber = +display.textContent.slice(display.textContent.indexOf('+') + 1)
        display.textContent = firstNumber + secondNumber;
    }
    //if the display already contains a minus character, 
    //it'll resolve it first, and then add the division sign.
    if (display.textContent.includes('-')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('-'))
        let secondNumber = display.textContent.slice(display.textContent.indexOf('-') + 1)
        display.textContent = firstNumber - secondNumber;
    }
    //it'll add a plus sign to the display array, but only 
    // if the last character of the array is different from a plus sign.
    if (display.textContent.charAt(display.textContent.length - 1) != '÷') {
        display.textContent = display.textContent + '÷';
    }
}
//======When you click the multiply button======
multiplyButton.onclick = () => {
    //if the display already contains a division character, 
    //it'll resolve it first, and then add a multiply character.
    if (display.textContent.includes('÷')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('÷'));
        let secondNumber = display.textContent.slice(display.textContent.indexOf('÷') + 1);
        display.textContent = firstNumber / secondNumber;
    }
    //if the display already contains a multiply character, 
    //it'll resolve it first, and then add another multiply character.
    if (display.textContent.includes('x')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('x'));
        let secondNumber = display.textContent.slice(display.textContent.indexOf('x') + 1);
        display.textContent = firstNumber * secondNumber;
    }
    //if the display already contains a plus sign, 
    //it'll resolve it first, and then add a multiply character.
    if (display.textContent.includes('+')) {
        let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('+'))
        let secondNumber = +display.textContent.slice(display.textContent.indexOf('+') + 1)
        display.textContent = firstNumber + secondNumber;
    }
    //if the display already contains a minus character, 
    //it'll resolve it first, and then add a multiply character.
    if (display.textContent.includes('-')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('-'))
        let secondNumber = display.textContent.slice(display.textContent.indexOf('-') + 1)
        display.textContent = firstNumber - secondNumber;
    }
     //it'll add a multiply character to the display array, but only 
    // if the last character of the array is different from a multiply character.
    if (display.textContent.charAt(display.textContent.length - 1) != 'x') {
        display.textContent = display.textContent + 'x';
    }

}

//======When you click the plus button======
addButton.onclick = () => {
    //if the display already contains a division character, 
    //it'll resolve it first, and the add the plus sign.
    if (display.textContent.includes('÷')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('÷'));
        let secondNumber = display.textContent.slice(display.textContent.indexOf('÷') + 1);
        display.textContent = (firstNumber / secondNumber).toFixed(1);
    }
    //if the display already contains a multiply character, 
    //it'll resolve it first, and the add the plus sign.
    if (display.textContent.includes('x')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('x'));
        let secondNumber = display.textContent.slice(display.textContent.indexOf('x') + 1);
        display.textContent = (firstNumber * secondNumber).toFixed(1);
    }
    //if the display already contains a plus sign, 
    //it'll resolve it first, and the add another plus sign.
    if (display.textContent.includes('+')) {
        let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('+'))
        let secondNumber = +display.textContent.slice(display.textContent.indexOf('+') + 1)
        display.textContent = firstNumber + secondNumber;
    }
    //if the display already contains a minus character, 
    //it'll resolve it first, and the add the plus sign.
    if (display.textContent.includes('-')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('-'))
        let secondNumber = display.textContent.slice(display.textContent.indexOf('-') + 1)
        display.textContent = firstNumber - secondNumber;
    }
    //it'll add a plus sign to the display array, but only 
    // if the last character of the array is different from a plus sign.
    if (display.textContent.charAt(display.textContent.length - 1) != '+'){
        display.textContent = display.textContent + '+'
    }
};

//======When you click the minus button=====
subtractButton.onclick = () => {
     //if the display already contains a division character, 
    //it'll resolve it first, and the add the minus sign.
    if (display.textContent.includes('÷')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('÷'));
        let secondNumber = display.textContent.slice(display.textContent.indexOf('÷') + 1);
        display.textContent = (firstNumber / secondNumber).toFixed(1);
    }
    //if the display already contains a multiply character, 
    //it'll resolve it first, and the add the minus sign.
    if (display.textContent.includes('x')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('x'));
        let secondNumber = display.textContent.slice(display.textContent.indexOf('x') + 1);
        display.textContent = (firstNumber * secondNumber).toFixed(1);
    }
    //if the display already contains a plus character, 
    //it'll resolve it first, and the add the minus sign.
    if (display.textContent.includes('+')) {
        let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('+'));
        let secondNumber = +display.textContent.slice(display.textContent.indexOf('+') + 1);
        display.textContent = firstNumber + secondNumber;
    }
    //if the display already contains a minus character, 
    //it'll resolve it first, and the add another minus character.
    if (display.textContent.includes('-')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('-'))
        let secondNumber = display.textContent.slice(display.textContent.indexOf('-') + 1)
        display.textContent = firstNumber - secondNumber;
    }
    //it'll add the minus character to the display string
    // but only if the last cahracter of the array is not not a minus character.
    if(!display.textContent.includes('-')){
        display.textContent = display.textContent + '-'
    }
};

resultButton.onclick = () => {

    if (display.textContent.includes('÷')) {
        let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('÷'));
        let secondNumber = +display.textContent.slice(display.textContent.indexOf('÷') + 1);

        display.textContent = (firstNumber / secondNumber).toFixed(1);
    }

    if (display.textContent.includes('x')) {
        let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('x'));
        let secondNumber = +display.textContent.slice(display.textContent.indexOf('x') + 1);

        display.textContent = (firstNumber * secondNumber).toFixed(1);
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