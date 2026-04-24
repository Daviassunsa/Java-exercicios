function calcularIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    const resultado = document.getElementById('resultado');
    if (isNaN(idade) || idade < 0) {
        resultado.innerHTML = 'Por favor, digite uma idade válida.';
        return;
    }
    let categoria;
    if (idade <= 12) {
        categoria = 'Criança';
    } else if (idade <= 17) {
        categoria = 'Adolescente';
    } else if (idade <= 59) {
        categoria = 'Adulto';
    } else {
        categoria = 'Idoso';
    }
    resultado.innerHTML = `Você é classificado como: ${categoria}`;
}
