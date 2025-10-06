// **Reverse String**

// - ให้เขียน Function ที่ชื่อว่า `reverseString` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `text` มี Value Type เป็น `String`
//     - Function นี้จะ Return ค่า String ที่มีการเรียงตัวอักษรจากหลังไปหน้า

function reverseString(text) {
    return text.split("").reverse().join("");
};

let result1 = reverseString("hello");
console.log(result1); // "olleh"

let result2 = reverseString("TechUp");
console.log(result2); // "pUhceT"