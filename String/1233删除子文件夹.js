function removeSubfolders(folder) {
  folder.sort();
  const res = [];
  let i = 0;
  while (i < folder.length) {
    res.push(folder[i]);
    let k = i + 1;
    // '/a/b'和'/a/bc'不是包含关系
    let temp = folder[i] + '/';
    while (k < folder.length && folder[k].startsWith(temp)) {
      k++;
    }
    i = k;
  }
  return res;
}

// 如果面试官不让用api，自己写一个
// s1是不是以s2开头
function startsWith(s1, s2) {
  if(s1.length < s2.length) {
    return false;
  }
  for (let j = 0; j < s2.length; j++) {
    if(s1[j] !== s2[j]) {
      return false;
    }
  }
  return true;
}

console.log(removeSubfolders(['/a/b', '/a/bc', '/b/c']));
console.log(startsWith('abc', ''));
