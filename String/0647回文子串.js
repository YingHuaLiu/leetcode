// 参考第5题的中心扩散法
function countSubstrings(s) {
  const length = s.length;
  if(!s || !length) {
    return 0;
  }
  let res = 0;
  for (let i = 0; i < length; i++) {
    res += expandAroundCenter(s, i, i);
    res += expandAroundCenter(s, i, i + 1);
  }
  return res;
}

function expandAroundCenter(s, left, right) {
  let count = 0;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
    count++;
  }
  return count;
}

console.log(countSubstrings('abc'));
