// 计算入度和出度，法官是入度为n-1、出度为0
var findJudge = function (n, trust) {
  let inD = new Array(n + 1).fill(0);
  let outD = new Array(n + 1).fill(0);
  for (let [a, b] of trust) {
    inD[b]++;
    outD[a]++;
  }
  for (let i = 1; i <= n; i++) {
    if(inD[i] === n - 1 && outD[i] === 0) {
      return i;
    }
  }
  return -1;
};
