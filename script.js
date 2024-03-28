// Assignment code here
function createPassword() {
  // Defining variables. User will select which variables end up in their password.
  let numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let specialChars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',];
  //Special Character list pulled from https://owasp.org/www-community/password-special-characters

  let selectedChars = [];

  //Alerts for user input/selections. Advise user if true or false and, if true, add to 'selectedChars' array above

  passwordLength = prompt("How long would you like your password to be?\nMinimim: 8 characters\nMaximum: 128 characters");
  if (passwordLength > 7 && passwordLength < 129) {
    alert("Your password will contain " + passwordLength + " total characters.");
  }
  else {
    return "Password must be between 8 and 128 characters.";
  }

  hasNumerics = confirm("Would you like numbers in your password?");
  if (hasNumerics) {
    alert("Your password will contain numbers.")
    selectedChars = selectedChars.concat(numericChars);
  } else {
    alert("Your password will not contain numbers.")
  }

  hasLowers = confirm("Would you like lowercase letters in your password?");
  if (hasLowers) {
    alert("Your password will contain lowercase letters.")
    selectedChars = selectedChars.concat(lowerChars);
  } else {
    alert("Your password will not contain lowercase letters.")
  }

  hasUppers = confirm("Would you like uppercase letters in your password?");
  if (hasUppers) {
    alert("Your password will contain uppercase letters.")
    selectedChars = selectedChars.concat(upperChars);
  } else {
    alert("Your password will not contain uppercase letters.")
  }

  hasSpecials = confirm("Would you like special characters in your password?\nExamples: @, &, /");
  if (hasSpecials) {
    alert("Your password will contain special characters.")
    selectedChars = selectedChars.concat(specialChars);
  } else {
    alert("Your password will not contain special characters.")
  }


  // Create new password using all of the inputs above + Math.random
  let newPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    let rng = [Math.floor(Math.random() * selectedChars.length)];
    newPassword = newPassword + selectedChars[rng];
  }
  return newPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
