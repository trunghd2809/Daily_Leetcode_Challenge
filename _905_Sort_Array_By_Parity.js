function sortArrayByParity(a) {
    var k = 0;
    var n = a.length;
    for (var i = 0; i < n; i++) {
        if (a[i] % 2 === 0) {
            var tem = a[i];
            var tem1 = a[k];
            a[k] = tem;
            a[i] = tem1;
            k++;
        }
    }
    return a;
}
;
console.log(sortArrayByParity([3, 1, 2, 4]));
