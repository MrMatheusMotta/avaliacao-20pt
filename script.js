// Produzindo uma calculadora avançada :
function calculadora() {

    let operador = prompt("Digite o operador matemático ( + , - , * , / , % , **): ");

    while (operador !== "+" && operador !== "-" && operador !== "*" &&
        operador !== "/" && operador !== "%" && operador !== "**") {
        operador = prompt("Digite o operador matemático (+, -, *, /, %, **):");

        if (operador !== "+" && operador !== "-" && operador !== "*" &&
            operador !== "/" && operador !== "%" && operador !== "**") {
            alert("Operador inválido! Tente novamente.");
        }
    }
    let num1 = Number(prompt("Digite um número: "));
    let num2 = Number(prompt("Digite outro número: "));
    let resultado = 0;
    if (operador == "+") {

        num1 + num2
        resultado = num1 + num2;
        document.writeln(`A soma de ${num1} com ${num2} é igual a ${resultado}`)
    } else if (operador == "-") {

        num1 - num2
        resultado = num1 - num2;
        document.writeln(`A subtração de ${num1} com ${num2} é igual a ${resultado}`)
    } else if (operador == "*") {

        num1 * num2
        resultado = num1 * num2;
        document.writeln(`A multiplicação de ${num1} com ${num2} é igual a ${resultado}`)
    } else if (operador == "/") {

        num1 / num2
        resultado = num1 / num2;
        document.writeln(`A divisão de ${num1} com ${num2} é igual a ${resultado}`)
    } else if (operador == "%") {

        num1 % num2
        resultado = num1 % num2;
        document.writeln(`O resto da divisão de ${num1} com ${num2} é igual a ${resultado}`)
    } else {

        num1 ** num2
        resultado = num1 ** num2;
        document.writeln(`${num1} elevado a ${num2} é igual a ${resultado}`)
    }
}

function idade() {
    let idade = Number(prompt("Informe sua idade !"));
    while (isNaN(idade) || idade <= 0) {
        idade = Number(prompt("Informe sua idade !"));
        if (idade !== Number)
            alert("Digite uma idade válida")
    }
    if (idade <= 12) {
        document.writeln("Criança!")

    } else if (idade <= 12) {
        document.writeln("Criança!")

    }else if (idade > 12 && idade < 17) {
    document.writeln("Adolescente!")

    }else if (idade >= 18 && idade < 59) {
    document.writeln("Adulto!")

    }else {
    document.writeln("Idoso!")

    }
}

function tabuada() {









}