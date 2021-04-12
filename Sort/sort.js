function chooseSort(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        let minindex = minIndex(numbers.slice(i)) + i;
        let temp = numbers[minindex];
        numbers[minindex] = numbers[i];
        numbers[i] = temp;
    }
    return numbers;
}

function minIndex(numbers) {
    let index = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[index]) {
            index = i;
        }
    }
    return index;
}
