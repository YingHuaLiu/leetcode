function solveNQueens(n) {
  const res = [];
  const cols = new Set();
  const dg = new Set();
  const udg = new Set();
  dfs(0, []);

  return res;

  function dfs(row, path) {
    if(row === n) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < n; i++) {
      // 判断是否在同一列或者对角线上
      if(cols.has(i) || dg.has(row + i) || udg.has(row - i)) {
        continue;
      }
      cols.add(i);
      dg.add(row + i);
      udg.add(row - i);
      path.push(helper(i));

      dfs(row + 1, path);

      cols.delete(i);
      dg.delete(row + i);
      udg.delete(row - i);
      path.pop();
    }
  }

  // 将某一行的字符串处理一下
  function helper(col) {
    const res = new Array(n).fill('.');
    res[col] = 'Q';
    return res.join('');
  }
}

console.log(solveNQueens(2));
