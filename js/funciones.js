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
  const $depto = document.querySelector('#depto')

  // Primero limpia el select
  for (let i = $depto.options.length; i >= 0; i--) {
    $depto.remove(i)
  }
  // Dependiendo el tipo seleccionado crea las opciones
  if (tipo[0].checked) {
    agregar($depto, 'COM', 'Compras')
    agregar($depto, 'DIR', 'Dirección')
    agregar($depto, 'INF', 'Informática')
    agregar($depto, 'PER', 'Personal')
    agregar($depto, 'VEN', 'Ventas')
  } else {
    agregar($depto, 'MAN', 'Mantenimiento')
    agregar($depto, 'MEN', 'Mensajería')
    agregar($depto, 'SER', 'Servicios')
  }
  calcularNomina()
}

function agregar ($depto, valor, texto) {
  const option = document.createElement('option')
  option.value = valor
  option.text = texto
  $depto.appendChild(option)
}
