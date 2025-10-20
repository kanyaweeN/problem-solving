// ### Optional 🌟

// **Optional: Find Mode**

// - ให้เขียน Function ที่ชื่อว่า `findMode` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `arr` เป็น Array ของตัวเลข
//     - Function นี้จะ Return ค่า เลขที่ปรากฏบ่อยที่สุด (mode) ใน Array
//         - ถ้ามีมากกว่า 1 ตัวที่ถี่ที่สุด ให้ return ตัวที่เจอก่อนใน Array
//     - เช่น

function findMode(arr) {
    //Start Coding Here
    let countarr = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        let count = Number(countarr[arr[i]]) || 0
        countarr = {
            ...countarr,
            [num]: ++count
        }
    }

    let result = 0
    let resultCount = 0
    for (let count in countarr) {
        if (countarr[count] > resultCount) {
            result = count
            resultCount = countarr[count]
        }
        else if (resultCount == countarr[count]) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == countarr[count]) {
                    result = count
                    resultCount = countarr[count]
                    break;
                }
            }
        }
    }
    return result
};

let result1 = findMode([1, 2, 2, 3, 3, 3, 4]);
console.log(result1); // 3

let result2 = findMode([7, 7, 1, 1, 7]);
console.log(result2); // 7

let result3 = findMode([7, 7, 1, 1, 7, 1, 1]);
console.log(result3); // 7