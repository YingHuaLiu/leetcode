// https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/solution/zhe-yao-jie-shi-ken-ding-jiu-dong-liao-by-hyj8/
// 注意此题子数组必须连续的
var findLength = function (nums1, nums2) {
  let length1 = nums1.length, length2 = nums2.length, max = 0;
  // dp[i][j]表示以nums1[i]、nums2[j]为结尾的最长公共子数组长度
  let dp = new Array(length1 + 1).fill(0).map(() => new Array(length2 + 1).fill(0));
  for (let i = 1; i < length1; i++) {
    for (let j = 1; j < length2; j++) {
      if(nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      max = Math.max(dp[i][j], max);
    }
  }
  return max;
};
var findLength = function (nums1, nums2) {
  let length1 = nums1.length, length2 = nums2.length, max = 0;
  let dp = new Array(length2 + 1).fill(0);
  for (let i = 0; i < length1; i++) {
    for (let j = length2; j >= 1; j--) {
      if(nums1[i] === nums2[j - 1]) {
        dp[j] = dp[j - 1] + 1;
      } else {
        dp[j] = 0;
      }
      max = Math.max(max, dp[j]);
    }
  }
  return max;
};
