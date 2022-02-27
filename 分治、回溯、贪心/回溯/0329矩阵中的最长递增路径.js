// 回溯+记忆化搜索
var longestIncreasingPath = function (matrix) {
  let m = matrix.length, n = matrix[0].length;
  let visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(dfs(i, j), max);
    }
  }
  return max;

  function dfs(row, col) {
    if(visited[row][col] > 0) {
      return visited[row][col];
    }
    ++visited[row][col];
    for (let [r, c] of [[row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]]) {
      if(r >= 0 && r < m && c >= 0 && c < n && matrix[row][col] < matrix[r][c]) {
        visited[row][col] = Math.max(dfs(r, c) + 1, visited[row][col]);
      }
    }
    return visited[row][col];
  }
};
