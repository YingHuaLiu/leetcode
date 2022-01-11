function canThreePartsEqualSum(A) {
  let sum = A.reduce((pre, cur) => pre + cur, 0);
  // 不能被3整除
  if(sum % 3 !== 0) {
    return false;
  }
  let cur = 0, i = 0, target = sum / 3;
  // 搜索第一组
  while (i < A.length) {
    cur += A[i++];
    if(cur === target) {
      break;
    }
  }
  // 遍历到末尾了
  if(cur !== target) {
    return false;
  }
  // 搜索第二组，第三组至少有一个，所以i < A.length - 1
  while (i < A.length - 1) {
    cur += A[i++];
    // 如果第一组+第二组的和为target*2，则成功
    if(cur === target * 2) {
      return true;
    }
  }
  return false;
}
