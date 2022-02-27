// 滑动窗口
var shortestSubarray = function (nums, k) {
  
};
// console.log(shortestSubarray([1, 2], 4));
console.log(shortestSubarray([84, -37, 32, 40, 95], 167));

// 暴力双指针
var shortestSubarray = function (nums, k) {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if(sum >= k && min > (j - i + 1)) {
        min = j - i + 1;
        break;
      }
    }
  }
  return min === Number.MAX_VALUE ? -1 : min;
};
