const permute1 = (nums) => {
  const length = nums.length;
  // 使用一个动态数组保存所有可能的全排列
  if(length === 0) {
    return [];
  }
  let res = [], path = [];
  let used = new Array(length).fill(false); // 保存记录

  dfs(nums, length, 0, path, used, res);
  return res;
};
const dfs = (nums, length, depth, path, used, res) => {
  if(depth === length) {
    res.push(JSON.parse(JSON.stringify(path)));
    return;
  }

  for (let i = 0; i < length; i++) {
    if(!used[i]) {
      path.push(nums[i]);
      used[i] = true;

      console.log('  递归之前 => ' + path);
      dfs(nums, length, depth + 1, path, used, res);

      used[i] = false;
      path.pop();
      console.log('递归之后 => ' + path);
    }
  }
};

const permute2 = (nums) => {
  let res = [];
  backTrack(nums, 0, res);
  return res;
};
const backTrack = (nums, first, res) => {
  if(first === nums.length) {
    res.push([...nums]); // 一定要深拷贝
  }
  for (let i = first; i < nums.length; i++) {
    [nums[first], nums[i]] = [nums[i], nums[first]]; //做决策
    backTrack(nums, first + 1, res);
    [nums[first], nums[i]] = [nums[i], nums[first]]; //撤销决策
  }
};
console.log(permute2([1, 2, 3, 4]));
