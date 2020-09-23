function radixSort(arr) {
  const getDigit = (num, pos) => {
    //String option
    //   let str = num.toString();
    //   return parseInt(str[str.length - 1 - pos], 10);
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
  };

  const digitCount = (num) => {
    //String option
    //return num.toString().length;
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  };

  const getMaxDigit = (arr) => {
    let max = 0;
    for (let num of arr) {
      max = Math.max(digitCount(num), max);
    }
    return max;
  };

  let maxDigit = getMaxDigit(arr);

  for (let i = 0; i < maxDigit; i++) {
    let bucket = Array.from({ number: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      bucket[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...bucket);
  }

  return arr;
}
