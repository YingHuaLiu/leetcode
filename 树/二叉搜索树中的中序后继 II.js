// https://leetcode-cn.com/problems/successor-lcci/

function getNext(root) {
    if (!root) {
        return root;
    }
    if (root.right) {
        root=root.right;
        while(root.left){
            root=root.left
        }
        return root;
    }
    while (root.next && root.next.right===root) {
        root=root.next;
    }
    return root.next;
}

class TreeNode {
    constructor(value, left, right, next) {
        this.value = value || null;
        this.left = left || null;
        this.right = right || null;
        this.next = next || null; // 父节点
    }
}
