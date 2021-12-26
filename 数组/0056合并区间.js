function merge(intervals) {
  // 核心：对区间的左端点进行排序
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  for (let i = 0; i < intervals.length; i++) {
    const l = intervals[i][0], r = intervals[i][1];
    // 如果 result为空 或者 当前区间的左端点比result最后一个区间的右端点大（即没有重合），则将当前区间加入result
    if(!result.length || result[result.length - 1][1] < l) {
      result.push([l, r]);
    } else {
      // 当前区间与result最后一个区间有重合，则比较两个区间的右端点谁大
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], r);
    }
  }
  return result;
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
