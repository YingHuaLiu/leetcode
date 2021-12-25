var subsetsWithDup = function (nums) {
    // 排序是剪枝的前提
    nums.sort();
    let res = [], temp = [];
    backTrack(nums, temp, res, 0)
    return res;
};
const backTrack = (nums, temp, res, left) => {
    if (temp.length <= nums.length) {
        res.push(temp.slice());
    }
    for (let i = left; i < nums.length; i++) {
        // 剪枝
        if (i > left && nums[i] === nums[i - 1]) {
            continue;
        }
        temp.push(nums[i]);
        backTrack(nums, temp, res, i + 1);
        temp.pop();
    }
}
console.log(subsetsWithDup([1, 2, 2]));
