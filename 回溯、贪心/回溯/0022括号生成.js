function generateParenthesis(n) {
  const result = [];
  backTrack('', 0, 0);
  return result;

  function backTrack(str, left, right) {
    // 如果当前str长度是n的两倍（即左右括号填充完毕）
    if(str.length === n * 2) {
      result.push(str);
      return;
    }
    // 优先加入左括号
    if(left < n) {
      backTrack(str + '(', left + 1, right);
    }
    // 加入右括号
    if(left > right) {
      backTrack(str + ')', left, right + 1);
    }
  }
}


console.log(generateParenthesis(3));
