// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log(passwordText);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//My work so far
function generatePassword() {
  var length = prompt("Enter how many characters your password needs to be");
  if (length < 8 || length > 128) {
    alert("Number has to be between 8 and 128 characters. Please click button again.");
    return;
  }

  var uppercase = confirm("Do you want uppercase letters?");
  var lowercase = confirm("Do you want lowercase letters?");
  var digits = confirm("Do you want any digits?");
  var special = confirm("Do you want any special symbols?");
console.log(uppercase);

  // while (uppercase === "n" && lowercase === "n" && digits === "n" && special === "n") {
  //   alert("Please select at least one type of character.");
  //   uppercase = prompt("Do you want uppercase letters?");
  //   lowercase = prompt("Do you want lowercase letters?");
  //   digits = prompt("Do you want any digits?");
  //   special = prompt("Do you want any special symbols?");
  // }

  var password = "";
  var allChar = "";
  if (uppercase) {
    var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    password += uppercaseString[Math.floor(Math.random()*uppercaseString.length)]
    allChar += uppercaseString;
  }
  if (lowercase) {
    var lowercaseString = "abcdefghijklmnopqrstuvwxyz"
    password += lowercaseString[Math.floor(Math.random()*lowercaseString.length)]
    allChar += lowercaseString;
  }
  if (digits) {
    var digitsString = "1234567890"
    password += digitsString[Math.floor(Math.random()*digitsString.length)]
    allChar += digitsString;
  }
  if (special) {
    var specialString = "!@#$%^&*()\"\'+=,-./;:<>?[]_\\`~{}|"
    password += specialString[Math.floor(Math.random()*specialString.length)]
    allChar += specialString;
  }

  console.log("This is my message before the for loop " + password);

  for (var i=password.length; i<length; i++) {
    password += allChar[Math.floor(Math.random()*allChar.length)];
  }
  return password;
}

