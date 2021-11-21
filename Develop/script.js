// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Set variables for password generator and test with console.log
var upper = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'];
var lower = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
var number = ['0,1,2,3,4,5,6,7,8,9'];
var symbol = ['~,`,!,@,#,$,%,^,&,*,(,),=,+,{,},<,>,?'];

console.log(upper, lower, number, symbol);
// Do I need to set declare the password as well? Ex: var password; password = upper, lower, number, symbol;?
// Do I need to assign a var for length? 





function generatePassword() {
  console.log("Hey! You clicked the button!");

  // 1. Prompt the user for the password criteria
  //    a. Password Length 8 to 128
  //    b. Lowercase, uppercase, numbers, special characters
  //       - Press okay to confirm and cancel to decline
  // 2. Validate the input
  //    a. Loop for if another number is chosen outside range
  // 3. Generate Password


  // 4. Display password to the page
return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);