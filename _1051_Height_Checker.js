var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function heightChecker(a) {
    var n = a.length;
    var b = __spreadArrays(a);
    var count = 0;
    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            if (a[i] > a[j]) {
                var tem = a[j];
                a[j] = a[i];
                a[i] = tem;
            }
        }
    }
    for (var i = 0; i < n; i++) {
        if (a[i] != b[i]) {
            count++;
        }
    }
    return count;
}
;
console.log(heightChecker([1, 1, 4, 2, 1, 3]));
