function nestedEvenSum(obj) {
  let sum = 0;

  for (let el in obj) {
    if (typeof obj[el] === 'object') {
      sum += nestedEvenSum(obj[el]);
    } else if (typeof obj[el] === 'number') {
      sum += obj[el] % 2 === 0 ? obj[el] : 0;
    }
  }

  return sum;
}
