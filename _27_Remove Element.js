function removeElement(nums, val) {
    var n = nums.length;
    for (var i = 0; i < n;) {
        if (nums[i] === val) {
            // remove element from array
            for (var j = i; j <= n - 2; j++) {
                nums[j] = nums[j + 1];
            }
            n--;
        }
        else {
            i++;
        }
    }
    return n;
}
;
function removeElement1(nums, val) {
    var arrayLength = nums.length;
    var ans = 0;
    for (var i = 0; i < arrayLength; i++) {
        if (nums[i] !== val) {
            nums[ans] = nums[i];
            ans++;
        }
    }
    console.log(nums);
    console.log(ans);
    return ans;
}
removeElement1([3, 2, 2, 3], 2);
