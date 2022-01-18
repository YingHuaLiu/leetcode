var search = function (nums, target) {
  if(nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  let l = 0, r = nums.length - 1;
  while (l < r) {
    let mid = l + ((r - l) >> 1);
    // 如果[l,mid]是升序或者l===mid
    if(nums[mid] >= nums[l]) {
      // 判断target是否在[l,mid]上
      if(target <= nums[mid] && target >= nums[l]) {
        r = mid;
      } else {
        l = mid + 1;
      }
    } else {// 如果[mid,r]是升序
      // 判断target是否在[mid,r]
      if(target <= nums[r] && nums[mid] <= target) {
        l = mid;
      } else {
        r = mid - 1;
      }
    }
  }

  return nums[l] === target ? l : -1;
};
console.log(search([1, 3], 2));
