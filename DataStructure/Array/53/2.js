/**
 * @param {number[]} nums
 * @return {number}
 */

const MIN_SUM = -1 * Math.pow(10, 4) * Math.pow(10, 5) - 1;

var maxSubArray = function (nums) {
  return find_max_subarray(nums, 0, nums.length - 1);
};

function find_max_cross_subarray(arr, low, mid, high) {
  let left_sum = MIN_SUM;
  let right_sum = MIN_SUM;

  let sum = 0;
  for (let i = mid; i >= low; --i) {
    sum += arr[i];
    left_sum = Math.max(sum, left_sum);
  }

  sum = 0;
  for (let i = mid + 1; i <= high; ++i) {
    sum += arr[i];
    right_sum = Math.max(sum, right_sum);
  }
  return left_sum + right_sum;
}

function find_max_subarray(arr, low, high) {
  if (high === low) return arr[high];

  const mid = Math.floor((low + high) / 2);
  const left_sum = find_max_subarray(arr, low, mid);
  const right_sum = find_max_subarray(arr, mid + 1, high);
  const cross_sum = find_max_cross_subarray(arr, low, mid, high);

  return max(left_sum, right_sum, cross_sum);
}

function max(a, b, c) {
  if (a <= b) {
    if (b < c) return c;
    return b;
  }
  if (a > b) {
    if (a < c) return c;
    return a;
  }
}

// start at 09:00
// submitted at 09:27
// time : 27
// 웹 참고 ( https://torbjorn.tistory.com/425 )했으므로 시간을 두고 다시 풀어볼 예정
