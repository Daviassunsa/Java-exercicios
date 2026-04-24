function media() {
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    const n3 = Number(document.getElementById('n3').value);
    const res = document.getElementById('res');
    const m = (n1 + n2 + n3) / 3;
    res.innerHTML = m >= 7 ? `Aprovado: ${m.toFixed(2)}` : `Reprovado: ${m.toFixed(2)}`;
}