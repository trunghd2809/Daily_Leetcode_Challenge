function quickSort(a, L, R) {
  // Điều Kiện
  if (L === R) return;
  // B1: Chọn key
  let k = a[Math.floor((L + R) / 2)];
  // B2: Phân bố lại mảng theo khoá
  let iL = partition(a, k, L, R);
  // B3: Chia ra
  quickSort(a, L, iL - 1);
  quickSort(a, iL, R);

  return a;
}

function partition(a, key, L, R) {
  let iL = L;
  let iR = R;
  while (iL <= iR) {
    while(a[iL] < key) iL++;
    while(a[iR] > key) iR--;

    if (iL <= iR) {
      let tem = a[iL];
      a[iL] = a[iR];
      a[iR] = tem;
      iL++; iR--;
    }
  }
  return iL;
}

console.log(quickSort([6,7,8,5,4,1,2,3], 0, 7));