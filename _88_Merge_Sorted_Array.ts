/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (const x of nums2) {
    insertToArray(nums1, x, m);
    m++;
  }
  console.log(nums1);
};

function insertToArray(nums1: number[], x: number, m: number): void {
  // Tim k
  let isChecked = false;
  for (let i = 0; i < m; i++) {
    if (nums1[i] > x) {

      for (let j = m - 1; j > i - 1; j--) {
        nums1[j + 1] = nums1[j]; 
      }

      nums1[i] = x;
      isChecked = true;
      break;
    }
  }

  // Nếu không tìm được k
  if (isChecked === false) nums1[m] = x;
}

const t =  merge([2,3,4,5], 4, [3,6], 2);