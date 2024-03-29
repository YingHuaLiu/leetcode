/**
 * 定义左右双指针，用map保存出现过的字符和它下标的下一位，max保存左右指针的最大距离；每移动一次右指针，则判断右指针的字符是否在
 map中出现过；若碰到出现过的字符，并且该重复字符在map的value在左右指针中间，则将左指针移动到map对应的value处；若没碰
 到，则将该位置的字符保存到map中，右指针继续右移。
 * @param str
 * @returns {number}
 */
function lengthOfLongestSubstring(str) {
  if(!str.length) {
    return 0;
  }
  let map = new Map();
  let start = 0;
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    //若碰到出现过的字符，并且该重复字符在map的value在左右指针中间。
    // 为什么是中间呢？因为如果这个重复字符在左指针左边，那么左指针就会跳到前面去了
    if(map.has(str[i]) && map.get(str[i]) > start) {
      start = map.get(str[i]); //则将左指针移动到map对应的value处
    }
    max = Math.max(max, i - start + 1);
    map.set(str[i], i + 1);
  }
  return max;
}
console.log(lengthOfLongestSubstring('abba'))

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
