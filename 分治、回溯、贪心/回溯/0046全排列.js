const permute1 = (nums) => {
    let res = [], path = [];
    let visited = new Array(nums.length).fill(false);
    dfs(nums, path, visited, res);
    return res;
};
const dfs = (nums, path, visited, res) => {
    if (path.length === nums.length) {
        res.push(path.slice());
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (visited[i]) {
            continue;
        }
        path.push(nums[i]);
        visited[i] = true;
        dfs(nums, path, visited, res);
        visited[i] = false;
        path.pop();
    }
};

const permute2 = (nums) => {
    let res = [];
    backTrack(nums, 0, res);
    return res;
};
const backTrack = (nums, first, res) => {
    if (first === nums.length) {
        res.push([...nums]); // 一定要深拷贝
        return;
    }
    for (let i = first; i < nums.length; i++) {
        [nums[first], nums[i]] = [nums[i], nums[first]]; //做决策
        backTrack(nums, first + 1, res);
        [nums[first], nums[i]] = [nums[i], nums[first]]; //撤销决策
    }
};
console.log(permute1([1, 2, 1]));
