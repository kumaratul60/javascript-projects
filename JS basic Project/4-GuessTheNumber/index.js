let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validate(guess);
  });
}

function validate(guess) {
  if (guess > 100 || guess < 1 || isNaN(guess)) {
    alert("Enter a number between 1 and 100");
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage("Congratulations! You guessed it right.");
    endGame();
  } else {
    displayMessage(
      guess < randomNum ? "Number is Too low" : "Number is Too high"
    );
  }
}

function displayGuess(guess) {
  userInput.value = "";
  userInput.focus();
  // guessSlot.textContent += guess + " ";
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = ` You have ${11 - numGuess} attempts left`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameBtnRef = document.querySelector("#newGame");
  newGameBtnRef.addEventListener("click", (e) => {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = ` You have ${11 - numGuess} attempts left`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = "";
  userInput.disabled = true;

  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id= "newGame">Start new Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
