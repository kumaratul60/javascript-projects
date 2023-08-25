const form = document.querySelector("form");
console.log(form);
// this use case will give you empty value
// const height = partInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0 || height > 1000) {
    results.innerHTML = `Please enter a valid height between 1 and 1000.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight greater than 0.`;
  } else {
    results.innerHTML = `Your BMI is ${calculateBMI(weight, height)}`;
  }
});

function calculateBMI(weight, height) {
  if (weight <= 0 || height <= 0) {
    throw new Error("Weight and height must be positive values.");
  }

  const bmi = weight / ((height * height) / 10000);

  if (bmi <= 18.6) {
    return `Underweight (${bmi.toFixed(2)})`;
  } else if (bmi > 18.6 && bmi <= 24.9) {
    return `Normal (${bmi.toFixed(2)})`;
  } else {
    return `Overweight (${bmi.toFixed(2)})`;
  }
}
