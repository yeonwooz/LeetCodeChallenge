/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let len = nums.length;
  for (let i = 0; i < len; ++i) {
    let diff = target - nums[i];
    for (let j = 0; j < len; ++j) {
      if (i != j && nums[j] === diff) return [i, j];
    }
  }
};

// starts at 10:38
// submits at 10:41
// time : 3
