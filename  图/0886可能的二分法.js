var possibleBipartition = function (n, dislikes) {
    const visited = new Array(n + 1).fill(false);
    const colors = new Array(n + 1).fill(false);
    let isOk = true;
    const graph = buildGraph(n, dislikes);

    function dfs(graph, s) {
        if (!isOk) {
            return;
        }
        visited[s] = true;
        for (let item of graph[s]) {
            if (!visited[item]) {
                visited[item] = true;
                colors[item] = !colors[s];
                dfs(graph, item);
            } else {
                if (colors[item] === colors[s]) {
                    isOk = false;
                    break;
                }
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            dfs(graph, i);
        }
    }
    return isOk;
};

function buildGraph(n, dislikes) {
    let graph = new Array(n + 1).fill(0).map(item => []);
    for (let [a, b] of dislikes) {
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

console.log(possibleBipartition(5, [[1,2],[2,3],[3,4],[4,5],[1,5]]));
