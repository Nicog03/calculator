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
    //sets the display contet as 0 if the display is showing an error message
    display.textContent == 'error' ? display.textContent = 0 :
    //OTHERWISE:
    //it removes the last character but only if the number of characters in the display is higher 
    //than 1.
    display.textContent.length > 1 ?
    display.textContent = display.textContent.slice(0, display.textContent.length -1) :
    //if it isn't it'll set the display to zero.
    display.textContent = '0'
})

//when clicking the zero button:
//if the calc screen is displaying 0, it won't do anything;
//if the calc screen is displaying 'error', it'll substitute it for 0;
//otherwise, it'll add a zero to the display string.
zeroButton.onclick = () => {
    display.textContent == 0 ? display.textContent = display.textContent + '' : 
    display.textContent == 'error' ? display.textContent = 0 :
    display.textContent = display.textContent + 0
};
//when clicking the 'one' button:
//if the calc screen is displaying 0 or 'error', it'll substitute it for 1;
//otherwise, it'll add a 1 to the display string.
oneNum.onclick = () => {
    display.textContent == 0 || display.textContent == 'error' ? 
    display.textContent = 1 : display.textContent = display.textContent + 1
};
//when clicking the 'two' button:
//if the calc screen is displaying 0 or 'error', it'll substitute it for 2;
//otherwise, it'll add a 2 to the display string.
twoNum.onclick = () => {
    display.textContent == 0 || display.textContent == 'error' ? 
    display.textContent = 2 : display.textContent = display.textContent + 2
};
//when clicking the 'three' button:
//if the calc screen is displaying 0 or 'error', it'll substitute it for 3;
//otherwise, it'll add a 3 to the display string.
threeNum.onclick = () => {
    display.textContent == 0 || display.textContent == 'error' ? 
    display.textContent = 3 : display.textContent = display.textContent + 3
};
//when clicking the 'four' button:
//if the calc screen is displaying 0 or 'error', it'll substitute it for 4;
//otherwise, it'll add a 4 to the display string.
fourNum.onclick = () => {
    display.textContent == 0 || display.textContent == 'error' ? 
    display.textContent = 4 : display.textContent = display.textContent + 4
};
//when clicking the 'five' button:
//if the calc screen is displaying 0 or 'error', it'll substitute it for 5;
//otherwise, it'll add a 5 to the display string.
fiveNum.onclick = () => {
    display.textContent == 0 || display.textContent == 'error' ? 
    display.textContent = 5 : display.textContent = display.textContent + 5
};
//when clicking the 'six' button:
//if the calc screen is displaying 0 or 'error', it'll substitute it for 6;
//otherwise, it'll add a 6 to the display string.
sixNum.onclick = () => {
    display.textContent == 0 || display.textContent == 'error' ? 
    display.textContent = 6 : display.textContent = display.textContent + 6
};
//when clicking the 'seven' button:
//if the calc screen is displaying 0 or 'error', it'll substitute it for 7;
//otherwise, it'll add a 7 to the display string.
sevenNum.onclick = () => {
    display.textContent == 0 || display.textContent == 'error' ? 
    display.textContent = 7 : display.textContent = display.textContent + 7
};
//when clicking the 'eight' button:
//if the calc screen is displaying 0 or 'error', it'll substitute it for 8;
//otherwise, it'll add a 8 to the display string.
eightNum.onclick = () => {
    display.textContent == 0 || display.textContent == 'error' ? 
    display.textContent = 8 : display.textContent = display.textContent + 8
};
//when clicking the 'nine' button:
//if the calc screen is displaying 0 or 'error', it'll substitute it for 9;
//otherwise, it'll add a 9 to the display string.
nineNum.onclick = () => {
    display.textContent == 0 || display.textContent == 'error' ? 
    display.textContent = 9 : display.textContent = display.textContent + 9
};

