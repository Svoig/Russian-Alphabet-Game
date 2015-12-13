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
var rusArray = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы', 'Ь','Э','Ю','Я'];

var engArray = ['A','B','V','G','D','Ye','Yo','Zh','Z','I','Y','K','L','M','N','O','P','R','S','T','U','F','Kh','Ts','Ch','Sh','Shch','Hard sign', 'Ui', 'Soft sign','E','Yu','Ya'];

//THe actual card constructor. RIght now it should return a new Card with a value, id, and vowel properties needed to start the game
var Card = Backbone.Model.extend(
  {
    defaults: {vowel: false}
  });

function generateDeck() {
  //Initialize vowel arrays to determine the vowel property of the cards.
  var rusVowels = ['А','Я','Э','Е','У','Ю','О','Ё','И','Ы'];
  var engVowels = ['A', 'Ya', 'E', 'Ye','U','Yu','O','Yo','I','Ui'];
  //Give the cards a place to go
  var deck = {};
  //To make sure all card ids are unique
  var counter =0;

//Loop through both arrays, comparing each letter with the vowels
  rusArray.forEach(function(key1){

    rusVowels.forEach(function(key2) {
      //If the first letter is a vowel, make a new card with vowel: true
      if (key1 === key2) {
        var newCard = new Card({vowel: true, id: counter, value: key1});
        //Increment the counter, and add the new card to the deck
        counter++;

        deck[newCard.id] = newCard;
      }

    });
    //If the last card added was a vowel, don't add it again. If it's not a vowel, make a new card for the letter and set vowel: false
    if (!(deck[counter-1].get('value') === key1)) {
      var newCard = new Card({id: counter, value: key1});
      deck[newCard.id]  = newCard;

      counter++;
    }

  });
//Loop through both arrays, comparing each letter with the vowels
  engArray.forEach(function(key1){

    engVowels.forEach(function(key2) {
      //If the first letter is a vowel, make a new card with vowel: true
      if (key1 === key2) {
        var newCard = new Card({vowel: true, id: counter, value: key1});
        //Increment the counter, and add the new card to the deck
        counter++;

        deck[newCard.id] = newCard;
      }

    });
    //If the last card added was a vowel, don't add it again. If it's not a vowel, make a new card for the letter and set vowel: false
    if (!(deck[counter-1].get('value') === key1)) {
      var newCard = new Card({id: counter, value: key1});
      deck[newCard.id]  = newCard;

      counter++;
    }

  });

  return deck;
  }

var  newDeck = generateDeck();
  
return newDeck;

})();


//module.exports = newDeck;