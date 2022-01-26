var findNumberIn2DArray = function (matrix, target) {
  if(!matrix.length || !matrix[0].length) {
    return false;
  }
  let m = 0, n = matrix[0].length - 1;
  while (n >= 0 && m < matrix.length) {
    if(matrix[m][n] === target) {
      return true;
    } else if(matrix[m][n] < target) {
      m++;
    } else {
      n--;
    }
  }
  return false;
};
