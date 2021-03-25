function quickSort(nums) {
    help(nums, 0, nums.length - 1);
    return nums;
}

function help(nums, left, right) {
    if (left >= right) {
        return;
    }
    swap(nums, left, Math.floor((left + right) / 2));
    //每次取数组的最左边的值为基准值
    let pivot = nums[left];
    let l = left;
    let r = right;

    while (l < r) {
        while (l < r && nums[r] >= pivot) {
            r--;
        }
        while (l < r && nums[l] <= pivot) {
            l++;
        }
        swap(nums, l, r);
    }
    nums[left] = nums[l];
    nums[l] = pivot;
    help(nums, left, r - 1);
    help(nums, r + 1, right);
}

function swap(nums, index1, index2) {
    let temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}

let nums = [3, 2, 1, 5, 0];
quickSort(nums).forEach(element => {
    console.log(element);
});