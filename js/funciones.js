function calcularNomina () {
  const salario = parseFloat(document.getElementById('salario').value)
  const dias = parseFloat(document.getElementById('dias').value)
  const tipo = document.getElementsByName('tipo')
  if (salario > 0 && dias >= 0) {
    let bono = 0
    let isr = 0
    const quincena = salario * dias
    if (tipo[0].checked) {
      bono = salario * 10
      isr = quincena * .25
    } else {
      bono = salario * 5
      isr = quincena * .15
    }
    if (dias < 15) {
      bono = 0
    }
    const importe = quincena + bono - isr
    document.getElementById('importe').value = importe
  } else {
    if (salario <= 0) {
      window.alert('El valor de Salario es incorrecto')
    }
    if (dias < 0) {
      window.alert('El valor de Días es incorrecto')
    }
    document.getElementById('importe').value = '0'
  }
}
