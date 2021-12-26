function intersection(arr1, arr2) {
  const res = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if(arr1[i] === arr2[j]) {
      res.push(arr1[i]);
      i++;
      j++;
    } else if(arr1[i] > arr2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return res;
}

console.log(intersection([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 10]));
