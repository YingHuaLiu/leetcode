var merge = function (nums1, m, nums2, n) {
  let cur1 = m - 1, cur2 = n - 1, tail = m + n - 1;
  while (cur2 >= 0) {
    if(cur1 < 0 || nums1[cur1] < nums2[cur2]) {
      nums1[tail--] = nums2[cur2--];
    } else {
      nums1[tail--] = nums1[cur1--];
    }
  }
};

// 拓展：如果合并k个有序数组呢？
// 归并
function mergeK(nums) {
  return helper(nums, 0, nums.length - 1);
}

function helper(nums, start, end) {
  if(start === end) {
    return nums[start];
  }
  let mid = (start + end) >> 1;
  return merge(helper(nums, start, mid), helper(nums, mid + 1, end));
}

var merge = function (nums1, nums2) {
  let l = 0, r = 0;
  let res = [];
  while (l < nums1.length || r < nums2.length) {
    if(r >= nums2.length || nums1[l] < nums2[r]) {
      res.push(nums1[l++]);
    } else {
      res.push(nums2[r++]);
    }
  }
  return res;
};
console.log(mergeK([[1, 2, 3], [2, 3, 4],[-3,0,2,3,4,8]]));
