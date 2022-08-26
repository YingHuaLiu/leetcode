const findOrder = function (numCourses, prerequisites) {
  let visited = new Array(numCourses).fill(false);
  let onPath = new Array(numCourses).fill(false);
  let hasCycle = false;
  let graph = buildGraph(numCourses, prerequisites);
  let res = [];

  for (let i = 0; i < numCourses; i++) {
    traverse(i);
  }
  if(hasCycle) {
    return [];
  }
  return res;

  function traverse(s) {
    if(onPath[s]) {
      hasCycle = true;
    }
    if(visited[s] || hasCycle) {
      return;
    }
    onPath[s] = true;
    visited[s] = true;
    for (let item of graph[s]) {
      traverse(item);
    }
    // 遍历后位置，撤销回溯
    onPath[s] = false;
    res.unshift(s);
  }
};

function buildGraph(numCourses, prerequisites) {
  let graph = new Array(numCourses).fill(0).map(() => []);
  for (let [to, from] of prerequisites) {
    graph[from].push(to);
  }
  return graph;
}

console.log(findOrder(3, [[1, 0], [2, 1], [1, 2]]));
