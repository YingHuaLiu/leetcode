/**
 * https://leetcode-cn.com/problems/single-number-ii/solution/single-number-ii-mo-ni-san-jin-zhi-fa-by-jin407891/
 * 只有一个数字出现一次，其余出现了三次
 */
var singleNumber = function (nums) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        let total = 0;
        for (let num of nums) {
            total += num >> i & 1;
        }
        if (total % 3) {
            res |= 1 << i;
        }
    }
    return res;
};
