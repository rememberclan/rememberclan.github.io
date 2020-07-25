'use strict';

(function ($) {

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


    /*------------------
    	Users/Tier Validation
    --------------------*/

    //Grab Params
    function GetURLParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');

        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }

    }

    function populateUser(user) {

        //Set Items
        $('title').html(
            'RM | ' + user.NAME.toUpperCase()
        )

        $('#player-name').html(
            user.NAME.toUpperCase()
        )

        $('#player-tier').html(
            '<div id="rank-circle"></div>' +
            user.RANK
        )

        $('#player-tier').css(
            'border-color',
            rankColors[user.RANK]
        )

        $('#rank-circle').css(
            'background-color',
            rankColors[user.RANK]
        )

        if (user.DESC != '') {
            $('#player-description').html(
                user.DESC.toUpperCase()
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

        if (user.DISCORD != '') {
            $('#player-discord').attr(
                'href',
                user.DISCORD
            );
        } else {
            $('#player-discord').hide();
        }

        if (user.YOUTUBE != '') {
            $('#player-youtube').attr(
                'href',
                user.YOUTUBE
            );
        } else {
            $('#player-youtube').hide();
        }

        if (user.TWITCH != '') {
            $('#player-twitch').attr(
                'href',
                user.TWITCH
            );
        } else {
            $('#player-twitch').hide();
        }

        if (user.TWITTER != '') {
            $('#player-twitter').attr(
                'href',
                user.TWITTER
            );
        } else {
            $('#player-twitter').hide();
        }

        if (user.TIKTOK != '') {
            $('#player-tiktok').attr(
                'href',
                user.TIKTOK
            );
        } else {
            $('#player-tiktok').hide();
        }

        if (user.BE != '') {
            $('#player-behance').attr(
                'href',
                user.BE
            );
        } else {
            $('#player-behance').hide();
        }

        if (user.CUSTOM != '') {
            $('#player-custom').attr(
                'href',
                user.CUSTOM
            );
        } else {
            $('#player-custom').hide();
        }

        if (user.INSTAGRAM != '') {
            $('#player-instagram').attr(
                'href',
                user.INSTAGRAM
            );
        } else {
            $('#player-instagram').hide();
        }

        $('#profile-img').attr(
            'src',
            'https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-19/s150x150/108778090_595494088001279_7143660561079539356_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_ohc=ByfhvtB76A8AX8oJEL1&oh=34e20dc95820dc6174ed886626c4beb9&oe=5F46FED4'
        );

    }


    var userName = GetURLParameter('id');

    if (userName !== undefined && userName.indexOf('remember') > -1) {

        var rm = {
            BE: "",
            CUSTOM: "",
            DESC: "⚓️ EST. 2012",
            DISCORD: "https://discord.com/invite/5Kbj3gZ/",
            INSTAGRAM: "https://www.instagram.com/rememberclan/",
            NAME: "Team Remember®",
            RANK: "ORG",
            TIKTOK: "https://www.tiktok.com/@rememberclan/",
            TWITCH: "https://www.twitch.tv/rememberclan/",
            TWITTER: "https://twitter.com/rememberclan/",
            YOUTUBE: "https://www.youtube.com/channel/UCp1tD7Ee8pT_xL3uI67Qxow/" ,
        };

        window.history.pushState(null, null, 'remember');
        populateUser(rm);

    } else {

        db.collection('ranks')
            .get()
            .then(function (querySnapshot) {

                var userFound = false;

                querySnapshot.forEach(function (doc) {

                    var player = doc.data();

                    if (userName !== undefined && player.NAME.toLowerCase().indexOf(userName.toLowerCase()) > -1) {

                        userFound = true;
                        populateUser(doc.data());
                        window.history.pushState(null, null, userName);
                    }

                });

                if (!userFound) {

                    window.history.pushState(null, null, 'UNKNOWN');

                    $('title').html(
                        'UNKNOWN'
                    );

                    $('.main-nav-outer').hide();
                    $('#service').hide();
                    $('.player-not-found').show();
                }

            })
            .catch(function (error) {
                console.log('Error getting documents: ', error);
            });
    }


})(jQuery);
