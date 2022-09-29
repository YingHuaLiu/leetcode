/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [], path = [];
  dfs(1, k);
  return res;

  function dfs(index, left) {
    if(left === 0) {
      res.push(path.slice());
      return;
    }
    for (let i = index; i <= n - left + 1; i++) {
      path.push(i);
      dfs(i + 1, left - 1);
      path.pop();
    }
  }

};
