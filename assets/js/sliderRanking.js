document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider-clientes");
    const cards = document.querySelectorAll(".slider-clientes .card");
    let interval;

    function moveSlider() {
        const firstCard = slider.firstElementChild;
        slider.appendChild(firstCard.cloneNode(true));
        slider.removeChild(firstCard);
    }

    function startAutoSlide() {
        interval = setInterval(moveSlider, 15000); // Mueve cada 5 segundos
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    document.querySelector("#prev").addEventListener("click", function () {
        stopAutoSlide();
        const lastCard = slider.lastElementChild;
        slider.prepend(lastCard.cloneNode(true));
        slider.removeChild(lastCard);
        startAutoSlide();
    });

    document.querySelector("#next").addEventListener("click", function () {
        stopAutoSlide();
        moveSlider();
        startAutoSlide();
    });

    startAutoSlide();
});
