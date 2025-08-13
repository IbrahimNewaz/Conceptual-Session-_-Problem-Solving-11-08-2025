/*
Problem-04: Valid Proposal
Function Name Must be validProposal()
একটি টি matrimony website এর জন্য ততোমাকে কে একটা ফাংশন লি লি খে খে দি দি তে তে হবে বে । যাতে তে তারা খুব সহজে জে ই দুইজন মানুষে ষে র বায়য়োডাটা এনালাইসি সি স করে রে বুঝতে তে পারে রে যে যে তাদে দে র মধ্যে ধ্যে ধ্যে বি বি বাহ সম্ভব কি কি সম্ভব না । 2 জন মানুষে ষে র ভে ভে তর বি বি বাহ সম্ভব কি কি না তা কি কি ছু শর্তে র্তে র্তে র ভি ভি ত্তি ত্তি তে তে নি নি র্ধ র্ধারন করতে তে হবে বে ।

- ২ জন কে কে ভি ভি ন্ন জে জে ন্ডারে রে র হতে তে হবে বে ।
- ২ জনে নে র Age difference 7 বছরে রে র বে বে শী হওয়া যাবে বে না । ( 💡explore Math.abs() )

এই শর্ত র্ত গুললো পুরন হলে লে ই ততোমার ফাংশন true return করবে বে ।

🟩 INPUT
ফাংশনটি টি দুটি টি ইনপুট গ্রহণ করবে ।
● ১ম ইনপুট: একটি টি অবজে জে ক্ট
● ২য় ইনপুট: একটি টি অবজে জে ক্ট
প্রতি তি টি টি অবজে জে ক্টে ক্টে ৩টি টি প্র প্র োপার্টি র্টি র্টি থাকবে বে :
● name: string (ব্যক্তি ক্তি র নাম)
● gender: string (male/female)
● age: number (ব্যক্তি ক্তি র বয়স)

🟦 OUTPUT
- যদি দি দুইজনে নে র মধ্যে ধ্যে ধ্যে সব শর্ত র্ত পূর্ণ র্ণ হয়, তাহলে লে ফাংশনটি টি true রি রি টার্ন র্ন করবে বে।
- ককোন একটি টি শর্ত র্ত মি মি থ্যা হলে লে function টি টি false return করবে বে ।

🟥 Challenge
 ইনপুট গুললো যদি দি অব্জে ব্জে ক্ট না হয় তাহলে লে ফাংশন "Invalid" return করবে বে ।

SAMPLE INPUT                                                                SAMPLE OUTPUT
{ name: "Rahul", gender: "male", age: 28 },
{ name: "Joya", gender: "female", age: 21 }                                     true

{ name: "milon", gender: "male", age: 20 },
{ name: "sumi", gender: "female", age: 25 }                                     true

{ name: "shuvo", gender: "male", age: 20 },
{ name: "joy", gender: "male", age: 25 }                                        false

{ name: "toya", gender: "female", age: 20 },
{ name: "kader", gender: "male", age: 25 }                                      true

{ name: "toya", gender: "female", age: 24 },
{ name: "bjoy", gender: "male", age: 32 }                                       false
 
"Mizan", 
{ name: "mitu", gender: "male", age: 32 }                                       Invalid

{ name: "mitu", gender: "male", age: 32 }, 
"Mizan"                                                                         Invalid
*/


function validProposal(person1, person2) {

    if(typeof person1 !== "object" || typeof person2 !== "object")
    {
        return "Invalid"
    }

    if (person1.gender === person2.gender) {
        return false
    }

    if (Math.abs(person1.age - person2.age) > 7) {
        return false;
    }

    return true;

}

// main function and testing ground //
const clientA = { name: "toya", gender: "female", age: 24 };
const clientB = { name: "bjoy", gender: "male", age: 32 };
const matchMaking = validProposal(clientA, clientB);
console.log(matchMaking);