//======When you click the multiply button======
divideButton.onclick = () => {
    //if the display is showing an error message
    //it'll substitute it for a ÷ character
    if (display.textContent == 'error') {
        display.textContent = '÷'
    }
    //if the display already contains a division character,
    //it'll resolve it first, and then add another division character.
    //if the second number in the division is zero it returns an error.
    if (display.textContent.includes('÷')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('÷'));
        let secondNumber = display.textContent.slice(display.textContent.indexOf('÷') + 1);
        secondNumber==0 ? display.textContent = 'error' :
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
    //if the string isn't displaying an error message
    //or if it doesn't already have a plus character
    if (display.textContent != 'error' && !display.textContent.includes('÷')) {
        display.textContent = display.textContent + '÷';
    }
}
//======When you click the multiply button======
multiplyButton.onclick = () => {
    //if the display is showing an error message
    //it'll substitute it for a x character
    if (display.textContent == 'error') {
        display.textContent = 'x'
    }
    //if the display already contains a division character, 
    //it'll resolve it first, and then add a multiply character.
    //if the second number in the division is zero it returns an error.
    if (display.textContent.includes('÷')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('÷'));
        let secondNumber = display.textContent.slice(display.textContent.indexOf('÷') + 1);
        secondNumber==0 ? display.textContent = 'error' :
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
    //if the string isn't displaying an error message
    //or if it doesn't already have a multiplication character
    if (display.textContent != 'error' && !display.textContent.includes('x')) {
        display.textContent = display.textContent + 'x';
    }

}

//======When you click the plus button======
addButton.onclick = () => {
    //if the display is showing an error message
    //it'll substitute it for a + character
    if (display.textContent == 'error') {
        display.textContent = '+'
    }
    //if the display already contains a division character, 
    //it'll resolve it first, and the add the plus sign.
    //if the second number in the division is zero it returns an error.
    if (display.textContent.includes('÷')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('÷'));
        let secondNumber = display.textContent.slice(display.textContent.indexOf('÷') + 1);
        secondNumber==0 ? display.textContent = 'error' :
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
    //if the string isn't displaying an error message
    //or if it doesn't already have a plus character
    if (display.textContent != 'error' && !display.textContent.includes('+')){
        display.textContent = display.textContent + '+'
    }
};

//======When you click the minus button=====
subtractButton.onclick = () => {
    //if the display is showing an error message
    //it'll substitute it for a - character
    if (display.textContent == 'error') {
        display.textContent = '-'
    }
     //if the display already contains a division character, 
    //it'll resolve it first, and the add the minus sign.
    //if the second number in the division is zero it returns an error.
    if (display.textContent.includes('÷')) {
        let firstNumber = display.textContent.slice(0, display.textContent.indexOf('÷'));
        let secondNumber = display.textContent.slice(display.textContent.indexOf('÷') + 1);
        secondNumber==0 ? display.textContent = 'error' :
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
    //it'll add the minus character to the display string but only
    //but only if the string isn't displaying an error message
    //or if it doesn't already have a minus character
    if(display.textContent != 'error' && !display.textContent.includes('-')){
        display.textContent = display.textContent + '-'
    }
};

resultButton.onclick = () => {

    if (display.textContent.includes('÷')) {
        let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('÷'));
        let secondNumber = +display.textContent.slice(display.textContent.indexOf('÷') + 1);

        !secondNumber ? display.textContent = "error" : 

        display.textContent = (firstNumber / secondNumber).toFixed(1);
    }

    if (display.textContent.includes('x')) {
        let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('x'));
        let secondNumber = +display.textContent.slice(display.textContent.indexOf('x') + 1);

        display.textContent = (firstNumber * secondNumber).toFixed(1);
    }

    if (display.textContent.includes('-') && display.textContent.charAt(0) != '-') {
        let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('-'));
        let secondNumber = +display.textContent.slice(display.textContent.indexOf('-') + 1);
        display.textContent = firstNumber - secondNumber;
    }

    if(display.textContent.includes('+')) {
        //if the first number in the display string DON'T HAVE a - as a predecessor,
        //this code will be executed.
        if (!display.textContent.charAt(1) == '-') {
            let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('+'));
            let secondNumber = +display.textContent.slice(display.textContent.indexOf('+') + 1);
        
            display.textContent = firstNumber + secondNumber;
        //if it has, this code will be executed instead.
        } else {
            let firstNumber = +display.textContent.slice(0, display.textContent.indexOf('+'));
            let secondNumber = +display.textContent.slice(display.textContent.indexOf('+') + 1);
            
            display.textContent = firstNumber + secondNumber;
        }
    }
}