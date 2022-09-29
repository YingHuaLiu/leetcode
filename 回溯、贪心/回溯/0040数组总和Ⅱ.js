/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [], path = [];
  // 排序是剪枝的前提
  candidates.sort((a, b) => a - b);
  dfs(0, 0);
  return res;

  function dfs(curSum, start) {
    if(curSum === target) {
      res.push(path.slice());
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if(i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      if(curSum + candidates[i] > target) {
        break;
      }
      path.push(candidates[i]);
      dfs(curSum + candidates[i], i + 1);
      path.pop();
    }
  }
};
