var searchInsert = function (nums, target) {
    let l = 0, r = nums.length; // 注意：nums.length也可能是答案
    while (l < r) {
        let mid = l + (r - l >> 1);
        if (nums[mid] >= target) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
};

console.log(searchInsert([0, 1, 2, 3, 5, 6], 8));