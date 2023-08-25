const randomNum = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessList = document.querySelector(".guesses");
const remainingAttempts = document.querySelector(".remainingAttempts");
const lowOrHi = document.querySelector(".lowOrHi");

let numGuess = 1;
let playGame = true;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (!playGame) return;

  const guess = parseInt(userInput.value);
  validate(guess);
});

function validate(guess) {
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    displayMessage("Enter a number between 1 and 100");
  } else {
    makeGuess(guess);
  }
}

function makeGuess(guess) {
  const li = document.createElement("li");
  li.textContent = guess;
  guessList.appendChild(li);
  numGuess++;

  if (guess === randomNum) {
    displayMessage("Congratulations! You guessed it right.");
    endGame();
  } else {
    displayMessage(
      guess < randomNum ? "Number is Too low" : "Number is Too high"
    );
    remainingAttempts.textContent = 11 - numGuess;
    if (numGuess > 10) {
      displayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    }
  }
  userInput.value = "";
  userInput.focus();
}

function displayMessage(message) {
  lowOrHi.textContent = message;
}

function endGame() {
  playGame = false;
  userInput.disabled = true;

  const newGameBtn = document.createElement("button");
  newGameBtn.textContent = "Start New Game";
  newGameBtn.id = "newGame";

  newGameBtn.addEventListener("click", function () {
    resetGame();
  });

  document.querySelector(".resultParas").appendChild(newGameBtn);
}

function resetGame() {
  playGame = true;
  numGuess = 1;
  randomNum = Math.floor(Math.random() * 100) + 1;
  guessList.innerHTML = "";
  remainingAttempts.textContent = 10;
  userInput.value = "";
  lowOrHi.textContent = "";
  userInput.disabled = false;
  document.querySelector("#newGame").remove();
  userInput.focus();
}
