function performCalculation() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let operation = document.getElementById('operation').value;
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultElement = document.getElementById('result').querySelector('span');

    let result;

    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 !== 0) {
                result = num1 / num2;
            } else {
                resultElement.textContent = "Divade with Zerro is not alowed!";
                return;
            }
            break;
        default:
            resultElement.textContent = "ERROR operation!";
            return;
    }

    resultElement.textContent = result;
}
