// 类似岛屿数量问题，把单词看作一个孤岛
var exist = function (board, word) {
  let m = board.length, n = board[0].length;
  let res = false;
  let used = new Array(m).fill(0).map(() => new Array(n).fill(false));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, 0);
      // 判断res是否为true，有就提前结束循环
      if(res) {
        return true;
      }
    }
  }
  return false;

  function dfs(r, c, start) {
    // 当前格子已被占用或者res已变成true
    if(used[r][c] || res) {
      return;
    }
    // 如果当前字符不匹配，提前终止
    if(board[r][c] !== word[start]) {
      return;
    }
    if(start === word.length - 1) {
      res = true;
      return;
    }
    used[r][c] = true;
    for (let [row, col] of [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]]) {
      if(row >= 0 && row < m && col >= 0 && col < n) {
        dfs(row, col, start + 1);
      }
    }
    used[r][c] = false;
  }
};


console.log(exist([['C', 'A', 'A'], ['A', 'A', 'A'], ['B', 'C', 'D']], 'AAB'));
