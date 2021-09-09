var binaryTreePaths = function (root) {
    const res = []
    helper(root, res, '')
    return res
};

function helper(root, res, cur) {
    if (root) {
        if (!root.left && !root.right) {
            res.push(cur + root.val)
        } else {
            cur += root.val + '->'
            helper(root.left, res, cur)
            helper(root.right, res, cur)
        }
    }
}