// 1.双指针
var backspaceCompare = function (s, t) {
  let i = s.length - 1, j = t.length - 1;
  let skipi = 0, skipj = 0;
  // 大循环
  while (i >= 0 || j >= 0) {
    // s循环
    while (i >= 0) {
      if(s[i] === '#') {
        skipi++;
        i--;
      } else if(skipi > 0) {
        i--;
        skipi--;
      } else { // 循环直到不被退格的字符
        break;
      }
    }
    // t循环
    while (j >= 0) {
      if(t[j] === '#') {
        skipj++;
        j--;
      } else if(skipj > 0) {
        j--;
        skipj--;
      } else { // 循环直到不被退格的字符
        break;
      }
    }
    if(s[i] !== t[j]) {
      return false;
    }
    i--;
    j--;
  }
  return true;
};

// 2.stack
var backspaceCompare = function (s, t) {
  let stack1 = [], stack2 = [];
  for (let i of s) {
    if(i === '#') {
      stack1.pop();
    } else {
      stack1.push(i);
    }
  }
  for (let i of t) {
    if(i === '#') {
      stack2.pop();
    } else {
      stack2.push(i);
    }
  }
  return stack1.join('') === stack2.join('');
};
