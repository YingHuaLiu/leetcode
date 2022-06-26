var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    let res = [], temp = [];
    backTrack(candidates, temp, res, target, 0)
    return res;
};

const backTrack = function (candidates, temp, res, target, left) {
    if (target === 0) {
        res.push(temp.slice())
        return;
    }
    for (let i = left; i < candidates.length; i++) {
        if (target < candidates[i]) {
            return;
        }
        if (i > left && candidates[i] === candidates[i - 1]) {
            continue;
        }
        temp.push(candidates[i])
        backTrack(candidates, temp, res, target-candidates[i], i + 1)
        temp.pop();
    }
};
