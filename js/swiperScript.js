const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 400,
    spaceBetween: 70,
    centeredSlides: true,
    slideToClikedSlide: true,
    toggle: true,
    watchSlidesProgress: true,
    translate: 800,
/*     breakpoints: {
        320: {
            slidesPerView: 1
        }
    } */
  });

  const slides = document.querySelectorAll('.swiper-slide')

  slides.forEach(item => {
    if(!item.closest('.swiper-slide-active')) {
        item.style.opacity = 0.7
    } 
    swiper.on('slideChangeTransitionEnd', () => {
        slides.forEach(item => {
            if(item.closest('.swiper-slide-active')) {
                item.style.opacity = 1
            } else {
              item.style.opacity = 0.7
            }
      })
    }) 
  })


  
  