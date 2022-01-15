/**
 * dp[i]表示前i个数能构成几种组合
 * 转移方程：a表示s[i] b表示s[i-1]*10+s[i]
 * 1. dp[i]=dp[i−1] a!==0 先判断当前数是不是1~9
 * 2. dp[i]+=dp[i−2] i>1 10⩽b⩽26 在判断前一个数和当前数能不能凑成十位数，能就加上这种情况
 */
function numDecodings(s) {
  let dp = new Array(s.length + 1).fill(0);
  // base case:0个数只有1种组合，那就是空
  dp[0] = 1;
  for (let i = 1; i <= s.length; i++) {
    // 当前第i个数在1~9
    if(s[i - 1] !== '0') {
      dp[i] = dp[i - 1];
    }
    // i>1时，前一个数和当前数可以凑成一个十位数
    if(i > 1 && s[i - 2] !== '0' && (s[i - 2] + s[i - 1] - 0) <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[s.length];
}

// 优化一维
function numDecodings(s) {
  // base case:0个数只有1种组合，那就是空
  let a = 0, b = 1, c = 0;
  for (let i = 1; i <= s.length; i++) {
    c = 0;
    // 当前第i个数在1~9
    if(s[i - 1] !== '0') {
      c = b;
    }
    // i>1时，前一个数和当前数可以凑成一个十位数
    if(i > 1 && s[i - 2] !== '0' && (s[i - 2] + s[i - 1] - 0) <= 26) {
      c += a;
    }
    a = b;
    b = c;
  }
  return c;
}
