var maxProfit = function (prices) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    prices.forEach(num => {
        if (num < min) {
            min = num
        } else if (num - min > max) {
            max = num - min
        }
    })
    return max
};