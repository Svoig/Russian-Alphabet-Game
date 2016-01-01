//	//	//	//	//
//	BOARDVIEW   //
//	//	//	//	//
var BoardView =  Backbone.View.extend({

	initialize: function() {
		this.listenTo(this.collection, "change", this.render);
		this.listenTo(this.collection, "add", this.updateCounter);
	},

	updateCounter: function() {
		Deck.counter++;
		Deck.matchCounter++;
	},

	render: function() {
		//Ease of access
		var deck = this.collection;
		//If there's no container for the card elements, create one
		if($('#grid').length === 0) {
			console.log("No grid! Rendering ", activeDeck);
			var grid = "<div id='grid'></div>";
			$("#board").append(grid);
		} else $('#grid').html('');


		//A variable to hold the length of the colletions
		var numCards = deck.length;

		//Do the math to figure out how big the square grid should be based on how many cards we have
		var gridSize = Math.floor(Math.sqrt(numCards));

		//Loop through each row (RUS)
		var cellCounter = 0; //A counter to get each card in the deck
		var rowCounter = 1;

		//Loop through each row
		for (var i=0; i<gridSize+1; i++) {
			//Create a new <tr> for each row and give it an id
			//**THIS ID DOES NOT WORK. SHOWS UP AS id='row'1 **//
			var newRow = $("<tr id='row'"+rowCounter+"></tr>");

			//Loop through each column within each row
			for (var j=0; j<gridSize+1; j++) {
					//A new <td> for each cell (column within a row)
					var newCell = $("<td class= 'cardCell'>");

					//A cardView to display within the cell
					if (deck.models[cellCounter] !== undefined){
						var newCard = new CardView({model: deck.models[cellCounter]});
						//First console log (and first card generated) is always undefined. FIGURE THIS OUT!!
						newCard.render();


						newCell.append(newCard.$el);
						newRow.append(newCell);
						cellCounter++;
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

	goodbye: function() {
		this.remove();
	},

	match: function() {
		//CAN'T MAKE THEM GO AWAY!!
		if(clickedCollection.length === 2) {
			console.log("Two models clicked!");
			if (clickedCollection.models[0].attributes.model.get('matchId') === clickedCollection.models[1].attributes.model.get('matchId')) {
				console.log("They match!");

				console.log(clickedCollection.models[0]);

				activeDeck.remove(clickedCollection.models[0].attributes.model);
				activeDeck.remove(clickedCollection.models[1].attributes.model);

				$("#grid").remove();

				boardView.render();
				
			}
			
			clickedCollection.reset();

		}

	},

	render: function() {
		clickedCollection.reset();
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