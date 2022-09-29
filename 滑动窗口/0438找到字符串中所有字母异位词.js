// 1.双词频数组，每移动一个字母就比较两个数组的词频是否一样
function findAnagrams(s, p) {
  if(s.length < p.length) {
    return [];
  }
  let sArray = new Array(26).fill(0);
  let pArray = new Array(26).fill(0);

  let res = [];
  for (let i = 0; i < p.length; i++) {
    sArray[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    pArray[p[i].charCodeAt() - 'a'.charCodeAt()]++;
  }
  if(sArray.toString() === pArray.toString()) {
    res.push(0);
  }

  for (let i = 1; i <= s.length - p.length; i++) {
    --sArray[s[i - 1].charCodeAt() - 'a'.charCodeAt()];
    ++sArray[s[i - 1 + p.length].charCodeAt() - 'a'.charCodeAt()];
    if(sArray.toString() === pArray.toString()) {
      res.push(i);
    }
  }
  return res;
}

// 2.双数组压缩成一个，必须掌握
function findAnagrams(s, p) {
  if(s.length < p.length) {
    return [];
  }
  let res = [];
  let array = new Array(26).fill(0);
  // 比较0~p.length-1的词频差异，s中出现的+1，p中出现的-1
  for (let i = 0; i < p.length; i++) {
    array[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    array[p[i].charCodeAt() - 'a'.charCodeAt()]--;
  }
  //记录当前窗口与字符串 p 中数量不同的字母的个数，并在滑动窗口的过程中维护它
  let diff = 0;
  for (let i = 0; i < 26; i++) {
    if(array[i] !== 0) {
      diff++;
    }
  }
  // 说明第一个窗口是异位词
  if(diff === 0) {
    res.push(0);
  }

  for (let i = 1; i <= s.length - p.length; i++) {
    //如果左端点的字频原来是1，移动窗口后变成0，说明不同的数量会少一个
    if(array[s.charCodeAt(i - 1) - 'a'.charCodeAt()] === 1) {
      diff--;
    } else if(array[s.charCodeAt(i - 1) - 'a'.charCodeAt()] === 0) {
      //如果左端点的字频原来是0，移动窗口后变成-1，说明不同的数量会多一个
      diff++;
    }
    // 移动左端点到当前的i
    --array[s.charCodeAt(i - 1) - 'a'.charCodeAt()];

    //如果右端点的字频原来是0，移动窗口后变成1，说明不同的数量会多一个
    if(array[s.charCodeAt(i - 1 + p.length) - 'a'.charCodeAt()] === 0) {
      diff++;
    } else if(array[s.charCodeAt(i - 1 + p.length) - 'a'.charCodeAt()] === -1) {
      //如果右端点的字频原来是-1，移动窗口后变成0，说明不同的数量会少一个
      diff--;
    }
    // 移动右端点到当前的i-1+p.length
    ++array[s.charCodeAt(i - 1 + p.length) - 'a'.charCodeAt()];
    if(diff === 0) {
      res.push(i);
    }
  }
  return res;
}
