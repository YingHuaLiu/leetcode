// 1. 层序遍历
var connect = function (root) {
    if (!root) {
        return root;
    }
    let queue = [root];
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            // 如果当前节点不是该层最后一个，那么指定next为queue的头部节点
            if (i < length - 1) {
                node.next = queue[0];
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return root;
};
// 2. 通过next来替代queue迭代当前层
var connect = function (root) {
    if (!root) {
        return root;
    }
    // mostLeftNode为当前层最左节点
    let mostLeftNode = root;
    // 如果mostLeftNode不是最后一层
    while (mostLeftNode.left) {
        let node = mostLeftNode;
        while (node) {
            // 把当前节点的左右节点连起来
            node.left.next = node.right;
            // 把当前节点的right连接到next节点的left
            if (node.next) {
                node.right.next = node.next.left;
            }
            node = node.next;
        }
        mostLeftNode = mostLeftNode.left;
    }
    return root;
};
