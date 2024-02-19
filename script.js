const output = document.getElementById("output");

const romanNumeral = [
  { 1000: "M" },
  { 900: "CM" },
  { 500: "D" },
  { 400: "CD" },
  { 100: "C" },
  { 90: "XC" },
  { 50: "L" },
  { 40: "XL" },
  { 10: "X" },
  { 9: "IX" },
  { 5: "V" },
  { 4: "IV" },
  { 1: "I" },
];
let outputValue = "";

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  outputValue = "";
  let input = parseInt(document.getElementById("number").value);
  if (!input) {
    output.classList.remove("hidden");
    output.classList.add("alert");
    output.innerText = "Please enter a valid number";
    return;
  } else if (input > 3999) {
    output.classList.remove("hidden");
    output.classList.add("alert");
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  } else if (input < 0) {
    output.classList.remove("hidden");
    output.classList.add("alert");
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }

  for (let i = 0; i < romanNumeral.length; i++) {
    const obj = romanNumeral[i];
    const key = parseInt(Object.keys(obj)[0]);
    const value = obj[key];

    console.log(key);
    console.log(input);

    while (key <= input) {
      outputValue += value;
      input -= key;
    }
  }
  output.classList.remove("hidden");
  output.classList.remove("alert");
  output.innerText = outputValue;
});
