const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let numbers = [];
let theEquation;

function calculate(button) {
    const value = button.textContent;
    

    if (value === 'clear') {
        numbers = [];
        screenDisplay.textContent = '0';
    } else if(value === '=') {
        screenDisplay.textContent = eval(theEquation);
        console.log(numbers);
        if(numbers.length === 0)
        screenDisplay.textContent = '0';
    }else{
        numbers.push(value);
        theEquation = numbers.join('');
        screenDisplay.textContent = theEquation;
    }    
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)));


