// dfs+map
const distanceK = function (root, target, k) {
    let map = new Map(), res = [];

    // 记录每个节点的父节点
    const findParents = function (root) {
        if (root.left) {
            map.set(root.left, root);
            findParents(root.left);
        }
        if (root.right) {
            map.set(root.right, root)
            findParents(root.right)
        }
    }

    const dfs = function (root, from, depth) {
        if (!root) {
            return;
        }
        if (depth === k) {
            res.push(root.val);
            return;
        }
        if (root.left !== from) {
            dfs(root.left, root, depth + 1);
        }
        if (root.right !== from) {
            dfs(root.right, root, depth + 1);
        }
        if (map.get(root) !== from) {
            dfs(map.get(root), root, depth + 1);
        }
    }

    findParents(root);
    dfs(root, null, 0);

    return res;
};

// bfs+map,
const distanceK = function (root, target, k) {
    if (k === 0) {
        return [target.val]
    }

    let map = new Map();

    // 记录每个节点的父节点
    const findParents = function (root) {
        if (root.left) {
            map.set(root.left, root);
            findParents(root.left);
        }
        if (root.right) {
            map.set(root.right, root)
            findParents(root.right)
        }
    }
    findParents(root);

    let queue = [target], res = [], depth = 0, visited = [target];
    while (queue.length && depth < k) {
        depth++;
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift(), temp = [];
            if (map.has(node)) {
                temp.push(map.get(node))
            }
            node.left && temp.push(node.left)
            node.right && temp.push(node.right)
            for (let tempNode of temp) {
                if (visited.includes(tempNode)) {
                    continue;
                }
                if (depth === k) {
                    res.push(tempNode.val)
                }
                queue.push(tempNode)
                visited.push(tempNode)
            }
        }
    }
    return res;
};


