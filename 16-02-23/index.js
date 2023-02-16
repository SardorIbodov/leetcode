// Plus One
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// const plusOne = (digits) =>
//   `${BigInt(digits.join("")) + 1n}`.split("").map((e) => +e);

// Two Sum
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// const twoSum = (nums, target) => {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0 && j !== i; j < nums.length; j++) {
// 			if(i === j) continue;
// 			else if (nums[i] + nums[j] === target) {
//         result.push(i, j);
//         break;
//       }
//     }
// 		if(result.length === 2) break;
//   }
//   return result;
// };
