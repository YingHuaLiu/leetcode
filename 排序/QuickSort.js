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
  //每次取数组最左边、中间、和最右边的中值为基准值
  let pivot = medianOfThree(nums, left, right);
  let l = left; //左指针
  let m = left + 1; //中指针
  let r = right; //右指针

  while (m <= r) {
    if(nums[m] === pivot) {
      m++;
    } else if(nums[m] < pivot) {
      [nums[m], nums[l]] = [nums[l], nums[m]];
      l++;
      m++;
    } else {
      [nums[m], nums[r]] = [nums[r], nums[m]];
      r--;
    }
  }
  // 此时l,r指向pivot的两边
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
  // 保证nums[left]是中间大的值
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
      nums[index - 1] = nums[index];
      index--;
    }
    nums[index] = cur;
  }
}

let nums = [10, 5, 5, 5, 5, 5, 5, 5, 7, 4, 1, 5];
console.log(quickSort(nums));
