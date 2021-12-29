/** 利用异或性质：
 *  任何数和 0 做异或运算，结果仍然是原来的数
 *  任何数和其自身做异或运算，结果是 0
 */

var singleNumber = function (nums) {
    let res = 0;
    for (let num of nums) {
        res ^= num;
    }
    return res;
};

console.log(singleNumber([1, 2, 3, 4, 1, 2, 9, 3, 4]));
