//scroll
$(document).ready(function(){
	var altura = $('.carou').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed-redes');
            $('.menu').removeClass('menu-fixed');
			$('.cart-modal').addClass('subir');

		} else {
			$('.menu').removeClass('menu-fixed-redes');
            $('.menu').addClass('menu-fixed');
			$('.cart-modal').removeClass('subir');
		}
	});
    $(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.redes').removeClass('menu-fixed-redes');
            
		} else {
			$('.redes').addClass('menu-fixed-redes');
		}
	});

});