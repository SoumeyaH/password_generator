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
const passwordLength = prompt("Pick a password length between 8 and 128");
console.log(typeof passwordLength, passwordLength);

// validated length of password
if (passwordLength >= 8 && passwordLength <= 128) {
  console.log("yes");
} else {
  alert("Your password length MUST be between 8 and 128");
}

// convert string to number parseInt()
// added ,10
const passwordLengthNumber = parseInt(passwordLength, 10);
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
}
console.log(optionsArray);

if (wantUpperCase) {
  optionsArray = optionsArray.concat(upperCaseArray);
}
console.log(optionsArray);
if (wantNumbers) {
  optionsArray = optionsArray.concat(numbersArray);
}
console.log(optionsArray);

if (wantSpecialCharacters) {
  optionsArray = optionsArray.concat(specialCharactersArray);
}
console.log(optionsArray);

// validate length of optionsArray
if (optionsArray.length === 0) {
  alert("You must pick at least one character type for your password");
}

//use fisher yates algorithm to shuffle optionsArray
let shuffleArray = function (arr) {
  let newPosition, temp;
  for (let i = optionsArray.length - 1; i > 0; i--) {
    newPosition = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[newPosition];
    arr[newPosition] = temp;
  }
};

shuffleArray(optionsArray);
console.log(optionsArray);

// get random optionsArray character using index using passwordlengthNumber

//store in randomArray

// password array doesnt want to be array
for (let i = 0; i < passwordLengthNumber; i++) {
  let x = optionsArray[Math.floor(Math.random() * optionsArray.length)];
  let arrayX = [x];
  console.log(arrayX);
}

//change randomArray to string

// .join('') - will do string with no commas

//set up main function
