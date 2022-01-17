// 1.DFS
function numIslands(grid) {
  if(!grid || !grid.length) {
    return 0;
  }
  let m = grid.length, n = grid[0].length;
  let res = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      // 碰到1就增加岛屿数，并遍历这个岛屿的节点将其置为0
      if(grid[r][c] === '1') {
        res++;
        dfs(grid, r, c);
      }
    }
  }
  return res;
}

function dfs(grid, r, c) {
  let m = grid.length, n = grid[0].length;

  // 超出地图范围或者当前为0，就直接返回
  if(r < 0 || c < 0 || r >= m || c >= n || grid[r][c] === '0') {
    return;
  }

  // 将该岛屿的1都变成0
  grid[r][c] = '0';
  // 遍历周围节点
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}

// bfs
function numIslands(grid) {
  if(!grid || !grid.length) {
    return 0;
  }
  let m = grid.length, n = grid[0].length;
  let res = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      // 碰到1就增加岛屿数，并遍历这个岛屿的节点将其置为0
      if(grid[r][c] === '1') {
        res++;
        let queue = [[r, c]];
        while (queue.length) {
          let [row, col] = queue.shift();
          for (let [irow, icol] of [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]) {
            if(irow >= 0 && irow < m && icol >= 0 && icol < n && grid[irow][icol] === '1') {
              grid[irow][icol] = '0';
              queue.push([irow, icol]);
            }
          }
        }
      }
    }
  }
  return res;
}

console.log(numIslands([['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']]));
