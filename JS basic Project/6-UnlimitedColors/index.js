const startId = document.getElementById("start");
const stopId = document.querySelector("#stop");
const body = document.querySelector("body");

function randomColor(number) {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }

  return color;
}

let colorIntervalId;
function changeBGColor() {
  body.style.backgroundColor = randomColor();
}

const startChangeColor = function () {
  if (!colorIntervalId) {
    colorIntervalId = setInterval(changeBGColor, 800);
  }
};

const stopChangeColor = function () {
  clearInterval(colorIntervalId);
  colorIntervalId = null;
};

startId.addEventListener("click", startChangeColor);

stopId.addEventListener("click", stopChangeColor);
