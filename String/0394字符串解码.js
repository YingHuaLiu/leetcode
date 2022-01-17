// https://leetcode-cn.com/problems/decode-string/solution/decode-string-fu-zhu-zhan-fa-di-gui-fa-by-jyd/

// 1.栈
function decodeString1(str) {
  // res用来存储[]之间的字符串,multi用来存储两个[之前的数字
  let stack = [], multi = 0, res = '';
  for (let s of str) {
    if(s === '[') {
      stack.push([res, multi]);
      res = '';
      multi = 0;
    } else if(s === ']') {
      let [string, num] = stack.pop();
      res = res.repeat(num);
      res = string + res;
    } else if(parseInt(s) >= 0 && parseInt(s) <= 9) {
      multi = multi * 10 + parseInt(s);
    } else {
      // 如果是字符串就
      res += s;
    }
  }
  return res;
}

// 1.递归
function decodeString(str) {
  function dfs(str, index) {
    // res用来存储[]之间的字符串,multi用来存储两个[之前的数字
    let multi = 0, res = '';
    while (index < str.length) {
      if(str[index] >= 0 && str[index] <= 9) {
        multi = multi * 10 + parseInt(str[index]);
      } else if(str[index] === '[') {
        let [s, i] = dfs(str, index + 1);
        s = s.repeat(multi);
        res += s;
        index = i;
        multi = 0;
      } else if(str[index] === ']') {
        return [res, index];
      } else {
        res += str[index];
      }
      index++;
    }
    return res;
  }

  return dfs(str, 0);
}

console.log(decodeString1('100[leet]'));
