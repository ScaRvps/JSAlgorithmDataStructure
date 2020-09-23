function findPivotIndex(arr, start = 0, end = arr.length) {
  let pivotIndex = start;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = start + 1; i < end; i++) {
    if (arr[start] > arr[i]) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
  }
  swap(arr, start, pivotIndex);
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    let idx = findPivotIndex(arr, left, right);
    //left
    quickSort(arr, left, idx);
    //right
    quickSort(arr, idx + 1, right);
  }
  return arr;
}

[5, 2, 7, 1, 4, 9, 3];
