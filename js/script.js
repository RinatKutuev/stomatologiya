var swiper = new Swiper(".doctor-carousel .swiper", {
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".doctor-carousel .swiper-button-next",
        prevEl: ".doctor-carousel .swiper-button-prev",
    },
    breakpoints: {
        450: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".slider .swiper", {
  effect: "fade",
  autoHeight: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

$(function(){
  $(".menu-btn").on("click", function(){
    let btn = $(this),
        menu = $(".mobile-menu")
    if(btn.hasClass("active")){
      btn.removeClass("active")
      menu.removeClass("open")
      $("body").css("overflow", "auto")
    }else{
      btn.addClass("active")
      menu.addClass("open")
      $("body").css("overflow", "hidden")
    }
  })
})