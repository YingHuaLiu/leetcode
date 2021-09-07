//https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zhong-xin-kuo-san-fa-he-dong-tai-gui-hua-by-reedfa/
// 中心扩散法，从每一个点作为中心点开始，分别向左、向右、同时向左向右扩散
function longestPalindrome(s) {
    const length = s.length
    if (!s || !length) {
        return s
    }
    let left = 0, right = 0, maxStart = 0, maxLen = 0, len
    for (let i = 0; i < length; i++) {
        len = 1
        left = i - 1
        right = i + 1
        while (left >= 0 && s[i] === s[left]) {
            len++
            left--
        }
        while (right < length && s[i] === s[right]) {
            len++
            right++
        }
        while (left >= 0 && right < length && s[left] === s[right]) {
            len += 2
            left--
            right++
        }
        if (len > maxLen) {
            maxStart = left
            maxLen = len
        }
    }
    return s.slice(maxStart + 1, maxStart + 1 + maxLen)
}

// 动态规划
function longestPalindrome(s) {
    const length = s.length
    if (!s || !length) {
        return s
    }
    let maxStart = 0, maxLen = 1
    const dp = new Array(length).fill(0).map(item => new Array(length).fill(false))
    for (let i = 0; i < length; i++) {
        dp[i][i] = true
    }
    for (let r = 1; r < length; r++) {
        for (let l = 0; l < r; l++) {
            if (s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
                dp[l][r] = true
                if (r - l + 1 > maxLen) {
                    maxLen = r - l + 1
                    maxStart = l
                }
            }
        }
    }
    return s.slice(maxStart, maxStart + maxLen)
}

console.log(longestPalindrome('ccabac'));