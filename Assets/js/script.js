//NOTE: at low passLength (e.g., 8), code doesn't technically work for including all 
//password variables if all are chosen. Not sure how to do this!

//START: THIS WAS CODE PROVIDED

// Get references to #generate element
var generateBtn = document.querySelector("#generate");

// Write password to #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
//END: THIS WAS CODE PROVIDED

//generate password, force lowercase to uppercase
function generatePassword() {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz"
    var upperCase = lowerCase.toUpperCase()
    var digits = "1234567890"
    var symbols = "!@#%^&*<>;:|"
    var characters = ""

    //define vars for nonexistant pass, so while loop has something to check against
    var password = ""
    var passLength = 0

    //prompt for password length (8 to 128 characters)
    while (passLength < 8 || passLength > 128) {
        passLength = prompt('Enter a password length from 8 to 128 characters');
    }
    // while characters is strictly equal to "", run through the variable questions until at least one question is picked
    while (characters === "") {
        if (confirm("Do you want lowercase characters?")) {
            characters += lowerCase;
        }
        if (confirm("Do you want UPPERCASE characters?")) {
            characters += upperCase;
        }
        if (confirm("Do you want digits (0-9)?")) {
            characters += digits;
        }
        if (confirm("Do you want special characters (e.g., @, $, #, etc.)?")) {
            characters += symbols;
        }
    }

    //iterate through "random" characters until you get to the desired passLength
    //math.floor necessary because need a rounded down number as you cant have a portion of a letter/character
    for (var ii = 0; ii < passLength; ii++) {
        var jj = Math.floor(Math.random() * characters.length);
        password += characters[jj];
    };

    return password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);