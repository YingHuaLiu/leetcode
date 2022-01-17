const combinationSum = function (candidates, target) {
    // 排序是剪枝的前提
    candidates.sort((a, b) => a - b);
    const res = [], temp = [];
    backTrack(candidates, res, temp, target, 0);
    return res;
};

const backTrack = function (candidates, res, temp, target, left) {
    if (target === 0) {
        res.push([...temp])
        return;
    }
    for (let i = left; i < candidates.length; i++) {
        if (target < candidates[i]) {
            return;
        }
        // 扩展：如果candidates有重复元素，那么就需要去重，
        // if (i > left && candidates[i] === candidates[i - 1]) {
        //     continue;
        // }
        temp.push(candidates[i]);
        backTrack(candidates, res, temp, target - candidates[i], i);
        temp.pop();
    }
}
console.log(combinationSum([2, 3, 3, 5], 8));
