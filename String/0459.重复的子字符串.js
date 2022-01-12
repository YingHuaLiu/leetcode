// 利用kmp的next数组来判断字串
function repeatedSubstringPattern(s) {
  let next = getNext(s);
  // maxLen为重复子串长度的1或多倍
  let maxLength = next[next.length - 1];
  // 如果前后缀匹配长度为0，那么肯定没有重复子串，比如abc
  if(maxLength === 0) {
    return false;
  }
  // 如果第一个子串的末尾和s的末尾不同，那么肯定不行
  // 比如abcab，第一个字串末尾是c，s的末尾是b
  if(s[s.length - 1] !== s[s.length - maxLength - 1]) {
    return false;
  }
  return s.length % (s.length - maxLength) === 0;
}

function getNext(s) {
  let next = [0];
  for (let left = 0, right = 1; right < s.length; right++) {
    while (left > 0 && s[left] !== s[right]) {
      left = next[left - 1];
    }
    if(s[left] === s[right]) {
      left++;
    }
    next[right] = left;
  }
  return next;
}
