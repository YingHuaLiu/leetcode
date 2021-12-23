// https://www.jianshu.com/p/0abb87cb11a2
// 无父节点
function getNext(root, target) {
    if (!root) {
        return root;
    }
    // 记录root节点的中序后继节点
    let maybeNext;
    // 不断查找，直到 root 结点指向目标结点 target
    while (root && root !== target) {
        // target在root的左子树中
        if (root.val > target.val) {
            maybeNext = root;
            root = root.left;
        } else {
            root = root.right
        }
    }
    // 此时root===target
    // 如果target没有右子树
    if (!root.right) {
        return maybeNext;
    }
    // 如果target有右子树，则后继节点是右子树的最左值
    root = root.right;
    while (root.left) {
        root = root.left;
    }
    return root;
}
