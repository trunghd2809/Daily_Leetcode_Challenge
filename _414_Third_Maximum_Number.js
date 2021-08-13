function thirdMax(a) {
    var n = a.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            if (a[i] < a[j]) {
                var tem = a[j];
                a[j] = a[i];
                a[i] = tem;
            }
        }
    }
    var count = 1;
    var thirdMax = -1;
    for (var i = 0; i < n - 1; i++) {
        if (a[i] != a[i + 1]) {
            count++;
        }
        if (count == 3) {
            thirdMax = a[i + 1];
            break;
        }
    }
    console.log(a);
    return thirdMax != -1 ? thirdMax : a[0];
}
;
console.log(thirdMax([-1, 2, 3]));
