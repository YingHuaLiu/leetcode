// https://leetcode-cn.com/problems/next-permutation/solution/xia-yi-ge-pai-lie-suan-fa-xiang-jie-si-lu-tui-dao-/
function nextPermutation(nums) {
  // 从后往前找不是降序的数，m是12354中的3，
  let m = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if(nums[i] < nums[i + 1]) {
      m = i;
      break;
    }
  }
  // 如果m===-1,nums已经是最大值了，例如321，那么直接将它逆序变成升序
  if(m === -1) {
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    return;
  }
  // 找到最后降序序列中比nums[m]大的最小数，将它俩对换，例如12354就是3和4兑换
  for (let i = nums.length - 1; i > m; i--) {
    if(nums[i] > nums[m]) {
      [nums[m], nums[i]] = [nums[i], nums[m]];
      break;
    }
  }

  // 将最后的降序序列变成升序
  for (let i = m + 1, j = nums.length - 1; i < j; i++, j--) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
}

let arr = [1, 3, 2];
nextPermutation(arr);
console.log(arr);
