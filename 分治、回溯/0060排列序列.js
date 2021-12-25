const getPermutation = function (n, k) {
    let path = [], visited = new Array(n + 1).fill(false);
    let factorial = calculateFactorial(n);
    backTrack(n, k, factorial, path, visited);
    return path.join('');
};
const backTrack = (n, k, factorial, path, visited) => {
    if (path.length === n) {
        return;
    }
    // 计算还未确定的数字的全排列的个数，第 1 次进入的时候是 n - 1
    let cnt = factorial[n - 1 - path.length];
    for (let i = 1; i <= n; i++) {
        if (visited[i]) {
            continue;
        }
        if (cnt < k) {
            k -= cnt;
            continue;
        }
        path.push(i);
        visited[i] = true;
        backTrack(n, k, factorial, path, visited);
        // 注意 1：不可以回溯（重置变量），算法设计是「一下子来到叶子结点」，没有回头的过程
        // 注意 2：这里要加 return，后面的数没有必要遍历去尝试了
        return;
    }
}
// 计算阶乘，返回[0!,1!,2!,3!,4!,...]
const calculateFactorial = n => {
    let factorial = [];
    factorial[0] = 1;
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }
    return factorial;
}
console.log(getPermutation(3, 3));
