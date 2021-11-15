// Assignment code here

// Prompt user to enter an amount for password between 8-128
//If character is less than 8, prompt user to use 8 or more
//If character is more than 128, prompt to use 128 or less
//If user puts nothing, alert user to enter amount
var passwordCharacters = window.prompt ("Please choose password length from 8 - 128 characters")
  if(passwordCharacters < 8 ) {
    window.alert("")
  }
  else if(passwordCharacters > 128) {
    window.alert("")
  }
  else(){ 
    window.alert("Please enter the character amount")
  }




//Dom element
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');

// Put function into randomFunc
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// Generate event listener - This tells us if items were selected
generateEL.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numbersEL.checked;
  const hasSymbol = symbolsEL.checked;
// CREATE ITEM BELOW, NO CHECKBOX
  console.log(hasLower, hasUpper, hasNumber, hasSymbol);

  resultEL.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length
    );
});

//Generate password function
function generatePassword(lower, upper, number, symbol, length){
  // Initialize a password variable
  let generatedPassword = "";
// Count number of items selected
  const typesCount = lower + upper + number + symbol;
    console.log('typesCount: ', typesCount);
  // Filter out unchecked types
  const typesArr = [{ lower }, { upper }, { number }, { symbol}].filter(
    item => Object.values(item)[0]
    );
    console.log('typesArr: ', typesArr);

  if(typeCount === 0) {
    return '';
  }
  // loop over length, call generator function for each type
  for(let i=0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }
  console.log(generatedPassword.slice(0, length));
  // Add final password to the password variable and return
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

// Generator functions - https://net-comber.com/charset.html

//Generate lower case letters, upper case letters, numbers, special characters and verify with console.log
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
  console.log(getRandomLower());

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
  console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
  console.log(getRandomNumber());

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]+=<>/,;:`~.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}
  console.log(getRandomSymbol());






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
