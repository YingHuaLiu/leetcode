var longestConsecutive = function (nums) {
  // 去重
  let set = new Set(nums);
  let max = 0;
  for (let num of nums) {
    // 只从头节点开始计算，如果有num-1那么就忽略当前的num，方便计算
    if(!set.has(num - 1)) {
      let curMax = 1;
      let curNum = num;
      while (set.has(curNum + 1)) {
        curMax++;
        curNum++;
      }
      max = Math.max(max, curMax);
    }
  }
  return max;
};
