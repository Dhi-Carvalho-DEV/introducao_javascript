var titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

var pacientes = document.querySelectorAll('.paciente')

for (i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]

  var peso = paciente.querySelector('.info-peso').textContent
  var altura = paciente.querySelector('.info-altura').textContent
  var tdImc = paciente.querySelector('.info-imc')

  var pesoValido = true
  var alturaValida = true

  if (peso <= 0 || peso >= 1000) {
    pesoValido = false
    tdImc.textContent = 'Peso Inválido'
    paciente.classList.add('paciente-invalido')
  }

  if (altura <= 0 || altura >= 3.0) {
    alturaValida = false
    tdImc.textContent = 'Altura Inválida'
    paciente.classList.add('paciente-invalido')
  }

  if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura)
    tdImc.textContent = imc.toFixed(2)
  }
}
