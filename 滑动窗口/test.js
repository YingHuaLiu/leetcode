function lengthOfLongestSubstring(str) {
    if (str.length === 0) {
        return 0;
    }
    let map = new Map();
    let set = new Set();
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
function lengthOfLongestSubstring2(str) {
    let map = new Map();
    let mapProxy = new Proxy(map, {
        get: function (target, key) {
            return target.has(key) ? target.get(key) : 0;
        }
    });
    let left = 0;
    let right = 0;
    let max = 0;
    while (right < str.length) {
        let a = str[right];
        right++;
        map.set(a, mapProxy[a] + 1);
        while (mapProxy[a] > 2) {
            let key = str[left];
            left++;
            map.set(key, mapProxy[key] - 1);
        }
        max = Math.max(max, right - left);
    }
    return max;
}

console.log(lengthOfLongestSubstring2('abcabc'))