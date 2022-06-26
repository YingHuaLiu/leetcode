// 二维矩阵最外围一圈一定不存在封闭岛屿，所以与最外围一圈的0（土地）相连的0（土地）也都不能是封闭岛屿
// 初始化：将与最外围一圈相连的0（土地）全部设置为1（水）
// 计算：初始化后还有多少岛屿，即是封闭的岛屿
function closedIsland(grid) {
  let m = grid.length, n = grid[0].length;
  // 将左右两边相连的陆地变成水
  for (let i = 0; i < m; i++) {
    dfs(i, 0);
    dfs(i, n - 1);
  }
  // 将上下两边相连的陆地变成水
  for (let i = 0; i < n; i++) {
    dfs(0, i);
    dfs(m - 1, i);
  }

  let res = 0;
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if(grid[i][j] === 0) {
        res++;
        dfs(i, j);
      }
    }
  }
  return res;

  function dfs(row, col) {
    if(grid[row][col] === 1) {
      return;
    }
    grid[row][col] = 1;
    for (let [r, c] of [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]) {
      if(r >= 0 && r < m && c >= 0 && c < n) {
        dfs(r, c);
      }
    }
  }
}
