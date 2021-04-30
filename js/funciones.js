function calcularNomina () {
  const salario = parseFloat(document.getElementById('salario').value)
  const dias = parseFloat(document.getElementById('dias').value)
  if (salario > 0 && dias > 0) {
    const importe = salario * dias
    document.getElementById('importe').value = Number.parseFloat(importe)
  }
}
