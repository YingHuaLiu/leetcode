/**
 * 未解决循环引用版本
 */
function deepCopy(object) {
  // 返回 null 和 常量
  if (!object || typeof object !== 'object') {
    return
  }

  let newObject = Array.isArray(object) ? [] : {}

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = typeof object[key] === 'object'
        ? deepCopy(object[key]) // 可能是null、数组、对象
        : object[key]
    }
  }

  return newObject
}

/**
 * 解决循环引用版本
 */
function deepCopy(object, map = new Map()) {
  if (!object || typeof object !== 'object') {
    return
  }

  let newObject = Array.isArray(object) ? [] : {}
  if (map.get(object)) {
    return object
  }
  map.set(object, newObject)
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = typeof object[key] === 'object'
        ? deepCopy(object[key], map)
        : object[key]
    }
  }

  return newObject
}

let obj = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  }
}
obj.obj = obj
console.log(obj)
let deepCloneObj = deepCopy(obj)
obj.field3.father = 'father'
console.log(deepCloneObj)