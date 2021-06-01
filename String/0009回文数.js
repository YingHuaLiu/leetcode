// 1.循环比较首尾数字
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  let div = 1
  while (x / div >= 10) {
    div *= 10
  }
  while (x > 0) {
    let left = Math.floor(x / div)
    let right = x % 10
    if (left !== right) {
      return false
    }
    x = Math.floor((x % div) / 10)
    div = Math.floor(div / 100)
  }
  return true
}

// 2. 比较回文数的一半
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  let temp = 0
  while (temp < x) {
    temp = temp * 10 + x % 10
    x = Math.floor(x / 10)
  }
  return temp === x || Math.floor(temp / 10) === x
}

// 3. 转成字符串，反转字符串
var isPalindrome = function (x) {
  let str = x.toString()
  let newStr = str.split('').reverse().join('')
  return newStr === str
}