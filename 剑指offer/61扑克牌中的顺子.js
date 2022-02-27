var isStraight = function (nums) {
  let min = 14, max = -1, set = new Set();
  for (let num of nums) {
    // 大小王就跳过
    if(num === 0) {
      continue;
    }
    // 有重复的牌肯定不行
    if(set.has(num)) {
      return false;
    }
    min = Math.min(min, num);
    max = Math.max(max, num);
    set.add(num);
  }
  // 只要最大牌与最小牌小于5就能组成顺子
  return max - min < 5;
};
