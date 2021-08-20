var MyArrayStack = /** @class */ (function () {
    function MyArrayStack(size) {
        this.SIZE = size;
        this.topIndex = -1;
        this.array = new Array(this.SIZE);
    }
    MyArrayStack.prototype.push = function (value) {
        if (!this.isFull()) {
            this.topIndex++;
            this.array[this.topIndex] = value;
            return true;
        }
        return false;
    };
    MyArrayStack.prototype.pop = function () {
        if (!this.isEmpty()) {
            var value = this.array[this.topIndex];
            this.topIndex--;
            return value;
        }
        return -1;
    };
    MyArrayStack.prototype.isFull = function () {
        return this.topIndex === this.SIZE - 1;
    };
    MyArrayStack.prototype.isEmpty = function () {
        return this.topIndex < 0;
    };
    MyArrayStack.prototype.show = function () {
        if (this.isEmpty()) {
            console.log('Stack is empty');
        }
        else {
            for (var i = 0; i <= this.topIndex; i++) {
                console.log(this.array[i]);
            }
        }
    };
    return MyArrayStack;
}());
var myArrayStack = new MyArrayStack(3);
myArrayStack.push(1);
myArrayStack.push(2);
myArrayStack.push(3);
myArrayStack.show();
myArrayStack.pop();
myArrayStack.show();
myArrayStack.pop();
myArrayStack.show();
