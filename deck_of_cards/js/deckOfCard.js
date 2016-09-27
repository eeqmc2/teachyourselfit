
/*This represents the suit of the card*/
var Suit = {
	SPADE: 		4,
	HEART: 		3,
	CLUB: 		2,
	DIAMOND: 	1
}

/* This represents the number of the card*/
//var Value = new Enum(['ACE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','JACK','QUEEN','KING']);
var Rank = {
	TWO: 	2,
	THREE: 	3,
	FOUR:	4,
	FIVE: 	5,
	SIX: 	6,
	SEVEN:	7,
	EIGHT:	8,
	NINE:	9,
	TEN:	10,
	JACK:	11,
	QUEEN:	12,
	KING:	13,
	ACE: 	14
	
}

/* This class represents the card with specific suit and value. */
var Card = function(rank, suit) {
	
	this.rank = rank;
	this.suit = suit;
	
};

Card.prototype.toString = function() {
	
  var ret = this.rank + " of " + this.suit + "\n";
  return ret;
  
}

// Constructor of Card
var DeckOfCard = function() {
	
	this.cards = new Array();
	
	var idx = 0;
    for (var r in Rank) {
		for  (var s in Suit) {
			var card = new Card(r, s);
			//console.debug("Added new card: " + (idx + 1)  + " " + card.toString());
			this.cards.push(card);
			idx++;
		}
    }
};

DeckOfCard.prototype.shuffle = function() {
	
	console.debug("Shuffling deck of cards size: " + this.cards.length);
	
	var newDeck = new Array();
	while (this.cards.length > 0) {
		
		//Random index
		var randIdx = Math.floor(Math.random() * this.cards.length);
		//console.debug("Random Idx: " + randIdx);
		
		var card = this.cards[randIdx];
		//console.debug("Card: " + card.toString());
		
		// Push card into new deck
		newDeck.push(this.cards[randIdx]);
		// Remove card from original deck
		this.cards.splice(randIdx, 1);
		
		// Size of deck
		//console.debug("Size of Original Deck: " + this.cards.length);
		//console.debug("Size of New Deck: " + newDeck.length);
	}
	this.cards = newDeck;
};

DeckOfCard.prototype.toString = function() {

	for (var i = 0; i < this.cards.length; i++) {
		
		console.log(this.cards[i]);
	}
}