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
		var rusCounter = 0; //A counter to get each card in the deck
		var rowCounter = 1;

		for (var i=0; i<gridSize+1; i++) {
			var newRow = $("<tr id='row'"+rowCounter+"></tr>");
			for (var j=0; j<gridSize+1; j++) {
				if (activeDeck.rus.get(rusCounter)) {
					var newCell = $("<td class= 'cardCell'>");

					var newCard = new CardView({model: activeDeck.rus.get(rusCounter)});

					newCard.$el.append(newCard.model.attributes.matchId);

					newCell.append(newCard.$el);
					newRow.append(newCell);
					rusCounter++;
				}
			}
			$("#grid").append(newRow);
			rowCounter++;
		}
	$("#board").append($("#grid"));

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