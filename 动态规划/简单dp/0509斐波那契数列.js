// 暴力法
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

// 滑动数组
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  let a = 0, b = 0, result = 1;
  for (let i = 2; i <= n; i++) {
    a = b;
    b = result;
    result = a + b;
  }
  return result;
};
