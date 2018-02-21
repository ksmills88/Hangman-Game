
        //variables
        //======================================
        var wordBank = ["moana", "jasmine", "rapunzel", "simba", "tiana", "ursula", "kristoff"]
        var wins = 0;
        var loss = 0;
        var wrongLetter = [" "];
        var guessesLeft;
        var underScores = [];
        var userGuesses = [];
        var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        var randWordLength = randWord.length;
        var winCounter = 0;


        //Function
        //======================================
        
        
        function startGame(){
            //was here ===>randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
            
            console.log("random Word = " + randWord + "(length = " + randWordLength + ")");
            
            for(var i = 0; i <randWordLength; i++) {
                underScores.push("_");
               
            }
            //printing underscores to the screen
            document.getElementById("word-blanks").textContent = underScores.join(" ");
           //reset
           wrongLetter = [];
           guessesLeft = 10;

           //html
            document.getElementById("guesses-left").textContent = guessesLeft;
        }

        function winLose()
        {
            
            if(winCounter === randWord.length)
            {
                alert("you win");
                //console.log(underScores)
                console.log(i=randWordLength)
                whichImage();
                console.log(randWord);
                
                
               // startGame();
            }
            
            else if(guessesLeft === 0)
            {
                document.getElementById("guesses-left").textContent = guessesLeft;
                alert("you lose");
                whichImage();
              //  startGame();
            
            
            }
        }

        // function image(thisImg) {
        //     var img = document.createElement("IMG");
        //     img.src = "../images/"+thisImg;
        //     document.getElementById("imageDiv").appendChild(img);
        // }

//===========================

        function whichImage() {
            if (randWord === "tiana"){

                var img = new Image();
                var div = document.getElementById('imageDiv');
                
                img.onload = function() {
                div.appendChild(img);
                };
                
                img.src = '../Hangman-Game/assets/images/tiana.jpg';
            }
            if (randWord === "moana"){

                var img = new Image();
                var div = document.getElementById('imageDiv');
                
                img.onload = function() {
                div.appendChild(img);
                };
                
                img.src = '../Hangman-Game/assets/images/moana.jpg';
            }
            if (randWord === "jasmine"){

                var img = new Image();
                var div = document.getElementById('imageDiv');
                
                img.onload = function() {
                div.appendChild(img);
                };
                
                img.src = '../Hangman-Game/assets/images/jasmine.jpg';
            }
            if (randWord === "rapunzel"){

                var img = new Image();
                var div = document.getElementById('imageDiv');
                
                img.onload = function() {
                div.appendChild(img);
                };
                
                img.src = '../Hangman-Game/assets/images/rapunzel.jpg';
            }
            if (randWord === "simba"){

                var img = new Image();
                var div = document.getElementById('imageDiv');
                
                img.onload = function() {
                div.appendChild(img);
                };
                
                img.src = '../Hangman-Game/assets/images/simba.jpg';
            }
            if (randWord === "ursula"){

                var img = new Image();
                var div = document.getElementById('imageDiv');
                
                img.onload = function() {
                div.appendChild(img);
                };
                
                img.src = '../Hangman-Game/assets/images/ursula.jpg';
            }
            if (randWord === "kristoff"){

                var img = new Image();
                var div = document.getElementById('imageDiv');
                
                img.onload = function() {
                div.appendChild(img);
                };
                
                img.src = '../Hangman-Game/assets/images/kristoff.jpg';
            }
           



        }

//=========================

         // function whichImage() {
         //   if (randWord === "tiana"){
         //       document.getElementById("imageDiv").textContent ="../images/tiana.jpg";
        //    } else {}
        //     if (randWord == "moana"){
        //         image("mickey.png");
        //   }
       // }
        // User Guesses
        document.onkeyup = function(event)
        {
            userGuesses = event.key;
            
            
           
           if(randWord.indexOf(userGuesses) > -1)
           {
                for (var i = 0; i < randWord.length; i++ ) {
    
                
                    if (randWord[i] === userGuesses) {
                  
                    underScores[i] = userGuesses;
                    document.getElementById("word-blanks").textContent = underScores.join(" ");
                    console.log(underScores);
                    winCounter++;
                    winLose();
                    } 
                }       
           }
           else
           {
                if(!(wrongLetter.indexOf(userGuesses) > -1)) {
                
                wrongLetter.push(userGuesses);

               document.getElementById("wrong-guesses").textContent = wrongLetter;
               guessesLeft = guessesLeft - 1;
               document.getElementById("guesses-left").textContent = guessesLeft;
               console.log(wrongLetter);
               winLose();    
           }
        }
        }


        //Main game
        //=======================================
        startGame();
