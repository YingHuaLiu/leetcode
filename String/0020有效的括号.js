var isValid = function (s) {
  let length = s.length;
  // 如果字符串长度是奇数，则一定不匹配
  if(length % 2 === 1) {
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
      // 如果栈为空，则不匹配，举例：[]}
      // 如果当前字符在map中对应的value和栈顶元素不相等，则不匹配
      if(!stack.length || stack[stack.length - 1] !== map[ch]) {
        return false;
      }
      // 当前字符和栈顶元素匹配，则弹出栈顶元素
      stack.pop();
    } else {
      // 如果当前字符是( [ {，则直接入栈
      stack.push(ch);
    }
  }
  // 最后全部匹配成功应该栈为空
  return !stack.length;
};

console.log(isValid('][]'));
