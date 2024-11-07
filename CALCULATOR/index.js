const calculateButton = document.getElementById('calculateButton');

function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    
    const operation = document.getElementById('operation').value;
    const resultElement = document.getElementById('result');


    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = 'Пожалуйста, введите оба числа.';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                resultElement.textContent = 'Деление на ноль невозможно.';
                return;
            }
            result = number1 / number2;
            break;
    }

    resultElement.textContent = `Результат: ${result}`;
}



calculateButton.addEventListener('click', calculate);