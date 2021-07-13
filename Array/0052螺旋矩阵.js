let spiralOrder = (matrix) => {
    const result = []
    if (!matrix || !matrix.length || !matrix[0].length) {
        return result
    }
    let left = 0, top = 0, right = matrix[0].length - 1, bottom = matrix.length - 1
    let num = matrix[0].length * matrix.length
    while (num > 0) { // num>0是为了约束长方形
        for (let column = left; column <= right && num > 0; column++) {
            result.push(matrix[top][column])
            num--
        }
        top++
        for (let row = top; row <= bottom && num > 0; row++) {
            result.push(matrix[row][right])
            num--
        }
        right--
        for (let column = right; column >= left && num > 0; column--) {
            result.push(matrix[bottom][column])
            num--
        }
        bottom--
        for (let row = bottom; row >= top && num > 0; row--) {
            result.push(matrix[row][left])
            num--
        }
        left++
    }
    return result
}
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))