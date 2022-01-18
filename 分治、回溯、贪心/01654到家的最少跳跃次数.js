// https://leetcode-cn.com/problems/minimum-jumps-to-reach-home/solution/python3-bfs-he-dfsjie-fa-by-captaintec/
// 1.dfs
function minimumJumps(forbidden, a, b, x) {
  // forbidden加入右移时遍历到的数据
  // 理解：前进去过的地方，后退就没必要再去了，因为前进去过的地方，既可以前进又可以后退。
  // 但是后退去过的地方因为只能前进，所以前进还得再去搜索一下，看后退符不符合条件
  forbidden = new Set(forbidden);
  let res = -1;

  // dfs思路：一直往右移动，直到6000;如果碰到forbidden，就返回；如果num超过6000就返回；
  function dfs(num, count, back) {
    // 6000是往右探索的最大值，x最大为2000
    if(res > 0 || num < 0 || num > 6000) {
      return;
    }
    // 一次遍历到 x时的次数即为结果，暂存结果，不再递归
    if(num === x) {
      res = count;
      return;
    }
    if(!forbidden.has(num + a)) {
      // 防止无限递归，比如 a = b 时，不加限制，就会出现无限递归
      forbidden.add(num + a);
      dfs(num + a, count + 1, 0);
    }
    // 若back为1说明上次就是往后跳的
    if(back !== 1 && !forbidden.has(num - b)) {
      dfs(num - b, count + 1, 1);
    }
  }

  dfs(0, 0, 0);
  return res;
}

// 2.bfs：类似于一个树形递归，每个节点都考虑前进和后退两种情形
function minimumJumps(forbidden, a, b, x) {
  forbidden = new Set(forbidden);
  let queue = [[0, 0, 0]];
  while (queue.length) {
    let [num, count, back] = queue.shift();
    if(num === x) {
      return count;
    }
    if((num + a < 6000) && !forbidden.has(num + a)) {
      forbidden.add(num + a);
      queue.push([num + a, count + 1, 0]);
    }
    if(back !== 1 && (num - b > 0) && !forbidden.has(num - b)) {
      queue.push([num - b, count + 1, 1]);
    }
  }
  return -1;
}

console.log(minimumJumps([18, 13, 3, 9, 8, 14], 3, 8, 6));
