const base64InputElement = document.querySelector(".js-base64-input");

const encodeButton = document.querySelector(".js-encode-button"); // selected element with class js-encode-button and put it in variable "encodeButton"
const decodeButton = document.querySelector(".js-decode-button"); // selected element with class js-decode-button and put it in variable "decodeButton"

let result; // make a changable variable called "result"

encodeButton.addEventListener("click", () => {
  result = encodeBase64(base64InputElement.value);
  displayResult(result);
}); // listen for every click for variable "encodeButton"

decodeButton.addEventListener("click", () => {
  result = decodeBase64(base64InputElement.value);
  displayResult(result);
}); // listen for every click for variable "decodeButton"
