function findLongestSubstring(str) {
  if (!str) return 0;

  let start = 0;
  let longest = 0;
  let substring = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (substring[char]) {
      start = Math.max(start, substring[char]);
    }

    longest = Math.max(longest, i - start + 1);

    substring[char] = i + 1;
  }

  return longest;
}

// 'thisisawesome'

// 1 2 3 4
// t: 1
// h: 2
// i: 5
// s: 6

// start 4
