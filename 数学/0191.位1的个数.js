// 1.找规律，死记硬背
var hammingWeight = function (n) {
  let res = 0;
  while (n) {
    n &= n - 1;
    res++;
  }
  return res;
};

// 2.判断每一位是不是1
var hammingWeight = function (n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    if((n & (1 << i)) !== 0) {
      res++;
    }
  }
  return res;
};

console.log(hammingWeight(6));
