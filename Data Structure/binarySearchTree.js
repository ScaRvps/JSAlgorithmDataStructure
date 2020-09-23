class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value > current.value) {
          if (current.right) current = current.right;
          else {
            current.right = newNode;
            break;
          }
        } else if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          break;
        }
      }
    }
    return this;
  }

  find(value) {
    let current = this.root;
    if (!current) return false;
    while (true) {
      if (current.value === value) return true;
      if (value > current.value) {
        if (current.right) current = current.right;
        else return false;
      } else {
        if (current.left) current = current.left;
        else return false;
      }
    }
  }

  breadthFirst() {
    let q = []; //This has to be a queue implementation
    let visited = [];
    let current = this.root;
    q.unshift(current); //should be enqueue
    while (q.length !== 0) {
      current = q.pop(); //should be dequeue
      visited.push(current.value);
      if (current.left) q.unshift(current.left); //should be enqueue
      if (current.right) q.unshift(current.right); //should be enqueue
    }
    return visited;
  }

  dfPreorder() {
    let visited = [];
    let current = this.root;

    const traverse = (node) => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      return;
    };

    traverse(current);
    return visited;
  }

  dfPostorder() {
    let visited = [];
    let current = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };

    traverse(current);
    return visited;
  }

  dfInorder() {
    let visited = [];
    let current = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
  }
}
