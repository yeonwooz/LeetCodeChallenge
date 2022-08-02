/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 뒤쪽에 삽입 후 퀵소트
  for (let i = m; i < m + n; ++i) {
    nums1[i] = nums2[i - m];
  }
  qsort(nums1, 0, m + n - 1);
};

function qsort(arr, start, end) {
  if (start >= end) return;
  let pivot = arr[Math.floor((start + end) / 2)];
  let left = start;
  let right = end;

  while (left <= right) {
    while (arr[left] < pivot) ++left;
    while (arr[right] > pivot) --right;
    if (left <= right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      ++left;
      --right;
    }
    break;
  }
  if (start < right) qsort(arr, start, right);
  if (end > left) qsort(arr, left, end);
}

// starts at 10:49
// submits at 11:17
// times: 28
