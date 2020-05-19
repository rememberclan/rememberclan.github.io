/* =================================
------------------------------------
	EndGam - Gaming Magazine Template
	Version: 1.0
 ------------------------------------
 ====================================*/


'use strict';


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
		Users/Tier Validation
	--------------------*/

	//Grab Params
	function GetURLParameter(sParam)
	{
		var sPageURL = window.location.search.substring(1);
		var sURLVariables = sPageURL.split('&');
		
		for (var i = 0; i < sURLVariables.length; i++)
		{
			var sParameterName = sURLVariables[i].split('=');
			if (sParameterName[0] == sParam)
			{
				return sParameterName[1];
			}
		}
	
	}

	function populateUser(user) {

		var rankColors = {
			'ORG': '#0974fe',
			'CEO': '#FFD700',
			'Owner': 'white',
			'Staff': '#00f8ff'
		};
		
		//Set Items
		$('title').html(
			'RM | ' + user.name.toUpperCase()
		)

		$('#player-name').html(
			user.name.toUpperCase()
		)

		$('#player-tier').html(
			'<div id="rank-circle"></div>' +
			user.rank
		)

		$('#player-tier').css(
			'border-color',
			rankColors[user.rank]
		)

		$('#rank-circle').css(
			'background-color',
			rankColors[user.rank]
		)

		$('.custom-background').css(
			'background-image',
			user.background
		);

		$('#player-discord').attr(
			'href',
			user.discord
		);

		$('#player-youtube').attr(
			'href',
			user.youtube
		);

		$('#player-twitch').attr(
			'href',
			user.twitch
		);

		$('#player-instagram').attr(
			'href',
			user.instagram
		);

		if(user.tiktok != '') {
			$('#player-tiktok').attr(
				'href',
				user.tiktok
			);			
		} else {
			$('#player-tiktok').hide();
		}

			
		$.ajax({
			url: user.instagram + "?__a=1",
			cache: false
		})
		.done(function( data ) {
			var userData = data['graphql']['user'];
			
			$('#profile-img').attr(
				'src',
				userData['profile_pic_url_hd']
			);
	
		});

	}

	if(window.location.href.indexOf("user.html") > -1) {

		var userName = GetURLParameter('id');

		if(ranks[userName]) {
			window.history.pushState(null, null, userName);
			populateUser(ranks[userName]);
		} else {
			window.history.pushState(null, null, "UNKNOWN");
			$('title').html(
				'UNKNOWN'
			)
		}
	}

	

})(jQuery);
