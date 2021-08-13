function maximumWealth(a: number[][]): number {
  let soHang = a.length;
  let soCot = a[0].length;
  let max = 0;
  
  for (let i = 0; i < soHang; i++) {
    let total = 0;
    for (let j = 0; j < soCot; j++) {
      total += a[i][j];
    }
    if (total > max) {
      max = total;
    }
  }
  return max;
};
console.log(maximumWealth([[1,2], [3,4]]));