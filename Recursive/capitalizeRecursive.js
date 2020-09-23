function capitalize(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;

  if (arr[0].length) {
    const element = arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1);
    newArr.push(element);
  }
  newArr = newArr.concat(capitalize(arr.slice(1)));
  return newArr;
}
