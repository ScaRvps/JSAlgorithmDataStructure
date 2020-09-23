class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
//Implemented with MinBinaryQueue
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  enqueue(val, priority) {
    let newItem = new Node(val, priority);
    this.values.push(newItem);
    let parentIdx;
    let heapList = this.values;
    let idx = heapList.length - 1;
    while (idx > 0) {
      parentIdx = Math.floor((idx - 1) / 2);
      if (heapList[parentIdx].priority <= heapList[idx].priority) break;
      this.swap(heapList, parentIdx, idx);
      idx = parentIdx;
    }
    this.values = heapList;
    return this.values;
  }

  dequeue() {
    // check if queue is empty
    if (this.values.length === 0) return null;
    //swap the root with the last value
    this.swap(this.values, 0, this.values.length - 1);
    //remove the last element
    let removed = this.values.pop();
    //downheap
    let leftChild, rightChild, priorityIdx;
    let idx = 0;
    let heapList = this.values;
    while (idx < this.values.length) {
      leftChild = 2 * idx + 1;
      rightChild = 2 * idx + 2;
      if (leftChild >= heapList.length) break;
      if (rightChild >= heapList.length) priorityIdx = leftChild;
      else
        priorityIdx =
          heapList[leftChild].priority <= heapList[rightChild].priority
            ? leftChild
            : rightChild;
      if (heapList[idx].priority > heapList[priorityIdx].priority) {
        this.swap(heapList, idx, priorityIdx);
        idx = priorityIdx;
      } else break;
    }
    this.values = heapList;
    return removed;
  }
}

// Naive solution - O(nlogn)
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
