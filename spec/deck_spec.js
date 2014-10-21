var should = chai.should();

describe("Deck", function () {
  it("should have an initial size", function () {
    var deck = new Deck();
    deck.size().should.equal(52);
  });

  it("should draw a card", function () {
    var deck = new Deck();
    var card = new Card( "Spades", "Ace" );

    deck.draw().toString().should.equal( card.toString() );
    deck.size().should.equal(51);
  });

});
