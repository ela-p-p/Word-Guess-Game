
    var correctSelect = document.getElementById("correct");
    var incorrectSelect = document.getElementById("incorrect");
    var incorrectGuesses = document.getElementById("guesses");
    var winner = document.getElementById("wins");
    var loser = document.getElementById("losses");
    

    var list = ['peace', 'psychedelic', 'woodstock', 'hippy', 'free love', 'bob marley', 'the doors']
    var wordsForGame = list[Math.floor(Math.random() * list.length)];
    var guessWord = wordsForGame.replace(/[A-Z,a-z]/g, '_');
    correctSelect.textContent = guessWord;
    

    var text = "'";
    var wrongLetters = 0;
    
    
    document.onkeyup = function(event) {
        var pos = [];       
        var index = wordsForGame.indexOf(event.key);
        if (index == -1) { 
            wrongLetters +=1;
            if (wrongLetters >= 11) {
                lost()
                index.preventDefault();                
            }

            text = text + event.key;
            incorrectSelect.textContent = text.toLocaleUpperCase()  + "'".toUpperCase();
            incorrectGuesses.textContent = wrongLetters;
        } else {
            while(index > -1) {
                pos.push(index);
                index = wordsForGame.indexOf(event.key, index+1);
            }
            var swapWord = guessWord
            for (var a = 0; a < pos.length; a++) {
                swapWord = swapWord.substring(0, pos[a]) + event.key + swapWord.substr(pos[a]+1); 
            }
            correctSelect.textContent = swapWord.toUpperCase();
            guessWord = swapWord.toUpperCase();
        }
        if (guessWord.toLowerCase() == wordsForGame.toLowerCase()) {
            won()
        }
    }


// counter
    var winning = 0;
    var losing = 0;

    function lost(){
        correctSelect.textContent = wordsForGame        
        losing +=1;
        loser.textContent = losing;
            var item1 = document.getElementById("loser");
            item1.className=(item1.className=="card-img-top1")?'unhidden1':"card-img-top1";
        }
               
    

    function won(){
        winning +=1;
        winner.textContent = winning;
            var item2 = document.getElementById("winner");
            item2.className=(item2.className=="card-img")?"unhidden2":"card-img";
        }

     function reset() {
        document.getElementsById("button").onclick
        wrongLetters = 0;
       //hide win/lose images
    }
   
 



   


    