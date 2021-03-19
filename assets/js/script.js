// to do each time i hit generate it just adds to old password

// declaring global variables
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

let passwordLength;
let passwordLengthNumber;
let isUpperCase;
let isLowercase;
let isNumbers;
let isSpecialCharacters;
let optionsArray = [];
let randomizedPasswordArray = [];

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  userPasswordLength();
  validatePasswordLength();
  passwordLengthStringToNumber();
  confirmCharacterChoices();
  createOptionsArray();
  validateOptionsArray();
  shuffleOptionsArray();
  randomizeUserPassword();

  var password = passwordArrayToString();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", refreshPage);
generateBtn.addEventListener("click", writePassword);

// to do make it stop appending new password to old
// generateBtn.addEventListener("click", refreshPage);

// reloads page when button clicked
// function refreshPage() {
//   window.location.reload();
// }

// prompt user for length of password
function userPasswordLength() {
  passwordLength = prompt("Pick a password length between 8 and 128");
  return passwordLength;
}

function refreshPage() {
  window.location.reload();
}

// validated length of password
function validatePasswordLength() {
  if (passwordLength >= 8 && passwordLength <= 128) {
    return;
  } else {
    alert("Your password length MUST be between 8 and 128");
    userPasswordLength();
    // refreshPage();
  }
}

// convert passwordLengthNumber from type string to type number
function passwordLengthStringToNumber() {
  passwordLengthNumber = parseInt(passwordLength, 10);
  return passwordLengthNumber;
}

// confirm which characters user wants to put in password
function confirmCharacterChoices() {
  isLowercase = confirm("Do you want lowercase characters in your password?");

  isUpperCase = confirm("Do you want uppercase characters in your password?");

  isNumbers = confirm("Do you want number characters in your password?");

  isSpecialCharacters = confirm(
    "Do you want special characters in your password?"
  );
}

// add user characters choices to an array
function createOptionsArray() {
  if (isLowercase) {
    optionsArray = optionsArray.concat(lowerCaseArray);
  }

  if (isUpperCase) {
    optionsArray = optionsArray.concat(upperCaseArray);
  }
  if (isNumbers) {
    optionsArray = optionsArray.concat(numbersArray);
  }

  if (isSpecialCharacters) {
    optionsArray = optionsArray.concat(specialCharactersArray);
  }
  return optionsArray;
}

// validate length of optionsArray
function validateOptionsArray() {
  if (optionsArray.length === 0) {
    alert("You must pick at least one character type for your password");
    //  todo remember password length
    confirmCharacterChoices();
  }
}

// use fisher yates algorithm to shuffle optionsArray
function shuffleOptionsArray() {
  let newPosition, temp;
  let arr = [];
  for (let i = optionsArray.length - 1; i > 0; i--) {
    newPosition = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[newPosition];
    arr[newPosition] = temp;
  }
}

// get random optionsArray character using index using passwordLengthNumber
function randomizeUserPassword() {
  for (let i = 0; i < passwordLengthNumber; i++) {
    let randomCharacter =
      optionsArray[Math.floor(Math.random() * optionsArray.length)];
    randomizedPasswordArray.push(randomCharacter);
  }
  return randomizedPasswordArray;
}

//change randomArray to string
function passwordArrayToString() {
  const userPassword = randomizedPasswordArray.join("");
  return userPassword;
}
