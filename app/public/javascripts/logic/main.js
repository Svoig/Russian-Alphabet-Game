//$(document).ready(function() {
	//Create a game for everything to run in
	var activeGame = new Game();
	//Initialize the game, creating our card models and collections
	var activeDeck = activeGame.init();

	//Creating the views
	var boardView = new BoardView({collection: activeDeck.rus});
	console.log(activeDeck, boardView);

	boardView.render(activeDeck);
//})