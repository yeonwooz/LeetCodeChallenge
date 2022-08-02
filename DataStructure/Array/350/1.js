/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const answer = [];
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < nums1.length; ++i) {
    if (!map1.get(nums1[i])) {
      map1.set(nums1[i], 1);
    } else {
      map1.set(nums1[i], map1.get(nums1[i]) + 1);
    }
  }

  for (let i = 0; i < nums2.length; ++i) {
    if (map1.get(nums2[i])) {
      if (!map2.get(nums2[i])) {
        map2.set(nums2[i], 0);
      }

      if (map2.get(nums2[i]) < map1.get(nums2[i])) {
        answer.push(nums2[i]);
        map2.set(nums2[i], map2.get(nums2[i]) + 1);
      }
    }
  }
  return answer;
};

// starts at 11:28
// submits at 11:54
// time : 26
