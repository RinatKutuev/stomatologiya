$(function(){
	var slider = new Swiper(".main-slider .swiper", {
        pagination: {
          el: ".main-slider .swiper-pagination",
          clickable: true,
        },
    });

    $(".menu-btn").on('click', function(){
		let btn = $(this),
			menu = $(".navigation")

		if(btn.hasClass('active')){
			btn.removeClass('active')
			menu.removeClass('open')
			$(".overlay").remove()
		}else{
			btn.addClass('active')
			menu.addClass('open')
			$("body").append('<div class="overlay"></div>')
		}
	})

	var swiper = new Swiper(".product-thumb .swiper", {
		spaceBetween: 8,
		slidesPerView: "auto",
		freeMode: true,
		watchSlidesProgress: true,
	});
	var swiper2 = new Swiper(".product-slider .swiper", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});

	$(".select").styler()
})