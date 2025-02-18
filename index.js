const buttonValues = [
  "AC",
  "+/-",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

const rightSymbols = ["÷", "×", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

const display = document.querySelector(".display");

let A = 0;
let operator = null;
let B = null;

function clearAll() {
  A = 0;
  operator = null;
  B = null;
  display.value = "";
}

buttonValues.forEach((buttonValue) => {
  const button = document.createElement("button");
  button.textContent = buttonValue;

  if (buttonValue === "0") {
    button.style.width = "200px";
    button.style.gridColumn = "span 2";
  }
  if (rightSymbols.includes(buttonValue)) {
    button.style.backgroundColor = "#ff9500";
  } else if (topSymbols.includes(buttonValue)) {
    button.style.backgroundColor = "#d4d4d2";
    button.style.color = "#1c1c1c";
  }

  button.addEventListener("click", function () {
    if (rightSymbols.includes(buttonValue)) {
      if (buttonValue === "=") {
        if (A !== null) {
          B = display.value;
          display.value = "";
          let numA = Number(A);
          let numB = Number(B);
          if (operator === "÷") {
            display.value = numA / numB;
          } else if (operator === "×") {
            display.value = numA * numB;
          } else if (operator === "+") {
            display.value = numA + numB;
          } else if (operator === "-") {
            display.value = numA - numB;
          }
        }
      } else {
        operator = buttonValue;
        A = display.value;
        display.value = "";
      }
    } else if (topSymbols.includes(buttonValue)) {
      if (buttonValue === "AC") {
        clearAll();
      } else if (buttonValue === "+/-") {
        if (display.value !== "" && display.value !== "0") {
          if (display.value[0] === "-") {
            display.value = display.value.slice(1);
          } else {
            display.value = "-" + display.value;
          }
        }
      } else if (buttonValue === "%") {
        display.value = Number(display.value) / 100;
      }
    } else if (buttonValue === ".") {
      if (display.value !== "" && !display.value.includes(buttonValue)) {
        display.value += buttonValue;
      }
    } else if (display.value === "0") {
      display.value = buttonValue;
    } else {
      display.value += buttonValue;
    }
  });

  document.querySelector(".buttons").appendChild(button);
});
