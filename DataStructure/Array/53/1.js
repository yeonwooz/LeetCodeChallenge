/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // let nums = [-2, -1]
  let result = nums[0];
  let n = nums.length;
  if (n === 1) return nums[0];

  for (let cnt = 1; cnt <= n; ++cnt) {
    let s = 0;
    for (let i = 0; i < cnt; ++i) {
      s += nums[i];
      if (result < s) result = s;
    }
    for (let i = cnt; i < n; ++i) {
      s += nums[i] - nums[i - cnt];
      if (result < s) result = s;
    }
  }
  return result;
};

// start at 17:19
// submitted at 17:34
// time : 13
// 완전탐색 방법 시간초과 => 분할정복 공부 후 재도전 예정
