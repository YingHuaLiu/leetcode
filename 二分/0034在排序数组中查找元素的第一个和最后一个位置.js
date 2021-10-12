/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (!nums.length) {
        return [-1, -1];
    }
    let firstIndex = findFirst(nums, target);
    if (nums[firstIndex] !== target) {
        return [-1, -1];
    }
    let lastIndex = findLast(nums, target, firstIndex);
    return [firstIndex, lastIndex];
};

function findFirst(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = left + (right - left >> 1);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function findLast(nums, target, left) {
    let right = nums.length - 1;
    while (left < right) {
        let mid = left + (right - left + 1 >> 1);
        if (nums[mid] <= target) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

console.log(searchRange([0, 1, 2, 3, 5, 6, 6, 7, 7, 7, 8], 4));