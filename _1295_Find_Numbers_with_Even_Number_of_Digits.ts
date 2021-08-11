function findNumbers(nums: number[]): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let tem = countNumber(nums[i]);
    if (tem % 2 === 0) {
      count++;
    }
  }
  return count;
};

function countNumber(num: number): number {
  let count = 0;
  let result = num;
  while(result !== 0) {
    // Công thức chia lấy phần nguyênn trong javascript
    // c = (a - a %b ) / b;
    let kq = (result - result % 10) / 10;
    result = kq;
    count++;
  }
  return count;
}
// Top 1 performance
function findNumbersWithReduce(nums: number[]): number {
  return nums.reduce((acc, curr) => {
    const str = `${curr}`;
    if (str.length % 2 === 0 ) {
      acc++;
    }
    return acc;
  }, 0);
}
// Top 2 performance
function findNumbersWithFor(nums: number[]): number {
  let evenDigits = 0;
  for (const n of nums) {
    if (n.toString().length % 2 === 0) {
      evenDigits++;
    }
  }
  return evenDigits;
}
let r = findNumbersWithFor([12,345,2,6,7896]);
console.log(r);