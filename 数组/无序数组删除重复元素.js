const heapSort = require('../排序/HeapSort');
// 要求空间复杂度为1，时间复杂度可适当放宽
// 先排序再用双指针
// 只有堆排序的空间复杂度为1
var removeDuplicates = function (nums) {
  heapSort(nums);

  let left = 1, right = 1;
  while (right < nums.length) {
    if(nums[right] === nums[right - 1]) {
      right++;
    } else {
      nums[left++] = nums[right++];
    }
  }
  return nums.slice(0, left);
};

console.log(removeDuplicates([5, 6, 5, 4, 3, 1, 2, 5, 3, 5, 4]));

