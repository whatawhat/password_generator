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



//My work so far
function generatePassword() {
  var length = prompt("Enter how many characters your password needs to be");
  while (length < 8 || length > 128) {
    alert("Number has to be between 8 and 128 characters");
    length = prompt("Enter how many characters your password needs to be");
  }

  var uppercase = prompt("Do you want uppercase letters?");
  var lowercase = prompt("Do you want lowercase letters?");
  var digits = prompt("Do you want any digits?");
  var special = prompt("Do you want any special symbols?");

  while (uppercase === "n" && lowercase === "n" && digits === "n" && special === "n") {
    alert("Please select at least one type of character.");
    uppercase = prompt("Do you want uppercase letters?");
    lowercase = prompt("Do you want lowercase letters?");
    digits = prompt("Do you want any digits?");
    special = prompt("Do you want any special symbols?");

  }
}

