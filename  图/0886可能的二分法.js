var possibleBipartition = function (n, dislikes) {
  const visited = new Array(n + 1).fill(false);
  const colors = new Array(n + 1).fill(false);
  let res = true;
  const graph = buildGraph(n, dislikes);

  for (let i = 1; i <= n; i++) {
    dfs(graph, i);
  }
  return res;

  function dfs(s) {
    if(!res || visited[s]) {
      return;
    }
    visited[s] = true;
    for (let item of graph[s]) {
      if(!visited[item]) {
        visited[item] = true;
        colors[item] = !colors[s];
        dfs(item);
      } else {
        if(colors[item] === colors[s]) {
          res = false;
          break;
        }
      }
    }
  }
};

function buildGraph(n, dislikes) {
  let graph = new Array(n + 1).fill(0).map(item => []);
  for (let [a, b] of dislikes) {
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

console.log(possibleBipartition(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]));
