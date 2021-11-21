// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Set variables for password generator and test with console.log
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "~`!@#$%^&*()=+{}<>?";

console.log(upper, lower, number, symbol);
// Do I need to set declare the password as well? Ex: var password; password = upper, lower, number, symbol;?
// Do I need to assign a var for length? 

//User input variables
var confirmPasswordLength = "";
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSymbol;


function generatePassword() {
  var combineCharacters = ""
  console.log("Hey! You clicked the button!");

  // 1. Prompt the user for the password criteria
  //    a. Password Length 8 to 128
  var confirmLength = window.prompt("How long would you like your password to be? (Choose between 8 to 128 characters)");
if (confirmLength < 8 || confirmLength > 128) {
    alert("Please chose a character between 8 and 128");
    return ""
  }
  //    b. Lowercase, uppercase, numbers, special characters
  //       - Press okay to confirm and cancel to decline
  confirmUpper = confirm("Do you want uppercase letters?(Select OK to confirm and CANCEL to decline)");
  confirmLower = confirm("Do you want lowercase letters?(Select OK to confirm and CANCEL to decline)");
  confirmNumber = confirm("Do you want numbers?(Select OK to confirm and CANCEL to decline)");
  confirmSymbol = confirm("Do you want symbols?(Select OK to confirm and CANCEL to decline)");
  
  if (confirmUpper) {
    combineCharacters += upper;
  }

  if (confirmLower) {
    combineCharacters += lower;
  }

  if (confirmNumber) {
    combineCharacters += number;
  }

  if (confirmSymbol) {
    combineCharacters += symbol;
  }

  if (combineCharacters.length === 0) {
    alert("Please choose at least one type of character")
    return ""
  }
  
  var randomPassword = "";
  // 2. Validate the input
  //    a. Loop for if another number is chosen outside range
  for(var i = 0; i < confirmLength; i++) {

    // 3. Generate Password   
    var randomIndex = Math.floor(Math.random() * combineCharacters.length);
    randomPassword += combineCharacters[randomIndex]

  }

  // 4. Display password to the page
return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);