function populatePlayerRoster(playerData) {

    var tierContainer = $('#tier-players');
    var unorderedList = document.createElement('ul')

    $.each(playerData, function (index, player) { // Generate Roster

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
        playerImage.src = 'https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-19/s150x150/108778090_595494088001279_7143660561079539356_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_ohc=ByfhvtB76A8AX8oJEL1&oh=34e20dc95820dc6174ed886626c4beb9&oe=5F46FED4';//getPlayerPFP(ranks[player].instagram)

        playerImage.classList.add('profile-ico');
        playerImage.classList.add('tier-size1');

        playerName.innerHTML = player.NAME;

        playerRank.classList.add('tier-rank');
        playerRank.style.borderColor = rankColors[player.RANK]
        playerRankCircle.classList.add('tier-rank-circle');
        playerRankCircle.style.backgroundColor = rankColors[player.RANK]
        playerRankTitle.innerHTML = player.RANK;

        playerPage.href = '/' + player.NAME.replace(/[^a-zA-Z]/g, "");

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

    });

    tierContainer.append(unorderedList);
}

var data = [];

db.collection("ranks").orderBy("RANK", "asc").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            data.push(doc.data());
        });
        populatePlayerRoster(data);
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
