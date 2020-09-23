class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newItem = new Node(val);
    if (this.size === 0) {
      this.first = newItem;
      this.last = this.first;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
    if (this.size === 0) return null;

    let current = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = current.next;
    }
    return current.val;
  }
}
