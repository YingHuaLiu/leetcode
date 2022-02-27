var validPath = function (n, edges, source, destination) {
  let visited = new Array(n).fill(false);
  let map = new Array(n).fill(0).map(item => []);
  for (let [a, b] of edges) {
    map[a].push(b);
    map[b].push(a);
  }

  return dfs(source, destination, visited, map);
};

function dfs(cur, destination, visited, map) {
  if(cur === destination) {
    return true;
  }
  visited[cur] = true;
  for (let i of map[cur]) {
    if(!visited[i] && dfs(i)) {
      return true;
    }
  }
  return false;
}
