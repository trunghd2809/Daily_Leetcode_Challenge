function twoSum(nums: number[], target: number): number[] {
  let prevMap: Object = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (prevMap[diff] !== undefined) return [i, prevMap[diff]];
    prevMap[nums[i]] = i;
  }

  return [];
};

console.log(twoSum([11,2,15,7], 9));