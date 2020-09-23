function capitalizeWord(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (typeof arr[0] === 'string') {
    newArr.push(arr[0].toUpperCase());
  }

  newArr = newArr.concat(capitalizeWord(arr.slice(1)));

  return newArr;
}

//Option 2:
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

//Option 3:
function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}
