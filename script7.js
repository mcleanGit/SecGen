// Assignment Code -- develop from starter code  SecGen Password Generator
// character sets, as split arrays, from which password is developed, const or var ? confirmed in console.log !
const alphaLc = "abcdefghijklmnopqrstuvwxyz".split("");
const alphaUc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const specialChar = "!@#$%^&*()_-+=`~<>?".split("");
// special characters is subset of possible OWASP chars due to some reserved or confusing choices; e.g., space
// Assignment code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);
// begin generating password here
// currently goes through prompts and then write 'undefined' to textarea
function generatePassword() {
  alert("Welcome to the SecGen random Password Generator. Please click OK to begin selecting password criteria.");

//passwordCriteria object inside generatePassword function
  var passwordCriteria = {
    "length":0,
    "alphaLc":null,
    "alphaUc":null,
    "numbers":null,
    "specialChar":null,
  }

  // password length input
  while (!(passwordCriteria.length>=8 && passwordCriteria.length<=128)) {
    passwordCriteria.length=prompt("Please choose a password length. Type a number between 8 and 128.");
    if (!(passwordCriteria.length>=8 && passwordCriteria.length<=128)) {
      alert("The password length must be between 8 and 128 characters. Please enter a valid number.");
      }
    };

  var passwordAssembly= []

  var alphaLc = prompt("Please indicate if you wish to include lower-case letters, abc, in your password.");
    if (passwordCriteria.alphaLc==true) {
      passwordAssembly=passwordAssembly.concat(alphaLc);
    }
    else {alphaLc==null}

  var alphaUc = prompt("Please indicate if you wish to include upper-case letters, ABC, in your password.");
    if (passwordCriteria.alphaUc==true) {
      passwordAssembly=passwordAssembly.concat(alphaUc);
    } 
    else {alphaLc==null}

  var numbers = prompt("Please indicate if you wish to inlcude numbers, 0 through 9, in your password.");
    if (passwordCriteria.numbers==true) {
      passwordAssembly=passwordAssembly.concat(numbers);
    }
    else {numbers==null}

  var specialChar = prompt("Please indicate if you wish to include special characters,!@#$etc, in your password.");
    if (passwordCriteria.specialChar==true) {
      passwordAssembly=passwordAssembly.concat(specialChar);
    }
    else {alphaSpecialChar==null}

  };

// AT THIS POINT THE FUNCTION FALLS APART
// was expecting my Assembly [] array was holding the selected values ??
// was also hoping to include null choice case, but interrupts process ?
/*var passwordAssembly = function() {
    if (!alphaLc && !alphaUc && !numbers && !specialChar==true) {
      prompt("You must choose at least one of the four character sets for your password.");
      return passwordAssembly;passwordAssembly
    }
*/

// real difficulties however emerge here; various attempts at assembly and randomization
/* assembling function Array from four char arrays, and
// not quite clear on the randomization process [showing values from StackOverflow discussion here] ??
  var functionArray = [
    function getAlphaLc() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    function getAlphaUc() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    function getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    function getSpecialChar() {
      return String.fromCharCode(Math.floor(Math.random() *  19 + 52));
    }
  ]
// these seem redundant to me, since selection was supposed to be accomplished above ??
/* checks user selections from passwordAssembly including empty minima
  if (alphaLc === true) {
    minimumAlphaLc = functionArray[0];
    minimumCount++;
  }
  if (alphaUc === true) {
    minimumAlphaUc = functionArray [1];
    minimumCount++;
  }
  if (numbers === true) {
    minimumNumbers = functionArray [2];
    minimumCount++;
  }
  if (specialChar === true) {
    minimumSpecialChar = functionArray [3];
    minimumCount++;
  }
// alternative reflexions on the randomization function
// this one base on the four arrays
  var randomPasswordGenerated = "";
// loop
  for (let i = 0; i(parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
  }
// this being my initial idea to pick up from the assembly arrays
// var passwordAssembly =
//  [concat(alphaLc + alphaUc + numbers + specialChar)];
  var password = ""
  for (var i = 0; i < passwordCriteria.length; i++) {
    password = passwordAssembly.concat[alphaLc + alphaUc + numbers + specialChar]
    [Math.floor(Math.random() * passwordAssembly.length)]);
 };
 console.log(random)

// Write password to #password input
    function writePassword () {
      var password = generatePassword();
      var passwordText = document.querySelector("password");

      passwordText.value = password;
    };
*/

