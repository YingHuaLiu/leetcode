// split分成两组逐一进行比较
var compareVersion = function (version1, version2) {
  let arr1 = version1.split('.'), arr2 = version2.split('.');
  let i = 0;
  while (i < arr1.length || i < arr2.length) {
    let v1 = parseInt(arr1[i]) || 0, v2 = parseInt(arr2[i]) || 0;
    if(v1 > v2) {
      return 1;
    } else if(v1 < v2) {
      return -1;
    }
    i++;
  }
  return 0;
};

// 双指针
var compareVersion = function (version1, version2) {
  let length1 = version1.length;
  let length2 = version2.length;
  let index1 = 0, index2 = 0;
  while (index1 < length1 || index2 < length2) {
    let cur1 = 0, cur2 = 0;
    while (index1 < length1 && version1.charAt(index1) !== '.') {
      cur1 = parseInt(version1[index1]) + cur1 * 10;
      index1++;
    }
    while (index2 < length2 && version2.charAt(index2) !== '.') {
      cur2 = parseInt(version2[index2]) + cur2 * 10;
      index2++;
    }
    if(cur1 !== cur2) {
      return cur1 < cur2 ? -1 : 1;
    }
    index1++;
    index2++;
  }
  return 0;
};

compareVersion('1.5121', '1.7171');
