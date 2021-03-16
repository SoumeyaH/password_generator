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
// convert string to number parseInt()

// validated length of password

const passwordLength = prompt("What length password do you want?");
console.log(typeof passwordLength, passwordLength);

if (passwordLength >= 8 && passwordLength <= 128) {
  console.log("yes");
} else {
  alert("Please pick a password length between 8 and 128");
}

const passwordLengthNumber = parseInt(passwordLength);
console.log(typeof passwordLengthNumber, passwordLengthNumber);

// function validatedPasswordLength(passwordLengthNumber) {

// }

// if (passwordLength === NaN) {
//   alert("Please pick a valid number");
// }

// console.log(passwordLengthNumber);
// const passwordLengthNumber = parseInt(passwordLength);

// function isNumber(passwordLengthNumber) {
//   if (passwordLengthNumber === NaN) {
//     alert("Please pick a valid number");
//   }
// }

// isLowercase = confirm(do you want) etc

// declare optionsArray

// if (isLowercase) optionsArray.concat()

// shuffle array

// get random optionsArray character using index

//store in randomArray

//change randomArray to string

//set up main function
