var merge = function (nums1, m, nums2, n) {
  let cur1 = m - 1, cur2 = n - 1, tail = m + n - 1;
  while (cur2 >= 0) {
    if(cur1 < 0) {
      nums1[tail--] = nums2[cur2--];
    } else if(nums1[cur1] < nums2[cur2]) {
      nums1[tail--] = nums2[cur2--];
    } else {
      nums1[tail--] = nums1[cur1--];
    }
  }
};
