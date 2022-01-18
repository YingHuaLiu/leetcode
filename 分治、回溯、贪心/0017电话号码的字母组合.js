// 1.回溯dfs
var letterCombinations = function (digits) {
  if(!digits.length) {
    return [];
  }
  let map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  let strs = digits.split('').map(item => map[item]);
  let res = [];
  dfs(strs, 0, '', res);
  return res;
};

function dfs(strs, start, path, res) {
  if(path.length === strs.length) {
    res.push(path);
    return;
  }
  let str = strs[start];
  for (let i = 0; i < str.length; i++) {
    dfs(strs, start + 1, path + str[i], res);
  }
}

// 2.bfs
var letterCombinations = function (digits) {
  if(!digits.length) {
    return [];
  }
  let map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  let strs = digits.split('').map(item => map[item]);
  let queue = [''];
  for (let i = 0; i < strs.length; i++) {
    let length = queue.length;
    for (let j = 0; j < length; j++) {
      let top = queue.shift();
      for (let ch of strs[i]) {
        queue.push(top + ch);
      }
    }
  }
  return queue;
};
console.log(letterCombinations('23'));
