const validWords = [
  "apple",
  "grape",
  "peach",
  "berry",
  "melon",
  "lemon",
  "mango",
  "cherry",
  "plums",
  "pears",
];

let testWord = [];
let button = document.getElementById("submitGuess");
let elements = document.getElementById("guessInput"); // The input field
let rowCounter = 1; // To keep track of the row number (turn)
let greenCounter = 0; // To count the number of green letters (correct positions)
let maxRows = 6; // Max rows (attempts)
let gameOver = false;

// Fetch a random word from the valid words list
function fetchRandomWord() {
  testWord =
    validWords[Math.floor(Math.random() * validWords.length)].split("");
}

// Initialize the game by fetching a random word
fetchRandomWord();

button.addEventListener("click", function () {
  // If the game is over, stop accepting guesses
  if (gameOver) return;

  // Read user input and split into an array of characters
  let guess = elements.value.toLowerCase().split("");
  console.log("User guess:", guess);

  // Make sure the user enters a 5-letter word
  if (guess.length !== 5) {
    alert("Please enter a 5-letter word.");
    return;
  }

  // Find the row elements for the current guess
  let row = document.querySelectorAll(`.row${rowCounter}`);
  let greenLetters = []; // To store correctly placed letters
  let checkLetters = []; // To track letters for yellow checking
  let yellowLetters = []; // To store letters in wrong positions

  // Reset the greenCounter for each guess
  greenCounter = 0;

  // Reset the color of the boxes in the row before applying new colors
  row.forEach((box) => {
    box.classList.remove("green", "yellow", "gray");
  });

  // Process each letter in the guess
  for (let i = 0; i < guess.length; i++) {
    // If the guess letter matches the test word letter at the same index
    if (guess[i] === testWord[i]) {
      row[i].textContent = guess[i].toUpperCase(); // Correct letter in correct position
      row[i].classList.add("green"); // Add green color
      greenLetters.push(guess[i]); // Track correct letters
      greenCounter++;
    } else {
      row[i].textContent = guess[i].toUpperCase(); // Incorrect position, show the letter
      checkLetters.push(guess[i]); // Store for further checking
      row[i].classList.add("gray"); // Initially mark as gray for incorrect letters
    }
  }

  // Check for yellow letters (correct letter, wrong position)
  for (let i = 0; i < guess.length; i++) {
    if (!greenLetters.includes(guess[i]) && testWord.includes(guess[i])) {
      if (!yellowLetters.includes(guess[i])) {
        yellowLetters.push(guess[i]);
        // Check if the letter is in the wrong position
        for (let j = 0; j < guess.length; j++) {
          if (
            guess[j] === yellowLetters[0] &&
            row[j].classList.contains("gray")
          ) {
            row[j].classList.remove("gray");
            row[j].classList.add("yellow");
            break;
          }
        }
      }
    }
  }

  // After processing the guess, check the game status
  if (greenCounter === 5) {
    // If all letters are correct (green), the player wins
    setTimeout(function () {
      alert("Congratulations! You guessed today's word.");
    }, 600);
    gameOver = true;
  } else {
    // Move to the next row/turn
    rowCounter++;

    // If the player runs out of attempts (6 turns), end the game
    if (rowCounter > maxRows) {
      setTimeout(function () {
        alert("Game over! Better luck next time.");
      }, 600);
      gameOver = true;
    }
  }

  // Clear the input field after each guess
  elements.value = "";
  elements.focus(); // Focus back to input
});
