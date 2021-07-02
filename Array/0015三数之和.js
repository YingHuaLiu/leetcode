const threeSum = (nums) => {
  const length = nums.length
  if (!Array.isArray(nums) || length < 3) {
    return []
  }
  let result = []
  nums.sort((a, b) => a - b)
  let left, right

  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) {
      return result
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    left = i + 1
    right = length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        result.push([nums[i], nums[left], nums[right]])
        while (nums[left] === nums[left + 1]) {
          left++
        }
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