/*
Problem-05: Let’s Calculate Total Sleep Time

Function Name Must be calculateSleepTime()
রাকি কি ব অফি ফি সে সে কাজ করতে তে করতে তে ঘুমি মি য়ে য়ে যায়।
যার কারনে নে সে সে সকল কাজ সঠি ঠি ক সময় শে শে ষ করতে তে পারে রে না ।
তার এমন একটা ফাংশন দরকার যার মধ্যমে মে office ঘুমাননোর টটোটাল সময় টা তি তি নি নি ক্যালকুলে লে ট করে রে দে দে খতে তে চান এবং সে সে ই সময় টুকু বাসায় এসে সে অফি ফি সে সে র কাজ করতে তে চান।
তমার কাজ হচ্ছে চ্ছে calculateSleepTime() নামে মে একটি টি ফাংশন তৈ তৈ রি রি করা,
যা একটি টি Array ইনপুট হি হি সে সে বে বে নে নে বে বে । Array তে তে রাকি কি বে বে র ঘুমাননোর সময় (seconds) গুললো সংখ্যা আকারে রে থাকবে বে । ফাংশনটি টি Array থে থে কে কে মমোট সময় বে বে র করে রে সে সে টি টি কে কে ঘণ্টা, মি মি নি নি ট এবং সে সে কে কে ন্ডে ন্ডে রূপান্তর করে রে একটি টি অবজে জে ক্ট আকারে রে রি রি টার্ন র্ন করবে বে ।

🟩 Input:
- Function টি টি input নে নে বে বে একটি টি array
- array এর element গুললো হবে বে number (watch times in second)
🟦Output:

- ফাংশন টি টি Array তে তে থাকা সবগুললো সময় কে কে calculate করে রে সে সে টা কে কে ঘন্টা মি মি নি নি ট এবং সে সে কে কে ন্ড এ কনভার্ট র্ট করবে বে ।
- ফাংশন টি টি একটা অবজে জে ক্ট রি রি টার্ন র্ন করবে বে । অবজে জে ক্ট টি টি দে দে খতে তে হবে বে এই রকম-
{ hour:14 , minute: 46 , second: 3 }

🟥Challenge: 
Array element গুললো যদি দি number না হয় তাহলে লে "Invalid" return করবে বে ।

SAMPLE INPUT                                                            SAMPLE OUTPUT
[1000, 499, 519, 300]                                       { hour: 0, minute: 38, second: 38 }
[1000, 2000, 725]                                           { hour: 1, minute: 2, second: 5 }
[100, 3800]                                                 { hour: 1, minute: 5, second: 0 }
[]                                                          { hour: 0, minute: 0, second: 0 }
[5600]                                                      { hour: 1, minute: 33, second: 20 }

[100, 3800, "90" ]                                                      "Invalid"
*/

function calculateSleepTime(counting) {

    let totaltime = 0;
    for (let i = 0; i < counting.length; i++) {
        if (typeof counting[i] !== "number") {
            return "Invalid";
        }
        else {
            totaltime = totaltime + counting[i];
        }
    }

    let sleepSecond = totaltime;

    let hour = Math.floor(sleepSecond / 3600); // 3600 sec for 1 hour //
    let remaingSecound = sleepSecond % 3600;
    let minute = Math.floor(remaingSecound / 60); // 60 sec for 1 min //
    let second = remaingSecound % 60;

    const TimeCounting =
    {
        hour: hour,
        minute: minute,
        second: second
    };
    return TimeCounting;
}

// main function //
const sleepTime = [1000, 2000, 725];
const finalResult = calculateSleepTime(sleepTime);
console.log(finalResult);