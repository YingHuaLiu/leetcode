const rob = nums => {
    if (!nums.length) {
        return 0;
    }
    if (nums.length <= 2) {
        return Math.max(...nums);
    }
    // 分成两种情况：不偷最后一家、不偷第一家
    return Math.max(help(nums, 0, nums.length - 2), help(nums, 1, nums.length - 1))
}
const help = (nums, l, r) => {
    let a = nums[l], b = Math.max(a, nums[l + 1]);
    for (let i = l + 2; i < r; i++) {
        let temp = Math.max(a + nums[i], b);
        a = b;
        b = temp;
    }
    return b;
}
console.log(rob([2, 3, 2]));
