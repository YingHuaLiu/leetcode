/**
  求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
 */

function multiply(a, b) {
  // 1.先将两个数转成字符串
  let str1 = a.toString()
  let str2 = b.toString()

  // 2.获取小数点后的位数,不一定有小数位
  let lenA = (str1.indexOf('.')===-1)?0:(str1.length - str1.indexOf('.')-1)
  let lenB = (str2.indexOf('.')===-1)?0:(str2.length - str2.indexOf('.')-1)

  return (a*b).toFixed(lenA+lenB)
}
