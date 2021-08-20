function findMedianSortedArrays(a, b) {
    var n = a.length;
    var m = b.length;
    var k = (m + n) - 1;
    var i = n - 1;
    var j = m - 1;
    while (k >= 0) {
        if (i < 0) {
            a[k] = b[j];
            j--;
        }
        else if (j < 0) {
            a[k] = a[i];
            i--;
        }
        else if (a[i] <= b[j]) {
            a[k] = b[j];
            j--;
        }
        else if (a[i] > b[j]) {
            a[k] = a[i];
            i--;
        }
        k--;
    }
    console.log(a);
    var mid = 0;
    if (a.length === 1) {
        return mid = a[0];
    }
    else if (a.length % 2 === 0) {
        var index = Math.floor((a.length - 1) / 2);
        return mid = (a[index] + a[index + 1]) / 2;
    }
    else {
        var index = Math.floor((a.length - 1) / 2);
        return mid = a[index];
    }
}
;
console.log(findMedianSortedArrays([1, 3], [2]));
