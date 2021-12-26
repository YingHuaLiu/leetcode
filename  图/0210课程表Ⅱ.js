const findOrder = function (numCourses, prerequisites) {
    let visited = new Array(numCourses).fill(false);
    let onPath = new Array(numCourses).fill(false);
    let hasCycle = false;
    let graph = buildGraph(numCourses, prerequisites);
    let res = [];

    function traverse(graph, s) {
        // 当前节点在保存的路径上
        if (onPath[s]) {
            hasCycle = true;
        }
        // 当前节点访问过，或者有环，没必要继续访问
        if (visited[s] || hasCycle) {
            return;
        }
        // 前序遍历位置，开始回溯
        onPath[s] = true;
        visited[s] = true;
        for (let item of graph[s]) {
            traverse(graph, item);
        }
        // 后续遍历位置，撤销回溯
        onPath[s] = false;
        res.unshift(s);
    }

    for (let i = 0; i < numCourses; i++) {
        traverse(graph, i);
    }
    if (hasCycle) {
        return [];
    }
    return res;
};

// 构建有向图
function buildGraph(numCourses, prerequisites) {
    let graph = new Array(numCourses).fill(0).map(item => []);
    for (let entries of prerequisites) {
        const [to, from] = entries;
        graph[from].push(to);
    }
    return graph;
}

console.log(findOrder(3, [[1, 0], [2, 1], [1, 2]]));
