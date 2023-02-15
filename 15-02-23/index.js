// Add to Array-Form of Integer
// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
const addToArrayForm = (num, k) => {
  return (BigInt(num.join("")) + BigInt(k)).toString().split("").map(e => +e);
};
