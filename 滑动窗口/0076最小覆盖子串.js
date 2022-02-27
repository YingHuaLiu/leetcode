var minWindow = function (s, t) {
  if(t.length > s.length) {
    return '';
  }
  let dict = new Map();
  for (let char of t) {
    dict.set(dict, (dict.get(char) || 0) + 1);
  }
  let l = 0;
  // // 左指针跳到第一个出现t中字符的位置
  // for (let i = 0; i < s.length; i++) {
  //   if(dict.has(s[i])) {
  //     l = i;
  //     dict.set(s[i], dict.get(s[i]) - 1);
  //     diff--;
  //     break;
  //   }
  // }
  // // 如果t长度为1，那么直接返回，不用往右滑动
  // if(t.length === 1) {
  //   return t;
  // }
  let r = l, diff = dict.length, start = l, length = Number.MAX_VALUE;
  while (r < s.length) {
    let char = s[r];

  }

  return;
};
