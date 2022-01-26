// 1.set去重
var permutation = function (s) {
  let used = new Array(s.length).fill(false);
  let res = new Set();
  backTrack('');
  return [...res];

  function backTrack(path) {
    if(path.length === s.length) {
      res.add(path);
      return;
    }
    for (let i = 0; i < s.length; i++) {
      if(!used[i]) {
        used[i] = true;
        backTrack(path + s[i]);
        used[i] = false;
      }
    }
  }
};

// 2.排序后去重
var permutation = function (s) {
  let used = new Array(s.length).fill(false);
  let res = [];
  s = s.split('').sort();
  backTrack('');
  return res;

  function backTrack(path) {
    if(path.length === s.length) {
      res.push(path);
      return;
    }
    for (let i = 0; i < s.length; i++) {
      // 如果当前元素和前一个元素相等，并且前一个元素不在path中
      if(i > 0 && s[i] === s[i - 1] && !used[i - 1]) {
        continue;
      }
      if(!used[i]) {
        used[i] = true;
        backTrack(path + s[i]);
        used[i] = false;
      }
    }
  }
};
