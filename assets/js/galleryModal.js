document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar imágenes y modal
    const imagenes = document.querySelectorAll(".card-image");
    const modal = document.getElementById("modal-imagen");
    const modalImg = document.getElementById("imagen-modal");
    const cerrar = document.querySelector(".cerrar");

    // Ocultar el modal al cargar la página (por seguridad)
    modal.style.display = "none";

    // Evento para abrir modal al hacer clic en imagen
    imagenes.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "flex"; // Mostrar modal
            modalImg.src = this.src; // Asignar imagen clickeada
        });
    });

    // Evento para cerrar modal
    cerrar.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Cerrar modal si se hace clic fuera de la imagen
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
