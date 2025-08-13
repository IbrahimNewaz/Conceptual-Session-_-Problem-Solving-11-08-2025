/*
Problem-02 : Valid Bangladeshi Number
⚠️
Function Name Must be validContact()
এবার ততোমার কাজ হললো validContact() নামে মে একটা ফাংশন তৈ তৈ রি রি করা, যা কি কি ছু শর্তে র্তে র্তে র ভি ভি ত্তি ত্তি তে তে যাচাই করবে বে একটা Contact number ভ্যালি লি ড কি কি না । একটি টি Contact number ভ্যালি লি ড হবার শর্ত র্ত হললো

- Contact Number টি টি অবশ্যই 11 digit এর হতে তে হবে বে ।
- Contact Number টি টি শুরু হবে বে "01" দি দি য়ে য়ে
- Contact Number এ ককোন স্পে স্পে স থাকা যাবে বে না ।

উপরে রে র শর্ত র্ত গুললো পুরন হলে লে ই সে সে true আউটপুট হি হি সে সে বে বে return করবে বে । না হলে লে false আউটপুট হি হি সে সে বে বে return করবে বে ।
📥 Input:
তত
ো
মার ফাংশন একটি টি ইনপুট নে নে বে বে যা হবে বে একটি টি স্ট্রি স্ট্রি ং। স্ট্রি স্ট্রি ং এর character গুললো অবশ্যই 0-9 এর ভে ভে তরে রে দে দে য়া হবে বে ।
🚀 Output:
তত
ো
মার ফাংশন টি টি একটা boolean Value (true/false) কে কে return করবে বে । অবশ্যই ততোমাকে কে কি কি ন্তু boolean value ই return করতে তে হবে বে ।
SAMPLE INPUT                                        SAMPLE OUTPUT
"01819234567"                                           true
"0181923 4567"                                          false
"018192345679"                                          false
["01987654321"]                                         "Invalid"
"01345678900"                                           true
"02145678900"                                           false
true                                                    "Invalid"
*/


function validContact(contact) {
    /* inner test case Checking That user input must be string data type or otherwise it will be considered Invalid input */
    if (typeof contact !== "string") {
        return "Invalid";
    }

    if (contact.startsWith("01") && contact.includes(" ") === false && contact.length === 11) {
        return true;
    }
    else {
        return false;
    }
}

const phoneNumber = "01819234567";
const checkingReuslt = validContact(phoneNumber);
console.log(checkingReuslt);