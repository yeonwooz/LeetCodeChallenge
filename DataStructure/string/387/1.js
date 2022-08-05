/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; ++i) {
    if (!map.get(s[i]) && map.get(s[i]) != 0) map.set(s[i], i);
    else map.set(s[i], -1);
  }
  console.log(map);
  let answer = -1;
  for (let element of map) {
    if (element[1] > -1) {
      answer = element[1];
      break;
    }
  }
  return answer;
};

// starts at 09:13
// submits at 09:25
// time : 12
