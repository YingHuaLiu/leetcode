var minimumTotal = function (triangle) {
  let dp = new Array(triangle.length).fill(0).map(() => []);
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < triangle.length; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
  }
  let min = Infinity;
  for (let i = 0; i < triangle.length; i++) {
    min = Math.min(min, dp[triangle.length - 1][i]);
  }
  return min;
};
// 优化一维
var minimumTotal = function (triangle) {
  let dp = [triangle[0][0]];
  for (let i = 1; i < triangle.length; i++) {
    dp[i] = dp[i - 1] + triangle[i][i];
    for (let j = i - 1; j > 0; j--) {
      dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j];
    }
    dp[0] = dp[0] + triangle[i][0];
  }
  let min = Infinity;
  for (let i = 0; i < triangle.length; i++) {
    min = Math.min(min, dp[i]);
  }
  return min;
};
// 进阶：如果要输出和最小的那个路径，怎么做？
var minimumTotal = function (triangle) {
  let dp = new Array(triangle.length).fill(0).map(() => []);
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < triangle.length; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
  }
  let min = Infinity;
  for (let i = 0; i < triangle.length; i++) {
    min = Math.min(min, dp[triangle.length - 1][i]);
  }

  // 核心：从下往上查找
  let res = [];
  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle.length; j++) {
      if(min === dp[i][j]) {
        min = min - triangle[i][j];
        res.unshift(triangle[i][j]);
        break;
      }
    }
  }
  return res;
};
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
