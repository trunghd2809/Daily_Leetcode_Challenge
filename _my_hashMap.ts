class MyHashMap {
  private SIZE: number = 1000;
  private myBuckets: Array<Array<any>>;

  constructor() {
    this.myBuckets = new Array(this.SIZE);
    for (let i = 0; i < this.myBuckets.length; i++) {
      this.myBuckets[i] = new Array<any>();
    }
  }

  private hashFunction(key: number): number {
    return key % 1000;
  }

  put(key: number, value: number): void {
    let hashValueIndex = this.hashFunction(key);
    let bucket = this.myBuckets[hashValueIndex];
    let data = new Data(key, value);
    let index = bucket.findIndex((b) => b.key === key );
    
    if (index > -1) {
      bucket = [...bucket.slice(0, index), { key, value } ,...bucket.slice(index + 1)];
      this.myBuckets[hashValueIndex] = bucket;
    } else {
      bucket.push(data);
    }

  }

  remove(key: number): void {

  }

  get(key: number): number {
    return -1; 
  }
}

class Data {
  key: number;
  value: number;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}

var obj = new MyHashMap()
obj.put(1, 1);
obj.put(1, 2);