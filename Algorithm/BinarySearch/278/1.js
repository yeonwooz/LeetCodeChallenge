/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let startv = 1;
    let endv = n;
    while (startv < endv) {
      let midv = Math.floor((startv + endv) / 2);
      if (isBadVersion(midv)) endv = midv;
      else startv = midv + 1;
    }

    return endv;
  };
};

// start at 08:30
// submitted at 09:03
// time : 33
// 불필요하게 array를 만들어서 메모리 초과로 시간을 낭비했다

