class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  insert(val) {
    this.values.push(val);
    let parentIdx;
    let heapList = this.values;
    let i = heapList.length - 1;
    while (i > 0) {
      parentIdx = Math.floor((i - 1) / 2);
      if (heapList[parentIdx] >= heapList[i]) break;
      this.swap(heapList, parentIdx, i);
      i = parentIdx;
    }
    this.values = heapList;
    return this.values;
  }

  //   extractMax() {
  //     // check if heap is empty
  //     if (this.values.length === 0) return null;
  //     //swap the root with the last value
  //     this.swap(this.values, 0, this.values.length - 1);
  //     //remove the last element
  //     let removed = this.values.pop();
  //     //downheap
  //     let leftChild, rightChild, maxElement;
  //     let idx = 0;
  //     let heapList = this.values;
  //     while (idx < this.values.length) {
  //       leftChild = 2 * idx + 1;
  //       rightChild = 2 * idx + 2;
  //       if (leftChild >= heapList.length) break;
  //       if (rightChild >= heapList.length) {
  //         maxElement = Math.max(heapList[idx], heapList[leftChild]);
  //       } else {
  //         maxElement = Math.max(
  //           heapList[idx],
  //           heapList[leftChild],
  //           heapList[rightChild]
  //         );
  //       }
  //       if (maxElement === heapList[idx]) break;
  //       if (maxElement === heapList[leftChild]) {
  //         this.swap(heapList, idx, leftChild);
  //         idx = leftChild;
  //       } else {
  //         this.swap(heapList, idx, rightChild);
  //         idx = rightChild;
  //       }
  //     }
  //     this.values = heapList;
  //     return removed;
  //   }
  //Less conditional check
  extractMax() {
    // check if heap is empty
    if (this.values.length === 0) return null;
    //swap the root with the last value
    this.swap(this.values, 0, this.values.length - 1);
    //remove the last element
    let removed = this.values.pop();
    //downheap
    let leftChild, rightChild, maxElementIdx;
    let idx = 0;
    let heapList = this.values;
    while (idx < this.values.length) {
      leftChild = 2 * idx + 1;
      rightChild = 2 * idx + 2;
      if (leftChild >= heapList.length) break;
      if (rightChild >= heapList.length) maxElementIdx = leftChild;
      else
        maxElementIdx =
          heapList[leftChild] >= heapList[rightChild] ? leftChild : rightChild;
      if (heapList[idx] < heapList[maxElementIdx]) {
        this.swap(heapList, idx, maxElementIdx);
        idx = maxElementIdx;
      } else break;
    }
    this.values = heapList;
    return removed;
  }
}
