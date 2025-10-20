// ### Exercises

// **Exercise 1: Capitalize First Letter**

// - ให้เขียน Function ที่ชื่อว่า `capitalizeWords` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `sentence` มี Value Type เป็น `String`
//     - Function นี้จะ Return ค่า String ที่มีการเปลี่ยนให้ตัวอักษรแรกของทุกคำในประโยคเป็นตัวพิมพ์ใหญ่

function capitalizeWords(sentence) {
    //Start Coding Here
    let words = sentence.split(" ")

    for (let i = 0; i < words.length; i++) {
        let first = words[i].split("")
        first[0] = first[0].toUpperCase()
        words[i] = first.join("")
    }
    return words.join(" ")
};

let result1 = capitalizeWords("hello world");
console.log(result1); // "Hello World"

let result2 = capitalizeWords("techup career prep");
console.log(result2); // "Techup Career Prep"