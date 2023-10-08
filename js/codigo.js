document.addEventListener("DOMContentLoaded", function () {
  const carruseles = document.querySelectorAll(".carrusel");

  carruseles.forEach((carrusel) => {
      const botonAnterior = carrusel.querySelector(".anterior");
      const botonSiguiente = carrusel.querySelector(".siguiente");
      const imagenesCarrusel = carrusel.querySelector(".imagenes-carrusel");

      let posicion = 0;

      botonAnterior.addEventListener("click", () => {
          if (posicion > 0) {
              posicion--;
              actualizarCarrusel();
          }
      });

      botonSiguiente.addEventListener("click", () => {
          if (posicion < imagenesCarrusel.children.length - 1) {
              posicion++;
              actualizarCarrusel();
          }
      });

      function actualizarCarrusel() {
          const desplazamiento = -posicion * 100;
          imagenesCarrusel.style.transform = `translateX(${desplazamiento}%)`;
      }
  });
});



function cargarImagenesEnCarrusel(numero, carpeta, elementoId) {
  const carrusel = document.getElementById(elementoId);
  const imagenesCarrusel = carrusel.querySelector('.imagenes-carrusel');
  const botonSiguiente = carrusel.querySelector('.siguiente');

  // Elimina todas las imágenes existentes en el carrusel
  imagenesCarrusel.innerHTML = '';

  // Carga las imágenes en el carrusel
  for (let i = 1; i <= numero; i++) {
    const imagen = document.createElement('img');
    imagen.src = `${carpeta}/${i} Flora.png`;
    imagen.alt = `Imagen ${i}`;
    imagenesCarrusel.appendChild(imagen);
  }

  
}

// Llama a la función para cargar imágenes en el carrusel
const numeroDeImagenes = 5; // Cambia esto al número deseado de imágenes
const carpetaDeImagenes = 'img/flora'; // Cambia esto a la ruta de tu carpeta
const elementoCarruselId = 'imagenes-carrusel'; // Cambia esto al ID de tu elemento HTML
cargarImagenesEnCarrusel(numeroDeImagenes, carpetaDeImagenes, elementoCarruselId);
