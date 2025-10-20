// **Exercise 1: Count Vowels**

// - ให้เขียน Function ที่ชื่อว่า `countVowels` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `text` มี Value Type เป็น `String`
//     - Function นี้จะ Return ค่าเป็นจำนวนสระภาษาอังกฤษ (a, e, i, o, u) ที่ปรากฏใน `text`
//         - โดยนับทั้งตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

function countVowels(text) {
    const vowels = ["a", "e", "i", "o", "u"];

    let count = 0;
    for (let i = 0; i < text.length; i++) {

        if (vowels.includes(text[i].toLowerCase())) {
            count++;
        }
    }
    return count;
};

let result1 = countVowels("hello");
console.log(result1); // 2

let result2 = countVowels("TECHUP");
console.log(result2); // 2