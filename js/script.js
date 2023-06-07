function calculadora() {

    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let operador = document.getElementById('operador').value;

    switch(operador) {
        case '+':
            document.getElementById('resultado').innerHTML = (n1 + n2)
            break
        case '-':
            document.getElementById('resultado').innerHTML = (n1 - n2)
            break
        case '/':
            document.getElementById('resultado').innerHTML = (n1 / n2)
            break
        case '*':
            document.getElementById('resultado').innerHTML = (n1 * n2)
            break
    }
}

