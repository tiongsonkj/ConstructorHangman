var inquirer = require("inquirer");

// the words that the user will guess
var wordsList = ["batman", "superman", "wonderwoman", "cyborg", "aquaman"];

function Hangman(word, letter) {
	this.word = word;
	this.letter = letter;
}

// initialize the number of guesses
var numGuesses = 9;

var startGame = function() {

  // Solution is chosen randomly from wordList.
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

  // The word is broken into individual letters.
  lettersInChosenWord = chosenWord.split(""); 

  // We count the number of letters in the word.
  numBlanks = lettersInChosenWord.length;

  // We print the solution in console (for testing).
  console.log("\n")
  console.log(chosenWord);

  // CRITICAL LINE - Here we *reset* the guess and success array at each round.
  blanksAndSuccesses = [];
  // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
  wrongGuesses = [];

  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  // Print the initial blanks in console.
  console.log(blanksAndSuccesses);
  guess();
}
var guess = function() {
	inquirer.prompt([
		{
			name: "letter",
			message: "Guess a letter!",
      validate: function(value) {
        if (isNaN(value) === true) {
          return true;
        }
        return false;
      }
		}
	]).then(function(answers) {
      // This boolean will be toggled based on whether or not a user letter is found anywhere in the word.
      var letterInWord = false;

      for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === answers.letter) {
          letterInWord = true;
        }
      }
      // if answers (which is the user guess) is in the array of words, then display it on the screen. So, redisplay the blanks and successes
      if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {

          if (chosenWord[j] === answers.letter) {
            console.log("CORRECT!!!\n");
            blanksAndSuccesses[j] = answers.letter;
          }
        }
        console.log(blanksAndSuccesses);
        if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
          console.log("You win!")
        } else {
          guess();
        }
      } else {

        wrongGuesses.push(answers.letter);
        numGuesses--;
        console.log("INCORRECT LETTER!!!\n");
        console.log(numGuesses + " guesses remaining!!!\n");
        guess();
        if (numGuesses === 0) {
          console.log("\nYou lose!");
          console.log("Start over!");
          startGame();
          numGuesses = 9;
        }
      }      
	})
}

// calling the function to start the game
startGame();