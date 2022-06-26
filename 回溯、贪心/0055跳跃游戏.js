// 贪心
// 用max变量保存可以跳到的最大值，遍历数组对max进行更新
var canJump = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    // 如果当前节点可达
    if(max >= i) {
      max = Math.max(max, i + nums[i]);
      // 如果max已经超过最后一个下标，提前结束
      if(max >= nums.length - 1) {
        return true;
      }
    }
  }
  return false;
};
