// 原地变换：不适用于java,js，因为这些语言字符串是不可变的
var reverseWords = function (s) {
  let left = 0;
  while (left < s.length) {
    let right = left;
    while (right < s.length && s[right] !== ' ') {
      right++;
    }
    // 此时right指向空格或者末尾
    let l = left, r = right - 1;
    while (l < r) {
      [s[l], s[r]] = [s[r], s[l]];
      l++;
      r--;
    }
    left = right + 1;
  }
  return s;
};

// 额外用数组存储，双指针
var reverseWords = function (s) {
  let res = [];
  let left = 0;
  while (left < s.length) {
    let right = left;
    while (right < s.length && s[right] !== ' ') {
      right++;
    }
    // 将单词从后往前存到res中
    for (let i = right - 1; i >= left; i--) {
      res.push(s[i]);
    }
    // 将单词间的空格储存进res中
    while (s[right] === ' ') {
      right++;
      res.push(' ');
    }
    left = right;
  }
  return res.join('');
};

console.log(reverseWords('you are bitch'));
