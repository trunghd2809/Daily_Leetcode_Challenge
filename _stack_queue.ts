interface IStackQueue {
  push(value: number): boolean;
  pop(): number;
  isFull(): boolean;
  isEmpty(): boolean;
  show(): void;
}

class MyArrayStack implements IStackQueue {
  private array: Array<number>;
  private topIndex: number;
  private SIZE: number;

  constructor(size: number) {
    this.SIZE = size;
    this.topIndex =  -1;
    this.array = new Array(this.SIZE);
  }

  push(value: number): boolean {
    if (!this.isFull()) {
      this.topIndex ++;
      this.array[this.topIndex] = value;
      return true; 
    }
    return false;
  }

  pop(): number {
    if (!this.isEmpty()) {
      let value = this.array[this.topIndex];
      this.topIndex --;
      return value;
    }
    return -1;
  }

  isFull(): boolean {
    return this.topIndex === this.SIZE - 1;
  }

  isEmpty(): boolean {
    return this.topIndex < 0;
  }
  
  show(): void {
    if (this.isEmpty()) {
      console.log('Stack is empty');
    } else {
      for (let i = 0; i <= this.topIndex; i++) {
        console.log(this.array[i]);
      }
    }
  }
}

class MyArrayQueue implements IStackQueue {

  private array: Array<number>;
  private SIZE: number;
  private head: number;
  private tail: number;

  constructor(size: number) {
    this.SIZE = size;
    this.array = new Array(this.SIZE);
    this.head = -1;
    this.tail = -1;
  }

  push(value: number): boolean {
    if (!this.isFull()) {
      if (this.isEmpty()) this.head ++; 
      this.tail ++;
      this.array[this.tail] = value;
      return true;
    }
    return false;
  }

  pop(): number {
    if (!this.isEmpty()) {
      let value = this.array[this.head];
      this.head ++;
      if (this.head > this.tail) {
        this.head = this.tail = -1;
      }
      return value;
    }
    return -1;
  }

  isFull(): boolean {
     return this.tail === this.SIZE - 1;
  }

  isEmpty(): boolean {
    return (this.head === -1 && this.tail === -1);
  }

  show(): void {
    throw new Error("Method not implemented.");
  }
}

let myArrayStack = new MyArrayStack(3);
myArrayStack.push(1);
myArrayStack.push(2);
myArrayStack.push(3);
myArrayStack.show();

myArrayStack.pop();
myArrayStack.show();

myArrayStack.pop();
myArrayStack.show();