function canPartitionKSubsets(nums, k) {
  let sum = nums.reduce((a, b) => a + b, 0);
  // 排序，从大到小排序，这样遍历的时候先选取大的
  nums.sort((a, b) => b - a);
  // 提前判断如果sum不能被K整除，那么肯定不能
  if(sum % k !== 0) {
    return false;
  }
  let target = sum / k;
  // 提前判断如果target小于nums最大值，那么肯定不能
  if(target < nums[0]) {
    return false;
  }
  let used = new Array(nums.length).fill(false);
  return dfs(nums, 0, target, k, used);
}

// start是当前开始遍历的
function dfs(nums, curSum, target, k, used) {
  // 剪枝，如果还有1组没遍历，肯定能成功
  if(k === 1) {
    return true;
  }
  // 剪枝，如果当前组的和等于target，那么就遍历下一组
  if(curSum === target) {
    return dfs(nums, 0, target, k - 1, used);
  }
  for (let i = 0; i < nums.length; i++) {
    if(used[i]) {
      continue;
    }
    if(curSum + nums[i] > target) {
      continue;
    }
    used[i] = true;
    // 继续往下搜索当前组的剩下元素，如果当前组能成功，就返回true
    if(dfs(nums, curSum + nums[i], target, k, used)) {
      return true;
    }
    // 当前元素不能凑到target，回溯used
    used[i] = false;
    // 如果下一个元素和当前元素一样，那么就不用浪费时间了，跳到下一个不一样的元素
    while (i < nums.length - 1 && nums[i + 1] === nums[i]) {
      i++;
    }
  }
  return false;
}
