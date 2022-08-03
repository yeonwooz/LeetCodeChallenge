/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

var matrixReshape = function (mat, r, c) {
  const realR = mat.length;
  const realC = mat[0].length;

  if (realR * realC !== r * c) return mat;

  let remat = new Array(r);

  for (let i = 0; i < r; ++i) {
    remat[i] = new Array(c).fill(0);
  }

  const serial = [];

  let i = 0;
  while (i < realR) {
    let j = 0;
    while (j < realC) {
      serial.push(mat[i][j]);
      ++j;
    }
    ++i;
  }

  let idx = 0;
  i = 0;
  while (i < r) {
    let j = 0;
    while (j < c) {
      remat[i][j] = serial[idx++];
      ++j;
    }
    ++i;
  }

  return remat;
};

// starts at 10:45
// submits at 11:02
// time : 17
