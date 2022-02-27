// 读写双指针
var removeDuplicates = function (nums) {
  let write = 0, read = 0;
  while (read < nums.length) {
    if(read < nums.length - 1 && nums[read] === nums[read + 1]) {
      let val = nums[read], index = read;
      while (read < index + 2 && read < nums.length && val === nums[read]) {
        nums[write++] = nums[read++];
      }
      while (read < nums.length && val === nums[read]) {
        read++;
      }
    } else {
      nums[write++] = nums[read++];
    }
  }
  return write;
};
