//evento para que cuando hagamos click sobre el botón de guardar aparezca un alert.

const botonGuardar = document.getElementById('botonGuardar')

botonGuardar.addEventListener('click', (evento) => {
  alert('Mensaje guardado correctamente')
})

//evento para que cuando hagamos foco sobre el input del nombre el fondo sea de un color y cuando se lo quitemos, de otro.

const inputNombre = document.getElementById('inputNombre')

inputNombre.addEventListener('focus', (evento) => {
  inputNombre.style.backgroundColor = '#34ebba'
})

inputNombre.addEventListener('focusout', (evento) => {
  inputNombre.style.backgroundColor = '#ffffff'
})

//evento para que dependiendo de si escribimos una vocal o una consonante en el segundo input su contenido se muestre de un color distinto.
const inputLetra = document.getElementById('inputLetra')

inputLetra.addEventListener('keypress', vocalOConsonante)

const vocales = [97, 101, 105, 111, 117]

function vocalOConsonante(evento) {
  const letraPulsada = evento.keyCode
  if (vocales.indexOf(letraPulsada) === -1) {
    inputLetra.style.color = '#34ebba'
  } else {
    inputLetra.style.color = '#a8323e'
  }
}