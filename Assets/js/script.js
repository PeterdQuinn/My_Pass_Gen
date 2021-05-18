// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// variables for characters to populate the password
function generatePassword() {
  let passArray  = [];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var nums = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChars = ["!","$","%","&","?"];

  var passLength = prompt("Please Choose a  password length between 8 and 128 characters."); 
  console.log(passLength);

  // conditional to establish proper password length
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    window.alert("Pick a valid option");
    return "";
  } else {
    window.alert("Your password is " + passLength + " characters");
  }

  // character prompts
  var lowerConfirm = confirm("YOU NEED  lower case letters in your password");
  var upperConfirm = confirm("YOU NEED  upper case letters in your password");
  var numsConfirm = confirm("YOU NEED   numbers in your password");
  var specialCharsConfirm = confirm("YOU NEED special characters in your password");

  var confirmCombined = (lowerConfirm + upperConfirm + numsConfirm + specialCharsConfirm)

  if (!confirmCombined) {
    window.alert("Please pick at least one valid character option.");
    return "";
  }

  // stores the character criteria that is selected via prompts
  let selectedCriteria = []

  // conditionals to decide which characters populate when password is generated
  if (lowerConfirm === true) {
    selectedCriteria.push(...lowerCase);
  }

  if (upperConfirm === true) {
    selectedCriteria.push(...upperCase);
  }

  if (numsConfirm === true){
    selectedCriteria.push(...nums);
  }

  if (specialCharsConfirm === true) {
    selectedCriteria.push(...specialChars);
  }

  for (var i = 0; i < passLength; i++) {
    var number = Math.floor(Math.random() * Math.floor(selectedCriteria.length));
    var value = selectedCriteria[number];
    passArray.push(value);
  }

  if (passArray.length > 0) {
    password = passArray.join(''); 
    return password;
  }
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
