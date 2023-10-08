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
