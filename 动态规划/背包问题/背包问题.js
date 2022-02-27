/** 01背包问题
 *  dp[i][j]表示前i件物品装进容量为j的背包中的最大价值
 *  对第i件物品，有两种策略：
 *  1. 不放第i件物品，转化为前i-1件物品装进j容量的最大价值
 *  2. 放第i件物品，转化为前i-1件物品装进j-weight[i]容量的最大价值
 */
function bag01(weights, values, weight) {
  let length = weights.length;
  // 默认第0件或者容量为0时最大值为0
  let dp = new Array(length + 1).fill(0).map(() => new Array(weight + 1).fill(0));
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= weight; j++) {
      if(j < weights[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
      }
    }
  }
  return dp[length][weight];
}

// 优化成一维
// dp[i][j]每次依赖的是dp[i-1][j]和dp[i-1][j]左边的数据（也就是i-1行的0~j列）
// 所以可以用一维数组保存每行的值，计算下一行的值覆盖当前行就行
// 所以j要从右往左遍历，否则会覆盖左边的值
function bag01(weights, values, weight) {
  let length = weights.length;
  let dp = new Array(weight + 1).fill(0);
  for (let i = 1; i <= length; i++) {
    for (let j = weight; j >= 1; j--) {
      if(j >= weights[i - 1]) {
        dp[j] = Math.max(dp[j], dp[j - weights[i - 1]] + values[i - 1]);
      }
    }
  }
  return dp[weight];
}

console.log(bag01([3, 5, 1, 2, 2], [4, 5, 2, 1, 3], 8));

/**
 * 完全背包问题
 * dp[i][j]表示前i件物品装进容量为j的背包中的最大价值
 * 对第i件物品，有两种策略：
 * 1. 不放第i件物品，转化为前i-1件物品装进j容量的最大价值
 * 2. 放第i件物品，转化为前i件物品装进j-weight[i]容量的最大价值（这里与01背包不同）
 */
function bagAll(weights, values, weight) {
  let length = weights.length;
  // 默认第0件或者容量为0时最大值为0
  let dp = new Array(length + 1).fill(0).map(() => new Array(weight + 1).fill(0));
  for (let i = 1; i <= length; i++) {
    for (let j = weights[i - 1]; j <= weight; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weights[i - 1]] + values[i - 1]);
    }
  }
  return dp[length][weight];
}

// 优化成一维
// 与01不同，j必须从左到右正向遍历，因为dp[i][j]以来的是dp[i-1][j],dp[i][j-weights[i]]，即在节点的上方和左边
// 所以要先计算同一行左边的值，才能算出右边的值
function bagAll(weights, values, weight) {
  let length = weights.length;
  // 默认第0件或者容量为0时最大值为0
  let dp = new Array(weight + 1).fill(0);
  for (let i = 1; i <= length; i++) {
    for (let j = weights[i - 1]; j <= weight; j++) {
      dp[j] = Math.max(dp[j], dp[j - weights[i - 1]] + values[i - 1]);
    }
  }
  return dp[weight];
}
