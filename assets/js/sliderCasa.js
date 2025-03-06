document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".content-casa-slider");
    const mainImage = document.querySelector(".content-casa-img img");
    const images = Array.from(slider.querySelectorAll(".casa-card img"));
    let isAnimating = false;
    let currentIndex = 0;

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
    document.querySelectorAll(".casa-card img").forEach((img, index) => {
        img.addEventListener("click", function () {
            currentIndex = index;
            updateMainImage(currentIndex);
        });
    });

    // Función para actualizar la imagen principal
    function updateMainImage(index) {
        if (index >= images.length) {
            currentIndex = 0; // Si llega al final, vuelve al inicio
        } else if (index < 0) {
            currentIndex = images.length - 1; // Si retrocede desde el primero, va al último
        } else {
            currentIndex = index;
        }
        mainImage.src = images[currentIndex].src;
        mainImage.alt = images[currentIndex].alt;
    }

    // Eventos para los nuevos botones en content-casa-img
    document.querySelector("#next-main").addEventListener("click", function () {
        updateMainImage(currentIndex + 1);
    });

    document.querySelector("#prev-main").addEventListener("click", function () {
        updateMainImage(currentIndex - 1);
    });
});
