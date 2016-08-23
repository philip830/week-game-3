// Global Variables
// *********************************************

var wordOptions = ["dog", "cat", "bird", "kangaroo", "snake", "turtle"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// Functions
//**********************************************

function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];
	lettersinWord = selectedWord.split("");
	numBlanks = lettersinWord.length;

	//Reset counters
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	for (var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
	}	

	//Change HTML to reflect round condition
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;

	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);	
	console.log(blanksAndSuccesses);	
}

function checkLetters(letter) {
//Check for letter
	var isLetterInWord  = false;

	for (var i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}

	//Confirm letter location and populate
	if (isLetterInWord) {
		for (var i=0; i<numBlanks; i++) {
			if(selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}

//Letter not found
	else {
		wrongLetters.push(letter);
		guessesLeft--
	}

	console.log(blanksAndSuccesses);

}	

function roundComplete() {
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " |Guesses Left " + guessesLeft);

	//Update the HTML to reflect current count stats
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
	document.getElementById("wrongLetters").innerHTML = wrongGuesses.join("  ");
	//Check if win :)
	console.log("In win")
	if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("You win");

		//Update HTML win counter
		document.getElementById("winCounter").innerHTML = winCount;
			
		startGame();
	}

	//Check if lose :(
	else if (guessesLeft == 0) {
		lossCount++;
		alert("You lose");

		//Update HTML loss counter
		//Update HTML win counter
		document.getElementById("lossCounter").innerHTML = lossCount;

		startGame();
	}
}

	


// Main Process
//**********************************************

//Game start//	
 startGame();

document.onkeyup = function (event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
	//Testing this code//
	console.log(letterGuessed);
}