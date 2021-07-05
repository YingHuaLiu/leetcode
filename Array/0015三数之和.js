const threeSum = (nums) => {
  const length = nums.length
  // 如果nums不是数组或者nums长度小于3个，直接返回
  if (!Array.isArray(nums) || length < 3) {
    return []
  }
  let result = []
  // 定义左指针和右指针
  let left, right
  // 按从小到大排序
  nums.sort((a, b) => a - b)

  for (let i = 0; i < length; i++) {
    // 因为已经排过序，如果nums[i]大于0，那么nums[left]、nums[right]也大于0，后面就不用比较了
    if (nums[i] > 0) {
      return result
    }
    // 首先排除i=0的情况
    // 当i>=1时，如果当前nums[i]和nums[i-1]相同，则跳过，避免重复解
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    // left从i+1下标开始
    left = i + 1
    // right从最后一个下标开始
    right = length - 1
    // 当left和right没有碰撞时
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        // 如果和大于0，那么说明nums[right]大了，因为数组是排序的，left只能往右跑，所以只能调动right指针往左跑
        right--
      } else if (sum < 0) {
        // 如果和小于0，那么说明nums[left]小了，因为数组是排序的，right只能往左跑，所以只能调动left指针往右跑
        left++
      } else {
        // sum===0
        result.push([nums[i], nums[left], nums[right]])
        // 跳过重复的nums[left]
        while (nums[left] === nums[left + 1]) {
          left++
        }
        // 跳过重复的nums[right]
        while (nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      }
    }
  }
  return result
}