// 指针迭代
var numUniqueEmails = function (emails) {
  let set = new Set();
  for (let email of emails) {
    let res = [];
    let cur = 0, signal = false;
    while (cur < email.length) {
      if(signal) {
        res.push(email[cur++]);
      } else {
        if(email[cur] === '@') {
          signal = true;
          res.push('@');
          cur++;
        } else if(email[cur] === '.') {
          cur++;
        } else if(email[cur] === '+') {
          while (email[cur] !== '@') {
            cur++;
          }
        } else {
          res.push(email[cur++]);
        }
      }
    }
    set.add(res.join(''));
  }
  return set.size;
};
// 正则
var numUniqueEmails = function (emails) {
  let set = new Set();
  for (let email of emails) {
    set.add(email.replace(/(\.)(?=.*@)|(\+.*)(?=@)/g, ''));
  }
  return set.size;
};

console.log(numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com']));
