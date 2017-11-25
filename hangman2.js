var inquirer = require("inquirer");

var wordsList = ["Jurassic Park", "Star Wars", "Fast And Furious", 
"Justice League", "Thor"];

// Holds all of the wrong guesses
var wrongGuesses = [];

function Hangman(chosenWord) {
	this.chosenWord = chosenWord;

	// creates object that represents current word 
	this.word = function() {
		// Solution will be held here.
		this.chosenWord = "";

		// Solution is chosen randomly from wordList.
		this.chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];	

		console.log(chosenWord);		
	};

	// represents underscores or letters for each letter in current word
	this.letter = function() {
		// This will break the solution into individual letters to be stored in array.
		var lettersInChosenWord = [];	
	
		// This will be the number of blanks we show based on the solution
		var numBlanks = 0;	

		// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
		var blanksAndSuccesses = [];

		// The word is broken into individual letters.
  		lettersInChosenWord = this.chosenWord.split("");

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
	};
}

var guessesRemaining = 9;

var guess = function() {
	inquirer.prompt([
		{
			name: "letter",
			message: "Guess a letter!"
		}
	]).then(function(answers) {

		
		// if guess is correct with letter, then show on the screen 
		// if guess is incorrect, then console log to tell user guess is incorrect and guesses subtract 1
	})
}


guess();
game.word();
game.letter();

