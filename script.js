// Assignment Code
var generateBtn = document.querySelector("#generate");

function critSelect() {
  var generateBtn = prompt("Please select the criteria you need for your password.");
  alert (generateBtn);
}

generateBtn.addEventListener("click", critSelect);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
