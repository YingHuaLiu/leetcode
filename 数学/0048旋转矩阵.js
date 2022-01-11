// https://leetcode-cn.com/problems/rotate-image/solution/xuan-zhuan-tu-xiang-by-leetcode-solution-vu3m/
// 1. 原地旋转：核心公式：oldPosition[row][col] = newPosition[col][length-row-1]
function rotate(matrix) {
    let n = matrix.length;
    // 行
    for (let i = 0; i < n >> 1; ++i) {
        // 列
        for (let j = 0; j < (n + 1) >> 1; ++j) {
            // temp保存左上角那个节点值
            let temp = matrix[i][j];
            // 将左下角节点赋值给左上角
            matrix[i][j] = matrix[n - j - 1][i];
            // 将右下角节点赋值给左下角
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
            // 将右上角节点赋值给右下角
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
            // 将temp赋值给右上角
            matrix[j][n - i - 1] = temp;
        }
    }
}

// 2.翻转代替旋转
function rotate(matrix) {
    let n = matrix.length;
    // 沿着中水平线翻转
    for (let i = 0; i < n >> 1; i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]]
        }
    }
    // 沿着主对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
}
