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

    /*------------------
		Roster
	--------------------*/

    function getPlayerPFP(link) {
        //console.log(link);
        /*$.ajax({
			url: link + "?__a=1",
			cache: false
		})
		.done(function( data ) {
			console.log(data['graphql']['user']);
		});*/
    }

    if(window.location.href.indexOf('roster.html') > -1) {

        var tierContainer = $('#tier-players');
        var unorderedList = document.createElement('ul')

        // Generate Roster
        for (var player in ranks) {
            if (ranks.hasOwnProperty(player) && ranks[player].name != 'Team Remember®') {

                var playerCard = document.createElement('li');
                var playerDivider = document.createElement('div');
                var playerImage = document.createElement('img');
                var playerName = document.createElement('span');
                var playerRank = document.createElement('div');
                var playerRankCircle = document.createElement('div');
                var playerRankTitle = document.createElement('span');
                var playerPage = document.createElement('a');
                var playerPageChev = document.createElement('i');

                playerCard.classList.add('tier-player');
                playerDivider.classList.add('vertical-seperator');

                //getPlayerPFP(ranks[player].instagram);
                playerImage.src = 'https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-19/s320x320/99425282_300234584324586_4051500533591048192_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_ohc=e42WOGjPMD0AX_gRowM&oh=2ed2a0d0bb04d43be892bafa09648d20&oe=5F159B50'; //getPlayerPFP(ranks[player].instagram)

                playerImage.classList.add('profile-ico');
                playerImage.classList.add('tier-size1');

                playerName.innerHTML = ranks[player].name;

                playerRank.classList.add('tier-rank');
                playerRank.style.borderColor = rankColors[ranks[player].rank]
                playerRankCircle.classList.add('tier-rank-circle');
                playerRankCircle.style.backgroundColor = rankColors[ranks[player].rank]
                playerRankTitle.innerHTML = ranks[player].rank;

                playerPage.href = '/' + player;

                playerPageChev.classList.add('fa');
                playerPageChev.classList.add('fa-chevron-right');

                playerRank.appendChild(playerRankCircle);
                playerRank.appendChild(playerRankTitle);
                playerPage.appendChild(playerPageChev);
                playerCard.appendChild(playerDivider);
                playerCard.appendChild(playerImage);
                playerCard.appendChild(playerName);
                playerCard.appendChild(playerRank);
                playerCard.appendChild(playerPage);

                unorderedList.appendChild(playerCard);

            }
        }

        tierContainer.append(unorderedList);

    }

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

        if(user.desc != '') {
			$('#player-description').attr(
				'href',
				user.desc
			);
		} else {
			$('#player-description').hide();
		}

		/*

        Custom Background Code

        $('.custom-background').css( //user.background
			'background-image',
			'linear-gradient( to bottom, transparent, #000000 ), url("../img/rc-default/bg.png")' +
            '-moz-linear-gradient( to bottom, transparent, #000000 ), url("../img/rc-default/bg.png")' +
            '-webkit-linear-gradient( to bottom, transparent, #000000 ), url("../img/rc-default/bg.png")'
		);*/

        if(user.discord != '') {
			$('#player-discord').attr(
				'href',
				user.discord
			);
		} else {
			$('#player-discord').hide();
		}

        if(user.youtube != '') {
			$('#player-youtube').attr(
				'href',
				user.youtube
			);
		} else {
			$('#player-youtube').hide();
		}

        if(user.twitch != '') {
			$('#player-twitch').attr(
				'href',
				user.twitch
			);
		} else {
			$('#player-twitch').hide();
		}

        if(user.instagram != '') {
			$('#player-instagram').attr(
				'href',
				user.instagram
			);
		} else {
			$('#player-instagram').hide();
		}

		if(user.tiktok != '') {
			$('#player-tiktok').attr(
				'href',
				user.tiktok
			);			
		} else {
			$('#player-tiktok').hide();
		}
			
        $('#profile-img').attr(
            'src',
            'https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-19/s320x320/99425282_300234584324586_4051500533591048192_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_ohc=e42WOGjPMD0AX_gRowM&oh=2ed2a0d0bb04d43be892bafa09648d20&oe=5F159B50'
        );

	}

	var userName = GetURLParameter('id');

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

    //populateUser(ranks['stylez']);
	

})(jQuery);
