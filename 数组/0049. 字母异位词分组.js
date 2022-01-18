var groupAnagrams = function (strs) {
  let map = {};
  for (let str of strs) {
    // 将每个字母出现的次数使用字符串表示，作为哈希表的键
    let arr = new Array(26).fill(0);
    for (let s of str) {
      arr[s.charCodeAt() - 'a'.charCodeAt()]++;
    }
    // 键相同的加入相同集合中
    map[arr] ? map[arr].push(str) : map[arr] = [str];
  }
  return Object.values(map);
};
