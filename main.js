const display = document.querySelector("#display")
const btn = document.querySelector("button")

function appendValue(val) {
  display.value += val;
}



function calculate() {
 
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Xəta!";
  }
}


function clearDisplay() {
  display.value = ""
}



function calculateSqrt() {
  
  const value = parseFloat(display.value);

  if (isNaN(value)) {
    display.value = "Səhv dəyər!";
    return;
  }

  if (value < 0) {
    display.value = "Mənfi ədəd!";
    return;
  }

  const result = Math.sqrt(value);
  display.value = result;
}
