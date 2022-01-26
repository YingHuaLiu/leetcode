/**
 * https://leetcode-cn.com/problems/largest-number/
 */
function largestNumber(nums) {
  nums.sort((a, b) => {
    let s1 = '' + a + b, s2 = '' + b + a;
    return parseInt(s2) - parseInt(s1);
  });
  return nums.join('');
}

console.log(largestNumber([2, 33, 45, 9]));

// 改编：最小数
var minNumber = function (nums) {
  nums.sort((a, b) => {
    let num1 = '' + a + b, num2 = '' + b + a;
    return parseInt(num1) - parseInt(num2);
  });
  return nums.join('');
};
