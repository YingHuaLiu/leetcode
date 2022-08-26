// 给一个包含5的数字，返回去掉1个5以后的最大数字
// e.g. 51525354 => 5152534
function solution(n) {
  let str = n + '';
  let split = str.split('')
  let arr = [];
  let max = -Number.MAX_SAFE_INTEGER
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '5') {
      arr.push(i)
    }
  }
  for (let index of arr) {
    split[index] = '';
    max = Math.max(max, parseInt(split.join('')))
    split[index] = str[index]
  }
  return max;
}

// 给定数组，返回和为0的子数组，子数组之间可以互相包含
function solution2(A) {
  let res = 0;
  let sum = 0;
  const map = new Map();
  map.set(0, 1)
  for (let num of A) {
    sum += num;
    // if (sum === 0) {
    //   res++;
    // }
    if (map.has(sum)) {
      res += map.get(sum);
    }
    // if (res > 1e9) {
    //   return -1;
    // }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return res;
}

console.log(solution2([2, -2, 3, 0, 2, -2]));

//数组中 长度3及以上的等差数列区间  的个数
function solution3(A) {
  let length = A.length;
  if (length < 3) return 0;
  let res = 0;
  let f = new Array(length);
  f[0] = A[0];
  for (let i = 1; i < length; ++i) {
    f[i] = A[i] - A[i - 1];
  }
  for (let i = 1; i < length - 1;) {//注意差分数组从索引1开始
    if (f[i] === f[i + 1]) {
      let j = i + 2;
      while (j < length && f[j] === f[i]) {
        j++;
      }
      let len = j - i;
      res += len * (len - 1) / 2;
      if (res > 1e9) return -1;
      i = j;
    } else {
      i++;
    }
  }
  return res;
}