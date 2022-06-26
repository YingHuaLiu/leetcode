function fn(nums, x, y, a, b) {
  if(x === a && y === b) {
    return [];
  }
  let m = nums.length, n = nums[0].length;
  let onPath = new Array(m).fill(0).map(() => new Array(n).fill(false));
  let res = [];

  dfs(x, y, []);
  return res;

  function dfs(row, col, path) {
    if(onPath[row][col]) {
      return;
    }
    onPath[row][col] = true;
    path.push([row, col]);
    if(row === a && col === b) {
      if(!res.length || res.length > path.length) {
        res = path.slice();
      }
      return;
    }
    for (let [r, c] of [[row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]]) {
      if(r >= 0 && r < m && c >= 0 && c < n && nums[r][c] === 1) {
        dfs(r, c, path);
      }
    }
  }
}

console.log(fn([
  [1, 1, 1, 0, 0],
  [1, 0, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1]
], 0, 1, 3, 4));
