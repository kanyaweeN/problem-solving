// ### Optional 🌟

// **Optional: Find Longest Word**

// - ให้เขียน Function ที่ชื่อว่า `findLongestWord` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `text` มี Value Type เป็น String
//     - Function นี้จะ Return ค่าเป็นคำที่มีความยาวมากที่สุดในประโยค วัดจากจำนวนตัวอักษรในแต่ละคำ
//         - ถ้ามีคำที่ยาวที่สุดมากกว่า 1 คำ ให้ return คำแรกที่เจอก่อน

function findLongestWord(text) {
    //Start Coding Here
    let resultText = ""
    let resultLength = 0

    const word = text.split(" ")
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > resultLength) {
            resultText = word[i]
            resultLength = word[i].length
        }
    }

    return resultText
};

let result1 = findLongestWord("I love programming very much");
console.log(result1); // "programming"

let result2 = findLongestWord("TechUp helps people switch careers");
console.log(result2); // "careers"