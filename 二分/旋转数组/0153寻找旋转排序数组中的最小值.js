/**
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/xun-zhao-xuan-zhuan-pai-xu-shu-zu-zhong-5irwp
 */
function findMin(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (nums[mid] <= nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[left]
}
// 改编：寻找最大值
function findMax(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = (left + right + 1) >> 1;
        if (nums[mid] >= nums[left]) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return nums[left]
}

console.log(findMax([3, 4, 5, 1, 2]));
