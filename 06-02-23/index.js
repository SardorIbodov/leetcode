// Shuffle the array
// [1,2,3,4,4,3,2,1] => [1,4,2,3,3,2,4,1], n = 4
// [1,1,2,2] => [1,2,1,2], n = 2
// const shuffle = (nums, n) => {
// 	result = [];
// 	for(let i = 0, j = n; i < n, j < nums.length; i++, j++) {
// 		result.push(nums[i], nums[j]);
// 	}
// 	return result;
// };

// Roman to Integer
// const romanToInt = (s) => {
//   let result = 0;
//   const romanObj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "I" && s[i + 1] === "V") {
//       result += 4;
// 			i++;
//     } else if (s[i] === "I" && s[i + 1] === "X") {
//       result += 9;
// 			i++;
//     } else if (s[i] === "X" && s[i + 1] === "L") {
//       result += 40;
// 			i++;
//     } else if (s[i] === "X" && s[i + 1] === "C") {
//       result += 90;
// 			i++;
//     } else if (s[i] === "C" && s[i + 1] === "D") {
//       result += 400;
// 			i++;
//     } else if (s[i] === "C" && s[i + 1] === "M") {
//       result += 900;
// 			i++;
//     } else {
// 			result += romanObj[s[i]]
// 		}
//   }
// 	return result;
// };
