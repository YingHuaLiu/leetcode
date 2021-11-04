/**
 * 按条件合并相邻项
 * 说明：实现一个方法，可将数组中相邻的项按条件合并
 * 示例：
 *   adjoin([1, 2, 3, 4, 5], item => item !== 3); // [[1, 2], 3, [4, 5]]
 *   adjoin([1, 2, 3, 4], item => item < 3); // [[1, 2], 3, 4]
 */

function adjoin(arr, condition) {
    const result = [];
    let temp = [];
    arr.forEach((item, index) => {
        // 如果满足条件
        if (condition(item)) {
            temp.push(item);
            if (index + 1 === arr.length) {
                result.push(temp);
                // temp=[];
            }
        } else { // 如果不满足条件
            // 如果temp不为空，则需要把temp加入result
            if (temp.length) {
                result.push(temp);
                temp = [];
            }
            result.push(item);
        }
    });
    return result;
}

console.log(adjoin([1, 2, 3, 4, 5], item => item !== 3));
console.log(adjoin([1, 2, 3, 4], item => item < 3));