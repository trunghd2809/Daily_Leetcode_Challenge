function thirdMax(a: number[]): number {
  let n = a.length;

  // Sort -> let tempArr = a.sort((a,b) => b - a);
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (a[i] < a[j]) {
        let tem = a[j];
        a[j] = a[i];
        a[i] = tem;
      }
    }
  }
  // Count
  let count = 1;
  let thirdMax = null;
  for (let i = 0; i < n - 1 ; i++) {
    if (a[i] != a[i + 1]) {
      count ++;
    }
    if (count == 3) {
      thirdMax = a[i + 1];
      break;
    }
  }
  console.log(a);
  return thirdMax != null ? thirdMax : a[0];
};
console.log(thirdMax([-1,2,3]));