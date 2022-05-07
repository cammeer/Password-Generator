//at low passLength (e.g., 8), code doesn't technically work for including all password variables if all are chosen. not sure how to do this

//START THIS WAS CODE PROVIDED

// Get references to #generate element
var generateBtn = document.querySelector("#generate");

// Write password to #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
//END THIS WAS CODE PROVIDED

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
    // 
    while (characters === "") {
        if (confirm("Should your password include lowercase characters?")) {
            characters += lowerCase;
        }
        if (confirm("Should your password include UPPERCASE characters?")) {
            characters += upperCase;
        }
        if (confirm("Should your password include digits (0-9)?")) {
            characters += digits;
        }
        if (confirm("Should your password include special characters (e.g., @, $, #, etc.)?")) {
            characters += symbols;
        }
    }


    for (var ii = 0; ii < passLength; ii++) {
        var jj = Math.floor(Math.random() * characters.length);
        password += characters[jj];
    };

    return password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);