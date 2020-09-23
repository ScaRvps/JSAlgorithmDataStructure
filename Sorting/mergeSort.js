function mergeArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      mergedArr.push(arr2[j]);
      j++;
    } else {
      mergedArr.push(arr1[i]);
      i++;
    }
  }
  //below will increase time complexity to 0(n2)
  //   i === arr1.length
  //     ? mergedArr.push(...arr2.slice(j))
  //     : mergedArr.push(...arr1.slice(i));

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArray(left, right);
}
