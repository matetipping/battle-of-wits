function startGame() {
  var playerHand = [1, 2, 3, 4, 5, 6, 7];
  var opponentHand = [1, 2, 3, 4, 5, 6, 7];
}

function playCard(cardNo) {
  simulateResults
  removeCard
}

simulateResults(hand, count) {
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
