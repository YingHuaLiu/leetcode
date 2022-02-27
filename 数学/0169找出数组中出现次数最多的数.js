// 投票算法，等于当前值+1，不等于-1
var majorityElement = function (nums) {
  // 候选人
  let candidate;
  // 候选人的票数
  let count = 0;
  for (let num of nums) {
    // 如果当前count为0，那么选举当前的为候选人
    if(count === 0) {
      candidate = num;
    }
    count += candidate === num ? 1 : -1;
  }
  return candidate;
};
