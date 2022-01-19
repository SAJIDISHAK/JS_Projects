var calculator = document.getElementById("Calculator");
var screen = document.getElementById("screen");
let screenValue = "";
var buttons = document.querySelectorAll("button");
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "×") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value += screenValue;
    } else if (buttonText == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "÷") {
      buttonText = "/";
      screenValue += buttonText;
      screen.value += screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
