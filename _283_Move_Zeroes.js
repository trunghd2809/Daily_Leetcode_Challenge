/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(a) {
    var n = a.length;
    var k = 0;
    for (var i = 0; i < n;) {
        if (a[i] === 0 && i <= (n - 1 - k)) {
            for (var j = i; j <= n - 2; j++) {
                a[j] = a[j + 1];
            }
            a[n - 1] = 0;
            k++;
        }
        else {
            i++;
        }
    }
    console.log(a);
}
;
moveZeroes([0, 1, 0, 3, 12]);
