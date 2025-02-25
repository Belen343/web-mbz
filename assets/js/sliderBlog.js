document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".blog-slider");
    const btnPrev = document.getElementById("anterior");
    const btnNext = document.getElementById("siguiente");

    const scrollAmount = 300; // Cantidad de píxeles a mover

    function updateButtons() {
        btnPrev.disabled = slider.scrollLeft <= 0;
        btnNext.disabled = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth;
    }

    btnNext.addEventListener("click", function () {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    btnPrev.addEventListener("click", function () {
        slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    slider.addEventListener("scroll", updateButtons);
    updateButtons(); // Llamar al inicio para deshabilitar botones si es necesario
});
