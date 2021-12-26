/**
 * 找出数组中第k大和第m大的数字相加之和
 * 说明：实现一个方法，找出数组中第k大的和第m大的数字相加之和
 * 示例：
 *   let arr = [1,2,4,4,3,5], k = 2, m = 4
 *   findTopSum(arr, k, m); // 第2大的数是4，出现2次，第4大的是2，出现1次，所以结果为10
 */

function findTopSum(arr,k,m){
    // 转成不重复的集合
    const set = Array.from(new Set(arr));
    // 如果k m都大于set的长度，则不存在
    if (m > set.length || k > set.length) {
        return;
    }
    // 从小到大排序
    set.sort((a, b) => a - b);
    // 获取第k大、第m大的值
    const kMax = set[set.length - k],mMax = set[set.length - m];
    let res = 0;
    arr.forEach(item => {
        if (item === kMax || item === mMax) {
            res += item;
        }
    });
    return res;
}

console.log(findTopSum([1, 2, 4, 4, 3, 5], 2, 4));