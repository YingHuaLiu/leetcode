function reversePairs(nums) {
  let res = 0;

  function mergeSort(left, right) {
    if(left >= right) {
      return;
    }
    let mid = left + (right - left >> 1);
    mergeSort(left, mid);
    mergeSort(mid + 1, right);
    merge(left, mid, right);
  }

  function merge(left, mid, right) {
    let temp = [], index = 0;
    let l = left, r = mid + 1;
    while (l <= mid && r <= right) {
      if(nums[l] <= nums[r]) {
        temp[index++] = nums[l++];
      } else {
        // 其他地方都是自顶向下归并排序的模版，只要加上这一句就行了
        // 如果nums[l]>nums[r]，因为此时left～mid是排序好的，所以l右边的数肯定都比nums[r]大
        res += mid - l + 1;
        temp[index++] = nums[r++];
      }
    }
    while (l <= mid) {
      temp[index++] = nums[l++];
    }
    while (r <= right) {
      temp[index++] = nums[r++];
    }
    for (let i = 0; i < temp.length; i++) {
      nums[i + left] = temp[i];
    }
  }

  mergeSort(0, nums.length - 1);
  return res;
}

console.log(reversePairs([7, 5, 6, 4]));
