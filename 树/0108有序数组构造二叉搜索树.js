const {TreeNode} = require('./Tools')

var sortedArrayToBST = function (nums) {
    let root = dfs(nums, 0, nums.length - 1);
};

function dfs(nums, left, right) {
    if (left > right) {
        return null;
    }
    let mid = (left + right) >> 1;
    let root = new TreeNode(nums[mid]);
    root.left = dfs(nums, left, mid - 1);
    root.right = dfs(nums, mid + 1, right);
    return root;
}

// 微软进阶：不构造平衡二叉树就输出层次遍历
function sortedArrayToBST2(nums) {
    let res = [];

    // 用depth记录当前层次
    function helper2(nums, left, right, depth) {
        if (left > right) {
            return;
        }
        let mid = (left + right) >> 1;
        if (res[depth]) {
            res[depth].push(nums[mid]);
        } else {
            res[depth] = [nums[mid]];
        }
        helper2(nums, left, mid - 1, depth + 1);
        helper2(nums, mid + 1, right, depth + 1);
    }

    helper2(nums, 0, nums.length - 1, 0);
    return res.flat();
}

console.log(sortedArrayToBST2([1, 2, 3, 4, 5, 6]));
