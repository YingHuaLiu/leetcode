// 交换法，优点：不需要排序，使用set记录访问过的值
const permute1 = nums => {
    let res = [];
    backTrack1(nums, 0, res);
    return res;
};
const backTrack1 = (nums, first, res) => {
    if (first === nums.length) {
        res.push([...nums]); // 一定要深拷贝
        return;
    }
    let set = new Set();
    //对下标在[first,length-1]的子数组进行全排列
    for (let i = first; i < nums.length; i++) {
        // 在[first,length-1]中，nums[i]与之前值相同，那么就不需要把nums[i]与nums[first]交换
        if (set.has(nums[i])) {
            continue;
        }
        set.add(nums[i]);
        [nums[first], nums[i]] = [nums[i], nums[first]]; //做决策
        backTrack1(nums, first + 1, res);
        [nums[first], nums[i]] = [nums[i], nums[first]]; //撤销决策
    }
};

// 递增法，缺点：需要排序
const permute2 = nums => {
    nums.sort((a, b) => a - b);
    let res = [], path = [];
    // vis[i]可以代表三种状态，1.路径中还未被访问（false）；2.当前路径中被访问过（true）；3.之前被访问过（false）
    let visited = new Array(nums.length).fill(false);
    backTrack2(nums, path, res, visited);
    return res;
};
const backTrack2 = (nums, path, res, visited) => {
    if (path.length === nums.length) {
        res.push([...path]); // 一定要深拷贝
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        // nums[i-1] 和 nums[i] 是相同一层的相邻的两个元素,
        // 若 nums[i-1]==nums[i],则相邻的两个元素相同,
        // !visited[i-1]表示前一个元素已经构成了递归树访问过了,所以后一个相同需要减枝。
        if (visited[i] || i > 0 && nums[i - 1] === nums[i] && !visited[i - 1]) {
            continue;
        }
        path.push(nums[i]);
        visited[i] = true;
        backTrack2(nums, path, res, visited);
        path.pop();
        visited[i] = false;
    }
};
console.log(permute2([1,2,3]));
