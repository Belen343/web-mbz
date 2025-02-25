new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    preventClicks: false, // IMPORTANTE: Permite el evento click en imágenes
    preventClicksPropagation: false,
    // Breakpoints corregidos
    breakpoints: {
        0: {
            slidesPerView: 1 // 1 imagen en móviles
        },
        600: {
            slidesPerView: 2 // 2 imágenes en pantallas medianas
        },
        1024: {
            slidesPerView: 3 // 3 imágenes en pantallas grandes
        },
    }
});
