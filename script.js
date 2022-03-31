let firstNumber = parseInt(prompt("Choose the first number: "));
if (!isNaN(firstNumber)) {
    let operationChoice = prompt("Choose the operation [+][-][*][/]");
    if (operationChoice == '+' || operationChoice == '-' || operationChoice == '*' || operationChoice == '/') {
        let secondNumber = parseInt(prompt("Choose the second number: "));
        if (!isNaN(secondNumber)) {
            switch (operationChoice) {
                case '+':
                    console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
                    break;
                    
                case '-':
                    console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`)
                    break;
                
                case '*':
                    console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`)
                    break;
                
                    case '/':
                    console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`)
                    break;
            }
        } else {console.error('[ERROR] - Please select a valid value.')}
    } else {console.error('[ERROR] - Please select a valid value.');}
    } else {console.error('[ERROR] - Please select a valid value.')}


