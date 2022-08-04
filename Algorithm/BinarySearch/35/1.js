/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  if (nums[end] < target) return end + 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) start = mid + 1;
    else end = mid;
  }
  return start;
};

// start at 09:35
// submitted at 10:14
// time : 39
