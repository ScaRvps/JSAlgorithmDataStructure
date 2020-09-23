function isPalindrome(str) {
  let reverseStr = '';
  if (!str) return null;
  if (str.length === 1) return str;
  const lastPosition = str.length - 1;
  reverseStr = str[lastPosition] + isPalindrome(str.substring(0, lastPosition));
  //console.log(reverseStr);
  if (lastPosition === reverseStr.length) {
    return reverseStr === str;
  } else {
    return reverseStr;
  }
}

//Option 2: helper recursion
function isPalindrome(str) {
  function reverse(str) {
    //check if str is empty
    if (!str) return null;
    if (str.length === 1) return str;
    const lastPosition = str.length - 1;
    return str[lastPosition] + reverse(str.substring(0, lastPosition));
  }
  return str === reverse(str);
}

//Option 3: better than first

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
