// Option 1 - o(n), o(n)

function countUnique(arr) {
  let uniqueValuesObj = {};
  let uniqueValues = 0;
  arr.forEach((element) => {
    if (!uniqueValuesObj[element]) {
      uniqueValuesObj[element] = 1;
      uniqueValues++;
    }
  });
  return uniqueValues;
}

countUnique([1, 1, 1, 1, 1, 2]); // 2
countUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUnique([]); // 0
countUnique([-2, -1, -1, 0, 1]); // 4

// Option 2: o(n), o(1) - works only on sorted array
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
