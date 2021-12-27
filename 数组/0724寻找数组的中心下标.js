/**
 * https://leetcode-cn.com/problems/find-pivot-index/
 */
var pivotIndex = function (nums) {
    let total = nums.reduce((pre, cur) => pre + cur, 0)
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let right = total - nums[i] - sum;
        if (right === sum) {
            return i;
        }
        sum+=nums[i];
    }
    return -1;
};
console.log(pivotIndex([2, 1, -1]));
