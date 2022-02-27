const rob = nums => {
  if(nums.length <= 2) {
    return Math.max(...nums);
  }
  let a = nums[0], b = Math.max(a, nums[1]);
  for (let i = 2; i < nums.length; i++) {
    let temp = Math.max(a + nums[i], b);
    a = b;
    b = temp;
  }
  return b;
};

console.log(rob([3, 2, 2]));

// 一维
var rob = function (nums) {
  if(!nums.length) {
    return 0;
  }
  if(nums.length <= 2) {
    return Math.max(...nums);
  }
  let length = nums.length;
  let dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
};
