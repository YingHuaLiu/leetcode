// 动态规划 time:o(n^2) space:o(n)
function lengthOfLIS(nums) {
    let dp = [1], max = 1
    for (let i = 1, length = nums.length; i < length; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        max = Math.max(max, dp[i])
    }
    return max
}

// 贪心+二分 time:o(n*logn) space:o(n)
