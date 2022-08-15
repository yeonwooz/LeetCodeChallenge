/**
 * @param {number[]} nums
 * @return {number}
 */

let MIN_SUM = -1 * Math.pow(10, 4) * Math.pow(10, 5) - 1;

var maxSubArray = function (nums) {
  return maxSum(nums, 0, nums.length - 1);
};

function maxSum(nums, left, right) {
  if (left === right) return nums[left];

  let lsum = MIN_SUM;
  let rsum = MIN_SUM;
  let allsum = 0;

  let mid = Math.floor((left + right) / 2);
  let sum = 0;
  for (let i = mid; i >= left; --i) {
    sum += nums[i];
    lsum = Math.max(sum, lsum);
  }

  sum = 0;
  for (let i = mid + 1; i <= right; ++i) {
    sum += nums[i];
    rsum = Math.max(sum, rsum);
  }
  allsum = lsum + rsum;

  lsum = maxSum(nums, left, mid);
  rsum = maxSum(nums, mid + 1, right);

  return maxAmongThree(allsum, lsum, rsum);
}

function maxAmongThree(a, b, c) {
  if (a < b) {
    if (b < c) return c;
    return b;
  }

  if (a < c) return c;
  return a;
}

// start at 15:01
// submits at 16:07
// time : 66
