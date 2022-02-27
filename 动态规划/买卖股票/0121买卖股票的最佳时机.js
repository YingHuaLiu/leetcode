var maxProfit = function (prices) {
    let min = Number.MAX_SAFE_INTEGER;
    let res = 0;
    prices.forEach(num => {
        if (num < min) {
            min = num
        } else if (num - min > res) {
            res = num - min
        }
    })
    return res
};
