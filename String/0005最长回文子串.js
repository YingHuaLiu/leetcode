//https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zhong-xin-kuo-san-fa-he-dong-tai-gui-hua-by-reedfa/
// 中心扩散法，从每一个点作为中心点开始，分别向左、向右、同时向左向右扩散
function longestPalindrome(s) {
  const length = s.length;
  if(!s || !length) {
    return s;
  }
  let start = 0, maxLen = 0;
  for (let i = 0; i < length; i++) {
    // 单个中心节点情况
    let len1 = expandAroundCenter(s, i, i);
    // 两个中心节点的情况
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if(len > maxLen) {
      start = i - (len - 1) >> 1;
      maxLen = len;
    }
  }
  return s.slice(start, start + maxLen);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  // 因为left-1、right+1了，所以这边要减一
  return right - left - 1;
}
console.log(longestPalindrome('ccabac'));

// 动态规划
function longestPalindrome(s) {
  const length = s.length;
  if(!s || !length) {
    return s;
  }
  let maxStart = 0, maxLen = 1;
  const dp = new Array(length).fill(0).map(item => new Array(length).fill(false));
  for (let i = 0; i < length; i++) {
    dp[i][i] = true;
  }
  for (let r = 1; r < length; r++) {
    for (let l = 0; l < r; l++) {
      if(s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
        dp[l][r] = true;
        if(r - l + 1 > maxLen) {
          maxLen = r - l + 1;
          maxStart = l;
        }
      }
    }
  }
  return s.slice(maxStart, maxStart + maxLen);
}

