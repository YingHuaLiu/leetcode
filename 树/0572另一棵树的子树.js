const isSubtree = function (root, subRoot) {
    // subRoot是null
    if (!subRoot) {
        return true;
    }
    // root是null
    if (!root) {
        return false;
    }
    return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree = function (root, subRoot) {
    if (root == null && subRoot == null) {
        return true;
    }
    if (root == null || subRoot == null) {
        return false;
    }
    if (root.val !== subRoot.val) {
        return false;
    }
    return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
};
