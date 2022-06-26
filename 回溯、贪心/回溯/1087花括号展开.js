function fn(str) {
  let arr = [], index = 0;
  while (index < str.length) {
    if(str[index] === '{') {
      let temp = [];
      index++;
      while (str[index] !== '}') {
        if(str[index] === ',') {
          index++;
          continue;
        }
        temp.push(str[index++]);
      }
      arr.push(temp);
      index++;
    } else if(str[index] === ',') {
      index++;
    } else {
      arr.push([str[index++]]);
    }
  }
  let res = [];
  dfs(0, []);
  return res;

  function dfs(start, path) {
    if(path.length === arr.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < arr[start].length; i++) {
      path.push(arr[start][i]);
      dfs(start + 1, path);
      path.pop();
    }
  }
}

console.log(fn('{a,b,c},d,e,{f,g}'));
