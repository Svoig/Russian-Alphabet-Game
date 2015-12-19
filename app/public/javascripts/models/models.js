//var Backbone = require('backbone');

//A module to create a new deck of cards for a new round
var Deck = (function() {
  
  //THe actual card constructor. RIght now it should return a new Card with a value, id, and vowel properties needed to start the game
  var Card = Backbone.Model.extend(
    {
      defaults: {vowel: false}
    });

  function DeckCtor() {

    this.letters = [
      {rus:'А', eng: 'A', vowel: true},
      {rus: 'Б', eng: 'B', vowel: false},
      {rus: 'В', eng: 'V', vowel: false},
      {rus 'Г', eng: 'G', vowel: false},
      {rus: 'Д', eng: 'D', vowel:false}, //5
      {rus: 'Е', eng: 'Ye', vowel:true},
      {rus: 'Ё', eng: 'Yo', vowel:true},
      {rus: 'Ж', eng: 'Zh', vowel:false},
      {rus: 'З', eng: 'Z' vowel:false},
      {rus: 'И', eng: 'I', vowel:true}, //10
      {rus: 'Й', eng: 'Y', vowel:false},
      {rus: 'К', eng: 'K', vowel:false},
      {rus: 'Л', eng: 'L', vowel:false},
      {rus: 'М', eng: 'M', vowel:false},
      {rus: 'Н', eng: 'N', vowel:false},  //15
      {rus: 'О', eng: 'O', vowel:true},
      {rus: 'П', eng: 'P', vowel:false},
      {rus: 'Р', eng: 'R', vowel:false},
      {rus: 'С', eng: 'S', vowel:false},
      {rus: 'Т', eng: 'T', vowel:false}, //20
      {rus: 'У', eng: 'U', vowel:true},
      {rus: 'Ф', eng: 'F', vowel:false},
      {rus: 'Х', eng: 'Kh', vowel:false},
      {rus: 'Ц', eng: 'Ts', vowel:false},
      {rus: 'Ч', eng: 'Ch', vowel:false}, //25
      {rus: 'Ш', eng: 'Sh', vowel:false},
      {rus: 'Щ', eng: 'Shch', vowel:false},
      {rus: 'Ъ', eng: 'Hard sign', vowel:false},
      {rus: 'Ы', eng: 'Ui', vowel:true},
      {rus: 'Ь', eng: 'Soft sign', vowel:false}, //30
      {rus: 'Э', eng: 'E', vowel:true},
      {rus: 'Ю', eng: 'Yu', vowel:true},
      {rus: 'Я', eng: 'Ya', vowel:true}, //33

    ];

   this.generate = function() {

    //Initialize a counter to give each card a unique ID
    var counter = 0;

    //Initlialize counters to give each letter matching IDs in both languages
    var rusCounter = 1;

    var engCounter = 1;


    //Backbone collections to keep the active deck organized by language

    var CardCollection = Backbone.Collection.extend();

    var rusCollection = new CardCollection({});
    var engCollection = new CardCollection({});

          //Generating the deck

        this.letters.forEach(function(key){

          
            //If the first letter is a vowel, make a new card with vowel: true
            if (key.vowel === true) {
              var rusCard = new Card({lang: 'rus',vowel: true, matchId: rusCounter, id: counter, value: key.rus});
              var engCard = new Card({lang: 'eng',vowel: true, matchId: rusCounter, id: counter, value: key.eng});
              //Increment the counter, and add the new card to the deck
              counter++;
              if(newCard.matchId === undefined) {
                newCard.set("matchId", rusCounter);
              }
              rusCounter++;

            } else {
              var rusCard = new Card({lang: 'rus', vowel: false, matchId: rusCounter, id: counter, value: key.rus});
              var engCard = new Card({lang: 'eng', vowel: false, matchId: rusCounter, id: counter, value: key.eng});
            }

            rusCollection.add(rusCard);
            engCollection.add(engCard);
             

          });

        });

        var allCards = {rus: rusCollection, eng: engCollection};

        return allCards;

    },

    this.shuffle = function(obj) {
     
      var rusShuffled = new CardCollection({});
      var engShuffled = new CardCollection({});

      for(var i=0; i<33; i++) {
        var rusKey = obj.rus.sample().rus;
        var engKey = obj.eng.sample().eng;

        rusShuffled.add(rusKey);
        engShuffled.add(engKey);
      }

    }

   }
 
return DeckCtor;

})(); 

var ClickedCollection = Backbone.Collection.extend({});


//module.exports = newDeck;