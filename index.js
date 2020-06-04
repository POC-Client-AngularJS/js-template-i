// Import stylesheets
import "./style.css";

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  /*
   * Perform operations on form submit.
   */
  let strSampleString = document.getElementById("idInpSampleString").value;
  document.getElementById("idSpanReversedString").innerHTML = reverseString1(
    strSampleString
  );
  /*
   * You must return "false" to prevent the default form behavior.
   */
  return false;
}

var form = document.getElementById("idFormStringReverse");
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}
