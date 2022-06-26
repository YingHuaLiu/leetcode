function validateStackSequences(pushed, popped) {
  let index = 0, stack = [];
  for (let push of pushed) {
    stack.push(push);
    // 当栈顶元素和popped[index]相同，就出栈
    while (stack.length && stack[stack.length - 1] === popped[index]) {
      stack.pop();
      index++;
    }
  }
  return index === pushed.length;
}
