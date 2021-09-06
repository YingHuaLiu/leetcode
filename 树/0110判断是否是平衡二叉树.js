var isBalanced = function (root) {
    if (!root) {
        return true
    }

    return depth(root) !== -1
};

function depth(node) {
    if (!node) {
        return 0
    }
    let leftDepth = depth(node.left)
    if (leftDepth === -1) {
        return -1
    }
    let rightDepth = depth(node.right)
    if (rightDepth === -1) {
        return -1
    }
    if (Math.abs(leftDepth - rightDepth) > 1) {
        return -1
    }
    return Math.max(leftDepth, rightDepth) + 1
}