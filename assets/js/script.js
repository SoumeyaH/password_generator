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
  var password = passwordArrayToString();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  userPasswordLength();
  validatePasswordLength();
  passwordLengthStringToNumber();
  confirmCharacterChoices();
  createOptionsArray();
  validateOptionsArray();
  shuffleOptionsArray();
  randomizeUserPassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt user for length of password
function userPasswordLength() {
  passwordLength = prompt("Pick a password length between 8 and 128");
  console.log(typeof passwordLength, passwordLength);
  return passwordLength;
}

// validated length of password
function validatePasswordLength() {
  if (passwordLength >= 8 && passwordLength <= 128) {
    return;
  } else {
    alert("Your password length MUST be between 8 and 128");
    // to do: break out at this point
  }
}

// convert passwordLengthNumber from type string to type number
function passwordLengthStringToNumber() {
  passwordLengthNumber = parseInt(passwordLength, 10);
  console.log(typeof passwordLengthNumber, passwordLengthNumber);
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
  console.log(optionsArray);

  if (isUpperCase) {
    optionsArray = optionsArray.concat(upperCaseArray);
  }
  console.log(optionsArray);
  if (isNumbers) {
    optionsArray = optionsArray.concat(numbersArray);
  }
  console.log(optionsArray);

  if (isSpecialCharacters) {
    optionsArray = optionsArray.concat(specialCharactersArray);
  }
  console.log(optionsArray);
  return optionsArray;
}

// validate length of optionsArray
function validateOptionsArray() {
  if (optionsArray.length === 0) {
    alert("You must pick at least one character type for your password");
    // to do: break out here
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

// get random optionsArray character using index using passwordlengthNumber
function randomizeUserPassword() {
  for (let i = 0; i < passwordLengthNumber; i++) {
    let randomCharacter =
      optionsArray[Math.floor(Math.random() * optionsArray.length)];
    randomizedPasswordArray.push(randomCharacter);
  }
  console.log(randomizedPasswordArray);
}

//change randomArray to string
function passwordArrayToString() {
  const password = randomizedPasswordArray.join("");
  console.log(password);
  return password;
}
