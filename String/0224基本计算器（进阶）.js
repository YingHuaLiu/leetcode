// 有+、-、*、/、（、）

// 优先级字典表
const map = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
};

function calculate(s) {
  const nums = [], ops = [];
  s = s.replaceAll(' ', '');
  const length = s.length;
  for (let i = 0; i < length; i++) {
    let char = s[i];
    if(char === '(') {
      ops.push(char);
    } else if(char === ')') {
      while (ops.length) {
        const op = ops[ops.length - 1];
        if(op === '(') {
          ops.pop();
          break;
        } else {
          calc(nums, ops);
        }
      }
    } else if(isNum(char)) {
      let num = 0, index = i;
      while (index < length && isNum(s[index])) {
        num = num * 10 + (s[index++] - 0);
      }
      nums.push(num);
      i = index - 1;
    } else {
      if(i === 0 && (char === '+' || char === '-')) {
        nums.push(0);
      }
      if(i > 0 && s[i - 1] === '(') {
        nums.push(0);
      }
      while (ops.length && ops[ops.length - 1] !== '(') {
        const preOp = ops[ops.length - 1];
        // 如果上一个运算符比现在的优先级高，则先计算之前的
        if(map[preOp] >= map[char]) {
          calc(nums, ops);
        } else {
          break;
        }
      }
      ops.push(char);
    }
  }
  while (ops.length) {
    calc(nums, ops);
  }
  return nums.pop();
}

function calc(nums, ops) {
  if(!nums.length || nums.length < 2 || !ops.length) {
    return;
  }
  let a = nums.pop(), b = nums.pop(), op = ops.pop();
  // 根据符号来计算
  let res = 0;
  if(op === '+') {
    res = a + b;
  } else if(op === '-') {
    res = b - a;
  } else if(op === '*') {
    res = a * b;
  } else if(op === '/') {
    res = b / a;
  }
  nums.push(res);
}

function isNum(char) {
  return /^\d$/.test(char);
}

console.log(calculate('(1+1)*2+1-10*2'));
