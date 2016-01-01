//$(document).ready(function() {
	//Create a game for everything to run in
	var activeGame = new Game();
	//Initialize the game, creating our card models and collections
	var activeDeck = activeGame.narrowDeck(activeGame.init(), 29);

	var clickedCollection = new ClickedCollection({});

	//Creating the views
	var boardView = new BoardView({collection: activeDeck});

	var controlView = new ControlView({collection: activeDeck});

	boardView.render();
	controlView.render();
//})