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


//What I added
function critSelect() {
  var generateBtn = prompt("Please select the criteria you need for your password.");
  alert (generateBtn);
}

generateBtn.addEventListener("click", critSelect);



//created an array
let critOptions = ["lowercase", "uppercase", "numeric", "special symbol"];


//create a function - what I did
var length = "";
function passLength() {
var length = prompt("Enter how many characters yourpassword needs to be");
if (length < 8) {
  "Number has to be at least 8";
}
else if (length > 128)
  "Number has to be less than 129";
} else {
  "Thank you!";
}
