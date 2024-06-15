function button1Function() {
    let input1 = parseFloat(document.getElementById('input1').value);
    let input2 = parseFloat(document.getElementById('input2').value);
    let input3 = parseFloat(document.getElementById('input3').value);
    let result = '';

    if (input1 < input3) {
        let sum = input1 + input2 + input3;
        result = `Suma: ${input1} + ${input2} + ${input3} = ${sum}`;
    } else if (input2 === 0) {
        let difference = Math.abs(input1 - input3);
        result = `Resta: |${input1} - ${input3}| = ${difference}`;
    } else if (input1 === input2) {
        let product = input1 * input2 * input3;
        result = `Multiplicación: ${input1} * ${input2} * ${input3} = ${product}`;
    }

    document.getElementById('result').innerText = result;
}

function button2Function() {
    let input1 = parseFloat(document.getElementById('input1').value);
    let input2 = parseFloat(document.getElementById('input2').value);
    let input3 = parseFloat(document.getElementById('input3').value);
    let sum = input1 + input2 + input3;
    let result = '';

    if (sum > 10) {
        for (let i = 0; i < sum; i++) {
            result += `Multiplicación: ${input1} * ${input2} - ${input3} = ${(input1 * input2) - input3}\n`;
        }
    } else {
        for (let i = 0; i < sum; i++) {
            result += `Suma: ${input1} + ${input2} + ${input3} = ${input1 + input2 + input3}\n`;
        }
    }

    document.getElementById('result').innerText = result;
}
