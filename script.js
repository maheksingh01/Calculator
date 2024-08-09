let outputScreen = document.getElementById("Output-Screen");

// Showing the digits and result to the input screen.
function display(num) {
  outputScreen.value += num;
}

function Clear() {
  outputScreen.value = "";
}

function Del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}

//Calculating the result through use of eval function.
function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid");
    Clear();
  }
}

// Try-catch: Used for Error handling, here we are handling error which comes when we put 2 operators together.
//eval function: It is global function in js that evaluate a specified string as javascript code and execute it.
//down-side of this function: It slows the code and not safe.
