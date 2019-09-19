function startGame() {
  playerHand = [1, 2, 3, 4, 5, 6, 7];
  opponentHand = [1, 2, 3, 4, 5, 6, 7];
  wins = 0;
  draws = 0;
  losses = 0;
}

function playCard(cardNo) {
  var opponentCard = simulateResults(100);
  $("div.moves").html($("div.moves").text() + "(" + cardNo + "v " + opponentCard + ") ");
  if (cardNo > opponentCard && cardNo + opponentCard != 8) {
    wins ++;
    $("div.wins").html("Wins: " + wins);
  } else if (cardNo == opponentCard) {
    draws ++;
    $("div.draws").html("Draws: " + draws);
  } else {
    losses ++;
    $("div.losses").html("Losses: " + losses);
  }
  removeCard();
}

simulateResults(count) {
  var wins = [0, 0, 0, 0, 0, 0, 0];
  for (j = 0; j < count; j++) {
    var simPlayerHand = playerHand;
    var simOpponentHand = opponentHand;
    var firstCard = 0
    for (i = 0; i < playerHand.length; i++) {
      var playerCard = selectRandomCard(simPlayerHand);
      var opponentCard = selectRandomCard(simOpponentHand);
      if (i == 0) {
        
      }
      if (playerCard > opponentCard && playerCard + opponentCard != 8) {
      
      }
    }
  }
}

selectRandomCard(hand) {
  var randomCard = hand[Math.floor(Math.random()*hand.length)];
}

window.onload = function() {
  startGame();
  $("div.card").click(function() {
    $(this).removeClass("card");
    playCard(Number($(this).text()));
  });
};
