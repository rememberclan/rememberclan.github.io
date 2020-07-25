'use strict';

var rankColors = {
    'ORG': '#0974fe',
    'CEO': '#FFD700',
    'Owner': 'white',
    'Staff': '#00f8ff',
    'Tier 7': '#3498db',
    'Tier 6': '#1abc9c',
    'Advisor': '#1abc9c',
    'Tier 5': '#e91e63',
};

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$('.primary-menu').slicknav({
		appendTo:'.header-warp',
		closedSymbol: '<i class="fa fa-angle-down"></i>',
		openedSymbol: '<i class="fa fa-angle-up"></i>'
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		navText: ['', '<img src="img/icons/solid-right-arrow.png">'],
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		//autoplay: true,
		autoplayTimeout: 10000,
	});

	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index + '.');
		}else{
			$(this).html(index + '.');
		}
	});


	/*------------------
		Video Popup
	--------------------*/
	$('.video-popup').magnificPopup({
  		type: 'iframe'
	});

	$('#stickySidebar').stickySidebar({
	    topSpacing: 60,
	    bottomSpacing: 60
	});

    /*------------------
		Nav Scroll Fix
	--------------------*/
    $(document.body).scroll(function() {

        var scrollVal = $(document.body).scrollTop();

        if(scrollVal < 0) {

            var offset = 50 + Math.abs(scrollVal);

            $('.backdrop').css(
                'height',
                offset.toString() + 'px'
            );
        }
    });


})(jQuery);
