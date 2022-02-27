// 字典树的先序遍历
function lexicalOrder(n) {
  let res = [];
  for (let i = 1; i <= 9; i++) {
    dfs(i);
  }
  return res;

  function dfs(value) {
    if(value > n) {
      return;
    }
    res.push(value);
    for (let i = 0; i <= 9; i++) {
      dfs(value * 10 + i);
    }
  }
}
