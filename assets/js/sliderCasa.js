document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".content-casa-slider");
    const mainImage = document.querySelector(".content-casa-img img");
    const images = Array.from(slider.querySelectorAll(".casa-card img"));
    let isAnimating = false;
    let currentIndex = 0;
    let intervalId = null;
    let autoMoveEnabled = true;

    function moveSlider(direction) {
        if (isAnimating) return;
        isAnimating = true;

        if (direction === "despues") {
            slider.style.transition = "transform 0.5s ease-in-out";
            slider.style.transform = "translateX(-380px)";

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
            slider.style.transform = "translateX(-380px)";

            

            setTimeout(() => {
                slider.style.transition = "transform 0.5s ease-in-out";
                slider.style.transform = "translateX(0)";
                isAnimating = false;
            }, 10);
        }
    }

    function startAutoMove(direction) {
        if (!autoMoveEnabled) return;
        intervalId = setInterval(() => moveSlider(direction), 500);
    }

    function stopAutoMove() {
        clearInterval(intervalId);
    }

    function disableAutoMove() {
        autoMoveEnabled = false;
        stopAutoMove();
    }

    document.querySelector("#antes").addEventListener("click", function () {
        disableAutoMove();
        moveSlider("antes");
    });

    document.querySelector("#despues").addEventListener("click", function () {
        disableAutoMove();
        moveSlider("despues");
    });

    // Reiniciar autoMoveEnabled cuando el mouse entra en el botón después de haber salido
    document.querySelector("#antes").addEventListener("mouseenter", function () {
        if (!autoMoveEnabled) autoMoveEnabled = true;
        startAutoMove("antes");
    });

    document.querySelector("#antes").addEventListener("mouseleave", function () {
        stopAutoMove();
    });

    document.querySelector("#despues").addEventListener("mouseenter", function () {
        if (!autoMoveEnabled) autoMoveEnabled = true;
        startAutoMove("despues");
    });

    document.querySelector("#despues").addEventListener("mouseleave", function () {
        stopAutoMove();
    });

    document.querySelectorAll(".casa-card img").forEach((img, index) => {
        img.addEventListener("click", function () {
            currentIndex = index;
            updateMainImage(currentIndex);
        });
    });

    function updateMainImage(index) {
        if (index >= images.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex = index;
        }
        mainImage.src = images[currentIndex].src;
        mainImage.alt = images[currentIndex].alt;
    }

    document.querySelector("#next-main").addEventListener("click", function () {
        updateMainImage(currentIndex + 1);
    });

    document.querySelector("#prev-main").addEventListener("click", function () {
        updateMainImage(currentIndex - 1);
    });
});