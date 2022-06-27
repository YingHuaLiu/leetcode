// 核心：每个元素在子数组中当过几次最小值，只要计算（index-左边界index）*（右边界index-index）
function sumSubarrayMins(arr) {
  const length = arr.length;
  if(!length) {
    return 0;
  }
  let left = [], right = [], stack = [];
  // 先从左到右，筛选出每个元素辐射的左边界
  for (let i = 0; i < length; i++) {
    // 将大于当前元素的弹出
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    // 如果stack为空，说明当前元素的左边都大于等于当前元素
    if(!stack.length) {
      left[i] = -1;
    } else {
      left[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  stack = [];
  // 从右到左，筛选出每个元素辐射的右边界
  for (let i = length - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if(!stack.length) {
      right[i] = length;
    } else {
      right[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  let res = 0;
  for (let i = 0; i < length; i++) {
    res = (res + arr[i] * (i - left[i]) * (right[i] - i)) % 1000000007;
  }
  return res;
}


// 优化：原先需要遍历三次获得左边界、右边界、结果值，优化后只需要遍历一次
function sumSubarrayMins(arr) {
  if(!arr.length) {
    return 0;
  }
  let stack = [];
  let res = 0;
  for (let i = -1; i <= arr.length; i++) {
    // 向左寻找第一个小于等于arr[i]的元素
    while (stack.length && getElement(arr, stack[stack.length - 1]) > getElement(arr, i)) {
      // 此时栈顶元素比arr[i]大，那么i正好是栈顶元素的右边界，栈顶元素的左边正好是左边界
      let peek = stack.pop();
      res = (res + arr[peek] * (i - peek) * (peek - stack[stack.length - 1])) % 1000000007;
    }
    stack.push(i);
  }
  return res;
}

// 重写了获取arr元素的方法
function getElement(arr, index) {
  if(index === -1 || index === arr.length) {
    return -Infinity;
  }
  return arr[index];
}

console.log(sumSubarrayMins([3, 1, 2, 4, 1]));
