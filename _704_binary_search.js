// Tìm kiếm nhị phân
// Kỹ thuật tìm kiếm trong một mảng đã được sắp xếp
// Ý tưởng là sẽ chia để trị
// Sử dụng vòng lặp hoặc sử dụng đệ quy

function  binarySearch(a, key) {
  let n = a.length;
  let iStart = 0;
  let iEnd = n - 1;

  while (iStart <= iEnd) {
    let mid = Math.floor((iStart + iEnd) / 2);

    if (key === a[mid]) {
      return mid;
    } else if (key > a[mid]) {
      iStart = mid + 1;
    } else {
      iEnd = mid - 1;
    }
  }

  return -1;
}
console.log(binarySearch([-1,0,3,5,9,12], 9));