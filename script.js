// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//My work sofar
function generatePassword() {
  var length = prompt("Enter how many characters your password needs to be");
  while (length < 8 || length > 128) {
    alert("Number has to be between 8 and 128 characters");
    length = prompt("Enter how many characters your password needs to be");
  }
}


// //What I added
// function critSelect() {
//   var generateBtn = prompt("Please select the criteria you need for your password.");
//   alert (generateBtn);
// }

// generateBtn.addEventListener("click", critSelect);



// //created an array
// let critOptions = ["lowercase", "uppercase", "numeric", "special symbol"];
