/**
---------- using querySelectorAll---------------

for both  querySelectorAll & querySelector

if class then use document.querySelectorAll(".clock");

if id then use document.querySelectorAll("#clock");

*/

// const clock = document.querySelectorAll("#clock");
// console.log(clock);
// setInterval(function () {
//   const date = new Date();

//   // M1 using for loop

//   /*
//     for (const clockRef of clock) {
//         clockRef.innerHTML = date.toLocaleTimeString();
//     }

//   */

//   // M1 using forEach loop
//   clock.forEach(function (clockRef) {
//     clockRef.innerHTML = date.toLocaleTimeString();
//   });
// }, 1000);

/**
---------- using querySelector---------------
*/

// const clock = document.querySelector(".clock");
// console.log(clock);
// setInterval(function () {
//   const date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);

/**
---------- using getElementById---------------
*/

// const clock = document.getElementById("clock");

// setInterval(() => {
//   const date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);

/**
---------- using getElementsByClassName---------------
*/
const clock = document.getElementsByClassName("clock");

setInterval(() => {
  const date = new Date();

  for (const clockRef of clock) {
    clockRef.innerHTML = date.toLocaleTimeString();
  }
}, 1000);
