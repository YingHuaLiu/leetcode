function ipToInt(ip) {
    let ipArray = ip.split('.');
    let result = 0;
    for (let i = 0; i < ipArray.length; i++) {
        // 将每段的 int 值左移到恰当的位置后跟保存结果的 int 值进行或运算
        result = result | (parseInt(ipArray[i]) << (8 * i));
    }
    return result;
}

function intToip(int) {
    const result = [];
    for (let i = 0; i < 4; i++) {
        // 每 8 位为一段，这里取当前要处理的最高位的位置
        let pos = i * 8;
        // 取当前处理的 ip 段的值
        let temp = int & (255 << pos);
        // 将当前 ip 段转换为 0 ~ 255 的数字，注意这里必须使用无符号右移
        result[i] = temp >>> pos;
    }
    return result.join('.');
}

let test1 = ipToInt('8.8.8.255');
let test2 = test1.toString(2);
let test3 = intToip(test1);
console.log(test1);
console.log(test2);
console.log(test3);

