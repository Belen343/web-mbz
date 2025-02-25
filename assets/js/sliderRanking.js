document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider-clientes");
    let isAnimating = false;
    let interval;

    function moveSlider(direction) {
        if (isAnimating) return;
        isAnimating = true;

        if (direction === "next") {
            slider.style.transition = "transform 0.5s ease-in-out";
            slider.style.transform = "translateX(-230px)"; // Ajusta según el tamaño de la tarjeta + gap

            setTimeout(() => {
                const firstCard = slider.firstElementChild;
                slider.appendChild(firstCard);
                slider.style.transition = "none";
                slider.style.transform = "translateX(0)";
                isAnimating = false;
            }, 500);
        } else if (direction === "prev") {
            const lastCard = slider.lastElementChild;
            slider.prepend(lastCard);
            slider.style.transition = "none";
            slider.style.transform = "translateX(-230px)"; // Ajusta según el tamaño de la tarjeta + gap

            setTimeout(() => {
                slider.style.transition = "transform 0.5s ease-in-out";
                slider.style.transform = "translateX(0)";
                isAnimating = false;
            }, 10);
        }
    }

    function startAutoSlide() {
        interval = setInterval(() => moveSlider("next"), 15000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    document.querySelector("#prev").addEventListener("click", function () {
        stopAutoSlide();
        moveSlider("prev");
        startAutoSlide();
    });

    document.querySelector("#next").addEventListener("click", function () {
        stopAutoSlide();
        moveSlider("next");
        startAutoSlide();
    });

    startAutoSlide();
});
