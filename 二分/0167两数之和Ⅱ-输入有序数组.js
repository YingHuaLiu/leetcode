/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= target) {
            let index = find(numbers, target - numbers[i], i);
            if (numbers[i] + numbers[index] === target) {
                return [i + 1, index + 1];
            }
        }
    }
};

function find(nums, target, left) {
    let right = nums.length - 1;
    while (left < right) {
        let mid = left + right >> 1;
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

console.log(twoSum([2, 7, 11, 15], 9));