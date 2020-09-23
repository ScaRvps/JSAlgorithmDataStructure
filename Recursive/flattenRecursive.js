// function flatten(arr) {
//   let newArr = [];
//   if (arr.length === 0) return newArr;
//   //push element to newArr
//   if (arr[0].length) {
//     //newArr.push(arr[0][0]);
//     flatten(arr[0]);

//   } else {
//     newArr.push(arr[0]);
//   }

//   newArr = newArr.concat(flatten(arr.slice(1)));
//   return newArr;
// }

//Working solution
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

const flatten = (arr, vector = []) => {
  if (arr.length === 0) return vector;
  if (typeof arr[0] === 'object') flatten(arr[0], vector);
  if (typeof arr[0] === 'number') vector.push(arr[0]);

  return flatten(arr.splice(1, arr.length), vector);
};

function flatten(arr) {
  return arr.reduce((result, value) => {
    if (Array.isArray(value)) {
      value = flatten(value);
      return [...result, ...value];
    } else return [...result, value];
  }, []);
}
