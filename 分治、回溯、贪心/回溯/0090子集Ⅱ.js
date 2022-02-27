var subsetsWithDup = function (nums) {
  // 排序是剪枝的前提
  nums.sort();
  let res = [];
  backTrack(nums, [], res, 0);
  return res;
};
const backTrack = (nums, path, res, start) => {
  if(path.length <= nums.length) {
    res.push(path.slice());
  }
  for (let i = start; i < nums.length; i++) {
    // 剪枝
    if(i > start && nums[i] === nums[i - 1]) {
      continue;
    }
    path.push(nums[i]);
    backTrack(nums, path, res, i + 1);
    path.pop();
  }
};
console.log(subsetsWithDup([1, 2, 2, 2,3]));
