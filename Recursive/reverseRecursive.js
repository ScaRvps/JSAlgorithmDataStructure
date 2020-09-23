function reverse(str) {
  //check if str is empty
  if (!str) return null;
  if (str.length === 1) return str;
  const lastPosition = str.length - 1;
  return str[lastPosition] + reverse(str.substring(0, lastPosition)); // return reverse(str.slice(1)) + str[0];
}

//awesome - emosewa
