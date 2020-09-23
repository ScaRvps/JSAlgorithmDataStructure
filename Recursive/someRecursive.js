function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (!callback(arr[arr.length - 1])) {
    arr.pop();
    return someRecursive(arr, callback);
  } else {
    return true;
  }
}

//Option 2: slice first element

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
