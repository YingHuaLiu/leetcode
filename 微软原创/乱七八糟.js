/**
 * 字符串以空格为分隔符进行分割，比如i love china要返回一个vector，里面有三个数组，分别是{i}，{love}，{china}
 * 不能用substr方法，可以自己手写
 */
function split(s) {
  if(!s.length) {
    return [];
  }
  let res = [], temp = [], i = 0;
  while (i < s.length) {
    if(s[i] === ' ') {
      // 如果出现连续空格，我们一直向右移
      while (i < s.length && s[i] === ' ') {
        i++;
      }
      res.push(temp.join(''));
      temp = [];
    } else {
      temp.push(s[i]);
      i++;
      if(i === s.length) {
        res.push(temp.join(''));
      }
    }
  }
  return res;
}

console.log(split(' i love u '));

/**
 *  给一个不含重复元素的数组，如果该数组满足下面两个条件中的任意一个，就返回true，否则返回false；
 条件1：如果在该数组中可以找到两个数字使得交换这两个数字后的整个数组变为升序，那么该条件满足。
 条件2：如果该数组中可以找到一个连续的子数组使得反转这个子数组后整个数组变为升序，那么该条件满足。
 思路：两个条件分开判断，条件一用两个指针指向两个非增的位置，判断如果交换了这两个位置能不能满足升序，
 条件二两个指针指向降序子数组的头尾，判断翻转后能不能升序
 */
function judge(nums) {
  let left = 0, right = nums.length - 1;
  while (left < nums.length - 1 && nums[left] < nums[left + 1]) {
    left++;
  }
  while (right > 0 && nums[right - 1] < nums[right]) {
    right--;
  }
  return judge1(nums, left, right) || judge2(nums, left, right);

  function judge1(nums) {
    let copy = nums.slice();
    [copy[left], copy[right]] = [copy[right], copy[left]];
    for (let i = 1; i < copy.length; i++) {
      if(copy[i] < copy[i - 1]) {
        return false;
      }
    }
    return true;
  }

  function judge2(nums) {
    let copy = nums.slice();
    for (let i = 0; i < (right - left + 1 >> 1); i++) {
      [copy[left + i], copy[right - i]] = [copy[right - i], copy[left + i]];
    }
    for (let i = 1; i < copy.length; i++) {
      if(copy[i] < copy[i - 1]) {
        return false;
      }
    }
    return true;
  }
}

console.log(judge([1, 2]));
console.log(judge([2, 1]));
console.log(judge([1, 2, 4, 3, 7, 8]));
console.log(judge([1, 2, 6, 5, 4, 3, 7, 8]));

/**
 * 实现一个类似于整数流的类，每次调用next()方法时会传进去一个数字，并返回最近传进去的三个数的平均值。要求只能使用数组实现。
 * stream.next(4); //return 4
 * stream.next(6); // return 5
 * stream.next(2);// return 4
 * stream.next(1); // return 3
 * 思路：使用循环数组来实现一个队列，记录一下开始结束位置，并用一个sum来存当前的和，这样可以做到时间复杂度为O(1)。
 */
function Stream() {
  this.arr = [];
  this.left = this.right = 0;
}

Stream.prototype.next = function (num) {
  this.arr.push(num);
  this.right++;
  if(this.right - this.left > 3) {
    this.left++;
  }
  let sum = 0;
  for (let i = this.left; i < this.right; i++) {
    sum += this.arr[i];
  }
  return sum / (this.right - this.left);
};

let stream = new Stream();
console.log(stream.next(1));
console.log(stream.next(3));
console.log(stream.next(5));
console.log(stream.next(4));

/**
 *  给出了一个扩展字符串的定义：如果一个字符串可以由，对一个原始字符串中的不特定字母扩展三倍而得到，那么就是一个扩展串。
 现给出一个扩展字符和一系列原始字符，求出原始字符中哪些可以是该扩展字符的原始字符。
 */

/**
 * 二十六进制、十进制互转
 */
function from26to10(num) {
  let res = 0;
  while (num > 0) {
    res = res * 26 + num % 10;
    num = Math.floor(num / 10);
  }
  return res;
}

console.log(from26to10(11));

function from10to26(num) {
  let res = [];
  while (num > 0) {
    res.unshift(num % 26);
    num = Math.floor(num / 26);
  }
  return res.join('') - 0;
}

console.log(from10to26(28));
