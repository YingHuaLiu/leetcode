//口诀：3 for + 1 if
function shellSort(arr) {
  let length = arr.length
  for (let gap = Math.floor( length / 2); gap > 0; gap = Math.floor(gap/2)) {
    for (let i = gap; i < length; i++) {
      for (let j = i - gap; j >= 0; j -= gap) {
        if (arr[j] > arr[j + gap]) {
          [arr[j], arr[j + gap]] = [arr[j + gap], arr[j]]
        }
      }
    }
  }
  return arr
}
