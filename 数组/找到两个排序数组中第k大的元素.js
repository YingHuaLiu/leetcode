function FindKthInTwoSortedArray(nums1, nums2, k) {
  if(k > nums1.length + nums2.length) {
    return -1;
  }
  return helper(nums1, nums1.length, nums2, nums2.length, k);
}

function helper(nums1, length1, nums2, length2, k) {
  // 保证length1<=length2
  if(length1 > length2) {
    return helper(nums2, length2, nums1, length1, k);
  }
  if(length1 === 0) {
    return nums2[k - 1];
  }
  if(k === 1) {
    return Math.min(nums1[0], nums2[0]);
  }
  /*不一定每个数组都有k/2个元素*/
  let k1 = Math.min(length1, k >> 1);
  let k2 = k - k1;

  if(nums1[k1 - 1] === nums2[k2 - 1]) {
    return nums1[k1 - 1];
  } else if(nums1[k1 - 1] > nums2[k2 - 1]) {
    /**
     说明array2的k2-1前部分一定在第k大元素之前，因此：
     1）将k2-1这部分全跳过:更新数组首位地址索引，同时更新数组长度；
     2）将这k2元素纳入已找到的第k大元素范围内，更新k值：k-k2
     **/
    return helper(nums1, length1, nums2.splice(k2), length2 - k2, k - k2);
  } else {
    return helper(nums1.splice(k1), length1 - k1, nums2, length2, k - k1);
  }
}

console.log(FindKthInTwoSortedArray([1, 2, 3, 4], [2, 3, 4, 5], 9));
