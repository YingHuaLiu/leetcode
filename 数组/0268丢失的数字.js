var missingNumber = function (nums) {
  let map = new Map()
  nums.forEach(item => map.set(item, item));
  for (let i = 0; i <= nums.length; i++) {
    if(!map.has(i)) {
      return i
    }
  }
}

console.log(missingNumber([3, 0, 1]))
