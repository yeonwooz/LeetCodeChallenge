/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return binSearch(nums, nums.length, target);
};

function binSearch(arr, len, target) {
  let start = 0;
  let end = len - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// start at 08 :10
// submitted at 08:13
// time : 3
