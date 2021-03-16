// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// declare arrays
const lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharactersArray = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// prompt user for length of password store as variable
const passwordLength = prompt("What length password do you want?");
console.log(typeof passwordLength, passwordLength);

// validated length of password
if (passwordLength >= 8 && passwordLength <= 128) {
  console.log("yes");
} else {
  alert("Please pick a password length between 8 and 128");
}

// convert string to number parseInt()
const passwordLengthNumber = parseInt(passwordLength);
console.log(typeof passwordLengthNumber, passwordLengthNumber);

//confirm which characters to put in password.
const wantLowercase = confirm(
  "Do you want lowercase characters in your password?"
);
const wantUpperCase = confirm(
  "Do you want uppercase characters in your password?"
);
const wantNumbers = confirm("Do you want number characters in your password?");

const wantSpecialCharacters = confirm(
  "Do you want special characters in your password?"
);

// declare options array
let optionsArray = [];
console.log(optionsArray);

//if yes add to options array.
if (wantLowercase) {
  optionsArray = optionsArray.concat(lowerCaseArray);
} else if (wantUpperCase) {
  optionsArray = optionsArray.concat(upperCaseArray);
} else if (wantNumbers) {
  optionsArray = optionsArray.concat(numbersArray);
} else if (wantSpecialCharacters) {
  optionsArray = optionsArray.concat(specialCharactersArray);
}

console.log(optionsArray);

// make sure they pick at least 1 option
// if optionsArray length === 0 alert

if (optionsArray.length === 0) {
  alert("You must pick at least one character type for your password");
}

// shuffle array

// get random optionsArray character using index

//store in randomArray

//change randomArray to string

//set up main function
