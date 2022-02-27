// 约瑟夫环问题
// https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/huan-ge-jiao-du-ju-li-jie-jue-yue-se-fu-huan-by-as/
var lastRemaining = function (n, m) {
  if(n === 1) {
    return 0;
  }
  let index = lastRemaining(n - 1, m);
  return (index + m) % n;
};
