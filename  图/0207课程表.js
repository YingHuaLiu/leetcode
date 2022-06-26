// 其实就是判断这个图是不是有向无环图，如果有环那么就会造成前置条件死循环，无法成立课程表
const canFinish = function (numCourses, prerequisites) {
  let visited = new Array(numCourses).fill(false);
  let onPath = new Array(numCourses).fill(false);
  let hasCycle = false;
  let graph = buildGraph(numCourses, prerequisites);

  for (let i = 0; i < numCourses; i++) {
    dfs(i);
  }
  return !hasCycle;

  function dfs(s) {
    // 注意：一定要先判断是否在路径上
    // 当前节点在保存的路径上
    if(onPath[s]) {
      hasCycle = true;
    }
    // 当前节点访问过，或者有环，没必要继续访问
    if(visited[s] || hasCycle) {
      return;
    }
    // 前序遍历位置，开始回溯
    onPath[s] = true;
    visited[s] = true;
    for (let item of graph[s]) {
      dfs(item);
    }
    // 后续遍历位置，撤销回溯
    onPath[s] = false;
  }
};

// 构建有向图
function buildGraph(numCourses, prerequisites) {
  let graph = new Array(numCourses).fill(0).map(() => []);
  for (let [to, from] of prerequisites) {
    graph[from].push(to);
  }
  return graph;
}

console.log(canFinish(1, []));
