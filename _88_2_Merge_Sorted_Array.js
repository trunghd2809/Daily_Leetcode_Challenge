/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge1(n1, m, n2, n) {
    var i = m - 1;
    var j = n - 1;
    var k = (m + n) - 1;
    while (k >= 0) {
        if (i < 0) {
            n1[k] = n2[j];
            j--;
        }
        else if (j < 0) {
            n1[k] = n1[i];
            i--;
        }
        else if (n2[j] >= n1[i]) {
            n1[k] = n2[j];
            j--;
        }
        else if (n2[j] < n1[i]) {
            n1[k] = n1[i];
            i--;
        }
        k--;
    }
    console.log(n1);
}
;
merge1([0], 0, [1], 1);
