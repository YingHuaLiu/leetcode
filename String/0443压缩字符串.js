var compress = function (chars) {
  let write = 0;
  for (let read = 0; read < chars.length;) {
    let temp = read;
    while (temp < chars.length && chars[read] === chars[temp]) {
      temp++;
    }
    chars[write++] = chars[read];
    if(temp - read > 1) {
      //   let gap = temp - read + '';
      //   for (let k = 0; k < gap.length; k++) {
      //     chars[write++] = gap[k];
      //   }
      let gap = temp - read, start = write, end = start;
      while (gap !== 0) {
        chars[end++] = gap % 10 + '';
        gap = Math.floor(gap / 10);
      }
      reverse(chars, start, end - 1);
      write = end;
    }
    read = temp;
  }
  return write;
};

function reverse(chars, start, end) {
  while (start < end) {
    let t = chars[start];
    chars[start] = chars[end];
    chars[end] = t;
    start++;
    end--;
  }
}

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
