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
;
