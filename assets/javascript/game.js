var correctSelect = document.getElementById("correct");
var incorrectSelect = document.getElementById("incorrect");
// popular culture
// wordsForGame = [""]

// for (words=0; words < wordsForGame.length; words++);
    // once word guessed or missed loop to next word to continue game

// Wins = update
// Losses = update
var wordsForGame = 'IZZY';

document.onkeyup = function(event) {
    var char = wordsForGame.toUpperCase.indexOf(event.key);

    if (char !== -1) {
        correctSelect.textContent.wordsForGame.replace = event.key;
    //     correctSelect.textContent.wordsForGame.replace = event.key;
    }
    else {
        incorrectSelect.textContent = event.key;
    }
       
 }
    


    