/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; ++i) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};

// start at 14:57
// submitted at 14:58
// time : 1
