// https://www.cnblogs.com/xym4869/p/13819593.html
// 有父节点
function getNext(node) {
    if (!node) {
        return node;
    }
    // 如果node有右子树，那么后继节点是右子树的最左节点
    if (node.right) {
        node = node.right;
        while (node.left) {
            node = node.left
        }
        return node;
    }
    // 如果没有右子树，node可能是父节点的左子树或者右子树
    // 如果node是父节点的右子树，那么后继节点是祖先节点中不是右子树的那一个
    while (node.parent && node.parent.right === node) {
        node = node.parent;
    }
    // 如果node是父节点的左子树，那么后继节点是父节点
    return node.parent;
}

class TreeNode {
    constructor(value, left, right, parent) {
        this.value = value || null;
        this.left = left || null;
        this.right = right || null;
        this.parent = parent || null; // 父节点
    }
}
