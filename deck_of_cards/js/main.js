
var initCanvas = function() {
	console.log("Calling initCanvas function");
	var canvas = document.getElementById("myCanvas");
	if (canvas.getContext) {
	
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "#194D1E";
		ctx.fillRect(0, 0, 900, 500);
		
		// Initialise with deck with number of cards
		drawDeck(ctx, 52);
	}
};


var drawDeck = function(ctx, numOfCards) {
	
	var card_width 	= 100;
	var card_height = 150;
	var margin		= 20;
	var delay		= 50;	// 50ms per card
	
	// draw the deck of cards
	console.log("Calling drawDeck function");
	(function theLoop (i) {
		setTimeout(function () {
		
		var spacing = (ctx.canvas.clientWidth -  (2 * margin) - card_width) / numOfCards;
		var xpos = 20 + (i * spacing);
		var ypos = 20;
		drawCard(ctx, xpos, ypos, card_width, card_height);
		
		
		if (--i) {                  // If i > 0, keep going
		  theLoop(i);  				// Call the loop again
		}
	  }, delay);
	})(numOfCards);
};

var drawCard = function(ctx, xpos, ypos, card_width, card_height) {
	
	console.log("Calling drawCard function");
	ctx.fillStyle = "#125EAA";
	ctx.fillRect(xpos, ypos, card_width, card_height);		// xpos, ypos, width, height
	ctx.strokeStyle = "black";
	ctx.strokeRect (xpos, ypos, card_width, card_height);
	
};
