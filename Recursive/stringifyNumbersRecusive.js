// Updating existing object
function stringifyNumbers(obj) {
  for (const el in obj) {
    if (typeof obj[el] === 'object') {
      obj[el] = stringifyNumbers(obj[el]);
    } else if (typeof obj[el] === 'number') {
      obj[el] = obj[el].toString();
    }
  }
  return obj;
}

//create new obj
function stringifyNumbers(obj) {
  let newObj = {};
  for (const el in obj) {
    if (typeof obj[el] === 'object' && !Array.isArray(obj[el])) {
      newObj[el] = stringifyNumbers(obj[el]);
    } else {
      newObj[el] = typeof obj[el] === 'number' ? obj[el].toString() : obj[el];
    }
  }
  return newObj;
}
