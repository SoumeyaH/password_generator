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

// declare options array
let optionsArray = [];
console.log(optionsArray);

// confirm which characters to put in password. if yes add to options array.
if (confirm("Do you want lowercase characters in your password?")) {
  optionsArray = optionsArray.concat(lowerCaseArray);
  console.log(optionsArray);
} else if (confirm("Do you want uppercase characters in your password?")) {
  optionsArray = optionsArray.concat(upperCaseArray);
} else if (confirm("Do you want number characters in your password?")) {
  optionsArray = optionsArray.concat(numbersArray);
} else if (confirm("Do you want special characters in your password?")) {
  optionsArray = optionsArray.concat(specialCharactersArray);
}

// make sure they pick at least 1 option

// shuffle array

// get random optionsArray character using index

//store in randomArray

//change randomArray to string

//set up main function
