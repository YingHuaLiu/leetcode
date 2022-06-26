// https://www.acwing.com/solution/content/66643/
function fn(nums) {
  let m = nums.length, n = nums[0].length;
  let cache = new Array(m).fill(0).map(() => new Array(n).fill(-1));
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res = Math.max(res, dfs(i, j));
    }
  }

  return res;

  function dfs(row, col) {
    if(cache[row][col] !== -1) {
      return cache[row][col];
    }
    cache[row][col] = 1;
    for (let [r, c] of [[row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]]) {
      if(r >= 0 && r < m && c >= 0 && c < n && nums[r][c] < nums[row][col]) {
        cache[row][col] = Math.max(cache[row][col], dfs(r, c) + 1);
      }
    }
    return cache[row][col];
  }
}

console.log(fn([
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9],
]));
