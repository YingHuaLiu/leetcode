function quickSort(nums) {
  help(nums, 0, nums.length - 1);
  return nums;
}

function help(nums, left, right) {
  if(left >= right) {
    return;
  }
  //为了方便,每次取数组的最左边的值为基准值
  let pivot = nums[left];
  let l = left;
  let r = right;

  while (l < r) {
    while (l < r && nums[r] >= pivot) {
      r--;
    }
    while (l < r && nums[l] <= pivot) {
      l++;
    }
    [nums[l], nums[r]] = [nums[r], nums[l]];
  }
  nums[left] = nums[l];
  nums[l] = pivot;
  help(nums, left, r - 1);
  help(nums, r + 1, right);
}

let nums = [3, 3, 3, 3, 2, 1, 5];
quickSort(nums).forEach(element => {
  console.log(element);
});
