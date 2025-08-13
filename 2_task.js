/*
Create a function sumOfArray which takes an array and returns the sum of that array.
If the input is not an array and if any data not a number found in the array , it will return ‘Invalid’
Input                           Output
[1,2,3]                             6
[3 , 7 , 8 ]                        29
[3 , 5 , "eksho" , 3 ]              Invalid
10                                  Invalid
*/

// User Defined Function //
function sumOfArray(arr) {
    
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum = sum + arr[i];
        i++;
    }
    return sum;

}

const A = [3, 7, 8];
const sumTotal = sumOfArray(A);