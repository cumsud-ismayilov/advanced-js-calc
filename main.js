const display = document.querySelector("#display")
const btn = document.querySelector("button")
const clearBtn = document.querySelector("#clear")


clearBtn.addEventListener("click",()=>{
    display.value = ""
})


function appendValue(val) {
  btn.addEventListener("click",()=>{
     display.value += val;
  })
}



function calculate() {
 
  try {
    display.value = eval(display.value);
    
  } catch {
    display.value = "Xəta!";
  }
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




function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function calculateTrig(funcName) {
  const display = document.getElementById("display");
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




