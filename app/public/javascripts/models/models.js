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
      {rus: 'Г', eng: 'G', vowel: false},
      {rus: 'Д', eng: 'D', vowel:false}, //5
      {rus: 'Е', eng: 'Ye', vowel:true},
      {rus: 'Ё', eng: 'Yo', vowel:true},
      {rus: 'Ж', eng: 'Zh', vowel:false},
      {rus: 'З', eng: 'Z', vowel:false},
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

    //Initlialize counters to give each letter matching IDs
    var matchCounter = 1;



    //One Backbone collection to hold all the cards. Will be shuffled later

    var cardCollection = new CardCollection({});

          //Generating the deck

        this.letters.forEach(function(key){
          
            //If the first letter is a vowel, make a new card with vowel: true
            if (key.vowel === true) {
              var rusCard = new Card({lang: 'rus',vowel: true, matchId: matchCounter, id: counter, value: key.rus});
              var engCard = new Card({lang: 'eng',vowel: true, matchId: matchCounter, id: counter, value: key.eng});
  
            } else {
              var rusCard = new Card({lang: 'rus', vowel: false, matchId: matchCounter, id: counter, value: key.rus});
              var engCard = new Card({lang: 'eng', vowel: false, matchId: matchCounter, id: counter, value: key.eng});
            }

            cardCollection.add(rusCard);
            cardCollection.add(engCard);
            
            counter++;  
            matchCounter++;
             

          });
        //Might need to do something about the empty models [0] in both collections

        return cardCollection;

    },

    this.shuffle = function(obj) {

      //Shuffle the cards
      var shuffled = _.shuffle(obj.models);

      //New collection for the shuffled cards
      var shuffledColl = new CardCollection({});


      //Add the each card to the new collection, in newly shuffled order
      shuffled.forEach(function(key){
        shuffledColl.add(key);
      });

      return shuffledColl;

    }

   }
 
return DeckCtor;

})(); 


var CardCollection = Backbone.Collection.extend();

var ClickedCollection = Backbone.Collection.extend({});


//module.exports = newDeck;