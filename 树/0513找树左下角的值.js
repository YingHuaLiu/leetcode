// 1.bfs
var findBottomLeftValue = function (root) {
    let queue = [root], res;
    while (queue.length) {
        // 每次遍历当前层之前保存最左值
        res = queue[0].val;
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        res = queue[queue.length - 1]
    }
    return res;
};

// 2.dfs
var findBottomLeftValue = function (root) {
    let maxDepth = -1, res;

    function dfs(root, depth) {
        if (!root) {
            return;
        }
        if (depth > maxDepth) {
            maxDepth = depth;
            res = root;
        }
        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }

    dfs(root, 0);
    return res.val;
}
