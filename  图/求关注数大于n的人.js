/*
 给一个关注列表，{{0,1},{0,2},{1,2}}代表0关注1，0关注2，1关注2，关注具有传递性，求关注数大于N的人。
 图中存在环
 */
function fn(nums, n) {
  let graph = buildGraph(nums);
  let onPath = new Array(graph.length).fill(false);
  let visited;
  let res = [];
  for (let i = 0; i < graph.length; i++) {
    visited = new Array(graph.length).fill(false);
    let num = dfs(i) - 1;
    if(num >= n) {
      res.push([i, num]);
    }
  }
  return res;

  function dfs(i) {
    if(onPath[i] || visited[i]) {
      return 0;
    }
    onPath[i] = true;
    visited[i] = true;
    let sum = 1;
    for (let item of graph[i]) {
      sum += dfs(item);
    }
    onPath[i] = false;
    return sum;
  }
}

function buildGraph(nums) {
  let graph = [];
  for (let [from, to] of nums) {
    if(!graph[from]) {
      graph[from] = [];
    }
    if(!graph[to]) {
      graph[to] = [];
    }
    graph[from].push(to);
  }
  return graph;
}

console.log(fn([
  [0, 1], [0, 2], [0, 4], [1, 2], [2, 0], [2, 3]
], 2));
console.log(fn([
  [0, 1], [0, 2], [0, 4], [2, 0], [2, 3], [4, 5]
], 2));
