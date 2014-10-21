var Card = require('./card');

var Deck = function () {
  var values = [ 2, 3, 4, 5, 6, 7, 8, 9, 10,
             "Jack", "Queen", "King", "Ace" ];
  var suits = [ "Clubs", "Diamonds", "Hearts", "Spades" ];
  this.deck = [];

  for (suit in suits) {
    for (value in values) {
      this.deck.push( new Card( suit, value ) );
    }
  }

  this.draw = function () {
    return this.deck.pop();
  };

  this.size = function () {
    return this.deck.length;
  };

};

module.exports = Deck;
