// 1.迭代
var invertTree = function (root) {
    if (!root) {
        return null
    }
    let queue = [root]
    while (queue.length) {
        let cur = queue.shift();
        if (cur.left) {
            queue.push(cur.left);
        }
        if (cur.right) {
            queue.push(cur.right);
        }
        [cur.left, cur.right] = [cur.right, cur.left];
    }
    return root
};

// 2.递归
var invertTree = function (root) {
    if (!root) {
        return null
    }
    let left = invertTree2(root.left)
    let right = invertTree2(root.right)
    root.left = right
    root.right = left
    return root
};