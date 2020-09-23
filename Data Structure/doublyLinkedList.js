class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newItem = new Node(value);
    if (this.head === null) {
      this.head = newItem;
      this.tail = this.head;
    } else {
      this.tail.next = newItem;
      newItem.previous = this.tail;
      this.tail = newItem;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.previous;
      this.tail.next = null;
      removed.previous = null;
    }
    this.length--;
    return removed;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    if (currentHead.next) {
      this.head = currentHead.next;
      this.head.previous = null;
      currentHead.next = null;
      this.length--;
    } else {
      this.pop();
    }
    return currentHead;
  }

  unshift(value) {
    if (!this.head) {
      this.push(value);
    } else {
      let newItem = new Node(value);
      newItem.next = this.head;
      this.head.previous = newItem;
      this.head = newItem;
      this.length++;
    }
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current;
    if (this.length - index < index) {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.previous;
      }
    } else {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    }
    return current;
  }

  set(value, index) {
    let current = this.get(index);
    if (current) {
      current.value = value;
      return true;
    }
    return false;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let current = this.get(index);
    let previous = current.previous;
    let newItem = new Node(value);
    newItem.next = current;
    previous.next = newItem;
    newItem.previous = current.previous;
    current.previous = newItem;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let current = this.get(index);
    let previous = current.previous;
    let next = current.next;
    previous.next = current.next;
    next.previous = current.previous;
    this.length--;
    current.next = null;
    current.previous = null;
    return current;
  }

  reverse() {
    if (this.length === 0) return undefined;
    //if (this.length === 1) return this;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    current = this.head;
    for (let i = 0; i < this.length; i++) {
      let previous = current.previous;
      current.previous = current.next;
      current.next = previous;
      current = previous;
    }
    return this;
  }
}

let dll = new DoublyLinkedList();

dll.push(100);
dll.push(10);
dll.push(280);
dll.push(810);
dll.push(1);
