// split分成两组逐一进行比较
var compareVersion = function(version1, version2) {
  let arr1=version1.split('.')
  let arr2=version2.split('.')
  let maxLength=Math.max(arr1.length,arr2.length)
  let item1,item2
  for(let i=0;i<maxLength;i++){
    item1=i<arr1.length?parseInt(arr1[i]):0
    item2=i<arr2.length?parseInt(arr2[i]):0
    if(item1<item2){
      return -1
    }else if(item1>item2){
      return 1
    }
  }
  return 0
};

// 双指针
var compareVersion = function(version1, version2) {
  let length1=version1.length
  let length2=version2.length
  let index1=0,index2=0
  while(index1<length1 || index2<length2){
    let cur1=0,cur2=0
    while(index1<length1 && version1.charAt(index1)!=='.'){
      cur1=cur1*10+version1.charAt(index1)-'0'
      index1++
    }
    while(index2<length2 && version2.charAt(index2)!=='.'){
      cur2=cur2*10+version2.charAt(index2)-'0'
      index2++
    }
    if(cur1!==cur2){
      return cur1<cur2?-1:1
    }
    index1++
    index2++
  }
  return 0
};
