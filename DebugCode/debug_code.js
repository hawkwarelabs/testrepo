function performOperation() {
    // Tomar las entradas del usuario desde los unputs
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Verificar que los inputs sean numeros validos
    if (!isNaN(num1) && !isNaN(num2)){
        // Lleva a cabo la operacion
        let result = multiply(num1, num2);
        // Muestra el resultado
        displayResult(result);
    }   else { 
        displayResult('Please entre a valid numbers');
    }
}

    function multiply(a, b){
        // Introduce un debugger para pausar la ejecucion
        debugger;
        // Multiplica los numeros
        return a * b;
    }

    function displayResult(result){
        // Muestra el resultado en el parrafo
        const resultElement = document.getElementById('result');
        resultElement.textContent = `The result is: $(result)`;
    }