function mergeSort(arr) {
  while(arr.length>1){
    arr.push(merge(arr.shift(),arr.shift()))
  }
  return arr[0]
}

function merge(arr1, arr2) {
  const res = []
  while (arr1.length && arr2.length) {
    if(arr1[0] < arr2[0]) {
      res.push(arr1.shift())
    } else {
      res.push(arr2.shift())
    }
  }
  return res.concat(arr1).concat(arr2)
}

let arr1 = [[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6]];
let arr2 = [[1,4,6],[7,8,10],[2,6,9],[3,7,13],[1,5,12]];
console.log(mergeSort(arr1))
console.log(mergeSort(arr2))
