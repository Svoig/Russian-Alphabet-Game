var Game = (function() {

	function GameCtor()  {
		this.narrowDeck = function(deck, numCards) {
			var numArray = (function() {
				for (var i = 0; i<numCards; i++) {
					var randNum = Math.floor(Math.random()*66);
				};
			})();
		};

		this.init = function(numCards) {

			var activeDeck = new Deck();

			var gameDeck = activeDeck.generate();

			//A container for the card elements
			var cardGrid = "<div class='cardGrid'></div>";
			$("#board").append(cardGrid);

			//Select some cards from the deck, depending on numCards specified by user



			//Grab the cards from the deck, and create a table containing them

		}
	}
	return GameCtor;

})();
