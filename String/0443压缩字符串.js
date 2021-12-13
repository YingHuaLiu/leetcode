var compress = function (chars) {
  // 读写指针
  let write = 0, read = 0;
  while (read < chars.length) {
    let temp = read;
    while (temp < chars.length && chars[temp] === chars[read]) {
      temp++;
    }
    chars[write++] = chars[read];
    if(temp - read > 1) {
      let gap = temp - read, start = write;
      while (gap !== 0) {
        chars[write++] = gap % 10 + '';
        gap = Math.floor(gap / 10);
      }
      reverse(chars, start, write - 1);
    }
    read = temp;
  }
  return write;
};

function reverse(chars, start, end) {
  while (start < end) {
    [chars[start],chars[end]]=[chars[end],chars[start]]
    start++;
    end--;
  }
}

console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));
