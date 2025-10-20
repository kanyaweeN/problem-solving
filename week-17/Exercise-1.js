// ### Exercises

// **Exercise 1: Find Common Elements**

// - ให้เขียน Function ที่ชื่อว่า `findCommon` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 2 ตัวคือ `arr1` และ `arr2` เป็น Array ที่บรรจุตัวเลข
//     - Function นี้จะ Return ค่าเป็น Array ที่มีเฉพาะตัวเลขที่ปรากฏอยู่ใน `arr1` และ `arr2`

function findCommon(arr1, arr2) {
    //Start Coding Here
    let result = []

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result
};

let result1 = findCommon([1, 2, 3], [2, 3, 4]);
console.log(result1); // [2, 3]

let result2 = findCommon([5, 6], [7, 8]);
console.log(result2); // []