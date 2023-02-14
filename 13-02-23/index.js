// Add binary
// const addBinary = (a, b) => {
//   const length1 = a.length;
//   const length2 = b.length;
//   const maxLength = Math.max(length1, length2);
//   let value = 0;
//   let carry = 0;
//   let result = "";
//   for (let i = 0; i < maxLength; i++) {
//     value =
//       Number(a[length1 - i - 1] || 0) + Number(b[length2 - i - 1] || 0) + carry;
//     carry = Math.floor(value / 2);
//     result = (value % 2) + result;
//   }
//   if (carry) result = 1 + result;
//   return result;
// };

// Count odds from given interval
// const countOdds = (low, high) => {
//   let odds = 0;
//   for (let i = low; i <= high; i++) {
//     i % 2 === 1 ? odds++ : odds;
//   }
//   return odds;
// };
