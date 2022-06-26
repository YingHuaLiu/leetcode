var subsets = function (nums) {
  let res = [[]];
  backTrack(nums, [], res, 0);
  return res;
};
const backTrack = (nums, path, res, left) => {
  if(path.length<=nums.length){
    res.push(path.slice());
  }
  for (let i = left; i < nums.length; i++) {
    path.push(nums[i]);
    backTrack(nums, path, res, i + 1);
    path.pop();
  }
};
console.log(subsets([0]));
