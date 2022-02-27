function longestValidParentheses(s) {
  let stack = [];
  let max = 0, start = 0;
  for (let i = 0; i < s.length; i++) {
    if(s[i] === '(') {
      stack.push(i);
    } else {
      // 如果栈中还有元素，最上面一定是'('
      if(stack.length) {
        stack.pop();
        // 如果stack还有元素
        if(stack.length) {
          max = Math.max(max, i - stack[stack.length - 1]);
        } else { // 此时栈为空
          max = Math.max(max, i - start + 1);
        }
      } else {
        start = i + 1;
      }
    }
  }
  return max;
}
