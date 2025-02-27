document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".content-casa-slider");
    const mainImage = document.querySelector(".content-casa-img img");
    let isAnimating = false;

    function moveSlider(direction) {
        if (isAnimating) return;
        isAnimating = true;

        if (direction === "despues") {
            slider.style.transition = "transform 0.5s ease-in-out";
            slider.style.transform = "translateX(-230px)"; // Ajusta según el tamaño de la tarjeta + gap

            setTimeout(() => {
                const firstCard = slider.firstElementChild;
                slider.appendChild(firstCard);
                slider.style.transition = "none";
                slider.style.transform = "translateX(0)";
                isAnimating = false;
            }, 500);
        } else if (direction === "antes") {
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

    document.querySelector("#antes").addEventListener("click", function () {
        moveSlider("antes");
    });

    document.querySelector("#despues").addEventListener("click", function () {
        moveSlider("despues");
    });

    // Evento para cambiar la imagen principal cuando se selecciona una del slider
    document.querySelectorAll(".casa-card img").forEach(img => {
        img.addEventListener("click", function () {
            mainImage.src = this.src;
            mainImage.alt = this.alt;
        });
    });
});
