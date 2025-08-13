/*
Create a function sumOfArray which takes an array and returns the sum of that array.
If the input is not an array and if any data not a number found in the array , it will return ‘Invalid’
Input                           Output
[1,2,3]                             6
[3 , 7 , 8 ]                        18
[3 , 5 , "eksho" , 3 ]              Invalid
10                                  Invalid
*/

// User Defined Function //
function sumOfArray(arr) {


    if (Array.isArray(arr) == false) {
        return "Invalid";
    }
    else {
        let sum = 0;
        let i = 0;
        while (i < arr.length) {
            if (typeof arr[i] !== "number") {
                return "Invalid";
            }
            else {
                sum = sum + arr[i];

            }
            i++;  
        }
        return sum;
    }
}

const A = [3, 5, "eksho", 3];
const sumTotal = sumOfArray(A);
console.log(sumTotal);