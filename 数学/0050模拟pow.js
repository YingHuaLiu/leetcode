// 快速幂
var myPow = function (x, n) {
  if(x === 1 || x === 0) {
    return x;
  }
  let res = 1;

  if(n < 0) {
    n = -n;
    x = 1 / x;
  }

  while (n) {
    if(n & 1 === 1) {
      res *= x;
    }
    // 核心：无符号右移
    n = n >>> 1;
    x *= x;
  }

  return res;
};

console.log(myPow(2, -4));
