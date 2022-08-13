// Generate password function -
function generatePassword() {
// Number, Letter, Symbol Array's
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCharacters = ['!', '@', '#', '%', '^', '&', '/', '*', '?', '+', '$', '.', '~', '-', '='];
let userAnswers = []
// Prompts to confirm characters 
  let length = prompt('How many characters would you like your password to contain?');
  if (length < 8 || length > 128) {
    alert("Password does not meet the requirements. It must be between 8 and 128 characters. Please make another selection.");
    return ("Please try again! Re-Click the generate password button below!");
  } else if (isNaN(length)) {
    length = prompt("Please enter a valid number for length of password.");
  } else {
    alert("Your password will be " + length + " characters long.");
  };

// Prompt Questions - Yes or No 
  let hasUpperCase = confirm('Would you like your password to include UPPER case letters?');
  if (hasUpperCase) {
    alert("Your password will contain at least 1 UPPER case letter.")
  } else {
    alert("You chose not to inclue an UPPER case letter.")
  };

  let hasLowerCase = confirm('Would you like your password to include lower case letters?');
  if (hasLowerCase) {
    alert("Your password will contain at least 1 lower case letter.")
  } else {
    alert("You chose not to include a lower case letter.")
  };

  let hasNumbers = confirm('Would you like your password to include numbers?');
  if (hasNumbers) {
    alert("Your password will contain at least 1 number.")
  } else {
    alert("You chose not to include a number.")
  };
  
  let hasSpecialCharacters = confirm('Would you like your password to contain special characters?');
  if (hasSpecialCharacters) {
    alert("Your password will contain at least 1 special character.")
  } else {
    alert("You chose not to include a number.")
  };

// Password Parameters - Bullions 
  if (hasUpperCase) {
    userAnswers = userAnswers.concat(upperCase); 
  };

  if (hasLowerCase) {
    userAnswers = userAnswers.concat(lowerCase)
  };

  if (hasNumbers) {
    userAnswers = userAnswers.concat(numbers)
  };

  if (hasSpecialCharacters) {
    userAnswers = userAnswers.concat(specialCharacters)
  };
  // Clarifying the password meets requirements - at least one of the above prompts must be true
  if (!hasUpperCase && !hasLowerCase && !hasNumbers && !hasSpecialCharacters) {
    alert("Password does not meet minimum requirements. Please re-try.")
  }
  // Results
  let results = []
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * userAnswers.length)
    let randomContent = userAnswers[randomIndex];
    results.push(randomContent);
  }
  console.log(results.join(""))
  return results.join("");
}
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  } 
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

