// 未写，有限状态自动机
var isNumber = function (s) {
  let left = 0, right = s.length - 1;
  while (s[left] === ' ') {
    left++;
  }
  while (s[right] === ' ') {
    right--;
  }
  let a1 = left, a2 = left, a3, a4;
  for (let i = left; i <= right; i++) {
    if(s[i] === '+' || s[i] === '-') {
      a2++;
    }
  }
};
