/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const nums = [];
  let idx = -1;
  for (let i = 0; i < mat.length; ++i) {
    for (let j = 0; j < mat[i].length; ++j) {
      nums.push(mat[i][j]);
    }
  }

  if (nums.length !== r * c) return mat;

  let arr = new Array(r);
  for (let i = 0; i < r; ++i) {
    arr[i] = new Array(c);
    for (let j = 0; j < arr[i].length; ++j) {
      arr[i][j] = nums.shift();
    }
  }

  return arr;
};

// starts at 10:21
// submits at 10:39
// time : 18
