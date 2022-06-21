const small = [
  'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
];
const middle = [
  '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
];
const large = [
  'Billion', 'Million', 'Thousand',
];

// 迭代解法
function numberToWords(num) {
  // 0需要特判
  if(num === 0) {
    return small[0];
  }
  const res = [];
  for (let i = 1e9, j = 0; i >= 1; i /= 1000, j++) {
    // 重点，num必须>=i
    if(num < i) {
      continue;
    }
    res.push(...helper(Math.floor(num / i)));
    // 增加单位
    if(j <= 2) {
      res.push(large[j]);
    }
    num %= i;
  }
  return res.join(' ');
}

function helper(num) {
  const res = [];
  // 999 => Nine Hundred + 99
  if(num >= 100) {
    res.push(small[Math.floor(num / 100)], 'Hundred');
    num %= 100;
  }
  // 99 => Nine Hundred Ninety + 9
  if(num >= 20) {
    res.push(middle[Math.floor(num / 10)]);
    num %= 10;
  }
  // 99 => Nine Hundred Ninety Nine
  if(num !== 0) {
    res.push(small[num]);
  }
  return res;
}

console.log(numberToWords(123));
