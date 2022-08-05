/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // sort 메서드 대신 투포인터 정렬로 구현
  let len = nums.length;
  let answer = new Array(len).fill(0);
  let i = 0;
  let j = len - 1;
  for (let p = len - 1; p >= 0; --p) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      answer[p] = nums[i] * nums[i];
      ++i;
    } else {
      answer[p] = nums[j] * nums[j];
      --j;
    }
  }
  return answer;
};

// starts at 09:44
// submits at 10:02
// time : 18
