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
      isr = quincena * 0.25
    } else {
      bono = salario * 5
      isr = quincena * 0.15
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

function generaOptions () {
  const tipo = document.getElementsByName('tipo')
  const depto = document.getElementsByName('depto')
  if (tipo[0].checked) {
    depto.options[0].value = 'COM'
    depto.options[0].text = 'Compras'
    depto.options[1].value = 'DIR'
    depto.options[1].text = 'Dirección'
    depto.options[2].value = 'INF'
    depto.options[2].text = 'Informática'
    depto.options[3].value = 'PER'
    depto.options[3].text = 'Personal'
    depto.options[4].value = 'VEN'
    depto.options[4].text = 'Ventas'
  } else {
    depto.options[0].value = 'MAN'
    depto.options[0].text = 'Mantenimiento'
    depto.options[1].value = 'MEN'
    depto.options[1].text = 'Mensajería'
    depto.options[2].value = 'SER'
    depto.options[2].text = 'Servicios Generales'
  }
  calcularNomina()
}
