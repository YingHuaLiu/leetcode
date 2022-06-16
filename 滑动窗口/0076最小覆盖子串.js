var minWindow = function (s, t) {
  if(t.length > s.length) {
    return '';
  }
  // 记录t中每个字符需要的个数
  let dict = new Map();
  for (let char of t) {
    dict.set(char, (dict.get(char) || 0) + 1);
  }
  // l左指针，r右指针，diff表示需要的字符个数，start表示子串的起始位置，length表示子串的长度
  let l = 0, r = 0, diff = t.length, start = 0, length = Number.MAX_VALUE;
  while (r < s.length) {
    let char = s[r];
    // 如果当前字符正是需要的，那么diff减一个
    if(dict.get(char) > 0) {
      diff--;
    }
    // 将字典中该字符的需要个数减一
    dict.set(char, (dict.get(char) || 0) - 1);
    // 当前窗口包含了t的所有字符时，就需要移动l指针
    if(diff === 0) {
      // l指针指向的字符只要多余，就右移
      while (l < r && dict.get(s[l]) < 0) {
        dict.set(s[l], dict.get(s[l]) + 1);
        l++;
      }
      // 保存结果
      if(length > (r - l + 1)) {
        start = l;
        length = r - l + 1;
      }
      // 当前l指针开始的子串可以不用考虑了，从下一个位置开始重新开始循环
      diff++;
      dict.set(s[l], dict.get(s[l]) + 1);
      l++;
    }
    r++;
  }

  return length === Number.MAX_VALUE ? '' : s.substring(start, start + length);
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
