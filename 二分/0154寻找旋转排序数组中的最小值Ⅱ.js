function findMin(nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    if(nums[mid] < nums[right]) {
      right = mid;
    } else if(nums[mid] > nums[right]) {
      left = mid + 1;
    } else { // 如果nums[mid] === nums[right]
      right--;
    }
  }
  return nums[left];
}

// 改编：寻找最大值呢？
function findMax(nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = (left + right + 1) >> 1;
    if(nums[mid] > nums[left]) {
      left = mid;
    } else if(nums[mid] < nums[left]) {
      right = mid - 1;
    } else {
      left++;
    }
  }
  return nums[left];
}

console.log(findMax([3, 1, 1, 2, 2, 2, 2]));
