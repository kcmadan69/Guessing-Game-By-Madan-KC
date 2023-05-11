// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

// Get the elements from the HTML
const userGuessInput = document.getElementById("userGuess");
const submitButton = document.getElementById("submitGuess");
const feedbackText = document.getElementById("feedback");
const guessCountText = document.getElementById("guessCount");

// Add event listener to the submit button
submitButton.addEventListener("click", () => {
  // Get the user's guess
  const userGuess = parseInt(userGuessInput.value);

  // Increment the guess count
  guessCount++;

  // Check if the guess is correct
  if (userGuess === randomNumber) {
    feedbackText.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${guessCount} guesses.`;
    feedbackText.style.color = "green";
    userGuessInput.disabled = true;
    submitButton.disabled = true;
  } else if (userGuess < randomNumber) {
    feedbackText.textContent = "Too low! Try again.";
    feedbackText.style.color = "red";
  } else {
    feedbackText.textContent = "Too high! Try again.";
    feedbackText.style.color = "red";
  }

  // Update the guess count display
  guessCountText.textContent = guessCount;

  // Clear the input field
  userGuessInput.value = "";
});
