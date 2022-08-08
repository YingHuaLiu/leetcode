// 只有+、-、（、）
function calculate(s) {
  // 双栈，一个存数字，一个存符号
  const nums = [], ops = [];
  // 预处理：将所有空格去掉
  s = s.replaceAll(' ', '');
  const length = s.length;
  for (let i = 0; i < length; i++) {
    let char = s[i];
    // 如果是左括号直接添加进ops
    if(char === '(') {
      ops.push(char);
    } else if(char === ')') {
      // 如果是右括号，则计算到出现左括号
      while (ops.length) {
        const op = ops[ops.length - 1];
        // 如果出现了左括号，那么两括号之间的计算已经结束，将左括号弹出，退出循环
        if(op === '(') {
          ops.pop();
          break;
        } else {
          // 如果不是左括号，那么就进行计算
          calc(nums, ops);
        }
      }
    } else if(isNum(char)) {
      // 如果是数字，那么要考虑多位数的情况
      let num = 0, index = i;
      while (index < length && isNum(s[index])) {
        num = num * 10 + (s[index++] - 0);
      }
      nums.push(num);
      i = index-1;
    } else {
      // 防止第一个字符是加号或者减号，在nums中先加入0，预处理成0+或者0-，方便后续计算
      if(i === 0 && (char === '+' || char === '-')) {
        nums.push(0);
      }
      // 将（+、（-转成（0+和（0-
      if(i > 0 && s[i - 1] === '(') {
        nums.push(0);
      }
      while (ops.length && ops[ops.length - 1] !== '(') {
        calc(nums, ops);
      }
      ops.push(char);
    }
  }
  while (ops.length) {
    calc(nums, ops);
  }
  return nums.pop();
}

// 工具函数：计算前面两个数和符号
function calc(nums, ops) {
  if(nums.length < 2 || !ops.length) {
    return;
  }
  let a = nums.pop(), b = nums.pop();
  let op = ops.pop();
  nums.push(op === '+' ? b + a : b - a);
}

// 工具函数：判断当前字符是否是数字
function isNum(char) {
  return /^\d$/.test(char);
}

console.log(calculate('(1+10-5)-1'));
