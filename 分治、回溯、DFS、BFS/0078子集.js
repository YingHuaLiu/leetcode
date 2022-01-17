var subsets = function (nums) {
    let res = [], temp = [];
    backTrack(nums, temp, res, 0)
    return res;
};
const backTrack = (nums, temp, res, left) => {
    if (temp.length <= nums.length) {
        res.push(temp.slice());
    }
    for (let i = left; i < nums.length; i++) {
        temp.push(nums[i]);
        backTrack(nums, temp, res, i + 1);
        temp.pop();
    }
}
console.log(subsets([0]));
