// 只要求出数组中最大的三个数以及最小的两个数
var maximumProduct = function (nums) {
  // min1是最小的，min2是第二小的
  let min1 = min2 = Number.MAX_SAFE_INTEGER;
  // max1是最大的，max2是第二大的，max3是第三大的
  let max1 = max2 = max3 = -Number.MAX_SAFE_INTEGER;

  for (let num of nums) {
    if(num < min1) {
      min2 = min1;
      min1 = num;
    } else if(num < min2) {
      min2 = num;
    }

    if(num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if(num > max2) {
      max3 = max2;
      max2 = num;
    } else if(num > max3) {
      max3 = num;
    }
  }

  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};
