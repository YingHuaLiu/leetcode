var isSubsequence = function (s, t) {
  const length1 = s.length, length2 = t.length;
  // 双指针
  let i = 0, j = 0;
  while (i < length1 && j < length2) {
    // 如果当前两个指针值一样，则同时向后挪一位；否则只有指向t的指针向后挪一位
    if(s[i] === t[j]) {
      i++;
    }
    j++;
  }
  // 如果指向s的指针移动到了最后，则说明所有字符都匹配到了
  return i === length1;
};
