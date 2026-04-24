function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        resultado.innerHTML = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    var imc = peso / (altura * altura);
    var categoria = "";

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc < 25) {
        categoria = "Peso normal";
    } else if (imc < 30) {
        categoria = "Sobrepeso";
    } else if (imc < 35) {
        categoria = "Obesidade grau 1";
    } else if (imc < 40) {
        categoria = "Obesidade grau 2";
    } else {
        categoria = "Obesidade grau 3";
    }

    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Categoria: ${categoria}`;
}

