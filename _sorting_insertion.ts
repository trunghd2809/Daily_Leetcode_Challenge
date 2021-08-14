// Nguyên lý sắp xếp chèn
// Chạy từ đầu đến cuối mảng
// Tại vòng lặp i, coi như dãy [0, i - 1] đã được sắp xếp, chèn phần tử a[i] vào vị trí thích hợp
// Sau vòng lặp thứ i thì dãy [0, i - 1] đã được sắp xếp

function selectionSort(a: number[]): number[] {
  let n = a.length;

  for (let i = 1; i < n; i++) {
    let ai = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > ai) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = ai;
  }
  return a;
}
console.log(selectionSort([5,3,2,7,8,1,2]));
// 2 3 5 7 8 4