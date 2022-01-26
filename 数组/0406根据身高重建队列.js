// https://leetcode-cn.com/problems/queue-reconstruction-by-height/solution/xian-pai-xu-zai-cha-dui-dong-hua-yan-shi-suan-fa-g/
function reconstructQueue(people) {
  let res = [];
  // 根据height从大到小排序，如果height一样，按count从小到大排序
  people.sort((a, b) => {
    if(a[0]===b[0]){
      return a[1]-b[1];
    }
    return b[0] - a[0];
  });
  for (let person of people) {
    let [height, count] = person;
    if(res.length > count) {
      // 在count位置处插入person
      res.splice(count, 0, person);
    } else {
      res.push(person);
    }
  }
  return res;
}
