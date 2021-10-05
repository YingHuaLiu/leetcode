/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let left = 0, right = s.length - 1;
  // 去除头部的所有空格
  while (left < right && s[left] === ' ') {
    left++;
  }
  // 去除尾部的所有空格
  while (left < right && s[right] === ' ') {
    right--;
  }
  let word = [], queue = [];
  while (left <= right) {
    // 当遇到空格时，并且word里面有值（跳过连续出现的空格）
    if(word.length && s[left] === ' ') {
      // 此时word结束，推到queue头部
      queue.unshift(word.join(''));
      word = [];
    } else if(s[left] !== ' ') {
      word.push(s[left]);
      // 如果left===right,此时匹配结束，需要将最后的word推到queue中
      if(left === right) {
        queue.unshift(word.join(''));
      }
    }
    left++;
  }
  return queue.join(' ');
};
