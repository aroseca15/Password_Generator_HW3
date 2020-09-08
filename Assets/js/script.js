// Constants
const generateBtn = document.querySelector("#generate");
const lowerCaseLetters = ['abcdefghijklmnopqrstuvwxyz'];
const upperCaseLetters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const numbers = ['1234567890'];
const specialCharacters = ['!@$&%^&*()'];
let validCharacters = " "
let validPassword = " "

// Functions
function getPasswordOptions() {
  // This was a section that I worked with my tutor on. He mentioned that it would be a good idea to get in the habit of setting up the invaild options in addition to the valid options.
  let length = parseInt(
    prompt('How long does your password need to be?'));
  if (isNaN(length) === true) {
    alert('Must be a numeric character.');
    return;
  }
  if (length < 8) {
    alert('Your password is more secure with at least 8 characters.');
    return;
  }
  if (length > 128) {
    alert('I cannot generate a password over 128 characters.');
    return;
  }
  let hasLowerCaseLetters = confirm('Do you want lowercase letters in password?');
  let hasUpperCaseLetters = confirm('Do you want uppercase letters in password?');
  let hasSpecialCharacters = confirm('Do you want Special Charaters in password?');
  let hasNumbers = confirm('Do you want Numbers letters in password?');
  if (
    hasSpecialCharacters === false &&
    hasUpperCaseLetters === false &&
    hasNumbers === false &&
    hasLowerCaseLetters === false
  ) {
    alert('I need at least one type of character to generate for you.');
    return;
  }
// I tried to run to whole program as an 'if' 'else'. In the end my tutor was right, instead of making each posibility an 'if, else' put all false in one spot. I decided to use only 'if' statements for valid characters. 

  if (hasUpperCaseLetters) {
    validCharacters += upperCaseLetters;
  }

  if (hasLowerCaseLetters) {
    validCharacters += lowerCaseLetters;
  }

  if (hasSpecialCharacters) {
    validCharacters += specialCharacters;
  }

  if (hasNumbers) {
    validCharacters += numbers;
  }
  // The for loop was difficult at first. But it ended up being that I put a space between the '<' and '='.
  for (let i = 1; i <= length; i++) {
    let index = Math.floor(Math.random() * validCharacters.length)
    validPassword += validCharacters[index]

  };

  console.log(validPassword)

  const passwordText = document.querySelector("#password");

  passwordText.value = validPassword;


  // let passwordOptions = {
  //   length: length
  // }

}




/**
 * writes a generated password to the #password
 */
// function writePassword() {
//   const password = generatePassword();
//   const passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// /**
//  * generate a password based on certain criteria
//  */
// function generatePassword(){

//   // Password is currently blank! We need to make a better one
//   let password = "";





//   return password;
// }

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOptions);
