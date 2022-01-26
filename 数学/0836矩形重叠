function isRectangleOverlap(rec1, rec2) {
  // 如果矩形 rec1 和 rec2 中至少有一个矩形的面积为 0，则一定没有重叠
  if(rec1[0] === rec1[2] || rec1[1] === rec1[3] || rec2[0] === rec2[2] || rec2[1] === rec2[3]) {
    return false;
  }
  // 四种不会重叠的情形，取反就是会重叠
  return !(rec1[2] <= rec2[0] ||   // rec1在rec2的左面
    rec1[3] <= rec2[1] ||   // rec1在rec2的下面
    rec1[0] >= rec2[2] ||   // rec1在rec2的右面
    rec1[1] >= rec2[3]);    // rec1在rec2的上面
}
