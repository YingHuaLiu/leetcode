// 滑动窗口
var findContinuousSequence = function (target) {
  let res = [], left = right = 1;
  while (right <= (target + 1) >> 1) {
    // left~right的和
    let sum = (right + left) * (right - left + 1) * 0.5;
    if(sum === target) {
      let temp = [];
      for (let i = left; i <= right; i++) {
        temp.push(i);
      }
      res.push(temp);
      left++;
    } else if(sum < target) {
      right++;
    } else {
      left++;
    }
  }
  return res;
};
