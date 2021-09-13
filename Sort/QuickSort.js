function quickSort(nums) {
  help(nums, 0, nums.length - 1);
  return nums;
}

function help(nums, left, right) {
  // 如果区间过小就用插入排序
  if(right - left < 10) {
    insertionSort(nums, left, right);
    return;
  }
  if(left >= right) return;
  //每次取数组最左边、中间、和最右边的中值为基准值
  let pivot = medianOfThree(nums, left, right);
  // let pivot = nums[left]
  let l = left; //左指针
  let i = left + 1; //中指针
  let r = right; //右指针

  while (i <= r) {
    if(nums[i] === pivot) {
      i++;
    } else if(nums[i] < pivot) {
      [nums[i], nums[l]] = [nums[l], nums[i]];
      l++;
      i++;
    } else {
      [nums[i], nums[r]] = [nums[r], nums[i]];
      r--;
    }
  }
  // [nums[left], nums[l]] = [nums[l], nums[left]]
  help(nums, left, l - 1);
  help(nums, r + 1, right);
}

function medianOfThree(nums, left, right) {
  const mid = left + (right - left) >> 1;
  if(nums[mid] > nums[right]) {
    [nums[mid], nums[right]] = [nums[right], nums[mid]];
  }
  if(nums[left] > nums[right]) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  if(nums[mid] > nums[left]) {
    [nums[mid], nums[left]] = [nums[left], nums[mid]];
  }
  return nums[left];
}

function insertionSort(nums, left, right) {
  for (let i = left + 1; i <= right; i++) {
    let cur = nums[i];
    let index = i;
    while (index > left && nums[index] < nums[index - 1]) {
      [nums[index], nums[index - 1]] = [nums[index - 1], nums[index]];
      index--;
    }
    nums[index] = cur;
  }
}

let nums = [10, 5, 5, 5, 5, 5, 5, 5, 7, 4, 1, 5];
console.log(quickSort(nums));
