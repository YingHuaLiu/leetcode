/**
 在0003题的基础上，如果每个字符允许重复一次，该怎么做？
 */
function lengthOfLongestSubstring(str) {
  let map = new Map();
  let left = 0;
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    map.has(currentChar)
      ? map.set(currentChar, map.get(currentChar) + 1)
      : map.set(currentChar, 1);
    while (map.get(currentChar) > 2) { //将left移动到重复超过1次的字符的下一个位置
      map.set(str[left], map.get(str[left]) - 1);
      left++;
    }
    max = Math.max(max, i - left + 1);
  }
  return max;
}

console.log(lengthOfLongestSubstring('abcabca'));
