var isValid = function (s) {
  // 如果字符串长度是奇数，则一定不匹配
  if(s.length % 2 === 1) {
    return false;
  }
  // key为右括号，value为左括号
  const map = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  const stack = [];
  for (let ch of s) {
    // 如果当前字符是 ) ] }，则需要与栈顶元素比较
    if(map[ch]) {
      // 如果当前字符在map中对应的value和栈顶元素不相等，则不匹配
      if(stack.pop() !== map[ch]) {
        return false;
      }
    } else {
      // 如果当前字符是( [ {，则直接入栈
      stack.push(ch);
    }
  }
  // 最后全部匹配成功应该栈为空
  return !stack.length;
};

console.log(isValid('][]'));
