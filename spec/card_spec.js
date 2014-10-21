var should = chai.should();

describe("Card", function() {
  it("should have a value and a name", function(){
    var card = new Card("Spades", "Ace");
    card.suit.should.equal("Spades");
  });

  it("should have a toString", function () {
    var card = new Card("Spades", "Ace");
    card.toString().should.equal("Ace of Spades");
  });
});
