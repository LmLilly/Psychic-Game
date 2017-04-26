//List of choices for the computer with an array
var options = ["a"];
var GuessesLeft = 9

//Variable to hold wins and looses
var wins = 0;
var losses = 0;


	//User 
	document.onkeyup = function() {
		var userguess = String.fromCharCode(event.keyCode).
			toLowerCase(); //all keys are lower cases
		console.log (userguess);
	//var computerGuess = options[Math.floor(Math.random()*options.length)];
							//2.math,floor makes the number round down
	var computerGuess= "a"
	console.log(computerGuess);
	if (computerGuess === userguess){
		//wins
		console.log("user wins")
		wins = wins + 1
	} 
	else {
		//loose
		alert("try again")
		losses = losses + 1
	}
	GuessesLeft = GuessesLeft - 1
	console.log(GuessesLeft)
	console.log(wins)
	console.log(losses)


}