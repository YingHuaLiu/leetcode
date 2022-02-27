// 当 Y 大于 X 时，如果它是奇数，我们执行加法操作，否则执行除法操作。之后，我们需要执行 X - Y 次加法操作以得到 X
function calculate(x, y) {
  let res = 0;
  while (y > x) {
    if(y % 2 === 0) {
      y = y / 2;
    } else {
      y = y + 1;
    }
    res++;
  }
  return res + x - y;
}

console.log(calculate(3, 7));
