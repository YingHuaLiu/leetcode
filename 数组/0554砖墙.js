function leastBricks(wall) {
  let map = new Map();
  let length = wall.length;
  for (let i = 0, sum = 0; i < length; i++, sum = 0) {
    for (let l of wall[i]) {
      sum += l;
      map.set(sum, (map.get(sum) || 0) + 1)
    }
    map.delete(sum)
  }
  let res = length;
  for (let key of map.keys()) {
    res = Math.min(res, length - map.get(key))
  }
  return res;
}