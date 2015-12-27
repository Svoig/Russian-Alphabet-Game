//	//	//	//	//
//	BOARDVIEW   //
//	//	//	//	//
var BoardView =  Backbone.View.extend({

	initialize: function() {
		this.listenTo(this.collection, "change", this.render);
	},

	render: function(deck) {
		//	//	//	//	//	//	//	//	//	//	//	//	//	//
		// NEED TO REWRITE TO WORK WITH **ONE** COLLECTION!!//
		//	//	//	//	//	//	//	//	//	//	//	//	//	//


		this.$el.html("");
		//If there's no container for the card elements, create one
		if(!($('#cardGrid'))) {
			var cardGrid = "<div id='cardGrid'></div>";
			$("#board").append(cardGrid);
		}


		//A variable to hold the length of the colletions
		var numCards = deck.rus.length;

		//Do the math to figure out how big the square grid should be based on how many cards we have
		var gridSize = Math.floor(Math.sqrt(numCards));

		//Loop through each row (RUS)
		var rusCounter = 0; //A counter to get each card in the deck
		var rowCounter = 1;

		//Loop through each row
		for (var i=0; i<gridSize+1; i++) {
			//Create a new <tr> for each row and give it an id
			//**THIS ID DOES NOT WORK. SHOWS UP AS id='row'1 **//
			var newRow = $("<tr id='row'"+rowCounter+"></tr>");

			//Loop through each column within each row
			for (var j=0; j<gridSize+1; j++) {
				//Was having a problem where the last number wasn't actually in activeDeck.rus, so double checking that
				if (activeDeck.rus.get(rusCounter)) {
					//A new <td> for each cell (column within a row)
					var newCell = $("<td class= 'cardCell'>");

					//A cardView to display within the cell
					var newCard = new CardView({model: activeDeck.rus.get(rusCounter)});
					newCard.render();


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

//	//	//	//
// CARDVIEW //
//	//	//	//

var CardView = Backbone.View.extend({
	initialize: function() {
		//this.flipSoon();
		this.listenTo(clickedCollection, "add", this.match);
	},

	match: function(coll) {
		if(coll.length === 2) {
			if (coll.get(0).get('matchId') === coll.get(1).get('matchId')) {
				coll.get(0).remove();
				coll.get(1).remove();
			}
		}
	},

	render: function() {
		var cardDiv = "<div class='card' id=" + this.model.attributes.matchId + ">" + this.model.attributes.value + "</div>";
		this.$el.append(cardDiv);
		this.$el.addClass("flipped");
	},

	flip: function() {
		if($(this.$el).hasClass("flipped")) {
			$(this.$el).removeClass("flipped");
			clickedCollection.remove(this);
		} else {
			$(this.$el).addClass("flipped");
			clickedCollection.add(this);
		}
	},

	flipSoon: function() {
		this.flip();
		//Bind the flip function so that 'this.$el' functions properly
		var boundFlip = this.flip.bind(this);
		var timer = window.setTimeout(boundFlip, 1000);

	},

	events: {
		"click" : "flipSoon"
	}
});

//	//	//	//	//
//	CONTROLVIEW //
//	//	//	//	//

var ControlView = Backbone.View.extend({
	initialize: function() {

	},

	render: function() {
		var reset = $("<p id='reset'>Play again</p>");
		//Create and append a translation to show on :hover
		var rusReset = $("<span>Поиграть снова</span>");
		reset.append(rusReset);

		$("#control").append(reset);
	}
})