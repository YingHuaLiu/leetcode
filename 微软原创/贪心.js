/**
 * 一个数组，index代表列数，A[i]代表第i列高度为A[i]，有一种横着的stroke，高度为1，长度为任意，问最少几个stroke能覆盖这个图形。
 * e.g. 1,2,1-> 2; 5,8->8
 * 解：
 * 如果A[i-1]大于等于A[i]，说明可以用前面的stroke延伸过来，对答案不产生贡献；
 * 否则，需要新产生A[i]-A[i-1]根stroke来覆盖后面更高的高度。所以答案就是Σ(A[i]-A[i-1] if(A[i]>A[i-1]))
 */
function test(nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if(nums[i] > nums[i - 1]) {
      res += nums[i] - nums[i - 1];
    }
  }
  return res;
}

console.log(test([5, 8]));
