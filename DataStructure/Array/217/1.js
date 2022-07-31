/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; ++i) {
    const cur_cnt = map.get(nums[i]);
    if (cur_cnt === 1) return true;
    map.set(nums[i], 1);
  }

  return false;
};

// start at 17:05 
// submitted at 17:18
// time : 13
