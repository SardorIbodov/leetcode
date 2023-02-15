// Add to Array-Form of Integer
// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// const addToArrayForm = (num, k) => {
//   return (BigInt(num.join("")) + BigInt(k)).toString().split("").map(e => +e);
// };

// Excel Sheet Column Number
// Input: columnTitle = "A";
// Output: 1;
// Input: columnTitle = "AB"
// Output: 28
// Input: columnTitle = "ZY"
// Output: 701
// const titleToNumber = (columnTitle) => {
//   let result = 0;
// 	for(let i = 0; i < columnTitle.length; i++) {
// 		result += (columnTitle[columnTitle.length - 1 - i].charCodeAt() - 64) * (26 ** i)
// 	}
//   return result;
// };

// Fizz Buzz
// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
// const fizzBuzz = (n) => {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     if ((i % 3) === 0 && i % 5 === 0) {
//       result.push("FizzBuzz");
//     } else if (i % 5 === 0) {
//       result.push("Buzz");
//     } else if (i % 3 === 0) {
// 			result.push("Fizz")
// 		} else {
// 			result.push(i.toString())
// 		}
//   }
// 	return result;
// };
// console.log(fizzBuzz(15));