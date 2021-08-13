function findDisappearedNumbers(nums) {
    var existed = [];
    var missed = [];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        existed[num] = true;
    }
    console.log(existed);
    for (var i = 1; i <= nums.length; i++) {
        if (existed[i] !== true) {
            missed.push(i);
        }
    }
    return missed;
}
;
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
