var movingCount = function (m, n, k) {
  let used = new Array(m).fill(0).map(() => new Array(n).fill(false));
  let res = 0;

  dfs(0, 0, k);

  return res;

  function dfs(row, col) {
    if(used[row][col] || !validate(row, col, k)) {
      return;
    }
    res++;
    used[row][col] = true;
    for (let [i, j] of [[row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]]) {
      if(i >= 0 && i < m && j >= 0 && j < n) {
        dfs(i, j);
      }
    }
  }
};

function validate(row, col, k) {
  let sum = 0;
  while (row) {
    sum += row % 10;
    row = Math.floor(row / 10);
  }
  while (col) {
    sum += col % 10;
    col = Math.floor(col / 10);
  }
  return sum <= k;
}
