// 牛顿迭代法
function mySqrt(x) {
  if(x === 0) {
    return 0;
  }
  let x0 = x;
  while (true) {
    let x1 = 0.5 * (x0 + x / x0);
    // 控制精度
    if(Math.abs(x0 - x1) < 1e-7) {
      return x1;
    }
    x0 = x1;
  }
}

console.log(mySqrt(8));
