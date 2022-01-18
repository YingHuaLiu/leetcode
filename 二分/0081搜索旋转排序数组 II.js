// 核心：比33题多了一步这个
// 此时无法判断区间 [l,mid] 和区间 [mid+1,r] 哪个是有序的
// 只能将当前二分区间的左边界加一，右边界减一，然后在新区间上继续二分查找
var search = function (nums, target) {
  if(nums.length === 1) {
    return nums[0] === target;
  }
  let l = 0, r = nums.length - 1;
  while (l < r) {
    let mid = l + ((r - l) >> 1);
    // 核心：比33题多了一步这个
    // 此时无法判断区间 [l,mid] 和区间 [mid+1,r] 哪个是有序的
    // 只能将当前二分区间的左边界加一，右边界减一，然后在新区间上继续二分查找
    if(nums[mid] === nums[l] && nums[mid] === nums[r]) {
      l++;
      r--;
    } else if(nums[mid] >= nums[l]) {
      if(target <= nums[mid] && target >= nums[l]) {
        r = mid;
      } else {
        l = mid + 1;
      }
    } else {
      if(target <= nums[r] && nums[mid] <= target) {
        l = mid;
      } else {
        r = mid - 1;
      }
    }
  }

  return nums[l] === target;
};
console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
