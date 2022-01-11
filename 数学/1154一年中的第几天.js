var dayOfYear = function (date) {
  let map = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  let dates = date.split('-');
  let year = parseInt(dates[0]), month = parseInt(dates[1]), result = parseInt(dates[2]);
  if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    // 闰
    map[2] = map[2] + 1;
  }
  for (let i = 1; i < month; i++) {
    result += map[i];
  }
  return result;
};

console.log(dayOfYear('2004-03-01'));
