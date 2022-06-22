// 和1相比更简单了，不需要记录path
function totalNQueens(n) {
  let res = 0;
  const cols = new Set();
  const dg = new Set();
  const udg = new Set();
  dfs(0);

  return res;

  function dfs(row) {
    if(row === n) {
      res++;
      return;
    }
    for (let i = 0; i < n; i++) {
      if(cols.has(i) || dg.has(row + i) || udg.has(row - i)) {
        continue;
      }
      cols.add(i);
      dg.add(row + i);
      udg.add(row - i);

      dfs(row + 1);

      cols.delete(i);
      dg.delete(row + i);
      udg.delete(row - i);
    }
  }
}

console.log(totalNQueens(4));
