/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map(); // key: element, value : index
  for (let i = 0; i < nums.length; ++i) {
    let foundIndex = map.get(target - nums[i]);
    if (foundIndex > -1) {
      return [foundIndex, i];
    }
    map.set(nums[i], i);
  }
};

// starts at 13:53
// submits at 14:03
// time : 10
