var restoreIpAddresses = function (s) {
    if (s.length < 4 || s.length > 12) {
        return [];
    }
    let res = []
    backTrack(s, res, [], 0)
    return res;
};

function backTrack(s, res, path, left) {
    // 整个字符串扫描完毕
    if (left === s.length) {
        // 并且ip地址已经满足4段，如1.1.1.1
        if (path.length === 4) {
            res.push(path.join('.'));
        }
        return;
    }
    // left表示当前ip段的起始位置，i表示当前ip段的可能末尾位置
    // i只能判断[left,left+3）的字符串，多了就不符合ip地址格式了
    for (let i = left; i < s.length && i < left + 3; i++) {
        // 剩余的ip段数乘以3，如果小于还没划分的s的长度，那么则一定不可能符合ip格式要求，需要继续加位
        // 例如，s:'123123123',path:'1.2',i:2,那么剩下'3123123'不可能分给ip地址后面两段（每段最多3位）
        if ((4 - path.length) * 3 < s.length - i) {
            continue;
        }
        // 判断[left,i]是否能构成合法ip地址段
        if (judgeIpCorrect(s, left, i)) {
            path.push(s.slice(left, i + 1))
            backTrack(s, res, path, i + 1)
            path.pop()
        }
    }
}

function judgeIpCorrect(s, left, right) {
    const length = right - left + 1;
    // '012'这种不能当做ip地址段
    if (length > 1 && s[left] === '0') {
        return false;
    }
    const value = s.slice(left, right + 1) - 0;
    return value >= 0 && value <= 255;
}

console.log(restoreIpAddresses('123123123'));
