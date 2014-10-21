(function (exports) {

  function Card (suit, value) {
    this.suit = suit;
    this.value = value;
  }

  exports.Card = Card;

  Card.prototype = {
    toString: function () {
      return this.value + " of " + this.suit;
    }
  };
})(this);
