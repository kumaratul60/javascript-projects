// const playButton = document.getElementById("#play-Button");
// const pauseButton = document.getElementById("pause-Button");
// const stopButton = document.getElementById("stop-Button");
// const textInput = document.getElementById("text");
// const speedInput = document.getElementById("speed");

// let currentCharacter;

// playButton.addEventListener("click", () => {
//   playText(textInput.value);
// });

// pauseButton.addEventListener("click", pauseText);

// stopButton.addEventListener("click", stopText);

// speedInput.addEventListener("input", () => {
//   stopText();
//   // resume playing text at exact character index what are currently add.
//   playText(utterance.text.substring(currentCharacter));
// });

// const utterance = new SpeechSynthesis(text);
// utterance.addEventListener("end", () => {
//   textInput.disable = false;
// });

// // to modify speed inout while speaking
// utterance.addEventListener("boundary", (e) => {
//   // charIndex=> it give the index of exact character at the very beginning of the word
//   //  ex: hello world => index of h is 0 and index of w is 6

//   currentCharacter = e.charIndex;
// });

// function playText(text) {
//   //speechSynthesisUtterance -> it specify how fast you speak, what text you speaking, what is voice is spoken
//   // speechSynthesis -> it allow to speak

//   if (speechSynthesis.paused && speechSynthesis.speaking) {
//     return speechSynthesis.resume();
//   }
//   if (speechSynthesis.speaking) return;
//   utterance.text = text;
//   utterance.rate = speedInput.value || 1;
//   textInput.disable = true; // to prevent from change in text while speaking

//   speechSynthesis.speak(utterance);
// }

// function pauseText() {
//   if (speechSynthesis.speaking) speechSynthesis.pause();
// }

// function stopText() {
//   // first resume then immediately cancel
//   speechSynthesis.resume();
//   speechSynthesis.cancel();
// }

const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const stopButton = document.getElementById("stop-button");
const textInput = document.getElementById("text");
const speedInput = document.getElementById("speed");
let currentCharacter;

playButton.addEventListener("click", () => {
  playText(textInput.value);
});
pauseButton.addEventListener("click", pauseText);
stopButton.addEventListener("click", stopText);
speedInput.addEventListener("input", () => {
  stopText();
  playText(utterance.text.substring(currentCharacter));
});

const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener("end", () => {
  textInput.disabled = false;
});
utterance.addEventListener("boundary", (e) => {
  currentCharacter = e.charIndex;
});

function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  if (speechSynthesis.speaking) return;
  utterance.text = text;
  utterance.rate = speedInput.value || 1;
  textInput.disabled = true;
  speechSynthesis.speak(utterance);
}

function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}

function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
