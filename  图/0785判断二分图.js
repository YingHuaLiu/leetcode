const isBipartite = function (graph) {
  const length = graph.length;
  let visited = new Array(length).fill(false);
  // 记录图中节点的颜色，false 和 true 代表两种不同颜色
  let colors = new Array(length).fill(false);
  // 是否是二分图
  let res = true;

  for (let i = 0; i < length; i++) {
    dfs(i);
  }
  return res;

  function dfs(s) {
    // 当前已经不是二分图了，没必要继续计算
    if(!res || visited[s]) {
      return;
    }
    // 前序遍历位置，开始回溯
    visited[s] = true;
    for (let item of graph[s]) {
      // 出度的item节点没被访问过
      if(!visited[item]) {
        colors[item] = !colors[s];
        dfs(item);
      } else {
        // 如果已经被访问过，就比较item和当前s节点的颜色是否一致
        if(colors[item] === colors[s]) {
          res = false;
          return;
        }
      }
    }
  }
};
// 2.广度优先搜索
const isBipartite2 = function (graph) {
  const length = graph.length;
  let visited = new Array(length).fill(false);
  // 记录图中节点的颜色，false 和 true 代表两种不同颜色
  let colors = new Array(length).fill(false);
  // 是否是二分图
  let isBp = true;

  function bfs(graph, s) {
    let queue = [s];
    visited[s] = true;
    while (queue.length && isBp) {
      let node = queue.shift();
      // 从节点 node 向所有相邻节点扩散
      for (let v of graph[node]) {
        if(!visited[v]) {
          // 相邻节点 v 没有被访问过
          // 那么应该给节点 v 涂上和节点 node 不同的颜色
          visited[v] = true;
          colors[v] = !colors[node];
          queue.push(v);
        } else {
          // 相邻节点 v 已经被访问过
          // 根据 v 和 node 的颜色判断是否是二分图
          if(colors[v] === colors[node]) {
            isBp = false;
            break;
          }
        }
      }
    }
  }

  for (let i = 0; i < length; i++) {
    if(!visited[i]) {
      bfs(graph, i);
    }
  }
  return isBp;
};
console.log(isBipartite2([[1, 3], [0, 2], [1, 3], [0, 2]]));
