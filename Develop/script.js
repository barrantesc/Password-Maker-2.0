// Set variables for password generator and test with console.log
var upper = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'];
var lower = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
var number = ['0,1,2,3,4,5,6,7,8,9']
var symbol = ['~,`,!,@,#,$,%,^,&,*,(,),=,+,{,},<,>,?']

console.log(upper, lower, number, symbol);
// Do I need to set declare the password as well? Ex: var password; password = upper, lower, number, symbol;?
// Do I need to assign a var for length? 




//Ask How long password should be
//ask to enter amount from 8-128 characters (Wonder if this can be entered above^)
// Ask if they want uppercase, lower case, numbers and/or symbols. 
// Make sure to mention to press okay to confirm and cancel to decline 

// Loop for if another number is chosen outside range
// something like "please choose a valid answer"







// //Generate array with function of lower case letters, upper case letters, numbers and symbols.
// var randomLower = function () {
//   return String.fromCharCode(Math.floor((Math.random() * 26) +  97));
// }

// var randomUpper = function () {
//   return String.fromCharCode(Math.floor((Math.random() * 26) + 65));
// }

// var randomNumber = function () {
//   return String.fromCharCode(Math.floor((Math.random() *10) + 48));
// }

// var randomSymbol = function () {
//   return String.fromCharCode(Math.floor((Math.random() * 15) + 33));
// }

// // Verify array/function with console.log
// console.log(randomLower(),randomUpper(), randomNumber(), randomSymbol());

// //Declared Variables
// var confirmLength = "";
// var confirmLower;
// var confirmUpper;
// var confirmNumber;
// var confirmSymbol;

// //Prompt user to confirm password length
// function generatePassword() {
//   var confirmLength = window.prompt("How long would you like your password to be? (Can be from 8 to 128 characters)");
//     // Loop for outside parameters
//     while(confirmLength <= 8 || confirmLength >= 128) {
      
//     }

//     confirmUpper = confirm("Will the password contain uppercase letters? (Select OK to confirm or CANCEL to decline");
//     confirmLower = confirm("Will the password contain lowercase letters? (Select OK to confirm or CANCEL to decline");
//     confirmNumber = confirm("Will the password contain numbers? (Select OK to confirm or CANCEL to decline");
//     confirmSymbol = confirm("Will the password contain symbols? (Select OK to confirm or CANCEL to decline");

    
// }

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