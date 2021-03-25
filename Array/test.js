var merge = function (nums1, m, nums2, n) {
    let p = 0, q = 0, cur = 0;
    let nums = new Array(m + n).fill(0);
    while (p < m - n && q < n) {
        nums[cur++] = nums1[p] < nums2[q] ? nums1[p++] : nums2[q++];
    }
    while (q < n) {
        nums[cur++] = nums2[q++];
    }
    while (p < m - n) {
        nums[cur++] = nums1[p++];
    }
    for (let i = 0; i < m; i++) {
        nums1[i] = nums[i];
    }
};
function merge2(nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1, p = m + n - 1;
    while (p2 >= 0) {
        nums1[p--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
    }
}
function merge3(nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    nums1.sort((a, b) => a - b);
}
let nums1 = [0];
let nums2 = [8];
// merge(nums1, 6, nums2, 3);
merge2(nums1, 0, nums2, 1);
console.log(nums1)