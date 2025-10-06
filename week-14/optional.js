// **Optional: Palindrome Checker**

// - ให้เขียน Function ที่ชื่อว่า `isPalindrome` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `word` มี Value Type เป็น `String`
//     - Function นี้จะ Return ค่า `true` ถ้า `word` เป็น Palindrome
//     - หากไม่ใช่ ให้ Return `false`
//     - Palindrome คือคำที่อ่านจากหน้าไปหลังหรือหลังไปหน้าก็ได้คำเดียวกัน เช่น `“madam”`, `“racecar”`

function isPalindrome(word) {
    const newWord = word.split("").reverse().join("")
    return newWord === word
};

let result1 = isPalindrome("madam");
console.log(result1); // true

let result2 = isPalindrome("hello");
console.log(result2); // false
