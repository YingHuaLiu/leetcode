var myAtoi = function (s) {
  // 去除前后空格
  s = s.trim();
  if(!s.length) {
    return 0;
  }
  // 判断正负号
  let signal = 1, index = 0, res = 0, max = 2 ** 31 - 1, min = -(2 ** 31);
  if(s[0] === '-') {
    signal = -1;
    index++;
  } else if(s[0] === '+') {
    index++;
  }
  while (index < s.length) {
    // 判断当前是否是数字
    if(s[index] < '0' || s[index] > '9') {
      break;
    }
    // 加上当前数字后的大小
    let temp = res * 10 + signal * (s[index] - 0);
    // 如果越界，就返回边界值
    if(temp > max) {
      return max;
    }
    if(temp < min) {
      return min;
    }
    // 说明此数未越界
    res = temp;
    index++;
  }
  return res;
};
console.log(myAtoi(' 123 '));
