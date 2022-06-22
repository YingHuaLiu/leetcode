const dict1 = {
  '零': 0, '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9
};
const dict2 = {
  '十': 10, '百': 100, '千': 1000, '万': 10000, '亿': 100000000
};
const zh2num = str => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    let zh = str[i];
    if(dict2[zh]) {
      let cur = dict2[zh];
      let num = 0;
      // stack不为空 && 栈顶元素小于当前中文数字
      while (stack.length && stack[stack.length - 1] < cur) {
        // 因为遇到了单位，需要把stack中的数都加起来
        num += stack.pop();
      }
      // if(!stack.length && num === 0 && zh === '十') {
      //   stack.push(10);
      // } else {
      //   stack.push(num * cur);
      // }
      if(num !== 0) {
        stack.push(num * cur);
      } else {
        // 十需要特判，例如'十一'，此时num为0，需要直接加10
        stack.push(cur);
      }
    } else {
      stack.push(dict1[zh]);
    }
  }

  let res = 0;
  for (let num of stack) {
    res += num;
  }
  return res;
};

console.log(zh2num('十一'));
console.log(zh2num('一百一十一'));
console.log(zh2num('十一万零十一'));
console.log(zh2num('一百一十一万零一百一十一'));
console.log(zh2num('一百一十一万亿零十一'));
