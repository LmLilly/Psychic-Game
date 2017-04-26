//List of choices for the computer with an array
var options = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var GuessesLeft = 9

//Variable to hold wins and looses
var wins = 0;
var losses = 0;
var computerGuess = options[Math.floor(Math.random()*26)];
							//2.math,floor makes the number round down
console.log(computerGuess)

	//User 
	document.onkeyup = function() {
		var userguess = String.fromCharCode(event.keyCode).
			toLowerCase(); //all keys are lower cases
		console.log (userguess);
							
	if (computerGuess === userguess){
		//wins
		console.log("user wins")
		wins = wins + 1
	} 
	else {
		//loose
		//alert("try again")
		losses = losses + 1
	}
	GuessesLeft = GuessesLeft - 1

	console.log(GuessesLeft)
	console.log(wins)
	console.log(losses)

	$("#Wins .count").text(wins)
	$("#Losses .count").text(losses)
	$("#GuessesLeft .count").text(GuessesLeft)
	$("#YourGuessesSoFar .count").append(userguess+", ")


}