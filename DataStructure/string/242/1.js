/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  const map = new Map();
  for (let i = 0; i < s.length; ++i) {
    if (!map.get(s[i])) map.set(s[i], 1);
    else map.set(s[i], map.get(s[i]) + 1);
  }

  for (let i = 0; i < t.length; ++i) {
    if (!map.get(t[i])) return false;
    else map.set(t[i], map.get(t[i]) - 1);
  }

  for (let element of map) {
    if (element[1] > 0) return false;
  }
  return true;
};

// starts at 09:36
// submits at 09:40
// time : 4
