// 投票算法，等于当前值+1，不等于-1
var majorityElement = function (nums) {
    let num
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            num = nums[i]
        }
        count += num === nums[i] ? 1 : -1
    }
    return num
};