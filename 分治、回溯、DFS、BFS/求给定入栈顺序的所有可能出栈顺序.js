function outputStack(nums) {
    let res = [];
    backTrack(nums, res, [], [], 0);
    return res;
}

function backTrack(nums, res, path, stack, left) {
    //如果入栈完毕了，且栈也空了，就输出先前的出栈顺序path
    if (left === nums.length && !stack.length) {
        res.push(path.slice());
        return;
    }
    //优先选择入栈
    //nums里的元素还未全部入过栈
    if (left < nums.length) {
        stack.push(nums[left]); //准备回溯
        backTrack(nums, res, path, stack, left + 1);
        stack.pop(); //撤销回溯
    }
    //选择出栈
    //nums里的元素已全部入过栈,并且栈不为空
    if (stack.length) {
        let peek = stack.pop();
        path.push(peek) //准备回溯
        backTrack(nums, res, path, stack, left);
        path.pop(); //撤销回溯
        stack.push(peek);
    }
}

console.log(outputStack([1, 2, 3]));
