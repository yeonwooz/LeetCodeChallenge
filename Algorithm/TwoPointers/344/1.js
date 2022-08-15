/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = s.length;
  for (let i = 0; i < Math.floor(len / 2); ++i) {
    [s[i], s[len - i - 1]] = [s[len - i - 1], s[i]];
  }
};

// starts at 14:50
// submits at 14:52
// time : 2
