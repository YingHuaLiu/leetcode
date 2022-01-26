var translateNum = function (num) {
  num = '' + num;
  let dp = new Array(num.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= num.length; i++) {
    dp[i] = dp[i - 1];
    if(num[i - 2] !== '0' && (parseInt(num[i - 2]) * 10 + parseInt(num[i - 1])) <= 25) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[num.length];
};

// 优化成滚动数组
var translateNum = function (num) {
  num = '' + num;
  let a = 1, b = 1, c;
  for (let i = 1; i < num.length; i++) {
    c = b;
    if(num[i - 1] !== '0' && (parseInt(num[i - 1]) * 10 + parseInt(num[i])) <= 25) {
      c += a;
    }

    a = b;
    b = c;
  }

  return b;
};
