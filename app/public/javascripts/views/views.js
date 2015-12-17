var BoardView =  Backbone.View.extend({

	initialize: function() {
		this.listenTo(this.collection, "change", this.render);
	},

	render: function(deck) {
		this.$el.html("");
		//If there's no container for the card elements, create one
		if(!($('#cardGrid'))) {
			var cardGrid = "<div id='cardGrid'></div>";
			$("#board").append(cardGrid);
		}

		//Make sure the deck's collections are the same length
		if(!(deck.rus.length === deck.eng.length)) return "ERROR, LENGTHS DO NOT MATCH";
		
		//A variable to hold the length of the colletions
		var numCards = deck.rus.length;

		//Do the math to figure out how big the square grid should be based on how many cards we have
		var gridSize = Math.floor(Math.sqrt(numCards));

		//Loop through each row (RUS)
		var rusCounter = 1; //A counter to get each card in the deck
		var rowCounter = 1;
		for (var i=0; i<gridSize+1; i++) {
			var newRow = "<tr id='row" + rowCounter+"'></tr>"
			//Loop through each column in the row
			for (var j=0; j<gridSize+1; j++) {
				var newCell = "<td id='card" + rusCounter + "'></td>";
				var newCard = new CardView({model: activeDeck.rus.get(rusCounter)});
				//<tr>s are showing up in #board, but nothing is inside them...
				$('#card'+rusCounter).append(newCard);
				$('#row'+rusCounter).append(newCell);
				rusCounter++;
			}
			this.$el.append(newRow);
			$("#board").append(this.$el);
			rowCounter++;
		}


	}
});

var CardView = Backbone.View.extend({
	initialize: function() {

	},

	render: function() {
		var cardDiv = "<div class='card' id='" + this.model.attributes.matchId + ">" + this.model.attributes.matchId + "</div>";
		this.$el.append(cardDiv);
	}
})