var subsets = function (nums) {
  let res = [], path = [];
  dfs(0);
  return res;

  function dfs(index) {
    if(path.length <= nums.length) {
      res.push(path.slice());
    }
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(i + 1);
      path.pop();
    }
  }
};
