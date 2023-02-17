// Remove duplicates
// const removeDuplicates = (nums) => {
//   const length = nums.length;
//   if (length <= 1) {
//     return length;
//   }
//   let i = 0;
//   for (let j = 1; j < length; j++) {
//     if (nums[i] != nums[j]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//   return i + 1;
// };

// Keyboard row
// const findWords = (words) => {
//   const possibleRows = ["qwertyuiopQWERTYUIOP", "asdfghjklASDFGHJKL", "zxcvbnmZXCVBNM"];
//   let result = [];
// 	words.forEach(word => {
// 		let wordArray = word.split("");
// 		let isPossible = true;
// 		possibleRows.forEach(row => {
// 			wordArray.forEach(letter => {
// 				if(!row.includes(letter)) isPossible = false;
// 			})
// 			if(isPossible) result.push(word);
// 			isPossible = true;  			
// 		})	
// 	})
// 	return result;
// };

