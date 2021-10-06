var addStrings = function (num1, num2) {
  let carry = 0, l1 = num1.length - 1, l2 = num2.length - 1;
  let arr = [];
  while (l1 >= 0 || l2 >= 0 || carry !== 0) {
    let x = l1 < 0 ? 0 : num1[l1] - 0;
    let y = l2 < 0 ? 0 : num2[l2] - 0;
    let res = x + y + carry;
    arr.push(res % 10);
    carry = Math.floor(res / 10);
    l1--;
    l2--;
  }
  return arr.reverse().join('');
};
