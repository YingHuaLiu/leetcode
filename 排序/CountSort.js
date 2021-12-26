function countSort(numbers) {
  let hashtable = {}, max = 0, result = [];
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] in hashtable) {
      hashtable[numbers[i]] += 1;
    } else {
      hashtable[numbers[i]] = 1;
    }
    if(numbers[i] > max) {
      max = numbers[i];
    }
  }
  for (let i = 0; i <= max; i++) {
    if(i in hashtable) {
      for (let j = 0; j < hashtable[i]; j++) {
        result.push(i);
      }
    }
  }
  return result;
}

countSort([5, 5, 4, 3, 1, 2]).forEach(item => console.log(item));
