/*
Problem-03 : Admission Success (📚 Will He Succeed?)
⚠️
Function Name Must be willSuccess()
রাফি ফি , বি বি শ্ববি বি দ্যালয়ে য়ে র ভর্তি র্তি র্তি পরীক্ষার প্রস্তুতি তি নি নি চ্ছে চ্ছে । 🎓📖 সে সে বি বি ভি ভি ন্ন মডে ডে ল টে টে স্ট দি দি য়ে য়ে ছে ছে এবং প্রতি তি বার ভি ভি ন্ন ভি ভি ন্ন নম্বর পে পে য়ে য়ে ছে ছে । কি কি ন্তু সে সে দুশ্চি শ্চি ন্তায় আছে ছে — সে সে কি কি চূড়ান্ত পরীক্ষায় সফল হতে তে পারবে বে ? রাফি ফি র জন্য তুমি মি willSuccess() নামে মে একটা ফাংশন লি লি খে খে দাও , যে যে টা একটা Number এর Array ইনপুট নে নে বে বে এবং রাফি ফি র রে রে জাল্ট এনালাইসি সি স করে রে রাফি ফি কে কে guideline দি দি বে বে ।
মডে ডে ল টে টে স্টে স্টে 50 বা তার বে বে শী মার্ক র্ক মানে নে হললো Pass। আর 50 এর নি নি চে চে পাওয়া মানে নে হললো Fail.
- যদি দি Pass করা পরীক্ষার সংখ্যা Fail করা পরীক্ষার সংখ্যা থে থে কে কে বে বে শি শি হয়, তাহলে লে সে সে মনে নে করবে বে যে যে সে সে প্রস্তুত এবং ফাংশন true রি রি টার্ন র্ন করবে বে
- অন্যথায়, সে সে মনে নে করবে বে এখননো প্রস্তুতি তি যথে থে ষ্ট নয় এবং ফাংশন false রি রি টার্ন র্ন করবে বে

🟩 INPUT
- ফাংশন টি টি Input নেবে একটি টি Array
- Array তে তে Number Type এর ডাটা ই থাকবে।
- Example: [55 , 75 , 41 , 33 , 0 , 87 , 91 , 30 ]

🟦 OUTPUT
ফাংশন টি টি একটা boolean Value (true/false) কে কে return করবে বে ।
অবশ্যই ততোমাকে কে  কিনতু boolean value ই return করতে তে হবে বে ।

🟥 Challenge
যদি দি ইনপুট টি টি Array না হয় তাহলে লে "Invalid" স্ট্রি স্ট্রি ং রি রি টার্ন র্ন করবে বে ।

SAMPLE INPUT                                SAMPLE OUTPUT
[60, 70, 80, 40, 30]                        true
[48 , 48 , 92 , 100 ]                       false
[48, 48, 50, 50, 100]                       true
[ ]                                         false
[ 90 ]                                      true
[ 90 , 99 , 87 , 48 , 34 , 49 ]             false

"100 , 100"                                 "Invalid"
90                                          "Invalid"
*/

function willSuccess(marks) {

    if(Array.isArray(marks) !== true)
    {
        return "Invalid";
    }
    
    let pass = 0;
    let fail = 0;
    for (const number of marks) {
        if (number >= 50) {
            pass++;
        }
        else {
            fail++;
        }
    }

    if (pass > fail) {
        return true;
    }
    else {
        return false;
    }

}

// Main function Testing Ground //
const exaMMark = [60, 70, 80, 40, 30];
const guideline = willSuccess(exaMMark);
console.log(guideline);
