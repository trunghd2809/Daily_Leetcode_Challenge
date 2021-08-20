class MyHashMap {
    constructor() {
        this.SIZE = 1000;
        this.myBuckets = new Array(this.SIZE);
        for (let i = 0; i < this.myBuckets.length; i++) {
            this.myBuckets[i] = new Array();
        }
    }
    hashFunction(key) {
        return key % 1000;
    }
    put(key, value) {
        let hashValueIndex = this.hashFunction(key);
        let bucket = this.myBuckets[hashValueIndex];
        let data = new Data(key, value);
        let index = bucket.findIndex((b) => b.key === key);
        console.log('index', index);
        if (index > -1) {
            bucket = [...bucket.slice(0, index), { key, value }, ...bucket.slice(index + 1)];
            this.myBuckets[hashValueIndex] = bucket;
        }
        else {
            bucket.push(data);
        }
        console.log(this.myBuckets[hashValueIndex]);
    }
    remove(key) {
    }
    get(key) {
        return -1;
    }
}
class Data {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
var obj = new MyHashMap();
obj.put(1, 1);
obj.put(1, 2);
