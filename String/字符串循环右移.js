function moveRight(str, k) {
  return str.slice(str.length - k % str.length, str.length)
    + str.slice(0, str.length - k % str.length);
}

console.log(moveRight('abcde', 7));
