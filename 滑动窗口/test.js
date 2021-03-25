function lengthOfLongestSubstring(str) {
    if (str.length === 0) {
        return 0;
    }
    let map = new Map();
    let left = 0;
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i]) && map.get(str[i]) > left) {
            left = map.get(str[i]);
        }
        max = Math.max(max, i - left + 1);
        map.set(str[i], i + 1);
    }
    return max;
}

console.log(lengthOfLongestSubstring('abba'));