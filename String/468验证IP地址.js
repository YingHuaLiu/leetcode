function validIPAddress(ip) {
  if(checkIpv4(ip)) {
    return 'IPv4';
  }
  if(checkIpv6(ip)) {
    return 'IPv6';
  }
  return 'Neither';
}

function checkIpv4(ip) {
  let array = ip.split('.');
  if(array.length !== 4) {
    return false;
  }
  for (let s of array) {
    // 判断是否有前导0或者为空
    if(!s.length || s.length > 1 && s[0] === '0') {
      return false;
    }
    // 判断是否有不是数字的字符
    for (let char of s) {
      let charCode = char.charCodeAt();
      if(!(charCode >= '0'.charCodeAt() && charCode <= '9'.charCodeAt())) {
        return false;
      }
    }
    // 判断地址是否在0~255
    if(Number(s) < 0 || Number(s) > 255) {
      return false;
    }
  }
  return true;
}

function checkIpv6(ip) {
  let array = ip.split(':');
  if(array.length !== 8) {
    return false;
  }
  for (let s of array) {
    if(s.length < 1 || s.length > 4) {
      return false;
    }
    for (let char of s) {
      let charCode = char.charCodeAt();
      if(!(charCode >= '0'.charCodeAt() && charCode <= '9'.charCodeAt() ||
        charCode >= 'a'.charCodeAt() && charCode <= 'f'.charCodeAt() ||
        charCode >= 'A'.charCodeAt() && charCode <= 'F'.charCodeAt())) {
        return false;
      }
    }
  }
  return true;
}

console.log(checkIpv6('2001:0db8:85a3:0:0:8A2E:0370:7334'));
