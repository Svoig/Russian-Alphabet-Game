var Game = (function() {

	function GameCtor()  {
		this.narrowDeck = function(deck, numCards) {
			var numArray=[];

				for (var i = 0; i<numCards; i++) {
					var randNum = Math.floor(Math.random()*66);
					numArray[numArray.length] = randNum;
				};

				//SOMETHING IS GOING WRONG WITH Collection.findWhere!! But ONLY for deck.rus ...
				numArray.forEach(function(card){
					deck.rus.remove(deck.rus.findWhere({matchId: card}));
					//console.log("Removing card ", card, " from rus");
					deck.eng.remove(deck.eng.findWhere({matchId: card}));
					if (!(deck.rus.at(card))) {
						
					}
					//console.log("Removing card ", card, " from eng");
				});

				return deck;
		};

		this.init = function(numCards) {

			var activeDeck = new Deck();

			var gameDeck = activeDeck.generate();

			//A container for the card elements
			var cardGrid = "<div class='cardGrid'></div>";
			$("#board").append(cardGrid);

			//Select some cards from the deck, depending on numCards specified by user



			//Grab the cards from the deck, and create a table containing them
			return gameDeck;
		}
	}
	return GameCtor;

})();
