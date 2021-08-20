function twoSum(nums, target) {
    var prevMap = {};
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (prevMap[diff] !== undefined)
            return [i, prevMap[diff]];
        prevMap[nums[i]] = i;
    }
    return [];
}
;
console.log(twoSum([11, 2, 15, 7], 9));
