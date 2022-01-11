function convertToTitle(cn) {
  let result = [];
  while (cn > 0) {
    cn--;
    result.unshift(String.fromCharCode(cn % 26 + 'A'.charCodeAt(0)));
    cn = Math.floor(cn / 26);
  }
  return result.join('');
}
