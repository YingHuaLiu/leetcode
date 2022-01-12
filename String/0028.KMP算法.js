// https://leetcode-cn.com/problems/implement-strstr/solution/duo-tu-yu-jing-xiang-jie-kmp-suan-fa-by-w3c9c/
function strStr(haystack, needle) {
  if(!needle.length) {
    return 0;
  }
  // 前缀数组,下标i表示needle中[0,i]的字串前缀和后缀相同的字符串长度
  // 默认首位为0，因为单个字符没有前缀和后缀之分
  let next = [0];
  for (let left = 0, right = 1; right < needle.length; right++) {
    // 如果当前left不在首位，并且当且left和right所在的字符不同
    while (left > 0 && needle[left] !== needle[right]) {
      left = next[left - 1];
    }
    // 因为left下标和前缀后缀相同的字符串长度正好差一位，所以将left进一位，正好等于长度
    if(needle[left] === needle[right]) {
      left++;
    }
    // 以right为结尾的子串的相同前后缀长度为left
    next[right] = left;
  }
  // 此时next数组计算完毕

  // left是haystack指针，right是needle指针
  for (let left = 0, right = 0; left < haystack.length; left++) {
    while (right > 0 && haystack[left] !== needle[right]) {
      right = next[right - 1];
    }
    if(needle[right] === haystack[left]) {
      right++;
    }
    if(right === needle.length) {
      return left - right + 1;
    }
  }
  return -1;
}
