//START THE PASSWORD GEN///////

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}




// VAR TO POP CHAR IN PASS WORD/////

function generatePassword
