function validAnagram(str1, str2) {
  //check if both are of same length
  if (str1.length != str2.length) {
    return false;
  }

  //create counters for each string
  let strCounter1 = {};
  let strCounter2 = {};

  //loop str1 and update counter
  for (let char of str1) {
    strCounter1[char] = (strCounter1[char] || 0) + 1;
  }

  //loop str2 and update counter
  for (let char of str2) {
    strCounter2[char] = (strCounter2[char] || 0) + 1;
  }

  // check if they are anagram
  for (let key in strCounter1) {
    if (!(key in strCounter2)) {
      return false;
    }
    if (strCounter1[key] !== strCounter2[key]) {
      return false;
    }
  }
  return true;
}

validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false) // false
validAnagram('awesome', 'awesom'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true

// Solution 2: 2 loops instead of 1
function isValidAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm');

//Anagram - digits

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  //check if the length are same
  if (num1.length !== num2.length) return false;

  //create a counter variable for num1
  let lookup = {};

  //loop and update the counter variable for num1
  for (let char of num1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  //loop to see if it exist in num2
  for (let char of num2) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char]--;
    }
  }

  //return
  return true;
}
