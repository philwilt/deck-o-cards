(function (exports) {

  function Deck () {
    var values = [ 2, 3, 4, 5, 6, 7, 8, 9, 10,
               "Jack", "Queen", "King", "Ace" ];
    var suits = [ "Clubs", "Diamonds", "Hearts", "Spades" ];
    this.deck = [];

    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < values.length; j++) {
        this.deck.push( new Card( suits[i], values[j] ) );
      }
    }
  }

  exports.Deck = Deck;

  Deck.prototype = {
        draw: function () {
        return this.deck.pop();
      },

      size: function () {
        return this.deck.length;
      }
    };
})(this);
