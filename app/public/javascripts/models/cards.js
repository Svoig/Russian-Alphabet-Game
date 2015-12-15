//var Backbone = require('backbone');
  //NPM can't find Backbone on my new Ubuntu setup, so working in the browser for right now...

//A module to create a new deck of cards for a new round
var Deck = (function() {
  
  //THe actual card constructor. RIght now it should return a new Card with a value, id, and vowel properties needed to start the game
  var Card = Backbone.Model.extend(
    {
      defaults: {vowel: false}
    });

  function DeckCtor() {
    //My data for the cards. Used to generate randomized decks (eventually)
   this.rusArray = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы', 'Ь','Э','Ю','Я'];

   this.engArray = ['A','B','V','G','D','Ye','Yo','Zh','Z','I','Y','K','L','M','N','O','P','R','S','T','U','F','Kh','Ts','Ch','Sh','Shch','Hard sign', 'Ui', 'Soft sign','E','Yu','Ya'];


   this.generate = function() {
    //Vowel arrays to match with each card's letter
    var rusVowels = ['А','Я','Э','Е','У','Ю','О','Ё','И','Ы'];

    var engVowels = ['A', 'Ya', 'E', 'Ye','U','Yu','O','Yo','I','Ui'];
    //Initialize a counter to give each card a unique ID
    var counter = 0;
    //Backbone collections to keep the active deck organized by language
    var CardCollection = Backbone.Collection.extend();

    var cardCollection = new CardCollection({});

    //Generating the deck

    this.rusArray.forEach(function(key1){

      rusVowels.forEach(function(key2) {
        //If the first letter is a vowel, make a new card with vowel: true
        if (key1 === key2) {
          var newCard = new Card({lang: 'rus',vowel: true, id: counter, value: key1});
          //Increment the counter, and add the new card to the deck
          counter++;

          cardCollection.add(newCard);
          //if(counter === 1) console.log('Yo!',cardCollection.get(0));
        }

      });

      //If the last card added was a vowel, don't add it again. If it's not a vowel, make a new card for the letter and set vowel: false
      if (!(cardCollection.get(counter-1).get('value') === key1)) {
        var newCard = new Card({lang: 'rus', id: counter, value: key1});
        cardCollection.add(newCard);

        counter++;
      }

    });
  //Loop through both arrays, comparing each letter with the vowels
    this.engArray.forEach(function(key1){

      engVowels.forEach(function(key2) {
        //If the first letter is a vowel, make a new card with vowel: true
        if (key1 === key2) {
          var newCard = new Card({lang: 'eng', vowel: true, id: counter, value: key1});
          //Increment the counter, and add the new card to the deck
          counter++;

          cardCollection.add(newCard);
        }

      });
      //If the letter we're looking at (key1) has already been added, that means it's a vowel. Ignore it! If the letter is new, that means it's a consonant. Add a card with voweL: false!
      
      if (!(cardCollection.at(counter-1).get('value') === key1)) {
        var newCard = new Card({lang: 'eng', id: counter, value: key1});
          cardCollection.add(newCard);

        counter++;
      }

    });
    return cardCollection;
    }

   }
 
return DeckCtor;

})(); 


//module.exports = newDeck;