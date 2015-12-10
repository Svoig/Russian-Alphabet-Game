var Backbone = require('backbone');

(var deck = function() {



var rusLetters = Backbone.Collection.extend({

});

var engLetters = Backbone.Collection.extend({

});

var rusArray = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Э','Ю','Я'];

var engArray = ['A','B','V','G','D','Ye','Yo','Zh','Z','I','Y','K','L','M','N','O','P','R','S','T','U','F','Kh','Ts','Ch','Sh','Shch','Yu','Ya'];


var Card = Backbone.Model.extend(
  {
    defaults: {vowel: false}
  });

function newDeck() {
  var vowels = ['А','Я','Э','Е','У','Ю','О','Ё','И']ж
  var deck = [];
  rusArray.forEach(function(key){
    for(var i in vowels) {
      if (vowels[i] === rusArray[key]) {
        var newCard = new Card({vowel: true, id: key+1, value: russArray[key]});
      } else var newCard = new Card({vowel: false, id: key+1, value: russArray[key]});
    }
    deck[deck.length] = newCard;
  })
  return deck;
}

/*var Deck = {

}

return Deck; */
})();
