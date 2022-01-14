// Assignment Code -- develop from starter code
// character sets, as split arrays, from which password is developed
const alphaLc = "abcdefghijklmnopqrstuvwxyz".split("");
const alphaUc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const special = "!@#$%^&*()_-+=`~<>?".split("");
// special characters is subset of possible OWASP chars due to some reserved or confusing choices; e.g., space

// identify generate button in card-footer
var generateBtn = document.querySelector("#generate");


// develop criteria for password _inside_ generatePassword function (?)
// These are now working!! May be a problem at end when Button needs to be used again?
var generatePassword = function() {

  var startSecGen = alert("Welcome to the SecGen Password Generator. Please click OK to begin selecting your Password criteria. Note: you must choose a valid Password length and OK at least one of the character-set choices.");

  var alphaLc = prompt("Please indicate if you wish to include lower-case letters, abc, in your password.");

  var alphaUc = prompt("Please indicate if you wish to include upper-case letters, ABC, in your password.");
    
  var numbers = prompt("Please indicate if you wish to include numbers, 0-9, in your password.");

  var special = prompt("Please indicate if you wish to include special characters, !@#$etc, in your password.");
  
  // password length criterion with re-prompt if out of range
   var passwordLength = prompt("Please choose a password length. Type a number between 8 and 128.");

    if (passwordLength>=8 && passwordLength<=128 === true) {
      this.passwordLength = placeholder;
    }
    else {
    alert("You must choose a Password length between 8 and 128. Please try again.");
  // repeats previous request 
    var passwordLength = prompt("Please choose a password length. Type a number between 8 and 128.");
    }

  }
/*

// all working up to here !!
// if no choices are made by the user, restart SecGen program -- not working ?
    var noChoices = function () {
    if (alphaLc && alphaUc && numbers && special === !true) {
    alert("You must choose at least one of the four character sets and a proper Password length. Please try again.");
   }
  }


// next does not appear to be working, although seemed to be working for length ?
// takes user input and stores placeholder choices of array content to password generator ? yes?
    if (alphaLc === true) {
      this.alphaLc = placeholder;
    }
    else {
      alphaLc = "";
    }
    
    if (alphaUc === true) {
      this.alphaLc = placeholder;
    }
    else {
      alphaLc = "";
    }
    
    if (numbers === true) {
      this.numbers = placeholder;
    }
    else {
      numbers = null;
    }

    if (special === true) {
      this.special = placeholder;
    }
    else {
      special = "";
    }

    

}


// sets password choices within generatePassword function ??
// not sure about this -- undefined
/*
var passwordChoices = {
    "alphaLc": "",
    "alphaUc": "",
    "numbers": null,
    "special": "",
  }

// effort to set placeholder or null set values for each character set
// sets placeholder or null set for alphaLc
  if (var=alphaLc === true) {
    this.passwordChoices.alphaLc = placeholder
  }
  else {
  passwordChoices.alphaLc = ""
  }

// sets placeholder or null set for alphaUc
  if (passwordChoices.alphaUc === true) {
  this.passwordChoices.alphaUc = placeholder
  }
  else {
  passwordChoices.alphaUc = ""
  }

// sets placeholder or null set for numbers
  if (passwordChoices.numbers === true) {
    this.passwordChoices.numbers = placeholder}
  else {
    passwordChoices.numbers = null
  }

//sets placeholder or null set for special characters
  if (passwordChoices.special === true) {
    this.passwordChoices.special = placeholder}
  else {
    passwordChoices.special = ""
  }
*/

/*
var password=""
  for (var i=0; i<passwordLength; i++){
    password=passwordChoices(
      Math.floor(Math.random()* characters.length)
    );
  }

  return password;
}

/* function generatePassword = (length, characters) => {
  let password = "";
  for (i=0; i <length; i++) {
    password += characters.charAT(
      Math.floor(Math.random() * characters.length)
    );
  }
    return password;
};

*/

// Write password to the #password input location on webpage window
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



