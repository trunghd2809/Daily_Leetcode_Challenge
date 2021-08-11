function findNumbers(nums) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        var tem = countNumber(nums[i]);
        if (tem % 2 === 0) {
            count++;
        }
    }
    return count;
}
;
function countNumber(num) {
    var count = 0;
    var result = num;
    while (result !== 0) {
        // Công thức chia lấy phần nguyênn trong javascript
        // c = (a - a %b ) / b;
        var kq = (result - result % 10) / 10;
        result = kq;
        count++;
    }
    return count;
}
// Top 1 performance
function findNumbersWithReduce(nums) {
    return nums.reduce(function (acc, curr) {
        var str = "" + curr;
        if (str.length % 2 === 0) {
            acc++;
        }
        return acc;
    }, 0);
}
// Top 2 performance
function findNumbersWithFor(nums) {
    var evenDigits = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var n = nums_1[_i];
        if (n.toString().length % 2 === 0) {
            evenDigits++;
        }
    }
    return evenDigits;
}
var r = findNumbersWithFor([12, 345, 2, 6, 7896]);
console.log(r);
