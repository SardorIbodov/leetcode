const missingNumber = (nums) => {
  let max;
  nums.forEach((v, i, a) => (v < a[i + 1] ? (max = a[i + 1]) : v));
  return max;
};
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));