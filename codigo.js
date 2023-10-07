document.addEventListener("DOMContentLoaded", function () {
    const botonAnterior = document.getElementById("boton-anterior");
    const botonSiguiente = document.getElementById("boton-siguiente");
    const imagenesCarrusel = document.querySelector(".imagenes-carrusel");

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
