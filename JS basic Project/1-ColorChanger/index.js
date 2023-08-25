const body = document.querySelector("body");
const button = document.querySelectorAll(".button");

const colorMap = {
  grey: "grey",
  white: "white",
  blue: "blue",
  yellow: "yellow",
  pink: "pink",
  green: "green",
  purple: "purple",
  orange: "orange",
  brown: "brown",
};

button.forEach((btn) => {
  //   console.log({ btn });
  btn.addEventListener("click", (btnEvent) => {
    //  M1 using switch

    // switch (btnEvent.target.id) {
    //   case "grey":
    //     body.style.backgroundColor = btnEvent.target.id;

    //   case "white":
    //     body.style.backgroundColor = btnEvent.target.id;

    //   case "blue":
    //     body.style.backgroundColor = btnEvent.target.id;

    //   case "yellow":
    //     body.style.backgroundColor = btnEvent.target.id;

    //   case "pink":
    //     body.style.backgroundColor = btnEvent.target.id;

    //   case "green":
    //     body.style.backgroundColor = btnEvent.target.id;

    //   case "purple":
    //     body.style.backgroundColor = btnEvent.target.id;

    //   case "orange":
    //     body.style.backgroundColor = btnEvent.target.id;

    //   case "brown":
    //     body.style.backgroundColor = btnEvent.target.id;

    //   default:
    // }

    //  M2 using map

    const color = colorMap[btnEvent.target.id] || "aquamarine";
    body.style.backgroundColor = color;
  });
});
