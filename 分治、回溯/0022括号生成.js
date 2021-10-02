function generateParenthesis(n) {
  const result = [];
  backTrack(result, '', 0, 0, n);
  return result;
}

function backTrack(result, str, left, right, n) {
  // 如果当前str长度是n的两倍（即左右括号填充完毕）
  if(str.length === n * 2) {
    result.push(str);
    return;
  }
  // 优先加入左括号
  if(left < n) {
    str += '(';
    backTrack(result, str, left + 1, right, n);
    // 将之前加入的左括号去掉
    str = str.slice(0, -1);
  }
  // 加入右括号
  if(left > right) {
    str += ')';
    backTrack(result, str, left, right + 1, n);
  }
}

console.log(generateParenthesis(3));
