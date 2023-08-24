// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables for guesses and score
let numberOfGuesses = 0;
let userScore = 0;

// Function to start the game
function startGame() {
  const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

  // Check if the guess is valid
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    startGame();
    return;
  }

  numberOfGuesses++;

  // Check if the guess is correct
  if (userGuess === randomNumber) {
    userScore += 100 - (numberOfGuesses - 1) * 10;
    alert(`Congratulations! You guessed the number ${randomNumber} in ${numberOfGuesses} guesses. Your score is ${userScore}.`);
  } else if (userGuess < randomNumber) {
    alert("Try a higher number.");
    startGame();
  } else {
    alert("Try a lower number.");
    startGame();
  }
}

// Start the game
startGame();


