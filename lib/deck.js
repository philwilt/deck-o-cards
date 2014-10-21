(function (exports) {

  function Deck () {
    var values = [ 2, 3, 4, 5, 6, 7, 8, 9, 10,
               "Jack", "Queen", "King", "Ace" ];
    var suits = [ "Clubs", "Diamonds", "Hearts", "Spades" ];
    var deck = [];

    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < values.length; j++) {
        deck.push( new Card( suits[i], values[j] ) );
      }
    }

    this.size = function () {
      return deck.length;
    };

    this.draw = function () {
      return deck.pop();
    };
  }

  exports.Deck = Deck;

})(this);
