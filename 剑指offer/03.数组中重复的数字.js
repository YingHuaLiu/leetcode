// 1.map/set 太简单，不写了
// 2.原地计算
var findRepeatNumber = function (nums) {
  let i = 0;
  while (i < nums.length) {
    // 如果当前i和nums[i]对应，那么不用调换位置
    if(i === nums[i]) {
      i++;
      continue;
    }
    if(nums[nums[i]] === nums[i]) {
      return nums[i];
    }
    let temp = nums[i];
    nums[i] = nums[temp];
    nums[temp] = temp;
  }
};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
