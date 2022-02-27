// 动态规划 time:o(n^2) space:o(n)
function lengthOfLIS(nums) {
  let dp = [1], max = 1;
  for (let i = 1, length = nums.length; i < length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if(nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
}

// 贪心+二分 time:o(n*logn) space:o(n)

// 追问：输出所有最长上升子序列
function lengthOfLIS(nums) {
  let dp = [], max = 1, help = [];
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    help[i] = -1;
    for (let j = 0; j < i; j++) {
      if(nums[j] < nums[i]) {
        if(dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          help[i] = j;
        }
      }
    }
    max = Math.max(max, dp[i]);
  }

  let array = [];
  for (let i = 0; i < nums.length; i++) {
    if(dp[i] === max) {
      array.push(i);
    }
  }

  let res = [];
  for (let num of array) {
    let temp = [];
    while (num >= 0) {
      temp.unshift(nums[num]);
      num = help[num];
    }
    res.push(temp);
  }

  return res;
}

console.log(lengthOfLIS([2,1,4,3,6,5,8,7]));
