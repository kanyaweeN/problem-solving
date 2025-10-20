// **Exercise 3: Group and Calculate Numbers**

// - ให้เขียน Function ที่ชื่อว่า `sumByType` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `numbers` เป็น Array ที่บรรจุตัวเลขจำนวนเต็ม
//     - Function นี้จะ Return ค่าเป็น Object ที่มีโครงสร้างดังนี้

//         ```jsx
//         {
//            even: ผลคูณของเลขคู่ทั้งหมด (ยกเว้น 0),
//            odd: ผลรวมของเลขคี่ทั้งหมด,
//            zero: จำนวนเลขศูนย์ทั้งหมดที่พบ
//         }
//         ```

//         - ต้องแยก 0 ออกจากเลขคู่เสมอ
//         - หากไม่เจอเลขคู่เลย ให้ return 1

function groupAndCalculate(numbers) {
    //Start Coding Here
    let result = {
        even: 1,
        odd: 0,
        zero: 0
    }

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i] % 2
        if (num == 0) {
            if (numbers[i] != 0) {
                const sum = result.even * numbers[i]
                result = {
                    ...result,
                    even: sum
                }
            } else {
                const sum = ++result.zero
                result = {
                    ...result,
                    zero: sum
                }
            }
        } else {
            const sum = result.odd + numbers[i]
            result = {
                ...result,
                odd: sum
            }

        }
    }
    return result
};

let result1 = groupAndCalculate([0, 2, 3, 0, 4, 5]);
console.log(result1); // { even: 8, odd: 8, zero: 2 }

let result2 = groupAndCalculate([0, 0, 1, 3, 5]);
console.log(result2); // { even: 1, odd: 9, zero: 2 }

let result3 = groupAndCalculate([2, 4, 6]);
console.log(result3); // { even: 48, odd: 0, zero: 0 }