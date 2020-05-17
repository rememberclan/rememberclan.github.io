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
		
		//Set Items
		$('title').html(
			'RM | ' + user.name.toUpperCase()
		)
		
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

		var ranks = {
			'rememberclan': { 
				name: 'rememberclan',
				rank: 'brand',
				discord: 'https://discord.gg/BYDmACR',
				youtube: 'https://www.youtube.com/channel/UC45QQL2hM3V5JbbqSib2blw',
				twitch: 'https://www.twitch.tv/0Deacon',
				instagram: 'https://www.instagram.com/rm.deacon/',
				background: ''
			},
			'rm.viral': { 
				name: 'viral',
				rank: 'founder',
				discord: 'https://discord.gg/BYDmACR',
				youtube: 'https://www.youtube.com/channel/UC45QQL2hM3V5JbbqSib2blw',
				twitch: 'https://www.twitch.tv/0Deacon',
				instagram: 'https://www.instagram.com/rm.deacon/',
				background: ''
			},
			'rm.kad': { 
				name: 'kad',
				rank: 'owner',
				discord: 'https://discord.gg/BYDmACR',
				youtube: 'https://www.youtube.com/channel/UC45QQL2hM3V5JbbqSib2blw',
				twitch: 'https://www.twitch.tv/0Deacon',
				instagram: 'https://www.instagram.com/rm.deacon/',
				background: ''
			},
			'rmitsbrandan': { 
				name: 'brandan',
				rank: 'owner',
				discord: 'https://discord.gg/BYDmACR',
				youtube: 'https://www.youtube.com/channel/UC45QQL2hM3V5JbbqSib2blw',
				twitch: 'https://www.twitch.tv/0Deacon',
				instagram: 'https://www.instagram.com/rm.deacon/',
				background: ''
			},
			'rm.deacon': { 
				name: 'deacon',
				rank: 'staff',
				discord: 'https://discord.gg/BYDmACR',
				youtube: 'https://www.youtube.com/channel/UC45QQL2hM3V5JbbqSib2blw',
				twitch: 'https://www.twitch.tv/0Deacon',
				instagram: 'https://www.instagram.com/rm.deacon/',
				background: ''
			}
		}

		if(ranks[userName]) {
			window.history.pushState(null, null, "/u/" + userName);
			populateUser(ranks[userName]);
		} else {
			window.history.pushState(null, null, "/u/UNKNOWN");
			$('title').html(
				'UNKNOWN'
			)
		}
	}

	

})(jQuery);
