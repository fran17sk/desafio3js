//scroll
$(document).ready(function(){
	var altura = $('.carou').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed-redes');
            $('.menu').removeClass('menu-fixed');

		} else {
			$('.menu').removeClass('menu-fixed-redes');
            $('.menu').addClass('menu-fixed');
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


