var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var MyHashSet = /** @class */ (function () {
    function MyHashSet() {
        this.SIZE = 1000;
        this.myBuckets = new Array(this.SIZE);
        for (var i = 0; i < this.myBuckets.length; i++) {
            this.myBuckets[i] = new Array();
        }
    }
    MyHashSet.prototype.add = function (key) {
        var hashValueIndex = this.hashFunction(key);
        var bucket = this.myBuckets[hashValueIndex];
        var index = bucket.indexOf(key);
        if (index < 0) {
            bucket.push(key);
        }
    };
    MyHashSet.prototype.remove = function (key) {
        var hashValueIndex = this.hashFunction(key);
        var bucket = this.myBuckets[hashValueIndex];
        var index = bucket.indexOf(key);
        if (index > -1) {
            bucket = __spreadArrays(bucket.slice(0, index), bucket.slice(index + 1));
            this.myBuckets[hashValueIndex] = bucket;
        }
    };
    MyHashSet.prototype.contains = function (key) {
        var hashValueIndex = this.hashFunction(key);
        var bucket = this.myBuckets[hashValueIndex];
        var index = bucket.indexOf(key);
        if (index > -1)
            return true;
        return false;
    };
    MyHashSet.prototype.hashFunction = function (key) {
        return key % 1000;
    };
    return MyHashSet;
}());
/**
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/
var obj = new MyHashSet();
obj.add(1);
obj.add(1001);
obj.remove(1001);
console.log(obj.contains(1));
