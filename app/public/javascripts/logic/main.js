//$(document).ready(function() {
	//Create a game for everything to run in
	var activeGame = new Game();
	//Initialize the game, creating our card models and collections
	var activeDeck = activeGame.init();

	var clickedCollection = new ClickedCollection({});

	//Creating the views
	var boardView = new BoardView({collection: activeDeck.rus});

	var controlView = new ControlView({collection: activeDeck.rus});

	boardView.render(activeDeck);
	controlView.render();
//})