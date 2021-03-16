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

// lowercaseArray[]

// prompt user for length of password store as variable

// convert string to number parseInt()

// validated length of password

// isLowercase = confirm(do you want) etc

// declare optionsArray

// if (isLowercase) optionsArray.concat()

// shuffle array

// get random optionsArray character using index

//store in randomArray

//change randomArray to string

//set up main function
