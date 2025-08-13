/*
Create a function countVowels which take a string as input and returns the total number of vowels
in that string . If the input is not a string return "Invalid"

Input                           Output
"data"                             2
"Jhankar miA"                      3
"Dulal uddin"                      4
["Jhankar miA"]                 Invalid
109                             Invalid
"108"                              0
*/

// User Defined Function //
function countVowels(str) {

    
    let totaLVow = 0;
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++)
    {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            totaLVow++;
        }
    }
    return totaLVow;
}

// Main Function //
const StR = "Jhankar miA";
const totalNumber = countVowels(StR);
console.log(totalNumber);
