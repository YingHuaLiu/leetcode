function mySqrt(x) {
    let l = 0, r = x;
    while (l < r) {
        let mid = l + r + 1 >> 1;
        // 防止mid*mid溢出
        if (mid <= x / mid) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }
    return r;
}