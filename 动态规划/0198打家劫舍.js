const rob = nums => {
    if (!nums.length) {
        return 0;
    }
    if (nums.length <= 2) {
        return Math.max(...nums);
    }
    let a = nums[0], b = Math.max(a, nums[1]);
    for (let i = 2; i < nums.length; i++) {
        let temp = Math.max(a + nums[i], b);
        a = b;
        b = temp;
    }
    return b;
}

console.log(rob([3, 2, 2]));
