function calc(op) {
  const x = Number(document.getElementById('a').value);
  const y = Number(document.getElementById('b').value);
  const resEl = document.getElementById('res');

  if (Number.isNaN(x) || Number.isNaN(y)) {
    resEl.innerHTML = 'Informe dois números válidos.';
    return;
  }

  let r;
  switch (op) {
    case '+':
      r = x + y;
      break;
    case '-':
      r = x - y;
      break;
    case '*':
      r = x * y;
      break;
    case '/':
      if (y === 0) {
        resEl.innerHTML = 'Divisão por zero não é permitida.';
        return;
      }
      r = x / y;
      break;
    default:
      resEl.innerHTML = 'Operação inválida.';
      return;
  }

  resEl.innerHTML = `Resultado: ${r}`;
}

