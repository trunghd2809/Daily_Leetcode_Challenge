// Nguyên lý sắp xếp nổi bọt
// + Chạy từ đầu mảng đến cuối mảng
// + Nếu phần tử đứng trước mà lớn hơn phần tử đứng sau thì đổi chỗ
// + Sau mỗi vòng lặp thì phần tử lớn nhất sẽ xuống cuối mảng

function bubbleSort(a: number[]): number[] {
  let n = a.length;

  for (let i = 0; i < n; i++) {
    let isSorted = true;
    for (let j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        let tem = a[j + 1];
        a[j + 1] = a[j];
        a[j] = tem;
        isSorted = false;
      }
    }
    if (isSorted) break;
  }
  return a;
}

console.log(bubbleSort([5,3,2,7,8,1,2]));