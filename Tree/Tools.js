function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function swap(nums, index1, index2) {
  let temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
}

module.exports = { TreeNode, swap };
