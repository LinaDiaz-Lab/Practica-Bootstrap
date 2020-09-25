let anguloPaisaje = 0

function rotate (event) {
  console.log('Evento click Paisaje ', event)
  // Falta codigo para que el gato rote
  const imagenPaisaje = document.getElementById('paisajeImg').id;
  imagenPaisaje.dataset.angulo = parseInt(imagenPaisaje.dataset.angulo) + 90;

  imagenPaisaje.dataset.alias
  // anguloGato += 90
  imagenPaisaje.style.transform = `rotate(${imagenPaisaje.dataset.angulo}deg)`
}

const botonParaPaisaje = document.getElementById('paisaje')
botonParaRotarPaisaje.addEventListener('click', rotate)



