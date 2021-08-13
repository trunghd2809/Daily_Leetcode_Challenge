function maximumWealth(a) {
    var soHang = a.length;
    var soCot = a[0].length;
    var max = 0;
    for (var i = 0; i < soHang; i++) {
        var total = 0;
        for (var j = 0; j < soCot; j++) {
            total += a[i][j];
        }
        if (total > max) {
            max = total;
        }
    }
    return max;
}
;
console.log(maximumWealth([[1, 2], [3, 4]]));
