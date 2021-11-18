var randomLower = function () {
  return String.fromCharCode(Math.floor((Math.random() * 26) +  97));
}

var randomUpper = function () {
  return String.fromCharCode(Math.floor((Math.random() * 26) + 65));
}

var randomNumber = function () {
  return String.fromCharCode(Math.floor((Math.random() *10) + 48));
}

var randomSymbol = function () {
  return String.fromCharCode(Math.floor((Math.random() * 15) + 33));
}
console.log(randomLower(),randomUpper(), randomNumber(), randomSymbol());

var confirmLength = "";
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSymbol;

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);