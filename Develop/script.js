// Assignment code here
//troubleshooting!

// var charactersNestedArray = [
//   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//   ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//   ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//     ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", ",", "-", ".", "/", ":", "'", ";", "<", ">", "?", "[", "]", "_", "{", "}", "|", "~"]
// ];

var passLength = 0;
// console.log("we are here1");
//prompt for password length (8 to 128 characters)
while (passLength < 8 || passLength > 128) {
    // console.log("we are here2");
    // alert message to user telling them they must select at least one variable from the following prompts in order to receive password
    passLength = window.prompt('Enter a password length (from 8 to 128 characters).');
    // console.log("we are here3");
    // console.log(passLength);
    //validate that entry is a number from 8 to 128, and a not any other letter/character
    if (passLength >= 8 || passLength <= 128) {
        //do nothing
        // console.log("we are here4");
    } else {
        // console.log("we are here5");
        passLength = 0;
        // console.log(passLength);
    }
}

// alert message to user telling them they must select at least one variable from the following prompts in order to receive password
window.alert('Select at least one password requirement from the following prompts to receive your secure password.');

//if user picks yes, confirm and move to next question

var answer;
var questionType;

function askQuestion(ii) {

    // var askQuestion = function(questionType) {
    // ask use if they want uppercase letters
    console.log(`Do you want your password to include ${ii}? Type Y or N.`);
    answer = window.prompt(
        `Do you want your password to include ${ii}? Type Y or N.`
    );

    // use switch case to carry out action
    switch (answer) {
        case 'Y':
        case 'y':
        case 'N':
        case 'n':
            break;

        default:
            // call shop() again to force player to pick a valid option
            askQuestion(ii);
            break;
    }
    return answer;
};

var upperCase = "n"
var lowerCase = "n"
var digits = "n"
var specialChar = "n"

function askQuestions() {
    upperCase = askQuestion("UPPERCASE letters");
    console.log(upperCase);

    lowerCase = askQuestion("lowercase letters");
    console.log(lowerCase);

    digits = askQuestion("numbers");
    console.log(digits);

    specialChar = askQuestion("special characters");
    console.log(specialChar);
};


while (upperCase == "n" && lowerCase == "n" && digits == "n" && specialChar == "n") {
    askQuestions();
}

// while (noes == 1) {
//     if (upperCase == "n") {
//         if (lowerCase == "n") {
//             if (digits == "n") {
//                 if (specialChar == "n") {
//                     askQuestions();
//                 } else { noes = 0 }
//             } else { noes = 0 }
//         } else { noes = 0 }
//     } else { noes = 0; }
// }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);