let Node = function(val) {
  this.val = val;
  this.next = null;
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null
  this.size = 0
  this.tail = null
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let node = new Node(val)
  node.next = this.head
  if(!this.head) this.tail = node
  this.head = node
  this.size++
};

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
n1.next = n2;
n2.next = n3;

console.log(n1);