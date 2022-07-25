function removeKdigits(num, k) {
  const stack = [];
  const nums = num.split('').map(item => item - 0);
  for (let num of nums) {
    while (stack.length && k && stack[stack.length - 1] > num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  // 去除前导0
  while (stack.length && stack[0] === 0) {
    stack.shift();
  }
  // 000去除前导0后为空，所以特判返回0
  return stack.length ? stack.join('') : '0';
}

console.log(removeKdigits('10200', 1));
console.log(removeKdigits('9', 1));
