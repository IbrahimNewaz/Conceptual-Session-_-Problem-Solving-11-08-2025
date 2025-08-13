/*
Task 1 :  
Create a Function sum  which take 2 value and return the sum of 2 number  
Create a Function multiply which take 2 value and return the sum of 2 number 
Suppose you have 2 numbers a , b  print the sum of  ( a + b)  and ( a x b ) using sum and 
multiply function. 

a           b          Output
2           3           11
4           5           29
*/
// User Defined Function //
function sum(numbera, numberb)
{
    let totalSum = numbera + numberb;
    return totalSum;
}
function multiply(numbera, numberb)
{
    let totalMulti = numbera * numberb;
    return totalMulti;
}

// Main Function //
const a = 4;
const b = 5;

let resUltSum = sum(a,b);
let resUltMulti = multiply(a,b);

const granDTotal = resUltSum + resUltMulti;
console.log(granDTotal);