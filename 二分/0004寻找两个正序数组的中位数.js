function findMedianSortedArrays(nums1, nums2) {
    let length1 = nums1.length;
    let length2 = nums2.length;
    let left = (length1 + length2 + 1) >> 1;
    let right = (length1 + length2 + 2) >> 1;
    if (left === right) {
        return getKth(nums1, 0, length1 - 1, nums2, 0, length2 - 1, left)
    } else {
        return (getKth(nums1, 0, length1 - 1, nums2, 0, length2 - 1, left) + getKth(nums1, 0, length1 - 1, nums2, 0, length2 - 1, right)) * 0.5;
    }
}

function getKth(nums1, start1, end1, nums2, start2, end2, k) {
    let length1 = end1 - start1 + 1;
    let length2 = end2 - start2 + 1;
    //让 length1 的长度小于 length2，这样就能保证如果有数组空了，一定是 length1
    if (length1 > length2) {
        return getKth(nums2, start2, end2, nums1, start1, end1, k);
    }
    if (length1 === 0) {
        return nums2[start2 + k - 1];
    }
    if (k === 1) {
        return Math.min(nums1[start1], nums2[start2]);
    }
    // 如果k/2大于length,则指向数组末尾，否则指向start+k/2
    let i = start1 + Math.min(length1, k >> 1) - 1;
    let j = start2 + Math.min(length2, k >> 1) - 1;
    if (nums1[i] > nums2[j]) {
        return getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1));
    } else {
        return getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1));
    }
}

console.log(findMedianSortedArrays([], [2]));