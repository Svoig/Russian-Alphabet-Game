var game = (function() {

	function GameCtor()  {
		this.narrowDeck = function(deck, numCards) {

		};

		this.init = function(numCards) {
			var gameDeck = Deck.generate();

			//A container for the card elements
			var cardGrid = "<div class='cardGrid'></div>";
			$("#board").append(cardGrid);

			//Select some cards from the deck, depending on numCards specified by user



			//Grab the cards from the deck, and create a table containing them

		}
	}
	return GameCtor;

} ) ();
