// 注意：矩阵可能是个长方形
var transpose = function (matrix) {
  let res = new Array(matrix[0].length).fill(0).map(() => []);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      res[j][i] = matrix[i][j];
    }
  }
  return res;
};

console.log(transpose([[1, 2, 3], [4, 5, 6]]));
