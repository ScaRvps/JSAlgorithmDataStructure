class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newItem = new Node(val);
    if (this.first === null) {
      this.first = newItem;
      this.last = this.first;
    } else {
      newItem.next = this.first;
      this.first = newItem;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) return null;

    let current = this.head;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = current.next;
    }
    this.size--;
    return current.val;
  }
}
