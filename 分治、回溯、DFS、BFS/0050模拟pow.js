var myPow = function (x, n) {
  if(n < 0) {
    return fastPow(1 / x, -n);
  }
  return fastPow(x, n);
};

// 递归
function fastPow(x, n) {
  if(n === 0) {
    return 1;
  }
  const half = fastPow(x, Math.floor(n / 2));
  return n % 2 === 0 ? half * half : half * half * x;
}

console.log(myPow(1, -2147483648));
