/////---START PASS WORD APPLICATION----////

var generatePassword = function() {


var characterCount = window.prompt("Enter the count of characters betweek 8 and 128.");
  console.log(characterCount);

  if (characterCount >= 8 && characterCount <= 128) {

  var capitalLetterCheck = window.confirm("MUST include Capital letters?");
  console.log(capitalLetterCheck);

  var lowerCaseLetterCheck = window.confirm("MUST include Lower Case letters");
  console.log(lowerCaseLetterCheck);

  var specialCharacterCheck = window.confirm("MUST  include Special characters?");
  console.log(specialCharacterCheck);

  var numberCheck = window.confirm("MUST include Numbers?");
  console.log(numberCheck);
    
  }
  else {
    window.alert("You did not select the correct number of characters. Try again!")
    generatePassword();
  }}



  //// adding all Constants /////

  const capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","X","Y","Z"];
  const lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","x","y","z"];
