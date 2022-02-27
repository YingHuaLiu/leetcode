function isValidSudoku(board) {
  let rows = new Array(9).fill(0).map(() => new Array(9).fill(false));
  let cols = new Array(9).fill(0).map(() => new Array(9).fill(false));
  // 划分的9个数独box
  let box = new Array(9).fill(0).map(() => new Array(9).fill(false));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if(board[i][j] === '.') {
        continue;
      }
      let val = board[i][j];
      if(rows[i][val - 1]) {
        return false;
      }
      if(cols[j][val - 1]) {
        return false;
      }
      if(box[Math.floor(j / 3) + Math.floor(i / 3) * 3][val - 1]) {
        return false;
      }
      rows[i][val - 1] = true;
      cols[j][val - 1] = true;
      box[Math.floor(j / 3) + Math.floor(i / 3) * 3][val - 1] = true;
    }
  }
  return true;
}
