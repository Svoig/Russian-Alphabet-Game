//var Backbone = require('backbone');
  //NPM can't find Backbone on my new Ubuntu setup, so working in the browser for right now...

//A module to create a new deck of cards for a new round
var newDeck = (function Deck() {


//So that I can manipulate these as Backbone collections. Might remove this later if I don't use it
var rusLetters = Backbone.Collection.extend({

});

var engLetters = Backbone.Collection.extend({

});

//MY data for the cards. Used to generate randomized decks (eventually)
var rusArray = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Э','Ю','Я'];

var engArray = ['A','B','V','G','D','Ye','Yo','Zh','Z','I','Y','K','L','M','N','O','P','R','S','T','U','F','Kh','Ts','Ch','Sh','Shch','Yu','Ya'];

//THe actual card constructor. RIght now it should return a new Card with a value, id, and vowel properties needed to start the game
var Card = Backbone.Model.extend(
  {
    defaults: {vowel: false}
  });

function generateDeck() {
  //Initialize vowel arrays to determine the vowel property of the cards.
  var rusVowels = ['А','Я','Э','Е','У','Ю','О','Ё','И'];
  var engVowels = ['A', 'Ya', 'E', 'Ye','U','Yu','O','Yo','I'];
  //Give the cards a place to go
  var deck = {};
  //To make sure all card ids are unique
  var counter =0;

  rusArray.forEach(function(key1){

    rusVowels.forEach(function(key2) {
      if (key1 === key2) {
        var newCard = new Card({vowel: true, id: counter, value: key1});
        counter++;

        deck[newCard.id] = newCard;
      }

    });

    if (!(key1 in deck)) {
      console.log("Didn't find ",key1," in Russian deck. Adding!");
      var newCard = new Card({id: counter, value: key1});
      deck[newCard.id]  = newCard;

      counter++;
    } else console.log(key, " already in Russian deck. Skipping!");

  });

  engArray.forEach(function(key1){

    engVowels.forEach(function(key2) {
      if (key1 === key2) {
        var newCard = new Card({vowel: true, id: counter, value: key1});
        counter++;

        deck[newCard.id] = newCard;
      }

    });

    if (!(key1 in deck)) {
      console.log("Didn't find ",key1," in English deck. Adding!");
      var newCard = new Card({id: counter, value: key1});
      deck[newCard.id]  = newCard;

      counter++;
    } else console.log(key, " already in English deck. Skipping!");

  });

  return deck;
  }

var  newDeck = generateDeck();
  
return newDeck;

})();


//module.exports = newDeck;