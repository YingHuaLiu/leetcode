var findNumberOfLIS = function (nums) {
  let dp = [1], max = 1, count = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if(nums[j] < nums[i]) {
        if(dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if(dp[i] === dp[j] + 1) {
          count[i] += count[j];
        }
      }
    } 
    max = Math.max(max, dp[i]);
  }
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if(dp[i] === max) {
      res += count[i];
    }
  }
  return res;
};
console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
