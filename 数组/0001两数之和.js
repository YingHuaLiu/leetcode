// 暴力法
var twoSum = function (nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
        break;
      }
    }
  }
  return result;
};

// 哈希表
var twoSum = function (nums, target) {
  const result = [];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if(map.has(target - nums[i])) {
      result.push(i);
      result.push(map.get(target - nums[i]));
    } else {
      map.set(nums[i], i);
    }
  }
  return result;
};

