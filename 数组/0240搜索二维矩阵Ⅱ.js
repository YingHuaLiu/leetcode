function searchMatrix(matrix, target) {
  let m = matrix.length, n = matrix[0].length;
  let x = 0, y = n - 1;
  while (x < m && y >= 0) {
    let value = matrix[x][y];
    if(value === target) {
      return true;
    }
    if(value < target) {
      x++;
    }
    if(value > target) {
      y--;
    }
  }
  return false;
}
