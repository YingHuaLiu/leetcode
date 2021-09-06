var reverse = function (x) {
    let result = 0;

    while (x) {
        let pop = x % 10
        if (result > 214748364 || (result === 214748364 && pop > 7)) {
            return 0
        }
        if (result < -214748364 || (result === -214748364 && pop < -8)) {
            return 0
        }
        result = result * 10 + pop
        x = parseInt(x / 10)
    }
    return result
};