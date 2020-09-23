//Option 1: o(n), o(1)
function isSubsequence(str1, str2) {
  //check if any of the string is null
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  //create first to store char
  let first = 0;

  //loop through to find if matches
  for (let second = 0; second < str2.length; second++) {
    if (str1[first] === str2[second]) {
      first++;
    }
    if (first === str1.length) return true;
  }

  //return
  return false;
}

//Option 2: recursive 0(n) in space
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
