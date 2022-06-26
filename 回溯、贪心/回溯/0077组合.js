var combine = function (n, k) {
  let res = [];
  backTrack(n, [], res, k, 1);
  return res;
};
const backTrack = (n, path, res, k, start) => {
  if(path.length === k) {
    res.push(path.slice());
    return;
  }
  // 优化点：i的范围要小于n-k+1+已收录的temp长度
  for (let i = start; i <= n - (k - path.length) + 1; i++) {
    path.push(i);
    backTrack(n, path, res, k, i + 1);
    path.pop();
  }
};
console.log(combine(5, 4));
