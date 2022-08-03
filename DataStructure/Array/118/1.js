/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // 파스칼삼각형의 numRows행까지 출력
  return pascal(numRows);
};

function pascal(numRows) {
  let pascal = new Array(numRows);
  for (let i = 0; i < numRows; ++i) {
    pascal[i] = new Array(i + 1);
    for (let j = 0; j < i + 1; ++j) {
      if (i === 0 || j === 0 || i === j) pascal[i][j] = 1;
      else pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
    }
  }

  return pascal;
}

// starts at 11:09
// submits at 11:18
// time : 9
