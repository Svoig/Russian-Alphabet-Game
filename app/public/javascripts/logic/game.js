var Game = (function() {

	function GameCtor()  {
		this.narrowDeck = function(deck, numCards) {
			//The deck is already shuffled, so we can just pop off any number of pairs of cards.
			//To pop off a PAIR, we need the matchId of the first card popped off (ie the last card in the deck).

			for (var i=0; i< numCards+1; i++) {
				var matchPop = deck.pop().get('matchId');
				
				var matched = deck.findWhere({'matchId': matchPop});

				deck.remove(matched);

			}

				return deck;
		};

		this.init = function(numCards) {

			var activeDeck = new Deck();

			var gameDeck = activeDeck.shuffle(activeDeck.generate());

			//Select some cards from the deck, depending on numCards specified by user



			//Grab the cards from the deck, and create a table containing them
			return gameDeck;
		}
	}
	return GameCtor;

})();
