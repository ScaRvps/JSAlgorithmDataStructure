class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newItem = new Node(value);
    if (!this.head) {
      this.head = newItem;
      this.tail = this.head;
    } else {
      this.tail.next = newItem;
      this.tail = newItem;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let previous = this.head;
    let current = previous;
    while (current.next) {
      current = current.next;
      previous = current;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    if (currentHead.next) this.head = currentHead.next;
    else {
      this.head = null;
      this.tail = null;
    }
    this.length--;

    return currentHead;
  }

  unshift(value) {
    let newItem = new Node(value);
    if (!this.head) {
      this.head = newItem;
      this.tail = this.head;
    } else {
      newItem.next = this.head;
      this.head = newItem;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
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
    if (index > this.length || index < 0) return false;

    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let previous = this.get(index - 1);
    let current = previous.next;
    let newItem = new Node(value);
    previous.next = newItem;
    newItem.next = current;
    this.length++;
    return true;
  }

  remove(index) {
    if (index >= this.length || index < 0) return undefined;

    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let previous = this.get(index - 1);
    let current = previous.next;
    previous.next = current.next;
    this.length--;
    return current;
  }

  reverse() {
    if (this.length === 0) return undefined;
    if (this.length === 1) return this;

    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let previous = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return this;
  }
}

let newLL = new SinglyLinkedList();
newLL.push('How');
newLL.push('are');
newLL.push('you');
newLL.push('are');
newLL.push('you');
newLL.push('good');
