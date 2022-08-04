/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let answer = true;

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] !== "." && !isValid(board, i, j)) answer = false;
    }
  }

  if (!areaValidation(board)) answer = false;
  return answer;
};

function isValid(arr, t_i, t_j) {
  const rows = new Set();
  let i = 0;
  while (i < 9) {
    if (arr[i][t_j] === ".") {
      ++i;
      continue;
    }
    if (rows.has(arr[i][t_j])) return false;
    rows.add(arr[i][t_j]);
    ++i;
  }

  const cols = new Set();
  let j = 0;
  while (j < 9) {
    if (arr[t_i][j] === ".") {
      ++j;
      continue;
    }
    if (cols.has(arr[t_i][j])) return false;
    cols.add(arr[t_i][j]);
    ++j;
  }

  return true;
}

function areaValidation(arr) {
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      const set = new Set();
      let mid_i = i * 3 + 1;
      let mid_j = j * 3 + 1;

      for (let a = mid_i - 1; a <= mid_i + 1; ++a) {
        for (let b = mid_j - 1; b <= mid_j + 1; ++b) {
          if (arr[a][b] === ".") continue;
          if (set.has(arr[a][b])) return false;
          set.add(arr[a][b]);
        }
      }
    }
  }
  return true;
}

// start at 09:05
// submitted at 09:32
// time : 27
