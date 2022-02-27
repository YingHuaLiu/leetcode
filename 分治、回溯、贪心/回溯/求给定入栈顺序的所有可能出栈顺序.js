function outputStack(nums) {
    let res = [];
    backTrack(nums, res, [], [], 0);
    return res;
}

function backTrack(nums, res, path, stack, start) {
    if (path.length === nums.length) {
        res.push(path.slice());
        return;
    }
    //优先选择入栈
    //nums里的元素还未全部入过栈
    if (start < nums.length) {
        stack.push(nums[start]); //准备回溯
        backTrack(nums, res, path, stack, start + 1);
        stack.pop(); //撤销回溯
    }
    //选择出栈
    //nums里的元素已全部入过栈,并且栈不为空
    if (stack.length) {
        let peek = stack.pop();
        path.push(peek) //准备回溯
        backTrack(nums, res, path, stack, start);
        path.pop(); //撤销回溯
        stack.push(peek);
    }
}

console.log(outputStack([1, 2, 3]));
