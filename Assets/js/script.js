//START THE PASSWORD GEN///////

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}




// VAR TO POP CHAR IN PASS WORD/////


function generatePassword() {
  let passArray  = [];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var nums = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChars = ["!","$","%","&","?"];

  var passLength = prompt("Password length must be between 8 and 128 characters."); 
  /// test////
  console.log(passLength);

}


// establish proper password length/////////////
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    window.alert("Please pick the correct format sir or mam");
    return "";
  } else {
    window.alert("You selected a password of " + passLength + " characters");
  }



  /// char propmpts////// 


  var lowerConfirm = confirm("YOU NEED to lower case letters in your password");
  var upperConfirm = confirm("YOU NEED to upper case letters in your password");
  var numsConfirm = confirm("YOU NEED  numbers in your password");
  var specialCharsConfirm = confirm("MUST Include special characters in your password");
  var confirmCombined = (lowerConfirm + upperConfirm + numsConfirm + specialCharsConfirm)


  if (!confirmCombined) {
    window.alert("WRONG CHOICE OF PASSWORD, TRY AGAIN!!.");
    return "";
  }
  


