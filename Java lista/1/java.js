document.getElementById('send').addEventListener('click', function() {
    const num = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (isNaN(num)) {
        resultado.innerHTML = 'Por favor, digite um número válido.';
        return;
    }
    for (let i = 0; i <= 10; i++) {
        resultado.innerHTML += `${i} x ${num} = ${i * num}<br>`;
    }
});