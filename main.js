const display = document.querySelector("#display");
const btn = document.querySelectorAll(".buttons button");
const clearBtn = document.querySelector("#clear");
const powerBtn = document.querySelector("#power");

clearBtn.addEventListener("click", () => {
  display.value = "";
});
btn.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    const value = buttons.textContent;
    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      calculate();
    } else if (value === "xʸ") {
      display.value += "**";
    } else if (value === "√") {
     display.value += "√(";
    } else {
      display.value += value;
    }
  });
});


function calculate() {
  try {
    let expression = display.value;

    
    expression = expression.replace(/√\(/g, 'Math.sqrt(');

    
    if (expression.includes('Math.sqrt(') && !expression.includes(')')) {
      display.value = "Səhv dəyər!";
      return;
    }

    
    display.value = eval(expression);
  } catch {
    display.value = "Xəta!";
  }
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function calculateTrig(funcName) {
  const degreeValue = parseFloat(display.value);

  if (isNaN(degreeValue)) {
    display.value = "Xəta!";
    return;
  }

  const radians = toRadians(degreeValue);
  let result;

  switch (funcName) {
    case "sin":
      result = Math.sin(radians);
      break;
    case "cos":
      result = Math.cos(radians);
      break;
    case "tan":
      result = Math.tan(radians);
      break;
    default:
      result = "Xəta!";
  }

  display.value = result.toFixed(4);
}
