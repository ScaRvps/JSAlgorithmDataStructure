function collectStrings(obj) {
  let newArr = [];

  for (const el in obj) {
    if (typeof obj[el] === 'object') {
      newArr = newArr.concat(collectStrings(obj[el]));
    } else if (typeof obj[el] === 'string') {
      newArr.push(obj[el]);
    }
  }

  return newArr;
}
