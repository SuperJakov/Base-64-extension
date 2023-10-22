// Algorithm
let encodedString = "";
function encodeBase64(string) {
  // Encode the String
  encodedString = window.btoa(string);

  // return base64 string
  return encodedString;
  // function ended
}
let decodedString = "";
function decodeBase64(string) {
  // decode

  decodedString = window.atob(string);

  // return non-base64 string
  return decodedString;
  // function ended
}

// Functions
const resultElement = document.querySelector(".js-result");

function displayResult(resultText) {
  resultElement.innerText = resultText;
  console.log(`resultText: ${resultText}`);
  // const resultDiv = document.querySelector(".result-container");
}