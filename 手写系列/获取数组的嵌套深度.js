/**
 * 获取嵌套数组的深度，给定一个带嵌套的数组，实现一个方法可获取嵌套数组的最大深度，数组无嵌套子数组则返回0，有一层嵌套子数组则返回1，以此类推。

 示例：

 getArrayDeep([1,2,[3,[1,[0]]]]); 返回3
 getArrayDeep([]); 返回0
 getArrayDeep([[[[]]]]) 返回3
 getArrayDeep([0,[2],[2,[3]]]); 返回2
 */

function recursiveMax(input, cur = 0) {
    let max = cur;
    for (let i = 0; i < input.length; i++) {
        if (input[i] instanceof Array) {
            max = cur + 1;
            max = Math.max(max, recursiveMax(input[i], max));
        }
    }
    return max;
}

console.log(recursiveMax([]));
console.log(recursiveMax([1]));
console.log(recursiveMax([1, [2]]));
console.log(recursiveMax([1, [2], [3, [4]]]));
console.log(recursiveMax([[[[]]]]));