function mySqrt(x) {
    let l = 0, r = x;
    while (l < r) {
        let mid = l + r + 1 >> 1;
        // 防止mid*mid溢出
        if (mid > x / mid) {
            r = mid - 1;
        } else {
            l = mid;
        }
    }
    return r;
}