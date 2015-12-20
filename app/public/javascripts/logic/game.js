var Game = (function() {

	function GameCtor()  {
		this.narrowDeck = function(deck, numCards) {
			//Given a Deck object (containing two Backbone collections), removes numCards cards from the deck
			var numArray=[];
				for (var i = 0; i<numCards; i++) {
					var randNum = Math.floor(Math.random()*33);
					numArray[numArray.length] = randNum;
				};
				//Different numbers of cards being removed each time... Why?
				console.log(numArray, numArray.length);
				numArray.forEach(function(card){
					var rusCard = deck.rus.findWhere({matchId: card});
					var engCard = deck.eng.findWhere({matchId: card});
					deck.rus.remove(rusCard);
					deck.eng.remove(engCard);
				});

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
