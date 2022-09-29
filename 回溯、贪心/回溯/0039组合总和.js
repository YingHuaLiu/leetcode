var combinationSum = function (candidates, target) {
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
      // 扩展：如果candidates有重复元素，那么就需要去重，
      // if (i > start && candidates[i] === candidates[i - 1]) {
      //     continue;
      // }
      if(curSum + candidates[i] > target) {
        break;
      }
      path.push(candidates[i]);
      dfs(curSum + candidates[i], i);
      path.pop();
    }
  }
};
console.log(combinationSum([2, 3, 3, 5], 8));
