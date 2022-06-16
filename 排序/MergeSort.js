// 自顶向下
function mergeSort(arr, left, right) {
  if(left >= right) {
    return;
  }
  let mid = left + (right - left >> 1);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
  return arr;
}

// 自顶向下和自底向上公用的merge函数
function merge(arr, left, mid, right) {
  let temp = [], index = 0;
  let l = left, r = mid + 1;
  while (l <= mid && r <= right) {
    if(arr[l] <= arr[r]) {
      temp[index++] = arr[l++];
    } else {
      temp[index++] = arr[r++];
    }
  }
  while (l <= mid) {
    temp[index++] = arr[l++];
  }
  while (r <= right) {
    temp[index++] = arr[r++];
  }
  for (let i = 0; i < temp.length; i++) {
    arr[i + left] = temp[i];
  }
}

// 自底向上
function mergeSort2(arr) {
  let length = arr.length;
  for (let gap = 1; gap < length; gap *= 2) {
    // 坑点：left要小于length-gap
    for (let left = 0; left < length - gap; left += gap * 2) {
      // 分成两个区间去合并，[left,left + gap - 1]和[left + gap,right]
      // 坑点：要比较left + gap * 2 - 1和length - 1较小的那一个，因为left + gap * 2 - 1会出界
      merge(arr, left, left + gap - 1, Math.min(left + gap * 2 - 1, length - 1));
    }
  }
  return arr;
}

let arr = [3, 1, 0, 0, 4];
console.log(mergeSort2(arr));
