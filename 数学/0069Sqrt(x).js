// 二分
function mySqrt(x) {
  let l = 0, r = x, res = 0;
  while (l < r) {
    let m = l + Math.floor((r - l + 1) / 2);
    if(m * m <= x) {
      res = m;
      l = m;
    } else {
      r = m - 1;
    }
  }
  return res;
}

console.log(mySqrt(10));

// 牛顿迭代法
// function mySqrt(x) {
//   if(x === 0) {
//     return 0;
//   }
//   let x0 = x;
//   while (true) {
//     let x1 = 0.5 * (x0 + x / x0);
//     // 控制精度
//     if(Math.abs(x0 - x1) < 1e-7) {
//       return x1;
//     }
//     x0 = x1;
//   }
// }

console.log(mySqrt(8));
