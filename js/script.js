new Swiper('.ourResources__slider', {
  mousewheel: true,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.arrow__pic-right',
    prevEl: '.arrow__pic-left',
  },
  pagination: {
    el: '.pagination__control',
    type: 'bullets',
    clickable: 1
  },
})
