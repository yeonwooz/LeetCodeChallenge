/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();
  for (let i = 0; i < nums1.length; ++i) {
    if (!map.get(nums1[i])) {
      map.set(nums1[i], 1);
    } else {
      map.set(nums1[i], map.get(nums1[i]) + 1);
    }
  }

  const answer = [];
  for (let i = 0; i < nums2.length; ++i) {
    if (map.get(nums2[i])) {
      answer.push(nums2[i]);
      map.set(nums2[i], map.get(nums2[i]) - 1);
    }
  }
  return answer;
};

// starts at 10:39
// submits at 10:46
// time : 7
