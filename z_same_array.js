function sameArray(a, b) {

    if(Array.isArray(a) === false || Array.isArray(b) === false)
    {
        return "Invalid";
    }

    if (a.length !== b.length) {
        return false;
    }

    let i = 0;
    while (i < a.length) {
        if (a[i] !== b[i]) {
            return false;
        }
        i++;
    }
    return true;
}

// main function //
const A = "Hello Wrold";
const B = "[1, 2, 3, 5, 4]";
const result = sameArray(A, B)
console.log(result);

// sample input for chaking
/*

[null, 25, 35];
[null, 25, 35];

output - false
[1, 2, 3, undefined];
[1, 2, 3, 4];
*/
// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//         if (a[i] !== b[j]) {
//             return false;
//         }
//     }
// }