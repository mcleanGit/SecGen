// Assignment Code -- develop from starter code
// character sets, as split arrays, from which password is developed
const alphaLc = "abcdefghijklmnopqrstuvwxyz".split("");
const alphaUc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const special = "!@#$%^&*()_-+=`~<>?".split("");
// special characters is subset of possible OWASP chars due to some reserved or confusing choices; e.g., space

// identify generate button in card-footer
var generateBtn = document.querySelector("#generate");

// Write password to the #password input on webpage window
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// develop criteria for password _inside_ generatePassword function (?)
/*function generatePassword = (length, characters) => {
  let password = "";
  for (i=0; i <length; i++) {
    password += characters.charAT(
      Math.floor(Math.random() * characters.length)
    );
  }
    return password;
};
*/

// These are now working!! May be a problem at end when Button needs to be used again?
function generatePassword() {
  var startSecGen = alert("Welcome to the SecGen Password Generator. Please click OK to begin selecting your Password criteria. Note: you must choose a valid Password length and at least one of the character-set choices.");

  var passwordLength = prompt("Please choose a password length. Type a number between 8 and 128.");

  // insert conditional requirements for criteria validation between var calls ?
  var alphaLc = prompt("Please indicate if you wish to include lower-case letters, abc, in your password.");

  var alphaUc = prompt("Please indcate if you wish to include upper-case letters, ABC, in your password.");

  var numbers = prompt("Please indicate if you wish to include numbers, 0-9, in your password.");

  var special = prompt("Please indicate if you wish to include special characters, !@#$etc, in your password.");

// sets limit requirements on passwordLength
if (passwordLength>=8 && passwordLength<=128 === true) {
  this.passwordLength = placeholder
}
else {
  alert("You must choose a Password length between 8 and 128. Please try again.");
}

}
