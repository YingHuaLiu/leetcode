var combine = function (n, k) {
    let res = [], temp = [];
    backTrack(n, temp, res, k, 1)
    return res;
};
const backTrack = (n, temp, res, k, left) => {
    if (temp.length === k) {
        res.push(temp.slice());
        return;
    }
    // 优化点：i的范围要小于n-k+1+已收录的temp长度
    for (let i = left; i <= n - (k - temp.length) + 1; i++) {
        temp.push(i);
        backTrack(n, temp, res, k, i + 1);
        temp.pop();
    }
}
console.log(combine(5, 4));
