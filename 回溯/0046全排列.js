const permute = (nums) => {
  const length = nums.length
  // 使用一个动态数组保存所有可能的全排列
  if (length === 0) {
    return []
  }
  let res = [], path = []
  let used = new Array(length).fill(false)

  dfs(nums, length, 0, path, used, res)
  return res
}

const dfs = (nums, length, depth, path, used, res) => {
  if (depth === length) {
    res.push(JSON.parse(JSON.stringify(path)))
    return
  }

  for (let i = 0; i < length; i++) {
    if (!used[i]) {
      path.push(nums[i])
      used[i] = true

      console.log('  递归之前 => ' + path)
      dfs(nums, length, depth + 1, path, used, res)

      used[i] = false
      path.pop()
      console.log('递归之后 => ' + path)
    }
  }
}

console.log(permute([1, 2, 3, 4]))