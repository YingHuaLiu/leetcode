var openLock = function (deadends, target) {
  // 如果目标值是初始值，直接返回
  if(target === '0000') {
    return 0;
  }
  const dead = new Set(deadends);
  // 如果禁区含有初始值，那么直接返回-1
  if(dead.has('0000')) {
    return -1;
  }
  const queue = ['0000'];
  const visited = new Set(['0000']);

  let step = 0;
  while (queue.length) {
    ++step;
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let status = queue.shift();
      for (let nextStatus of getNextArray(status)) {
        if(visited.has(nextStatus) || dead.has(nextStatus)) {
          continue;
        }
        if(nextStatus === target) {
          return step;
        }
        queue.push(nextStatus);
        visited.add(nextStatus);
      }
    }
  }

  return -1;
};

// 获取当前值的下一个值的集合
function getNextArray(str) {
  let res = [], num = Array.from(str);
  for (let i = 0; i < 4; i++) {
    let temp = num[i];
    num[i] = next(temp);
    res.push(num.join(''));
    num[i] = pre(temp);
    res.push(num.join(''));
    num[i] = temp;
  }
  return res;
}

function next(str) {
  return str === '9' ? '0' : str - 0 + 1 + '';
}

function pre(str) {
  return str === '0' ? '9' : str - 0 - 1 + '';
}

console.log(openLock(['0201', '0101', '0102', '1212', '2002'], '0202'));
