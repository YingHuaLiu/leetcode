// 自顶向下
function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  }
  let left = arr.slice(0, arr.length >> 1);
  let right = arr.slice(arr.length >> 1);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
    if(left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

let arr = [3, 1, 2, 5, 0];
console.log(mergeSort(arr));
