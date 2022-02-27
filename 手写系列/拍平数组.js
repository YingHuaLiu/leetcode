/**
 * 使用forEach
 */
function flat(arr) {
  let res = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      res.push(...arguments.callee(item))
    } else {
      res.push(item)
    }
  })
  return res
}

/**
 * 使用reduce简化
 */
function flat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
  }, [])
}

/**
 * num: 控制拍平的层数
 */
function flat(arr, num = 1) {
  return num > 0
    ? arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? flat(cur, num - 1) : cur)
    }, [])
    : arr.slice()
}

/**
 * 在原型链上重写 flat 函数
 */
Array.prototype.fakeFlat = function (num = 1) {
  let arr = [].concat(this)
  return num > 0
    ? arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? cur.fakeFlat() : cur)
    }, [])
    : arr
}

const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], , , , 5, 'string', { name: '弹铁蛋同学' }]
console.log(arr.fakeFlat(Infinity))
