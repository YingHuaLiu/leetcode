function multiply(num1, num2) {
  if(num1 === '0' || num2 === '0') {
    return '0';
  }
  let res = '';
  for (let i = num2.length - 1; i >= 0; i--) {
    let temp = helper(num1, num2[i]);
    for (let j = 0; j < num2.length - i - 1; j++) {
      temp.push('0');
    }
    res = addStrings(res, temp.join(''));
  }
  return res;
}

// 多位数乘个数
function helper(num1, num2) {
  let carry = 0, res = [], i = num1.length - 1;
  while (i >= 0 || carry) {
    let val1 = i >= 0 ? num1[i] : 0;
    let val = (val1 - 0) * (num2 - 0) + carry;
    res.unshift(val % 10);
    carry = Math.floor(val / 10);
    i--;
  }
  return res;
}

function addStrings(num1, num2) {
  let carry = 0, l1 = num1.length - 1, l2 = num2.length - 1;
  let arr = [];
  while (l1 >= 0 || l2 >= 0 || carry) {
    let x = l1 < 0 ? 0 : num1[l1] - 0;
    let y = l2 < 0 ? 0 : num2[l2] - 0;
    let res = x + y + carry;
    arr.push(res % 10);
    carry = Math.floor(res / 10);
    l1--;
    l2--;
  }
  return arr.reverse().join('');
}

console.log(multiply('123', '456'));
