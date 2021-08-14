// Nguyên lý sắp xếp chọn
// + Chạy từ đầu đến cuối mảng
// + Tại vòng lặp thứ i, tìm phần tử nhỏ nhất từ [i + 1, n - 1], nếu nhỏ hơn a[i] thì đổi chỗ với a[i]
// + Sau vòng lặp thứ i thì [0, i] đã được sắp xếp rồi
function selectionSort(a) {
    var n = a.length;
    for (var i = 0; i < n; i++) {
        var minIndex = i;
        for (var j = i + 1; j < n; j++) {
            // Find min[i, n]
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            var tem = a[i];
            a[i] = a[minIndex];
            a[minIndex] = tem;
        }
    }
    return a;
}
console.log(selectionSort([5, 3, 2, 7, 8, 1, 2]));
