/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    for (var _i = 0, nums2_1 = nums2; _i < nums2_1.length; _i++) {
        var x = nums2_1[_i];
        insertToArray(nums1, x, m);
        m++;
    }
    console.log(nums1);
}
;
function insertToArray(nums1, x, m) {
    // Tim k
    var isChecked = false;
    for (var i = 0; i < m; i++) {
        if (nums1[i] > x) {
            for (var j = m - 1; j > i - 1; j--) {
                nums1[j + 1] = nums1[j];
            }
            nums1[i] = x;
            isChecked = true;
            break;
        }
    }
    // Nếu không tìm được k
    if (isChecked === false)
        nums1[m] = x;
}
var t = merge([2, 3, 4, 5], 4, [3, 6], 2);
