new Swiper('.ourResources__slider', {
  mousewheel: true,
  loop: true,
  slidesPerView: 1,
  speed: 1000,
  navigation: {
    nextEl: '.arrow__pic-right',
    prevEl: '.arrow__pic-left',
  },
  pagination: {
    el: '.pagination__control',
    type: 'bullets',
    clickable: 1
  },
});

new Swiper('.testimonials__slider', {
  mousewheel: true,
  loop: true,
  slidesPerView: 1.7,
  spaceBetween: 64,
  speed: 700,
  // navigation: {
  //   nextEl: '.arrow__pic-right',
  //   prevEl: '.arrow__pic-left',
  // },
  pagination: {
    el: '.testimonial__pagination',
    type: 'bullets',
    clickable: 1
  },
});
