var titleToNumber = function (columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    let val = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
    result = val + result * 26;
  }
  return result;
};
