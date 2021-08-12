function removeElement(nums: number[], val: number): number {
  let n = nums.length;

  for (let i = 0; i < n; ) {
    if (nums[i] === val) {
      // remove element from array
      for (let j = i; j <= n - 2; j++) {
        nums[j] = nums[j + 1];
      }

      n--;
    } else {
      i++;
    }
  }
  return n;
};

function removeElement1(nums: number[], val: number): number {
  const arrayLength = nums.length;
  let ans = 0;
  for (let i=0; i < arrayLength; i++) {
      if (nums[i] !== val) {
          nums[ans] = nums[i];
          ans++;
      }
  }
  return ans;
}
removeElement1([3,2,2,3], 2);