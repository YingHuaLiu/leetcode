var maxSlidingWindow = function (nums, k) {
  // 单调递减双向队列
  let dequeue = [];
  let res = [];
  // 先遍历前k个
  for (let i = 0; i < k; i++) {
    // 满足dequeue递减
    while (dequeue.length && nums[i] >= nums[dequeue[dequeue.length - 1]]) {
      dequeue.pop();
    }
    // 存入索引
    dequeue.push(i);
  }
  res.push(nums[dequeue[0]]);
  // i表示滑动窗口的右边界
  for (let i = k; i < nums.length; i++) {
    // 将当前值放入dequeue
    while (dequeue.length && nums[i] >= nums[dequeue[dequeue.length - 1]]) {
      dequeue.pop();
    }
    dequeue.push(i);
    // dequeue只存储在当前滑动窗口内的下标，在滑动窗口外的就删掉
    while (dequeue[0] <= i - k) {
      dequeue.shift();
    }
    res.push(nums[dequeue[0]]);
  }
  return res;
};
