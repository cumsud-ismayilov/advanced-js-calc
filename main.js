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
    } else if (value === "π") {
      display.value += "π";
    } else if (value === "eˣ") {
      display.value += "e^(";
    } else if (value === "log") {
      display.value += "log(";
    } else if (value === "ln") {
      display.value += "ln(";
    } else if (value === "sin") {
      display.value += "sin(";
    } else if (value === "cos") {
      display.value += "cos(";
    } else if (value === "tan") {
      display.value += "tan(";
    } else {
      display.value += value;
    }
  });
});

function calculate() {
  try {
    let expression = display.value
      .replace(/√\(/g, "Math.sqrt(")
      .replace(/π/g, "Math.PI")
      .replace(/e\^\(/g, "Math.exp(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/ln\(/g, "Math.log(");
    display.value = eval(expression);
  } catch {
    display.value = "Xəta!";
  }
}

window.toRad = function (x) {
  return (x * Math.PI) / 180;
};

function sin(x) {
  return Math.sin(toRad(x));
}
function cos(x) {
  return Math.cos(toRad(x));
}
function tan(x) {
  return Math.tan(toRad(x));
}
