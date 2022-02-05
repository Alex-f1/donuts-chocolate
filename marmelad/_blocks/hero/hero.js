function initHeroSlider() {
  const swiper = new Swiper(".js-hero-slider", {
    speed: 1000,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

initHeroSlider();