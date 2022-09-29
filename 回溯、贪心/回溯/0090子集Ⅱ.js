/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [], path = [];
  dfs(0);
  return res;

  function dfs(index) {
    if(path.length <= nums.length) {
      res.push(path.slice());
    }
    for (let i = index; i < nums.length; i++) {
      if(i > index && nums[i - 1] === nums[i]) {
        continue;
      }
      path.push(nums[i]);
      dfs(i + 1);
      path.pop();
    }
  }
};
