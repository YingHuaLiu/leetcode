// 1.DFS
function numIslands(grid) {
  let m = grid.length, n = grid[0].length;
  let res = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      // 碰到1就增加岛屿数，并遍历这个岛屿的节点将其置为0
      if(grid[r][c] === '1') {
        res++;
        dfs(r, c);
      }
    }
  }
  return res;

  function dfs(row, col) {
    if(grid[row][col] === '0') {
      return;
    }
    grid[row][col] = '0';
    for (let [r, c] of [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]) {
      if(r >= 0 && r < m && c >= 0 && c < n) {
        dfs(r, c);
      }
    }
  }
}

// bfs
function numIslands(grid) {
  let m = grid.length, n = grid[0].length;

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if(grid[i][j] === '1') {
        res++;
        grid[i][j] = '0';
        let queue = [[i, j]];
        while (queue.length) {
          let [row, col] = queue.shift();
          for (let [r, c] of [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]) {
            if(r >= 0 && r < m && c >= 0 && c < n && grid[r][c] === '1') {
              queue.push([r, c]);
              grid[r][c] = '0';
            }
          }
        }
      }
    }
  }
  return res;
}

console.log(numIslands([['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']]));
