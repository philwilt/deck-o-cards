var should = require('chai').should();
var Deck = require('../lib/deck');

var deck = new Deck();

deck.size().should.equal(52);
deck.draw().should.equal({suit: "Spades", value: "Ace"});
